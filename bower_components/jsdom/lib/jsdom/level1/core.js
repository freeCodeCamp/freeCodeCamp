/*
  ServerJS Javascript DOM Level 1
*/
var inheritFrom = require("../utils").inheritFrom;

// utility functions
var attachId = function(id,elm,doc) {
  if (id && elm && doc) {
    if (!doc._ids[id]) {
      doc._ids[id] = [];
    }
    doc._ids[id].push(elm);
  }
};
var detachId = function(id,elm,doc) {
  var elms, i;
  if (id && elm && doc) {
    if (doc._ids && doc._ids[id]) {
      elms = doc._ids[id];
      for (i=0;i<elms.length;i++) {
        if (elms[i] === elm) {
          elms.splice(i,1);
          i--;
        }
      }
      if (elms.length === 0) {
        delete doc._ids[id];
      }
    }
  }
};

var core = {

  mapper: function(parent, filter, recursive) {
    return function() {
      return core.mapDOMNodes(parent, recursive !== false, filter);
    };
  },

  // Returns Array
  mapDOMNodes : function(parent, recursive, callback) {
    function visit(parent, result) {
      return Array.prototype.reduce.call(parent.childNodes, reducer, result);
    }

    function reducer(array, child) {
      if (callback(child)) {
        array.push(child);
      }
      if (recursive && child._childNodes) {
        visit(child, array);
      }
      return array;
    }

    return visit(parent, []);
  },

  visitTree: function(root, callback) {
    var cur = root; // TODO: Unroll this.

    function visit(el) {
      if (el) {
        callback(el);
        if (el._childNodes) {
          var i        = 0,
              children = el._childNodes,
              l        = children.length;

          for (i; i<l; i++) {
            visit(children[i]);
          }
        }
      }
    }
    visit(root);
  },

  markTreeReadonly: function(node) {
    function markLevel(el) {
      el._readonly = true;
      // also mark attributes and their children read-only
      if (el.attributes) {
        var attributes = el.attributes, l = attributes.length, i=0;
        attributes._readonly = true;

        for (i; i<l; i++) {
          core.visitTree(attributes[i], markLevel);
        }
      }
    }

    core.visitTree(node, markLevel);
  }
};

// ExceptionCode
var INDEX_SIZE_ERR              = core.INDEX_SIZE_ERR              = 1,
    DOMSTRING_SIZE_ERR          = core.DOMSTRING_SIZE_ERR          = 2,
    HIERARCHY_REQUEST_ERR       = core.HIERARCHY_REQUEST_ERR       = 3,
    WRONG_DOCUMENT_ERR          = core.WRONG_DOCUMENT_ERR          = 4,
    INVALID_CHARACTER_ERR       = core.INVALID_CHARACTER_ERR       = 5,
    NO_DATA_ALLOWED_ERR         = core.NO_DATA_ALLOWED_ERR         = 6,
    NO_MODIFICATION_ALLOWED_ERR = core.NO_MODIFICATION_ALLOWED_ERR = 7,
    NOT_FOUND_ERR               = core.NOT_FOUND_ERR               = 8,
    NOT_SUPPORTED_ERR           = core.NOT_SUPPORTED_ERR           = 9,
    INUSE_ATTRIBUTE_ERR         = core.INUSE_ATTRIBUTE_ERR         = 10,

// Node Types
    ELEMENT_NODE                = 1,
    ATTRIBUTE_NODE              = 2,
    TEXT_NODE                   = 3,
    CDATA_SECTION_NODE          = 4,
    ENTITY_REFERENCE_NODE       = 5,
    ENTITY_NODE                 = 6,
    PROCESSING_INSTRUCTION_NODE = 7,
    COMMENT_NODE                = 8,
    DOCUMENT_NODE               = 9,
    DOCUMENT_TYPE_NODE          = 10,
    DOCUMENT_FRAGMENT_NODE      = 11,
    NOTATION_NODE               = 12;

var messages = core.exceptionMessages = { };
messages[INDEX_SIZE_ERR]              = "Index size error";
messages[DOMSTRING_SIZE_ERR]          = "DOMString size error";
messages[HIERARCHY_REQUEST_ERR]       = "Hierarchy request error";
messages[WRONG_DOCUMENT_ERR]          = "Wrong document";
messages[INVALID_CHARACTER_ERR]       = "Invalid character";
messages[NO_DATA_ALLOWED_ERR]         = "No data allowed";
messages[NO_MODIFICATION_ALLOWED_ERR] = "No modification allowed";
messages[NOT_FOUND_ERR]               = "Not found";
messages[NOT_SUPPORTED_ERR]           = "Not supported";
messages[INUSE_ATTRIBUTE_ERR]         = "Attribute in use";

core.DOMException = function(code, message) {
  this.code = code;
  Error.call(this, core.exceptionMessages[code]);
  this.message = core.exceptionMessages[code];
  if(message) this.message = this.message + ": " + message;
  if(Error.captureStackTrace) Error.captureStackTrace(this, core.DOMException);
};

core.DOMException.INDEX_SIZE_ERR              = INDEX_SIZE_ERR;
core.DOMException.DOMSTRING_SIZE_ERR          = DOMSTRING_SIZE_ERR;
core.DOMException.HIERARCHY_REQUEST_ERR       = HIERARCHY_REQUEST_ERR;
core.DOMException.WRONG_DOCUMENT_ERR          = WRONG_DOCUMENT_ERR;
core.DOMException.INVALID_CHARACTER_ERR       = INVALID_CHARACTER_ERR;
core.DOMException.NO_DATA_ALLOWED_ERR         = NO_DATA_ALLOWED_ERR;
core.DOMException.NO_MODIFICATION_ALLOWED_ERR = NO_MODIFICATION_ALLOWED_ERR;
core.DOMException.NOT_FOUND_ERR               = NOT_FOUND_ERR;
core.DOMException.NOT_SUPPORTED_ERR           = NOT_SUPPORTED_ERR;
core.DOMException.INUSE_ATTRIBUTE_ERR         = INUSE_ATTRIBUTE_ERR;

inheritFrom(Error, core.DOMException, {
  INDEX_SIZE_ERR              : INDEX_SIZE_ERR,
  DOMSTRING_SIZE_ERR          : DOMSTRING_SIZE_ERR,
  HIERARCHY_REQUEST_ERR       : HIERARCHY_REQUEST_ERR,
  WRONG_DOCUMENT_ERR          : WRONG_DOCUMENT_ERR,
  INVALID_CHARACTER_ERR       : INVALID_CHARACTER_ERR,
  NO_DATA_ALLOWED_ERR         : NO_DATA_ALLOWED_ERR,
  NO_MODIFICATION_ALLOWED_ERR : NO_MODIFICATION_ALLOWED_ERR,
  NOT_FOUND_ERR               : NOT_FOUND_ERR,
  NOT_SUPPORTED_ERR           : NOT_SUPPORTED_ERR,
  INUSE_ATTRIBUTE_ERR         : INUSE_ATTRIBUTE_ERR
});

core.NodeList = function NodeList(element, query) {
  if (!query) {
    // Non-live NodeList
    if (Array.isArray(element)) {
      Array.prototype.push.apply(this, element);
    }
    Object.defineProperties(this, {
      _length: {value: element ? element.length : 0, writable:true}
    });
  } else {
    Object.defineProperties(this, {
      _element: {value: element},
      _query: {value: query},
      _snapshot: {writable: true},
      _length: {value: 0, writable: true},
      _version: {value: -1, writable: true}
    });
    this._update();
  }
};

