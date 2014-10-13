// w3c Load/Save functionality: http://www.w3.org/TR/2004/REC-DOM-Level-3-LS-20040407/

var core = require('./core').dom.level3.core;
var events = require('./events').dom.level3.events;
var createFrom = require('../utils').createFrom;

var ls = {};

// TODO: what is this?
//typedef dom::DOMConfiguration DOMConfiguration;

ls.LSException = function LSException(code) {
  this.code = code;
};

ls.LSException.prototype = {
  // LSExceptionCode
  PARSE_ERR                       : 81,
  SERIALIZE_ERR                   : 82
};

ls.DOMImplementationLS = function DOMImplementationLS() {

};

var DOMImplementationExtension = {

  // DOMImplementationLSMode
  MODE_SYNCHRONOUS  : 1,
  MODE_ASYNCHRONOUS : 2,

  // raises(dom::DOMException);
  createLSParser : function(/* int */ mode, /* string */ schemaType) {
    return new ls.LSParser(mode, schemaType);
  },

  createLSSerializer : function() {
    return new ls.LSSerializer();
  },

  createLSInput : function() {
    return new ls.LSInput();
  },

  createLSOutput : function() {
    return new ls.LSOutput();
  }
};

Object.keys(DOMImplementationExtension).forEach(function(k, v) {
  core.DOMImplementation.prototype[k] = DOMImplementationExtension[k];
});

ls.DOMImplementationLS.prototype = DOMImplementationExtension; 

core.Document.getFeature = function() {
  return DOMImplementationExtension;
};

ls.LSParser = function LSParser() {
  this._domConfig = new core.DOMConfiguration();
};
ls.LSParser.prototype = {
  get domConfig() { return this._domConfig; },
  get filter() { return this._filter || null; },
  set filter(value) { this._filter = value; },
  get async() { return this._async; },
  get busy() { return this._busy; },

  // raises(dom::DOMException, LSException);
  parse : function (/* LSInput */ input) {
    var doc = new core.Document();
    doc._inputEncoding = 'UTF-16';
    return doc;
  },

  // raises(dom::DOMException, LSException);
  parseURI : function(/* string */ uri) {
    return new core.Document();
  },

  // ACTION_TYPES
  ACTION_APPEND_AS_CHILDREN       : 1,
  ACTION_REPLACE_CHILDREN         : 2,
  ACTION_INSERT_BEFORE            : 3,
  ACTION_INSERT_AFTER             : 4,
  ACTION_REPLACE                  : 5,

  // @returns Node
  // @raises DOMException, LSException
  parseWithContext                : function(/* LSInput */ input, /* Node */ contextArg, /* int */ action) {
    return new core.Node();
  },

  abort                           : function() {
    // TODO: implement
  }
};

ls.LSInput = function LSInput() {};
ls.LSInput.prototype = {
  get characterStream() { return this._characterStream || null; },
  set characterStream(value) { this._characterStream = value; },
  get byteStream() { return this._byteStream || null; },
  set byteStream(value) { this._byteStream = value; },
  get stringData() { return this._stringData || null; },
  set stringData(value) { this._stringData = value; },
  get systemId() { return this._systemId || null; },
  set systemId(value) { this._systemId = value; },
  get publicId() { return this._publicId || null; },
  set publicId(value) { this._publicId = value; },
  get baseURI() { return this._baseURI || null; },
  set baseURI(value) { this._baseURI = value; },
  get encoding() { return this._encoding || null; },
  set encoding(value) { this._encoding = value; },
  get certifiedText() { return this._certifiedText || null; },
  set certifiedText(value) { this._certifiedText = value; },
};

ls.LSResourceResolver = function LSResourceResolver() {};

// @returns LSInput
ls.LSResourceResolver.prototype.resolveResource = function(type, namespaceURI, publicId, systemId, baseURI) {
  return new ls.LSInput();
};

ls.LSParserFilter = function LSParserFilter() {};
ls.LSParserFilter.prototype = {

  // Constants returned by startElement and acceptNode
  FILTER_ACCEPT                   : 1,
  FILTER_REJECT                   : 2,
  FILTER_SKIP                     : 3,
  FILTER_INTERRUPT                : 4,

  get whatToShow() { return this._whatToShow; },

  // @returns int
  startElement : function(/* Element */ elementArg) {
    return 0;
  },

  // @returns int
  acceptNode : function(/* Node */ nodeArg) {
    return nodeArg;
  }
};

ls.LSSerializer = function LSSerializer() {
  this._domConfig = new core.DOMConfiguration();
};
ls.LSSerializer.prototype = {
  get domConfig() { return this._domConfig; },
  get newLine() { return this._newLine || null; },
  set newLine(value) { this._newLine = value; },
  get filter() { return this._filter || null; },
  set filter(value) { this._filter = value; },

  // @returns boolean
  // @raises LSException
  write : function(/* Node */ nodeArg, /* LSOutput */ destination) {
   return true;
  },

  // @returns boolean
  // @raises LSException
  writeToURI : function(/* Node */ nodeArg, /* string */ uri) {
   return true;
  },

  // @returns string
  // @raises DOMException, LSException
  writeToString : function(/* Node */ nodeArg) {
    return "";
  }
};

ls.LSOutput = function LSOutput() {};
ls.LSOutput.prototype = {
  get characterStream() { return this._characterStream || null; },
  set characterStream(value) { this._characterStream = value; },
  get byteStream() { return this._byteStream || null; },
  set byteStream(value) { this._byteStream = value; },
  get systemId() { return this._systemId || null; },
  set systemId(value) { this._systemId = value; },
  get encoding() { return this._encoding || null; },
  set encoding(value) { this._encoding = value; },
};

ls.LSProgressEvent = function LSProgressEvent() {};
ls.LSProgressEvent.prototype = createFrom(events.Event, {
  constructor: ls.LSProgressEvent,
  get input() { return this._input; },
  get position() { return this._position; },
  get totalSize() { return this._totalSize; },
});

ls.LSLoadEvent = function LSLoadEvent() {};
ls.LSLoadEvent.prototype = createFrom(events.Event, {
  get newDocument() { return this._newDocument; },
  get input() { return this._input; },
});


// TODO: do traversal
ls.LSSerializerFilter = function LSSerializerFilter() {};
ls.LSSerializerFilter.prototype = {
  get whatToShow() { return this._whatToShow; },
};

// ls.LSSerializerFilter.prototype.__proto__ = level2.traversal.NodeFiler;

// Export
module.exports.dom = {
  level3 : {
    ls : ls 
  }
};

