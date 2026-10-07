"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uriRegex = exports.ipVersions = void 0;
const hoek_1 = require("@hapi/hoek");
function generate() {
    const rfc3986 = {};
    const hexDigit = '\\dA-Fa-f'; // HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
    const hexDigitOnly = '[' + hexDigit + ']';
    const unreserved = '\\w-\\.~'; // unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
    const subDelims = "!\\$&'\\(\\)\\*\\+,;="; // sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
    const pctEncoded = '%' + hexDigit; // pct-encoded = "%" HEXDIG HEXDIG
    const pchar = unreserved + pctEncoded + subDelims + ':@'; // pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
    const pcharOnly = '[' + pchar + ']';
    const decOctect = '(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])'; // dec-octet = DIGIT / %x31-39 DIGIT / "1" 2DIGIT / "2" %x30-34 DIGIT / "25" %x30-35  ; 0-9 / 10-99 / 100-199 / 200-249 / 250-255
    rfc3986.ipv4address = '(?:' + decOctect + '\\.){3}' + decOctect; // IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet
    /*
        h16 = 1*4HEXDIG ; 16 bits of address represented in hexadecimal
        ls32 = ( h16 ":" h16 ) / IPv4address ; least-significant 32 bits of address
        IPv6address =                            6( h16 ":" ) ls32
                    /                       "::" 5( h16 ":" ) ls32
                    / [               h16 ] "::" 4( h16 ":" ) ls32
                    / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
                    / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
                    / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
                    / [ *4( h16 ":" ) h16 ] "::"              ls32
                    / [ *5( h16 ":" ) h16 ] "::"              h16
                    / [ *6( h16 ":" ) h16 ] "::"
    */
    const h16 = hexDigitOnly + '{1,4}';
    const ls32 = '(?:' + h16 + ':' + h16 + '|' + rfc3986.ipv4address + ')';
    const IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
    const IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
    const IPv6FourHex = '(?:' + h16 + ')?::(?:' + h16 + ':){4}' + ls32;
    const IPv6ThreeHex = '(?:(?:' + h16 + ':){0,1}' + h16 + ')?::(?:' + h16 + ':){3}' + ls32;
    const IPv6TwoHex = '(?:(?:' + h16 + ':){0,2}' + h16 + ')?::(?:' + h16 + ':){2}' + ls32;
    const IPv6OneHex = '(?:(?:' + h16 + ':){0,3}' + h16 + ')?::' + h16 + ':' + ls32;
    const IPv6NoneHex = '(?:(?:' + h16 + ':){0,4}' + h16 + ')?::' + ls32;
    const IPv6NoneHex2 = '(?:(?:' + h16 + ':){0,5}' + h16 + ')?::' + h16;
    const IPv6NoneHex3 = '(?:(?:' + h16 + ':){0,6}' + h16 + ')?::';
    rfc3986.ipv4Cidr = '(?:\\d|[1-2]\\d|3[0-2])'; // IPv4 cidr = DIGIT / %x31-32 DIGIT / "3" %x30-32  ; 0-9 / 10-29 / 30-32
    rfc3986.ipv6Cidr = '(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])'; // IPv6 cidr = DIGIT / %x31-39 DIGIT / "1" %x0-1 DIGIT / "12" %x0-8;   0-9 / 10-99 / 100-119 / 120-128
    rfc3986.ipv6address =
        '(?:' +
            IPv6SixHex +
            '|' +
            IPv6FiveHex +
            '|' +
            IPv6FourHex +
            '|' +
            IPv6ThreeHex +
            '|' +
            IPv6TwoHex +
            '|' +
            IPv6OneHex +
            '|' +
            IPv6NoneHex +
            '|' +
            IPv6NoneHex2 +
            '|' +
            IPv6NoneHex3 +
            ')';
    rfc3986.ipvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+'; // IPvFuture = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
    rfc3986.scheme = '[a-zA-Z][a-zA-Z\\d+-\\.]*'; // scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
    rfc3986.schemeRegex = new RegExp(rfc3986.scheme);
    const userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*'; // userinfo = *( unreserved / pct-encoded / sub-delims / ":" )
    const IPLiteral = '\\[(?:' + rfc3986.ipv6address + '|' + rfc3986.ipvFuture + ')\\]'; // IP-literal = "[" ( IPv6address / IPvFuture  ) "]"
    const regName = '[' + unreserved + pctEncoded + subDelims + ']{1,255}'; // reg-name = *( unreserved / pct-encoded / sub-delims )
    const host = '(?:' + IPLiteral + '|' + rfc3986.ipv4address + '|' + regName + ')'; // host = IP-literal / IPv4address / reg-name
    const port = '\\d*'; // port = *DIGIT
    const authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?'; // authority   = [ userinfo "@" ] host [ ":" port ]
    const authorityCapture = '(?:' + userinfo + '@)?(' + host + ')(?::' + port + ')?';
    /*
        segment       = *pchar
        segment-nz    = 1*pchar
        path          = path-abempty    ; begins with "/" '|' is empty
                    / path-absolute   ; begins with "/" but not "//"
                    / path-noscheme   ; begins with a non-colon segment
                    / path-rootless   ; begins with a segment
                    / path-empty      ; zero characters
        path-abempty  = *( "/" segment )
        path-absolute = "/" [ segment-nz *( "/" segment ) ]
        path-rootless = segment-nz *( "/" segment )
    */
    const segment = pcharOnly + '*';
    const segmentNz = pcharOnly + '+';
    const segmentNzNc = '[' + unreserved + pctEncoded + subDelims + '@' + ']+';
    const pathEmpty = '';
    const pathAbEmpty = '(?:\\/' + segment + ')*';
    const pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
    const pathRootless = segmentNz + pathAbEmpty;
    const pathNoScheme = segmentNzNc + pathAbEmpty;
    const pathAbNoAuthority = '(?:\\/\\/\\/' + segment + pathAbEmpty + ')'; // Used by file:///
    // hier-part = "//" authority path
    rfc3986.hierPart =
        '(?:' +
            '(?:\\/\\/' +
            authority +
            pathAbEmpty +
            ')' +
            '|' +
            pathAbsolute +
            '|' +
            pathRootless +
            '|' +
            pathAbNoAuthority +
            ')';
    rfc3986.hierPartCapture =
        '(?:' + '(?:\\/\\/' + authorityCapture + pathAbEmpty + ')' + '|' + pathAbsolute + '|' + pathRootless + ')';
    // relative-part = "//" authority path-abempty / path-absolute / path-noscheme / path-empty
    rfc3986.relativeRef =
        '(?:' +
            '(?:\\/\\/' +
            authority +
            pathAbEmpty +
            ')' +
            '|' +
            pathAbsolute +
            '|' +
            pathNoScheme +
            '|' +
            pathEmpty +
            ')';
    rfc3986.relativeRefCapture =
        '(?:' +
            '(?:\\/\\/' +
            authorityCapture +
            pathAbEmpty +
            ')' +
            '|' +
            pathAbsolute +
            '|' +
            pathNoScheme +
            '|' +
            pathEmpty +
            ')';
    // query = *( pchar / "/" / "?" )
    // query = *( pchar / "[" / "]" / "/" / "?" )
    rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part '|' end of the line.
    rfc3986.queryWithSquareBrackets = '[' + pchar + '\\[\\]\\/\\?]*(?=#|$)';
    // fragment = *( pchar / "/" / "?" )
    rfc3986.fragment = '[' + pchar + '\\/\\?]*';
    return rfc3986;
}
const rfc3986 = generate();
exports.ipVersions = {
    v4Cidr: rfc3986.ipv4Cidr,
    v6Cidr: rfc3986.ipv6Cidr,
    ipv4: rfc3986.ipv4address,
    ipv6: rfc3986.ipv6address,
    ipvfuture: rfc3986.ipvFuture
};
function createRegex(options) {
    const rfc = rfc3986;
    // Construct expression
    const query = options.allowQuerySquareBrackets ? rfc.queryWithSquareBrackets : rfc.query;
    const suffix = '(?:\\?' + query + ')?' + '(?:#' + rfc.fragment + ')?';
    // relative-ref = relative-part [ "?" query ] [ "#" fragment ]
    const relative = options.domain ? rfc.relativeRefCapture : rfc.relativeRef;
    if (options.relativeOnly) {
        return wrap(relative + suffix);
    }
    // Custom schemes
    let customScheme = '';
    if (options.scheme) {
        (0, hoek_1.assert)(options.scheme instanceof RegExp || typeof options.scheme === 'string' || Array.isArray(options.scheme), 'scheme must be a RegExp, String, or Array');
        const schemes = [].concat(options.scheme);
        (0, hoek_1.assert)(schemes.length >= 1, 'scheme must have at least 1 scheme specified');
        // Flatten the array into a string to be used to match the schemes
        const selections = [];
        for (let i = 0; i < schemes.length; ++i) {
            const scheme = schemes[i];
            (0, hoek_1.assert)(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');
            if (scheme instanceof RegExp) {
                selections.push(scheme.source.toString());
            }
            else {
                (0, hoek_1.assert)(rfc.schemeRegex.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
                selections.push((0, hoek_1.escapeRegex)(scheme));
            }
        }
        customScheme = selections.join('|');
    }
    // URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
    const scheme = customScheme ? '(?:' + customScheme + ')' : rfc.scheme;
    const absolute = '(?:' + scheme + ':' + (options.domain ? rfc.hierPartCapture : rfc.hierPart) + ')';
    const prefix = options.allowRelative ? '(?:' + absolute + '|' + relative + ')' : absolute;
    return wrap(prefix + suffix, customScheme);
}
function wrap(raw, scheme = null) {
    raw = `(?=.)(?!https?\:/(?:$|[^/]))(?!https?\:///)(?!https?\:[^/])${raw}`; // Require at least one character and explicitly forbid 'http:/' or HTTP with empty domain
    return {
        raw,
        regex: new RegExp(`^${raw}$`),
        scheme
    };
}
const genericUriRegex = createRegex({});
/**
 * Generates a regular expression used to validate URI addresses.
 *
 * @param options - optional settings.
 *
 * @returns an object with the regular expression and meta data.
 */
function uriRegex(options = {}) {
    if (options.scheme ||
        options.allowRelative ||
        options.relativeOnly ||
        options.allowQuerySquareBrackets ||
        options.domain) {
        return createRegex(options);
    }
    return genericUriRegex;
}
exports.uriRegex = uriRegex;
//# sourceMappingURL=uri.js.map