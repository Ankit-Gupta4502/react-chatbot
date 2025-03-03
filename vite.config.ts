import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  },

  build: {
    lib: {
      entry: 'src/main.jsx',
      name: 'ReactChatbot',
      fileName: 'react-chatbot'
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
  
})
