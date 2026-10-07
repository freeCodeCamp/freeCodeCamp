/*! sass.js - v0.11.1 (f286436) - built 2019-10-20
  providing libsass 3.6.2 (4da7c4bd)
  via emscripten 1.38.31 (040e49a)
 */
var Sass = require('./sass.sync.js');
var fs = require('fs');
var path = require('path');

function fileExists(path) {
  var stat = fs.statSync(path);
  return stat && stat.isFile();
}

function removeFileExtension(path) {
  return path.slice(0, path.lastIndexOf('.'));
}

function importFileToSass(path, done) {
  // any path must be relative to CWD to work in both environments (real FS, and emscripten FS)
  var requestedPath = './' + path;
  // figure out the *actual* path of the file
  var filesystemPath = Sass.findPathVariation(fileExists, requestedPath);
  if (!filesystemPath) {
    done({
      error: 'File "' + requestedPath + '" not found',
    });

    return;
  }

  // Make sure to omit the ".css" file extension when it was omitted in requestedPath.
  // This allow raw css imports.
  // see https://github.com/sass/libsass/pull/754
  var isRawCss = !requestedPath.endsWith('.css') && filesystemPath.endsWith('.css');
  var targetPath = isRawCss ? removeFileExtension(filesystemPath) : filesystemPath;

  // write the file to emscripten FS so libsass internal FS handling
  // can engage the scss/sass switch, which apparently does not happen
  // for content provided through the importer callback directly
  var content = fs.readFileSync(filesystemPath, {encoding: 'utf8'});
  Sass.writeFile(filesystemPath, content, function() {
    done({
      path: targetPath,
    });
  });
}

function importerCallback(request, done) {
  importFileToSass(resolve(request), done);
}

function compileFile(path, options, callback) {
  if (!callback) {
    callback = options;
    options = {};
  }

  Sass.importer(importerCallback);
  importFileToSass(path, function() {
    Sass.compileFile(path, options, callback);
  });
}

function resolve(request) {
  // the request will not have the correct "resolved" path on Windows
  // see https://github.com/medialize/sass.js/issues/69
  // see https://github.com/medialize/sass.js/issues/86
  return path.normalize(
    path.join(
      // sass.js works in the "/sass/" directory, make that relative to CWD
      path.dirname(request.previous.replace(/^\/sass\//, '')),
      request.current
    )
  ).replace(/\\/g, '/');
}

compileFile.importFileToSass = importFileToSass;
compileFile.Sass = Sass;

module.exports = compileFile;
