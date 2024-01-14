import fs from 'node:fs';
import { createServer } from 'node:http';

// Set the server port from environment variable or default to 8080
const PORT = process.env.PORT || 8080;

// Create a new HTTP server
const server = createServer();

// Send a simple 'Hello, world!' response
server.on('request', (request, response) => {
  response.end('Hello, world!');
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`starting server at port ${PORT}`);
});

createServer((request, response) => {
  response.write('Hello');
  response.write(', ');
  response.write('World!');
  response.end();
}).listen(8080);

createServer((request, response) => {
  createReadStream(__filename).pipe(response);
}).listen(8080);
