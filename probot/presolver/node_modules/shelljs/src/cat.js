var common = require('./common');
var fs = require('fs');

common.register('cat', _cat, {
  canReceivePipe: true,
});

//@
//@ ### cat(file [, file ...])
//@ ### cat(file_array)
//@
//@ Examples:
//@
//@ ```javascript
//@ var str = cat('file*.txt');
//@ var str = cat('file1', 'file2');
//@ var str = cat(['file1', 'file2']); // same as above
//@ ```
//@
//@ Returns a string containing the given file, or a concatenated string
//@ containing the files if more than one file is given (a new line character is
//@ introduced between each file).
function _cat(options, files) {
  var cat = common.readFromPipe();

  if (!files && !cat) common.error('no paths given');

  files = [].slice.call(arguments, 1);

  files.forEach(function (file) {
    if (!fs.existsSync(file)) {
      common.error('no such file or directory: ' + file);
    } else if (fs.statSync(file).isDirectory()) {
      common.error(file + ': Is a directory');
    }

    cat += fs.readFileSync(file, 'utf8');
  });

  return cat;
}
module.exports = _cat;
