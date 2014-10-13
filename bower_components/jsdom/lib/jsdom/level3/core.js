var events        = require("../level2/events"),
    core          = require("../level2/core").dom.level2.core,
    defineGetter  = require('../utils').defineGetter,
    defineSetter  = require('../utils').defineSetter,
    HtmlToDom     = require('../browser/htmltodom').HtmlToDom,
    domToHtml     = require('../browser/domtohtml').domToHtml,
    htmlencoding  = require('../browser/htmlencoding'),
    HTMLEncode    = htmlencoding.HTMLEncode,
    HTMLDecode    = htmlencoding.HTMLDecode;

// modify cloned instance for more info check: https://github.com/tmpvar/jsdom/issues/325
core = Object.create(core);

/*
  valuetype DOMString sequence<unsigned short>;
  typedef   unsigned long long DOMTimeStamp;
  typedef   any DOMUserData;
  typedef   Object DOMObject;

*/
// ExceptionCode
core.VALIDATION_ERR                 = 16;
core.TYPE_MISMATCH_ERR              = 17;

/*
  // Introduced in DOM Level 3:
  interface NameList {
    DOMString          getName(in unsigned long index);
    DOMString          getNamespaceURI(in unsigned long index);
    readonly attribute unsigned long   length;
    boolean            contains(in DOMString str);
    boolean            containsNS(in DOMString namespaceURI,
                                  in DOMString name);
  };

  // Introduced in DOM Level 3:
  interface DOMImplementationList {
    DOMImplementation  item(in unsigned long index);
    readonly attribute unsigned long   length;
  };

  // Introduced in DOM Level 3:
  interface DOMImplementationSource {
    DOMImplementation  getDOMImplementation(in DOMString features);
    DOMImplementationList getDOMImplementationList(in DOMString features);
  };
*/


core.DOMImplementation.prototype.getFeature = function(feature, version)  {

};

/*
  interface Node {
    // Modified in DOM Level 3:
    Node               insertBefore(in Node newChild,
                                    in Node refChild)
                                        raises(DOMException);
    // Modified in DOM Level 3:
    Node               replaceChild(in Node newChild,
                                    in Node oldChild)
                                        raises(DOMException);
    // Modified in DOM Level 3:
    Node               removeChild(in Node oldChild)
                                        raises(DOMException);
    // Modified in DOM Level 3:
    Node               appendChild(in Node newChild)
                                        raises(DOMException);
    boolean            hasChildNodes();
    Node               cloneNode(in boolean deep);
    // Modified in DOM Level 3:
    void               normalize();
    // Introduced in DOM Level 3:
    readonly attribute DOMString       baseURI;
*/

// Compare Document Position
var DOCUMENT_POSITION_DISCONNECTED = core.Node.prototype.DOCUMENT_POSITION_DISCONNECTED = 0x01;
var DOCUMENT_POSITION_PRECEDING    = core.Node.prototype.DOCUMENT_POSITION_PRECEDING    = 0x02;
var DOCUMENT_POSITION_FOLLOWING    = core.Node.prototype.DOCUMENT_POSITION_FOLLOWING    = 0x04;
var DOCUMENT_POSITION_CONTAINS     = core.Node.prototype.DOCUMENT_POSITION_CONTAINS     = 0x08;
var DOCUMENT_POSITION_CONTAINED_BY = core.Node.prototype.DOCUMENT_POSITION_CONTAINED_BY = 0x10;
var DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = core.Node.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
var DOCUMENT_TYPE_NODE = core.Node.prototype.DOCUMENT_TYPE_NODE;

