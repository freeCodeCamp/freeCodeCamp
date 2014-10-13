var http          = require('http'),
    URL           = require('url'),
    HtmlToDom     = require('./htmltodom').HtmlToDom,
    domToHtml     = require('./domtohtml').domToHtml,
    htmlencoding  = require('./htmlencoding'),
    HTMLEncode    = htmlencoding.HTMLEncode,
    HTMLDecode    = htmlencoding.HTMLDecode,
    jsdom         = require('../../jsdom'),
    Location      = require('./location'),
    History       = require('./history'),
    NOT_IMPLEMENTED = require('./utils').NOT_IMPLEMENTED,
    CSSStyleDeclaration = require('cssstyle').CSSStyleDeclaration,
    toFileUrl = require('../utils').toFileUrl,
    defineGetter  = require('../utils').defineGetter,
    defineSetter  = require('../utils').defineSetter,
    createFrom    = require('../utils').createFrom,
    Contextify    = require('contextify');

function matchesDontThrow(el, selector) {
  try {
    return el.matchesSelector(selector);
  } catch (e) {
    return false;
  }
}

/**
 * Creates a window having a document. The document can be passed as option,
 * if omitted, a new document will be created.
 */
exports.windowAugmentation = function(dom, options) {
  options = options || {};
  var window = exports.createWindow(dom, options);

  if (!options.document) {
    var browser = browserAugmentation(dom, options);

    options.document = (browser.HTMLDocument)             ?
                        new browser.HTMLDocument(options) :
                        new browser.Document(options);



    options.document.write('<html><head></head><body></body></html>');
  }

  var doc = window.document = options.document;

  if (doc.addEventListener) {
    if (doc.readyState == 'complete') {
      var ev = doc.createEvent('HTMLEvents');
      ev.initEvent('load', false, false);
      process.nextTick(function () {
        window.dispatchEvent(ev);
      });
    }
    else {
      doc.addEventListener('load', function(ev) {
        window.dispatchEvent(ev);
      });
    }
  }

  return window;
};

/**
 * Creates a document-less window.
 */
