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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanonicalFileName = exports.typescriptVersionIsAtLeast = void 0;
// required by website
__exportStar(require("./ast-converter"), exports);
__exportStar(require("./create-program/getScriptKind"), exports);
// required by packages/utils/src/ts-estree.ts
__exportStar(require("./getModifiers"), exports);
var version_check_1 = require("./version-check");
Object.defineProperty(exports, "typescriptVersionIsAtLeast", { enumerable: true, get: function () { return version_check_1.typescriptVersionIsAtLeast; } });
// required by packages/type-utils
var shared_1 = require("./create-program/shared");
Object.defineProperty(exports, "getCanonicalFileName", { enumerable: true, get: function () { return shared_1.getCanonicalFileName; } });
