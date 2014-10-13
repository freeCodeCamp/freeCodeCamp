var path = require('path');
var jsdom = require('../lib/jsdom');
var fs = require('fs');

function toPathname(dirname, relativePath) {
  var pathname = path.resolve(dirname, relativePath).replace(/\\/g, '/');
  if (pathname[0] !== '/') {
    pathname = '/' + pathname;
  }
  return pathname;
}

function toFileUrl(dirname, relativePath) {
  return 'file://' + toPathname(dirname, relativePath);
}

exports.toFileUrl = function (dirname) {
  return function (relativePath) {
    return toFileUrl(dirname, relativePath);
  };
};

exports.toPathname = function (dirname) {
  return function (relativePath) {
    return toPathname(dirname, relativePath);
  };
};

exports.load = function (dirname) {
  var fileCache = Object.create(null);

  return function (name, options) {
    options = options || {};

    var file = path.resolve(dirname, 'files/' + name + '.html');

    if (!options.url) {
      options.url = toFileUrl(dirname, file);
    }

    var contents = fileCache[file] || fs.readFileSync(file, 'utf8');
    var doc = jsdom.jsdom(null, null, options);
    var window = doc.createWindow();

    doc.parent = window;
    window.loadComplete = function () {};

    doc.innerHTML = contents;
    fileCache[file] = contents;
    return doc;
  };
};
