var core                  = require("./core").dom.level2.core,
    events                = require("./events").dom.level2.events,
    applyDocumentFeatures = require('../browser/documentfeatures').applyDocumentFeatures,
    defineGetter          = require('../utils').defineGetter,
    defineSetter          = require('../utils').defineSetter,
    inheritFrom           = require("../utils").inheritFrom,
    URL                   = require("url"),
    Path                  = require('path'),
    fs                    = require("fs"),
    http                  = require('http'),
    https                 = require('https');

// modify cloned instance for more info check: https://github.com/tmpvar/jsdom/issues/325
core = Object.create(core);

// Setup the javascript language processor
core.languageProcessors = {
  javascript : require("./languages/javascript").javascript
};

// TODO its own package? Pull request to Node?
function resolveHref(baseUrl, href) {
  // When switching protocols, the path doesn't get canonicalized (i.e. .s and ..s are still left):
  // https://github.com/joyent/node/issues/5453
  var intermediate = URL.resolve(baseUrl, href);

  // This canonicalizes the path, at the cost of overwriting the hash.
  var nextStep = URL.resolve(intermediate, '#');

  // So, insert the hash back in, if there was one.
  var parsed = URL.parse(intermediate);
  var fixed = nextStep.slice(0, -1) + (parsed.hash || '');

  // Finally, fix file:/// URLs on Windows, where Node removes their drive letters:
  // https://github.com/joyent/node/issues/5452
  if (/^file\:\/\/\/[a-z]\:\//i.test(baseUrl) && /^file\:\/\/\//.test(fixed) && !/^file\:\/\/\/[a-z]\:\//i.test(fixed)) {
    fixed = fixed.replace(/^file\:\/\/\//, baseUrl.substring(0, 11));
  }

  return fixed;
}

core.resourceLoader = {
  load: function(element, href, callback) {
    var ownerImplementation = element._ownerDocument.implementation;

    if (ownerImplementation.hasFeature('FetchExternalResources', element.tagName.toLowerCase())) {
      var full = this.resolve(element._ownerDocument, href);
      var url = URL.parse(full);
      if (ownerImplementation.hasFeature('SkipExternalResources', full)) {
        return false;
      }
      if (url.hostname) {
        this.download(url, element._ownerDocument._cookie, element._ownerDocument._cookieDomain, this.baseUrl(element._ownerDocument), this.enqueue(element, callback, full));
      }
      else {
        this.readFile(url.pathname, this.enqueue(element, callback, full));
      }
    }
  },
  enqueue: function(element, callback, filename) {
    var loader = this,
        doc    = element.nodeType === core.Node.DOCUMENT_NODE ?
                 element                :
                 element._ownerDocument;

    if (!doc._queue) {
      return function() {};
    }

    return doc._queue.push(function(err, data) {
      var ev = doc.createEvent('HTMLEvents');

      if (!err) {
        try {
          callback.call(element, data, filename || doc.URL);
          ev.initEvent('load', false, false);
        }
        catch(e) {
          err = e;
        }
      }

      if (err) {
        ev.initEvent('error', false, false);
        ev.error = err;
      }

      element.dispatchEvent(ev);
    });
  },

  baseUrl: function(document) {
    var baseElements = document.getElementsByTagName('base');
    var baseUrl = document.URL;

    if (baseElements.length > 0) {
      var baseHref = baseElements.item(0).href;
      if (baseHref) {
        baseUrl = resolveHref(baseUrl, baseHref);
      }
    }

    return baseUrl;
  },
  resolve: function(document, href) {
    // if getAttribute returns null, there is no href
    // lets resolve to an empty string (nulls are not expected farther up)
    if (href === null) {
      return '';
    }

    var baseUrl = this.baseUrl(document);

    return resolveHref(baseUrl, href);
  },
  download: function(url, cookie, cookieDomain, referrer, callback) {
    var path    = url.pathname + (url.search || ''),
        options = {'method': 'GET', 'host': url.hostname, 'path': path},
        request;
    if (url.protocol === 'https:') {
      options.port = url.port || 443;
      request = https.request(options);
    } else {
      options.port = url.port || 80;
      request = http.request(options);
    }

    // set header.
    if (referrer) {
        request.setHeader('Referer', referrer);
    }
    if (cookie) {
      var host = url.host.split(':')[0];
      if (host.indexOf(cookieDomain, host.length - cookieDomain.length) !== -1) {
        request.setHeader('cookie', cookie);
      }
    }

    request.on('response', function (response) {
      var data = '';
      function success () {
        if ([301, 302, 303, 307].indexOf(response.statusCode) > -1) {
          var redirect = URL.resolve(url, response.headers["location"]);
          core.resourceLoader.download(URL.parse(redirect), cookie, cookieDomain, referrer, callback);
        } else {
          callback(null, data);
        }
      }
      response.setEncoding('utf8');
      response.on('data', function (chunk) {
        data += chunk.toString();
      });
      response.on('end', function() {
        // According to node docs, 'close' can fire after 'end', but not
        // vice versa.  Remove 'close' listener so we don't call success twice.
        response.removeAllListeners('close');
        success();
      });
      response.on('close', function (err) {
        if (err) {
          callback(err);
        } else {
          success();
        }
      });
    });

    request.on('error', callback);
    request.end();
  },
  readFile: function(url, callback) {
    fs.readFile(url.replace(/^file:\/\//, "").replace(/^\/([a-z]):\//i, '$1:/').replace(/%20/g, ' '), 'utf8', callback);
  }
};

function define(elementClass, def) {
  var tagName = def.tagName,
    tagNames = def.tagNames || (tagName? [tagName] : []),
    parentClass = def.parentClass || core.HTMLElement,
    attrs = def.attributes || [],
    proto = def.proto || {};

  var elem = core[elementClass] = function(document, name) {
    parentClass.call(this, document, name || tagName.toUpperCase());
    if (elem._init) {
      elem._init.call(this);
    }
  };
  elem._init = def.init;

  inheritFrom(parentClass, elem, proto);

  attrs.forEach(function(n) {
      var prop = n.prop || n,
        attr = n.attr || prop.toLowerCase();

      if (!n.prop || n.read !== false) {
        defineGetter(elem.prototype, prop, function() {
          var s = this.getAttribute(attr);
          if (n.type && n.type === 'boolean') {
            return s !== null;
          }
          if (n.type && n.type === 'long') {
            return +s;
          }
          if (typeof n === 'object' && n.normalize) { // see GH-491
            return n.normalize(s);
          }
          return s;
        });
      }

      if (!n.prop || n.write !== false) {
        defineSetter(elem.prototype, prop, function(val) {
          if (!val) {
            this.removeAttribute(attr);
          }
          else {
            var s = val.toString();
            if (typeof n === 'object' && n.normalize) {
              s = n.normalize(s);
            }
            this.setAttribute(attr, s);
          }
        });
      }
  });

  tagNames.forEach(function(tag) {
    core.Document.prototype._elementBuilders[tag.toLowerCase()] = function(doc, s) {
      var el = new elem(doc, s);

      if (def.elementBuilder) {
        return def.elementBuilder(el, doc, s);
      }

      return el;
    };
  });
}



core.HTMLCollection = function HTMLCollection(element, query) {
  this._keys = [];
  core.NodeList.call(this, element, query);
};
inheritFrom(core.NodeList, core.HTMLCollection, {
  namedItem: function(name) {
    // Try property shortcut; should work in most cases
    if (Object.prototype.hasOwnProperty.call(this, name)) {
      return this[name];
    }

    var results = this._toArray(),
        l       = results.length,
        node,
        matchingName = null;

    for (var i=0; i<l; i++) {
      node = results[i];
      if (node.getAttribute('id') === name) {
        return node;
      } else if (node.getAttribute('name') === name) {
        matchingName = node;
      }
    }
    return matchingName;
  },
  toString: function() {
    return '[ jsdom HTMLCollection ]: contains ' + this.length + ' items';
  },
  _resetTo: function(array) {
    var i, _this = this;

    for (i = 0; i < this._keys.length; ++i) {
      delete this[this._keys[i]];
    }
    this._keys = [];

    core.NodeList.prototype._resetTo.apply(this, arguments);

    function testAttr(node, attr) {
      var val = node.getAttribute(attr);
      if (val && !Object.prototype.hasOwnProperty.call(_this, val)) {
        _this[val] = node;
        _this._keys.push(val);
      }
    }
    for (i = 0; i < array.length; ++i) {
      testAttr(array[i], 'id');
    }
    for (i = 0; i < array.length; ++i) {
      testAttr(array[i], 'name');
    }
  }
});
Object.defineProperty(core.HTMLCollection.prototype, 'constructor', {
  value: core.NodeList,
  writable: true,
  configurable: true
});

core.HTMLOptionsCollection = core.HTMLCollection;

function closest(e, tagName) {
  tagName = tagName.toUpperCase();
  while (e) {
    if (e.nodeName.toUpperCase() === tagName ||
        (e.tagName && e.tagName.toUpperCase() === tagName))
    {
      return e;
    }
    e = e._parentNode;
  }
  return null;
}

function descendants(e, tagName, recursive) {
  var owner = recursive ? e._ownerDocument || e : e;
  return new core.HTMLCollection(owner, core.mapper(e, function(n) {
    return n.nodeName === tagName && typeof n._publicId == 'undefined';
  }, recursive));
}

function firstChild(e, tagName) {
  if (!e) {
    return null;
  }
  var c = descendants(e, tagName, false);
  return c.length > 0 ? c[0] : null;
}

function ResourceQueue(paused) {
  this.paused = !!paused;
}
ResourceQueue.prototype = {
  push: function(callback) {
    var q = this;
    var item = {
      prev: q.tail,
      check: function() {
        if (!q.paused && !this.prev && this.fired){
          callback(this.err, this.data);
          if (this.next) {
            this.next.prev = null;
            this.next.check();
          }else{//q.tail===this
      q.tail = null;
    }
        }
      }
    };
    if (q.tail) {
      q.tail.next = item;
    }
    q.tail = item;
    return function(err, data) {
      item.fired = 1;
      item.err = err;
      item.data = data;
      item.check();
    };
  },
  resume: function() {
    if(!this.paused){
      return;
    }
    this.paused = false;
    var head = this.tail;
    while(head && head.prev){
      head = head.prev;
    }
    if(head){
      head.check();
    }
  }
};

core.HTMLDocument = function HTMLDocument(options) {
  options = options || {};
  if (!options.contentType) {
    options.contentType = 'text/html';
  }
  core.Document.call(this, options);
  this._referrer = options.referrer;
  this._cookie = options.cookie;
  this._cookieDomain = options.cookieDomain || '127.0.0.1';
  this._URL = options.url || '/';
  this._documentRoot = options.documentRoot || Path.dirname(this._URL);
  this._queue = new ResourceQueue(options.deferClose);
  this.readyState = 'loading';

  // Add level2 features
  this.implementation.addFeature('core'  , '2.0');
  this.implementation.addFeature('html'  , '2.0');
  this.implementation.addFeature('xhtml' , '2.0');
  this.implementation.addFeature('xml'   , '2.0');
};

inheritFrom(core.Document, core.HTMLDocument, {
  _referrer : "",
  get referrer() {
    return this._referrer || '';
  },
  get domain() {
    return "";
  },
  _URL : "",
  get URL() {
    return this._URL;
  },
  get images() {
    return this.getElementsByTagName('IMG');
  },
  get applets() {
    return new core.HTMLCollection(this, core.mapper(this, function(el) {
      if (el && el.tagName) {
        var upper = el.tagName.toUpperCase();
        if (upper === "APPLET") {
          return true;
        } else if (upper === "OBJECT" &&
          el.getElementsByTagName('APPLET').length > 0)
        {
          return true;
        }
      }
    }));
  },
  get links() {
    return new core.HTMLCollection(this, core.mapper(this, function(el) {
      if (el && el.tagName) {
        var upper = el.tagName.toUpperCase();
        if (upper === "AREA" || (upper === "A" && el.href)) {
          return true;
        }
      }
    }));
  },
  get forms() {
    return this.getElementsByTagName('FORM');
  },
  get anchors() {
    return this.getElementsByTagName('A');
  },
  open  : function() {
    this._childNodes = new core.NodeList();
    this._documentElement = null;
    this._modified();
  },
  close : function() {
    this._queue.resume();
    // Set the readyState to 'complete' once all resources are loaded.
    // As a side-effect the document's load-event will be dispatched.
    core.resourceLoader.enqueue(this, function() {
      this.readyState = 'complete';
      var ev = this.createEvent('HTMLEvents');
      ev.initEvent('DOMContentLoaded', false, false);
      this.dispatchEvent(ev);
    })(null, true);
  },

  write : function(text) {
    if (this._writeAfterElement) {
      // If called from an script element directly (during the first tick),
      // the new elements are inserted right after that element.
      var tempDiv       = this.createElement('div');
      tempDiv.innerHTML = text;

      var child    = tempDiv.firstChild;
      var previous = this._writeAfterElement;
      var parent   = this._writeAfterElement.parentNode;

      while (child) {
        var node = child;
        child    = child.nextSibling;
        parent.insertBefore(node, previous.nextSibling);
        previous = node;
      }
    } else if (this.readyState === "loading") {
      // During page loading, document.write appends to the current element
      // Find the last child that has ben added to the document.
      var node = this;
      while (node.lastChild && node.lastChild.nodeType === this.ELEMENT_NODE) {
        node = node.lastChild;
      }
      node.innerHTML = text || "<html><head></head><body></body></html>";
    } else if (text) {
      this.innerHTML = text;
    }
  },

  writeln : function(text) {
    this.write(text + '\n');
  },

  getElementsByName : function(elementName) {
    return new core.HTMLCollection(this, core.mapper(this, function(el) {
      return (el.getAttribute && el.getAttribute("name") === elementName);
    }));
  },

  get title() {
    var head = this.head,
      title = head ? firstChild(head, 'TITLE') : null;
    return title ? title.textContent : '';
  },

  set title(val) {
    var title = firstChild(this.head, 'TITLE');
    if (!title) {
      title = this.createElement('TITLE');
      var head = this.head;
      if (!head) {
        head = this.createElement('HEAD');
        this.documentElement.insertBefore(head, this.documentElement.firstChild);
      }
      head.appendChild(title);
    }
    title.textContent = val;
  },

  get head() {
    return firstChild(this.documentElement, 'HEAD');
  },

  set head(unused) { /* noop */ },

  get body() {
    var body = firstChild(this.documentElement, 'BODY');
    if (!body) {
      body = firstChild(this.documentElement, 'FRAMESET');
    }
    return body;
  },

  get documentElement() {
    if (!this._documentElement) {
      this._documentElement = firstChild(this, 'HTML');
    }
    return this._documentElement;
  },

  _cookie : "",
  get cookie() {
    var cookies = Array.isArray(this._cookie) ?
      this._cookie :
      (this._cookie && this._cookie.length > 0 ? [this._cookie] : []);

    return cookies.map(function (x) {
      return x.split(';')[0];
    }).join('; ');
  },
  set cookie(val) {
    var key = val.split('=')[0];
    var cookies = Array.isArray(this._cookie) ?
      this._cookie :
      (this._cookie && this._cookie.length > 0 ? [this._cookie] : []);
    for (var i = 0; i < cookies.length; i++) {
      if (cookies[i].lastIndexOf(key + '=', 0) === 0) {
        cookies[i] = val;
        key = null;
        break;
      }
    }
    if (key) {
      cookies.push(val);
    }
    if (cookies.length === 1) {
      this._cookie = cookies[0];
    } else {
      this._cookie = cookies;
    }
    return val;
  }
});

define('HTMLElement', {
  parentClass: core.Element,
  proto : {
    // Add default event behavior (click link to navigate, click button to submit
    // form, etc). We start by wrapping dispatchEvent so we can forward events to
    // the element's _eventDefault function (only events that did not incur
    // preventDefault).
    dispatchEvent : function (event) {
      var outcome = core.Node.prototype.dispatchEvent.call(this, event)

      if (!event._preventDefault     &&
          event.target._eventDefaults[event.type] &&
          typeof event.target._eventDefaults[event.type] === 'function')
      {
        event.target._eventDefaults[event.type](event)
      }
      return outcome;
    },
    getBoundingClientRect: function () {
      return {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0
      };
    },
    _eventDefaults : {}
  },
  attributes: [
    'id',
    'title',
    'lang',
    'dir',
    {prop: 'className', attr: 'class', normalize: function(s) { return s || ''; }}
  ]
});

core.Document.prototype._defaultElementBuilder = function(document, tagName) {
  return new core.HTMLElement(document, tagName);
};

// http://www.whatwg.org/specs/web-apps/current-work/#category-listed
var listedElements = /button|fieldset|input|keygen|object|select|textarea/i;

define('HTMLFormElement', {
  tagName: 'FORM',
  proto: {
    get elements() {
      return new core.HTMLCollection(this._ownerDocument, core.mapper(this, function(e) {
        return listedElements.test(e.nodeName) ; // TODO exclude <input type="image">
      }));
    },
    get length() {
      return this.elements.length;
    },
    _dispatchSubmitEvent: function() {
      var ev = this._ownerDocument.createEvent('HTMLEvents');
      ev.initEvent('submit', true, true);
      if (!this.dispatchEvent(ev)) {
        this.submit();
      };
    },
    submit: function() {
    },
    reset: function() {
      this.elements._toArray().forEach(function(el) {
        el.value = el.defaultValue;
      });
    }
  },
  attributes: [
    'name',
    {prop: 'acceptCharset', attr: 'accept-charset'},
    'action',
    'enctype',
    'method',
    'target'
  ]
});

define('HTMLLinkElement', {
  tagName: 'LINK',
  proto: {
    get href() {
      return core.resourceLoader.resolve(this._ownerDocument, this.getAttribute('href'));
    }
  },
  attributes: [
    {prop: 'disabled', type: 'boolean'},
    'charset',
    'href',
    'hreflang',
    'media',
    'rel',
    'rev',
    'target',
    'type'
  ]
});

define('HTMLMetaElement', {
  tagName: 'META',
  attributes: [
    'content',
    {prop: 'httpEquiv', attr: 'http-equiv'},
    'name',
    'scheme'
  ]
});

define('HTMLHtmlElement', {
  tagName: 'HTML',
  attributes: [
    'version'
  ]
});

define('HTMLHeadElement', {
  tagName: 'HEAD',
  attributes: [
    'profile'
  ]
});

define('HTMLTitleElement', {
  tagName: 'TITLE',
  proto: {
    get text() {
      return this.innerHTML;
    },
    set text(s) {
      this.innerHTML = s;
    }
  }
});

define('HTMLBaseElement', {
  tagName: 'BASE',
  attributes: [
    'href',
    'target'
  ]
});


//**Deprecated**
define('HTMLIsIndexElement', {
  tagName : 'ISINDEX',
  parentClass : core.Element,
  proto : {
    get form() {
      return closest(this, 'FORM');
    }
  },
  attributes : [
    'prompt'
  ]
});


define('HTMLStyleElement', {
  tagName: 'STYLE',
  attributes: [
    {prop: 'disabled', type: 'boolean'},
    'media',
    'type',
  ]
});

define('HTMLBodyElement', {
  proto: (function() {
    var proto = {};
    // The body element's "traditional" event handlers are proxied to the
    // window object.
    // See: http://www.whatwg.org/specs/web-apps/current-work/#the-body-element
    ['onafterprint', 'onbeforeprint', 'onbeforeunload', 'onblur', 'onerror',
     'onfocus', 'onhashchange', 'onload', 'onmessage', 'onoffline', 'ononline',
     'onpagehide', 'onpageshow', 'onpopstate', 'onresize', 'onscroll',
     'onstorage', 'onunload'].forEach(function (name) {
      defineSetter(proto, name, function (handler) {
        this._ownerDocument.parentWindow[name] = handler;
      });
      defineGetter(proto, name, function () {
        return this._ownerDocument.parentWindow[name];
      });
    });
    return proto;
  })(),
  tagName: 'BODY',
  attributes: [
    'aLink',
    'background',
    'bgColor',
    'link',
    'text',
    'vLink'
  ]
});

define('HTMLSelectElement', {
  tagName: 'SELECT',
  proto: {
    get options() {
      return new core.HTMLOptionsCollection(this, core.mapper(this, function(n) {
        return n.nodeName === 'OPTION';
      }));
    },

    get length() {
      return this.options.length;
    },

    get selectedIndex() {
      return this.options._toArray().reduceRight(function(prev, option, i) {
        return option.selected ? i : prev;
      }, -1);
    },

    set selectedIndex(index) {
      this.options._toArray().forEach(function(option, i) {
        option.selected = i === index;
      });
    },

    get value() {
      var i = this.selectedIndex;
      if (this.options.length && (i === -1)) {
        i = 0;
      }
      if (i === -1) {
        return '';
      }
      return this.options[i].value;
    },

    set value(val) {
      var self = this;
      this.options._toArray().forEach(function(option) {
        if (option.value === val) {
          option.selected = true;
        } else {
          if (!self.hasAttribute('multiple')) {
            // Remove the selected bit from all other options in this group
            // if the multiple attr is not present on the select
            option.selected = false;
          }
        }
      });
    },

    get form() {
      return closest(this, 'FORM');
    },

    get type() {
      return this.multiple ? 'select-multiple' : 'select-one';
    },

    add: function(opt, before) {
      if (before) {
        this.insertBefore(opt, before);
      }
      else {
        this.appendChild(opt);
      }
    },

    remove: function(index) {
      var opts = this.options._toArray();
      if (index >= 0 && index < opts.length) {
        var el = opts[index];
        el._parentNode.removeChild(el);
      }
    },

    blur : function() {
      this._ownerDocument.activeElement = this._ownerDocument.body;
    },
    focus : function() {
      this._ownerDocument.activeElement = this;
    }

  },
  attributes: [
    {prop: 'disabled', type: 'boolean'},
    {prop: 'multiple', type: 'boolean'},
    'name',
    {prop: 'size', type: 'long'},
    {prop: 'tabIndex', type: 'long'},
  ]
});

define('HTMLOptGroupElement', {
  tagName: 'OPTGROUP',
  attributes: [
    {prop: 'disabled', type: 'boolean'},
    'label'
  ]
});

define('HTMLOptionElement', {
  tagName: 'OPTION',
  proto: {
    _attrModified: function(name, value) {
      if (name === 'selected') {
        this.selected = this.defaultSelected;
      }
      core.HTMLElement.prototype._attrModified.call(this, arguments);
    },
    get form() {
      return closest(this, 'FORM');
    },
    get defaultSelected() {
      return this.getAttribute('selected') !== null;
    },
    set defaultSelected(s) {
      if (s) this.setAttribute('selected', 'selected');
      else this.removeAttribute('selected');
    },
    get text() {
      return this.innerHTML;
    },
    get value() {
      return (this.hasAttribute('value')) ? this.getAttribute('value') : this.innerHTML;
    },
    set value(val) {
      this.setAttribute('value', val);
    },
    get index() {
      return closest(this, 'SELECT').options._toArray().indexOf(this);
    },
    get selected() {
      if (this._selected === undefined) {
        this._selected = this.defaultSelected;
      }

      if (!this._selected && this.parentNode) {
        var select = closest(this, 'SELECT');

        if (select) {
          var options = select.options;

          if (options.item(0) === this && !select.hasAttribute('multiple')) {
            var found = false, optArray = options._toArray();

            for (var i = 1, l = optArray.length; i<l; i++) {
              if (optArray[i]._selected) {
                return false;
              }
            }
            return true;
          }
        }
      }

      return this._selected;
    },
    set selected(s) {
      // TODO: The 'selected' content attribute is the initial value of the
      // IDL attribute, but the IDL attribute should not relfect the content
      this._selected = !!s;
      if (s) {
        //Remove the selected bit from all other options in this select
        var select = this._parentNode;
        if (!select) return;
        if (select.nodeName !== 'SELECT') {
          select = select._parentNode;
          if (!select) return;
          if (select.nodeName !== 'SELECT') return;
        }
        if (!select.multiple) {
          var o = select.options;
          for (var i = 0; i < o.length; i++) {
            if (o[i] !== this) {
                o[i].selected = false;
            }
          }
        }
      }
    }
  },
  attributes: [
    {prop: 'disabled', type: 'boolean'},
    'label'
  ]
});

define('HTMLInputElement', {
  tagName: 'INPUT',
  init: function() {
    if (!this.type) {
      this.type = 'text';
    }
  },
  proto: {
    _initDefaultValue: function() {
      if (this._defaultValue === undefined) {
        var attr = this.getAttributeNode('value');
        this._defaultValue = attr ? attr.value : null;
      }
      return this._defaultValue;
    },
    _initDefaultChecked: function() {
      if (this._defaultChecked === undefined) {
        this._defaultChecked = !!this.getAttribute('checked');
      }
      return this._defaultChecked;
    },
    get form() {
      return closest(this, 'FORM');
    },
    get defaultValue() {
      return this._initDefaultValue();
    },
    get defaultChecked() {
      return this._initDefaultChecked();
    },
    get checked() {
      return !!this._attributes.getNamedItem('checked');
    },
    set checked(checked) {
      this._initDefaultChecked();
      if (checked) {
        this.setAttribute('checked', 'checked');
        if (this.type === 'radio') {
          var elements = this._ownerDocument.getElementsByName(this.name);
          for (var i = 0; i < elements.length; i++) {
            if (elements[i] !== this && elements[i].tagName === "INPUT" && elements[i].type === "radio") {
              elements[i].checked = false;
            }
          }
        }
      } else {
        this.removeAttribute('checked');
      }
    },
    get value() {
      return this.getAttribute('value');
    },
    set value(val) {
      this._initDefaultValue();
      if (val === null) {
        this.removeAttribute('value');
      }
      else {
        this.setAttribute('value', val);
      }
    },
    get type() {
        var type = this.getAttribute('type');
        return type ? type : 'text';
    },
    set type(type) {
        this.setAttribute('type', type);
    },
    blur : function() {
      this._ownerDocument.activeElement = this._ownerDocument.body;
    },
    focus : function() {
      this._ownerDocument.activeElement = this;
    },
    select: function() {
    },

    _dispatchClickEvent: function() {
      var event = this._ownerDocument.createEvent("HTMLEvents");
      event.initEvent("click", true, true);
      this.dispatchEvent(event);
    },

    click: function() {
      if (this.type === 'checkbox') {
        this.checked = !this.checked;
      }
      else if (this.type === 'radio') {
        this.checked = true;
      }
      else if (this.type === 'submit') {
        var form = this.form;
        if (form) {
          form._dispatchSubmitEvent();
        }
      }
      this._dispatchClickEvent();
    }
  },
  attributes: [
    'accept',
    'accessKey',
    'align',
    'alt',
    {prop: 'disabled', type: 'boolean'},
    {prop: 'maxLength', type: 'long'},
    'name',
    {prop: 'readOnly', type: 'boolean'},
    {prop: 'size', type: 'long'},
    'src',
    {prop: 'tabIndex', type: 'long'},
    {prop: 'type', normalize: function(val) {
        return val ? val.toLowerCase() : 'text';
    }},
    'useMap'
  ]
});

define('HTMLTextAreaElement', {
  tagName: 'TEXTAREA',
  proto: {
    _initDefaultValue: function() {
      if (this._defaultValue === undefined) {
        this._defaultValue = this.textContent;
      }
      return this._defaultValue;
    },
    get form() {
      return closest(this, 'FORM');
    },
    get defaultValue() {
      return this._initDefaultValue();
    },
    get value() {
      return this.textContent;
    },
    set value(val) {
      this._initDefaultValue();
      this.textContent = val;
    },
    get type() {
      return 'textarea';
    },
    blur : function() {
      this._ownerDocument.activeElement = this._ownerDocument.body;
    },
    focus : function() {
      this._ownerDocument.activeElement = this;
    },
    select: function() {
    }
  },
  attributes: [
    'accessKey',
    {prop: 'cols', type: 'long'},
    {prop: 'disabled', type: 'boolean'},
    {prop: 'maxLength', type: 'long'},
    'name',
    {prop: 'readOnly', type: 'boolean'},
    {prop: 'rows', type: 'long'},
    {prop: 'tabIndex', type: 'long'}
  ]
});

define('HTMLButtonElement', {
  tagName: 'BUTTON',
  proto: {
    get form() {
      return closest(this, 'FORM');
    },
    focus : function() {
      this._ownerDocument.activeElement = this;
    },
    blur : function() {
      this._ownerDocument.activeElement = this._ownerDocument.body;
    }
  },
  attributes: [
    'accessKey',
    {prop: 'disabled', type: 'boolean'},
    'name',
    {prop: 'tabIndex', type: 'long'},
    'type',
    'value'
  ]
});

define('HTMLLabelElement', {
  tagName: 'LABEL',
  proto: {
    get form() {
      return closest(this, 'FORM');
    }
  },
  attributes: [
    'accessKey',
    {prop: 'htmlFor', attr: 'for'}
  ]
});

define('HTMLFieldSetElement', {
  tagName: 'FIELDSET',
  proto: {
    get form() {
      return closest(this, 'FORM');
    }
  }
});

define('HTMLLegendElement', {
  tagName: 'LEGEND',
  proto: {
    get form() {
      return closest(this, 'FORM');
    }
  },
  attributes: [
    'accessKey',
    'align'
  ]
});

define('HTMLUListElement', {
  tagName: 'UL',
  attributes: [
    {prop: 'compact', type: 'boolean'},
    'type'
  ]
});

define('HTMLOListElement', {
  tagName: 'OL',
  attributes: [
    {prop: 'compact', type: 'boolean'},
    {prop: 'start', type: 'long'},
    'type'
  ]
});

define('HTMLDListElement', {
  tagName: 'DL',
  attributes: [
    {prop: 'compact', type: 'boolean'}
  ]
});

define('HTMLDirectoryElement', {
  tagName: 'DIR',
  attributes: [
    {prop: 'compact', type: 'boolean'}
  ]
});

define('HTMLMenuElement', {
  tagName: 'MENU',
  attributes: [
    {prop: 'compact', type: 'boolean'}
  ]
});

define('HTMLLIElement', {
  tagName: 'LI',
  attributes: [
    'type',
    {prop: 'value', type: 'long'}
  ]
});

define('HTMLCanvasElement', {
  tagName: 'CANVAS',
  attributes: [
    'align'
  ],
  elementBuilder: function (element) {
    // require node-canvas and catch the error if it blows up
    try {
      var canvas = new (require('canvas'))(0,0);
      for (var attr in element) {
        if (!canvas[attr]) {
          canvas[attr] = element[attr];
        }
      }
      return canvas;
    } catch (e) {
      return element;
    }
  }
});

define('HTMLDivElement', {
  tagName: 'DIV',
  attributes: [
    'align'
  ]
});

define('HTMLParagraphElement', {
  tagName: 'P',
  attributes: [
    'align'
  ]
});

define('HTMLHeadingElement', {
  tagNames: ['H1','H2','H3','H4','H5','H6'],
  attributes: [
    'align'
  ]
});

define('HTMLQuoteElement', {
  tagNames: ['Q','BLOCKQUOTE'],
  attributes: [
    'cite'
  ]
});

define('HTMLPreElement', {
  tagName: 'PRE',
  attributes: [
    {prop: 'width', type: 'long'}
  ]
});

define('HTMLBRElement', {
  tagName: 'BR',
  attributes: [
    'clear'
  ]
});

define('HTMLBaseFontElement', {
  tagName: 'BASEFONT',
  attributes: [
    'color',
    'face',
    {prop: 'size', type: 'long'}
  ]
});

define('HTMLFontElement', {
  tagName: 'FONT',
  attributes: [
    'color',
    'face',
    'size'
  ]
});

define('HTMLHRElement', {
  tagName: 'HR',
  attributes: [
    'align',
    {prop: 'noShade', type: 'boolean'},
    'size',
    'width'
  ]
});

define('HTMLModElement', {
  tagNames: ['INS', 'DEL'],
  attributes: [
    'cite',
    'dateTime'
  ]
});

define('HTMLAnchorElement', {
  tagName: 'A',

  proto: {
    blur : function() {
      this._ownerDocument.activeElement = this._ownerDocument.body;
    },
    focus : function() {
      this._ownerDocument.activeElement = this;
    },
    get href() {
      return core.resourceLoader.resolve(this._ownerDocument, this.getAttribute('href'));
    },
    get hostname() {
      return URL.parse(this.href).hostname || '';
    },
    get host() {
      return URL.parse(this.href).host || '';
    },
    get origin() {
      var proto = URL.parse(this.href).protocol;

      if (proto !== undefined && proto !== null) {
        proto += '//';
      }

      return proto + URL.parse(this.href).host || '';
    },
    get port() {
      return URL.parse(this.href).port || '';
    },
    get protocol() {
      var protocol = URL.parse(this.href).protocol;
      return (protocol == null) ? ':' : protocol;
    },
    get password() {
      var auth = URL.parse(this.href).auth;
      return auth.substr(auth.indexOf(':') + 1);
    },
    get pathname() {
      return URL.parse(this.href).pathname || '';
    },
    get username() {
      var auth = URL.parse(this.href).auth;
      return auth.substr(0, auth.indexOf(':'));
    },
    get search() {
      return URL.parse(this.href).search || '';
    },
    get hash() {
      return URL.parse(this.href).hash || '';
    }
  },
  attributes: [
    'accessKey',
    'charset',
    'coords',
    {prop: 'href', type: 'string', read: false},
    'hreflang',
    'name',
    'rel',
    'rev',
    'shape',
    {prop: 'tabIndex', type: 'long'},
    'target',
    'type'
  ]
});

define('HTMLImageElement', {
  tagName: 'IMG',
  proto: {
    _attrModified: function(name, value, oldVal) {
      if (name == 'src' && value !== oldVal) {
        core.resourceLoader.enqueue(this, function() {})();
      }
    },
    get src() {
      return core.resourceLoader.resolve(this._ownerDocument, this.getAttribute('src'));
    }
  },
  attributes: [
    'name',
    'align',
    'alt',
    'border',
    {prop: 'height', type: 'long'},
    {prop: 'hspace', type: 'long'},
    {prop: 'isMap', type: 'boolean'},
    'longDesc',
    {prop: 'src', type: 'string', read: false},
    'useMap',
    {prop: 'vspace', type: 'long'},
    {prop: 'width', type: 'long'}
  ]
});

define('HTMLObjectElement', {
  tagName: 'OBJECT',
  proto: {
    get form() {
      return closest(this, 'FORM');
    },
    get contentDocument() {
      return null;
    }
  },
  attributes: [
    'code',
    'align',
    'archive',
    'border',
    'codeBase',
    'codeType',
    'data',
    {prop: 'declare', type: 'boolean'},
    {prop: 'height',  type: 'long'},
    {prop: 'hspace',  type: 'long'},
    'name',
    'standby',
    {prop: 'tabIndex', type: 'long'},
    'type',
    'useMap',
    {prop: 'vspace', type: 'long'},
    {prop: 'width', type: 'long'}
  ]
});

define('HTMLParamElement', {
  tagName: 'PARAM',
  attributes: [
    'name',
    'type',
    'value',
    'valueType'
  ]
});

define('HTMLAppletElement', {
  tagName: 'APPLET',
  attributes: [
    'align',
    'alt',
    'archive',
    'code',
    'codeBase',
    'height',
    {prop: 'hspace', type: 'long'},
    'name',
    'object',
    {prop: 'vspace', type: 'long'},
    'width'
  ]
});

define('HTMLMapElement', {
  tagName: 'MAP',
  proto: {
    get areas() {
      return this.getElementsByTagName("AREA");
    }
  },
  attributes: [
    'name'
  ]
});

define('HTMLAreaElement', {
  tagName: 'AREA',
  attributes: [
    'accessKey',
    'alt',
    'coords',
    'href',
    {prop: 'noHref', type: 'boolean'},
    'shape',
    {prop: 'tabIndex', type: 'long'},
    'target'
  ]
});

define('HTMLScriptElement', {
  tagName: 'SCRIPT',
  init: function() {
    this.addEventListener('DOMNodeInsertedIntoDocument', function() {
      if (this.src) {
        core.resourceLoader.load(this, this.src, this._eval);
      }
      else {
        var src = this.sourceLocation || {},
            filename = src.file || this._ownerDocument.URL;

        if (src) {
          filename += ':' + src.line + ':' + src.col;
        }
        filename += '<script>';

        core.resourceLoader.enqueue(this, this._eval, filename)(null, this.text);
      }
    });
  },
  proto: {
    _eval: function(text, filename) {
      if (this._ownerDocument.implementation.hasFeature("ProcessExternalResources", "script") &&
          this.language                                                                      &&
          core.languageProcessors[this.language])
      {
        this._ownerDocument._writeAfterElement = this;
        core.languageProcessors[this.language](this, text, filename);
        delete this._ownerDocument._writeAfterElement;
      }
    },
    get language() {
      var type = this.type || "text/javascript";
      return type.split("/").pop().toLowerCase();
    },
    get text() {
      var i=0, children = this.childNodes, l = children.length, ret = [];

      for (i; i<l; i++) {
        ret.push(children.item(i).nodeValue);
      }

      return ret.join("");
    },
    set text(text) {
      while (this.childNodes.length) {
        this.removeChild(this.childNodes[0]);
      }
      this.appendChild(this._ownerDocument.createTextNode(text));
    }
  },
  attributes : [
    {prop: 'defer', 'type': 'boolean'},
    'htmlFor',
    'event',
    'charset',
    'type',
    'src'
  ]
})

define('HTMLTableElement', {
  tagName: 'TABLE',
  proto: {
    get caption() {
      return firstChild(this, 'CAPTION');
    },
    get tHead() {
      return firstChild(this, 'THEAD');
    },
    get tFoot() {
      return firstChild(this, 'TFOOT');
    },
    get rows() {
      if (!this._rows) {
        var table = this;
        this._rows = new core.HTMLCollection(this._ownerDocument, function() {
          var sections = [table.tHead].concat(table.tBodies._toArray(), table.tFoot).filter(function(s) { return !!s });

          if (sections.length === 0) {
            return core.mapDOMNodes(table, false, function(el) {
              return el.tagName === 'TR';
            });
          }

          return sections.reduce(function(prev, s) {
            return prev.concat(s.rows._toArray());
          }, []);

        });
      }
      return this._rows;
    },
    get tBodies() {
      if (!this._tBodies) {
        this._tBodies = descendants(this, 'TBODY', false);
      }
      return this._tBodies;
    },
    createTHead: function() {
      var el = this.tHead;
      if (!el) {
        el = this._ownerDocument.createElement('THEAD');
        this.appendChild(el);
      }
      return el;
    },
    deleteTHead: function() {
      var el = this.tHead;
      if (el) {
        el._parentNode.removeChild(el);
      }
    },
    createTFoot: function() {
      var el = this.tFoot;
      if (!el) {
        el = this._ownerDocument.createElement('TFOOT');
        this.appendChild(el);
      }
      return el;
    },
    deleteTFoot: function() {
      var el = this.tFoot;
      if (el) {
        el._parentNode.removeChild(el);
      }
    },
    createCaption: function() {
      var el = this.caption;
      if (!el) {
        el = this._ownerDocument.createElement('CAPTION');
        this.appendChild(el);
      }
      return el;
    },
    deleteCaption: function() {
      var c = this.caption;
      if (c) {
        c._parentNode.removeChild(c);
      }
    },
    insertRow: function(index) {
      var tr = this._ownerDocument.createElement('TR');
      if (this.childNodes.length === 0) {
        this.appendChild(this._ownerDocument.createElement('TBODY'));
      }
      var rows = this.rows._toArray();
      if (index < -1 || index > rows.length) {
        throw new core.DOMException(core.INDEX_SIZE_ERR);
      }
      if (index === -1 || (index === 0 && rows.length === 0)) {
        this.tBodies.item(0).appendChild(tr);
      }
      else if (index === rows.length) {
        var ref = rows[index-1];
        ref._parentNode.appendChild(tr);
      }
      else {
        var ref = rows[index];
        ref._parentNode.insertBefore(tr, ref);
      }
      return tr;
    },
    deleteRow: function(index) {
      var rows = this.rows._toArray(), l = rows.length;
      if (index === -1) {
        index = l-1;
      }
      if (index < 0 || index >= l) {
        throw new core.DOMException(core.INDEX_SIZE_ERR);
      }
      var tr = rows[index];
      tr._parentNode.removeChild(tr);
    }
  },
  attributes: [
    'align',
    'bgColor',
    'border',
    'cellPadding',
    'cellSpacing',
    'frame',
    'rules',
    'summary',
    'width'
  ]
});

define('HTMLTableCaptionElement', {
  tagName: 'CAPTION',
  attributes: [
    'align'
  ]
});

define('HTMLTableColElement', {
  tagNames: ['COL','COLGROUP'],
  attributes: [
    'align',
    {prop: 'ch', attr: 'char'},
    {prop: 'chOff', attr: 'charoff'},
    {prop: 'span', type: 'long'},
    'vAlign',
    'width',
  ]
});

define('HTMLTableSectionElement', {
  tagNames: ['THEAD','TBODY','TFOOT'],
  proto: {
    get rows() {
      if (!this._rows) {
        this._rows = descendants(this, 'TR', false);
      }
      return this._rows;
    },
    insertRow: function(index) {
      var tr = this._ownerDocument.createElement('TR');
      var rows = this.rows._toArray();
      if (index < -1 || index > rows.length) {
        throw new core.DOMException(core.INDEX_SIZE_ERR);
      }
      if (index === -1 || index === rows.length) {
        this.appendChild(tr);
      }
      else {
        var ref = rows[index];
        this.insertBefore(tr, ref);
      }
      return tr;
    },
    deleteRow: function(index) {
      var rows = this.rows._toArray();
      if (index === -1) {
        index = rows.length-1;
      }
      if (index < 0 || index >= rows.length) {
        throw new core.DOMException(core.INDEX_SIZE_ERR);
      }
      var tr = this.rows[index];
      this.removeChild(tr);
    }
  },
  attributes: [
    'align',
    {prop: 'ch', attr: 'char'},
    {prop: 'chOff', attr: 'charoff'},
    {prop: 'span', type: 'long'},
    'vAlign',
    'width',
  ]
});

define('HTMLTableRowElement', {
  tagName: 'TR',
  proto: {
    get cells() {
      if (!this._cells) {
        this._cells = new core.HTMLCollection(this, core.mapper(this, function(n) {
          return n.nodeName === 'TD' || n.nodeName === 'TH';
        }, false));
      }
      return this._cells;
    },
    get rowIndex() {
      var table = closest(this, 'TABLE');
      return table ? table.rows._toArray().indexOf(this) : -1;
    },

    get sectionRowIndex() {
      return this._parentNode.rows._toArray().indexOf(this);
    },
    insertCell: function(index) {
      var td = this._ownerDocument.createElement('TD');
      var cells = this.cells._toArray();
      if (index < -1 || index > cells.length) {
        throw new core.DOMException(core.INDEX_SIZE_ERR);
      }
      if (index === -1 || index === cells.length) {
        this.appendChild(td);
      }
      else {
        var ref = cells[index];
        this.insertBefore(td, ref);
      }
      return td;
    },
    deleteCell: function(index) {
      var cells = this.cells._toArray();
      if (index === -1) {
        index = cells.length-1;
      }
      if (index < 0 || index >= cells.length) {
        throw new core.DOMException(core.INDEX_SIZE_ERR);
      }
      var td = this.cells[index];
      this.removeChild(td);
    }
  },
  attributes: [
    'align',
    'bgColor',
    {prop: 'ch', attr: 'char'},
    {prop: 'chOff', attr: 'charoff'},
    'vAlign'
  ]
});

define('HTMLTableCellElement', {
  tagNames: ['TH','TD'],
  proto: {
    _headers: null,
    set headers(h) {
      if (h === '') {
        //Handle resetting headers so the dynamic getter returns a query
        this._headers = null;
        return;
      }
      if (!(h instanceof Array)) {
        h = [h];
      }
      this._headers = h;
    },
    get headers() {
      if (this._headers) {
        return this._headers.join(' ');
      }
      var cellIndex = this.cellIndex,
          headings  = [],
          siblings  = this._parentNode.getElementsByTagName(this.tagName);

      for (var i=0; i<siblings.length; i++) {
        if (siblings.item(i).cellIndex >= cellIndex) {
          break;
        }
        headings.push(siblings.item(i).id);
      }
      this._headers = headings;
      return headings.join(' ');
    },
    get cellIndex() {
      return closest(this, 'TR').cells._toArray().indexOf(this);
    }
  },
  attributes: [
    'abbr',
    'align',
    'axis',
    'bgColor',
    {prop: 'ch', attr: 'char'},
    {prop: 'chOff', attr: 'charoff'},
    {prop: 'colSpan', type: 'long'},
    'height',
    {prop: 'noWrap', type: 'boolean'},
    {prop: 'rowSpan', type: 'long'},
    'scope',
    'vAlign',
    'width'
  ]
});

define('HTMLFrameSetElement', {
  tagName: 'FRAMESET',
  attributes: [
    'cols',
    'rows'
  ]
});

function loadFrame (frame) {
  if (frame._contentDocument) {
    // We don't want to access document.parentWindow, since the getter will
    // cause a new window to be allocated if it doesn't exist.  Probe the
    // private variable instead.
    if (frame._contentDocument._parentWindow) {
      // close calls delete on its document.
      frame._contentDocument.parentWindow.close();
    } else {
      delete frame._contentDocument;
    }
  }

  var src = frame.src;
  var parentDoc = frame._ownerDocument;

  // If the URL can't be resolved or the src attribute is missing / blank,
  // then url should be set to the string "about:blank".
  // (http://www.whatwg.org/specs/web-apps/current-work/#the-iframe-element)
  var url = core.resourceLoader.resolve(parentDoc, src) || 'about:blank';
  var contentDoc = frame._contentDocument = new core.HTMLDocument({
    url: url,
    documentRoot: Path.dirname(url)
  });
  applyDocumentFeatures(contentDoc, parentDoc.implementation._features);

  var parent = parentDoc.parentWindow;
  var contentWindow = contentDoc.parentWindow;
  contentWindow.parent = parent;
  contentWindow.top = parent.top;

  // Handle about:blank with a simulated load of an empty document.
  if(url === 'about:blank') {
    core.resourceLoader.enqueue(frame, function() {
      contentDoc.write();
      contentDoc.close();
    })();
  } else {
    core.resourceLoader.load(frame, url, function(html, filename) {
      contentDoc.write(html);
      contentDoc.close();
    });
  }
}

define('HTMLFrameElement', {
  tagName: 'FRAME',
  init : function () {
    // Set up the frames array.  window.frames really just returns a reference
    // to the window object, so the frames array is just implemented as indexes
    // on the window.
    var parent = this._ownerDocument.parentWindow;
    var frameID = parent._length++;
    var self = this;
    defineGetter(parent, frameID, function () {
      return self.contentWindow;
    });

    // The contentDocument/contentWindow shouldn't be created until the frame
    // is inserted:
    // "When an iframe element is first inserted into a document, the user
    //  agent must create a nested browsing context, and then process the
    //  iframe attributes for the first time."
    //  (http://www.whatwg.org/specs/web-apps/current-work/#the-iframe-element)
    this._initInsertListener = function () {
      loadFrame(self);
    };
    this.addEventListener('DOMNodeInsertedIntoDocument', this._initInsertListener, false);
  },
  proto: {
    _attrModified: function(name, value, oldVal) {
      core.HTMLElement.prototype._attrModified.call(this, name, value, oldVal);
      var self = this;
      if (name === 'name') {
        // Remove named frame access.
        if (oldVal) {
          this._ownerDocument.parentWindow._frame(oldVal);
        }
        // Set up named frame access.
        if (value) {
          this._ownerDocument.parentWindow._frame(value, this);
        }
      } else if (name === 'src') {
        // Page we don't fetch the page until the node is inserted. This at
        // least seems to be the way Chrome does it.
        if (!this._attachedToDocument) {
          if (!this._waitingOnInsert) {
            // First, remove the listener added in 'init'.
            this.removeEventListener('DOMNodeInsertedIntoDocument',
                                     this._initInsertListener, false)

            // If we aren't already waiting on an insert, add a listener.
            // This guards against src being set multiple times before the frame
            // is inserted into the document - we don't want to register multiple
            // callbacks.
            this.addEventListener('DOMNodeInsertedIntoDocument', function loader () {
              self.removeEventListener('DOMNodeInsertedIntoDocument', loader, false);
              this._waitingOnInsert = false;
              loadFrame(self);
            }, false);
            this._waitingOnInsert = true;
          }
        } else {
          loadFrame(self);
        }
      }
    },
    _contentDocument : null,
    get contentDocument() {
      if (this._contentDocument == null) {
        this._contentDocument = new core.HTMLDocument();
      }
      return this._contentDocument;
    },
    get contentWindow() {
      return this.contentDocument.parentWindow;
    }
  },
  attributes: [
    'frameBorder',
    'longDesc',
    'marginHeight',
    'marginWidth',
    'name',
    {prop: 'noResize', type: 'boolean'},
    'scrolling',
    {prop: 'src', type: 'string', write: false}
  ]
});

define('HTMLIFrameElement', {
  tagName: 'IFRAME',
  parentClass: core.HTMLFrameElement,
  attributes: [
    'align',
    'frameBorder',
    'height',
    'longDesc',
    'marginHeight',
    'marginWidth',
    'name',
    'scrolling',
    'src',
    'width'
  ]
});

exports.define = define;
exports.dom = {
  level2 : {
    html : core
  }
}

