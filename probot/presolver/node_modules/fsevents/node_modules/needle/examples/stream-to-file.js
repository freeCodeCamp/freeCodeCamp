var fs     = require('fs'),
    needle = require('./..'),
    path   = require('path');

var url    = process.argv[2] || 'http://www.google.com/images/errors/robot.png';
var file   = path.basename(url);

console.log('Downloading ' + file + '...');
needle
  .get(url)
  .pipe(fs.createWriteStream(file))
  .on('done', function() {
    console.log('Done!')
  })