core.Node.prototype.compareDocumentPosition = function compareDocumentPosition( otherNode ) {
  if( !(otherNode instanceof core.Node) ) {
    throw Error("Comparing position against non-Node values is not allowed")
  }
  var thisOwner, otherOwner;

  if( this.nodeType === this.DOCUMENT_NODE)
    thisOwner = this
  else
    thisOwner = this.ownerDocument

  if( otherNode.nodeType === this.DOCUMENT_NODE)
    otherOwner = otherNode
  else
    otherOwner = otherNode.ownerDocument

  if( this === otherNode ) return 0
  if( this === otherNode.ownerDocument ) return DOCUMENT_POSITION_FOLLOWING + DOCUMENT_POSITION_CONTAINED_BY
  if( this.ownerDocument === otherNode ) return DOCUMENT_POSITION_PRECEDING + DOCUMENT_POSITION_CONTAINS
  if( thisOwner !== otherOwner ) return DOCUMENT_POSITION_DISCONNECTED

  // Text nodes for attributes does not have a _parentNode. So we need to find them as attribute child.
  if( this.nodeType === this.ATTRIBUTE_NODE && this._childNodes && this._childNodes._toArray().indexOf(otherNode) !== -1)
    return DOCUMENT_POSITION_FOLLOWING + DOCUMENT_POSITION_CONTAINED_BY

  if( otherNode.nodeType === this.ATTRIBUTE_NODE && otherNode._childNodes && otherNode._childNodes._toArray().indexOf(this) !== -1)
    return DOCUMENT_POSITION_PRECEDING + DOCUMENT_POSITION_CONTAINS

  var point = this
  var parents = [ ]
  var previous = null
  while( point ) {
    if( point == otherNode ) return DOCUMENT_POSITION_PRECEDING + DOCUMENT_POSITION_CONTAINS
    parents.push( point )
    point = point._parentNode
  }
  point = otherNode
  previous = null
  while( point ) {
    if( point == this ) return DOCUMENT_POSITION_FOLLOWING + DOCUMENT_POSITION_CONTAINED_BY
    var location_index = parents.indexOf( point )
    if( location_index !== -1) {
     var smallest_common_ancestor = parents[ location_index ]
     var this_index = smallest_common_ancestor._childNodes._toArray().indexOf( parents[location_index - 1] )
     var other_index = smallest_common_ancestor._childNodes._toArray().indexOf( previous )
     if( this_index > other_index ) {
           return DOCUMENT_POSITION_PRECEDING
     }
     else {
       return DOCUMENT_POSITION_FOLLOWING
     }
    }
    previous = point
    point = point._parentNode
  }
  return DOCUMENT_POSITION_DISCONNECTED
};
/*
    // Introduced in DOM Level 3:
             attribute DOMString       textContent;
                                        // raises(DOMException) on setting
                                        // raises(DOMException) on retrieval
*/
core.Node.prototype.isSameNode = function(other) {
  return (other === this);
};

// @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-textContent
defineGetter(core.Node.prototype, 'textContent', function() {
  switch (this.nodeType) {
    case this.COMMENT_NODE:
    case this.CDATA_SECTION_NODE:
    case this.PROCESSING_INSTRUCTION_NODE:
    case this.TEXT_NODE:
      return this.nodeValue;

    case this.ATTRIBUTE_NODE:
    case this.DOCUMENT_FRAGMENT_NODE:
    case this.ELEMENT_NODE:
    case this.ENTITY_NODE:
    case this.ENTITY_REFERENCE_NODE:
      var out = '';
      for (var i = 0 ; i < this.childNodes.length ; ++i) {
        if (this.childNodes[i].nodeType !== this.COMMENT_NODE &&
            this.childNodes[i].nodeType !== this.PROCESSING_INSTRUCTION_NODE) {
          out += this.childNodes[i].textContent || '';
        }
      }
      return out;

    default:
      return null;
  }
});

defineSetter(core.Node.prototype, 'textContent', function(txt) {
  for (var i = this.childNodes.length; --i >=0;) {
    this.removeChild(this.childNodes.item(i));
  }
  if (txt !== "" && txt != null) {
    this.appendChild(this._ownerDocument.createTextNode(txt));
  }
  return txt;
});