function lengthFromProperties(arrayLike) {
  var max = -1;
  for (var i in arrayLike) {
    var asNumber = +i;
    if (!isNaN(asNumber) && asNumber > max) {
      max = asNumber;
    }
  }
  return max + 1;
}
core.NodeList.prototype = {
  _update: function() {
    var i;

    if (!this._element) {
      this._length = lengthFromProperties(this);
    } else {
      if (this._version < this._element._version) {
        var nodes = this._snapshot = this._query();
        this._resetTo(nodes);
        this._version = this._element._version;
      }
    }
  },
  _resetTo: function(array) {
    var startingLength = lengthFromProperties(this);
    for (var i = 0; i < startingLength; ++i) {
      delete this[i];
    }

    for (var j = 0; j < array.length; ++j) {
      this[j] = array[j];
    }
    this._length = array.length;
  },
  _toArray: function() {
    if (this._element) {
      this._update();
      return this._snapshot;
    }

    return Array.prototype.slice.call(this);
  },
  get length() {
    this._update();
    return this._length || 0;
  },
  item: function(index) {
    this._update();
    return this[index] || null;
  },
  toString: function() {
    return '[ jsdom NodeList ]: contains ' + this.length + ' items';
  }
};
Object.defineProperty(core.NodeList.prototype, 'constructor', {
  value: core.NodeList,
  writable: true,
  configurable: true
});

core.DOMImplementation = function DOMImplementation(document, /* Object */ features) {
  this._ownerDocument = document;
  this._features = {};

  if (features) {
    for (var feature in features) {
      if (features.hasOwnProperty(feature)) {
        this.addFeature(feature.toLowerCase(), features[feature]);
      }
    }
  }
};

core.DOMImplementation.prototype = {
  get ownerDocument() { return this._ownerDocument },
  removeFeature : function(feature, version) {
    feature = feature.toLowerCase();
    if (this._features[feature]) {
      if (version) {
        var j        = 0,
            versions = this._features[feature],
            l        = versions.length;

        for (j; j<l; j++) {
          if (versions[j] === version) {
            versions.splice(j,1);
            return;
          }
        }
      } else {
        delete this._features[feature];
      }
    }
  },

  addFeature: function(feature, version) {
    feature = feature.toLowerCase();

    if (version) {

      if (!this._features[feature]) {
        this._features[feature] = [];
      }

      if (version instanceof Array) {
        Array.prototype.push.apply(this._features[feature], version);
      } else {
        this._features[feature].push(version);
      }
    }
  },

  hasFeature: function(/* string */ feature, /* string */ version) {
    feature = (feature) ? feature.toLowerCase() : '';
    var versions = (this._features[feature]) ?
                    this._features[feature]  :
                    false;

    if (!version && versions.length && versions.length > 0) {
      return true;
    } else if (typeof versions === 'string') {
      return versions === version;
    } else if (versions.indexOf && versions.length > 0) {
      for (var i = 0; i < versions.length; i++) {
        var found = versions[i] instanceof RegExp ?
          versions[i].test(version) :
          versions[i] === version;
        if (found) { return true; }
      }
      return false;
    } else {
      return false;
    }
  }
};


var attrCopy = function(src, dest, fn) {
  if (src.attributes) {
    var attrs = src.attributes, i, l = attrs.length, attr, copied;
    for (i=0;i<l;i++) {
      attr = attrs[i];
      // skip over default attributes
      if (!attr.specified) {
        continue;
      }
      // TODO: consider duplicating this code and moving it into level2/core
      if (attr.namespaceURI) {
        dest.setAttributeNS(attr.namespaceURI,
                                     attr.nodeName,
                                     attr.nodeValue);
        var localName = attr.nodeName.split(':').pop();
        copied = dest.getAttributeNodeNS(attr.namespaceURI, localName);
      } else {
        dest.setAttribute(attr.nodeName, attr.nodeValue);
        copied = dest.getAttributeNode(attr.nodeName);
      }
      if (typeof fn == "function") {
        fn(attr, copied);
      }

    }
  }
  return dest;
};

core.Node = function Node(ownerDocument) {
  this._childNodes = new core.NodeList();
  this._ownerDocument = ownerDocument;
  this._attributes = new AttributeList(ownerDocument, this);
  this._nodeName = null;
  this._childrenList = null;
  this._version = 0;
  this._nodeValue = null;
  this._parentNode = null;
  this._nodeName = null;
  this._readonly = false;
};

core.Node.ELEMENT_NODE                = ELEMENT_NODE;
core.Node.ATTRIBUTE_NODE              = ATTRIBUTE_NODE;
core.Node.TEXT_NODE                   = TEXT_NODE;
core.Node.CDATA_SECTION_NODE          = CDATA_SECTION_NODE;
core.Node.ENTITY_REFERENCE_NODE       = ENTITY_REFERENCE_NODE;
core.Node.ENTITY_NODE                 = ENTITY_NODE;
core.Node.PROCESSING_INSTRUCTION_NODE = PROCESSING_INSTRUCTION_NODE;
core.Node.COMMENT_NODE                = COMMENT_NODE;
core.Node.DOCUMENT_NODE               = DOCUMENT_NODE;
core.Node.DOCUMENT_TYPE_NODE          = DOCUMENT_TYPE_NODE;
core.Node.DOCUMENT_FRAGMENT_NODE      = DOCUMENT_FRAGMENT_NODE;
core.Node.NOTATION_NODE               = NOTATION_NODE;

