"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommaAndColonSeparatedRecord = exports.ConnectionString = exports.redactConnectionString = void 0;
const whatwg_url_1 = require("whatwg-url");
const redact_1 = require("./redact");
Object.defineProperty(exports, "redactConnectionString", { enumerable: true, get: function () { return redact_1.redactConnectionString; } });
const DUMMY_HOSTNAME = '__this_is_a_placeholder__';
function connectionStringHasValidScheme(connectionString) {
    return (connectionString.startsWith('mongodb://') ||
        connectionString.startsWith('mongodb+srv://'));
}
const HOSTS_REGEX = /^(?<protocol>[^/]+):\/\/(?:(?<username>[^:@]*)(?::(?<password>[^@]*))?@)?(?<hosts>(?!:)[^/?@]*)(?<rest>.*)/;
class CaseInsensitiveMap extends Map {
    delete(name) {
        return super.delete(this._normalizeKey(name));
    }
    get(name) {
        return super.get(this._normalizeKey(name));
    }
    has(name) {
        return super.has(this._normalizeKey(name));
    }
    set(name, value) {
        return super.set(this._normalizeKey(name), value);
    }
    _normalizeKey(name) {
        name = `${name}`;
        for (const key of this.keys()) {
            if (key.toLowerCase() === name.toLowerCase()) {
                name = key;
                break;
            }
        }
        return name;
    }
}
function caseInsenstiveURLSearchParams(Ctor) {
    return class CaseInsenstiveURLSearchParams extends Ctor {
        append(name, value) {
            return super.append(this._normalizeKey(name), value);
        }
        delete(name) {
            return super.delete(this._normalizeKey(name));
        }
        get(name) {
            return super.get(this._normalizeKey(name));
        }
        getAll(name) {
            return super.getAll(this._normalizeKey(name));
        }
        has(name) {
            return super.has(this._normalizeKey(name));
        }
        set(name, value) {
            return super.set(this._normalizeKey(name), value);
        }
        keys() {
            return super.keys();
        }
        values() {
            return super.values();
        }
        entries() {
            return super.entries();
        }
        [Symbol.iterator]() {
            return super[Symbol.iterator]();
        }
        _normalizeKey(name) {
            return CaseInsensitiveMap.prototype._normalizeKey.call(this, name);
        }
    };
}
class URLWithoutHost extends whatwg_url_1.URL {
}
class MongoParseError extends Error {
    get name() {
        return 'MongoParseError';
    }
}
class ConnectionString extends URLWithoutHost {
    constructor(uri, options = {}) {
        var _a;
        const { looseValidation } = options;
        if (!looseValidation && !connectionStringHasValidScheme(uri)) {
            throw new MongoParseError('Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"');
        }
        const match = uri.match(HOSTS_REGEX);
        if (!match) {
            throw new MongoParseError(`Invalid connection string "${uri}"`);
        }
        const { protocol, username, password, hosts, rest } = (_a = match.groups) !== null && _a !== void 0 ? _a : {};
        if (!looseValidation) {
            if (!protocol || !hosts) {
                throw new MongoParseError(`Protocol and host list are required in "${uri}"`);
            }
            try {
                decodeURIComponent(username !== null && username !== void 0 ? username : '');
                decodeURIComponent(password !== null && password !== void 0 ? password : '');
            }
            catch (err) {
                throw new MongoParseError(err.message);
            }
            const illegalCharacters = /[:/?#[\]@]/gi;
            if (username === null || username === void 0 ? void 0 : username.match(illegalCharacters)) {
                throw new MongoParseError(`Username contains unescaped characters ${username}`);
            }
            if (!username || !password) {
                const uriWithoutProtocol = uri.replace(`${protocol}://`, '');
                if (uriWithoutProtocol.startsWith('@') || uriWithoutProtocol.startsWith(':')) {
                    throw new MongoParseError('URI contained empty userinfo section');
                }
            }
            if (password === null || password === void 0 ? void 0 : password.match(illegalCharacters)) {
                throw new MongoParseError('Password contains unescaped characters');
            }
        }
        let authString = '';
        if (typeof username === 'string')
            authString += username;
        if (typeof password === 'string')
            authString += `:${password}`;
        if (authString)
            authString += '@';
        try {
            super(`${protocol.toLowerCase()}://${authString}${DUMMY_HOSTNAME}${rest}`);
        }
        catch (err) {
            if (looseValidation) {
                new ConnectionString(uri, {
                    ...options,
                    looseValidation: false
                });
            }
            if (typeof err.message === 'string') {
                err.message = err.message.replace(DUMMY_HOSTNAME, hosts);
            }
            throw err;
        }
        this._hosts = hosts.split(',');
        if (!looseValidation) {
            if (this.isSRV && this.hosts.length !== 1) {
                throw new MongoParseError('mongodb+srv URI cannot have multiple service names');
            }
            if (this.isSRV && this.hosts.some(host => host.includes(':'))) {
                throw new MongoParseError('mongodb+srv URI cannot have port number');
            }
        }
        if (!this.pathname) {
            this.pathname = '/';
        }
        Object.setPrototypeOf(this.searchParams, caseInsenstiveURLSearchParams(this.searchParams.constructor).prototype);
    }
    get host() { return DUMMY_HOSTNAME; }
    set host(_ignored) { throw new Error('No single host for connection string'); }
    get hostname() { return DUMMY_HOSTNAME; }
    set hostname(_ignored) { throw new Error('No single host for connection string'); }
    get port() { return ''; }
    set port(_ignored) { throw new Error('No single host for connection string'); }
    get href() { return this.toString(); }
    set href(_ignored) { throw new Error('Cannot set href for connection strings'); }
    get isSRV() {
        return this.protocol.includes('srv');
    }
    get hosts() {
        return this._hosts;
    }
    set hosts(list) {
        this._hosts = list;
    }
    toString() {
        return super.toString().replace(DUMMY_HOSTNAME, this.hosts.join(','));
    }
    clone() {
        return new ConnectionString(this.toString(), {
            looseValidation: true
        });
    }
    redact(options) {
        return (0, redact_1.redactValidConnectionString)(this, options);
    }
    typedSearchParams() {
        const sametype = false && new (caseInsenstiveURLSearchParams(whatwg_url_1.URLSearchParams))();
        return this.searchParams;
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
        const { href, origin, protocol, username, password, hosts, pathname, search, searchParams, hash } = this;
        return { href, origin, protocol, username, password, hosts, pathname, search, searchParams, hash };
    }
}
exports.ConnectionString = ConnectionString;
class CommaAndColonSeparatedRecord extends CaseInsensitiveMap {
    constructor(from) {
        super();
        for (const entry of (from !== null && from !== void 0 ? from : '').split(',')) {
            if (!entry)
                continue;
            const colonIndex = entry.indexOf(':');
            if (colonIndex === -1) {
                this.set(entry, '');
            }
            else {
                this.set(entry.slice(0, colonIndex), entry.slice(colonIndex + 1));
            }
        }
    }
    toString() {
        return [...this].map(entry => entry.join(':')).join(',');
    }
}
exports.CommaAndColonSeparatedRecord = CommaAndColonSeparatedRecord;
exports.default = ConnectionString;
//# sourceMappingURL=index.js.map