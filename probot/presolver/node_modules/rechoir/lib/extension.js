const path = require('path');

const EXTRE = /^[.]?[^.]+([.].*)$/;

module.exports = function (input) {
  var extension = EXTRE.exec(path.basename(input));
  if (!extension) {
    return;
  }
  return extension[1];
};
