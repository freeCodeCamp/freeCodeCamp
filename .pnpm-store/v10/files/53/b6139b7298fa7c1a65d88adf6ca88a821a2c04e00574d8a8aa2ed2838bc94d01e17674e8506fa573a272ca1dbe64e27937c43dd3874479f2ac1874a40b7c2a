"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDefaultsModeConfig = void 0;
const tslib_1 = require("tslib");
const property_provider_1 = require("@smithy/property-provider");
const bowser_1 = tslib_1.__importDefault(require("bowser"));
const constants_1 = require("./constants");
const resolveDefaultsModeConfig = ({ defaultsMode, } = {}) => (0, property_provider_1.memoize)(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode === null || mode === void 0 ? void 0 : mode.toLowerCase()) {
        case "auto":
            return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
        case "mobile":
        case "in-region":
        case "cross-region":
        case "standard":
        case "legacy":
            return Promise.resolve(mode === null || mode === void 0 ? void 0 : mode.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${constants_1.DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
exports.resolveDefaultsModeConfig = resolveDefaultsModeConfig;
const isMobileBrowser = () => {
    var _a, _b;
    const parsedUA = typeof window !== "undefined" && ((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent)
        ? bowser_1.default.parse(window.navigator.userAgent)
        : undefined;
    const platform = (_b = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.platform) === null || _b === void 0 ? void 0 : _b.type;
    return platform === "tablet" || platform === "mobile";
};
