/* eslint no-console: 0 */

'use strict';

const urllib = require('url');
const util = require('util');
const fs = require('fs');
const nmfetch = require('../fetch');
const dns = require('dns');
const net = require('net');
const os = require('os');

const DNS_TTL = 5 * 60 * 1000;

let networkInterfaces;
try {
    networkInterfaces = os.networkInterfaces();
} catch (err) {
    // fails on some systems
}

module.exports.networkInterfaces = networkInterfaces;

const isFamilySupported = (family, allowInternal) => {
    let networkInterfaces = module.exports.networkInterfaces;
    if (!networkInterfaces) {
        // hope for the best
        return true;
    }

    const familySupported =
        // crux that replaces Object.values(networkInterfaces) as Object.values is not supported in nodejs v6
        Object.keys(networkInterfaces)
            .map(key => networkInterfaces[key])
            // crux that replaces .flat() as it is not supported in older Node versions (v10 and older)
            .reduce((acc, val) => acc.concat(val), [])
            .filter(i => !i.internal || allowInternal)
            .filter(i => i.family === 'IPv' + family || i.family === family).length > 0;

    return familySupported;
};

const resolver = (family, hostname, options, callback) => {
    options = options || {};
    const familySupported = isFamilySupported(family, options.allowInternalNetworkInterfaces);

    if (!familySupported) {
        return callback(null, []);
    }

    const resolver = dns.Resolver ? new dns.Resolver(options) : dns;
    resolver['resolve' + family](hostname, (err, addresses) => {
        if (err) {
            switch (err.code) {
                case dns.NODATA:
                case dns.NOTFOUND:
                case dns.NOTIMP:
                case dns.SERVFAIL:
                case dns.CONNREFUSED:
                case dns.REFUSED:
                case 'EAI_AGAIN':
                    return callback(null, []);
            }
            return callback(err);
        }
        return callback(null, Array.isArray(addresses) ? addresses : [].concat(addresses || []));
    });
};

const dnsCache = (module.exports.dnsCache = new Map());

const formatDNSValue = (value, extra) => {
    if (!value) {
        return Object.assign({}, extra || {});
    }

    return Object.assign(
        {
            servername: value.servername,
            host:
                !value.addresses || !value.addresses.length
                    ? null
                    : value.addresses.length === 1
                    ? value.addresses[0]
                    : value.addresses[Math.floor(Math.random() * value.addresses.length)]
        },
        extra || {}
    );
};

