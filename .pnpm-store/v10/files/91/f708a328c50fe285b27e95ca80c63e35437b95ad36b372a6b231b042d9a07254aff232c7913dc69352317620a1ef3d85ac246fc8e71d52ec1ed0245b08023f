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
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresQuoting = void 0;
const ts = __importStar(require("typescript"));
function requiresQuoting(name, target = ts.ScriptTarget.ESNext) {
    if (name.length === 0) {
        return true;
    }
    if (!ts.isIdentifierStart(name.charCodeAt(0), target)) {
        return true;
    }
    for (let i = 1; i < name.length; i += 1) {
        if (!ts.isIdentifierPart(name.charCodeAt(i), target)) {
            return true;
        }
    }
    return false;
}
exports.requiresQuoting = requiresQuoting;
//# sourceMappingURL=requiresQuoting.js.map