var fs = require('fs');
var path = require('path');
const supportsColor = require('supports-color');

module.exports = help;

const highlight = supportsColor.stdout ? '\x1B\[$1m' : '';

function help(item) {
  if (!item) {
    item = 'help';
  } else if (item === true) { // if used with -h or --help and no args
    item = 'help';
  }

  // cleanse the filename to only contain letters
  // aka: /\W/g but figured this was eaiser to read
  item = item.replace(/[^a-z]/gi, '');

  try {
    var dir = path.join(__dirname, '..', '..', 'doc', 'cli', item + '.txt');
    var body = fs.readFileSync(dir, 'utf8');
    return body.replace(/\\x1B\[(.)m/g, highlight);
  } catch (e) {
    return '"' + item + '" help can\'t be found';
  }
}
