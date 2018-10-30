var current = (process.versions && process.versions.node && process.versions.node.split('.')) || [];

function specifierIncluded(specifier) {
    var parts = specifier.split(' ');
    var op = parts.length > 1 ? parts[0] : '=';
    var versionParts = (parts.length > 1 ? parts[1] : parts[0]).split('.');

    for (var i = 0; i < 3; ++i) {
        var cur = Number(current[i] || 0);
        var ver = Number(versionParts[i] || 0);
        if (cur === ver) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        }
        if (op === '<') {
            return cur < ver;
        } else if (op === '>=') {
            return cur >= ver;
        } else {
            return false;
        }
    }
    return op === '>=';
}

function matchesRange(range) {
    var specifiers = range.split(/ ?&& ?/);
    if (specifiers.length === 0) { return false; }
    for (var i = 0; i < specifiers.length; ++i) {
        if (!specifierIncluded(specifiers[i])) { return false; }
    }
    return true;
}

function versionIncluded(specifierValue) {
    if (typeof specifierValue === 'boolean') { return specifierValue; }
    if (specifierValue && typeof specifierValue === 'object') {
        for (var i = 0; i < specifierValue.length; ++i) {
            if (matchesRange(specifierValue[i])) { return true; }
        }
        return false;
    }
    return matchesRange(specifierValue);
}

var data = require('./core.json');

var core = {};
for (var mod in data) { // eslint-disable-line no-restricted-syntax
    if (Object.prototype.hasOwnProperty.call(data, mod)) {
        core[mod] = versionIncluded(data[mod]);
    }
}
module.exports = core;
