"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permutePath = exports.parseDate = exports.formatDate = exports.domainMatch = exports.defaultPath = exports.CookieJar = exports.cookieCompare = exports.Cookie = exports.PrefixSecurityEnum = exports.canonicalDomain = exports.version = exports.ParameterError = exports.Store = exports.getPublicSuffix = exports.permuteDomain = exports.pathMatch = exports.MemoryCookieStore = void 0;
exports.parse = parse;
exports.fromJSON = fromJSON;
var memstore_1 = require("../memstore");
Object.defineProperty(exports, "MemoryCookieStore", { enumerable: true, get: function () { return memstore_1.MemoryCookieStore; } });
var pathMatch_1 = require("../pathMatch");
Object.defineProperty(exports, "pathMatch", { enumerable: true, get: function () { return pathMatch_1.pathMatch; } });
var permuteDomain_1 = require("../permuteDomain");
Object.defineProperty(exports, "permuteDomain", { enumerable: true, get: function () { return permuteDomain_1.permuteDomain; } });
var getPublicSuffix_1 = require("../getPublicSuffix");
Object.defineProperty(exports, "getPublicSuffix", { enumerable: true, get: function () { return getPublicSuffix_1.getPublicSuffix; } });
var store_1 = require("../store");
Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return store_1.Store; } });
var validators_1 = require("../validators");
Object.defineProperty(exports, "ParameterError", { enumerable: true, get: function () { return validators_1.ParameterError; } });
var version_1 = require("../version");
Object.defineProperty(exports, "version", { enumerable: true, get: function () { return version_1.version; } });
var canonicalDomain_1 = require("./canonicalDomain");
Object.defineProperty(exports, "canonicalDomain", { enumerable: true, get: function () { return canonicalDomain_1.canonicalDomain; } });
var constants_1 = require("./constants");
Object.defineProperty(exports, "PrefixSecurityEnum", { enumerable: true, get: function () { return constants_1.PrefixSecurityEnum; } });
var cookie_1 = require("./cookie");
Object.defineProperty(exports, "Cookie", { enumerable: true, get: function () { return cookie_1.Cookie; } });
var cookieCompare_1 = require("./cookieCompare");
Object.defineProperty(exports, "cookieCompare", { enumerable: true, get: function () { return cookieCompare_1.cookieCompare; } });
var cookieJar_1 = require("./cookieJar");
Object.defineProperty(exports, "CookieJar", { enumerable: true, get: function () { return cookieJar_1.CookieJar; } });
var defaultPath_1 = require("./defaultPath");
Object.defineProperty(exports, "defaultPath", { enumerable: true, get: function () { return defaultPath_1.defaultPath; } });
var domainMatch_1 = require("./domainMatch");
Object.defineProperty(exports, "domainMatch", { enumerable: true, get: function () { return domainMatch_1.domainMatch; } });
var formatDate_1 = require("./formatDate");
Object.defineProperty(exports, "formatDate", { enumerable: true, get: function () { return formatDate_1.formatDate; } });
var parseDate_1 = require("./parseDate");
Object.defineProperty(exports, "parseDate", { enumerable: true, get: function () { return parseDate_1.parseDate; } });
var permutePath_1 = require("./permutePath");
Object.defineProperty(exports, "permutePath", { enumerable: true, get: function () { return permutePath_1.permutePath; } });
const cookie_2 = require("./cookie");
/**
 * {@inheritDoc Cookie.parse}
 * @public
 */
function parse(str, options) {
    return cookie_2.Cookie.parse(str, options);
}
/**
 * {@inheritDoc Cookie.fromJSON}
 * @public
 */
function fromJSON(str) {
    return cookie_2.Cookie.fromJSON(str);
}
