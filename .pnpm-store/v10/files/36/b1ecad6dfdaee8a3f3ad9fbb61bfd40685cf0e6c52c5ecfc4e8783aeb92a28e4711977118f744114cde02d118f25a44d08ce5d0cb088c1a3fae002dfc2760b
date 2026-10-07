"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertFieldTransformed = assertFieldTransformed;
function assertFieldTransformed(path) {
  if (path.node.declare || false) {
    throw path.buildCodeFrameError(`TypeScript 'declare' fields must first be transformed by ` + `@babel/plugin-transform-typescript.\n` + `If you have already enabled that plugin (or '@babel/preset-typescript'), make sure ` + `that it runs before any plugin related to additional class features:\n` + ` - @babel/plugin-transform-class-properties\n` + ` - @babel/plugin-transform-private-methods\n` + ` - @babel/plugin-proposal-decorators`);
  }
}

//# sourceMappingURL=typescript.js.map
