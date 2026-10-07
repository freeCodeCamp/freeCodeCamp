var fs = require('fs');
var path = require('path');

exports.onPostBuild = function(args, options) {
  var filename = options && options.filename || 'sw.js';

  var read = fs.createReadStream(path.join(__dirname, 'sw.js'))
  var write = fs.createWriteStream(path.resolve('public', filename));

  return new Promise(function(resolve, reject) {
    var stream = read.pipe(write);

    stream.once('finish', resolve);
    stream.once('error', reject);
  });
};