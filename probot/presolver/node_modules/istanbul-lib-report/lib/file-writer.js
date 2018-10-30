/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var util = require('util'),
    path = require('path'),
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    supportsColor = require('supports-color'),
    isAbsolute = path.isAbsolute || /* istanbul ignore next */ function (p) {
            return path.resolve(p) === path.normalize(p);
        };

/**
 * abstract interface for writing content
 * @class ContentWriter
 * @constructor
 */
/* istanbul ignore next: abstract class */
function ContentWriter() {
}

/**
 * writes a string as-is to the destination
 * @param {String} str the string to write
 */
/* istanbul ignore next: abstract class */
ContentWriter.prototype.write = function () {
    throw new Error('write: must be overridden');
};

/**
 * returns the colorized version of a string. Typically,
 * content writers that write to files will return the
 * same string and ones writing to a tty will wrap it in
 * appropriate escape sequences.
 * @param {String} str the string to colorize
 * @param {String} clazz one of `high`, `medium` or `low`
 * @returns {String} the colorized form of the string
 */
ContentWriter.prototype.colorize = function (str /*, clazz*/) {
    return str;
};

/**
 * writes a string appended with a newline to the destination
 * @param {String} str the string to write
 */
ContentWriter.prototype.println = function (str) {
    this.write(str + '\n');
};

/**
 * closes this content writer. Should be called after all writes are complete.
 */
ContentWriter.prototype.close = function () {
};

/**
 * a content writer that writes to a file
 * @param {Number} fd - the file descriptor
 * @extends ContentWriter
 * @constructor
 */
function FileContentWriter(fd) {
    this.fd = fd;
}
util.inherits(FileContentWriter, ContentWriter);

FileContentWriter.prototype.write = function (str) {
    fs.writeSync(this.fd, str);
};

FileContentWriter.prototype.close = function () {
    fs.closeSync(this.fd);
};

/**
 * a content writer that writes to the console
 * @extends ContentWriter
 * @constructor
 */
function ConsoleWriter() {
}
util.inherits(ConsoleWriter, ContentWriter);

// allow stdout to be captured for tests.
var capture = false;
var output = '';
ConsoleWriter.prototype.write = function (str) {
    if (capture) {
        output += str;
    } else {
        process.stdout.write(str);
    }
};

ConsoleWriter.prototype.colorize = function (str, clazz) {
    var colors = {
        low: '31;1',
        medium: '33;1',
        high: '32;1'
    };

    /* istanbul ignore next: different modes for CI and local */
    if (supportsColor && colors[clazz]) {
        return '\u001b[' + colors[clazz] + 'm' + str + '\u001b[0m';
    }
    return str;
};

/**
 * utility for writing files under a specific directory
 * @class FileWriter
 * @param {String} baseDir the base directory under which files should be written
 * @constructor
 */
function FileWriter(baseDir) {
    if (!baseDir) {
        throw new Error('baseDir must be specified');
    }
    this.baseDir = baseDir;
}

/**
* static helpers for capturing stdout report output;
* super useful for tests!
*/
FileWriter.startCapture = function () {
  capture = true;
};
FileWriter.stopCapture = function () {
  capture = false;
};
FileWriter.getOutput = function () {
  return output;
};
FileWriter.resetOutput = function () {
  output = '';
};

/**
 * returns a FileWriter that is rooted at the supplied subdirectory
 * @param {String} subdir the subdirectory under which to root the
 *  returned FileWriter
 * @returns {FileWriter}
 */
FileWriter.prototype.writerForDir = function (subdir) {
    if (isAbsolute(subdir)) {
        throw new Error('Cannot create subdir writer for absolute path: ' + subdir);
    }
    return new FileWriter(this.baseDir + '/' + subdir);
};
/**
 * copies a file from a source directory to a destination name
 * @param {String} source path to source file
 * @param {String} dest relative path to destination file
 */
FileWriter.prototype.copyFile = function (source, dest) {
    if (isAbsolute(dest)) {
        throw new Error('Cannot write to absolute path: ' + dest);
    }
    dest = path.resolve(this.baseDir, dest);
    mkdirp.sync(path.dirname(dest));
    fs.writeFileSync(dest, fs.readFileSync(source));
};
/**
 * returns a content writer for writing content to the supplied file.
 * @param {String|null} file the relative path to the file or the special
 *  values `"-"` or `null` for writing to the console
 * @returns {ContentWriter}
 */
FileWriter.prototype.writeFile = function (file) {
    if (file === null || file === '-') {
        return new ConsoleWriter();
    }
    if (isAbsolute(file)) {
        throw new Error('Cannot write to absolute path: ' + file);
    }
    file = path.resolve(this.baseDir, file);
    mkdirp.sync(path.dirname(file));
    return new FileContentWriter(fs.openSync(file, 'w'));
};

module.exports = FileWriter;
