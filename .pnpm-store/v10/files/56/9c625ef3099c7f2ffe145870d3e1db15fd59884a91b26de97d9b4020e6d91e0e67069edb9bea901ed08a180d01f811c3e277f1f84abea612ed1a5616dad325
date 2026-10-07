"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
exports.props = [
    'constants',
    'F_OK',
    'R_OK',
    'W_OK',
    'X_OK',
    'Stats',
];
exports.rewritableMethods = [
    'accessSync',
    'access',
    'appendFileSync',
    'appendFile',
    'chmodSync',
    'chmod',
    'chownSync',
    'chown',
    'createReadStream',
    'createWriteStream',
    'existsSync',
    'exists',
    'lchmodSync',
    'lchmod',
    'lchownSync',
    'lchown',
    'linkSync',
    'link',
    'lstatSync',
    'lstat',
    'mkdirSync',
    'mkdir',
    'mkdtempSync',
    'mkdtemp',
    'openSync',
    'open',
    'readdirSync',
    'readdir',
    'readFileSync',
    'readFile',
    'readlinkSync',
    'readlink',
    'realpathSync',
    'realpath',
    'renameSync',
    'rename',
    'rmdirSync',
    'rmdir',
    'statSync',
    'stat',
    'symlinkSync',
    'symlink',
    'truncateSync',
    'truncate',
    'unlinkSync',
    'unlink',
    'unwatchFile',
    'utimesSync',
    'utimes',
    'watch',
    'watchFile',
    'writeFileSync',
    'writeFile',
];
exports.proxyableMethods = [
    'ftruncateSync',
    'fchownSync',
    'fchmodSync',
    'fstatSync',
    'closeSync',
    'futimesSync',
    'fsyncSync',
    'writeSync',
    'readSync',
    'fdatasyncSync',
    'ftruncate',
    'fchown',
    'fchmod',
    'fstat',
    'close',
    'futimes',
    'fsync',
    'write',
    'read',
    'fdatasync',
    '_toUnixTimestamp',
];
function link(fs, rewrites) {
    if (!(rewrites instanceof Array))
        throw TypeError('rewrites must be a list of 2-tuples');
    // If only one tuple is provided.
    if (typeof rewrites[0] === 'string')
        rewrites = [rewrites];
    var rews = [];
    for (var _i = 0, _a = rewrites; _i < _a.length; _i++) {
        var _b = _a[_i], from = _b[0], to = _b[1];
        rews.push([path_1.resolve(from), path_1.resolve(to)]);
    }
    var lfs = {};
    // Attach some props.
    for (var _c = 0, props_1 = exports.props; _c < props_1.length; _c++) {
        var prop = props_1[_c];
        lfs[prop] = fs[prop];
    }
    var _loop_1 = function (method) {
        var func = fs[method];
        if (typeof func !== 'function')
            return "continue";
        lfs[method] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var path = args[0];
            // If first argument is not a path, just proxy the function.
            if ((typeof path !== 'string') && !Buffer.isBuffer(path)) {
                if (!require('url').URL || !(path instanceof require('url').URL))
                    return func.apply(fs, args);
            }
            // Rewrite the path argument.
            var filename = path_1.resolve(String(path));
            var _loop_2 = function (from, to) {
                if (filename.indexOf(from) === 0) {
                    var rootRegex = /(?:^[a-zA-Z]:\\$)|(?:^\/$)/; // C:\ vs /
                    var isRoot = from.match(rootRegex);
                    var baseRegex = '^(' + from.replace(/\\/g, '\\\\') + ')';
                    if (isRoot) {
                        var regex = new RegExp(baseRegex);
                        filename = filename.replace(regex, function () { return to + path_1.sep; });
                    }
                    else {
                        var regex = new RegExp(baseRegex + '(\\\\|\/|$)');
                        filename = filename.replace(regex, function (match, p1, p2) { return to + p2; });
                    }
                }
            };
            for (var _a = 0, rews_1 = rews; _a < rews_1.length; _a++) {
                var _b = rews_1[_a], from = _b[0], to = _b[1];
                _loop_2(from, to);
            }
            args[0] = filename;
            return func.apply(fs, args);
        };
    };
    // Rewrite the path of the selected methods.
    for (var _d = 0, rewritableMethods_1 = exports.rewritableMethods; _d < rewritableMethods_1.length; _d++) {
        var method = rewritableMethods_1[_d];
        _loop_1(method);
    }
    // Just proxy the rest of the methods.
    for (var _e = 0, proxyableMethods_1 = exports.proxyableMethods; _e < proxyableMethods_1.length; _e++) {
        var method = proxyableMethods_1[_e];
        var func = fs[method];
        if (typeof func !== 'function')
            continue;
        lfs[method] = func.bind(fs);
    }
    return lfs;
}
exports.link = link;
