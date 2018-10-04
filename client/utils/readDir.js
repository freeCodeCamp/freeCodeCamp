const fse = require('fs-extra');

const { isAFileRE, shouldBeIgnoredRE } = require('./regEx.js');

module.exports = function readDir(dir) {
  return fse
    .readdirSync(dir)
    .filter(item => !isAFileRE.test(item))
    .filter(file => !shouldBeIgnoredRE.test(file));
};
