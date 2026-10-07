'use strict';
/**
 * @param {string} data
 * @return {string}
 */
function encode(data) {
  return data
    .replace(/"/g, "'")
    .replace(/%/g, '%25')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/&/g, '%26')
    .replace(/#/g, '%23')
    .replace(/\s+/g, ' ');
}

const decode = decodeURIComponent;
module.exports = { encode, decode };
