/*
 * Copyright (C) 2007-2026 Diego Perini
 * All rights reserved.
 *
 * nwsapi.js - Fast CSS Selectors API Engine
 *
 * Author: Diego Perini <diego.perini at gmail com>
 * Version: 2.2.28
 * Created: 20070722
 * Release: 20260918
 *
 * License:
 *  https://javascript.nwbox.com/nwsapi/MIT-LICENSE
 * Download:
 *  https://javascript.nwbox.com/nwsapi/nwsapi.js
 */

(function Export(global, factory) {

  'use strict';

  if (typeof module == 'object' && typeof exports == 'object') {
    module.exports = factory;
  } else if (typeof define == 'function' && define['amd']) {
    define(factory);
  } else {
    global.NW || (global.NW = { });
    global.NW.Dom = factory(global, Export);
  }

})(this, function Factory(global, Export) {

  var version = 'nwsapi-2.2.28',

  doc = global.document,
  root = doc.documentElement,
  slice = Array.prototype.slice,

  // The host matcher is captured here, before anything can replace it, and
  // node.matches is never consulted at match time. A host is free to wire
  // Element.prototype.matches back to this engine, which is what jsdom does,
  // and calling it while resolving a state pseudo-class re-enters the lambda
  // that asked for the state: the recursion only ends when the stack does,
  // and the RangeError is swallowed below. Passing a document alone, as jsdom
  // does, leaves no matcher at all, which is the intended outcome: there is
  // no native state to read.
  NATIVE_MATCHES = (function(proto) {
    return (proto && (proto.matches || proto.webkitMatchesSelector ||
      proto.mozMatchesSelector || proto.msMatchesSelector)) || null;
  })(global.Element && global.Element.prototype),

  HSP = '\\x20\\t',
  VSP = '\\r\\n\\f',
  WSP = '[' + HSP + VSP + ']',

  CFG = {
    // extensions
    operators: '[~*^$|]=|=',
    combinators: '[\\x20\\t>+~](?=[^>+~])'
  },

  NOT = {
    // not enclosed in double/single/parens/square
    double_enc: '(?=(?:[^"]*["][^"]*["])*[^"]*$)',
    single_enc: "(?=(?:[^']*['][^']*['])*[^']*$)",
    parens_enc: '(?![^\\x28]*\\x29)',
    square_enc: '(?![^\\x5b]*\\x5d)'
  },

  REX = {
    // regular expressions
    HasEscapes: RegExp('\\\\'),
    HexNumbers: RegExp('^[0-9a-fA-F]'),
    EscOrQuote: RegExp('^\\\\|[\\x22\\x27]'),
    RegExpChar: RegExp('(?!\\\\)[\\\\^$.,*+?()[\\]{}|\\/]', 'g'),
    TrimSpaces: RegExp('^' + WSP + '+|' + WSP + '+$', 'g'),
    SplitGroup: RegExp('(\\([^)]*\\)|\\[[^[]*\\]|\\\\.|[^,])+', 'g'),
    CommaGroup: RegExp('(\\s*,\\s*)' + NOT.square_enc + NOT.parens_enc, 'g'),
    FixEscapes: RegExp('\\\\([0-9a-fA-F]{1,6}' + WSP + '?|.)|([\\x22\\x27])', 'g'),
    CombineWSP: RegExp('[\\n\\r\\f\\x20]+' + NOT.single_enc + NOT.double_enc, 'g'),
    TabCharWSP: RegExp('(\\x20?\\t+\\x20?)' + NOT.single_enc + NOT.double_enc, 'g'),
    PseudosWSP: RegExp('\\s+([-+])\\s+' + NOT.square_enc, 'g'),
    LogicalPfx: RegExp('^:(is|where|matches|not|has)\\x28', 'i')
  },

  STD = {
    combinator: RegExp('\\s?([>+~])\\s?', 'g'),
    apimethods: RegExp('^(?:\\w+|\\*)\\|'),
    namespaces: RegExp('(\\*|\\w+)\\|[\\w-]+')
  },

  GROUPS = {
    // pseudo-classes requiring parameters
    linguistic: '(dir|lang)(?:\\x28\\s?([-\\w]{2,})\\s?(?:\\x29|$))',
    logicalsel: '(is|where|matches|not|has)(?:\\x28\\s?(' + '[^()]*|.*' + ')\\s?(?:\\x29|$))',
    treestruct: '(nth(?:-last)?(?:-child|-of\\-type))(?:\\x28\\s?(even|odd|(?:[-+]?\\d*)(?:n\\s?[-+]?\\s?\\d*)?)\\s?(?:\\x29|$))',
    // pseudo-classes not requiring parameters
    locationpc: '(any\\-link|link|visited|target|defined)\\b',
    useraction: '(hover|active|focus\\-within|focus\\-visible|focus)\\b',
    structural: '(scope|root|empty|(?:(?:first|last|only)(?:-child|\\-of\\-type)))\\b',
    inputstate: '(enabled|disabled|read\\-only|read\\-write|placeholder\\-shown|default|autofill|-webkit\\-autofill)\\b',
    inputvalue: '(checked|indeterminate|required|optional|valid|invalid|in\\-range|out\\-of\\-range)\\b',
    // pseudo-classes not requiring parameters and describing functional state
    rsrc_state: '(playing|paused|seeking|buffering|stalled|muted|volume\\-locked)\\b',
    disp_state: '(open|closed|modal|fullscreen|picture\\-in\\-picture|popover\\-open|popover)\\b',
    time_state: '(current|past|future)\\b',
    // pseudo-elements starting with single colon (:)
    pseudo_sng: '(after|before|first\\-letter|first\\-line)\\b',
    // pseudo-elements starting with double colon (::)
    pseudo_dbl: ':(after|before|first\\-letter|first\\-line|selection|placeholder|-webkit-[-a-zA-Z0-9]{2,})\\b'
  },

  Patterns = {
    // pseudo-classes
    treestruct: RegExp('^:(?:' + GROUPS.treestruct + ')(.*)', 'i'),
    structural: RegExp('^:(?:' + GROUPS.structural + ')(.*)', 'i'),
    linguistic: RegExp('^:(?:' + GROUPS.linguistic + ')(.*)', 'i'),
    useraction: RegExp('^:(?:' + GROUPS.useraction + ')(.*)', 'i'),
    inputstate: RegExp('^:(?:' + GROUPS.inputstate + ')(.*)', 'i'),
    inputvalue: RegExp('^:(?:' + GROUPS.inputvalue + ')(.*)', 'i'),
    rsrc_state: RegExp('^:(?:' + GROUPS.rsrc_state + ')(.*)', 'i'),
    disp_state: RegExp('^:(?:' + GROUPS.disp_state + ')(.*)', 'i'),
    time_state: RegExp('^:(?:' + GROUPS.time_state + ')(.*)', 'i'),
    locationpc: RegExp('^:(?:' + GROUPS.locationpc + ')(.*)', 'i'),
    logicalsel: RegExp('^:(?:' + GROUPS.logicalsel + ')(.*)', 'i'),
    pseudo_sng: RegExp('^:(?:' + GROUPS.pseudo_sng + ')(.*)', 'i'),
    pseudo_dbl: RegExp('^:(?:' + GROUPS.pseudo_dbl + ')(.*)', 'i'),
    // combinator symbols
    children: RegExp('^' + WSP + '?\\>' + WSP + '?(.*)'),
    adjacent: RegExp('^' + WSP + '?\\+' + WSP + '?(.*)'),
    relative: RegExp('^' + WSP + '?\\~' + WSP + '?(.*)'),
    ancestor: RegExp('^' + WSP + '+(.*)'),
   // universal & namespace
   universal: RegExp('^(\\*)(.*)'),
   namespace: RegExp('^(\\*|[\\w-]+)?\\|(.*)')
  },

  // regular expression to better aproximate
  // detection of RTL languages (like Arabic)
  RTL = RegExp('^(?:' +
    '[\\u0627-\\u064a]|' +
    '[\\u0591-\\u08ff]|' +
    '[\\ufb1d-\\ufdfd]|' +
    '[\\ufe70-\\ufefc])+$'),

  // elements that can carry a hyperlink, see isLink()
  reLinkName = RegExp('^(?:a|area)$', 'i'),

  // emulate firefox error strings
  qsNotArgs = 'Not enough arguments',
  qsInvalid = ' is not a valid selector',

  // detect structural pseudo-classes in selectors
  reNthElem = RegExp('(:nth(?:-last)?-child)', 'i'),
  reNthType = RegExp('(:nth(?:-last)?-of-type)', 'i'),

  // placeholder for global regexp
  reOptimizer,
  reValidator,

  // special handling configuration flags
  Config = {
    IDS_DUPES: true,
    FORGIVING: true,
    NODE_LIST: false,
    LOGERRORS: true,
    USR_EVENT: true,
    VERBOSITY: true
  },

  NAMESPACE,
  QUIRKS_MODE,
  HTML_DOCUMENT,

  ATTR_STD_OPS = {
    '=': 1, '^=': 1, '$=': 1, '|=': 1, '*=': 1, '~=': 1
  },

  HTML_TABLE = {
    'accept': 1, 'accept-charset': 1, 'align': 1, 'alink': 1, 'axis': 1,
    'bgcolor': 1, 'charset': 1, 'checked': 1, 'clear': 1, 'codetype': 1, 'color': 1,
    'compact': 1, 'declare': 1, 'defer': 1, 'dir': 1, 'direction': 1, 'disabled': 1,
    'enctype': 1, 'face': 1, 'frame': 1, 'hreflang': 1, 'http-equiv': 1, 'lang': 1,
    'language': 1, 'link': 1, 'media': 1, 'method': 1, 'multiple': 1, 'nohref': 1,
    'noresize': 1, 'noshade': 1, 'nowrap': 1, 'readonly': 1, 'rel': 1, 'rev': 1,
    'rules': 1, 'scope': 1, 'scrolling': 1, 'selected': 1, 'shape': 1, 'target': 1,
    'text': 1, 'type': 1, 'valign': 1, 'valuetype': 1, 'vlink': 1
  },

  Combinators = { },

  Selectors = { },

  Operators = {
     '=': { p1: '^',
            p2: '$',
            p3: 'true' },
    '^=': { p1: '^',
            p2: '',
            p3: 'true' },
    '$=': { p1: '',
            p2: '$',
            p3: 'true' },
    '*=': { p1: '',
            p2: '',
            p3: 'true' },
    '|=': { p1: '^',
            p2: '(-|$)',
            p3: 'true' },
    '~=': { p1: '(^|\\s)',
            p2: '(\\s|$)',
            p3: 'true' }
  },

  concatCall =
    function(nodes, callback) {
      var i = 0, l = nodes.length, list = Array(l);
      while (l > i) {
        if (false === callback(list[i] = nodes[i])) {
          list.length = i + 1;
          break;
        }
        ++i;
      }
      return list;
    },

  concatList =
    function(list, nodes) {
      var i = -1, l = nodes.length;
      while (l--) { list[list.length] = nodes[++i]; }
      return list;
    },

  // caching limit for compiled resolver functions
  CACHE_LIMIT = 1000,

  // ES5 bounded LRU cache. It stores query plans (compiled resolvers),
  // never DOM result sets. A prefixed dictionary avoids user-key collisions
  // and a doubly linked list keeps the least-recently-used entry at the head.
  createCache = function(limit) {
    var cache = { }, head = null, tail = null, size = 0,
      prefix = '\x01', has = function(key) {
        return Object.prototype.hasOwnProperty.call(cache, prefix + key);
      }, unlink = function(entry) {
        entry.prev ? entry.prev.next = entry.next : head = entry.next;
        entry.next ? entry.next.prev = entry.prev : tail = entry.prev;
      }, link = function(entry) {
        entry.prev = tail;
        entry.next = null;
        tail ? tail.next = entry : head = entry;
        tail = entry;
      }, promote = function(entry) {
        if (entry !== tail) {
          unlink(entry);
          link(entry);
        }
      }, remove = function(entry) {
        unlink(entry);
        delete cache[entry.key];
        --size;
      };

    limit || (limit = CACHE_LIMIT);

    return {
      clear: function() {
        cache = { };
        head = tail = null;
        size = 0;
      },
      get: function(key) {
        var entry;
        if (!has(key)) return undefined;
        entry = cache[prefix + key];
        promote(entry);
        return entry.value;
      },
      has: function(key) {
        return has(key);
      },
      set: function(key, value) {
        var entry, entryKey = prefix + key;

        if (has(key)) {
          entry = cache[entryKey];
          entry.value = value;
          promote(entry);
        } else {
          size >= limit && remove(head);
          entry = { key: entryKey, value: value, prev: null, next: null };
          cache[entryKey] = entry;
          link(entry);
          ++size;
        }
        return value;
      },
      size: function() {
        return size;
      }
    };
  },

  // only define the toNodeList helper if explicitly enabled in Config,
  // a safety measure for headless hosts missing feature/implementation
  toNodeList =
    Config.NODE_LIST == false ?
    function(x) { return x; } :
    function() {
      // create a DocumentFragment
      var emptyNL = doc.createDocumentFragment().childNodes;

      // this is returned from a self-executing function so that
      // the DocumentFragment isn't repeatedly created
      return function(nodeArray) {
        // check if it is already a nodelist
        if (isInstanceOf(nodeArray)) return nodeArray;

        // if it's a single element, wrap it in a classic array
        if (!Array.isArray(nodeArray)) nodeArray = [nodeArray];

        // base an object on emptyNL
        var fakeNL = Object.create(emptyNL, {
          'length': {
            value: nodeArray.length, enumerable: false
          },
          'item': {
            'value': function(i) {
              return this[+i || 0];
            },
            enumerable: false
          }
        });

        // copy the array elemnts
        nodeArray.forEach(function (v, i) { fakeNL[i] = v; });

        // return an object pretending to be a NodeList.
        return fakeNL;
      };
    }(),

  isInstanceOf =
    function(nodes) {
      return nodes instanceof global.NodeList;
    },

  documentOrder =
    function(a, b) {
      if (!hasDupes && a === b) {
        hasDupes = true;
        return 0;
      }
      return a.compareDocumentPosition(b) & 4 ? -1 : 1;
    },

  hasDupes = false,

  unique =
    function(nodes) {
      var i = 0, j = -1, l = nodes.length + 1, list = [ ];
      while (--l) {
        if (nodes[i++] === nodes[i]) continue;
        list[++j] = nodes[i - 1];
      }
      hasDupes = false;
      return list;
    },

  switchContext =
    function(context, force) {
      var oldDoc = doc;
      doc = context.ownerDocument || context;
      if (force || oldDoc !== doc) {
        // force a new check for each document change
        // performed before the next select operation
        root = doc.documentElement;
        HTML_DOCUMENT = isHTML(doc);
        QUIRKS_MODE = HTML_DOCUMENT &&
          doc.compatMode.indexOf('CSS') < 0;
        NAMESPACE = root && root.namespaceURI;
        Snapshot.doc = doc;
        Snapshot.root = root;
      }
      return (Snapshot.from = context);
    },

  // convert single codepoint to UTF-16 encoding
  codePointToUTF16 =
    function(codePoint) {
      // out of range, use replacement character
      if (codePoint < 1 || codePoint > 0x10ffff ||
        (codePoint > 0xd7ff && codePoint < 0xe000)) {
        return '\\ufffd';
      }
      // javascript strings are UTF-16 encoded
      if (codePoint < 0x10000) {
        var lowHex = '000' + codePoint.toString(16);
        return '\\u' + lowHex.substr(lowHex.length - 4);
      }
      // supplementary high + low surrogates
      return '\\u' + (((codePoint - 0x10000) >> 0x0a) + 0xd800).toString(16) +
             '\\u' + (((codePoint - 0x10000) % 0x400) + 0xdc00).toString(16);
    },

  // convert single codepoint to string
  stringFromCodePoint =
    function(codePoint) {
      // out of range, use replacement character
      if (codePoint < 1 || codePoint > 0x10ffff ||
        (codePoint > 0xd7ff && codePoint < 0xe000)) {
        return '\ufffd';
      }
      if (codePoint < 0x10000) {
        return String.fromCharCode(codePoint);
      }
      return String.fromCodePoint ?
        String.fromCodePoint(codePoint) :
        String.fromCharCode(
          ((codePoint - 0x10000) >> 0x0a) + 0xd800,
          ((codePoint - 0x10000) % 0x400) + 0xdc00);
    },

  // convert escape sequence in a CSS string or identifier
  // to javascript string with javascript escape sequences
  escapeIdentifier =
    function(str) {
      return REX.HasEscapes.test(str) ?
        str.replace(REX.FixEscapes,
          function(substring, p1, p2) {
            // unescaped " or '
            return p2 ? '\\' + p2 :
              // javascript strings are UTF-16 encoded
              REX.HexNumbers.test(p1) ? codePointToUTF16(parseInt(p1, 16)) :
              // \' \"
              REX.EscOrQuote.test(p1) ? substring :
              // \g \h \. \# etc
              p1;
          }
        ) : str;
    },

  // convert escape sequence in a CSS string or identifier
  // to javascript string with characters representations
  unescapeIdentifier =
    function(str) {
      return REX.HasEscapes.test(str) ?
        str.replace(REX.FixEscapes,
          function(substring, p1, p2) {
            // unescaped " or '
            return p2 ? p2 :
              // javascript strings are UTF-16 encoded
              REX.HexNumbers.test(p1) ? stringFromCodePoint(parseInt(p1, 16)) :
              // \' \"
              REX.EscOrQuote.test(p1) ? substring :
              // \g \h \. \# etc
              p1;
          }
        ) : str;
    },

  // split ':is(', ':where(', ':matches(', ':not(' and ':has(' into their
  // selector list argument and the rest of the selector. The argument can
  // nest parentheses and quote them, which a single regular expression
  // cannot track, so the closing parenthesis is located by scanning. An
  // argument left unclosed is closed by EOF, as the CSS Syntax parser does
  // with any open construct. Returns a match-like array so that callers can
  // pop() the remainder the same way they do with a RegExp match.
  splitList =
    function(text) {
      var chr, depth = 0, escaped, i = 0, l = text.length,
      quote = '', start = 0, list = [ ];

      for (; l > i; ++i) {
        chr = text.charAt(i);
        if (escaped) { escaped = false; continue; }
        if (chr == '\\') { escaped = true; }
        else if (quote) { if (chr == quote) { quote = ''; } }
        else if (chr == '\x22' || chr == '\x27') { quote = chr; }
        else if (chr == '\x28' || chr == '\x5b') { ++depth; }
        else if (chr == '\x29' || chr == '\x5d') { --depth; }
        else if (chr == ',' && depth === 0) {
          list[list.length] = text.slice(start, i).replace(REX.TrimSpaces, '');
          start = i + 1;
        }
      }
      list[list.length] = text.slice(start).replace(REX.TrimSpaces, '');
      return list;
    },

  matchLogical =
    function(selector) {
      var chr, close, escaped, depth = 1, i, l, quote = '',
      match = selector.match(REX.LogicalPfx);

      if (!match) { return null; }

      for (i = match[0].length, l = selector.length; l > i; ++i) {
        chr = selector.charAt(i);
        if (escaped) { escaped = false; continue; }
        if (chr == '\\') { escaped = true; }
        else if (quote) { if (chr == quote) { quote = ''; } }
        else if (chr == '\x22' || chr == '\x27') { quote = chr; }
        else if (chr == '\x28') { ++depth; }
        else if (chr == '\x29' && --depth === 0) { break; }
      }

      // i is the closing parenthesis, or the EOF that stands in for it
      close = l > i ? i + 1 : i;

      return [
        selector.slice(0, close),
        match[1],
        selector.slice(match[0].length, i).replace(REX.TrimSpaces, ''),
        selector.slice(close)
      ];
    },

  method = {
    '#': 'getElementById',
    '*': 'getElementsByTagName',
    '|': 'getElementsByTagNameNS',
    '.': 'getElementsByClassName'
    },

  compat = {
    '#': (c, n) => (e, f) => byId(n, c),
    '*': (c, n) => (e, f) => byTag(n, c),
    '|': (c, n) => (e, f) => byTagNS(n, c),
    '.': (c, n) => (e, f) => byClass(n, c),
    },

  // find duplicate ids using iterative walk
  byIdRaw =
    function(id, context) {
      var node = context, nodes = [ ], next = node.firstElementChild;
      while ((node = next)) {
        node.id == id && (nodes[nodes.length] = node);
        if ((next = node.firstElementChild || node.nextElementSibling)) continue;
        while (!next && (node = node.parentElement) && node !== context) {
          next = node.nextElementSibling;
        }
      }
      return nodes;
    },

  // context agnostic getElementById
  byId =
    function(id, context) {
      var e, i, l, nodes, api = method['#'];

      // duplicates id allowed
      if (Config.IDS_DUPES === false) {
        if (api in context) {
          return (e = context[api](id)) ? [ e ] : none;
        }
      } else {
        if ('all' in context) {
          if ((e = context.all[id])) {
            if (e.nodeType == 1) return e.getAttribute('id') != id ? [ ] : [ e ];
            else if (id == 'length') return (e = context[api](id)) ? [ e ] : none;
            for (i = 0, l = e.length, nodes = [ ]; l > i; ++i) {
              if (e[i].id == id) nodes[nodes.length] = e[i];
            }
            return nodes && nodes.length ? nodes : [ nodes ];
          } else return none;
        }
      }

      return byIdRaw(id, context);
    },

  // wrapped up namespaced TagName api calls
  byTagNS =
    function(context, tag) {
      return byTag(tag, context);
  },

  // context agnostic getElementsByTagName
  byTag =
    function(tag, context) {
      var e, nodes, api = method['*'];
      // DOCUMENT_NODE (9) & ELEMENT_NODE (1)
      if (api in context) {
        return slice.call(context[api](tag));
      } else {
        tag = tag.toLowerCase();
        // DOCUMENT_FRAGMENT_NODE (11)
        if ((e = context.firstElementChild)) {
          if (!(e.nextElementSibling || tag == '*' || e.localName == tag)) {
            return slice.call(e[api](tag));
          } else {
            nodes = [ ];
            do {
              if (tag == '*' || e.localName == tag) nodes[nodes.length] = e;
              concatList(nodes, e[api](tag));
            } while ((e = e.nextElementSibling));
          }
        } else nodes = none;
      }
      return !Config.NODE_LIST ?
        nodes : isInstanceOf(nodes) ?
        nodes : toNodeList(nodes);
    },

  // context agnostic getElementsByClassName
  byClass =
    function(cls, context) {
      var e, nodes, api = method['.'], reCls;
      // DOCUMENT_NODE (9) & ELEMENT_NODE (1)
      if (api in context) {
        return slice.call(context[api](cls));
      } else {
        // DOCUMENT_FRAGMENT_NODE (11)
        if ((e = context.firstElementChild)) {
          reCls = RegExp('(^|\\s)' + cls + '(\\s|$)', QUIRKS_MODE ? 'i' : '');
          if (!(e.nextElementSibling || reCls.test(e.className))) {
            return slice.call(e[api](cls));
          } else {
            nodes = [ ];
            do {
              if (reCls.test(e.className)) nodes[nodes.length] = e;
              concatList(nodes, e[api](cls));
            } while ((e = e.nextElementSibling));
          }
        } else nodes = none;
      }
      return !Config.NODE_LIST ?
        nodes : isInstanceof(nodes) ?
        nodes : toNodeList(nodes);
    },

  // namespace aware hasAttribute
  // helper for XML/XHTML documents
  hasAttributeNS =
    function(e, name) {
      var i, l, attr = e.getAttributeNames();
      name = RegExp(':?' + name + '$', HTML_DOCUMENT ? 'i' : '');
      for (i = 0, l = attr.length; l > i; ++i) {
        if (name.test(attr[i])) return true;
      }
      return false;
    },

  // fast resolver for the :nth-child() and :nth-last-child() pseudo-classes
  nthElement = (function() {
    var idx = 0, len = 0, set = 0, parent = undefined, parents = Array(), nodes = Array();
    return function(element, dir) {
      // ensure caches are emptied after each run, invoking with dir = 2
      if (dir == 2) {
        idx = 0; len = 0; set = 0; nodes.length = 0;
        parents.length = 0; parent = undefined;
        return -1;
      }
      var e, i, j, k, l;
      if (parent === element.parentElement) {
        i = set; j = idx; l = len;
      } else {
        l = parents.length;
        parent = element.parentElement;
        for (i = -1, j = 0, k = l - 1; l > j; ++j, --k) {
          if (parents[j] === parent) { i = j; break; }
          if (parents[k] === parent) { i = k; break; }
        }
        if (i < 0) {
          parents[i = l] = parent;
          l = 0; nodes[i] = Array();
          e = parent && parent.firstElementChild || element;
          while (e) { nodes[i][l] = e; if (e === element) j = l; e = e.nextElementSibling; ++l; }
          set = i; idx = 0; len = l;
          if (l < 2) return l;
        } else {
          l = nodes[i].length;
          set = i;
        }
      }
      if (element !== nodes[i][j] && element !== nodes[i][j = 0]) {
        for (j = 0, e = nodes[i], k = l - 1; l > j; ++j, --k) {
          if (e[j] === element) { break; }
          if (e[k] === element) { j = k; break; }
        }
      }
      idx = j + 1; len = l;
      return dir ? l - j : idx;
    };
  })(),

  // fast resolver for the :nth-of-type() and :nth-last-of-type() pseudo-classes
  nthOfType = (function() {
    var idx = 0, len = 0, set = 0, parent = undefined, parents = Array(), nodes = Array();
    return function(element, dir) {
      // ensure caches are emptied after each run, invoking with dir = 2
      if (dir == 2) {
        idx = 0; len = 0; set = 0; nodes.length = 0;
        parents.length = 0; parent = undefined;
        return -1;
      }
      var e, i, j, k, l, name = element.localName;
      if (nodes[set] && nodes[set][name] && parent === element.parentElement) {
        i = set; j = idx; l = len;
      } else {
        l = parents.length;
        parent = element.parentElement;
        for (i = -1, j = 0, k = l - 1; l > j; ++j, --k) {
          if (parents[j] === parent) { i = j; break; }
          if (parents[k] === parent) { i = k; break; }
        }
        if (i < 0 || !nodes[i][name]) {
          parents[i = l] = parent;
          nodes[i] || (nodes[i] = Object());
          l = 0; nodes[i][name] = Array();
          e = parent && parent.firstElementChild || element;
          while (e) { if (e === element) j = l; if (e.localName == name) { nodes[i][name][l] = e; ++l; } e = e.nextElementSibling; }
          set = i; idx = j; len = l;
          if (l < 2) return l;
        } else {
          l = nodes[i][name].length;
          set = i;
        }
      }
      if (element !== nodes[i][name][j] && element !== nodes[i][name][j = 0]) {
        for (j = 0, e = nodes[i][name], k = l - 1; l > j; ++j, --k) {
          if (e[j] === element) { break; }
          if (e[k] === element) { j = k; break; }
        }
      }
      idx = j + 1; len = l;
      return dir ? l - j : idx;
    };
  })(),

  // check if the document type is HTML
  isHTML =
    function(node) {
      var doc = node.ownerDocument || node;
      return doc.nodeType == 9 &&
        // contentType not in IE <= 11
        'contentType' in doc ?
          doc.contentType.indexOf('/html') > 0 :
          doc.createElement('DiV').localName == 'div';
    },

  // check if node content is editable
  // Whether an element is defined, which every built-in element is. Only
  // a custom element can be undefined: one whose name carries a hyphen, or a
  // built-in carrying an 'is' attribute, and in both cases only until a
  // definition exists and the element has been upgraded to it.
  // https://dom.spec.whatwg.org/#concept-element-defined
  isDefined =
    function(element) {
      var custom, name = element.localName, registry, view;

      if (element.namespaceURI !== 'http://www.w3.org/1999/xhtml') {
        return true;
      }

      if (name.indexOf('-') < 0) {
        if (!element.hasAttribute('is')) { return true; }
        name = element.getAttribute('is') || name;
      }

      view = element.ownerDocument.defaultView;
      registry = view && view.customElements;
      if (!registry || !registry.get) { return false; }
      custom = registry.get(name);
      return !!custom && element instanceof custom;
    },

  isRequired =
    function(node) {
      return !!node.required &&
        (/^(select|textarea)$/.test(node.localName) ||
        (node.localName == 'input' &&
        !/^(hidden|range|color|button|submit|reset|image)$/.test(node.type)));
    },

  isContentEditable =
    function(node) {
      var attrValue = 'inherit';
      if (node.hasAttribute('contenteditable')) {
        attrValue = node.getAttribute('contenteditable');
      }
      switch (attrValue) {
        case '':
        case 'plaintext-only':
        case 'true':
          return true;
        case 'false':
          return false;
        default:
          if (node.parentNode && node.parentNode.nodeType === 1) {
            return isContentEditable(node.parentNode);
          }
          return false;
      }
    },

  // return node if node is focusable
  // or false if node isn't focusable
  // Whether a form control is disabled, which is not only its own
  // property: a control inside a disabled fieldset is disabled too, unless it
  // sits in that fieldset's first legend child.
  // https://html.spec.whatwg.org/#enabling-and-disabling-form-controls:-the-disabled-attribute
  isDisabled =
    function(element) {
      var legend, name = element.localName, node;

      if (element.disabled === true) { return true; }

      // an optgroup is disabled by its own attribute and nothing else; an
      // option is also disabled by the optgroup it is a child of
      if (name == 'optgroup') { return false; }
      if (name == 'option') {
        node = element.parentElement;
        return !!node && node.localName == 'optgroup' && node.disabled === true;
      }

      // any disabled fieldset above it, unless it sits in that fieldset's
      // first legend child, which excuses that fieldset and no other
      node = element.parentElement;
      while (node) {
        if (node.localName == 'fieldset' && node.disabled === true) {
          legend = node.firstElementChild;
          while (legend && legend.localName != 'legend') {
            legend = legend.nextElementSibling;
          }
          if (!(legend && legend.contains(element))) { return true; }
        }
        node = node.parentElement;
      }

      return false;
    },

  isFocusable =
    function(node) {
      var doc = node.ownerDocument;
       if (node.contentDocument&&node.localName== 'iframe') { return false; }
       if (doc.hasFocus() && node === doc.activeElement) {
        if (node.type || node.href || typeof node.tabIndex == 'number') {
          return node;
        }
      }
      return false;
    },

  // use the native selector state when it is available; when NWSAPI has
  // installed itself, _matches retains the native implementation
  matchesNative =
    function(node, selector) {
      var matcher = _matches || NATIVE_MATCHES;
      // the captured matcher can still be a host wrapper that delegates back
      // to this engine, in which case the outer answer is the only one
      if (!matcher || matchingNative) { return false; }
      try {
        matchingNative = true;
        return matcher.call(node, selector);
      } catch (e) {
        return false;
      } finally {
        matchingNative = false;
      }
    },

  // set while the captured host matcher runs, see NATIVE_MATCHES
  matchingNative = false,

  // :open and :closed have a portable DOM state for details and dialog.
  // Native matching extends support to host-language states such as pickers.
  isOpen =
    function(node) {
      return (/^(details|dialog)$/i.test(node.localName) && node.open === true) ||
        matchesNative(node, ':open');
    },

  isClosed =
    function(node) {
      return (/^(details|dialog)$/i.test(node.localName) && node.open === false) ||
        matchesNative(node, ':closed');
    },

  isFullscreen =
    function(node) {
      var doc = node.ownerDocument;
      return matchesNative(node, ':fullscreen') || !!(doc && (
        doc.fullscreenElement === node ||
        doc.webkitFullscreenElement === node ||
        doc.mozFullScreenElement === node ||
        doc.msFullscreenElement === node));
    },

  // A modal dialog cannot be distinguished from dialog.show() without the
  // native :modal state. Fullscreen is explicitly modal per the WPT suite.
  isModal =
    function(node) {
      return matchesNative(node, ':modal') || isFullscreen(node);
    },

  isPictureInPicture =
    function(node) {
      var doc = node.ownerDocument;
      return matchesNative(node, ':picture-in-picture') || !!(doc && (
        doc.pictureInPictureElement === node ||
        node.webkitPresentationMode === 'picture-in-picture'));
    },

  // The popover attribute declares capability, not the showing state. The
  // native pseudo-class is therefore required until an explicit state API is
  // available. :popover is retained as an alias for existing callers.
  isPopoverOpen =
    function(node) {
      return node.hasAttribute('popover') && matchesNative(node, ':popover-open');
    },

  // ':link', ':any-link' and ':visited' share this test
  isLink =
    function(node) {
      return reLinkName.test(node.localName) && node.hasAttribute('href');
    },

  // check media resources is playing
  isPlaying =
    function(media) {
      // for <audio>, <video>, <source> and <track> elements
      var parent = media instanceof HTMLMediaElement ? null : media.parentElement;
      return (
        !!( media &&  media.currentTime > 0 &&  !media.paused &&  !media.ended &&  media.readyState > 2) ||
        !!(parent && parent.currentTime > 0 && !parent.paused && !parent.ended && parent.readyState > 2));
    },

  // configure the engine to use special handling
  configure =
    function(option, clear) {
      if (typeof option == 'string') { return !!Config[option]; }
      if (typeof option != 'object') { return Config; }
      for (var i in option) {
        // Compiled logical selectors capture the forgiving mode.
        if (i == 'FORGIVING' && Config[i] !== !!option[i]) { clear = true; }
        Config[i] = !!option[i];
      }
      // clear lambda cache
      if (clear) {
        matchLambdas.clear();
        selectLambdas.clear();
        matchResolvers.clear();
        selectResolvers.clear();
      }
      setIdentifierSyntax();
      return true;
    },

  // centralized error and exceptions handling
  emit =
    function(message, proto) {
      var err;
      if (Config.VERBOSITY) {
        if (proto) {
          err = new proto(message);
        } else {
          err = new global.DOMException(message, 'SyntaxError');
        }
        throw err;
      }
      if (Config.LOGERRORS && console && console.log) {
        console.log(message);
      }
    },

  // execute the engine initialization code
  initialize =
    function(doc) {
      setIdentifierSyntax();
      lastContext = switchContext(doc, true);
    },

  // build validation regexps used by the engine
  setIdentifierSyntax =
    function() {

      //
      // NOTE: SPECIAL CASES IN CSS SYNTAX PARSING RULES
      //
      // The <EOF-token> https://drafts.csswg.org/css-syntax/#typedef-eof-token
      // allow mangled|unclosed selector syntax at the end of selectors strings
      //
      // Literal equivalent hex representations of the characters: " ' ` ] )
      //
      //     \\x22 = " - double quotes    \\x5b = [ - open square bracket
      //     \\x27 = ' - single quote     \\x5d = ] - closed square bracket
      //     \\x60 = ` - back tick        \\x28 = ( - open round parens
      //     \\x5c = \ - back slash       \\x29 = ) - closed round parens
      //
      // using hex format prevents false matches of opened/closed instances
      // pairs, coloring breakage and other editors highlightning problems.
      //

      var

      // non-ascii chars
      noascii = '[^\\x00-\\x9f]',
      // unicode chars
      unicode = '\\\\[0-9a-fA-F]{1,6}',

      // can start with single/double dash
      // but it can not start with a digit
      identifier = '(?:-|--|' + unicode + '[' + HSP + ']' +
                    '?|\\\\[^' + VSP + ']|' + noascii + '|[\\w-])+',

      pseudonames = '[-\\w]+',
      pseudoparms = '(?:[-+]?\\d*)(?:n\\s?[-+]?\\s?\\d*)',
      doublequote = '"[^"\\\\' + VSP + ']*(?:\\\\.[^"\\\\' + VSP + ']*)*(?:"|$)',
      singlequote = "'[^'\\\\" + VSP + "]*(?:\\\\.[^'\\\\" + VSP + "]*)*(?:'|$)",

      attrparser = identifier + '|' + doublequote + '|' + singlequote,

      attrvalues = '([\\x22\\x27]?)((?!\\3)*|(?:\\\\?.)*?)(?:\\3|$)',

      attributes =
        '\\[' +
          // attribute presence
          '(?:\\*\\|)?' +
          WSP + '?' +
          '(' + identifier + '(?::' + identifier + ')?)' +
          WSP + '?' +
          '(?:' +
            '(' + CFG.operators + ')' + WSP + '?' +
            '(?:' + attrparser + ')' +
          ')?' +
          // attribute case sensitivity
          '(?:' + WSP + '?\\b(i))?' + WSP + '?' +
        '(?:\\]|$)',

      attrmatcher = attributes.replace(attrparser, attrvalues),

      pseudoclass =
        '(?:\\x28' + WSP + '*' +
          '(?:' + pseudoparms + '?)?|' +
          // universal * &
          // namespace *|*
          '(?:\\*|\\*\\|)|' +
          '(?:' +
            '(?::' + pseudonames +
              '(?:\\x28' + pseudoparms + '?(?:\\x29|$))?|' +
            ')|' +
            '(?:[.#]?' + identifier + ')|' +
            '(?:' + attributes + ')' +
          ')+|' +
          // the combinator is only recognized, not consumed: taking the
          // character after it swallows the '[' of a following attribute
          // selector, which then cannot be parsed
          '(?:' + WSP + '?[>+~](?=[^>+~])' + WSP + '?)|' +
          '(?:' + WSP + '?,' + WSP + '?)|' +
          '(?:' + WSP + '?)|' +
          '(?:\\x29|$)' +
        ')*',

      standardValidator =
        '(?=' + WSP + '?[^>+~(){}<>])' +
        '(?:' +
          // universal * &
          // namespace *|*
          '(?:\\*|\\*\\|)|' +
          '(?:[.#]?' + identifier + ')+|' +
          '(?:' + attributes + ')+|' +
          '(?:::?' + pseudonames + pseudoclass + ')|' +
          '(?:' + WSP + '?' + CFG.combinators + WSP + '?)|' +
          '(?:' + WSP + '?,' + WSP + '?)|' +
          '(?:' + WSP + '?)' +
        ')+';

      // the following global RE is used to return the
      // deepest localName in selector strings and then
      // use it to retrieve all possible matching nodes
      // that will be filtered by compiled resolvers
      reOptimizer = RegExp(
        '(?:([.:#*]?)' +
        '(' + identifier + ')' +
        '(?:' +
          ':[-\\w]+|' +
          '\\[[^\\]]+(?:\\]|$)|' +
          '\\x28[^\\x29]+(?:\\x29|$)' +
        ')*)$');

      // global
      reValidator = RegExp(standardValidator, 'g');

      Patterns.id = RegExp('^#(' + identifier + ')(.*)');
      Patterns.tagName = RegExp('^(' + identifier + ')(.*)');
      Patterns.className = RegExp('^\\.(' + identifier + ')(.*)');
      Patterns.attribute = RegExp('^(?:' + attrmatcher + ')(.*)');
    },

  /*
  //
  // Resolver Compiler Functions
  //
  // Type of operations
  //
  // S - M - N
  //
  // SELECT
  // MATCH
  // NONE
  //
  */

  F_INIT = '"use strict";return function Resolver(c,f,x,r)',

  S_HEAD = 'var e,n,o,j=r.length-1,k=-1',
  M_HEAD = 'var e,n,o',
  N_HEAD = 'var e,n,o',

  S_LOOP = 'main:while((e=c[++k]))',
  M_LOOP = 'e=c;',
  N_LOOP = 'main:while((e=c.item(++k)))',

  S_BODY = 'r[++j]=c[k];',
  M_BODY = '',
  N_BODY = 'r[++j]=c.item(k);',

  S_TAIL = 'continue main;',
  M_TAIL = 'r=true;',
  N_TAIL = 'r=true;',

  S_TEST = 'if(f(c[k])){break main;}',
  M_TEST = 'f(c);',
  N_TEST = 'if(f(c.item(k))){break main;}',

  S_VARS = [ ],
  M_VARS = [ ],
  N_VARS = [ ],

  // compile groups or single selector strings into
  // executable functions for matching or selecting
  compile =
    function(selector, mode, callback, relative) {
      var cacheKey = (relative ? 'relative:' : 'selector:') + selector;
      var factory, head = '', loop = '', macro = '', source = '', vars = '';

      // 'mode' can be boolean or null
      // true = select / false = match
      // null to use collection.item()
      switch (mode) {
        case true:
          if ((factory = selectLambdas.get(cacheKey))) { return factory; }
          macro = S_BODY + (callback ? S_TEST : '') + S_TAIL;
          head = S_HEAD;
          loop = S_LOOP;
          break;
        case false:
          if ((factory = matchLambdas.get(cacheKey))) { return factory; }
          macro = M_BODY + (callback ? M_TEST : '') + M_TAIL;
          head = M_HEAD;
          loop = M_LOOP;
          break;
        case null:
          if ((factory = selectLambdas.get(cacheKey))) { return factory; }
          macro = N_BODY + (callback ? N_TEST : '') + N_TAIL;
          head = N_HEAD;
          loop = N_LOOP;
          break;
        default:
          break;
      }

      source = compileSelector(
        relative && !/^[>+~]/.test(selector) ? ' ' + selector : selector,
        relative ? 'if(e===s.anchor){' + macro + '}' : macro,
        mode, callback);

      loop += mode || mode === null ? '{' + source + '}' : source;

      if (mode || mode === null && selector.includes(':nth')) {
        loop += reNthElem.test(selector) ? 's.nthElement(null, 2);' : '';
        loop += reNthType.test(selector) ? 's.nthOfType(null, 2);' : '';
      }

      if (S_VARS[0] || M_VARS[0] || N_VARS[0]) {
        vars = ',' + (S_VARS.join(',') || M_VARS.join(',') || N_VARS[0]);
        S_VARS.length = 0;
        M_VARS.length = 0;
        N_VARS.length = 0;
      }

      factory = Function('s', F_INIT + '{' + head + vars + ';' + loop + 'return r;}')(Snapshot);

      if (mode || mode === null) {
        selectLambdas.set(cacheKey, factory);
      } else {
        matchLambdas.set(cacheKey, factory);
      }

      return factory;
    },

  // build conditional code to check components of selector strings
  compileSelector =
    function(expression, source, mode, callback) {

      var a, b, n, f, k = 0, compat, name,
      NS, expr, match, result, status, symbol,
      test, type, selector = expression, vars;

      // isolate selector combinators
      selector = selector.replace(STD.combinator, '$1');

      // javascript needs a label to break
      // out of the while loops processing
      selector_recursion_label:

      while (selector) {

        ++k;

        // get namespace prefix if present or get first char of selector
        symbol = STD.apimethods.test(selector) ? '|' : selector[0];

        switch (symbol) {

          // universal resolver
          case '*':
            match = selector.match(Patterns.universal);
            break;

          // id resolver
          case '#':
            match = selector.match(Patterns.id);
            source = 'if((/^' + match[1] + '$/.test(e.getAttribute("id")))){' + source + '}';
            break;

          // class name resolver
          case '.':
            match = selector.match(Patterns.className);
            compat = (QUIRKS_MODE ? 'i' : '') + '.test(e.getAttribute("class"))';
            source = 'if((/(^|\\s)' + match[1] + '(\\s|$)/' + compat + ')){' + source + '}';
            break;

          // tag name resolver
          case (/[_a-z]/i.test(symbol) ? symbol : undefined):
            match = selector.match(Patterns.tagName);
            source = 'if((e.localName=="' + match[1] + '")){' + source + '}';
            break;

          // namespace resolver
          case '|':
            match = selector.match(Patterns.namespace);
            if (match[1] == '*') {
              source = 'if(true){' + source + '}';
            } else if (!match[1]) {
              source = 'if((!e.namespaceURI)){' + source + '}';
            } else if (typeof match[1] == 'string' && root.prefix == match[1]) {
              source = 'if((e.namespaceURI=="' + NAMESPACE + '")){' + source + '}';
            } else {
              emit('\'' + expression + '\'' + qsInvalid);
            }
            break;

          // attributes resolver
          case '[':
            match = selector.match(Patterns.attribute);
            if (!match) { break; }
            NS = match[0].match(STD.namespaces);
            name = match[1];
            expr = name.split(':');
            expr = expr.length == 2 ? expr[1] : expr[0];
            if (match[2] && !(test = Operators[match[2]])) {
              emit('\'' + expression + '\'' + qsInvalid);
              return '';
            }
            if (match[4] === '') {
              test = match[2] == '~=' ?
                { p1: '^\\s', p2: '+$', p3: 'true' } :
                  match[2] in ATTR_STD_OPS && match[2] != '~=' ?
                { p1: '^',    p2: '$',  p3: 'true' } : test;
            } else if (match[2] == '~=' && match[4].includes(' ')) {
              // whitespace separated list but value contains space
              break;
            } else if (match[4]) {
              match[4] = escapeIdentifier(match[4]).replace(REX.RegExpChar, '\\$&');
            }
            type = match[5] == 'i' || (HTML_DOCUMENT && HTML_TABLE[expr.toLowerCase()]) ? 'i' : '';
            source = 'if((' +
              (!match[2] ? (NS ? 's.hasAttributeNS(e,"' + name + '")' : 'e.hasAttribute&&e.hasAttribute("' + name + '")') :
              !match[4] && ATTR_STD_OPS[match[2]] && match[2] != '~=' ? 'e.getAttribute&&e.getAttribute("' + name + '")==""' :
              '(/' + test.p1 + match[4] + test.p2 + '/' + type + ').test(e.getAttribute&&e.getAttribute("' + name + '"))==' + test.p3) +
              ')){' + source + '}';
            break;

          // *** General sibling combinator
          // E ~ F (F relative sibling of E)
          case '~':
            match = selector.match(Patterns.relative);
            source = 'var N' + k + '=e;while(e&&(e=e.previousElementSibling)){' + source + '}e=N' + k + ';';
            break;

          // *** Adjacent sibling combinator
          // E + F (F adiacent sibling of E)
          case '+':
            match = selector.match(Patterns.adjacent);
            source = 'var N' + k + '=e;if(e&&(e=e.previousElementSibling)){' + source + '}e=N' + k + ';';
            break;

          // *** Descendant combinator
          // E F (E ancestor of F)
          case '\x09':
          case '\x20':
            match = selector.match(Patterns.ancestor);
            source = 'var N' + k + '=e;while(e&&(e=e.parentElement)){' + source + '}e=N' + k + ';';
            break;

          // *** Child combinator
          // E > F (F children of E)
          case '>':
            match = selector.match(Patterns.children);
            source = 'var N' + k + '=e;if(e&&(e=e.parentElement)){' + source + '}e=N' + k + ';';
            break;

          // *** user supplied combinators extensions
          case (symbol in Combinators ? symbol : undefined):
            // for other registered combinators extensions
            match[match.length - 1] = '*';
            source = Combinators[symbol](match) + source;
            break;

          // *** tree-structural pseudo-classes
          // :root, :empty, :first-child, :last-child, :only-child, :first-of-type, :last-of-type, :only-of-type
          case ':':
            if ((match = selector.match(Patterns.structural))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'scope':
                  // use the root (documentElement) when comparing against a document
                  source = 'if(e===(s.from.nodeType===9?s.root:s.from)){' + source + '}';
                  break;
                case 'root':
                  // there can only be one :root element, so exit the loop once found
                  source = 'if((e===s.root)){' + source + (mode ? 'break main;' : '') + '}';
                  break;
                case 'empty':
                  // matches elements that don't contain elements or text nodes
                  source = 'n=e.firstChild;while(n&&!(/1|3/).test(n.nodeType)){n=n.nextSibling}if(!n){' + source + '}';
                  break;

                // *** child-indexed pseudo-classes
                // :first-child, :last-child, :only-child
                case 'only-child':
                  source = 'if((!e.nextElementSibling&&!e.previousElementSibling)){' + source + '}';
                  break;
                case 'last-child':
                  source = 'if((!e.nextElementSibling)){' + source + '}';
                  break;
                case 'first-child':
                  source = 'if((!e.previousElementSibling)){' + source + '}';
                  break;

                // *** typed child-indexed pseudo-classes
                // :only-of-type, :last-of-type, :first-of-type
                case 'only-of-type':
                  source = 'o=e.localName;' +
                    'n=e;while((n=n.nextElementSibling)&&n.localName!=o);if(!n){' +
                    'n=e;while((n=n.previousElementSibling)&&n.localName!=o);}if(!n){' + source + '}';
                  break;
                case 'last-of-type':
                  source = 'n=e;o=e.localName;while((n=n.nextElementSibling)&&n.localName!=o);if(!n){' + source + '}';
                  break;
                case 'first-of-type':
                  source = 'n=e;o=e.localName;while((n=n.previousElementSibling)&&n.localName!=o);if(!n){' + source + '}';
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // *** child-indexed & typed child-indexed pseudo-classes
            // :nth-child, :nth-of-type, :nth-last-child, :nth-last-of-type
            else if ((match = selector.match(Patterns.treestruct))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'nth-child':
                case 'nth-of-type':
                case 'nth-last-child':
                case 'nth-last-of-type':
                  expr = /-of-type/i.test(match[1]);
                  if (match[1] && match[2]) {
                    type = /last/i.test(match[1]);
                    if (match[2] == 'n') {
                      source = 'if(true){' + source + '}';
                      break;
                    } else if (match[2] == '1') {
                      test = type ? 'next' : 'previous';
                      source = expr ? 'n=e;o=e.localName;' +
                        'while((n=n.' + test + 'ElementSibling)&&n.localName!=o);if(!n){' + source + '}' :
                        'if(!e.' + test + 'ElementSibling){' + source + '}';
                      break;
                    } else if (match[2] == 'even' || match[2] == '2n0' || match[2] == '2n+0' || match[2] == '2n') {
                      test = 'n%2==0';
                    } else if (match[2] == 'odd'  || match[2] == '2n1' || match[2] == '2n+1') {
                      test = 'n%2==1';
                    } else {
                      f = /n/i.test(match[2]);
                      n = match[2].split('n');
                      a = parseInt(n[0], 10) || 0;
                      b = parseInt(n[1], 10) || 0;
                      if (n[0] == '-') { a = -1; }
                      if (n[0] == '+') { a = +1; }
                      test = (b ? '(n' + (b > 0 ? '-' : '+') + Math.abs(b) + ')' : 'n') + '%' + a + '==0' ;
                      test =
                        a >= +1 ? (f ? 'n>' + (b - 1) + (Math.abs(a) != 1 ? '&&' + test : '') : 'n==' + a) :
                        a <= -1 ? (f ? 'n<' + (b + 1) + (Math.abs(a) != 1 ? '&&' + test : '') : 'n==' + a) :
                        a === 0 ? (n[0] ? 'n==' + b : 'n>' + (b - 1)) : 'false';
                    }
                    expr = expr ? 'OfType' : 'Element';
                    type = type ? 'true' : 'false';
                    source = 'n=s.nth' + expr + '(e,' + type + ');if((' + test + ')){' + source + '}';
                  } else {
                    emit('\'' + expression + '\'' + qsInvalid);
                  }
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // *** logical combination pseudo-classes
            // :is( s1, [ s2, ... ]), :not( s1, [ s2, ... ]),
            // :has( s1, [ s2, ... ]) no nesting is allowed for
            // :where( s1, [ s2, ... ]), :matches( s1, [ s2, ... ]),
            else if ((match = matchLogical(selector))) {
              match[1] = match[1].toLowerCase();
              expr = match[2].replace(/\x22/g, '\\"');
              switch (match[1]) {
                case 'is':
                case 'where':
                  if (Config.FORGIVING) {
                    source = 'if(s.matchForgiving(' +
                      JSON.stringify(splitList(match[2])) + ',e)){' + source + '}';
                  } else {
                    source = 'if(s.match("' + expr + '",e)){' + source + '}';
                  }
                  break;
                case 'matches':
                  source = 'if(s.match("' + expr + '",e)){' + source + '}';
                  break;
                case 'not':
                  source = 'if(!s.match("' + expr + '",e)){' + source + '}';
                  break;
                case 'has':
                  source = 'if(s.has(' + JSON.stringify(splitList(match[2])) + ',e)){' + source + '}';
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // *** linguistic pseudo-classes
            // :dir( ltr / rtl ), :lang( en )
            else if ((match = selector.match(Patterns.linguistic))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'dir':
                  source = 'var p;if((' +
                    '(/' + match[2] + '/i.test(e.dir))||(p=s.ancestor("[dir]", e))&&' +
                    '(/' + match[2] + '/i.test(p.dir))||(e.dir==""||e.dir=="auto")&&' +
                    '(' + (match[2] == 'ltr' ? '!':'')+ RTL +'.test(e.textContent)))' +
                    '){' + source + '};';
                  break;
                case 'lang':
                  expr = '(?:^|-)' + match[2] + '(?:-|$)';
                  source = 'var p;if((' +
                    '(e.isConnected&&(e.lang==""&&(p=s.ancestor("[lang]",e)))&&' +
                    '(p.lang=="' + match[2] + '")||/'+ expr +'/i.test(e.lang)))' +
                    '){' + source + '};';
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // *** location pseudo-classes
            // :any-link, :link, :visited, :target, :defined
            else if ((match = selector.match(Patterns.locationpc))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'any-link':
                  source = 'if((s.isLink(e)||e.visited)){' + source + '}';
                  break;
                case 'link':
                  source = 'if(s.isLink(e)){' + source + '}';
                  break;
                case 'visited':
                  source = 'if((s.isLink(e)&&e.visited)){' + source + '}';
                  break;
                case 'target':
                  source = 'if(((s.doc.compareDocumentPosition(e)&16)&&s.doc.location.hash&&e.id==s.doc.location.hash.slice(1))){' + source + '}';
                  break;
                case 'defined':
                  source = 'if(s.isDefined(e)){' + source + '}';
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // *** user actions pseudo-classes
            // :hover, :active, :focus, :focus-visible, :focus-within
            else if ((match = selector.match(Patterns.useraction))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'hover':
                  source = 'if(e===s.HOVER){' + source + '}';
                  break;
                case 'active':
                  source = 'if(e===s.doc.activeElement){' + source + '}';
                  break;
                case 'focus':
                  source = 'if(s.isFocusable(e)){' + source + '}';
                  break;
                case 'focus-visible':
                  // The v2.x branch has no reliable keyboard-modality state.
                  // An element with observable input focus is the conservative
                  // behavior shared by focus and focus-visible in this line.
                  source = 'if(s.isFocusable(e)){' + source + '}';
                  break;
                case 'focus-within':
                  source = 'if(e.contains(s.doc.activeElement)){' + source + '}';
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // *** user interface and form pseudo-classes
            // :enabled, :disabled, :read-only, :read-write, :placeholder-shown, :default
            else if ((match = selector.match(Patterns.inputstate))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'enabled':
                  // the complement of ':disabled' over the same elements
                  source = 'if((("form" in e||/^optgroup$/i.test(e.localName))&&' +
                    '"disabled" in e&&!s.isDisabled(e))){' + source + '}';
                  break;
                case 'disabled':
                  source = 'if((("form" in e||/^optgroup$/i.test(e.localName))&&' +
                    '"disabled" in e&&s.isDisabled(e))){' + source + '}';
                  break;
                case 'read-only':
                case '-moz-read-only':
                  source =
                    'if(' +
                      '(/^textarea$/i.test(e.localName)&&(e.readOnly||s.isDisabled(e)))||' +
                      '(/^input$/i.test(e.localName)&&("|date|datetime-local|email|month|number|password|search|tel|text|time|url|week|".includes("|"+e.type+"|")?(e.readOnly||s.isDisabled(e)):true))||' +
                      '(!/^(?:input|textarea)$/i.test(e.localName) && !s.isContentEditable(e))' +
                    '){' + source + '}';
                  break;
                case 'read-write':
                case '-moz-read-write':
                  source =
                    'if(' +
                      '(/^textarea$/i.test(e.localName)&&!e.readOnly&&!s.isDisabled(e))||' +
                      '(/^input$/i.test(e.localName)&&"|date|datetime-local|email|month|number|password|search|tel|text|time|url|week|".includes("|"+e.type+"|")&&!e.readOnly&&!s.isDisabled(e))||' +
                      '(!/^(?:input|textarea)$/i.test(e.localName) && s.isContentEditable(e))' +
                    '){' + source + '}';
                  break;
                case 'autofill':
                case '-webkit-autofill':
                  source = 'if(s.matchesNative(e,":autofill")||s.matchesNative(e,":-webkit-autofill")){' + source + '}';
                  break;
                case 'placeholder-shown':
                  source =
                    'if((' +
                      '(/^(?:input|textarea)$/i.test(e.localName))&&e.hasAttribute("placeholder")&&' +
                      '("|textarea|password|number|search|email|text|tel|url|".includes("|"+e.type+"|"))&&' +
                      '(!s.match(":focus",e))' +
                    ')){' + source + '}';
                  break;
                case 'default':
                  source =
                    'if(("form" in e && e.form)){' +
                      'var x=0;n=[];' +
                      'if(e.type=="image")n=e.form.getElementsByTagName("input");' +
                      'if(e.type=="submit")n=e.form.elements;' +
                      'while(n[x]&&e!==n[x]){' +
                        'if(n[x].type=="image")break;' +
                        'if(n[x].type=="submit")break;' +
                        'x++;' +
                      '}' +
                    '}' +
                    'if((e.form&&(e===n[x]&&"|image|submit|".includes("|"+e.type+"|"))||' +
                      '((/^option$/i.test(e.localName))&&e.defaultSelected)||' +
                      '(("|radio|checkbox|".includes("|"+e.type+"|"))&&e.defaultChecked)' +
                    ')){' + source + '}';
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // *** input pseudo-classes (for form validation)
            // :checked, :indeterminate, :valid, :invalid, :in-range, :out-of-range, :required, :optional
            else if ((match = selector.match(Patterns.inputvalue))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'checked':
                  source = 'if((/^input$/i.test(e.localName)&&' +
                    '("|radio|checkbox|".includes("|"+e.type+"|")&&e.checked)||' +
                    '(/^option$/i.test(e.localName)&&(e.selected||e.checked))' +
                    ')){' + source + '}';
                  break;
                case 'indeterminate':
                  source =
                    'if((/^progress$/i.test(e.localName)&&!e.hasAttribute("value"))||' +
                      '(/^input$/i.test(e.localName)&&("checkbox"==e.type&&e.indeterminate)||' +
                      '("radio"==e.type&&e.name&&!s.first("input[name="+e.name+"]:checked",e.form))' +
                    ')){' + source + '}';
                  break;
                case 'required':
                  source =
                    'if((s.isRequired(e))' +
                    '){' + source + '}';
                  break;
                case 'optional':
                  source =
                    'if((/^(?:button|input|select|textarea)$/i.test(e.localName)&&!s.isRequired(e))' +
                    '){' + source + '}';
                  break;
                case 'invalid':
                  source =
                    'if(((' +
                      '(/^form$/i.test(e.localName)&&!e.noValidate)||' +
                      '(e.willValidate&&!e.formNoValidate))&&!e.checkValidity())||' +
                      '(/^fieldset$/i.test(e.localName)&&s.first(":invalid",e))' +
                    '){' + source + '}';
                  break;
                case 'valid':
                  source =
                    'if(((' +
                      '(/^form$/i.test(e.localName)&&!e.noValidate)||' +
                      '(e.willValidate&&!e.formNoValidate))&&e.checkValidity())||' +
                      '(/^fieldset$/i.test(e.localName)&&!s.first(":invalid",e))' +
                    '){' + source + '}';
                  break;
                case 'in-range':
                  source =
                    'if((/^input$/i.test(e.localName))&&' +
                      '(e.willValidate&&!e.formNoValidate)&&' +
                      '(!e.validity.rangeUnderflow&&!e.validity.rangeOverflow)&&' +
                      '("|date|datetime-local|month|number|range|time|week|".includes("|"+e.type+"|"))&&' +
                      '("range"==e.type||e.getAttribute("min")||e.getAttribute("max"))' +
                    '){' + source + '}';
                  break;
                case 'out-of-range':
                  source =
                    'if((/^input$/i.test(e.localName))&&' +
                      '(e.willValidate&&!e.formNoValidate)&&' +
                      '(e.validity.rangeUnderflow||e.validity.rangeOverflow)&&' +
                      '("|date|datetime-local|month|number|range|time|week|".includes("|"+e.type+"|"))&&' +
                      '("range"==e.type||e.getAttribute("min")||e.getAttribute("max"))' +
                    '){' + source + '}';
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // resources state pseudo-classes (multimedia state)
            // :playing, :paused, :seeking, :buffering, :stalled, :muted, :volume-locked
            else if ((match = selector.match(Patterns.rsrc_state))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'playing':
                  source = 'if(s.isPlaying(e)){' + source + '}';
                  break;
                case 'paused':
                  source = 'if(!s.isPlaying(e)){' + source + '}';
                  break;
                case 'seeking':
                  source = 'if(!s.isPlaying(e)){' + source + '}';
                  break;
                case 'buffering':
                  break;
                case 'stalled':
                  break;
                case 'muted':
                  source = 'if(e.localName=="audio"&&e.getAttribute("muted")){' + source + '}';
                  break;
                case 'volume-locked':
                  break;
                default:
                  break;
              }
            }

            // display state pseudo-classes. Helpers use native matching when
            // available and otherwise only properties observable from the DOM.
            else if ((match = selector.match(Patterns.disp_state))) {
              match[1] = match[1].toLowerCase();
              switch (match[1]) {
                case 'open':
                  source = 'if(s.isOpen(e)){' + source + '}';
                  break;
                case 'closed':
                  source = 'if(s.isClosed(e)){' + source + '}';
                  break;
                case 'modal':
                  source = 'if(s.isModal(e)){' + source + '}';
                  break;
                case 'fullscreen':
                  source = 'if(s.isFullscreen(e)){' + source + '}';
                  break;
                case 'picture-in-picture':
                  source = 'if(s.isPictureInPicture(e)){' + source + '}';
                  break;
                case 'popover':
                case 'popover-open':
                  source = 'if(s.isPopoverOpen(e)){' + source + '}';
                  break;
                default:
                  emit('\'' + expression + '\'' + qsInvalid);
                  break;
              }
            }

            // allow pseudo-elements starting with single colon (:)
            // :after, :before, :first-letter, :first-line
            // assert: e.type is in double-colon format, like ::after
            else if ((match = selector.match(Patterns.pseudo_sng))) {
              source = 'if(e.element&&e.type.toLowerCase()=="' +
                ':' + match[0].toLowerCase() + '"){e=e.element;' + source + '}';
            }

            // allow pseudo-elements starting with double colon (::)
            // ::after, ::before, ::marker, ::placeholder, ::selection,
            // ::inactive-selection, ::-webkit-<foo-bar>
            // assert: e.type is in double-colon format, like ::after
            else if ((match = selector.match(Patterns.pseudo_dbl))) {
              source = 'if(e.element&&e.type.toLowerCase()=="' +
                match[0].toLowerCase() + '"){e=e.element;' + source + '}';
            }

            else {

              // reset
              expr = false;
              status = false;

              // process registered selector extensions
              for (expr in Selectors) {
                if ((match = selector.match(Selectors[expr].Expression))) {
                  result = Selectors[expr].Callback(match, source, mode, callback);
                  if ('match' in result) { match = result.match; }
                  vars = result.modvar;
                  if (mode) {
                     // add extra select() vars
                     vars && S_VARS.indexOf(vars) < 0 && (S_VARS[S_VARS.length] = vars);
                  } else {
                     // add extra match() vars
                     vars && M_VARS.indexOf(vars) < 0 && (M_VARS[M_VARS.length] = vars);
                  }
                  // extension source code
                  source = result.source;
                  // extension status code
                  status = result.status;
                  // break on status error
                  if (status) { break; }
                }
              }

              if (!status) {
                if (Config.FORGIVING &&
                  selector.match(/(:(?:is|where)\x28)/)) {
                  return '';
                }
                emit('unknown pseudo-class selector \'' + selector + '\'');
                return '';
              }

              if (!expr) {
                if (Config.FORGIVING &&
                  selector.match(/(:(?:is|where)\x28)/)) {
                  return '';
                }
                emit('unknown token in selector \'' + selector + '\'');
                return '';
              }

            }
            break;

        default:
          emit('\'' + expression + '\'' + qsInvalid);
          break selector_recursion_label;

        }
        // end of switch symbol

        if (!match) {
          if (Config.FORGIVING &&
            selector.match(/(:(?:is|where)\x28)/)) {
            return '';
          }
          emit('\'' + expression + '\'' + qsInvalid);
          return '';
        }

        // pop last component
        selector = match.pop();
      }
      // end of while selector

      return source;
    },

  // replace :scope context element as a
  // a reference in the selector string
  makeref =
    function(selectors, element) {
      // replace DOCUMENT with first element (root)
      if (element.nodeType === 9) {
        element = element.documentElement;
      }
      return selectors.replace(/:scope/i,
        (element.localName) +
        (element.id ? '#' + escapeIdentifier(element.id) : '') +
        (element.className ? '.' + escapeIdentifier(element.classList[0]) : ''));
    },

  // equivalent of w3c 'closest' method
  ancestor =
    function _closest(selectors, element, callback) {
      parse(selectors, true);
      selectors = makeref(selectors, element);
      while (element) {
        if (match(selectors, element, callback)) break;
        element = element.parentElement;
      }
      return element;
    },

  match_assert =
    function(f, element, callback) {
      for (var i = 0, l = f.length, r = false; l > i; ++i)
        f[i](element, callback, null, false) && (r = true);
      return r;
    },

  match_collect =
    function(selectors, callback) {
      for (var i = 0, l = selectors.length, f = [ ]; l > i; ++i)
        f[i] = compile(selectors[i], false, callback);
      return { factory: f };
    },

  // Consume string continuations before whitespace normalization. Preserve
  // escape boundaries: removing a continuation must not extend a hex escape.
  stringContinuations =
    function(selectors) {
      if (!/[\r\n\f]/.test(selectors)) { return selectors; }
      var i = 0, j, c, next, quote = '', result = '', length = selectors.length;
      while (i < length) {
        c = selectors[i++];
        if (c == '\\' && i == length && quote) { break; }
        if (c == '\\' && i < length) {
          next = selectors[i];
          if (quote && /[\r\n\f]/.test(next)) {
            ++i;
            if (next == '\r' && selectors[i] == '\n') { ++i; }
            continue;
          }
          if (quote && /[0-9a-f]/i.test(next)) {
            j = i;
            while (i < length && i - j < 6 && /[0-9a-f]/i.test(selectors[i])) { ++i; }
            result += '\\' + ('000000' + selectors.slice(j, i)).slice(-6);
            if (/[\x20\t\r\n\f]/.test(selectors[i] || '')) {
              next = selectors[i++];
              if (next == '\r' && selectors[i] == '\n') { ++i; }
            }
            continue;
          }
          result += c + selectors[i++];
          continue;
        }
        if (c == quote) { quote = ''; }
        else if (!quote && (c == '"' || c == "'")) { quote = c; }
        result += c;
      }
      // EOF closes a string. Keep its trailing whitespace inside that string
      // so selector trimming cannot erase a bad newline or a literal space.
      return result + quote;
    },

  // Reject malformed blocks before the regular-expression validator runs.
  validBlocks =
    function(text) {
      var stack = [], quote = '', chr, i = 0, length = text.length;
      for (; i < length; ++i) {
        chr = text.charAt(i);
        if (chr == '\\') {
          ++i;
          continue;
        }
        if (quote) {
          if (chr == quote) {
            quote = '';
          } else if (/[\r\n\f]/.test(chr)) {
            return false;
          }
        } else if (chr == '"' || chr == "'") {
          quote = chr;
        } else if (!validBlockToken(chr, stack)) {
          return false;
        }
      }
      // CSS closes unfinished strings and blocks at EOF.
      return true;
    },

  validBlockToken =
    function(chr, stack) {
      if (chr == '(' || chr == '[') {
        stack.push(chr);
      } else if (chr == ')' || chr == ']') {
        return stack.pop() == (chr == ')' ? '(' : '[');
      }
      return chr != '{' && chr != '}';
    },

  // unique parser entry point for all
  // methods (type matching/selecting)
  parse =
    function(selectors, type) {

      var parsed;

      // arguments validation
      if (arguments.length === 0) {
        emit(qsNotArgs, TypeError);
        return Config.VERBOSITY ? undefined : (type ? none : false);
      } else if (arguments[0] === '') {
        emit('\'\'' + qsInvalid);
        return Config.VERBOSITY ? undefined : (type ? none : false);
      } else if (/^[.#]?\d/.test(selectors)) {
        emit('\'\'' + qsInvalid);
        return Config.VERBOSITY ? undefined : (type ? none : false);
      }

      // input NULL or UNDEFINED
      if (typeof selectors != 'string') {
        selectors = '' + selectors;
      }

      selectors = stringContinuations(selectors);
      if (!validBlocks(selectors)) {
        emit("'" + selectors + "'" + qsInvalid);
        return type ? none : false;
      }

      // normalize input string
      parsed = selectors.
        replace(/\x00|\\$/g, '\ufffd').
        replace(REX.CombineWSP, '\x20').
        replace(REX.PseudosWSP, '$1').
        replace(REX.TabCharWSP, '\t').
        replace(REX.CommaGroup, ',').
        replace(REX.TrimSpaces, '');

      // parse, validate and split possible compound selectors
      if ((selectors = parsed.match(reValidator)) && selectors.join('') == parsed) {
        selectors = splitList(parsed);
        if (parsed[parsed.length - 1] == ',') {
          emit(qsInvalid);
          return Config.VERBOSITY ? undefined : (type ? none : false);
        }
      } else {
        if (Config.FORGIVING) {
          // forgiving pseudos allow to continue even after parse errors
          if (!(parsed.includes(':is(') || parsed.includes(':where('))) {
            // 'selectors' holds the fragments the validator did match,
            // which read as a mangled selector once joined by String()
            emit('\'' + parsed + '\'' + qsInvalid);
            return Config.VERBOSITY ? undefined : (type ? none : false);
          }
          // The validator cannot read this selector, but it holds a
          // forgiving list, which may be where the part it cannot read
          // lives. Hand on the selector itself rather than the fragments the
          // validator did match: compiled, the argument of an :is() or
          // :where() is evaluated inside a try/catch, so the unreadable part
          // drops out and the rest of the selector still applies. Returning
          // the fragments compiled each of them as a selector of its own,
          // which made 'div:not(:is(svg|div))' match every element in the
          // document rather than the divs.
          selectors = splitList(parsed);
        }
      }

      return selectors;
    },

  // equivalent of w3c 'matches' method
  match =
    function _matches(selectors, element, callback) {

      var resolver;

      if (element && (resolver = matchResolvers.get(selectors))) {
        return match_assert(resolver.factory, element, callback);
      }

      resolver = match_collect(parse(selectors, false), callback);
      matchResolvers.set(selectors, resolver);

      return match_assert(resolver.factory, element, callback);
    },

  // Invalid items do not discard the remaining forgiving selectors.
  matchForgiving =
    function(list, element) {
      for (var i = 0, l = list.length; l > i; ++i) {
        try {
          if (match(list[i], element)) { return true; }
        } catch (e) { }
      }
      return false;
    },

  // true if element matches the selector
  has =
    function(list, anchor) {
      var context, found = false, i = 0, length = list.length,
        previous = Snapshot.anchor;
      Snapshot.anchor = anchor;
      try {
        for (; i < length; ++i) {
          if (!list[i]) {
            emit(qsInvalid);
            return false;
          }
          context = /^[+~]/.test(list[i]) ? anchor.parentElement : anchor;
          // Validate root sibling selectors even when they have no candidates.
          if (collect(parse('* ' + list[i], true).map(function(selector) {
            return selector.slice(1).replace(/^\s+/, '');
          }), context || anchor, undefined, true).results.length && context) {
            found = true;
          }
        }
        return found;
      } finally {
        Snapshot.anchor = previous;
      }
    },

  // equivalent of w3c 'querySelector' method
  first =
    function _querySelector(selectors, context, callback) {
      return select(selectors, context,
        typeof callback == 'function' ?
        function firstMatch(element) {
          callback(element);
          return false;
        } :
        function firstMatch() {
          return false;
        }
      )[0] || null;
    },

  // equivalent of w3c 'querySelectorAll' method
  select =
    function _querySelectorAll(selectors, context, callback) {

      var nodes = [ ], resolver;

      arguments.length == 0 &&
        emit(qsNotArgs, TypeError);

      context || (context = doc);
        lastContext !== context &&
          (lastContext = switchContext(context));

      if (selectors) {
        if ((resolver = selectResolvers.get(selectors))) {
          if (resolver.context === context &&
            resolver.callback === callback) {
            var i, l, list,
              f = resolver.factory,
              h = resolver.htmlset,
              n = resolver.nodeset;
            if (n.length > 1) {
              for (i = 0, l = n.length; l > i; ++i) {
                list = compat[n[i][0]](context, n[i].slice(1))();
                if (f[i] !== null) {
                  f[i](list, callback, context, nodes);
                } else {
                  nodes = nodes.concat(list);
                }
              }
              if (l > 1 && nodes.length > 1) {
                nodes.sort(documentOrder);
                hasDupes && (nodes = unique(nodes));
              }
            } else {
              if (f[0]) {
                nodes = f[0](h[0](), callback, context, nodes);
              } else {
                nodes = h[0]();
              }
            }
            if (typeof callback == 'function') {
              nodes = concatCall(nodes, callback);
            }
            return !Config.NODE_LIST ?
              nodes : isInstanceOf(nodes) ?
              nodes : toNodeList(nodes);
          }
        }
      }

      // save/reuse factory and closure collection
      selectResolvers.set(selectors, collect(parse(selectors, true), context, callback));

      nodes = selectResolvers.get(selectors).results;

      if (typeof callback == 'function') {
        nodes = concatCall(nodes, callback);
      }
      return !Config.NODE_LIST ?
        nodes : isInstanceOf(nodes) ?
        nodes : toNodeList(nodes);
    },

  // optimize selectors avoiding duplicated checks
  optimize =
    function(selector, token) {
      var index = token.index,
      length = token[1].length + token[2].length;
      return selector.slice(0, index) +
        (' >+~'.indexOf(selector.charAt(index - 1)) > -1 ?
          (':['.indexOf(selector.charAt(index + length + 1)) > -1 ?
          '*' : '') : '') + selector.slice(index + length - (token[1] == '*' ? 1 : 0));
    },

  // prepare factory resolvers and closure collections
  collect =
    function(selectors, context, callback, relative) {

      var i, l, seen = { }, token = ['', '*', '*'], optimized = selectors,
      factory = [ ], htmlset = [ ], nodeset = [ ], results = [ ], type;

      for (i = 0, l = selectors.length; l > i; ++i) {

        if (!seen[selectors[i]] && (seen[selectors[i]] = true)) {
          type = selectors[i].match(reOptimizer);
          if (type && type[1] != ':' && selectors[i].indexOf('\\') < 0 && (token = type)) {
            token[1] || (token[1] = '*');
            optimized[i] = optimize(optimized[i], token);
          } else {
            token = ['', '*', '*'];
          }
        }

        nodeset[i] = token[1] + token[2];
        token[2] = unescapeIdentifier(token[2]);
        htmlset[i] = compat[token[1]](context, token[2]);
        factory[i] = compile(optimized[i], true, null, relative);

        factory[i] ?
          factory[i](htmlset[i](), callback, context, results) :
          results.concat(htmlset[i]());
      }

      if (l > 1) {
        results.sort(documentOrder);
        hasDupes && (results = unique(results));
      }

      return {
        callback: callback,
        context: context,
        factory: factory,
        htmlset: htmlset,
        nodeset: nodeset,
        results: results
      };

    },

  // handlers needed for the :hover pseudo-class
  // track state change in browsers and headless
  initEnv =
    (function() {
      doc.addEventListener('mouseover', function(e) { Snapshot.HOVER = e.target; }, true);
      doc.addEventListener('mouseout', function(e) { Snapshot.HOVER = null; }, true);
    })(),

  // QSA placeholders to native references
  _closest, _matches,
  _querySelector, _querySelectorAll,
  _querySelectorDoc, _querySelectorAllDoc,

  // overrides QSA methods (only for browsers)
  install =
    function(all) {
      // save references
      _closest = Element.prototype.closest;
      _matches = Element.prototype.matches;

      _querySelector = Element.prototype.querySelector;
      _querySelectorAll = Element.prototype.querySelectorAll;

      _querySelectorDoc = Document.prototype.querySelector;
      _querySelectorAllDoc = Document.prototype.querySelectorAll;

      function parseQSArgs() {
        var method = arguments[arguments.length - 1];
        return (
          arguments.length < 2 ?
            method.apply(this, [ ]) :
          arguments.length < 3 ?
            method.apply(this, [ arguments[0], this ]) :
            method.apply(this, [ arguments[0], this,
              typeof arguments[1] == 'function' ? arguments[1] : undefined ]));
      }

      Element.prototype.closest =
      HTMLElement.prototype.closest =
        function closest() {
          return parseQSArgs.apply(this, [].slice.call(arguments).concat(ancestor));
        };

      Element.prototype.matches =
      HTMLElement.prototype.matches =
        function matches() {
          return parseQSArgs.apply(this, [].slice.call(arguments).concat(match));
        };

      Element.prototype.querySelector =
      HTMLElement.prototype.querySelector =
        function querySelector() {
          return parseQSArgs.apply(this, [].slice.call(arguments).concat(first));
        };

      Element.prototype.querySelectorAll =
      HTMLElement.prototype.querySelectorAll =
        function querySelectorAll() {
          return parseQSArgs.apply(this, [].slice.call(arguments).concat(select));
        };

      Document.prototype.querySelector =
      DocumentFragment.prototype.querySelector =
        function querySelector() {
          return parseQSArgs.apply(this, [].slice.call(arguments).concat(first));
        };

      Document.prototype.querySelectorAll =
      DocumentFragment.prototype.querySelectorAll =
        function querySelectorAll() {
          return parseQSArgs.apply(this, [].slice.call(arguments).concat(select));
      };

      if (all) {
        doc.addEventListener('load', function(e) {
          var c, d, r, s, t = e.target;
          if (/iframe/i.test(t.localName)) {
            c = '(' + Export + ')(this, ' + Factory + ');'; d = t.ownerDocument;
            s = d.createElement('script'); s.textContent = c + 'NW.Dom.install(true)';
            r = d.documentElement; r.removeChild(r.insertBefore(s, r.firstChild));
          }
        }, true);
      }

    },

  // restore QSA methods (only for browsers)
  uninstall =
    function() {
      // restore references
      if (_closest) {
        Element.prototype.closest = _closest;
        HTMLElement.prototype.closest = _closest;
      }
      if (_matches) {
        Element.prototype.matches = _matches;
        HTMLElement.prototype.matches = _matches;
      }
      if (_querySelector) {
        Element.prototype.querySelector =
        HTMLElement.prototype.querySelector = _querySelector;
        Element.prototype.querySelectorAll =
        HTMLElement.prototype.querySelectorAll = _querySelectorAll;
      }
      if (_querySelectorAllDoc) {
        Document.prototype.querySelector =
        DocumentFragment.prototype.querySelector = _querySelectorDoc;
        Document.prototype.querySelectorAll =
        DocumentFragment.prototype.querySelectorAll = _querySelectorAllDoc;
      }
    },

  // empty set
  none = Array(),

  // context
  lastContext,

  // cached lambdas
  matchLambdas = createCache(),
  selectLambdas = createCache(),

  // cached resolvers
  matchResolvers = createCache(),
  selectResolvers = createCache(),

  // passed to resolvers
  Snapshot = {

    doc: doc,
    from: doc,
    root: root,
    anchor: null,

    byTag: byTag,

    has: has,
    first: first,
    match: match,
    matchForgiving: matchForgiving,
    select: select,

    ancestor: ancestor,

    nthOfType: nthOfType,
    nthElement: nthElement,

    isDefined: isDefined,
    matchesNative: matchesNative,
    isRequired: isRequired,
    isOpen: isOpen,
    isClosed: isClosed,
    isDisabled: isDisabled,
    isModal: isModal,
    isFullscreen: isFullscreen,
    isPictureInPicture: isPictureInPicture,
    isPopoverOpen: isPopoverOpen,
    isFocusable: isFocusable,
    isContentEditable: isContentEditable,
    isLink: isLink,
    hasAttributeNS: hasAttributeNS
  },

  // public exported methods/objects
  Dom = {

    // exported cache objects

    matchLambdas: matchLambdas,
    selectLambdas: selectLambdas,

    matchResolvers: matchResolvers,
    selectResolvers: selectResolvers,

    // exported compiler macros

    CFG: CFG,

    S_BODY: S_BODY,
    M_BODY: M_BODY,
    N_BODY: M_BODY,

    S_TEST: S_TEST,
    M_TEST: M_TEST,
    N_TEST: N_TEST,

    // exported engine methods

    byId: byId,
    byTag: byTag,
    byClass: byClass,

    first: first,
    match: match,
    select: select,

    closest: ancestor,

    compile: compile,
    configure: configure,

    emit: emit,
    Config: Config,
    Snapshot: Snapshot,

    Version: version,

    install: install,
    uninstall: uninstall,

    Operators: Operators,
    Selectors: Selectors,

    // register a new selector combinator symbol and its related function resolver
    registerCombinator:
      function(combinator, resolver) {
        var i = 0, l = combinator.length, symbol;
        for (; l > i; ++i) {
          if (combinator[i] != '=') {
            symbol = combinator[i];
            break;
          }
        }
        if (CFG.combinators.indexOf(symbol) < 0) {
          CFG.combinators = CFG.combinators.replace('](', symbol + '](');
          CFG.combinators = CFG.combinators.replace('])', symbol + '])');
          Combinators[combinator] = resolver;
          setIdentifierSyntax();
        } else {
          console.warn('Warning: the \'' + combinator + '\' combinator is already registered.');
        }
      },

    // register a new attribute operator symbol and its related function resolver
    registerOperator:
      function(operator, resolver) {
        var i = 0, l = operator.length, symbol;
        for (; l > i; ++i) {
          if (operator[i] != '=') {
            symbol = operator[i];
            break;
          }
        }
        if (CFG.operators.indexOf(symbol) < 0 && !Operators[operator]) {
          CFG.operators = CFG.operators.replace(']=', symbol + ']=');
          Operators[operator] = resolver;
          setIdentifierSyntax();
        } else {
          console.warn('Warning: the \'' + operator + '\' operator is already registered.');
        }
      },

    // register a new selector symbol and its related function resolver
    registerSelector:
      function(name, rexp, func) {
        Selectors[name] || (Selectors[name] = {
          Expression: rexp,
          Callback: func
        });
      }
  };

  initialize(doc);

  return Dom;

});
