/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
"use strict";

var path = require('path'),
    parsePath = require('path-parse'),
    SEP = path.sep || /* istanbul ignore next */ '/',
    origParser = parsePath,
    origSep = SEP;

function makeRelativeNormalizedPath(str, sep) {
    var parsed = parsePath(str),
        root = parsed.root,
        dir,
        file = parsed.base,
        quoted,
        pos;

    // handle a weird windows case separately
    if (sep === '\\') {
        pos = root.indexOf(':\\');
        if (pos >= 0) {
            root = root.substring(0, pos + 2);
        }
    }
    dir = parsed.dir.substring(root.length);

    if (str === '') {
        return [];
    }

    if (sep !== '/') {
        quoted = new RegExp(sep.replace(/\W/g, '\\$&'), 'g');
        dir = dir.replace(quoted, '/');
        file = file.replace(quoted, '/'); // excessively paranoid?
    }

    if (dir !== '') {
        dir = dir + '/' + file;
    } else {
        dir = file;
    }
    if (dir.substring(0,1) === '/') {
        dir = dir.substring(1);
    }
    dir = dir.split(/\/+/);
    return dir;
}

function Path(strOrArray) {
    if (Array.isArray(strOrArray)) {
        this.v = strOrArray;
    } else if (typeof strOrArray === "string") {
        this.v = makeRelativeNormalizedPath(strOrArray, SEP);
    } else {
        throw new Error('Invalid Path argument must be string or array:' + strOrArray);
    }
}

Path.prototype.toString = function () {
    return this.v.join('/');
};

Path.prototype.hasParent = function () {
    return this.v.length > 0;
};

Path.prototype.parent = function () {
    if (!this.hasParent()) {
        throw new Error('Unable to get parent for 0 elem path');
    }
    var p = this.v.slice();
    p.pop();
    return new Path(p);
};

Path.prototype.elements = function () {
    return this.v.slice();
};

Path.prototype.contains = function (other) {
    var i;
    if (other.length > this.length) {
        return false;
    }
    for (i = 0; i < other.length; i += 1) {
        if (this.v[i] !== other.v[i]) {
            return false;
        }
    }
    return true;
};

Path.prototype.ancestorOf = function (other) {
    return other.contains(this) && other.length !== this.length;
};

Path.prototype.descendantOf = function (other) {
    return this.contains(other) && other.length !== this.length;
};

Path.prototype.commonPrefixPath = function (other) {
    var len = this.length > other.length ? other.length : this.length,
        i,
        ret = [];

    for (i = 0; i < len; i +=1 ) {
        if (this.v[i] === other.v[i]) {
            ret.push(this.v[i]);
        } else {
            break;
        }
    }
    return new Path(ret);
};

['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (f) {
    Path.prototype[f] = function () {
        var args = Array.prototype.slice.call(arguments),
            v = this.v;
        return v[f].apply(v, args);
    };
});

Path.compare = function (a, b) {
    var al = a.length,
        bl = b.length,
        astr,
        bstr;
    if (al < bl) {
        return -1;
    }
    if (al > bl) {
        return 1;
    }
    astr = a.toString();
    bstr = b.toString();
    return astr < bstr ? -1 : astr > bstr ? 1 : 0;
};

Object.defineProperty(Path.prototype, 'length', {
    enumerable: true,
    get: function () {
        return this.v.length;
    }
});

module.exports = Path;
Path.tester = {
    setParserAndSep: function (p, sep) {
        parsePath = p;
        SEP = sep;
    },
    reset: function () {
        parsePath = origParser;
        SEP = origSep;
    }
};