/*
    // Introduced in DOM Level 3:
    DOMString          lookupPrefix(in DOMString namespaceURI);
    // Introduced in DOM Level 3:
    boolean            isDefaultNamespace(in DOMString namespaceURI);
    // Introduced in DOM Level 3:
    DOMString          lookupNamespaceURI(in DOMString prefix);
*/
// Introduced in DOM Level 3:
core.Node.prototype.isEqualNode = function(other) {
  var self = this;
  var diffValues = function() {
    for (var i=0;i<arguments.length;i++) {
      var k = arguments[i];
      if (self[k] != other[k]) return(true);
    }
    return(false);
  };
  var diffNamedNodeMaps = function(snnm, onnm) {
    if ((snnm == null) && (onnm == null)) return(false);
    if ((snnm == null) || (onnm == null)) return(true);
    if (snnm.length != onnm.length) return(true);
    var js = [];
    for (var j=0;j<onnm.length;j++) { js[j] = j }
    for (var i=0;i<snnm.length;i++) {
      var found=false;
      for (var j=0;j<js.length;j++) {
        if (snnm.item(i).isEqualNode(onnm.item(js[j]))) {
          found = true;
          // in order to be 100% accurate, we remove index values from consideration once they've matched
          js.splice(j,1);
          break;
        }
      }
      if (!found) return(true);
    }
    return(false);
  };
  var diffNodeLists = function(snl, onl) {
    if ((snl == null) && (onl == null)) return(false);
    if ((snl == null) || (onl == null)) return(true);
    if (snl.length != onl.length) return(true);
    for (var i=0;i<snl.length;i++) {
      if (!snl.item(i).isEqualNode(onl.item(i))) return(true);
    }
    return(false);
  };
  if (!other) return(false);
  if (this.isSameNode(other)) return(true);
  if (this.nodeType != other.nodeType) return(false);
  if (diffValues('nodeName', 'localName', 'namespaceURI', 'prefix', 'nodeValue')) return(false);
  if (diffNamedNodeMaps(this.attributes, other.attributes)) return(false);
  if (diffNodeLists(this.childNodes, other.childNodes)) return(false);
  if (this.nodeType == DOCUMENT_TYPE_NODE) {
    if (diffValues('publicId', 'systemId', 'internalSubset')) return(false);
    if (diffNamedNodeMaps(this.entities, other.entities)) return(false);
    if (diffNamedNodeMaps(this.notations, other.notations)) return(false);
  }
  return (true);
};
/*
    // Introduced in DOM Level 3:
    DOMObject          getFeature(in DOMString feature,
                                  in DOMString version);
*/
// Introduced in DOM Level 3:
core.Node.prototype.setUserData = function(key, data, handler) {
  var r = this[key] || null;
  this[key] = data;
  return(r);
};

// Introduced in DOM Level 3:
core.Node.prototype.getUserData = function(key) {
  var r = this[key] || null;
  return(r);
};
/*
  interface NodeList {
    Node               item(in unsigned long index);
    readonly attribute unsigned long   length;
  };

  interface NamedNodeMap {
    Node               getNamedItem(in DOMString name);
    Node               setNamedItem(in Node arg)
                                        raises(DOMException);
    Node               removeNamedItem(in DOMString name)
                                        raises(DOMException);
    Node               item(in unsigned long index);
    readonly attribute unsigned long   length;
    // Introduced in DOM Level 2:
    Node               getNamedItemNS(in DOMString namespaceURI,
                                      in DOMString localName)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    Node               setNamedItemNS(in Node arg)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    Node               removeNamedItemNS(in DOMString namespaceURI,
                                         in DOMString localName)
                                        raises(DOMException);
  };

  interface CharacterData : Node {
             attribute DOMString       data;
                                        // raises(DOMException) on setting
                                        // raises(DOMException) on retrieval

    readonly attribute unsigned long   length;
    DOMString          substringData(in unsigned long offset,
                                     in unsigned long count)
                                        raises(DOMException);
    void               appendData(in DOMString arg)
                                        raises(DOMException);
    void               insertData(in unsigned long offset,
                                  in DOMString arg)
                                        raises(DOMException);
    void               deleteData(in unsigned long offset,
                                  in unsigned long count)
                                        raises(DOMException);
    void               replaceData(in unsigned long offset,
                                   in unsigned long count,
                                   in DOMString arg)
                                        raises(DOMException);
  };

  interface Attr : Node {
    readonly attribute DOMString       name;
    readonly attribute boolean         specified;
             attribute DOMString       value;
                                        // raises(DOMException) on setting

    // Introduced in DOM Level 2:
    readonly attribute Element         ownerElement;
    // Introduced in DOM Level 3:
    readonly attribute TypeInfo        schemaTypeInfo;

*/
    // Introduced in DOM Level 3:
defineGetter(core.Attr.prototype, 'isId', function() {
  return (this.name.toLowerCase() === 'id');
});
/*
  };

  interface Element : Node {
    readonly attribute DOMString       tagName;
    DOMString          getAttribute(in DOMString name);
    void               setAttribute(in DOMString name,
                                    in DOMString value)
                                        raises(DOMException);
    void               removeAttribute(in DOMString name)
                                        raises(DOMException);
    Attr               getAttributeNode(in DOMString name);
    Attr               setAttributeNode(in Attr newAttr)
                                        raises(DOMException);
    Attr               removeAttributeNode(in Attr oldAttr)
                                        raises(DOMException);
    NodeList           getElementsByTagName(in DOMString name);
    // Introduced in DOM Level 2:
    DOMString          getAttributeNS(in DOMString namespaceURI,
                                      in DOMString localName)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    void               setAttributeNS(in DOMString namespaceURI,
                                      in DOMString qualifiedName,
                                      in DOMString value)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    void               removeAttributeNS(in DOMString namespaceURI,
                                         in DOMString localName)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    Attr               getAttributeNodeNS(in DOMString namespaceURI,
                                          in DOMString localName)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    Attr               setAttributeNodeNS(in Attr newAttr)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    NodeList           getElementsByTagNameNS(in DOMString namespaceURI,
                                              in DOMString localName)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    boolean            hasAttribute(in DOMString name);
    // Introduced in DOM Level 2:
    boolean            hasAttributeNS(in DOMString namespaceURI,
                                      in DOMString localName)
                                        raises(DOMException);
    // Introduced in DOM Level 3:
    readonly attribute TypeInfo        schemaTypeInfo;
    // Introduced in DOM Level 3:
    void               setIdAttribute(in DOMString name,
                                      in boolean isId)
                                        raises(DOMException);
    // Introduced in DOM Level 3:
    void               setIdAttributeNS(in DOMString namespaceURI,
                                        in DOMString localName,
                                        in boolean isId)
                                        raises(DOMException);
    // Introduced in DOM Level 3:
    void               setIdAttributeNode(in Attr idAttr,
                                          in boolean isId)
                                        raises(DOMException);
  };

  interface Text : CharacterData {
    Text               splitText(in unsigned long offset)
                                        raises(DOMException);
    // Introduced in DOM Level 3:
    readonly attribute boolean         isElementContentWhitespace;
    // Introduced in DOM Level 3:
    readonly attribute DOMString       wholeText;
    // Introduced in DOM Level 3:
    Text               replaceWholeText(in DOMString content)
                                        raises(DOMException);
  };

  interface Comment : CharacterData {
  };

  // Introduced in DOM Level 3:
  interface TypeInfo {
    readonly attribute DOMString       typeName;
    readonly attribute DOMString       typeNamespace;

    // DerivationMethods
    const unsigned long       DERIVATION_RESTRICTION         = 0x00000001;
    const unsigned long       DERIVATION_EXTENSION           = 0x00000002;
    const unsigned long       DERIVATION_UNION               = 0x00000004;
    const unsigned long       DERIVATION_LIST                = 0x00000008;

    boolean            isDerivedFrom(in DOMString typeNamespaceArg,
                                     in DOMString typeNameArg,
                                     in unsigned long derivationMethod);
  };
*/
// Introduced in DOM Level 3:
core.UserDataHandler = function() {};
core.UserDataHandler.prototype.NODE_CLONED   = 1;
core.UserDataHandler.prototype.NODE_IMPORTED = 2;
core.UserDataHandler.prototype.NODE_DELETED  = 3;
core.UserDataHandler.prototype.NODE_RENAMED  = 4;
core.UserDataHandler.prototype.NODE_ADOPTED  = 5;
core.UserDataHandler.prototype.handle = function(operation, key, data, src, dst) {};