module.exports.resolveHostname = (options, callback) => {
    options = options || {};

    if (!options.host && options.servername) {
        options.host = options.servername;
    }

    if (!options.host || net.isIP(options.host)) {
        // nothing to do here
        let value = {
            addresses: [options.host],
            servername: options.servername || false
        };
        return callback(
            null,
            formatDNSValue(value, {
                cached: false
            })
        );
    }

    let cached;
    if (dnsCache.has(options.host)) {
        cached = dnsCache.get(options.host);

        if (!cached.expires || cached.expires >= Date.now()) {
            return callback(
                null,
                formatDNSValue(cached.value, {
                    cached: true
                })
            );
        }
    }

    resolver(4, options.host, options, (err, addresses) => {
        if (err) {
            if (cached) {
                // ignore error, use expired value
                return callback(
                    null,
                    formatDNSValue(cached.value, {
                        cached: true,
                        error: err
                    })
                );
            }
            return callback(err);
        }

        if (addresses && addresses.length) {
            let value = {
                addresses,
                servername: options.servername || options.host
            };

            dnsCache.set(options.host, {
                value,
                expires: Date.now() + (options.dnsTtl || DNS_TTL)
            });

            return callback(
                null,
                formatDNSValue(value, {
                    cached: false
                })
            );
        }

        resolver(6, options.host, options, (err, addresses) => {
            if (err) {
                if (cached) {
                    // ignore error, use expired value
                    return callback(
                        null,
                        formatDNSValue(cached.value, {
                            cached: true,
                            error: err
                        })
                    );
                }
                return callback(err);
            }

            if (addresses && addresses.length) {
                let value = {
                    addresses,
                    servername: options.servername || options.host
                };

                dnsCache.set(options.host, {
                    value,
                    expires: Date.now() + (options.dnsTtl || DNS_TTL)
                });

                return callback(
                    null,
                    formatDNSValue(value, {
                        cached: false
                    })
                );
            }

            try {
                dns.lookup(options.host, { all: true }, (err, addresses) => {
                    if (err) {
                        if (cached) {
                            // ignore error, use expired value
                            return callback(
                                null,
                                formatDNSValue(cached.value, {
                                    cached: true,
                                    error: err
                                })
                            );
                        }
                        return callback(err);
                    }

                    let address = addresses
                        ? addresses
                              .filter(addr => isFamilySupported(addr.family))
                              .map(addr => addr.address)
                              .shift()
                        : false;

                    if (addresses && addresses.length && !address) {
                        // there are addresses but none can be used
                        console.warn(`Failed to resolve IPv${addresses[0].family} addresses with current network`);
                    }

                    if (!address && cached) {
                        // nothing was found, fallback to cached value
                        return callback(
                            null,
                            formatDNSValue(cached.value, {
                                cached: true
                            })
                        );
                    }

                    let value = {
                        addresses: address ? [address] : [options.host],
                        servername: options.servername || options.host
                    };

                    dnsCache.set(options.host, {
                        value,
                        expires: Date.now() + (options.dnsTtl || DNS_TTL)
                    });

                    return callback(
                        null,
                        formatDNSValue(value, {
                            cached: false
                        })
                    );
                });
            } catch (err) {
                if (cached) {
                    // ignore error, use expired value
                    return callback(
                        null,
                        formatDNSValue(cached.value, {
                            cached: true,
                            error: err
                        })
                    );
                }
                return callback(err);
            }
        });
    });
};
/**
 * Parses connection url to a structured configuration object
 *
 * @param {String} str Connection url
 * @return {Object} Configuration object
 */
module.exports.parseConnectionUrl = str => {
    str = str || '';
    let options = {};

    [urllib.parse(str, true)].forEach(url => {
        let auth;

        switch (url.protocol) {
            case 'smtp:':
                options.secure = false;
                break;
            case 'smtps:':
                options.secure = true;
                break;
            case 'direct:':
                options.direct = true;
                break;
        }

        if (!isNaN(url.port) && Number(url.port)) {
            options.port = Number(url.port);
        }

        if (url.hostname) {
            options.host = url.hostname;
        }

        if (url.auth) {
            auth = url.auth.split(':');

            if (!options.auth) {
                options.auth = {};
            }

            options.auth.user = auth.shift();
            options.auth.pass = auth.join(':');
        }

        Object.keys(url.query || {}).forEach(key => {
            let obj = options;
            let lKey = key;
            let value = url.query[key];

            if (!isNaN(value)) {
                value = Number(value);
            }

            switch (value) {
                case 'true':
                    value = true;
                    break;
                case 'false':
                    value = false;
                    break;
            }

            // tls is nested object
            if (key.indexOf('tls.') === 0) {
                lKey = key.substr(4);
                if (!options.tls) {
                    options.tls = {};
                }
                obj = options.tls;
            } else if (key.indexOf('.') >= 0) {
                // ignore nested properties besides tls
                return;
            }

            if (!(lKey in obj)) {
                obj[lKey] = value;
            }
        });
    });

    return options;
};

module.exports._logFunc = (logger, level, defaults, data, message, ...args) => {
    let entry = {};

    Object.keys(defaults || {}).forEach(key => {
        if (key !== 'level') {
            entry[key] = defaults[key];
        }
    });

    Object.keys(data || {}).forEach(key => {
        if (key !== 'level') {
            entry[key] = data[key];
        }
    });

    logger[level](entry, message, ...args);
};

/**
 * Returns a bunyan-compatible logger interface. Uses either provided logger or
 * creates a default console logger
 *
 * @param {Object} [options] Options object that might include 'logger' value
 * @return {Object} bunyan compatible logger
 */