core.Node.prototype = {
  ELEMENT_NODE                : ELEMENT_NODE,
  ATTRIBUTE_NODE              : ATTRIBUTE_NODE,
  TEXT_NODE                   : TEXT_NODE,
  CDATA_SECTION_NODE          : CDATA_SECTION_NODE,
  ENTITY_REFERENCE_NODE       : ENTITY_REFERENCE_NODE,
  ENTITY_NODE                 : ENTITY_NODE,
  PROCESSING_INSTRUCTION_NODE : PROCESSING_INSTRUCTION_NODE,
  COMMENT_NODE                : COMMENT_NODE,
  DOCUMENT_NODE               : DOCUMENT_NODE,
  DOCUMENT_TYPE_NODE          : DOCUMENT_TYPE_NODE,
  DOCUMENT_FRAGMENT_NODE      : DOCUMENT_FRAGMENT_NODE,
  NOTATION_NODE               : NOTATION_NODE,

  get children() {
    if (!this._childrenList) {
      var self = this;
      this._childrenList = new core.NodeList(this, function() {
        return Array.prototype.filter.call(self._childNodes, function(node) {
          return node.tagName;
        });
      });
    }
    return this._childrenList;
  },
  get nodeValue() {
    return this._nodeValue;
  },
  set nodeValue(value) {
    // readonly
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR, 'Attempting to modify a read-only node');
    }

    this._nodeValue = value;
  },
  get parentNode() { return this._parentNode;},

  get nodeName() {
    var name = this._nodeName || this._tagName;
    if (this.nodeType === ELEMENT_NODE &&
        this._ownerDocument                  &&
        this._ownerDocument._doctype          &&
        this._ownerDocument._doctype.name.toLowerCase().indexOf("html") !== -1)
    {
      return name.toUpperCase();
    }
    return name;
  },
  set nodeName(unused) { throw new core.DOMException();},
  get attributes() { return this._attributes;},
  get firstChild() {
    return this._childNodes.length > 0 ? this._childNodes[0] : null;
  },
  set firstChild(unused) { throw new core.DOMException();},
  get ownerDocument() { return this._ownerDocument;},
  get readonly() { return this._readonly;},

  get lastChild() {
    var len = this._childNodes.length;
    return len > 0 ? this._childNodes[len -1] : null;
  },
  set lastChild(unused) { throw new core.DOMException();},

  get childNodes() {
    return this._childNodes;
  },
  set childNodes(unused) { throw new core.DOMException();},

  _indexOf: function(/*Node*/ child) {
    if (!this._childNodes ||
	!this._childNodes.length) {
      return -1;
    }

    var currentNode, index = 0, children = this._childNodes;

    while ((currentNode = children[index])) {
      if (currentNode == child) {
        break;
      }
      index++;
    }

    if (currentNode == child) {
      return index;
    }
    return -1;
  },

  get nextSibling() {
    // find this node's index in the parentNode, add one and call it a day
    if (!this._parentNode || !this._parentNode._indexOf) {
      return null;
    }

    var index = this._parentNode._indexOf(this);

    if (index == -1 || index+1 >= this._parentNode._childNodes.length) {
      return null;
    }

    return this._parentNode._childNodes[index+1] || null;
  },
  set nextSibling(unused) { throw new core.DOMException();},

  get previousSibling() {
    if (!this._parentNode || !this._parentNode._indexOf) {
      return null;
    }

    var index = this._parentNode._indexOf(this);

    if (index == -1 || index-1 < 0) {
      return null;
    }

    return this._parentNode._childNodes[index-1] || null;
  },
  set previousSibling(unused) { throw new core.DOMException();},

  /* returns Node */
  insertBefore :  function(/* Node */ newChild, /* Node*/ refChild) {
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR, 'Attempting to modify a read-only node');
    }

    // Adopt unowned children, for weird nodes like DocumentType
    if (!newChild._ownerDocument) newChild._ownerDocument = this._ownerDocument;

    // TODO - if (!newChild) then?
    if (newChild._ownerDocument !== this._ownerDocument) {
      throw new core.DOMException(WRONG_DOCUMENT_ERR);
    }

    if (newChild.nodeType && newChild.nodeType === ATTRIBUTE_NODE) {
      throw new core.DOMException(HIERARCHY_REQUEST_ERR);
    }

    // search for parents matching the newChild
    var current = this;
    do {
      if (current === newChild) {
        throw new core.DOMException(HIERARCHY_REQUEST_ERR);
      }
    } while((current = current._parentNode));

    // fragments are merged into the element
    if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
      var tmpNode, i = newChild._childNodes.length;
      while (i-- > 0) {
        tmpNode = newChild.removeChild(newChild.firstChild);
        this.insertBefore(tmpNode, refChild);
      }
    } else if (newChild === refChild) {
      return newChild;
    } else {
      // if the newChild is already in the tree elsewhere, remove it first
      if (newChild._parentNode) {
        newChild._parentNode.removeChild(newChild);
      }

      if (refChild == null) {
        var refChildIndex = this._childNodes.length;
      } else {
        var refChildIndex = this._indexOf(refChild);
        if (refChildIndex == -1) {
          throw new core.DOMException(NOT_FOUND_ERR);
        }
      }

      Array.prototype.splice.call(this._childNodes, refChildIndex, 0, newChild);

      newChild._parentNode = this;
      if (this._attached && newChild._attach) {
        newChild._attach();
      }

      this._modified();
    }

    return newChild;
  }, // raises(DOMException);

  _modified: function() {
    this._version++;
    if (this._ownerDocument) {
      this._ownerDocument._version++;
    }

    if (this._childrenList) {
      this._childrenList._update();
    }
  },

  _attrModified: function(name, value, oldValue) {
    if (name == 'id' && this._attached) {
      var doc = this._ownerDocument;
      detachId(oldValue,this,doc);
      attachId(value,this,doc);
    }

    // Check for inline event handlers.
    // We can't set these like other attributes then look it up in
    // dispatchEvent() because that would create 2 'traditional' event handlers
    // in the case where there's an inline event handler attribute, plus one
    // set using element.on* in a script.
    //
    // @see http://www.w3.org/TR/2011/WD-html5-20110405/webappapis.html#event-handler-content-attributes
    if ((name.length > 2) && (name[0] == 'o') && (name[1] == 'n')) {
        if (value) {
          var self = this;
          // Check whether we're the window. This can happen because inline
          // handlers on the body are proxied to the window.
          var w = (typeof self.run !== 'undefined') ? self : self._ownerDocument.parentWindow;
          self[name] = function (event) {
              // The handler code probably refers to functions declared in the
              // window context, so we need to call run().

              // Use awesome hacks to get the correct `this` context for the
              // inline event handler. This would only be necessary if we're an
              // element, but for the sake of simplicity we also do it on window.

              // Also set event variable and support `return false`.
              w.__tempContextForInlineEventHandler = self;
              w.__tempEvent = event;
              w.run("if ((function (event) {" + value + "}).call(" +
                "window.__tempContextForInlineEventHandler, window.__tempEvent) === false) {" +
                "window.__tempEvent.preventDefault()}");
              delete w.__tempContextForInlineEventHandler;
              delete w.__tempEvent;
          };
        } else {
          this[name] = null;
        }
    }
  },

  /* returns Node */
  replaceChild : function(/* Node */ newChild, /* Node */ oldChild){
    this.insertBefore(newChild, oldChild);
    return this.removeChild(oldChild);
  }, //raises(DOMException);

  /* returns void */
  _attach : function() {
    this._attached = true;
    if (this.id) {
      attachId(this.id,this,this._ownerDocument);
    }
    for (var i=0,len=this._childNodes.length;i<len;i++) {
      if (this._childNodes[i]._attach) {
        this._childNodes[i]._attach();
      }
    }
  },
  /* returns void */
  _detach : function() {
    var i, elms;
    this._attached = false;
    if (this.id) {
      detachId(this.id,this,this._ownerDocument);
    }
    for (var i=0,len=this._childNodes.length;i<len;i++) {
      this._childNodes[i]._detach();
    }
  },

  /* returns Node */
  removeChild : function(/* Node */ oldChild){
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    // TODO - if (!oldChild) then?
    var oldChildIndex = this._indexOf(oldChild);
    if (oldChildIndex == -1) {
      throw new core.DOMException(NOT_FOUND_ERR);
    }

    Array.prototype.splice.call(this._childNodes, oldChildIndex, 1);
    oldChild._parentNode = null;
    this._modified();
    oldChild._detach();
    return oldChild;
  }, // raises(DOMException);

  /* returns Node */
  appendChild : function(/* Node */ newChild) {
    return this.insertBefore(newChild, null);
  }, // raises(DOMException);

  /* returns boolean */
  hasChildNodes : function() {
    return this._childNodes.length > 0;
  },

  /* returns Node */
  cloneNode : function(/* bool */ deep, fn) {

    var object = null;
    switch (this.nodeType) {

      case this.ELEMENT_NODE:
        object = attrCopy(this,this._ownerDocument.createElement(this.tagName), fn);
      break;

      case this.TEXT_NODE:
        object = attrCopy(this,this._ownerDocument.createTextNode(this.tagName));
        object.nodeValue = this.nodeValue;
      break;
      case this.CDATA_SECTION_NODE:
        object = this._ownerDocument.createCDATASection(this.tagName);
        object.nodeValue = this.nodeValue;
      break;
      case this.ENTITY_REFERENCE_NODE:
        var name = (this._entity) ? this._entity.name : this._entityName,
            ref  = this._ownerDocument.createEntityReference(name);

        object = attrCopy(this, ref);
        object.nodeValue = this.nodeValue;
      break;
      case this.ATTRIBUTE_NODE:
        object = this._ownerDocument.createAttribute(this.name);
      break;
      case this.ENTITY_NODE:
        var entity = this._ownerDocument.createEntityNode(this.name);
        object = attrCopy(this, entity);
        object.nodeValue = this.nodeValue;
        object._publicId = this._publicId;
        object._systemId = this._systemId;
        object._notationName = this.notationName;
      break;
      case this.PROCESSING_INSTRUCTION_NODE:
        var pi = this._ownerDocument.createProcessingInstruction(this._target,
                                                                this._data);
        object = attrCopy(this, pi);
        object.nodeValue = this.nodeValue;
      break;
      case this.COMMENT_NODE:
        object = this._ownerDocument.createComment(this.tagName);
        object.nodeValue = this.nodeValue;
      break;
      case this.DOCUMENT_NODE:
        object = attrCopy(this, new core.Document());
        // TODO: clone the doctype/entities/notations/etc?
      break;
      case this.DOCUMENT_TYPE_NODE:
        object = attrCopy(this, new core.DocumentType());
        object.nodeValue = this.nodeValue;
      break;
      case this.DOCUMENT_FRAGMENT_NODE:
        object = this._ownerDocument.createDocumentFragment();
      break;
      case this.NOTATION_NODE:
        object = this._ownerDocument.createNotationNode(this._name,
                                                       this._publicId,
                                                       this._systemId);
        object = attrCopy(this,object);
        object.nodeValue = this.nodeValue;
      break;
      default:
        throw new core.DOMException(NOT_FOUND_ERR);
      break;
    }

    if (typeof fn === "function") {
      fn(this, object);
    }

    if (deep || this.nodeType === ATTRIBUTE_NODE) {
      var clone = null;
      for (var i=0,len=this._childNodes.length;i<len;i++)
      {
        clone = this._childNodes[i].cloneNode(true);
        if (clone.nodeType === ATTRIBUTE_NODE) {
          object.setAttributeNode(clone);
        } else {
          var readonly = object._readonly;
          object._readonly = false;
          object.appendChild(clone);
          object._readonly = readonly;
        }
      }
    }

    return object;
  },

  /* returns void */
  normalize: function() {
    var prevChild, child, attr,i;

    if (this._attributes && this._attributes.length) {
      for (i=0;i<this._attributes.length;i++)
      {
        if (this._attributes[i]) {
          attr = this._attributes[i].normalize();
        }
      }
    }

    for (i=0;i<this._childNodes.length;i++)
    {
      child = this._childNodes[i];

      if (child.normalize) {
        child.normalize();
      }

      // Level2/core clean off empty nodes
      if (child.nodeValue === "") {
        this.removeChild(child);
        i--;
        continue;
      }

      if (i>0) {
        prevChild = this._childNodes[i-1];

        if (child.nodeType === TEXT_NODE &&
            prevChild.nodeType === TEXT_NODE)
        {

          // remove the child and decrement i
          prevChild.appendData(child.nodeValue);

          this.removeChild(child);
          i--;
        }
      }
    }
  },
  toString: function() {
    var id = '';
    if (this.id) {
        id = '#' + this.id;
    }
    if (this.className) {
        var classes = this.className.split(/\s+/);
	for (var i = 0, len = classes.length; i < len; i++) {
	    id += '.' + classes[i];
	}
    }
    return '[ ' + this.tagName + id + ' ]';
  },
  raise: function(type, message, data) {
    var text = type + ": " + message;

    if (data) {
      if (data.exception) {
        text = data.exception.stack;
      } else {
        text += ' - More:\n' + data;
      }
    }

    if (type === "error") {
      if (!this.errors) {
        this.errors = [];
      }
      // TODO: consider using actual `Error` objects or `DOMException`s even..
      var err = {
        type    : type,
        message : message || "No message",
        data    : data || null
      };

      this.errors.push(err);

      if (this._ownerDocument        &&
          this._ownerDocument.raise &&
          this !== this._ownerDocument)
      {
        this._ownerDocument.raise(type, message, data);
      }
    }
  }
};


