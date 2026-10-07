"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flow = void 0;

function flow(...transforms) {
  return block => transforms.reduce((block, t) => t(block), block);
}

exports.flow = flow;
//# sourceMappingURL=index.cjs.map