module.exports.getLogger = (options, defaults) => {
    options = options || {};

    let response = {};
    let levels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];

    if (!options.logger) {
        // use vanity logger
        levels.forEach(level => {
            response[level] = () => false;
        });
        return response;
    }

    let logger = options.logger;

    if (options.logger === true) {
        // create console logger
        logger = createDefaultLogger(levels);
    }

    levels.forEach(level => {
        response[level] = (data, message, ...args) => {
            module.exports._logFunc(logger, level, defaults, data, message, ...args);
        };
    });

    return response;
};

/**
 * Wrapper for creating a callback that either resolves or rejects a promise
 * based on input
 *
 * @param {Function} resolve Function to run if callback is called
 * @param {Function} reject Function to run if callback ends with an error
 */
module.exports.callbackPromise = (resolve, reject) =>
    function () {
        let args = Array.from(arguments);
        let err = args.shift();
        if (err) {
            reject(err);
        } else {
            resolve(...args);
        }
    };

module.exports.parseDataURI = uri => {
    let input = uri;
    let commaPos = input.indexOf(',');
    if (!commaPos) {
        return uri;
    }

    let data = input.substring(commaPos + 1);
    let metaStr = input.substring('data:'.length, commaPos);

    let encoding;

    let metaEntries = metaStr.split(';');
    let lastMetaEntry = metaEntries.length > 1 ? metaEntries[metaEntries.length - 1] : false;
    if (lastMetaEntry && lastMetaEntry.indexOf('=') < 0) {
        encoding = lastMetaEntry.toLowerCase();
        metaEntries.pop();
    }

    let contentType = metaEntries.shift() || 'application/octet-stream';
    let params = {};
    for (let entry of metaEntries) {
        let sep = entry.indexOf('=');
        if (sep >= 0) {
            let key = entry.substring(0, sep);
            let value = entry.substring(sep + 1);
            params[key] = value;
        }
    }

    switch (encoding) {
        case 'base64':
            data = Buffer.from(data, 'base64');
            break;
        case 'utf8':
            data = Buffer.from(data);
            break;
        default:
            try {
                data = Buffer.from(decodeURIComponent(data));
            } catch (err) {
                data = Buffer.from(data);
            }
            data = Buffer.from(data);
    }

    return { data, encoding, contentType, params };
};

/**
 * Resolves a String or a Buffer value for content value. Useful if the value
 * is a Stream or a file or an URL. If the value is a Stream, overwrites
 * the stream object with the resolved value (you can't stream a value twice).
 *
 * This is useful when you want to create a plugin that needs a content value,
 * for example the `html` or `text` value as a String or a Buffer but not as
 * a file path or an URL.
 *
 * @param {Object} data An object or an Array you want to resolve an element for
 * @param {String|Number} key Property name or an Array index
 * @param {Function} callback Callback function with (err, value)
 */
module.exports.resolveContent = (data, key, callback) => {
    let promise;

    if (!callback) {
        promise = new Promise((resolve, reject) => {
            callback = module.exports.callbackPromise(resolve, reject);
        });
    }

    let content = (data && data[key] && data[key].content) || data[key];
    let contentStream;
    let encoding = ((typeof data[key] === 'object' && data[key].encoding) || 'utf8')
        .toString()
        .toLowerCase()
        .replace(/[-_\s]/g, '');

    if (!content) {
        return callback(null, content);
    }

    if (typeof content === 'object') {
        if (typeof content.pipe === 'function') {
            return resolveStream(content, (err, value) => {
                if (err) {
                    return callback(err);
                }
                // we can't stream twice the same content, so we need
                // to replace the stream object with the streaming result
                if (data[key].content) {
                    data[key].content = value;
                } else {
                    data[key] = value;
                }
                callback(null, value);
            });
        } else if (/^https?:\/\//i.test(content.path || content.href)) {
            contentStream = nmfetch(content.path || content.href);
            return resolveStream(contentStream, callback);
        } else if (/^data:/i.test(content.path || content.href)) {
            let parsedDataUri = module.exports.parseDataURI(content.path || content.href);

            if (!parsedDataUri || !parsedDataUri.data) {
                return callback(null, Buffer.from(0));
            }
            return callback(null, parsedDataUri.data);
        } else if (content.path) {
            return resolveStream(fs.createReadStream(content.path), callback);
        }
    }

    if (typeof data[key].content === 'string' && !['utf8', 'usascii', 'ascii'].includes(encoding)) {
        content = Buffer.from(data[key].content, encoding);
    }

    // default action, return as is
    setImmediate(() => callback(null, content));

    return promise;
};

