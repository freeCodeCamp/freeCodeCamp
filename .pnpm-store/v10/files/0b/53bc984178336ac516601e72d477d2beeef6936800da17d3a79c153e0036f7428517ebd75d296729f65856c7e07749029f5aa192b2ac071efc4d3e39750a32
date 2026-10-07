/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = require('./browser.js');
} else {
  module.exports = require('./node.js');
}
