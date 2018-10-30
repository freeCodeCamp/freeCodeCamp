var http = require('http'),
    https = require('https'),
    url = require('url');
    
var port = 1234,
    log  = true,
    request_auth = false;

http.createServer(function(request, response) {

  console.log(request.headers);
  console.log("Got request: " + request.url);
  console.log("Forwarding request to " + request.headers['host']);

  if (request_auth) {
      if (!request.headers['proxy-authorization']) {
        response.writeHead(407, {'Proxy-Authenticate': 'Basic realm="proxy.com"'})
        return response.end('Hello.');        
      }
  }

  var remote = url.parse(request.url);
  var protocol = remote.protocol == 'https:' ? https : http;

  var opts = {
    host: request.headers['host'],
    port: remote.port || (remote.protocol == 'https:' ? 443 : 80),
    method: request.method,
    path: remote.pathname,
    headers: request.headers
  }

  var proxy_request = protocol.request(opts, function(proxy_response){

    proxy_response.on('data', function(chunk) {
      if (log) console.log(chunk.toString());
      response.write(chunk, 'binary');
    });
    proxy_response.on('end', function() {
      response.end();
    });

    response.writeHead(proxy_response.statusCode, proxy_response.headers);
  });

  request.on('data', function(chunk) {
    if (log) console.log(chunk.toString());
    proxy_request.write(chunk, 'binary');
  });

  request.on('end', function() {
    proxy_request.end();
  });

}).listen(port);

process.on('uncaughtException', function(err){
  console.log('Uncaught exception!');
  console.log(err);
});

console.log("Proxy server listening on port " + port);
