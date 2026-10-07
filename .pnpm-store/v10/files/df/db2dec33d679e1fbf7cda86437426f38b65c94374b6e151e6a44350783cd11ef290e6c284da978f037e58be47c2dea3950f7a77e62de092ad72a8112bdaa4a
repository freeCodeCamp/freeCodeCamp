"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUserAgent = void 0;
const tslib_1 = require("tslib");
const bowser_1 = tslib_1.__importDefault(require("bowser"));
const defaultUserAgent = ({ serviceId, clientVersion }) => async () => {
    var _a, _b, _c, _d, _e, _f, _g;
    const parsedUA = typeof window !== "undefined" && ((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent)
        ? bowser_1.default.parse(window.navigator.userAgent)
        : undefined;
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${((_b = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.os) === null || _b === void 0 ? void 0 : _b.name) || "other"}`, (_c = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.os) === null || _c === void 0 ? void 0 : _c.version],
        ["lang/js"],
        ["md/browser", `${(_e = (_d = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.browser) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : "unknown"}_${(_g = (_f = parsedUA === null || parsedUA === void 0 ? void 0 : parsedUA.browser) === null || _f === void 0 ? void 0 : _f.version) !== null && _g !== void 0 ? _g : "unknown"}`],
    ];
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    return sections;
};
exports.defaultUserAgent = defaultUserAgent;
