'use strict';

exports.codes = {
    EMPTY_STRING: 'Address must be a non-empty string',
    FORBIDDEN_UNICODE: 'Address contains forbidden Unicode characters',
    MULTIPLE_AT_CHAR: 'Address cannot contain more than one @ character',
    MISSING_AT_CHAR: 'Address must contain one @ character',
    EMPTY_LOCAL: 'Address local part cannot be empty',
    ADDRESS_TOO_LONG: 'Address too long',
    LOCAL_TOO_LONG: 'Address local part too long',
    EMPTY_LOCAL_SEGMENT: 'Address local part contains empty dot-separated segment',
    INVALID_LOCAL_CHARS: 'Address local part contains invalid character',
    DOMAIN_NON_EMPTY_STRING: 'Domain must be a non-empty string',
    DOMAIN_TOO_LONG: 'Domain too long',
    DOMAIN_INVALID_UNICODE_CHARS: 'Domain contains forbidden Unicode characters',
    DOMAIN_INVALID_CHARS: 'Domain contains invalid character',
    DOMAIN_INVALID_TLDS_CHARS: 'Domain contains invalid tld character',
    DOMAIN_SEGMENTS_COUNT: 'Domain lacks the minimum required number of segments',
    DOMAIN_SEGMENTS_COUNT_MAX: 'Domain contains too many segments',
    DOMAIN_FORBIDDEN_TLDS: 'Domain uses forbidden TLD',
    DOMAIN_EMPTY_SEGMENT: 'Domain contains empty dot-separated segment',
    DOMAIN_LONG_SEGMENT: 'Domain contains dot-separated segment that is too long'
};


exports.code = function (code) {

    return { code, error: exports.codes[code] };
};
