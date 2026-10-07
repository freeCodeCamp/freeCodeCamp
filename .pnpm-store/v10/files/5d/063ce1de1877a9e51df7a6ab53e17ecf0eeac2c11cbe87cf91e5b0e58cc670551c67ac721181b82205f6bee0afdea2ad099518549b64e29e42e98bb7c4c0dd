'use strict';

Object.defineProperty(exports, 'commentRegex', {
  get: function getCommentRegex () {
    // Groups: 1: media type, 2: MIME type, 3: charset, 4: encoding, 5: data.
    return /^\s*?\/[\/\*][@#]\s+?sourceMappingURL=data:(((?:application|text)\/json)(?:;charset=([^;,]+?)?)?)?(?:;(base64))?,(.*?)$/mg;
  }
});


Object.defineProperty(exports, 'mapFileCommentRegex', {
  get: function getMapFileCommentRegex () {
    // Matches sourceMappingURL in either // or /* comment styles.
    return /(?:\/\/[@#][ \t]+?sourceMappingURL=([^\s'"`]+?)[ \t]*?$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*?(?:\*\/){1}[ \t]*?$)/mg;
  }
});

var decodeBase64;
if (typeof Buffer !== 'undefined') {
  if (typeof Buffer.from === 'function') {
    decodeBase64 = decodeBase64WithBufferFrom;
  } else {
    decodeBase64 = decodeBase64WithNewBuffer;
  }
} else {
  decodeBase64 = decodeBase64WithAtob;
}

function decodeBase64WithBufferFrom(base64) {
  return Buffer.from(base64, 'base64').toString();
}

function decodeBase64WithNewBuffer(base64) {
  if (typeof value === 'number') {
    throw new TypeError('The value to decode must not be of type number.');
  }
  return new Buffer(base64, 'base64').toString();
}

function decodeBase64WithAtob(base64) {
  return decodeURIComponent(escape(atob(base64)));
}

function stripComment(sm) {
  return sm.split(',').pop();
}

function readFromFileMap(sm, read) {
  var r = exports.mapFileCommentRegex.exec(sm);
  // for some odd reason //# .. captures in 1 and /* .. */ in 2
  var filename = r[1] || r[2];

  try {
    var sm = read(filename);
    if (sm != null && typeof sm.catch === 'function') {
      return sm.catch(throwError);
    } else {
      return sm;
    }
  } catch (e) {
    throwError(e);
  }

  function throwError(e) {
    throw new Error('An error occurred while trying to read the map file at ' + filename + '\n' + e.stack);
  }
}

function Converter (sm, opts) {
  opts = opts || {};

  if (opts.hasComment) {
    sm = stripComment(sm);
  }

  if (opts.encoding === 'base64') {
    sm = decodeBase64(sm);
  } else if (opts.encoding === 'uri') {
    sm = decodeURIComponent(sm);
  }

  if (opts.isJSON || opts.encoding) {
    sm = JSON.parse(sm);
  }

  this.sourcemap = sm;
}

Converter.prototype.toJSON = function (space) {
  return JSON.stringify(this.sourcemap, null, space);
};

if (typeof Buffer !== 'undefined') {
  if (typeof Buffer.from === 'function') {
    Converter.prototype.toBase64 = encodeBase64WithBufferFrom;
  } else {
    Converter.prototype.toBase64 = encodeBase64WithNewBuffer;
  }
} else {
  Converter.prototype.toBase64 = encodeBase64WithBtoa;
}

function encodeBase64WithBufferFrom() {
  var json = this.toJSON();
  return Buffer.from(json, 'utf8').toString('base64');
}

function encodeBase64WithNewBuffer() {
  var json = this.toJSON();
  if (typeof json === 'number') {
    throw new TypeError('The json to encode must not be of type number.');
  }
  return new Buffer(json, 'utf8').toString('base64');
}

function encodeBase64WithBtoa() {
  var json = this.toJSON();
  return btoa(unescape(encodeURIComponent(json)));
}

Converter.prototype.toURI = function () {
  var json = this.toJSON();
  return encodeURIComponent(json);
};

Converter.prototype.toComment = function (options) {
  var encoding, content, data;
  if (options != null && options.encoding === 'uri') {
    encoding = '';
    content = this.toURI();
  } else {
    encoding = ';base64';
    content = this.toBase64();
  }
  data = 'sourceMappingURL=data:application/json;charset=utf-8' + encoding + ',' + content;
  return options != null && options.multiline ? '/*# ' + data + ' */' : '//# ' + data;
};

// returns copy instead of original
Converter.prototype.toObject = function () {
  return JSON.parse(this.toJSON());
};

Converter.prototype.addProperty = function (key, value) {
  if (this.sourcemap.hasOwnProperty(key)) throw new Error('property "' + key + '" already exists on the sourcemap, use set property instead');
  return this.setProperty(key, value);
};

Converter.prototype.setProperty = function (key, value) {
  this.sourcemap[key] = value;
  return this;
};

Converter.prototype.getProperty = function (key) {
  return this.sourcemap[key];
};

exports.fromObject = function (obj) {
  return new Converter(obj);
};

exports.fromJSON = function (json) {
  return new Converter(json, { isJSON: true });
};

exports.fromURI = function (uri) {
  return new Converter(uri, { encoding: 'uri' });
};

exports.fromBase64 = function (base64) {
  return new Converter(base64, { encoding: 'base64' });
};

exports.fromComment = function (comment) {
  var m, encoding;
  comment = comment
    .replace(/^\/\*/g, '//')
    .replace(/\*\/$/g, '');
  m = exports.commentRegex.exec(comment);
  encoding = m && m[4] || 'uri';
  return new Converter(comment, { encoding: encoding, hasComment: true });
};

function makeConverter(sm) {
  return new Converter(sm, { isJSON: true });
}

exports.fromMapFileComment = function (comment, read) {
  if (typeof read === 'string') {
    throw new Error(
      'String directory paths are no longer supported with `fromMapFileComment`\n' +
      'Please review the Upgrading documentation at https://github.com/thlorenz/convert-source-map#upgrading'
    )
  }

  var sm = readFromFileMap(comment, read);
  if (sm != null && typeof sm.then === 'function') {
    return sm.then(makeConverter);
  } else {
    return makeConverter(sm);
  }
};

// Finds last sourcemap comment in file or returns null if none was found
exports.fromSource = function (content) {
  var m = content.match(exports.commentRegex);
  return m ? exports.fromComment(m.pop()) : null;
};

// Finds last sourcemap comment in file or returns null if none was found
exports.fromMapFileSource = function (content, read) {
  if (typeof read === 'string') {
    throw new Error(
      'String directory paths are no longer supported with `fromMapFileSource`\n' +
      'Please review the Upgrading documentation at https://github.com/thlorenz/convert-source-map#upgrading'
    )
  }
  var m = content.match(exports.mapFileCommentRegex);
  return m ? exports.fromMapFileComment(m.pop(), read) : null;
};

exports.removeComments = function (src) {
  return src.replace(exports.commentRegex, '');
};

exports.removeMapFileComments = function (src) {
  return src.replace(exports.mapFileCommentRegex, '');
};

exports.generateMapFileComment = function (file, options) {
  var data = 'sourceMappingURL=' + file;
  return options && options.multiline ? '/*# ' + data + ' */' : '//# ' + data;
};
