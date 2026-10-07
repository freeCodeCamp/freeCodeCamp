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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSourceFile = void 0;
const debug_1 = __importDefault(require("debug"));
const ts = __importStar(require("typescript"));
const getScriptKind_1 = require("./getScriptKind");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:createSourceFile');
function createSourceFile(parseSettings) {
    log('Getting AST without type information in %s mode for: %s', parseSettings.jsx ? 'TSX' : 'TS', parseSettings.filePath);
    return ts.createSourceFile(parseSettings.filePath, parseSettings.code, ts.ScriptTarget.Latest, 
    /* setParentNodes */ true, (0, getScriptKind_1.getScriptKind)(parseSettings.filePath, parseSettings.jsx));
}
exports.createSourceFile = createSourceFile;
//# sourceMappingURL=createSourceFile.js.map