const http = require('http');

const reqHandler = (req, res) => {
  // this will everything inside req
  // console.log(req); 

  console.dir(req, {depth:0})

  // req res are streams
  res.write('Hello World Murugaa !!\n');
  res.end();
};

const server = http.createServer(); // this is an event emitter object
server.on("request", reqHandler);

server.listen(4242, () => {
  console.log('Server is running...');
});


/*
Install nodemon to restart server automatically on code change
*/
