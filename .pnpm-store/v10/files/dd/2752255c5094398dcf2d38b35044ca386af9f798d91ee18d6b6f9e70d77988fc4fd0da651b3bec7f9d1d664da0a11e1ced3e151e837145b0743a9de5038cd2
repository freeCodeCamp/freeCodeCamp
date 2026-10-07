'use strict';

const styles = require('./styles');
const symbols = require('./symbols');
const utils = require('./utils');

module.exports = prompt => {
  prompt.options = utils.merge({}, prompt.options.theme, prompt.options);
  prompt.symbols = symbols.merge(prompt.options);
  prompt.styles = styles.merge(prompt.options);
};
