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
exports.redactConnectionString = exports.redactValidConnectionString = void 0;
const index_1 = __importStar(require("./index"));
function redactValidConnectionString(inputUrl, options) {
    var _a, _b;
    const url = inputUrl.clone();
    const replacementString = (_a = options === null || options === void 0 ? void 0 : options.replacementString) !== null && _a !== void 0 ? _a : '_credentials_';
    const redactUsernames = (_b = options === null || options === void 0 ? void 0 : options.redactUsernames) !== null && _b !== void 0 ? _b : true;
    if ((url.username || url.password) && redactUsernames) {
        url.username = replacementString;
        url.password = '';
    }
    else if (url.password) {
        url.password = replacementString;
    }
    if (url.searchParams.has('authMechanismProperties')) {
        const props = new index_1.CommaAndColonSeparatedRecord(url.searchParams.get('authMechanismProperties'));
        if (props.get('AWS_SESSION_TOKEN')) {
            props.set('AWS_SESSION_TOKEN', replacementString);
            url.searchParams.set('authMechanismProperties', props.toString());
        }
    }
    if (url.searchParams.has('tlsCertificateKeyFilePassword')) {
        url.searchParams.set('tlsCertificateKeyFilePassword', replacementString);
    }
    if (url.searchParams.has('proxyUsername') && redactUsernames) {
        url.searchParams.set('proxyUsername', replacementString);
    }
    if (url.searchParams.has('proxyPassword')) {
        url.searchParams.set('proxyPassword', replacementString);
    }
    return url;
}
exports.redactValidConnectionString = redactValidConnectionString;
function redactConnectionString(uri, options) {
    var _a, _b;
    const replacementString = (_a = options === null || options === void 0 ? void 0 : options.replacementString) !== null && _a !== void 0 ? _a : '<credentials>';
    const redactUsernames = (_b = options === null || options === void 0 ? void 0 : options.redactUsernames) !== null && _b !== void 0 ? _b : true;
    let parsed;
    try {
        parsed = new index_1.default(uri);
    }
    catch (_c) { }
    if (parsed) {
        options = { ...options, replacementString: '___credentials___' };
        return parsed.redact(options).toString().replace(/___credentials___/g, replacementString);
    }
    const R = replacementString;
    const replacements = [
        uri => uri.replace(redactUsernames ? /(\/\/)(.*)(@)/g : /(\/\/[^@]*:)(.*)(@)/g, `$1${R}$3`),
        uri => uri.replace(/(AWS_SESSION_TOKEN(:|%3A))([^,&]+)/gi, `$1${R}`),
        uri => uri.replace(/(tlsCertificateKeyFilePassword=)([^&]+)/gi, `$1${R}`),
        uri => redactUsernames ? uri.replace(/(proxyUsername=)([^&]+)/gi, `$1${R}`) : uri,
        uri => uri.replace(/(proxyPassword=)([^&]+)/gi, `$1${R}`)
    ];
    for (const replacer of replacements) {
        uri = replacer(uri);
    }
    return uri;
}
exports.redactConnectionString = redactConnectionString;
//# sourceMappingURL=redact.js.map