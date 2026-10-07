"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaults = setDefaults;
function setDefaultsImpl({ allowIcannDomains = true, allowPrivateDomains = false, detectIp = true, extractHostname = true, mixedInputs = true, validHosts = null, validateHostname = true, }) {
    return {
        allowIcannDomains,
        allowPrivateDomains,
        detectIp,
        extractHostname,
        mixedInputs,
        validHosts,
        validateHostname,
    };
}
const DEFAULT_OPTIONS = /*@__INLINE__*/ setDefaultsImpl({});
function setDefaults(options) {
    if (options === undefined) {
        return DEFAULT_OPTIONS;
    }
    return /*@__INLINE__*/ setDefaultsImpl(options);
}
//# sourceMappingURL=options.js.map