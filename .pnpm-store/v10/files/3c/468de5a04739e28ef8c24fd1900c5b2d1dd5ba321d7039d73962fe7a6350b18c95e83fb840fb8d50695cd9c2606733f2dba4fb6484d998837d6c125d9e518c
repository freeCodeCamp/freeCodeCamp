'use strict';

const semver = require('semver');
const eslintPkg = require('eslint/package.json');

module.exports = function getMessageData(messageId, message) {
  return messageId && semver.satisfies(eslintPkg.version, '>= 4.15') ? { messageId } : { message };
};