core.NamedNodeMap = function NamedNodeMap(document) {
  this._nodes = Object.create(null);
  this._nsStore = {};
  this.length = 0;
  this._ownerDocument = document;
  this._readonly = false;
};
core.NamedNodeMap.prototype = {
  get readonly() { return this._readonly;},
  get ownerDocument() { this._ownerDocument;},

  exists : function(name) {
    return (this._nodes[name] || this._nodes[name] === null) ? true : false;
  },

  /* returns Node */
  getNamedItem: function(/* string */ name) {
    return this._nodes[name] || null;
  },

  /* returns Node */
  setNamedItem: function(/* Node */ arg) {

    // readonly
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    // arg is from a different document
    if (arg && arg._ownerDocument !== this._ownerDocument) {
      throw new core.DOMException(WRONG_DOCUMENT_ERR);
    }

    // if this argument is already in use..
    if (arg && arg._ownerElement) {
      throw new core.DOMException(INUSE_ATTRIBUTE_ERR);
    }

    var name = arg.name || arg.tagName;
    var ret = this._nodes[name];
    if (!ret) {
      this.length++;
      ret = null;
    }
    arg._specified = true;
    this._nodes[name] = arg;

    // Avoid overwriting prototype methods etc.:
    if (this.hasOwnProperty(name) || !(name in this)) {
      this[name] = arg;
    }
    return ret;
  }, // raises: function(DOMException) {},

  /* returns Node */
  removeNamedItem: function(/* string */ name) {

    // readonly
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    if (!this._nodes[name]) {
      throw new core.DOMException(NOT_FOUND_ERR);
    }

    var prev = this._nodes[name] || null;
    delete this._nodes[name];
    delete this[name];

    this.length--;
    return prev;
  }, // raises: function(DOMException) {},

  /* returns Node */
  item: function(/* int */ index) {
    var current = 0;
    for (var member in this._nodes) {
      if (current === index && this._nodes[member]) {
        return this._nodes[member];
      }
      current++;
    }
    return null;
  }
};

//
// For historical reasons, AttributeList objects must allow accessing
// attributes as if the object were an associative array. For
// instance, if `attributes` is an AttributeList object then
// `attributes.x` should evaluate to the attribute named `x` (which is
// not in any namespace). The AttributeList class uses the dollar
// symbol ($) to reduce the possibility of a clash between its field
// names and possible attribute names. For instance, if the method
// currently named `$set` were instead named `set` then it would not
// be possible to access an attribute named `set` through
// `attributes.set`. The dollar symbol is not valid in attribute names
// so `$set` cannot clash.
//
// Some fields do not get the $ because:
//
// * They are part of the API (e.g. `setNamedItem`, `length`), so they
//   must be visible under a specific name.
//
// * Jsdom's code which traverses the DOM tree expects regularly named
//   fields (e.g. `_parentNode`).
//
function AttributeList(document, parentNode) {
  this._ownerDocument = document;
  this._parentNode = parentNode;
  this._readonly = false;
  this._$ns_to_attrs = Object.create(null);
  this._$name_to_attrs = Object.create(null);
  this.length = 0;
}

