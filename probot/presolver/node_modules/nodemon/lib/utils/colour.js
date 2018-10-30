/**
 * Encodes a string in a colour: red, yellow or green
 * @param  {String} c   colour to highlight in
 * @param  {String} str the string to encode
 * @return {String}     coloured string for terminal printing
 */
function colour(c, str) {
  return (colour[c] || colour.black) + str + colour.black;
}

function strip(str) {
  re.lastIndex = 0; // reset position
  return str.replace(re, '');
}

colour.red = '\x1B[31m';
colour.yellow = '\x1B[33m';
colour.green = '\x1B[32m';
colour.black = '\x1B[39m';

var reStr = Object.keys(colour).map(key => colour[key]).join('|');
var re = new RegExp(('(' + reStr + ')').replace(/\[/g, '\\['), 'g');

colour.strip = strip;

module.exports = colour;
