"use strict";
/**
 * Implement a factory allowing to plug different implementations of suffix
 * lookup (e.g.: using a trie or the packed hashes datastructures). This is used
 * and exposed in `tldts.ts` and `tldts-experimental.ts` bundle entrypoints.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmptyResult = getEmptyResult;
exports.resetResult = resetResult;
exports.parseImpl = parseImpl;
const domain_1 = require("./domain");
const domain_without_suffix_1 = require("./domain-without-suffix");
const extract_hostname_1 = require("./extract-hostname");
const is_ip_1 = require("./is-ip");
const is_valid_1 = require("./is-valid");
const options_1 = require("./options");
const subdomain_1 = require("./subdomain");
function getEmptyResult() {
    return {
        domain: null,
        domainWithoutSuffix: null,
        hostname: null,
        isIcann: null,
        isIp: null,
        isPrivate: null,
        publicSuffix: null,
        subdomain: null,
    };
}
function resetResult(result) {
    result.domain = null;
    result.domainWithoutSuffix = null;
    result.hostname = null;
    result.isIcann = null;
    result.isIp = null;
    result.isPrivate = null;
    result.publicSuffix = null;
    result.subdomain = null;
}
function parseImpl(url, step, suffixLookup, partialOptions, result) {
    const options = /*@__INLINE__*/ (0, options_1.setDefaults)(partialOptions);
    // Very fast approximate check to make sure `url` is a string. This is needed
    // because the library will not necessarily be used in a typed setup and
    // values of arbitrary types might be given as argument.
    if (typeof url !== 'string') {
        return result;
    }
    // Extract hostname from `url` only if needed. This can be made optional
    // using `options.extractHostname`. This option will typically be used
    // whenever we are sure the inputs to `parse` are already hostnames and not
    // arbitrary URLs.
    //
    // `mixedInput` allows to specify if we expect a mix of URLs and hostnames
    // as input. If only hostnames are expected then `extractHostname` can be
    // set to `false` to speed-up parsing. If only URLs are expected then
    // `mixedInputs` can be set to `false`. The `mixedInputs` is only a hint
    // and will not change the behavior of the library.
    if (!options.extractHostname) {
        result.hostname = url;
    }
    else if (options.mixedInputs) {
        result.hostname = (0, extract_hostname_1.default)(url, (0, is_valid_1.default)(url));
    }
    else {
        result.hostname = (0, extract_hostname_1.default)(url, false);
    }
    if (step === 0 /* FLAG.HOSTNAME */ || result.hostname === null) {
        return result;
    }
    // Check if `hostname` is a valid ip address
    if (options.detectIp) {
        result.isIp = (0, is_ip_1.default)(result.hostname);
        if (result.isIp) {
            return result;
        }
    }
    // Perform optional hostname validation. If hostname is not valid, no need to
    // go further as there will be no valid domain or sub-domain.
    if (options.validateHostname &&
        options.extractHostname &&
        !(0, is_valid_1.default)(result.hostname)) {
        result.hostname = null;
        return result;
    }
    // Extract public suffix
    suffixLookup(result.hostname, options, result);
    if (step === 2 /* FLAG.PUBLIC_SUFFIX */ || result.publicSuffix === null) {
        return result;
    }
    // Extract domain
    result.domain = (0, domain_1.default)(result.publicSuffix, result.hostname, options);
    if (step === 3 /* FLAG.DOMAIN */ || result.domain === null) {
        return result;
    }
    // Extract subdomain
    result.subdomain = (0, subdomain_1.default)(result.hostname, result.domain);
    if (step === 4 /* FLAG.SUB_DOMAIN */) {
        return result;
    }
    // Extract domain without suffix
    result.domainWithoutSuffix = (0, domain_without_suffix_1.default)(result.domain, result.publicSuffix);
    return result;
}
//# sourceMappingURL=factory.js.map