AttributeList.prototype = {
  _$reserved: [], // Initialized later


  //
  // Code internal to jsdom and which manipulates an AttributeList
  // object should use the following methods rather than the methods
  // that provide the NamedNodeMap interface.
  //

  // This method *ignores* namespaces. This is *not* the same thing as
  // requesting an attribute with a null namespace.
  $getNoNS: function (name) {
    var attrs = this._$name_to_attrs[name];
    if (!attrs) {
      return null;
    }

    return attrs[0] || null;
  },

  $getNode: function (namespace, localName) {
    var attrs = this._$ns_to_attrs[namespace];
    if (!attrs) {
      return null;
    }

    var ret = attrs[localName];
    if (!ret) {
      return null;
    }

    return ret;
  },

  // This method *ignores* namespaces. This is *not* the same thing as
  // requesting an attribute with a null namespace.
  $setNoNS: function (name, value) {
    var attr = this.$getNoNS(name);
    if (!attr) {
      this.$set(name, value);
      return;
    }

    var prev_val = attr.value;
    attr.value = value;
    attr._specified = true;

    this._parentNode._attrModified(attr.name, attr.value, prev_val);
    this._parentNode._modified();
  },

  $set: function (localName, value, name, prefix, namespace) {
    if (this._readonly) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    if (name === undefined) {
      name = localName;
    }

    if (prefix === undefined) {
      prefix = null;
    }

    if (namespace === undefined) {
      namespace = null;
    }

    var prev_attr = this.$getNode(namespace, localName);
    var attr;

    var prev_val = null;
    if (prev_attr) {
      prev_val = prev_attr.value;
      prev_attr._prefix = prefix;
      prev_attr.value = value;
      attr = prev_attr;
      attr._specified = true;

      this._parentNode._attrModified(attr.name, attr.value, prev_val);
      this._parentNode._modified();
    }
    else {
      attr = this._ownerDocument.createAttribute(name);
      attr._ownerElement = this._parentNode;
      attr.value = value;
      attr._namespaceURI = namespace;
      attr._prefix = prefix;
      attr._localName = localName;
      attr._parentNode = this._parentNode;
      attr._created = true;
      this.$setNode(attr);
      // $setNode calls the parent node methods.
    }
  },

  $setNode: function (attr) {
    if (this._readonly) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    if (attr.nodeType !== ATTRIBUTE_NODE) {
      throw new core.DOMException(HIERARCHY_REQUEST_ERR);
    }

    if (attr._ownerDocument !== this._ownerDocument) {
      throw new core.DOMException(WRONG_DOCUMENT_ERR);
    }

    if (attr._parentNode && attr._parentNode !== this._parentNode) {
      throw new core.DOMException(INUSE_ATTRIBUTE_ERR);
    }

    var localName = attr._localName;
    var name = attr.name;
    var prefix = attr._prefix;
    var namespace = attr._namespaceURI;

    if (name === undefined) {
      name = localName;
    }

    if (prefix === undefined) {
      prefix = null;
    }

    if (namespace === undefined) {
      namespace = null;
    }

    var prev_attr = this.$getNode(namespace, localName);

    var prev_val = null;
    if (prev_attr) {
      prev_val = prev_attr.value;
      // Remove the old attribute
      this._$onlyRemoveNode(prev_attr);
    }

    attr._parentNode = this._parentNode;
    attr._ownerElement = this._parentNode;
    attr._specified = true;

    var attrs = this._$ns_to_attrs[namespace];
    if (!attrs) {
      attrs = this._$ns_to_attrs[namespace] = Object.create(null);
    }
    attrs[localName] = attr;

    attrs = this._$name_to_attrs[name];
    if (!attrs) {
      attrs = this._$name_to_attrs[name] = [attr];
    }
    else {
      attrs.push(attr);
    }

    // Only attributes in the null namespace can be set this way.
    if (namespace === null) {
      // Make the node a field on this object but ONLY if it does not
      // clash with the reserved names.
      if (this._$reserved.indexOf(name) === -1) {
        this[name] = attr;
      }
    }

    this[this.length] = attr;
    this.length++;

    this._parentNode._attrModified(attr.name, attr.value, prev_val);
    this._parentNode._modified();

    return prev_attr;
  },

  // This method *ignores* namespaces. This is *not* the same thing as
  // requesting an attribute with a null namespace.
  $removeNoNS: function (name) {
    var attr = this.$getNoNS(name);
    return attr ? this.$removeNode(attr) : null;
  },

  $remove: function (namespace, localName) {
    var attr = this.$getNode(namespace, localName);
    return attr ? this.$removeNode(attr) : null;
  },

  /* Only removes the node, and does not add a default value. */
  _$onlyRemoveNode: function (attr) {
    var namespace = attr._namespaceURI;
    var localName = attr._localName;

    var attrs = this._$ns_to_attrs[namespace];
    if (!attrs) {
      return null;
    }

    var found_attr = attrs[localName];
    if (found_attr !== attr) {
      return null;
    }

    if (this._readonly) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    attr._ownerElement = null;
    attr._parentNode = null;
    delete attrs[localName];

    attrs = this._$name_to_attrs[attr.name];
    attrs.splice(attrs.indexOf(attr), 1);

    var ix = Array.prototype.indexOf.call(this, attr);
    // Splice also modifies length.
    Array.prototype.splice.call(this, ix, 1);

    if (this[attr.name] === attr) {
      delete this[attr.name];
    }

    this._parentNode._attrModified(attr.name);
    this._parentNode._modified();

    return attr;
  },

  $removeNode: function (attr) {
    if (!this._$onlyRemoveNode(attr)) {
      return null;
    }

    // set default value if available
    var doc = this._ownerDocument;
    if (doc && doc._doctype && doc._doctype.name.toLowerCase() !== "html") {
      var elem =
            doc._doctype._attributes.getNamedItem(this._parentNode.nodeName);

      if (elem) {
        var defaultValue = elem.attributes.getNamedItemNS(attr._namespaceURI,
                                                          attr._localName);

        if (defaultValue) {
          this.$set(attr._localName, defaultValue.value, attr.name, attr._prefix,
                   attr._namespaceURI);
          var new_attr = this.$getNode(attr._namespaceURI, attr._localName);
          new_attr._specified = false;
        }
      }
    }
    return attr;
  },

  // Although http://dom.spec.whatwg.org/#concept-element-attribute
  // does not specify that the attributes field on an Element should
  // support NamedNodeMap, in practice browsers still support this
  // interface so we should support it for compatibility.

  getNamedItem: function (name) {
    return this.getNamedItemNS(null, name);
  },
  removeNamedItem: function (name) {
    return this.removeNamedItemNS(null, name);
  },
  item: function (i) {
      return this[i];
  },
  getNamedItemNS: function (namespaceURI, localName) {
    if (namespaceURI === "") {
      namespaceURI = null;
    }

    return this.$getNode(namespaceURI, localName);
  },
  removeNamedItemNS: function (namespaceURI, localName) {
    var ret = this.$remove(namespaceURI, localName);

    if (ret === null) {
      throw new core.DOMException(NOT_FOUND_ERR);
    }

    return ret;
  }
};

// Alias these methods.
AttributeList.prototype.setNamedItem = AttributeList.prototype.$setNode;
AttributeList.prototype.setNamedItemNS = AttributeList.prototype.$setNode;

