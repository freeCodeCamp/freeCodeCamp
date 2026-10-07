'use strict';

const Decode = require('./decode');
const Domain = require('./domain');
const Email = require('./email');
const Errors = require('./errors');
const Ip = require('./ip');
const Tlds = require('./tlds');
const Uri = require('./uri');


const internals = {
    defaultTlds: { allow: Tlds, deny: null }
};


module.exports = {
    errors: Errors.codes,

    domain: {
        analyze(domain, options) {

            options = internals.options(options);
            return Domain.analyze(domain, options);
        },

        isValid(domain, options) {

            options = internals.options(options);
            return Domain.isValid(domain, options);
        }
    },
    email: {
        analyze(email, options) {

            options = internals.options(options);
            return Email.analyze(email, options);
        },

        isValid(email, options) {

            options = internals.options(options);
            return Email.isValid(email, options);
        }
    },
    ip: {
        regex: Ip.regex
    },
    uri: {
        decode: Decode.decode,
        regex: Uri.regex
    }
};


internals.options = function (options) {

    if (!options) {
        return { tlds: internals.defaultTlds };
    }

    if (options.tlds === false) {                // Defaults to true
        return options;
    }

    if (!options.tlds ||
        options.tlds === true) {

        return Object.assign({}, options, { tlds: internals.defaultTlds });
    }

    if (typeof options.tlds !== 'object') {
        throw new Error('Invalid options: tlds must be a boolean or an object');
    }

    if (options.tlds.deny) {
        if (options.tlds.deny instanceof Set === false) {
            throw new Error('Invalid options: tlds.deny must be a Set object');
        }

        if (options.tlds.allow) {
            throw new Error('Invalid options: cannot specify both tlds.allow and tlds.deny lists');
        }

        return options;
    }

    if (options.tlds.allow === true) {
        return Object.assign({}, options, { tlds: internals.defaultTlds });
    }

    if (options.tlds.allow instanceof Set === false) {
        throw new Error('Invalid options: tlds.allow must be a Set object or true');
    }

    return options;
};
