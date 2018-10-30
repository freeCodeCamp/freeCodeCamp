# node-http-signature

node-http-signature is a node.js library that has client and server components
for Joyent's [HTTP Signature Scheme](http_signing.md).

## Usage

Note the example below signs a request with the same key/cert used to start an
HTTP server. This is almost certainly not what you actually want, but is just
used to illustrate the API calls; you will need to provide your own key
management in addition to this library.

### Client

```js
var fs = require('fs');
var https = require('https');
var httpSignature = require('http-signature');

var key = fs.readFileSync('./key.pem', 'ascii');

var options = {
  host: 'localhost',
  port: 8443,
  path: '/',
  method: 'GET',
  headers: {}
};

// Adds a 'Date' header in, signs it, and adds the
// 'Authorization' header in.
var req = https.request(options, function(res) {
  console.log(res.statusCode);
});


httpSignature.sign(req, {
  key: key,
  keyId: './cert.pem'
});

req.end();
```

### Server

```js
var fs = require('fs');
var https = require('https');
var httpSignature = require('http-signature');

var options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};

https.createServer(options, function (req, res) {
  var rc = 200;
  var parsed = httpSignature.parseRequest(req);
  var pub = fs.readFileSync(parsed.keyId, 'ascii');
  if (!httpSignature.verifySignature(parsed, pub))
    rc = 401;

  res.writeHead(rc);
  res.end();
}).listen(8443);
```

## Installation

    npm install http-signature

## License

MIT.

## Bugs

See <https://github.com/joyent/node-http-signature/issues>.
