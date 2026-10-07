/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var HoganTemplate = (function () {

  function constructor(text) {
    this.text = text;
  };

  constructor.prototype = {
    // render: replaced by generated code.
    r: function (context, partials) { return ''; },

    // variable escaping
    v: hoganEscape,

    render: function render(context, partials) {
      return this.r(context, partials);
    },

    // tries to find a partial in the curent scope and render it
    rp: function(name, context, partials, indent) {
      var partial = partials[name];

      if (!partial) {
        return '';
      }

      return partial.render(context, partials);
    },

    // render a section
    rs: function(context, partials, section) {
      var buf = '';
      var tail = context[context.length - 1];
      if (!isArray(tail)) {
        buf = section(context, partials);
        return buf;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        buf += section(context, partials);
        context.pop();
      }
      return buf;
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end) {
      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (!inverted && typeof val == 'function') {
        val = this.ls(val, ctx, partials, start, end);
      }

      var pass = (val === '') || !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }

      var names = key.split('.');
      var val = this.f(names[0], ctx, partials, returnFound);
      var cx = null;
      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false;
      var v = null;
      var found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ho: function(val, cx, partials, text) {
      var t = val.call(cx, text, function(t) {
        return Hogan.compile(t).render(cx);
      });
      var s = Hogan.compile(t.toString()).render(cx, partials);
      this.b = s;
      return false;
    },

    // higher order template result buffer
    b: '',

    // lambda replace section
    ls: function(val, ctx, partials, start, end) {
      var cx = ctx[ctx.length - 1];
      if (val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end));
      }
      var t = val.call(cx);
      if (typeof t == 'function') {
        return this.ho(t, cx, partials, this.text.substring(start, end));
      }
      return t;
    },

    // lambda replace variable
    lv: function(val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      return Hogan.compile(val.call(cx).toString()).render(cx, partials);
    }
  };

  var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos =/\'/g,
      rQuot = /\"/g, hChars =/[&<>\"\']/;
  function hoganEscape(str) {
    var s = String(str === null ? '' : str);
      return hChars.test(s) ? s.replace(rAmp,'&amp;')
                   .replace(rLt,'&lt;').replace(rGt,'&gt;')
                   .replace(rApos,'&#39;').replace(rQuot, '&quot;') : s;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  }

  return constructor;
})();

var Hogan = (function () {

  function scan(text) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v']) ||
           (!tokens[j].tag && tokens[j].match(rIsWhitespace) == null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();
      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'})
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag;
      var closeIndex = text.indexOf(close, index);
      var delimiters = trim(text.substring(text.indexOf('=', index) + 1,
                                           closeIndex)).split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
      return closeIndex + close.length - 1;
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text[i] == '\n') {
            filterLine(seenTag);
          } else {
            buf += text[i];
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        var tag = tagTypes[text[i + 1]];
        tagType = tag ? text[i + 1] : '_v';
        seenTag = i;
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
      } else {
        if (tagChange(ctag, text, i)) {
          i += ctag.length - 1;
          tokens.push({tag: tagType, n: trim(buf),
                       i: (tagType == '/') ? seenTag - 1 : i + 1});
          buf = '';
          state = IN_TEXT;
          if (tagType == '{') {
            i++;
          }
        } else {
          buf += text[i];
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/;

  var tagTypes = {
    '#': 1, '^': 2, '/': 3,  '!': 4, '>': 5,
    '<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
  };

  function tagChange(tag, text, index) {
    if (text[index] != tag[0]) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text[index + i] != tag[i]) {
        return false;
      }
    }

    return true;
  }

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        token = null;

    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' ||
          isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length == 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function generate(tree, text, options) {
    var code = 'var c = [cx];var b = "";var _ = this;' +
               walk(tree) + 'return b;';
    if (options.asString) {
      return 'function(cx,p){' + code + ';};';
    }

    var template = new HoganTemplate(text);
    template.r = new Function('cx', 'p', code);
    return template;
  }

  var rQuot = /\"/g, rNewline =  /\n/g, rCr = /\r/g, rSlash = /\\/g;
  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
  };

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n),
                        tree[i].i, tree[i].end);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n,
                                chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i].n);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('\n');
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text(tree[i]);
      }
    }
    return code;
  }

  function section(nodes, id, method, start, end) {
    var code = 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),';
    code += 'c,p,0,' + start + ',' + end + ')){';
    code += 'b += _.rs(c,p,';
    code += 'function(c,p){ var b = "";';
    code += walk(nodes);
    code += 'return b;});c.pop();}';
    code += 'else{b += _.b; _.b = ""};';
    return code;
  }

  function invertedSection(nodes, id, method) {
    var code = 'if (!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0)){';
    code += walk(nodes);
    code += '};';
    return code;
  }

  function partial(id) {
    return 'b += _.rp("' +  esc(id) + '",c[c.length - 1],p);';
  }

  function tripleStache(id, method) {
    return 'b += (_.' + method + '("' + esc(id) + '",c,p,0));';
  }

  function variable(id, method) {
    return 'b += (_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function text(id) {
    return 'b += "' + esc(id) + '";';
  }

  return ({
    scan: scan,

    parse: function(tokens, options) {
      options = options || {};
      return buildTree(tokens, '', [], options.sectionTags || []);
    },

    cache: {},

    compile: function(text, options) {
      // options
      //
      // asString: false (default)
      //
      // sectionTags: [{o: '_foo', c: 'foo'}]
      // An array of object with o and c fields that indicate names for custom
      // section tags. The example above allows parsing of {{_foo}}{{/foo}}.
      //
      options = options || {};

      var t = this.cache[text];
      if (t) {
        return t;
      }
      t = generate(this.parse(scan(text), options), text, options);
      return this.cache[text] = t;
    }
  });
})();

// Export the hogan constructor for Node.js and CommonJS.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Hogan;
  module.exports.Template = HoganTemplate;
} else if (typeof exports !== 'undefined') {
  exports.Hogan = Hogan;
  exports.HoganTemplate = HoganTemplate;
}