"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.glob = exports.sync = exports.iterate = exports.iterateSync = exports.stream = exports.streamSync = exports.Ignore = exports.hasMagic = exports.Glob = exports.unescape = exports.escape = void 0;
exports.globStreamSync = globStreamSync;
exports.globStream = globStream;
exports.globSync = globSync;
exports.globIterateSync = globIterateSync;
exports.globIterate = globIterate;
const minimatch_1 = require("minimatch");
const glob_js_1 = require("./glob.js");
const has_magic_js_1 = require("./has-magic.js");
var minimatch_2 = require("minimatch");
Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return minimatch_2.escape; } });
Object.defineProperty(exports, "unescape", { enumerable: true, get: function () { return minimatch_2.unescape; } });
var glob_js_2 = require("./glob.js");
Object.defineProperty(exports, "Glob", { enumerable: true, get: function () { return glob_js_2.Glob; } });
var has_magic_js_2 = require("./has-magic.js");
Object.defineProperty(exports, "hasMagic", { enumerable: true, get: function () { return has_magic_js_2.hasMagic; } });
var ignore_js_1 = require("./ignore.js");
Object.defineProperty(exports, "Ignore", { enumerable: true, get: function () { return ignore_js_1.Ignore; } });
function globStreamSync(pattern, options = {}) {
    return new glob_js_1.Glob(pattern, options).streamSync();
}
function globStream(pattern, options = {}) {
    return new glob_js_1.Glob(pattern, options).stream();
}
function globSync(pattern, options = {}) {
    return new glob_js_1.Glob(pattern, options).walkSync();
}
async function glob_(pattern, options = {}) {
    return new glob_js_1.Glob(pattern, options).walk();
}
function globIterateSync(pattern, options = {}) {
    return new glob_js_1.Glob(pattern, options).iterateSync();
}
function globIterate(pattern, options = {}) {
    return new glob_js_1.Glob(pattern, options).iterate();
}
// aliases: glob.sync.stream() glob.stream.sync() glob.sync() etc
exports.streamSync = globStreamSync;
exports.stream = Object.assign(globStream, { sync: globStreamSync });
exports.iterateSync = globIterateSync;
exports.iterate = Object.assign(globIterate, {
    sync: globIterateSync,
});
exports.sync = Object.assign(globSync, {
    stream: globStreamSync,
    iterate: globIterateSync,
});
exports.glob = Object.assign(glob_, {
    glob: glob_,
    globSync,
    sync: exports.sync,
    globStream,
    stream: exports.stream,
    globStreamSync,
    streamSync: exports.streamSync,
    globIterate,
    iterate: exports.iterate,
    globIterateSync,
    iterateSync: exports.iterateSync,
    Glob: glob_js_1.Glob,
    hasMagic: has_magic_js_1.hasMagic,
    escape: minimatch_1.escape,
    unescape: minimatch_1.unescape,
});
exports.glob.glob = exports.glob;
//# sourceMappingURL=index.js.map