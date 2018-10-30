/* global define */
import {isArray} from '../utils';

let SourceNode;

try {
  /* istanbul ignore next */
  if (typeof define !== 'function' || !define.amd) {
    // We don't support this in AMD environments. For these environments, we asusme that
    // they are running on the browser and thus have no need for the source-map library.
    let SourceMap = require('source-map');
    SourceNode = SourceMap.SourceNode;
  }
} catch (err) {
  /* NOP */
}

/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
if (!SourceNode) {
  SourceNode = function(line, column, srcFile, chunks) {
    this.src = '';
    if (chunks) {
      this.add(chunks);
    }
  };
  /* istanbul ignore next */
  SourceNode.prototype = {
    add: function(chunks) {
      if (isArray(chunks)) {
        chunks = chunks.join('');
      }
      this.src += chunks;
    },
    prepend: function(chunks) {
      if (isArray(chunks)) {
        chunks = chunks.join('');
      }
      this.src = chunks + this.src;
    },
    toStringWithSourceMap: function() {
      return {code: this.toString()};
    },
    toString: function() {
      return this.src;
    }
  };
}


function castChunk(chunk, codeGen, loc) {
  if (isArray(chunk)) {
    let ret = [];

    for (let i = 0, len = chunk.length; i < len; i++) {
      ret.push(codeGen.wrap(chunk[i], loc));
    }
    return ret;
  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
    // Handle primitives that the SourceNode will throw up on
    return chunk + '';
  }
  return chunk;
}


function CodeGen(srcFile) {
  this.srcFile = srcFile;
  this.source = [];
}

CodeGen.prototype = {
  isEmpty() {
    return !this.source.length;
  },
  prepend: function(source, loc) {
    this.source.unshift(this.wrap(source, loc));
  },
  push: function(source, loc) {
    this.source.push(this.wrap(source, loc));
  },

  merge: function() {
    let source = this.empty();
    this.each(function(line) {
      source.add(['  ', line, '\n']);
    });
    return source;
  },

  each: function(iter) {
    for (let i = 0, len = this.source.length; i < len; i++) {
      iter(this.source[i]);
    }
  },

  empty: function() {
    let loc = this.currentLocation || {start: {}};
    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
  },
  wrap: function(chunk, loc = this.currentLocation || {start: {}}) {
    if (chunk instanceof SourceNode) {
      return chunk;
    }

    chunk = castChunk(chunk, this, loc);

    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
  },

  functionCall: function(fn, type, params) {
    params = this.generateList(params);
    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
  },

  quotedString: function(str) {
    return '"' + (str + '')
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
      .replace(/\u2029/g, '\\u2029') + '"';
  },

  objectLiteral: function(obj) {
    let pairs = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = castChunk(obj[key], this);
        if (value !== 'undefined') {
          pairs.push([this.quotedString(key), ':', value]);
        }
      }
    }

    let ret = this.generateList(pairs);
    ret.prepend('{');
    ret.add('}');
    return ret;
  },


  generateList: function(entries) {
    let ret = this.empty();

    for (let i = 0, len = entries.length; i < len; i++) {
      if (i) {
        ret.add(',');
      }

      ret.add(castChunk(entries[i], this));
    }

    return ret;
  },

  generateArray: function(entries) {
    let ret = this.generateList(entries);
    ret.prepend('[');
    ret.add(']');

    return ret;
  }
};

export default CodeGen;

