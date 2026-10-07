'use strict';

const Url = require('url');

const Errors = require('./errors');


const internals = {
    minDomainSegments: 2,
    nonAsciiRx: /[^\x00-\x7f]/,
    domainControlRx: /[\x00-\x20@\:\/\\#!\$&\'\(\)\*\+,;=\?]/,                          // Control + space + separators
    tldSegmentRx: /^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,
    domainSegmentRx: /^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,
    URL: Url.URL || URL                                                                 // $lab:coverage:ignore$
};


exports.analyze = function (domain, options = {}) {

    if (!domain) {                                                                      // Catch null / undefined
        return Errors.code('DOMAIN_NON_EMPTY_STRING');
    }

    if (typeof domain !== 'string') {
        throw new Error('Invalid input: domain must be a string');
    }

    if (domain.length > 256) {
        return Errors.code('DOMAIN_TOO_LONG');
    }

    const ascii = !internals.nonAsciiRx.test(domain);
    if (!ascii) {
        if (options.allowUnicode === false) {                                           // Defaults to true
            return Errors.code('DOMAIN_INVALID_UNICODE_CHARS');
        }

        domain = domain.normalize('NFC');
    }

    if (internals.domainControlRx.test(domain)) {
        return Errors.code('DOMAIN_INVALID_CHARS');
    }

    domain = internals.punycode(domain);

    // https://tools.ietf.org/html/rfc1035 section 2.3.1

    if (options.allowFullyQualified &&
        domain[domain.length - 1] === '.') {

        domain = domain.slice(0, -1);
    }

    const minDomainSegments = options.minDomainSegments || internals.minDomainSegments;

    const segments = domain.split('.');
    if (segments.length < minDomainSegments) {
        return Errors.code('DOMAIN_SEGMENTS_COUNT');
    }

    if (options.maxDomainSegments) {
        if (segments.length > options.maxDomainSegments) {
            return Errors.code('DOMAIN_SEGMENTS_COUNT_MAX');
        }
    }

    const tlds = options.tlds;
    if (tlds) {
        const tld = segments[segments.length - 1].toLowerCase();
        if (tlds.deny && tlds.deny.has(tld) ||
            tlds.allow && !tlds.allow.has(tld)) {

            return Errors.code('DOMAIN_FORBIDDEN_TLDS');
        }
    }

    for (let i = 0; i < segments.length; ++i) {
        const segment = segments[i];

        if (!segment.length) {
            return Errors.code('DOMAIN_EMPTY_SEGMENT');
        }

        if (segment.length > 63) {
            return Errors.code('DOMAIN_LONG_SEGMENT');
        }

        if (i < segments.length - 1) {
            if (!internals.domainSegmentRx.test(segment)) {
                return Errors.code('DOMAIN_INVALID_CHARS');
            }
        }
        else {
            if (!internals.tldSegmentRx.test(segment)) {
                return Errors.code('DOMAIN_INVALID_TLDS_CHARS');
            }
        }
    }

    return null;
};


exports.isValid = function (domain, options) {

    return !exports.analyze(domain, options);
};


internals.punycode = function (domain) {

    if (domain.includes('%')) {
        domain = domain.replace(/%/g, '%25');
    }

    try {
        return new internals.URL(`http://${domain}`).host;
    }
    catch (err) {
        return domain;
    }
};