// Introduced in DOM Level 3:
core.DOMError = function(severity, message, type, relatedException, relatedData, location) {
  this._severity         = severity;
  this._message          = message;
  this._type             = type;
  this._relatedException = relatedException;
  this._relatedData      = relatedData;
  this._location         = location;
};
core.DOMError.prototype = {};
core.DOMError.prototype.SEVERITY_WARNING     = 1;
core.DOMError.prototype.SEVERITY_ERROR       = 2;
core.DOMError.prototype.SEVERITY_FATAL_ERROR = 3;
defineGetter(core.DOMError.prototype, 'severity', function() {
  return this._severity;
});
defineGetter(core.DOMError.prototype, 'message', function() {
  return this._message;
});
defineGetter(core.DOMError.prototype, 'type', function() {
  return this._type;
});
defineGetter(core.DOMError.prototype, 'relatedException', function() {
  return this._relatedException;
});
defineGetter(core.DOMError.prototype, 'relatedData', function() {
  return this._relatedData;
});
defineGetter(core.DOMError.prototype, 'location', function() {
  return this._location;
});

/*
  // Introduced in DOM Level 3:
  interface DOMErrorHandler {
    boolean            handleError(in DOMError error);
  };

  // Introduced in DOM Level 3:
  interface DOMLocator {
    readonly attribute long            lineNumber;
    readonly attribute long            columnNumber;
    readonly attribute long            byteOffset;
    readonly attribute long            utf16Offset;
    readonly attribute Node            relatedNode;
    readonly attribute DOMString       uri;
  };
*/

// Introduced in DOM Level 3:
core.DOMConfiguration = function(){
  var possibleParameterNames = {
    'canonical-form': [false, true], // extra rules for true
    'cdata-sections': [true, false],
    'check-character-normalization': [false, true],
    'comments': [true, false],
    'datatype-normalization': [false, true],
    'element-content-whitespace': [true, false],
    'entities': [true, false],
    // 'error-handler': [],
    'infoset': [undefined, true, false], // extra rules for true
    'namespaces': [true, false],
    'namespace-declarations': [true, false], // only checked if namespaces is true
    'normalize-characters': [false, true],
    // 'schema-location': [],
    // 'schema-type': [],
    'split-cdata-sections': [true, false],
    'validate': [false, true],
    'validate-if-schema': [false, true],
    'well-formed': [true, false]
  }
};

core.DOMConfiguration.prototype = {
  setParameter: function(name, value) {},
  getParameter: function(name) {},
  canSetParameter: function(name, value) {},
  parameterNames: function() {}
};

//core.Document.prototype._domConfig = new core.DOMConfiguration();
defineGetter(core.Document.prototype, 'domConfig', function() {
  return this._domConfig || new core.DOMConfiguration();;
});

// Introduced in DOM Level 3:
core.DOMStringList = function() {};

core.DOMStringList.prototype = {
  item: function() {},
  length: function() {},
  contains: function() {}
};


