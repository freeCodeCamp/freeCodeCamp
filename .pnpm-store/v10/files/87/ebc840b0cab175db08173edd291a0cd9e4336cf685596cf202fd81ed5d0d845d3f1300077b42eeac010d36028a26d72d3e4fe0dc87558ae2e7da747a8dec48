#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var parser = require('gitignore-parser');
var symLinks = {};
var ignoreFiles = ['.git'];
var vscodeignores = {};
function rdSync(dpath, tree) {
    var files = fs.readdirSync(dpath);
    if (files.indexOf('.vscodeignore') > -1) {
        vscodeignores[dpath] = parser.compile(fs.readFileSync(path.join(dpath, '.vscodeignore'), 'utf8'));
    }
    var vscodeignorePath = Object.keys(vscodeignores).find(function (f) { return dpath.indexOf(f) === 0; });
    var vscodeignore = vscodeignorePath ? vscodeignores[vscodeignorePath] : undefined;
    files.forEach(function (file) {
        // ignore non-essential directories / files
        if (ignoreFiles.indexOf(file) !== -1 || file[0] === '.') {
            return;
        }
        var fpath = "".concat(dpath, "/").concat(file);
        if (vscodeignore && vscodeignore.denies(fpath.replace(vscodeignorePath, ''))) {
            return;
        }
        try {
            // Avoid infinite loops.
            var lstat = fs.lstatSync(fpath);
            if (lstat.isSymbolicLink()) {
                if (!symLinks[lstat.dev]) {
                    symLinks[lstat.dev] = {};
                }
                // Ignore if we've seen it before
                if (symLinks[lstat.dev][lstat.ino]) {
                    return;
                }
                symLinks[lstat.dev][lstat.ino] = true;
            }
            var fstat = fs.statSync(fpath);
            if (fstat.isDirectory()) {
                var child = tree[file] = {};
                rdSync(fpath, child);
            }
            else {
                tree[file] = null;
            }
        }
        catch (e) {
            // Ignore and move on.
        }
    });
    return tree;
}
var fsListing = JSON.stringify(rdSync(process.cwd(), {}));
if (process.argv.length === 3) {
    var fname = process.argv[2];
    var parent_1 = path.dirname(fname);
    while (!fs.existsSync(parent_1)) {
        fs.mkdirSync(parent_1);
        parent_1 = path.dirname(parent_1);
    }
    fs.writeFileSync(fname, fsListing, { encoding: 'utf8' });
}
else {
    console.log(fsListing);
}