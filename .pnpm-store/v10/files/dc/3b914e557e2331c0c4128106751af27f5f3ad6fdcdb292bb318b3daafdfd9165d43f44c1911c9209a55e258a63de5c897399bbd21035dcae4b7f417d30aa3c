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
exports.getDecorators = exports.getModifiers = void 0;
const ts = __importStar(require("typescript"));
const version_check_1 = require("./version-check");
const isAtLeast48 = version_check_1.typescriptVersionIsAtLeast['4.8'];
function getModifiers(node) {
    var _a;
    if (node == null) {
        return undefined;
    }
    if (isAtLeast48) {
        // eslint-disable-next-line deprecation/deprecation -- this is safe as it's guarded
        if (ts.canHaveModifiers(node)) {
            // eslint-disable-next-line deprecation/deprecation -- this is safe as it's guarded
            const modifiers = ts.getModifiers(node);
            return modifiers ? Array.from(modifiers) : undefined;
        }
        return undefined;
    }
    return (
    // @ts-expect-error intentional fallback for older TS versions
    (_a = node.modifiers) === null || _a === void 0 ? void 0 : _a.filter((m) => !ts.isDecorator(m)));
}
exports.getModifiers = getModifiers;
function getDecorators(node) {
    var _a;
    if (node == null) {
        return undefined;
    }
    if (isAtLeast48) {
        // eslint-disable-next-line deprecation/deprecation -- this is safe as it's guarded
        if (ts.canHaveDecorators(node)) {
            // eslint-disable-next-line deprecation/deprecation -- this is safe as it's guarded
            const decorators = ts.getDecorators(node);
            return decorators ? Array.from(decorators) : undefined;
        }
        return undefined;
    }
    return (
    // @ts-expect-error intentional fallback for older TS versions
    (_a = node.decorators) === null || _a === void 0 ? void 0 : _a.filter(ts.isDecorator));
}
exports.getDecorators = getDecorators;
//# sourceMappingURL=getModifiers.js.map