(function () {
  // Construct the list of reserved attribute names from a temporarily
  // created AttributeList and from the chain of prototypes. We need
  // this because JavaScript code running an a browser expects to be
  // able to do el.attributes.x to get the value of the attribute "x"
  // on an element. Unfortunately, JavaScript *currently* does not
  // allow us to elegantly provide such functionality without risking
  // a clash with the fields and methods set on the AttributeList
  // object. Hence we need a list of reserved field names.

  var reserved = Object.keys(new AttributeList());
  var prototype = AttributeList.prototype;
  while (prototype) {
    reserved = reserved.concat(Object.getOwnPropertyNames(prototype));
    prototype = Object.getPrototypeOf(prototype);
  }
  AttributeList.prototype._$reserved = reserved;
})();

core.AttributeList = AttributeList;

core.NotationNodeMap = function NotationNodeMap(document) {
  core.NamedNodeMap.call(this, document);
  this._readonly = false;
  for (var i=1;i<arguments.length;i++) {
    this.setNamedItem(arguments[i]);
  }
  this._readonly = true;
};
inheritFrom(core.NamedNodeMap, core.NotationNodeMap);

core.EntityNodeMap = function EntityNodeMap(document) {
  core.NamedNodeMap.call(this,document);
  this._readonly = false;
  var i = 1, l = arguments.length;

  for (i=1; i<l; i++) {
    this.setNamedItem(arguments[i]);
  }
  core.markTreeReadonly(this);
};
inheritFrom(core.NamedNodeMap, core.EntityNodeMap);

core.Element = function Element(document, tagName) {
  this._ownerDocument = document;
  core.Node.call(this, document);
  this._nodeName = tagName;
  this._tagName = tagName;
};

inheritFrom(core.Node, core.Element, {

  get nodeValue() { return null;},
  set nodeValue(value) { /* do nothing */ },
  get tagName() {
    if (this.nodeType === ELEMENT_NODE &&
        this._ownerDocument                  &&
        this._ownerDocument._doctype          &&
        this._ownerDocument._doctype.name.toLowerCase().indexOf("html") !== -1)
    {
      return this.nodeName.toUpperCase();
    }
    return this.nodeName;
  },
  nodeType : ELEMENT_NODE,
  get attributes() {
    return this._attributes;
  },

  /* returns string */
  getAttribute: function(/* string */ name) {
    var attribute = this._attributes.$getNode(null, name);
    if (attribute) {
      return attribute.value;
    }
    return null;
  },

  setAttribute: function(/* string */ name, /* string */ value) {
    if (this._ownerDocument) {
      var attr = this._ownerDocument.createAttribute(name);
      attr.value = value;
      attr._ownerElement = this;
      attr._created = true;
      this._attributes.$setNode(attr);
    }

  }, //raises: function(DOMException) {},

  removeAttribute: function(/* string */ name) {
    this._attributes.$remove(null, name);
  }, // raises: function(DOMException) {},

  /* returns Attr */
  getAttributeNode: function(/* string */ name) {
    return this._attributes.$getNode(null, name);
  },

  /* returns Attr */
  setAttributeNode: function(/* Attr */ newAttr) {
    var prevNode = this._attributes.$getNode(null, newAttr.name);
    if (prevNode) {
      prevNode._ownerElement = null;
    }

    newAttr._ownerElement = this;
    this._attributes.$setNode(newAttr);

    return (prevNode && prevNode.specified) ? prevNode : null;
  }, //  raises: function(DOMException) {},

  /* returns Attr */
  removeAttributeNode: function(/* Attr */ oldAttr) {
    var ret = this._attributes.$removeNode(oldAttr);

    if (ret !== null) {
      return ret;
    }

    throw new core.DOMException(NOT_FOUND_ERR);
  }, //raises: function(DOMException) {},

  /* returns NodeList */
  getElementsByTagName: function(/* string */ name) {
    name = name.toLowerCase();

    function filterByTagName(child) {
      child = (child.nodeType === ENTITY_REFERENCE_NODE) ?
               child._entity                             :
               child;

      if (child.nodeName && child.nodeType === ELEMENT_NODE) {
        return name === "*" || (child.nodeName.toLowerCase() === name);
      }

      return false;
    }
    return new core.NodeList(this._ownerDocument || this, core.mapper(this, filterByTagName, true));
  },
});

core.DocumentFragment = function DocumentFragment(document) {
  core.Node.call(this, document);
  this._nodeName = this._tagName = "#document-fragment";
};
inheritFrom(core.Node, core.DocumentFragment, {
  nodeType : DOCUMENT_FRAGMENT_NODE,
  get nodeValue() { return null;},
  set nodeValue(unused) { /* do nothing */ },
  get attributes() { return null;}
});

core.ProcessingInstruction = function ProcessingInstruction(document, target, data) {
  this._ownerDocument = document;
  core.Node.call(this, document);
  this._nodeName = target;
  this._tagName = target;
  this._target = target;
  this._nodeValue = data;
}
inheritFrom(core.Node, core.ProcessingInstruction, {
  nodeType : PROCESSING_INSTRUCTION_NODE,
  get target() { return this._target;},
  set target(value) { throw new core.DOMException(1);},
  get nodeValue() { return this._nodeValue;},
  set nodeValue(value) { this._nodeValue = value},
  get data()   { return this._nodeValue;},
  set data(unused)   { throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);},
  get attributes() { return null;}

});

core.Document = function Document(options) {
  if (!options) {
    options = {};
  }
  else if (typeof options == 'string') {
    options = {
      name: options
    };
  }
  core.Node.call(this, "#document");
  this._nodeName = this._tagName = "#document";
  this._contentType = options.contentType || "text/xml";
  this._doctype = options._doctype;
  this._implementation = options.implementation || new (core.DOMImplementation)();
  this._documentElement = null;
  this._ids = Object.create(null);
  this._attached = true;
  this._ownerDocument = this;
  this._readonly = false;
};


