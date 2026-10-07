"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = exports.version = exports.withoutProjectParserOptions = exports.createProgram = exports.clearCaches = exports.parseForESLint = exports.parse = void 0;
const ts = __importStar(require("typescript"));
// intentionally executing code before rest of the require()s. This will not work with ESM.
const [versionMajor, _versionMinor] = ts.versionMajorMinor
    .split('.')
    .map(Number);
if (versionMajor >= 7) {
    // eslint-disable-next-line no-console
    console.error([
        'typescript-eslint does not support TS 7.0.',
        'Please see https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0 to run typescript-eslint using the TS 6 API.',
        "See also https://github.com/typescript-eslint/typescript-eslint/issues/10940 for tracking typescript-eslint's support for TS >=7.1",
    ].join('\n'));
    throw new Error('typescript-eslint does not support TS 7.0.');
}
var parser_1 = require("./parser");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parser_1.parse; } });
Object.defineProperty(exports, "parseForESLint", { enumerable: true, get: function () { return parser_1.parseForESLint; } });
var typescript_estree_1 = require("@typescript-eslint/typescript-estree");
Object.defineProperty(exports, "clearCaches", { enumerable: true, get: function () { return typescript_estree_1.clearCaches; } });
Object.defineProperty(exports, "createProgram", { enumerable: true, get: function () { return typescript_estree_1.createProgram; } });
Object.defineProperty(exports, "withoutProjectParserOptions", { enumerable: true, get: function () { return typescript_estree_1.withoutProjectParserOptions; } });
// note - cannot migrate this to an import statement because it will make TSC copy the package.json to the dist folder
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
exports.version = require('../package.json').version;
exports.meta = {
    name: 'typescript-eslint/parser',
    version: exports.version,
};
//# sourceMappingURL=index.js.map