/**
 * Copies properties from source objects to target objects
 */
module.exports.assign = function (/* target, ... sources */) {
    let args = Array.from(arguments);
    let target = args.shift() || {};

    args.forEach(source => {
        Object.keys(source || {}).forEach(key => {
            if (['tls', 'auth'].includes(key) && source[key] && typeof source[key] === 'object') {
                // tls and auth are special keys that need to be enumerated separately
                // other objects are passed as is
                if (!target[key]) {
                    // ensure that target has this key
                    target[key] = {};
                }
                Object.keys(source[key]).forEach(subKey => {
                    target[key][subKey] = source[key][subKey];
                });
            } else {
                target[key] = source[key];
            }
        });
    });
    return target;
};

module.exports.encodeXText = str => {
    // ! 0x21
    // + 0x2B
    // = 0x3D
    // ~ 0x7E
    if (!/[^\x21-\x2A\x2C-\x3C\x3E-\x7E]/.test(str)) {
        return str;
    }
    let buf = Buffer.from(str);
    let result = '';
    for (let i = 0, len = buf.length; i < len; i++) {
        let c = buf[i];
        if (c < 0x21 || c > 0x7e || c === 0x2b || c === 0x3d) {
            result += '+' + (c < 0x10 ? '0' : '') + c.toString(16).toUpperCase();
        } else {
            result += String.fromCharCode(c);
        }
    }
    return result;
};

/**
 * Streams a stream value into a Buffer
 *
 * @param {Object} stream Readable stream
 * @param {Function} callback Callback function with (err, value)
 */
function resolveStream(stream, callback) {
    let responded = false;
    let chunks = [];
    let chunklen = 0;

    stream.on('error', err => {
        if (responded) {
            return;
        }

        responded = true;
        callback(err);
    });

    stream.on('readable', () => {
        let chunk;
        while ((chunk = stream.read()) !== null) {
            chunks.push(chunk);
            chunklen += chunk.length;
        }
    });

    stream.on('end', () => {
        if (responded) {
            return;
        }
        responded = true;

        let value;

        try {
            value = Buffer.concat(chunks, chunklen);
        } catch (E) {
            return callback(E);
        }
        callback(null, value);
    });
}

/**
 * Generates a bunyan-like logger that prints to console
 *
 * @returns {Object} Bunyan logger instance
 */
function createDefaultLogger(levels) {
    let levelMaxLen = 0;
    let levelNames = new Map();
    levels.forEach(level => {
        if (level.length > levelMaxLen) {
            levelMaxLen = level.length;
        }
    });

    levels.forEach(level => {
        let levelName = level.toUpperCase();
        if (levelName.length < levelMaxLen) {
            levelName += ' '.repeat(levelMaxLen - levelName.length);
        }
        levelNames.set(level, levelName);
    });

    let print = (level, entry, message, ...args) => {
        let prefix = '';
        if (entry) {
            if (entry.tnx === 'server') {
                prefix = 'S: ';
            } else if (entry.tnx === 'client') {
                prefix = 'C: ';
            }

            if (entry.sid) {
                prefix = '[' + entry.sid + '] ' + prefix;
            }

            if (entry.cid) {
                prefix = '[#' + entry.cid + '] ' + prefix;
            }
        }

        message = util.format(message, ...args);
        message.split(/\r?\n/).forEach(line => {
            console.log('[%s] %s %s', new Date().toISOString().substr(0, 19).replace(/T/, ' '), levelNames.get(level), prefix + line);
        });
    };

    let logger = {};
    levels.forEach(level => {
        logger[level] = print.bind(null, level);
    });

    return logger;
}
