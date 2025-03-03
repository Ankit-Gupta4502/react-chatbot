# Use Node.js as the base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install bun globally
RUN npm install -g bun

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Build the application
RUN bun run build

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["bun", "run", "start"]