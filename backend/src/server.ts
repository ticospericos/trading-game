import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware example
app.use(express.json());

// Handle websocket connection
wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        // handle incoming messages
    });
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Server listening
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});