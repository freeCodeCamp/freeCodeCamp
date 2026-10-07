"use strict";

const fs = require(`fs-extra`);
function loadNodeContent(fileNode) {
  return fs.readFile(fileNode.absolutePath, `utf-8`);
}
exports.createFilePath = require(`./create-file-path`);
exports.createRemoteFileNode = require(`./create-remote-file-node`);
exports.createFileNodeFromBuffer = require(`./create-file-node-from-buffer`);
exports.loadNodeContent = loadNodeContent;