var tagRegEx = /[^\w:\d_\.-]+/i;
var entRegEx = /[^\w\d_\-&;]+/;
var invalidAttrRegEx = /[\s"'>/=\u0000-\u001A]/;

inheritFrom(core.Node, core.Document, {
  nodeType : DOCUMENT_NODE,
  _elementBuilders : { },
  _defaultElementBuilder: function(document, tagName) {
    return new core.Element(document, tagName);
  },
  get contentType() { return this._contentType;},
  get doctype() { return this._doctype || null;},
  set doctype(doctype) { this._doctype = doctype;},
  get documentElement() {
    if (this._documentElement) {
      return this._documentElement;
    } else {
      var children = this._childNodes, len = this._childNodes.length, i=0;
      for (i;i<len;i++) {
        if (children[i].nodeType === ELEMENT_NODE) {
          this._documentElement = children[i];
          return children[i];
        }
      }
      return null;
    }
  },

  get implementation() { return this._implementation;},
  set implementation(implementation) { this._implementation = implementation;},
  get nodeName() { return '#document'; },
  get tagName() {
    return null;
  },
  get nodeValue() { return null; },
  set nodeValue(unused) { /* noop */ },
  get attributes() { return null;},
  get ownerDocument() { return null;},
  get readonly() { return this._readonly;},

  /* returns Element */
  _createElementNoTagNameValidation: function(/*string*/ tagName) {
    var lower = tagName.toLowerCase();
    var element = (this._elementBuilders[lower] || this._defaultElementBuilder)(this, tagName);

    // Check for and introduce default elements
    if (this._doctype && this._doctype._attributes && this._doctype.name.toLowerCase() !== "html") {
      var attrElement = this._doctype._attributes.getNamedItem(tagName);
      if (attrElement && attrElement._childNodes) {

        var attrs = attrElement.attributes;
        var attr, len = attrs.length, defaultAttr;
        for (var i = 0; i < len; i++) {
          defaultAttr = attrs[i];
          if (defaultAttr) {
            attr = this.createAttribute(defaultAttr.name);
            attr.value = defaultAttr.value;
            element.setAttributeNode(attr);
            attr._specified = false;
            attr._created = true;
          }
        }
      }
    }

    element._created = true;
    return element;
  },

  /* returns Element */
  createElement: function(/* string */ tagName) {
    tagName = String(tagName);

    var c = [];

    if (tagName.length === 0 || (c = tagName.match(tagRegEx))) {
      throw new core.DOMException(INVALID_CHARACTER_ERR, 'Invalid character in tag name: ' + c.pop());
    }

    return this._createElementNoTagNameValidation(tagName);
  }, //raises: function(DOMException) {},

  /* returns DocumentFragment */
  createDocumentFragment: function() {
    return new core.DocumentFragment(this);
  },

  /* returns Text */
  createTextNode: function(/* string */ data) {
    return new core.Text(this,data);
  },

  /* returns Comment */
  createComment: function(/* string */ data) {
    return new core.Comment(this,data);
  },

  /* returns CDATASection */
  createCDATASection: function(/* string */ data) {
    if (this._doctype && this._doctype.name === "html") {
      throw new core.DOMException(NOT_SUPPORTED_ERR);
    }

    return new core.CDATASection(this,data);
  }, // raises: function(DOMException) {},

  /* returns ProcessingInstruction */
  createProcessingInstruction: function(/* string */ target,/* string */ data) {

    if (this._doctype && this._doctype.name === "html") {
      throw new core.DOMException(NOT_SUPPORTED_ERR);
    }

    if (target.match(tagRegEx) || !target || !target.length) {
      throw new core.DOMException(INVALID_CHARACTER_ERR);
    }

    return new core.ProcessingInstruction(this, target, data);
  }, // raises: function(DOMException) {},

  /* returns Attr */
  createAttribute: function(/* string */ name) {
    if (!name || !name.length || name.match(invalidAttrRegEx) ) {
      throw new core.DOMException(INVALID_CHARACTER_ERR, "attribute name: " + name);
    }
    return new core.Attr(this, name,false);
  }, // raises: function(DOMException) {},

  /* returns EntityReference */
  createEntityReference: function(/* string */ name) {

    if (this._doctype && this._doctype.name === "html") {
      throw new core.DOMException(NOT_SUPPORTED_ERR);
    }

    name = name.replace(/[&;]/g,"");
    if (!name || !name.length) {
      throw new core.DOMException(INVALID_CHARACTER_ERR);
    }

    if (name.match(tagRegEx)) {
      throw new core.DOMException(INVALID_CHARACTER_ERR);
    }

    var entity;
    if (this._doctype && this._doctype.entities) {
      entity = this._doctype.entities.getNamedItem(name);
    } else {
      entity = null;
    }

    var ref    = new core.EntityReference(this, entity);

    ref._entityName = name;

    return ref;
  }, //raises: function(DOMException) {},

  /* returns Entity */
  createEntityNode : function(/* string */ name)
  {

    if (name.match(entRegEx) || !name || !name.length) {
      throw new core.DOMException(INVALID_CHARACTER_ERR);
    }

    var ret = new core.Entity(this, name);
    ret._readonly = false;// TODO: fix me please.

    for (var i=1;i<arguments.length;i++)
    {
      ret.appendChild(arguments[i]);
    }

    core.markTreeReadonly(ret);

    return ret;
  },

  /* returns Notation */
  createNotationNode : function(/* string */ name,/* string */ publicId,/* string */ systemId)
  {

    if (name.match(entRegEx) || !name || !name.length) {
      throw new core.DOMException(INVALID_CHARACTER_ERR);
    }

    var ret = new core.Notation(this, name, publicId, systemId);
    ret._readonly = false;// TODO: fix me please.

    for (var i=3;i<arguments.length;i++)
    {
      ret.appendChild(arguments[i]);
    }

    core.markTreeReadonly(ret);

    return ret;
  },

  appendChild : function(/* Node */ arg) {
    if (this.documentElement && arg.nodeType == ELEMENT_NODE) {
      throw new core.DOMException(HIERARCHY_REQUEST_ERR);
    }
    return core.Node.prototype.appendChild.call(this, arg);
  },

  removeChild : function(/* Node */ arg) {
    var ret = core.Node.prototype.removeChild.call(this, arg);
    if (arg == this._documentElement) {
      this._documentElement = null;// force a recalculation
    }
    return ret;
  },

  /* returns NodeList */
  getElementsByTagName: function(/* string */ name) {
    function filterByTagName(child) {
      if (child.nodeType && child.nodeType === ENTITY_REFERENCE_NODE)
      {
        child = child._entity;
      }

      if (child.nodeName && child.nodeType === ELEMENT_NODE)
      {
        if (name === "*") {
          return true;

        // case insensitivity for html
        } else if (child._ownerDocument && child._ownerDocument._doctype &&
                   //child._ownerDocument._doctype.name === "html" &&
                   child.nodeName.toLowerCase() === name.toLowerCase())
        {
          return true;
        } else if (child.nodeName.toLowerCase() === name.toLowerCase()) {
          return true;
        }
      }
      return false;
    }
    return new core.NodeList(this.documentElement || this, core.mapper(this, filterByTagName, true));
  }
});

core.CharacterData = function CharacterData(document, value) {
  core.Node.call(this, document);

  this._nodeValue = value + "";
};
inheritFrom(core.Node, core.CharacterData, {

  get data() { return this._nodeValue;},
  set data(data) {

    // readonly
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    this._nodeValue = data;
  },

  /* returns int */
  get length() { return this._nodeValue.length || 0;},

  /* returns string */
  substringData: function(/* int */ offset, /* int */ count) {

    if (count < 0 || offset < 0 || offset > this._nodeValue.length) {
      throw new core.DOMException(INDEX_SIZE_ERR);
    }

    return (this._nodeValue.length < offset + count) ?
            this._nodeValue.substring(offset) :
            this._nodeValue.substring(offset, offset+count);

  }, // raises: function(DOMException) {},

  /* returns string */
  appendData: function(/* string */ arg) {

    // readonly
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    this._nodeValue+=arg;
    return this._nodeValue;
  }, // raises: function(DOMException) {},

  /* returns string */
  insertData: function(/* int */ offset, /* string */ arg) {

    // readonly
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    if (offset < 0 || offset > this._nodeValue.length) {
      throw new core.DOMException(INDEX_SIZE_ERR);
    }

    var start = this._nodeValue.substring(0,offset);
    var end = this._nodeValue.substring(offset);

    this._nodeValue = start + arg + end;

  }, //raises: function(DOMException) {},

  /* returns void */
  deleteData: function(/* int */ offset, /* int */ count) {

    // readonly
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    if (offset       < 0                     ||
        offset       > this._nodeValue.length ||
        count        < 0)
    {
      throw new core.DOMException(INDEX_SIZE_ERR);
    }

    var start = this._nodeValue.substring(0,offset);

    this._nodeValue = (offset+count<this._nodeValue.length) ?
                     start + this._nodeValue.substring(offset+count) :
                     start;
  }, // raises: function(DOMException) {},

  /* returns void */
  replaceData: function(/* int */ offset, /* int */ count, /* string */ arg) {

    // readonly
    if (this._readonly === true) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    count = (offset+count > this._nodeValue.length) ?
             this.nodeValue.length-offset           :
             count;

    if (offset       < 0                     ||
        offset       > this._nodeValue.length ||
        count        < 0                     /*||
        offset+count > this._nodeValue.length*/)
    {
      throw new core.DOMException(INDEX_SIZE_ERR);
    }

    var start = this._nodeValue.substring(0,offset);
    var end = this._nodeValue.substring(offset+count);

    this._nodeValue = start + arg + end;
  } // raises: function(DOMException) {},
});


core.Attr = function Attr(document, name, value) {
  core.Node.call(this, document);
  this._nodeValue = value;
  this._name = name;
  this._specified = (value) ? true : false;
  this._tagName   = name;
  this._nodeName  = name;

  // Proactively set some level 2 information so that AttributeList
  // can operate.
  this._namespaceURI = null;
  this._nodeName = name;
  this._localName = name;
  this._prefix = null;
};
inheritFrom(core.Node, core.Attr, {
  nodeType : ATTRIBUTE_NODE,
  get nodeValue() {
    var val = '';
    for (var i=0,len=this._childNodes.length;i<len;i++) {
      var child = this._childNodes[i];
      if (child.nodeType === ENTITY_REFERENCE_NODE) {
        val += Array.prototype.reduce.call(child.childNodes, function(prev, c) {
          return prev += (c.nodeValue || c);
        }, '');
      } else {
        val += child.nodeValue;
      }
    }
    return val;
  },
  set nodeValue(value) {
    // readonly
    if (this._readonly) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    this._childNodes._resetTo([this._ownerDocument.createTextNode(value)]);
    this._modified();
    this._specified = true;
    var prev = this._nodeValue;
    this._nodeValue = value;
    if (this._ownerElement) {
      this._ownerElement._attrModified(this._name, value, prev);
    }
  },
  get name() { return this._name;},
  get specified() { return this._specified },
  get value() {
    return this.nodeValue;
  },
  set value(value) {
    this.nodeValue = value;
  },
  get parentNode() { return null;},
  get attributes() { return null;},

  insertBefore : function(/* Node */ newChild, /* Node*/ refChild){
    if (newChild.nodeType === CDATA_SECTION_NODE ||
        newChild.nodeType === ELEMENT_NODE)
    {
      throw new core.DOMException(HIERARCHY_REQUEST_ERR);
    }

    return core.Node.prototype.insertBefore.call(this, newChild, refChild);
  },

  appendChild : function(/* Node */ arg) {

    if (arg.nodeType === CDATA_SECTION_NODE ||
        arg.nodeType === ELEMENT_NODE)
    {
      throw new core.DOMException(HIERARCHY_REQUEST_ERR);
    }

    return core.Node.prototype.appendChild.call(this, arg);
  }

});

core.Text = function Text(document, text, readonly) {
    core.CharacterData.call(this, document, text);
    this._nodeName = "#text";
    this._readonly = readonly ? true : false
};
inheritFrom(core.CharacterData, core.Text, {
  nodeType : TEXT_NODE,
  get attributes() { return null;},

  /* returns Text */
  splitText: function(offset) {

    // readonly
    if (this._readonly) {
      throw new core.DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    if (offset < 0 || offset > this._nodeValue.length) {
      throw new core.DOMException(INDEX_SIZE_ERR);
    }

    var newText = this._nodeValue.substring(offset);
    this._nodeValue = this._nodeValue.substring(0, offset);
    var newNode = this._ownerDocument.createTextNode(newText);

    if(this._parentNode.lastChild === this) {
      this._parentNode.appendChild(newNode);
    } else {
      this._parentNode.insertBefore(newNode, this.nextSibling);
    }

    return newNode;
  }, //raises: function(DOMException) {},
  toString: function() {
    return this.nodeName;
  }
});


core.Comment = function Comment(document, text) {
  core.Text.call(this, document, text);
  this._nodeName = "#comment";
  this._tagName  = "#comment";
};
inheritFrom(core.Text, core.Comment, {
  nodeType : COMMENT_NODE
});


core.CDATASection = function CDATASection(document, value) {
  core.Text.call(this, document, value);
  this._nodeName = "#cdata-section";
};
inheritFrom(core.Text, core.CDATASection, {
  nodeType : CDATA_SECTION_NODE
});

core.DocumentType = function DocumentType(document, name, entities, notations, attributes) {
  core.Node.call(this, document);
  this._name = name;
  this._tagName = name;
  this._nodeName = name;
  this._entities = entities || new core.EntityNodeMap(document);
  this._notations = notations || new core.NotationNodeMap(document);

  core.markTreeReadonly(this._notations);

  this._attributes = attributes || new AttributeList(document);
};
inheritFrom(core.Node, core.DocumentType, {
  nodeType : DOCUMENT_TYPE_NODE,
  get nodeValue() { return null;},
  set nodeValue(unused) { /* do nothing */ },
  get name() { return this._name;},
  get entities() { return this._entities;},
  get notations() { return this._notations;},
  get attributes() { return null;}
});


core.Notation = function Notation(document, name, publicId, systemId){
  core.Node.call(this, document);
  this._name = name;
  this._nodeName = name;
  this._publicId = publicId || null;
  this._systemId = systemId || null;
  this._nodeValue = null;
};
inheritFrom(core.Node, core.Notation, {
  nodeType : NOTATION_NODE,
  get publicId() { return this._publicId;},
  get systemId() { return this._systemId;},
  get name() { return this._name || this._nodeName;},
  get attributes() { /* as per spec */ return null;},
  set nodeValue(unused) { /* intentionally left blank */ },
  get nodeValue() { return this._nodeValue;},
});


core.Entity = function Entity(document, name) {
  core.Node.call(this, document);
  this._name = name;
  this._nodeName = name;
  this._tagName = name;
  this._publicId = null;
  this._systemId = null;
  this._notationName = null;
  this._readonly = true;
};
inheritFrom(core.Node, core.Entity, {
  nodeType : ENTITY_NODE,
  get nodeValue() { return null;},
  set nodeValue(unused) {
    // readonly
    if (this._readonly === true) {
      // TODO: is this needed?
      // throw new DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }
    /* do nothing */
  },
  get name() { return this._name },
  get publicId() { return this._publicId;},
  get systemId() { return this._systemId;},

  set publicId(publicId) { this._publicId = publicId;},
  set systemId(systemId) { this._systemId = systemId;},
  set notationName(notationName) { this._notationName = notationName;},

  get notationName() { return this._notationName;},
  get attributes() { return null;},

});


core.EntityReference = function EntityReference(document, entity) {
  core.Node.call(this, document);
  this._entity = entity;
  this._nodeName = (entity) ? entity.name : null;
  this._readonly = true;
};
inheritFrom(core.Node, core.EntityReference, {
  nodeType : ENTITY_REFERENCE_NODE,
  get nodeValue() { return (this._entity) ? this._entity.nodeValue : null;},
  set nodeValue(unused) {
    // readonly
    if (this._readonly === true) {
      // TODO: is this needed?
      //throw new DOMException(NO_MODIFICATION_ALLOWED_ERR);
    }

    /* do nothing */
  },
  get attributes() { return null;},

  // Proxy to the entity
  get nodeName() { return this._entityName;},
  get firstChild() { return this._entity.firstChild || null;},
  get childNodes() { return this._entity.childNodes;},
  get lastChild() { return this._entity.lastChild || null;},

});

exports.dom = { "level1" : { "core" : core }};
