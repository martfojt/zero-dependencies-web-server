import { createServer } from 'node:http';

const PORT = process.env.PORT || 8080;

const server = createServer();

server.on('request', (request, response) => {
  response.end('Hello, world!');
});

server.listen(PORT, () => {
  console.log(`starting server at port ${PORT}`);
});
