/*jshint node: true */
var inserted,
    Module = require('module'),
    fs = require('fs'),
    existingExtFn = Module._extensions['.js'],
    amdefineRegExp = /amdefine\.js/;

inserted  = "if (typeof define !== 'function') {var define = require('amdefine')(module)}";

//From the node/lib/module.js source:
function stripBOM(content) {
    // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
    // because the buffer-to-string conversion in `fs.readFileSync()`
    // translates it to FEFF, the UTF-16 BOM.
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
}

//Also adapted from the node/lib/module.js source:
function intercept(module, filename) {
    var content = stripBOM(fs.readFileSync(filename, 'utf8'));

    if (!amdefineRegExp.test(module.id)) {
        content = inserted + content;
    }

    module._compile(content, filename);
}

intercept._id = 'amdefine/intercept';

if (!existingExtFn._id || existingExtFn._id !== intercept._id) {
    Module._extensions['.js'] = intercept;
}
