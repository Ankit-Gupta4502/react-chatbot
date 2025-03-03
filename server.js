import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
app.use("/static", express.static(`${__dirname}/dist`));


app.get('/', (req, res) => {
    const assetsDir = path.join(__dirname, 'dist');
    const indexFile = "react-chatbot.js"
    const cssFile = "react-chatbot.css"
    
    if (!indexFile) {
        return res.status(404).send('Index file not found');
    }

    const originalJs = fs.readFileSync(path.join(assetsDir, indexFile), 'utf8');
    const modifiedJs = `
        window.addEventListener('load', function() {
            // Add CSS
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = '${req.protocol}://${req.get('host')}/static/${cssFile}';
            document.head.appendChild(link);
        });
        ${originalJs}
    `;

    res.setHeader('Content-Type', 'application/javascript');
    return res.send(modifiedJs);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});