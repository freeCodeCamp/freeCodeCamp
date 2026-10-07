'use strict';

module.exports = str => {
  const pattern = ['[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)', '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'].join('|');
  const RGX = new RegExp(pattern, 'g');
  return typeof str === 'string' ? str.replace(RGX, '') : str;
};