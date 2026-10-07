"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = exports.version = exports.createProgram = exports.clearCaches = exports.parseForESLint = exports.parse = void 0;
var parser_1 = require("./parser");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parser_1.parse; } });
Object.defineProperty(exports, "parseForESLint", { enumerable: true, get: function () { return parser_1.parseForESLint; } });
var typescript_estree_1 = require("@typescript-eslint/typescript-estree");
Object.defineProperty(exports, "clearCaches", { enumerable: true, get: function () { return typescript_estree_1.clearCaches; } });
Object.defineProperty(exports, "createProgram", { enumerable: true, get: function () { return typescript_estree_1.createProgram; } });
// note - cannot migrate this to an import statement because it will make TSC copy the package.json to the dist folder
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
exports.version = require('../package.json').version;
exports.meta = {
    name: 'typescript-eslint/parser',
    version: exports.version,
};
//# sourceMappingURL=index.js.map