/*
  interface CDATASection : Text {
  };

  interface DocumentType : Node {
    readonly attribute DOMString       name;
    readonly attribute NamedNodeMap    entities;
    readonly attribute NamedNodeMap    notations;
    // Introduced in DOM Level 2:
    readonly attribute DOMString       publicId;
    // Introduced in DOM Level 2:
    readonly attribute DOMString       systemId;
    // Introduced in DOM Level 2:
    readonly attribute DOMString       internalSubset;
  };

  interface Notation : Node {
    readonly attribute DOMString       publicId;
    readonly attribute DOMString       systemId;
  };

  interface Entity : Node {
    readonly attribute DOMString       publicId;
    readonly attribute DOMString       systemId;
    readonly attribute DOMString       notationName;
    // Introduced in DOM Level 3:
    readonly attribute DOMString       inputEncoding;
    // Introduced in DOM Level 3:
    readonly attribute DOMString       xmlEncoding;
    // Introduced in DOM Level 3:
    readonly attribute DOMString       xmlVersion;
  };

  interface EntityReference : Node {
  };

  interface ProcessingInstruction : Node {
    readonly attribute DOMString       target;
             attribute DOMString       data;
                                        // raises(DOMException) on setting

  };

  interface DocumentFragment : Node {
  };

  interface Document : Node {
    // Modified in DOM Level 3:
    readonly attribute DocumentType    doctype;
    readonly attribute DOMImplementation implementation;
    readonly attribute Element         documentElement;
    Element            createElement(in DOMString tagName)
                                        raises(DOMException);
    DocumentFragment   createDocumentFragment();
    Text               createTextNode(in DOMString data);
    Comment            createComment(in DOMString data);
    CDATASection       createCDATASection(in DOMString data)
                                        raises(DOMException);
    ProcessingInstruction createProcessingInstruction(in DOMString target,
                                                      in DOMString data)
                                        raises(DOMException);
    Attr               createAttribute(in DOMString name)
                                        raises(DOMException);
    EntityReference    createEntityReference(in DOMString name)
                                        raises(DOMException);
    NodeList           getElementsByTagName(in DOMString tagname);
    // Introduced in DOM Level 2:
    Node               importNode(in Node importedNode,
                                  in boolean deep)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    Element            createElementNS(in DOMString namespaceURI,
                                       in DOMString qualifiedName)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    Attr               createAttributeNS(in DOMString namespaceURI,
                                         in DOMString qualifiedName)
                                        raises(DOMException);
    // Introduced in DOM Level 2:
    NodeList           getElementsByTagNameNS(in DOMString namespaceURI,
                                              in DOMString localName);
    // Introduced in DOM Level 2:
    Element            getElementById(in DOMString elementId);
*/

// Introduced in DOM Level 3:
core.Document.prototype._inputEncoding = null;
defineGetter(core.Document.prototype, 'inputEncoding', function() {
  return this._inputEncoding;
});
/*
    // Introduced in DOM Level 3:
    readonly attribute DOMString       xmlEncoding;
    // Introduced in DOM Level 3:
             attribute boolean         xmlStandalone;
                                        // raises(DOMException) on setting

    // Introduced in DOM Level 3:
             attribute DOMString       xmlVersion;
                                        // raises(DOMException) on setting

    // Introduced in DOM Level 3:
             attribute boolean         strictErrorChecking;
    // Introduced in DOM Level 3:
             attribute DOMString       documentURI;
    // Introduced in DOM Level 3:
    Node               adoptNode(in Node source)
                                        raises(DOMException);
    // Introduced in DOM Level 3:
    readonly attribute DOMConfiguration domConfig;
    // Introduced in DOM Level 3:
    void               normalizeDocument();
    // Introduced in DOM Level 3:
    Node               renameNode(in Node n,
                                  in DOMString namespaceURI,
                                  in DOMString qualifiedName)
                                        raises(DOMException);
  };
};

#endif // _DOM_IDL_
*/

exports.dom = {
  level3 : {
    core: core
  }
};
