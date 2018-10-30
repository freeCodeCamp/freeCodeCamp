var fs = require('fs'),
    needle = require('./..'),
    path = require('path');

var url  = process.argv[2] || 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png';
var file = path.basename(url);

console.log('Downloading ' + file);

needle.get(url, { output: file, follow: 3 }, function(err, resp, data){
  console.log('File saved: ' + process.cwd() + '/' + file);

  var size = fs.statSync(file).size;
  if (size == resp.bytes)
    console.log(resp.bytes + ' bytes written to file.');
  else
    throw new Error('File size mismatch: ' + size + ' != ' + resp.bytes);
});
