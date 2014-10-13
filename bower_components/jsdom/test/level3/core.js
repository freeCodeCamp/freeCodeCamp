var barfoo = require("./core/files/barfoo.xml");
// var barfoo_base = require("./core/files/barfoo_base.xml");
var barfoo_nodefaultns = require("./core/files/barfoo_nodefaultns.xml");
var barfoo_standalone_no = require("./core/files/barfoo_standalone_no.xml");
var barfoo_standalone_yes = require("./core/files/barfoo_standalone_yes.xml");
var barfoo_utf16 = require("./core/files/barfoo_utf16.xml");
var barfoo_utf8 = require("./core/files/barfoo_utf8.xml");
// var canonicalform01 = require("./core/files/canonicalform01.xml");
// var canonicalform03 = require("./core/files/canonicalform03.xml");
var datatype_normalization = require("./core/files/datatype_normalization.xml");
var datatype_normalization2 = require("./core/files/datatype_normalization2.xml");
var external_barfoo = require("./core/files/external_barfoo.xml");
var hc_nodtdstaff = require("./core/files/hc_nodtdstaff.xml");
var hc_staff = require("./core/files/hc_staff.xml");
var typeinfo = require("./core/files/typeinfo.xml");
var DOMErrorMonitor = function() {
  this.errors = new Array();
}
DOMErrorMonitor.prototype.handleError = function(e) {
  this.errors.push(new DOMErrorImpl(e));
}
DOMErrorMonitor.prototype.assertLowerSeverity = function(id, severity) {
  this.errors.forEach(function(e){
    if (e.severity >= severity){
      // can this ever pass? if x >= y, then ALWAYS x > (y-2)
      test.equal(e.severity, severity-1, id);
    }
  });
}
var core = require("../../lib/jsdom/level3/core").dom.level3.core;
var getImplementation = function() {
  var doc = new core.Document();
  return doc.implementation;
};

exports.tests = {
  /**
   *
   Call getSchemaTypeInfo on title attribute for the first acronym element.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  attrgetschematypeinfo01: function (test) {
    var doc = hc_staff.hc_staff();
    var typeInfo = doc.getElementsByTagName("acronym").item(0).getAttributeNode("title").schemaTypeInfo;
    test.notEqual(typeInfo, undefined, 'schemaTypeInfo is not yet implemented!');
    // test.notEqual(typeInfo, null, 'typeInfoNotNull');
    // test.equal(typeInfo.typeName, "CDATA", 'nameIsCDATA');
    // test.equal(typeInfo.typeNamespace, "http://www.w3.org/TR/REC-xml", 'nsIsXML');
    test.done()
  },

  /**
   *
   Call getSchemaTypeInfo on id attribute for the third acronym element.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  attrgetschematypeinfo02: function (test) {
    var doc = hc_staff.hc_staff();
    var typeInfo = doc.getElementsByTagName("acronym").item(3).getAttributeNode("id").schemaTypeInfo;
    test.notEqual(typeInfo, undefined, 'schemaTypeInfo is not yet implemented!');
    // test.notEqual(typeInfo, null, 'typeInfoNotNull');
    // test.equal(typeInfo.typeName, "ID", 'nameIsID');
    // test.equal(typeInfo.typeNamespace, "http://www.w3.org/TR/REC-xml", 'nsIsXML');
    test.done()
  },

  /**
   *
   Call getSchemaTypeInfo on title attribute for the first acronym element.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  // NOTE: this appears to be testing the same schemaTypeInfo as attrgetschematypeinfo01, but for different values... can both tests be valid?
  attrgetschematypeinfo03: function (test) {
    var doc = hc_staff.hc_staff();
    var typeInfo = doc.getElementsByTagName("acronym").item(0).getAttributeNode("title").schemaTypeInfo;
    test.notEqual(typeInfo, undefined, 'schemaTypeInfo is not yet implemented!');
    // test.notEqual(typeInfo, null, 'typeInfoNotNull');
    // test.equal(typeInfo.typeName, "string", 'nameIsString');
    // test.equal(typeInfo.typeNamespace, "http://www.w3.org/2001/XMLSchema", 'nsIsXML');
    test.done()
  },

  /**
   *
   Call getSchemaTypeInfo on id attribute for the third acronym element.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  // NOTE: this appears to be testing the same schemaTypeInfo as attrgetschematypeinfo02, but for different values... can both tests be valid?
  attrgetschematypeinfo04: function (test) {
    var doc = hc_staff.hc_staff();
    var typeInfo = doc.getElementsByTagName("acronym").item(3).getAttributeNode("id").schemaTypeInfo;
    test.notEqual(typeInfo, undefined, 'schemaTypeInfo is not yet implemented!');
    // test.notEqual(typeInfo, null, 'typeInfoNotNull');
    // test.equal(typeInfo.typeName, "ID", 'nameIsID');
    // test.equal(typeInfo.typeNamespace, "http://www.w3.org/2001/XMLSchema", 'nsIsXmlSchema');
    test.done()
  },

  /**
   *
   Call getSchemaTypeInfo on class attribute for the third acronym element.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  attrgetschematypeinfo05: function (test) {
    var doc = hc_staff.hc_staff();
    var typeInfo = doc.getElementsByTagName("acronym").item(2).getAttributeNode("class").schemaTypeInfo;
    test.notEqual(typeInfo, undefined, 'schemaTypeInfo is not yet implemented!');
    // test.notEqual(typeInfo, null, 'typeInfoNotNull');
    // test.equal(typeInfo.typeName, "classType", 'nameIsClassType');
    // test.equal(typeInfo.typeNamespace, "http://www.w3.org/1999/xhtml", 'nsIsXHTML');
    test.done()
  },

  /**
   *
   Attr.schemaTypeInfo should return null if not validating or schema validating.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  attrgetschematypeinfo06: function (test) {
    var doc = hc_nodtdstaff.hc_nodtdstaff();
    var typeInfo = doc.getElementsByTagName("acronym").item(0).getAttributeNode("title").schemaTypeInfo;
    test.notEqual(typeInfo, undefined, 'schemaTypeInfo is not yet implemented!');
    // test.notEqual(typeInfo, null, 'typeInfoNotNull');
    // test.equal(typeInfo.typeName, null, 'typeName');
    // test.equal(typeInfo.typeNamespace, null, 'typeNS');
    test.done()
  },

  /**
   *
   The getSchemaTypeInfo method retrieves the type information associated with this attribute.

   Load a valid document with an XML Schema.

   Invoke getSchemaTypeInfo method on an attribute having [type definition] property.  Expose {name} and {target namespace}
   properties of the [type definition] property.  Verity that the typeName and typeNamespace of the title attribute's
   schemaTypeInfo are correct. getSchemaTypeInfo on the 'id' attribute of the fourth 'acronym' element

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-schemaTypeInfo
   */
  attrgetschematypeinfo07: function (test) {
    var doc = hc_staff.hc_staff();
    var typeInfo = doc.getElementsByTagName("acronym").item(3).getAttributeNode("id").schemaTypeInfo;
    test.notEqual(typeInfo, undefined, 'schemaTypeInfo is not yet implemented!');
    // test.notEqual(typeInfo, null, 'typeInfoNotNull');
    // test.equal(typeInfo.typeName, "ID", 'attrgetschematypeinfo07_typeName');
    // test.equal(typeInfo.typeNamespace, "http://www.w3.org/2001/XMLSchema", 'attrgetschematypeinfo07_typeNamespace');
    test.done()
  },

  /**
   *
   The getSchemaTypeInfo method retrieves the type information associated with this attribute.

   Load a valid document with an XML Schema.
   Invoke getSchemaTypeInfo method on an attribute having [type definition] property.  Expose {name} and {target namespace}
   properties of the [type definition] property.  Verity that the typeName and typeNamespace of the 'title' attribute's (of first 'acronym' element)
   schemaTypeInfo are correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-schemaTypeInfo
   */
  attrgetschematypeinfo08: function (test) {
    var doc = hc_staff.hc_staff();
    var typeInfo = doc.getElementsByTagName("acronym").item(0).getAttributeNode("title").schemaTypeInfo;
    test.notEqual(typeInfo, undefined, 'schemaTypeInfo is not yet implemented!');
    // test.equal(typeInfo.typeName, "string", 'attrgetschematypeinfo08_typeName');
    // test.equal(typeInfo.typeNamespace, "http://www.w3.org/2001/XMLSchema", 'attrgetschematypeinfo08_typeNamespace');
    test.done()
  },

  /**
   *
   Retrieve the third acronyms element's class attribute, whose type is not ID.
   Invoke isID on the class attribute, this should return false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-isId
   */
  attrisid01: function (test) {
    var doc = hc_staff.hc_staff();
    var attr = doc.getElementsByTagName("acronym").item(2).getAttributeNode("class");
    test.equal(attr.isId, false, 'AttrIsIDFalse01');
    test.done()
  },

  /**
   *
   Invoke setIdAttribute on the third acronym element's new attribute and set
   isID=true.  Verify by calling isID on the new attribute and check if the
   value returned is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-isId
   */
  attrisid02: function (test) {
    test.ok(false, 'this test depends on setIdAttributeNS, which has not been implemented yet')
    // var xmlNS = "http://www.w3.org/XML/1998/namespace";
    // var doc = hc_staff.hc_staff();
    // var acronymElem = doc.getElementsByTagName("acronym").item(2);
    // acronymElem.setAttributeNS(xmlNS, "xml:lang", "FR-fr");
    // acronymElem.setIdAttributeNS(xmlNS,"lang", true);
    // var attr = acronymElem.getAttributeNodeNS(xmlNS, "lang");
    // test.ok(attr.isId, 'AttrIsIDTrue02');
    test.done()
  },

  /**
   *
   Invoke setIdAttribute(false) on a newly created attribute and then check Attr.isID.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-isId
   */
  attrisid03: function (test) {
    test.ok(false, 'this test depends on setIdAttributeNS, which has not been implemented yet')
    // var xmlNS = "http://www.w3.org/XML/1998/namespace";
    // var doc = hc_staff.hc_staff();
    // var acronymElem = doc.getElementsByTagName("acronym").item(2);
    // acronymElem.setAttributeNS(xmlNS, "xml:lang", "FR-fr");
    // acronymElem.setIdAttributeNS(xmlNS, "lang", false);
    // var attr = acronymElem.getAttributeNodeNS(xmlNS,"lang");
    // test.equal(attr.isId, false, 'AttrIsIDFalse03');
    test.done()
  },

  /**
   *
   Attr.isID should return true for the id attribute on the fourth acronym node
   since its type is ID.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-isId
   */
  attrisid04: function (test) {
    var doc = hc_staff.hc_staff();
    var attr = doc.getElementsByTagName("acronym").item(3).getAttributeNode("id");
    test.ok(attr.isId, 'AttrIsIDTrue04');
    test.done()
  },

  /**
   *
   Retrieve the fourth acronym element's id attribute, whose type is ID.
   Deep clone the element node and append it as a sibling of the acronym node.
   We now have two id attributes of type ID with identical values.
   Invoke isID on the class attribute, should this return true???

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-isId
   */
  attrisid05: function (test) {
    var doc = hc_staff.hc_staff();
    var acronymElem = doc.getElementsByTagName("acronym").item(3);
    acronymElem.parentNode.appendChild(acronymElem.cloneNode(true));
    var attr = acronymElem.getAttributeNode("id");
    test.ok(attr.isId, 'AttrIsIDTrue05');
    test.done()
  },

  /**
   *
   Invoke isId on a new Attr node.  Check if the value returned is false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-isId
   */
  attrisid06: function (test) {
    var doc = hc_staff.hc_staff();
    var attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:lang");
    test.equal(attr.isId, false, 'AttrIsIDFalse06');
    test.done()
  },

  /**
   *
   The method isId returns whether this attribute is known to be of type ID or not.

   Add a new attribute of type ID to the third acronym element node of this document. Verify that the method
   isId returns true. The use of Element.setIdAttributeNS() makes 'isId' a user-determined ID attribute.
   Import the newly created attribute node into this document.
   Since user data assocated to the imported node is not carried over, verify that the method isId
   returns false on the imported attribute node.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Attr-isId
   */
  attrisid07: function (test) {
    test.ok(false, 'this test depends on setIdAttributeNS, which has not been implemented yet')
    // var doc = hc_staff.hc_staff();
    // var acronymElem = doc.getElementsByTagNameNS("*","acronym").item(2);
    // acronymElem.setAttributeNS("http://www.w3.org/DOM","dom3:newAttr", "null");
    // acronymElem.setIdAttributeNS("http://www.w3.org/DOM","newAttr", true);
    // var attr = acronymElem.getAttributeNodeNS("http://www.w3.org/DOM", "newAttr");
    // test.ok(attr.isId, 'AttrIsIDTrue07_1');
    // var attrImported = doc.importNode(attr, false);
    // test.equal(attrImported.isId, false, 'AttrIsID07_isFalseforImportedNode');
    test.done()
  },

  /**
   *
   Normalize document with 'canonical-form' set to true, check that
   entity references are expanded and unused entity declaration are maintained.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform01: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var entRef;
    var childValue;
    var entities;
    var ent2;
    var doctype;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      entRef = doc.createEntityReference("ent1");
      child = pElem.appendChild(entRef);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      child = pElem.lastChild;

      test.notEqual(child, null, 'lastChildNotNull');
      childName = child.nodeName;

      test.equal(childName, "#text", 'firstChildName');
      childValue = child.nodeValue;

      test.equal(childValue, "barfoo", 'firstChildValue');

    }

    test.done()
  },

  /**
   *
   Normalize document with normalize-characters set to false, check that
   characters are not normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  canonicalform02: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;
    var canSet;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = doc.createTextNode("suçon");
      retval = pElem.appendChild(text);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = pElem.firstChild;

      textValue = text.nodeValue;

      test.equal(textValue, "barsucon", 'noCharNormalization');

    }

    test.done()
  },

  /**
   *
   Normalize a document with the 'canonical-form' parameter set to true and
   check that a CDATASection has been eliminated.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform03: function (test) {
    var success;
    var doc;
    var elemList;
    var elemName;
    var cdata;
    var text;
    var nodeName;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var canSet;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elemName = elemList.item(1);
    cdata = elemName.lastChild;

    nodeName = cdata.nodeName;

    test.equal(nodeName, "#cdata-section", 'documentnormalizedocument02');
    domConfig = doc.domConfig;

    domConfig.setParameter("error-handler", errorMonitor.handleError);
    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalization2Error", 2);
      elemList = doc.getElementsByTagName("strong");
      elemName = elemList.item(1);
      text = elemName.lastChild;

      nodeName = text.nodeName;

      test.equal(nodeName, "#text", 'documentnormalizedocument02_false');

    }

    test.done()
  },

  /**
   *
   Normalize document with canonical-form set to true, check that
   namespace declaration attributes are maintained.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform04: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var xmlnsAttr;
    var canSet;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      domConfig.setParameter("canonical-form", true);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      docElem = doc.documentElement;

      xmlnsAttr = docElem.getAttributeNode("xmlns");
      test.notEqual(xmlnsAttr, null, 'xmlnsAttrNotNull');

    }

    test.done()
  },

  /**
   *
   Add a L1 element to a L2 namespace aware document and perform namespace normalization.  Should result
   in an error.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/namespaces-algorithms#normalizeDocumentAlgo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform05: function (test) {
    var success;
    var doc;
    var elem;
    var domConfig;
    var pList;
    var newChild;
    var retval;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var errorCount = 0;
    var severity;
    var problemNode;
    var location;
    var lineNumber;
    var columnNumber;
    var byteOffset;
    var utf16Offset;
    var uri;
    var type;
    var message;
    var relatedException;
    var relatedData;
    var length;
    var canSet;

    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    newChild = doc.createElement("br");
    retval = elem.appendChild(newChild);
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errors = errorMonitor.allErrors;
      for(var indexN100C4 = 0;indexN100C4 < errors.length; indexN100C4++) {
        error = errors[indexN100C4];
        severity = error.severity;


	if(
	  (2 == severity)
	) {
	  location = error.location;

          problemNode = location.relatedNode;

          test.equal(problemNode, newChild, 'relatedNodeIsL1Node');
          lineNumber = location.lineNumber;

          test.equal(lineNumber, -1, 'lineNumber');
          columnNumber = location.columnNumber;

          test.equal(columnNumber, -1, 'columnNumber');
          byteOffset = location.byteOffset;

          test.equal(byteOffset, -1, 'byteOffset');
          utf16Offset = location.utf16Offset;

          test.equal(utf16Offset, -1, 'utf16Offset');
          uri = location.uri;

          test.equal(uri, null, 'uri');
          message = error.message;

          length = message.length;
      	  test.ok((length > 0), 'messageNotEmpty');
          type = error.type;

          relatedData = error.relatedData;

          relatedException = error.relatedException;

          errorCount += 1;

	}

	else {
	  test.equal(severity, 1, 'anyOthersShouldBeWarnings');

	}

      }
      test.equal(errorCount, 1, 'oneError');

    }

    test.done()
  },

  /**
   *
   Create a document with an XML 1.1 valid but XML 1.0 invalid element and
   normalize document with canonical-form set to true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform06: function (test) {
    var success;
    var domImpl;
    var nullString = null;

    var nullDoctype = null;

    var doc;
    var elem;
    var retval;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var severity;
    var type;
    var locator;
    var relatedNode;
    var canSet;
    domImpl = getImplementation();
    doc = domImpl.createDocument(nullString,nullString,nullDoctype);

    {
      success = false;
      try {
        elem = doc.createElementNS("http://www.example.org/domts/wellformed01","LegalNameࢎ");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'xml10InvalidName');
    }

    try {
      doc.xmlVersion = "1.1";


    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    elem = doc.createElementNS("http://www.example.org/domts/wellformed01","LegalNameࢎ");
    retval = doc.appendChild(elem);
    doc.xmlVersion = "1.0";

    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errors = errorMonitor.allErrors;
      for(var indexN100B7 = 0;indexN100B7 < errors.length; indexN100B7++) {
        error = errors[indexN100B7];
        severity = error.severity;

        test.equal(severity, 2, 'severity');
        type = error.type;

        test.equal(type, "wf-invalid-character-in-node-name", 'type');
        locator = error.location;

        relatedNode = locator.relatedNode;

        test.equal(relatedNode, elem, 'relatedNode');

      }
      test.equal(errors.length, 1, 'oneError');

    }

    test.done()
  },

  /**
   *
   Normalize document with canonical-form set to true and validation set to true, check that
   whitespace in element content is preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform07: function (test) {
    var success;
    var doc;
    var bodyList;
    var body;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var text;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);

      if(
	(getImplementationAttribute("ignoringElementContentWhitespace") == true)
      ) {
	bodyList = doc.getElementsByTagName("body");
        body = bodyList.item(0);
        child = body.firstChild;

        text = doc.createTextNode("    ");
        child = body.insertBefore(text,child);

      }
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      bodyList = doc.getElementsByTagName("body");
      body = bodyList.item(0);
      child = body.firstChild;

      test.notEqual(child, null, 'firstChildNotNull');
      childName = child.nodeName;

      test.equal(childName, "#text", 'firstChild');
      child = child.nextSibling;

      test.notEqual(child, null, 'secondChildNotNull');
      childName = child.nodeName;

      test.equal(childName, "p", 'secondChild');

    }

    test.done()
  },

  /**
   *
   Normalize document based on section 3.1 with canonical-form set to true and check normalized document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform08: function (test) {
    var success;
    var doc;
    var bodyList;
    var body;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var node;
    var nodeName;
    var nodeValue;
    var nodeType;
    var length;
    var text;

    doc = canonicalform01.canonicalform01();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      node = doc.firstChild;

      nodeType = node.nodeType;

      test.equal(nodeType, 7, 'PIisFirstChild');
      nodeValue = node.data;

      length = nodeValue.length;
      test.equal(length, 36, 'piDataLength');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 3, 'TextisSecondChild');
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.equal(length, 1, 'secondChildLength');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 1, 'ElementisThirdChild');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 3, 'TextisFourthChild');
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.equal(length, 1, 'fourthChildLength');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 7, 'PIisFifthChild');
      nodeValue = node.data;

      test.equal(nodeValue, "", 'trailingPIData');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 3, 'TextisSixthChild');
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.equal(length, 1, 'sixthChildLength');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 8, 'CommentisSeventhChild');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 3, 'TextisEighthChild');
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.equal(length, 1, 'eighthChildLength');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 8, 'CommentisNinthChild');
      node = node.nextSibling;

      test.equal(node, null, 'TenthIsNull');

    }

    test.done()
  },

  /**
   *
   Normalize document based on section 3.1 with canonical-form set to true
   and comments to false and check normalized document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform09: function (test) {
    var success;
    var doc;
    var bodyList;
    var body;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var node;
    var nodeName;
    var nodeValue;
    var nodeType;
    var length;
    var text;

    doc = canonicalform01.canonicalform01();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("comments", false);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      node = doc.firstChild;

      nodeType = node.nodeType;

      test.equal(nodeType, 7, 'PIisFirstChild');
      nodeValue = node.data;

      length = nodeValue.length;
      test.equal(length, 36, 'piDataLength');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 3, 'TextisSecondChild');
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.equal(length, 1, 'secondChildLength');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 1, 'ElementisThirdChild');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 3, 'TextisFourthChild');
      nodeValue = node.nodeValue;

      length = nodeValue.length;
      test.equal(length, 1, 'fourthChildLength');
      node = node.nextSibling;

      nodeType = node.nodeType;

      test.equal(nodeType, 7, 'PIisFifthChild');
      nodeValue = node.data;

      test.equal(nodeValue, "", 'trailingPIData');
      node = node.nextSibling;

      test.equal(node, null, 'SixthIsNull');

    }

    test.done()
  },

  /**
   *
   Check elimination of unnecessary namespace prefixes when
   normalized with canonical-form = true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform10: function (test) {
    var success;
    var doc;
    var divList;
    var div;
    var domConfig;
    var canSet;
    errorMonitor = new DOMErrorMonitor();

    var node;

    doc = canonicalform03.canonicalform03();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      domConfig.setParameter("canonical-form", true);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      divList = doc.getElementsByTagName("div");
      div = divList.item(5);
      node = div.getAttributeNode("xmlns");
      test.notEqual(node, null, 'xmlnsPresent');
      node = div.getAttributeNode("xmlns:a");
      test.equal(node, null, 'xmlnsANotPresent');

    }

    test.done()
  },

  /**
   *
   Check that default attributes are made explicitly specified.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform11: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var domConfig;
    var canSet;
    errorMonitor = new DOMErrorMonitor();

    var attr;
    var attrValue;
    var attrSpecified;

    doc = canonicalform03.canonicalform03();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      domConfig.setParameter("canonical-form", true);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagName("acronym");
      elem = elemList.item(0);
      attr = elem.getAttributeNode("title");
      test.notEqual(attr, null, 'titlePresent');
      attrSpecified = attr.specified;

      test.ok(attrSpecified, 'titleSpecified');
      attrValue = attr.nodeValue;

      test.equal(attrValue, "default", 'titleValue');

    }

    test.done()
  },

  /**
   *
   Normalize document with 'canonical-form' set to true, check that
   DocumentType nodes are removed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   */
  canonicalform12: function (test) {
    var success;
    var doc;
    var domConfig;
    var canSet;
    errorMonitor = new DOMErrorMonitor();

    var doctype;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("canonical-form",true);

    if(
      canSet
    ) {
      domConfig.setParameter("canonical-form", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      doctype = doc.doctype;

      test.equal(doctype, null, 'docTypeNull');

    }

    test.done()
  },

  /**
   *
   Normalize a document using Node.normalize and check that
   the value of the 'cdata-sections' parameter is ignored.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-cdata-sections
   */
  cdatasections01: function (test) {
    var success;
    var doc;
    var elem;
    var newCdata;
    var cdata;
    var text;
    var nodeName;
    var nodeValue;
    var appendedChild;
    var domConfig;
    var pList;
    errorMonitor = new DOMErrorMonitor();


    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    newCdata = doc.createCDATASection("CDATA");
    appendedChild = elem.appendChild(newCdata);
    domConfig = doc.domConfig;

    domConfig.setParameter("cdata-sections", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalize();
    errorMonitor.assertLowerSeverity("normalizationError", 2);
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    cdata = elem.lastChild;

    nodeName = cdata.nodeName;

    test.equal(nodeName, "#cdata-section", 'documentnormalizedocument03_true');

    test.done()
  },

  /**
   *
   Normalize document with check-character-normalization set to false, check that
   no errors are dispatched.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-check-character-normalization
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  checkcharacternormalization01: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("error-handler", errorMonitor.handleError);
    domConfig.setParameter("check-character-normalization", false);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = doc.createTextNode("suçon");
    retval = pElem.appendChild(text);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = pElem.firstChild;

    textValue = text.nodeValue;

    test.equal(textValue, "barsucon", 'noCharNormalization');

    test.done()
  },

  /**
   *
   Normalize document with check-character-normalization set to true, check that
   non-normalized characters are signaled.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-check-character-normalization
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  checkcharacternormalization02: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;
    var canSet;
    var errors = new Array();

    var error;
    var severity;
    var locator;
    var relatedNode;
    var errorCount = 0;
    var errorType;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("check-character-normalization",true);

    if(
      canSet
    ) {
      domConfig.setParameter("check-character-normalization", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = doc.createTextNode("suçon");
      retval = pElem.appendChild(text);
      doc.normalizeDocument();
      errors = errorMonitor.allErrors;
      for(var indexN100AA = 0;indexN100AA < errors.length; indexN100AA++) {
        error = errors[indexN100AA];
        severity = error.severity;


	if(
	  (2 == severity)
	) {
	  errorCount += 1;
          errorType = error.type;

          test.equal(errorType, "check-character-normalization-failure", 'errorType');
          locator = error.location;

          relatedNode = locator.relatedNode;

          test.equal(relatedNode, text, 'relatedNodeSame');

	}

      }
      test.equal(errorCount, 1, 'oneError');

    }

    test.done()
  },

  /**
   *
   Normalize document using Node.normalize checking that "check-character-normalization"
   is ignored.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-check-character-normalization
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  checkcharacternormalization03: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;
    var canSet;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("check-character-normalization",true);

    if(
      canSet
    ) {
      domConfig.setParameter("check-character-normalization", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = doc.createTextNode("suçon");
      retval = pElem.appendChild(text);
      doc.normalize();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = pElem.firstChild;

      textValue = text.nodeValue;

      test.equal(textValue, "barsucon", 'noCharNormalization');

    }

    test.done()
  },

  /**
   *
   Check that Node.normalize ignores the setting of configuration parameter 'comments'.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-comments
   */
  comments01: function (test) {
    var success;
    var doc;
    var elem;
    var newComment;
    var lastChild;
    var text;
    var nodeName;
    var appendedChild;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;

    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    newComment = doc.createComment("COMMENT_NODE");
    appendedChild = elem.appendChild(newComment);
    domConfig = doc.domConfig;

    domConfig.setParameter("comments", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalize();
    errorMonitor.assertLowerSeverity("normalizationError", 2);
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    lastChild = elem.lastChild;

    nodeName = lastChild.nodeName;

    test.equal(nodeName, "#comment", 'documentnormalizedocument04_true');

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if double values were normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization01: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","double");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.equal(str, "+0003.141592600E+0000", 'firstValue');
      str = element.getAttribute("union");
      test.equal(str, "+0003.141592600E+0000", 'firstUnion');
      str = element.textContent;

      test.equal(str, "-31415926.00E-7 2.718", 'firstList');
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.equal(str, "NaN", 'secondValue');
      str = element.getAttribute("union");
      test.equal(str, "NaN", 'secondUnion');
      str = element.textContent;

      test.equal(str, "INF -INF", 'secondList');
      element = elemList.item(2);
      str = element.getAttribute("value");
      test.equal(str, "1", 'thirdValue');
      str = element.getAttribute("union");
      test.equal(str, "1", 'thirdUnion');
      str = element.textContent;

      test.equal(str, "-0", 'thirdList');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if decimal values were normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization02: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","decimal");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.equal(str, "+0003.141592600", 'firstValue');
      str = element.getAttribute("union");
      test.equal(str, "+0003.141592600", 'firstUnion');
      str = element.textContent;

      test.equal(str, "+10 .1", 'firstList');
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.equal(str, "01", 'secondValue');
      str = element.getAttribute("union");
      test.equal(str, "01", 'secondUnion');
      str = element.textContent;

      test.equal(str, "-.001", 'secondList');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if boolean values were whitespace normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization03: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","boolean");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.equal(str, "true", 'firstValue');
      str = element.getAttribute("union");
      test.equal(str, "false", 'firstUnion');
      str = element.textContent;

      test.equal(str, "false true false", 'firstList');
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.equal(str, "1", 'secondValue');
      str = element.getAttribute("union");
      test.equal(str, "0", 'secondUnion');
      str = element.textContent;

      test.equal(str, "0 1 0", 'secondList');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if float values were normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization04: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","float");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.equal(str, "+0003.141592600E+0000", 'firstValue');
      str = element.getAttribute("union");
      test.equal(str, "+0003.141592600E+0000", 'firstUnion');
      str = element.textContent;

      test.equal(str, "-31415926.00E-7 2.718", 'firstList');
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.equal(str, "NaN", 'secondValue');
      str = element.getAttribute("union");
      test.equal(str, "NaN", 'secondUnion');
      str = element.textContent;

      test.equal(str, "INF -INF", 'secondList');
      element = elemList.item(2);
      str = element.getAttribute("value");
      test.equal(str, "1", 'thirdValue');
      str = element.getAttribute("union");
      test.equal(str, "1", 'thirdUnion');
      str = element.textContent;

      test.equal(str, "-0", 'thirdList');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if dateTime values were correctly normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization05: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","dateTime");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.equal(str, "2004-01-21T15:30:00-05:00", 'firstValue');
      str = element.getAttribute("union");
      test.equal(str, "2004-01-21T20:30:00-05:00", 'firstUnion');
      str = element.textContent;

      test.equal(str, "2004-01-21T15:30:00 2004-01-21T15:30:00Z", 'firstList');
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.equal(str, "2004-01-21T15:30:00.0000-05:00", 'secondValue');
      str = element.getAttribute("union");
      test.equal(str, "2004-01-21T15:30:00.0000-05:00", 'secondUnion');
      str = element.textContent;

      test.equal(str, "2004-01-21T15:30:00.0000", 'secondList');
      element = elemList.item(2);
      str = element.getAttribute("value");
      test.equal(str, "2004-01-21T15:30:00.0001-05:00", 'thirdValue');
      str = element.getAttribute("union");
      test.equal(str, "2004-01-21T15:30:00.0001-05:00", 'thirdUnion');
      str = element.textContent;

      test.equal(str, "2004-01-21T15:30:00.0001", 'thirdList');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if time values were normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization06: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","time");
      element = elemList.item(0);
      str = element.getAttribute("value");
      test.equal(str, "15:30:00-05:00", 'firstValue');
      str = element.getAttribute("union");
      test.equal(str, "15:30:00-05:00", 'firstUnion');
      str = element.textContent;

      test.equal(str, "15:30:00", 'firstList');
      element = elemList.item(1);
      str = element.getAttribute("value");
      test.equal(str, "15:30:00.0000-05:00", 'secondValue');
      str = element.getAttribute("union");
      test.equal(str, "15:30:00.0000-05:00", 'secondUnion');
      str = element.textContent;

      test.equal(str, "15:30:00.0000", 'secondList');
      element = elemList.item(2);
      str = element.getAttribute("value");
      test.equal(str, "15:30:00.0001-05:00", 'thirdValue');
      str = element.getAttribute("union");
      test.equal(str, "15:30:00.0001-05:00", 'thirdUnion');
      str = element.textContent;

      test.equal(str, "15:30:00.0001", 'thirdList');

    }

    test.done()
  },

  /**
   *
   The default value for the double element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization07: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","double");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.equal(str, "3.1415926E0", 'firstValue');

    }

    test.done()
  },

  /**
   *
   The default value for the decimal element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization08: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","decimal");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.equal(str, "3.1415926", 'firstValue');

    }

    test.done()
  },

  /**
   *
   The default value for the boolean element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization09: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","boolean");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.equal(str, "true", 'firstValue');

    }

    test.done()
  },

  /**
   *
   The default value for the float element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization10: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","float");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.equal(str, "3.1415926E0", 'firstValue');

    }

    test.done()
  },

  /**
   *
   The default value for the dateTime element must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization11: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","dateTime");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.equal(str, "2004-01-21T20:30:00Z", 'firstValue');

    }

    test.done()
  },

  /**
   *
   Default values must be provided in canonical lexical form.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization12: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();


    doc = datatype_normalization.datatype_normalization();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/2001/DOM-Test-Suite/Level-3/datatype_normalization","time");
      element = elemList.item(0);
      str = element.getAttribute("default");
      test.equal(str, "20:30:00Z", 'firstValue');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if string values were normalized per default whitespace
   facet of xsd:string.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization13: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();

    var childNode;
    var childValue;

    doc = datatype_normalization2.datatype_normalization2();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","em");
      element = elemList.item(0);
      childNode = element.firstChild;

      test.notEqual(childNode, null, 'childNodeNotNull');
      childValue = childNode.nodeValue;

      test.equal(childValue, "    EMP  0001   ", 'content');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if string values were normalized per explicit whitespace=preserve.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization14: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();

    var childNode;
    var childValue;

    doc = datatype_normalization2.datatype_normalization2();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","acronym");
      element = elemList.item(0);
      childNode = element.firstChild;

      test.notEqual(childNode, null, 'childNodeNotNull');
      childValue = childNode.nodeValue;

      test.equal(childValue, "    EMP  0001   ", 'content');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if string values were normalized per an explicit whitespace=collapse.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization15: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();

    var childNode;
    var childValue;

    doc = datatype_normalization2.datatype_normalization2();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","code");
      element = elemList.item(0);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP 0001", 'content1');
      element = elemList.item(1);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP 0001", 'content2');
      element = elemList.item(2);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP 0001", 'content3');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to true.
   Check if string values were normalized per explicit whitespace=replace.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization16: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetNormalization;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();

    var childNode;
    var childValue;

    doc = datatype_normalization2.datatype_normalization2();
    domConfig = doc.domConfig;

    canSetNormalization = domConfig.canSetParameter("datatype-normalization",true);
    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetNormalization && canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","sup");
      element = elemList.item(0);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "     EMP  0001 ", 'content1');
      element = elemList.item(1);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP  0001", 'content2');
      element = elemList.item(2);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP 0001", 'content3');
      element = elemList.item(3);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP 0001", 'content4');

    }

    test.done()
  },

  /**
   *
   Normalize document with datatype-normalization set to false, string values
   should not be normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization17: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();

    var childNode;
    var childValue;

    doc = datatype_normalization2.datatype_normalization2();
    domConfig = doc.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("datatype-normalization", false);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","code");
      element = elemList.item(1);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP  0001", 'content2');
      element = elemList.item(2);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP 0001", 'content3');
      element = elemList.item(0);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.notEqual(childValue, "EMP 0001", 'content1');

    }

    test.done()
  },

  /**
   *
   Normalize document using Node.normalize which is not affected by DOMConfiguration unlike
   Document.normalizeDocument.  Strings should not have been normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   */
  datatypenormalization18: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetValidate;
    var canSetXMLSchema;
    var canSetDataNorm;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();

    var childNode;
    var childValue;

    doc = datatype_normalization2.datatype_normalization2();
    domConfig = doc.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);
    canSetDataNorm = domConfig.canSetParameter("datatype-normalization",true);

    if(

      (canSetValidate && canSetXMLSchema && canSetDataNorm)

    ) {
      domConfig.setParameter("datatype-normalization", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalize();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","code");
      element = elemList.item(1);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP  0001", 'content2');
      element = elemList.item(2);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP 0001", 'content3');
      element = elemList.item(0);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.notEqual(childValue, "EMP 0001", 'content1');

    }

    test.done()
  },

  /**
   *
   Adopt the class attribute node of the fourth acronym element.  Check if this attribute has been adopted successfully by verifying the
   nodeName, nodeType, nodeValue, specified and ownerElement attributes of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode01: function (test) {
    var success;
    var doc;
    var attrOwnerElem;
    var element;
    var attr;
    var childList;
    var adoptedclass;
    var attrsParent;
    var nodeName;
    var nodeType;
    var nodeValue;
    var firstChild;
    var firstChildValue;
    var secondChild;
    var secondChildType;
    var secondChildName;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    element = childList.item(3);
    attr = element.getAttributeNode("class");
    adoptedclass = doc.adoptNode(attr);

    if(

      (adoptedclass != null)

    ) {
      nodeName = adoptedclass.nodeName;

      nodeValue = adoptedclass.nodeValue;

      nodeType = adoptedclass.nodeType;

      attrOwnerElem = adoptedclass.ownerElement;

      test.equal(nodeName, "class", 'documentadoptode01_nodeName');
      test.equal(nodeType, 2, 'documentadoptNode01_nodeType');
      test.equal(attrOwnerElem, null, 'documentadoptnode01_ownerDoc');
      firstChild = adoptedclass.firstChild;

      test.notEqual(firstChild, null, 'firstChildNotNull');
      firstChildValue = firstChild.nodeValue;


      if(
	("Y" == firstChildValue)
      ) {
	secondChild = firstChild.nextSibling;

        test.notEqual(secondChild, null, 'secondChildNotNull');
        secondChildType = secondChild.nodeType;

        test.equal(secondChildType, 5, 'secondChildIsEntityReference');
        secondChildName = secondChild.nodeName;

        test.equal(secondChildName, "alpha", 'secondChildIsEnt1Reference');

      }

      else {
	test.equal(nodeValue, "Yα", 'documentadoptnode01_nodeValue');

      }

    }

    test.done()
  },

  /**
   *
   Adopt the class attribute node of the fourth acronym element.  Check if this attribute has been adopted
   successfully by verifying the nodeName, nodeType, ownerElement, specified attributes and child nodes
   of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode02: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var attrOwnerElem;
    var element;
    var attr;
    var childList;
    var adoptedclass;
    var attrsParent;
    var nodeName;
    var nodeType;
    var nodeValue;
    var isSpecified;
    var nullDocType = null;

    var firstChild;
    var firstChildValue;
    var secondChild;
    var secondChildType;
    var secondChildName;
    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    childList = doc.getElementsByTagName("acronym");
    element = childList.item(3);
    attr = element.getAttributeNode("class");
    adoptedclass = newDoc.adoptNode(attr);

    if(

      (adoptedclass != null)

    ) {
      nodeName = adoptedclass.nodeName;

      nodeValue = adoptedclass.nodeValue;

      nodeType = adoptedclass.nodeType;

      attrOwnerElem = adoptedclass.ownerElement;

      isSpecified = adoptedclass.specified;

      test.equal(nodeName, "class", 'documentadoptnode02_nodeName');
      test.equal(nodeType, 2, 'documentadoptnode02_nodeType');
      test.equal(attrOwnerElem, null, 'documentadoptnode02_ownerDoc');
      test.ok(isSpecified, 'documentadoptnode02_specified');
      firstChild = adoptedclass.firstChild;

      test.notEqual(firstChild, null, 'firstChildNotNull');
      firstChildValue = firstChild.nodeValue;


      if(
	("Y" == firstChildValue)
      ) {
	secondChild = firstChild.nextSibling;

        test.notEqual(secondChild, null, 'secondChildNotNull');
        secondChildType = secondChild.nodeType;

        test.equal(secondChildType, 5, 'secondChildIsEntityReference');
        secondChildName = secondChild.nodeName;

        test.equal(secondChildName, "alpha", 'secondChildIsEnt1Reference');

      }

      else {
	test.equal(nodeValue, "Yα", 'documentadoptnode02_nodeValue');

      }

    }

    test.done()
  },

  /**
   *
   Invoke adoptNode on this document to adopt the a new namespace aware attribute node.  Check
   if this attribute has been adopted successfully by verifying the nodeName, namespaceURI, prefix,
   specified and ownerElement attributes of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode03: function (test) {
    var success;
    var doc;
    var newAttr;
    var adoptedAttr;
    var nodeName;
    var nodeNamespaceURI;
    var nodePrefix;
    var attrOwnerElem;
    var isSpecified;
    var xmlNS = "http://www.w3.org/XML/1998/namespace";

    doc = hc_staff.hc_staff();
    newAttr = doc.createAttributeNS(xmlNS,"xml:lang");
    adoptedAttr = doc.adoptNode(newAttr);

    if(

      (adoptedAttr != null)

    ) {
      nodeName = adoptedAttr.nodeName;

      nodeNamespaceURI = adoptedAttr.namespaceURI;

      nodePrefix = adoptedAttr.prefix;

      attrOwnerElem = adoptedAttr.ownerElement;

      isSpecified = adoptedAttr.specified;

      test.equal(nodeName, "xml:lang", 'documentadoptode03_nodeName');
      test.equal(nodeNamespaceURI, xmlNS, 'documentadoptNode03_namespaceURI');
      test.equal(nodePrefix, "xml", 'documentadoptnode03_prefix');
      test.equal(attrOwnerElem, null, 'documentadoptnode03_ownerDoc');
      test.ok(isSpecified, 'documentadoptnode03_specified');

    }

    test.done()
  },

  /**
   *
   Invoke adoptNode on a new document to adopt a new namespace aware attribute node created by
   this document.  Check if this attribute has been adopted successfully by verifying the nodeName,
   namespaceURI, prefix, specified and ownerElement attributes of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode04: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var newAttr;
    var adoptedAttr;
    var nodeName;
    var nodeNamespaceURI;
    var nodePrefix;
    var attrOwnerElem;
    var isSpecified;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;
    var xmlNS = "http://www.w3.org/XML/1998/namespace";

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newAttr = doc.createAttributeNS(xmlNS,"xml:lang");
    adoptedAttr = newDoc.adoptNode(newAttr);

    if(

      (adoptedAttr != null)

    ) {
      nodeName = adoptedAttr.nodeName;

      nodeNamespaceURI = adoptedAttr.namespaceURI;

      nodePrefix = adoptedAttr.prefix;

      attrOwnerElem = adoptedAttr.ownerElement;

      isSpecified = adoptedAttr.specified;

      test.equal(nodeName, "xml:lang", 'documentadoptnode04_nodeName');
      test.equal(nodeNamespaceURI, xmlNS, 'documentadoptnode04_namespaceURI');
      test.equal(nodePrefix, "xml", 'documentadoptnode04_prefix');
      test.equal(attrOwnerElem, null, 'documentadoptnode04_ownerDoc');
      test.ok(isSpecified, 'documentadoptnode04_specified');

    }

    test.done()
  },

  /**
   *
   Invoke adoptNode on a new document to adopt the default attribute "dir".  Check if
   this attribute has been adopted successfully by verifying the nodeName, namespaceURI, prefix,
   specified and ownerElement attributes of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode05: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var elementEmp;
    var childList;
    var dir;
    var adoptedAttr;
    var nodeName;
    var nodeNamespaceURI;
    var nodePrefix;
    var attrOwnerElem;
    var isSpecified;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    childList = doc.getElementsByTagName("p");
    elementEmp = childList.item(3);
    dir = elementEmp.getAttributeNode("dir");
    adoptedAttr = newDoc.adoptNode(dir);

    if(

      (adoptedAttr != null)

    ) {
      nodeName = adoptedAttr.nodeName;

      nodeNamespaceURI = adoptedAttr.namespaceURI;

      nodePrefix = adoptedAttr.prefix;

      attrOwnerElem = adoptedAttr.ownerElement;

      isSpecified = adoptedAttr.specified;

      test.equal(nodeName, "dir", 'documentadoptnode05_nodeName');
      test.equal(nodeNamespaceURI, null, 'documentadoptnode05_namespaceURI');
      test.equal(nodePrefix, null, 'documentadoptnode05_prefix');
      test.equal(attrOwnerElem, null, 'documentadoptnode05_ownerDoc');
      test.ok(isSpecified, 'documentadoptnode05_specified');

    }

    test.done()
  },

  /**
   *
   Invoke adoptNode on a new document to adopt the a new Attribute node having a Text and an EntityReference
   child.  Check if this attribute has been adopted successfully by verifying the nodeName, namespaceURI, prefix,
   specified and ownerElement attributes of the adopted node.  Also verify the ownerDocument attribute
   of the adopted node and the adopted children of the attribute node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode06: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var newAttr;
    var newText;
    var newEntRef;
    var adoptedAttr;
    var adoptText;
    var adoptEntRef;
    var nodeList;
    var nodeName;
    var nodeNamespaceURI;
    var nodePrefix;
    var attrOwnerElem;
    var isSpecified;
    var adoptedTextNodeValue;
    var adoptedEntRefNodeValue;
    var nullDocType = null;

    var appendedChild;
    var docElem;
    var rootNS;
    var rootName;
    var xmlNS = "http://www.w3.org/XML/1998/namespace";

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newAttr = doc.createAttributeNS(xmlNS,"xml:lang");
    newText = doc.createTextNode("Text Node");
    newEntRef = doc.createEntityReference("alpha");
    appendedChild = newAttr.appendChild(newText);
    appendedChild = newAttr.appendChild(newEntRef);
    adoptedAttr = newDoc.adoptNode(newAttr);

    if(

      (adoptedAttr != null)

    ) {
      nodeName = adoptedAttr.nodeName;

      nodeNamespaceURI = adoptedAttr.namespaceURI;

      nodePrefix = adoptedAttr.prefix;

      attrOwnerElem = adoptedAttr.ownerElement;

      isSpecified = adoptedAttr.specified;

      test.equal(nodeName, "xml:lang", 'documentadoptnode06_nodeName');
      test.equal(nodeNamespaceURI, xmlNS, 'documentadoptnode06_namespaceURI');
      test.equal(nodePrefix, "xml", 'documentadoptnode06_prefix');
      test.equal(attrOwnerElem, null, 'documentadoptnode06_ownerDoc');
      test.ok(isSpecified, 'documentadoptnode06_specified');
      nodeList = adoptedAttr.childNodes;

      adoptText = nodeList.item(0);
      adoptEntRef = nodeList.item(1);
      adoptedTextNodeValue = adoptText.nodeValue;

      adoptedEntRefNodeValue = adoptEntRef.nodeName;

      test.equal(adoptedTextNodeValue, "Text Node", 'documentadoptnode06_TextNodeValue');
      test.equal(adoptedEntRefNodeValue, "alpha", 'documentadoptnode06_EntRefNodeValue');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document with the value of the source parameter as itself.
   Verify if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode07: function (test) {
    var success;
    var doc;
    var adoptedDoc;

    doc = hc_staff.hc_staff();

    {
      success = false;
      try {
        adoptedDoc = doc.adoptNode(doc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document with a new document as the value of the
   source parameter. 	Verify if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode08: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var adoptedDoc;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);

    {
      success = false;
      try {
        adoptedDoc = doc.adoptNode(newDoc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on a new document with this document as the value of the
   source parameter. 	Verify if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode09: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var adoptedDoc;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);

    {
      success = false;
      try {
        adoptedDoc = newDoc.adoptNode(doc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document with the value of the source parameter as this
   documents doctype node.  Verify if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode10: function (test) {
    var success;
    var doc;
    var docType;
    var adoptedDocType;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;


    {
      success = false;
      try {
        adoptedDocType = doc.adoptNode(docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document with the value of the source parameter equal to a new
   doctype node.  Verify if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode11: function (test) {
    var success;
    var doc;
    var domImpl;
    var docType;
    var adoptedDocType;
    var nullPubID = null;

    var nullSysID = null;

    var docElem;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    docType = domImpl.createDocumentType(rootName,nullPubID,nullSysID);

    {
      success = false;
      try {
        adoptedDocType = doc.adoptNode(docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on a new document with the value of the source parameter equal to a new
   doctype node.  Verify if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode12: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var docType;
    var adoptedDocType;
    var nullPubID = null;

    var nullSysID = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    docType = domImpl.createDocumentType(rootName,nullPubID,nullSysID);
    newDoc = domImpl.createDocument(rootNS,rootName,docType);

    {
      success = false;
      try {
        adoptedDocType = newDoc.adoptNode(docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Using the method adoptNode, adopt a newly created DocumentFragment node populated with
   with the first acronym element of this Document.  Since the decendants of a documentFragment
   are recursively adopted, check if the adopted node has children.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode13: function (test) {
    var success;
    var doc;
    var docFragment;
    var childList;
    var success;
    var acronymNode;
    var appendedChild;
    var adoptedDocFrag;

    doc = hc_staff.hc_staff();
    docFragment = doc.createDocumentFragment();
    childList = doc.getElementsByTagName("acronym");
    acronymNode = childList.item(0);
    appendedChild = docFragment.appendChild(acronymNode);
    adoptedDocFrag = doc.adoptNode(docFragment);

    if(

      (adoptedDocFrag != null)

    ) {
      success = adoptedDocFrag.hasChildNodes();
      test.ok(success, 'documentadoptnode13');

    }

    test.done()
  },

  /**
   *
   Using the method adoptNode in a new Document, adopt a newly created DocumentFragment node populated with
   with the first acronym element of this Document as its newChild.  Since the decendants of a documentFragment
   are recursively adopted, check if the adopted node has children.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode14: function (test) {
    var success;
    var doc;
    var newDoc;
    var docElem;
    var domImpl;
    var docFragment;
    var childList;
    var success;
    var acronymNode;
    var adoptedDocFrag;
    var appendedChild;
    var nullDocType = null;

    var imported;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    docFragment = newDoc.createDocumentFragment();
    imported = newDoc.importNode(docElem,true);
    docElem = newDoc.documentElement;

    appendedChild = docElem.appendChild(imported);
    childList = newDoc.getElementsByTagName("acronym");
    acronymNode = childList.item(0);
    appendedChild = docFragment.appendChild(acronymNode);
    adoptedDocFrag = newDoc.adoptNode(docFragment);

    if(

      (adoptedDocFrag != null)

    ) {
      success = adoptedDocFrag.hasChildNodes();
      test.ok(success, 'documentadoptnode14');

    }

    test.done()
  },

  /**
   *
   Using the method adoptNode, adopt a newly created DocumentFragment node without any children.
   Check if the adopted node has no children.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode15: function (test) {
    var success;
    var doc;
    var docFragment;
    var success;
    var adoptedDocFrag;

    doc = hc_staff.hc_staff();
    docFragment = doc.createDocumentFragment();
    adoptedDocFrag = doc.adoptNode(docFragment);

    if(

      (adoptedDocFrag != null)

    ) {
      success = adoptedDocFrag.hasChildNodes();
      test.equal(success, false, 'documentadoptnode15');

    }

    test.done()
  },

  /**
   *
   Create a document fragment with an entity reference, adopt the node and check
   that the entity reference value comes from the adopting documents DTD.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode16: function (test) {
    var success;
    var doc;
    var docFragment;
    var childList;
    var parent;
    var child;
    var childsAttr;
    var entRef;
    var textNode;
    var adopted;
    var parentImp;
    var childImp;
    var attributes;
    var childAttrImp;
    var nodeValue;
    var appendedChild;
    var attrNode;
    var firstChild;
    var firstChildType;
    var firstChildName;
    var firstChildValue;

    doc = hc_staff.hc_staff();
    docFragment = doc.createDocumentFragment();
    parent = doc.createElement("parent");
    child = doc.createElement("child");
    childsAttr = doc.createAttribute("state");
    entRef = doc.createEntityReference("gamma");
    textNode = doc.createTextNode("Test");
    appendedChild = childsAttr.appendChild(entRef);
    attrNode = child.setAttributeNode(childsAttr);
    appendedChild = child.appendChild(textNode);
    appendedChild = parent.appendChild(child);
    appendedChild = docFragment.appendChild(parent);
    adopted = doc.adoptNode(docFragment);

    if(

      (adopted != null)

    ) {
      parentImp = adopted.firstChild;

      childImp = parentImp.firstChild;

      attributes = childImp.attributes;

      childAttrImp = attributes.getNamedItem("state");
      firstChild = childAttrImp.firstChild;

      test.notEqual(firstChild, null, 'firstChildNotNull');
      firstChildName = firstChild.nodeName;

      firstChildValue = firstChild.nodeValue;

      firstChildType = firstChild.nodeType;


      if(
	(5 == firstChildType)
      ) {
	test.equal(firstChildName, "gamma", 'firstChildEnt3Ref');

      }

      else {
	test.equal(firstChildValue, "Texas", 'documentadoptnode16');

      }

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document with the entity ent1 as the source.  Since this is
   read-only verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode17: function (test) {
    var success;
    var doc;
    var docType;
    var entityMap;
    var ent;
    var adoptedEnt;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entityMap = docType.entities;

    ent = entityMap.getNamedItem("alpha");

    {
      success = false;
      try {
        adoptedEnt = doc.adoptNode(ent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on a new document with the entity ent4 as the source.  Since this is
   read-only verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode18: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var docType;
    var entityMap;
    var ent;
    var adoptedEnt;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    docType = doc.doctype;

    entityMap = docType.entities;

    ent = entityMap.getNamedItem("delta");

    {
      success = false;
      try {
        adoptedEnt = newDoc.adoptNode(ent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document with the notation notation1 as the source.  Since this is
   read-only verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode19: function (test) {
    var success;
    var doc;
    var docType;
    var notationMap;
    var notation;
    var adoptedNotaion;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    notationMap = docType.notations;

    notation = notationMap.getNamedItem("notation1");

    {
      success = false;
      try {
        adoptedNotaion = doc.adoptNode(notation);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on a new document with the notation notation2 as the source.  Since this is
   read-only verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode20: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var docType;
    var notationMap;
    var notation;
    var adoptedNotation;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    docType = doc.doctype;

    notationMap = docType.notations;

    notation = notationMap.getNamedItem("notation2");

    {
      success = false;
      try {
        adoptedNotation = newDoc.adoptNode(notation);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   The adoptNode method changes the ownerDocument of a node, its children, as well as the
   attached attribute nodes if there are any. If the node has a parent it is first removed
   from its parent child list.

   Invoke the adoptNode method on this Document with the source node being an existing attribute
   that is a part of this Document.   Verify that the returned adopted node's nodeName, nodeValue
   and nodeType are as expected and that the ownerElement attribute of the returned attribute node
   was set to null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode21: function (test) {
    var success;
    var doc;
    var attrOwnerElem;
    var element;
    var attr;
    var childList;
    var adoptedTitle;
    var attrsParent;
    var nodeName;
    var nodeType;
    var nodeValue;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    element = childList.item(0);
    attr = element.getAttributeNode("title");
    adoptedTitle = doc.adoptNode(attr);
    nodeName = adoptedTitle.nodeName;

    nodeValue = adoptedTitle.nodeValue;

    nodeType = adoptedTitle.nodeType;

    attrOwnerElem = adoptedTitle.ownerElement;

    test.equal(nodeName, "title", 'documentadoptnode21_nodeName');
    test.equal(nodeType, 2, 'documentadoptnode21_nodeType');
    test.equal(nodeValue, "Yes", 'documentadoptnode21_nodeValue');
    test.equal(attrOwnerElem, null, 'documentadoptnode21_ownerDoc');

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document with the documentElement as the source.
   Verify if the node has been adopted correctly by its nodeName.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode22: function (test) {
    var success;
    var doc;
    var docElement;
    var adoptedNode;
    var success;
    var nodeNameOrig;
    var nodeName;

    doc = hc_staff.hc_staff();
    docElement = doc.documentElement;

    adoptedNode = doc.adoptNode(docElement);

    if(

      (adoptedNode != null)

    ) {
      success = adoptedNode.hasChildNodes();
      test.ok(success, 'documentadoptnode22_1');
      nodeName = adoptedNode.nodeName;

      nodeNameOrig = docElement.nodeName;

      test.equal(nodeNameOrig, nodeName, 'documentadoptnode22_2');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document with the first acronym element node of this
   Document as the source.  Verify if the node has been adopted correctly by checking the
   length of the this elements childNode list before and after.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode23: function (test) {
    var success;
    var doc;
    var childList;
    var adoptedNode;
    var acronymElem;
    var acronymElemLen;
    var adoptedLen;
    var acronymElemChild;
    var adoptedNodeChild;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    acronymElem = childList.item(0);
    adoptedNode = doc.adoptNode(acronymElem);

    if(

      (adoptedNode != null)

    ) {
      acronymElemChild = acronymElem.childNodes;

      acronymElemLen = acronymElemChild.length;

      adoptedNodeChild = adoptedNode.childNodes;

      adoptedLen = adoptedNodeChild.length;

      test.equal(acronymElemLen, adoptedLen, 'documentadoptnode23');

    }

    test.done()
  },

  /**
   *
   The adoptNode method changes the ownerDocument of a node, its children, as well as the
   attached attribute nodes if there are any. If the node has a parent it is first removed
   from its parent child list.
   For Element Nodes, specified attribute nodes of the source element are adopted, Default
   attributes are discarded and descendants of the source element are recursively adopted.

   Invoke the adoptNode method on a new document with the first code element node of this
   Document as the source.  Verify if the node has been adopted correctly by checking the
   length of the this elements childNode list before and after.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode24: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var childList;
    var adoptedNode;
    var codeElem;
    var codeElemChildren;
    var adoptedChildren;
    var codeElemLen;
    var adoptedLen;
    var nullDocType = null;


    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","dom:test",nullDocType);
    childList = doc.getElementsByTagNameNS("*","code");
    codeElem = childList.item(0);
    adoptedNode = newDoc.adoptNode(codeElem);
    codeElemChildren = codeElem.childNodes;

    adoptedChildren = adoptedNode.childNodes;

    codeElemLen = codeElemChildren.length;

    adoptedLen = adoptedChildren.length;

    test.equal(codeElemLen, adoptedLen, 'documentadoptnode24');

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on a new document with a new Element of this
   Document as the source.  Verify if the node has been adopted correctly by checking the
   nodeName of the adopted Element.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode25: function (test) {
    var success;
    var doc;
    var newElem;
    var newDoc;
    var domImpl;
    var adoptedNode;
    var adoptedName;
    var adoptedNS;
    var docElem;
    var rootNS;
    var rootName;
    var nullDocType = null;


    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    newElem = doc.createElementNS("http://www.w3.org/1999/xhtml","th");
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    adoptedNode = newDoc.adoptNode(newElem);

    if(

      (adoptedNode != null)

    ) {
      adoptedName = adoptedNode.nodeName;

      adoptedNS = adoptedNode.namespaceURI;

      test.equal(adoptedName, "th", 'documentadoptnode25_1');
      test.equal(adoptedNS, "http://www.w3.org/1999/xhtml", 'documentadoptnode25_2');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document using a new Element and a new attribute created in
   a new Document as the source.  Verify if the node has been adopted correctly by checking the
   nodeName of the adopted Element and by checking if the attribute was adopted.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode26: function (test) {
    var success;
    var doc;
    var docElem;
    var newElem;
    var newDoc;
    var domImpl;
    var adoptedNode;
    var adoptedName;
    var adoptedNS;
    var nullDocType = null;

    var appendedChild;
    var rootNS;
    var rootTagname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootTagname,nullDocType);
    newElem = newDoc.createElementNS("http://www.w3.org/1999/xhtml","head");
    newElem.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang","en-US");
    docElem = newDoc.documentElement;

    appendedChild = docElem.appendChild(newElem);
    adoptedNode = doc.adoptNode(newElem);

    if(

      (adoptedNode != null)

    ) {
      adoptedName = adoptedNode.nodeName;

      adoptedNS = adoptedNode.namespaceURI;

      test.equal(adoptedName, "head", 'documentadoptnode26_1');
      test.equal(adoptedNS, "http://www.w3.org/1999/xhtml", 'documentadoptnode26_2');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document using a new imported Element and a new attribute created in
   a new Document as the source.  Verify if the node has been adopted correctly by checking the
   nodeName of the adopted Element and by checking if the attribute was adopted.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode27: function (test) {
    var success;
    var doc;
    var docElem;
    var newElem;
    var newImpElem;
    var newDoc;
    var domImpl;
    var adoptedNode;
    var adoptedName;
    var adoptedNS;
    var appendedChild;
    var nullDocType = null;

    var rootNS;
    var rootTagname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootTagname,nullDocType);
    newElem = newDoc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:head");
    newElem.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang","en-US");
    docElem = newDoc.documentElement;

    appendedChild = docElem.appendChild(newElem);
    newImpElem = doc.importNode(newElem,true);
    adoptedNode = doc.adoptNode(newImpElem);

    if(

      (adoptedNode != null)

    ) {
      adoptedName = adoptedNode.nodeName;

      adoptedNS = adoptedNode.namespaceURI;

      test.equal(adoptedName, "xhtml:head", 'documentadoptnode27_1');
      test.equal(adoptedNS, "http://www.w3.org/1999/xhtml", 'documentadoptnode27_2');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document using the "p" element with the default
   Attribute "dir" as the source.  Verify if the node has been adopted correctly by
   checking the nodeName of the adopted Element and by checking if the attribute was adopted.
   Note the default attribute should be adopted in this case.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode28: function (test) {
    var success;
    var doc;
    var childList;
    var adoptedNode;
    var employeeElem;
    var attrImp;
    var nodeName;
    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("p");
    employeeElem = childList.item(3);
    adoptedNode = doc.adoptNode(employeeElem);

    if(

      (adoptedNode != null)

    ) {
      attrImp = adoptedNode.getAttributeNode("dir");
      nodeName = attrImp.nodeName;

      test.equal(nodeName, "dir", 'documentadoptnode28');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document using a new Text node as the source.  Verify
   if the node has been adopted correctly by checking the nodeValue of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode30: function (test) {
    var success;
    var doc;
    var newText;
    var adoptedText;
    var nodeValue;

    doc = hc_staff.hc_staff();
    newText = doc.createTextNode("Document.adoptNode test for a TEXT_NODE");
    adoptedText = doc.adoptNode(newText);

    if(

      (adoptedText != null)

    ) {
      nodeValue = adoptedText.nodeValue;

      test.equal(nodeValue, "Document.adoptNode test for a TEXT_NODE", 'documentadoptnode30');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document using a new Text node from a new Document as the
   source.  Verify if the node has been adopted correctly by checking the nodeValue of the adopted
   node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode31: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var newText;
    var adoptedText;
    var nodeValue;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newText = newDoc.createTextNode("new Document.adoptNode test for a TEXT_NODE");
    adoptedText = doc.adoptNode(newText);

    if(

      (adoptedText != null)

    ) {
      nodeValue = adoptedText.nodeValue;

      test.equal(nodeValue, "new Document.adoptNode test for a TEXT_NODE", 'documentadoptnode31');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on another document using a new CDataSection node created in this
   Document as the source.  Verify if the node has been adopted correctly by checking the nodeValue
   of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode32: function (test) {
    var success;
    var doc;
    var docAdopter;
    var newCDATA;
    var adoptedCDATA;
    var nodeValue;

    doc = hc_staff.hc_staff();

    docAdopter = hc_staff.hc_staff();
    newCDATA = doc.createCDATASection("Document.adoptNode test for a CDATASECTION_NODE");
    adoptedCDATA = docAdopter.adoptNode(newCDATA);

    if(

      (adoptedCDATA != null)

    ) {
      nodeValue = adoptedCDATA.nodeValue;

      test.equal(nodeValue, "Document.adoptNode test for a CDATASECTION_NODE", 'documentadoptnode32');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document using a new CDataSection node created in a new
   Document as the source.  Verify if the node has been adopted correctly by checking the nodeValue
   of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode33: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var newCDATA;
    var adoptedCDATA;
    var nodeValue;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newCDATA = newDoc.createCDATASection("Document.adoptNode test for a CDATASECTION_NODE");
    adoptedCDATA = doc.adoptNode(newCDATA);

    if(

      (adoptedCDATA != null)

    ) {
      nodeValue = adoptedCDATA.nodeValue;

      test.equal(nodeValue, "Document.adoptNode test for a CDATASECTION_NODE", 'documentadoptnode33');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on a new document using a new Comment node created in it
   as the source.  Verify if the node has been adopted correctly by checking the nodeValue
   of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode34: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var newComment;
    var adoptedComment;
    var nodeValue;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newComment = newDoc.createComment("Document.adoptNode test for a COMMENT_NODE");
    adoptedComment = newDoc.adoptNode(newComment);

    if(

      (adoptedComment != null)

    ) {
      nodeValue = adoptedComment.nodeValue;

      test.equal(nodeValue, "Document.adoptNode test for a COMMENT_NODE", 'documentadoptnode34');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document using a new PI node created in a new doc
   as the source.  Verify if the node has been adopted correctly by checking the nodeValue
   of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode35: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var newPI;
    var adoptedPI;
    var piTarget;
    var piData;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newPI = newDoc.createProcessingInstruction("PITarget","PIData");
    adoptedPI = doc.adoptNode(newPI);

    if(

      (adoptedPI != null)

    ) {
      piTarget = adoptedPI.target;

      piData = adoptedPI.data;

      test.equal(piTarget, "PITarget", 'documentadoptnode35_Target');
      test.equal(piData, "PIData", 'documentadoptnode35_Data');

    }

    test.done()
  },

  /**
   *
   Invoke the adoptNode method on this document using a new PI node created in a new doc
   as the source.  Verify if the node has been adopted correctly by checking the nodeValue
   of the adopted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-adoptNode
   */
  documentadoptnode36: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var newPI1;
    var newPI2;
    var adoptedPI1;
    var adoptedPI2;
    var piTarget;
    var piData;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newPI1 = newDoc.createProcessingInstruction("PITarget","PIData");
    newPI2 = doc.createProcessingInstruction("PITarget","PIData");
    adoptedPI1 = newDoc.adoptNode(newPI1);

    if(

      (adoptedPI1 != null)

    ) {
      adoptedPI2 = newDoc.adoptNode(newPI2);

      if(

	(adoptedPI2 != null)

      ) {
	piTarget = adoptedPI1.target;

        piData = adoptedPI1.data;

        test.equal(piTarget, "PITarget", 'documentadoptnode36_Target1');
        test.equal(piData, "PIData", 'documentadoptnode36_Data1');
        piTarget = adoptedPI2.target;

        piData = adoptedPI2.data;

        test.equal(piTarget, "PITarget", 'documentadoptnode36_Target2');
        test.equal(piData, "PIData", 'documentadoptnode36_Data2');

      }

    }

    test.done()
  },

  /**
   *
   Retrieve the doctype node, create a new Doctype node, call replaceChild and try replacing the
   docType node with a new docType node.  Check if the docType node was correctly replaced with
   the new one.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-B63ED1A31
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  documentgetdoctype01: function (test) {
    var success;
    var doc;
    var docType;
    var newDocType;
    var replacedDocType;
    var domImpl;
    var newSysID;
    var nullPubID = null;

    var nullSysID = null;

    var replaced;
    var rootName;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    rootName = docType.name;

    domImpl = doc.implementation;
    newDocType = domImpl.createDocumentType(rootName,nullPubID,nullSysID);

    try {
      replaced = doc.replaceChild(newDocType,docType);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    replacedDocType = doc.doctype;

    newSysID = replacedDocType.systemId;

    test.equal(newSysID, null, 'newSysIdNull');

    test.done()
  },

  /**
   *
   Retrieve the documentURI of this document, and verify if it is not null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-documentURI
   */
  documentgetdocumenturi01: function (test) {
    var doc = hc_staff.hc_staff();
    // this test passes with mjsunit due to a technicality:
    // assertNotNull uses '!==' but test.notEqual uses '!='
    // (undefined !== null) is true
    // (undefined != null) is false
    test.notEqual(doc.documentURI, null, 'documentgetdocumenturi01');
    test.done()
  },

  /**
   *
   Create a new Document, retreive its documentURI, and verify if it is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-documentURI
   */
  documentgetdocumenturi02: function (test) {
    var success;
    var doc;
    var newDoc;
    var docURI;
    var domImpl;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    docURI = newDoc.documentURI;

    test.equal(docURI, null, 'documentgetdocumenturi02');

    test.done()
  },

  /**
   *
   Import the documentElement node of this document into a new document.  Since this node is
   now owned by the importing document, its documentURI attribute value should be null

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-documentURI
   */
  documentgetdocumenturi03: function (test) {
    var success;
    var doc;
    var newDoc;
    var importedOwner;
    var docElem;
    var docElemImported;
    var docURI;
    var domImpl;
    var nullDocType = null;

    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    docElemImported = newDoc.importNode(docElem,false);
    importedOwner = docElemImported.ownerDocument;

    docURI = importedOwner.documentURI;

    test.equal(docURI, null, 'documentgetdocumenturi03');

    test.done()
  },

  /**
   *
   Call the getInputEncoding method on a UTF-8 encoded document and check if the
   value returned is UTF-8.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-inputEncoding
   */
  documentgetinputencoding01: function (test) {
    var doc = hc_staff.hc_staff();
    test.equal(doc.inputEncoding.toLowerCase(), "UTF-8".toLowerCase(), 'documentgetinputencoding01');
    test.done()
  },

  /**
   *
   Call the getInputEncoding method on a new document and check if the value returned
   is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-inputEncoding
   */
  documentgetinputencoding02: function (test) {
    var doc = barfoo.barfoo();
    var newDoc = doc.implementation.createDocument(doc.documentElement.namespaceURI, doc.documentElement.tagName, null);
    test.equal(newDoc.inputEncoding, null, 'documentgetinputencoding02');
    test.done()
  },

  /**
   *
   Call the getInputEncoding method on a on a UTF-16 (BE) encoded document and check if the value returned
   is UTF-16BE.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-inputEncoding
   */
  documentgetinputencoding03: function (test) {
    var doc = barfoo_utf16.barfoo_utf16();
    test.equal(doc.inputEncoding.toLowerCase(), "UTF-16BE".toLowerCase(), 'documentgetinputencoding03');
    test.done()
  },

  /**
   *
   Call the getInputEncoding method on a cloned UTF-8 encoded document
   and check if the value returned is UTF-8 or null (implementation dependent).

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-inputEncoding
   */
  documentgetinputencoding04: function (test) {
    var doc = barfoo_utf8.barfoo_utf8();
    var cloned = doc.cloneNode(true);
    var encodingName = cloned.inputEncoding;
    test.ok((("UTF-8".toUpperCase() == encodingName.toUpperCase()) || (encodingName == null)), 'documentgetinputencoding04');
    test.done()
  },

  /**
   *
   Verify if the (default) value of the strictErrorChecking attribute of this document object is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-strictErrorChecking
   */
  documentgetstricterrorchecking01: function (test) {
    var success;
    var doc;
    var strictErrorCheckingValue;

    doc = hc_staff.hc_staff();
    strictErrorCheckingValue = doc.strictErrorChecking;

    test.ok(strictErrorCheckingValue, 'documentgetstricterrorchecking01');

    test.done()
  },

  /**
   *
   Verify if the (default)value of the strictErrorChecking attribute of a new Document object is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-strictErrorChecking
   */
  documentgetstricterrorchecking02: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var strictErrorCheckingValue;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    strictErrorCheckingValue = newDoc.strictErrorChecking;

    test.ok(strictErrorCheckingValue, 'documentgetstricterrorchecking02');

    test.done()
  },

  /**
   *
   Call the getXmlEncoding method on a UTF-8 encoded XML document in which the encoding pseudo
   attribute in its XMLDecl is UTF-8 and check if the value returned is UTF-8.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-encoding
   */
  documentgetxmlencoding01: function (test) {
    var success;
    var doc;
    var encodingName;

    doc = barfoo_utf8.barfoo_utf8();
    encodingName = doc.xmlEncoding;

    test.equal(encodingName, "uTf-8", 'documentgetxmlencoding01');

    test.done()
  },

  /**
   *
   Call the getXmlEncoding method on a new document and check if the value returned
   is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-encoding
   */
  documentgetxmlencoding02: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var encodingName;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    encodingName = newDoc.xmlEncoding;

    test.equal(encodingName, null, 'documentgetxmlencoding02');

    test.done()
  },

  /**
   *
   Call the getXmlEncoding method on a UTF-16 encoded document and check if the value returned
   is UTF-16.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-encoding
   */
  documentgetxmlencoding03: function (test) {
    var success;
    var doc;
    var encodingName;

    doc = barfoo_utf16.barfoo_utf16();
    encodingName = doc.xmlEncoding;

    test.equal(encodingName, "uTf-16", 'documentgetxmlencoding03');

    test.done()
  },

  /**
   *
   Call the getXmlEncoding method on a UTF-8 encoded XML document that does not contain
   the encoding pseudo attribute in its XMLDecl and check if the value returend is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-encoding
   */
  documentgetxmlencoding04: function (test) {
    var success;
    var doc;
    var encodingName;

    doc = hc_staff.hc_staff();
    encodingName = doc.xmlEncoding;

    test.equal(encodingName, null, 'documentgetxmlencoding04');

    test.done()
  },

  /**
   *
   Call the getXmlEncoding method on a cloned UTF-8 encoded document
   and check if the value returned is UTF-8 or null (implementation dependent).

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-encoding
   */
  documentgetxmlencoding05: function (test) {
    var success;
    var doc;
    var cloned;
    var encodingName;

    doc = barfoo_utf8.barfoo_utf8();
    cloned = doc.cloneNode(true);
    encodingName = cloned.xmlEncoding;

    test.ok((("uTf-8" == encodingName) || (encodingName == null)), 'documentgetxmlencoding05');

    test.done()
  },

  /**
   *
   Retrieve the xmlStandalone attribute of a document for which standalone was not specified, this
   should return false since the default for standalone is no when external markup decls
   are present.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-standalone
   */
  documentgetxmlstandalone01: function (test) {
    var success;
    var doc;
    var standalone;

    doc = hc_staff.hc_staff();
    standalone = doc.xmlStandalone;

    test.equal(standalone, false, 'documentgetxmlstandalone01');

    test.done()
  },

  /**
   *
   The value of the standalone pesudo-attribute for a new Document should be false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-standalone
   */
  documentgetxmlstandalone02: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var standalone;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    standalone = newDoc.xmlStandalone;

    test.equal(standalone, false, 'documentgetxmlstandalone02');

    test.done()
  },

  /**
   *
   The value of the standalone attribute for an XML document with the standalone="no"
   should be false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-standalone
   */
  documentgetxmlstandalone03: function (test) {
    var success;
    var doc;
    var standalone;

    doc = barfoo_standalone_no.barfoo_standalone_no();
    standalone = doc.xmlStandalone;

    test.equal(standalone, false, 'documentgetxmlstandalone03');

    test.done()
  },

  /**
   *
   Retrieve the documentURI of a document for which standalone was specified as "yes", this
   should return true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-standalone
   */
  documentgetxmlstandalone04: function (test) {
    var success;
    var doc;
    var standalone;

    doc = barfoo_standalone_yes.barfoo_standalone_yes();
    standalone = doc.xmlStandalone;

    test.ok(standalone, 'documentgetxmlstandalone04');

    test.done()
  },

  /**
   *
   Cretae a new DocumentType node whose systemId is StaffNS.DTD.  Create a new Document
   node.  Check if the value of the standalone attribute on the new Document is false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-standalone
   */
  documentgetxmlstandalone05: function (test) {
    var success;
    var doc;
    var newDoc;
    var newDocType;
    var domImpl;
    var standalone;
    var nullPubId = null;

    var docElem;
    var rootNS;
    var rootName;
    var docType;
    var sysId;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    docType = doc.doctype;

    sysId = docType.systemId;

    domImpl = doc.implementation;
    newDocType = domImpl.createDocumentType(rootName,nullPubId,sysId);
    newDoc = domImpl.createDocument(rootNS,rootName,newDocType);
    standalone = newDoc.xmlStandalone;

    test.equal(standalone, false, 'documentgetxmlstandalone05');

    test.done()
  },

  /**
   *
   Check if the value of the version attribute in the XML declaration of this document
   obtained by parsing staffNS.xml is "1.0".

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-version
   */
  documentgetxmlversion01: function (test) {
    var success;
    var doc;
    var versionValue;

    doc = hc_staff.hc_staff();
    versionValue = doc.xmlVersion;

    test.equal(versionValue, "1.0", 'documentgetxmlversion01');

    test.done()
  },

  /**
   *
   Check if the value of the version attribute in the XML declaration of a new document
   is "1.0".

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-version
   */
  documentgetxmlversion02: function (test) {
    var success;
    var doc;
    var newDoc;
    var versionValue;
    var domImpl;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    versionValue = newDoc.xmlVersion;

    test.equal(versionValue.toLowerCase(), "1.0".toLowerCase(), 'documentgetxmlversion02');

    test.done()
  },

  /**
   *
   Check if the value of the version attribute in a XML document without a XMLDecl is
   is "1.0".

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-version
   */
  documentgetxmlversion03: function (test) {
    var success;
    var doc;
    var versionValue;

    doc = barfoo.barfoo();
    versionValue = doc.xmlVersion;

    test.equal(versionValue.toLowerCase(), "1.0".toLowerCase(), 'documentgetxmlversion03');

    test.done()
  },

  /**
   *
   Invoke the normalizeDocument method on this document.  Retrieve the documentElement node
   and check the nodeName of this node to make sure it has not changed.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   */
  documentnormalizedocument01: function (test) {
    var success;
    var doc;
    var docElem;
    var docElemNodeName;
    var origDocElemNodeName;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();


    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    origDocElemNodeName = docElem.nodeName;

    domConfig = doc.domConfig;

    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    docElem = doc.documentElement;

    docElemNodeName = docElem.nodeName;

    test.equal(docElemNodeName, origDocElemNodeName, 'documentnormalizedocument01');

    test.done()
  },

  /**
   *
   Normalize a document with the 'cdata-sections' parameter set to false and
   check if the CDATASection has been preserved.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-cdata-sections
   */
  documentnormalizedocument02: function (test) {
    var success;
    var doc;
    var elemList;
    var elemName;
    var cdata;
    var text;
    var nodeName;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();


    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elemName = elemList.item(1);
    cdata = elemName.lastChild;

    nodeName = cdata.nodeName;

    test.equal(nodeName, "#cdata-section", 'documentnormalizedocument02');
    domConfig = doc.domConfig;

    domConfig.setParameter("cdata-sections", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizationError", 2);
    elemList = doc.getElementsByTagName("strong");
    elemName = elemList.item(1);
    cdata = elemName.lastChild;

    nodeName = cdata.nodeName;

    test.equal(nodeName, "#cdata-section", 'documentnormalizedocument02_true');
    domConfig.setParameter("cdata-sections", false);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalization2Error", 2);
    elemList = doc.getElementsByTagName("strong");
    elemName = elemList.item(1);
    text = elemName.lastChild;

    nodeName = text.nodeName;

    test.equal(nodeName, "#text", 'documentnormalizedocument02_false');

    test.done()
  },

  /**
   *
   Normalize a document with a created CDATA section with the
   'cdata-sections' parameter set to true then to false and check if
   the CDATASection has been preserved and then coalesced.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=416
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-cdata-sections
   */
  documentnormalizedocument03: function (test) {
    var success;
    var doc;
    var elem;
    var newCdata;
    var cdata;
    var text;
    var nodeName;
    var nodeValue;
    var appendedChild;
    var domConfig;
    var pList;
    errorMonitor = new DOMErrorMonitor();


    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    newCdata = doc.createCDATASection("CDATA");
    appendedChild = elem.appendChild(newCdata);
    domConfig = doc.domConfig;

    domConfig.setParameter("cdata-sections", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizationError", 2);
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    cdata = elem.lastChild;

    nodeName = cdata.nodeName;

    test.equal(nodeName, "#cdata-section", 'documentnormalizedocument03_true');
    domConfig.setParameter("cdata-sections", false);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalization2Error", 2);
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    text = elem.lastChild;

    nodeName = text.nodeName;

    test.equal(nodeName, "#text", 'documentnormalizedocument03_false');
    nodeValue = text.nodeValue;

    test.equal(nodeValue, "barCDATA", 'normalizedValue');

    test.done()
  },

  /**
   *
   Append a Comment node and normalize with "comments" set to false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=416
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-comments
   */
  documentnormalizedocument04: function (test) {
    var success;
    var doc;
    var elem;
    var newComment;
    var lastChild;
    var text;
    var nodeName;
    var appendedChild;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;

    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    newComment = doc.createComment("COMMENT_NODE");
    appendedChild = elem.appendChild(newComment);
    domConfig = doc.domConfig;

    domConfig.setParameter("comments", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizationError", 2);
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    lastChild = elem.lastChild;

    nodeName = lastChild.nodeName;

    test.equal(nodeName, "#comment", 'documentnormalizedocument04_true');
    domConfig.setParameter("comments", false);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalization2Error", 2);
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    lastChild = elem.lastChild;

    nodeName = lastChild.nodeName;

    test.equal(nodeName, "#text", 'hasChildText');

    test.done()
  },

  /**
   *
   Add a L1 element to a L2 namespace aware document and perform namespace normalization.  Should result
   in an error.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/namespaces-algorithms#normalizeDocumentAlgo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespaces
   */
  documentnormalizedocument05: function (test) {
    var success;
    var doc;
    var elem;
    var domConfig;
    var pList;
    var newChild;
    var retval;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var errorCount = 0;
    var severity;
    var problemNode;
    var location;
    var lineNumber;
    var columnNumber;
    var byteOffset;
    var utf16Offset;
    var uri;
    var type;
    var message;
    var relatedException;
    var relatedData;
    var length;

    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    newChild = doc.createElement("br");
    retval = elem.appendChild(newChild);
    domConfig = doc.domConfig;

    domConfig.setParameter("namespaces", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errors = errorMonitor.allErrors;
    for(var indexN100B6 = 0;indexN100B6 < errors.length; indexN100B6++) {
      error = errors[indexN100B6];
      severity = error.severity;


      if(
	(2 == severity)
      ) {
	location = error.location;

        problemNode = location.relatedNode;

        test.equal(problemNode, newChild, 'relatedNodeIsL1Node');
        lineNumber = location.lineNumber;

        test.equal(lineNumber, -1, 'lineNumber');
        columnNumber = location.columnNumber;

        test.equal(columnNumber, -1, 'columnNumber');
        byteOffset = location.byteOffset;

        test.equal(byteOffset, -1, 'byteOffset');
        utf16Offset = location.utf16Offset;

        test.equal(utf16Offset, -1, 'utf16Offset');
        uri = location.uri;

        test.equal(uri, null, 'uri');
        message = error.message;

        length = message.length;
      	test.ok((length > 0), 'messageNotEmpty');
        type = error.type;

        relatedData = error.relatedData;

        relatedException = error.relatedException;

        errorCount += 1;

      }

      else {
	test.equal(severity, 1, 'anyOthersShouldBeWarnings');

      }

    }
    test.equal(errorCount, 1, 'oneError');

    test.done()
  },

  /**
   *
   Add a CDATASection containing "]]>" perform normalization with split-cdata-sections=true.  Should result
   in an warning.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-split-cdata-sections
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-severity
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-message
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-type
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-relatedException
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-relatedData
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-location
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-line-number
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-column-number
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-byteOffset
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-utf16Offset
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-node
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-uri
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=542
   */
  documentnormalizedocument06: function (test) {
    var success;
    var doc;
    var elem;
    var domConfig;
    var elemList;
    var newChild;
    var oldChild;
    var retval;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var splittedCount = 0;
    var severity;
    var problemNode;
    var location;
    var lineNumber;
    var columnNumber;
    var byteOffset;
    var utf16Offset;
    var uri;
    var type;
    var message;
    var relatedException;
    var relatedData;
    var length;
    var nodeType;
    var nodeValue;

    doc = barfoo.barfoo();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    newChild = doc.createCDATASection("this is not ]]> good");
    oldChild = elem.firstChild;

    retval = elem.replaceChild(newChild,oldChild);
    domConfig = doc.domConfig;

    domConfig.setParameter("split-cdata-sections", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    newChild = elem.firstChild;

    nodeValue = newChild.nodeValue;

    nodeType = newChild.nodeType;


    {
      test.equal(((4 == nodeType) && (nodeValue.indexOf("]]>") >= 0)), false, 'wasSplit');
      errors = errorMonitor.allErrors;
      for(var indexN1010C = 0;indexN1010C < errors.length; indexN1010C++) {
        error = errors[indexN1010C];
        type = error.type;

        severity = error.severity;


	if(
	  ("cdata-sections-splitted" == type)
	) {
	  relatedData = error.relatedData;

          test.equal(relatedData, newChild, 'relatedData');
          test.equal(severity, 1, 'severity');
          message = error.message;

          length = message.length;
      	  test.ok((length > 0), 'messageNotEmpty');
          relatedException = error.relatedException;

          location = error.location;

          problemNode = location.relatedNode;

          test.equal(problemNode, newChild, 'relatedNode');
          lineNumber = location.lineNumber;

          columnNumber = location.columnNumber;

          byteOffset = location.byteOffset;

          utf16Offset = location.utf16Offset;

          uri = location.uri;

          splittedCount += 1;

	}

	else {
	  test.equal(severity, 1, 'anyOthersShouldBeWarnings');

	}

      }
      test.equal(splittedCount, 1, 'oneSplittedWarning');

    }
    test.done()
  },

  /**
   *
   Add a CDATASection containing "]]>" and perform normalization with split-cdata-sections=false.  Should result
   in an error.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-split-cdata-sections
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-severity
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-message
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-type
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-relatedException
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-relatedData
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ERROR-DOMError-location
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-line-number
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-column-number
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-byteOffset
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-utf16Offset
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-node
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMLocator-uri
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=542
   */
  documentnormalizedocument07: function (test) {
    var success;
    var doc;
    var elem;
    var domConfig;
    var elemList;
    var newChild;
    var oldChild;
    var retval;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var errorCount = 0;
    var severity;
    var problemNode;
    var location;
    var lineNumber;
    var columnNumber;
    var byteOffset;
    var utf16Offset;
    var uri;
    var type;
    var message;
    var relatedException;
    var relatedData;
    var length;

    doc = barfoo.barfoo();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    oldChild = elem.firstChild;

    newChild = doc.createCDATASection("this is not ]]> good");
    retval = elem.replaceChild(newChild,oldChild);
    domConfig = doc.domConfig;

    domConfig.setParameter("split-cdata-sections", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errors = errorMonitor.allErrors;
    for(var indexN100E0 = 0;indexN100E0 < errors.length; indexN100E0++) {
      error = errors[indexN100E0];
      severity = error.severity;


      if(
	(2 == severity)
      ) {
	location = error.location;

        problemNode = location.relatedNode;

        test.equal(problemNode, newChild, 'relatedNode');
        lineNumber = location.lineNumber;

        columnNumber = location.columnNumber;

        byteOffset = location.byteOffset;

        utf16Offset = location.utf16Offset;

        uri = location.uri;

        message = error.message;

        length = message.length;
      	test.ok((length > 0), 'messageNotEmpty');
        type = error.type;

        relatedData = error.relatedData;

        relatedException = error.relatedException;

        errorCount += 1;

      }

      else {
	test.equal(severity, 1, 'anyOthersShouldBeWarnings');

      }

    }
    test.equal(errorCount, 1, 'oneError');

    test.done()
  },

  /**
   *
   Add two CDATASections containing "]]>" perform normalization with split-cdata-sections=true.
   Should result in two warnings and at least 4 nodes.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-split-cdata-sections
   */
  documentnormalizedocument08: function (test) {
    var success;
    var doc;
    var elem;
    var domConfig;
    var elemList;
    var newChild;
    var oldChild;
    var retval;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var length;
    var childNodes;
    var type;
    var splittedCount = 0;
    var severity;

    doc = barfoo.barfoo();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    newChild = doc.createCDATASection("this is not ]]> good");
    oldChild = elem.firstChild;

    retval = elem.replaceChild(newChild,oldChild);
    newChild = doc.createCDATASection("this is not ]]> good");
    retval = elem.appendChild(newChild);
    domConfig = doc.domConfig;

    domConfig.setParameter("split-cdata-sections", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errors = errorMonitor.allErrors;
    for(var indexN100A3 = 0;indexN100A3 < errors.length; indexN100A3++) {
      error = errors[indexN100A3];
      type = error.type;

      severity = error.severity;


      if(
	("cdata-sections-splitted" == type)
      ) {
	splittedCount += 1;

      }

      else {
	test.equal(severity, 1, 'anyOthersShouldBeWarnings');

      }

    }
    test.equal(splittedCount, 2, 'twoSplittedWarning');
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    childNodes = elem.childNodes;

    length = childNodes.length;

    test.ok((length > 3), 'atLeast4ChildNodes');

    test.done()
  },


  /**
   *
   The normalizeDocument method method acts as if the document was going through a save
   and load cycle, putting the document in a "normal" form.

   Set the validate-if-schema feature to true.  Invoke the normalizeDocument method on this
   document.  Retrieve the documentElement node and check the nodeName of this node
   to make sure it has not changed.  Now set validate to false and verify the same.
   Register an error handler on this Document and in each case make sure that it does
   not get called.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-validate-if-schema
   */
  documentnormalizedocument09: function (test) {
    var success;
    var doc;
    var docElem;
    var docElemNodeName;
    var canSet;
    var errorHandler;
    errHandler = new DOMErrorMonitor();

    var domConfig;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    domConfig.setParameter("error-handler", errHandler.handleError);
    canSet = domConfig.canSetParameter("validate-if-schema",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate-if-schema", true);
      doc.normalizeDocument();
      docElem = doc.documentElement;

      docElemNodeName = docElem.nodeName;

      test.equal(docElemNodeName, "html", 'documentnormalizedocument09_True');

    }
    domConfig.setParameter("validate-if-schema", false);
    doc.normalizeDocument();
    docElem = doc.documentElement;

    docElemNodeName = docElem.nodeName;

    test.equal(docElemNodeName, "html", 'documentnormalizedocument09_False');

    test.done()
  },

  /**
   *
   The normalizeDocument method method acts as if the document was going through a save
   and load cycle, putting the document in a "normal" form.

   Create an Element and a text node and verify the nodeValue of this text node and append these to
   this Document.  If supported, invoke the setParameter method on this domconfiguration object to set the
   "element-content-whitespace"  feature to false.  Invoke the normalizeDocument method and verify if
   the text node has been discarded.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-element-content-whitespace
   */
  documentnormalizedocument10: function (test) {
    var success;
    var doc;
    var elem;
    var newText;
    var text;
    var nodeValue;
    var canSet;
    var appendedChild;
    var domConfig;

    doc = hc_staff.hc_staff();
    elem = doc.createElement("newElem");
    newText = doc.createTextNode("Text          Node");
    appendedChild = elem.appendChild(newText);
    appendedChild = doc.appendChild(elem);
    text = elem.firstChild;

    nodeValue = text.nodeValue;

    test.equal(nodeValue, "Text          Node", 'documentnormalizedocument10');
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("element-content-whitespace",true);
    test.ok(canSet, 'canSetElementContentWhitespaceTrue');
    domConfig.setParameter("element-content-whitespace", true);
    doc.normalizeDocument();
    text = elem.firstChild;

    nodeValue = text.nodeValue;

    test.equal(nodeValue, "Text          Node", 'documentnormalizedocument10_true1');
    canSet = domConfig.canSetParameter("element-content-whitespace",false);

    if(
      canSet
    ) {
      domConfig.setParameter("element-content-whitespace", false);
      doc.normalizeDocument();
      text = elem.firstChild;

      nodeValue = text.nodeValue;

      test.equal(nodeValue, "Text Node", 'documentnormalizedocument10_true2');

    }

    test.done()
  },

  /**
   *
   The normalizeDocument method method acts as if the document was going through a save
   and load cycle, putting the document in a "normal" form.
   The feature namespace-declarations when set to false, discards all namespace declaration attributes,
   although namespace prefixes are still retained.

   Set the normalization feature "namespace-declarations" to false, invoke normalizeDocument and verify
   the nodeName of element acquired by tagname.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespace-declarations
   */
  documentnormalizedocument11: function (test) {
    var success;
    var doc;
    var elemList;
    var elemName;
    var nodeName;
    var canSet;
    var domConfig;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    domConfig.setParameter("namespace-declarations", true);
    doc.normalizeDocument();
    elemList = doc.getElementsByTagNameNS("*","acronym");
    elemName = elemList.item(1);
    test.notEqual(elemName, null, 'documentnormalizedocument11_NotNullElem');
    canSet = domConfig.canSetParameter("namespace-declarations",false);

    if(
      canSet
    ) {
      domConfig.setParameter("namespace-declarations", false);
      doc.normalizeDocument();
      elemList = doc.getElementsByTagNameNS("*","acronym");
      elemName = elemList.item(1);
      nodeName = elemName.nodeName;

      test.equal(nodeName, "address", 'documentnormalizedocument11_namespaceDeclarations');

    }

    test.done()
  },

  /**
   *
   The normalizeDocument method method acts as if the document was going through a save
   and load cycle, putting the document in a "normal" form.

   Set the validate feature to true.  Invoke the normalizeDocument method on this
   document.  Retrieve the documentElement node and check the nodeName of this node
   to make sure it has not changed.  Now set validate to false and verify the same.
   Register an error handler on this Document and in each case make sure that it does
   not get called.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-validate
   */
  documentnormalizedocument12: function (test) {
    var success;
    var doc;
    var docElem;
    var docElemNodeName;
    var canSet;
    var domConfig;
    var errorHandler;
    errHandler = new DOMErrorMonitor();


    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    domConfig.setParameter("error-handler", errHandler.handleError);
    canSet = domConfig.canSetParameter("validate",true);

    if(
      canSet
    ) {
      domConfig.setParameter("validate", true);
      doc.normalizeDocument();
      docElem = doc.documentElement;

      docElemNodeName = docElem.nodeName;

      test.equal(docElemNodeName, "html", 'documentnormalizedocument08_True');

    }
    domConfig.setParameter("validate", false);
    doc.normalizeDocument();
    docElem = doc.documentElement;

    docElemNodeName = docElem.nodeName;

    test.equal(docElemNodeName, "html", 'documentnormalizedocument08_False');

    test.done()
  },

  /**
   *
   Add a L1 attribute to a L2 namespace aware document and perform namespace normalization.  Should result
   in an error.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/namespaces-algorithms#normalizeDocumentAlgo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespaces
   */
  documentnormalizedocument13: function (test) {
    var success;
    var doc;
    var elem;
    var domConfig;
    var pList;
    var newAttr;
    var retval;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var errorCount = 0;
    var severity;
    var problemNode;
    var location;
    var lineNumber;
    var columnNumber;
    var byteOffset;
    var utf16Offset;
    var uri;
    var type;
    var message;
    var relatedException;
    var relatedData;
    var length;

    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    elem.setAttribute("title","DOM L1 Attribute");
    newAttr = elem.getAttributeNode("title");
    domConfig = doc.domConfig;

    domConfig.setParameter("namespaces", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errors = errorMonitor.allErrors;
    for(var indexN100B6 = 0;indexN100B6 < errors.length; indexN100B6++) {
      error = errors[indexN100B6];
      severity = error.severity;


      if(
	(2 == severity)
      ) {
	location = error.location;

        problemNode = location.relatedNode;

        test.equal(problemNode, newAttr, 'relatedNodeIsL1Node');
        lineNumber = location.lineNumber;

        test.equal(lineNumber, -1, 'lineNumber');
        columnNumber = location.columnNumber;

        test.equal(columnNumber, -1, 'columnNumber');
        byteOffset = location.byteOffset;

        test.equal(byteOffset, -1, 'byteOffset');
        utf16Offset = location.utf16Offset;

        test.equal(utf16Offset, -1, 'utf16Offset');
        uri = location.uri;

        test.equal(uri, null, 'uri');
        message = error.message;

        length = message.length;
      	test.ok((length > 0), 'messageNotEmpty');
        type = error.type;

        relatedData = error.relatedData;

        relatedException = error.relatedException;

        errorCount += 1;

      }

      else {
	test.equal(severity, 1, 'anyOthersShouldBeWarnings');

      }

    }
    test.equal(errorCount, 1, 'oneError');

    test.done()
  },

  /**
   *
   Invoke the renameNode method to rename the class attribute node of the
   second element whose localName is acronym and namespaceURI http://www.nist.gov
   with the new namespaceURI as http://www.w3.org/DOM/Test and name as pre0fix:renamedNode.
   Check if this attribute has been renamed successfully by verifying the
   nodeName, namespaceURI, nodeType attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode01: function (test) {
    var success;
    var doc;
    var element;
    var attr;
    var childList;
    var renamedclass;
    var nodeName;
    var nodeType;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    element = childList.item(1);
    attr = element.getAttributeNode("class");
    renamedclass = doc.renameNode(attr,"http://www.w3.org/DOM/Test","renamedNode");
    nodeName = renamedclass.nodeName;

    namespaceURI = renamedclass.namespaceURI;

    nodeType = renamedclass.nodeType;

    test.equal(nodeName, "renamedNode", 'documentrenameode01_nodeName');
    test.equal(nodeType, 2, 'documentrenameNode01_nodeType');
    test.equal(namespaceURI, "http://www.w3.org/DOM/Test", 'documentrenamenode01_nodeValue');

    test.done()
  },

  /**
   *
   Invoke the renameNode method to rename the class attribute node of the
   second element whose localName is acronym and namespaceURI http://www.nist.gov
   with the new namespaceURI as http://www.w3.org/DOM/Test and name as prefi0x:renamedNode.
   Check if this attribute has been renamed successfully by verifying the
   nodeName, namespaceURI, nodeType attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode02: function (test) {
    var success;
    var doc;
    var element;
    var attr;
    var childList;
    var renamedclass;
    var nodeName;
    var nodeType;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    element = childList.item(1);
    attr = element.getAttributeNode("class");
    renamedclass = doc.renameNode(attr,"http://www.w3.org/DOM/Test","prefi0x:renamedNode");
    nodeName = renamedclass.nodeName;

    namespaceURI = renamedclass.namespaceURI;

    nodeType = renamedclass.nodeType;

    test.equal(nodeName, "prefi0x:renamedNode", 'documentrenamenode02_nodeName');
    test.equal(namespaceURI, "http://www.w3.org/DOM/Test", 'documentrenamenode02_namespaceURI');

    test.done()
  },

  /**
   *
   Invoke the renameNode method to rename a new attribute node to one whose
   namespaceURI is http://www.w3.org/DOM/Test and name is pre0:fix1.
   Check if this attribute has been renamed successfully by verifying the
   nodeName, namespaceURI, nodeType attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode03: function (test) {
    var success;
    var doc;
    var attr;
    var renamedNode;
    var nodeName;
    var namespaceURI;
    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    attr = doc.createAttributeNS(nullNSURI,"test");
    renamedNode = doc.renameNode(attr,"http://www.w3.org/DOM/Test","pre0:fix1");
    nodeName = renamedNode.nodeName;

    namespaceURI = renamedNode.namespaceURI;

    test.equal(nodeName, "pre0:fix1", 'documentrenamenode03_nodeName');
    test.equal(namespaceURI, "http://www.w3.org/DOM/Test", 'documentrenamenode02_namespaceURI');

    test.done()
  },

  /**
   *
   Invoke the renameNode method to rename a new attribute node to one whose
   namespaceURI is null and name is pf.
   Check if this attribute has been renamed successfully by verifying the
   nodeName, namespaceURI, nodeType attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode04: function (test) {
    var success;
    var doc;
    var attr;
    var renamedNode;
    var nodeName;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    renamedNode = doc.renameNode(attr,"","title");
    nodeName = renamedNode.nodeName;

    namespaceURI = renamedNode.namespaceURI;

    test.equal(nodeName, "title", 'documentrenamenode04_nodeName');
    test.equal(namespaceURI, null, 'documentrenamenode04_namespaceURI');

    test.done()
  },

  /**
   *
   Invoke the renameNode method to rename a new attribute node to one whose
   namespaceURI is null and name is rened.
   Check if this attribute has been renamed successfully by verifying the
   nodeName, namespaceURI, nodeType attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode05: function (test) {
    var success;
    var doc;
    var attr;
    var renamedNode;
    var nodeName;
    var namespaceURI;
    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    renamedNode = doc.renameNode(attr,nullNSURI,"title");
    nodeName = renamedNode.nodeName;

    namespaceURI = renamedNode.namespaceURI;

    test.equal(namespaceURI, null, 'documentrenamenode05_namespaceURI');
    test.equal(nodeName, "title", 'documentrenamenode05_nodeName');

    test.done()
  },

  /**
   *
   Invoke the renameNode method to rename the default attribute "dir" to xsi:schemaLocation.
   Check if this attribute has been renamed successfully by verifying the
   nodeName, namespaceURI, nodeType attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode06: function (test) {
    var success;
    var doc;
    var element;
    var attr;
    var childList;
    var renamedclass;
    var nodeName;
    var nodeType;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("p");
    element = childList.item(3);
    attr = element.getAttributeNode("dir");
    renamedclass = doc.renameNode(attr,"http://www.w3.org/2001/XMLSchema-instance","xsi:schemaLocation");
    nodeName = renamedclass.nodeName;

    namespaceURI = renamedclass.namespaceURI;

    nodeType = renamedclass.nodeType;

    test.equal(nodeName, "xsi:schemaLocation", 'documentrenameode01_nodeName');
    test.equal(nodeType, 2, 'documentrenameNode01_nodeType');
    test.equal(namespaceURI, "http://www.w3.org/2001/XMLSchema-instance", 'documentrenamenode01_nodeValue');

    test.done()
  },

  /**
   *
   Invoke the renameNode method on a new document node to rename a new attribute node
   to one whose namespaceURI is http://www.w3.org/XML/1998/namespace and name is xml:dom.
   Check if this attribute has been renamed successfully by verifying the
   nodeName and namespaceURI attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode07: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var attr;
    var renamedNode;
    var nodeName;
    var namespaceURI;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    attr = newDoc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    renamedNode = newDoc.renameNode(attr,"http://www.w3.org/XML/1998/namespace","xml:dom");
    nodeName = renamedNode.nodeName;

    namespaceURI = renamedNode.namespaceURI;

    test.equal(nodeName, "xml:dom", 'documentrenamenode07_nodeName');
    test.equal(namespaceURI, "http://www.w3.org/XML/1998/namespace", 'documentrenamenode07_namespaceURI');

    test.done()
  },

  /**
   *
   Invoke the renameNode method on a new document node and try to rename the default
   attribute "dir"
   Check if a WRONG_DOCUMENT_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode08: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var element;
    var attr;
    var childList;
    var renamedNode;
    var nullDocType = null;

    var docElem;
    var docElemNS;
    var docElemName;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("p");
    element = childList.item(3);
    attr = element.getAttributeNode("dir");
    domImpl = doc.implementation;
    docElem = doc.documentElement;

    docElemNS = docElem.namespaceURI;

    docElemName = docElem.tagName;

    newDoc = domImpl.createDocument(docElemNS,docElemName,nullDocType);

    {
      success = false;
      try {
        renamedNode = newDoc.renameNode(attr,"http://www.w3.org/XML/1998/namespace","xml:lang");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'documentrenamenode08_WRONG_DOCUMENT_ERR');
    }

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node. When the specified node was created
   from a different document than this document, a WRONG_DOCUMENT_ERR exception is thrown.

   Invoke the renameNode method on a new Document node to rename a new attribute node
   created in the original Document, but later adopted by this new document node.  The
   ownerDocument attribute of this attribute has now changed, such that the attribute node is considered to
   be created from this new document node. Verify that no exception is thrown upon renaming and verify
   the new nodeName of this attribute node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode09: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var attr;
    var renamedNode;
    var adopted;
    var nullDocType = null;

    var attrNodeName;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","dom:newD",nullDocType);
    attr = doc.createAttributeNS("http://www.w3.org/DOM/Test","test");
    adopted = newDoc.adoptNode(attr);
    renamedNode = newDoc.renameNode(attr,"http://www.w3.org/2000/xmlns/","xmlns:xmlns");
    attrNodeName = renamedNode.nodeName;

    test.equal(attrNodeName, "xmlns:xmlns", 'documentrenamenode09_1');

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node and raises a  NAMESPACE_ERR
   if the qualifiedName has a prefix and the namespaceURI is null but a
   NOT_SUPPORTED_ERR should be raised since the the type of the specified node is
   neither ELEMENT_NODE nor ATTRIBUTE_NODE.

   Invoke the renameNode method on a new document node to rename a node to nodes
   with malformed qualifiedNames.
   Check if a NOT_SUPPORTED_ERR gets thrown instead of a NAMESPACE_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode10: function (test) {
    var success;
    var doc;
    var textEntry = "hello";
    var textNode;
    var renamedNode;
    var qualifiedName;
    var nullDocType = null;

    qualifiedNames = new Array();
    qualifiedNames[0] = "_:";
    qualifiedNames[1] = ":0";
    qualifiedNames[2] = ":";
    qualifiedNames[3] = "a0:0";
    qualifiedNames[4] = "_:0;";
    qualifiedNames[5] = "a:::::c";


    doc = hc_staff.hc_staff();
    textNode = doc.createTextNode(textEntry);
    for(var indexN10060 = 0;indexN10060 < qualifiedNames.length; indexN10060++) {
      qualifiedName = qualifiedNames[indexN10060];

      {
	success = false;
	try {
          renamedNode = doc.renameNode(textNode,"http://www.w3.org/XML/1998/namespace",qualifiedName);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'documentrenamenode10_NOT_SUPPORTED_ERR');
      }

    }

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node and raises a  NAMESPACE_ERR
   if the qualifiedName has a prefix and the namespaceURI is null but a
   NOT_SUPPORTED_ERR should be raised since the the type of the specified node is
   neither ELEMENT_NODE nor ATTRIBUTE_NODE.

   Invoke the renameNode method on this document node to rename a text node such that its
   qualifiedName has a prefix and namespaceURI is null.
   Check if a NOT_SUPPORTED_ERR gets thrown instead of a NAMESPACE_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode11: function (test) {
    var success;
    var doc;
    var textEntry = "hello";
    var textNode;
    var renamedNode;
    var nullDocType = null;

    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    textNode = doc.createTextNode(textEntry);

    {
      success = false;
      try {
        renamedNode = doc.renameNode(textNode,nullNSURI,"pre:fix");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode11_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node and raises a  NAMESPACE_ERR
   if the qualifiedName has a prefix and the namespaceURI is null but a
   NOT_SUPPORTED_ERR should be raised since the the type of the specified node is
   neither ELEMENT_NODE nor ATTRIBUTE_NODE.

   Invoke the renameNode method on this document node to rename a text node such that its
   qualifiedName has a prefix that is "xml" and namespaceURI is "http://www.w3.org/XML/1999/namespace".
   Check if a NOT_SUPPORTED_ERR gets thrown instead of a NAMESPACE_ERR since the type of node is not valid
   for this method.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode12: function (test) {
    var success;
    var doc;
    var renamedNode;
    var textEntry = "hello";
    var textNode;

    doc = hc_staff.hc_staff();
    textNode = doc.createTextNode(textEntry);

    {
      success = false;
      try {
        renamedNode = doc.renameNode(textNode,"http://www.w3.org/XML/1999/namespace","xml:prefix");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode12_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node and raises a NAMESPACE_ERR
   if the qualifiedName has a prefix and the namespaceURI is null but a
   NOT_SUPPORTED_ERR should be raised since the the type of the specified node is
   neither ELEMENT_NODE nor ATTRIBUTE_NODE.

   Invoke the renameNode method on this document node to rename a text node such that its
   qualifiedName has a prefix that is "xmlns"and namespaceURI is "http://www.w3.org/XML/1998/namespace".
   Check if a NOT_SUPPORTED_ERR gets thrown instead of a NAMESPACE_ERR since the type of node is not valid
   for this method.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode13: function (test) {
    var success;
    var doc;
    var textEntry = "hello";
    var textNode;
    var renamedNode;

    doc = hc_staff.hc_staff();
    textNode = doc.createTextNode(textEntry);

    {
      success = false;
      try {
        renamedNode = doc.renameNode(textNode,"http://www.w3.org/XML/1998/namespace","xmlns:prefix");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode13_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node and raises a NAMESPACE_ERR
   if the qualifiedName has a prefix and the namespaceURI is null but a
   NOT_SUPPORTED_ERR should be raised since the the type of the specified node is
   neither ELEMENT_NODE nor ATTRIBUTE_NODE.

   Invoke the renameNode method on this document node to rename a text node such that its
   qualifiedName is "xmlns"and namespaceURI is "http://www.w3.org/2000/xmlns".
   Check if a NOT_SUPPORTED_ERR gets thrown instead of a NAMESPACE_ERR since the type of node is
   not valid for this method.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode14: function (test) {
    var success;
    var doc;
    var renamedNode;
    var nullDocType = null;

    var textEntry = "hello";
    var textNode;

    doc = hc_staff.hc_staff();
    textNode = doc.createTextNode(textEntry);

    {
      success = false;
      try {
        renamedNode = doc.renameNode(textNode,"http://www.w3.org/2000/xmlns","xmlns");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode14_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Rename the fourth acronym element to svg:rect and verify the
   nodeName, namespaceURI, nodeType attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode15: function (test) {
    var success;
    var doc;
    var element;
    var childList;
    var renamedclass;
    var nodeName;
    var nodeType;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    element = childList.item(3);
    renamedclass = doc.renameNode(element,"http://www.w3.org/DOM/Test","qnam:renamedNode");
    nodeName = renamedclass.nodeName;

    namespaceURI = renamedclass.namespaceURI;

    nodeType = renamedclass.nodeType;

    test.equal(nodeName, "qnam:renamedNode", 'documentrenamenode15_nodeName');
    test.equal(nodeType, 1, 'documentrenamenode15_nodeType');
    test.equal(namespaceURI, "http://www.w3.org/DOM/Test", 'documentrenamenode15_nodeValue');

    test.done()
  },

  /**
   *
   Invoke the renameNode method to rename the fourth
   acronym element with a new namespaceURI that is
   null and qualifiedName that is renamedNode.
   Check if this element has been renamed successfully by verifying the
   nodeName, attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode16: function (test) {
    var success;
    var doc;
    var element;
    var childList;
    var renamedclass;
    var nodeName;
    var nodeType;
    var namespaceURI;
    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    element = childList.item(3);
    renamedclass = doc.renameNode(element,nullNSURI,"renamedNode");
    nodeName = renamedclass.nodeName;

    namespaceURI = renamedclass.namespaceURI;

    nodeType = renamedclass.nodeType;

    test.equal(nodeName, "renamedNode", 'documentrenamenode16_nodeName');
    test.equal(nodeType, 1, 'documentrenamenode16_nodeType');
    test.equal(namespaceURI, null, 'documentrenamenode16_nodeValue');

    test.done()
  },

  /**
   *
   Invoke the renameNode method to rename a new element node of a new document so that
   its namespaceURI is http://www.w3.org/2000/xmlns/ and qualifiedName is xmlns:xmlns.
   Check if this element has been renamed successfully by verifying the
   nodeName, attributes of the renamed node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode17: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var element;
    var renamedNode;
    var nodeName;
    var nodeType;
    var namespaceURI;
    var docElem;
    var rootNS;
    var rootTagname;
    var nullDocType = null;


    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootTagname,nullDocType);
    element = newDoc.createElementNS("http://www.w3.org/1999/xhtml","body");
    renamedNode = newDoc.renameNode(element,"http://www.w3.org/1999/xhtml","xhtml:head");
    nodeName = renamedNode.nodeName;

    namespaceURI = renamedNode.namespaceURI;

    nodeType = renamedNode.nodeType;

    test.equal(nodeName, "xhtml:head", 'documentrenamenode16_nodeName');
    test.equal(nodeType, 1, 'documentrenamenode16_nodeType');
    test.equal(namespaceURI, "http://www.w3.org/1999/xhtml", 'documentrenamenode16_nodeValue');

    test.done()
  },

  /**
   *
   Invoke the renameNode method on this document and try to rename a new element
   node of a new document.
   Check if a WRONG_DOCUMENT_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode18: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var element;
    var renamedNode;
    var docElem;
    var rootNS;
    var rootTagname;
    var nullDocType = null;


    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootTagname,nullDocType);
    element = newDoc.createElementNS("http://www.w3.org/1999/xhtml","body");

    {
      success = false;
      try {
        renamedNode = doc.renameNode(element,"http://www.w3.org/1999/xhtml","head");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'documentrenamenode18_WRONG_DOCUMENT_ERR');
    }

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node and raises a NAMESPACE_ERR
   if the qualifiedName is malformed per the Namespaces in XML specification.

   Invoke the renameNode method on a new document node to rename a node to nodes
   with malformed qualifiedNames.
   Check if a NAMESPACE_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode19: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var element;
    var renamedNode;
    var qualifiedName;
    var nullDocType = null;

    qualifiedNames = new Array();
    qualifiedNames[0] = "a_:";
    qualifiedNames[1] = "_:";
    qualifiedNames[2] = ":";
    qualifiedNames[3] = "::0;";
    qualifiedNames[4] = "a:-:c";


    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","newD",nullDocType);
    element = doc.createElementNS("http://www.w3.org/DOM/Test","test");
    for(var indexN1006C = 0;indexN1006C < qualifiedNames.length; indexN1006C++) {
      qualifiedName = qualifiedNames[indexN1006C];

      {
	success = false;
	try {
          renamedNode = doc.renameNode(element,"http://www.w3.org/2000/XMLNS",qualifiedName);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 14);
	}
	test.ok(success, 'documentrenamenode19_NAMESPACE_ERR');
      }

    }

    test.done()
  },

  /**
   *
   Invoke the renameNode method on this document node to rename a node such that its
   qualifiedName has a prefix that is "xml:html" and namespaceURI is
   "http://www.example.com/namespace".
   Check if a NAMESPACE_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode20: function (test) {
    var success;
    var doc;
    var element;
    var renamedNode;
    var docElem;
    var rootNS;
    var rootTagname;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;

    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;

    element = doc.createElementNS(rootNS,rootTagname);

    {
      success = false;
      try {
        renamedNode = doc.renameNode(element,"http://www.example.com/xml","xml:html");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the renameNode method on this document node to rename a node such that its
   qualifiedName has a prefix that is "xmlns:xml"and namespaceURI is "http://www.w3.org/2000/XMLNS/".
   Check if a NAMESPACE_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode21: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var attr;
    var renamedNode;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    attr = newDoc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");

    {
      success = false;
      try {
        renamedNode = newDoc.renameNode(attr,"http://www.w3.org/2000/XMLNS/","xmlns:xml");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the renameNode method on this document node to rename a node such that its
   qualifiedName is "xmlns"and namespaceURI is "http://www.w3.org/1999/xmlns/".
   Check if a NAMESPACE_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode22: function (test) {
    var success;
    var doc;
    var attr;
    var renamedNode;

    doc = hc_staff.hc_staff();
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");

    {
      success = false;
      try {
        renamedNode = doc.renameNode(attr,"http://www.w3.org/1999/xmlns/","xmlns");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node and raises a  NOT_SUPPORTED_ERR
   if the type of the specified node is neither ELEMENT_NODE nor ATTRIBUTE_NODE.

   Invoke the renameNode method on this document node to attempt to rename itself.
   Check if a NOT_SUPPORTED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode23: function (test) {
    var success;
    var doc;
    var renamedNode;
    var docowner;

    doc = hc_staff.hc_staff();

    {
      success = false;
      try {
        renamedNode = doc.renameNode(doc,"http://www.w3.org/DOM/Test","root");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode23_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   The method renameNode renames an existing node and raises a  NOT_SUPPORTED_ERR
   if the type of the specified node is neither ELEMENT_NODE nor ATTRIBUTE_NODE.

   Invoke the renameNode method on this document node to attempt to rename itself.
   The namespaceURI specified here is null and the name has a prefix.
   Check if a NOT_SUPPORTED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode24: function (test) {
    var success;
    var doc;
    var renamedNode;
    var nullNSURI = null;

    var docowner;

    doc = hc_staff.hc_staff();

    {
      success = false;
      try {
        renamedNode = doc.renameNode(doc,nullNSURI,"doc:root");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode24_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the renameNode method to attempt to rename a DOcumentType node of this Document.
   Check if a NOT_SUPPORTED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode25: function (test) {
    var success;
    var doc;
    var docType;
    var renamedNode;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;


    {
      success = false;
      try {
        renamedNode = doc.renameNode(docType,"http://www.w3.org/DOM/Test","root");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode25_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the renameNode method oto attempt to rename a new DocumentFragment node
   of this Document.
   Check if a NOT_SUPPORTED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode26: function (test) {
    var success;
    var doc;
    var docFrag;
    var renamedNode;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();

    {
      success = false;
      try {
        renamedNode = doc.renameNode(docFrag,"http://www.w3.org/DOM/Test","root");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode26_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the renameNode method to attempt to rename new Text, Comment, CDataSection,
   ProcessingInstruction and EntityReference nodes of a new Document.
   Check if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode27: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var text;
    var comment;
    var cdata;
    var pi;
    var entref;
    var renamedTxt;
    var renamedComment;
    var renamedCdata;
    var renamedPi;
    var renamedEntRef;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    text = newDoc.createTextNode("text");
    comment = newDoc.createComment("comment");
    cdata = newDoc.createCDATASection("cdata");
    pi = newDoc.createProcessingInstruction("pit","pid");
    entref = newDoc.createEntityReference("alpha");

    {
      success = false;
      try {
        renamedTxt = newDoc.renameNode(text,"http://www.w3.org/DOM/Test","text");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR_1');
    }

    {
      success = false;
      try {
        renamedComment = newDoc.renameNode(comment,"http://www.w3.org/DOM/Test","comment");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR_2');
    }

    {
      success = false;
      try {
        renamedCdata = newDoc.renameNode(cdata,"http://www.w3.org/DOM/Test","cdata");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR_3');
    }

    {
      success = false;
      try {
        renamedPi = newDoc.renameNode(pi,"http://www.w3.org/DOM/Test","pi");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR_4');
    }

    {
      success = false;
      try {
        renamedEntRef = newDoc.renameNode(entref,"http://www.w3.org/DOM/Test","entref");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR_5');
    }

    test.done()
  },

  /**
   *
   Invoke the renameNode method to attempt to rename a Entity and Notation nodes of this Document.
   Check if a NOT_SUPPORTED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode28: function (test) {
    var success;
    var doc;
    var docType;
    var entityNodeMap;
    var notationNodeMap;
    var entity;
    var notation;
    var renamedEntityNode;
    var renamedNotationNode;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entityNodeMap = docType.entities;

    notationNodeMap = docType.notations;

    entity = entityNodeMap.getNamedItem("alpha");
    notation = notationNodeMap.getNamedItem("notation1");

    {
      success = false;
      try {
        renamedEntityNode = doc.renameNode(entity,"http://www.w3.org/DOM/Test","beta");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode28_ENTITY_NOT_SUPPORTED_ERR');
    }

    {
      success = false;
      try {
        renamedNotationNode = doc.renameNode(notation,"http://www.w3.org/DOM/Test","notation2");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'documentrenamenode28_NOTATION_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke the renameNode method to attempt to rename an Element node of a XML1.0 document
   with a name that contains an invalid XML 1.0 character and check if a INVALID_CHARACTER_ERR
   gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-renameNode
   */
  documentrenamenode29: function (test) {
    var success;
    var doc;
    var docElem;
    var renamed;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;


    {
      success = false;
      try {
        renamed = doc.renameNode(docElem,"http://www.w3.org/DOM/Test","@");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'documentrenamenode29_ENTITY_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   *
   The setDocmentURI method set the location of the document.

   Set the documentURI to a valid string and retreive the documentURI of this
   document and verify if it is was correctly set.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-documentURI
   */
  documentsetdocumenturi01: function (test) {
    var doc = hc_staff.hc_staff();
    doc.documentURI = "file:///test";
    test.equal(doc.documentURI, "file:///test", 'documentsetdocumenturi01');
    test.done()
  },

  /**
   *
   The setDocmentURI method set the location of the document.

   Set the documentURI to null and retreive the documentURI of this document and verify
   if it is was set to null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-documentURI
   */
  documentsetdocumenturi02: function (test) {
    var doc = hc_staff.hc_staff();
    doc.documentURI = null;
    test.equal(doc.documentURI, null, 'documentsetdocumenturi02');
    test.done()
  },

  /**
   *
   The setDocmentURI method set the location of the document.

   Create a new document and set its documentURI to a valid string.  Retrieve the documentURI
   and verify if it is was correctly set.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-documentURI
   */
  documentsetdocumenturi03: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var docURI;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newDoc.documentURI = "somestring";

    docURI = newDoc.documentURI;

    test.equal(docURI, "somestring", 'documentsetdocumenturi03');

    test.done()
  },

  /**
   *
   Set the strictErrorChecking attribute value on this documentNode to false and then to true.
   Call the createAttributeNS method on this document with an illegal character in the qualifiedName
   and check if the INVALID_CHARACTER_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-strictErrorChecking
   */
  documentsetstricterrorchecking01: function (test) {
    var success;
    var doc;
    var newAttr;

    doc = hc_staff.hc_staff();
    doc.strictErrorChecking = false;

    doc.strictErrorChecking = true;


    {
      success = false;
      try {
        newAttr = doc.createAttributeNS("http://www.w3.org/DOM/Test","@");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'INVALID_CHARACTER_ERR_documentsetstricterrorchecking01');
    }

    test.done()
  },

  /**
   *
   Set the strictErrorChecking attribute value on a new Document to true.
   Call the createAttributeNS method on this document with a a null namespaceURI and a qualified name
   with a prefix and check if the NAMESPACE_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-strictErrorChecking
   */
  documentsetstricterrorchecking02: function (test) {
    var success;
    var doc;
    var newAttr;
    var nullValue = null;


    doc = hc_staff.hc_staff();
    doc.strictErrorChecking = true;


    {
      success = false;
      try {
        newAttr = doc.createAttributeNS(nullValue,"dom:test");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'NAMESPACE_ERR_documentsetstricterrorchecking02');
    }

    test.done()
  },

  /**
   *
   Set the strictErrorChecking attribute value on a new Document to false and check if it was
   correctly set using getStrictErrorChecking.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-strictErrorChecking
   */
  documentsetstricterrorchecking03: function (test) {
    var success;
    var doc;
    var strictErrorCheckingValue;

    doc = hc_staff.hc_staff();
    doc.strictErrorChecking = false;

    strictErrorCheckingValue = doc.strictErrorChecking;

    test.equal(strictErrorCheckingValue, false, 'documentsetstricterrorchecking03');

    test.done()
  },

  /**
   *
   Set the standalone attribute of this document to true and verify if the attribute was correctly
   set.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-standalone
   */
  documentsetxmlstandalone01: function (test) {
    var success;
    var doc;
    var standalone;

    doc = hc_staff.hc_staff();
    doc.xmlStandalone = true;

    standalone = doc.xmlStandalone;

    test.ok(standalone, 'documentsetxmlstandalone01');

    test.done()
  },

  /**
   *
   Create a new document object and set standalone to false and check if it was correctly set.
   Then repeat this by setting it to true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-standalone
   */
  documentsetxmlstandalone02: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var standalone;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newDoc.xmlStandalone = false;

    standalone = newDoc.xmlStandalone;

    test.equal(standalone, false, 'documentsetxmlstandalone02_false');
    newDoc.xmlStandalone = true;

    standalone = newDoc.xmlStandalone;

    test.ok(standalone, 'documentsetxmlstandalone02_true');

    test.done()
  },

  /**
   *
   Set the value of the version attribute of the XML declaration of this document to
   various invalid characters and  verify if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-version
   */
  documentsetxmlversion01: function (test) {
    var success;
    var doc;
    var versionValue;
    illegalVersion = new Array();
    illegalVersion[0] = "{";
    illegalVersion[1] = "}";
    illegalVersion[2] = "~";
    illegalVersion[3] = "'";
    illegalVersion[4] = "!";
    illegalVersion[5] = "@";
    illegalVersion[6] = "#";
    illegalVersion[7] = "$";
    illegalVersion[8] = "%";
    illegalVersion[9] = "^";
    illegalVersion[10] = "&";
    illegalVersion[11] = "*";
    illegalVersion[12] = "(";
    illegalVersion[13] = ")";
    illegalVersion[14] = "+";
    illegalVersion[15] = "=";
    illegalVersion[16] = "[";
    illegalVersion[17] = "]";
    illegalVersion[18] = "\\";
    illegalVersion[19] = "/";
    illegalVersion[20] = ";";
    illegalVersion[21] = "`";
    illegalVersion[22] = "<";
    illegalVersion[23] = ">";
    illegalVersion[24] = ",";
    illegalVersion[25] = "a ";
    illegalVersion[26] = "\"";
    illegalVersion[27] = "---";


    doc = hc_staff.hc_staff();
    for(var indexN10087 = 0;indexN10087 < illegalVersion.length; indexN10087++) {
      versionValue = illegalVersion[indexN10087];

      {
	success = false;
	try {
          doc.xmlVersion = versionValue;

        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'NOT_SUPPORTED_ERR_documentsetversion01');
      }

    }

    test.done()
  },

  /**
   *
   Set the value of the version attribute of the XML declaration of a new document to "1.0"
   and check if it was correctly set.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-version
   */
  documentsetxmlversion02: function (test) {
    var success;
    var doc;
    var versionValue;
    var newDoc;
    var domImpl;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newDoc.xmlVersion = "1.0";

    versionValue = newDoc.xmlVersion;

    test.equal(versionValue, "1.0", 'documentsetxmlversion02');

    test.done()
  },

  /**
   *
   Set the value of the version attribute of the XML declaration of a new document to "1.0"
   and check if it was correctly set.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-version
   */
  documentsetxmlversion03: function (test) {
    var success;
    var doc;
    var versionValue;
    var newDoc;
    var domImpl;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    newDoc.xmlVersion = "1.1";

    versionValue = newDoc.xmlVersion;

    test.equal(versionValue, "1.1", 'documentsetxmlversion03');

    test.done()
  },

  /**
   *
   Set the value of the version attribute of the XML declaration of a new document to "-"
   and check if a NOT_SUPPORTED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-version
   */
  documentsetxmlversion05: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);

    {
      success = false;
      try {
        newDoc.xmlVersion = "-";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }

    test.done()
  },

  /**
   * Checks behavior of "canonical-form" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-property
   */
  domconfigcanonicalform1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;
    var canSet;
    var state;
    var parameter = "cAnOnical-form";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;
    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);

    if(canSet) {
      domConfig.setParameter(parameter, true);
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setTrueEffective');
    } else {
      success = false;
      try {
        domConfig.setParameter(parameter, true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setTrueNotEffective');
    }
    domConfig.setParameter(parameter, false);
    test.done()
  },

  /**
   * Checks behavior of "cdata-sections" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-cdata-sections
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigcdatasections1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;
    var canSet;
    var state;
    var parameter = "cDaTa-sections";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;
    state = domConfig.getParameter(parameter);
    test.ok(state, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    domConfig.setParameter(parameter, false);
    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'setFalseEffective');
    domConfig.setParameter(parameter, true);
    state = domConfig.getParameter(parameter);
    test.ok(state, 'setTrueEffective');
    test.done()
  },

  /**
   * Checks behavior of "check-character-normalization" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-check-character-normalization
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigcheckcharacternormalization1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "cHeCk-character-normalization";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, true);
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setTrueEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, true);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      }
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setTrueNotEffective');

    }
    domConfig.setParameter(parameter, false);

    test.done()
  },

  /**
   * Checks behavior of "comments" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-comments
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfigcomments1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "cOmments";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.ok(state, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    domConfig.setParameter(parameter, false);
    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'setFalseEffective');
    domConfig.setParameter(parameter, true);
    state = domConfig.getParameter(parameter);
    test.ok(state, 'setTrueEffective');

    test.done()
  },

  /**
   * Checks behavior of "datatype-normalization" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfigdatatypenormalization1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "dAtAtype-normalization";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, true);
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setTrueEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, true);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      }
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setTrueNotEffective');

    }
    domConfig.setParameter(parameter, false);

    test.done()
  },

  /**
   * Setting "datatype-normalization" to true also forces "validate" to true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfigdatatypenormalization2: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "datatype-normalization";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    domConfig.setParameter("validate", false);
    canSet = domConfig.canSetParameter(parameter,true);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, true);
      state = domConfig.getParameter("validate");
      test.ok(state, 'validateSet');

    }

    test.done()
  },

  /**
   * Checks behavior of "element-content-whitespace" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-element-content-whitespace
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigelementcontentwhitespace1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "eLeMent-content-whitespace";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.ok(state, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    canSet = domConfig.canSetParameter(parameter,false);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, false);
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setFalseEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, false);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      }
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setFalseNotEffective');

    }
    domConfig.setParameter(parameter, true);

    test.done()
  },

  /**
   * Checks behavior of "entities" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-entities
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigentities1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "eNtIties";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.ok(state, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    domConfig.setParameter(parameter, false);
    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'setFalseEffective');
    domConfig.setParameter(parameter, true);
    state = domConfig.getParameter(parameter);
    test.ok(state, 'setTrueEffective');

    test.done()
  },


  /**
   * Checks behavior of "error-handler" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-error-handler
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=544
   */
  domconfigerrorhandler1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var origHandler;
    var state;
    var parameter = "eRrOr-handler";
    errorHandler = new DOMErrorMonitor();

    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    origHandler = domConfig.getParameter(parameter);
    canSet = domConfig.canSetParameter(parameter,errorHandler);
    test.ok(canSet, 'canSetNewHandler');
    canSet = domConfig.canSetParameter(parameter,origHandler);
    test.ok(canSet, 'canSetOrigHandler');
    domConfig.setParameter(parameter, errorHandler.handleError);
    state = domConfig.getParameter(parameter);
    test.equal(state, errorHandler, 'setToNewHandlerEffective');
    domConfig.setParameter(parameter, origHandler.handleError);
    state = domConfig.getParameter(parameter);
    test.equal(state, origHandler, 'setToOrigHandlerEffective');
    canSet = domConfig.canSetParameter(parameter,true);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, true);

    }

    test.done()
  },

  /**
   * Calls DOMConfiguration.setParameter("error-handler", null).  Spec
   does not explicitly address the case.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-error-handler
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigerrorhandler2: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var errorHandler = null;

    var parameter = "error-handler";
    var state;
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter(parameter,errorHandler);
    test.ok(canSet, 'canSetNull');
    domConfig.setParameter(parameter, errorHandler.handleError);
    state = domConfig.getParameter(parameter);
    test.equal(state, null, 'errorHandlerIsNull');

    test.done()
  },

  /**
   * Checks behavior of "infoset" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-cdata-sections
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-entities
   */
  domconfiginfoset1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "iNfOset";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    domConfig.setParameter(parameter, true);
    state = domConfig.getParameter(parameter);
    test.ok(state, 'setTrueIsEffective');
    state = domConfig.getParameter("entities");
    test.equal(state, false, 'entitiesSetFalse');
    state = domConfig.getParameter("cdata-sections");
    test.equal(state, false, 'cdataSectionsSetFalse');
    domConfig.setParameter(parameter, false);
    state = domConfig.getParameter(parameter);
    test.ok(state, 'setFalseIsNoOp');
    domConfig.setParameter("entities", true);
    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'setEntitiesTrueInvalidatesInfoset');

    test.done()
  },

  /**
   * Checks behavior of "namespace-declarations" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespace-declarations
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfignamespacedeclarations1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "nAmEspace-declarations";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.ok(state, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    domConfig.setParameter(parameter, false);
    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'setFalseEffective');
    domConfig.setParameter(parameter, true);
    state = domConfig.getParameter(parameter);
    test.ok(state, 'setTrueEffective');

    test.done()
  },

  /**
   * Checks behavior of "namespaces" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespaces
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfignamespaces1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "nAmEspaces";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.ok(state, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    canSet = domConfig.canSetParameter(parameter,false);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, false);
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setFalseEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, false);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      }
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setFalseNotEffective');

    }
    domConfig.setParameter(parameter, true);

    test.done()
  },

  /**
   * Document.getParameter("namespaces") should be true regardles if the
   parse that created the document was namespace aware.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespaces
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfignamespaces2: function (test) {
    var success;
    var doc;
    var domConfig;
    var state;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    state = domConfig.getParameter("namespaces");
    test.ok(state, 'namespacesTrue');

    test.done()
  },

  /**
   * Checks behavior of "normalize-characters" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfignormalizecharacters1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "nOrMalize-characters";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, true);
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setTrueEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, true);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      }
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setTrueNotEffective');

    }
    domConfig.setParameter(parameter, false);

    test.done()
  },

  /**
   * Checks getParameterNames and canSetParameter for Document.domConfig.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-domConfig
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-parameterNames
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-canonical-form
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-cdata-sections
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-check-character-normalization
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-comments
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-datatype-normalization
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-entities
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-error-handler
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespaces
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespace-declarations
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-split-cdata-sections
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-validate
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-validate-if-schema
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-well-formed
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-element-content-whitespace
   */
  domconfigparameternames01: function (test) {
    var success;
    var domImpl;
    var doc;
    var config;
    var state;
    var parameterNames;
    var parameterName;
    var matchCount = 0;
    var paramValue;
    var canSet;

    doc = barfoo.barfoo();
    config = doc.domConfig;

    test.notEqual(config, null, 'configNotNull');
    parameterNames = config.parameterNames;

    test.notEqual(parameterNames, null, 'parameterNamesNotNull');
    for(var indexN1008C = 0;indexN1008C < parameterNames.length; indexN1008C++) {
      parameterName = parameterNames.item(indexN1008C);
      paramValue = config.getParameter(parameterName);
      canSet = config.canSetParameter(parameterName,paramValue);
      test.ok(canSet, 'canSetToDefaultValue');
      config.setParameter(parameterName, paramValue);

      if(

	(("canonical-form".toUpperCase() == parameterName.toUpperCase()) || ("cdata-sections".toUpperCase() == parameterName.toUpperCase()) || ("check-character-normalization".toUpperCase() == parameterName.toUpperCase()) || ("comments".toUpperCase() == parameterName.toUpperCase()) || ("datatype-normalization".toUpperCase() == parameterName.toUpperCase()) || ("entities".toUpperCase() == parameterName.toUpperCase()) || ("error-handler".toUpperCase() == parameterName.toUpperCase()) || ("infoset".toUpperCase() == parameterName.toUpperCase()) || ("namespaces".toUpperCase() == parameterName.toUpperCase()) || ("namespace-declarations".toUpperCase() == parameterName.toUpperCase()) || ("normalize-characters".toUpperCase() == parameterName.toUpperCase()) || ("split-cdata-sections".toUpperCase() == parameterName.toUpperCase()) || ("validate".toUpperCase() == parameterName.toUpperCase()) || ("validate-if-schema".toUpperCase() == parameterName.toUpperCase()) || ("well-formed".toUpperCase() == parameterName.toUpperCase()) || ("element-content-whitespace".toUpperCase() == parameterName.toUpperCase()))

      ) {
	matchCount += 1;

      }

    }
    test.equal(matchCount, 16, 'definedParameterCount');

    test.done()
  },

  /**
   * Checks behavior of "schema-location" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-schema-location
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigschemalocation1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "sChEma-location";
    var nullSchemaLocation = null;

    var sampleSchemaLocation = "http://www.example.com/schemas/sampleschema.xsd";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter(parameter,true);
    test.equal(canSet, false, 'canSetTrue');

    try {
      state = domConfig.getParameter(parameter);
      test.equal(state, null, 'defaultSchemaLocation');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    canSet = domConfig.canSetParameter(parameter,sampleSchemaLocation);
    test.ok(canSet, 'canSetURI');
    canSet = domConfig.canSetParameter(parameter,nullSchemaLocation);
    test.ok(canSet, 'canSetNull');
    domConfig.setParameter(parameter, sampleSchemaLocation);
    state = domConfig.getParameter(parameter);
    test.equal(state, sampleSchemaLocation, 'setURIEffective');
    domConfig.setParameter(parameter, nullSchemaLocation);
    state = domConfig.getParameter(parameter);
    test.equal(state, null, 'setNullEffective');

    test.done()
  },

  /**
   * Checks behavior of "schema-type" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-schema-type
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigschematype1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "sChEma-type";
    var xmlSchemaType = "http://www.w3.org/2001/XMLSchema";
    var dtdType = "http://www.w3.org/TR/REC-xml";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter(parameter,true);
    test.equal(canSet, false, 'canSetTrue');

    try {
      state = domConfig.getParameter(parameter);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    canSet = domConfig.canSetParameter(parameter,dtdType);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, dtdType);
      state = domConfig.getParameter(parameter);
      test.equal(state, dtdType, 'setDTDEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, dtdType);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR_dtd');
      }

    }
    canSet = domConfig.canSetParameter(parameter,xmlSchemaType);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, xmlSchemaType);
      state = domConfig.getParameter(parameter);
      test.equal(state, xmlSchemaType, 'setSchemaEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, xmlSchemaType);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR_schema');
      }

    }

    test.done()
  },

  /**
   * Checks behavior of "split-cdata-sections" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-split-cdata-sections
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigsplitcdatasections1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "sPlIt-cdata-sections";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.ok(state, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    domConfig.setParameter(parameter, false);
    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'setFalseEffective');
    domConfig.setParameter(parameter, true);
    state = domConfig.getParameter(parameter);
    test.ok(state, 'setTrueEffective');

    test.done()
  },

  /**
   *
   The parameter commments is turned on by default.  Check to see if this feature can be set
   to false by invoking canSetParameter method.  Also check that this method does not change the
   value of parameter.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-canSetParameter
   */
  domconfigurationcansetparameter01: function (test) {
    var success;
    var doc;
    var domConfig;
    var canSet;
    var newCommentNode;
    var docElem;
    var appendedChild;
    var lastChild;
    var commentValue;

    doc = hc_staff.hc_staff();
    newCommentNode = doc.createComment("This is a new Comment node");
    docElem = doc.documentElement;

    appendedChild = docElem.appendChild(newCommentNode);
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("comments",false);
    test.ok(canSet, 'domconfigurationcansetparameter01');
    doc.normalizeDocument();
    lastChild = docElem.lastChild;

    commentValue = lastChild.nodeValue;

    test.equal(commentValue, "This is a new Comment node", 'domconfigurationsetparameter02_2');

    test.done()
  },

  /**
   *
   The canSetParameter method checks if setting a parameter to a specific value is supported.

   The parameter cdata-section is turned on by default.  Check to see if this feature can be set
   to false by invoking canSetParameter method.  Also check that this method does not change the
   value of parameter by checking if the two cdata-section nodes still exist in the document.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfigurationcansetparameter02: function (test) {
    var success;
    var doc;
    var domConfig;
    var strongList;
    var childList;
    var strongElem;
    var cdata1;
    var cdata2;
    var nodeType;
    var canSet;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("cdata-sections",false);
    test.ok(canSet, 'domconfigurationcansetparameter02_1');
    doc.normalizeDocument();
    strongList = doc.getElementsByTagNameNS("*","strong");
    strongElem = strongList.item(1);
    childList = strongElem.childNodes;

    cdata1 = childList.item(1);
    nodeType = cdata1.nodeType;

    test.equal(nodeType, 4, 'domconfigurationcansetparameter02_2');
    cdata2 = childList.item(3);
    nodeType = cdata2.nodeType;

    test.equal(nodeType, 4, 'domconfigurationcansetparameter02_3');

    test.done()
  },

  /**
   *
   The canSetParameter method checks if setting a parameter to a specific value is supported.

   The parameter entities is turned on by default.  Check to see if this feature can be set
   to false by invoking canSetParameter method.  Also check that this method does not change the
   value of parameter by checking if entities still exist in the document.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfigurationcansetparameter03: function (test) {
    var success;
    var doc;
    var domConfig;
    var docType;
    var entitiesMap;
    var nullNS = null;

    var entity;
    var entityName;
    var canSet;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("entities",false);
    test.ok(canSet, 'domconfigurationcansetparameter03_1');
    doc.normalizeDocument();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItemNS(nullNS,"epsilon");
    entityName = entity.nodeName;

    test.equal(entityName, "epsilon", 'domconfigurationcansetparameter03_2');

    test.done()
  },

  /**
   *
   The canSetParameter method checks if setting a parameter to a specific value is supported.

   The parameter entities is turned on by default.  Check to see if this feature can be set
   to false by invoking canSetParameter method.  Also check that this method does not change the
   value of parameter by checking if entity references still exist in the document.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfigurationcansetparameter04: function (test) {
    var success;
    var doc;
    var domConfig;
    var acronymList;
    var acronymElem;
    var nodeType;
    var first;
    var canSet;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("entities",false);
    test.ok(canSet, 'domconfigurationcansetparameter04_1');
    doc.normalizeDocument();
    acronymList = doc.getElementsByTagNameNS("*","acronym");
    acronymElem = acronymList.item(1);
    first = acronymElem.firstChild;

    nodeType = first.nodeType;

    test.equal(nodeType, 5, 'domconfigurationcansetparameter04_2');

    test.done()
  },

  /**
   *
   The canSetParameter method checks if setting a parameter to a specific value is supported.

   The parameter element-content-whitespace is turned on by default. Set this parameter to false will
   discard all Text nodes that contain whitespaces in element content, as described in [element content whitespace].
   Check to see if this feature can be set	to false by invoking canSetParameter method.  Verify that the text node
   still exist after invoking canSetParameter.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration
   */
  domconfigurationcansetparameter06: function (test) {
    var success;
    var doc;
    var domConfig;
    var itemList;
    var elementStrong;
    var textNode;
    var canSet;
    var hasWhitespace;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("element-content-whitespace",true);
    test.ok(canSet, 'domconfigurationcansetparameter06_1');
    itemList = doc.getElementsByTagNameNS("*","strong");
    elementStrong = itemList.item(0);
    textNode = elementStrong.firstChild;

    textNode.textContent = "                                                ";

    hasWhitespace = textNode.isElementContentWhitespace;

    test.ok(hasWhitespace, 'domconfigurationsetparameter06_2');
    doc.normalizeDocument();
    itemList = doc.getElementsByTagNameNS("*","strong");
    elementStrong = itemList.item(0);
    textNode = elementStrong.firstChild;

    hasWhitespace = textNode.isElementContentWhitespace;

    test.ok(hasWhitespace, 'domconfigurationsetparameter06_3');

    test.done()
  },

  /**
   *
   The method getParameter returns the value of a parameter if known.

   Get the DOMConfiguration object of a document and verify that the default required features are set
   to true.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   */
  domconfigurationgetparameter01: function (test) {
    var success;
    var doc;
    var domConfig;
    var param;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    param = domConfig.getParameter("comments");
    test.ok(param, 'domconfigurationgetparameter01_1');
    param = domConfig.getParameter("cdata-sections");
    test.ok(param, 'domconfigurationgetparameter01_2');
    param = domConfig.getParameter("entities");
    test.ok(param, 'domconfigurationgetparameter01_3');
    param = domConfig.getParameter("namespace-declarations");
    test.ok(param, 'domconfigurationgetparameter01_4');
    param = domConfig.getParameter("infoset");
    test.equal(param, false, 'domconfigurationgetparameter01_5');

    test.done()
  },

  /**
   *
   The method getParameter returns the value of a parameter if known.

   Get the DOMConfiguration object of a document and verify that a NOT_FOUND_ERR is thrown if the parameter
   is not found.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   */
  domconfigurationgetparameter02: function (test) {
    var success;
    var doc;
    var domConfig;
    var param;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;


    {
      success = false;
      try {
        param = domConfig.getParameter("not-found-param");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'domconfigurationgetparameter02_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   * Checks behavior of "validate" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-validate
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigvalidate1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "vAlIdate";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, true);
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setTrueEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, true);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      }
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setTrueNotEffective');

    }
    domConfig.setParameter(parameter, false);

    test.done()
  },

  /**
   * Checks behavior of "validate-if-schema" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-validate-if-schema
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigvalidateifschema1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "vAlIdate-if-schema";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.equal(state, false, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,false);
    test.ok(canSet, 'canSetFalse');
    canSet = domConfig.canSetParameter(parameter,true);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, true);
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setTrueEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, true);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      }
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setTrueNotEffective');

    }
    domConfig.setParameter(parameter, false);

    test.done()
  },

  /**
   * Checks behavior of "well-formed" configuration parameter.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-well-formed
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-getParameter
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-setParameter
   */
  domconfigwellformed1: function (test) {
    var success;
    var domImpl;
    var doc;
    var domConfig;
    var nullDocType = null;

    var canSet;
    var state;
    var parameter = "wElL-formed";
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    domConfig = doc.domConfig;

    state = domConfig.getParameter(parameter);
    test.ok(state, 'defaultFalse');
    canSet = domConfig.canSetParameter(parameter,true);
    test.ok(canSet, 'canSetTrue');
    canSet = domConfig.canSetParameter(parameter,false);

    if(
      canSet
    ) {
      domConfig.setParameter(parameter, false);
      state = domConfig.getParameter(parameter);
      test.equal(state, false, 'setFalseEffective');

    }

    else {

      {
	success = false;
	try {
          domConfig.setParameter(parameter, false);
	}
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 9);
	}
	test.ok(success, 'throw_NOT_SUPPORTED_ERR');
      }
      state = domConfig.getParameter(parameter);
      test.ok(state, 'setFalseNotEffective');

    }
    domConfig.setParameter(parameter, true);

    test.done()
  },

  /**
   *
   Invoke getFeature method on this DOMImplementation with the value of the feature parameter
   as Core and version as 2.0.  This should return a DOMImplmentation object that's not null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMImplementation3-getFeature
   */
  domimplementationgetfeature01: function (test) {
    var success;
    var doc;
    var domImpl;
    var domImplReturned;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    domImplReturned = domImpl.getFeature("Core","2.0");
    test.notEqual(domImplReturned, null, 'domimplementationgetfeature01');

    test.done()
  },

  /**
   *
   Invoke getFeature method on this DOMImplementation with the value of the feature parameter
   as Core and version as "".  This should return a DOMImplementation object that's not null.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMImplementation3-getFeature
   */
  domimplementationgetfeature02: function (test) {
    var success;
    var doc;
    var domImpl;
    var domImplReturned;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    domImplReturned = domImpl.getFeature("Core","");
    test.notEqual(domImplReturned, null, 'domimplementationgetfeature02');

    test.done()
  },

  /**
   *
   Invoke getFeature method on this DOMImplementation with the value of the feature parameter
   as Core and version as null.  This should return a DOMImplementation object that's not null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMImplementation3-getFeature
   */
  domimplementationgetfeature03: function (test) {
    var success;
    var doc;
    var domImpl;
    var domImplReturned;
    var nodeName;
    var nullVersion = null;


    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    domImplReturned = domImpl.getFeature("Core",nullVersion);
    test.notEqual(domImplReturned, null, 'domimplementationgetfeature03');

    test.done()
  },

  /**
   *
   Invoke getFeature method on this DOMImplementation with the value of the feature parameter
   as "" and version equal to null.  This should return a null DOMObject.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMImplementation3-getFeature
   */
  domimplementationgetfeature05: function (test) {
    var success;
    var doc;
    var domImpl;
    var domImplReturned;
    var nullVersion = null;


    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    domImplReturned = domImpl.getFeature("",nullVersion);
    test.equal(domImplReturned, null, 'domimplementationgetFeature05');

    test.done()
  },

  /**
   *
   Invoke getFeature method on this DOMImplementation with the value of the feature parameter
   as "1-1" (some junk) and version equal to "*".  This should return a null DOMObject.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMImplementation3-getFeature
   */
  domimplementationgetfeature06: function (test) {
    var success;
    var doc;
    var domImpl;
    var domImplReturned;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    domImplReturned = domImpl.getFeature("1-1","*");
    test.equal(domImplReturned, null, 'domimplementationgetfeature06');

    test.done()
  },

  /**
   *
   DOMImplementationRegistry.newInstance() (Java) or DOMImplementationRegistry global variable (ECMAScript) should not be null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   */
  domimplementationregistry01: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var domImplRegistry = DOMImplementationRegistry;
    // test.notEqual(domImplRegistry, null, 'domImplRegistryNotNull');
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementation("cOrE") should return a DOMImplementation where hasFeature("Core", null) returns true.
   DOMImplementationRegistry.getDOMImplementation("cOrE 3.0") should return a DOMImplementation where hasFeature("Core", "3.0") returns true.
   DOMImplementationRegistry.getDOMImplementation("+cOrE") should return a DOMImplementation where hasFeature("+Core", null) returns true.
   DOMImplementationRegistry.getDOMImplementation("+cOrE 3.0") should return a DOMImplementation where hasFeature("+Core", "3.0") returns true.
   If the implementation supports "XML", DOMImplementationRegistry.getDOMImplementation("xMl 3.0 cOrE") should return a DOMImplementation
   where hasFeature("XML", "3.0"), and hasFeature("Core", null) returns true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpl
   */
  domimplementationregistry02: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var xs = [['cOrE', {'Core': null}],
    //           ['cOrE 3.0', {'Core': '3.0'}],
    //           ['+cOrE', {'+Core': null}],
    //           ['+cOrE 3.0', {'+Core': '3.0'}],
    //           ['xMl 3.0 cOrE', {'XML': '3.0', 'Core': null}]];
    // var domImplRegistry = DOMImplementationRegistry;
    // xs.forEach(function(x){
    //   var domImpl = domImplRegistry.getDOMImplementation(x[0]);
    //   test.notEqual(domImpl, null, 'domImplNotNull');
    //   for (var k in x[1]) {
    //     test.ok(domImpl.hasFeature(k, x[1][k]), 'has ' + k);
    //   }
    // });
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementation("http://www.example.com/bogus-feature 99.0") should return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpl
   */
  domimplementationregistry07: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var domImplRegistry = DOMImplementationRegistry;
    // var domImpl = domImplRegistry.getDOMImplementation('http://www.example.com/bogus-feature 99.0');
    // test.equal(domImpl, null, 'domImplNull');
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementation(feature) should return null or a DOMImplementation
   where hasFeature(feature, null) returns true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpl
   */
  domimplementationregistry08: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var features = ['SVG', 'HTML', 'LS', 'XPath'];
    // var domImplRegistry = DOMImplementationRegistry;
    // features.forEach(function(feature){
    //   var domImpl = domImplRegistry.getDOMImplementation(feature);
    //   if (domImpl == null) {
    //     var baseImpl = getImplementation();
    //     test.equal(baseImpl.hasFeature(feature, null), false, 'baseImplSupports'+feature);
    //   } else {
    //     test.ok(domImpl.hasFeature(feature, null), 'hasCore'+feature);
    //   }
    // });
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementation("cOrE 3.0 xMl 3.0 eVeNts 2.0 lS") should return null
   or a DOMImplementation that implements the specified features.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpl
   */
  domimplementationregistry12: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var domImplRegistry = DOMImplementationRegistry;
    // var domImpl = domImplRegistry.getDOMImplementation('cOrE 3.0 xMl 3.0 eVeNts 2.0 lS');
    // if (domImpl == null) {
    //   var baseImpl = getImplementation();
    //   test.equal(baseImpl.hasFeature('Core', '3.0'), false, 'baseImplFeatures');
    //   test.equal(baseImpl.hasFeature('XML', '3.0'), false, 'baseImplFeatures');
    //   test.equal(baseImpl.hasFeature('Events', '2.0'), false, 'baseImplFeatures');
    //   test.equal(baseImpl.hasFeature('LS', null), false, 'baseImplFeatures');
    // } else {
    //   test.ok(domImpl.hasFeature('Core', '3.0'), 'hasCore');
    //   test.ok(domImpl.hasFeature('XML', '3.0'), 'hasXML');
    //   test.ok(domImpl.hasFeature('Events', '2.0'), 'hasEvents');
    //   test.ok(domImpl.hasFeature('LS', null), 'hasLS');
    // }
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementationList("cOrE") should return a list of at least one DOMImplementation where hasFeature("Core", null) returns true.
   DOMImplementationRegistry.getDOMImplementationList("cOrE 3.0") should return a list of DOMImplementation where hasFeature("Core", "3.0") returns true.
   DOMImplementationRegistry.getDOMImplementationList("+cOrE") should return list of DOMImplementation where hasFeature("+Core", null) returns true.
   DOMImplementationRegistry.getDOMImplementationList("+cOrE 3.0") should return a list of DOMImplementation where hasFeature("+Core", "3.0") returns true.
   If the implementation supports "XML", DOMImplementationRegistry.getDOMImplementationList("xMl 3.0 cOrE") should return a list of DOMImplementation where
   hasFeature("XML", "3.0"), and hasFeature("Core", null) returns true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpls
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMImplementationList-item
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMImplementationList-length
   */
  domimplementationregistry13: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var xs = [['cOrE', {'Core': null}],
    //           ['cOrE 3.0', {'Core': '3.0'}],
    //           ['+cOrE', {'+Core': null}],
    //           ['+cOrE 3.0', {'+Core': '3.0'}],
    //           ['xMl 3.0 cOrE', {'XML': '3.0', 'Core': null}]];
    // var domImplRegistry = DOMImplementationRegistry;
    // xs.forEach(function(x){
    //   var domImplList = domImplRegistry.getDOMImplementationList(x[0]);
    //   test.ok((domImplList.length > 0), 'atLeastOne');
    //   test.equal(domImplList.item(domImplList.length), null, 'item_Length_shouldBeNull');
    //   for(var i=0;i<domImplList.length;i++) {
    //     for (var k in x[1]) {
    //       test.ok(domImplList.item(i).hasFeature(k, x[1][k]), 'has '+k);
    //     }
    //   }
    // });
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementationList("http://www.example.com/bogus-feature 99.0")
   should return a zero-length list.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpls
   */
  domimplementationregistry18: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var domImplRegistry = DOMImplementationRegistry;
    // var domImplList = domImplRegistry.getDOMImplementationList("http://www.example.com/bogus-feature 99.0");
    // test.equal(domImplList.length, 0, 'emptyList');
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementationList(feature) should return an empty list
   or a list of DOMImplementation where hasFeature(feature, null) returns true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpls
   */
  domimplementationregistry19: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var features = ['SVG', 'HTML', 'LS', 'XPath'];
    // var domImplRegistry = DOMImplementationRegistry;
    // features.forEach(function(feature){
    //   var domImplList = domImplRegistry.getDOMImplementationList(feature);
    //   if (domImplList.length == 0) {
    //     var baseImpl = getImplementation();
    //     test.equal(baseImpl.hasFeature(feature, null), false, 'baseImplSupports'+feature);
    //   } else {
    //     for(var i=0;i<domImplList.length;i++) {
    //       test.ok(domImplList.item(i).hasFeature(feature, null), 'hasCore'+feature);
    //     }
    //   }
    // });
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementationList("cOrE 3.0 xMl 3.0 eVeNts 2.0 lS")
   should return an empty list or a list of DOMImplementation that implements the specified features.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpls
   */
  domimplementationregistry23: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var domImplRegistry = DOMImplementationRegistry;
    // var domImplList = domImplRegistry.getDOMImplementationList('cOrE 3.0 xMl 3.0 eVeNts 2.0 lS');
    // if (domImplList.length == 0) {
    //   var baseImpl = getImplementation();
    //   test.equal(baseImpl.hasFeature('Core','3.0'), false, 'baseImplFeatures');
    //   test.equal(baseImpl.hasFeature('XML','3.0'), false, 'baseImplFeatures');
    //   test.equal(baseImpl.hasFeature('Events','2.0'), false, 'baseImplFeatures');
    //   test.equal(baseImpl.hasFeature('LS', null), false, 'baseImplFeatures');
    // } else {
    //   for(var i=0;i<domImplList.length;i++) {
    //     test.ok(domImplList.item(i).hasFeature('Core','3.0'), 'hasCore');
    //     test.ok(domImplList.item(i).hasFeature('XML','3.0'), 'hasXML');
    //     test.ok(domImplList.item(i).hasFeature('Events','2.0'), 'hasEvents');
    //     test.ok(domImplList.item(i).hasFeature('LS', null), 'hasLS');
    //   }
    // }
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementation("") should return an implementation.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpls
   * @see http://lists.w3.org/Archives/Public/www-dom/2004JanMar/0111.html
   */
  domimplementationregistry24: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var domImplRegistry = DOMImplementationRegistry;
    // test.notEqual(domImplRegistry.getDOMImplementation(''), null, 'domImplNotNull');
    test.done()
  },

  /**
   *
   DOMImplementationRegistry.getDOMImplementationList("cOrE 3.0 xMl 3.0 eVeNts 2.0 lS")
   should return an empty list or a list of DOMImplementation that implements the specified features.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/java-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/ecma-script-binding
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-getDOMImpls
   * @see http://lists.w3.org/Archives/Public/www-dom/2004JanMar/0111.html
   */
  domimplementationregistry25: function (test) {
    test.ok(false, 'test relies on DOMImplementationRegistry which is not yet implemented')
    // var domImplRegistry = DOMImplementationRegistry;
    // var domImplList = domImplRegistry.getDOMImplementationList('');
    // test.ok((domImplList.length > 0), 'atLeastOne');
    test.done()
  },

  /**
   *
   Check implementation of DOMStringList.contains by searching DOMConfig parameter
   names for "comments" and "".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMStringList-contains
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-parameterNames
   */
  domstringlistcontains01: function (test) {
    var doc = hc_staff.hc_staff();
    var paramList = doc.domConfig.parameterNames;
    test.ok(paramList.contains('comments'), 'paramsContainComments');
    test.equal(paramList.contains(''), false, 'paramsDoesntContainEmpty');
    test.done()
  },

  /**
   *
   The contains method of the DOMStringList tests if a string is part of this DOMStringList.

   Invoke the contains method on the list searching for several of the parameters recognized by the
   DOMConfiguration object.
   Verify that the list contains features that are required and supported by this DOMConfiguration object.
   Verify that the contains method returns false for a string that is not contained in this DOMStringList.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMStringList-contains
   */
  domstringlistcontains02: function (test) {
    var doc = hc_staff.hc_staff();
    var paramList = doc.domConfig.parameterNames;
    test.ok(paramList.contains("comments"), 'domstringlistcontains02_1');
    test.ok(paramList.contains("cdata-sections"), 'domstringlistcontains02_2');
    test.ok(paramList.contains("entities"), 'domstringlistcontains02_3');
    test.ok(paramList.contains("error-handler"), 'domstringlistcontains02_4');
    test.ok(paramList.contains("infoset"), 'domstringlistcontains02_5');
    test.ok(paramList.contains("namespace-declarations"), 'domstringlistcontains02_6');
    test.ok(paramList.contains("element-content-whitespace"), 'domstringlistcontains02_7');
    test.equal(paramList.contains("test"), false, 'domstringlistcontains02_8');
    test.done()
  },

  /**
   *
   The length attribute of the DOMStringList returns the number of DOMStrings in the list.
   The range of valid child node indices is 0 to length-1 inclusive.

   Invoke the length on the list of parameters returned by the DOMConfiguration object.
   Verify that the list is not null and length is not 0.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMStringList-length
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-parameterNames
   */
  domstringlistgetlength01: function (test) {
    var doc = hc_staff.hc_staff();
    var paramList = doc.domConfig.parameterNames;
    test.notEqual(paramList, null, 'domstringlistgetlength01_notNull');
    test.notEqual(paramList.length, 0, 'domstringlistgetlength01_notZero');
    test.done()
  },

  /**
   *
   Check implementation of DOMStringList.item by accessing items 0 and length-1 and expecting
   a string and accessing items out of range and expecting null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMStringList-item
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMConfiguration-parameterNames
   */
  domstringlistitem01: function (test) {
    var doc = hc_staff.hc_staff();
    var paramList = doc.domConfig.parameterNames;
    test.notEqual(paramList.item(0), null, 'item0NotNull');
    test.equal(paramList.item(paramList.length), null, 'itemLengthNull');
    test.notEqual(paramList.item(paramList.length-1), null, 'itemLengthMinus1NotNull');
    test.done()
  },

  /**
   *
   The item method of the DOMStringList Returns the indexth item in the collection.
   If index is greater than or equal to the number of DOMStrings in the list, this returns null.

   Invoke the first item on the list of parameters returned by the DOMConfiguration object and
   make sure it is not null.  Then invoke the 100th item and verify that null is returned.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#DOMStringList-item
   */
  domstringlistitem02: function (test) {
    var doc = hc_staff.hc_staff();
    var paramList = doc.domConfig.parameterNames;
    test.notEqual(paramList.item(0), null, 'domstringlistitem02_notNull');
    retStr = paramList.item(100);
    test.equal(retStr, null, 'domstringlistitem02_null');
    test.done()
  },

  /**
   *
   Normalize document with element-content-whitespace set to true and validation set to true, check that
   whitespace in element content is preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-element-content-whitespace
   */
  elementcontentwhitespace01: function (test) {
    var success;
    var doc;
    var bodyList;
    var body;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var text;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("element-content-whitespace", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);

    if(
      (getImplementationAttribute("ignoringElementContentWhitespace") == true)
    ) {
      bodyList = doc.getElementsByTagName("body");
      body = bodyList.item(0);
      child = body.firstChild;

      text = doc.createTextNode("    ");
      child = body.insertBefore(text,child);

    }
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    bodyList = doc.getElementsByTagName("body");
    body = bodyList.item(0);
    child = body.firstChild;

    test.notEqual(child, null, 'firstChildNotNull');
    childName = child.nodeName;

    test.equal(childName, "#text", 'firstChild');
    child = child.nextSibling;

    test.notEqual(child, null, 'secondChildNotNull');
    childName = child.nodeName;

    test.equal(childName, "p", 'secondChild');

    test.done()
  },

  /**
   *
   Normalize document with element-content-whitespace set to false and validation set to true, check that
   whitespace in element content is eliminated.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-element-content-whitespace
   */
  elementcontentwhitespace02: function (test) {
    var success;
    var doc;
    var bodyList;
    var body;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("element-content-whitespace",false);
    canSetValidate = domConfig.canSetParameter("validate",true);

    if(

      (canSetValidate && canSet)

    ) {
      domConfig.setParameter("element-content-whitespace", false);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      bodyList = doc.getElementsByTagName("body");
      body = bodyList.item(0);
      child = body.firstChild;

      test.notEqual(child, null, 'firstChildNotNull');
      childName = child.nodeName;

      test.equal(childName, "p", 'firstChild');
      child = child.nextSibling;

      test.equal(child, null, 'secondChild');

    }

    test.done()
  },

  /**
   *
   Normalize document using Node.normalize with element-content-whitespace set to false and validation set to true, check that
   whitespace in element content is preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-element-content-whitespace
   */
  elementcontentwhitespace03: function (test) {
    var success;
    var doc;
    var bodyList;
    var body;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var text;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;


    if(
      (getImplementationAttribute("ignoringElementContentWhitespace") == true)
    ) {
      bodyList = doc.getElementsByTagName("body");
      body = bodyList.item(0);
      child = body.firstChild;

      text = doc.createTextNode("    ");
      child = body.insertBefore(text,child);

    }
    canSet = domConfig.canSetParameter("element-content-whitespace",false);

    if(
      canSet
    ) {
      domConfig.setParameter("element-content-whitespace", false);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalize();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      bodyList = doc.getElementsByTagName("body");
      body = bodyList.item(0);
      child = body.firstChild;

      test.notEqual(child, null, 'firstChildNotNull');
      childName = child.nodeName;

      test.equal(childName, "#text", 'firstChild');
      child = child.nextSibling;

      test.notEqual(child, null, 'secondChildNotNull');
      childName = child.nodeName;

      test.equal(childName, "p", 'secondChild');

    }

    test.done()
  },

  /**
   *
   Call getSchemaTypeInfo on title attribute for the first "em" element from DTD validated document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Element-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  elementgetschematypeinfo01: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var typeNS;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, null, 'nameIsNull');
    typeNS = typeInfo.typeNamespace;

    test.equal(typeNS, null, 'nsIsNull');

    test.done()
  },

  /**
   *
   Call getSchemaTypeInfo on title attribute for the first "em" element from schema-validated document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Element-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  elementgetschematypeinfo02: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var typeNS;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'nameIsEmType');
    typeNS = typeInfo.typeNamespace;

    test.equal(typeNS, "http://www.w3.org/1999/xhtml", 'nsIsXML');

    test.done()
  },

  /**
   *
   Element.schemaTypeInfo should return null if not validating or schema validating.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Element-schemaTypeInfo
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  elementgetschematypeinfo03: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var typeName;
    var typeNS;

    doc = hc_nodtdstaff.hc_nodtdstaff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, null, 'typeName');
    typeNS = typeInfo.typeNamespace;

    test.equal(typeNS, null, 'typeNS');

    test.done()
  },

  /**
   *
   The getSchemaTypeInfo method retrieves the type information associated with this element.

   Load a valid document with an XML Schema.
   Invoke getSchemaTypeInfo method on an element having [type definition] property.  Expose {name} and {target namespace}
   properties of the [type definition] property.  Verity that the typeName and typeNamespace of the code element's
   schemaTypeInfo are correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Element-schemaTypeInfo
   */
  elementgetschematypeinfo04: function (test) {
    var success;
    var doc;
    var codeElem;
    var elemTypeInfo;
    var typeName;
    var typeNamespace;
    var elemList;
    var docElemNodeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("code");
    codeElem = elemList.item(1);
    elemTypeInfo = codeElem.schemaTypeInfo;

    typeName = elemTypeInfo.typeName;

    typeNamespace = elemTypeInfo.typeNamespace;

    test.equal(typeName, "code", 'elementgetschematypeinfo04_typeName');
    test.equal(typeNamespace, "http://www.w3.org/1999/xhtml", 'elementgetschematypeinfo04_typeNamespace');

    test.done()
  },

  /**
   *
   The getSchemaTypeInfo method retrieves the type information associated with this element.

   Load a valid document with an XML Schema.
   Invoke getSchemaTypeInfo method on an element having [type definition] property.  Expose {name} and {target namespace}
   properties of the [type definition] property.  Verity that the typeName and typeNamespace of the acronym element's
   schemaTypeInfo are correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Element-schemaTypeInfo
   */
  elementgetschematypeinfo05: function (test) {
    var success;
    var doc;
    var acElem;
    var elemTypeInfo;
    var typeName;
    var typeNamespace;
    var elemList;
    var docElemNodeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("span");
    acElem = elemList.item(0);
    elemTypeInfo = acElem.schemaTypeInfo;

    typeName = elemTypeInfo.typeName;

    typeNamespace = elemTypeInfo.typeNamespace;

    test.equal(typeName, "string", 'typeNameString');
    test.equal(typeNamespace, "http://www.w3.org/2001/XMLSchema", 'typeNsXSD');

    test.done()
  },

  /**
   *
   The getSchemaTypeInfo method retrieves the type information associated with this element.

   Load a valid document with an XML Schema.
   Invoke getSchemaTypeInfo method on an element having [type definition] property.  Expose {name} and {target namespace}
   properties of the [type definition] property.  Verity that the typeName and typeNamespace of the strong element's
   schemaTypeInfo are correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Element-schemaTypeInfo
   */
  elementgetschematypeinfo06: function (test) {
    var success;
    var doc;
    var strongElem;
    var elemTypeInfo;
    var typeName;
    var typeNamespace;
    var elemList;
    var docElemNodeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    strongElem = elemList.item(1);
    elemTypeInfo = strongElem.schemaTypeInfo;

    typeName = elemTypeInfo.typeName;

    typeNamespace = elemTypeInfo.typeNamespace;

    test.equal(typeName, "strongType", 'elementgetschematypeinfo06_typeName');
    test.equal(typeNamespace, "http://www.w3.org/1999/xhtml", 'elementgetschematypeinfo06_typeNamespace');

    test.done()
  },

  /**
   *
   The getSchemaTypeInfo method retrieves the type information associated with this element.

   Load a valid document with an XML Schema.
   Invoke getSchemaTypeInfo method on an element having [type definition] property.  Expose {name} and {target namespace}
   properties of the [type definition] property.  Verity that the typeName and typeNamespace of the name element's
   schemaTypeInfo are correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Element-schemaTypeInfo
   */
  elementgetschematypeinfo07: function (test) {
    var success;
    var doc;
    var supElem;
    var elemTypeInfo;
    var typeName;
    var typeNamespace;
    var docElemNodeName;
    var elemList;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("sup");
    supElem = elemList.item(0);
    elemTypeInfo = supElem.schemaTypeInfo;

    typeName = elemTypeInfo.typeName;

    typeNamespace = elemTypeInfo.typeNamespace;

    test.equal(typeName, "sup", 'elementgetschematypeinfo07_typeName');
    test.equal(typeNamespace, "http://www.w3.org/1999/xhtml", 'elementgetschematypeinfo07_typeNamespace');

    test.done()
  },

  /**
   *
   Invoke setIdAttribute on the third acronym element's class attribute.  Verify by calling isID
   on the class attribute and getElementById on document. Invoke setIdAttribute again to reset.
   Calling isID should return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute01: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    acronymElem.setIdAttribute("class",true);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("class");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsIdTrue01');
    elem = doc.getElementById("No");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributeGetElementById01');
    acronymElem.setIdAttribute("class",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributeIsIdFalse01');

    test.done()
  },

  /**
   *
   First use setAttribute to change the class attribute of the third acronym element.  Invoke setIdAttribute
   on the newly set attribute. Verify by calling isID on the new attribute and getElementById on document.
   Invoke setIdAttribute again to reset.  Calling isID should return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute03: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    acronymElem.setAttribute("class","Maybe");
    acronymElem.setIdAttribute("class",true);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("class");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsIdTrue03');
    elem = doc.getElementById("Maybe");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributeGetElementById03');
    acronymElem.setIdAttribute("class",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributeIsIdFalse03');

    test.done()
  },

  /**
   *
   First use setAttribute to create a new attribute on the third strong element.  Invoke setIdAttribute
   on the new  attribute. Verify by calling isID on the new attribute and getElementById on document.
   Invoke setIdAttribute again to reset. Calling isID should return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute04: function (test) {
    var success;
    var doc;
    var elemList;
    var nameElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    nameElem = elemList.item(2);
    nameElem.setAttribute("hasMiddleName","Antoine");
    nameElem.setIdAttribute("hasMiddleName",true);
    attributesMap = nameElem.attributes;

    attr = attributesMap.getNamedItem("hasMiddleName");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsIdTrue03');
    elem = doc.getElementById("Antoine");
    elemName = elem.tagName;

    test.equal(elemName, "strong", 'elementsetidattributeGetElementById03');
    nameElem.setIdAttribute("hasMiddleName",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributeIsIdFalse03');

    test.done()
  },

  /**
   *
   Invoke setIdAttribute on the third strong element with a non-existing attribute name.  Verify that
   NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute05: function (test) {
    var success;
    var doc;
    var elemList;
    var nameElem;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    nameElem = elemList.item(2);

    {
      success = false;
      try {
        nameElem.setIdAttribute("hasMiddleName",true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke setIdAttribute on the third strong element with an attribute name of the acronym element.
   Verify that NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute06: function (test) {
    var success;
    var doc;
    var elemList;
    var nameElem;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    nameElem = elemList.item(2);

    {
      success = false;
      try {
        nameElem.setIdAttribute("class",true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   First use setAttribute to create two new attribute of the second and third strong element with different values.
   Invoke setIdAttribute on the new  attributes. Verify by calling isID on the new attributes and getElementById
   with two different values on document.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute07: function (test) {
    var success;
    var doc;
    var elemList;
    var nameElem1;
    var nameElem2;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    nameElem1 = elemList.item(2);
    nameElem2 = elemList.item(3);
    nameElem1.setAttribute("hasMiddleName","Antoine");
    nameElem1.setIdAttribute("hasMiddleName",true);
    nameElem2.setAttribute("hasMiddleName","Neeya");
    nameElem2.setIdAttribute("hasMiddleName",true);
    attributesMap = nameElem1.attributes;

    attr = attributesMap.getNamedItem("hasMiddleName");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId1True07');
    attributesMap = nameElem2.attributes;

    attr = attributesMap.getNamedItem("hasMiddleName");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId2True07');
    elem = doc.getElementById("Antoine");
    elemName = elem.tagName;

    test.equal(elemName, "strong", 'elementsetidattribute1GetElementById07');
    elem = doc.getElementById("Neeya");
    elemName = elem.tagName;

    test.equal(elemName, "strong", 'elementsetidattribute2GetElementById07');

    test.done()
  },

  /**
   *
   Invoke setIdAttribute class attribute on the second, third, and the fifth acronym element.
   Verify by calling isID on the attributes and getElementById with the unique value "No" on document.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute08: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem1;
    var acronymElem2;
    var acronymElem3;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem1 = elemList.item(1);
    acronymElem2 = elemList.item(2);
    acronymElem3 = elemList.item(4);
    acronymElem1.setIdAttribute("class",true);
    acronymElem2.setIdAttribute("class",true);
    acronymElem3.setIdAttribute("class",true);
    attributesMap = acronymElem1.attributes;

    attr = attributesMap.getNamedItem("class");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId1True08');
    attributesMap = acronymElem2.attributes;

    attr = attributesMap.getNamedItem("class");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId2True08');
    attributesMap = acronymElem3.attributes;

    attr = attributesMap.getNamedItem("class");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId3True08');
    elem = doc.getElementById("No");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributeGetElementById08');

    test.done()
  },

  /**
   *
   First use setAttribute to create two new attributes on the second strong element and sup element.
   Invoke setIdAttribute on the new attributes. Verify by calling isID on the new attributes and getElementById
   with two different values on document.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute09: function (test) {
    var success;
    var doc;
    var elemList1;
    var elemList2;
    var nameElem;
    var salaryElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList1 = doc.getElementsByTagName("strong");
    elemList2 = doc.getElementsByTagName("sup");
    nameElem = elemList1.item(2);
    salaryElem = elemList2.item(2);
    nameElem.setAttribute("hasMiddleName","Antoine");
    salaryElem.setAttribute("annual","2002");
    nameElem.setIdAttribute("hasMiddleName",true);
    salaryElem.setIdAttribute("annual",true);
    attributesMap = nameElem.attributes;

    attr = attributesMap.getNamedItem("hasMiddleName");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId1True09');
    attributesMap = salaryElem.attributes;

    attr = attributesMap.getNamedItem("annual");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId2True09');
    elem = doc.getElementById("Antoine");
    elemName = elem.tagName;

    test.equal(elemName, "strong", 'elementsetidattribute1GetElementById09');
    elem = doc.getElementById("2002");
    elemName = elem.tagName;

    test.equal(elemName, "sup", 'elementsetidattribute2GetElementById09');

    test.done()
  },

  /**
   *
   Invoke setIdAttribute on the third acronym element's class attribute consecutively with different
   isId values. Verify by calling isId on the attribute.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute10: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    acronymElem.setIdAttribute("class",true);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("class");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId1True10');
    acronymElem.setIdAttribute("class",true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsId2True10');
    acronymElem.setIdAttribute("class",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributeIsIdFalse10');
    elem = doc.getElementById("No");
    test.equal(elem, null, 'elementsetidattributeGetElementByIdNull10');

    test.done()
  },

  /**
   *
   Invoke setIdAttribute on the 4th acronym element's class attribute which contains
   an entity reference.  Verify by calling isID on the class attribute and getElementById
   on document. Invoke setIdAttribute again to reset.  Calling isID should return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttr
   */
  elementsetidattribute11: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(3);
    acronymElem.setIdAttribute("class",true);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("class");
    id = attr.isId;

    test.ok(id, 'elementsetidattributeIsIdTrue01');
    elem = doc.getElementById("Yα");
    test.notEqual(elem, null, 'elemByIDNotNull');
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributeGetElementById11');
    acronymElem.setIdAttribute("class",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributeIsIdFalse11');

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNode on the 3rd p element using the title attribute as a parameter .  Verify by calling
   isID on the attribute node and getElementById on document node. Call setIdAttributeNode again with isId=false
   to reset.  Invoke isId on the attribute node should return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode01: function (test) {
    var success;
    var doc;
    var elemList;
    var employeeElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    employeeElem = elemList.item(2);
    attributesMap = employeeElem.attributes;

    attr = attributesMap.getNamedItem("xmlns:dmstc");
    employeeElem.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsIdTrue01');
    elem = doc.getElementById("http://www.netzero.com");
    elemName = elem.tagName;

    test.equal(elemName, "p", 'elementsetidattributenodeGetElementById01');
    elem.setIdAttributeNode(attr,false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributenodeIsIdFalse01');

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNode on the 3rd acronym element using the class attribute as a parameter .  Verify by calling
   isID on the attribute node and getElementById on document node.  Call setIdAttributeNode again with isId=false
   to reset.  Invoke isId on the attribute node should return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode02: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("class");
    acronymElem.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsIdTrue02');
    elem = doc.getElementById("No");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributenodeGetElementById02');
    elem.setIdAttributeNode(attr,false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributenodeIsIdFalse02');

    test.done()
  },

  /**
   *
   Create a new attribute node on the second strong element.  Invoke setIdAttributeNode on a newly created
   attribute node.  Verify by calling isID on the attribute node and getElementById on document node.
   Call setIdAttributeNode again with isId=false to reset.  Invoke isId on the attribute node should return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode03: function (test) {
    var success;
    var doc;
    var elemList;
    var nameElem;
    var attributesMap;
    var attr;
    var newAttr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    nameElem = elemList.item(1);
    nameElem.setAttribute("title","Karen");
    attributesMap = nameElem.attributes;

    attr = attributesMap.getNamedItem("title");
    nameElem.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsIdTrue03');
    elem = doc.getElementById("Karen");
    elemName = elem.tagName;

    test.equal(elemName, "strong", 'elementsetidattributenodeGetElementById03');
    elem.setIdAttributeNode(attr,false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributenodeIsIdFalse03');

    test.done()
  },

  /**
   *
   Create a new namespace attribute on the second strong element.  Invoke setIdAttributeNode on a newly created
   attribute node.  Verify by calling isID on the attribute node and getElementById on document node.
   Call setIdAttributeNode again with isId=false to reset.  Invoke isId on the attribute node should return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode04: function (test) {
    var success;
    var doc;
    var elemList;
    var nameElem;
    var attributesMap;
    var attr;
    var newAttr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    nameElem = elemList.item(1);
    nameElem.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:middle","http://www.example.com/middle");
    attributesMap = nameElem.attributes;

    attr = attributesMap.getNamedItem("xmlns:middle");
    nameElem.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsIdTrue04');
    elem = doc.getElementById("http://www.example.com/middle");
    elemName = elem.tagName;

    test.equal(elemName, "strong", 'elementsetidattributenodeGetElementById04');
    elem.setIdAttributeNode(attr,false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributenodeIsIdFalse04');

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNode on the third strong element but with the class attribute of the acronym
   element as a parameter.  Verify that NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode05: function (test) {
    var success;
    var doc;
    var elemList1;
    var elemList2;
    var nameElem;
    var acronymElem;
    var attributesMap;
    var attr;

    doc = hc_staff.hc_staff();
    elemList1 = doc.getElementsByTagName("strong");
    elemList2 = doc.getElementsByTagName("acronym");
    nameElem = elemList1.item(1);
    acronymElem = elemList2.item(1);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("class");

    {
      success = false;
      try {
        nameElem.setIdAttributeNode(attr,true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNode on the third strong element but with the title attribute of the acronym
   element as a parameter.  Verify that NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode06: function (test) {
    var success;
    var doc;
    var elemList1;
    var elemList2;
    var nameElem;
    var acronymElem;
    var attributesMap;
    var attr;
    var nameElement;

    doc = hc_staff.hc_staff();
    elemList1 = doc.getElementsByTagName("strong");
    elemList2 = doc.getElementsByTagName("acronym");
    nameElem = elemList1.item(1);
    acronymElem = elemList2.item(1);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("xsi:noNamespaceSchemaLocation");

    {
      success = false;
      try {
        nameElem.setIdAttributeNode(attr,true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNode on the 2nd and 3rd acronym element using the class attribute as a parameter .  Verify by calling
   isID on the attribute node and getElementById on document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode07: function (test) {
    var success;
    var doc;
    var elemList1;
    var elemList2;
    var acronymElem1;
    var acronymElem2;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList1 = doc.getElementsByTagName("acronym");
    elemList2 = doc.getElementsByTagName("acronym");
    acronymElem1 = elemList1.item(1);
    acronymElem2 = elemList2.item(2);
    attributesMap = acronymElem1.attributes;

    attr = attributesMap.getNamedItem("class");
    acronymElem1.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsId1True07');
    attributesMap = acronymElem2.attributes;

    attr = attributesMap.getNamedItem("class");
    acronymElem2.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsId2True07');
    elem = doc.getElementById("No");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributenode1GetElementById07');
    elem = doc.getElementById("Yes");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributenode2GetElementById07');

    test.done()
  },

  /**
   *
   This method declares the attribute specified by node to be of type ID. If the value of the specified attribute
   is unique then this element node can later be retrieved using getElementById on Document. Note, however,
   that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNode on the 2nd acronym element and 3rd p element using the title and xmlns:dmstc attributes respectively
   as parameters .  Verify by calling isID on the attribute node and getElementById on document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode08: function (test) {
    var success;
    var doc;
    var elemList1;
    var elemList2;
    var acronymElem;
    var pElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList1 = doc.getElementsByTagNameNS("*","acronym");
    elemList2 = doc.getElementsByTagNameNS("*","p");
    acronymElem = elemList1.item(1);
    pElem = elemList2.item(2);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("title");
    acronymElem.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsId1True08');
    attributesMap = pElem.attributes;

    attr = attributesMap.getNamedItem("xmlns:dmstc");
    pElem.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsId2True08');
    elem = doc.getElementById("Yes");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributenode1GetElementById08');
    elem = doc.getElementById("http://www.netzero.com");
    elemName = elem.tagName;

    test.equal(elemName, "p", 'elementsetidattributenode2GetElementById08');

    test.done()
  },

  /**
   *
   This method declares the attribute specified by node to be of type ID. If the value of the specified attribute
   is unique then this element node can later be retrieved using getElementById on Document. Note, however,
   that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNode with the xmlns attribute of ent4.  Verify that NO_MODIFICATION_ALLOWED_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode09: function (test) {
    var success;
    var doc;
    var elemList;
    var varElem;
    var entRef;
    var entElement;
    var attributesMap;
    var attr;
    var domConfig;

    doc = hc_staff.hc_staff();
    domConfig = doc.domConfig;

    domConfig.setParameter("entities", true);
    doc.normalizeDocument();
    elemList = doc.getElementsByTagNameNS("*","var");
    varElem = elemList.item(2);
    entRef = varElem.firstChild;

    entElement = entRef.firstChild;

    attributesMap = entElement.attributes;

    attr = attributesMap.getNamedItem("xmlns");

    {
      success = false;
      try {
        entElement.setIdAttributeNode(attr,true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   This method declares the attribute specified by node to be of type ID. If the value of the specified attribute
   is unique then this element node can later be retrieved using getElementById on Document. Note, however,
   that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNode on the 4th acronym element using the class attribute (containing entity reference)
   as a parameter .  Verify by calling isId on the attribute node and getElementById on document node.
   Reset by invoking setIdAttributeNode with isId=false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributenode10: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","acronym");
    acronymElem = elemList.item(3);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("class");
    acronymElem.setIdAttributeNode(attr,true);
    id = attr.isId;

    test.ok(id, 'elementsetidattributenodeIsIdTrue10');
    elem = doc.getElementById("Yα");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributenodeGetElementById10');
    acronymElem.setIdAttributeNode(attr,false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributenodeIsIdFalse10');

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNS on an existing namespace attribute with a namespace URI and a qualified name.  Verify by calling
   isId on the attribute node and getElementById on document node.  Call setIdAttributeNS with isId=false to reset.
   isId should now return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens01: function (test) {
    var success;
    var doc;
    var elemList;
    var employeeElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    employeeElem = elemList.item(2);
    employeeElem.setIdAttributeNS("http://www.w3.org/2000/xmlns/","dmstc",true);
    attributesMap = employeeElem.attributes;

    attr = attributesMap.getNamedItem("xmlns:dmstc");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsIdTrue01');
    elem = doc.getElementById("http://www.netzero.com");
    elemName = elem.tagName;

    test.equal(elemName, "p", 'elementsetidattributensGetElementById01');
    employeeElem.setIdAttributeNS("http://www.w3.org/2000/xmlns/","dmstc",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributensIsIdFalse01');

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNS on an existing attribute with a namespace URI and a qualified name.  Verify by calling
   isID on the attribute node and getElementById on document node. Assume the grammar has not defined any
   element of typeID. Call setIdAttributeNS with isId=false to reset. Method isId should now return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens02: function (test) {
    var success;
    var doc;
    var elemList;
    var addressElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;
    var xsiNS = "http://www.w3.org/2001/XMLSchema-instance";

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","acronym");
    addressElem = elemList.item(2);
    addressElem.setIdAttributeNS(xsiNS,"noNamespaceSchemaLocation",true);
    attributesMap = addressElem.attributes;

    attr = attributesMap.getNamedItem("xsi:noNamespaceSchemaLocation");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsIdTrue02');
    elem = doc.getElementById("Yes");
    test.notEqual(elem, null, 'getElementByIDNotNull');
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributensGetElementById01');
    addressElem.setIdAttributeNS(xsiNS,"noNamespaceSchemaLocation",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributensIsIdFalse02');

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNS on a newly added namespace attribute on the first em element.  Verify by calling
   isID on the attribute node and getElementById on document node. Call setIdAttributeNS with isId=false to reset.
   Method isId should now return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens03: function (test) {
    var success;
    var doc;
    var elemList;
    var employeeIdElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    employeeIdElem = elemList.item(0);
    employeeIdElem.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:newAttr","newValue");
    employeeIdElem.setIdAttributeNS("http://www.w3.org/2000/xmlns/","newAttr",true);
    attributesMap = employeeIdElem.attributes;

    attr = attributesMap.getNamedItem("xmlns:newAttr");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsIdTrue03');
    elem = doc.getElementById("newValue");
    elemName = elem.tagName;

    test.equal(elemName, "em", 'elementsetidattributensGetElementById03');
    employeeIdElem.setIdAttributeNS("http://www.w3.org/2000/xmlns/","newAttr",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributensIsIdFalse03');

    test.done()
  },

  /**
   *
   The method setIdAttributeNS declares the attribute specified by local name and namespace URI to be of type ID.
   If the value of the specified attribute is unique then this element node can later be retrieved using getElementById on Document.
   Note, however, that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNS on newly added attribute on the third strong element.  Verify by calling
   isID on the attribute node and getElementById on document node.
   Call setIdAttributeNS with isId=false to reset. Method isId should now return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens04: function (test) {
    var success;
    var doc;
    var elemList;
    var strongElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","strong");
    strongElem = elemList.item(2);
    strongElem.setAttributeNS("http://www.netzero.com","dmstc:newAttr","newValue");
    strongElem.setIdAttributeNS("http://www.netzero.com","newAttr",true);
    attributesMap = strongElem.attributes;

    attr = attributesMap.getNamedItem("dmstc:newAttr");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsIdTrue04');
    elem = doc.getElementById("newValue");
    elemName = elem.tagName;

    test.equal(elemName, "strong", 'elementsetidattributensGetElementById04');
    strongElem.setIdAttributeNS("http://www.netzero.com","newAttr",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributensIsIdFalse04');

    test.done()
  },

  /**
   *
   The method setIdAttributeNS declares the attribute specified by local name and namespace URI to be of type ID.
   If the value of the specified attribute is unique then this element node can later be retrieved using getElementById on Document.
   Note, however, that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNS on a changed attribute of  the third acronym element.  Verify by calling
   isID on the attribute node and getElementById on document node.
   Call setIdAttributeNS with isId=false to reset. Method isId should now return false.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens05: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","acronym");
    acronymElem = elemList.item(2);
    acronymElem.setAttributeNS("*","title","newValue");
    acronymElem.setIdAttributeNS("*","title",true);
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("title");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsIdTrue05');
    elem = doc.getElementById("newValue");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributensGetElementById05');
    acronymElem.setIdAttributeNS("*","title",false);
    id = attr.isId;

    test.equal(id, false, 'elementsetidattributensIsIdFalse05');

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNS on the third strong element with a non-existing attribute name.  Verify that
   NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens06: function (test) {
    var success;
    var doc;
    var elemList;
    var nameElem;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    nameElem = elemList.item(2);

    {
      success = false;
      try {
        nameElem.setIdAttributeNS("http://www.netzero.com","hasMiddleName",true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNS on the second p element with a non-existing attribute.  Verify that
   NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens07: function (test) {
    var success;
    var doc;
    var elemList;
    var employeeElem;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    employeeElem = elemList.item(1);

    {
      success = false;
      try {
        employeeElem.setIdAttributeNS("http://www.netzero.com","xsi",true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNS on the second p element with a non-existing attribute.  Verify that
   NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNode
   */
  elementsetidattributens08: function (test) {
    var success;
    var doc;
    var elemList;
    var employeeElem;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    employeeElem = elemList.item(1);

    {
      success = false;
      try {
        employeeElem.setIdAttributeNS("http://www.usa.com","usa",true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   The method setIdAttributeNS declares the attribute specified by local name and namespace URI to be of type ID.
   If the value of the specified attribute is unique then this element node can later be retrieved using getElementById on Document.
   Note, however, that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNS on the xmlns attribute of ent4.  Verify that NO_MODIFICATION_ALLOWED_ERR is raised.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens09: function (test) {
    var success;
    var doc;
    var elemList;
    var varElem;
    var entRef;
    var entElement;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","var");
    varElem = elemList.item(2);
    entRef = varElem.firstChild;

    entElement = entRef.firstChild;


    {
      success = false;
      try {
        entElement.setIdAttributeNS("http://www.w3.org/2000/xmlns/","xmlns",true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Declares the attribute specified by local name and namespace URI to be of type ID. If the value of the
   specified attribute is unique then this element node can later be retrieved using getElementById on Document.
   Note, however, that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNS on two existing namespace attributes with different values.  Verify by calling
   isId on the attributes and getElementById with different values on document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens10: function (test) {
    var success;
    var doc;
    var elemList;
    var pElem1;
    var pElem2;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","p");
    pElem1 = elemList.item(2);
    pElem2 = elemList.item(3);
    pElem1.setIdAttributeNS("http://www.w3.org/2000/xmlns/","dmstc",true);
    pElem2.setIdAttributeNS("http://www.w3.org/2000/xmlns/","nm",true);
    attributesMap = pElem1.attributes;

    attr = attributesMap.getNamedItem("xmlns:dmstc");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId1True10');
    attributesMap = pElem2.attributes;

    attr = attributesMap.getNamedItem("xmlns:nm");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId2True10');
    elem = doc.getElementById("http://www.netzero.com");
    elemName = elem.tagName;

    test.equal(elemName, "p", 'elementsetidattributens1GetElementById10');
    elem = doc.getElementById("http://www.altavista.com");
    elemName = elem.tagName;

    test.equal(elemName, "p", 'elementsetidattributens2GetElementById10');

    test.done()
  },

  /**
   *
   Declares the attribute specified by local name and namespace URI to be of type ID. If the value of the
   specified attribute is unique then this element node can later be retrieved using getElementById on Document.
   Note, however, that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNS on two existing namespace attributes with same local name but different values.  Verify by calling
   isId on the attributes node and getElementById with different values on document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens11: function (test) {
    var success;
    var doc;
    var elemList;
    var pElem1;
    var pElem2;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","p");
    pElem1 = elemList.item(1);
    pElem2 = elemList.item(2);
    pElem1.setIdAttributeNS("http://www.w3.org/2000/xmlns/","dmstc",true);
    pElem2.setIdAttributeNS("http://www.w3.org/2000/xmlns/","dmstc",true);
    attributesMap = pElem1.attributes;

    attr = attributesMap.getNamedItem("xmlns:dmstc");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId1True11');
    attributesMap = pElem2.attributes;

    attr = attributesMap.getNamedItem("xmlns:dmstc");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId2True11');
    elem = doc.getElementById("http://www.netzero.com");
    elemName = elem.tagName;

    test.equal(elemName, "p", 'elementsetidattributens1GetElementById11');
    elem = doc.getElementById("http://www.usa.com");
    elemName = elem.tagName;

    test.equal(elemName, "p", 'elementsetidattributens2GetElementById11');

    test.done()
  },

  /**
   *
   Declares the attribute specified by local name and namespace URI to be of type ID. If the value of the
   specified attribute is unique then this element node can later be retrieved using getElementById on Document.
   Note, however, that this simply affects this node and does not change any grammar that may be in use.

   Set the noNamespaceSchemaLocation attribute on the first acronym element to "No".  Invoke setIdAttributeNS on the
   noNamespaceSchemaLocation attribute of the first, second and third acronym element.  Verify by calling isId on
   the attributes.  Calling getElementById with "No" as a value should return the acronym element.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens12: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem1;
    var acronymElem2;
    var acronymElem3;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","acronym");
    acronymElem1 = elemList.item(0);
    acronymElem2 = elemList.item(1);
    acronymElem3 = elemList.item(2);
    acronymElem1.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance","xsi:noNamespaceSchemaLocation","No");
    acronymElem1.setIdAttributeNS("http://www.w3.org/2001/XMLSchema-instance","noNamespaceSchemaLocation",true);
    acronymElem2.setIdAttributeNS("http://www.w3.org/2001/XMLSchema-instance","noNamespaceSchemaLocation",true);
    acronymElem3.setIdAttributeNS("http://www.w3.org/2001/XMLSchema-instance","noNamespaceSchemaLocation",true);
    attributesMap = acronymElem1.attributes;

    attr = attributesMap.getNamedItem("xsi:noNamespaceSchemaLocation");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId1True12');
    attributesMap = acronymElem2.attributes;

    attr = attributesMap.getNamedItem("xsi:noNamespaceSchemaLocation");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId2True12');
    attributesMap = acronymElem3.attributes;

    attr = attributesMap.getNamedItem("xsi:noNamespaceSchemaLocation");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId3True12');
    elem = doc.getElementById("No");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributensGetElementById10');

    test.done()
  },

  /**
   *
   Invoke setIdAttributeNS on newly added attribute on the third strong element.  Verify by calling
   isID on the attribute node and getElementById on document node.
   Call setIdAttributeNS on the same element to reset ID but with a non-existing attribute should generate
   NOT_FOUND_ERR

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens13: function (test) {
    var success;
    var doc;
    var elemList;
    var nameElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    nameElem = elemList.item(2);
    nameElem.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:newAttr","newValue");
    nameElem.setIdAttributeNS("http://www.w3.org/2000/xmlns/","newAttr",true);
    attributesMap = nameElem.attributes;

    attr = attributesMap.getNamedItem("xmlns:newAttr");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsIdTrue13');
    elem = doc.getElementById("newValue");
    elemName = elem.tagName;

    test.equal(elemName, "strong", 'elementsetidattributensGetElementById13');

    {
      success = false;
      try {
        nameElem.setIdAttributeNS("http://www.w3.org/XML/1998/namespace","lang",false);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Declares the attribute specified by local name and namespace URI to be of type ID. If the value of the
   specified attribute is unique then this element node can later be retrieved using getElementById on Document.
   Note, however, that this simply affects this node and does not change any grammar that may be in use.

   Invoke setIdAttributeNS on two existing attributes of the second p element and the third
   acronym element.  Verify by calling isId on the attributes and getElementById with different values on document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ElSetIdAttrNS
   */
  elementsetidattributens14: function (test) {
    var success;
    var doc;
    var elemList;
    var pElem;
    var acronymElem;
    var attributesMap;
    var attr;
    var id = false;
    var elem;
    var elemName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","p");
    pElem = elemList.item(1);
    elemList = doc.getElementsByTagNameNS("*","acronym");
    acronymElem = elemList.item(2);
    pElem.setIdAttributeNS("http://www.w3.org/2000/xmlns/","dmstc",true);
    acronymElem.setIdAttributeNS("http://www.w3.org/2001/XMLSchema-instance","noNamespaceSchemaLocation",true);
    attributesMap = pElem.attributes;

    attr = attributesMap.getNamedItem("xmlns:dmstc");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId1True14');
    attributesMap = acronymElem.attributes;

    attr = attributesMap.getNamedItem("xsi:noNamespaceSchemaLocation");
    id = attr.isId;

    test.ok(id, 'elementsetidattributensIsId2True14');
    elem = doc.getElementById("Yes");
    elemName = elem.tagName;

    test.equal(elemName, "acronym", 'elementsetidattributens1GetElementById14');
    elem = doc.getElementById("http://www.usa.com");
    elemName = elem.tagName;

    test.equal(elemName, "p", 'elementsetidattributens2GetElementById14');

    test.done()
  },

  /**
   *
   Normalize document with entities set to true, check that
   entity references and unused entity declaration are maintained.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-entities
   */
  entities01: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var entRef;
    var entities;
    var ent2;
    var doctype;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("entities", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    entRef = doc.createEntityReference("ent1");
    child = pElem.appendChild(entRef);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    child = pElem.lastChild;

    test.notEqual(child, null, 'lastChildNotNull');
    childName = child.nodeName;

    test.equal(childName, "ent1", 'firstChild');
    doctype = doc.doctype;

    entities = doctype.entities;

    ent2 = entities.getNamedItem("ent2");
    test.notEqual(ent2, null, 'ent2NotNull');

    test.done()
  },

  /**
   *
   Normalize document with entities set to false, check that
   entity references are expanded and unused entity declaration are maintained.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-entities
   */
  entities02: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var entRef;
    var childValue;
    var entities;
    var ent2;
    var doctype;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("entities", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    entRef = doc.createEntityReference("ent1");
    child = pElem.appendChild(entRef);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    child = pElem.lastChild;

    test.notEqual(child, null, 'lastChildNotNull');
    childName = child.nodeName;

    test.equal(childName, "#text", 'firstChildName');
    childValue = child.nodeValue;

    test.equal(childValue, "barfoo", 'firstChildValue');
    doctype = doc.doctype;

    entities = doctype.entities;

    ent2 = entities.getNamedItem("ent2");
    test.notEqual(ent2, null, 'ent2NotNull');

    test.done()
  },

  /**
   *
   Normalize document with entities set to false, check that
   unbound entity references are preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-entities
   */
  entities03: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var entRef;
    var childType;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("entities", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    entRef = doc.createEntityReference("ent3");
    child = pElem.appendChild(entRef);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    child = pElem.lastChild;

    test.notEqual(child, null, 'lastChildNotNull');
    childType = child.nodeType;

    test.equal(childType, 5, 'lastChildEntRef');
    childName = child.nodeName;

    test.equal(childName, "ent3", 'lastChildName');

    test.done()
  },

  /**
   *
   Normalize document using Node.normalize checking that "entities" parameter is ignored.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-entities
   */
  entities04: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var entRef;
    var entities;
    var ent2;
    var doctype;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("entities", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    entRef = doc.createEntityReference("ent1");
    child = pElem.appendChild(entRef);
    doc.normalize();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    child = pElem.lastChild;

    test.notEqual(child, null, 'lastChildNotNull');
    childName = child.nodeName;

    test.equal(childName, "ent1", 'firstChild');
    doctype = doc.doctype;

    entities = doctype.entities;

    ent2 = entities.getNamedItem("ent2");
    test.notEqual(ent2, null, 'ent2NotNull');

    test.done()
  },

  /**
   *
   Call the getInputEncoding method on a UTF-8 encoded document and check if the
   value returned is null for a internal general entity.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-inputEncoding
   */
  entitygetinputencoding01: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var encodingName;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("alpha");
    encodingName = entity.inputEncoding;

    test.equal(encodingName, null, 'entitygetinputencoding01');

    test.done()
  },

  /**
   *
   Call the getInputEncoding method on a UTF-16 encoded document that contains an external
   unparsed entity and check if the value returned is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-inputEncoding
   */
  entitygetinputencoding02: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var encodingName;

    doc = barfoo_utf16.barfoo_utf16();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent5");
    encodingName = entity.inputEncoding;

    test.equal(encodingName, null, 'entitygetinputencoding02');

    test.done()
  },

  /**
   *
   Check the value of Entity.inputEncoding on an UTF-16 external entity
   is either UTF-16 or UTF-16LE

   * @author IBM
   * @author Neil Delima
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-inputEncoding
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Dec/0045.html
   */
  entitygetinputencoding03: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var encodingName;

    doc = external_barfoo.external_barfoo();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent1");
    encodingName = entity.inputEncoding;


    if(
      !("UTF-16LE".toUpperCase() == encodingName.toUpperCase())
    ) {
      test.equal(encodingName.toLowerCase(), "UTF-16".toLowerCase(), 'entityIsUTF16orUTF16LE');

    }
    encodingName = doc.inputEncoding;

    test.equal(encodingName.toLowerCase(), "UTF-8".toLowerCase(), 'documentIsUTF8');

    test.done()
  },

  /**
   *
   Check the value of Entity.inputEncoding on an UTF-8 external entity
   is UTF-8.

   * @author IBM
   * @author Neil Delima
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-inputEncoding
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Dec/0045.html
   */
  entitygetinputencoding04: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var encodingName;

    doc = external_barfoo.external_barfoo();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent2");
    encodingName = entity.inputEncoding;

    test.equal(encodingName.toLowerCase(), "UTF-8".toLowerCase(), 'entityIsUTF8');
    encodingName = doc.inputEncoding;

    test.equal(encodingName.toLowerCase(), "UTF-8".toLowerCase(), 'documentIsUTF8');

    test.done()
  },

  /**
   *
   Call the getXmlEncoding method on a UTF-8 encoded entity of a document that is not an
   external parsed entity  and check if the value returned is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-encoding
   */
  entitygetxmlencoding01: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var encodingName;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("alpha");
    encodingName = entity.xmlEncoding;

    test.equal(encodingName, null, 'entitygetxmlencoding01');

    test.done()
  },

  /**
   *
   Call the getencoding method on a document that contains an external
   unparsed entity and check if the value returned is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-encoding
   */
  entitygetxmlencoding02: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var encodingName;

    doc = external_barfoo.external_barfoo();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent5");
    encodingName = entity.xmlEncoding;

    test.equal(encodingName, null, 'entitygetxmlencoding02');

    test.done()
  },

  /**
   *
   Check the value of Entity.xmlEncoding on an external entity with an encoding
   declaration precisely matches the specified value.

   * @author IBM
   * @author Neil Delima
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-encoding
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Dec/0045.html
   */
  entitygetxmlencoding03: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var encodingName;

    doc = external_barfoo.external_barfoo();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent1");
    encodingName = entity.xmlEncoding;

    test.equal(encodingName, "uTf-16", 'xmlEncoding');

    test.done()
  },

  /**
   *
   Check the value of Entity.xmlEncoding on an external entity without an encoding
   declaration is null.

   * @author IBM
   * @author Neil Delima
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-encoding
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Dec/0045.html
   */
  entitygetxmlencoding04: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var encodingName;

    doc = external_barfoo.external_barfoo();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent2");
    encodingName = entity.xmlEncoding;

    test.equal(encodingName, null, 'xmlEncoding');

    test.done()
  },

  /**
   *
   Call the getXmlVersion method on entity that is not an external entity and check if
   the value returned is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-version
   */
  entitygetxmlversion01: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var entityVersion;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("epsilon");
    entityVersion = entity.xmlVersion;

    test.equal(entityVersion, null, 'entitygetxmlversion01');

    test.done()
  },

  /**
   *
   Call the getXmlVersion method on a UTF-16 encoded document that contains an external
   unparsed entity declaration and check if the value returned is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-version
   */
  entitygetxmlversion02: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var entityVersion;

    doc = barfoo_utf16.barfoo_utf16();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent5");
    entityVersion = entity.xmlVersion;

    test.equal(entityVersion, null, 'entitygetxmlversion02');

    test.done()
  },

  /**
   *
   Check that the value of Entity.xmlVersion on an external entity without
   a version declaration is null.

   * @author IBM
   * @author Neil Delima
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-version
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Dec/0045.html
   */
  entitygetxmlversion03: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var entityVersion;

    doc = external_barfoo.external_barfoo();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent2");
    entityVersion = entity.xmlVersion;

    test.equal(entityVersion, null, 'xmlVersionNull');

    test.done()
  },

  /**
   *
   Check that the value of Entity.xmlVersion on an external entity with
   a version declaration is "1.0".

   * @author IBM
   * @author Neil Delima
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Entity3-version
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Dec/0045.html
   */
  entitygetxmlversion04: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var entityVersion;

    doc = external_barfoo.external_barfoo();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("ent1");
    entityVersion = entity.xmlVersion;

    test.equal(entityVersion, "1.0", 'xmlVersion10');

    test.done()
  },

  /**
   *
   Add two CDATASection containing "]]>" and call Node.normalize
   with an error handler that stops processing.  Only one of the
   CDATASections should be split.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-split-cdata-sections
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ERRORS-DOMErrorHandler-handleError
   */
  handleerror01: function (test) {
    var success;
    var doc;
    var elem;
    var domConfig;
    var elemList;
    var newChild;
    var oldChild;
    var child;
    var childValue;
    var childType;
    var retval;
    var errors = new Array();

    errorHandler = new DOMErrorMonitor();


    doc = barfoo.barfoo();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    oldChild = elem.firstChild;

    newChild = doc.createCDATASection("this is not ]]> good");
    retval = elem.replaceChild(newChild,oldChild);
    newChild = doc.createCDATASection("this is not ]]> bad");
    retval = elem.appendChild(newChild);
    domConfig = doc.domConfig;

    domConfig.setParameter("split-cdata-sections", true);
    domConfig.setParameter("error-handler", errorHandler.handleError);
    doc.normalizeDocument();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    child = elem.lastChild;

    childValue = child.nodeValue;


    if(
      ("this is not ]]> bad" == childValue)
    ) {
      childType = child.nodeType;

      test.equal(childType, 4, 'lastChildCDATA');
      child = elem.firstChild;

      childValue = child.nodeValue;

      test.notEqual(childValue, "this is not ]]> good", 'firstChildNotIntact');

    }

    else {
      child = elem.firstChild;

      childValue = child.nodeValue;

      test.equal(childValue, "this is not ]]> good", 'firstChildIntact');

    }

    test.done()
  },

  /**
   *
   Normalize document with two DOM L1 nodes.
   Use an error handler to continue from errors and check that more than one
   error was reported.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespaces
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-ERRORS-DOMErrorHandler-handleError
   */
  handleerror02: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;
    var brElem;
    var errors = new Array();

    errorHandler = new DOMErrorMonitor(errors);


    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("error-handler", errorHandler.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    brElem = doc.createElement("br");
    retval = pElem.appendChild(brElem);
    brElem = doc.createElement("br");
    retval = pElem.appendChild(brElem);
    doc.normalizeDocument();
    test.equal(errors.length, 2, 'twoErrors');

    test.done()
  },

  /**
   *
   DOMImplementation.hasFeature("XML", "3.0") should return true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-5CED94D7
   */
  hasFeature01: function (test) {
    var success;
    var impl;
    var state;
    impl = getImplementation();
    state = impl.hasFeature("xMl","3.0");
    test.ok(state, 'hasXML30');

    test.done()
  },

  /**
   *
   DOMImplementation.hasFeature("XML", "3.0") should return true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-5CED94D7
   */
  hasFeature02: function (test) {
    var success;
    var impl;
    var state;
    impl = getImplementation();
    state = impl.hasFeature("cOrE","3.0");
    test.ok(state, 'hasCore30');

    test.done()
  },

  /**
   *
   DOMImplementation.hasFeature("XML", "3.0") should return true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-5CED94D7
   */
  hasFeature03: function (test) {
    var success;
    var impl;
    var state;
    impl = getImplementation();
    state = impl.hasFeature("+cOrE","3.0");
    test.ok(state, 'hasPlusCore30');

    test.done()
  },

  /**
   *
   DOMImplementation.hasFeature("XML", "3.0") should return true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-5CED94D7
   */
  hasFeature04: function (test) {
    var success;
    var impl;
    var state;
    impl = getImplementation();
    state = impl.hasFeature("+xMl","3.0");
    test.ok(state, 'hasXML30');

    test.done()
  },

  /**
   *
   Normalize document with infoset set to true, check that
   entity references are expanded and unused entity declaration are maintained.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset01: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var entRef;
    var childValue;
    var entities;
    var ent2;
    var doctype;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("infoset", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    entRef = doc.createEntityReference("ent1");
    child = pElem.appendChild(entRef);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    child = pElem.lastChild;

    test.notEqual(child, null, 'lastChildNotNull');
    childName = child.nodeName;

    test.equal(childName, "#text", 'firstChildName');
    childValue = child.nodeValue;

    test.equal(childValue, "barfoo", 'firstChildValue');
    doctype = doc.doctype;

    entities = doctype.entities;

    ent2 = entities.getNamedItem("ent2");
    test.notEqual(ent2, null, 'ent2NotNull');

    test.done()
  },

  /**
   *
   Normalize document with infoset set to true, check that
   unbound entity references are preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset02: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var entRef;
    var childType;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("infoset", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    entRef = doc.createEntityReference("ent3");
    child = pElem.appendChild(entRef);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    child = pElem.lastChild;

    test.notEqual(child, null, 'lastChildNotNull');
    childType = child.nodeType;

    test.equal(childType, 5, 'lastChildEntRef');
    childName = child.nodeName;

    test.equal(childName, "ent3", 'lastChildName');

    test.done()
  },

  /**
   *
   Normalize document with infoset set to true,
   check if string values were not normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset03: function (test) {
    var success;
    var doc;
    var elemList;
    var element;
    var domConfig;
    var str;
    var canSetValidate;
    var canSetXMLSchema;
    var xsdNS = "http://www.w3.org/2001/XMLSchema";
    errorMonitor = new DOMErrorMonitor();

    var childNode;
    var childValue;
    var childLength;

    doc = datatype_normalization2.datatype_normalization2();
    domConfig = doc.domConfig;

    canSetValidate = domConfig.canSetParameter("validate",true);
    canSetXMLSchema = domConfig.canSetParameter("schema-type",xsdNS);

    if(

      (canSetValidate && canSetXMLSchema)

    ) {
      domConfig.setParameter("infoset", true);
      domConfig.setParameter("validate", true);
      domConfig.setParameter("schema-type", xsdNS);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      elemList = doc.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","code");
      element = elemList.item(0);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      childLength = childValue.length;
      test.equal(childLength, 18, 'content1');
      element = elemList.item(1);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP  0001", 'content2');
      element = elemList.item(2);
      childNode = element.firstChild;

      childValue = childNode.nodeValue;

      test.equal(childValue, "EMP 0001", 'content3');

    }

    test.done()
  },

  /**
   *
   Normalize a document with a created CDATA section with the
   'infoset' to true and check if
   the CDATASection has been coalesced.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=416
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset04: function (test) {
    var success;
    var doc;
    var elem;
    var newCdata;
    var cdata;
    var text;
    var nodeName;
    var nodeValue;
    var appendedChild;
    var domConfig;
    var pList;
    errorMonitor = new DOMErrorMonitor();


    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    newCdata = doc.createCDATASection("CDATA");
    appendedChild = elem.appendChild(newCdata);
    domConfig = doc.domConfig;

    domConfig.setParameter("infoset", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalization2Error", 2);
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    text = elem.lastChild;

    nodeName = text.nodeName;

    test.equal(nodeName, "#text", 'documentnormalizedocument03_false');
    nodeValue = text.nodeValue;

    test.equal(nodeValue, "barCDATA", 'normalizedValue');

    test.done()
  },

  /**
   *
   Normalize document with infoset set to true, check that
   namespace declaration attributes are maintained.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset05: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var xmlnsAttr;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("infoset", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    docElem = doc.documentElement;

    xmlnsAttr = docElem.getAttributeNode("xmlns");
    test.notEqual(xmlnsAttr, null, 'xmlnsAttrNotNull');

    test.done()
  },

  /**
   *
   Create a document with an XML 1.1 valid but XML 1.0 invalid element and
   normalize document with infoset set to true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset06: function (test) {
    var success;
    var domImpl;
    var nullString = null;

    var nullDoctype = null;

    var doc;
    var elem;
    var retval;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var severity;
    var type;
    var locator;
    var relatedNode;
    domImpl = getImplementation();
    doc = domImpl.createDocument(nullString,nullString,nullDoctype);

    {
      success = false;
      try {
        elem = doc.createElementNS("http://www.example.org/domts/wellformed01","LegalNameࢎ");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'xml10InvalidName');
    }

    try {
      doc.xmlVersion = "1.1";


    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    elem = doc.createElementNS("http://www.example.org/domts/wellformed01","LegalNameࢎ");
    retval = doc.appendChild(elem);
    doc.xmlVersion = "1.0";

    domConfig = doc.domConfig;

    domConfig.setParameter("infoset", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errors = errorMonitor.allErrors;
    for(var indexN100A9 = 0;indexN100A9 < errors.length; indexN100A9++) {
      error = errors[indexN100A9];
      severity = error.severity;

      test.equal(severity, 2, 'severity');
      type = error.type;

      test.equal(type, "wf-invalid-character-in-node-name", 'type');
      locator = error.location;

      relatedNode = locator.relatedNode;

      test.equal(relatedNode, elem, 'relatedNode');

    }
    test.equal(errors.length, 1, 'oneError');

    test.done()
  },

  /**
   *
   Create a document with an XML 1.1 valid but XML 1.0 invalid attribute and
   normalize document with infoset set to true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset07: function (test) {
    var success;
    var domImpl;
    var nullDoctype = null;

    var doc;
    var docElem;
    var attr;
    var retval;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var severity;
    var type;
    var locator;
    var relatedNode;
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDoctype);
    docElem = doc.documentElement;


    {
      success = false;
      try {
        attr = doc.createAttribute("LegalNameࢎ");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'xml10InvalidName');
    }

    try {
      doc.xmlVersion = "1.1";


    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    docElem.setAttribute("LegalNameࢎ","foo");
    attr = docElem.getAttributeNode("LegalNameࢎ");
    doc.xmlVersion = "1.0";

    domConfig = doc.domConfig;

    domConfig.setParameter("infoset", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errors = errorMonitor.allErrors;
    for(var indexN100AA = 0;indexN100AA < errors.length; indexN100AA++) {
      error = errors[indexN100AA];
      severity = error.severity;

      test.equal(severity, 2, 'severity');
      type = error.type;

      test.equal(type, "wf-invalid-character-in-node-name", 'type');
      locator = error.location;

      relatedNode = locator.relatedNode;

      test.equal(relatedNode, attr, 'relatedNode');

    }
    test.equal(errors.length, 1, 'oneError');

    test.done()
  },

  /**
   *
   Normalize document with infoset and validation set to true, check that
   whitespace in element content is preserved.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset08: function (test) {
    var success;
    var doc;
    var bodyList;
    var body;
    var domConfig;
    var canSet;
    var canSetValidate;
    errorMonitor = new DOMErrorMonitor();

    var child;
    var childName;
    var text;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("infoset", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);

    if(
      (getImplementationAttribute("ignoringElementContentWhitespace") == true)
    ) {
      bodyList = doc.getElementsByTagName("body");
      body = bodyList.item(0);
      child = body.firstChild;

      text = doc.createTextNode("    ");
      child = body.insertBefore(text,child);

    }
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    bodyList = doc.getElementsByTagName("body");
    body = bodyList.item(0);
    child = body.firstChild;

    test.notEqual(child, null, 'firstChildNotNull');
    childName = child.nodeName;

    test.equal(childName, "#text", 'firstChild');
    child = child.nextSibling;

    test.notEqual(child, null, 'secondChildNotNull');
    childName = child.nodeName;

    test.equal(childName, "p", 'secondChild');

    test.done()
  },

  /**
   *
   Append a Comment node and normalize with "infoset" set to true.

   * @author Curt Arnold
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-infoset
   */
  infoset09: function (test) {
    var success;
    var doc;
    var elem;
    var newComment;
    var lastChild;
    var text;
    var nodeName;
    var appendedChild;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;

    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    newComment = doc.createComment("COMMENT_NODE");
    appendedChild = elem.appendChild(newComment);
    domConfig = doc.domConfig;

    domConfig.setParameter("comments", false);
    domConfig.setParameter("infoset", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizationError", 2);
    pList = doc.getElementsByTagName("p");
    elem = pList.item(0);
    lastChild = elem.lastChild;

    nodeName = lastChild.nodeName;

    test.equal(nodeName, "#comment", 'commentPreserved');

    test.done()
  },

  /**
   *
   Normalize document with namespace-declarations set to true, check that
   namespace declaration attributes are maintained.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespace-declarations
   */
  namespacedeclarations01: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var xmlnsAttr;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("namespace-declarations", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    docElem = doc.documentElement;

    xmlnsAttr = docElem.getAttributeNode("xmlns");
    test.notEqual(xmlnsAttr, null, 'xmlnsAttrNotNull');

    test.done()
  },

  /**
   *
   Normalize document with namespace-declarations set to true, check that
   namespace declaration attributes are maintained.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-namespace-declarations
   */
  namespacedeclarations02: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var xmlnsAttr;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("namespace-declarations", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    docElem = doc.documentElement;

    xmlnsAttr = docElem.getAttributeNode("xmlns");
    test.equal(xmlnsAttr, null, 'xmlnsAttrNull');

    test.done()
  },

  /**
   *
   An attempt to add a second doctype node should result in a HIERARCHY_REQUEST_ERR
   or a NOT_SUPPORTED_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-184E7107
   */
  nodeappendchild01: function (test) {
    var success;
    var doc;
    var domImpl;
    var docType;
    var nullPubId = null;

    var nullSysId = null;

    var appendedChild;
    var tagName;
    var docElem;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    tagName = docElem.tagName;

    domImpl = doc.implementation;
    docType = domImpl.createDocumentType(tagName,nullPubId,nullSysId);

    try {
      appendedChild = doc.appendChild(docType);
      test.ok(false, 'throw_HIERARCHY_REQUEST_OR_NOT_SUPPORTED');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        case /* NOT_SUPPORTED_ERR */ 9 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   An attempt to add a second document element should result in a HIERARCHY_REQUEST_ERR
   or a NOT_SUPPORTED_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-184E7107
   */
  nodeappendchild02: function (test) {
    var success;
    var doc;
    var newElem;
    var appendedChild;
    var tagName;
    var rootNS;
    var docElem;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    tagName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    newElem = doc.createElementNS(rootNS,tagName);

    try {
      appendedChild = doc.appendChild(newElem);
      test.ok(false, 'throw_HIERARCHY_REQUEST_OR_NOT_SUPPORTED');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        case /* NOT_SUPPORTED_ERR */ 9 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *



   Using compareDocumentPosition to check if a Document node contains and precedes its documentType and
   node and if the DocumentTypeNode is contained and follows its Document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition01: function (test) {
    var success;
    var doc;
    var docType;
    var documentPositionDoc;
    var documentPositionDocType;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    documentPositionDoc = doc.compareDocumentPosition(docType);
    test.equal(documentPositionDoc, 20, 'nodecomparedocumentpositionIsContainedFollowing01');
    documentPositionDocType = docType.compareDocumentPosition(doc);
    test.equal(documentPositionDocType, 10, 'nodecomparetreepositionContainsPRECEDING01');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if a Document node contains and precedes its new DocumentType and
   node and if the new DocumentType Node is contained and follows its Document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition02: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDocType;
    var docType;
    var documentPositionDoc;
    var documentPositionDocType;
    var nullPubId = null;

    var nullSysId = null;

    var replaced;
    var rootName;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    rootName = docType.name;

    domImpl = doc.implementation;
    newDocType = domImpl.createDocumentType(rootName,nullPubId,nullSysId);
    replaced = doc.replaceChild(newDocType,docType);
    documentPositionDoc = doc.compareDocumentPosition(newDocType);
    test.equal(documentPositionDoc, 20, 'nodecomparedocumentpositionIsContainedFollowing02');
    documentPositionDocType = newDocType.compareDocumentPosition(doc);
    test.equal(documentPositionDocType, 10, 'nodecomparedocumentpositionContainsPRECEDING02');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document position of two Document nodes obtained from the
   same xml document is disconnected, implementation specific, and that the order of these two documents
   is reserved.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition03: function (test) {
    var success;
    var doc;
    var docComp;
    var documentPosition1;
    var documentPosition2;
    var documentPosition3;

    doc = hc_staff.hc_staff();

    docComp = hc_staff.hc_staff();
    documentPosition1 = doc.compareDocumentPosition(docComp);
    test.equal(documentPosition1, 33, 'isImplSpecificDisconnected1');
    documentPosition2 = docComp.compareDocumentPosition(doc);
    test.notEqual(documentPosition2, documentPosition1, 'notBothPreceding');
    test.notEqual(documentPosition2, documentPosition1, 'notBothFollowing');
    test.equal(documentPosition2, 33, 'isImplSpecificDisconnected2');
    documentPosition3 = doc.compareDocumentPosition(docComp);
    test.equal(documentPosition3, documentPosition1, 'isConsistent');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check that no flags are set in return when the document position of a
   Document node is compared with itself

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition04: function (test) {
    var success;
    var doc;
    var documentPosition;

    doc = hc_staff.hc_staff();
    documentPosition = doc.compareDocumentPosition(doc);
    test.equal(documentPosition, 0, 'nodecomparedocumentpositionNoFlags04');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document position of a Document and a new Document node
   are disconnected, implementation-specific and preceding/following.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition05: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var documentPosition1;
    var documentPosition2;
    var documentPosition3;
    var nullDocType = null;

    var rootName;
    var rootNS;
    var docElem;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    documentPosition1 = doc.compareDocumentPosition(newDoc);
    test.equal(documentPosition1, 33, 'isImplSpecificDisconnected1');
    documentPosition2 = newDoc.compareDocumentPosition(doc);
    test.equal(documentPosition2, 33, 'isImplSpecificDisconnected2');
    test.notEqual(documentPosition2, documentPosition1, 'notBothPreceding');
    test.notEqual(documentPosition2, documentPosition1, 'notBothFollowing');
    documentPosition3 = doc.compareDocumentPosition(newDoc);
    test.equal(documentPosition3, documentPosition1, 'isConsistent');

    test.done()
  },

  /**
   *



   Using compareDocumentPosition check if the document position of a Document node contains and precedes
   its DocumentElement, and the DocumentElement is contained and follows the Document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition06: function (test) {
    var success;
    var doc;
    var docElem;
    var documentPositionDoc;
    var documentPositionDocElem;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    documentPositionDoc = doc.compareDocumentPosition(docElem);
    test.equal(documentPositionDoc, 20, 'nodecomparedocumentpositionIsContainedFollowing06');
    documentPositionDocElem = docElem.compareDocumentPosition(doc);
    test.equal(documentPositionDocElem, 10, 'nodecomparedocumentpotionContainsPRECEDING06');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document compared contains and precedes the new
   newElement, and the newElement is contained and follows the document.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition07: function (test) {
    var success;
    var doc;
    var docElem;
    var newElem;
    var documentPosition;
    var documentElementPosition;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    newElem = doc.createElementNS("http://www.w3.org/1999/xhtml","br");
    appendedChild = docElem.appendChild(newElem);
    documentPosition = doc.compareDocumentPosition(newElem);
    test.equal(documentPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing07');
    documentElementPosition = newElem.compareDocumentPosition(doc);
    test.equal(documentElementPosition, 10, 'nodecomparedocumentpositionContainedPRECEDING07');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the Document node contains and precedes an Element,
   and the Element is contained and follows the Document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition08: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var documentPosition;
    var elementPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    documentPosition = doc.compareDocumentPosition(elem);
    test.equal(documentPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing08');
    elementPosition = elem.compareDocumentPosition(doc);
    test.equal(elementPosition, 10, 'nodecomparedocumentpositionContainsPRECEDING08');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the Element node is contained and follows the appended Document node, and
   if the Document node contains and precedes the Element node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition09: function (test) {
    var success;
    var doc;
    var elem;
    var newElem;
    var elemList;
    var documentPosition;
    var documentElementPosition;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    newElem = doc.createElementNS("http://www.w3.org/1999/xhtml","br");
    appendedChild = elem.appendChild(newElem);
    documentPosition = doc.compareDocumentPosition(newElem);
    test.equal(documentPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing09');
    documentElementPosition = newElem.compareDocumentPosition(doc);
    test.equal(documentElementPosition, 10, 'nodecomparedocumentpositionContainsPRECEDING09');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document node precedes and contains its default Attr node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition10: function (test) {
    var success;
    var doc;
    var elem;
    var dir;
    var elemList;
    var attrPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    elemList = elem.getElementsByTagName("acronym")
    elem = elemList.item(0);
    dir = elem.getAttributeNode("title");
    attrPosition = dir.compareDocumentPosition(doc);
    test.equal(attrPosition, 10, 'nodecomparedocumentpositionPRECEDINGContains10');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the Document node precedes and contains the Attr node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition11: function (test) {
    var success;
    var doc;
    var elem;
    var newAttr;
    var elemList;
    var documentPosition;
    var attrPosition;
    var replacedAttr;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    newAttr = doc.createAttribute("title");
    replacedAttr = elem.setAttributeNode(newAttr);
    attrPosition = newAttr.compareDocumentPosition(doc);
    test.equal(attrPosition, 10, 'nodecomparedocumentpositionPRECEDINGContains11');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if a new ProcessingInstruction node is contained and follows the
   Document node, and that the Document node contains and precedes the ProcessingInstruction node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition12: function (test) {
    var success;
    var doc;
    var pi;
    var documentPosition;
    var piPosition;
    var appendedChild;

    doc = hc_staff.hc_staff();
    pi = doc.createProcessingInstruction("PITarget","PIDATA");
    appendedChild = doc.appendChild(pi);
    documentPosition = doc.compareDocumentPosition(pi);
    test.equal(documentPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing12');
    piPosition = pi.compareDocumentPosition(doc);
    test.equal(piPosition, 10, 'nodecomparedocumentpositionContainsPRECEDING12');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the Document node contains and precedes the new Comment node,
   and if the Comment node is contained and follows the Document node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition13: function (test) {
    var success;
    var doc;
    var comment;
    var elem;
    var elemList;
    var documentPosition;
    var commentPosition;
    var appendedChild;

    doc = hc_staff.hc_staff();
    comment = doc.createComment("Another Comment");
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    appendedChild = elem.appendChild(comment);
    documentPosition = doc.compareDocumentPosition(comment);
    test.equal(documentPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing13');
    commentPosition = comment.compareDocumentPosition(doc);
    test.equal(commentPosition, 10, 'nodecomparedocumentpositionContainsPRECEDING13');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the DocumentFragment node contains and precedes 	an Element
   node appended to it, and that the Element node is contained and follows the DocumentFragment node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition14: function (test) {
    var success;
    var doc;
    var docFrag;
    var docElem;
    var docFragChild;
    var docFragPosition;
    var docFragChildPosition;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    docFrag = doc.createDocumentFragment();
    appendedChild = docFrag.appendChild(docElem);
    docFragChild = docFrag.firstChild;

    docFragPosition = docFrag.compareDocumentPosition(docFragChild);
    test.equal(docFragPosition, 20, 'nodecomparedocumentpositionContainsPRECEDING14');
    docFragChildPosition = docFragChild.compareDocumentPosition(docFrag);
    test.equal(docFragChildPosition, 10, 'nodecomparedocumentpositionIsContainedFollowing14');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the Element node precedes and contains its Attr child, and that the Attr child
   is contained and follows the Element node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition15: function (test) {
    var success;
    var doc;
    var docFrag;
    var docElem;
    var attr;
    var docFragChild;
    var attrPosition;
    var docFragChildPosition;
    var appendedChild;
    var attrNode;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    docFrag = doc.createDocumentFragment();
    attr = doc.createAttribute("title");
    docElem.setAttributeNode(attr);
    docFrag.appendChild(docElem);
    docFragChild = docFrag.firstChild;

    docFragChildPosition = docFragChild.compareDocumentPosition(attr);
    test.equal(docFragChildPosition, 20, 'nodecomparedocumentpositionIsContainedFollows15');
    attrPosition = attr.compareDocumentPosition(docFragChild);
    test.equal(attrPosition, 10, 'nodecomparedocumentpositionPRECEEDINGContains15');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document position of a DocumentFragment node compared with
   a cloned Attr node is disconnected and implementation specific, and that the order between these two
   nodes is preserved.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition16: function (test) {
    var success;
    var doc;
    var docFrag;
    var attr;
    var attrCloned;
    var docFragPosition;
    var position1;
    var position2;
    var position3;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    attrCloned = attr.cloneNode(true);
    position1 = docFrag.compareDocumentPosition(attrCloned);
    test.equal(position1, 33, 'isImplSpecificDisconnected1');
    position2 = attrCloned.compareDocumentPosition(docFrag);
    test.notEqual(position2, position1, 'notBothPreceding');
    test.notEqual(position2, position1, 'notBothFollowing');
    test.equal(position2, 33, 'isImplSpecificDisconnected2');
    position3 = docFrag.compareDocumentPosition(attrCloned);
    test.equal(position3, position1, 'isConsistent');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document position of the first ProcessingInstruction node compared to
   this second newly apended ProcessingInstruction node is PRECEDING, and FOLLOWING vice versa.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition17: function (test) {
    var success;
    var doc;
    var pi1;
    var pi2;
    var pi1Position;
    var pi2Position;
    var appendedChild;

    doc = hc_staff.hc_staff();
    pi1 = doc.createProcessingInstruction("PI1","");
    pi2 = doc.createProcessingInstruction("PI2","");
    appendedChild = doc.appendChild(pi1);
    appendedChild = doc.appendChild(pi2);
    pi1Position = pi1.compareDocumentPosition(pi2);
    test.equal(pi1Position, 4, 'nodecomparedocumentpositionFollowing17');
    pi2Position = pi2.compareDocumentPosition(pi1);
    test.equal(pi2Position, 2, 'nodecomparedocumentpositionPRECEDING17');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document position of the first new Text node compared to the
   second text node is PRECEDING and is FOLLOWING vice versa.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition18: function (test) {
    var success;
    var doc;
    var docElem;
    var txt1;
    var txt2;
    var txt1Position;
    var txt2Position;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    txt1 = doc.createTextNode("T1");
    txt2 = doc.createTextNode("T2");
    appendedChild = docElem.appendChild(txt1);
    appendedChild = docElem.appendChild(txt2);
    txt1Position = txt1.compareDocumentPosition(txt2);
    test.equal(txt1Position, 4, 'nodecomparedocumentpositionFollowing18');
    txt2Position = txt2.compareDocumentPosition(txt1);
    test.equal(txt2Position, 2, 'nodecomparedocumentpositionPRECEDING18');

    test.done()
  },

  /**
   *
   The method compareDocumentPosition compares a node with this node with regard to their position in the
   document and according to the document order.

   Using compareDocumentPosition check if the document position of the first CDATASection node
   of the second element whose localName is name compared with the second CDATASection node
   is PRECEDING and is FOLLOWING vice versa.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition19: function (test) {
    var success;
    var doc;
    var elemList;
    var elemStrong;
    var cdata1;
    var cdata2;
    var aNode;
    var cdata1Position;
    var cdata2Position;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagNameNS("*","strong");
    elemStrong = elemList.item(1);
    cdata2 = elemStrong.lastChild;

    aNode = cdata2.previousSibling;

    cdata1 = aNode.previousSibling;

    cdata1Position = cdata1.compareDocumentPosition(cdata2);
    test.equal(cdata1Position, 4, 'nodecomparedocumentposition19_cdata2Follows');
    cdata2Position = cdata2.compareDocumentPosition(cdata1);
    test.equal(cdata2Position, 2, 'nodecomparedocumentposition_cdata1Precedes');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document position of the first Text node
   of the second element whose localName is name compared with the next CDATASection node
   is PRECEDING and FOLLOWING vice versa.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition20: function (test) {
    var success;
    var doc;
    var elemList;
    var elemName;
    var cdata;
    var txt;
    var txtPosition;
    var cdataPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elemName = elemList.item(1);
    txt = elemName.firstChild;

    cdata = elemName.lastChild;

    txtPosition = txt.compareDocumentPosition(cdata);
    test.equal(txtPosition, 4, 'nodecomparedocumentpositionFollowingg20');
    cdataPosition = cdata.compareDocumentPosition(txt);
    test.equal(cdataPosition, 2, 'nodecomparedocumentpositionPRECEDING20');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check the document position of the text node of the fist and second elements
   whose localName is name.  The first text node should return FOLLOWING and the second text node should
   return PRECEDING when compareDocumentPosition is invoked with the other node as a parameter.


   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition21: function (test) {
    var success;
    var doc;
    var elemList;
    var elemName1;
    var elemName2;
    var txt1;
    var txt2;
    var txt1Position;
    var txt2Position;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elemName1 = elemList.item(0);
    elemName2 = elemList.item(1);
    txt1 = elemName1.firstChild;

    txt2 = elemName2.firstChild;

    txt1Position = txt1.compareDocumentPosition(txt2);
    test.equal(txt1Position, 4, 'nodecomparedocumentpositionFollowing21');
    txt2Position = txt2.compareDocumentPosition(txt1);
    test.equal(txt2Position, 2, 'nodecomparedocumentpositionPRECEDING21');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the Entity node precedes the Notation node and the Notation
   node follows the Entity node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition22: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var notationsMap;
    var entity;
    var notation;
    var entityPosition;
    var notationPosition;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    notationsMap = docType.notations;

    entity = entitiesMap.getNamedItem("alpha");
    notation = notationsMap.getNamedItem("notation1");
    entityPosition = entity.compareDocumentPosition(notation);
    test.equal(entityPosition, 4, 'nodecomparedocumentpositionFollowing22');
    notationPosition = notation.compareDocumentPosition(entity);
    test.equal(notationPosition, 2, 'nodecomparedocumentpositionPRECEDING22');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the document position of an Entity node compared to another
   Entity node following it in DocumentType is implementation specific.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition23: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var entity2;
    var position1;
    var position2;
    var position3;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("alpha");
    entity2 = entitiesMap.getNamedItem("delta");
    position1 = entity.compareDocumentPosition(entity2);
    test.equal(position1, 32, 'isImplSpecificDisconnected1');
    position2 = entity2.compareDocumentPosition(entity);
    test.notEqual(position2, position1, 'notBothPreceding');
    test.notEqual(position2, position1, 'notBothFollowing');
    test.equal(position2, 32, 'isImplSpecificDisconnected2');
    position3 = entity.compareDocumentPosition(entity2);
    test.equal(position3, position1, 'isConsistent');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the return value of document position of a Notation node compared to another
   that is the same is not flagged.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition24: function (test) {
    var success;
    var doc;
    var docType;
    var notaionsMap;
    var notation;
    var notation2;
    var notationPosition;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    notaionsMap = docType.notations;

    notation = notaionsMap.getNamedItem("notation1");
    notation2 = notaionsMap.getNamedItem("notation1");
    notationPosition = notation.compareDocumentPosition(notation2);
    test.equal(notationPosition, 0, 'nodecomparedocumentposition24');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the EntityReference or Text node is contained and follows its
   parent Element node, and that the Element node contains and precedes the
   EntityReference or Text node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition25: function (test) {
    var success;
    var doc;
    var elemList;
    var elemName;
    var entRef;
    var elementPosition;
    var entRefPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("var");
    elemName = elemList.item(2);
    entRef = elemName.firstChild;

    elementPosition = elemName.compareDocumentPosition(entRef);
    test.equal(elementPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing25');
    entRefPosition = entRef.compareDocumentPosition(elemName);
    test.equal(entRefPosition, 10, 'nodecomparedocumentpositionContainsPRECEDING25');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check if the EntityReference node contains and precedes it's first
   childElement, and that the childElement is contained and follows the EntityReference node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition26: function (test) {
    var success;
    var doc;
    var varList;
    var varElem;
    var entRef;
    var entRefChild1;
    var entRefPosition;
    var entRefChild1Position;

    doc = hc_staff.hc_staff();

    if(
      (getImplementationAttribute("expandEntityReferences") == false)
    ) {
      varList = doc.getElementsByTagName("var");
      varElem = varList.item(2);
      test.notEqual(varElem, null, 'varElemNotNull');
      entRef = varElem.firstChild;

      test.notEqual(entRef, null, 'entRefNotNull');

    }

    else {
      entRef = doc.createEntityReference("ent4");

    }
    entRefChild1 = entRef.firstChild;

    test.notEqual(entRefChild1, null, 'entRefChild1NotNull');
    entRefPosition = entRef.compareDocumentPosition(entRefChild1);
    test.equal(entRefPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing26');
    entRefChild1Position = entRefChild1.compareDocumentPosition(entRef);
    test.equal(entRefChild1Position, 10, 'nodecomparedocumentpositionContainsPRECEDING26');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if the EntityReference node contains and precedes it's last
   childElement, and that this childElement is contained and follows the EntityReference node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition27: function (test) {
    var success;
    var doc;
    var varList;
    var varElem;
    var entRef;
    var entRefChild1;
    var entRefPosition;
    var entRefChild1Position;

    doc = hc_staff.hc_staff();

    if(
      (getImplementationAttribute("expandEntityReferences") == false)
    ) {
      varList = doc.getElementsByTagName("var");
      varElem = varList.item(2);
      test.notEqual(varElem, null, 'varElemNotNull');
      entRef = varElem.firstChild;

      test.notEqual(entRef, null, 'entRefNotNull');

    }

    else {
      entRef = doc.createEntityReference("ent4");

    }
    entRefChild1 = entRef.lastChild;

    test.notEqual(entRefChild1, null, 'entRefChild1NotNull');
    entRefPosition = entRef.compareDocumentPosition(entRefChild1);
    test.equal(entRefPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing27');
    entRefChild1Position = entRefChild1.compareDocumentPosition(entRef);
    test.equal(entRefChild1Position, 10, 'nodecomparedocumentpositionContainsPRECEDING');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition check the document position of the EntityReference node ent4's
   first child and last child.  Invoke compareDocumentPositon on first child with last child as a parameter
   should return FOLLOWING, and should return PRECEDING vice versa.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition28: function (test) {
    var success;
    var doc;
    var varList;
    var varElem;
    var entRef;
    var entRefChild1;
    var entRefChild2;
    var entRefChild1Position;
    var entRefChild2Position;

    doc = hc_staff.hc_staff();

    if(
      (getImplementationAttribute("expandEntityReferences") == false)
    ) {
      varList = doc.getElementsByTagName("var");
      varElem = varList.item(2);
      test.notEqual(varElem, null, 'varElemNotNull');
      entRef = varElem.firstChild;

      test.notEqual(entRef, null, 'entRefNotNull');

    }

    else {
      entRef = doc.createEntityReference("ent4");

    }
    entRefChild1 = entRef.firstChild;

    test.notEqual(entRefChild1, null, 'entRefChild1NotNull');
    entRefChild2 = entRef.lastChild;

    test.notEqual(entRefChild2, null, 'entRefChild2NotNull');
    entRefChild1Position = entRefChild1.compareDocumentPosition(entRefChild2);
    test.equal(entRefChild1Position, 4, 'nodecomparedocumentpositionFollowing28');
    entRefChild2Position = entRefChild2.compareDocumentPosition(entRefChild1);
    test.equal(entRefChild2Position, 2, 'nodecomparedocumentpositionPRECEDING28');

    test.done()
  },

  /**
   *
   Create two entity reference nodes. Using compareDocumentPosition to check if the child of the first Entity
   Ref node precedes the child of the second Entity Ref node, and that the child of the second Entity Ref node
   follows the child of the first Entity Ref node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition29: function (test) {
    var success;
    var doc;
    var docElem;
    var entRef1;
    var entRef2;
    var entRefChild1;
    var entRefChild2;
    var entRefChild1Position;
    var entRefChild2Position;
    var appendedChild;

    doc = hc_staff.hc_staff();
    entRef1 = doc.createEntityReference("ent4");
    entRef2 = doc.createEntityReference("ent4");
    docElem = doc.documentElement;

    appendedChild = docElem.appendChild(entRef1);
    appendedChild = docElem.appendChild(entRef2);
    entRefChild1 = entRef1.firstChild;

    test.notEqual(entRefChild1, null, 'entRefChild1NotNull');
    entRefChild2 = entRef2.lastChild;

    test.notEqual(entRefChild2, null, 'entRefChild2NotNull');
    entRefChild1Position = entRefChild1.compareDocumentPosition(entRefChild2);
    test.equal(entRefChild1Position, 4, 'nodecomparedocumentpositionFollowing29');
    entRefChild2Position = entRefChild2.compareDocumentPosition(entRefChild1);
    test.equal(entRefChild2Position, 2, 'nodecomparedocumentpositionPRECEDING29');

    test.done()
  },

  /**
   *
   Using compareTreePosition check if comparedocumentposition invoked on the first name with
   the first position node as a parameter returns FOLLOWING.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition30: function (test) {
    var success;
    var doc;
    var nameList;
    var positionList;
    var strong;
    var code;
    var namePosition;

    doc = hc_staff.hc_staff();
    nameList = doc.getElementsByTagName("strong");
    strong = nameList.item(0);
    positionList = doc.getElementsByTagName("code");
    code = positionList.item(0);
    namePosition = code.compareDocumentPosition(strong);
    test.equal(namePosition, 2, 'nodecomparedocumentpositionFollowing30');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if invoking the method on the first name node with
   a new node appended to the second position node as a parameter is FOLLOWING, and is PRECEDING vice versa

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition31: function (test) {
    var success;
    var doc;
    var nameList;
    var positionList;
    var strong;
    var code;
    var newElem;
    var namePosition;
    var elemPosition;
    var appendedChild;

    doc = hc_staff.hc_staff();
    nameList = doc.getElementsByTagName("strong");
    strong = nameList.item(0);
    positionList = doc.getElementsByTagName("code");
    code = positionList.item(1);
    newElem = doc.createElementNS("http://www.w3.org/1999/xhtml","br");
    appendedChild = code.appendChild(newElem);
    namePosition = strong.compareDocumentPosition(newElem);
    test.equal(namePosition, 4, 'nodecomparedocumentpositionFollowing31');
    elemPosition = newElem.compareDocumentPosition(strong);
    test.equal(elemPosition, 2, 'nodecomparedocumentpositionPRECEDING31');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if the document position returned by comparing the first name with
   a first position node of another document reference and adopted by the first as a parameter is FOLLOWING.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition32: function (test) {
    var success;
    var doc;
    var doc2;
    var nameList;
    var positionList;
    var strong;
    var code;
    var documentPosition;

    doc = hc_staff.hc_staff();
    doc2 =  doc;
    nameList = doc.getElementsByTagName("strong");
    strong = nameList.item(0);
    positionList = doc2.getElementsByTagName("code");
    code = positionList.item(0);
    documentPosition = strong.compareDocumentPosition(code);
    test.equal(documentPosition, 4, 'nodecomparedocumentpositionFollowing32');

    test.done()
  },

  /**
   *
   Create a new Element node, add a new atttribute node to it.  Compare the position
   of the Element and the Document.  This should return disconnected, implementation specific, and that
   the order of these two nodes is preserved.
   Also compare the position of the Element node with respect to the Attr node and this should
   be PRECEDING and contains, and the Attr node follows and is contained by the Element node

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition33: function (test) {
    var success;
    var doc;
    var elem;
    var attr;
    var position1;
    var position2;
    var position3;
    var position4;
    var position5;
    var replacedAttr;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","br");
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    replacedAttr = elem.setAttributeNodeNS(attr);
    position4 = elem.compareDocumentPosition(attr);
    test.equal(position4, 20, 'nodecomparedocumentposition3FollowingisContained33');
    position5 = attr.compareDocumentPosition(elem);
    test.equal(position5, 10, 'nodecomparedocumentposition4ContainsPRECEDING33');
    position1 = doc.compareDocumentPosition(elem);
    test.equal(position1, 33, 'isImplSpecificDisconnected1');
    position2 = elem.compareDocumentPosition(doc);
    test.notEqual(position2, position1, 'notBothPreceding');
    test.notEqual(position2, position1, 'notBothFollowing');
    test.equal(position2, 33, 'isImplSpecificDisconnected2');
    position3 = doc.compareDocumentPosition(elem);
    test.equal(position3, position1, 'isConsistent');

    test.done()
  },

  /**
   *
   Create a new Element node, add new Text, Element and Processing Instruction nodes to it.
   Using compareDocumentPosition, compare the position of the Element with respect to the Text
   and the Text with respect to the Processing Instruction.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition34: function (test) {
    var success;
    var doc;
    var elemMain;
    var elem;
    var txt;
    var pi;
    var elementToTxtPosition;
    var txtToPiPosition;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elemMain = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","br");
    txt = doc.createTextNode("TEXT");
    pi = doc.createProcessingInstruction("PIT","PID");
    appendedChild = elemMain.appendChild(txt);
    appendedChild = elemMain.appendChild(elem);
    appendedChild = elemMain.appendChild(pi);
    elementToTxtPosition = txt.compareDocumentPosition(elem);
    test.equal(elementToTxtPosition, 4, 'nodecomparedocumentpositionFollowing34');
    txtToPiPosition = pi.compareDocumentPosition(txt);
    test.equal(txtToPiPosition, 2, 'nodecomparedocumentpositionPRECEDING34');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if the Element contains and precedes its default attribute
   and that the attribute follows and iscontained by the Element

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition35: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var attr;
    var elementPosition;
    var attrPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    attr = elem.getAttributeNode("dir");
    elementPosition = elem.compareDocumentPosition(attr);
    test.equal(elementPosition, 20, 'nodecomparedocumentpositionIsContainedFollowing35');
    attrPosition = attr.compareDocumentPosition(elem);
    test.equal(attrPosition, 10, 'nodecomparedocumentpositionPRECEDINGContains35');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if the document position of an Attribute compared with
   the element that follows its parent as a parameter is FOLLOWING, and is PRECEDING
   vice versa.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition36: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var elemListFollows;
    var elemFollows;
    var attr;
    var attrPosition;
    var elemFollowsPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    attr = doc.createAttribute("title");
    elem.setAttributeNode(attr);
    elemListFollows = doc.getElementsByTagName("strong");
    elemFollows = elemListFollows.item(3);
    attrPosition = attr.compareDocumentPosition(elemFollows);
    test.equal(attrPosition, 4, 'nodecomparedocumentpositionFollowing36');
    elemFollowsPosition = elemFollows.compareDocumentPosition(attr);
    test.equal(elemFollowsPosition, 2, 'nodecomparedocumentpositionPRECEEDING36');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if the document position of the first class attribute
   of the element acronym when compared with the elements text content as a parameter is
   is FOLLOWING, and is PRECEDING vice versa.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition37: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var txt;
    var attr;
    var attrPosition;
    var txtPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(3);
    attr = elem.getAttributeNode("class");
    txt = elem.firstChild;

    attrPosition = attr.compareDocumentPosition(txt);
    test.equal(attrPosition, 4, 'nodecomparetreepositionFollowing37');
    txtPosition = txt.compareDocumentPosition(attr);
    test.equal(txtPosition, 2, 'nodecomparetreepositionPRECEDING37');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if the class's attribute contains and precedes it's content,
   and the content node is contained and follows the attribute node.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition38: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var txt;
    var attr;
    var attrPosition;
    var attrChildPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(3);
    attr = elem.getAttributeNode("class");
    txt = attr.firstChild;
    attrPosition = attr.compareDocumentPosition(txt);
    test.equal(attrPosition, 20, 'nodecomparedocumentpositionIsContainsFollowing38');
    attrChildPosition = txt.compareDocumentPosition(attr);
    test.equal(attrChildPosition, 10, 'nodecomparedocumentpositionContainsPRECEDING38');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if the document position of the class's attribute
   when compared with the local1 attribute node is implementation_specific.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition39: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var attr1;
    var attr2;
    var attrPosition;
    var swappedPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(3);
    attr1 = elem.getAttributeNode("class");
    attr2 = elem.getAttributeNode("xsi:noNamespaceSchemaLocation");
    attrPosition = attr1.compareDocumentPosition(attr2);
    test.equal(attrPosition, 32, 'isImplementationSpecific');
    test.equal(attrPosition, 0, 'otherBitsZero');
    test.notEqual(attrPosition, 0, 'eitherFollowingOrPreceding');
    swappedPosition = attr2.compareDocumentPosition(attr1);
    test.notEqual(attrPosition, swappedPosition, 'onlyOnePreceding');
    test.notEqual(attrPosition, swappedPosition, 'onlyOneFollowing');

    test.done()
  },

  /**
   *
   Using compareDocumentPosition to check if the document position of the class's attribute
   when compared with a new attribute node is implementation_specific

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-compareDocumentPosition
   */
  nodecomparedocumentposition40: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var attr1;
    var attr2;
    var attrPosition;
    var swappedPosition;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(3);
    attr1 = elem.getAttributeNode("class");
    elem.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang","FR-fr");
    attr2 = elem.getAttributeNode("xml:lang");
    attrPosition = attr1.compareDocumentPosition(attr2);
    test.equal(attrPosition, 32, 'isImplementationSpecific');
    test.equal(attrPosition, 0, 'otherBitsZero');
    test.notEqual(attrPosition, 0, 'eitherFollowingOrPreceding');
    swappedPosition = attr2.compareDocumentPosition(attr1);
    test.notEqual(attrPosition, swappedPosition, 'onlyOnePreceding');
    test.notEqual(attrPosition, swappedPosition, 'onlyOneFollowing');

    test.done()
  },

  /**
   *
   Call Node.getBaseURI() on a test document.  Should be not-null and same as Document.getDocumentURI().

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Document
   */
  nodegetbaseuri01: function (test) {
    var success;
    var doc;
    var baseURI;
    var documentURI;

    doc = barfoo.barfoo();
    baseURI = doc.baseURI;

    test.equals(baseURI, 'barfoo', 'notNull');
    documentURI = doc.documentURI;

    test.equal(baseURI, documentURI, 'sameAsDocumentURI');

    test.done()
  },

  /**
   *
   Using getBaseURI check if the baseURI attribute of a new Document node is null
   and if affected by changes in Document.documentURI.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Document
   */
  nodegetbaseuri02: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var baseURI;
    var rootNS;
    var rootName;
    var docElem;
    var nullDocType = null;


    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    baseURI = newDoc.baseURI;

    test.equal(baseURI, null, 'baseURIIsNull');
    newDoc.documentURI = "http://www.example.com/sample.xml";

    baseURI = newDoc.baseURI;

    test.equal(baseURI.toLowerCase(), "http://www.example.com/sample.xml".toLowerCase(), 'baseURISameAsDocURI');

    test.done()
  },

  /**
   *
   Check that Node.baseURI is null for a DocumentType as defined in the Infoset Mapping (Appendix C).

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2DocumentType
   */
  nodegetbaseuri03: function (test) {
    var success;
    var doc;
    var docType;
    var baseURI;

    doc = barfoo.barfoo();
    docType = doc.doctype;

    baseURI = docType.baseURI;

    test.equal(baseURI, null, 'nodegetbaseuri03');

    test.done()
  },

  /**
   *
   Node.baseURI for a document element without an xml:base attribute should be same as Document.documentURI.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Document
   */
  nodegetbaseuri04: function (test) {
    var success;
    var doc;
    var docElem;
    var baseURI;
    var documentURI;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    baseURI = docElem.baseURI;

    test.equal(baseURI, 'barfoo', 'baseURI');
    documentURI = doc.documentURI;

    test.equal(baseURI, documentURI, 'baseURIEqualsDocURI');

    test.done()
  },

  /**
   *
   Using getBaseURI check if the baseURI attribute of this DocumentElement is http://www.w3.org/DOM/L3Test.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Element
   */
  nodegetbaseuri05: function (test) {
    var success;
    var doc;
    var docElem;
    var baseURI;

    doc = barfoo_base.barfoo_base();
    docElem = doc.documentElement;

    baseURI = docElem.baseURI;

    test.equal(baseURI, "http://www.w3.org/DOM/L3Test", 'nodegetbaseuri05');

    test.done()
  },

  /**
   *
   TODO Clarification: Create a new Element in this document.  Since its baseURI should be the baseURI of
   the Document Entity which I assume is not null, using getBaseURI check if the baseURI
   attribute of this Element node is not null.???

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Element
   */
  nodegetbaseuri06: function (test) {
    var success;
    var doc;
    var newElement;
    var baseURI;

    doc = barfoo.barfoo();
    newElement = doc.createElementNS("http://www.w3.org/1999/xhtml","br");
    baseURI = doc.baseURI;

    test.notEqual(baseURI, null, 'nodegetbaseuri06');

    test.done()
  },

  /**
   *
   Append a created element to a document and check that its baseURI
   is inherited from its parent.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Element
   */
  nodegetbaseuri07: function (test) {
    var success;
    var doc;
    var newElement;
    var baseURI;
    var appended;
    var bodyList;
    var bodyElem;
    var htmlNS = "http://www.w3.org/1999/xhtml";

    doc = barfoo_base.barfoo_base();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    newElement = doc.createElementNS(htmlNS,"meta");
    newElement.setAttribute("content","text/xml");
    appended = bodyElem.appendChild(newElement);
    baseURI = newElement.baseURI;

    test.equal(baseURI, "http://www.w3.org/DOM/EmployeeID", 'nodegetbaseuri07');

    test.done()
  },

  /**
   *
   Get the baseURI value on an element with an explicit xml:base attribute.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Element
   */
  nodegetbaseuri09: function (test) {
    var success;
    var doc;
    var bodyElem;
    var bodyList;
    var baseURI;

    doc = barfoo_base.barfoo_base();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    baseURI = bodyElem.baseURI;

    test.equal(baseURI, "http://www.w3.org/DOM/EmployeeID", 'nodegetbaseuri09');

    test.done()
  },

  /**
   *
   Append as a child of this documentElement a new Processing Instruction.  Using getBaseURI
   check if the baseURI attribute of the new Processing Instruction node is "'http://www.w3.org/DOM/L3Test".

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2ProcessingInstruction
   */
  nodegetbaseuri10: function (test) {
    var success;
    var doc;
    var docElem;
    var newPI;
    var baseURI;
    var appendedChild;

    doc = barfoo_base.barfoo_base();
    docElem = doc.documentElement;

    newPI = doc.createProcessingInstruction("TARGET","DATA");
    appendedChild = docElem.appendChild(newPI);
    baseURI = newPI.baseURI;

    test.equal(baseURI, "http://www.w3.org/DOM/L3Test", 'nodegetbaseuri10');

    test.done()
  },

  /**
   *
   Import a new Processing Instruction of a new Document after the document element.  Using getBaseURI
   check if the baseURI attribute of the new Processing Instruction node is the same as Document.documentURI.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2ProcessingInstruction
   */
  nodegetbaseuri11: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var newPI;
    var imported;
    var baseURI;
    var docURI;
    var appendedChild;
    var nullDocType = null;


    doc = barfoo_base.barfoo_base();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDocType);
    newPI = newDoc.createProcessingInstruction("TARGET","DATA");
    imported = doc.importNode(newPI,true);
    appendedChild = doc.appendChild(imported);
    baseURI = imported.baseURI;

    test.equal(baseURI, 'barfoo_base', 'equalsBarfooBase')
    docURI = doc.documentURI;

    test.equal(baseURI, docURI, 'equalsDocURI');

    test.done()
  },

  /**
   *
   Using getBaseURI verify if the entity epsilon is absolute
   and matches the URL of the document entity.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Entity
   */
  nodegetbaseuri12: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var baseURI;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("epsilon");
    baseURI = entity.baseURI;
    test.equal(baseURI, 'hc_staff', 'entityBase');
    test.done()
  },

  /**
   *
   Using getBaseURI verify if the notation defined in an internal subset
   is the base URI of the document.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Notation
   */
  nodegetbaseuri13: function (test) {
    var success;
    var doc;
    var docType;
    var notationsMap;
    var notation;
    var baseURI;
    var docURI;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    notationsMap = docType.notations;

    notation = notationsMap.getNamedItem("notation1");
    baseURI = notation.baseURI;

    docURI = doc.documentURI;

    test.equal(baseURI, docURI, 'sameAsDocURI');
    test.equal(baseURI, 'hc_staff', 'entityBase');

    test.done()
  },

  /**
   *
   Using getBaseURI verify if the imported notation notation2 is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Notation
   */
  nodegetbaseuri14: function (test) {
    var success;
    var doc;
    var newDoc;
    var docElem;
    var docElemNS;
    var docElemName;
    var domImpl;
    var docType;
    var notationsMap;
    var notation;
    var notationImported;
    var baseURI;
    var nullDocType = null;


    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    docElemNS = docElem.namespaceURI;

    docElemName = docElem.localName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(docElemNS,docElemName,nullDocType);
    docType = doc.doctype;

    notationsMap = docType.notations;

    notation = notationsMap.getNamedItem("notation2");
    notationImported = newDoc.importNode(notation,true);
    baseURI = notationImported.baseURI;

    test.equal(baseURI, null, 'nodegetbaseuri14');

    test.done()
  },

  /**
   *
   Node.getBaseURI for an Attr is null.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Attr
   */
  nodegetbaseuri15: function (test) {
    var success;
    var doc;
    var baseURI;
    var attrNode;
    var bodyList;
    var bodyElem;

    doc = barfoo_base.barfoo_base();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    attrNode = bodyElem.getAttributeNode("id");
    baseURI = attrNode.baseURI;

    test.equal(baseURI, null, 'baseURI');

    test.done()
  },

  /**
   *
   Node.getBaseURI for an EntityReference to should be the baseURI where the entity declaration occurs.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2EntityReference
   */
  nodegetbaseuri16: function (test) {
    var success;
    var doc;
    var baseURI;
    var entRef;
    var pList;
    var pElem;

    doc = external_barfoo.external_barfoo();
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    entRef = pElem.lastChild;

    baseURI = entRef.baseURI;
    test.equal(baseURI, 'external_barfoo', 'baseURI')
    test.done()
  },

  /**
   *
   Node.getBaseURI for an text node is null.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Text
   */
  nodegetbaseuri17: function (test) {
    var success;
    var doc;
    var baseURI;
    var textNode;
    var pList;
    var pElem;

    doc = barfoo_base.barfoo_base();
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    textNode = pElem.firstChild;

    baseURI = textNode.baseURI;

    test.equal(baseURI, null, 'baseURI');

    test.done()
  },

  /**
   *
   Node.getBaseURI for an comment node is null.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2Comment
   */
  nodegetbaseuri18: function (test) {
    var success;
    var doc;
    var baseURI;
    var comment;
    var pList;
    var pElem;

    doc = barfoo_base.barfoo_base();
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    comment = pElem.nextSibling;

    baseURI = comment.baseURI;

    test.equal(baseURI, null, 'baseURI');

    test.done()
  },

  /**
   *
   Checks baseURI for a text node is null.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2DocumentType
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2EntityReference
   */
  nodegetbaseuri19: function (test) {
    var success;
    var doc;
    var baseURI;
    var entBaseURI;
    var entRef;
    var pList;
    var pElem;
    var textNode;

    doc = external_barfoo.external_barfoo();
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    test.notEqual(pElem, null, 'pElemNotNull');

    if(
      (getImplementationAttribute("expandEntityReferences") == true)
    ) {
      textNode = pElem.firstChild;

      test.notEqual(textNode, null, 'expansionNotNull');

    }

    else {
      entRef = pElem.lastChild;

      test.notEqual(entRef, null, 'entRefNotNull');
      textNode = entRef.firstChild;

      test.notEqual(textNode, null, 'entRefTextNotNull');

    }
    baseURI = textNode.baseURI;

    test.equal(baseURI, null, 'baseURI');

    test.done()
  },

  /**
   *
   baseURI for an element from an entity reference should be the URI of the
   external entity if there is now xml:base attribute.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-baseURI
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=419
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/infoset-mapping#Infoset2EntityReference
   */
  nodegetbaseuri20: function (test) {
    var success;
    var doc;
    var baseURI;
    var pList;
    var pElem;

    doc = external_barfoo.external_barfoo();
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(2);
    test.notEqual(pElem, null, 'pElemNotNull');
    baseURI = pElem.baseURI;
    test.equal(baseURI, 'external_widget', 'equalsExternalBarFoo')
    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on Document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature01: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node =  doc;
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = doc.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = doc.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = doc.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = doc.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = doc.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = doc.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = doc.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = doc.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = doc.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on DocumentFragment.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature02: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.createDocumentFragment();
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on DocumentType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature03: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.doctype;

    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on EntityReference.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature04: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.createEntityReference("ent1");
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on Element.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature05: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.documentElement;

    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on non-namespace attribute.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature06: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.createAttribute("title");
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on namespaced attribute.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature07: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on ProcessingInstruction.

   * @author Curt Arnold
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature08: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.createProcessingInstruction("test-pi","foo");
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on Comment.

   * @author Curt Arnold
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature09: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.createComment("test comment");
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on Text.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature10: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;
    var nodeList;
    var elem;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    nodeList = doc.getElementsByTagName("p");
    elem = nodeList.item(0);
    node = elem.firstChild;

    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on CDATASection.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature11: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    node = doc.createCDATASection("some text");
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on Entity.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature12: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;
    var entities;
    var doctype;

    doc = barfoo.barfoo();
    domImpl = doc.implementation;
    doctype = doc.doctype;

    entities = doctype.entities;

    node = entities.getNamedItem("ent1");
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *
   Check implementation of Node.getFeature on Notation.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getFeature
   */
  nodegetfeature13: function (test) {
    var success;
    var doc;
    var node;
    var nullVersion = null;

    var featureImpl;
    var isSupported;
    var domImpl;
    var notations;
    var doctype;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    doctype = doc.doctype;

    notations = doctype.notations;

    node = notations.getNamedItem("notation1");
    featureImpl = node.getFeature("Core",nullVersion);
    test.equal(featureImpl, node, 'coreUnspecifiedVersion');
    featureImpl = node.getFeature("cOrE",nullVersion);
    test.equal(featureImpl, node, 'cOrEUnspecifiedVersion');
    featureImpl = node.getFeature("+cOrE",nullVersion);
    test.equal(featureImpl, node, 'PlusCoreUnspecifiedVersion');
    featureImpl = node.getFeature("org.w3c.domts.bogus.feature",nullVersion);
    test.equal(featureImpl, null, 'unrecognizedFeature');
    featureImpl = node.getFeature("cOrE","2.0");
    test.equal(featureImpl, node, 'Core20');
    featureImpl = node.getFeature("cOrE","3.0");
    test.equal(featureImpl, node, 'Core30');
    isSupported = node.isSupported("XML",nullVersion);
    featureImpl = node.getFeature("XML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XMLUnspecified');

    }
    isSupported = node.isSupported("SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'SVGUnspecified');

    }
    isSupported = node.isSupported("HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'HTMLUnspecified');

    }
    isSupported = node.isSupported("Events",nullVersion);
    featureImpl = node.getFeature("Events",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'EventsUnspecified');

    }
    isSupported = node.isSupported("LS",nullVersion);
    featureImpl = node.getFeature("LS",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSUnspecified');

    }
    isSupported = node.isSupported("LS-Async",nullVersion);
    featureImpl = node.getFeature("LS-Async",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'LSAsyncUnspecified');

    }
    isSupported = node.isSupported("XPath",nullVersion);
    featureImpl = node.getFeature("XPath",nullVersion);

    if(
      isSupported
    ) {
      test.equal(featureImpl, node, 'XPathUnspecified');

    }
    isSupported = node.isSupported("+HTML",nullVersion);
    featureImpl = node.getFeature("HTML",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusHTMLUnspecified');

    }
    isSupported = node.isSupported("+SVG",nullVersion);
    featureImpl = node.getFeature("SVG",nullVersion);

    if(
      isSupported
    ) {
      test.notEqual(featureImpl, null, 'PlusSVGUnspecified');

    }

    test.done()
  },

  /**
   *


   Using getTextContent on this Document node check if the value returned is Null .

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent01: function (test) {
    var success;
    var doc;
    var textContent;

    doc = hc_staff.hc_staff();
    textContent = doc.textContent;

    test.equal(textContent, null, 'nodegettextcontent01');

    test.done()
  },

  /**
   *


   Using getTextContent on a new Document node check if the value returned is Null .

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent02: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var textContent;
    var nullDocType = null;

    var docElem;
    var rootName;
    var rootNS;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    textContent = newDoc.textContent;

    test.equal(textContent, null, 'nodegettextcontent02');

    test.done()
  },

  /**
   *


   Using getTextContent on this DocumentType node check if the value returned is Null .

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent03: function (test) {
    var success;
    var doc;
    var docType;
    var newDoc;
    var textContent;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    textContent = docType.textContent;

    test.equal(textContent, null, 'nodegettextcontent03');

    test.done()
  },

  /**
   *


   Using getTextContent on a new DocumentType node check if the value returned is Null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent04: function (test) {
    var success;
    var doc;
    var domImpl;
    var docType;
    var textContent;
    var nullPubId = null;

    var nullSysId = null;

    var oldDocType;
    var rootName;

    doc = hc_staff.hc_staff();
    oldDocType = doc.doctype;

    rootName = oldDocType.name;

    domImpl = doc.implementation;
    docType = domImpl.createDocumentType(rootName,nullPubId,nullSysId);
    textContent = docType.textContent;

    test.equal(textContent, null, 'nodegettextcontent04');

    test.done()
  },

  /**
   *


   Using getTextContent on this DocumentType node check if the value returned is Null .

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent05: function (test) {
    var success;
    var doc;
    var docType;
    var notationsMap;
    var notation1;
    var textContent;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    notationsMap = docType.notations;

    notation1 = notationsMap.getNamedItem("notation1");
    textContent = docType.textContent;

    test.equal(textContent, null, 'nodegettextcontent05');

    test.done()
  },

  /**
   *


   Invoke the method getTextContent on a default Attr node and check if the value returned
   is the attributes Value.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent06: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var attr;
    var textContent;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    attr = elem.getAttributeNode("dir");
    textContent = attr.textContent;

    test.equal(textContent, "rtl", 'nodegettextcontent06');

    test.done()
  },

  /**
   *
   Invoke the method getTextContent on a new Attr node and check if the value returned
   is the attributes Value.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent07: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var attr;
    var textContent;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    elem.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang","en-US");
    attr = elem.getAttributeNodeNS("http://www.w3.org/XML/1998/namespace","lang");
    textContent = attr.textContent;

    test.equal(textContent, "en-US", 'nodegettextcontent07');

    test.done()
  },

  /**
   *
   Invoke the method getTextContent on a new Attr node and check if the value returned
   is the attributes Value.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent08: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var att;
    var attr;
    var replacedAttr;
    var textContent;

    doc = barfoo.barfoo();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    att = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    replacedAttr = elem.setAttributeNodeNS(att);
    attr = elem.getAttributeNodeNS("http://www.w3.org/XML/1998/namespace","lang");
    textContent = attr.textContent;

    test.equal(textContent, "", 'nodegettextcontent08');

    test.done()
  },

  /**
   *
   Invoke the method getTextContent on a new Text node and check if the value returned
   is the text content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent09: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var txt;
    var textContent;
    var appendedChild;

    doc = barfoo.barfoo();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    txt = doc.createTextNode("Replacement Text");
    appendedChild = elem.appendChild(txt);
    textContent = txt.textContent;

    test.equal(textContent, "Replacement Text", 'nodegettextcontent09');

    test.done()
  },

  /**
   *


   Invoke the method getTextContent on an existing Text node and check if the value returned
   is the elements Text content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent10: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var txt;
    var textContent;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    txt = elem.firstChild;

    textContent = txt.textContent;

    test.equal(textContent, "EMP0001", 'nodegettextcontent10');

    test.done()
  },

  /**
   *


   Invoke the method getTextContent on an existing CDATASection node and check if the value returned
   is the CDATASections content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent11: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var cdata;
    var textContent;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(1);
    cdata = elem.lastChild;

    textContent = cdata.textContent;

    test.equal(textContent, "This is an adjacent CDATASection with a reference to a tab &tab;", 'nodegettextcontent11');

    test.done()
  },

  /**
   *
   Invoke the method getTextContent on a new Comment node and check if the value returned
   is the Comments data.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent12: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var comment;
    var textContent;
    var appendedChild;

    doc = barfoo.barfoo();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","body");
    comment = doc.createComment("Comment");
    appendedChild = elem.appendChild(comment);
    textContent = comment.textContent;

    test.equal(textContent, "Comment", 'nodegettextcontent12');

    test.done()
  },

  /**
   *


   Invoke the method getTextContent on an existing Element node with Text and CDATA
   content and check if the value returned is a single concatenated String with its content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent13: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var textContent;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(1);
    textContent = elem.textContent;

    test.equal(textContent, "Martha Raynolds\nThis is a CDATASection with EntityReference number 2 &ent2;\nThis is an adjacent CDATASection with a reference to a tab &tab;", 'nodegettextcontent13');

    test.done()
  },

  /**
   *
   Invoke the method getTextContent on an existing Element node with Child Element, Text
   EntityReferences and Attributes and check if the value returned is a single
   concatenated String with its content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent14: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var textContent;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(2);
    textContent = elem.textContent;

    test.equal(textContent, "\n  EMP0003\n  Roger\n Jones\n  Department Manager\n  100,000\n  Element data\n  PO Box 27 Irving, texas 98553\n ", 'nodegettextcontent13');

    test.done()
  },

  /**
   *
   The method getTextContent returns the text content of this node and its descendants.

   Invoke the method getTextContent on a new Element node with new Text, EntityReferences
   CDATASection, PI and Comment nodes and check if the value returned is a single
   concatenated String with its content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent15: function (test) {
    var success;
    var doc;
    var elem;
    var txt;
    var comment;
    var entRef;
    var cdata;
    var pi;
    var textContent;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/DOM/Test","dom3:elem");
    txt = doc.createTextNode("Text ");
    comment = doc.createComment("Comment ");
    entRef = doc.createEntityReference("beta");
    pi = doc.createProcessingInstruction("PIT","PIData ");
    cdata = doc.createCDATASection("CData");
    appendedChild = elem.appendChild(txt);
    appendedChild = elem.appendChild(comment);
    appendedChild = elem.appendChild(entRef);
    appendedChild = elem.appendChild(pi);
    appendedChild = elem.appendChild(cdata);
    textContent = elem.textContent;

    doc.normalizeDocument();
    test.equal(textContent, "Text βCData", 'nodegettextcontent15');

    test.done()
  },

  /**
   *
   The method getTextContent returns the text content of this node and its descendants.

   Invoke the method getTextContent on a new DocumentFragment node with new Text, EntityReferences
   CDATASection, PI and Comment nodes and check if the value returned is a single
   concatenated String with its content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent16: function (test) {
    var success;
    var doc;
    var docFrag;
    var elem;
    var elemChild;
    var txt;
    var comment;
    var entRef;
    var cdata;
    var pi;
    var textContent;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    elem = doc.createElementNS("http://www.w3.org/DOM/Test","dom3:elem");
    txt = doc.createTextNode("Text ");
    comment = doc.createComment("Comment ");
    entRef = doc.createEntityReference("beta");
    pi = doc.createProcessingInstruction("PIT","PIData ");
    cdata = doc.createCDATASection("CData");
    appendedChild = elem.appendChild(txt);
    appendedChild = elem.appendChild(comment);
    appendedChild = elem.appendChild(entRef);
    appendedChild = elem.appendChild(pi);
    appendedChild = elem.appendChild(cdata);
    appendedChild = docFrag.appendChild(elem);
    doc.normalizeDocument();
    textContent = docFrag.textContent;

    test.equal(textContent, "Text βCData", 'nodegettextcontent16');

    test.done()
  },

  /**
   *
   Invoke the method getTextContent on a new EntityReference node and check if the
   value returned is the EntityReference's content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent17: function (test) {
    var success;
    var doc;
    var elem;
    var entRef;
    var textContent;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elem = doc.documentElement;

    entRef = doc.createEntityReference("beta");
    appendedChild = elem.appendChild(entRef);
    textContent = entRef.textContent;

    test.equal(textContent, "β", 'nodegettextcontent17');

    test.done()
  },

  /**
   *
   Invoke the method getTextContent on an Entity node and check if the value returned
   is its replacement text.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodegettextcontent18: function (test) {
    var success;
    var doc;
    var docType;
    var entity;
    var entitymap;
    var textContent;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitymap = docType.entities;

    entity = entitymap.getNamedItem("delta");
    textContent = entity.textContent;

    test.equal(textContent, "δ", 'nodegettextcontent18');

    test.done()
  },

  /**
   *
   Checks that element content whitespace is not added to textContent.  Determination
   of element content whitespace is only assured if validating.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=538
   */
  nodegettextcontent19: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var textContent;

    doc = barfoo.barfoo();
    elemList = doc.getElementsByTagName("body");
    elem = elemList.item(0);
    textContent = elem.textContent;

    test.equal(textContent, "bar", 'textContent');

    test.done()
  },

  /**
   *


   Using getUserData with a junk value for the key attempt to retreive the UserData object
   of this Document node without setting it and verify if null is returned.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getUserData
   */
  nodegetuserdata01: function (test) {
    var doc = hc_staff.hc_staff();
    test.equal(doc.getUserData('key1'), null, 'nodegetuserdata01');
    test.done()
  },

  /**
   *


   Invoke setUserData on this Document to set this Documents UserData to a new
   Element node and using getUserData and isEqualNode check if the returned
   UserData object is the same as the object that was set.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getUserData
   */
  nodegetuserdata03: function (test) {
    // var doc = barfoo.barfoo(); // NOTE: commented out only until barfoo is working
    var doc = hc_staff.hc_staff();
    var elem = doc.createElementNS("http://www.w3.org/1999/xhtml","body");
    doc.setUserData("something", elem, null);
    retUserData = doc.getUserData("something");
    test.ok(retUserData.isEqualNode(elem), 'nodegetuserdata03');
    test.done()
  },

  /**
   *


   Invoke setUserData on this DocumentType to set this its UserData to a this
   Document node and using getUserData and isEqualNode check if the returned
   UserData object is the same as the object that was set.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getUserData
   */
  nodegetuserdata04: function (test) {
    var doc = hc_staff.hc_staff();
    var docType = doc.doctype;
    docType.setUserData('KeyDoc', doc, null);
    var retUserData = docType.getUserData('KeyDoc');
    test.ok(retUserData.isEqualNode(doc), 'nodegetuserdata04');
    test.done()
  },

  /**
   *
   Invoke setUserData on this Entity node to set this its UserData to a new
   Attr node and using getUserData with an invalid Key check if the returned
   UserData object is Null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getUserData
   */
  nodegetuserdata05: function (test) {
    var doc = hc_staff.hc_staff();
    var entity = doc.doctype.entities.getNamedItem('delta');
    var attr = doc.createAttributeNS('http://www.w3.org/XML/1998/namespace', 'lang');
    entity.setUserData('key', attr, null);
    test.equal(entity.getUserData('Key'), null, 'nodegetuserdata05');
    test.done()
  },

  /**
   *


   Invoke getUserData on a new Text node with an ampty Key check if the returned
   UserData object is Null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getUserData
   */
  nodegetuserdata06: function (test) {
    var doc = hc_staff.hc_staff();
    var txt = doc.createTextNode('TEXT');
    test.equal(txt.getUserData(''), null, 'nodegetuserdata06');
    test.done()
  },

  /**
   *


   Invoke setUserData on a new PI node to set this its UserData to itself
   and using getUserData with an valid Key and isEqualsNode check if the
   returned UserData object is the same as that was set.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-getUserData
   */
  nodegetuserdata07: function (test) {
    var doc = hc_staff.hc_staff();
    var pi = doc.createProcessingInstruction('PITARGET', 'PIDATA');
    pi.setUserData('key', pi, null);
    var retUserData = pi.getUserData('key');
    test.ok(retUserData.isEqualNode(pi), 'nodegetuserdata07');
    test.done()
  },

  /**
   *



   Using insertBefore on this Document node attempt to insert a new Comment node before
   this DocumentElement node and verify the name of the inserted Comment node.  Now
   attempt to insert a new Processing Instruction node before the new Comment and
   verify the target of the inserted ProcessingInstruction.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore01: function (test) {
    var success;
    var doc;
    var docElem;
    var newComment;
    var insertedComment;
    var data;
    var newPI;
    var insertedPI;
    var target;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    newComment = doc.createComment("Comment");
    newPI = doc.createProcessingInstruction("PITarget","PIData");
    insertedComment = doc.insertBefore(newComment,docElem);
    data = insertedComment.data;

    test.equal(data, "Comment", 'nodeinsertbefore01_1');
    insertedPI = doc.insertBefore(newPI,newComment);
    target = insertedPI.target;

    test.equal(target, "PITarget", 'nodeinsertbefore01_2');

    test.done()
  },

  /**
   *
   Using insertBefore on a new Document node attempt to insert a new Comment node before
   this DocumentType node and verify the name of the inserted Comment node.  Now
   attempt to insert a new Processing Instruction node before the new Comment and
   verify the target of the inserted ProcessingInstruction.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore02: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var newDocType;
    var newComment;
    var insertedComment;
    var data;
    var newPI;
    var insertedPI;
    var target;
    var nullPubId = null;

    var nullSysId = null;

    var rootNS;
    var rootName;
    var docElem;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDocType = domImpl.createDocumentType(rootName,nullPubId,nullSysId);
    newDoc = domImpl.createDocument(rootNS,rootName,newDocType);
    newComment = newDoc.createComment("Comment");
    newPI = newDoc.createProcessingInstruction("PITarget","PIData");
    insertedComment = newDoc.insertBefore(newComment,newDocType);
    data = insertedComment.data;

    test.equal(data, "Comment", 'nodeinsertbefore02_1');
    insertedPI = newDoc.insertBefore(newPI,newComment);
    target = insertedPI.target;

    test.equal(target, "PITarget", 'nodeinsertbefore02_2');

    test.done()
  },

  /**
   *
   Using insertBefore on this Document node attempt to insert a new Attr node before
   this DocumentType node and verify if a HIERARCHY_REQUEST_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore03: function (test) {
    var success;
    var doc;
    var docType;
    var newAttr;
    var inserted;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    newAttr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");

    {
      success = false;
      try {
        inserted = doc.insertBefore(newAttr,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }

    test.done()
  },

  /**
   *
   Using insertBefore on this Document node attempt to insert this Document node before
   this DocumentType node and verify if a HIERARCHY_REQUEST_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore04: function (test) {
    var success;
    var doc;
    var docType;
    var inserted;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;


    {
      success = false;
      try {
        inserted = doc.insertBefore(doc,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }

    test.done()
  },

  /**
   *
   Attempt to insert a second DocumentType node in a document using Node.insertBefore,
   should raise either DOMException with either a HIERARCHY_REQUEST_ERR
   or NOT_SUPPORTED_ERR code.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore05: function (test) {
    var success;
    var doc;
    var docType;
    var domImpl;
    var newDocType;
    var inserted;
    var nullPubId = null;

    var nullSysId = null;

    var rootName;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    rootName = docType.name;

    domImpl = doc.implementation;
    newDocType = domImpl.createDocumentType(rootName,nullPubId,nullSysId);

    try {
      inserted = doc.insertBefore(newDocType,docType);
      test.ok(false, 'throw_DOMException');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        case /* NOT_SUPPORTED_ERR */ 9 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   Using insertBefore on this Document node attempt to insert an Element node before
   the existing element node and verify if a HIERARCHY_REQUEST_ERR or NOT_SUPPORTED_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=415
   */
  nodeinsertbefore06: function (test) {
    var success;
    var doc;
    var docElem;
    var newElem;
    var inserted;
    var rootNS;
    var rootTagname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;

    newElem = doc.createElementNS(rootNS,rootTagname);

    try {
      inserted = doc.insertBefore(newElem,docElem);
      test.ok(false, 'throw_DOMException');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        case /* NOT_SUPPORTED_ERR */ 9 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *



   Using insertBefore on this Document node attempt to insert a Comment node created by
   another Document before this DocumentElement node and verify if a WRONG_DOCUMENT_ERR
   is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore07: function (test) {
    var success;
    var doc;
    var docAlt;
    var docElem;
    var newComment;
    var inserted;

    doc = hc_staff.hc_staff();

    docAlt = hc_staff.hc_staff();
    docElem = doc.documentElement;

    newComment = docAlt.createComment("Comment");

    {
      success = false;
      try {
        inserted = doc.insertBefore(newComment,docElem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'WRONG_DOCUMENT_ERR_nodeinsertbefore07');
    }

    test.done()
  },

  /**
   *



   Using insertBefore on this Document node attempt to insert a Comment node created by
   this Document before another Document's DocumentElement node and verify if a
   NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore08: function (test) {
    var success;
    var doc;
    var docAlt;
    var docElem;
    var newComment;
    var inserted;

    doc = hc_staff.hc_staff();

    docAlt = hc_staff.hc_staff();
    docElem = docAlt.documentElement;

    newComment = doc.createComment("Comment");

    {
      success = false;
      try {
        inserted = doc.insertBefore(newComment,docElem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'NOT_FOUND_ERR_nodeinsertbefore08');
    }

    test.done()
  },

  /**
   *
   The method insertBefore inserts the node newChild before the existing child node refChild.
   If refChild is null, insert newChild at the end of the list of children.
   If newChild is a DocumentFragment object, all of its children are inserted, in the same
   order, before refChild.

   Using insertBefore on this Document node attempt to insert a new DocumentFragment node
   before a Comment node and verify the contents of the Comment node that is a child
   of the DocumentFragment.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore09: function (test) {
    var success;
    var doc;
    var docFrag;
    var newComment;
    var insertComment;
    var comment;
    var inserted;
    var data;
    var appendedChild;

    doc = hc_staff.hc_staff();
    newComment = doc.createComment("Comment");
    appendedChild = doc.appendChild(newComment);
    docFrag = doc.createDocumentFragment();
    insertComment = doc.createComment("insertComment");
    appendedChild = docFrag.appendChild(insertComment);
    inserted = doc.insertBefore(docFrag,newComment);
    comment = newComment.previousSibling;

    data = comment.data;

    test.equal(data, "insertComment", 'nodeinsertbefore09');

    test.done()
  },

  /**
   *
   Using insertBefore on this Document node attempt to insert a new Element node before
   another Element node and verify a DOMException with a
   HIERARCHY_REQUEST_ERR, NOT_FOUND_ERR or NOT_SUPPORTED_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=415
   */
  nodeinsertbefore10: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var newElem;
    var inserted;
    var docElem;
    var rootNS;
    var rootTagname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;

    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(1);
    newElem = doc.createElementNS(rootNS,rootTagname);

    try {
      inserted = doc.insertBefore(newElem,elem);
      test.ok(false, 'throw_DOMException');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        case /* NOT_FOUND_ERR */ 8 :
          break;
        case /* NOT_SUPPORTED_ERR */ 9 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *



   Using insertBefore on a DocumentFragment node attempt to insert a child nodes before
   other permissible nodes and verify the contents/name of each inserted node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore11: function (test) {
    var success;
    var doc;
    var docFrag;
    var elem;
    var pi;
    var comment;
    var txt;
    var cdata;
    var eRef;
    var inserted;
    var insertedVal;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","body");
    pi = doc.createProcessingInstruction("PITarget","PIData");
    comment = doc.createComment("Comment");
    txt = doc.createTextNode("Text");
    cdata = doc.createCDATASection("CDATA");
    eRef = doc.createEntityReference("alpha");
    appendedChild = docFrag.appendChild(elem);
    appendedChild = docFrag.appendChild(pi);
    appendedChild = docFrag.appendChild(comment);
    appendedChild = docFrag.appendChild(txt);
    appendedChild = docFrag.appendChild(cdata);
    appendedChild = docFrag.appendChild(eRef);
    inserted = docFrag.insertBefore(comment,pi);
    insertedVal = inserted.data;

    test.equal(insertedVal, "Comment", 'nodeinsertbefore11_Comment');
    inserted = docFrag.insertBefore(txt,comment);
    insertedVal = inserted.data;

    test.equal(insertedVal, "Text", 'nodeinsertbefore11_Text');
    inserted = docFrag.insertBefore(cdata,txt);
    insertedVal = inserted.data;

    test.equal(insertedVal, "CDATA", 'nodeinsertbefore11_CDATA');
    inserted = docFrag.insertBefore(eRef,cdata);
    insertedVal = inserted.nodeName;

    test.equal(insertedVal, "alpha", 'nodeinsertbefore11_Ent1');

    test.done()
  },

  /**
   *
   The method insertBefore inserts the node newChild before the existing child node refChild.
   If refChild is null, insert newChild at the end of the list of children.

   Using insertBefore on a DocumentFragment node attempt to insert a new DocumentFragment node
   before this DocumentFragment's Element node and verify the last child is still the only child
   appended to docFrag.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore12: function (test) {
    var success;
    var doc;
    var docFrag;
    var docFragNew;
    var elem;
    var inserted;
    var appendedChild;
    var last;
    var name;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    docFragNew = doc.createDocumentFragment();
    elem = doc.createElementNS("http://www.w3.org/DOM/Test","dom3:elem");
    appendedChild = docFrag.appendChild(elem);
    inserted = docFrag.insertBefore(docFragNew,elem);
    last = docFrag.lastChild;

    name = last.nodeName;

    test.equal(name, "dom3:elem", 'nodeinsertbefore12');

    test.done()
  },

  /**
   *



   Using insertBefore on a DocumentFragment node attempt to insert a new Element node
   created by another Document, before this DocumentFragment's Element node and
   verify if a WRONG_DOCUMENT_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore13: function (test) {
    var success;
    var doc;
    var docAlt;
    var docFrag;
    var elemAlt;
    var elem;
    var appendedChild;
    var inserted;
    var docElem;
    var rootNS;
    var rootTagname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootTagname = docElem.tagName;


    docAlt = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    elem = doc.createElementNS(rootNS,rootTagname);
    elemAlt = docAlt.createElementNS(rootNS,rootTagname);
    appendedChild = docFrag.appendChild(elem);

    {
      success = false;
      try {
        inserted = docFrag.insertBefore(elemAlt,elem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    }

    test.done()
  },

  /**
   *
   The method insertBefore inserts the node newChild before the existing child node refChild.
   If refChild is null, insert newChild at the end of the list of children.
   A NO_MODIFICATION_ALLOWED_ERR is raised if the node is read-only.

   Using insertBefore on this Document node attempt to insert a new Attr node before
   this DocumentType node and verfiy if a NO_MODIFICATION_ALLOWED_ERR is raised.
   (This can also raise a HIERARCHY_REQUEST_ERR and NOT_FOUND_ERR)

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore14: function (test) {
    var success;
    var doc;
    var docType;
    var newAttr;
    var inserted;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    newAttr = doc.createAttributeNS("http://www.w3.org/DOM/Test","dom3:attr");

    {
      success = false;
      try {
        inserted = docType.insertBefore(newAttr,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'NO_MODIFICATION_ALLOWED_ERR_nodeinsertbefore14');
    }

    test.done()
  },

  /**
   *
   A NO_MODIFICATION_ALLOWED_ERR is raised if the node is read-only.

   Using insertBefore on a new EntityReference node attempt to insert Element, Text,
   Comment, ProcessingInstruction and CDATASection nodes before an element child
   and verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore15: function (test) {
    var success;
    var doc;
    var entRef;
    var elemChild;
    var txt;
    var elem;
    var comment;
    var pi;
    var cdata;
    var inserted;

    doc = hc_staff.hc_staff();
    entRef = doc.createEntityReference("delta");
    elemChild = entRef.firstChild;

    cdata = doc.createCDATASection("CDATASection");

    {
      success = false;
      try {
        inserted = entRef.insertBefore(cdata,elemChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_1');
    }
    pi = doc.createProcessingInstruction("target","data");

    {
      success = false;
      try {
        inserted = entRef.insertBefore(pi,elemChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_2');
    }
    comment = doc.createComment("Comment");

    {
      success = false;
      try {
        inserted = entRef.insertBefore(comment,elemChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_3');
    }
    txt = doc.createTextNode("Text");

    {
      success = false;
      try {
        inserted = entRef.insertBefore(txt,elemChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_4');
    }
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","body");

    {
      success = false;
      try {
        inserted = entRef.insertBefore(elem,elemChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_5');
    }

    test.done()
  },

  /**
   *
   Using insertBefore on an Element node attempt to insert a new Element, node before its
   first element child and verify the name of the new first child node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore16: function (test) {
    var success;
    var doc;
    var element;
    var newElem;
    var refElem;
    var firstChild;
    var insertedElem;
    var childList;
    var nodeName;
    var inserted;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("p");
    element = childList.item(0);
    firstChild = element.firstChild;

    refElem = firstChild.nextSibling;

    newElem = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:br");
    inserted = element.insertBefore(newElem,refElem);
    childList = doc.getElementsByTagName("p");
    element = childList.item(0);
    firstChild = element.firstChild;

    insertedElem = firstChild.nextSibling;

    nodeName = insertedElem.nodeName;

    test.equal(nodeName, "xhtml:br", 'nodeinsertbefore16');

    test.done()
  },

  /**
   *
   The method insertBefore inserts the node newChild before the existing child node refChild.
   If refChild is null, insert newChild at the end of the list of children.

   Using insertBefore on an Element node attempt to insert a text node before its
   first element child and verify the name of the new first child node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore17: function (test) {
    var success;
    var doc;
    var element;
    var newText;
    var refNode;
    var firstChild;
    var insertedText;
    var childList;
    var nodeName;
    var inserted;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagNameNS("*","p");
    element = childList.item(1);
    refNode = element.firstChild;

    newText = doc.createTextNode("newText");
    inserted = element.insertBefore(newText,refNode);
    insertedText = element.firstChild;

    nodeName = insertedText.nodeName;

    test.equal(nodeName, "#text", 'nodeinsertbefore17');

    test.done()
  },

  /**
   *
   The method insertBefore inserts the node newChild before the existing child node refChild.
   If refChild is null, insert newChild at the end of the list of children.

   Using insertBefore on an Element node attempt to insert new Comment/PI and CDATA nodes
   before each other and verify the names of the newly inserted nodes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore18: function (test) {
    var success;
    var doc;
    var element;
    var newElem;
    var newComment;
    var newPI;
    var newCDATA;
    var insertedNode;
    var data;
    var target;
    var appendedChild;
    var inserted;

    doc = hc_staff.hc_staff();
    element = doc.createElement("element");
    newElem = doc.createElementNS("http://www.w3.org/DOM","dom3:elem");
    newComment = doc.createComment("Comment");
    newCDATA = doc.createCDATASection("CDATASection");
    newPI = doc.createProcessingInstruction("target","data");
    appendedChild = element.appendChild(newElem);
    appendedChild = element.appendChild(newComment);
    appendedChild = element.appendChild(newPI);
    appendedChild = element.appendChild(newCDATA);
    inserted = element.insertBefore(newComment,newElem);
    insertedNode = element.firstChild;

    data = insertedNode.data;

    test.equal(data, "Comment", 'nodeinsertbefore18');

    test.done()
  },

  /**
   *
   Using insertBefore on an Element node attempt to insert an EntityReference node, before
   another new EntityReference node and verify the name of the new first child node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore19: function (test) {
    var success;
    var doc;
    var refNode;
    var newNode;
    var inserted;
    var childList;
    var nodeName;
    var element;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("var");
    element = childList.item(2);
    refNode = element.firstChild;

    newNode = doc.createEntityReference("alpha");
    inserted = element.insertBefore(newNode,refNode);
    nodeName = inserted.nodeName;

    test.equal(nodeName, "alpha", 'nodeinsertbefore19');

    test.done()
  },

  /**
   *
   Using insertBefore on an Element node attempt to insert a new Attr node, before
   an EntityReference child and verify if a HIERARCHY_REQUEST_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore20: function (test) {
    var success;
    var doc;
    var element;
    var refNode;
    var newNode;
    var childList;
    var inserted;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("var");
    element = childList.item(2);
    refNode = element.firstChild;

    newNode = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");

    {
      success = false;
      try {
        inserted = element.insertBefore(newNode,refNode);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }

    test.done()
  },

  /**
   *
   Using insertBefore on an Element node attempt to insert the parent Element node, before
   an EntityReference or Text child and verify if a HIERARCHY_REQUEST_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore21: function (test) {
    var success;
    var doc;
    var element;
    var refNode;
    var newNode;
    var childList;
    var inserted;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("var");
    element = childList.item(2);
    refNode = element.firstChild;

    newNode = element.parentNode;


    {
      success = false;
      try {
        inserted = element.insertBefore(newNode,refNode);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }

    test.done()
  },

  /**
   *
   Using insertBefore on an Element node attempt to insert the ancestor of an Element node
   before its child and verify if a HIERARCHY_REQUEST_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore22: function (test) {
    var success;
    var doc;
    var element;
    var refNode;
    var ancestor;
    var childList;
    var appendedChild;
    var inserted;

    doc = barfoo.barfoo();
    element = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:body");
    refNode = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:a");
    ancestor = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:p");
    appendedChild = element.appendChild(refNode);
    appendedChild = ancestor.appendChild(element);

    {
      success = false;
      try {
        inserted = element.insertBefore(ancestor,refNode);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }

    test.done()
  },

  /**
   *
   Using insertBefore on an Element node attempt to insert a Text node created by a different
   Document before an Element child and verify if a WRONG_DOCUMENT_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore23: function (test) {
    var success;
    var doc;
    var doc2;
    var element;
    var refNode;
    var newNode;
    var childList;
    var appendedChild;
    var inserted;

    doc = hc_staff.hc_staff();

    doc2 = hc_staff.hc_staff();
    element = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:body");
    refNode = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:p");
    newNode = doc2.createTextNode("TextNode");
    appendedChild = element.appendChild(refNode);

    {
      success = false;
      try {
        inserted = element.insertBefore(newNode,refNode);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    }

    test.done()
  },

  /**
   *
   Using insertBefore on an Element node attempt to insert a Comment node before
   a CDATASection node that is not a child and verify if a NOT_FOUND_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore24: function (test) {
    var success;
    var doc;
    var element;
    var refNode;
    var newNode;
    var childList;
    var inserted;

    doc = hc_staff.hc_staff();
    element = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:p");
    refNode = doc.createCDATASection("CDATASection");
    newNode = doc.createComment("Comment");

    {
      success = false;
      try {
        inserted = element.insertBefore(newNode,refNode);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Using insertBefore on a child Element of an EntityReference node attempt to insert
   a new Element node, before a Text node child of an Entity Node's replacement
   text and verify if a NO_MODIFICATION_ALLOWED_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-952280727
   */
  nodeinsertbefore25: function (test) {
    var success;
    var doc;
    var element;
    var eRef;
    var span;
    var spanText;
    var newNode;
    var childList;
    var inserted;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("var");
    element = childList.item(2);
    eRef = element.firstChild;

    span = eRef.firstChild;

    test.notEqual(span, null, 'spanNotNull');
    spanText = span.firstChild;

    test.notEqual(spanText, null, 'spanTextNotNull');
    newNode = doc.createElementNS("http://www.w3.org/1999/xhtml","span");

    {
      success = false;
      try {
        inserted = span.insertBefore(newNode,spanText);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on this Document node with the
   namespace of the document element check if the value returned is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace01: function (test) {
    var success;
    var doc;
    var isDefault;
    var docElem;
    var docElemNS;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    docElemNS = docElem.namespaceURI;

    isDefault = doc.isDefaultNamespace(docElemNS);
    test.ok(isDefault, 'nodeisdefaultnamespace01');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on on a new Document node with the value of the namespaceURI
   parameter equal to the namespaceURI of the newly created Document and check if the
   value returned is false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace02: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var isDefault;
    var nullDocType = null;

    var nullNSURI = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.localName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    isDefault = newDoc.isDefaultNamespace(rootNS);
    test.ok(isDefault, 'nodeisdefaultnamespace02_true');
    isDefault = newDoc.isDefaultNamespace(nullNSURI);
    test.equal(isDefault, false, 'nodeisdefaultnamespace02_false');

    test.done()
  },

  /**
   *



   Using isDefaultNamespace on this DocumentType node with the value of the namespaceURI parameter
   as null check if the value returned is false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace03: function (test) {
    var success;
    var doc;
    var docType;
    var isDefault;
    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    isDefault = docType.isDefaultNamespace(nullNSURI);
    test.equal(isDefault, false, 'nodeisdefaultnamespace03');

    test.done()
  },

  /**
   *



   Using isDefaultNamespace on a Notation and Entity node with the value of the namespaceURI parameter
   as null check if the value returned is false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace04: function (test) {
    var success;
    var doc;
    var docType;
    var entity;
    var notation;
    var entitiesMap;
    var notationsMap;
    var isDefault;
    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    notationsMap = docType.notations;

    entity = entitiesMap.getNamedItem("alpha");
    notation = notationsMap.getNamedItem("notation1");
    isDefault = entity.isDefaultNamespace(nullNSURI);
    test.equal(isDefault, false, 'nodeisdefaultnamespace04_1');
    isDefault = notation.isDefaultNamespace(nullNSURI);
    test.equal(isDefault, false, 'nodeisdefaultnamespace04_2');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on a DocumentElement of a new Document node with the value of the
   namespaceURI parameter equal to the namespaceURI of the newly created Document and check if the
   value returned is false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace05: function (test) {
    var success;
    var doc;
    var elem;
    var domImpl;
    var newDoc;
    var isDefault;
    var nullDocType = null;

    var nullNSURI = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.localName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    elem = newDoc.documentElement;

    isDefault = elem.isDefaultNamespace(rootNS);
    test.ok(isDefault, 'nodeisdefaultnamespace05_1');
    isDefault = elem.isDefaultNamespace(nullNSURI);
    test.equal(isDefault, false, 'nodeisdefaultnamespace05_2');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on an Element node with no prefix, which has a namespace
   attribute declaration with and without a namespace prefix and check if isDefaultNamespace
   returns true with the namespaceURI that does not have a prefix as its parameter.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace06: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var isDefault;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    isDefault = elem.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.ok(isDefault, 'nodeisdefaultnamespace06_1');
    isDefault = elem.isDefaultNamespace("http://www.usa.com");
    test.equal(isDefault, false, 'nodeisdefaultnamespace06_2');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on the child of an Element node with no prefix, which has a
   namespace attribute declaration with and without a namespace prefix and check if isDefaultNamespace
   returns true with the namespaceURI that does not have a prefix as its parameter.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace07: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var isDefault;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    isDefault = elem.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.ok(isDefault, 'nodeisdefaultnamespace07_1');
    isDefault = elem.isDefaultNamespace("http://www.usa.com");
    test.equal(isDefault, false, 'nodeisdefaultnamespace07_2');

    test.done()
  },

  /**
   *



   Using isDefaultNamespace on an Element node with a prefix, which has a namespace
   attribute declaration with a namespace prefix and check if isDefaultNamespace
   returns false with this namespaceURI as its parameter.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace08: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var isDefault;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(3);
    isDefault = elem.isDefaultNamespace("http://www.altavista.com");
    test.equal(isDefault, false, 'nodeisdefaultnamespace08');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on a new Child of a new Element node with a namespace URI
   and prefix and using the parents namespace URI as an argument, verify if the
   value returned is false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace09: function (test) {
    var success;
    var doc;
    var parent;
    var child;
    var isDefault;
    var appendedChild;

    doc = hc_staff.hc_staff();
    parent = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:body");
    child = doc.createElement("xhtml:p");
    appendedChild = parent.appendChild(child);
    isDefault = parent.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.equal(isDefault, false, 'nodeisdefaultnamespace09_1');
    isDefault = child.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.equal(isDefault, false, 'nodeisdefaultnamespace09_2');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on a new Child of a new Element node with a namespace URI
   and prefix and using the childs namespace URI as an argument, verify if the
   value returned is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace10: function (test) {
    var success;
    var doc;
    var parent;
    var child;
    var isDefault;
    var appendedChild;

    doc = hc_staff.hc_staff();
    parent = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:body");
    child = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    appendedChild = parent.appendChild(child);
    isDefault = child.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.ok(isDefault, 'nodeisdefaultnamespace10_1');
    isDefault = parent.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.equal(isDefault, false, 'nodeisdefaultnamespace10_2');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on an imported new Element node with a namespace URI and prefix
   in a new Document and using the parent's namespace URI as an argument, verify if the
   value returned is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace11: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var elem;
    var importedNode;
    var isDefault;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    importedNode = newDoc.importNode(elem,true);
    isDefault = importedNode.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.ok(isDefault, 'nodeisdefaultnamespace11');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on a Element's new Text node, which has a namespace attribute
   declaration without a namespace prefix in its parent Element node and  verify if the
   value returned is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace13: function (test) {
    var success;
    var doc;
    var bodyElem;
    var elem;
    var txt;
    var isDefault;
    var appendedChild;
    var bodyList;

    doc = hc_staff.hc_staff();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    txt = doc.createTextNode("Text");
    appendedChild = elem.appendChild(txt);
    appendedChild = bodyElem.appendChild(elem);
    isDefault = txt.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.ok(isDefault, 'nodeisdefaultnamespace13');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on a Element's new CDATASection node, which has a namespace attribute
   declaration without a namespace prefix in its parent Element node and  verify if the
   value returned is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace14: function (test) {
    var success;
    var doc;
    var elem;
    var cdata;
    var isDefault;
    var appendedChild;
    var bodyList;
    var bodyElem;

    doc = hc_staff.hc_staff();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    cdata = doc.createCDATASection("CDATASection");
    appendedChild = elem.appendChild(cdata);
    appendedChild = bodyElem.appendChild(elem);
    isDefault = cdata.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.ok(isDefault, 'nodeisdefaultnamespace14');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on a Element's new cloned Comment node, which has a namespace attribute
   declaration without a namespace prefix in its parent Element node and  verify if the
   value returned is true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace15: function (test) {
    var success;
    var doc;
    var bodyElem;
    var elem;
    var comment;
    var clonedComment;
    var isDefault;
    var appendedChild;
    var bodyList;

    doc = hc_staff.hc_staff();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    comment = doc.createComment("Text");
    clonedComment = comment.cloneNode(true);
    appendedChild = elem.appendChild(clonedComment);
    appendedChild = bodyElem.appendChild(elem);
    isDefault = clonedComment.isDefaultNamespace("http://www.w3.org/1999/xhtml");
    test.ok(isDefault, 'nodeisdefaultnamespace15');

    test.done()
  },

  /**
   *
   Using isDefaultNamespace on a new Attribute node with with a namespace URI
   and no prefix and  verify if the value returned is false since default namespaces
   do not apply directly to attributes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isDefaultNamespace
   */
  nodeisdefaultnamespace16: function (test) {
    var success;
    var doc;
    var attr;
    var isDefault;

    doc = barfoo.barfoo();
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","lang");
    isDefault = attr.isDefaultNamespace("http://www.w3.org/XML/1998/namespace");
    test.equal(isDefault, false, 'nodeisdefaultnamespace16');

    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 Document nodes created by parsing the same xml document
   are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode01: function (test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    test.ok(doc1.isEqualNode(doc2), 'nodeisequalnode01');
    test.done()
  },

  /**
   *
   Using isEqualNode check if 2 newly created Document nodes having the same namespaceURI
   and qualifiedName are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode02: function (test) {
    var doc = hc_staff.hc_staff();
    var doc1 = doc.implementation.createDocument(doc.documentElement.namespaceURI, doc.documentElement.tagName, null);
    var doc2 = doc.implementation.createDocument(doc.documentElement.namespaceURI, doc.documentElement.tagName, null);
    test.ok(doc1.isEqualNode(doc2), 'nodeisequalnode02');
    test.done()
  },

  /**
   *
   Using isEqualNode check if 2 Document nodes created by parsing
   documents only differing in declared encoding return false for isEqualNode on
   the document and true on the document element.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=528
   */
  nodeisequalnode03: function (test) {
    var doc1 = barfoo_utf8.barfoo_utf8();
    var doc2 = barfoo_utf16.barfoo_utf16();
    test.ok(doc1.isEqualNode(doc2), 'docAreNotEquals');
    test.ok(doc1.documentElement.isEqualNode(doc2.documentElement), 'docElemsAreEquals');
    test.done()
  },

  /**
   *
   Create a new Element node in this Document.  return its ownerDocument and check if the
   the ownerDocument is equal to this Document using isEqualNode.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode04: function (test) {
    var doc = barfoo.barfoo();
    var elem = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:p");
    test.ok(doc.isEqualNode(elem.ownerDocument), 'nodeisequalnode04');
    test.done()
  },

  /**
   *
   Using isEqualNode check if 2 Document nodes created by parsing different xml document
   are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode05: function (test) {
    var doc1 = barfoo_standalone_yes.barfoo_standalone_yes();
    var doc2 = barfoo.barfoo();
    test.equal(doc1.isEqualNode(doc2), false, 'nodeisequalnode05');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 Element nodes having the same nodeName and namespaceURI attribute
   are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode06: function (test) {
    var doc = hc_staff.hc_staff();
    var elem1 = doc.createElementNS('http://www.w3.org/1999/xhtml', 'xhtml:html');
    var elem2 = doc.createElementNS('http://www.w3.org/1999/xhtml', 'xhtml:html');
    test.ok(elem1.isEqualNode(elem2), 'nodeisequalnode06');
    test.done()
  },

  /**
   *
   Using isEqualNode check if 2 Element nodes having the same nodeName and namespaceURI attribute
   created by two different Document objects obtained by parsing the same xml document are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode07: function (test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    var elem1 = doc1.createElementNS('http://www.w3.org/1999/xhtml', 'xhtml:html');
    var elem2 = doc2.createElementNS('http://www.w3.org/1999/xhtml', 'xhtml:html');
    test.ok(elem1.isEqualNode(elem2), 'nodeisequalnode07');
    test.done()
  },

  /**
   *


   Retrieve an element node of this Document having nodeName as employeeId and
   namespaceURI as http://www.nist.gov.  Create a new Element node having the same attributes
   in this Document and using isEqualNode check if 2 Element nodes are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode08: function (test) {
    var doc = hc_staff.hc_staff();
    var elem1 = doc.getElementsByTagName('em').item(0);
    var elem2 = doc.createElementNS('http://www.w3.org/2000/xmlns/', 'em');
    elem2.appendChild(doc.createTextNode('EMP0001'));
    test.ok(elem1.isEqualNode(elem2), 'nodeisequalnode08');
    test.done()
  },

  /**
   *
   Get the first "em" node, construct an equivalent in a new document and see if isEqualNode
   returns true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode09: function (test) {
    var doc = hc_staff.hc_staff();
    var newDoc = doc.implementation.createDocument(doc.documentElement.namespaceURI, doc.documentElement.localName, null);
    var elem1 = doc.getElementsByTagName('em').item(0);
    var elem2 = newDoc.createElementNS('http://www.w3.org/2000/xmlns/', 'em');
    elem2.appendChild(newDoc.createTextNode('EMP0001'));
    test.ok(elem1.isEqualNode(elem2), 'nodesAreEqual');
    test.done()
  },

  /**
   *
   Retrieve 2 different "em" nodes of this Document   Use isEqualNode
   check if nodes are not equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode10: function (test) {
    var doc = hc_staff.hc_staff();
    var employeeList = doc.getElementsByTagName('em');
    var elem1 = employeeList.item(0);
    var elem2 = employeeList.item(1);
    test.equal(elem1.isEqualNode(elem2), false, 'nodeisequalnode10');
    test.done()
  },

  /**
   *
   Retrieve the first element node whose localName is "p".  Import it into a new
   Document with deep=false.  Using isEqualNode check if the original and the imported
   Element Node are not equal the child nodes are different.
   Import with deep and the should still be unequal if
   validating since the
   new document does not provide the same default attributes.
   Import it into another instance of the source document
   and then the imported node and the source should be equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=529
   */
  nodeisequalnode11: function (test) {
    var doc = hc_staff.hc_staff();
    var newDoc = doc.implementation.createDocument(doc.documentElement.namespaceURI, doc.documentElement.tagName, null);
    var elem1 = doc.getElementsByTagName('p').item(0);
    var elem2 = newDoc.importNode(elem1,false);
    test.equal(elem1.isEqualNode(elem2), false, 'nodeisequalnodeFalse11');
    // if (getImplementationAttribute("validating") == true) {
    elem3 = newDoc.importNode(elem1,true);
    test.equal(elem1.isEqualNode(elem3), false, 'deepImportNoDTD');
    // }
    var dupDoc = hc_staff.hc_staff();
    var elem4 = dupDoc.importNode(elem1, true);
    test.ok(elem1.isEqualNode(elem4), 'deepImportSameDTD');
    test.done()
  },

  /**
   *


   Using isEqual verify if the 2 documentElement nodes of different documents created
   by parsing the same xml document are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode12: function (test) {
    var doc = hc_staff.hc_staff();
    var elem1 = doc.documentElement;
    var elem2 = doc.documentElement;
    test.ok(elem1.isEqualNode(elem2), 'nodeisequalnode12');
    test.done()
  },

  /**
   *
   Retrieve the first element node whose localName is "p".  Import it into a new
   Document with deep=false.  Using isEqualNode check if the original and the imported
   Element Node are not equal.  Now import it once more with deep=true and using isEqual
   verify if they are now equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode13: function (test) {
    var doc = hc_staff.hc_staff();
    var elem1 = doc.getElementsByTagName('p').item(0);
    var elem2 = elem1.cloneNode(false);
    test.equal(elem1.isEqualNode(elem2), false, 'nodeisequalnodeFalse13');
    var elem3 = elem1.cloneNode(true);
    test.ok(elem1.isEqualNode(elem3), 'nodeisequalnodeTrue13 -- NOTE: failing currently because cloneNode(true) is not correctly implemented');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 Attr nodes having the same nodeName and a null namespaceURI
   attribute, one created using createAttribute and the other createAttributeNS, are not equal.
   Note the localName for an Attr created with DOM Level 1 methods is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode14: function (test) {
    var doc = hc_staff.hc_staff();
    var attr1 = doc.createAttribute('root');
    var attr2 = doc.createAttributeNS(null, 'root');
    test.equal(attr1.isEqualNode(attr2), false, 'nodeisequalnode14');
    test.done()
  },

  /**
   *
   Using isEqualNode check if 2 Attr nodes having the same nodeName and a null namespaceURI
   attribute, one created using createAttributeNS and the other retreived from this document
   are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode15: function (test) {
    var doc = hc_staff.hc_staff();
    var attr1 = doc.getElementsByTagName('acronym').item(3).getAttributeNode('title');
    // if (getImplementationAttribute("namespaceAware") == true) {
    if (false) { // no way to know what getImplementationAttribute does...
      var attr2 = doc.createAttributeNS(null, 'title');
    } else {
      var attr2 = doc.createAttribute('title');
    }
    attr2.value = 'Yes';
    test.ok(attr1.isEqualNode(attr2), 'nodeisequalnode15');
    test.done()
  },

  /**
   *


   Using isEqualNode check if a default attribute node and a cloned default attribute
   node are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode16: function (test) {
    var doc = hc_staff.hc_staff();
    var attr1 = doc.getElementsByTagName('acronym').item(3).getAttributeNode('dir');
    var attr2 = attr1.cloneNode(true);
    test.ok(attr1.isEqualNode(attr2), 'nodeisequalnode16');
    test.done()
  },

  /**
   *
   Using isEqualNode check if a new Attr node created in this Document is equal to
   the imported node returned when it is imported into a new Document.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode17: function (test) {
    var doc = hc_staff.hc_staff();
    var newDoc = doc.implementation.createDocument(doc.documentElement.namespaceURI, doc.documentElement.tagName, null);
    var attr1 = doc.createAttributeNS(null, 'root');
    var attr2 = newDoc.importNode(attr1, true);
    test.ok(attr1.isEqualNode(attr2), 'nodeisequalnode17');
    test.done()
  },

  /**
   *
   Using isEqualNode check if a new Attr node created in this Document is equal to
   the attr node adopted by a new document.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode18: function (test) {
    test.ok(false, 'NOTE: test relies on adoptNode, which has not yet been implemented')
    // var doc = hc_staff.hc_staff();
    // var newDoc = doc.implementation.createDocument(doc.documentElement.namespaceURI, doc.documentElement.tagName, null);
    // var attr1 = doc.createAttributeNS(null, 'title');
    // var attr2 = newDoc.adoptNode(attr1);
    // if (attr2 != null) {
    //   test.ok(attr1.isEqualNode(attr2), 'nodeisequalnode18');
    // }
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 Attr nodes having the same nodeName but different namespaceURIs
   are not equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode19: function (test) {
    var doc = hc_staff.hc_staff();
    var attr1 = doc.createAttributeNS('http://www.w3.org/XML/1998/namespace', 'lang');
    var attr2 = doc.createAttributeNS(null, 'lang');
    test.equal(attr1.isEqualNode(attr2), false, 'nodeisequalnode19');
    test.done()
  },

  /**
   *
   Using isEqualNode check if an Element and an Attr nodes having the same nodeName
   and namsepaceURI are not equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode20: function (test) {
    var doc = hc_staff.hc_staff();
    var elem1 = doc.createElementNS('http://www.w3.org/1999/xhtml', 'xhtml:html');
    var attr1 = doc.createAttributeNS('http://www.w3.org/1999/xhtml', 'xhtml:html');
    test.equal(attr1.isEqualNode(elem1), false, 'nodeisequalnode20');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 DocumentType nodes returned by parsing the same xml document
   are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode21: function (test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    test.ok(doc1.doctype.isEqualNode(doc2.doctype), 'nodeisequalnode21');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 new DocumentType having null public and system ids
   are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode22: function (test) {
    var doc1 = barfoo.barfoo();
    var doc2 = barfoo.barfoo();
    var docType1 = doc1.implementation.createDocumentType(doc1.doctype.name, null, null);
    var docType2 = doc2.implementation.createDocumentType(doc1.doctype.name, null, null);
    test.ok(docType1.isEqualNode(docType2), 'nodeisequalnode22');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 EntityNode having the same name of two DocumentType nodes
   returned by parsing the same xml document are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode25: function (test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    var alpha = doc1.doctype.entities.getNamedItem('delta');
    var beta = doc2.doctype.entities.getNamedItem('delta');
    test.ok(alpha.isEqualNode(beta), 'nodeisequalnode25');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 NotationNode having the same name of two DocumnotationType nodes
   returned by parsing the same xml documnotation are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode26: function (test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    var notation1 = doc1.doctype.notations.getNamedItem('notation1');
    var notation2 = doc2.doctype.notations.getNamedItem('notation1');
    test.ok(notation1.isEqualNode(notation2), 'nodeisequalnode26');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 EntityNode having the same name of two DocumentType nodes
   returned by parsing the same xml document are equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode27: function (test) {
    var doc = hc_staff.hc_staff();
    var alpha = doc.doctype.entities.getNamedItem('alpha');
    var notation1 = doc.doctype.notations.getNamedItem('notation1');
    test.equal(notation1.isEqualNode(alpha), false, 'nodeisequalnode27');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 new Text nodes having null text are equal and two others
   having different data are not equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode28: function (test) {
    var doc = hc_staff.hc_staff();
    var text1 = doc.createTextNode('');
    var text2 = doc.createTextNode('');
    var text3 = doc.createTextNode('#Text');
    test.ok(text1.isEqualNode(text2), 'nodeisequalnodeTrue28');
    test.equal(text1.isEqualNode(text3), false, 'nodeisequalnodeFalse28');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 new Comment nodes having the same data are equal and two others
   having different data are not equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode29: function (test) {
    var doc = hc_staff.hc_staff();
    var comment1 = doc.createComment('comment');
    var comment2 = doc.createComment('comment');
    var comment3 = doc.createComment('#Comment');
    test.ok(comment1.isEqualNode(comment2), 'nodeisequalnodeTrue29');
    test.equal(comment1.isEqualNode(comment3), false, 'nodeisequalnodeFalse29');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 new CDATASection nodes having the same data are equal and two others
   having different data are not equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode31: function (test) {
    var doc = hc_staff.hc_staff();
    var cdata1 = doc.createCDATASection('cdata');
    var cdata2 = doc.createCDATASection('cdata');
    var cdata3 = doc.createCDATASection('#CDATASection');
    test.ok(cdata1.isEqualNode(cdata2), 'nodeisequalnodeTrue29');
    test.equal(cdata1.isEqualNode(cdata3), false, 'nodeisequalnodeFalse29');
    test.done()
  },

  /**
   *


   Using isEqualNode check if 2 new ProcessingInstruction nodes having the same data are equal and two others
   having different data are not equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isEqualNode
   */
  nodeisequalnode32: function (test) {
    var doc = hc_staff.hc_staff();
    var pi1 = doc.createProcessingInstruction('Target1', 'pi');
    var pi2 = doc.createProcessingInstruction('Target1', 'pi');
    var pi3 = doc.createProcessingInstruction('Target1', '#ProcessingInstruction');
    test.ok(pi1.isEqualNode(pi2), 'nodeisequalnodeTrue29');
    test.equal(pi1.isEqualNode(pi3), false, 'nodeisequalnodeFalse29');
    test.done()
  },

  /**
   *


   Using isSameNode to check if 2 Document nodes that are equal but do not reference the
   same object are not the same

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode01: function (test) {
    var success;
    var doc1;
    var doc2;
    var isSame;

    doc1 = hc_staff.hc_staff();

    doc2 = hc_staff.hc_staff();
    isSame = doc1.isSameNode(doc2);
    test.equal(isSame, false, 'nodeissamenode01');

    test.done()
  },

  /**
   *


   Using isSameNode check if 2 DocumentType nodes that reference the same object are
   the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode02: function (test) {
    var success;
    var doc;
    var docType1;
    var docType2;
    var isSame;

    doc = hc_staff.hc_staff();
    docType1 = doc.doctype;

    docType2 = doc.doctype;

    isSame = docType1.isSameNode(docType2);
    test.ok(isSame, 'nodeissamenode02');

    test.done()
  },

  /**
   *
   Using isSameNode check if 2 Element nodes that reference the same object are
   the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode03: function (test) {
    var success;
    var doc;
    var element1;
    var element2;
    var childList;
    var isSame;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("p");
    element1 = childList.item(0);
    element2 = childList.item(0);
    isSame = element2.isSameNode(element1);
    test.ok(isSame, 'nodeissamenode03');

    test.done()
  },

  /**
   *
   Using isSameNode check if 2 Element nodes that are equal but do not reference the
   same object are not the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode04: function (test) {
    var success;
    var doc;
    var element1;
    var element2;
    var isSame;

    doc = hc_staff.hc_staff();
    element1 = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:br");
    element2 = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:br");
    isSame = element2.isSameNode(element1);
    test.equal(isSame, false, 'nodeissamenode04');

    test.done()
  },

  /**
   *


   Using isSameNode check if 2 Document Element nodes that reference the same object are
   the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode05: function (test) {
    var success;
    var doc;
    var element1;
    var element2;
    var isSame;

    doc = hc_staff.hc_staff();
    element1 = doc.documentElement;

    element2 = doc.documentElement;

    isSame = element2.isSameNode(element1);
    test.ok(isSame, 'nodeissamenode05');

    test.done()
  },

  /**
   *
   Using isSameNode check if 2 Document Element nodes that reference the same object are
   the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode06: function (test) {
    var success;
    var doc;
    var element;
    var element1;
    var attr1;
    var attr2;
    var childList;
    var isSame;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    element = childList.item(2);
    element1 = childList.item(2);
    attr1 = element.getAttributeNode("class");
    attr2 = element1.getAttributeNode("class");
    isSame = attr1.isSameNode(attr2);
    test.ok(isSame, 'nodeissamenode06');

    test.done()
  },

  /**
   *


   Using isSameNode check if 2 Entity nodes that reference the same object are
   the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode07: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity1;
    var entity2;
    var isSame;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity1 = entitiesMap.getNamedItem("delta");
    entity2 = entitiesMap.getNamedItem("delta");
    isSame = entity1.isSameNode(entity2);
    test.ok(isSame, 'nodeissamenode07');

    test.done()
  },

  /**
   *


   Using isSameNode check if 2 Notation nodes that reference the same object are
   the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode08: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var notation1;
    var notation2;
    var isSame;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.notations;

    notation1 = entitiesMap.getNamedItem("notation1");
    notation2 = entitiesMap.getNamedItem("notation1");
    isSame = notation1.isSameNode(notation2);
    test.ok(isSame, 'nodeissamenode08');

    test.done()
  },

  /**
   *


   Using isSameNode check if an Entity and its docType nodes are not the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode09: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var entity;
    var isSame;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    entity = entitiesMap.getNamedItem("alpha");
    isSame = docType.isSameNode(entity);
    test.equal(isSame, false, 'nodeissamenode09');

    test.done()
  },

  /**
   *
   Using isSameNode check if an new Document and a new Element node are not the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-isSameNode
   */
  nodeissamenode10: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var element;
    var isSame;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    element = newDoc.createElementNS(rootNS,rootName);
    isSame = newDoc.isSameNode(element);
    test.equal(isSame, false, 'nodeissamenode10');

    test.done()
  },

  /**
   *
   Return value from lookupNamespaceURI(null) on a Document node with no default namespace should be null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri01: function (test) {
    var success;
    var doc;
    var namespaceURI;
    var nullPrefix = null;


    doc = barfoo_nodefaultns.barfoo_nodefaultns();
    namespaceURI = doc.lookupNamespaceURI(nullPrefix);
    test.equal(namespaceURI, null, 'nodelookupnamespaceuri01');

    test.done()
  },

  /**
   *
   Using lookupNamespaceURI on a new Document node with a namespaceURI and prefix
   and check if the value returned is the same namespaceURI.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri02: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var namespaceURI;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;
    var qname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    qname = "dom3:" + rootName;
    newDoc = domImpl.createDocument(rootNS,qname,nullDocType);
    namespaceURI = newDoc.lookupNamespaceURI("dom3");
    test.equal(namespaceURI, rootNS, 'nodelookupnamespaceuri02');

    test.done()
  },

  /**
   *



   Using lookupNamespaceURI on this DocumentType node check if the value returned is Null .

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri03: function (test) {
    var success;
    var doc;
    var docType;
    var namespaceURI;
    var nullPrefix = null;


    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    namespaceURI = docType.lookupNamespaceURI(nullPrefix);
    test.equal(namespaceURI, null, 'nodelookupnamespaceuri03');

    test.done()
  },

  /**
   *



   Using lookupNamespaceURI on an Entity and Notation node and check if the value returned is Null .

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri04: function (test) {
    var success;
    var doc;
    var docType;
    var entity;
    var notation;
    var entitiesMap;
    var notationsMap;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    notationsMap = docType.notations;

    entity = entitiesMap.getNamedItem("alpha");
    notation = notationsMap.getNamedItem("notation1");
    namespaceURI = entity.lookupNamespaceURI("");
    test.equal(namespaceURI, null, 'nodelookupnamespaceuri04');

    test.done()
  },

  /**
   *
   Using lookupNamespaceURI on the DocumentElement node of a new document with a
   namespaceURI and prefix and check if the namespaceURI value returned is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri05: function (test) {
    var success;
    var doc;
    var elem;
    var domImpl;
    var newDoc;
    var namespaceURI;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;
    var qname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    qname = "dom3:" + rootName;
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,qname,nullDocType);
    elem = newDoc.documentElement;

    namespaceURI = elem.lookupNamespaceURI("dom3");
    test.equal(namespaceURI, rootNS, 'nodelookupnamespaceuri05');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on an Element node with no prefix, which has a namespace
   attribute declaration with a namespace prefix and check if the value of the namespaceURI
   returned by using its prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri06: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(2);
    namespaceURI = elem.lookupNamespaceURI("dmstc");
    test.equal(namespaceURI, "http://www.netzero.com", 'nodelookupnamespaceuri06');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on an Element node with no prefix, which has a namespace
   attribute declaration with a namespace prefix in its parent Element node and check if
   the value of the namespaceURI returned by using its prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri07: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(2);
    namespaceURI = elem.lookupNamespaceURI("dmstc");
    test.equal(namespaceURI, "http://www.netzero.com", 'nodelookupnamespaceuri07');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on an Element node with no prefix, which has 2 namespace
   attribute declarations with and without namespace prefixes and check if the value of the prefix
   returned by using a valid prefix and an empty prefix as a parameter is a valid
   namespaceURI or null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri08: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var namespaceURI;
    var namespaceURIEmpty;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    namespaceURI = elem.lookupNamespaceURI("dmstc");
    test.equal(namespaceURI, "http://www.usa.com", 'nodelookupnamespaceuri08');
    namespaceURIEmpty = elem.lookupNamespaceURI("");
    test.equal(namespaceURIEmpty, null, 'nodelookupnamespaceprefixEmpty08');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on an Element node with no prefix, whose parent has no prefix and
   2 namespace attribute declarations with and without namespace prefixes and check if the value of
   the namespaceURI returned by using each prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri09: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var namespaceURI;
    var namespaceURIEmpty;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    namespaceURI = elem.lookupNamespaceURI("dmstc");
    test.equal(namespaceURI, "http://www.usa.com", 'nodelookupnamespaceuri09');
    namespaceURIEmpty = elem.lookupNamespaceURI("");
    test.equal(namespaceURIEmpty, null, 'nodelookupnamespaceprefixEmpty09');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on a new Child of a new Element node with a namespace URI
   and prefix and using the parents prefix as an argument, verify if the namespaceURI
   returned is a valid namespaceURI for the parent.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri10: function (test) {
    var success;
    var doc;
    var parent;
    var child;
    var namespaceURI;
    var appendedChild;

    doc = hc_staff.hc_staff();
    parent = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:body");
    child = doc.createElement("p");
    appendedChild = parent.appendChild(child);
    namespaceURI = child.lookupNamespaceURI("xhtml");
    test.equal(namespaceURI, "http://www.w3.org/1999/xhtml", 'nodelookupnamespaceuri10');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on an imported new Element node with a namespace URI and prefix
   in a new Document and using the parents prefix as an argument, verify if the namespaceURI
   returned is a valid namespaceURI of the parent.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri11: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var elem;
    var importedNode;
    var namespaceURI;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    importedNode = newDoc.importNode(elem,true);
    namespaceURI = importedNode.lookupNamespaceURI("dom3");
    test.equal(namespaceURI, "http://www.w3.org/1999/xhtml", 'nodelookupnamespaceuri11');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on a Element's new Text node, which has a namespace attribute declaration
   with a namespace prefix in its parent Element node and check if the value of the namespaceURI
   returned by using its prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri13: function (test) {
    var success;
    var doc;
    var docElem;
    var elem;
    var txt;
    var namespaceURI;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    txt = doc.createTextNode("Text");
    appendedChild = elem.appendChild(txt);
    appendedChild = docElem.appendChild(elem);
    namespaceURI = txt.lookupNamespaceURI("dom3");
    test.equal(namespaceURI, "http://www.w3.org/1999/xhtml", 'nodelookupnamespaceuri13');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on a Element's new Text node, which has a namespace attribute declaration
   with a namespace prefix in its parent Element node and check if the value of the namespaceURI
   returned by using its prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri14: function (test) {
    var success;
    var doc;
    var docElem;
    var elem;
    var cdata;
    var lookupNamespaceURI;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    cdata = doc.createCDATASection("Text");
    appendedChild = elem.appendChild(cdata);
    appendedChild = docElem.appendChild(elem);
    lookupNamespaceURI = cdata.lookupNamespaceURI("dom3");
    test.equal(lookupNamespaceURI, "http://www.w3.org/1999/xhtml", 'nodelookupnamespaceuri14');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on a Element's new Comment node, which has a namespace attribute declaration
   with a namespace prefix in its parent Element node and check if the value of the namespaceURI
   returned by using its prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri15: function (test) {
    var success;
    var doc;
    var docElem;
    var elem;
    var comment;
    var clonedComment;
    var namespaceURI;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    comment = doc.createComment("Text");
    clonedComment = comment.cloneNode(true);
    appendedChild = elem.appendChild(clonedComment);
    appendedChild = docElem.appendChild(elem);
    namespaceURI = clonedComment.lookupNamespaceURI("dom3");
    test.equal(namespaceURI, "http://www.w3.org/1999/xhtml", 'nodelookupnamespaceuri15');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on a new Attribute node with with a namespace URI
   and prefix and verify if the namespaceURI returned is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri16: function (test) {
    var success;
    var doc;
    var elem;
    var attr;
    var attNode;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    attNode = elem.setAttributeNodeNS(attr);
    namespaceURI = attr.lookupNamespaceURI("xml");
    test.equal(namespaceURI, null, 'nodelookupnamespaceuri16');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on the title attribute node of the acronym node with
   a namespaceURI and a node prefix and check if the value of the namespaceURI returned by
   using its prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri17: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var attributesMap;
    var attr;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(2);
    attributesMap = elem.attributes;

    attr = attributesMap.getNamedItem("xsi:noNamespaceSchemaLocation");
    namespaceURI = attr.lookupNamespaceURI("dmstc");
    test.equal(namespaceURI, "http://www.netzero.com", 'nodelookupnamespaceuri17');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on the default attribute node of the p node with
   a namespaceURI and a node prefix and check if the value of the namespaceURI returned by
   using its prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri18: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var attributesMap;
    var attr;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    attributesMap = elem.attributes;

    attr = attributesMap.getNamedItem("dir");
    namespaceURI = attr.lookupNamespaceURI("nm");
    test.equal(namespaceURI, "http://www.altavista.com", 'nodelookupnamespaceuri18');

    test.done()
  },

  /**
   *
   Invoke lookupNamespaceURI on the an attribute node without a namespace prefix of
   an Element node that has a namespaceURI and prefix, and check if the value of the namespaceURI
   returned by using the Elements prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri19: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var attributesMap;
    var attr;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(3);
    attributesMap = elem.attributes;

    attr = attributesMap.getNamedItem("class");
    namespaceURI = attr.lookupNamespaceURI("xsi");
    test.equal(namespaceURI, "http://www.w3.org/2001/XMLSchema-instance", 'nodelookupnamespaceuri19');

    test.done()
  },

  /**
   *



   Invoke lookupNamespaceURI on the an attribute node without a namespace prefix of
   an Element node that has a namespaceURI and prefix, and check if the value of the namespaceURI
   returned by using the Elements prefix as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespaceURI
   */
  nodelookupnamespaceuri20: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var attributesMap;
    var attr;
    var namespaceURI;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    attributesMap = elem.attributes;

    attr = attributesMap.getNamedItem("xmlns:nm");
    namespaceURI = attr.lookupNamespaceURI("nm");
    test.equal(namespaceURI, "http://www.altavista.com", 'nodelookupnamespaceuri20');

    test.done()
  },

  /**
   *



   Using lookupPrefix on this Document node check if the value returned is Null .

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix01: function (test) {
    var success;
    var doc;
    var prefix;
    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    prefix = doc.lookupPrefix(nullNSURI);
    test.equal(prefix, null, 'nodelookupprefix01');

    test.done()
  },

  /**
   *
   Using lookupPrefix on a new Document node with a namespaceURI and prefix
   and check if the value returned is the same prefix.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix02: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var prefix;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;
    var qname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    qname = "dom3:" + rootName;
    newDoc = domImpl.createDocument(rootNS,qname,nullDocType);
    prefix = newDoc.lookupPrefix(rootNS);
    test.equal(prefix, "dom3", 'nodelookupprefix02');

    test.done()
  },

  /**
   *



   Using lookupPrefix on this DocumentType node check if the value returned is Null .

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix03: function (test) {
    var success;
    var doc;
    var docType;
    var prefix;
    var nullNSURI = null;


    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    prefix = docType.lookupPrefix(nullNSURI);
    test.equal(prefix, null, 'nodelookupprefix03');

    test.done()
  },

  /**
   *



   Using lookupPrefix on an Entity and Notation node and check if the value returned is Null .

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix04: function (test) {
    var success;
    var doc;
    var docType;
    var entity;
    var notation;
    var entitiesMap;
    var notationsMap;
    var prefix;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    notationsMap = docType.notations;

    entity = entitiesMap.getNamedItem("alpha");
    notation = notationsMap.getNamedItem("notation1");
    prefix = entity.lookupPrefix("");
    test.equal(prefix, null, 'nodelookupprefixEntity04');
    prefix = notation.lookupPrefix("");
    test.equal(prefix, null, 'nodelookupprefixNotation04');

    test.done()
  },

  /**
   *
   Using lookupPrefix on the DocumentElement node of a new document with a
   namespaceURI and prefix and check if the prefix value returned is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix05: function (test) {
    var success;
    var doc;
    var elem;
    var domImpl;
    var newDoc;
    var prefix;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;
    var qname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    qname = "dom3:" + rootName;
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,qname,nullDocType);
    elem = newDoc.documentElement;

    prefix = elem.lookupPrefix(rootNS);
    test.equal(prefix, "dom3", 'nodelookupprefix05');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on an Element node with no prefix, which has a namespace
   attribute declaration with a namespace prefix and check if the value of the prefix
   returned by using its namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix06: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var prefix;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(2);
    prefix = elem.lookupPrefix("http://www.netzero.com");
    test.equal(prefix, "dmstc", 'nodelookupprefix06');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on an Element node with no prefix, which has a namespace
   attribute declaration with a namespace prefix in its parent Element node and check if the value of the prefix
   returned by using its namespaceURI as a parameter is valid.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix07: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var prefix;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(2);
    prefix = elem.lookupPrefix("http://www.netzero.com");
    test.equal(prefix, "dmstc", 'nodelookupprefix07');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on an Element node with no prefix, which has 2 namespace
   attribute declarations with and without namespace prefixes and check if the value of the prefix
   returned by using each namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix08: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var prefix;
    var prefixEmpty;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    prefix = elem.lookupPrefix("http://www.usa.com");
    test.equal(prefix, "dmstc", 'nodelookupprefix08');
    prefixEmpty = elem.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefixEmpty, null, 'nodelookupnamespaceprefixEmpty08');

    test.done()
  },

  /**
   *



   Invoke lookupPrefix on an Element node with no prefix, whose parent has no prefix and
   2 namespace attribute declarations with and without namespace prefixes and check if the value of
   the prefix returned by using each namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix09: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var prefix;
    var prefixEmpty;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    prefix = elem.lookupPrefix("http://www.usa.com");
    test.equal(prefix, "dmstc", 'nodelookupprefix09');
    prefixEmpty = elem.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefixEmpty, null, 'nodelookupprefixEmpty09');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on a new Child of a new Element node with a namespace URI
   and prefix and using the parents namespace URI as an argument, verify if the prefix
   returned is a valid prefix of the parent.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix10: function (test) {
    var success;
    var doc;
    var parent;
    var child;
    var prefix;
    var appendedChild;

    doc = hc_staff.hc_staff();
    parent = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    child = doc.createElement("br");
    appendedChild = parent.appendChild(child);
    prefix = child.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefix, "dom3", 'nodelookupprefix10');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on an imported new Element node with a namespace URI
   and prefix in a new Document and using the parents namespace URI as an argument, verify if the prefix
   returned is a valid prefix of the parent.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix11: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var elem;
    var importedNode;
    var prefix;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;
    var qname;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    qname = "dom3doc:" + rootName;
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,qname,nullDocType);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:br");
    importedNode = newDoc.importNode(elem,true);
    prefix = importedNode.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefix, "dom3", 'nodelookupprefix11');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on an renamed new Element node with a namespace URI
   and prefix in a new Document and using the parents namespace URI as an argument, verify if the prefix
   returned is a valid prefix of the parent.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix12: function (test) {
    var success;
    var doc;
    var domImpl;
    var elem;
    var renamedNode;
    var prefix;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    renamedNode = doc.renameNode(elem,"http://www.w3.org/1999/xhtml","ren:br");
    prefix = renamedNode.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefix, "ren", 'nodelookupprefix12');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on a Element's new Text node, which has a namespace attribute declaration
   with a namespace prefix in its parent Element node and check if the value of the prefix
   returned by using its namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix13: function (test) {
    var success;
    var doc;
    var bodyElem;
    var elem;
    var txt;
    var prefix;
    var appendedChild;
    var bodyList;

    doc = hc_staff.hc_staff();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    txt = doc.createTextNode("Text");
    appendedChild = elem.appendChild(txt);
    appendedChild = bodyElem.appendChild(elem);
    prefix = txt.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefix, "dom3", 'nodelookupprefix13');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on a Element's new CDATA node, which has a namespace attribute declaration
   with a namespace prefix in its parent Element node and check if the value of the prefix
   returned by using its namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix14: function (test) {
    var success;
    var doc;
    var bodyElem;
    var elem;
    var cdata;
    var prefix;
    var appendedChild;
    var bodyList;

    doc = hc_staff.hc_staff();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    cdata = doc.createCDATASection("Text");
    appendedChild = elem.appendChild(cdata);
    appendedChild = bodyElem.appendChild(elem);
    prefix = cdata.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefix, "dom3", 'nodelookupprefix14');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on a Element's new Comment node, which has a namespace attribute declaration
   with a namespace prefix in its parent Element node and check if the value of the prefix
   returned by using its namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix15: function (test) {
    var success;
    var doc;
    var bodyElem;
    var elem;
    var comment;
    var clonedComment;
    var prefix;
    var appendedChild;
    var bodyList;

    doc = hc_staff.hc_staff();
    bodyList = doc.getElementsByTagName("body");
    bodyElem = bodyList.item(0);
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    comment = doc.createComment("Text");
    clonedComment = comment.cloneNode(true);
    appendedChild = elem.appendChild(clonedComment);
    appendedChild = bodyElem.appendChild(elem);
    prefix = clonedComment.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefix, "dom3", 'nodelookupprefix15');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on a new Attribute node with with a namespace URI
   and prefix and verify if the prefix returned is null.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix16: function (test) {
    var success;
    var doc;
    var elem;
    var attr;
    var prefix;
    var attNode;

    doc = barfoo.barfoo();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    attNode = elem.setAttributeNodeNS(attr);
    prefix = attr.lookupPrefix("http://www.w3.org/XML/1998/namespace");
    test.equal(prefix, null, 'nodelookupprefix16');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on the title attribute node of the acronym node with
   a namespaceURI and a node prefix and check if the value of the prefix returned by
   using its namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix17: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var attributesMap;
    var attr;
    var prefix;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(2);
    attributesMap = elem.attributes;

    attr = attributesMap.getNamedItem("xsi:noNamespaceSchemaLocation");
    prefix = attr.lookupPrefix("http://www.netzero.com");
    test.equal(prefix, "dmstc", 'nodelookupprefix17');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on the default attribute node of the p node with
   a namespaceURI and a node prefix and check if the value of the prefix returned by
   using its namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix18: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var attributesMap;
    var attr;
    var prefix;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    attributesMap = elem.attributes;

    attr = attributesMap.getNamedItem("dir");
    prefix = attr.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefix, null, 'xhtmlPrefixIsNull');
    prefix = attr.lookupPrefix("http://www.altavista.com");
    test.equal(prefix, "nm", 'nodelookupprefixB18');

    test.done()
  },

  /**
   *
   Invoke lookupPrefix on the an attribute node without a namespace prefix of
   an Element node that has a namespaceURI and prefix, and check if the value of the prefix
   returned by using the Elements namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix19: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var attributesMap;
    var attr;
    var prefix;

    doc = barfoo_nodefaultns.barfoo_nodefaultns();
    elemList = doc.getElementsByTagName("html:p");
    elem = elemList.item(0);
    attributesMap = elem.attributes;

    attr = attributesMap.getNamedItem("class");
    prefix = attr.lookupPrefix("http://www.w3.org/1999/xhtml");
    test.equal(prefix, "html", 'nodelookupprefix19');

    test.done()
  },

  /**
   *



   Invoke lookupPrefix on the an attribute node without a namespace prefix of
   an Element node that has a namespaceURI and prefix, and check if the value of the prefix
   returned by using the Elements namespaceURI as a parameter is valid.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-lookupNamespacePrefix
   */
  nodelookupprefix20: function (test) {
    var success;
    var doc;
    var elem;
    var elemList;
    var attributesMap;
    var attr;
    var prefix;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    attributesMap = elem.attributes;

    attr = attributesMap.getNamedItem("xmlns:nm");
    prefix = attr.lookupPrefix("http://www.altavista.com");
    test.equal(prefix, "nm", 'nodelookupprefix20');

    test.done()
  },

  /**
   *



   Using removeChild on this Document node attempt to remove this Document node and
   verify if a NOT_FOUND_ERR error is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild01: function (test) {
    var success;
    var doc;
    var removed;

    doc = hc_staff.hc_staff();

    {
      success = false;
      try {
        removed = doc.removeChild(doc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'NOT_FOUND_ERR_noderemovechild01');
    }

    test.done()
  },

  /**
   *
   Using removeChild on this Document node attempt to remove a new Document node and
   vice versa and verify if a NOT_FOUND_ERR error is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild02: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var removed;
    var nullDocType = null;

    var docElem;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootNS = docElem.namespaceURI;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(rootNS,rootName,nullDocType);

    {
      success = false;
      try {
        removed = doc.removeChild(newDoc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR_1');
    }

    {
      success = false;
      try {
        removed = newDoc.removeChild(doc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR_2');
    }

    test.done()
  },

  /**
   *
   Using removeChild on this DocumentElement node attempt to remove this Document node and
   verify if the DocumentElement is null.  Now try the reverse and a NOT_FOUND_ERR should be
   thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild03: function (test) {
    var success;
    var doc;
    var docElem;
    var removedChild;
    var removed;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    removed = doc.removeChild(docElem);
    removedChild = doc.documentElement;

    test.equal(removedChild, null, 'noderemovechild03');

    {
      success = false;
      try {
        removed = docElem.removeChild(doc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *



   Using removeChild on this Document node attempt to remove DocumentType node and
   verify if the DocumentType node is null.   Now try the reverse and a NOT_FOUND_ERR should be
   thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild04: function (test) {
    var success;
    var doc;
    var docType;
    var removedDocType;
    var removed;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    removed = doc.removeChild(docType);
    removedDocType = doc.doctype;

    test.equal(removedDocType, null, 'noderemovechild04');

    {
      success = false;
      try {
        removed = docType.removeChild(doc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'NOT_FOUND_ERR_noderemovechild04');
    }

    test.done()
  },

  /**
   *
   Using removeChild on this Document node attempt to remove a new DocumentType node and
   verify if the DocumentType node is null.  Attempting to remove the DocumentType
   a second type should result in a NOT_FOUND_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=417
   */
  noderemovechild05: function (test) {
    var success;
    var doc;
    var domImpl;
    var docType;
    var removedDocType;
    var nullPubId = null;

    var nullSysId = null;

    var appendedChild;
    var removedChild;

    doc = barfoo.barfoo();
    docType = doc.doctype;


    try {
      removedChild = doc.removeChild(docType);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    test.notEqual(removedChild, null, 'removedChildNotNull');
    removedDocType = doc.doctype;

    test.equal(removedDocType, null, 'noderemovechild05');

    {
      success = false;
      try {
        removedChild = docType.removeChild(doc);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'NOT_FOUND_ERR_noderemovechild05');
    }

    test.done()
  },

  /**
   *
   Attempts to remove a notation from a Document node.  Since notations are children of
   DocumentType, not Document the operation should fail with a NOT_FOUND_ERR.  Attempting
   to remove Document from a Notation should also fail either with a NOT_FOUND_ERR
   or a NO_MODIFICATION_ALLOWED_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=418
   */
  noderemovechild07: function (test) {
    var success;
    var doc;
    var docType;
    var notations;
    var notation;
    var removedChild;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    notations = docType.notations;

    notation = notations.getNamedItem("notation1");

    {
      success = false;
      try {
        removedChild = doc.removeChild(notation);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'NOT_FOUND_ERR_noderemovechild07_1');
    }

    try {
      removedChild = notation.removeChild(doc);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          break;
        case /* NO_MODIFICATION_ALLOWED_ERR */ 7 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *



   Using removeChild on this Document node attempt to remove a new Comment node and
   verify the data of the removed comment node..

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild08: function (test) {
    var success;
    var doc;
    var comment;
    var removedCmt;
    var data;
    var appendedChild;

    doc = hc_staff.hc_staff();
    comment = doc.createComment("Comment");
    appendedChild = doc.appendChild(comment);
    removedCmt = doc.removeChild(comment);
    data = removedCmt.data;

    test.equal(data, "Comment", 'noderemovechild08');

    test.done()
  },

  /**
   *



   Using removeChild on this Document node attempt to remove a new ProcessingInstruction node and
   verify the target of the removed ProcessingInstruction node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild09: function (test) {
    var success;
    var doc;
    var pi;
    var removedPi;
    var target;
    var appendedChild;

    doc = hc_staff.hc_staff();
    pi = doc.createProcessingInstruction("PIT","PID");
    appendedChild = doc.appendChild(pi);
    removedPi = doc.removeChild(pi);
    target = removedPi.target;

    test.equal(target, "PIT", 'noderemovechild09');

    test.done()
  },

  /**
   *
   Using removeChild on a new DocumentFragment node attempt to remove a new Element node and
   verify the name of the removed Element node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild10: function (test) {
    var success;
    var doc;
    var docFrag;
    var elem;
    var removedElem;
    var elemName;
    var appendedChild;
    var removedChild;

    doc = barfoo.barfoo();
    docFrag = doc.createDocumentFragment();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:br");
    appendedChild = docFrag.appendChild(elem);
    removedElem = docFrag.removeChild(elem);
    elemName = removedElem.nodeName;

    test.equal(elemName, "dom3:br", 'noderemovechild10');

    test.done()
  },

  /**
   *



   Using removeChild on a new DocumentFragment node attempt to remove a new Text node and
   verify the name of the removed Element node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild11: function (test) {
    var success;
    var doc;
    var docFrag;
    var txt;
    var removedTxt;
    var appendedChild;
    var removedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    txt = doc.createTextNode("TEXT");
    appendedChild = docFrag.appendChild(txt);
    removedChild = docFrag.removeChild(txt);
    removedTxt = docFrag.firstChild;

    test.equal(removedTxt, null, 'noderemovechild11');

    test.done()
  },

  /**
   *
   The method removeChild removes the child node indicated by oldChild from the list
   of children, and returns it.

   Using removeChild on a new DocumentFragment node attempt to remove a new EntityReference node.
   Also attempt to remove the document fragment node from the EntityReference.  Verify that a
   NO_MODIFICATION_ALLOWED_ERR (EntityReference node is read-only) or a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild12: function (test) {
    var success;
    var doc;
    var docFrag;
    var eRef;
    var removedERef;
    var appendedChild;
    var removedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    eRef = doc.createEntityReference("ent1");
    appendedChild = docFrag.appendChild(eRef);
    removedChild = docFrag.removeChild(eRef);
    removedERef = docFrag.firstChild;

    test.equal(removedERef, null, 'noderemovechild12');

    try {
      removedChild = eRef.removeChild(docFrag);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          break;
        case /* NO_MODIFICATION_ALLOWED_ERR */ 7 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   Using removeChild on a new EntityReference node attempt to remove the first child
   of this node and verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild13: function (test) {
    var success;
    var doc;
    var txt;
    var eRef;
    var removed;

    doc = hc_staff.hc_staff();
    eRef = doc.createEntityReference("alpha");
    txt = eRef.firstChild;

    test.notEqual(txt, null, 'txtNotNull');

    {
      success = false;
      try {
        removed = eRef.removeChild(txt);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on a new EntityReference node attempt to remove its last ProcessingInstruction
   child node and verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild14: function (test) {
    var success;
    var doc;
    var removed;
    var eRef;
    var pi;
    var entName;

    doc = hc_staff.hc_staff();
    eRef = doc.createEntityReference("ent4");
    pi = eRef.lastChild;

    test.notEqual(pi, null, 'piNotNull');

    {
      success = false;
      try {
        removed = eRef.removeChild(pi);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on a new EntityReference node attempt to remove an Element child
   and verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild15: function (test) {
    var success;
    var doc;
    var eRef;
    var elem;
    var entName;
    var removed;

    doc = hc_staff.hc_staff();
    eRef = doc.createEntityReference("ent4");
    elem = eRef.firstChild;

    test.notEqual(elem, null, 'elemNotNull');

    {
      success = false;
      try {
        removed = eRef.removeChild(elem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on the first 'p' Element node attempt to remove its 'em'
   Element child and verify the name of the returned node that was removed.  Now attempt
   the reverse and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild16: function (test) {
    var success;
    var doc;
    var parentList;
    var childList;
    var parent;
    var child;
    var removed;
    var removedName;
    var removedNode;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("em");
    child = parentList.item(0);
    parent = child.parentNode;

    removed = parent.removeChild(child);
    removedName = removed.nodeName;

    test.equal(removedName, "em", 'noderemovechild16');

    {
      success = false;
      try {
        removedNode = child.removeChild(parent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'NOT_FOUND_ERR_noderemovechild16');
    }

    test.done()
  },

  /**
   *
   Using removeChild on the first 'p' Element node attempt to remove a Text
   node child and verify the contents of the returned node that was removed.  Now attempt
   the reverse and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild17: function (test) {
    var success;
    var doc;
    var parentList;
    var parent;
    var child;
    var removed;
    var removedValue;
    var removedNode;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("em");
    parent = parentList.item(0);
    child = parent.firstChild;

    removed = parent.removeChild(child);
    removedValue = removed.nodeValue;

    test.equal(removedValue, "EMP0001", 'noderemovechild17');

    {
      success = false;
      try {
        removedNode = child.removeChild(parent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *



   Using removeChild on the first 'p' Element node attempt to remove a CDATASection
   node child and verify the contents of the returned node that was removed.  Now attempt
   the reverse and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild18: function (test) {
    var success;
    var doc;
    var parentList;
    var parent;
    var child;
    var removed;
    var removedValue;
    var removedNode;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("strong");
    parent = parentList.item(1);
    child = parent.lastChild;

    removed = parent.removeChild(child);
    removedValue = removed.nodeValue;

    test.equal(removedValue, "This is an adjacent CDATASection with a reference to a tab &tab;", 'noderemovechild18');

    {
      success = false;
      try {
        removedNode = child.removeChild(parent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on the first 'p' Element node attempt to remove a EntityReference
   node child and verify the nodeName of the returned node that was removed.  Attempt
   to remove a non-child from an entity reference and expect either a NOT_FOUND_ERR or
   a NO_MODIFICATION_ALLOWED_ERR.  Renove a child from an entity reference and expect
   a NO_MODIFICATION_ALLOWED_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild19: function (test) {
    var success;
    var doc;
    var parentList;
    var parent;
    var child;
    var removed;
    var removedName;
    var removedNode;
    var entRefChild;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("acronym");
    parent = parentList.item(1);
    child = parent.firstChild;

    removed = parent.removeChild(child);
    removedName = removed.nodeName;

    test.equal(removedName, "beta", 'noderemovechild19');

    try {
      removedNode = child.removeChild(parent);
      test.ok(false, 'throw_DOMException');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NO_MODIFICATION_ALLOWED_ERR */ 7 :
          break;
        case /* NOT_FOUND_ERR */ 8 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    entRefChild = child.firstChild;


    if(

      (entRefChild != null)

    ) {

      {
	success = false;
	try {
          removedNode = child.removeChild(entRefChild);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 7);
	}
	test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
      }

    }

    test.done()
  },

  /**
   *
   Using removeChild on the first 'p' Element node attempt to remove a new
   Element child and verify the name of the returned node that was removed.  Now attempt
   to do the same on a cloned child and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild20: function (test) {
    var success;
    var doc;
    var parentList;
    var childList;
    var parent;
    var child;
    var clonedChild;
    var removed;
    var removedName;
    var appendedChild;
    var removedNode;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("p");
    parent = parentList.item(0);
    child = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:br");
    appendedChild = parent.appendChild(child);
    removed = parent.removeChild(child);
    removedName = removed.nodeName;

    test.equal(removedName, "dom3:br", 'noderemovechild20');
    clonedChild = child.cloneNode(true);

    {
      success = false;
      try {
        removedNode = parent.removeChild(clonedChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on a new Element node attempt to remove a new Element child
   and verify the name of the returned node that was removed.  Now append the parent
   to the documentElement and attempt to remove the child using removeChild on the
   documentElement and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild21: function (test) {
    var success;
    var doc;
    var docElem;
    var parent;
    var child;
    var removed;
    var removedName;
    var removedNode;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    parent = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    child = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:br");
    appendedChild = parent.appendChild(child);
    appendedChild = docElem.appendChild(parent);
    removed = parent.removeChild(child);
    removedName = removed.nodeName;

    test.equal(removedName, "dom3:br", 'noderemovechild21');

    {
      success = false;
      try {
        removedNode = docElem.removeChild(child);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on a new Element node attempt to remove a new Comment child
   and verify the name of the rturned node that was removed.  Now to remove the child
   using removeChild on the parent and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild22: function (test) {
    var success;
    var doc;
    var parent;
    var child;
    var removed;
    var removedName;
    var removedNode;
    var appendedChild;

    doc = hc_staff.hc_staff();
    parent = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    child = doc.createComment("DATA");
    appendedChild = parent.appendChild(child);
    removed = parent.removeChild(child);
    removedName = removed.nodeValue;

    test.equal(removedName, "DATA", 'noderemovechild22');

    {
      success = false;
      try {
        removedNode = parent.removeChild(child);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on a new Element node attempt to remove a new ProcessingInstruction child
   and verify the name of the returned node that was removed.  Now to remove the child
   using removeChild on the parent and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild23: function (test) {
    var success;
    var doc;
    var parent;
    var child;
    var removed;
    var removedName;
    var removedNode;
    var appendedChild;

    doc = hc_staff.hc_staff();
    parent = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    child = doc.createProcessingInstruction("TARGET","DATA");
    appendedChild = parent.appendChild(child);
    removed = parent.removeChild(child);
    removedName = removed.target;

    test.equal(removedName, "TARGET", 'noderemovechild23');

    {
      success = false;
      try {
        removedNode = parent.removeChild(child);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on an Entity node attempt to remove a Text child
   and verify if a NO_MODIFICATION_ALLOWED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild24: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var alphaEntity;
    var alphaText;
    var removed;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    alphaEntity = entitiesMap.getNamedItem("alpha");
    test.notEqual(alphaEntity, null, 'alphaEntityNotNull');
    alphaText = alphaEntity.firstChild;

    test.notEqual(alphaText, null, 'alphaTextNotNull');

    {
      success = false;
      try {
        removed = alphaEntity.removeChild(alphaText);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on an Entity node attempt to remove an Element child
   and verify if a NO_MODIFICATION_ALLOWED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild25: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var ent4;
    var span;
    var removed;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    ent4 = entitiesMap.getNamedItem("ent4");
    test.notEqual(ent4, null, 'ent4NotNull');
    span = ent4.firstChild;

    test.notEqual(span, null, 'spanNotNull');

    {
      success = false;
      try {
        removed = ent4.removeChild(span);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on an Entity node attempt to remove a ProcessingInstruction child
   and verify if a NO_MODIFICATION_ALLOWED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild26: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var ent4;
    var pi;
    var removed;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    ent4 = entitiesMap.getNamedItem("ent4");
    test.notEqual(ent4, null, 'ent4NotNull');
    pi = ent4.lastChild;

    test.notEqual(pi, null, 'piNotNull');

    {
      success = false;
      try {
        removed = ent4.removeChild(pi);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   The method removeChild removes the child node indicated by oldChild from the list
   of children, and returns it.

   Using removeChild on a Notation node attempt to remove an Entity node
   and verify if a NO_MODIFICATION_ALLOWED_ERR or a NOT_FOUND_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild27: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var notationsMap;
    var child;
    var parent;
    var removed;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    notationsMap = docType.notations;

    child = entitiesMap.getNamedItem("ent1");
    parent = notationsMap.getNamedItem("notation1");

    try {
      removed = parent.removeChild(child);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          break;
        case /* NO_MODIFICATION_ALLOWED_ERR */ 7 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   Using removeChild on an Attribute node attempt to remove its Text child node and
   and verify the name of the returned node that was removed.  Now attempt the reverse
   and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild28: function (test) {
    var success;
    var doc;
    var parentList;
    var attrsMap;
    var parent;
    var child;
    var elem;
    var removed;
    var removedName;
    var removedNode;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("acronym");
    elem = parentList.item(0);
    attrsMap = elem.attributes;

    parent = attrsMap.getNamedItem("xsi:noNamespaceSchemaLocation");
    child = parent.firstChild;

    removed = parent.removeChild(child);
    removedName = removed.nodeValue;

    test.equal(removedName, "Yes", 'noderemovechild28');

    {
      success = false;
      try {
        removedNode = child.removeChild(parent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'NOT_FOUND_ERR_noderemovechild28');
    }

    test.done()
  },

  /**
   *
   Using removeChild on a namespace Attribute node attempt to remove its Text child node and
   and verify the name of the returned node that was removed.  Now attempt the reverse
   and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild29: function (test) {
    var success;
    var doc;
    var parentList;
    var attrsMap;
    var parent;
    var child;
    var elem;
    var removed;
    var removedName;
    var removedNode;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("p");
    elem = parentList.item(0);
    attrsMap = elem.attributes;

    parent = attrsMap.getNamedItem("xmlns:dmstc");
    child = parent.firstChild;

    removed = parent.removeChild(child);
    removedName = removed.nodeValue;

    test.equal(removedName, "http://www.usa.com", 'noderemovechild29');

    {
      success = false;
      try {
        removedNode = child.removeChild(parent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *



   Using removeChild on a default Attribute node attempt to remove its Text child node and
   and verify the name of the returned node that was removed.  Now attempt the reverse
   and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild30: function (test) {
    var success;
    var doc;
    var parentList;
    var attrsMap;
    var parent;
    var child;
    var elem;
    var removed;
    var removedNode;
    var removedName;
    var appendedChild;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("p");
    elem = parentList.item(3);
    attrsMap = elem.attributes;

    parent = attrsMap.getNamedItem("dir");
    child = parent.firstChild;

    removed = parent.removeChild(child);
    removedName = removed.nodeValue;

    test.equal(removedName, "rtl", 'noderemovechild30');

    {
      success = false;
      try {
        removedNode = child.removeChild(parent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Using removeChild on a default Attribute node attempt to remove its EntityReference child node and
   and verify the name of the returned node that was removed.  Now attempt the reverse
   and verify if a NO_MODIFICATION_ALLOWED_ERR or NOT_FOUND_ERR is thrown.
   Then remove an child of the entity reference and expect a NO_MODIFICATION_ALLOWED_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-1734834066
   */
  noderemovechild31: function (test) {
    var success;
    var doc;
    var parentList;
    var attrsMap;
    var parent;
    var child;
    var entRef;
    var elem;
    var removed;
    var removedNode;
    var removedName;
    var appendedChild;
    var entRefChild;

    doc = hc_staff.hc_staff();
    parentList = doc.getElementsByTagName("acronym");
    elem = parentList.item(3);
    attrsMap = elem.attributes;

    parent = attrsMap.getNamedItem("class");
    entRef = doc.createEntityReference("delta");
    appendedChild = parent.appendChild(entRef);
    child = parent.lastChild;

    removed = parent.removeChild(child);
    removedName = removed.nodeName;

    test.equal(removedName, "delta", 'noderemovechild31');

    try {
      removedNode = child.removeChild(parent);
      test.ok(false, 'throw_DOMException');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NO_MODIFICATION_ALLOWED_ERR */ 7 :
          break;
        case /* NOT_FOUND_ERR */ 8 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    entRefChild = child.firstChild;


    if(

      (entRefChild != null)

    ) {

      {
	success = false;
	try {
          removedNode = child.removeChild(entRefChild);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 7);
	}
	test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
      }

    }

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.


   Using replaceChild on this Document node attempt to replace this Document node with itself
   and verify if a HIERARCHY_REQUEST_ERR error or a NOT_FOUND_ERR (since oldChild
   is not a child of this node) is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild01: function (test) {
    var success;
    var doc;
    var replaced;

    doc = hc_staff.hc_staff();

    try {
      replaced = doc.replaceChild(doc,doc);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          break;
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.

   Using replaceChild on this Document node attempt to replace this DocumentType node with
   its DocumentType (replacing node with itself -- implementation dependent)

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild02: function (test) {
    var success;
    var doc;
    var docType;
    var replaced;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    replaced = doc.replaceChild(docType,docType);

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.

   Using replaceChild on this Document node attempt to replace this Document node with
   a new DocumentNode and verify if a HIERARCHY_REQUEST_ERR, WRONG_DOCUMENT_ERR
   or NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild03: function (test) {
    var success;
    var doc;
    var newDoc;
    var domImpl;
    var nullDocType = null;

    var replaced;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM","dom3:doc",nullDocType);

    try {
      replaced = doc.replaceChild(newDoc,doc);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          break;
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        case /* WRONG_DOCUMENT_ERR */ 4 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.

   Using replaceChild on this Document node attempt to replace this DocumentElement node with
   this Document Node and verify if a HIERARCHY_REQUEST_ERR or a NOT_FOUND_ERR error is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild04: function (test) {
    var success;
    var doc;
    var docElem;
    var replaced;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;


    try {
      replaced = doc.replaceChild(doc,docElem);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          break;
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   Using replaceChild on this Document node attempt to replace this DocumentElement node
   with one of its child elements and verify if the name of the replaced documentElement Node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild06: function (test) {
    var success;
    var doc;
    var docElem;
    var replaced;
    var elem;
    var childList;
    var nodeName;
    var replacedNode;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    childList = doc.getElementsByTagName("p");
    elem = childList.item(0);

    try {
      replacedNode = doc.replaceChild(elem,docElem);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    replaced = doc.documentElement;

    nodeName = replaced.nodeName;

    test.equal(nodeName, "p", 'nodereplacechild06');

    test.done()
  },

  /**
   *
   Using replaceChild on this Document node attempt to replace this DocumentElement node
   with  a new element and verify if the name of the replaced documentElement Node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild07: function (test) {
    var success;
    var doc;
    var docElem;
    var replaced;
    var elem;
    var nodeName;
    var replacedNode;
    var rootNS;
    var rootName;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    elem = doc.createElementNS(rootNS,rootName);

    try {
      replacedNode = doc.replaceChild(elem,docElem);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    replaced = doc.documentElement;

    nodeName = replaced.nodeName;

    test.equal(nodeName, rootName, 'nodereplacechild07');

    test.done()
  },

  /**
   *
   Using replaceChild on this Document node attempt to replace this DocumentElement node
   with  a new element that was created in another document and verify if a
   WRONG_DOCUMENT_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild08: function (test) {
    var success;
    var doc;
    var doc2;
    var docElem;
    var elem;
    var nodeName;
    var replaced;
    var rootNS;
    var rootName;
    var domImpl;
    var nullDocType = null;


    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    domImpl = getImplementation();
    doc2 = domImpl.createDocument(rootNS,rootName,nullDocType);
    elem = doc2.createElementNS(rootNS,rootName);

    try {
      replaced = doc.replaceChild(elem,docElem);
      test.ok(false, 'throw_WRONG_DOCUMENT_OR_NOT_SUPPORTED');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* WRONG_DOCUMENT_ERR */ 4 :
          break;
        case /* NOT_SUPPORTED_ERR */ 9 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.

   Using replaceChild on this Document node attempt to replace an Entity node with
   a notation node of retieved from the DTD of another document and verify if a
   NOT_FOUND_ERR or WRONG_DOCUMENT_ERR or HIERARCHY_REQUEST err is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild10: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var ent;
    var doc1;
    var docType1;
    var notationsMap;
    var notation;
    var replaced;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    ent = entitiesMap.getNamedItem("alpha");

    doc1 = hc_staff.hc_staff();
    docType1 = doc1.doctype;

    notationsMap = docType1.notations;

    notation = notationsMap.getNamedItem("notation1");

    try {
      replaced = doc.replaceChild(notation,ent);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_FOUND_ERR */ 8 :
          break;
        case /* WRONG_DOCUMENT_ERR */ 4 :
          break;
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   Using replaceChild on this Document node, attempt to replace a new ProcessingInstruction
   node with new Comment node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=416
   */
  nodereplacechild12: function (test) {
    var success;
    var doc;
    var pi;
    var replaced;
    var comment;
    var lastChild;
    var nodeName;
    var replacedNode;
    var appendedChild;

    doc = barfoo.barfoo();
    comment = doc.createComment("dom3:doc");
    pi = doc.createProcessingInstruction("PITarget","PIData");
    appendedChild = doc.appendChild(comment);
    appendedChild = doc.appendChild(pi);
    replacedNode = doc.replaceChild(comment,pi);
    test.notEqual(replacedNode, null, 'returnValueNotNull');
    nodeName = replacedNode.nodeName;

    test.equal(nodeName, "PITarget", 'returnValueIsPI');
    lastChild = doc.lastChild;

    test.notEqual(lastChild, null, 'lastChildNotNull');
    nodeName = lastChild.nodeName;

    test.equal(nodeName, "#comment", 'lastChildIsComment');

    test.done()
  },

  /**
   *
   Using replaceChild on this Document node attempt to replace this DocumentType node with
   a new DocumentType and verify the name of the replaced DocumentType node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild13: function (test) {
    var success;
    var doc;
    var docType;
    var newDocType;
    var replaced;
    var domImpl;
    var nodeName;
    var nullPubId = null;

    var nullSysId = null;

    var docElem;
    var docElemName;
    var docElemNS;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    docElemName = docElem.tagName;

    docElemNS = docElem.namespaceURI;

    docType = doc.doctype;

    domImpl = doc.implementation;
    newDocType = domImpl.createDocumentType(docElemName,nullPubId,nullSysId);

    try {
      replaced = doc.replaceChild(newDocType,docType);

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    nodeName = replaced.nodeName;

    test.equal(nodeName, docElemName, 'nodereplacechild13');

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.

   Using replaceChild on the documentElement of a newly created Document node, attempt to replace an
   element child of this documentElement node with a child that was imported from another document.
   Verify the nodeName of the replaced element node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild14: function (test) {
    var success;
    var doc;
    var newDoc;
    var docElem;
    var elem;
    var elem2;
    var imported;
    var replaced;
    var domImpl;
    var nodeName;
    var appendedChild;
    var nullDocType = null;


    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/DOM/Test","dom3:doc1elem");
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/test","dom3:doc",nullDocType);
    elem2 = newDoc.createElementNS("http://www.w3.org/DOM/Test","dom3:doc2elem");
    imported = newDoc.importNode(elem,true);
    docElem = newDoc.documentElement;

    appendedChild = docElem.appendChild(imported);
    appendedChild = docElem.appendChild(elem2);
    replaced = docElem.replaceChild(imported,elem2);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "dom3:doc2elem", 'nodereplacechild14');

    test.done()
  },

  /**
   *
   Using replaceChild on a DocumentFragment node attempt to replace an Element node with
   another Element and the replaced element.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild15: function (test) {
    var success;
    var doc;
    var docFrag;
    var elem;
    var elem2;
    var replaced;
    var domImpl;
    var title;
    var appendedChild;
    var docElem;
    var rootName;
    var rootNS;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    elem = doc.createElementNS(rootNS,rootName);
    domImpl = doc.implementation;
    docFrag = doc.createDocumentFragment();
    elem2 = doc.createElementNS(rootNS,rootName);
    elem2.setAttribute("title","new element");
    appendedChild = docFrag.appendChild(elem2);
    replaced = docFrag.replaceChild(elem,elem2);
    title = replaced.getAttribute("title");
    test.equal(title, "new element", 'nodereplacechild15');

    test.done()
  },

  /**
   *
   Using replaceChild on a DocumentFragment node attempt to replace an Element node with
   another Element and verify the name of the replaced Element node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild16: function (test) {
    var success;
    var doc;
    var docFrag;
    var elem;
    var txt;
    var replaced;
    var nodeName;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    docFrag = doc.createDocumentFragment();
    txt = doc.createTextNode("Comment");
    appendedChild = docFrag.appendChild(txt);
    appendedChild = docFrag.appendChild(elem);
    replaced = docFrag.replaceChild(txt,elem);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "dom3:p", 'nodereplacechild16');

    test.done()
  },

  /**
   *



   Using replaceChild on a DocumentFragment node attempt to replace a Comment node with
   a ProcessingInstruction and vice versa verify the data of the replaced nodes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild17: function (test) {
    var success;
    var doc;
    var docFrag;
    var pi;
    var cmt;
    var replacedCmt;
    var replacedPi;
    var data;
    var target;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    cmt = doc.createComment("Comment");
    pi = doc.createProcessingInstruction("target","Comment");
    appendedChild = docFrag.appendChild(pi);
    appendedChild = docFrag.appendChild(cmt);
    replacedCmt = docFrag.replaceChild(pi,cmt);
    data = replacedCmt.data;

    test.equal(data, "Comment", 'nodereplacechild17_1');
    replacedPi = docFrag.replaceChild(cmt,pi);
    target = replacedPi.target;

    test.equal(target, "target", 'nodereplacechild17_2');

    test.done()
  },

  /**
   *
   Using replaceChild on a DocumentFragment node attempt to replace a CDATASection node with
   a EntityReference and vice versa verify the data of the replaced nodes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild18: function (test) {
    var success;
    var doc;
    var docFrag;
    var entRef;
    var cdata;
    var replacedCData;
    var replacedEref;
    var cdataName;
    var erefName;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    cdata = doc.createCDATASection("CDATASection");
    entRef = doc.createEntityReference("alpha");
    appendedChild = docFrag.appendChild(entRef);
    appendedChild = docFrag.appendChild(cdata);
    replacedCData = docFrag.replaceChild(entRef,cdata);
    cdataName = replacedCData.nodeValue;

    test.equal(cdataName, "CDATASection", 'nodereplacechild18_1');
    replacedEref = docFrag.replaceChild(cdata,entRef);
    erefName = replacedEref.nodeName;

    test.equal(erefName, "alpha", 'nodereplacechild18_2');

    test.done()
  },

  /**
   *
   Using replaceChild on a DocumentFragment node attempt to replace an Element node with
   its EntityReference child verify the nodeName of the replaced node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild19: function (test) {
    var success;
    var doc;
    var docFrag;
    var entRef;
    var elem;
    var replaced;
    var nodeName;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    entRef = doc.createEntityReference("alpha");
    appendedChild = elem.appendChild(entRef);
    appendedChild = docFrag.appendChild(elem);
    replaced = docFrag.replaceChild(entRef,elem);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "dom3:p", 'nodereplacechild19');

    test.done()
  },

  /**
   *
   Using replaceChild on a DocumentFragment node attempt to replace an Element node with
   an Attr Node and verify if a HIERARCHY_REQUEST_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild20: function (test) {
    var success;
    var doc;
    var docFrag;
    var attr;
    var elem;
    var replaced;
    var nodeName;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    appendedChild = docFrag.appendChild(elem);

    {
      success = false;
      try {
        replaced = docFrag.replaceChild(attr,elem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.

   Using replaceChild on this DocumentType node attempt to replace an Entity node with
   a notation node of retieved from the DTD of another document and verify if a
   NO_MODIFICATION_ALLOWED_ERR is thrown since DocumentType node is read-only.
   Also try replacing the docType with an entity node and see if the same exception gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild21: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var ent;
    var doc1;
    var docType1;
    var notationsMap;
    var notation;
    var replacedChild;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    ent = entitiesMap.getNamedItem("alpha");

    doc1 = hc_staff.hc_staff();
    docType1 = doc1.doctype;

    notationsMap = docType1.notations;

    notation = notationsMap.getNamedItem("notation1");

    {
      success = false;
      try {
        replacedChild = docType.replaceChild(notation,ent);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'NO_MODIFICATION_ALLOWED_ERR1_nodereplacechild21');
    }

    {
      success = false;
      try {
        replacedChild = docType.replaceChild(ent,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'NO_MODIFICATION_ALLOWED_ERR2_nodereplacechild21');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on a new EntityReference node attempt to replace an EntityReference node with
   its Element parent, with itself and vice versa verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild22: function (test) {
    var success;
    var doc;
    var entRefMain;
    var entRef;
    var elem;
    var appendedChild;
    var replacedChild;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    entRefMain = doc.createEntityReference("delta");
    entRef = doc.createEntityReference("beta");
    appendedChild = elem.appendChild(entRef);

    {
      success = false;
      try {
        replacedChild = entRefMain.replaceChild(elem,entRef);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_1');
    }

    {
      success = false;
      try {
        replacedChild = entRefMain.replaceChild(entRef,elem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_2');
    }

    {
      success = false;
      try {
        replacedChild = entRefMain.replaceChild(entRefMain,entRef);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_3');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on a new EntityReference node attempt to replace an Element, Text,
   Comment, ProcessingInstruction and CDATASection nodes with each other and in each case
   verify if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild23: function (test) {
    var success;
    var doc;
    var entRef;
    var txt;
    var elem;
    var comment;
    var pi;
    var cdata;
    var replaced;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:p");
    entRef = doc.createEntityReference("delta");
    txt = doc.createTextNode("Text");
    comment = doc.createComment("Comment");
    cdata = doc.createCDATASection("CDATASection");
    pi = doc.createProcessingInstruction("target","data");
    appendedChild = elem.appendChild(entRef);
    appendedChild = elem.appendChild(txt);
    appendedChild = elem.appendChild(comment);
    appendedChild = elem.appendChild(pi);
    appendedChild = elem.appendChild(cdata);

    {
      success = false;
      try {
        replaced = entRef.replaceChild(cdata,elem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_1');
    }

    {
      success = false;
      try {
        replaced = entRef.replaceChild(pi,cdata);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_2');
    }

    {
      success = false;
      try {
        replaced = entRef.replaceChild(comment,pi);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_3');
    }

    {
      success = false;
      try {
        replaced = entRef.replaceChild(txt,comment);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_4');
    }

    {
      success = false;
      try {
        replaced = entRef.replaceChild(elem,txt);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_5');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on an EntityReference node attempt to replace an Element node with
   an EntityReference node verify if a NO_MODIFICATION_ALLOWED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild24: function (test) {
    var success;
    var doc;
    var childList;
    var entRef;
    var elem;
    var replaced;
    var nodeName;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    elem = childList.item(1);
    entRef = elem.firstChild;


    {
      success = false;
      try {
        replaced = entRef.replaceChild(entRef,elem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on an Element node attempt to replace an
   EntityReference or Text child node
   with an Entity node and with itself and verify if a HIERARCHY_REQUEST_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild25: function (test) {
    var success;
    var doc;
    var docType;
    var entities;
    var entity;
    var childList;
    var entRef;
    var elem;
    var replaced;
    var nodeName;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entities = docType.entities;

    entity = entities.getNamedItem("alpha");
    childList = doc.getElementsByTagName("acronym");
    elem = childList.item(1);
    entRef = elem.firstChild;


    {
      success = false;
      try {
        replaced = elem.replaceChild(entity,entRef);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR_1');
    }

    {
      success = false;
      try {
        replaced = elem.replaceChild(elem,entRef);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR_2');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on an Element node attempt to replace a Text child node with an Element
   node that is an ancestor of this Element node and verify if a HIERARCHY_REQUEST_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild26: function (test) {
    var success;
    var doc;
    var childList;
    var docElem;
    var elem;
    var firstChild;
    var nodeName;
    var replaced;

    doc = hc_staff.hc_staff();
    docElem = doc.documentElement;

    childList = doc.getElementsByTagName("p");
    elem = childList.item(0);
    firstChild = elem.firstChild;


    {
      success = false;
      try {
        replaced = elem.replaceChild(docElem,firstChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.

   Using replaceChild on an Element node attempt to replace an Element node with another
   Element from another document and verify if a WRONG_DOCUMENT_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild27: function (test) {
    var success;
    var doc;
    var doc2;
    var childList;
    var childList2;
    var elem2;
    var elem;
    var firstChild;
    var nodeName;
    var replaced;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagNameNS("*","p");
    elem = childList.item(0);
    firstChild = elem.firstChild;


    doc2 = hc_staff.hc_staff();
    childList2 = doc2.getElementsByTagNameNS("*","p");
    elem2 = childList2.item(0);

    {
      success = false;
      try {
        replaced = elem.replaceChild(elem2,firstChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'WRONG_DOCUMENT_ERR_nodereplacechild27');
    }

    test.done()
  },

  /**
   *
   Attempt to replace a text node with a text node from an
   entity reference. Since the replacing text node should be removed
   from its current location first, a NO_MODIFICATION_ALLOWED_ERR should
   be thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild28: function (test) {
    var success;
    var doc;
    var childList;
    var acronym;
    var betaRef;
    var dallas;
    var betaText;
    var appendedChild;
    var replacedChild;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("acronym");
    acronym = childList.item(1);
    betaRef = acronym.firstChild;

    test.notEqual(betaRef, null, 'betaRefNotNull');
    betaText = betaRef.firstChild;

    test.notEqual(betaText, null, 'betaTextNotNull');
    dallas = betaRef.nextSibling;

    test.notEqual(dallas, null, 'dallasNotNull');

    {
      success = false;
      try {
        replacedChild = acronym.replaceChild(betaText,dallas);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on an Element node attempt to replace a new Element node with
   another new Element node and verify if a NOT_FOUND_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild29: function (test) {
    var success;
    var doc;
    var childList;
    var elem;
    var oldChild;
    var newChild;
    var replaced;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("p");
    elem = childList.item(0);
    oldChild = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:br");
    newChild = doc.createElementNS("http://www.w3.org/1999/xhtml","dom3:span");

    {
      success = false;
      try {
        replaced = elem.replaceChild(newChild,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *



   Using replaceChild on an Element node attempt to replace a new Element child node with
   new child nodes and vice versa and in each case verify the name of the replaced node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild30: function (test) {
    var success;
    var doc;
    var parent;
    var oldChild;
    var newElement;
    var newText;
    var newComment;
    var newPI;
    var newCdata;
    var newERef;
    var replaced;
    var nodeName;
    var appendedChild;

    doc = hc_staff.hc_staff();
    parent = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:html");
    oldChild = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:head");
    newElement = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:body");
    appendedChild = parent.appendChild(oldChild);
    appendedChild = parent.appendChild(newElement);
    newText = doc.createTextNode("Text");
    appendedChild = parent.appendChild(newText);
    newComment = doc.createComment("Comment");
    appendedChild = parent.appendChild(newComment);
    newPI = doc.createProcessingInstruction("target","data");
    appendedChild = parent.appendChild(newPI);
    newCdata = doc.createCDATASection("Cdata");
    appendedChild = parent.appendChild(newCdata);
    newERef = doc.createEntityReference("delta");
    appendedChild = parent.appendChild(newERef);
    replaced = parent.replaceChild(newElement,oldChild);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "xhtml:head", 'nodereplacechild30_1');
    replaced = parent.replaceChild(oldChild,newElement);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "xhtml:body", 'nodereplacechild30_2');
    replaced = parent.replaceChild(newText,oldChild);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "xhtml:head", 'nodereplacechild30_3');
    replaced = parent.replaceChild(oldChild,newText);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "#text", 'nodereplacechild30_4');
    replaced = parent.replaceChild(newComment,oldChild);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "xhtml:head", 'nodereplacechild30_5');
    replaced = parent.replaceChild(oldChild,newComment);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "#comment", 'nodereplacechild30_6');
    replaced = parent.replaceChild(oldChild,newPI);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "target", 'nodereplacechild30_7');
    replaced = parent.replaceChild(oldChild,newCdata);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "#cdata-section", 'nodereplacechild30_8');
    replaced = parent.replaceChild(oldChild,newERef);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "delta", 'nodereplacechild30_9');

    test.done()
  },

  /**
   *
   Using replaceChild on an Element node that is the replacement Text of an EntityReference
   node, attempt to replace its Text child node with a new Element node and verify if
   a NO_MODIFICATION_ALLOWED_ERR gets thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild31: function (test) {
    var success;
    var doc;
    var childList;
    var elem;
    var span;
    var ent4Ref;
    var spanText;
    var newChild;
    var replaced;

    doc = hc_staff.hc_staff();
    childList = doc.getElementsByTagName("var");
    elem = childList.item(2);
    ent4Ref = elem.firstChild;

    span = ent4Ref.firstChild;

    test.notEqual(span, null, 'spanNotNull');
    spanText = span.firstChild;

    test.notEqual(spanText, null, 'spanTextNotNull');
    newChild = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:p");

    {
      success = false;
      try {
        replaced = span.replaceChild(newChild,spanText);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   The method replaceChild replaces the child node oldChild with newChild in the list of
   children, and returns the oldChild node.

   Using replaceChild on an Attr node to replace its EntityReference Child with a
   new Text Node and verify the name of the replaced child.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild32: function (test) {
    var success;
    var doc;
    var childList;
    var elem;
    var parent;
    var oldChild;
    var newChild;
    var replaced;
    var nodeName;
    var nodeType;
    var enRef;
    var enRefChild;
    var reference = "entity1";

    doc = hc_staff.hc_staff();
    newChild = doc.createTextNode("Text");
    childList = doc.getElementsByTagNameNS("*","acronym");
    elem = childList.item(3);
    parent = elem.getAttributeNode("class");
    enRef = doc.createEntityReference(reference);
    enRefChild = parent.appendChild(enRef);
    replaced = parent.replaceChild(newChild,enRefChild);
    nodeName = replaced.nodeName;

    test.equal(nodeName, "entity1", 'nodereplacechild32');

    test.done()
  },

  /**
   *
   Using replaceChild on a default Attr node to replace its Text Child with a
   new EntityReference Node and verify the value of the replaced child.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild33: function (test) {
    var success;
    var doc;
    var childList;
    var elem;
    var parent;
    var oldChild;
    var newChild;
    var replaced;
    var nodeValue;

    doc = hc_staff.hc_staff();
    newChild = doc.createEntityReference("delta");
    childList = doc.getElementsByTagName("p");
    elem = childList.item(3);
    parent = elem.getAttributeNode("dir");
    oldChild = parent.lastChild;

    replaced = parent.replaceChild(newChild,oldChild);
    nodeValue = replaced.nodeValue;

    test.equal(nodeValue, "rtl", 'nodereplacechild33');

    test.done()
  },

  /**
   *
   Using replaceChild on a new Attr node, replace its new EntityReference Child with a
   new Text Node and verify the value of the new child.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild34: function (test) {
    var success;
    var doc;
    var parent;
    var oldChild;
    var newChild;
    var nodeValue;
    var appendedChild;
    var replaced;

    doc = hc_staff.hc_staff();
    parent = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    oldChild = doc.createEntityReference("delta");
    appendedChild = parent.appendChild(oldChild);
    newChild = doc.createTextNode("Text");
    replaced = parent.replaceChild(newChild,oldChild);
    nodeValue = parent.value;

    test.equal(nodeValue, "Text", 'nodereplacechild34');

    test.done()
  },

  /**
   *
   Using replaceChild on a new Attr node, replace its new EntityRefernece Child with a
   new Attr Node and verify if a HIERARCHY_REQUEST_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild35: function (test) {
    var success;
    var doc;
    var parent;
    var oldChild;
    var newChild;
    var nodeValue;
    var appendedChild;
    var replaced;

    doc = hc_staff.hc_staff();
    parent = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    oldChild = doc.createEntityReference("delta");
    appendedChild = parent.appendChild(oldChild);
    newChild = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");

    {
      success = false;
      try {
        replaced = parent.replaceChild(newChild,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on a new Attr node, replace its new EntityRefernece node with a
   new Text Node and verify if a NOT_FOUND_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild36: function (test) {
    var success;
    var doc;
    var parent;
    var oldChild;
    var newChild;
    var nodeValue;
    var replaced;

    doc = hc_staff.hc_staff();
    parent = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    oldChild = doc.createEntityReference("delta");
    newChild = doc.createTextNode("Text");

    {
      success = false;
      try {
        replaced = parent.replaceChild(newChild,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on a new Attr node, replace its new Text node with a
   new EntityReference Node created by another document and verify if a
   WRONG_DOCUMENT_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild37: function (test) {
    var success;
    var doc;
    var doc2;
    var parent;
    var oldChild;
    var newChild;
    var nodeValue;
    var replaced;
    var appendedChild;

    doc = hc_staff.hc_staff();

    doc2 = hc_staff.hc_staff();
    parent = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    oldChild = doc.createTextNode("Text");
    newChild = doc2.createEntityReference("delta");
    appendedChild = parent.appendChild(oldChild);

    {
      success = false;
      try {
        replaced = parent.replaceChild(newChild,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    }

    test.done()
  },

  /**
   *
   Using replaceChild on an Entity node attempt to replace its Text child with new Text,
   Comment, ProcessingInstruction and CDATASection nodes and in each case verify if
   a NO_MODIFICATION_ALLOWED_ERR is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild38: function (test) {
    var success;
    var doc;
    var docType;
    var entitiesMap;
    var ent;
    var oldChild;
    var entRef;
    var txt;
    var elem;
    var comment;
    var pi;
    var cdata;
    var replaced;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitiesMap = docType.entities;

    ent = entitiesMap.getNamedItem("alpha");
    test.notEqual(ent, null, 'alphaEntity');
    oldChild = ent.firstChild;

    test.notEqual(oldChild, null, 'alphaText');
    cdata = doc.createCDATASection("CDATASection");

    {
      success = false;
      try {
        replaced = ent.replaceChild(cdata,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR1');
    }
    pi = doc.createProcessingInstruction("target","data");

    {
      success = false;
      try {
        replaced = ent.replaceChild(pi,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR2');
    }
    comment = doc.createComment("Comment");

    {
      success = false;
      try {
        replaced = ent.replaceChild(comment,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR3');
    }
    txt = doc.createTextNode("Text");

    {
      success = false;
      try {
        replaced = ent.replaceChild(txt,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR4');
    }
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:p");

    {
      success = false;
      try {
        replaced = ent.replaceChild(elem,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR5');
    }
    entRef = doc.createEntityReference("delta");

    {
      success = false;
      try {
        replaced = ent.replaceChild(entRef,oldChild);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR6');
    }

    test.done()
  },

  /**
   *
   Attempt to add a second document element by a replacing a trailing comment.  The attempt should result
   in a HIERARCHY_REQUEST_ERR or NOT_SUPPORTED_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild39: function (test) {
    var success;
    var doc;
    var docElem;
    var rootName;
    var rootNS;
    var newComment;
    var newElement;
    var retNode;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    rootNS = docElem.namespaceURI;

    newElement = doc.createElementNS(rootNS,rootName);
    newComment = doc.createComment("second element goes here");
    retNode = doc.appendChild(newComment);

    try {
      retNode = doc.replaceChild(newElement,newComment);
      test.ok(false, 'throw_HIERARCHY_REQUEST_OR_NOT_SUPPORTED');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        case /* NOT_SUPPORTED_ERR */ 9 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  /**
   *
   Attempt to add a second document element by a comment.  The attempt should result
   in a HIERARCHY_REQUEST_ERR or NOT_SUPPORTED_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-785887307
   */
  nodereplacechild40: function (test) {
    var success;
    var doc;
    var docElem;
    var rootName;
    var publicId = null;

    var systemId = null;

    var newComment;
    var newDocType;
    var domImpl;
    var retNode;

    doc = barfoo.barfoo();
    docElem = doc.documentElement;

    rootName = docElem.tagName;

    domImpl = doc.implementation;
    newDocType = domImpl.createDocumentType(rootName,publicId,systemId);
    newComment = doc.createComment("second element goes here");
    retNode = doc.insertBefore(newComment,docElem);

    try {
      retNode = doc.replaceChild(newDocType,newComment);
      test.ok(false, 'throw_HIERARCHY_REQUEST_OR_NOT_SUPPORTED');

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
          break;
        case /* NOT_SUPPORTED_ERR */ 9 :
          break;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }

    test.done()
  },

  // Set textContent to null clears children.
  nodesettextcontentnull: function (test) {
    var doc = hc_staff.hc_staff();
    var elem = doc.createElementNS("http://www.w3.org/DOM/Test","dom3:elem");
    elem.textContent = "ELEMENT";
    elem.textContent = null;

    test.equal(elem.textContent, null, 'nodesettextcontentnull');

    test.done();
  },

  /**
   *
   Attempt to set textContent for a Document node and check that the document appears
   to be unaffected.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent01: function (test) {
    var success;
    var doc;
    var nodeName;
    var elemList;
    var elem;

    doc = hc_staff.hc_staff();
    doc.textContent = "textContent";

    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(3);
    test.notEqual(elem, null, 'stillHasAcronyms');
    nodeName = elem.nodeName;

    test.equal(nodeName, "acronym", 'nodesettextcontent01');

    test.done()
  },

  /**
   *
   The method setTextContent has no effect when the node is defined to be null.

   Using setTextContent on a new Document node, attempt to set the textContent of this
   new Document node to textContent.  Check if it was not set by checking the nodeName
   attribute of a new Element of this Document node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent02: function (test) {
    var success;
    var doc;
    var domImpl;
    var newDoc;
    var nodeName;
    var elemChild;
    var newElem;
    var elemList;
    var nullDocType = null;

    var appendedChild;
    var documentElem;

    doc = hc_staff.hc_staff();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","dom3:elem",nullDocType);
    newElem = newDoc.createElementNS("http://www.w3.org/DOM/Test","dom3:childElem");
    documentElem = newDoc.documentElement;

    appendedChild = documentElem.appendChild(newElem);
    newDoc.textContent = "textContent";

    elemList = newDoc.getElementsByTagNameNS("*","childElem");
    elemChild = elemList.item(0);
    nodeName = elemChild.nodeName;

    test.equal(nodeName, "dom3:childElem", 'nodesettextcontent02');

    test.done()
  },

  /**
   *


   Using setTextContent on this DocumentType node, attempt to set the textContent of this
   DocumentType node to textContent.  Retrieve the textContent and verify if it is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent03: function (test) {
    var success;
    var doc;
    var docType;
    var textContent;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    docType.textContent = "textContent";

    textContent = docType.textContent;

    test.equal(textContent, null, 'nodesettextcontent03');

    test.done()
  },

  /**
   *


   Using setTextContent on this DocumentType node, attempt to set the textContent of a
   Notation node to textContent.  Retrieve the textContent and verify if it is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent04: function (test) {
    var success;
    var doc;
    var docType;
    var notationsMap;
    var notation1;
    var textContent;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    notationsMap = docType.notations;

    notation1 = notationsMap.getNamedItem("notation1");
    notation1.textContent = "textContent";

    textContent = notation1.textContent;

    test.equal(textContent, null, 'nodesettextcontent04');

    test.done()
  },

  /**
   *


   Using setTextContent on a default Attr node, attempt to set its value to NA.  Retrieve
   the textContent and verify if it is was set to NA.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent05: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var attr;
    var textContent;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(3);
    attr = elem.getAttributeNode("dir");
    attr.textContent = "NA";

    textContent = attr.textContent;

    test.equal(textContent, "NA", 'nodesettextcontent05');

    test.done()
  },

  /**
   *


   Using setTextContent on a new Attr node with a null value, attempt to set its value to NA.  Retrieve
   the textContent and verify if it is was set to NA.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent06: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var attr;
    var attrNode;
    var textContent;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    attr = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:lang");
    attrNode = elem.setAttributeNodeNS(attr);
    attr.textContent = "NA";

    textContent = attr.textContent;

    test.equal(textContent, "NA", 'nodesettextcontent06');

    test.done()
  },

  /**
   *


   Using setTextContent on an existing Text node, attempt to set its value to Text.
   Retrieve the textContent and verify if it is was set to Text.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent07: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var txt;
    var textContent;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    txt = elem.firstChild;

    txt.textContent = "Text";

    textContent = txt.textContent;

    test.equal(textContent, "Text", 'nodegettextcontent10');

    test.done()
  },

  /**
   *


   Using setTextContent on a new Processing Instruction node, attempt to set its data to PID.
   Retrieve the textContent and verify if it is was set to PID.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent08: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var pi;
    var textContent;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:p");
    pi = doc.createProcessingInstruction("PIT","PID");
    appendedChild = elem.appendChild(pi);
    pi.textContent = "PID";

    textContent = pi.textContent;

    test.equal(textContent, "PID", 'nodesettextcontent08');

    test.done()
  },

  /**
   *
   The method setTextContent has no effect when the node is defined to be null.

   Using setTextContent on a new Element node, attempt to set its content to ELEMENT.
   Retrieve the textContent and verify if it is was set to ELEMENT.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent10: function (test) {
    var success;
    var doc;
    var elem;
    var txt;
    var comment;
    var entRef;
    var cdata;
    var pi;
    var textContent;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/DOM/Test","dom3:elem");
    txt = doc.createTextNode("Text ");
    comment = doc.createComment("Comment ");
    entRef = doc.createEntityReference("ent1");
    pi = doc.createProcessingInstruction("PIT","PIData ");
    cdata = doc.createCDATASection("CData");
    appendedChild = elem.appendChild(txt);
    appendedChild = elem.appendChild(comment);
    appendedChild = elem.appendChild(entRef);
    appendedChild = elem.appendChild(pi);
    appendedChild = elem.appendChild(cdata);
    elem.textContent = "ELEMENT";

    textContent = elem.textContent;

    test.equal(textContent, "ELEMENT", 'nodesettextcontent10');

    test.done()
  },

  /**
   *


   Using setTextContent on a new DocumentFragment node Element child, attempt to set its content to
   DOCUMENTFRAGMENT.  Retrieve the textContent and verify if it is was set to DOCUMENTFRAGMENT

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent11: function (test) {
    var success;
    var doc;
    var docFrag;
    var elem;
    var elemChild;
    var txt;
    var comment;
    var entRef;
    var cdata;
    var pi;
    var textContent;
    var appendedChild;

    doc = hc_staff.hc_staff();
    docFrag = doc.createDocumentFragment();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","xhtml:p");
    txt = doc.createTextNode("Text ");
    comment = doc.createComment("Comment ");
    entRef = doc.createEntityReference("alpha");
    pi = doc.createProcessingInstruction("PIT","PIData ");
    cdata = doc.createCDATASection("CData");
    appendedChild = elem.appendChild(txt);
    appendedChild = elem.appendChild(comment);
    appendedChild = elem.appendChild(entRef);
    appendedChild = elem.appendChild(pi);
    appendedChild = elem.appendChild(cdata);
    appendedChild = docFrag.appendChild(elem);
    elem.textContent = "DOCUMENTFRAGMENT";

    elemChild = docFrag.lastChild;

    textContent = elemChild.textContent;

    test.equal(textContent, "DOCUMENTFRAGMENT", 'nodegettextcontent11');

    test.done()
  },

  /**
   *


   Using setTextContent on a new EntityReference node, attempt to set its value.
   Since EntityReference nodes are ReadOnly, check if a NO_MODIFICATION_ALLOWED_ERR
   is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent12: function (test) {
    var success;
    var doc;
    var elem;
    var entRef;
    var textContent;
    var appendedChild;

    doc = hc_staff.hc_staff();
    elem = doc.documentElement;

    entRef = doc.createEntityReference("beta");
    appendedChild = elem.appendChild(entRef);

    {
      success = false;
      try {
        entRef.textContent = "NA";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'nodesettextcontent12');
    }

    test.done()
  },

  /**
   *


   Using setTextContent on an Entity node, attempt to set its replacement text.
   Since Entity nodes are ReadOnly, check if a NO_MODIFICATION_ALLOWED_ERR
   is raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-textContent
   */
  nodesettextcontent13: function (test) {
    var success;
    var doc;
    var docType;
    var entity;
    var entitymap;
    var textContent;

    doc = hc_staff.hc_staff();
    docType = doc.doctype;

    entitymap = docType.entities;

    entity = entitymap.getNamedItem("delta");

    {
      success = false;
      try {
        entity.textContent = "NA";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'nodesettextcontent13');
    }

    test.done()
  },

  /**
   *


   Using setUserData with null values for the UserData and the handler parameters, check
   if returned the current userData object of this Document node is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata01: function (test) {
    var doc = hc_staff.hc_staff();
    var prevUserData = doc.setUserData('something', null, null);
    test.equal(prevUserData, null, 'nodesetuserdata01');
    test.done()
  },

  /**
   *


   Using setUserData with values for the UserData as this Document and the handler as null
   parameters, check if returned the current userData object of this Document node is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata02: function (test) {
    var doc = hc_staff.hc_staff();
    var prevUserData = doc.setUserData('something', 'test', null);
    test.equal(prevUserData, null, 'nodesetuserdata02');
    test.done()
  },

  /**
   *
   Invoke setUserData on this Document to set this Documents UserData to a new
   Element node.  Do the same with a new Text node and using isNodeEqual verify
   the returned Element UserData object.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata03: function (test) {
    var doc = hc_staff.hc_staff();
    var elem = doc.createElementNS('http://www.w3.org/1999/xhtml', 'xhtml:p');
    var txt = doc.createTextNode('TEXT');
    doc.setUserData('Key1', elem, null);
    var retUserData = doc.setUserData('Key1', txt, null);
    test.ok(retUserData.isEqualNode(elem), 'nodesetuserdata03');
    test.done()
  },

  /**
   *


   Invoke setUserData on a new Element to set its UserData to a new Text node
   twice using different Keys.  Using getUserData with each Key and isNodeEqual
   verify if the returned nodes are Equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata04: function (test) {
    var doc = hc_staff.hc_staff();
    var elem = doc.createElementNS('http://www.w3.org/1999/xhtml', 'p');
    var txt = doc.createTextNode('TEXT');
    elem.setUserData('Key1', txt, null);
    elem.setUserData('Key2', txt, null);
    var returned1 = elem.getUserData('Key1');
    var returned2 = elem.getUserData('Key2');
    test.ok(returned1.isEqualNode(returned2), 'nodesetuserdata04');
    test.done()
  },

  /**
   *


   Invoke setUserData on a new Attr to set its UserData to two Document nodes
   obtained by parsing the same xml document.  Using getUserData and isNodeEqual
   verify if the returned nodes are Equal.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata05: function (test) {
    var doc = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    var attr = doc.createAttributeNS('http://www.w3.org/XML/1998/namespace', 'lang');
    attr.setUserData('Key1', doc, null);
    attr.setUserData('Key2', doc2, null);
    var returned1 = attr.getUserData('Key1');
    var returned2 = attr.getUserData('Key2');
    test.ok(returned1.isEqualNode(returned2), 'nodesetuserdata05');
    test.done()
  },

  /**
   *


   Invoke setUserData on a new Comment to set its UserData to an Entity node
   twice using the same key.  Verify if the UserData object that was by the
   second setUserData is the same as original Entity.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata06: function (test) {
    var doc = hc_staff.hc_staff();
    var entity = doc.doctype.entities.getNamedItem('delta');
    var comment = doc.createComment('COMMENT_NODE');
    comment.setUserData('Key1', entity, null);
    var returned = comment.setUserData('Key1', entity, null);
    test.ok(returned.isEqualNode(entity), 'nodesetuserdata06');
    test.done()
  },

  /**
   *


   Invoke setUserData on a Notation to set its UserData to a Comment node
   twice using the same key.  Verify if the UserData object that was returned
   by second setUserData is the Comment node set in the first setUserData call.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata07: function (test) {
    var doc = hc_staff.hc_staff();
    var notation = doc.doctype.notations.getNamedItem('notation1');
    var comment = doc.createComment('COMMENT_NODE');
    notation.setUserData('Key1', comment, null);
    var returned = notation.setUserData('Key1', comment, null);
    test.ok(returned.isEqualNode(comment), 'nodesetuserdata07');
    test.done()
  },

  /**
   *
   Invoke setUserData on a CDATASection and EntityReference node to set their
   UserData to this Document and DocumentElement node.  Verify if the UserData
   object that was set for both nodes is different.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata08: function (test) {
    var doc = hc_staff.hc_staff();
    var entRef = doc.createEntityReference('delta');
    var cData = doc.createCDATASection('CDATASection');
    entRef.setUserData('Key1', doc, null);
    cData.setUserData('Key2', doc.documentElement, null);
    var returned1 = entRef.getUserData('Key1');
    var returned2 = cData.getUserData('Key2');
    test.equal(returned1.isEqualNode(returned2), false, 'nodesetuserdata08');
    test.done()
  },

  /**
   *


   Invoke setUserData on this documentElement node to set its UserData to
   this Document node.  Invoke getUserData on this Document node with the same
   key of the UserData that was just set on the documentElement node and verify
   if the returned node is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata09: function (test) {
    var doc = hc_staff.hc_staff();
    doc.documentElement.setUserData('Key1', doc, null);
    test.equal(doc.getUserData('Key1'), null, 'nodesetuserdata09');
    test.done()
  },

  /**
   *
   Invoke setUserData on a CDATASection and EntityReference node to set their
   UserData to this Document and DocumentElement node.  Verify if the UserData
   object that was set for both nodes is different.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Node3-setUserData
   */
  nodesetuserdata10: function (test) {
    var doc = hc_staff.hc_staff();
    var entRef = doc.getElementsByTagName('var').item(2).firstChild;
    var cData = doc.createCDATASection('CDATASection');
    entRef.setUserData('Key1', doc, null);
    cData.setUserData('Key2', doc.documentElement, null);
    var returned1 = entRef.getUserData('Key1');
    var returned2 = cData.getUserData('Key2');
    test.equal(returned1.isEqualNode(returned2), false, 'nodesetuserdata10');
    test.done()
  },

  /**
   *
   Normalize document with normalize-characters set to false, check that
   characters are not normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  normalizecharacters01: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("normalize-characters", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = doc.createTextNode("suçon");
    retval = pElem.appendChild(text);
    doc.normalizeDocument();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = pElem.firstChild;

    textValue = text.nodeValue;

    test.equal(textValue, "barsucon", 'noCharNormalization');

    test.done()
  },

  /**
   *
   Normalize document with normalize-characters set to true, check that
   characters are normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  normalizecharacters02: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;
    var canSet;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("normalize-characters",true);

    if(
      canSet
    ) {
      domConfig.setParameter("normalize-characters", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = doc.createTextNode("suçon");
      retval = pElem.appendChild(text);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = pElem.firstChild;

      textValue = text.nodeValue;

      test.equal(textValue, "barsuçon", 'charNormalized');

    }

    test.done()
  },

  /**
   *
   Normalize an element with normalize-characters set to false, check that
   characters are not normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  normalizecharacters03: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("normalize-characters", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = doc.createTextNode("suçon");
    retval = pElem.appendChild(text);
    pElem.normalize();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = pElem.firstChild;

    textValue = text.nodeValue;

    test.equal(textValue, "barsucon", 'noCharNormalization');

    test.done()
  },

  /**
   *
   Normalize an element with normalize-characters set to true, check that
   characters are normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  normalizecharacters04: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;
    var canSet;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("normalize-characters",true);

    if(
      canSet
    ) {
      domConfig.setParameter("normalize-characters", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = doc.createTextNode("suçon");
      retval = pElem.appendChild(text);
      pElem.normalize();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = pElem.firstChild;

      textValue = text.nodeValue;

      test.equal(textValue, "barsuçon", 'noCharNormalization');

    }

    test.done()
  },

  /**
   *
   Normalize an document (using Node.normalize) with normalize-characters set to false, check that
   characters are not normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  normalizecharacters05: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("normalize-characters", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = doc.createTextNode("suçon");
    retval = pElem.appendChild(text);
    doc.normalize();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = pElem.firstChild;

    textValue = text.nodeValue;

    test.equal(textValue, "barsucon", 'noCharNormalization');

    test.done()
  },

  /**
   *
   Normalize a document (using Node.normalize) with normalize-characters set to true, check that
   characters are normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  normalizecharacters06: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;
    var canSet;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("normalize-characters",true);

    if(
      canSet
    ) {
      domConfig.setParameter("normalize-characters", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = doc.createTextNode("suçon");
      retval = pElem.appendChild(text);
      doc.normalize();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = pElem.firstChild;

      textValue = text.nodeValue;

      test.equal(textValue, "barsuçon", 'noCharNormalization');

    }

    test.done()
  },

  /**
   *
   Normalize a text node with normalize-characters set to false, check that
   characters are not normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  normalizecharacters07: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    domConfig.setParameter("normalize-characters", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = doc.createTextNode("suçon");
    retval = pElem.appendChild(text);
    retval.normalize();
    errorMonitor.assertLowerSeverity("normalizeError", 2);
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    text = pElem.lastChild;

    textValue = text.nodeValue;

    test.equal(textValue, "sucon", 'noCharNormalization');

    test.done()
  },

  /**
   *
   Normalize a text node with normalize-characters set to true, check that
   characters are normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-normalize-characters
   * @see http://www.w3.org/TR/2003/WD-charmod-20030822/
   */
  normalizecharacters08: function (test) {
    var success;
    var doc;
    var docElem;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var pList;
    var pElem;
    var text;
    var textValue;
    var retval;
    var canSet;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("normalize-characters",true);

    if(
      canSet
    ) {
      domConfig.setParameter("normalize-characters", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = doc.createTextNode("suçon");
      retval = pElem.appendChild(text);
      retval.normalize();
      errorMonitor.assertLowerSeverity("normalizeError", 2);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      text = pElem.lastChild;

      textValue = text.nodeValue;

      test.equal(textValue, "suçon", 'noCharNormalization');

    }

    test.done()
  },

  /**
   *
   Add a CDATASection containing "]]>" and call Node.normalize which should not
   split or raise warning.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-normalize
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-split-cdata-sections
   */
  splitcdatasections01: function (test) {
    var success;
    var doc;
    var elem;
    var domConfig;
    var elemList;
    var newChild;
    var oldChild;
    var retval;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();


    doc = barfoo.barfoo();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    oldChild = elem.firstChild;

    newChild = doc.createCDATASection("this is not ]]> good");
    retval = elem.replaceChild(newChild,oldChild);
    domConfig = doc.domConfig;

    domConfig.setParameter("split-cdata-sections", false);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalize();
    errorMonitor.assertLowerSeverity("noErrors", 2);

    test.done()
  },

  /**
   *
   Invoke isElementContentWhitespace on a newly created Text Node that contains only whitespace.
   Should be false since there is no content model to determine if the node appears within element content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-isElementContentWhitespace
   */
  textiselementcontentwhitespace01: function (test) {
    var success;
    var doc;
    var newText;
    var hasWhitespace;

    doc = barfoo.barfoo();
    newText = doc.createTextNode("   ");
    hasWhitespace = newText.isElementContentWhitespace;

    test.equal(hasWhitespace, false, 'isWhitespace');

    test.done()
  },

  /**
   *
   Get the text node child of the "p" element in barfoo.  isElementContentWhitespace should
   be false since the node is neither whitespace or in element content.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-isElementContentWhitespace
   */
  textiselementcontentwhitespace02: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var textNode;
    var isElemContentWhitespace;

    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    textNode = pElem.firstChild;

    isElemContentWhitespace = textNode.isElementContentWhitespace;

    test.equal(isElemContentWhitespace, false, 'notElemContentOrWhitespace');

    test.done()
  },

  /**
   *
   Get the newline between the "body" and "p" element.  Since node is both in element content
   and whitespace, isElementContentWhitespace should return true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-isElementContentWhitespace
   */
  textiselementcontentwhitespace03: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var textNode;
    var isElemContentWhitespace;

    doc = barfoo.barfoo();
    pList = doc.getElementsByTagName("p");
    pElem = pList.item(0);
    textNode = pElem.previousSibling;

    isElemContentWhitespace = textNode.isElementContentWhitespace;

    test.ok(isElemContentWhitespace, 'isElementContentWhitespace');

    test.done()
  },

  /**
   *
   Replace the text node child of the "p" element in barfoo with whitespace and normalize with validation.
   isElementContentWhitespace should be false since the node is not in element content.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-isElementContentWhitespace
   */
  textiselementcontentwhitespace04: function (test) {
    var success;
    var doc;
    var pList;
    var pElem;
    var textNode;
    var blankNode;
    var returnedNode;
    var isElemContentWhitespace;
    var domConfig;
    var canSetValidation;
    var replacedNode;

    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSetValidation = domConfig.canSetParameter("validate",true);

    if(
      canSetValidation
    ) {
      domConfig.setParameter("validate", true);
      pList = doc.getElementsByTagName("p");
      pElem = pList.item(0);
      textNode = pElem.firstChild;

      blankNode = doc.createTextNode("   ");
      replacedNode = pElem.replaceChild(blankNode,textNode);
      doc.normalizeDocument();
      textNode = pElem.firstChild;

      isElemContentWhitespace = textNode.isElementContentWhitespace;

      test.equal(isElemContentWhitespace, false, 'notElemContent');

    }

    test.done()
  },

  /**
   *
   Replace the whitespace before the "p" element in barfoo with non-whitespace and normalize with validation.
   isElementContentWhitespace should be false since the node is not whitespace.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-isElementContentWhitespace
   */
  textiselementcontentwhitespace05: function (test) {
    var success;
    var doc;
    var bodyList;
    var bodyElem;
    var textNode;
    var nonBlankNode;
    var returnedNode;
    var isElemContentWhitespace;
    var domConfig;
    var canSetValidation;
    var refChild;
    errorMonitor = new DOMErrorMonitor();


    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSetValidation = domConfig.canSetParameter("validate",true);

    if(
      canSetValidation
    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      bodyList = doc.getElementsByTagName("body");
      bodyElem = bodyList.item(0);
      refChild = bodyElem.firstChild;

      nonBlankNode = doc.createTextNode("not blank");
      returnedNode = bodyElem.insertBefore(nonBlankNode,refChild);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("noErrors", 2);
      bodyList = doc.getElementsByTagName("body");
      bodyElem = bodyList.item(0);
      textNode = bodyElem.firstChild;

      isElemContentWhitespace = textNode.isElementContentWhitespace;

      test.equal(isElemContentWhitespace, false, 'notElemContent');

    }

    test.done()
  },

  /**
   *
   Insert whitespace before the "p" element in barfoo and normalize with validation.
   isElementContentWhitespace should be true since the node is whitespace and in element content.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-isElementContentWhitespace
   */
  textiselementcontentwhitespace06: function (test) {
    var success;
    var doc;
    var bodyList;
    var bodyElem;
    var refChild;
    var textNode;
    var blankNode;
    var returnedNode;
    var isElemContentWhitespace;
    var domConfig;
    var canSetValidation;
    var replacedNode;
    errorMonitor = new DOMErrorMonitor();


    doc = barfoo.barfoo();
    domConfig = doc.domConfig;

    canSetValidation = domConfig.canSetParameter("validate",true);

    if(
      canSetValidation
    ) {
      domConfig.setParameter("validate", true);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      bodyList = doc.getElementsByTagName("body");
      bodyElem = bodyList.item(0);
      refChild = bodyElem.firstChild;

      blankNode = doc.createTextNode("     ");
      replacedNode = bodyElem.insertBefore(blankNode,refChild);
      doc.normalizeDocument();
      errorMonitor.assertLowerSeverity("noErrors", 2);
      bodyList = doc.getElementsByTagName("body");
      bodyElem = bodyList.item(0);
      textNode = bodyElem.firstChild;

      isElemContentWhitespace = textNode.isElementContentWhitespace;

      test.ok(isElemContentWhitespace, 'isElemContentWhitespace');

    }

    test.done()
  },

  /**
   *
   Invoke replaceWholeText on an existing Text Node to replace its value with a
   new value containing white space characters.  Verify the replaceWholeText by
   verifying the values returned by wholeText
   of the returned Text node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-replaceWholeText
   */
  textreplacewholetext01: function (test) {
    var success;
    var doc;
    var itemList;
    var elementName;
    var textNode;
    var replacedText;
    var wholeText;

    doc = hc_staff.hc_staff();
    itemList = doc.getElementsByTagName("strong");
    elementName = itemList.item(0);
    textNode = elementName.firstChild;

    replacedText = textNode.replaceWholeText("New Content");
    wholeText = replacedText.wholeText;

    test.equal(wholeText, "New Content", 'textreplacewholetext01_1');

    test.done()
  },

  /**
   *
   Invoke replaceWholeText on an existing Text Node to replace its value with an
   empty string value.  Verify the repalceWholeText method by verifying if the value
   returned is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-replaceWholeText
   */
  textreplacewholetext02: function (test) {
    var success;
    var doc;
    var itemList;
    var elementName;
    var textNode;
    var replacedText;

    doc = hc_staff.hc_staff();
    itemList = doc.getElementsByTagName("strong");
    elementName = itemList.item(0);
    textNode = elementName.firstChild;

    replacedText = textNode.replaceWholeText("");
    test.equal(replacedText, null, 'textreplacewholetext02');

    test.done()
  },

  /**
   *
   Invoke replaceWholeText on an new Text Node to replace its value with a
   new value.  Verify the repalceWholeText by verifying the values returned by
   wholeText of the returned Text node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-replaceWholeText
   */
  textreplacewholetext03: function (test) {
    var success;
    var doc;
    var textNode;
    var replacedText;
    var wholeText;

    doc = hc_staff.hc_staff();
    textNode = doc.createTextNode("New Text");
    replacedText = textNode.replaceWholeText(" a b c b ");
    wholeText = replacedText.wholeText;

    test.equal(wholeText, " a b c b ", 'textreplacewholetext03');

    test.done()
  },

  /**
   *
   Invoke replaceWholeText on an new Text Node to replace its value with an
   empty value.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-replaceWholeText
   */
  textreplacewholetext04: function (test) {
    var success;
    var doc;
    var textNode;
    var replacedText;
    var wholeText;

    doc = hc_staff.hc_staff();
    textNode = doc.createTextNode("New Text");
    replacedText = textNode.replaceWholeText("");
    test.equal(replacedText, null, 'retvalIsNull');

    test.done()
  },

  /**
   *
   Invoke replaceWholeText on an existing text node with newly created text and CDATASection
   nodes appended as children of its parent element node.  Verify repalceWholeText by
   verifying the values returned by wholeText.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-replaceWholeText
   */
  textreplacewholetext05: function (test) {
    var success;
    var doc;
    var itemList;
    var elementName;
    var textNode;
    var cdataNode;
    var replacedText;
    var wholeText;
    var appendedChild;

    doc = hc_staff.hc_staff();
    itemList = doc.getElementsByTagName("strong");
    elementName = itemList.item(0);
    textNode = doc.createTextNode("New Text");
    cdataNode = doc.createCDATASection("New CDATA");
    appendedChild = elementName.appendChild(textNode);
    appendedChild = elementName.appendChild(cdataNode);
    textNode = elementName.firstChild;

    replacedText = textNode.replaceWholeText("New Text and Cdata");
    wholeText = replacedText.wholeText;

    test.equal(wholeText, "New Text and Cdata", 'textreplacewholetext05');

    test.done()
  },

  /**
   *
   The method replaceWholeText substitutes the a specified text for the text of
   the current node and all logically-adjacent text nodes.  This method raises
   a NO_MODIFICATION_ALLOWED_ERR if one of the Text nodes being replaced is readonly.

   Invoke replaceWholeText on an existing text node with newly created text and Entityreference
   nodes (whose replacement text is a character entity reference) appended as children of its parent element node.
   Where the nodes to be removed are read-only descendants of an EntityReference, the EntityReference
   must be removed instead of the read-only nodes. Only if any EntityReference to be removed has
   descendants that are not EntityReference, Text, or CDATASection nodes, the replaceWholeText
   method must fail, raising a NO_MODIFICATION_ALLOWED_ERR. Verify that the method does not raise
   an exception and verify the content of the returned text node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-replaceWholeText
   */
  textreplacewholetext06: function (test) {
    var success;
    var doc;
    var itemList;
    var elementStrong;
    var textNode;
    var erefNode;
    var replacedText;
    var appendedChild;
    var nodeValue;

    doc = hc_staff.hc_staff();
    itemList = doc.getElementsByTagName("strong");
    elementStrong = itemList.item(0);
    textNode = doc.createTextNode("New Text");
    erefNode = doc.createEntityReference("beta");
    appendedChild = elementStrong.appendChild(textNode);
    appendedChild = elementStrong.appendChild(erefNode);
    textNode = elementStrong.firstChild;

    replacedText = textNode.replaceWholeText("New Text and Cdata");
    nodeValue = textNode.nodeValue;

    test.equal(nodeValue, "New Text and Cdata", 'textreplacewholetext06');

    test.done()
  },

  /**
   *
   Append an entity reference and a text node after to the content of the
   first strong element.  Then call replaceWholeText on initial content
   of that element.  Since the entity reference does not contain any
   logically-adjacent text content, only the initial text element should
   be replaced.

   * @author IBM
   * @author Neil Delima
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-replaceWholeText
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=425
   */
  textreplacewholetext07: function (test) {
    var success;
    var doc;
    var itemList;
    var elementName;
    var textNode;
    var erefNode;
    var replacedText;
    var appendedChild;
    var node;
    var nodeValue;
    var nodeType;

    doc = hc_staff.hc_staff();
    itemList = doc.getElementsByTagName("strong");
    elementName = itemList.item(0);
    erefNode = doc.createEntityReference("ent4");
    textNode = doc.createTextNode("New Text");
    appendedChild = elementName.appendChild(erefNode);
    appendedChild = elementName.appendChild(textNode);
    textNode = elementName.firstChild;

    replacedText = textNode.replaceWholeText("New Text and Cdata");
    textNode = elementName.firstChild;

    test.equal(replacedText, textNode, 'retval_same');
    nodeValue = textNode.nodeValue;

    test.equal(nodeValue, "New Text and Cdata", 'nodeValueSame');
    node = textNode.nextSibling;

    test.notEqual(node, null, 'secondChildNotNull');
    nodeType = node.nodeType;

    test.equal(nodeType, 5, 'secondChildIsEntRef');

    test.done()
  },

  /**
   *
   Appends an entity reference containing text and an element to an existing
   text node, then calls Text.replaceWholeText on the existing text node.
   A NO_MODIFICATION_ALLOWED_ERR should be thrown.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-replaceWholeText
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=425
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=540
   */
  textreplacewholetext08: function (test) {
    var success;
    var doc;
    var itemList;
    var p;
    var entRef;
    var node;

    doc = barfoo.barfoo();
    itemList = doc.getElementsByTagName("p");
    p = itemList.item(0);
    entRef = doc.createEntityReference("ent2");
    node = p.appendChild(entRef);
    node = p.firstChild;


    {
      success = false;
      try {
        node = node.replaceWholeText("yo");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }

    test.done()
  },

  /**
   *
   Invoke wholetext on an existing Text Node that contains whitespace and verify if
   the value returned is correct.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-wholeText
   */
  textwholetext01: function (test) {
    var success;
    var doc;
    var itemList;
    var elementName;
    var textNode;
    var nameWholeText;

    doc = hc_staff.hc_staff();
    itemList = doc.getElementsByTagName("strong");
    elementName = itemList.item(0);
    textNode = elementName.firstChild;

    nameWholeText = textNode.wholeText;

    test.equal(nameWholeText, "Margaret Martin", 'textwholetext01');

    test.done()
  },

  /**
   *
   Invoke wholetext on an existing Text Node that contains whitespace and and verify if
   the value returned is correct.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-wholeText
   */
  textwholetext02: function (test) {
    var success;
    var doc;
    var itemList;
    var elementName;
    var textNode;
    var newTextNode;
    var wholeText;
    var appendedChild;

    doc = hc_staff.hc_staff();
    itemList = doc.getElementsByTagName("strong");
    elementName = itemList.item(0);
    newTextNode = doc.createTextNode("New Text");
    appendedChild = elementName.appendChild(newTextNode);
    textNode = elementName.firstChild;

    wholeText = textNode.wholeText;

    test.equal(wholeText, "Margaret MartinNew Text", 'textwholetext02');

    test.done()
  },

  /**
   *
   Invoke wholetext on two newly created text nodes and verify if the value returned
   is correct.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Text3-wholeText
   */
  textwholetext03: function (test) {
    var success;
    var doc;
    var elem;
    var text1;
    var text2;
    var appendedChild;
    var combinedText;

    doc = hc_staff.hc_staff();
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","p");
    text1 = doc.createTextNode("Text I");
    text2 = doc.createTextNode(" Text II");
    appendedChild = elem.appendChild(text1);
    appendedChild = elem.appendChild(text2);
    combinedText = text1.wholeText;

    test.equal(combinedText, "Text I Text II", 'textwholetext03');

    test.done()
  },

  /**
   *
   The typeName attribute states the name of a type declared for the associated element or
   attribute, or null if unknown.

   Invoke getSchemaTypeInfo method on an attribute having [type definition] property.  Expose
   {name} and {target namespace} properties of the [type definition] property.
   Verify that the typeName of id's schemaTypeInfo are correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   */
  typeinfogettypename03: function (test) {
    var success;
    var doc;
    var elemList;
    var attrid;
    var acElem;
    var attrTypeInfo;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acElem = elemList.item(2);
    attrid = acElem.getAttributeNode("id");
    attrTypeInfo = attrid.schemaTypeInfo;

    typeName = attrTypeInfo.typeName;

    test.equal(typeName, "ID", 'typeinfogettypename03_1');

    test.done()
  },

  /**
   *
   The typeName attribute states the name of a type declared for the associated element or
   attribute, or null if unknown.

   Invoke getSchemaTypeInfo method on an attribute having [member type definition]property.  Expose
   {name} and {target namespace} properties of the [member type definition] property.
   Verify that the typeName of an em element's schemaTypeInfo is correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   */
  typeinfogettypename04: function (test) {
    var success;
    var doc;
    var docElem;
    var elemList;
    var emElem;
    var elemTypeInfo;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    emElem = elemList.item(0);
    elemTypeInfo = emElem.schemaTypeInfo;

    typeName = elemTypeInfo.typeName;

    test.equal(typeName, "emType", 'typeinfogettypename04_1');

    test.done()
  },

  /**
   *
   The typeNamespace attribute states the namespace of a type declared for the associated element or
   attribute, or null if unknown.

   Invoke getSchemaTypeInfo method on an attribute having [type definition] property.  Expose
   {name} and {target namespace} properties of the [type definition] property.
   Verify that the typeNamespace of the attrib1 and attrib3's schemaTypeInfo are correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeNamespace
   */
  typeinfogettypenamespace01: function (test) {
    var success;
    var doc;
    var elemList;
    var acElem;
    var titleAttr;
    var attrTypeInfo;
    var typeNamespace;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acElem = elemList.item(0);
    titleAttr = acElem.getAttributeNode("title");
    attrTypeInfo = titleAttr.schemaTypeInfo;

    typeNamespace = attrTypeInfo.typeNamespace;

    test.equal(typeNamespace, "http://www.w3.org/2001/XMLSchema", 'typeinfogettypename01_1');

    test.done()
  },

  /**
   *
   The typeNamespace attribute states the namespace of a type declared for the associated element or
   attribute, or null if unknown.

   Invoke getSchemaTypeInfo method on an attribute having [type definition] property.  Expose
   {name} and {target namespace} properties of the [type definition] property.
   Verify that the typeName of class's schemaTypeInfo is correct.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   */
  typeinfogettypenamespace03: function (test) {
    var success;
    var doc;
    var elemList;
    var classAttr;
    var attrTypeInfo;
    var typeNamespace;
    var acElem;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acElem = elemList.item(1);
    classAttr = acElem.getAttributeNode("class");
    attrTypeInfo = classAttr.schemaTypeInfo;

    typeNamespace = attrTypeInfo.typeNamespace;

    test.equal(typeNamespace, "http://www.w3.org/1999/xhtml", 'typeinfogettypename03_1');

    test.done()
  },

  /**
   *
   The typeName attribute states the name of a type declared for the associated element or
   attribute, or null if unknown.

   Invoke getSchemaTypeInfo method on an attribute having [member type definition]property.  Expose
   {name} and {target namespace} properties of the [member type definition] property.
   Verify that the typeNamespace of eldblUnionA's schemaTypeInfo is null??? (sv)

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-typeName
   */
  typeinfogettypenamespace04: function (test) {
    var success;
    var doc;
    var elemList;
    var emElem;
    var elemTypeInfo;
    var typeNamespace;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    emElem = elemList.item(0);
    elemTypeInfo = emElem.schemaTypeInfo;

    typeNamespace = elemTypeInfo.typeNamespace;

    test.equal(typeNamespace, "http://www.w3.org/1999/xhtml", 'typeinfogettypenamespace04_1');

    test.done()
  },

  /**
   *
   DTD types always return false for isDerivedFrom.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom01: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(0);
    attr = acronymElem.getAttributeNode("title");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/TR/REC-xml","CDATA",0);
    test.equal(isDerived, false, 'isDerived0');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/TR/REC-xml","CDATA",15);
    test.equal(isDerived, false, 'isDerived15');

    test.done()
  },

  /**
   *
   Check how xsd:string is derived from itself.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom02: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(0);
    attr = acronymElem.getAttributeNode("title");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",1);
    test.ok(isDerived, 'derivedFromSelfRestriction');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",14);
    test.equal(isDerived, false, 'derivedFromSelfOther');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",0);
    test.ok(isDerived, 'derivedFromSelfAny');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",15);
    test.ok(isDerived, 'derivedFromSelfAll');

    test.done()
  },

  /**
   *
   Check that isDerivedFrom does considers xsd:string to be derived from anySimpleType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom03: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(0);
    attr = acronymElem.getAttributeNode("title");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "string", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",15);
    test.ok(isDerived, 'derivedFromAnySimpleType');

    test.done()
  },

  /**
   *
   Check if xsd:string is derived from xsd:anyType by any method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom04: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(0);
    attr = acronymElem.getAttributeNode("title");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "string", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",15);
    test.ok(isDerived, 'derivedFromAnyType');

    test.done()
  },

  /**
   *
   Check if xsd:string is derived from xsd:anyType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom05: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(0);
    attr = acronymElem.getAttributeNode("title");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "string", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",1);
    test.ok(isDerived, 'derivedFromAnyTypeRestrictionOnly');

    test.done()
  },

  /**
   *
   Check if xsd:string is derived from xsd:anyType by any method except restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom06: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(0);
    attr = acronymElem.getAttributeNode("title");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "string", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",14);
    test.equal(isDerived, false, 'derivedFromAnyTypeExceptRestriction');

    test.done()
  },

  /**
   *
   Check if xsd:string is derived from xsd:anyType using 0 as derivation method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom07: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(0);
    attr = acronymElem.getAttributeNode("title");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "string", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",0);
    test.ok(isDerived, 'derivedFromAnyType0');

    test.done()
  },

  /**
   *
   Check if classType is derived from xsd:string by any method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom08: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    attr = acronymElem.getAttributeNode("class");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "classType", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",15);
    test.ok(isDerived, 'derivedFromString');

    test.done()
  },

  /**
   *
   Check if classType is derived from xsd:anySimpleType by any method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom09: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    attr = acronymElem.getAttributeNode("class");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "classType", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",15);
    test.ok(isDerived, 'derivedFromAnySimpleType');

    test.done()
  },

  /**
   *
   Check if classType is derived from anyType by any method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom10: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    attr = acronymElem.getAttributeNode("class");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "classType", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",15);
    test.ok(isDerived, 'derivedFromAnyType');

    test.done()
  },

  /**
   *
   Check if classType is derived from xsd:anyType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom11: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    attr = acronymElem.getAttributeNode("class");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "classType", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",1);
    test.ok(isDerived, 'derivedFromAnyTypeRestrictionOnly');

    test.done()
  },

  /**
   *
   Check classType is derived from anyType specifying derivationMethod as 0.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom12: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    attr = acronymElem.getAttributeNode("class");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "classType", 'nameIsString');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",0);
    test.ok(isDerived, 'derivedFromAnyType0');

    test.done()
  },

  /**
   *
   Check if classType is derived from xsd:anyType by any method other than restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom13: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    attr = acronymElem.getAttributeNode("class");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "classType", 'name');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",14);
    test.equal(isDerived, false, 'derivedFromAnyTypeExceptRestriction');

    test.done()
  },

  /**
   *
   Check how classType is derived from itself.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom14: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    attr = acronymElem.getAttributeNode("class");
    typeInfo = attr.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "classType", 'name');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","classType",1);
    test.ok(isDerived, 'derivedFromSelfRestriction');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","classType",14);
    test.equal(isDerived, false, 'notDerivedFromSelfOther');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","classType",15);
    test.ok(isDerived, 'derivedFromSelfAll');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","classType",0);
    test.ok(isDerived, 'derivedFromSelfAny');

    test.done()
  },

  /**
   *
   Check "emType" is derived from emp0001_3Type by any method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom15: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'name');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emp0001_3Type",15);
    test.ok(isDerived, 'derivedFromEmp13AnyMethod');

    test.done()
  },

  /**
   *
   Check emType is derived from emp0001_3Type by union.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom16: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'name');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emp0001_3Type",4);
    test.ok(isDerived, 'derivedFromEmp13Union');

    test.done()
  },

  /**
   *
   Check if emType is derived from emp0001_3Type by any method other than union.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom17: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'name');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emp0001_3Type",11);
    test.equal(isDerived, false, 'derivedFromEmp13NotUnion');

    test.done()
  },

  /**
   *
   Check if emType is derived from xsd:ID by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom18: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","ID",1);
    test.equal(isDerived, false, 'derivedFromID');

    test.done()
  },

  /**
   *
   Check emType is derived from anySimpleType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom19: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",1);
    test.ok(isDerived, 'derivedFromAnySimpleType');

    test.done()
  },

  /**
   *
   Check if emType is derived from anyType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom20: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",1);
    test.ok(isDerived, 'derivedFromAnyType');

    test.done()
  },

  /**
   *
   Check if emType is derived from itself.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom21: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emType",1);
    test.ok(isDerived, 'derivedFromSelfByRestriction');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emType",14);
    test.equal(isDerived, false, 'notDerivedFromSelfOtherMethod');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emType",0);
    test.ok(isDerived, 'derivedFromSelfByAny');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emType",15);
    test.ok(isDerived, 'derivedFromSelfByAll');

    test.done()
  },

  /**
   *
   Check strongType is derived from xsd:string by any method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom22: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "strongType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",15);
    test.ok(isDerived, 'derivedFromStringAnyMethod');

    test.done()
  },

  /**
   *
   Check if strongType is derived from xsd:string by list.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom23: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "strongType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",8);
    test.ok(isDerived, 'derivedFromStringList');

    test.done()
  },

  /**
   *
   Check if strongType is derived from xsd:string by any method other than list.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom24: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "strongType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",7);
    test.equal(isDerived, false, 'derivedFromStringNotList');

    test.done()
  },

  /**
   *
   Check if strongType is derived from anySimpleType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom25: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "strongType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",1);
    test.ok(isDerived, 'derivedFromAnySimpleType');

    test.done()
  },

  /**
   *
   Check if strongType is derived from anyType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom26: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "strongType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",1);
    test.ok(isDerived, 'derivedFromAnyType');

    test.done()
  },

  /**
   *
   Check if strongType is derived from anyType by union or extension.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom27: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "strongType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",6);
    test.equal(isDerived, false, 'derivedFromAnyType');

    test.done()
  },

  /**
   *
   Check how strongType is derived from itself.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom28: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "strongType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","strongType",1);
    test.ok(isDerived, 'notDerivedFromSelfRestriction');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","strongType",14);
    test.equal(isDerived, false, 'notDerivedFromSelfOther');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","strongType",15);
    test.ok(isDerived, 'notDerivedFromSelfAll');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","strongType",0);
    test.ok(isDerived, 'notDerivedFromSelfAny');

    test.done()
  },

  /**
   *
   Check if anonymous type for p element is derived from pType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom29: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","pType",15);
    test.ok(isDerived, 'derivedFromPTypeAnyMethod');

    test.done()
  },

  /**
   *
   Check if anonymous type for p element is derived from pType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom30: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","pType",1);
    test.ok(isDerived, 'derivedFromPTypeRestriction');

    test.done()
  },

  /**
   *
   Check anonymous type for p element is derived from pType by any method other than restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom31: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","pType",14);
    test.equal(isDerived, false, 'derivedFromPTypeNotRestriction');

    test.done()
  },

  /**
   *
   Check if anonymous type of p element is derived from part1.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom32: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","part1",15);
    test.ok(isDerived, 'derivedFromPart1AnyMethod');

    test.done()
  },

  /**
   *
   Check is anonymous type of p element is derived by extension from part1.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom33: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","part1",2);
    test.ok(isDerived, 'derivedFromPart1Extension');

    test.done()
  },

  /**
   *
   Check if anonymous type of p element is derived from part1 by any method other than extension.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom34: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","part1",13);
    test.equal(isDerived, false, 'derivedFromPart1NotExtension');

    test.done()
  },

  /**
   *
   Check if anonymous type of p element is derived from xsd:simpleType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom35: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",15);
    test.equal(isDerived, false, 'derivedFromAnySimpleType');

    test.done()
  },

  /**
   *
   Check if anonymous type of p element is derived from xsd:anyType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom36: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",15);
    test.ok(isDerived, 'derivedFromAnyTypeAnyMethod');

    test.done()
  },

  /**
   *
   Check if anonymous type of p element is derived from xsd:anyType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom37: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",1);
    test.equal(isDerived, false, 'derivedFromAnyTypeRestriction');

    test.done()
  },

  /**
   *
   Check if anonymous type of p element is derived from xsd:anyType by any method other
   than extension.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom38: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",13);
    test.equal(isDerived, false, 'derivedFromAnyTypeNotExtension');

    test.done()
  },

  /**
   *
   Check if anonymous type of p element derives from itself.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom39: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;
    var typeNS;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("p");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    typeNS = typeInfo.typeNamespace;

    isDerived = typeInfo.isDerivedFrom(typeNS,typeName,15);
    test.equal(isDerived, false, 'notDerivedFromSelf');

    test.done()
  },

  /**
   *
   Check if emType is derived from xsd:ID by union.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom40: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","ID",4);
    test.ok(isDerived, 'derivedFromID');

    test.done()
  },

  /**
   *
   Check if emType is derived from xsd:ID by any method other than union or restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom41: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "emType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","ID",10);
    test.equal(isDerived, false, 'derivedFromID');

    test.done()
  },

  /**
   *
   Check if strongType is derived from anySimpleType by list.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom42: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;
    var typeName;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    typeName = typeInfo.typeName;

    test.equal(typeName, "strongType", 'typeName');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",8);
    test.ok(isDerived, 'derivedFromAnySimpleType');

    test.done()
  },

  /**
   *
   Check if anonymous type of acronym element derived from anyType by restriction.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom43: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    typeInfo = acronymElem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",1);
    test.equal(isDerived, false, 'derivedFromAnyType');

    test.done()
  },

  /**
   *
   Check if anonymous type of acronym element derived from anyType by any method other than extension.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom44: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    typeInfo = acronymElem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",13);
    test.equal(isDerived, false, 'derivedFromAnyType');

    test.done()
  },

  /**
   *
   Check if anonymous type of acronym element derived from anySimpleType by extension.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom45: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    typeInfo = acronymElem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",2);
    test.ok(isDerived, 'derivedFromAnySimpleType');

    test.done()
  },

  /**
   *
   Check if anonymous type of acronym element derived from anySimpleType by any method other than extension.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom46: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    typeInfo = acronymElem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",13);
    test.equal(isDerived, false, 'derivedFromAnySimpleType');

    test.done()
  },

  /**
   *
   Check if anonymous type of acronym element derived from xsd:string by extension.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom47: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    typeInfo = acronymElem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",2);
    test.ok(isDerived, 'derivedFromString');

    test.done()
  },

  /**
   *
   Check if anonymous type of acronym element derived from xsd:string by any method other than extension.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom48: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(2);
    typeInfo = acronymElem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",13);
    test.equal(isDerived, false, 'derivedFromString');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns true
   when asked if it derives by list from the item type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom49: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","double",8);
    test.ok(isDerived, 'derivedFromDoubleList');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns true
   when asked if it derives by any method from the item type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom50: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","double",0);
    test.ok(isDerived, 'derivedFromDoubleAny');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns false
   when asked if it derives by any method other than list from the item type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom51: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","double",7);
    test.equal(isDerived, false, 'derivedFromDoubleNonList');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns false
   when asked if it derives by restriction from anySimpleType type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom52: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",1);
    test.equal(isDerived, false, 'derivedFromAnySimpleRestriction');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns true
   when asked if it derives by extension from anySimpleType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom53: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",2);
    test.ok(isDerived, 'derivedFromAnySimpleExtension');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns true
   when asked if it derives by list from anySimpleType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom54: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anySimpleType",8);
    test.ok(isDerived, 'derivedFromAnySimpleList');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns true
   when asked if it derives by extension from anyType type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom55: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",2);
    test.ok(isDerived, 'derivedFromAnyRestriction');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns true
   when asked if it derives by extension from anyType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom56: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",2);
    test.ok(isDerived, 'derivedFromAnyExtension');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a list of a item type returns true
   when asked if it derives by list from anyType.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom57: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("acronym");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","anyType",8);
    test.ok(isDerived, 'derivedFromAnyList');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a union returns true
   when asked if it derives by union from a member type of the union.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom58: function (test) {
    var success;
    var doc;
    var elemList;
    var codeElem;
    var attr;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("code");
    codeElem = elemList.item(0);
    typeInfo = codeElem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","unbounded",4);
    test.ok(isDerived, 'isDerived');

    test.done()
  },

  /**
   *
   Check if a type derived by extension from a union returns true
   when asked if it derives by union from a restricted base of
   a member of type union.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom59: function (test) {
    var success;
    var doc;
    var elemList;
    var codeElem;
    var attr;
    var elem;
    var elemName;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("code");
    codeElem = elemList.item(0);
    typeInfo = codeElem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","integer",4);
    test.ok(isDerived, 'isDerived');

    test.done()
  },

  /**
   *
   Check if xs:IDREFS is derived by list from xs:IDREF.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom60: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var attr;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("strong");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","IDREF",8);
    test.ok(isDerived, 'isDerived');

    test.done()
  },

  /**
   *
   Check if xs:byte is derived by restriction from xs:short
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom61: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","short",1);
    test.ok(isDerived, 'isDerived');

    test.done()
  },

  /**
   *
   Check if xs:byte is derived by restriction from xs:decimal
   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom62: function (test) {
    var success;
    var doc;
    var elemList;
    var elem;
    var typeInfo;
    var isDerived;

    doc = typeinfo.typeinfo();
    elemList = doc.getElementsByTagName("em");
    elem = elemList.item(0);
    typeInfo = elem.schemaTypeInfo;

    test.notEqual(typeInfo, null, 'typeInfoNotNull');
    isDerived = typeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","decimal",1);
    test.ok(isDerived, 'isDerived');

    test.done()
  },

  /**
   *
   The isDerivedFrom method checks if this TypeInfo derives from the specified ancestor type.
   If the document's schema is a DTD or no schema is associated with the document, this method
   will always return false.

   Get schemaTypeInfo on an element that belongs to a document with an XML DTD.  Invoke method
   isDerivedFrom and verify that returned the typeNamespace is null.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom63: function (test) {
    var success;
    var doc;
    var elemList;
    var acronymElem;
    var retValue;
    var typeNamespace;
    var nullName = null;

    var elemTypeInfo;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acronymElem = elemList.item(0);
    elemTypeInfo = acronymElem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/TR/REC-xml",nullName,0);
    test.equal(retValue, false, 'typeinfoisderivedfrom63');

    test.done()
  },

  /**
   *
   Check that the simpleType of an attributes derives by restriction from itself
   and from its base type.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom64: function (test) {
    var success;
    var doc;
    var docElem;
    var elemList;
    var acElem;
    var classAttr;
    var attrTypeInfo;
    var typeName;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("acronym");
    acElem = elemList.item(1);
    classAttr = acElem.getAttributeNode("class");
    attrTypeInfo = classAttr.schemaTypeInfo;

    retValue = attrTypeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","classType",1);
    test.ok(retValue, 'derivedFromClassType');
    retValue = attrTypeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",1);
    test.ok(retValue, 'derivedFromString');

    test.done()
  },

  /**
   *
   The isDerivedFrom method checks if this TypeInfo derives from the specified ancestor type.

   Get schemaTypeInfo on a simple type attribute that belongs to a document with an XML schema.
   Invoke method isDerivedFrom with derivation method list and verify that the value returned is true.

   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom65: function (test) {
    var success;
    var doc;
    var docElem;
    var elemTypeInfo;
    var elemList;
    var strongElem;
    var attrTypeInfo;
    var typeName;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("strong");
    strongElem = elemList.item(0);
    elemTypeInfo = strongElem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",8);
    test.ok(retValue, 'lisrDerivedFromString');

    test.done()
  },

  /**
   *
   The isDerivedFrom method checks if this TypeInfo derives from the specified ancestor type.

   Get schemaTypeInfo on an element of type Union that belongs to a document with an XML schema.
   Invoke method isDerivedFrom with derivation method union and verify that the value returned is true.
   Verify that emType is derived from emp0004_5Type by union.


   * @author IBM
   * @author Jenny Hsu
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom66: function (test) {
    var success;
    var doc;
    var unionElem;
    var elemTypeInfo;
    var typeName;
    var elemList;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("em");
    unionElem = elemList.item(0);
    elemTypeInfo = unionElem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emp0004_5Type",0);
    test.ok(retValue, 'typeinfoisderivedfrom66');

    test.done()
  },

  /**
   *
   Checks that isDerivedFrom(...,METHOD_UNION) returns true when there
   are multiple union derivation steps between the target and
   ancestor type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom67: function (test) {
    var success;
    var doc;
    var elem;
    var elemTypeInfo;
    var typeName;
    var elemList;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("sup");
    elem = elemList.item(0);
    elemTypeInfo = elem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emp0004_5Type",4);
    test.ok(retValue, 'isDerived');

    test.done()
  },

  /**
   *
   Checks that isDerivedFrom(...,0) returns true when there
   is more than one union derivation steps between the target and
   ancestor type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom68: function (test) {
    var success;
    var doc;
    var elem;
    var elemTypeInfo;
    var typeName;
    var elemList;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("sup");
    elem = elemList.item(0);
    elemTypeInfo = elem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emp0004_5Type",0);
    test.ok(retValue, 'isDerived');

    test.done()
  },

  /**
   *
   Checks that isDerivedFrom(...,DERIVATION_UNION|DERIVATION_LIST) returns false when there
   is both a union and list derivation steps between the target and
   ancestor type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom69: function (test) {
    var success;
    var doc;
    var elem;
    var elemTypeInfo;
    var typeName;
    var elemList;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("sup");
    elem = elemList.item(0);
    elemTypeInfo = elem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","integer",12);
    test.equal(retValue, false, 'isDerived');

    test.done()
  },

  /**
   *
   Checks that isDerivedFrom(...,0) returns true when there
   is both a union and list derivation steps between the target and
   ancestor type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom70: function (test) {
    var success;
    var doc;
    var elem;
    var elemTypeInfo;
    var typeName;
    var elemList;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("sup");
    elem = elemList.item(0);
    elemTypeInfo = elem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/2001/XMLSchema","string",0);
    test.ok(retValue, 'isDerived');

    test.done()
  },

  /**
   *
   Checks that isDerivedFrom(...,0) returns true when target type is a list
   of an union of the ancestor type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom71: function (test) {
    var success;
    var doc;
    var elem;
    var elemTypeInfo;
    var typeName;
    var elemList;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("code");
    elem = elemList.item(0);
    elemTypeInfo = elem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","field",0);
    test.ok(retValue, 'isDerived');

    test.done()
  },

  /**
   *
   Checks that isDerivedFrom(...,DERIVATION_LIST|DERIVATION_UNION) returns false when target type is a list
   of an union.
   ancestor type.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom72: function (test) {
    var success;
    var doc;
    var elem;
    var elemTypeInfo;
    var typeName;
    var elemList;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("code");
    elem = elemList.item(0);
    elemTypeInfo = elem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","field",12);
    test.equal(retValue, false, 'isDerived');

    test.done()
  },

  /**
   *
   Checks that isDerivedFrom(...,0) returns true where the target type is a union
   where the ancestor type is a member of the union and is a union itself.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#TypeInfo-isDerivedFrom
   */
  typeinfoisderivedfrom73: function (test) {
    var success;
    var doc;
    var elem;
    var elemTypeInfo;
    var typeName;
    var elemList;
    var retValue;

    doc = hc_staff.hc_staff();
    elemList = doc.getElementsByTagName("sup");
    elem = elemList.item(0);
    elemTypeInfo = elem.schemaTypeInfo;

    retValue = elemTypeInfo.isDerivedFrom("http://www.w3.org/1999/xhtml","emType",0);
    test.ok(retValue, 'isDerived');

    test.done()
  },

  /**
   *
   Call setUserData on a node providing a UserDataHandler and rename the node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-handleUserDataEvent
   */
  userdatahandler01: function (test) {
    var udh = new core.UserDataHandler();
    udh.notifications = [];
    udh.handle = function(operation, key, data, src, dst) {
      udh.notifications.push({operation: operation, key: key, data: data, src: src, dst: dst})
    };
    var xs = {greeting: 'Hello', salutation: 'Mr.'};
    var cs = {greeting: 0, salutation: 0}
    var doc = barfoo.barfoo();
    var node = doc.getElementsByTagName('p').item(0);
    node.setUserData('greeting', 'Hello', udh.handle);
    node.setUserData('salutation', 'Mr.', udh.handle);
    var newNode = doc.renameNode(node, node.namespaceURI, 'div');
    test.equal(udh.notifications.length, 2, 'twoNotifications');
    udh.notifications.forEach(function(notification){
      test.equal(notification.operation, udh.NODE_RENAME, 'operationIsRename');
      test.equal(notification.data, xs[notification.key], 'notification.data should be '+xs[notification.key]);
      test.equal(notification.src, node, 'srcIsNode')
      if (notification.dst == null) {
	test.equal(newNode, node, 'ifDstNullRenameMustReuseNode');
      } else {
	test.equal(notification.dst, newNode, 'dstIsNewNode');
      }
      cs[notification.key] += 1;
    });
    test.equal(cs.greeting, 1, 'greetingCountIs1');
    test.equal(cs.salutation, 1, 'salutationCountIs1');
    test.done()
  },

  /**
   *
   Call setUserData on a node providing a UserDataHandler and clone the node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-handleUserDataEvent
   */
  userdatahandler02: function (test) {
    var xs = {greeting: 'Hello', salutation: 'Mr.'};
    var cs = {greeting: 0, salutation: 0}
    var doc = barfoo.barfoo();
    var node = doc.getElementsByTagName('p').item(0);
    node.setUserData('greeting', 'Hello', null);
    node.setUserData('salutation', 'Mr.', null);
    var newNode = node.cloneNode(true);
    test.equal(userDataMonitor.allNotifications.length, 2, 'twoNotifications');
    userDataMonitor.allNotifications.forEach(function(notification){
      test.equal(notification.operation, 1, 'operationIsClone');
      test.equal(notification.data, xs[notification.key], 'notification.data should be '+xs[notification.key]);
      test.equal(notification.src, node, 'srcIsNode')
      test.equal(notification.dst, newNode, 'dstIsNewNode');
      cs[notification.key] += 1;
    });
    test.equal(cs.greeting, 1, 'greetingCountIs1');
    test.equal(cs.salutation, 1, 'salutationCountIs1');
    test.done()
  },

  /**
   *
   Call setUserData on a node providing a UserDataHandler and import the node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-handleUserDataEvent
   */
  userdatahandler03: function (test) {
    var xs = {greeting: 'Hello', salutation: 'Mr.'};
    var cs = {greeting: 0, salutation: 0}
    var doc = barfoo.barfoo();
    var node = doc.getElementsByTagName("p").item(0);
    node.setUserData('greeting', 'Hello', null);
    node.setUserData('salutation', 'Mr.', null);
    var newNode = doc.importNode(node,true);
    test.equal(userDataMonitor.allNotifications.length, 2, 'twoNotifications');
    userDataMonitor.allNotifications.forEach(function(notification){
      test.equal(notification.operation, 2, 'operationIsImport');
      test.equal(notification.data, xs[notification.key], 'notification.data should be '+xs[notification.key]);
      test.equal(notification.src, node, 'srcIsNode')
      test.equal(notification.dst, newNode, 'dstIsNewNode');
      cs[notification.key] += 1;
    });
    test.equal(cs.greeting, 1, 'greetingCountIs1');
    test.equal(cs.salutation, 1, 'salutationCountIs1');
    test.done()
  },

  /**
   *
   Call setUserData on a node providing a UserDataHandler and adopt the node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#ID-handleUserDataEvent
   */
  userdatahandler04: function (test) {
    var xs = {greeting: 'Hello', salutation: 'Mr.'};
    var cs = {greeting: 0, salutation: 0}
    var doc = barfoo.barfoo();
    var node = doc.getElementsByTagName("p").item(0);
    node.setUserData('greeting', 'Hello', null);
    node.setUserData('salutation', 'Mr.', null);
    var newNode = doc.adoptNode(node);
    test.equal(userDataMonitor.allNotifications.length, 2, 'twoNotifications');
    userDataMonitor.allNotifications.forEach(function(notification){
      test.equal(notification.operation, 5, 'operationIsAdopt');
      test.equal(notification.data, xs[notification.key], 'notification.data should be '+xs[notification.key]);
      test.equal(notification.src, node, 'srcIsNode')
      test.equal(notification.dst, null, 'dstIsnull');
      cs[notification.key] += 1;
    });
    test.equal(cs.greeting, 1, 'greetingCountIs1');
    test.equal(cs.salutation, 1, 'salutationCountIs1');
    test.done()
  },

  /**
   *
   Create a document with an XML 1.1 valid but XML 1.0 invalid element and
   normalize document with well-formed set to true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-well-formed
   */
  wellformed01: function (test) {
    var success;
    var domImpl;
    var nullString = null;

    var nullDoctype = null;

    var doc;
    var elem;
    var retval;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var severity;
    var type;
    var locator;
    var relatedNode;
    domImpl = getImplementation();
    doc = domImpl.createDocument(nullString,nullString,nullDoctype);

    {
      success = false;
      try {
        elem = doc.createElementNS("http://www.example.org/domts/wellformed01","LegalNameࢎ");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'xml10InvalidName');
    }

    try {
      doc.xmlVersion = "1.1";


    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    elem = doc.createElementNS("http://www.example.org/domts/wellformed01","LegalNameࢎ");
    retval = doc.appendChild(elem);
    doc.xmlVersion = "1.0";

    domConfig = doc.domConfig;

    domConfig.setParameter("well-formed", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errors = errorMonitor.allErrors;
    for(var indexN100A9 = 0;indexN100A9 < errors.length; indexN100A9++) {
      error = errors[indexN100A9];
      severity = error.severity;

      test.equal(severity, 2, 'severity');
      type = error.type;

      test.equal(type, "wf-invalid-character-in-node-name", 'type');
      locator = error.location;

      relatedNode = locator.relatedNode;

      test.equal(relatedNode, elem, 'relatedNode');

    }
    test.equal(errors.length, 1, 'oneError');

    test.done()
  },

  /**
   *
   Create a document with an XML 1.1 valid but XML 1.0 invalid element and
   normalize document with well-formed set to false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-well-formed
   */
  wellformed02: function (test) {
    var success;
    var domImpl;
    var nullString = null;

    var nullDoctype = null;

    var doc;
    var elem;
    var retval;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var canSet;
    domImpl = getImplementation();
    doc = domImpl.createDocument(nullString,nullString,nullDoctype);

    {
      success = false;
      try {
        elem = doc.createElementNS("http://www.example.org/domts/wellformed02","LegalNameࢎ");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'xml10InvalidName');
    }

    try {
      doc.xmlVersion = "1.1";


    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    elem = doc.createElementNS("http://www.example.org/domts/wellformed02","LegalNameࢎ");
    retval = doc.appendChild(elem);
    doc.xmlVersion = "1.0";

    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("well-formed",false);

    if(
      canSet
    ) {
      domConfig.setParameter("well-formed", false);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errors = errorMonitor.allErrors;
      test.equal(errors.length, 0, 'noError');

    }

    test.done()
  },

  /**
   *
   Create a document with an XML 1.1 valid but XML 1.0 invalid attribute and
   normalize document with well-formed set to true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-well-formed
   */
  wellformed03: function (test) {
    var success;
    var domImpl;
    var nullDoctype = null;

    var doc;
    var docElem;
    var attr;
    var retval;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var severity;
    var type;
    var locator;
    var relatedNode;
    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDoctype);
    docElem = doc.documentElement;


    {
      success = false;
      try {
        attr = doc.createAttribute("LegalNameࢎ");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'xml10InvalidName');
    }

    try {
      doc.xmlVersion = "1.1";


    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    docElem.setAttribute("LegalNameࢎ","foo");
    attr = docElem.getAttributeNode("LegalNameࢎ");
    doc.xmlVersion = "1.0";

    domConfig = doc.domConfig;

    domConfig.setParameter("well-formed", true);
    domConfig.setParameter("error-handler", errorMonitor.handleError);
    doc.normalizeDocument();
    errors = errorMonitor.allErrors;
    for(var indexN100AA = 0;indexN100AA < errors.length; indexN100AA++) {
      error = errors[indexN100AA];
      severity = error.severity;

      test.equal(severity, 2, 'severity');
      type = error.type;

      test.equal(type, "wf-invalid-character-in-node-name", 'type');
      locator = error.location;

      relatedNode = locator.relatedNode;

      test.equal(relatedNode, attr, 'relatedNode');

    }
    test.equal(errors.length, 1, 'oneError');

    test.done()
  },

  /**
   *
   Create a document with an XML 1.1 valid but XML 1.0 invalid attribute and
   normalize document with well-formed set to false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#Document3-normalizeDocument
   * @see http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core#parameter-well-formed
   */
  wellformed04: function (test) {
    var success;
    var domImpl;
    var nullDoctype = null;

    var doc;
    var docElem;
    var attr;
    var retval;
    var domConfig;
    errorMonitor = new DOMErrorMonitor();

    var errors = new Array();

    var error;
    var canSet;
    var nullNS = null;

    domImpl = getImplementation();
    doc = domImpl.createDocument("http://www.w3.org/1999/xhtml","html",nullDoctype);
    docElem = doc.documentElement;


    {
      success = false;
      try {
        attr = doc.createAttributeNS(nullNS,"LegalNameࢎ");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'xml10InvalidName');
    }

    try {
      doc.xmlVersion = "1.1";


    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* NOT_SUPPORTED_ERR */ 9 :
          return ;
        default:
          throw ex;
        }
      } else {
        throw ex;
      }
    }
    docElem.setAttributeNS(nullNS,"LegalNameࢎ","foo");
    doc.xmlVersion = "1.0";

    domConfig = doc.domConfig;

    canSet = domConfig.canSetParameter("well-formed",false);

    if(
      canSet
    ) {
      domConfig.setParameter("well-formed", false);
      domConfig.setParameter("error-handler", errorMonitor.handleError);
      doc.normalizeDocument();
      errors = errorMonitor.allErrors;
      for(var indexN100AA = 0;indexN100AA < errors.length; indexN100AA++) {
        error = errors[indexN100AA];
        test.equal(error, null, 'noErrorsExpected');

      }

    }
    test.done()
  }
}
