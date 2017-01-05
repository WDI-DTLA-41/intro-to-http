var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

// if a CLIENT requests '/' send back the index.html file's contents
// otherwise send back 404 page not found
var server = http.createServer(function(request, response) {
  console.log('Incoming ' + request.method + 'request' + request.url);
  response.setHeader('Content-Type', 'text/html');
  if (request.url === '/') {
    fs.readFile('./index.html', 'utf-8', function(err, data) {
      if (err) throw err;
      response.statusCode = 200;
      response.write(data)
      response.end();
    })
  } else {
    response.statusCode = 404;
    response.write('Not Found!');
    response.end();
  }
});

server.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});
