"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailValid = exports.analyzeEmail = void 0;
const Util = require("util");
const domain_1 = require("./domain");
const errors_1 = require("./errors");
const NON_ASCII_RX = /[^\x00-\x7f]/;
const ENCODER_IMPL = new (Util.TextEncoder || TextEncoder)(); // $lab:coverage:ignore$
/**
 * Analyzes a string to verify it is a valid email address.
 *
 * @param email - the email address to validate.
 * @param options - optional settings.
 *
 * @return - undefined when valid, otherwise an object with single error key with a string message value.
 */
function analyzeEmail(email, options) {
    return validateEmail(email, options);
}
exports.analyzeEmail = analyzeEmail;
/**
 * Analyzes a string to verify it is a valid email address.
 *
 * @param email - the email address to validate.
 * @param options - optional settings.
 *
 * @return - true when valid, otherwise false.
 */
function isEmailValid(email, options) {
    return !validateEmail(email, options);
}
exports.isEmailValid = isEmailValid;
function validateEmail(email, options = {}) {
    if (typeof email !== 'string') {
        throw new Error('Invalid input: email must be a string');
    }
    if (!email) {
        return (0, errors_1.errorCode)('EMPTY_STRING');
    }
    // Unicode
    const ascii = !NON_ASCII_RX.test(email);
    if (!ascii) {
        if (options.allowUnicode === false) {
            // Defaults to true
            return (0, errors_1.errorCode)('FORBIDDEN_UNICODE');
        }
        email = email.normalize('NFC');
    }
    // Basic structure
    const parts = email.split('@');
    if (parts.length !== 2) {
        return parts.length > 2 ? (0, errors_1.errorCode)('MULTIPLE_AT_CHAR') : (0, errors_1.errorCode)('MISSING_AT_CHAR');
    }
    const [local, domain] = parts;
    if (!local) {
        return (0, errors_1.errorCode)('EMPTY_LOCAL');
    }
    if (!options.ignoreLength) {
        if (email.length > 254) {
            // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
            return (0, errors_1.errorCode)('ADDRESS_TOO_LONG');
        }
        if (ENCODER_IMPL.encode(local).length > 64) {
            // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1
            return (0, errors_1.errorCode)('LOCAL_TOO_LONG');
        }
    }
    // Validate parts
    return validateLocal(local, ascii) || (0, domain_1.analyzeDomain)(domain, options);
}
function validateLocal(local, ascii) {
    const segments = local.split('.');
    for (const segment of segments) {
        if (!segment.length) {
            return (0, errors_1.errorCode)('EMPTY_LOCAL_SEGMENT');
        }
        if (ascii) {
            if (!ATEXT_RX.test(segment)) {
                return (0, errors_1.errorCode)('INVALID_LOCAL_CHARS');
            }
            continue;
        }
        for (const char of segment) {
            if (ATEXT_RX.test(char)) {
                continue;
            }
            const binary = toBinary(char);
            if (!ATOM_RX.test(binary)) {
                return (0, errors_1.errorCode)('INVALID_LOCAL_CHARS');
            }
        }
    }
    return null;
}
function toBinary(char) {
    return Array.from(ENCODER_IMPL.encode(char), (v) => String.fromCharCode(v)).join('');
}
/*
    From RFC 5321:

        Mailbox         =   Local-part "@" ( Domain / address-literal )

        Local-part      =   Dot-string / Quoted-string
        Dot-string      =   Atom *("."  Atom)
        Atom            =   1*atext
        atext           =   ALPHA / DIGIT / "!" / "#" / "$" / "%" / "&" / "'" / "*" / "+" / "-" / "/" / "=" / "?" / "^" / "_" / "`" / "{" / "|" / "}" / "~"

        Domain          =   sub-domain *("." sub-domain)
        sub-domain      =   Let-dig [Ldh-str]
        Let-dig         =   ALPHA / DIGIT
        Ldh-str         =   *( ALPHA / DIGIT / "-" ) Let-dig

        ALPHA           =   %x41-5A / %x61-7A        ; a-z, A-Z
        DIGIT           =   %x30-39                  ; 0-9

    From RFC 6531:

        sub-domain      =/  U-label
        atext           =/  UTF8-non-ascii

        UTF8-non-ascii  =   UTF8-2 / UTF8-3 / UTF8-4

        UTF8-2          =   %xC2-DF UTF8-tail
        UTF8-3          =   %xE0 %xA0-BF UTF8-tail /
                            %xE1-EC 2( UTF8-tail ) /
                            %xED %x80-9F UTF8-tail /
                            %xEE-EF 2( UTF8-tail )
        UTF8-4          =   %xF0 %x90-BF 2( UTF8-tail ) /
                            %xF1-F3 3( UTF8-tail ) /
                            %xF4 %x80-8F 2( UTF8-tail )

        UTF8-tail       =   %x80-BF

    Note: The following are not supported:

        RFC 5321: address-literal, Quoted-string
        RFC 5322: obs-*, CFWS
*/
const ATEXT_RX = /^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/; // _ included in \w
const ATOM_RX = new RegExp([
    //  %xC2-DF UTF8-tail
    '(?:[\\xc2-\\xdf][\\x80-\\xbf])',
    //  %xE0 %xA0-BF UTF8-tail              %xE1-EC 2( UTF8-tail )            %xED %x80-9F UTF8-tail              %xEE-EF 2( UTF8-tail )
    '(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})',
    //  %xF0 %x90-BF 2( UTF8-tail )            %xF1-F3 3( UTF8-tail )            %xF4 %x80-8F 2( UTF8-tail )
    '(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})'
].join('|'));
//# sourceMappingURL=email.js.map