exports.createWindow = function(dom, options) {
  var timers = [];
  var cssSelectorSplitRE = /((?:[^,"']|"[^"]*"|'[^']*')+)/;

  function startTimer(startFn, stopFn, callback, ms) {
    var res = startFn(callback, ms);
    timers.push( [ res, stopFn ] );
    return res;
  }

  function stopTimer(id) {
    if (typeof id === 'undefined') {
      return;
    }
    for (var i in timers) {
      if (timers[i][0] === id) {
        timers[i][1].call(this, id);
        timers.splice(i, 1);
        break;
      }
    }
  }

  function stopAllTimers() {
    timers.forEach(function (t) {
      t[1].call(this, t[0]);
    });
    timers = [];
  }

  function DOMWindow(options) {
    var url = (options || {}).url || toFileUrl(__filename);
    this.location = new Location(url, this);
    this.history = new History(this);

    this.console._window = this;

    if (options && options.document) {
      options.document.location = this.location;
    }

    this.addEventListener = function() {
      dom.Node.prototype.addEventListener.apply(window, arguments);
    };
    this.removeEventListener = function() {
      dom.Node.prototype.removeEventListener.apply(window, arguments);
    };
    this.dispatchEvent = function() {
      dom.Node.prototype.dispatchEvent.apply(window, arguments);
    };
    this.raise = function(){
      dom.Node.prototype.raise.apply(window.document, arguments);
    };

    this.setTimeout = function (fn, ms) { return startTimer(setTimeout, clearTimeout, fn, ms); };
    this.setInterval = function (fn, ms) { return startTimer(setInterval, clearInterval, fn, ms); };
    this.clearInterval = stopTimer;
    this.clearTimeout = stopTimer;
    this.__stopAllTimers = stopAllTimers;
  }

  DOMWindow.prototype = createFrom(dom || null, {
    constructor: DOMWindow,
    // This implements window.frames.length, since window.frames returns a
    // self reference to the window object.  This value is incremented in the
    // HTMLFrameElement init function (see: level2/html.js).
    _length : 0,
    get length () {
      return this._length;
    },
    close : function() {
      // Recursively close child frame windows, then ourselves.
      var currentWindow = this;
      (function windowCleaner (window) {
        var i;
        // We could call window.frames.length etc, but window.frames just points
        // back to window.
        if (window.length > 0) {
          for (i = 0; i < window.length; i++) {
            windowCleaner(window[i]);
          }
        }
        // We're already in our own window.close().
        if (window !== currentWindow) {
          window.close();
        }
      })(this);

      if (this.document) {
        if (this.document.body) {
          this.document.body.innerHTML = "";
        }

        if (this.document.close) {
          // We need to empty out the event listener array because
          // document.close() causes 'load' event to re-fire.
          this.document._listeners = [];
          this.document.close();
        }
        delete this.document;
      }

      stopAllTimers();
      // Clean up the window's execution context.
      // dispose() is added by Contextify.
      this.dispose();
    },
    getComputedStyle: function(node) {
      var s = node.style,
          cs = new CSSStyleDeclaration(),
          forEach = Array.prototype.forEach;

      function setPropertiesFromRule(rule) {
        if (!rule.selectorText) {
          return;
        }

        var selectors = rule.selectorText.split(cssSelectorSplitRE);
        var matched = false;
        selectors.forEach(function (selectorText) {
          if (selectorText !== '' && selectorText !== ',' && !matched && matchesDontThrow(node, selectorText)) {
            matched = true;
            forEach.call(rule.style, function (property) {
              cs.setProperty(property, rule.style.getPropertyValue(property), rule.style.getPropertyPriority(property));
            });
          }
        });
      }

      forEach.call(node.ownerDocument.styleSheets, function (sheet) {
        forEach.call(sheet.cssRules, function (rule) {
          if (rule.media) {
            if (Array.prototype.indexOf.call(rule.media, 'screen') !== -1) {
              forEach.call(rule.cssRules, setPropertiesFromRule);
            }
          } else {
            setPropertiesFromRule(rule);
          }
        });
      });

      forEach.call(s, function (property) {
        cs.setProperty(property, s.getPropertyValue(property), s.getPropertyPriority(property));
      });

      return cs;
    },
    console: {
      log:   function(message) { this._window.raise('log',   message) },
      info:  function(message) { this._window.raise('info',  message) },
      warn:  function(message) { this._window.raise('warn',  message) },
      error: function(message) { this._window.raise('error', message) }
    },
    navigator: {
      userAgent: 'Node.js (' + process.platform + '; U; rv:' + process.version + ')',
      appName: 'Node.js jsDom',
      platform: process.platform,
      appVersion: process.version,
      noUI: true
    },
    XMLHttpRequest: function() {
      var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
      var xhr = new XMLHttpRequest();
      var lastUrl = '';
      xhr._open = xhr.open;
      xhr.open = function(method, url, async, user, password) {
        url = URL.resolve(options.url, url);
        lastUrl = url;
        return xhr._open(method, url, async, user, password);
      };
      xhr._send = xhr.send;
      xhr.send = function(data) {
        if (window.document.cookie) {
          var cookieDomain = window.document._cookieDomain;
          var url = URL.parse(lastUrl);
          var host = url.host.split(':')[0];
          if (host.indexOf(cookieDomain, host.length - cookieDomain.length) !== -1) {
            xhr.setDisableHeaderCheck(true);
            xhr.setRequestHeader('cookie', window.document.cookie);
            xhr.setDisableHeaderCheck(false);
          }
        }
        return xhr._send(data);
      };
      return xhr;
    },

    name: 'nodejs',
    innerWidth: 1024,
    innerHeight: 768,
    outerWidth: 1024,
    outerHeight: 768,
    pageXOffset: 0,
    pageYOffset: 0,
    screenX: 0,
    screenY: 0,
    screenLeft: 0,
    screenTop: 0,
    scrollX: 0,
    scrollY: 0,
    scrollTop: 0,
    scrollLeft: 0,
    alert: NOT_IMPLEMENTED(null, 'window.alert'),
    blur: NOT_IMPLEMENTED(null, 'window.blur'),
    confirm: NOT_IMPLEMENTED(null, 'window.confirm'),
    createPopup: NOT_IMPLEMENTED(null, 'window.createPopup'),
    focus: NOT_IMPLEMENTED(null, 'window.focus'),
    moveBy: NOT_IMPLEMENTED(null, 'window.moveBy'),
    moveTo: NOT_IMPLEMENTED(null, 'window.moveTo'),
    open: NOT_IMPLEMENTED(null, 'window.open'),
    print: NOT_IMPLEMENTED(null, 'window.print'),
    prompt: NOT_IMPLEMENTED(null, 'window.prompt'),
    resizeBy: NOT_IMPLEMENTED(null, 'window.resizeBy'),
    resizeTo: NOT_IMPLEMENTED(null, 'window.resizeTo'),
    scroll: NOT_IMPLEMENTED(null, 'window.scroll'),
    scrollBy: NOT_IMPLEMENTED(null, 'window.scrollBy'),
    scrollTo: NOT_IMPLEMENTED(null, 'window.scrollTo'),
    screen : {
      width : 0,
      height : 0
    },
    Image : NOT_IMPLEMENTED(null, 'window.Image'),

    // Note: these will not be necessary for newer Node.js versions, which have
    // typed arrays in V8 and thus on every global object. (That is, in newer
    // versions we'll get `ArrayBuffer` just as automatically as we get
    // `Array`.) But to support older versions, we explicitly set them here.
    Int8Array: global.Int8Array,
    Int16Array: global.Int16Array,
    Int32Array: global.Int32Array,
    Float32Array: global.Float32Array,
    Float64Array: global.Float64Array,
    Uint8Array: global.Uint8Array,
    Uint8ClampedArray: global.Uint8ClampedArray,
    Uint16Array: global.Uint16Array,
    Uint32Array: global.Uint32Array,
    ArrayBuffer: global.ArrayBuffer
  });

  var window = new DOMWindow(options);

  Contextify(window);

  // We need to set up self references using Contextify's getGlobal() so that
  // the global object identity is correct (window === this).
  // See Contextify README for more info.
  var windowGlobal = window.getGlobal();

  // Set up the window as if it's a top level window.
  // If it's not, then references will be corrected by frame/iframe code.
  // Note: window.frames is maintained in the HTMLFrameElement init function.
  window.window = window.frames
                = window.self
                = window.parent
                = window.top = windowGlobal;

  return window;
};

//Caching for HTMLParser require. HUGE performace boost.
/**
* 5000 iterations
* Without cache: ~1800+ms
* With cache: ~80ms
*/
// TODO: is this even needed in modern Node.js versions?
var defaultParser = null;
var getDefaultParser = exports.getDefaultParser = function () {
  if (defaultParser === null) {
    defaultParser = require('htmlparser2');
  }
  return defaultParser;
}

/**
 * Export getter/setter of default parser to facilitate testing
 * with different HTML parsers.
 */
exports.setDefaultParser = function (parser) {
  if (typeof parser == 'object') {
    defaultParser = parser;
  } else if (typeof parser == 'string')
    defaultParser = require(parser);
}

/**
 * Augments the given DOM by adding browser-specific properties and methods (BOM).
 * Returns the augmented DOM.
 */
var browserAugmentation = exports.browserAugmentation = function(dom, options) {

  if(!options) {
    options = {};
  }

  // set up html parser - use a provided one or try and load from library
  var parser = options.parser || getDefaultParser();

  if (dom._augmented && dom._parser === parser) {
    return dom;
  }

  dom._parser = parser;
  var htmltodom = new HtmlToDom(parser);

  if (!dom.HTMLDocument) {
    dom.HTMLDocument = dom.Document;
  }
  if (!dom.HTMLDocument.prototype.write) {
    dom.HTMLDocument.prototype.write = function(html) {
      this.innerHTML = html;
    };
  }

  dom.Element.prototype.getElementsByClassName = function(className) {

    function filterByClassName(child) {
      if (!child) {
        return false;
      }

      if (child.nodeType &&
          child.nodeType === dom.Node.ENTITY_REFERENCE_NODE)
      {
        child = child._entity;
      }

      var classString = child.className;
      if (classString) {
        var s = classString.split(" ");
        for (var i=0; i<s.length; i++) {
          if (s[i] === className) {
            return true;
          }
        }
      }
      return false;
    }

    return new dom.NodeList(this.ownerDocument || this, dom.mapper(this, filterByClassName));
  };

  defineGetter(dom.Element.prototype, 'sourceIndex', function() {
    /*
    * According to QuirksMode:
    * Get the sourceIndex of element x. This is also the index number for
    * the element in the document.getElementsByTagName('*') array.
    * http://www.quirksmode.org/dom/w3c_core.html#t77
    */
    var items = this.ownerDocument.getElementsByTagName('*'),
        len = items.length;

    for (var i = 0; i < len; i++) {
      if (items[i] === this) {
        return i;
      }
    }
  });

  defineGetter(dom.Document.prototype, 'outerHTML', function() {
    return domToHtml(this, true);
  });

  defineGetter(dom.Element.prototype, 'outerHTML', function() {
    return domToHtml(this, true);
  });

  defineGetter(dom.Element.prototype, 'innerHTML', function() {
    if (/^(?:script|style)$/.test(this._tagName)) {
      var type = this.getAttribute('type');
      if (!type || /^text\//i.test(type) || /\/javascript$/i.test(type)) {
        return domToHtml(this._childNodes, true, true);
      }
    }

    return domToHtml(this._childNodes, true);
  });

  defineSetter(dom.Element.prototype, 'doctype', function() {
    throw new dom.DOMException(dom.NO_MODIFICATION_ALLOWED_ERR);
  });
  defineGetter(dom.Element.prototype, 'doctype', function() {
    var r = null;
    if (this.nodeName == '#document') {
        if (this._doctype) {
         r = this._doctype;
        }
    }
    return r;
  });

  defineSetter(dom.Element.prototype, 'innerHTML', function(html) {
    //Clear the children first:
    var child;
    while ((child = this._childNodes[0])) {
      this.removeChild(child);
    }

    if (this.nodeName === '#document') {
      parseDocType(this, html);
    }
    if (html !== "" && html != null) {
      htmltodom.appendHtmlToElement(html, this);
    }
    return html;
  });


  defineGetter(dom.Document.prototype, 'innerHTML', function() {
    return domToHtml(this._childNodes, true);
  });

  defineSetter(dom.Document.prototype, 'innerHTML', function(html) {
    //Clear the children first:
    var child;
    while ((child = this._childNodes[0])) {
      this.removeChild(child);
    }

    if (this.nodeName === '#document') {
      parseDocType(this, html);
    }
    if (html !== "" && html != null) {
      htmltodom.appendHtmlToElement(html, this);
    }
    return html;
  });

  var DOC_HTML5      = /<!doctype html>/i,
      DOC_TYPE       = /<!DOCTYPE (\w(.|\n)*)">/i,
      DOC_TYPE_START = '<!DOCTYPE ',
      DOC_TYPE_END   = '">';

  function parseDocType(doc, html) {
    var publicID = '',
        systemID = '',
        fullDT = '',
        name = 'HTML',
        set = true,
        doctype = html.match(DOC_HTML5);

    //Default, No doctype === null
    doc._doctype = null;

    if (doctype && doctype[0]) { //Handle the HTML shorty doctype
      fullDT = doctype[0];
    } else { //Parse the doctype
      // find the start
      var start     = html.indexOf(DOC_TYPE_START),
          end       = html.indexOf(DOC_TYPE_END),
          docString;

      if (start < 0 || end < 0) {
        return;
      }

      docString = html.substr(start, (end-start)+DOC_TYPE_END.length);
      doctype = docString.replace(/[\n\r]/g,'').match(DOC_TYPE);

      if (!doctype) {
        return;
      }

      fullDT = doctype[0];
      doctype = doctype[1].split(' "');
      var _id1 = doctype.length ? doctype.pop().replace(/"/g, '') : '',
          _id2 = doctype.length ? doctype.pop().replace(/"/g, '') : '';

      if (_id1.indexOf('-//') !== -1) {
        publicID = _id1;
      }
      if (_id2.indexOf('-//') !== -1) {
        publicID = _id2;
      }
      if (_id1.indexOf('://') !== -1) {
        systemID = _id1;
      }
      if (_id2.indexOf('://') !== -1) {
        systemID = _id2;
      }
      if (doctype.length) {
        doctype = doctype[0].split(' ');
        name = doctype[0].toUpperCase();
      }
    }
    doc._doctype = new dom.DOMImplementation().createDocumentType(name, publicID, systemID);
    doc._doctype._ownerDocument = doc;
    doc._doctype._fullDT = fullDT;
    doc._doctype.toString = function() {
      return this._fullDT;
    };
  }

  dom.Document.prototype.getElementsByClassName = function(className) {

    function filterByClassName(child) {
      if (!child) {
        return false;
      }

      if (child.nodeType &&
          child.nodeType === dom.Node.ENTITY_REFERENCE_NODE)
      {
        child = child._entity;
      }

      var classString = child.className;
      if (classString) {
        var s = classString.split(" ");
        for (var i=0; i<s.length; i++) {
          if (s[i] === className) {
            return true;
          }
        }
      }
      return false;
    }

    return new dom.NodeList(this.ownerDocument || this, dom.mapper(this, filterByClassName));
  };

  defineGetter(dom.Element.prototype, 'nodeName', function(val) {
    return this._nodeName.toUpperCase();
  });

  defineGetter(dom.Element.prototype, 'tagName', function(val) {
    var t = this._tagName.toUpperCase();
    //Document should not return a tagName
    if (this.nodeName === '#document') {
      t = null;
    }
    return t;
  });

  dom.Element.prototype.scrollTop = 0;
  dom.Element.prototype.scrollLeft = 0;

  defineGetter(dom.Document.prototype, 'parentWindow', function() {
    if (!this._parentWindow) {
      this.parentWindow = exports.windowAugmentation(dom, {document: this, url: this.URL});
    }
    return this._parentWindow;
  });

  defineSetter(dom.Document.prototype, 'parentWindow', function(window) {
    // Contextify does not support getters and setters, so we have to set them
    // on the original object instead.
    window._frame = function (name, frame) {
      if (typeof frame === 'undefined') {
        delete window[name];
      } else {
        defineGetter(window, name, function () { return frame.contentWindow; });
      }
    };
    this._parentWindow = window.getGlobal();
  });

  defineGetter(dom.Document.prototype, 'defaultView', function() {
    return this.parentWindow;
  });

  dom._augmented = true;
  return dom;
};
