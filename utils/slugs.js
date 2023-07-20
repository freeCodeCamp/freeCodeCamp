'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.unDasherize = exports.nameify = exports.dasherize = void 0;
function dasherize(name) {
  return ('' + name)
    .toLowerCase()
    .trim()
    .replace(/\s|\./g, '-')
    .replace(/[^a-z\d\-.]/g, '');
}
exports.dasherize = dasherize;
function nameify(str) {
  return ('' + str).replace(/[^a-z\d\s]/gi, '');
}
exports.nameify = nameify;
function unDasherize(name) {
  return (
    ('' + name)
      // replace dash with space
      .replace(/-/g, ' ')
      // strip nonalphanumarics chars except whitespace
      .replace(/[^a-z\d\s]/gi, '')
      .trim()
  );
}
exports.unDasherize = unDasherize;
