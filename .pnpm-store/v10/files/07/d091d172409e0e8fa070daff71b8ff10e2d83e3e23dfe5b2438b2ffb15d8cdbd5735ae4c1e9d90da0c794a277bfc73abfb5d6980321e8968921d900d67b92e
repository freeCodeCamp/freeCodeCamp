"use strict";

exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _default = callProvider => ({
  ImportDeclaration(path) {
    const source = (0, _utils.getImportSource)(path);
    if (!source) return;
    callProvider({
      kind: "import",
      source
    }, path);
  },
  Program(path) {
    path.get("body").forEach(bodyPath => {
      const source = (0, _utils.getRequireSource)(bodyPath);
      if (!source) return;
      callProvider({
        kind: "import",
        source
      }, bodyPath);
    });
  }
});
exports.default = _default;