"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDefaultsModeConfig = void 0;
const property_provider_1 = require("@smithy/property-provider");
const constants_1 = require("./constants");
const resolveDefaultsModeConfig = ({ defaultsMode, } = {}) => (0, property_provider_1.memoize)(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode === null || mode === void 0 ? void 0 : mode.toLowerCase()) {
        case "auto":
            return Promise.resolve("mobile");
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
