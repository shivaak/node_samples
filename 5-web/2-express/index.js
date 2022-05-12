const express = require('express');

const server = express();

server.listen(4242, () => {
  console.log('Express Server is running...');
});

// unlike http, in express we create req handler per url

server.get('/', (req,resp) => {
  resp.send("Murugaa"); // we can send anything even objs
});


server.get('/page', (req,resp) => {
  resp.send("Murugaa page"); // we can send anything even objs
});