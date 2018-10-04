const chalk = require('chalk');

module.exports = function info(str, colour = 'red') {
  console.info(chalk[colour](str));
};
