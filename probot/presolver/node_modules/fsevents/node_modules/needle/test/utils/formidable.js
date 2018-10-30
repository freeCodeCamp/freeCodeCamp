var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

var port = process.argv[2] || 8888;

http.createServer(function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    console.log(util.inspect({fields: fields, files: files}))
    res.end(util.inspect({fields: fields, files: files}));
  });
}).listen(port);

console.log('HTTP server listening on port ' + port);