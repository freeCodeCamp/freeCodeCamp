var testcase = require('nodeunit').testCase;

// The "getOwnerElement()" will return the Element node this attribute is attached to or null if this attribute is not in use.
// @author IBM
// @author Neil Delima
// @see http://www.w3.org/TR/DOM-Level-2-Core/core#Attr-ownerElement
exports['attrgetownerelement'] = testcase({
  setUp: function(cb){
    this.doc = require('./core/files/staffNS.xml').staffNS();
    cb();
  },

  tearDown: function(cb){
    this.doc = undefined;
    delete(this.doc);
    cb();
  },

  // Retreive the default attribute defaultAttr and check its owner element.  Verify if the name the nodeName of the returned ownerElement is emp:employee.
  // @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
  attrgetownerelement01: function(test) {
    var element = this.doc.getElementsByTagNameNS("http://www.nist.gov","employee").item(1);
    var attr = element.attributes.getNamedItemNS(null,"defaultAttr");
    test.equal(attr.ownerElement.nodeName, 'emp:employee');
    test.done();
  },

  // Create a new element and attribute node, attach the attribute to the element. Check the value of owner element of the new attribute node
  attrgetownerelement02: function(test) {
    var element = this.doc.createElement("root");
    var attr = this.doc.createAttributeNS("http://www.w3.org/DOM/L1","L1:att");
    element.setAttributeNodeNS(attr);
    test.equal(attr.ownerElement.nodeName.toLowerCase(), 'root');
    test.done();
  },

  // Create a new attribute node for this document node.  Since the newly attribute is not in use its owner element should be null.
  attrgetownerelement03: function(test) {
    var attr = this.doc.createAttributeNS("http://www.w3.org/DOM","dom:attr");
    test.equal(attr.ownerElement, null, 'should be null')
    test.done();
  },

  // Import an attribute node to another document.  If an Attr node is imported, its ownerElement attribute should be set to null.  Verify if the ownerElement has been set to null.
  attrgetownerelement04: function(test) {
    var docImport = require('./core/files/staff.xml').staff();
    var element = this.doc.getElementsByTagNameNS("http://www.nist.gov","address").item(1);
    test.notEqual(element, null, 'element should not be null');
    var attr = element.getAttributeNodeNS("http://www.nist.gov","zone");
    var attrImp = docImport.importNode(attr, true);
    test.equal(attrImp.ownerElement, null, 'should be null')
    test.done();
  },

  // Retreive an element and its attributes.  Then remove the element and check the name of the ownerElement of attribute of the attribute "street".
  // @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
  attrgetownerelement05: function(test) {
    var element = this.doc.getElementsByTagNameNS("*","address").item(1);
    element.parentNode.removeChild(element);
    var attr = element.attributes.getNamedItemNS(null, "street");
    test.equal(attr.ownerElement.nodeName, 'address');
    test.done();
  }
})

exports['createAttributeNS'] = testcase({
  /**
   *
   The "createAttributeNS(namespaceURI,qualifiedName)" method for a
   Document should raise NAMESPACE_ERR DOMException
   if qualifiedName is malformed.

   Invoke method createAttributeNS(namespaceURI,qualifiedName) on
   the XMLNS Document with namespaceURI being "http://www.ecommerce.org/",
   qualifiedName as "prefix::local".  Method should raise
   NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createAttributeNS01: function(test) {
    var success;
    var namespaceURI = "http://www.ecommerce.org/";
    var malformedName = "prefix::local";
    var newAttr;


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        newAttr = doc.createAttributeNS(namespaceURI,malformedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createAttributeNS(namespaceURI,qualifiedName)" method for a
   Document should raise NAMESPACE_ERR DOMException
   if qualifiedName has a prefix and namespaceURI is null.

   Invoke method createAttributeNS(namespaceURI,qualifiedName) on this document
   with namespaceURI being null and qualifiedName contains the prefix "person".
   Method should raise NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createAttributeNS02: function(test) {
    var success;
    var namespaceURI = null;

    var qualifiedName = "prefix:local";
    var newAttr;


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        newAttr = doc.createAttributeNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createAttributeNS(namespaceURI,qualifiedName)" method for a
   Document should raise INVALID_CHARACTER_ERR DOMException
   if qualifiedName contains an illegal character.

   Invoke method createAttributeNS(namespaceURI,qualifiedName) on this document
   with qualifiedName containing an illegal character from illegalChars[].
   Method should raise INVALID_CHARACTER_ERR DOMException for all
   characters in illegalChars[].

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   */
  createAttributeNS03: function(test) {
    var success;
    var namespaceURI = "http://www.wedding.com/";
    var qualifiedName;
    var newAttr;
    illegalQNames = new Array();
    illegalQNames[0] = "person:{";
    illegalQNames[1] = "person:}";
    illegalQNames[2] = "person:~";
    illegalQNames[3] = "person:'";
    illegalQNames[4] = "person:!";
    illegalQNames[5] = "person:@";
    illegalQNames[6] = "person:#";
    illegalQNames[7] = "person:$";
    illegalQNames[8] = "person:%";
    illegalQNames[9] = "person:^";
    illegalQNames[10] = "person:&";
    illegalQNames[11] = "person:*";
    illegalQNames[12] = "person:(";
    illegalQNames[13] = "person:)";
    illegalQNames[14] = "person:+";
    illegalQNames[15] = "person:=";
    illegalQNames[16] = "person:[";
    illegalQNames[17] = "person:]";
    illegalQNames[18] = "person:\\";
    illegalQNames[19] = "person:/";
    illegalQNames[20] = "person:;";
    illegalQNames[21] = "person:`";
    illegalQNames[22] = "person:<";
    illegalQNames[23] = "person:>";
    illegalQNames[24] = "person:,";
    illegalQNames[25] = "person:a ";
    illegalQNames[26] = "person:\"";



    var doc = require('./core/files/staffNS.xml').staffNS();
    for(var indexN10090 = 0;indexN10090 < illegalQNames.length; indexN10090++) {
      qualifiedName = illegalQNames[indexN10090];

      {
	success = false;
	try {
          newAttr = doc.createAttributeNS(namespaceURI,qualifiedName);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 5);
	}
	test.ok(success, 'throw_INVALID_CHARACTER_ERR');
      }

    }
    test.done();
  },
  /**
   *
   The "createAttributeNS(namespaceURI,qualifiedName)" method for a
   Document should raise NAMESPACE_ERR DOMException
   if qualifiedName has the "xml" prefix and namespaceURI is different
   from "http://www.w3.org/XML/1998/namespace".

   Invoke method createAttributeNS(namespaceURI,qualifiedName) on this document
   with qualifiedName being "xml:attr1 and namespaceURI equals
   the string "http://www.w3.org/XML/1998/namespaces" (which differs from the required
   string "http://www.w3.org/XML/1998/namespace").
   Method should raise NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createAttributeNS04: function(test) {
    var success;
    var namespaceURI = "http://www.w3.org/XML/1998/namespaces";
    var qualifiedName = "xml:attr1";
    var newAttr;


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        newAttr = doc.createAttributeNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createAttributeNS(namespaceURI,qualifiedName)" method for a
   Document should return a new Attr object given that all parameters are
   valid and correctly formed.

   Invoke method createAttributeNS(namespaceURI,qualifiedName) on this document with
   parameters equal "http://www.ecommerce.org/" and "ecom:local"
   respectively. Method should return a new Attr object whose name is "ecom:local".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1112119403
   */
  createAttributeNS05: function(test) {
    var success;
    var namespaceURI = "http://www.ecommerce.org/";
    var qualifiedName = "econm:local";
    var newAttr;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    newAttr = doc.createAttributeNS(namespaceURI,qualifiedName);
    attrName = newAttr.name;

    test.done();
  },
  /**
   *
   Document.createAttributeNS with an empty qualified name should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  createAttributeNS06: function(test) {
    var success;
    var namespaceURI = "http://www.example.com/";
    var qualifiedName;
    var newAttr;


    var doc = require('./core/files/hc_staff.xml').hc_staff();

    {
      success = false;
      try {
        newAttr = doc.createAttributeNS(namespaceURI,"");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    }
    test.done();
  }
})

exports['createDocument'] = testcase({
  /**
   *
   The "createDocument(namespaceURI,qualifiedName,doctype)" method for a
   DOMImplementation should raise NAMESPACE_ERR DOMException
   if parameter qualifiedName is malformed.

   Retrieve the DOMImplementation on the XMLNS Document.
   Invoke method createDocument(namespaceURI,qualifiedName,doctype)
   on the retrieved DOMImplementation with namespaceURI being
   the literal string "http://www.ecommerce.org/", qualifiedName as
   "prefix::local", and doctype as null.  Method should raise
   NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Level-2-Core-DOM-createDocument')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createDocument01: function(test) {
    var success;
    var namespaceURI = "http://www.ecommerce.org/";
    var malformedName = "prefix::local";
    var docType = null;

    var domImpl;
    var aNewDoc;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;

    {
      success = false;
      try {
        aNewDoc = domImpl.createDocument(namespaceURI,malformedName,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createDocument(namespaceURI,qualifiedName,doctype)" method for a
   DOMImplementation should raise NAMESPACE_ERR DOMException
   if qualifiedName has a prefix and namespaceURI is null.

   Invoke method createDocument(namespaceURI,qualifiedName,doctype) on
   this domimplementation with namespaceURI being null and qualifiedName
   equals "k:local". Method should raise NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Level-2-Core-DOM-createDocument')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createDocument02: function(test) {
    var success;
    var namespaceURI = null;

    var qualifiedName = "k:local";
    var docType = null;

    var domImpl;
    var aNewDoc;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;

    {
      success = false;
      try {
        aNewDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createDocument(namespaceURI,qualifiedName,doctype)" method for a
   DOMImplementation should raise WRONG_DOCUMENT_ERR DOMException
   if parameter doctype has been used with a different document.

   Invoke method createDocument(namespaceURI,qualifiedName,doctype) on
   this domimplementation where doctype is the type of this document.
   Method should raise WRONG_DOCUMENT_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Level-2-Core-DOM-createDocument')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
   */
  createDocument03: function(test) {
    var success;
    var namespaceURI = "http://www.ecommerce.org/schema";
    var qualifiedName = "namespaceURI:x";
    var docType;
    var domImpl;
    var aNewDoc;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    domImpl = doc.implementation;

    {
      success = false;
      try {
        aNewDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    }
    test.done();
  },
  /**
   *
   The "createDocument(namespaceURI,qualifiedName,doctype)" method for a
   DOMImplementation should raise WRONG_DOCUMENT_ERR DOMException
   if parameter doctype was created from a different implementation.

   Invoke method createDocument(namespaceURI,qualifiedName,doctype) on
   a domimplementation that is different from this domimplementation.
   Doctype is the type of this document.
   Method should raise WRONG_DOCUMENT_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Level-2-Core-DOM-createDocument')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
   */
  createDocument04: function(test) {
    var success;
    var namespaceURI = "http://www.ecommerce.org/schema";
    var qualifiedName = "namespaceURI:x";
    var docType;
    var domImpl;
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;
    domImpl = aNewDoc.implementation;
    {
      success = false;
      try {
        aNewDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    }
    test.done();
  },
  /**
   *
   The "createDocument(namespaceURI,qualifiedName,doctype)" method for a
   DOMImplementation should raise INVALID_CHARACTER_ERR DOMException
   if parameter qualifiedName contains an illegal character.

   Invoke method createDocument(namespaceURI,qualifiedName,doctype) on
   this domimplementation with namespaceURI equals "http://www.ecommerce.org/schema",
   doctype is null and qualifiedName contains an illegal character from
   illegalChars[].  Method should raise INVALID_CHARACTER_ERR DOMException
   for all characters in illegalChars[].

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#
   */
  createDocument05: function(test) {
    var success;
    var namespaceURI = "http://www.ecommerce.org/schema";
    var qualifiedName;
    var docType = null;

    var domImpl;
    var aNewDoc;
    var charact;
    illegalQNames = new Array();
    illegalQNames[0] = "namespaceURI:{";
    illegalQNames[1] = "namespaceURI:}";
    illegalQNames[2] = "namespaceURI:~";
    illegalQNames[3] = "namespaceURI:'";
    illegalQNames[4] = "namespaceURI:!";
    illegalQNames[5] = "namespaceURI:@";
    illegalQNames[6] = "namespaceURI:#";
    illegalQNames[7] = "namespaceURI:$";
    illegalQNames[8] = "namespaceURI:%";
    illegalQNames[9] = "namespaceURI:^";
    illegalQNames[10] = "namespaceURI:&";
    illegalQNames[11] = "namespaceURI:*";
    illegalQNames[12] = "namespaceURI:(";
    illegalQNames[13] = "namespaceURI:)";
    illegalQNames[14] = "namespaceURI:+";
    illegalQNames[15] = "namespaceURI:=";
    illegalQNames[16] = "namespaceURI:[";
    illegalQNames[17] = "namespaceURI:]";
    illegalQNames[18] = "namespaceURI:\\";
    illegalQNames[19] = "namespaceURI:/";
    illegalQNames[20] = "namespaceURI:;";
    illegalQNames[21] = "namespaceURI:`";
    illegalQNames[22] = "namespaceURI:<";
    illegalQNames[23] = "namespaceURI:>";
    illegalQNames[24] = "namespaceURI:,";
    illegalQNames[25] = "namespaceURI:a ";
    illegalQNames[26] = "namespaceURI:\"";



    var doc = require('./core/files/staffNS.xml').staffNS();
    for(var indexN1009A = 0;indexN1009A < illegalQNames.length; indexN1009A++) {
      qualifiedName = illegalQNames[indexN1009A];
      domImpl = doc.implementation;

      {
	success = false;
	try {
          aNewDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 5);
	}
	test.ok(success, 'throw_INVALID_CHARACTER_ERR');
      }

    }
    test.done();
  },
  /**
   *
   The "createDocument(namespaceURI,qualifiedName,doctype)" method for a
   DOMImplementation should raise NAMESPACE_ERR DOMException
   if qualifiedName has the "xml" prefix and namespaceURI different from
   "http://www.w3.org/XML/1998/namespace"

   Invoke method createDocument(namespaceURI,qualifiedName,doctype) on
   this domimplementation with qualifiedName "xml:local"
   and namespaceURI as the string
   "http://www.ecommerce.org/schema" (which is different from the required
   "http://www.w3.org/XML/1998/namespace"). Method should raise
   NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Level-2-Core-DOM-createDocument')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createDocument06: function(test) {
    var success;
    var namespaceURI = "http://ecommerce.org/schema";
    var qualifiedName = "xml:local";
    var docType = null;

    var domImpl;
    var aNewDoc;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;

    {
      success = false;
      try {
        aNewDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createDocument(namespaceURI,qualifiedName,doctype)" method for a
   DOMImplementation should return a new xml Document object of the
   specified type with its document element given that all parameters are
   valid and correctly formed.

   Invoke method createDocument(namespaceURI,qualifiedName,doctype) on
   this domimplementation. namespaceURI is "http://www.ecommerce.org/schema"
   qualifiedName is "y:x" and doctype is null.
   Method should return a new xml Document as specified by the listed parameters.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   */
  createDocument07: function(test) {
    var success;
    var namespaceURI = "http://www.ecommerce.org/schema";
    var qualifiedName = "y:x";
    var docType = null;

    var domImpl;
    var aNewDoc;
    var nodeName;
    var nodeValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    aNewDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
    nodeName = aNewDoc.nodeName;

    nodeValue = aNewDoc.nodeValue;

    test.equal(nodeName, "#document", "nodeName");
    test.equal(nodeValue, null, 'nodeValue should not be null');
    test.done();
  },
  /**
   *
   DOMImplementation.createDocument with an empty qualified name should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  createDocument08: function(test) {
    var success;
    var namespaceURI = "http://www.example.org/schema";
    var docType = null;

    var domImpl;
    var aNewDoc;
    var charact;
    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;

    {
      success = false;
      try {
        aNewDoc = domImpl.createDocument(namespaceURI,"",docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    }
    test.done();
  }
})

exports['createDocumentType'] = testcase({
  /**
   *
   The "createDocumentType(qualifiedName,publicId,systemId)" method for a
   DOMImplementation should raise NAMESPACE_ERR DOMException if
   qualifiedName is malformed.

   Retrieve the DOMImplementation on the XMLNS Document.
   Invoke method createDocumentType(qualifiedName,publicId,systemId)
   on the retrieved DOMImplementation with qualifiedName being the literal
   string "prefix::local", publicId as "STAFF", and systemId as "staff".
   Method should raise NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocType
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Level-2-Core-DOM-createDocType')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createDocumentType01: function(test) {
    var success;
    var publicId = "STAFF";
    var systemId = "staff.xml";
    var malformedName = "prefix::local";
    var domImpl;
    var newType;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;

    {
      success = false;
      try {
        newType = domImpl.createDocumentType(malformedName,publicId,systemId);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createDocumentType(qualifiedName,publicId,systemId)" method for a
   DOMImplementation should raise INVALID_CHARACTER_ERR DOMException if
   qualifiedName contains an illegal character.

   Invoke method createDocumentType(qualifiedName,publicId,systemId) on
   this domimplementation with qualifiedName containing an illegal character
   from illegalChars[]. Method should raise INVALID_CHARACTER_ERR
   DOMException for all characters in illegalChars[].

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocType
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Level-2-Core-DOM-createDocType')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   */
  createDocumentType02: function(test) {
    var success;
    var publicId = "http://www.localhost.com/";
    var systemId = "myDoc.dtd";
    var qualifiedName;
    var docType = null;

    var domImpl;
    illegalQNames = new Array();
    illegalQNames[0] = "edi:{";
    illegalQNames[1] = "edi:}";
    illegalQNames[2] = "edi:~";
    illegalQNames[3] = "edi:'";
    illegalQNames[4] = "edi:!";
    illegalQNames[5] = "edi:@";
    illegalQNames[6] = "edi:#";
    illegalQNames[7] = "edi:$";
    illegalQNames[8] = "edi:%";
    illegalQNames[9] = "edi:^";
    illegalQNames[10] = "edi:&";
    illegalQNames[11] = "edi:*";
    illegalQNames[12] = "edi:(";
    illegalQNames[13] = "edi:)";
    illegalQNames[14] = "edi:+";
    illegalQNames[15] = "edi:=";
    illegalQNames[16] = "edi:[";
    illegalQNames[17] = "edi:]";
    illegalQNames[18] = "edi:\\";
    illegalQNames[19] = "edi:/";
    illegalQNames[20] = "edi:;";
    illegalQNames[21] = "edi:`";
    illegalQNames[22] = "edi:<";
    illegalQNames[23] = "edi:>";
    illegalQNames[24] = "edi:,";
    illegalQNames[25] = "edi:a ";
    illegalQNames[26] = "edi:\"";



    var doc = require('./core/files/staffNS.xml').staffNS();
    for(var indexN1009A = 0;indexN1009A < illegalQNames.length; indexN1009A++) {
      qualifiedName = illegalQNames[indexN1009A];
      domImpl = doc.implementation;

      {
	success = false;
	try {
          docType = domImpl.createDocumentType(qualifiedName,publicId,systemId);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 5);
	}
	test.ok(success, 'throw_INVALID_CHARACTER_ERR');
      }

    }
    test.done();
  },
  /**
   *
   The "createDocumentType(qualifiedName,publicId,systemId)" method for a
   DOMImplementation should return a new DocumentType node
   given that qualifiedName is valid and correctly formed.

   Invoke method createDocumentType(qualifiedName,publicId,systemId) on
   this domimplementation with qualifiedName "prefix:myDoc".
   Method should return a new DocumentType node.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocType
   */
  createDocumentType03: function(test) {
    var success;
    var namespaceURI = "http://ecommerce.org/schema";
    var qualifiedName = "prefix:myDoc";
    var publicId = "http://www.localhost.com";
    var systemId = "myDoc.dtd";
    var domImpl;
    var newType = null;

    var nodeName;
    var nodeValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    newType = domImpl.createDocumentType(qualifiedName,publicId,systemId);
    nodeName = newType.nodeName;

    test.equal(nodeName, "prefix:myDoc", "nodeName");
    nodeValue = newType.nodeValue;

    test.equal(nodeValue, null, 'nodeValue should not be null');
    test.done();
  },
  /**
   *
   DOMImplementation.createDocumentType with an empty name should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocType
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Level-2-Core-DOM-createDocType')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  createDocumentType04: function(test) {
    var success;
    var publicId = "http://www.example.com/";
    var systemId = "myDoc.dtd";
    var qualifiedName;
    var docType = null;
    var domImpl = require('./core/files/staffNS.xml').staffNS().implementation;

    {
      success = false;
      try {
        docType = domImpl.createDocumentType("",publicId,systemId);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    }
    test.done();
  }
})

exports['createElementNS'] = testcase({
  /**
   *
   The "createElementNS(namespaceURI,qualifiedName)" method for a
   Document should raise NAMESPACE_ERR DOMException if
   qualifiedName is malformed.

   Invoke method createElementNS(namespaceURI,qualifiedName) on
   the XMLNS Document with namespaceURI being the literal string
   "http://www.ecommerce.org/", and qualifiedName as "prefix::local".
   Method should raise NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrElNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createElementNS01: function(test) {
    var success;
    var namespaceURI = "http://www.ecommerce.org/";
    var malformedName = "prefix::local";
    var newElement;


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        newElement = doc.createElementNS(namespaceURI,malformedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createElementNS(namespaceURI,qualifiedName)" method for a
   Document should raise NAMESPACE_ERR DOMException if
   qualifiedName has a prefix and namespaceURI is null.

   Invoke method createElementNS(namespaceURI,qualifiedName) on this document
   with namespaceURI being null and qualifiedName being "elem:attr1".
   Method should raise NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrElNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createElementNS02: function(test) {
    var success;
    var namespaceURI = null;

    var qualifiedName = "prefix:local";
    var newElement;


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        newElement = doc.createElementNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createElementNS(namespaceURI,qualifiedName)" method for a
   Document should raise INVALID_CHARACTER_ERR DOMException if
   qualifiedName contains an illegal character.

   Invoke method createElementNS(namespaceURI,qualifiedName) on this document
   with qualifiedName containing an illegal character from illegalChars[].
   Method should raise INVALID_CHARACTER_ERR DOMException for all characters
   in illegalChars[].

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrElNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   */
  createElementNS03: function(test) {
    var success;
    var namespaceURI = "http://www.wedding.com/";
    var qualifiedName;
    var done;
    var newElement;
    var charact;
    illegalQNames = new Array();
    illegalQNames[0] = "person:{";
    illegalQNames[1] = "person:}";
    illegalQNames[2] = "person:~";
    illegalQNames[3] = "person:'";
    illegalQNames[4] = "person:!";
    illegalQNames[5] = "person:@";
    illegalQNames[6] = "person:#";
    illegalQNames[7] = "person:$";
    illegalQNames[8] = "person:%";
    illegalQNames[9] = "person:^";
    illegalQNames[10] = "person:&";
    illegalQNames[11] = "person:*";
    illegalQNames[12] = "person:(";
    illegalQNames[13] = "person:)";
    illegalQNames[14] = "person:+";
    illegalQNames[15] = "person:=";
    illegalQNames[16] = "person:[";
    illegalQNames[17] = "person:]";
    illegalQNames[18] = "person:\\";
    illegalQNames[19] = "person:/";
    illegalQNames[20] = "person:;";
    illegalQNames[21] = "person:`";
    illegalQNames[22] = "person:<";
    illegalQNames[23] = "person:>";
    illegalQNames[24] = "person:,";
    illegalQNames[25] = "person:a ";
    illegalQNames[26] = "person:\"";



    var doc = require('./core/files/staffNS.xml').staffNS();
    for(var indexN10098 = 0;indexN10098 < illegalQNames.length; indexN10098++) {
      qualifiedName = illegalQNames[indexN10098];

      {
	success = false;
	try {
          newElement = doc.createElementNS(namespaceURI,qualifiedName);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 5);
	}
	test.ok(success, 'throw_INVALID_CHARACTER_ERR');
      }

    }
    test.done();
  },
  /**
   *
   The "createElementNS(namespaceURI,qualifiedName") method for
   a Document should raise NAMESPACE_ERR DOMException if the
   qualifiedName has an "xml" prefix and the namespaceURI is different
   from http://www.w3.org/XML/1998/namespace".

   Invoke method createElementNS(namespaceURI,qualifiedName) on this document
   with qualifiedName being "xml:element1" and namespaceURI equals the string
   "http://www.w3.org/XML/1997/namespace" (which differs from the required
   string "http://www.w3.org/XML/1998/namespace").
   Method should raise NAMESPACE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrElNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  createElementNS04: function(test) {
    var success;
    var namespaceURI = "http://www.w3.org/XML/1998/namespaces";
    var qualifiedName = "xml:element1";
    var newElement;


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        newElement = doc.createElementNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "createElementNS(namespaceURI,qualifiedName)" method for a
   Document should return a new Element object given that all parameters
   are valid and correctly formed.

   Invoke method createElementNS(namespaceURI,qualifiedName on this document
   with namespaceURI as "http://www.nist.gov" and qualifiedName as "gov:faculty".
   Method should return a new Element object whose name is "gov:faculty".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-104682815
   */
  createElementNS05: function(test) {
    var success;
    var namespaceURI = "http://www.nist.gov";
    var qualifiedName = "gov:faculty";
    var newElement;
    var elementName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    newElement = doc.createElementNS(namespaceURI,qualifiedName);
    elementName = newElement.tagName;

    test.equal(elementName, qualifiedName, "throw_Equals");
    test.done();
  },
  /**
   *
   Document.createElementNS with an empty qualified name should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-DocCrElNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  createElementNS06: function(test) {
    var success;
    var namespaceURI = "http://www.example.com/";
    var qualifiedName;
    var done;
    var newElement;
    var charact;


    var doc = require('./core/files/hc_staff.xml').hc_staff();

    {
      success = false;
      try {
        newElement = doc.createElementNS(namespaceURI,"");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    }
    test.done();
  }
})

exports['documentcreateattributeNS'] = testcase({
  /**
   *
   The method createAttributeNS creates an attribute of the given qualified name and namespace URI

   Invoke the createAttributeNS method on this Document object with a null
   namespaceURI, and a qualifiedName without a prefix.  This should return a valid Attr
   node object.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   */
  documentcreateattributeNS01: function(test) {
    var success;
    var attribute;
    var namespaceURI = null;

    var qualifiedName = "test";
    var name;
    var nodeName;
    var nodeValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    attribute = doc.createAttributeNS(namespaceURI,qualifiedName);
    nodeName = attribute.nodeName;

    nodeValue = attribute.nodeValue;

    test.equal(nodeName, "test", "documentcreateattributeNS01");
    test.done();
  },
  /**
   *
   The method createAttributeNS creates an attribute of the given qualified name and namespace URI

   Invoke the createAttributeNS method on this Document object with a valid values for
   namespaceURI, and a qualifiedName as below.  This should return a valid Attr node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   */
  documentcreateattributeNS02: function(test) {
    var success;
    var attribute1;
    var attribute2;
    var name;
    var nodeName;
    var nodeValue;
    var prefix;
    var namespaceURI;


    var doc = require('./core/files/staffNS.xml').staffNS();
    attribute1 = doc.createAttributeNS("http://www.w3.org/XML/1998/namespace","xml:xml");
    name = attribute1.name;

    nodeName = attribute1.nodeName;

    nodeValue = attribute1.nodeValue;

    prefix = attribute1.prefix;

    namespaceURI = attribute1.namespaceURI;

    test.equal(name, "xml:xml", "documentcreateattributeNS02_att1_name");
    test.equal(nodeName, "xml:xml", "documentcreateattributeNS02_att1_nodeName");
    test.equal(nodeValue, "", "documentcreateattributeNS02_att1_nodeValue");
    test.equal(prefix, "xml", "documentcreateattributeNS02_att1_prefix");
    test.equal(namespaceURI, "http://www.w3.org/XML/1998/namespace", "documentcreateattributeNS02_att1_namespaceURI");
    attribute2 = doc.createAttributeNS("http://www.w3.org/2000/xmlns/","xmlns");
    name = attribute2.name;

    nodeName = attribute2.nodeName;

    nodeValue = attribute2.nodeValue;

    prefix = attribute2.prefix;

    namespaceURI = attribute2.namespaceURI;

    test.equal(name, "xmlns", "documentcreateattributeNS02_att2_name");
    test.equal(nodeName, "xmlns", "documentcreateattributeNS02_att2_nodeName");
    test.equal(nodeValue, "", "documentcreateattributeNS02_att2_nodeValue");
    test.equal(namespaceURI, "http://www.w3.org/2000/xmlns/", "documentcreateattributeNS02_att2_namespaceURI");
    test.done();
  },
  /**
   *

   The method createAttributeNS raises an INVALID_CHARACTER_ERR if the specified

   qualified name contains an illegal character



   Invoke the createAttributeNS method on this Document object with a valid value for

   namespaceURI, and qualifiedNames that contain illegal characters.  Check if the an

   INVALID_CHARACTER_ERR was thrown.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   */
  documentcreateattributeNS03: function(test) {
    var success;
    var attribute;
    var namespaceURI = "http://www.w3.org/DOM/Test/Level2";
    var qualifiedName;
    qualifiedNames = new Array();
    qualifiedNames[0] = "/";
    qualifiedNames[1] = "//";
    qualifiedNames[2] = "\\";
    qualifiedNames[3] = ";";
    qualifiedNames[4] = "&";
    qualifiedNames[5] = "*";
    qualifiedNames[6] = "]]";
    qualifiedNames[7] = ">";
    qualifiedNames[8] = "<";



    var doc = require('./core/files/staffNS.xml').staffNS();
    for(var indexN1005A = 0;indexN1005A < qualifiedNames.length; indexN1005A++) {
      qualifiedName = qualifiedNames[indexN1005A];

      {
	success = false;
	try {
          attribute = doc.createAttributeNS(namespaceURI,qualifiedName);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 5);
	}
	test.ok(success, 'documentcreateattributeNS03');
      }

    }
    test.done();
  },
  /**
   *

   The method createAttributeNS raises a NAMESPACE_ERR if the specified qualified name

   is malformed.



   Invoke the createAttributeNS method on this Document object with a valid value for

   namespaceURI, and malformed qualifiedNames.  Check if the a NAMESPACE_ERR was thrown.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   */
  documentcreateattributeNS04: function(test) {
    var success;
    var attribute;
    var namespaceURI = "http://www.w3.org/DOM/Test/Level2";
    var qualifiedName;
    qualifiedNames = new Array();
    qualifiedNames[0] = "_:";
    qualifiedNames[1] = ":0a";
    qualifiedNames[2] = ":";
    qualifiedNames[3] = "a:b:c";
    qualifiedNames[4] = "_::a";



    var doc = require('./core/files/staffNS.xml').staffNS();
    for(var indexN1004E = 0;indexN1004E < qualifiedNames.length; indexN1004E++) {
      qualifiedName = qualifiedNames[indexN1004E];

      {
	success = false;
	try {
          attribute = doc.createAttributeNS(namespaceURI,qualifiedName);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 14);
	}
	test.ok(success, 'documentcreateattributeNS04');
      }

    }
    test.done();
  },
  /**
   *
   The method createAttributeNS raises a NAMESPACE_ERR if the qualifiedName has a prefix and
   the namespaceURI is null.

   Invoke the createAttributeNS method on a new Document object with a null value for
   namespaceURI, and a valid qualifiedName.  Check if a NAMESPACE_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   */
  documentcreateattributeNS05: function(test) {
    var success;
    var newDoc;
    var docType = null;

    var domImpl;
    var attribute;
    var namespaceURI = null;

    var qualifiedName = "abc:def";


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","dom:doc",docType);

    {
      success = false;
      try {
        attribute = newDoc.createAttributeNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'documentcreateattributeNS05');
    }
    test.done();
  },
  /**
   *
   The method createAttributeNS raises a NAMESPACE_ERR if the qualifiedName has a prefix that
   is "xml" and the namespaceURI is different from "http://www.w3.org/XML/1998/namespace".

   Invoke the createAttributeNS method on a new DOMImplementation object with  the qualifiedName
   as xml:root and namespaceURI as http://www.w3.org/XML/1998 /namespace.
   Check if the NAMESPACE_ERR exception is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   */
  documentcreateattributeNS06: function(test) {
    var success;
    var newDoc;
    var docType = null;

    var domImpl;
    var attribute;
    var namespaceURI = "http://www.w3.org/XML/1998 /namespace";
    var qualifiedName = "xml:root";


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","dom:doc",docType);

    {
      success = false;
      try {
        attribute = newDoc.createAttributeNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'documentcreateattributeNS06');
    }
    test.done();
  },
  /**
   *

   The method createAttributeNS raises a NAMESPACE_ERR if the qualifiedName is xmlns and

   the namespaceURI is different from http://www.w3.org/2000/xmlns



   Invoke the createAttributeNS method on this DOMImplementation object with

   the qualifiedName as xmlns and namespaceURI as http://www.W3.org/2000/xmlns.

   Check if the NAMESPACE_ERR exception is thrown.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrAttrNS
   */
  documentcreateattributeNS07: function(test) {
    var success;
    var attribute;
    var namespaceURI = "http://www.W3.org/2000/xmlns";
    var qualifiedName = "xmlns";


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        attribute = doc.createAttributeNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'documentcreateattributeNS07');
    }
    test.done();
  }
})

exports['documentcreateelementNS'] = testcase({
  /**
   *

   The method createElementNS creates an element of the given valid qualifiedName and NamespaceURI.



   Invoke the createElementNS method on this Document object with a valid namespaceURI

   and qualifiedName.  Check if a valid Element object is returned with the same node attributes.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   */
  documentcreateelementNS01: function(test) {
    var success;
    var element;
    var namespaceURI = "http://www.w3.org/DOM/Test/level2";
    var qualifiedName = "XML:XML";
    var nodeName;
    var nsURI;
    var localName;
    var prefix;
    var tagName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS(namespaceURI,qualifiedName);
    nodeName = element.nodeName;

    nsURI = element.namespaceURI;

    localName = element.localName;

    prefix = element.prefix;

    tagName = element.tagName;

    test.equal(nodeName, "XML:XML", "documentcreateelementNS01_nodeName");
    test.equal(nsURI, "http://www.w3.org/DOM/Test/level2", "documentcreateelementNS01_namespaceURI");
    test.equal(localName, "XML", "documentcreateelementNS01_localName");
    test.equal(prefix, "XML", "documentcreateelementNS01_prefix");
    test.equal(tagName, "XML:XML", "documentcreateelementNS01_tagName");
    test.done();
  },
  /**
   *

   The method createElementNS creates an element of the given valid qualifiedName and NamespaceURI.



   Invoke the createElementNS method on this Document object with null values for namespaceURI,

   and a qualifiedName with an invalid character and check if an INVALID_CHARACTER_ERR is thrown.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   */
  documentcreateelementNS02: function(test) {
    var success;
    var element;
    var namespaceURI = null;

    var qualifiedName = "^^";


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        element = doc.createElementNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'documentcreateelementNS02');
    }
    test.done();
  },
  /**
   *

   The method createElementNS raises a NAMESPACE_ERR if the qualifiedName has a prefix and

   the namespaceURI is null.



   Invoke the createElementNS method on a new Document object with a null value for

   namespaceURI, and a valid qualifiedName.  Check if a NAMESPACE_ERR is thrown.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   */
  documentcreateelementNS05: function(test) {
    var success;
    var element;
    var namespaceURI = null;

    var qualifiedName = "null:xml";


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        element = doc.createElementNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'documentcreateelementNS05');
    }
    test.done();
  },
  /**
   *
   The method createElementNS raises a NAMESPACE_ERR if the qualifiedName
   has a prefix that is "xml" and the namespaceURI is different
   from http://www.w3.org/XML/1998/namespace

   Invoke the createElementNS method on this DOMImplementation object with
   the qualifiedName as xml:root and namespaceURI as http://www.w3.org/xml/1998/namespace
   Check if the NAMESPACE_ERR exception is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-DocCrElNS
   */
  documentcreateelementNS06: function(test) {
    var success;
    var newDoc;
    var docType = null;

    var domImpl;
    var element;
    var namespaceURI = "http://www.w3.org/xml/1998/namespace ";
    var qualifiedName = "xml:root";


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","dom:doc",docType);

    {
      success = false;
      try {
        element = newDoc.createElementNS(namespaceURI,qualifiedName);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'documentcreateelementNS06');
    }
    test.done();
  }
})

exports['documentgetelementby'] = testcase({
  /**
   *

   The method getElementById returns the element whose ID is given by elementId.

   If not such element exists, returns null.



   Invoke the getElementById method on this Document object with an invalid elementId.

   This should return a null element.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBId
   */
  documentgetelementbyid01: function(test) {
    var success;
    var element;
    var elementId = "---";


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.getElementById(elementId);
    test.equal(element, null, 'element should not be null');
    test.done();
  },
  /**
   *
   The method getElementsByTagNameNS returns a NodeList of all the Elements with
   a given local name and namespace URI in the order in which they are encountered
   in a preorder traversal of the Document tree.

   Invoke the getElementsByTagNameNS method on a new Document object with the values of
   namespaceURI=* and localName=*.  This should return a nodeList of 1 item.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  documentgetelementsbytagnameNS01: function(test) {
    var success;
    var newDoc;
    var docType = null;

    var domImpl;
    var childList;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument(nullNS,"root",docType);
    childList = newDoc.getElementsByTagNameNS("*","*");
    test.equal(childList.length, 1, "documentgetelementsbytagnameNS01");
    test.done();
  },
  /**
   *
   The method getElementsByTagNameNS returns a NodeList of all the Elements with
   a given local name and namespace URI in the order in which they are encountered
   in a preorder traversal of the Document tree.


   Create a new element having a local name="employeeId" belonging to the namespace "test"
   and append it to this document.  Invoke the getElementsByTagNameNS method on a this
   Document object with the values of namespaceURI=* and localName="elementId".  This
   should return a nodeList of 6 item.  Check the length of the nodeList returned.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  documentgetelementsbytagnameNS02: function(test) {
    var success;
    var docElem;
    var element;
    var childList;
    var appendedChild;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docElem = doc.documentElement;

    element = doc.createElementNS("test","employeeId");
    appendedChild = docElem.appendChild(element);
    childList = doc.getElementsByTagNameNS("*","employeeId");
    test.equal(childList.length, 6, "documentgetelementsbytagnameNS02");
    test.done();
  },
  /**
   *
   The method getElementsByTagNameNS returns a NodeList of all the Elements with
   a given local name and namespace URI in the order in which they are encountered
   in a preorder traversal of the Document tree.

   Invoke the getElementsByTagNameNS method on a new Document object with the values of
   namespaceURI=** and localName=**.  This should return a nodeList of 0 items.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  documentgetelementsbytagnameNS03: function(test) {
    var success;
    var childList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("**","*");
    test.equal(childList.length, 0, "documentgetelementsbytagnameNS03");
    test.done();
  },
  /**
   *
   The method getElementsByTagNameNS returns a NodeList of all the Elements with
   a given local name and namespace URI in the order in which they are encountered
   in a preorder traversal of the Document tree.

   Invoke the getElementsByTagNameNS method on a new Document object with the values of
   namespaceURI="null" and localName="0".  This should return a nodeList of 0 items.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  documentgetelementsbytagnameNS04: function(test) {
    var success;
    var childList;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS(nullNS,"0");
    test.equal(childList.length, 0, "documentgetelementsbytagnameNS04");
    test.done();
  },
  /**
   *
   The method getElementsByTagNameNS returns a NodeList of all the Elements with
   a given local name and namespace URI in the order in which they are encountered
   in a preorder traversal of the Document tree.


   Invoke the getElementsByTagNameNS method on a this Document object with the
   values of namespaceURI=null and localName="elementId".  This
   should return a nodeList of 0 item.  Check the length of the nodeList returned.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  documentgetelementsbytagnameNS05: function(test) {
    var success;
    var childList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("null","elementId");
    test.equal(childList.length, 0, "documentgetelementsbytagnameNS05");
    test.done();
  }
})

exports['documentimportnode'] = testcase({
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true, import the attribute, "street" of the second
   element node, from a list of nodes whose local names are "address" and namespaceURI
   "http://www.nist.gov" into the same document.  Check the parentNode, nodeName,
   nodeType and nodeValue of the imported node to verify if it has been imported correctly.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode01: function(test) {
    var success;
    var element;
    var attr;
    var childList;
    var importedAttr;
    var nodeName;
    var nodeType;
    var nodeValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = childList.item(1);
    attr = element.getAttributeNode("street");
    importedAttr = doc.importNode(attr,false);
    nodeName = importedAttr.nodeName;

    nodeValue = importedAttr.nodeValue;

    nodeType = importedAttr.nodeType;

    test.equal(nodeName, "street", "documentimportnode01_nodeName");
    test.equal(nodeType, 2, "documentimportnode01_nodeType");
    test.equal(nodeValue, "Yes", "documentimportnode01_nodeValue");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=false, import the attribute, "emp:zone" of the
   element node which is retreived by its elementId="CANADA", into the another document.
   Check the parentNode, nodeName, nodeType and nodeValue of the imported node to
   verify if it has been imported correctly.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode02: function(test) {
    var success;
    var element;
    var attr;
    var importedAttr;
    var nodeName;
    var nodeType;
    var nodeValue;
    var addresses;
    var attrsParent;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var docImported = require('./core/files/staff.xml').staff();
    addresses = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = addresses.item(1);
    attr = element.getAttributeNodeNS("http://www.nist.gov","zone");
    importedAttr = docImported.importNode(attr,false);
    nodeName = importedAttr.nodeName;

    nodeType = importedAttr.nodeType;

    nodeValue = importedAttr.nodeValue;

    attrsParent = importedAttr.parentNode;

    test.equal(attrsParent, null, 'attrsParent should not be null');
    test.equal(nodeName, "emp:zone", "documentimportnode02_nodeName");
    test.equal(nodeType, 2, "documentimportnode02_nodeType");
    test.equal(nodeValue, "CANADA", "documentimportnode02_nodeValue");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=false, import the default Attribute attribute,
   "defaultAttr" of the second element node whose namespaceURI="http://www.nist.gov" and
   localName="defaultAttr", into the same document.
   Check the parentNode, nodeName, nodeType and nodeValue of the imported node to
   verify if it has been imported correctly.
   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode03: function(test) {
    var success;
    var element;
    var attr;
    var childList;
    var importedAttr;
    var nodeName;
    var nodeType;
    var nodeValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("http://www.nist.gov","employee");
    element = childList.item(1);
    attr = element.getAttributeNode("defaultAttr");
    importedAttr = doc.importNode(attr,false);
    nodeName = importedAttr.nodeName;

    nodeValue = importedAttr.nodeValue;

    nodeType = importedAttr.nodeType;

    test.equal(nodeName, "defaultAttr", "documentimportnode03_nodeName");
    test.equal(nodeType, 2, "documentimportnode03_nodeType");
    test.equal(nodeValue, "defaultVal", "documentimportnode03_nodeValue");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true, import the default Attribute attribute,
   "defaultAttr" of the second element node whose namespaceURI="http://www.nist.gov" and
   localName="defaultAttr", into a new document.
   Check the parentNode, nodeName, nodeType and nodeValue of the imported node to
   verify if it has been imported correctly.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode04: function(test) {
    var success;
    var newDoc;
    var docType = null;

    var domImpl;
    var element;
    var attr;
    var childList;
    var importedAttr;
    var nodeName;
    var nodeType;
    var nodeValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","l2:root",docType);
    childList = doc.getElementsByTagNameNS("http://www.nist.gov","employee");
    element = childList.item(1);
    attr = element.getAttributeNode("defaultAttr");
    importedAttr = newDoc.importNode(attr,true);
    nodeName = importedAttr.nodeName;

    nodeValue = importedAttr.nodeValue;

    nodeType = importedAttr.nodeType;

    test.equal(nodeName, "defaultAttr", "documentimportnode04_nodeName");
    test.equal(nodeType, 2, "documentimportnode04_nodeType");
    test.equal(nodeValue, "defaultVal", "documentimportnode04_nodeValue");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=false, import a newly created attribute node,
   into the another document.
   Check the nodeName, nodeType and nodeValue namespaceURI of the imported node to
   verify if it has been imported correctly.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode05: function(test) {
    var success;
    var attr;
    var importedAttr;
    var nodeName;
    var nodeType;
    var nodeValue;
    var namespaceURI;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var docImported = require('./core/files/staff.xml').staff();
    attr = doc.createAttributeNS("http://www.w3.org/DOM/Test","a_:b0");
    importedAttr = docImported.importNode(attr,false);
    nodeName = importedAttr.nodeName;

    nodeValue = importedAttr.nodeValue;

    nodeType = importedAttr.nodeType;

    namespaceURI = importedAttr.namespaceURI;

    test.equal(nodeName, "a_:b0", "documentimportnode05_nodeName");
    test.equal(nodeType, 2, "documentimportnode05_nodeType");
    test.equal(nodeValue, "", "documentimportnode05_nodeValue");
    test.equal(namespaceURI, "http://www.w3.org/DOM/Test", "documentimportnode05_namespaceURI");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   A NOT_SUPPORTED_ERR is raised if the type of node being imported is
   not supported

   Using the method importNode with deep=false, try to import this document object to itself.
   Since Document nodes cannot be imported, a NOT_SUPPORTED_ERR should be raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode06: function(test) {
    var success;
    var docImported;


    var doc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        docImported = doc.importNode(doc,false);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   A NOT_SUPPORTED_ERR is raised if the type of node being imported is
   not supported

   Using the method importNode with deep=true, try to import this Document's
   DocumentType object. Since DocumentType nodes cannot be imported, a
   NOT_SUPPORTED_ERR should be raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode07: function(test) {
    var success;
    var imported;
    var docType;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;


    {
      success = false;
      try {
        imported = doc.importNode(docType,true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   A NOT_SUPPORTED_ERR is raised if the type of node being imported is
   not supported

   Using the method importNode with deep=true, try to import a newly created DOcumentType
   node. Since DocumentType nodes cannot be imported, a NOT_SUPPORTED_ERR should be raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  documentimportnode08: function(test) {
    var success;
    var imported;
    var docType;
    var domImpl;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    docType = domImpl.createDocumentType("test:root",nullNS,nullNS);

    {
      success = false;
      try {
        imported = doc.importNode(docType,true);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=false, import a newly created DocumentFragment node
   with the first address element from this Document appended to it into this document.
   Since deep=false, an empty DocumentFragment should be returned

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode09: function(test) {
    var success;
    var docFragment;
    var childList;
    var success;
    var addressNode;
    var appendedChild;
    var importedDocFrag;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docFragment = doc.createDocumentFragment();
    childList = doc.getElementsByTagNameNS("*","address");
    addressNode = childList.item(0);
    appendedChild = docFragment.appendChild(addressNode);
    importedDocFrag = doc.importNode(docFragment,false);
    success = importedDocFrag.hasChildNodes();
    test.equal(success, false, 'success should be *false*');
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=false, import a newly created DocumentFragment node
   with the first address element from this Document appended to it into this document.
   Since deep=true, a DocumentFragment with its child should be returned

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode10: function(test) {
    var success;
    var docFragment;
    var childList;
    var success;
    var addressNode;
    var appendedChild;
    var importedDocFrag;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docFragment = doc.createDocumentFragment();
    childList = doc.getElementsByTagNameNS("*","address");
    addressNode = childList.item(0);
    appendedChild = docFragment.appendChild(addressNode);
    importedDocFrag = doc.importNode(docFragment,true);
    success = importedDocFrag.hasChildNodes();
    test.ok(success, 'documentimportnode10');
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=false, import this Document's documentElement
   node.  Verify if the node has been imported correctly by its nodeName atttribute and
   if the original document is not altered by checking if hasChildNodes returns false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode11: function(test) {
    var success;
    var docElement;
    var imported;
    var success;
    var nodeNameOrig;
    var nodeNameImported;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docElement = doc.documentElement;

    imported = doc.importNode(docElement,false);
    success = imported.hasChildNodes();
    test.equal(success, false, 'success should be *false*');
    nodeNameImported = imported.nodeName;

    nodeNameOrig = docElement.nodeName;

    test.equal(nodeNameOrig, nodeNameImported, "documentimportnode11_NodeName");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true, import the first address element node of this
   Document.  Verify if the node has been imported correctly by checking the length of the
   this elements childNode list before and after the import.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode12: function(test) {
    var success;
    var childList;
    var imported;
    var addressElem;
    var addressElemChildren;
    var importedChildren;
    var addressElemLen;
    var importedLen;


    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("*","address");
    addressElem = childList.item(0);
    imported = doc.importNode(addressElem,true);
    addressElemChildren = addressElem.childNodes;

    importedChildren = imported.childNodes;

    addressElemLen = addressElemChildren.length;

    importedLen = importedChildren.length;

    test.equal(addressElemLen, importedLen, "documentimportnode12");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=false, import the first employee element node of this
   Document.  Verify if the node has been imported correctly by checking the length of the
   this elements childNode list before and after the import.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode13: function(test) {
    var success;
    var childList;
    var imported;
    var importedList;
    var employeeElem;
    var importedLen;


    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("*","employee");
    employeeElem = childList.item(0);
    imported = doc.importNode(employeeElem,false);
    importedList = imported.childNodes;

    importedLen = importedList.length;

    test.equal(importedLen, 0, "documentimportnode13");
    test.done();
  },
  /**
   *
   Using the method importNode with deep=true, import the fourth employee element node of this
   Document.  Verify if the node has been imported correctly by checking
   if the default attribute present on this node has not been imported
   and an explicit attribute has been imported.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=402
   */
  documentimportnode14: function(test) {
    var success;
    var newDoc;
    var nullDocType = null;
    var childList;
    var imported;
    var employeeElem;
    var attrNode;
    var attrValue;
    var nullNS = null;
    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("*","employee");
    employeeElem = childList.item(3);
    var domImpl = require('./core/files/staffNS.xml').staffNS().implementation;
    newDoc = domImpl.createDocument(nullNS,"staff",nullDocType);
    imported = newDoc.importNode(employeeElem,true);
    attrNode = imported.getAttributeNodeNS(nullNS,"defaultAttr");
    test.equal(attrNode, null, 'attrNode should be null');

    attrValue = imported.getAttributeNS("http://www.w3.org/2000/xmlns/","emp");
    test.equal(attrValue, "http://www.nist.gov", "explicitAttrImported");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true, import a newly created Text node for this
   Document.  Verify if the node has been imported correctly by checking the value of the
   imported text node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode15: function(test) {
    var success;
    var textImport;
    var textToImport;
    var nodeValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var docImp = require('./core/files/staffNS.xml').staffNS();
    textToImport = doc.createTextNode("Document.importNode test for a TEXT_NODE");
    textImport = doc.importNode(textToImport,true);
    nodeValue = textImport.nodeValue;

    test.equal(nodeValue, "Document.importNode test for a TEXT_NODE", "documentimportnode15");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true, import a newly created Comment node for this
   Document.  Verify if the node has been imported correctly by checking the value of the
   imported Comment node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode17: function(test) {
    var success;
    var commentImport;
    var commentToImport;
    var nodeValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var docImp = require('./core/files/staffNS.xml').staffNS();
    commentToImport = doc.createComment("Document.importNode test for a COMMENT_NODE");
    commentImport = doc.importNode(commentToImport,true);
    nodeValue = commentImport.nodeValue;

    test.equal(nodeValue, "Document.importNode test for a COMMENT_NODE", "documentimportnode17");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true, import a newly created PI node for this
   Document.  Verify if the node has been imported correctly by checking the PITarget and
   PIData values of the imported PI node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode18: function(test) {
    var success;
    var piImport;
    var piToImport;
    var piData;
    var piTarget;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var docImp = require('./core/files/staffNS.xml').staffNS();
    piToImport = doc.createProcessingInstruction("Target","Data");
    piImport = doc.importNode(piToImport,false);
    piTarget = piImport.target;

    piData = piImport.data;

    test.equal(piTarget, "Target", "documentimportnode18_Target");
    test.equal(piData, "Data", "documentimportnode18_Data");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true/false, import a entity nodes ent2 and ent6
   from this document to a new document object.  Verify if the nodes have been
   imported correctly by checking the nodeNames of the imported nodes and public and system ids.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode19: function(test) {
    var success;
    var docTypeNull = null;

    var docImp;
    var domImpl;
    var docType;
    var nodeMap;
    var entity2;
    var entity6;
    var entityImp2;
    var entityImp6;
    var nodeName;
    var systemId;
    var notationName;
    var nodeNameImp;
    var systemIdImp;
    var notationNameImp;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    docType = doc.doctype;

    docImp = domImpl.createDocument("http://www.w3.org/DOM/Test","a:b",docTypeNull);
    nodeMap = docType.entities;

    test.notEqual(nodeMap, null, 'nodeMap should be null');
    entity2 = nodeMap.getNamedItem("ent2");
    entity6 = nodeMap.getNamedItem("ent6");
    entityImp2 = docImp.importNode(entity2,false);
    entityImp6 = docImp.importNode(entity6,true);
    nodeName = entity2.nodeName;

    nodeNameImp = entityImp2.nodeName;

    test.equal(nodeNameImp, nodeName, "documentimportnode19_Ent2NodeName");
    nodeName = entity6.nodeName;

    nodeNameImp = entityImp6.nodeName;

    test.equal(nodeNameImp, nodeName, "documentimportnode19_Ent6NodeName");
    systemId = entity2.systemId;

    systemIdImp = entityImp2.systemId;

    test.equal(systemIdImp, systemId, "documentimportnode19_Ent2SystemId");
    systemId = entity6.systemId;

    systemIdImp = entityImp6.systemId;

    test.equal(systemIdImp, systemId, "documentimportnode19_Ent6SystemId");
    notationName = entity2.notationName;

    notationNameImp = entityImp2.notationName;

    test.equal(notationNameImp, notationName, "documentimportnode19_Ent2NotationName");
    notationName = entity6.notationName;

    notationNameImp = entityImp6.notationName;

    test.equal(notationNameImp, notationName, "documentimportnode19_Ent6NotationName");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true, import a entity node ent4
   from this document to a new document object.  The replacement text of this entity is an element
   node, a cdata node and a pi.  Verify if the nodes have been
   imported correctly by checking the nodeNames of the imported element node, the data for the
   cdata nodes and the PItarget and PIData for the pi nodes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode20: function(test) {
    var success;
    var docImp;
    var domImpl;
    var docType;
    var docTypeNull = null;

    var nodeMap;
    var entity4;
    var entityImp4;
    var element;
    var cdata;
    var pi;
    var childList;
    var elemchildList;
    var ent4Name;
    var ent4ImpName;
    var cdataVal;
    var piTargetVal;
    var piDataVal;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    docType = doc.doctype;

    docImp = domImpl.createDocument("http://www.w3.org/DOM/Test","a:b",docTypeNull);
    nodeMap = docType.entities;

    entity4 = nodeMap.getNamedItem("ent4");
    entityImp4 = docImp.importNode(entity4,true);
    childList = entityImp4.childNodes;

    element = childList.item(0);
    elemchildList = element.childNodes;

    cdata = elemchildList.item(0);
    pi = childList.item(1);
    ent4Name = entity4.nodeName;

    ent4ImpName = entityImp4.nodeName;

    cdataVal = cdata.data;

    piTargetVal = pi.target;

    piDataVal = pi.data;

    test.equal(ent4ImpName, ent4Name, "documentimportnode20_Ent4NodeName");
    test.equal(cdataVal, "Element data", "documentimportnode20_Cdata");
    test.equal(piTargetVal, "PItarget", "documentimportnode20_PITarget");
    test.equal(piDataVal, "PIdata", "documentimportnode20_PIData");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true, retreive the entity refs present in the
   second element node whose tagName is address and import these nodes into another document.
   Verify if the nodes have been imported correctly by checking the nodeNames of the
   imported nodes, since they are imported into a new document which doesnot have thes defined,
   the imported nodes should not have any children.
   Now import the entityRef nodes into the same document and verify if the nodes have been
   imported correctly by checking the nodeNames of the imported nodes, and by checking the
   value of the replacement text of the imported nodes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode21: function(test) {
    var success;
    var docTypeNull = null;

    var docImp;
    var domImpl;
    var addressList;
    var addressChildList;
    var element;
    var entRef2;
    var entRefImp2;
    var entRef3;
    var entRefImp3;
    var nodeName2;
    var nodeName3;
    var nodeNameImp2;
    var nodeNameImp3;
    var nodes;
    var nodeImp3;
    var nodeImp2;
    var nodeValueImp2;
    var nodeValueImp3;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    docImp = domImpl.createDocument("http://www.w3.org/DOM/Test","a:b",docTypeNull);
    addressList = doc.getElementsByTagName("address");
    element = addressList.item(1);
    addressChildList = element.childNodes;

    entRef2 = addressChildList.item(0);
    entRef3 = addressChildList.item(2);
    entRefImp2 = docImp.importNode(entRef2,true);
    entRefImp3 = docImp.importNode(entRef3,false);
    nodeName2 = entRef2.nodeName;

    nodeName3 = entRef3.nodeName;

    nodeNameImp2 = entRefImp2.nodeName;

    nodeNameImp3 = entRefImp3.nodeName;

    test.equal(nodeNameImp2, nodeName2, "documentimportnode21_Ent2NodeName");
    test.equal(nodeNameImp3, nodeName3, "documentimportnode21_Ent3NodeName");
    entRefImp2 = doc.importNode(entRef2,true);
    entRefImp3 = doc.importNode(entRef3,false);
    nodes = entRefImp2.childNodes;

    nodeImp2 = nodes.item(0);
    nodeValueImp2 = nodeImp2.nodeValue;

    nodes = entRefImp3.childNodes;

    nodeImp3 = nodes.item(0);
    nodeValueImp3 = nodeImp3.nodeValue;

    test.equal(nodeValueImp2, "1900 Dallas Road", "documentimportnode21_Ent2NodeValue");
    test.equal(nodeValueImp3, "Texas", "documentimportnode21_Ent3Nodevalue");
    test.done();
  },
  /**
   *
   The importNode method imports a node from another document to this document.
   The returned node has no parent; (parentNode is null). The source node is not
   altered or removed from the original document but a new copy of the source node
   is created.

   Using the method importNode with deep=true/false, import two notaiton nodes into the
   same and different documnet objects.  In each case check if valid public and systemids
   are returned if any and if none, check if a null value was returned.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  documentimportnode22: function(test) {
    var success;
    var docTypeNull = null;

    var docImp;
    var domImpl;
    var docType;
    var nodeMap;
    var notation1;
    var notation2;
    var notationImp1;
    var notationImp2;
    var notationImpNew1;
    var notationImpNew2;
    var publicId1;
    var publicId1Imp;
    var publicId1NewImp;
    var publicId2Imp;
    var publicId2NewImp;
    var systemId1Imp;
    var systemId1NewImp;
    var systemId2;
    var systemId2Imp;
    var systemId2NewImp;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    docType = doc.doctype;

    docImp = domImpl.createDocument("http://www.w3.org/DOM/Test","a:b",docTypeNull);
    nodeMap = docType.notations;

    test.notEqual(nodeMap, null, 'nodeMap should be null');
    notation1 = nodeMap.getNamedItem("notation1");
    notation2 = nodeMap.getNamedItem("notation2");
    notationImp1 = doc.importNode(notation1,true);
    notationImp2 = doc.importNode(notation2,false);
    notationImpNew1 = docImp.importNode(notation1,false);
    notationImpNew2 = docImp.importNode(notation2,true);
    publicId1 = notation1.publicId;

    publicId1Imp = notation1.publicId;

    publicId1NewImp = notation1.publicId;

    systemId1Imp = notation1.systemId;

    systemId1NewImp = notation1.systemId;

    publicId2Imp = notation2.publicId;

    publicId2NewImp = notation2.publicId;

    systemId2 = notation2.systemId;

    systemId2Imp = notation2.systemId;

    systemId2NewImp = notation2.systemId;

    test.equal(publicId1Imp, publicId1, "documentimportnode22_N1PID");
    test.equal(publicId1NewImp, publicId1, "documentimportnode22_N1NPID");
    test.equal(systemId1Imp, null, 'systemId1Imp should not be null');
    test.equal(systemId1NewImp, null, 'systemId1NewImp should not be null');
    test.equal(systemId2Imp, systemId2, "documentimportnode22_N2SID");
    test.equal(systemId2NewImp, systemId2, "documentimportnode22_N2NSID");
    test.equal(publicId2Imp, null, 'publicId2Imp should not be null');
    test.equal(publicId2Imp, null, 'publicId2Imp should not be null');
    test.done();
  }
})

exports['documenttypeinternalSubset'] = testcase({
  /**
   *
   The method getInternalSubset() returns the internal subset as a string.

   Create a new DocumentType node with null values for publicId and systemId.
   Verify that its internal subset is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-Core-DocType-internalSubset
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  documenttypeinternalSubset01: function(test) {
    var success;
    var docType;
    var domImpl;
    var internal;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    docType = domImpl.createDocumentType("l2:root",nullNS,nullNS);
    internal = docType.internalSubset;

    test.equal(internal, null, 'internal should not be null');
    test.done();
  }
})

exports['documenttypepublicid'] = testcase({
  /**
   *
   The method getInternalSubset() returns the public identifier of the external subset.

   Create a new DocumentType node with the value "PUB" for its publicId.
   Check the value of the publicId attribute using getPublicId().

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-Core-DocType-publicId
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  documenttypepublicid01: function(test) {
    var success;
    var docType;
    var domImpl;
    var publicId;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    docType = domImpl.createDocumentType("l2:root","PUB",nullNS);
    publicId = docType.publicId;

    test.equal(publicId, "PUB", "documenttypepublicid01");
    test.done();
  }
})

exports['documenttypesystemid'] = testcase({
  /**
   *
   The method getInternalSubset() returns the public identifier of the external subset.

   Create a new DocumentType node with the value "SYS" for its systemId and PUB for
   its publicId.  Check the value of the systemId and pbulicId attributes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-Core-DocType-systemId
   */
  documenttypesystemid01: function(test) {
    var success;
    var docType;
    var domImpl;
    var publicId;
    var systemId;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    docType = domImpl.createDocumentType("l2:root","PUB","SYS");
    publicId = docType.publicId;

    systemId = docType.systemId;

    test.equal(publicId, "PUB", "documenttypepublicid01");
    test.equal(systemId, "SYS", "documenttypesystemid01");
    test.done();
  }
})

exports['domimplementationcreatedocument'] = testcase({
  /**
   *

   The createDocument method with valid arguments, should create a DOM Document of

   the specified type.



   Call the createDocument on this DOMImplementation with

   createDocument ("http://www.w3.org/DOMTest/L2",see the array below for valid QNames,null).

   Check if the returned Document object is is empty with no Document Element.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   */
  domimplementationcreatedocument03: function(test) {
    var success;
    var domImpl;
    var newDoc;
    var docType = null;

    var namespaceURI = "http://www.w3.org/DOMTest/L2";
    var qualifiedName;
    qualifiedNames = new Array();
    qualifiedNames[0] = "_:_";
    qualifiedNames[1] = "_:h0";
    qualifiedNames[2] = "_:test";
    qualifiedNames[3] = "l_:_";
    qualifiedNames[4] = "ns:_0";
    qualifiedNames[5] = "ns:a0";
    qualifiedNames[6] = "ns0:test";
    qualifiedNames[7] = "a.b:c";
    qualifiedNames[8] = "a-b:c";
    qualifiedNames[9] = "a-b:c";



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    for(var indexN1006B = 0;indexN1006B < qualifiedNames.length; indexN1006B++) {
      qualifiedName = qualifiedNames[indexN1006B];
      newDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
      test.notEqual(newDoc, null, 'newDoc should be null');

    }
    test.done();
  },
  /**
   *

   The createDocument method should throw a NAMESPACE_ERR if the qualifiedName has

   a prefix and the namespaceURI is null.



   Call the createDocument on this DOMImplementation with null namespaceURI and a

   qualifiedName that has a namespace prefix using this DOMImplementation.

   Check if the NAMESPACE_ERR is thrown.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   */
  domimplementationcreatedocument04: function(test) {
    var success;
    var domImpl;
    var newDoc;
    var namespaceURI = null;

    var qualifiedName = "dom:root";
    var docType = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;

    {
      success = false;
      try {
        newDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'domimplementationcreatedocument04');
    }
    test.done();
  },
  /**
   *

   The createDocument method should throw a NAMESPACE_ERR if the qualifiedName has

   a prefix that is xml and the namespaceURI is different from

   http://www..w3.org/XML/1998/namespace.



   Call the createDocument on this DOMImplementation with namespaceURI that is

   http://www.w3.org/xml/1998/namespace and a qualifiedName that has the prefix xml

   Check if the NAMESPACE_ERR is thrown.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   */
  domimplementationcreatedocument05: function(test) {
    var success;
    var domImpl;
    var newDoc;
    var namespaceURI = "http://www.w3.org/xml/1998/namespace";
    var qualifiedName = "xml:root";
    var docType = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;

    {
      success = false;
      try {
        newDoc = domImpl.createDocument(namespaceURI,qualifiedName,docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'domimplementationcreatedocument05');
    }
    test.done();
  },
  /**
   *

   The createDocument method should raise a NAMESPACE_ERR if the qualifiedName is malformed



   Invoke the createDocument method on this DOMImplementation object with null values

   for namespaceURI and docType and a malformed qualifiedName.

   The NAMESPACE_ERR should be raised.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   */
  domimplementationcreatedocument07: function(test) {
    var success;
    var domImpl;
    var newDoc;
    var namespaceURI = "http://www.w3.org/DOMTest/level2";
    var docType = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;

    {
      success = false;
      try {
        newDoc = domImpl.createDocument(namespaceURI,":",docType);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'domimplementationcreatedocument07');
    }
    test.done();
  },
  /**
   *
   The method createDocumentType with valid values for qualifiedName, publicId and
   systemId should create an empty DocumentType node.

   Invoke createDocument on this DOMImplementation with a valid qualifiedName and different
   publicIds and systemIds.  Check if the the DocumentType node was created with its
   ownerDocument attribute set to null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocument
   */
  domimplementationcreatedocumenttype01: function(test) {
    var success;
    var domImpl;
    var newDocType;
    var ownerDocument;
    var qualifiedName = "test:root";
    var publicId;
    var systemId;
    publicIds = new Array();
    publicIds[0] = "1234";
    publicIds[1] = "test";

    systemIds = new Array();
    systemIds[0] = "";
    systemIds[1] = "test";



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    for(var indexN1005D = 0;indexN1005D < publicIds.length; indexN1005D++) {
      publicId = publicIds[indexN1005D];
      for(var indexN10061 = 0;indexN10061 < systemIds.length; indexN10061++) {
        systemId = systemIds[indexN10061];
        newDocType = domImpl.createDocumentType(qualifiedName,publicId,systemId);
        test.notEqual(newDocType, null, 'newDocType should be null');
        ownerDocument = newDocType.ownerDocument;

        test.equal(ownerDocument, null, 'ownerDocument should not be null');

      }

    }
    test.done();
  },
  /**
   *

   The method createDocumentType with valid values for qualifiedName, publicId and

   systemId should create an empty DocumentType node.



   Invoke createDocument on this DOMImplementation with a different valid qualifiedNames

   and a valid publicId and systemId.  Check if the the DocumentType node was created

   with its ownerDocument attribute set to null.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocType
   */
  domimplementationcreatedocumenttype02: function(test) {
    var success;
    var domImpl;
    var newDocType;
    var ownerDocument;
    var publicId = "http://www.w3.org/DOM/Test/dom2.dtd";
    var systemId = "dom2.dtd";
    var qualifiedName;
    qualifiedNames = new Array();
    qualifiedNames[0] = "_:_";
    qualifiedNames[1] = "_:h0";
    qualifiedNames[2] = "_:test";
    qualifiedNames[3] = "_:_.";
    qualifiedNames[4] = "_:a-";
    qualifiedNames[5] = "l_:_";
    qualifiedNames[6] = "ns:_0";
    qualifiedNames[7] = "ns:a0";
    qualifiedNames[8] = "ns0:test";
    qualifiedNames[9] = "ns:EEE.";
    qualifiedNames[10] = "ns:_-";
    qualifiedNames[11] = "a.b:c";
    qualifiedNames[12] = "a-b:c.j";
    qualifiedNames[13] = "a-b:c";



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    for(var indexN10077 = 0;indexN10077 < qualifiedNames.length; indexN10077++) {
      qualifiedName = qualifiedNames[indexN10077];
      newDocType = domImpl.createDocumentType(qualifiedName,publicId,systemId);
      test.notEqual(newDocType, null, 'newDocType should be null');
      ownerDocument = newDocType.ownerDocument;

      test.equal(ownerDocument, null, 'ownerDocument should not be null');

    }
    test.done();
  },
  /**
   *

   The method createDocumentType should raise a INVALID_CHARACTER_ERR if the qualifiedName

   contains an illegal characters.



   Invoke createDocument on this DOMImplementation with qualifiedNames having illegal characters.

   Check if an INVALID_CHARACTER_ERR is raised in each case.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-DOM-createDocType
   */
  domimplementationcreatedocumenttype04: function(test) {
    var success;
    var domImpl;
    var newDocType;
    var publicId = "http://www.w3.org/DOM/Test/dom2.dtd";
    var systemId = "dom2.dtd";
    var qualifiedName;
    qualifiedNames = new Array();
    qualifiedNames[0] = "{";
    qualifiedNames[1] = "}";
    qualifiedNames[2] = "'";
    qualifiedNames[3] = "~";
    qualifiedNames[4] = "`";
    qualifiedNames[5] = "@";
    qualifiedNames[6] = "#";
    qualifiedNames[7] = "$";
    qualifiedNames[8] = "%";
    qualifiedNames[9] = "^";
    qualifiedNames[10] = "&";
    qualifiedNames[11] = "*";
    qualifiedNames[12] = "(";
    qualifiedNames[13] = ")";



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    for(var indexN10073 = 0;indexN10073 < qualifiedNames.length; indexN10073++) {
      qualifiedName = qualifiedNames[indexN10073];

      {
	success = false;
	try {
          newDocType = domImpl.createDocumentType(qualifiedName,publicId,systemId);
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 5);
	}
	test.ok(success, 'domimplementationcreatedocumenttype04');
      }

    }
    test.done();
  }
})

exports['domimplementationfeaturecore'] = testcase({
  /**
   *

   The "feature" parameter in the

   "hasFeature(feature,version)" method is the package name

   of the feature.  Legal values are XML and HTML and CORE.

   (Test for feature core, lower case)



   Retrieve the entire DOM document and invoke its

   "document.implementation" method.  This should create a

   DOMImplementation object whose "hasFeature(feature,

   version)" method is invoked with feature equal to "core".

   The method should return a boolean "true".


   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  domimplementationfeaturecore: function(test) {
    var success;
    var domImpl;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    domImpl = doc.implementation;
    state = domImpl.hasFeature("core","2.0");
    test.ok(state, 'domimplementationFeaturecore');
    test.done();
  }
})

exports['domimplementationfeaturexmlversion2'] = testcase({
  /**
   *

   The "feature" parameter in the

   "hasFeature(feature,version)" method is the package name

   of the feature.  Legal values are XML and HTML.

   (Test for feature "xml" and version "2.0")



   Retrieve the entire DOM document and invoke its

   "document.implementation" method.  This should create a

   DOMImplementation object whose "hasFeature(feature,

   version)" method is invoked with "feature" equal to "xml".

   The method should return a boolean "true".


   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  domimplementationfeaturexmlversion2: function(test) {
    var success;
    var domImpl;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    domImpl = doc.implementation;
    state = domImpl.hasFeature("xml","2.0");
    test.ok(state, 'domimplementationFeaturexmlVersion2');
    test.done();
  }
})

exports['domimplementationhasfeature'] = testcase({
  /**
   *
   The method "hasFeature(feature,version)" tests if the DOMImplementation implements
   a specific feature and if so returns true.

   Call the hasFeature method on this DOMImplementation with a combination of features
   versions as below.  Valid feature names are case insensitive and versions "2.0",
   "1.0" and if the version is not specified, supporting any version of the feature
   should return true.  Check if the value returned value was true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  domimplementationhasfeature01: function(test) {
    var success;
    var domImpl;
    var version = "";
    var version1 = "1.0";
    var version2 = "2.0";
    var featureCore;
    var featureXML;
    var success;
    featuresXML = new Array();
    featuresXML[0] = "XML";
    featuresXML[1] = "xmL";

    featuresCore = new Array();
    featuresCore[0] = "Core";
    featuresCore[1] = "CORE";



    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    for(var indexN10063 = 0;indexN10063 < featuresXML.length; indexN10063++) {
      featureXML = featuresXML[indexN10063];
      success = domImpl.hasFeature(featureXML,version);
      test.ok(success, 'domimplementationhasfeature01_XML_1');
      success = domImpl.hasFeature(featureXML,version1);
      test.ok(success, 'domimplementationhasfeature01_XML_2');

    }
    for(var indexN1007C = 0;indexN1007C < featuresCore.length; indexN1007C++) {
      featureCore = featuresCore[indexN1007C];
      success = domImpl.hasFeature(featureCore,version);
      test.ok(success, 'domimplementationhasfeature01_Core_1');
      success = domImpl.hasFeature(featureCore,version1);
      success = domImpl.hasFeature(featureCore,version2);
      test.ok(success, 'domimplementationhasfeature01_Core_3');

    }
    test.done();
  },
  /**
   *
   The method "hasFeature(feature,version)" tests if the DOMImplementation implements
   a specific feature and if not returns false.

   Call the hasFeature method on this DOMImplementation with a unfimiliar values for
   feature and version.  Check if the value returned was false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  domimplementationhasfeature02: function(test) {
    var success;
    var domImpl;
    var success;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    success = domImpl.hasFeature("Blah Blah","");
    test.equal(success, false, 'success should be *false*');
    test.done();
  }
})

exports['elementgetattributenodens'] = testcase({
  /**
   *
   The method getAttributeNodeNS retrieves an Attr node by local name and namespace URI.
   Create a new element node and add 2 new attribute nodes to it that have the same
   local name but different namespaceURIs and prefixes.
   Retrieve an attribute using namespace and localname and check its value, name and
   namespaceURI.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAtNodeNS
   */
  elementgetattributenodens01: function(test) {
    var success;
    var element;
    var attribute1;
    var attribute2;
    var newAttribute1;
    var newAttribute2;
    var attribute;
    var attrValue;
    var attrName;
    var attNodeName;
    var attrLocalName;
    var attrNS;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("namespaceURI","root");
    attribute1 = doc.createAttributeNS("http://www.w3.org/DOM/Level2","l2:att");
    newAttribute1 = element.setAttributeNodeNS(attribute1);
    attribute2 = doc.createAttributeNS("http://www.w3.org/DOM/Level1","att");
    newAttribute2 = element.setAttributeNodeNS(attribute2);
    attribute = element.getAttributeNodeNS("http://www.w3.org/DOM/Level2","att");
    attrValue = attribute.nodeValue;

    attrName = attribute.name;

    attNodeName = attribute.nodeName;

    attrLocalName = attribute.localName;

    attrNS = attribute.namespaceURI;

    test.equal(attrValue, "", "elementgetattributenodens01_attrValue");
    test.equal(attrName, "l2:att", "elementgetattributenodens01_attrName");
    test.equal(attNodeName, "l2:att", "elementgetattributenodens01_attrNodeName");
    test.equal(attrLocalName, "att", "elementgetattributenodens01_attrLocalName");
    test.equal(attrNS, "http://www.w3.org/DOM/Level2", "elementgetattributenodens01_attrNs");
    test.done();
  },
  /**
   *
   The method getAttributeNodeNS retrieves an Attr node by local name and namespace URI.
   Create a new element node and add a new attribute node to it.  Using the getAttributeNodeNS,
   retrieve the newly added attribute node and check its value.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAtNodeNS
   */
  elementgetattributenodens02: function(test) {
    var success;
    var element;
    var attribute;
    var newAttribute1;
    var attrValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("namespaceURI","root");
    attribute = doc.createAttributeNS("http://www.w3.org/DOM/Level2","l2:att");
    newAttribute1 = element.setAttributeNodeNS(attribute);
    attribute = element.getAttributeNodeNS("http://www.w3.org/DOM/Level2","att");
    attrValue = attribute.nodeValue;

    test.equal(attrValue, "", "elementgetattributenodens02");
    test.done();
  },
  /**
   *
   The method getAttributeNodeNS retrieves an Attr node by local name and namespace URI.
   Using the getAttributeNodeNS, retrieve and verify the value of the default
   attribute node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAtNodeNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  elementgetattributenodens03: function(test) {
    var success;
    var element;
    var attribute;
    var attrValue;
    var childList;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("http://www.nist.gov","employee");
    element = childList.item(1);
    attribute = element.getAttributeNodeNS(nullNS,"defaultAttr");
    attrValue = attribute.nodeValue;

    test.equal(attrValue, "defaultVal", "elementgetattributenodens03");
    test.done();
  }
})

exports['elementgetattributens'] = testcase({
  /**
   *
   The method getAttributeNS retrieves an attribute value by local name and namespace URI.
   Using the getAttributeNodeNS, retreive and verify the value of the default
   attribute node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAttrNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  elementgetattributens02: function(test) {
    var success;
    var element;
    var attrValue;
    var childList;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    childList = doc.getElementsByTagNameNS("http://www.nist.gov","employee");
    element = childList.item(1);
    attrValue = element.getAttributeNS(nullNS,"defaultAttr");
    test.equal(attrValue, "defaultVal", "elementgetattributens02");
    test.done();
  },
  /**
   *
   The method getAttributeNS treats an empty string for the namespace
   URI as meaning no namespace.

   Using getAttributeNS, verify that we get the value of an attribute
   which is not in any namespace if we pass a namespace URI equal to
   "".

   * @author Louis-Dominique Dubeau
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAttrNS
   * @see http://dom.spec.whatwg.org/#dom-element-getattributens
   */
  elementgetattributens03: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var childList = doc.getElementsByTagNameNS("http://www.nist.gov", "employee");
    var element = childList.item(1);
    test.equal(element.getAttributeNS("", "defaultAttr"), "defaultVal",
               "value should be 'defaultVal'");
    test.done();
  }

})

exports['elementgetelementsbytagnamens'] = testcase({
  /**
   *

   The method getElementsByTagNameNS returns a NodeList of all the Elements with a given local

   name and namespace URI in the order in which they are encountered in a preorder traversal

   of the Document tree.

   Invoke getElementsByTagNameNS on the documentElement with values for namespaceURI '*' and

   localName '*'.  Verify if this returns a nodeList of 0 elements.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  elementgetelementsbytagnamens02: function(test) {
    var success;
    var element;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.documentElement;

    elementList = element.getElementsByTagNameNS("**","*");
    test.equal(elementList.length, 0, "elementgetelementsbytagnamens02");
    test.done();
  },
  /**
   *
   Returns a NodeList of all the Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of the Document tree.
   Create a new element node ('root') and append three newly created child nodes (all have
   local name 'child' and defined in different namespaces).
   Test 1: invoke getElementsByTagNameNS to retrieve one of the children.
   Test 2: invoke getElementsByTagNameNS with the value of namespace equals to '*', and
   verify that the node list has length of 3.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  elementgetelementsbytagnamens04: function(test) {
    var success;
    var element;
    var child1;
    var child2;
    var child3;
    var appendedChild;
    var elementList;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM","root");
    child1 = doc.createElementNS("http://www.w3.org/DOM/Level1","dom:child");
    child2 = doc.createElementNS(nullNS,"child");
    child3 = doc.createElementNS("http://www.w3.org/DOM/Level2","dom:child");
    appendedChild = element.appendChild(child1);
    appendedChild = element.appendChild(child2);
    appendedChild = element.appendChild(child3);
    elementList = element.getElementsByTagNameNS(nullNS,"child");
    test.equal(elementList.length, 1, "elementgetelementsbytagnamens04_1");
    elementList = element.getElementsByTagNameNS("*","child");
    test.equal(elementList.length, 3, "elementgetelementsbytagnamens04_2");
    test.done();
  },
  /**
   *

   Returns a NodeList of all the Elements with a given local name and namespace URI in the

   order in which they are encountered in a preorder traversal of the Document tree.

   Invoke getElementsByTagNameNS on the documentElement with the following values:

   namespaceURI: 'http://www.altavista.com'

   localName: '*'.

   Verify if this returns a nodeList of 1 elements.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  elementgetelementsbytagnamens05: function(test) {
    var success;
    var element;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.documentElement;

    elementList = element.getElementsByTagNameNS("http://www.altavista.com","*");
    test.equal(elementList.length, 1, "elementgetelementsbytagnamens05");
    test.done();
  }
})

exports['elementhasattribute'] = testcase({
  /**
   *

   The method hasAttribute returns true when an attribute with a given name is specified

   on this element or has a default value, false otherwise

   Invoke the hasAttribute method to check if the documentElement has attributres.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  elementhasattribute01: function(test) {
    var success;
    var element;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    element = doc.documentElement;

    state = element.hasAttribute("");
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The method hasAttribute returns true when an attribute with a given name is specified
   on this element or has a default value, false otherwise
   Invoke the hasAttribute method to on an element with default attributes and verify if it
   returns true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  elementhasattribute02: function(test) {
    var success;
    var element;
    var state;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:employee");
    element = elementList.item(0);
    test.notEqual(element, null, 'element should be null');
    state = element.hasAttribute("defaultAttr");
    test.ok(state, 'elementhasattribute02');
    test.done();
  },
  /**
   *
   The method hasAttribute returns true when an attribute with a given name is specified
   on this element or has a default value, false otherwise.

   Create an element Node and an attribute Node.  Invoke hasAttribute method
   to verify that there is no attribute. Append the attribute node to the element node.
   Invoke the hasAttribute method on the element and verify if it returns true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  elementhasattribute03: function(test) {
    var success;
    var element;
    var state;
    var attribute;
    var newAttribute;


    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElement("address");
    attribute = doc.createAttribute("domestic");
    state = element.hasAttribute("domestic");
    test.equal(state, false, 'state should be *false*');
    newAttribute = element.setAttributeNode(attribute);
    state = element.hasAttribute("domestic");
    test.ok(state, 'elementhasattribute03_True');
    test.done();
  },
  /**
   *
   The method hasAttribute returns true when an attribute with a given name is specified
   on this element or has a default value, false otherwise.

   Create an element Node and an attribute Node and add the attribute node to the element.
   Invoke the hasAttribute method on the element and verify if the method returns true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  elementhasattribute04: function(test) {
    var success;
    var element;
    var state;
    var attribute;
    var newAttribute;


    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElement("address");
    attribute = doc.createAttribute("domestic");
    newAttribute = element.setAttributeNode(attribute);
    state = element.hasAttribute("domestic");
    test.ok(state, 'elementhasattribute04');
    test.done();
  }
})

exports['elementhasattributens'] = testcase({
  /**
   *
   The method hasAttributeNS returns true when an attribute with a given local name
   and namespace
   URI is specified on this element or has a default value, false otherwise.

   Retreive the first employee element node.  Invoke the hasAttributeNS method to check if it
   has the xmlns attribute that belongs to the namespace http://www.w3.org/2000/xmlns/.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttrNS
   */
  elementhasattributens01: function(test) {
    var success;
    var element;
    var state;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","employee");
    element = elementList.item(0);
    state = element.hasAttributeNS("http://www.w3.org/2000/xmlns/","xmlns");
    test.ok(state, 'elementhasattributens01');
    test.done();
  },
  /**
   *
   The method hasAttributeNS returns true when an attribute with a given local
   name and namespace URI is specified on this element or has a default value,
   false otherwise.

   Create a new element and attribute node that belong to the same namespace.
   Add the attribute node to the element node.  Check if the newly created element
   node has an attribute by invoking the hasAttributeNS method with appropriate
   values for the namespaceURI and localName parameters.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttrNS
   */
  elementhasattributens02: function(test) {
    var success;
    var element;
    var state;
    var attribute;
    var newAttribute;


    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElementNS("http://www.w3.org/DOM","address");
    attribute = doc.createAttributeNS("http://www.w3.org/DOM","domestic");
    newAttribute = element.setAttributeNode(attribute);
    state = element.hasAttributeNS("http://www.w3.org/DOM","domestic");
    test.ok(state, 'hasDomesticAttr');
    test.done();
  },
  /**
   *
   The method hasAttributeNS returns true when an attribute with a given local name
   and namespace URI is specified on this element or has a default value,
   false otherwise.

   Create a new element and an attribute node that has an empty namespace.
   Add the attribute node to the element node.  Check if the newly created element
   node has an attribute by invoking the hasAttributeNS method with appropriate
   values for the namespaceURI and localName parameters.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttrNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  elementhasattributens03: function(test) {
    var success;
    var element;
    var state;
    var attribute;
    var newAttribute;
    var nullNS = null;



    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElementNS("http://www.w3.org/DOM","address");
    test.notEqual(element, null, 'element should be null');
    attribute = doc.createAttributeNS(nullNS,"domestic");
    newAttribute = element.setAttributeNode(attribute);
    state = element.hasAttributeNS(nullNS,"domestic");
    test.ok(state, 'elementhasattributens03');
    test.done();
  }
})

exports['elementremoveattributens'] = testcase({
  /**
   *
   The method removeAttributeNS removes an attribute by local name and namespace URI.
   Create a new element and add a new attribute node to it.
   Remove the attribute node using the removeAttributeNodeNS method.
   Check if the attribute was removed by invoking the hasAttributeNS
   method on the element and check if it returns false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElRemAtNS
   */
  elementremoveattributens01: function(test) {
    var success;
    var element;
    var state;
    var attribute;
    var newAttribute;

    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElementNS("http://www.w3.org/DOM","elem");
    attribute = doc.createAttributeNS("http://www.w3.org/DOM/Test/createAttributeNS","attr");
    newAttribute = element.setAttributeNodeNS(attribute);
    test.equal(element.removeAttributeNS("http://www.w3.org/DOM/Test/createAttributeNS","attr"), undefined, "should be undefined");
    state = element.hasAttributeNS("http://www.w3.org/DOM/Test/createAttributeNS","attr");
    test.equal(state, false, 'state should be *false*');
    test.done();
  }
})

exports['elementsetattributenodens'] = testcase({
  /**
   *
   Testing Element.setAttributeNodeNS: If an attribute with that local name
   and that namespace URI is already present in the element, it is replaced
   by the new one.

   Create a new element and two new attribute nodes (in the same namespace
   and same localNames).
   Add the two new attribute nodes to the element node using the
   setAttributeNodeNS method.  Check that only one attribute is added, check
   the value of this attribute.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   */
  elementsetattributenodens01: function(test) {
    var success;
    var element;
    var attribute1;
    var attribute2;
    var attrNode;
    var attrName;
    var attrNS;
    var attrValue;
    var attributes;
    var newAttribute;
    var length;


    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElementNS("http://www.w3.org/DOM/Test/Level2","new:element");
    attribute1 = doc.createAttributeNS("http://www.w3.org/DOM/Test/att1","p1:att");
    attribute2 = doc.createAttributeNS("http://www.w3.org/DOM/Test/att1","p2:att");
    attribute2.value = "value2";

    newAttribute = element.setAttributeNodeNS(attribute1);
    newAttribute = element.setAttributeNodeNS(attribute2);
    attrNode = element.getAttributeNodeNS("http://www.w3.org/DOM/Test/att1","att");
    attrName = attrNode.nodeName;

    attrNS = attrNode.namespaceURI;

    test.equal(attrName, "p2:att", "elementsetattributenodens01_attrName");
    test.equal(attrNS, "http://www.w3.org/DOM/Test/att1", "elementsetattributenodens01_attrNS");
    attributes = element.attributes;

    length = attributes.length;

    test.equal(length, 1, "length");
    test.done();
  },
  /**
   *
   Test the setAttributeNodeNS method.
   Retreive the street attribute from the second address element node.
   Clone it and add it to the first address node.  The INUSE_ATTRIBUTE_ERR exception
   should not be thrown. Check the name and value of the newly added node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  elementsetattributenodens02: function(test) {
    var success;
    var element;
    var element2;
    var attribute;
    var attributeCloned;
    var newAttr;
    var elementList;
    var attrName;
    var attrValue;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = elementList.item(1);
    attribute = element.getAttributeNodeNS(nullNS,"street");
    attributeCloned = attribute.cloneNode(true);
    element2 = elementList.item(2);
    newAttr = element2.setAttributeNodeNS(attributeCloned);
    attrName = newAttr.nodeName;

    attrValue = newAttr.nodeValue;

    test.equal(attrName, "street", "elementsetattributenodens02_attrName");
    test.equal(attrValue, "Yes", "elementsetattributenodens02_attrValue");
    test.done();
  },
  /**
   *
   The method setAttributeNodeNS adds a new attribute and raises the
   INUSE_ATTRIBUTE_ERR exception if the newAttr is already an attribute of
   another Element object.

   Retreive an attribute node of an existing element node.  Attempt to add it to an another
   element node.  Check if the INUSE_ATTRIBUTE_ERR exception is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   */
  elementsetattributenodens03: function(test) {
    var success;
    var element1;
    var element2;
    var attribute;
    var newAttribute;
    var elementList;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element1 = elementList.item(1);
    attribute = element1.getAttributeNodeNS(nullNS,"street");
    element2 = elementList.item(2);

    {
      success = false;
      try {
        newAttribute = element2.setAttributeNodeNS(attribute);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 10);
      }
      test.ok(success, 'elementsetattributenodens03');
    }
    test.done();
  },
  /**
   *
   The method setAttributeNodeNS Adds a new attribute and raises an INUSE_ATTRIBUTE_ERR
   if newAttr is already an attribute of another Element object.

   Create two new element nodes and a new attribute node.  Attempt to add the same attribute
   node to the same two element nodes.
   Check if an INUSE_ATTRIBUTE_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   */
  elementsetattributenodens04: function(test) {
    var success;
    var element1;
    var element2;
    var attribute;
    var newAttribute;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element1 = doc.createElementNS("http://www.w3.org/DOM/Test","elem1");
    element2 = doc.createElementNS("http://www.w3.org/DOM/Test","elem2");
    attribute = doc.createAttributeNS("http://www.w3.org/DOM/Test","attr");
    newAttribute = element1.setAttributeNodeNS(attribute);

    {
      success = false;
      try {
        newAttribute = element2.setAttributeNodeNS(attribute);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 10);
      }
      test.ok(success, 'elementsetattributenodens04');
    }
    test.done();
  },
  /**
   *
   The method setAttributeNodeNS Adds a new attribute and raises
   an WRONG_DOCUMENT_ERR if newAttr was created from a different document
   than the one that created the element.
   Create new element and attribute nodes in different documents.
   Attempt to add the attribute node to the element node.
   Check if an WRONG_DOCUMENT_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   */
  elementsetattributenodens05: function(test) {
    var success;
    var element;
    var attribute;
    var newAttribute;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var docAlt = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test","elem1");
    attribute = docAlt.createAttributeNS("http://www.w3.org/DOM/Test","attr");

    {
      success = false;
      try {
        newAttribute = element.setAttributeNodeNS(attribute);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    }
    test.done();
  },
  /**
   *
   The method setAttributeNodeNS Adds a new attribute and raises an WRONG_DOCUMENT_ERR if this node
   is readonly.

   Attempt to add an attribute node to an element node which is part of the replacement text of
   a read-only EntityReference node.
   Check if a NO_MODIFICATION_ALLOWED_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   */
  elementsetattributenodens06: function(test) {
    var success;
    var element;
    var attribute;
    var attribute2;
    var entRef;
    var elementList;
    var newAttribute;
    var newChild;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test","elem1");
    attribute = doc.createAttributeNS("http://www.w3.org/DOM/Test","attr");
    entRef = doc.createEntityReference("ent4");
    newChild = attribute.appendChild(entRef);
    newAttribute = element.setAttributeNodeNS(attribute);
    elementList = entRef.childNodes;

    element = elementList.item(0);
    attribute2 = doc.createAttributeNS("http://www.w3.org/DOM/Test","attr2");

    {
      success = false;
      try {
        newAttribute = element.setAttributeNodeNS(attribute2);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'elementsetattributenodens06');
    }
    test.done();
  }
})

exports['elementsetattributens'] = testcase({
  /**
   *
   The method setAttributeNS adds a new attribute.
   Create a new element and add a new attribute node to it using the setAttributeNS method.
   Check if the attribute was correctly set by invoking the getAttributeNodeNS method
   and checking the nodeName and nodeValue of the returned nodes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   */
  elementsetattributens01: function(test) {
    var success;
    var element;
    var attribute;
    var attrName;
    var attrValue;


    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElementNS("http://www.w3.org/DOM","dom:elem");
    element.setAttributeNS("http://www.w3.org/DOM/Test/setAttributeNS","attr","value");
    attribute = element.getAttributeNodeNS("http://www.w3.org/DOM/Test/setAttributeNS","attr");
    attrName = attribute.nodeName;

    attrValue = attribute.nodeValue;

    test.equal(attrName, "attr", "elementsetattributens01_attrName");
    test.equal(attrValue, "value", "elementsetattributens01_attrValue");
    test.done();
  },
  /**
   *
   The method setAttributeNS adds a new attribute.

   Retrieve an existing element node with attributes and add a new attribute node to it using
   the setAttributeNS method.   Check if the attribute was correctly set by invoking the
   getAttributeNodeNS method and checking the nodeName and nodeValue of the returned nodes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   */
  elementsetattributens02: function(test) {
    var success;
    var element;
    var attribute;
    var elementList;
    var attrName;
    var attrValue;


    var doc = require('./core/files/staff.xml').staff();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(0);
    element.setAttributeNS("http://www.w3.org/DOM/Test/setAttributeNS","this:street","Silver Street");
    attribute = element.getAttributeNodeNS("http://www.w3.org/DOM/Test/setAttributeNS","street");
    attrName = attribute.nodeName;

    attrValue = attribute.nodeValue;

    test.equal(attrName, "this:street", "elementsetattributens02_attrName");
    test.equal(attrValue, "Silver Street", "elementsetattributens02_attrValue");
    test.done();
  },
  /**
   *
   The method setAttributeNS adds a new attribute.
   Retreive an existing element node with a default attribute node and
   add two new attribute nodes that have the same local name as the
   default attribute but different namespaceURI to it using the setAttributeNS method.
   Check if the attribute was correctly set by invoking the getAttributeNodeNS method
   and checking the nodeName and nodeValue of the returned nodes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   */
  elementsetattributens03: function(test) {
    var success;
    var element;
    var attribute;
    var elementList;
    var attrName;
    var attrValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:employee");
    element = elementList.item(0);
    test.notEqual(element, null, 'element should be null');
    element.setAttributeNS("http://www.w3.org/DOM/Test/1","defaultAttr","default1");
    element.setAttributeNS("http://www.w3.org/DOM/Test/2","defaultAttr","default2");
    attribute = element.getAttributeNodeNS("http://www.w3.org/DOM/Test/1","defaultAttr");
    attrName = attribute.nodeName;

    attrValue = attribute.nodeValue;

    test.equal(attrName, "defaultAttr", "elementsetattributens03_attrName");
    test.equal(attrValue, "default1", "elementsetattributens03_attrValue");
    test.done();
  },
  /**
   *
   The method setAttributeNS adds a new attribute and raises a INVALID_CHARACTER_ERR if
   the specified qualified name contains an illegal character.
   Invoke the setAttributeNS method on this Element object with a valid value for
   namespaceURI, and qualifiedNames that contain illegal characters.  Check if the an
   INVALID_CHARACTER_ERR was thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   */
  elementsetattributens04: function(test) {
    var success;
    var element;
    var qualifiedName;
    qualifiedNames = new Array();
    qualifiedNames[0] = "/";
    qualifiedNames[1] = "//";
    qualifiedNames[2] = "\\";
    qualifiedNames[3] = ";";
    qualifiedNames[4] = "&";
    qualifiedNames[5] = "*";
    qualifiedNames[6] = "]]";
    qualifiedNames[7] = ">";
    qualifiedNames[8] = "<";



    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test/L2","dom:elem");
    for(var indexN10058 = 0;indexN10058 < qualifiedNames.length; indexN10058++) {
      qualifiedName = qualifiedNames[indexN10058];

      {
	success = false;
	try {
          element.setAttributeNS("http://www.w3.org/DOM/Test/L2",qualifiedName,"test");
        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 5);
	}
	test.ok(success, 'elementsetattributens04');
      }

    }
    test.done();
  },
  /**
   *
   The method setAttributeNS adds a new attribute and raises a NAMESPACE_ERR if the
   qualifiedName has a prefix and the namespaceURI is null.
   Invoke the setAttributeNS method on a new Element object with null namespaceURI and a
   qualifiedName that has a namespace prefix.  Check if the NAMESPACE_ERR was thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  elementsetattributens05: function(test) {
    var success;
    var element;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test/L2","dom:elem");

    {
      success = false;
      try {
        element.setAttributeNS(nullNS,"dom:root","test");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'elementsetattributens05');
    }
    test.done();
  },
  /**
   *
   The method setAttributeNS adds a new attribute and raises a NAMESPACE_ERR
   if the qualifiedName, or its prefix, is "xmlns" and the namespaceURI is
   different from "http://www.w3.org/2000/xmlns/".

   Invoke the setAttributeNS method on a new Element object with namespaceURI that is
   http://www.w3.org/DOMTest/level2 and a qualifiedName that has the prefix xmlns and once
   again with a qualifiedName that is xmlns.
   Check if the NAMESPACE_ERR was thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   */
  elementsetattributens08: function(test) {
    var success;
    var element;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOMTest/level2","dom:elem");

    {
      success = false;
      try {
        element.setAttributeNS("http://www.w3.org/DOMTest/level2","xmlns","test");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'elementsetattributens08_Err1');
    }

    {
      success = false;
      try {
        element.setAttributeNS("http://www.w3.org/DOMTest/level2","xmlns:root","test");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'elementsetattributens08_Err2');
    }
    test.done();
  },
  /**
   *
   The method setAttributeNS adds a new attribute in no namespace if
   the namespace URI is set to "".

   * @author Louis-Dominique Dubeau
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://dom.spec.whatwg.org/#dom-element-setattributens
   */
  elementsetattributens09: function(test) {
    var element;

    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElement("elem");

    element.setAttributeNS("","x","test");
    test.equal(element.getAttribute("x"), "test", "getAttribute");
    test.equal(element.getAttributeNS("", "x"), "test",
               "getAttributeNS with ''");
    test.equal(element.getAttributeNS(null, "x"), "test",
               "getAttributeNS with null");
    test.done();
  }
})

exports['elementsetattributensurinull'] = testcase({
  /**
   *
   The "setAttributeNS(namespaceURI,qualifiedName,value)" method raises a NAMESPACE_ERR DOMException if the specified qualifiedName has a prefix and the namespaceURI is null.

   Attempt to add a new attribute on the first employee node.
   An exception should be raised since the "qualifiedName" has a prefix and the namespaceURI is null.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  elementsetattributensurinull: function(test) {
    var success;
    var namespaceURI = null;

    var qualifiedName = "emp:qualifiedName";
    var elementList;
    var testAddr;


    var doc = require('./core/files/staff.xml').staff();
    elementList = doc.getElementsByTagName("employee");
    testAddr = elementList.item(0);

    {
      success = false;
      try {
        testAddr.setAttributeNS(namespaceURI,qualifiedName,"newValue");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  }
})

exports['getAttributeNS'] = testcase({
  /**
   *
   The "getAttributeNS(namespaceURI,localName)" method retrieves an
   attribute value by local name and NamespaceURI.

   Retrieve the first "emp:address" element.
   The value returned by the "getAttributeNS()" method should be the
   value "DISTRICT" since the attribute has a default value.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAttrNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=238
   */
  getAttributeNS01: function(test) {
    var success;
    var namespaceURI = "http://www.nist.gov";
    var localName = "district";
    var qualifiedName = "emp:district";
    var elementList;
    var testAddr;
    var attrValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    attrValue = testAddr.getAttributeNS(namespaceURI,localName);
    test.equal(attrValue, "DISTRICT", "attrValue");
    test.done();
  },
  /**
   *
   The "getAttributeNS(namespaceURI,localName)" method retrieves an
   attribute value by local name and NamespaceURI.

   Retrieve the first "emp:address" element.
   Create a new attribute with the "createAttributeNS()" method.
   Add the new attribute with the "setAttributeNS()" method.
   The value returned by the "getAttributeNS()" method should be the
   empty string since the attribute does not have a default value.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAttrNS
   */
  getAttributeNS02: function(test) {
    var success;
    var namespaceURI = "http://www.nist.gov";
    var localName = "district";
    var qualifiedName = "emp:district";
    var newAttribute;
    var elementList;
    var testAddr;
    var districtAttr;
    var attrValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    newAttribute = doc.createAttributeNS(namespaceURI,qualifiedName);
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should be null');
    districtAttr = testAddr.setAttributeNodeNS(newAttribute);
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    attrValue = testAddr.getAttributeNS(namespaceURI,localName);
    test.equal(attrValue, "", "throw_Equals");
    test.done();
  },
  /**
   *
   The "getAttributeNS(namespaceURI,localName)" method retrieves an
   attribute value by local name and NamespaceURI.

   Retrieve the first "emp:address" element.
   The value returned by the "getAttributeNS()" method for the emp:domestic attribute
   should be the empty string since the attribute does not have a specified value
   because it was removed by the "removeAttributeNS()" method.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAttrNS
   */
  getAttributeNS03: function(test) {
    var success;
    var namespaceURI = "http://www.nist.gov";
    var localName = "domestic";
    var elementList;
    var testAddr;
    var attrValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should be null');
    testAddr.removeAttributeNS(namespaceURI, localName);
    attrValue = testAddr.getAttributeNS(namespaceURI,localName);

// XXX SUPERSEDED BY DOM4
//    test.equal(attrValue, "", "throw_Equals");
    test.equal(attrValue, null, "throw_Equals");

    test.done();
  },
  /**
   *
   The "getAttributeNS(namespaceURI,localName)" method retrieves an
   attribute value by local name and NamespaceURI.

   Retrieve the first "emp:address" element.
   Create a new attribute with the "createAttributeNS()" method.
   Add the new attribute and value with the "setAttributeNS()" method.
   The value returned by the "getAttributeNS()" method should be
   the string "NewValue" since the attribute had a specified value.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAttrNS
   */
  getAttributeNS04: function(test) {
    var success;
    var namespaceURI = "http://www.nist.gov";
    var localName = "blank";
    var qualifiedName = "emp:blank";
    var newAttribute;
    var elementList;
    var testAddr;
    var districtAttr;
    var attrValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    newAttribute = doc.createAttributeNS(namespaceURI,qualifiedName);
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should be null');
    testAddr.setAttributeNS(namespaceURI,qualifiedName,"NewValue");
    attrValue = testAddr.getAttributeNS(namespaceURI,localName);
    test.equal(attrValue, "NewValue", "throw_Equals");
    test.done();
  },
  /**
   *
   The "getAttributeNS(namespaceURI,localName)" method retrieves an
   attribute value by local name and NamespaceURI.

   Retrieve the first emp:address element node
   and retrieve the emp:domestic attribute.  The method returns an
   Attr value as a string, the "value" can be examined to ensure the
   proper attribute value was retrieved.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAttrNS
   */
  getAttributeNS05: function(test) {
    var success;
    var elementList;
    var testAddr;
    var attrValue;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should be null');
    attrValue = testAddr.getAttributeNS("http://www.nist.gov","domestic");
    test.equal(attrValue, "Yes", "attrValue");
    test.done();
  }
})

exports['getAttributeNodeNS'] = testcase({
  /**
   *
   The "getAttributeNodeNS(namespaceURI,localName)" method retrieves an
   attribute node by local name and NamespaceURI.

   Retrieve the first emp:address element node.
   The getAttributeNodeNS method returns an
   Attr node, the "value" can be examined to ensure the
   proper attribute node was retrieved.  This attribute
   value should be null since there is no such attribute.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAtNodeNS
   */
  getAttributeNodeNS01: function(test) {
    var success;
    var namespaceURI = "http://www.nist.gov";
    var localName = "invalidlocalname";
    var elementList;
    var testAddr;
    var attribute;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should be null');
    attribute = testAddr.getAttributeNodeNS(namespaceURI,localName);
    test.equal(attribute, null, 'attribute should not be null');
    test.done();
  },
  /**
   *
   The "getAttributeNodeNS(namespaceURI,localName)" method retrieves an
   attribute node by local name and NamespaceURI.

   Retrieve the first emp:address element node.
   The getAttributeNodeNS method returns an
   Attr node, the "value" can be examined to ensure the
   proper attribute node was retrieved.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-F68D095
   */
  getAttributeNodeNS02: function(test) {
    var success;
    var elementList;
    var testAddr;
    var attribute;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should be null');
    attribute = testAddr.getAttributeNodeNS("http://www.nist.gov","domestic");
    attrName = attribute.nodeName;

    test.equal(attrName, "emp:domestic", "attrName");
    test.done();
  }
})

exports['getElementById'] = testcase({
  /**
   *
   The "getElementById(elementId)" method for a
   Document should return an element whose ID matches elementId.

   Invoke method getElementById(elementId) on this document
   with elementId equals "CANADA".  Method should return an element
   whose tag name is "emp:address".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-104682815
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=383
   */
  getElementById01: function(test) {
    var success;
    var element;
    var tagname;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.getElementById("CANADA");
    tagname = element.tagName;

    test.equal(tagname, "emp:address", "throw_Equals");
    test.done();
  },
  /**
   *

   The "getElementById(elementId)" method for a
   Document should return null if elementId does not identify any
   elements in this document.

   Invoke method getElementById(elementId) on this document
   with elementId equals "Cancun". Method should return null.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBId
   */
  getElementById02: function(test) {
    var success;
    var element;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.getElementById("Cancun");
    test.equal(element, null, 'element should not be null');
    test.done();
  }
})

exports['getElementsByTagNameNS'] = testcase({
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method for a
   Document should return a new NodeList of all Elements that have a namespace
   when local name is specified as ' '.

   Invoke method getElementsByTagNameNS(namespaceURI,localName) on this document
   with namespaceURI and localName as " ".
   Method should return a new NodeList of 37 elements.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  getElementsByTagNameNS01: function(test) {
    var success;
    var namespaceURI = "*";
    var localName = "*";
    var newList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    newList = doc.getElementsByTagNameNS(namespaceURI,localName);
    test.equal(newList.length, 37, "throw_Size");
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method for a
   Document should return a new NodeList of all Elements with a given
   localName and namespaceURI in the order they were encountered in a preorder
   traversal of the document tree.

   Invoke method getElementsByTagNameNS(namespaceURI,localName) on this document
   with namespaceURI being " " and localName is "employee".
   Method should return a new NodeList containing five Elements.
   Retrieve the FOURTH element whose name should be "emp:employee".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  getElementsByTagNameNS02: function(test) {
    var success;
    var newList;
    var newElement;
    var prefix;
    var lname;


    var doc = require('./core/files/staffNS.xml').staffNS();
    newList = doc.getElementsByTagNameNS("*","employee");
    test.equal(newList.length, 5, "employeeCount");
    newElement = newList.item(3);
    prefix = newElement.prefix;

    test.equal(prefix, "emp", "prefix");
    lname = newElement.localName;

    test.equal(lname, "employee", "lname");
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the "http://www.nist.gov" as the namespaceURI and the special value " " as the
   localName.
   The method should return a NodeList of elements that have "http://www.nist.gov
   as a namespace URI.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  getElementsByTagNameNS03: function(test) {
    var success;
    var elementList;
    var child;
    var childName;
    var result = new Array();

    expectedResult = new Array();
    expectedResult[0] = "employee";
    expectedResult[1] = "employeeId";
    expectedResult[2] = "name";
    expectedResult[3] = "position";
    expectedResult[4] = "salary";
    expectedResult[5] = "gender";
    expectedResult[6] = "address";
    expectedResult[7] = "emp:employee";
    expectedResult[8] = "emp:employeeId";
    expectedResult[9] = "emp:position";
    expectedResult[10] = "emp:salary";
    expectedResult[11] = "emp:gender";
    expectedResult[12] = "emp:address";
    expectedResult[13] = "address";



    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","*");
    for(var indexN10076 = 0;indexN10076 < elementList.length; indexN10076++) {
      child = elementList.item(indexN10076);
      childName = child.nodeName;

      result[result.length] = childName;

    }
    test.deepEqual(result, expectedResult, 'nodeNames');
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the special value " " as the namespaceURI and "address" as the
   localName.
   The method should return a NodeList of Elements that have
   "address" as the local name.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  getElementsByTagNameNS04: function(test) {
    var success;
    var elementList;
    var child;
    var childName;
    var result = new Array();

    expectedResult = new Array();
    expectedResult[0] = "address";
    expectedResult[1] = "address";
    expectedResult[2] = "address";
    expectedResult[3] = "emp:address";
    expectedResult[4] = "address";



    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    for(var indexN10059 = 0;indexN10059 < elementList.length; indexN10059++) {
      child = elementList.item(indexN10059);
      childName = child.nodeName;

      result[result.length] = childName;

    }
    test.deepEqual(result, expectedResult, 'nodeNames');
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the "http://www.nist.gov" as the namespaceURI and "nomatch" as the
   localName.
   The method should return a NodeList whose length is
   "0".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  getElementsByTagNameNS05: function(test) {
    var success;
    var namespaceURI = "http://www.nist.gov";
    var localName = "nomatch";
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS(namespaceURI,localName);
    test.equal(elementList.length, 0, "throw_Size");
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the "http://www.nomatch.com" as the namespaceURI and "address" as the
   localName.
   The method should return a NodeList whose length is
   "0".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  getElementsByTagNameNS06: function(test) {
    var success;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nomatch.com","address");
    test.equal(elementList.length, 0, "matchSize");
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the string "http://www.nist.gov" as the namespaceURI and "address" as the
   localName.
   The method should return a NodeList whose length is
   "3".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBTNNS
   */
  getElementsByTagNameNS07: function(test) {
    var success;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    test.equal(elementList.length, 3, "addresses");
    test.done();
  },
  /**
   *
   Element.getElementsByTagNameNS('*','*') should return all child
   elements.  There is some contention on whether this should match
   unqualified elements, this test reflects the interpretation that
   '*' should match elements in all namespaces and unqualified elements.

   Derived from getElementsByTagNameNS01 which tests similar functionality
   on the Document interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1938918D
   */
  getElementsByTagNameNS08: function(test) {
    var success;
    var docElem;
    var newList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docElem = doc.documentElement;

    newList = docElem.getElementsByTagNameNS("*","*");
    test.equal(newList.length, 36, "listSize");
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method for a
   Element should return a new NodeList of all descendant Elements with a given
   localName and namespaceURI in the order they were encountered in a preorder
   traversal of the document tree.

   Invoke method getElementsByTagNameNS(namespaceURI,localName) on the document
   element with namespaceURI being "*" and localName is "employee".
   Method should return a new NodeList containing five Elements.
   Retrieve the FOURTH element whose name should be "emp:employee".

   Derived from getElementsByTagNameNS02 and reflects its interpretation
   that namespace="*" matches namespace unqualified tagnames.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1938918D
   */
  getElementsByTagNameNS09: function(test) {
    var success;
    var newList;
    var newElement;
    var prefix;
    var lname;
    var docElem;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docElem = doc.documentElement;

    newList = docElem.getElementsByTagNameNS("*","employee");
    test.equal(newList.length, 5, "employeeCount");
    newElement = newList.item(3);
    prefix = newElement.prefix;

    test.equal(prefix, "emp", "prefix");
    lname = newElement.localName;

    test.equal(lname, "employee", "lname");
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements of the document element
   using the "http://www.nist.gov" as the namespaceURI and the special value "*" as the
   localName.
   The method should return a NodeList of elements that have "http://www.nist.gov
   as a namespace URI.

   Derived from getElementsByTagNameNS03

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1938918D
   */
  getElementsByTagNameNS10: function(test) {
    var success;
    var docElem;
    var elementList;
    var child;
    var childName;
    var result = new Array();

    expectedResult = new Array();
    expectedResult[0] = "employee";
    expectedResult[1] = "employeeId";
    expectedResult[2] = "name";
    expectedResult[3] = "position";
    expectedResult[4] = "salary";
    expectedResult[5] = "gender";
    expectedResult[6] = "address";
    expectedResult[7] = "emp:employee";
    expectedResult[8] = "emp:employeeId";
    expectedResult[9] = "emp:position";
    expectedResult[10] = "emp:salary";
    expectedResult[11] = "emp:gender";
    expectedResult[12] = "emp:address";
    expectedResult[13] = "address";



    var doc = require('./core/files/staffNS.xml').staffNS();
    docElem = doc.documentElement;

    elementList = docElem.getElementsByTagNameNS("http://www.nist.gov","*");
    for(var indexN1007E = 0;indexN1007E < elementList.length; indexN1007E++) {
      child = elementList.item(indexN1007E);
      childName = child.nodeName;

      result[result.length] = childName;

    }
    test.deepEqual(result, expectedResult, 'nodeNames');
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the special value "*" as the namespaceURI and "address" as the
   localName.
   The method should return a NodeList of Elements that have
   "address" as the local name.

   This test is derived from getElementsByTagNameNS04

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1938918D
   */
  getElementsByTagNameNS11: function(test) {
    var success;
    var docElem;
    var elementList;
    var child;
    var childName;
    var result = new Array();

    expectedResult = new Array();
    expectedResult[0] = "address";
    expectedResult[1] = "address";
    expectedResult[2] = "address";
    expectedResult[3] = "emp:address";
    expectedResult[4] = "address";



    var doc = require('./core/files/staffNS.xml').staffNS();
    docElem = doc.documentElement;

    elementList = docElem.getElementsByTagNameNS("*","address");
    for(var indexN1005E = 0;indexN1005E < elementList.length; indexN1005E++) {
      child = elementList.item(indexN1005E);
      childName = child.nodeName;

      result[result.length] = childName;

    }
    test.deepEqual(result, expectedResult, 'nodeNames');
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the "http://www.nist.gov" as the namespaceURI and "nomatch" as the
   localName.
   The method should return a NodeList whose length is "0".

   This test is a modification of getElementsByTagName05

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1938918D
   */
  getElementsByTagNameNS12: function(test) {
    var success;
    var docElem;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docElem = doc.documentElement;

    elementList = docElem.getElementsByTagNameNS("http://www.nist.gov","nomatch");
    test.equal(elementList.length, 0, "size");
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the "http://www.nomatch.com" as the namespaceURI and "address" as the
   localName.
   The method should return a NodeList whose length is
   "0".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1938918D
   */
  getElementsByTagNameNS13: function(test) {
    var success;
    var docElem;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docElem = doc.documentElement;

    elementList = docElem.getElementsByTagNameNS("http://www.nomatch.com","address");
    test.equal(elementList.length, 0, "matchSize");
    test.done();
  },
  /**
   *
   The "getElementsByTagNameNS(namespaceURI,localName)" method returns a NodeList
   of all descendant Elements with a given local name and namespace URI in the
   order in which they are encountered in a preorder traversal of this Element tree.

   Create a NodeList of all the descendant elements
   using the string "http://www.nist.gov" as the namespaceURI and "address" as the
   localName.
   The method should return a NodeList whose length is
   "3".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1938918D
   */
  getElementsByTagNameNS14: function(test) {
    var success;
    var docElem;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docElem = doc.documentElement;

    elementList = docElem.getElementsByTagNameNS("http://www.nist.gov","address");
    test.equal(elementList.length, 3, "addresses");
    test.done();
  }
})

exports['getNamedItemNS'] = testcase({
  /**
   *
   The "getNamedItemNS(namespaceURI,localName)" method for a
   NamedNodeMap should return a node specified by localName and namespaceURI

   Retrieve a list of elements with tag name "address".
   Access the second element from the list and get its attributes.
   Try to retrieve the attribute node with local name "domestic"
   and namespace uri "http://www.usa.com" with
   method getNamedItemNS(namespaceURI,localName).

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-F68D095
   */
  getNamedItemNS01: function(test) {
    var success;
    var elementList;
    var testEmployee;
    var attributes;
    var domesticAttr;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    testEmployee = elementList.item(1);
    attributes = testEmployee.attributes;

    domesticAttr = attributes.getNamedItemNS("http://www.usa.com","domestic");
    attrName = domesticAttr.nodeName;

    test.equal(attrName, "dmstc:domestic", "attrName");
    test.done();
  },
  /**
   *
   The "getNamedItemNS(namespaceURI,localName)" method for a
   NamedNodeMap should return null
   if parameters do not identify any node in this map.

   Retrieve a list of elements with tag name "address".
   Access the second element from the list and get its attributes.
   Try to retrieve an attribute node with local name "domest"
   and namespace uri "http://www.usa.com" with
   method getNamedItemNS(namespaceURI,localName).
   This should return null because "domest" does not match any local names in this map.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   */
  getNamedItemNS02: function(test) {
    var success;
    var namespaceURI = "http://www.usa.com";
    var localName = "domest";
    var elementList;
    var testEmployee;
    var attributes;
    var newAttr;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    testEmployee = elementList.item(1);
    attributes = testEmployee.attributes;

    newAttr = attributes.getNamedItemNS(namespaceURI,localName);
    test.equal(newAttr, null, 'newAttr should not be null');
    test.done();
  },
  /**
   *
   Entity nodes are not namespaced and should not be retrievable using
   getNamedItemNS.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  getNamedItemNS03: function(test) {
    var success;
    var docType;
    var entities;
    var entity;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    entities = docType.entities;

    test.notEqual(entities, null, 'entities should be null');
    entity = entities.getNamedItemNS(nullNS,"ent1");
    test.equal(entity, null, 'entity should not be null');
    test.done();
  },
  /**
   *
   Notation nodes are not namespaced and should not be retrievable using
   getNamedItemNS.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  getNamedItemNS04: function(test) {
    var success;
    var docType;
    var notations;
    var notation;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    notations = docType.notations;

    test.notEqual(notations, null, 'notations should be null');
    notation = notations.getNamedItemNS(nullNS,"notation1");
    test.equal(notation, null, 'notation should not be null');
    test.done();
  }
})

exports['hasAttribute'] = testcase({
  /**
   *
   The "hasAttribute()" method for an Element should
   return true if the element has an attribute with the given name.

   Retrieve the first "address" element and the "hasAttribute()" method
   should return false since the element does not have a default value.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttr
   */
  hasAttribute01: function(test) {
    var success;
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    elementList = doc.getElementsByTagName("address");
    testNode = elementList.item(4);
    state = testNode.hasAttribute("domestic");
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The "hasAttribute()" method for an Element should
   return true if the element has an attribute with the given name.

   Retrieve the first "address" element and the "hasAttribute()" method
   should return true since the attribute "street" has a default value.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttr
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=238
   */
  hasAttribute02: function(test) {
    var success;
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    elementList = doc.getElementsByTagName("address");
    testNode = elementList.item(0);
    state = testNode.hasAttribute("street");
    test.ok(state, 'throw_True');
    test.done();
  },
  /**
   *
   The "hasAttribute()" method for an Element should
   return false if the element does not have an attribute with the given name.

   Retrieve the first "address" element and the "hasAttribute()" method
   should return false since the element does not have "nomatch" as an attribute.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttr
   */
  hasAttribute03: function(test) {
    var success;
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    elementList = doc.getElementsByTagName("address");
    testNode = elementList.item(0);
    state = testNode.hasAttribute("nomatch");
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The "hasAttribute()" method for an Element should
   return true if the element has an attribute with the given name.

   Retrieve the first "address" element and the "hasAttribute()" method
   should return true since the element has "domestic" as an attribute.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttr
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=238
   */
  hasAttribute04: function(test) {
    var success;
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    testNode = elementList.item(0);
    state = testNode.hasAttribute("dmstc:domestic");
    test.ok(state, 'hasDomesticAttr');
    test.done();
  }
})

exports['hasAttributeNS'] = testcase({
  /**
   *

   The "hasAttributeNS()" method for an Element should
   return false if the element does not have an attribute with the given local name
   and/or a namespace URI specified on this element or does not have a default value.

   Retrieve the first "address" element and the "hasAttributeNS()" method
   should return false since the element has "nomatch" as the local name
   and "http://www.usa.com" as the namespace URI.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttrNS
   */
  hasAttributeNS01: function(test) {
    var success;
    var localName = "nomatch";
    var namespaceURI = "http://www.usa.com";
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    testNode = elementList.item(0);
    state = testNode.hasAttributeNS(namespaceURI,localName);
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The "hasAttributeNS()" method for an Element should
   return false if the element does not have an attribute with the given local name
   and/or namespace URI specified on this element or does not have a default value.

   Retrieve the first "address" element and the "hasAttributeNS()" method
   should return false since the element has "domestic" as the local name
   and "http://www.nomatch.com" as the namespace URI.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttrNS
   */
  hasAttributeNS02: function(test) {
    var success;
    var localName = "domestic";
    var namespaceURI = "http://www.nomatch.com";
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    testNode = elementList.item(0);
    state = testNode.hasAttributeNS(namespaceURI,localName);
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The "hasAttributeNS()" method for an Element should
   return false if the element does not have an attribute with the given local name
   and/or namespace URI specified on this element or does not have a default value.

   Retrieve the first "emp:address" element.
   The boolean value returned by the "hasAttributeNS()" should be false
   since the attribute does not have a default value.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttrNS
   */
  hasAttributeNS03: function(test) {
    var success;
    var localName = "blank";
    var namespaceURI = "http://www.nist.gov";
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testNode = elementList.item(0);
    test.notEqual(testNode, null, 'testNode should be null');
    state = testNode.hasAttributeNS(namespaceURI,localName);
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The "hasAttributeNS()" method for an Element should
   return true if the attribute with the given local name
   and namespace URI has a default value.

   Retrieve the first "emp:address" element.
   The boolean value returned by the "hasAttributeNS()" should be true
   since the attribute has a default value.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttrNS
   */
  hasAttributeNS04: function(test) {
    var success;
    var localName = "district";
    var namespaceURI = "http://www.nist.gov";
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testNode = elementList.item(0);
    test.notEqual(testNode, null, 'testNode should be null');
    state = testNode.hasAttributeNS(namespaceURI,localName);
    test.ok(state, 'hasAttribute');
    test.done();
  },
  /**
   *
   The "hasAttributeNS()" method for an Element should
   return true if the element has an attribute with the given local name
   and the namespace URI is specified on this element or has a default value.

   Retrieve the first "address" element and the "hasAttributeNS()" method
   should return true since the element has "domestic" as the local name
   and "http://www.usa.com" as the namespace URI.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElHasAttrNS
   */
  hasAttributeNS05: function(test) {
    var success;
    var localName = "domestic";
    var namespaceURI = "http://www.usa.com";
    var elementList;
    var testNode;
    var state;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    testNode = elementList.item(0);
    state = testNode.hasAttributeNS(namespaceURI,localName);
    test.ok(state, 'hasAttribute');
    test.done();
  },
  /**
   *
   The method hasAttributeNS checks in no namespace if the namespace
   URI is set to "".

   * @author Louis-Dominique Dubeau
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS
   * @see http://dom.spec.whatwg.org/#dom-element-hasattributens
   */
  hasAttributeNS06: function(test) {
    var element;

    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElement("elem");

    element.setAttribute("x","test");
    test.ok(element.hasAttributeNS("", "x"), "getAttributeNS with ''");
    test.ok(element.hasAttributeNS(null, "x"), "getAttributeNS with null");
    test.done();
  }

})

exports['hasAttributes'] = testcase({
  /**
   *
   The "hasAttributes()" method for a node should
   return false if the node does not have an attribute.

   Retrieve the first "name" node and invoke the "hasAttributes()" method.
   The method should return false since the node does not have an attribute.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  hasAttributes01: function(test) {
    var success;
    var addrList;
    var addrNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    addrList = doc.getElementsByTagName("name");
    addrNode = addrList.item(0);
    state = addrNode.hasAttributes();
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The "hasAttributes()" method for a node should
   return true if the node has attributes.

   Retrieve the first address node and the "hasAttributes()" method
   should return true since the node has "domestic" as an attribute.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  hasAttributes02: function(test) {
    var success;
    var addrList;
    var addrNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    addrList = doc.getElementsByTagName("address");
    addrNode = addrList.item(0);
    state = addrNode.hasAttributes();
    test.ok(state, 'throw_True');
    test.done();
  }
})

exports['hc_entities'] = testcase({
  /**
   *
   An attempt to add remove an entity using removeNamedItemNS should result in
   a NO_MODIFICATION_ERR or a NOT_FOUND_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1788794630
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-removeNamedItemNS
   */
  hc_entitiesremovenameditemns1: function(test) {
    var success;
    var entities;
    var docType;
    var retval;


    var doc = require('./core/files/hc_staff.xml').hc_staff();
    docType = doc.doctype;


    test.notEqual(docType, null, 'docType should be null');
    entities = docType.entities;
    test.notEqual(entities, null, 'entities should be null');
    try {
      retval = entities.removeNamedItemNS("http://www.w3.org/1999/xhtml","alpha");
      fail("throw_NO_MOD_OR_NOT_FOUND_ERR");
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
    test.done();
  },
  /**
   *
   An attempt to add an element to the named node map returned by entities should
   result in a NO_MODIFICATION_ERR or HIERARCHY_REQUEST_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1788794630
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   */
  hc_entitiessetnameditemns1: function(test) {
    var success;
    var entities;
    var docType;
    var retval;
    var elem;


    var doc = require('./core/files/hc_staff.xml').hc_staff();
    docType = doc.doctype;


    test.notEqual(docType, null, 'docType should be null');
    entities = docType.entities;

    test.notEqual(entities, null, 'entities should be null');
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","br");

    try {
      retval = entities.setNamedItemNS(elem);
      fail("throw_HIER_OR_NO_MOD_ERR");

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
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
    test.done();
  },
  /**
   *
   Attempt to insert an element into an attribute list,
   should raise a HIERARCHY_REQUEST_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-4
   */
  hc_namednodemapinvalidtype1: function(test) {
    var success;
    var attributes;
    var docElem;
    var newElem;
    var retval;


    var doc = require('./core/files/hc_staff.xml').hc_staff();
    docElem = doc.documentElement;

    attributes = docElem.attributes;

    newElem = doc.createElement("html");

    {
      success = false;
      try {
        retval = attributes.setNamedItem(newElem);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }
    test.done();
  },
  /**
   *
   Create a document fragment with two adjacent text nodes, normalize and see if the text nodes
   were combined.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-F68D095
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-B63ED1A3
   */
  hc_nodedocumentfragmentnormalize1: function(test) {
    var success;
    var docFragment;
    var nodeValue;
    var txtNode;
    var retval;


    var doc = require('./core/files/hc_staff.xml').hc_staff();
    docFragment = doc.createDocumentFragment();
    txtNode = doc.createTextNode("foo");
    retval = docFragment.appendChild(txtNode);
    txtNode = doc.createTextNode("bar");
    retval = docFragment.appendChild(txtNode);
    docFragment.normalize();
    txtNode = docFragment.firstChild;

    nodeValue = txtNode.nodeValue;

    test.equal(nodeValue, "foobar", "normalizedNodeValue");
    retval = txtNode.nextSibling;

    test.equal(retval, null, 'retval should not be null');
    test.done();
  },
  /**
   *
   Create a document fragment with an empty text node, after normalization there should be no child nodes.
   were combined.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-F68D095
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-B63ED1A3
   */
  hc_nodedocumentfragmentnormalize2: function(test) {
    var success;
    var docFragment;
    var nodeValue;
    var txtNode;
    var retval;


    var doc = require('./core/files/hc_staff.xml').hc_staff();
    docFragment = doc.createDocumentFragment();
    txtNode = doc.createTextNode("");
    retval = docFragment.appendChild(txtNode);
    docFragment.normalize();
    txtNode = docFragment.firstChild;

    test.equal(txtNode, null, 'txtNode should not be null');
    test.done();
  },
  /**
   *
   An attempt to add remove an notation using removeNamedItemNS should result in
   a NO_MODIFICATION_ERR or a NOT_FOUND_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D46829EF
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-removeNamedItemNS
   */
  hc_notationsremovenameditemns1: function(test) {
    var success;
    var notations;
    var docType;
    var retval;


    var doc = require('./core/files/hc_staff.xml').hc_staff();
    docType = doc.doctype;


    test.notEqual(docType, null, 'docType should be null');
    notations = docType.notations;

    test.notEqual(notations, null, 'notations should be null');

    try {
      retval = notations.removeNamedItemNS("http://www.w3.org/1999/xhtml","alpha");
      fail("throw_NO_MOD_OR_NOT_FOUND_ERR");

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
    test.done();
  },
  /**
   *
   An attempt to add an element to the named node map returned by notations should
   result in a NO_MODIFICATION_ERR or HIERARCHY_REQUEST_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D46829EF
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   */
  hc_notationssetnameditemns1: function(test) {
    var success;
    var notations;
    var docType;
    var retval;
    var elem;


    var doc = require('./core/files/hc_staff.xml').hc_staff();
    docType = doc.doctype;


    test.notEqual(docType, null, 'docType should be null');
    notations = docType.notations;

    test.notEqual(notations, null, 'notations should be null');
    elem = doc.createElementNS("http://www.w3.org/1999/xhtml","br");

    try {
      retval = notations.setNamedItemNS(elem);
      fail("throw_HIER_OR_NO_MOD_ERR");

    } catch (ex) {
      if (typeof(ex.code) != 'undefined') {
        switch(ex.code) {
        case /* HIERARCHY_REQUEST_ERR */ 3 :
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
    test.done();
  }
})

exports['importNode'] = testcase({
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Attr.
   The ownerElement is set to null. Specified flag is set to true.
   Children is imported.

   Create a new attribute whose name is "elem:attr1" in a different document.
   Create a child Text node with value "importedText" for the attribute node above.
   Invoke method importNode(importedNode,deep) on this document with
   importedNode being the newly created attribute.
   Method should return a node whose name matches "elem:attr1" and a child node
   whose value equals "importedText".
   The returned node should belong to this document whose systemId is "staff.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode01: function(test) {
    var success;
    var newAttr;
    var importedChild;
    var aNode;
    var ownerDocument;
    var attrOwnerElement;
    var specified;
    var childList;
    var nodeName;
    var child;
    var childValue;
    var result = new Array();
    expectedResult = new Array();
    expectedResult[0] = "elem:attr1";
    expectedResult[1] = "importedText";
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    newAttr = aNewDoc.createAttribute("elem:attr1");
    importedChild = aNewDoc.createTextNode("importedText");
    aNode = newAttr.appendChild(importedChild);
    aNode = doc.importNode(newAttr,false);
    ownerDocument = aNode.ownerDocument;
    test.notEqual(aNode, null, 'aNode should be null');
    test.equal(doc.doctype.systemId, 'staffNS.dtd')
    attrOwnerElement = aNode.ownerElement;

    test.equal(attrOwnerElement, null, 'attrOwnerElement should not be null');
    specified = aNode.specified;

    test.ok(specified, 'specified');
    childList = aNode.childNodes;

    test.equal(childList.length, 1, "childList");
    nodeName = aNode.nodeName;

    test.equal(nodeName, "elem:attr1", "nodeName");
    child = aNode.firstChild;

    childValue = child.nodeValue;

    test.equal(childValue, "importedText", "childValue");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type CData_Section.

   Create a CDATASection node with value being the string "this is CDATASection data" in
   a different document.  Invoke method importNode(importedNode,deep) on
   this document.  Method should return a CDATASection node whose value matches
   the above string. The returned node should belong to this document whose systemId is "staff.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode02: function(test) {
    var success;
    var cDataSec;
    var aNode;
    var ownerDocument;
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    cDataSec = aNewDoc.createCDATASection("this is CDATASection data");
    aNode = doc.importNode(cDataSec,false);
    ownerDocument = aNode.ownerDocument;
    test.notEqual(ownerDocument, null, 'ownerDocument should be null');
    test.equal(doc.doctype.systemId, 'staffNS.dtd')
    test.equal(aNode.nodeValue, "this is CDATASection data", "nodeValue");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Comment.

   Create a comment node with value being the string "this is a comment" in
   a different document.  Invoke method importNode(importedNode,deep) on
   this document.  Method should return a comment node whose value matches
   the above string. The returned node should belong to this document whose
   systemId is "staff.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode03: function(test) {
    var comment;
    var aNode;
    var ownerDocument;
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    comment = aNewDoc.createComment("this is a comment");
    aNode = doc.importNode(comment,false);
    ownerDocument = aNode.ownerDocument;
    test.notEqual(ownerDocument, null, 'ownerDocument should be null');
    test.equal(doc.doctype.systemId, 'staffNS.dtd')
    test.equal(aNode.nodeValue, "this is a comment", "nodeValue");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Document_Fragment.

   Create a DocumentFragment in a different document.
   Create a Comment child node for the Document Fragment.
   Invoke method importNode(importedNode,deep) on this document
   with importedNode being the newly created DocumentFragment.
   Method should return a node of type DocumentFragment whose child has
   comment value "descendant1".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode04: function(test) {
    var success;
    var docFrag;
    var comment;
    var aNode;
    var children;
    var child;
    var childValue;
    var doc = require('./core/files/staff.xml').staff();
    var aNewDoc = require('./core/files/staff.xml').staff();
    docFrag = aNewDoc.createDocumentFragment();
    comment = aNewDoc.createComment("descendant1");
    aNode = docFrag.appendChild(comment);
    aNode = doc.importNode(docFrag,true);
    children = aNode.childNodes;

    test.equal(children.length, 1, "throw_Size");
    child = aNode.firstChild;

    childValue = child.nodeValue;

    test.equal(childValue, "descendant1", "descendant1");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Element.

   Retrieve element "emp:address" from staffNS.xml document.
   Invoke method importNode(importedNode,deep) on this document
   with importedNode being the element from above and deep is false.
   Method should return an element node whose name matches "emp:address"
   and whose children are not imported. The returned node should
   belong to this document whose systemId is "staff.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode05: function(test) {
    var element;
    var aNode;
    var hasChild;
    var ownerDocument;
    var addresses;
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    addresses = aNewDoc.getElementsByTagName("emp:address");
    element = addresses.item(0);
    test.notEqual(element, null, 'element should be null');
    aNode = doc.importNode(element,false);
    hasChild = aNode.hasChildNodes();
    test.equal(hasChild, false, 'hasChild should be *false*');
    ownerDocument = aNode.ownerDocument;
    test.equal(doc.doctype.systemId, 'staffNS.dtd')
    test.equal(aNode.nodeName, "emp:address", "nodeName");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Element.

   Retrieve element "emp:address" from staffNS.xml document.
   Invoke method importNode(importedNode,deep) on this document
   with importedNode being the element from above and deep is true.
   Method should return an element node whose name matches "emp:address" and
   whose descendant is imported.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode06: function(test) {
    var success;
    var element;
    var aNode;
    var hasChild;
    var name;
    var child;
    var value;
    var addresses;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    addresses = aNewDoc.getElementsByTagName("emp:address");
    element = addresses.item(0);
    test.notEqual(element, null, 'element should be null');
    aNode = doc.importNode(element,true);
    hasChild = aNode.hasChildNodes();
    test.ok(hasChild, 'throw_True');
    name = aNode.nodeName;

    test.equal(name, "emp:address", "nodeName");
    child = aNode.firstChild;

    value = child.nodeValue;

    test.equal(value, "27 South Road. Dallas, texas 98556", "nodeValue");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Element.
   If this document defines default attributes for this element name (importedNode),
   those default attributes are assigned.

   Create an element whose name is "emp:employee" in a different document.
   Invoke method importNode(importedNode,deep) on this document which
   defines default attribute for the element name "emp:employee".
   Method should return an the imported element with an assigned default attribute.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=238
   */
  importNode07: function(test) {
    var success;
    var element;
    var aNode;
    var attributes;
    var name;
    var attr;
    var lname;
    var namespaceURI = "http://www.nist.gov";
    var qualifiedName = "emp:employee";


    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staff.xml').staff();
    element = aNewDoc.createElementNS(namespaceURI,qualifiedName);
    aNode = doc.importNode(element,false);
    attributes = aNode.attributes;

    test.equal(attributes.length, 1, "throw_Size");
    name = aNode.nodeName;

    test.equal(name, "emp:employee", "nodeName");
    attr = attributes.item(0);
    lname = attr.localName;

    test.equal(lname, "defaultAttr", "lname");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Document_Fragment.

   Create a DocumentFragment in a different document.
   Invoke method importNode(importedNode,deep) on this document
   with importedNode being the newly created DocumentFragment.
   Method should return an empty DocumentFragment that belongs
   to this document whose systemId is "staff.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-Core-DocType-systemId
   */
  importNode08: function(test) {
    var docFrag;
    var aNode;
    var hasChild;
    var ownerDocument;
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    docFrag = aNewDoc.createDocumentFragment();
    aNode = doc.importNode(docFrag,false);
    hasChild = aNode.hasChildNodes();
    test.equal(hasChild, false, 'hasChild should be *false*');
    ownerDocument = aNode.ownerDocument;
    test.equal(doc.doctype.systemId, 'staffNS.dtd')
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Entity.

   Retrieve entity "ent6" from staffNS.xml document.
   Invoke method importNode(importedNode,deep) on this document.
   Method should return a node of type Entity whose publicId, systemId and
   notationName attributes are copied.
   The returned node should belong to this document whose systemId is "staff.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode09: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    var entityList = aNewDoc.doctype.entities;
    test.notEqual(entityList, null, 'entityList should be null');
    var entity2 = entityList.getNamedItem("ent6");
    var entity1 = doc.importNode(entity2,false);
    test.equal(entity1.ownerDocument.doctype.systemId, 'staffNS.dtd')
    test.equal(entity1.nodeName, "ent6", "entityName");
    test.equal(entity1.publicId, "uri", "entityPublicId");
    test.equal(entity1.systemId, 'file')
    test.equal(entity1.notationName, "notation2", "notationName");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Entity_Reference.
   Only the EntityReference is copied, regardless of deep's value.

   Create an entity reference whose name is "entRef1" in a different document.
   Give it value "entRef1Value".
   Invoke method importNode(importedNode,deep) on this document with importedNode
   being "entRef1".
   Method should return a node of type Entity_Reference (whose value is null) that
   belongs to this document whose systemId is "staff.dtd".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode10: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    var entRef = aNewDoc.createEntityReference("entRef1");
    test.notEqual(entRef, null, 'entRef should be null');
    entRef.nodeValue = "entRef1Value";
    var aNode = doc.importNode(entRef,false);
    test.equal(aNode.ownerDocument.doctype.systemId, 'staffNS.dtd')
    test.equal(aNode.nodeName, "entRef1", "nodeName");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Entity_Reference.
   Only the EntityReference is copied, regardless of deep's value.
   If the Document provides a definition for the entity name, its value is assigned.

   Create an entity reference whose name is "ent3" in a different document.
   Invoke method importNode(importedNode,deep) on this document with importedNode
   being "ent3".
   Method should return a node of type Entity_Reference whose first child's value is "Texas" as defined
   in this document.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode11: function(test) {
    var success;
    var entRef;
    var aNode;
    var name;
    var child;
    var childValue;


    var doc = require('./core/files/staff.xml').staff();
    var aNewDoc = require('./core/files/staff.xml').staff();
    entRef = aNewDoc.createEntityReference("ent3");
    test.notEqual(entRef, null, 'entRef should be null');
    aNode = doc.importNode(entRef,true);
    name = aNode.nodeName;

    test.equal(name, "ent3", "entityName");
    child = aNode.firstChild;

    test.notEqual(child, null, 'child should be null');
    childValue = child.nodeValue;

    test.equal(childValue, "Texas", "childValue");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Entity.

   Retrieve entity "ent4" from staffNS.xml document.
   Invoke method importNode(importedNode,deep) on this document with deep as false.
   Method should return a node of type Entity whose descendant is copied.
   The returned node should belong to this document whose systemId is "staffNS.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode12: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    var entityList = aNewDoc.doctype.entities;
    test.notEqual(entityList, null, 'entityList should be null');
    var entity2 = entityList.getNamedItem("ent4");
    var entity1 = doc.importNode(entity2,true);
    test.equal(entity1.ownerDocument.doctype.systemId, 'staffNS.dtd')
    test.equal(entity1.nodeName, "ent4", "entityName");
    test.notEqual(entity1.firstChild, null, 'child should be null');
    test.equal(entity1.firstChild.nodeName, "entElement1", "childName");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Notation.

   Retrieve notation named "notation1" from document staffNS.xml.
   Invoke method importNode(importedNode,deep) where importedNode
   contains the retrieved notation and deep is false.  Method should
   return a node of type notation whose name is "notation1".
   The returned node should belong to this document whose systemId is "staff.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode13: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    var notationList = aNewDoc.doctype.notations;
    test.notEqual(notationList, null, 'notationList should be null');
    var notation = notationList.getNamedItem("notation1");
    var aNode = doc.importNode(notation,false);
    test.equal(aNode.ownerDocument.doctype.systemId, 'staffNS.dtd')
    test.equal(aNode.publicId, "notation1File", "publicId");
    test.equal(aNode.systemId, null, 'system should be null');
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Processing Instruction.

   Create a processing instruction with target as "target1" and data as "data1"
   in a different document. Invoke method importNode(importedNode,deep) on this document.
   Method should return a processing instruction whose target and data match the given
   parameters. The returned PI should belong to this document whose systemId is "staff.dtd".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode14: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    var pi = aNewDoc.createProcessingInstruction("target1","data1");
    var aNode = doc.importNode(pi,false);
    test.notEqual(aNode.ownerDocument, null, 'ownerDocument should be null');
    test.equal(aNode.ownerDocument.doctype.systemId, 'staffNS.dtd')
    target = aNode.target;
    test.equal(target, "target1", "piTarget");
    data = aNode.data;
    test.equal(data, "data1", "piData");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should import the given importedNode into that Document.
   The importedNode is of type Text.

   Create a text node with value being the string "this is text data" in
   a different document.  Invoke method importNode(importedNode,deep) on
   this document.  Method should return a text node whose value matches
   the above string. The returned node should belong to this document
   whose systemId is "staff.dtd"

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   */
  importNode15: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var aNewDoc = require('./core/files/staffNS.xml').staffNS();
    var text = aNewDoc.createTextNode("this is text data");
    var aNode = doc.importNode(text,false);
    test.notEqual(aNode.ownerDocument, null, 'ownerDocument should be null');
    test.equal(aNode.ownerDocument.doctype.systemId, 'staffNS.dtd')
    test.equal(aNode.nodeValue, "this is text data", "nodeValue");
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should raise NOT_SUPPORTED_ERR DOMException if
   the type of node being imported is DocumentType.

   Retrieve document staff.xml and get its type.
   Invoke method importNode(importedNode,deep) where importedNode
   contains the document type of the staff.xml.
   Method should raise NOT_SUPPORT_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NOT_SUPPORTED_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Core-Document-importNode')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_SUPPORTED_ERR'])
   */
  importNode16: function(test) {
    var success;
    var docType;
    var node;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var anotherDoc = require('./core/files/staffNS.xml').staffNS();
    docType = anotherDoc.doctype;


    {
      success = false;
      try {
        node = doc.importNode(docType,false);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }
    test.done();
  },
  /**
   *
   The "importNode(importedNode,deep)" method for a
   Document should raise NOT_SUPPORTED_ERR DOMException if
   the type of node being imported is Document.

   Retrieve staff.xml document.
   Invoke method importNode(importedNode,deep) where importedNode
   contains staff.xml and deep is true.
   Method should raise NOT_SUPPORTED_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NOT_SUPPORTED_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Core-Document-importNode
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('Core-Document-importNode')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_SUPPORTED_ERR'])
   */
  importNode17: function(test) {
    var success;
    var node;


    var doc = require('./core/files/staffNS.xml').staffNS();
    var anotherDoc = require('./core/files/staffNS.xml').staffNS();

    {
      success = false;
      try {
        node = doc.importNode(anotherDoc,false);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 9);
      }
      test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    }
    test.done();
  }
})

exports['internalSubset'] = testcase({
  /**
   *
   The "getInternalSubset()" method returns
   the internal subset as a string or null if there is none.
   This does not contain the delimiting brackets.

   Retrieve the documenttype.
   Apply the "getInternalSubset()" method.  Null is returned since there
   is not an internal subset.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-Core-DocType-internalSubset
   */
  internalSubset01: function(test) {
    var success;
    var docType;
    var internal;


    var doc = require('./core/files/staff2.xml').staff2();
    docType = doc.doctype;

    internal = docType.internalSubset;

    test.equal(internal, null, 'internal should not be null');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   XXX is NOT a legal value for the feature parameter.
   The method should return "false" since XXX is not a valid feature.

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "XXX" and version to "1.0".
   The method should return a boolean "false" since XXX is not a valid feature.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported01: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("XXX","1.0");
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   XML is a legal value for the feature parameter.
   The method should return "false" since 9.0 is not a valid version.

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "XML" and version to "9.0".
   The method should return a boolean "false" since 9.0 is not a valid version.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported02: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("XML","9.0");
    test.equal(state, false, 'state should be *false*');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   XML is a legal value for the feature parameter
   (Test for xml, lower case).
   Legal values for the version parameter are 1.0 and 2.0
   (Test for 1.0).

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "xml" and the version equal to 1.0.
   The method should return a boolean "true".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported04: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("xml","1.0");
    test.ok(state, 'throw_True');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   Core is a legal value for the feature parameter
   (Test for core, lower case).
   Legal values for the version parameter are 1.0 and 2.0
   (Test for 2.0).

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "core" and the version equal to 2.0.
   The method should return a boolean "true".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported05: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("core","2.0");
    test.ok(state, 'throw_True');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   XML is a legal value for the feature parameter
   (Test for xml, lower case).
   Legal values for the version parameter are 1.0 and 2.0
   (Test for 2.0).

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "xml" and the version equal to 2.0.
   The method should return a boolean "true".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported06: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("xml","2.0");
    test.ok(state, 'throw_True');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   XML is a legal value for the feature parameter
   (Test for XML).
   If the version is not specified, supporting any version of the
   method to return true.

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "XML" and the version equal blank.
   The method should return a boolean "true".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported07: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("XML","");
    test.ok(state, 'throw_True');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   XML is a legal value for the feature parameter
   (Test for XML, upper case).
   Legal values for the version parameter are 1.0 and 2.0
   (Test for 1.0).

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "XML" and the version equal to 1.0.
   The method should return a boolean "true".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported09: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("XML","1.0");
    test.ok(state, 'throw_True');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   CORE is a legal value for the feature parameter
   (Test for CORE, upper case).
   Legal values for the version parameter are 1.0 and 2.0
   (Test for 2.0).

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "CORE" and the version equal to 2.0.
   The method should return a boolean "true".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported10: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("CORE","2.0");
    test.ok(state, 'throw_True');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   XML is a legal value for the feature parameter
   (Test for XML, upper case).
   Legal values for the version parameter are 1.0 and 2.0
   (Test for 2.0).

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "XML" and the version equal to 2.0.
   The method should return a boolean "true".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported11: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("XML","2.0");
    test.ok(state, 'throw_True');
    test.done();
  },
  /**
   *
   The "feature" parameter in the
   isSupported(feature,version)" method is the name
   of the feature and the version is the version number of the
   feature to test.   CORE is a legal value for the feature parameter
   (Test for CORE, upper case).
   Legal values for the version parameter are 1.0 and 2.0
   (Test for 1.0).

   Retrieve the root node of the DOM document by invoking
   the "getDocumentElement()" method.   This should create a
   node object on which the "isSupported(feature,version)"
   method is invoked with "feature" equal to "CORE" and the version equal to 1.0.
   The method should return a boolean "true".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  isSupported12: function(test) {
    var success;
    features = new Array();
    features[0] = "Core";
    features[1] = "XML";
    features[2] = "HTML";
    features[3] = "Views";
    features[4] = "StyleSheets";
    features[5] = "CSS";
    features[6] = "CSS2";
    features[7] = "Events";
    features[8] = "UIEvents";
    features[9] = "MouseEvents";
    features[10] = "MutationEvents";
    features[11] = "HTMLEvents";
    features[12] = "Range";
    features[13] = "Traversal";
    features[14] = "bogus.bogus.bogus";

    var rootNode;
    var featureElement;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("Core","2.0");
    test.ok(state, 'Core2');
    for(var indexN10078 = 0;indexN10078 < features.length; indexN10078++) {
      featureElement = features[indexN10078];
      state = rootNode.isSupported(featureElement,"1.0");

    }
    for(var indexN10083 = 0;indexN10083 < features.length; indexN10083++) {
      featureElement = features[indexN10083];
      state = rootNode.isSupported(featureElement,"2.0");

    }
    test.done();
  },
  /**
   *
   Calls isSupported("Core","") should return true for all implementations (by extension of core-14).

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
   */
  isSupported13: function(test) {
    var success;
    var rootNode;
    var state;


    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("Core","");
    test.ok(state, 'Core');
    test.done();
  },
  /**
   *
   Calls isSupported("Core",null) should return true for all implementations (by extension of core-14).

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
   */
  isSupported14: function(test) {
    var success;
    var rootNode;
    var state;
    var nullString = null;



    var doc = require('./core/files/staff.xml').staff();
    rootNode = doc.documentElement;

    state = rootNode.isSupported("Core",nullString);
    test.ok(state, 'Core');
    test.done();
  }
})

exports['localName'] = testcase({
  /**
   *
   The "getLocalName()" method for a Node
   returns the local part of the qualified name of this node,
   and for nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE
   and nodes created with a DOM Level 1 method, this is null.

   Retrieve the first emp:address node and get the attributes of this node."
   Then apply the getLocalName() method to the emp:domestic attribute.
   The method should return "domestic".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSLocalN
   */
  localName01: function(test) {
    var success;
    var elementList;
    var testAddr;
    var addrAttr;
    var localName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should be null');
    addrAttr = testAddr.getAttributeNode("emp:domestic");
    localName = addrAttr.localName;

    test.equal(localName, "domestic", "localName");
    test.done();
  },
  /**
   *
   The "getLocalName()" method for a Node
   returns the local part of the qualified name of this node,
   and for nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE
   and nodes created with a DOM Level 1 method, this is null.

   Create an new Element with the createElement() method.
   Invoke the "getLocalName()" method on the newly created element
   node will cause "null" to be returned.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSLocalN
   */
  localName02: function(test) {
    var success;
    var createdNode;
    var localName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    createdNode = doc.createElement("test:employee");
    localName = createdNode.localName;

    test.equal(localName, null, 'localName should not be null');
    test.done();
  },
  /**
   *
   The "getLocalName()" method for a Node
   returns the local part of the qualified name of this node,
   and for nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE
   and nodes created with a DOM Level 1 method, this is null.

   Retrieve the first employeeId node and get the first child of this node.
   Since the first child is Text node invoking the "getLocalName()"
   method will cause "null" to be returned.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSLocalN
   */
  localName03: function(test) {
    var success;
    var elementList;
    var testEmployee;
    var textNode;
    var localName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employeeId");
    testEmployee = elementList.item(0);
    textNode = testEmployee.firstChild;

    localName = textNode.localName;

    test.equal(localName, null, 'localName should not be null');
    test.done();
  },
  /**
   *
   The "getLocalName()" method for a Node
   returns the local part of the qualified name of this node,
   and for nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE
   and nodes created with a DOM Level 1 method, this is null.

   Retrieve the first employee node and invoke the "getLocalName()"
   method.   The method should return "employee".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSLocalN
   */
  localName04: function(test) {
    var success;
    var elementList;
    var testEmployee;
    var employeeLocalName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    testEmployee = elementList.item(0);
    employeeLocalName = testEmployee.localName;

    test.equal(employeeLocalName, "employee", "lname");
    test.done();
  }
})

exports['namednodemapgetnameditemns'] = testcase({
  /**
   *
   Using the method getNamedItemNS, retreive the entity "ent1" and notation "notation1"
   from a NamedNodeMap of this DocumentTypes entities and notations.
   Both should be null since entities and notations are not namespaced.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=407
   * @see http://lists.w3.org/Archives/Member/w3c-dom-ig/2003Nov/0016.html
   */
  namednodemapgetnameditemns01: function(test) {
    var success;
    var docType;
    var entities;
    var notations;
    var entity;
    var notation;
    var entityName;
    var notationName;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    entities = docType.entities;

    test.notEqual(entities, null, 'entities should be null');
    notations = docType.notations;

    test.notEqual(notations, null, 'notations should be null');
    entity = entities.getNamedItemNS(nullNS,"ent1");
    test.equal(entity, null, 'entity should not be null');
    notation = notations.getNamedItemNS(nullNS,"notation1");
    test.equal(notation, null, 'notation should not be null');
    test.done();
  },
  /**
   *
   The method getNamedItemNS retrieves a node specified by local name and namespace URI.

   Using the method getNamedItemNS, retreive an attribute node having namespaceURI=http://www.nist.gov
   and localName=domestic, from a NamedNodeMap of attribute nodes, for the second element
   whose namespaceURI=http://www.nist.gov and localName=address.  Verify if the attr node
   has been retreived successfully by checking its nodeName atttribute.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   */
  namednodemapgetnameditemns02: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var elementList;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = elementList.item(1);
    attributes = element.attributes;

    attribute = attributes.getNamedItemNS("http://www.nist.gov","domestic");
    attrName = attribute.nodeName;

    test.equal(attrName, "emp:domestic", "namednodemapgetnameditemns02");
    test.done();
  },
  /**
   *
   The method getNamedItemNS retrieves a node specified by local name and namespace URI.

   Create a new Element node and add 2 new attribute nodes having the same local name but different
   namespace names and namespace prefixes to it.  Using the getNamedItemNS retreive the second attribute node.
   Verify if the attr node has been retreived successfully by checking its nodeName atttribute.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   */
  namednodemapgetnameditemns03: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var newAttr1;
    var newAttr2;
    var newAttribute;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test","root");
    newAttr1 = doc.createAttributeNS("http://www.w3.org/DOM/L1","L1:att");
    newAttribute = element.setAttributeNodeNS(newAttr1);
    newAttr2 = doc.createAttributeNS("http://www.w3.org/DOM/L2","L2:att");
    newAttribute = element.setAttributeNodeNS(newAttr2);
    attributes = element.attributes;

    attribute = attributes.getNamedItemNS("http://www.w3.org/DOM/L2","att");
    attrName = attribute.nodeName;

    test.equal(attrName, "L2:att", "namednodemapgetnameditemns03");
    test.done();
  },
  /**
   *
   The method getNamedItemNS retrieves a node specified by local name and namespace URI.

   Retreive the second address element node having localName=adrress.
   Create a new attribute node having the same name as an existing node but different namespaceURI
   and add it to this element.  Using the getNamedItemNS retreive the newly created attribute
   node from a nodemap of attributes of the retreive element node.
   Verify if the attr node has been retreived successfully by checking its nodeName atttribute.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   */
  namednodemapgetnameditemns04: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var newAttr1;
    var newAttribute;
    var elementList;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(1);
    newAttr1 = doc.createAttributeNS("http://www.w3.org/DOM/L1","street");
    newAttribute = element.setAttributeNodeNS(newAttr1);
    attributes = element.attributes;

    attribute = attributes.getNamedItemNS("http://www.w3.org/DOM/L1","street");
    attrName = attribute.nodeName;

    test.equal(attrName, "street", "namednodemapgetnameditemns04");
    test.done();
  },
  /**
   *
   The method getNamedItemNS retrieves a node specified by local name and namespace URI.

   Retreieve the second address element and its attribute into a named node map.
   Try retreiving the street attribute from the namednodemap using the
   default namespace uri and the street attribute name.  Since the default
   namespace doesnot apply to attributes this should return null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   */
  namednodemapgetnameditemns05: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(1);
    attributes = element.attributes;

    attribute = attributes.getNamedItemNS("*","street");
    test.equal(attribute, null, 'attribute should not be null');
    test.done();
  },
  /**
   *
   Retreive the second address element node having localName=adrress.  Retreive the attributes
   of this element into 2 nodemaps.  Create a new attribute node and add it to this element.
   Since NamedNodeMaps are live each one should get updated, using the getNamedItemNS retreive
   the newly created attribute from each node map.
   Verify if the attr node has been retreived successfully by checking its nodeName atttribute.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   */
  namednodemapgetnameditemns06: function(test) {
    var success;
    var attributesMap1;
    var attributesMap2;
    var element;
    var attribute;
    var newAttr1;
    var newAttribute;
    var elementList;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(1);
    attributesMap1 = element.attributes;

    attributesMap2 = element.attributes;

    newAttr1 = doc.createAttributeNS("http://www.w3.org/DOM/L1","street");
    newAttribute = element.setAttributeNodeNS(newAttr1);
    attribute = attributesMap1.getNamedItemNS("http://www.w3.org/DOM/L1","street");
    attrName = attribute.nodeName;

    test.equal(attrName, "street", "namednodemapgetnameditemnsMap106");
    attribute = attributesMap2.getNamedItemNS("http://www.w3.org/DOM/L1","street");
    attrName = attribute.nodeName;

    test.equal(attrName, "street", "namednodemapgetnameditemnsMap206");
    test.done();
  }
})

exports['namednodemapremovenameditemns'] = testcase({
  /**
   *
   The method removeNamedItemNS removes a node specified by local name and namespace

   Retreive an attribute node and then remove from the NamedNodeMap.  Verify if the attribute
   node was actually remove from the node map.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D58B193
   */
  namednodemapremovenameditemns01: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = elementList.item(1);
    attributes = element.attributes;

    attribute = attributes.removeNamedItemNS("http://www.nist.gov","domestic");
    attribute = attributes.getNamedItemNS("http://www.nist.gov","domestic");
    test.equal(attribute, null, 'attribute should not be null');
    test.done();
  },
  /**
   *
   The method removeNamedItemNS removes a node specified by local name and namespace
   A removed attribute may be known to have a default value when this map contains the
   attributes attached to an element, as returned by the attributes attribute of the Node
   interface. If so, an attribute immediately appears containing the default value as well
   as the corresponding namespace URI, local name, and prefix when applicable.

   Retreive a default attribute node.  Remove it from the NodeMap.  Check if a new one immediately
   appears containing the default value.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D58B193
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  namednodemapremovenameditemns02: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var elementList;
    var attrValue;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","employee");
    element = elementList.item(1);
    attributes = element.attributes;

    attribute = attributes.removeNamedItemNS(nullNS,"defaultAttr");
    attribute = attributes.getNamedItemNS(nullNS,"defaultAttr");
    attrValue = attribute.nodeValue;

    test.notEqual(attribute, null, 'attribute should be null');
    test.equal(attrValue, "defaultVal", "namednodemapremovenameditemns02_attrValue");
    test.done();
  },
  /**
   *
   The method removeNamedItemNS removes a node specified by local name and namespace

   Create a new element node and add 2 new attribute nodes to it that have the same localName
   but different namespaceURI's.  Remove the first attribute node from the namedNodeMap of the
   new element node and check to see that the second attribute still exists.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D58B193
   */
  namednodemapremovenameditemns03: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var newAttribute;
    var attribute1;
    var attribute2;
    var nodeName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test","root");
    attribute1 = doc.createAttributeNS("http://www.w3.org/DOM/L1","L1:att");
    newAttribute = element.setAttributeNodeNS(attribute1);
    attribute2 = doc.createAttributeNS("http://www.w3.org/DOM/L2","L2:att");
    newAttribute = element.setAttributeNodeNS(attribute2);
    attributes = element.attributes;

    attribute = attributes.removeNamedItemNS("http://www.w3.org/DOM/L1","att");
    attribute = attributes.getNamedItemNS("http://www.w3.org/DOM/L2","att");
    nodeName = attribute.nodeName;

    test.equal(nodeName, "L2:att", "namednodemapremovenameditemns02");
    test.done();
  },
  /**
   *
   The method removeNamedItemNS removes a node specified by local name and namespace

   Attempt to remove the xmlns and dmstc attributes of the first element node with the localName
   employee.  Verify if the 2 attributes were successfully removed.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D58B193
   */
  namednodemapremovenameditemns04: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var attributeRemoved;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","employee");
    element = elementList.item(0);
    attributes = element.attributes;

    attributeRemoved = attributes.removeNamedItemNS("http://www.w3.org/2000/xmlns/","xmlns");
    attribute = attributes.getNamedItemNS("http://www.w3.org/2000/xmlns/","xmlns");
    test.equal(attribute, null, 'attribute should not be null');
    attributeRemoved = attributes.removeNamedItemNS("http://www.w3.org/2000/xmlns/","dmstc");
    attribute = attributes.getNamedItemNS("http://www.w3.org/2000/xmlns/","dmstc");
    test.equal(attribute, null, 'attribute should not be null');
    test.done();
  },
  /**
   *
   Retreive an entity and notation node and remove the first notation from the
   entity node map and first entity node from the notation map.  Since both these
   maps are readonly, a NO_MODIFICATION_ALLOWED_ERR should be raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=407
   * @see http://lists.w3.org/Archives/Member/w3c-dom-ig/2003Nov/0016.html
   */
  namednodemapremovenameditemns05: function(test) {
    var success;
    var docType;
    var entities;
    var notations;
    var removedNode;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    entities = docType.entities;

    test.notEqual(entities, null, 'entities should be null');
    notations = docType.notations;

    test.notEqual(notations, null, 'notations should be null');

    try {
      removedNode = entities.removeNamedItemNS(nullNS,"ent1");
      fail("entity_throw_DOMException");

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

    try {
      removedNode = notations.removeNamedItemNS(nullNS,"notation1");
      fail("notation_throw_DOMException");

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
    test.done();
  },
  /**
   *
   The method removeNamedItemNS removes a node using its namespaceURI and localName and
   raises a NOT_FOUND_ERR if there is no node with the specified namespaceURI and
   localName in this map

   Retreive an attribute node into a namednodemap.  While removing it from the map specify
   an incorrect namespaceURI.  This should raise a NOT_FOUND_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D58B193
   */
  namednodemapremovenameditemns06: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","employee");
    element = elementList.item(1);
    attributes = element.attributes;


    {
      success = false;
      try {
        attribute = attributes.removeNamedItemNS("http://www.Nist.gov","domestic");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }
    test.done();
  },
  /**
   *
   The method removeNamedItemNS removes a node using its namespaceURI and localName and
   raises a NOT_FOUND_ERR if there is no node with the specified namespaceURI and
   localName in this map

   Retreive an attribute node from a namednodemap.  While removing it from the map specify
   an incorrect localName.  This should raise a NOT_FOUND_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D58B193
   */
  namednodemapremovenameditemns07: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","employee");
    element = elementList.item(1);
    attributes = element.attributes;


    {
      success = false;
      try {
        attribute = attributes.removeNamedItemNS("http://www.nist.gov","domestic");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }
    test.done();
  },
  /**
   *
   The method removeNamedItemNS removes a node using its namespaceURI and localName and
   raises a NOT_FOUND_ERR if there is no node with the specified namespaceURI and
   localName in this map

   Retreive an attribute node from a namednodemap.  Remove the attribute node from the document
   object.  Since NamedNodeMaps are live it should also automatically get removed from
   the node map.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D58B193
   */
  namednodemapremovenameditemns08: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = elementList.item(1);
    attributes = element.attributes;

    test.equal(element.removeAttributeNS("http://www.nist.gov","domestic"), undefined, "should be undefined");

    {
      success = false;
      try {
        attribute = attributes.removeNamedItemNS("http://www.nist.gov","domestic");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 8);
      }
      test.ok(success, 'throw_NOT_FOUND_ERR');
    }
    test.done();
  },
  /**
   *
   The method removeNamedItemNS removes a node using its namespaceURI and localName and
   raises a NOT_FOUND_ERR if there is no node with the specified namespaceURI and
   localName in this map

   Retreive an attribute node.  Remove the attribute node from the node map.
   Check the element object to ensure that the attribute node has been removed from it.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-D58B193
   */
  namednodemapremovenameditemns09: function(test) {
    var success;
    var attributes;
    var newAttributes;
    var element;
    var attribute;
    var elementList;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = elementList.item(1);
    attributes = element.attributes;

    attribute = attributes.removeNamedItemNS("http://www.nist.gov","domestic");
    newAttributes = element.attributes;

    attribute = newAttributes.getNamedItemNS("http://www.nist.gov","domestic");
    test.equal(attribute, null, 'attribute should not be null');
    test.done();
  }
})

exports['namednodemapsetnameditemns'] = testcase({
  /**
   *
   The method setNamedItemNS adds a node using its namespaceURI and localName. If a node with
   that namespace URI and that local name is already present in this map, it is replaced
   by the new one.

   Retreive the first element whose localName is address and namespaceURI http://www.nist.gov",
   and put its attributes into a named node map.  Create a new attribute node and add it to this map.
   Verify if the attr node was successfully added by checking the nodeName of the retreived atttribute.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getNamedItemNS
   */
  namednodemapsetnameditemns01: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var newAttribute;
    var newAttr1;
    var elementList;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = elementList.item(0);
    attributes = element.attributes;

    newAttr1 = doc.createAttributeNS("http://www.w3.org/DOM/L1","streets");
    newAttribute = element.setAttributeNodeNS(newAttr1);
    attribute = attributes.getNamedItemNS("http://www.w3.org/DOM/L1","streets");
    attrName = attribute.nodeName;

    test.equal(attrName, "streets", "namednodemapsetnameditemns01");
    test.done();
  },
  /**
   *
   The method setNamedItemNS adds a node using its namespaceURI and localName. If a node with
   that namespace URI and that local name is already present in this map, it is replaced
   by the new one.

   Create a new element and attribute Node and add the newly created attribute node to the elements
   NamedNodeMap.  Verify if the new attr node has been successfully added to the map by checking
   the nodeName of the retreived atttribute from the list of attribute nodes in this map.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   */
  namednodemapsetnameditemns02: function(test) {
    var success;
    var attributes;
    var element;
    var attribute;
    var attribute1;
    var newNode;
    var attrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test","root");
    attribute1 = doc.createAttributeNS("http://www.w3.org/DOM/L1","L1:att");
    attributes = element.attributes;

    newNode = attributes.setNamedItemNS(attribute1);
    attribute = attributes.getNamedItemNS("http://www.w3.org/DOM/L1","att");
    attrName = attribute.nodeName;

    test.equal(attrName, "L1:att", "namednodemapsetnameditemns02");
    test.done();
  },
  /**
   *
   The method setNamedItemNS adds a node using its namespaceURI and localName and
   raises a WRONG_DOCUMENT_ERR if arg was created from a different document than the
   one that created this map.

   Retreieve the second element whose local name is address and its attribute into a named node map.
   Do the same for another document and retreive its street attribute.  Call the setNamedItemNS
   using the first namedNodeMap and the retreive street attribute of the second.  This should
   raise a WRONG_DOCUMENT_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=408
   */
  namednodemapsetnameditemns03: function(test) {
    var success;
    var attributes;
    var attributesAlt;
    var elementList;
    var elementListAlt;
    var element;
    var elementAlt;
    var attr;
    var newNode;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(1);
    attributes = element.attributes;
    var docAlt = require('./core/files/staffNS.xml').staffNS();
    elementListAlt = docAlt.getElementsByTagNameNS("*","address");
    elementAlt = elementListAlt.item(1);
    attributesAlt = elementAlt.attributes;

    attr = attributesAlt.getNamedItemNS(nullNS,"street");
    newNode = attributesAlt.removeNamedItemNS(nullNS,"street");

    {
      success = false;
      try {
        newNode = attributes.setNamedItemNS(attr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    }
    test.done();
  },
  /**
   *
   The method setNamedItemNS adds a node using its namespaceURI and localName and
   raises a WRONG_DOCUMENT_ERR if arg was created from a different document than the
   one that created this map.

   Retreieve the second element whose local name is address and its attribute into a named node map.
   Create a new document and a new attribute node in it.  Call the setNamedItemNS using the first
   namedNodeMap and the new attribute node attribute of the new document.  This should
   raise a WRONG_DOCUMENT_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  namednodemapsetnameditemns04: function(test) {
    var success;
    var domImpl;
    var docAlt;
    var docType = null;

    var attributes;
    var elementList;
    var element;
    var attrAlt;
    var newNode;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(1);
    attributes = element.attributes;

    domImpl = doc.implementation;
    docAlt = domImpl.createDocument(nullNS,"newDoc",docType);
    attrAlt = docAlt.createAttributeNS(nullNS,"street");

    {
      success = false;
      try {
        newNode = attributes.setNamedItemNS(attrAlt);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    }
    test.done();
  },
  /**
   *
   Retreive an entity and notation node and add the first notation to the
   notation node map and first entity node to the entity map.  Since both these
   maps are for readonly node, a NO_MODIFICATION_ALLOWED_ERR should be raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=407
   * @see http://lists.w3.org/Archives/Member/w3c-dom-ig/2003Nov/0016.html
   */
  namednodemapsetnameditemns05: function(test) {
    var success;
    var docType;
    var entities;
    var notations;
    var entity;
    var notation;
    var newNode;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    entities = docType.entities;

    test.notEqual(entities, null, 'entities should be null');
    notations = docType.notations;

    test.notEqual(notations, null, 'notations should be null');
    entity = entities.getNamedItem("ent1");
    notation = notations.getNamedItem("notation1");

    {
      success = false;
      try {
        newNode = entities.setNamedItemNS(entity);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_entities');
    }

    {
      success = false;
      try {
        newNode = notations.setNamedItemNS(notation);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_notations');
    }
    test.done();
  },
  /**
   *
   Retreieve the first element whose localName is address and its attributes into a named node map.
   Retreiving the domestic attribute from the namednodemap.
   Retreieve the second element whose localName is address and its attributes into a named node map.
   Invoke setNamedItemNS on the second NamedNodeMap specifying the first domestic attribute from
   the first map.  This should raise an INUSE_ATTRIBIUTE_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   */
  namednodemapsetnameditemns06: function(test) {
    var success;
    var attributes;
    var elementList;
    var element;
    var attr;
    var newNode;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(0);
    attributes = element.attributes;

    attr = attributes.getNamedItemNS("http://www.usa.com","domestic");
    element = elementList.item(1);
    attributes = element.attributes;


    {
      success = false;
      try {
        newNode = attributes.setNamedItemNS(attr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 10);
      }
      test.ok(success, 'namednodemapsetnameditemns06');
    }
    test.done();
  },
  /**
   *
   The method setNamedItemNS adds a node using its namespaceURI and localName and
   raises a INUSE_ATTRIBUTE_ERR Raised if arg is an Attr that is already an
   attribute of another Element object.

   Retreieve the attributes of first element whose localName is address into a named node map.
   Retreive the attribute whose namespaceURI=http://www.usa.com and localName=domestic
   from the NamedNodeMap.  Retreieve the attributes of second element whose localName is address
   into a named node map.  Call the setNamedItemNS method on the second nodemap with the domestic
   attribute that was retreived and removed from the first nodeMap as an argument.
   Assuming that when an attribute is removed from a nodemap, it still remains in the domtree
   his should raise an INUSE_ATTRIBIUTE_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   */
  namednodemapsetnameditemns07: function(test) {
    var success;
    var attributes;
    var elementList;
    var element;
    var attr;
    var newNode;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(0);
    attributes = element.attributes;

    attr = attributes.getNamedItemNS("http://www.usa.com","domestic");
    element = elementList.item(1);
    attributes = element.attributes;


    {
      success = false;
      try {
        newNode = attributes.setNamedItemNS(attr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 10);
      }
      test.ok(success, 'namednodemapsetnameditemns07');
    }
    test.done();
  },
  /**
   *
   raises a INUSE_ATTRIBUTE_ERR Raised if arg is an Attr that is already an
   attribute of another Element object.

   Retreieve the first element whose localName is address and its attributes into a named node map.
   Retreiving the domestic attribute from the namednodemap.	 Retreieve the second element whose
   localName is address and its attributes into a named node map.	Invoke setNamedItemNS on the
   second NamedNodeMap specifying the attribute from the first map.
   This should raise an INUSE_ATTRIBIUTE_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   */
  namednodemapsetnameditemns08: function(test) {
    var success;
    var attributes;
    var elementList;
    var element;
    var attr;
    var newNode;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagNameNS("*","address");
    element = elementList.item(0);
    attributes = element.attributes;

    attr = attributes.getNamedItemNS("http://www.usa.com","domestic");
    element = elementList.item(1);
    attributes = element.attributes;


    {
      success = false;
      try {
        newNode = attributes.setNamedItemNS(attr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 10);
      }
      test.ok(success, 'namednodemapsetnameditemns08');
    }
    test.done();
  },
  /**
   *
   The method setNamedItemNS adds a node using its namespaceURI and localName and
   raises a NO_MODIFICATION_ALLOWED_ERR if this map is readonly.

   Create a new attribute node and attempt to add it to the nodemap of entities and notations
   for this documenttype.  This should reaise a NO_MODIFICATION_ALLOWED_ERR.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   */
  namednodemapsetnameditemns09: function(test) {
    var success;
    var docType;
    var entities;
    var notations;
    var attr;
    var newNode;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    entities = docType.entities;

    notations = docType.notations;

    attr = doc.createAttributeNS("http://www.w3.org/DOM/Test","test");

    {
      success = false;
      try {
        newNode = entities.setNamedItemNS(attr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_entities');
    }

    {
      success = false;
      try {
        newNode = notations.setNamedItemNS(attr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR_notations');
    }
    test.done();
  },
  /**
   *
   The method setNamedItemNS adds a node using its namespaceURI and localName and
   raises a HIERARCHY_REQUEST_ERR if an attempt is made to add a node doesn't belong
   in this NamedNodeMap.

   Attempt to add an entity to a NamedNodeMap of attribute nodes,
   Since nodes of this type cannot be added to the attribute node map a HIERARCHY_REQUEST_ERR
   should be raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  namednodemapsetnameditemns10: function(test) {
    var success;
    var docType;
    var entities;
    var attributes;
    var entity;
    var notation;
    var element;
    var elementList;
    var newNode;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    entities = docType.entities;

    test.notEqual(entities, null, 'entities should be null');
    entity = entities.getNamedItem("ent1");
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = elementList.item(0);
    attributes = element.attributes;


    {
      success = false;
      try {
        newNode = attributes.setNamedItemNS(entity);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }
    test.done();
  },
  /**
   *
   The method setNamedItemNS adds a node using its namespaceURI and localName and
   raises a HIERARCHY_REQUEST_ERR if an attempt is made to add a node doesn't belong
   in this NamedNodeMap.

   Attempt to add a notation node to a NamedNodeMap of attribute nodes,
   Since notations nodes do not belong in the attribute node map a HIERARCHY_REQUEST_ERR
   should be raised.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  namednodemapsetnameditemns11: function(test) {
    var success;
    var docType;
    var notations;
    var attributes;
    var notation;
    var element;
    var elementList;
    var newNode;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    notations = docType.notations;

    test.notEqual(notations, null, 'notations should be null');
    notation = notations.getNamedItem("notation1");
    elementList = doc.getElementsByTagNameNS("http://www.nist.gov","address");
    element = elementList.item(0);
    attributes = element.attributes;


    {
      success = false;
      try {
        newNode = attributes.setNamedItemNS(notation);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 3);
      }
      test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    }
    test.done();
  }
})

exports['namespaceURI'] = testcase({
  /**
   *
   The "getNamespaceURI()" method for an Attribute
   returns the namespace URI of this node, or null if unspecified.

   Retrieve the first "emp:address" node which has an attribute of "emp:district"
   that is specified in the DTD.
   Invoke the "getNamespaceURI()" method on the attribute.
   The method should return "http://www.nist.gov".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSname
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=238
   */
  namespaceURI01: function(test) {
    var success;
    var elementList;
    var testAddr;
    var addrAttr;
    var attrNamespaceURI;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    addrAttr = testAddr.getAttributeNodeNS("http://www.nist.gov","district");
    attrNamespaceURI = addrAttr.namespaceURI;

    test.equal(attrNamespaceURI, "http://www.nist.gov", "namespaceURI");
    test.done();
  },
  /**
   *
   The "getNamespaceURI()" method for an Attribute
   returns the namespace URI of this node, or null if unspecified.

   Retrieve the first emp:address node and get the emp:domestic attribute.
   Invoke the "getNamespaceURI()" method on the attribute.
   The method should return "http://www.nist.gov".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSname
   */
  namespaceURI02: function(test) {
    var success;
    var elementList;
    var testAddr;
    var addrAttr;
    var attrNamespaceURI;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should be null');
    addrAttr = testAddr.getAttributeNodeNS("http://www.nist.gov","domestic");
    attrNamespaceURI = addrAttr.namespaceURI;

    test.equal(attrNamespaceURI, "http://www.nist.gov", "namespaceURI");
    test.done();
  },
  /**
   *
   The "getNamespaceURI()" method for a Node
   returns the namespace URI of this node, or null if unspecified.

   Retrieve the first employee node and invoke the "getNamespaceURI()"
   method.   The method should return "http://www.nist.gov".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSname
   */
  namespaceURI03: function(test) {
    var success;
    var elementList;
    var testEmployee;
    var employeeNamespace;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    testEmployee = elementList.item(0);
    test.notEqual(testEmployee, null, 'testEmployee should be null');
    employeeNamespace = testEmployee.namespaceURI;

    test.equal(employeeNamespace, "http://www.nist.gov", "namespaceURI");
    test.done();
  },
  /**
   *
   The "getNamespaceURI()" method for a Node
   returns the namespace URI of this node, or null if unspecified.

   Retrieve the second employee node and invoke the "getNamespaceURI()"
   method.   The method should return "null".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSname
   */
  namespaceURI04: function(test) {
    var success;
    var elementList;
    var testEmployee;
    var employeeNamespace;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    testEmployee = elementList.item(1);
    employeeNamespace = testEmployee.namespaceURI;

    test.equal(employeeNamespace, null, 'employeeNamespace should not be null');
    test.done();
  }
})

exports['nodegetlocalname'] = testcase({
  /**
   *
   The method getLocalName returns the local part of the qualified name of this node.

   Ceate two new element nodes and atribute nodes, with and without namespace prefixes.
   Retreive the local part of their qualified names using getLocalName and verrify
   if it is correct.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSLocalN
   */
  nodegetlocalname03: function(test) {
    var success;
    var element;
    var qelement;
    var attr;
    var qattr;
    var localElemName;
    var localQElemName;
    var localAttrName;
    var localQAttrName;


    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElementNS("http://www.w3.org/DOM/Test/elem","elem");
    qelement = doc.createElementNS("http://www.w3.org/DOM/Test/elem","qual:qelem");
    attr = doc.createAttributeNS("http://www.w3.org/DOM/Test/attr","attr");
    qattr = doc.createAttributeNS("http://www.w3.org/DOM/Test/attr","qual:qattr");
    localElemName = element.localName;

    localQElemName = qelement.localName;

    localAttrName = attr.localName;

    localQAttrName = qattr.localName;

    test.equal(localElemName, "elem", "nodegetlocalname03_localElemName");
    test.equal(localQElemName, "qelem", "nodegetlocalname03_localQElemName");
    test.equal(localAttrName, "attr", "nodegetlocalname03_localAttrName");
    test.equal(localQAttrName, "qattr", "nodegetlocalname03_localQAttrName");
    test.done();
  },
  /**
   *
   The method getNamespaceURI returns the namespace URI of this node, or null if it is unspecified
   For nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE and nodes created with
   a DOM Level 1 method, such as createElement from the Document interface, this is always null.

   Ceate two new element nodes and atribute nodes, with and without namespace prefixes.
   Retreive their namespaceURI's using getNamespaceURI and verrify if it is correct.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSname
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  nodegetnamespaceuri03: function(test) {
    var success;
    var element;
    var elementNS;
    var attr;
    var attrNS;
    var elemNSURI;
    var elemNSURINull;
    var attrNSURI;
    var attrNSURINull;
    var nullNS = null;



    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElementNS(nullNS,"elem");
    elementNS = doc.createElementNS("http://www.w3.org/DOM/Test/elem","qual:qelem");
    attr = doc.createAttributeNS(nullNS,"attr");
    attrNS = doc.createAttributeNS("http://www.w3.org/DOM/Test/attr","qual:qattr");
    elemNSURI = elementNS.namespaceURI;

    elemNSURINull = element.namespaceURI;

    attrNSURI = attrNS.namespaceURI;

    attrNSURINull = attr.namespaceURI;

    test.equal(elemNSURI, "http://www.w3.org/DOM/Test/elem", "nodegetnamespaceuri03_elemNSURI");
    test.equal(elemNSURINull, null, 'elemNSURINull should not be null');
    test.equal(attrNSURI, "http://www.w3.org/DOM/Test/attr", "nodegetnamespaceuri03_attrNSURI");
    test.equal(attrNSURINull, null, 'attrNSURINull should not be null');
    test.done();
  },
  /**
   *
   The method getOwnerDocument returns the Document object associated with this node

   Create a new DocumentType node.  Since this node is not used with any Document yet
   verify if the ownerDocument is null.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#node-ownerDoc
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  nodegetownerdocument01: function(test) {
    var success;
    var ownerDoc;
    var domImpl;
    var docType;
    var nullID = null;



    var doc = require('./core/files/staff.xml').staff();
    domImpl = doc.implementation;
    docType = domImpl.createDocumentType("mydoc",nullID,nullID);
    ownerDoc = docType.ownerDocument;

    test.equal(ownerDoc, null, 'ownerDoc should not be null');
    test.done();
  },
  /**
   *
   The method getOwnerDocument returns the Document object associated with this node

   Create a new Document node.  Since this node is not used with any Document yet
   verify if the ownerDocument is null.  Create a new element Node on the new Document
   object.  Check the ownerDocument of the new element node.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#node-ownerDoc
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  nodegetownerdocument02: function(test) {
    var success;
    var newDoc;
    var newElem;
    var ownerDocDoc;
    var ownerDocElem;
    var domImpl;
    var docType;
    var nullNS = null;



    var doc = require('./core/files/staff.xml').staff();
    domImpl = doc.implementation;
    docType = domImpl.createDocumentType("mydoc",nullNS,nullNS);
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","mydoc",docType);
    ownerDocDoc = newDoc.ownerDocument;

    test.equal(ownerDocDoc, null, 'ownerDocDoc should not be null');
    newElem = newDoc.createElementNS("http://www.w3.org/DOM/Test","myelem");
    ownerDocElem = newElem.ownerDocument;

    test.notEqual(ownerDocElem, null, 'ownerDocElem should be null');
    test.done();
  },
  /**
   *
   The method getPrefix returns the namespace prefix of this node, or null if it is unspecified.

   Ceate two new element nodes and atribute nodes, with and without namespace prefixes.
   Retreive the prefix part of their qualified names using getPrefix and verify
   if it is correct.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodegetprefix03: function(test) {
    var success;
    var element;
    var qelement;
    var attr;
    var qattr;
    var elemNoPrefix;
    var elemPrefix;
    var attrNoPrefix;
    var attrPrefix;


    var doc = require('./core/files/staff.xml').staff();
    element = doc.createElementNS("http://www.w3.org/DOM/Test/elem","elem");
    qelement = doc.createElementNS("http://www.w3.org/DOM/Test/elem","qual:qelem");
    attr = doc.createAttributeNS("http://www.w3.org/DOM/Test/attr","attr");
    qattr = doc.createAttributeNS("http://www.w3.org/DOM/Test/attr","qual:qattr");
    elemNoPrefix = element.prefix;

    elemPrefix = qelement.prefix;

    attrNoPrefix = attr.prefix;

    attrPrefix = qattr.prefix;

    test.equal(elemNoPrefix, null, 'elemNoPrefix should not be null');
    test.equal(elemPrefix, "qual", "nodegetprefix03_2");
    test.equal(attrNoPrefix, null, 'attrNoPrefix should not be null');
    test.equal(attrPrefix, "qual", "nodegetprefix03_4");
    test.done();
  }
})

exports['nodehasattributes'] = testcase({
  /**
   *
   The method hasAttributes returns whether this node (if it is an element) has any attributes.

   Retreive an element node without attributes.  Verify if hasAttributes returns false.
   Retreive another element node with attributes.  Verify if hasAttributes returns true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  nodehasattributes01: function(test) {
    var success;
    var element;
    var elementList;
    var hasAttributes;


    var doc = require('./core/files/staff.xml').staff();
    elementList = doc.getElementsByTagName("employee");
    element = elementList.item(0);
    hasAttributes = element.hasAttributes();
    test.equal(hasAttributes, false, 'hasAttributes should be *false*');
    elementList = doc.getElementsByTagName("address");
    element = elementList.item(0);
    hasAttributes = element.hasAttributes();
    test.ok(hasAttributes, 'nodehasattributes01_2');
    test.done();
  },
  /**
   *

   The method hasAttributes returns whether this node (if it is an element) has any attributes.



   Retrieve the docType node.	 Since this is not an element node check if hasAttributes returns

   null.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  nodehasattributes02: function(test) {
    var success;
    var docType;
    var hasAttributes;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    hasAttributes = docType.hasAttributes();
    test.equal(hasAttributes, false, 'hasAttributes should be *false*');
    test.done();
  },
  /**
   *
   The method hasAttributes returns whether this node (if it is an element) has any attributes.

   Retreive an element node with a default attributes.  Verify if hasAttributes returns true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  nodehasattributes03: function(test) {
    var success;
    var element;
    var elementList;
    var hasAttributes;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:employee");
    element = elementList.item(0);
    test.notEqual(element, null, 'element should be null');
    hasAttributes = element.hasAttributes();
    test.ok(hasAttributes, 'hasAttributes');
    test.done();
  },
  /**
   *
   The method hasAttributes returns whether this node (if it is an element) has any attributes.

   Create a new Document, Element and Attr node.  Add the Attr to the Element and append the
   Element to the Document.  Retreive the newly created element node from the document and check
   if it has attributes using hasAttributes.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeHasAttrs
   */
  nodehasattributes04: function(test) {
    var success;
    var newDoc;
    var docType = null;

    var domImpl;
    var element;
    var elementTest;
    var elementDoc;
    var attribute;
    var setNode;
    var appendedChild;
    var elementList;
    var hasAttributes;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","test",docType);
    element = newDoc.createElementNS("http://www.w3.org/DOM/Test","dom:elem");
    attribute = newDoc.createAttribute("attr");
    setNode = element.setAttributeNode(attribute);
    elementDoc = newDoc.documentElement;

    appendedChild = elementDoc.appendChild(element);
    elementList = newDoc.getElementsByTagNameNS("http://www.w3.org/DOM/Test","elem");
    elementTest = elementList.item(0);
    hasAttributes = elementTest.hasAttributes();
    test.ok(hasAttributes, 'nodehasattributes04');
    test.done();
  }
})

exports['nodeissupported'] = testcase({
  /**
   *
   The method "isSupported(feature,version)" Tests whether the DOM implementation
   implements a specific feature and that feature is supported by this node.

   Call the isSupported method on the document element node with a combination of features
   versions and versions as below.  Valid feature names are case insensitive and versions
   "2.0", "1.0" and if the version is not specified, supporting any version of the feature
   should return true.  Check if the value returned value was true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  nodeissupported01: function(test) {
    var success;
    var element;
    var version = "";
    var version1 = "1.0";
    var version2 = "2.0";
    var featureCore;
    var featureXML;
    var success;
    featuresXML = new Array();
    featuresXML[0] = "XML";
    featuresXML[1] = "xmL";

    featuresCore = new Array();
    featuresCore[0] = "Core";
    featuresCore[1] = "CORE";



    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.documentElement;

    for(var indexN10063 = 0;indexN10063 < featuresXML.length; indexN10063++) {
      featureXML = featuresXML[indexN10063];
      success = element.isSupported(featureXML,version);
      test.ok(success, 'nodeissupported01_XML1');
      success = element.isSupported(featureXML,version1);
      test.ok(success, 'nodeissupported01_XML2');

    }
    for(var indexN1007C = 0;indexN1007C < featuresCore.length; indexN1007C++) {
      featureCore = featuresCore[indexN1007C];
      success = element.isSupported(featureCore,version);
      test.ok(success, 'nodeissupported01_Core1');
      success = element.isSupported(featureCore,version1);
      success = element.isSupported(featureCore,version2);
      test.ok(success, 'nodeissupported01_Core3');

    }
    test.done();
  },
  /**
   *
   The method "isSupported(feature,version)" Tests whether the DOM implementation
   implements a specific feature and that feature is supported by this node.

   Call the isSupported method on a new attribute node with a combination of features
   versions and versions as below.  Valid feature names are case insensitive and versions
   "2.0", "1.0" and if the version is not specified, supporting any version of the feature
   should return true.  Check if the value returned value was true.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  nodeissupported02: function(test) {
    var success;
    var attribute;
    var version = "";
    var version1 = "1.0";
    var version2 = "2.0";
    var featureCore;
    var featureXML;
    var success;
    featuresXML = new Array();
    featuresXML[0] = "XML";
    featuresXML[1] = "xmL";

    featuresCore = new Array();
    featuresCore[0] = "Core";
    featuresCore[1] = "CORE";



    var doc = require('./core/files/staffNS.xml').staffNS();
    attribute = doc.createAttribute("TestAttr");
    for(var indexN10064 = 0;indexN10064 < featuresXML.length; indexN10064++) {
      featureXML = featuresXML[indexN10064];
      success = attribute.isSupported(featureXML,version);
      test.ok(success, 'nodeissupported02_XML1');
      success = attribute.isSupported(featureXML,version1);
      test.ok(success, 'nodeissupported02_XML2');

    }
    for(var indexN1007D = 0;indexN1007D < featuresCore.length; indexN1007D++) {
      featureCore = featuresCore[indexN1007D];
      success = attribute.isSupported(featureCore,version);
      test.ok(success, 'nodeissupported02_Core1');
      success = attribute.isSupported(featureCore,version1);
      success = attribute.isSupported(featureCore,version2);
      test.ok(success, 'nodeissupported02_Core3');

    }
    test.done();
  },
  /**
   *

   The method "isSupported(feature,version)" Tests whether the DOM implementation

   implements a specific feature and that feature is supported by this node.



   Call the isSupported method specifying empty strings for feature and version on a docType

   Node.  Check if the value returned value was false.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  nodeissupported03: function(test) {
    var success;
    var docType;
    var success;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    success = docType.isSupported("","");
    test.equal(success, false, 'success should be *false*');
    test.done();
  },
  /**
   *
   The method "isSupported(feature,version)" Tests whether the DOM implementation
   implements a specific feature and that feature is supported by this node.

   Call the isSupported method specifying empty strings for feature and version on a
   new EntityReference node.  Check if the value returned value was false.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  nodeissupported04: function(test) {
    var success;
    var entRef;
    var success;


    var doc = require('./core/files/staffNS.xml').staffNS();
    entRef = doc.createEntityReference("ent1");
    test.notEqual(entRef, null, 'entRef should be null');
    success = entRef.isSupported("XML CORE","");
    test.equal(success, false, 'success should be *false*');
    test.done();
  },
  /**
   *

   The method "isSupported(feature,version)" Tests whether the DOM implementation

   implements a specific feature and that feature is supported by this node.



   Call the isSupported method specifying bad values for feature and version on a new

   Processing Instruction node.  Check if the value returned from this method value was false.


   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   */
  nodeissupported05: function(test) {
    var success;
    var pi;
    var success;


    var doc = require('./core/files/staffNS.xml').staffNS();
    pi = doc.createProcessingInstruction("PITarget","PIData");
    success = pi.isSupported("-","+");
    test.equal(success, false, 'success should be *false*');
    test.done();
  }
})

exports['nodenormalize'] = testcase({
  /**
   *
   The method "normalize" puts all Text nodes in the full depth of the sub-tree underneath
   this Node, including attribute nodes, into a "normal" form where only structure
   (e.g., elements, comments, processing instructions, CDATA sections, and entity references)
   separates Text nodes, i.e., there are neither adjacent Text nodes nor empty Text nodes.

   Create a dom tree consisting of elements, comments, processing instructions, CDATA sections,
   and entity references nodes seperated by text nodes.  Check the length of the node list of each
   before and after normalize has been called.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-normalize
   */
  nodenormalize01: function(test) {
    var success;
    var newDoc;
    var domImpl;
    var docType;
    var docTypeNull = null;

    var documentElement;
    var element1;
    var element2;
    var element3;
    var element4;
    var element5;
    var element6;
    var element7;
    var text1;
    var text2;
    var text3;
    var pi;
    var cData;
    var comment;
    var entRef;
    var elementList;
    var appendedChild;


    var doc = require('./core/files/staffNS.xml').staffNS();
    domImpl = doc.implementation;
    newDoc = domImpl.createDocument("http://www.w3.org/DOM/Test","dom:root",docTypeNull);
    element1 = newDoc.createElement("element1");
    element2 = newDoc.createElement("element2");
    element3 = newDoc.createElement("element3");
    element4 = newDoc.createElement("element4");
    element5 = newDoc.createElement("element5");
    element6 = newDoc.createElement("element6");
    element7 = newDoc.createElement("element7");
    text1 = newDoc.createTextNode("text1");
    text2 = newDoc.createTextNode("text2");
    text3 = newDoc.createTextNode("text3");
    cData = newDoc.createCDATASection("Cdata");
    comment = newDoc.createComment("comment");
    pi = newDoc.createProcessingInstruction("PITarget","PIData");
    entRef = newDoc.createEntityReference("EntRef");
    test.notEqual(entRef, null, 'entRef should be null');
    documentElement = newDoc.documentElement;

    appendedChild = documentElement.appendChild(element1);
    appendedChild = element2.appendChild(text1);
    appendedChild = element2.appendChild(text2);
    appendedChild = element2.appendChild(text3);
    appendedChild = element1.appendChild(element2);
    text1 = text1.cloneNode(false);
    text2 = text2.cloneNode(false);
    appendedChild = element3.appendChild(entRef);
    appendedChild = element3.appendChild(text1);
    appendedChild = element3.appendChild(text2);
    appendedChild = element1.appendChild(element3);
    text1 = text1.cloneNode(false);
    text2 = text2.cloneNode(false);
    appendedChild = element4.appendChild(cData);
    appendedChild = element4.appendChild(text1);
    appendedChild = element4.appendChild(text2);
    appendedChild = element1.appendChild(element4);
    text2 = text2.cloneNode(false);
    text3 = text3.cloneNode(false);
    appendedChild = element5.appendChild(comment);
    appendedChild = element5.appendChild(text2);
    appendedChild = element5.appendChild(text3);
    appendedChild = element1.appendChild(element5);
    text2 = text2.cloneNode(false);
    text3 = text3.cloneNode(false);
    appendedChild = element6.appendChild(pi);
    appendedChild = element6.appendChild(text2);
    appendedChild = element6.appendChild(text3);
    appendedChild = element1.appendChild(element6);
    entRef = entRef.cloneNode(false);
    text1 = text1.cloneNode(false);
    text2 = text2.cloneNode(false);
    text3 = text3.cloneNode(false);
    appendedChild = element7.appendChild(entRef);
    appendedChild = element7.appendChild(text1);
    appendedChild = element7.appendChild(text2);
    appendedChild = element7.appendChild(text3);
    appendedChild = element1.appendChild(element7);
    elementList = element1.childNodes;

    test.equal(elementList.length, 6, "nodeNormalize01_1Bef");
    elementList = element2.childNodes;

    test.equal(elementList.length, 3, "nodeNormalize01_2Bef");
    elementList = element3.childNodes;

    test.equal(elementList.length, 3, "nodeNormalize01_3Bef");
    elementList = element4.childNodes;

    test.equal(elementList.length, 3, "nodeNormalize01_4Bef");
    elementList = element5.childNodes;

    test.equal(elementList.length, 3, "nodeNormalize01_5Bef");
    elementList = element6.childNodes;

    test.equal(elementList.length, 3, "nodeNormalize01_6Bef");
    elementList = element7.childNodes;

    test.equal(elementList.length, 4, "nodeNormalize01_7Bef");
    newDoc.normalize();
    elementList = element1.childNodes;

    test.equal(elementList.length, 6, "nodeNormalize01_1Aft");
    elementList = element2.childNodes;

    test.equal(elementList.length, 1, "nodeNormalize01_2Aft");
    elementList = element3.childNodes;

    test.equal(elementList.length, 2, "nodeNormalize01_3Aft");
    elementList = element4.childNodes;

    test.equal(elementList.length, 2, "nodeNormalize01_4Aft");
    elementList = element5.childNodes;

    test.equal(elementList.length, 2, "nodeNormalize01_5Aft");
    elementList = element6.childNodes;

    test.equal(elementList.length, 2, "nodeNormalize01_6Aft");
    elementList = element7.childNodes;

    test.equal(elementList.length, 2, "nodeNormalize01_7Aft");
    test.done();
  },
  /**
   *
   The method setPrefix sets the namespace prefix of this node.  Note that setting this attribute,
   when permitted, changes the nodeName attribute, which holds the qualified name, as well as the
   tagName and name attributes of the Element and Attr interfaces, when applicable.

   Create a new element node with a namespace prefix.  Add it to a new DocumentFragment Node without
   a prefix.  Call setPrefix on the elemen node.  Check if the prefix was set correctly on the element.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodesetprefix01: function(test) {
    var success;
    var docFragment;
    var element;
    var elementTagName;
    var elementNodeName;
    var appendedChild;


    var doc = require('./core/files/staff.xml').staff();
    docFragment = doc.createDocumentFragment();
    element = doc.createElementNS("http://www.w3.org/DOM/Test","emp:address");
    appendedChild = docFragment.appendChild(element);
    element.prefix = "dmstc";

    elementTagName = element.tagName;

    elementNodeName = element.nodeName;

    test.equal(elementTagName, "dmstc:address", "nodesetprefix01_tagname");
    test.equal(elementNodeName, "dmstc:address", "nodesetprefix01_nodeName");
    test.done();
  },
  /**
   *
   The method setPrefix sets the namespace prefix of this node.  Note that setting this attribute,
   when permitted, changes the nodeName attribute, which holds the qualified name, as well as the
   tagName and name attributes of the Element and Attr interfaces, when applicable.

   Create a new attribute node and add it to an element node with an existing attribute having
   the same localName as this attribute but different namespaceURI.  Change the prefix of the
   newly created attribute using setPrefix.  Check if the new attribute nodeName has changed
   and the existing attribute is the same.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodesetprefix02: function(test) {
    var success;
    var element;
    var attribute;
    var newAttribute;
    var setNode;
    var elementList;
    var attrName;
    var newAttrName;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    element = elementList.item(1);
    newAttribute = doc.createAttributeNS("http://www.w3.org/DOM/Test","test:address");
    setNode = element.setAttributeNodeNS(newAttribute);
    newAttribute.prefix = "dom";

    attribute = element.getAttributeNodeNS("http://www.usa.com","domestic");
    attrName = attribute.nodeName;

    newAttrName = newAttribute.nodeName;

    test.equal(attrName, "dmstc:domestic", "nodesetprefix02_attrName");
    test.equal(newAttrName, "dom:address", "nodesetprefix02_newAttrName");
    test.done();
  },
  /**
   *
   The method setPrefix raises a NAMESPACE_ERR if the namespaceURI of this node is null.

   Create a new element node without a namespace prefix.  Call setPrefix on the newly created elemenent node.
   Check if a NAMESPACE_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodesetprefix03: function(test) {
    var success;
    var element;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElement("address");

    {
      success = false;
      try {
        element.prefix = "test";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The method setPrefix raises a NAMESPACE_ERR if the namespaceURI of this node is null.

   Retreive the a default Attribute node which does not have a namespace prefix. Call the setPrefix
   method on it.  Check if a NAMESPACE_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=259
   */
  nodesetprefix04: function(test) {
    var success;
    var element;
    var attribute;
    var elementList;
    var nullNS = null;



    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:employee");
    element = elementList.item(0);
    test.notEqual(element, null, 'element should be null');
    attribute = element.getAttributeNodeNS(nullNS,"defaultAttr");

    {
      success = false;
      try {
        attribute.prefix = "test";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'nodesetprefix04');
    }
    test.done();
  },
  /**
   *
   The method setPrefix raises a NAMESPACE_ERR if the specified prefix is malformed.

   Create a new namespace aware element node and call the setPrefix method on it with several malformed
   prefix values.  Check if a NAMESPACE_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodesetprefix05: function(test) {
    var success;
    var element;
    var prefixValue;
    prefixValues = new Array();
    prefixValues[0] = "_:";
    prefixValues[1] = ":0";
    prefixValues[2] = ":";
    prefixValues[3] = "_::";
    prefixValues[4] = "a:0:c";



    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test/L2","dom:elem");
    for(var indexN10050 = 0;indexN10050 < prefixValues.length; indexN10050++) {
      prefixValue = prefixValues[indexN10050];

      {
	success = false;
	try {
          element.prefix = prefixValue;

        }
	catch(ex) {
          success = (typeof(ex.code) != 'undefined' && ex.code == 14);
	}
	test.ok(success, 'throw_NAMESPACE_ERR');
      }

    }
    test.done();
  },
  /**
   *
   The method setPrefix raises a NAMESPACE_ERR if the specified prefix is "xml" and the namespaceURI
   of this node is different from "http://www.w3.org/XML/1998/namespace".

   Invoke the setPrefix method on this Element object with namespaceURI that is different from
   http://www..w3.org/xml/1998/namespace and a prefix whose values is xml.
   Check if the NAMESPACE_ERR was thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodesetprefix06: function(test) {
    var success;
    var element;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test/L2","dom:elem");

    {
      success = false;
      try {
        element.prefix = "xml";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The method setPrefix raises a NAMESPACE_ERR if this node is an attribute and the specified
   prefix is "xmlns" and the namespaceURI of this node is different from
   "http://www.w3.org/2000/xmlns/".

   Create a new attribute node whose namespaceURI is different form "http://www.w3.org/2000/xmlns/"
   and node prefix is "xmlns".
   Check if the NAMESPACE_ERR was thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodesetprefix07: function(test) {
    var success;
    var attribute;


    var doc = require('./core/files/staffNS.xml').staffNS();
    attribute = doc.createAttributeNS("http://www.w3.org/DOM/Test/L2","abc:elem");

    {
      success = false;
      try {
        attribute.prefix = "xmlns";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The method setPrefix raises a NAMESPACE_ERR if this node is an attribute and the qualifiedName
   of this node is "xmlns

   Retreive an attribute node whose qualifiedName is xmlns.  Try setting a prefix on this node.
   Check if the NAMESPACE_ERR was thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodesetprefix08: function(test) {
    var success;
    var element;
    var elementList;
    var attribute;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    element = elementList.item(0);
    attribute = element.getAttributeNode("xmlns");

    {
      success = false;
      try {
        attribute.prefix = "xml";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The method setPrefix raises a INVALID_CHARACTER_ERR if the specified prefix contains an illegal character.

   Create a new namespace aware element node and call the setPrefix method on it with a prefix having
   an invalid character.  Check if a NAMESPACE_ERR is thrown.

   * @author IBM
   * @author Neil Delima
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  nodesetprefix09: function(test) {
    var success;
    var value = "#$%&'()@";
    var element;


    var doc = require('./core/files/staffNS.xml').staffNS();
    element = doc.createElementNS("http://www.w3.org/DOM/Test/L2","dom:elem");

    {
      success = false;
      try {
        element.prefix = value;

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    }
    test.done();
  },
  /**
   *
   The "normalize()" method puts all the nodes in the full
   depth of the sub-tree underneath this element into a
   "normal" form.

   Retrieve the third employee and access its second child.
   This child contains a block of text that is spread
   across multiple lines.   The content of the "name" child
   should be parsed and treated as a single Text node.

   This appears to be a duplicate of elementnormalize.xml in DOM L1 Test Suite

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-normalize
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-72AB8359
   */
  normalize01: function(test) {
    var success;
    var root;
    var elementList;
    var firstChild;
    var textList;
    var textNode;
    var data;


    var doc = require('./core/files/staff.xml').staff();
    root = doc.documentElement;

    root.normalize();
    elementList = root.getElementsByTagName("name");
    firstChild = elementList.item(2);
    textList = firstChild.childNodes;

    textNode = textList.item(0);
    data = textNode.data;

    test.equal(data, "Roger\n Jones", "data");
    test.done();
  }
})

exports['ownerDocument'] = testcase({
  /**
   *
   The "getOwnerDocument()" method returns null if the target
   node itself is a DocumentType which is not used with any document yet.

   Invoke the "getOwnerDocument()" method on the master
   document.   The DocumentType returned should be null.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#node-ownerDoc
   */
  ownerDocument01: function(test) {
    var success;
    var ownerDocument;


    var doc = require('./core/files/staff.xml').staff();
    ownerDocument = doc.ownerDocument;

    test.equal(ownerDocument, null, 'ownerDocument should not be null');
    test.done();
  },
  /**
   *
   The "getOwnerElement()" will return the Element node this attribute
   is attached to or null if this attribute is not in use.
   Get the "domestic" attribute from the first "address" node.
   Apply the "getOwnerElement()" method to get the Element associated
   with the attribute.  The value returned should be "address".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-F68D095
   */
  ownerElement01: function(test) {
    var success;
    var addressList;
    var testNode;
    var attributes;
    var domesticAttr;
    var elementNode;
    var name;


    var doc = require('./core/files/staff.xml').staff();
    addressList = doc.getElementsByTagName("address");
    testNode = addressList.item(0);
    attributes = testNode.attributes;

    domesticAttr = attributes.getNamedItem("domestic");
    elementNode = domesticAttr.ownerElement;

    name = elementNode.nodeName;

    test.equal(name, "address", "throw_Equals");
    test.done();
  },
  /**
   *
   The "getOwnerElement()" will return the Element node this attribute
   is attached to or null if this attribute is not in use.
   Create a new attribute.
   Apply the "getOwnerElement()" method to get the Element associated
   with the attribute.  The value returned should be "null" since this
   attribute is not in use.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Attr-ownerElement
   */
  ownerElement02: function(test) {
    var success;
    var newAttr;
    var elementNode;


    var doc = require('./core/files/staff.xml').staff();
    newAttr = doc.createAttribute("newAttribute");
    elementNode = newAttr.ownerElement;

    test.equal(elementNode, null, 'elementNode should not be null');
    test.done();
  }
})

exports['prefix'] = testcase({
  /**
   *
   The "getPrefix()" method for a Node
   returns the namespace prefix of the node,
   and for nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE
   and nodes created with a DOM Level 1 method, this is null.

   Create an new Element with the createElement() method.
   Invoke the "getPrefix()" method on the newly created element
   node will cause "null" to be returned.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  prefix01: function(test) {
    var success;
    var createdNode;
    var prefix;


    var doc = require('./core/files/staffNS.xml').staffNS();
    createdNode = doc.createElement("test:employee");
    prefix = createdNode.prefix;

    test.equal(prefix, null, 'prefix should not be null');
    test.done();
  },
  /**
   *
   The "getPrefix()" method
   returns the namespace prefix of this node, or null if unspecified.
   For nodes of any type other than ELEMENT_NODE and ATTRIBUTE_NODE,
   this is always null.

   Retrieve the first emp:employeeId node and get the first child of this node.
   Since the first child is Text node invoking the "getPrefix()"
   method will cause "null" to be returned.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  prefix02: function(test) {
    var success;
    var elementList;
    var testEmployee;
    var textNode;
    var prefix;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:employeeId");
    testEmployee = elementList.item(0);
    test.notEqual(testEmployee, null, 'testEmployee should be null');
    textNode = testEmployee.firstChild;

    prefix = textNode.prefix;

    test.equal(prefix, null, 'prefix should not be null');
    test.done();
  },
  /**
   *
   The "getPrefix()" method for a node
   returns the namespace prefix of this node, or null if it is unspecified.

   Retrieve the first emp:employee node and invoke the getPrefix() method."
   The method should return "emp".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  prefix03: function(test) {
    var success;
    var elementList;
    var testEmployee;
    var prefix;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:employee");
    testEmployee = elementList.item(0);
    test.notEqual(testEmployee, null, 'testEmployee should be null');
    prefix = testEmployee.prefix;

    test.equal(prefix, "emp", "prefix");
    test.done();
  },
  /**
   *
   The "getPrefix()" method for a node
   returns the namespace prefix of this node, or null if it is unspecified.

   Retrieve the first employee node and invoke the getPrefix() method."
   The method should return "null".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   */
  prefix04: function(test) {
    var success;
    var elementList;
    var testEmployee;
    var prefix;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    testEmployee = elementList.item(0);
    prefix = testEmployee.prefix;

    test.equal(prefix, null, 'prefix should not be null');
    test.done();
  },
  /**
   *
   The "setPrefix(prefix)" method raises a
   NAMESPACE_ERR DOMException if the specified node is an attribute
   and the specified prefix is xmlns and the namespaceURI is different from
   http://www.w3.org/2000/xmlns.

   Attempt to insert "xmlns" as the new namespace prefix on the emp:domestic
   attribute within the emp:address node.
   An exception should be raised since the namespaceURI of this node is not
   http://www.w3.org/2000/xmlns.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-NodeNSPrefix')/setraises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  prefix05: function(test) {
    var success;
    var elementList;
    var addrNode;
    var addrAttr;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    addrNode = elementList.item(0);
    test.notEqual(addrNode, null, 'addrNode should be null');
    addrAttr = addrNode.getAttributeNode("emp:domestic");

    {
      success = false;
      try {
        addrAttr.prefix = "xmlns";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "setPrefix(prefix)" method raises a
   INVALID_CHARACTER_ERR DOMException if the specified
   prefix contains an illegal character.

   Attempt to insert a new namespace prefix on the first employee node.
   An exception should be raised since the namespace prefix has an invalid
   character.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-NodeNSPrefix')/setraises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   */
  prefix06: function(test) {
    var success;
    var elementList;
    var employeeNode;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    employeeNode = elementList.item(0);

    {
      success = false;
      try {
        employeeNode.prefix = "pre^fix xmlns='http//www.nist.gov'";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    }
    test.done();
  },
  /**
   *
   The "setPrefix(prefix)" method raises a
   NAMESPACE_ERR DOMException if the specified
   prefix if malformed.

   Attempt to insert a new namespace prefix on the second employee node.
   An exception should be raised since the namespace prefix is malformed.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-NodeNSPrefix')/setraises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  prefix07: function(test) {
    var success;
    var elementList;
    var employeeNode;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    employeeNode = elementList.item(0);

    {
      success = false;
      try {
        employeeNode.prefix = "emp::";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "setPrefix(prefix)" method causes the
   DOMException NO_MODIFICATION_ALLOWED_ERR to be raised
   if the node is readonly.

   Obtain the children of the THIRD "gender" element.  The elements
   content is an entity reference.  Get the FIRST item
   from the entity reference and execute the "setPrefix(prefix)" method.
   This causes a NO_MODIFICATION_ALLOWED_ERR DOMException to be thrown.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NO_MODIFICATION_ALLOWED_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-NodeNSPrefix')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NO_MODIFICATION_ALLOWED_ERR'])
   */
  prefix08: function(test) {
    var success;
    var genderList;
    var genderNode;
    var entRef;
    var entElement;
    var createdNode;
    var nodeType;


    var doc = require('./core/files/staff.xml').staff();
    genderList = doc.getElementsByTagName("gender");
    genderNode = genderList.item(2);
    entRef = genderNode.firstChild;

    nodeType = entRef.nodeType;


    if(
      (1 == nodeType)
    ) {
      entRef = doc.createEntityReference("ent4");
      test.notEqual(entRef, null, 'entRef should be null');

    }
    entElement = entRef.firstChild;

    test.notEqual(entElement, null, 'entElement should be null');
    createdNode = doc.createElement("text3");

    {
      success = false;
      try {
        entElement.prefix = "newPrefix";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }
    test.done();
  },
  /**
   *
   The "setPrefix(prefix)" method raises a
   NAMESPACE_ERR DOMException if the specified node is an attribute
   and the qualifiedName of this node is xmlns.

   Attempt to set the prefix on the xmlns attribute within the fourth address
   element.
   An exception should be raised since the qualifiedName of this attribute
   is "xmlns".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-NodeNSPrefix')/setraises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  prefix09: function(test) {
    var success;
    var elementList;
    var addrNode;
    var addrAttr;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    addrNode = elementList.item(3);
    addrAttr = addrNode.getAttributeNode("xmlns");
    {
      success = false;
      try {
        addrAttr.prefix = "xxx";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "setPrefix(prefix)" method raises a
   NAMESPACE_ERR DOMException if the specified
   prefix is xml and the namespaceURI is different from
   http://www.w3.org/XML/1998/namespace.

   Attempt to insert "xml" as the new namespace prefix on the first employee node.
   An exception should be raised since the namespaceURI of this node is not
   http://www.w3.org/XML/1998/namespace.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-NodeNSPrefix
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-NodeNSPrefix')/setraises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  prefix10: function(test) {
    var success;
    var elementList;
    var employeeNode;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    employeeNode = elementList.item(1);

    {
      success = false;
      try {
        employeeNode.prefix = "xml";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "setPrefix(prefix)" method raises a
   NAMESPACE_ERR DOMException if the specified
   prefix is set on a node with a namespaceURI that is null.

   Attempt to insert a new namespace prefix on the second employee node.
   An exception should be raised since the namespace prefix is set
   on a node whose namespaceURI is null.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('')/setraises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  prefix11: function(test) {
    var success;
    var elementList;
    var employeeNode;
    var namespaceURI;


    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("employee");
    employeeNode = elementList.item(1);
    namespaceURI = employeeNode.namespaceURI;


    {
      success = false;
      try {
        employeeNode.prefix = "employee1";

      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 14);
      }
      test.ok(success, 'throw_NAMESPACE_ERR');
    }
    test.done();
  },
  /**
   *
   The "getPublicId()" method of a documenttype node contains
   the public identifier associated with the external subset.

   Retrieve the documenttype.
   Apply the "getPublicId()" method.  The string "STAFF" should be
   returned.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-Core-DocType-publicId
   */
  publicId01: function(test) {
    var success;
    var docType;
    var publicId;


    var doc = require('./core/files/staffNS.xml').staffNS();
    docType = doc.doctype;

    publicId = docType.publicId;

    test.equal(publicId, "STAFF", "throw_Equals");
    test.done();
  }
})

exports['remove attribute or namedItem NS'] = testcase({
  /**
   *
   The "removeAttributeNS(namespaceURI,localName)" method for an attribute causes the
   DOMException NO_MODIFICATION_ALLOWED_ERR to be raised
   if the node is readonly.

   Obtain the children of the THIRD "gender" element.  The elements
   content is an entity reference.  Try to remove an attribute
   from the entity reference by executing the
   "removeAttributeNS(namespaceURI,localName)" method.
   This causes a NO_MODIFICATION_ALLOWED_ERR DOMException to be thrown.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NO_MODIFICATION_ALLOWED_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElRemAtNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElRemAtNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NO_MODIFICATION_ALLOWED_ERR'])
   */
  removeAttributeNS01: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var gender = doc.getElementsByTagName("gender").item(2).firstChild;
    // if(1 == gender.nodeType) {
    //   gender = doc.createEntityReference("ent4");
    //   test.notEqual(gender, null, 'gender should not be null')
    // }
    var genElement = gender.childNodes.item(0);
    test.notEqual(genElement, null, 'genElement should not be null')
    var success = false;
    try {
      genElement.removeAttributeNS("http://www.w3.org/2000/xmlns/","local1");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 7);
    }
    test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    test.done();
  },
  /**
   *
   The "removeAttributeNS(namespaceURI,localName)" removes an attribute by
   local name and namespace URI.  If the removed attribute has a
   default value it is immediately replaced.  The replacing attribute has the same
   namespace URI and local name, as well as the original prefix.

   Retrieve the attribute named "emp:local" from emp:address
   node, then remove the "emp:local"
   attribute by invoking the "removeAttributeNS(namespaceURI,localName)" method.
   The "emp:local" attribute has a default value defined in the
   DTD file, that value should immediately replace the old
   value.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElRemAtNS
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=238
   */
  removeAttributeNS02: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var elementList;
    var testAddr;
    var addrAttr;
    var attr;
    var namespaceURI;
    var localName;
    var prefix;
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.equal(testAddr.removeAttributeNS("http://www.nist.gov","local1"), undefined, "should be undefined");
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    addrAttr = testAddr.getAttributeNodeNS("http://www.nist.gov","local1");
    attr = testAddr.getAttributeNS("http://www.nist.gov","local1");
    namespaceURI = addrAttr.namespaceURI;
    localName = addrAttr.localName;
    prefix = testAddr.prefix;
    test.equal(attr, 'FALSE');
    test.equal(namespaceURI, 'http://www.nist.gov');
    test.equal(localName, 'local1');
    test.equal(prefix, 'emp');
    test.done();
  },
  /**
   *
   (This test is not from the w3.org test suite but specific to jsdom.)

   The "removeAttributeNS(namespaceURI,localName)" does not raise
   NOT_FOUND_ERR if the attribute is not present.

   Remove the attribute "{http://nonexistent}local" from emp:address
   node by invoking the "removeAttributeNS(namespaceURI,localName)" method.

   * @author Louis-Dominique Dubeau
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElRemAtNS
   * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-19
   * @see http://dom.spec.whatwg.org/#dom-element-removeattributens
   */
  removeAttributeNS03: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var elementList = doc.getElementsByTagName("emp:address");
    var testAddr = elementList.item(0);
    test.equal(testAddr.removeAttributeNS("http://nonexistent","nonexistent"), undefined, "should be undefined");
    test.done();
  },
  /**
   *
   The "removeNamedItemNS(namespaceURI,localName)" method for a
   NamedNodeMap should remove a node specified by localName and namespaceURI.

   Retrieve a list of elements with tag name "address".
   Access the second element from the list and get its attributes.
   Try to remove the attribute node with local name "domestic"
   and namespace uri "http://www.usa.com" with
   method removeNamedItemNS(namespaceURI,localName).
   Check to see if the node has been removed.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-1074577549
   */
  removeNamedItemNS01: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var testAddress = doc.getElementsByTagName("address").item(1);
    var attributes = testAddress.attributes;
    var removedNode = attributes.removeNamedItemNS("http://www.usa.com","domestic");
    test.notEqual(removedNode, null, 'removedNode should not be null');
    var newAttr = attributes.getNamedItem("dmstc:domestic");
    test.equal(newAttr, null, 'newAttr should be null');
    test.done();
  },
  /**
   *
   The "removeNamedItemNS(namespaceURI,localName)" method for a
   NamedNodeMap should raise NOT_FOUND_ERR DOMException if
   there is no node with the specified namespaceURI and localName in this map.

   Retrieve a list of elements with tag name "address".
   Access the second element from the list and get its attributes.
   Try to remove an attribute node with local name "domest"
   and namespace uri "http://www.usa.com" with
   method removeNamedItemNS(namespaceURI,localName).
   This should raise NOT_FOUND_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-removeNamedItemNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-removeNamedItemNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
   */
  removeNamedItemNS02: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var success;
    var namespaceURI = "http://www.usa.com";
    var localName = "domest";
    var elementList;
    var testAddress;
    var attributes;
    var removedNode;
    elementList = doc.getElementsByTagName("address");
    testAddress = elementList.item(1);
    attributes = testAddress.attributes;
    success = false;
    try {
      removedNode = attributes.removeNamedItemNS(namespaceURI,localName);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 8);
    }
    test.ok(success, 'throw_NOT_FOUND_ERR')
    test.done();
  },
  /**
   *
   The "removeNamedItemNS(namespaceURI,localName)" method for a
   NamedNodeMap should raise NO_MODIFICATION_ALLOWED_ERR DOMException if
   this map is readonly.

   Retrieve a list of "gender" elements. Get access to the THIRD element
   which contains an ENTITY_REFERENCE child node.  Try to remove the attribute
   in the node's map with method removeNamedItemNS(namespaceURI,localName).
   This should result in NO_MODIFICATION_ALLOWED_ERR
   DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NO_MODIFICATION_ALLOWED_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-removeNamedItemNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-removeNamedItemNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NO_MODIFICATION_ALLOWED_ERR'])
   */
  removeNamedItemNS03: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var success;
    var namespaceURI = "http://www.w3.org/2000/xmlns/";
    var localName = "local1";
    var elementList = doc.getElementsByTagName("gender");
    var testAddress = elementList.item(2);
    var nList = testAddress.childNodes;
    var child = nList.item(0);
    // if(1 == child.nodeType) {
    //   child = doc.createEntityReference("ent4");
    //   test.notEqual(child, null, 'child should not be null');
    // }
    var n2List = child.childNodes;
    var child2 = n2List.item(0);
    test.notEqual(child2, null, 'child2 should not be null');
    var attributes = child2.attributes;
    success = false;
    try {
      attributes.removeNamedItemNS(namespaceURI,localName);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 7);
    }
    test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    test.done();
  }
})

exports['setAttributeNS'] = testcase({
  /**
   *
   The "setAttributeNS(namespaceURI,qualifiedName,Value)" method raises a
   INVALID_CHARACTER_ERR DOMException if the specified
   prefix contains an illegal character.

   Attempt to add a new attribute on the first employee node.
   An exception should be raised since the "qualifiedName" has an invalid
   character.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   */
  setAttributeNS01: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var success;
    var namespaceURI = "http://www.nist.gov";
    var qualifiedName = "emp:qual?name";
    var elementList;
    var testAddr;
    elementList = doc.getElementsByTagName("employee");
    testAddr = elementList.item(0);
    {
      success = false;
      try {
        testAddr.setAttributeNS(namespaceURI,qualifiedName,"newValue");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    }
    test.done()
  },
  /**
   *
   The "setAttributeNS(namespaceURI,qualifiedName,value)" method raises a
   NAMESPACE_ERR DOMException if the specified
   qualifiedName if malformed.

   Attempt to add a new attribute on the second employee node.
   An exception should be raised since the "qualifiedName" is malformed.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  setAttributeNS02: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var success;
    var namespaceURI = "http://www.nist.gov";
    var qualifiedName = "emp:";
    var elementList;
    var testAddr;
    elementList = doc.getElementsByTagName("emp:employee");
    testAddr = elementList.item(0);
    {
      success = false;
      try {
        testAddr.setAttributeNS(namespaceURI,qualifiedName,"newValue");
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
   The "setAttributeNS(namespaceURI,qualifiedName,value)" method for an attribute causes the
   DOMException NO_MODIFICATION_ALLOWED_ERR to be raised
   if the node is readonly.

   Obtain the children of the THIRD "gender" element.  The elements
   content is an entity reference.  Try to set an attribute
   in the entity reference by executing the
   "setAttributeNS(namespaceURI,qualifiedName,value)" method.
   This causes a NO_MODIFICATION_ALLOWED_ERR DOMException to be thrown.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NO_MODIFICATION_ALLOWED_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NO_MODIFICATION_ALLOWED_ERR'])
   */
  setAttributeNS03: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var success;
    var namespaceURI = "www.xyz.com";
    var qualifiedName = "emp:local1";
    var genderList;
    var gender;
    var genList;
    var gen;
    var gList;
    var genElement;
    var nodeType;
    genderList = doc.getElementsByTagName("gender");
    gender = genderList.item(2);
    genList = gender.childNodes;
    gen = genList.item(0);
    nodeType = gen.nodeType;
    if(1 == nodeType) {
      gen = doc.createEntityReference("ent4");
      test.notEqual(gen, null, 'created entity reference should not be null');
    }
    gList = gen.childNodes;
    genElement = gList.item(0);
    test.notEqual(genElement, null, 'genElement should not be null');
    {
      success = false;
      try {
        genElement.setAttributeNS(namespaceURI,qualifiedName,"newValue");
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
   The "setAttributeNS(namespaceURI,qualifiedName,value)" method adds a new attribute.
   If an attribute with the same local name and namespace URI is already present
   on the element, its prefix is changed to be the prefix part of the "qualifiedName",
   and its vale is changed to be the "value" paramter.
   null value if no previously existing Attr node with the
   same name was replaced.

   Add a new attribute to the "emp:address" element.
   Check to see if the new attribute has been successfully added to the document
   by getting the attributes value, namespace URI, local Name and prefix.
   The prefix will be changed to the prefix part of the "qualifiedName"
   and its value changed to the "value" parameter.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#
   */
  setAttributeNS04: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var resultNamespaceURI;
    var resultLocalName;
    var resultPrefix;
    var testAddr = doc.getElementsByTagName("emp:address").item(0);
    test.notEqual(testAddr, null, 'testAddr should not be null');
    testAddr.setAttributeNS("http://www.nist.gov","newprefix:zone","newValue");
    var addrAttr = testAddr.getAttributeNodeNS("http://www.nist.gov","zone");
    var resultAttr = testAddr.getAttributeNS("http://www.nist.gov","zone");
    test.equal(resultAttr, 'newValue');
    test.equal(addrAttr.namespaceURI, 'http://www.nist.gov')
    test.equal(addrAttr.localName, 'zone');
    test.equal(addrAttr.prefix, 'newprefix')
    test.done()
  },
  /**
   *
   The "setAttributeNS(namespaceURI,qualifiedName,value)" method adds a new attribute.
   If an attribute with the same local name and namespace URI is already present
   on the element, its prefix is changed to be the prefix part of the "qualifiedName",
   and its vale is changed to be the "value" paramter.
   null value if no previously existing Attr node with the
   same name was replaced.

   Add a new attribute to the "emp:address" element.
   Check to see if the new attribute has been successfully added to the document.
   The new attribute "<newValue>" contains markup and therefore is escaped
   by the implementation.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElGetAttrNS
   */
  setAttributeNS05: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var localName = "newAttr";
    var namespaceURI = "http://www.newattr.com";
    var qualifiedName = "emp:newAttr";
    var testAddr = doc.getElementsByTagName("emp:address").item(0);
    test.notEqual(testAddr, null, 'testAddr should not be null');
    testAddr.setAttributeNS(namespaceURI, qualifiedName, "<newValue>");
    var resultAttr = testAddr.getAttributeNS(namespaceURI, localName);
    test.equal(resultAttr, '<newValue>');
    test.done()
  },
  /**
   *
   The "setAttributeNS(namespaceURI,localName,value)" method raises a
   NAMESPACE_ERR DOMException if the "qualifiedName" has a
   prefix of "xml" and the namespaceURI is different from
   http://www.w3.org/XML/1998/namespace.

   Attempt to add an attribute with a prefix of "xml" as the on the first employee node.
   An exception should be raised since the namespaceURI of this node is not
   http://www.w3.org/XML/1998/namespace.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  setAttributeNS06: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var success;
    var namespaceURI = "http://www.nist.gov";
    var qualifiedName = "xml:qualifiedName";
    var elementList;
    var testAddr;
    elementList = doc.getElementsByTagName("employee");
    testAddr = elementList.item(0);
    {
      success = false;
      try {
        testAddr.setAttributeNS(namespaceURI,qualifiedName,"newValue");
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
   The "setAttributeNS(namespaceURI,localName,value)" method raises a
   NAMESPACE_ERR DOMException if the "qualifiedName" has a
   value of "xmlns" and the namespaceURI is different from
   http://www.w3.org/2000/xmlns.

   Attempt to add an attribute with a "qualifiedName" of "xmlns" as the
   on the first employee node.
   An exception should be raised since the namespaceURI of this node is not
   http://www.w3.org/2000/xmlns.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NAMESPACE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NAMESPACE_ERR'])
   */
  setAttributeNS07: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var success;
    var namespaceURI = "http://www.nist.gov";
    var qualifiedName = "xmlns";
    var elementList;
    var testAddr;
    elementList = doc.getElementsByTagName("employee");
    testAddr = elementList.item(0);
    {
      success = false;
      try {
        testAddr.setAttributeNS(namespaceURI,qualifiedName,"newValue");
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
   The "setAttributeNS(namespaceURI,qualifiedName,value)" method adds a new attribute.
   If an attribute with the same local name and namespace URI is already present
   on the element, its prefix is changed to be the prefix part of the "qualifiedName",
   and its vale is changed to be the "value" paramter.
   null value if no previously existing Attr node with the
   same name was replaced.

   Add a new attribute to the "emp:address" element.
   Check to see if the new attribute has been successfully added to the document
   by getting the attributes value, namespace URI, local Name and prefix.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   */
  setAttributeNS09: function(test) {
    test.expect(5);
    var doc = require('./core/files/staffNS.xml').staffNS();
    var localName = "newAttr";
    var namespaceURI = "http://www.newattr.com";
    var qualifiedName = "emp:newAttr";
    var elementList;
    var testAddr;
    var addrAttr;
    var resultAttr;
    var resultNamespaceURI;
    var resultLocalName;
    var resultPrefix;
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'testAddr should not be null');
    testAddr.setAttributeNS(namespaceURI,qualifiedName,"newValue");
    addrAttr = testAddr.getAttributeNodeNS(namespaceURI,localName);
    resultAttr = testAddr.getAttributeNS(namespaceURI,localName);
    test.equal(resultAttr, 'newValue');
    test.equal(addrAttr.namespaceURI, 'http://www.newattr.com');
    test.equal(addrAttr.localName, 'newAttr');
    test.equal(addrAttr.prefix, 'emp');
    test.done()
  },
  /**
   *
   Element.setAttributeNS with an empty qualified name should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAttrNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAttrNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  setAttributeNS10: function(test) {
    var doc = require('./core/files/hc_staff.xml').hc_staff();
    var success;
    var namespaceURI = "http://www.example.gov";
    var elementList;
    var testAddr;
    elementList = doc.getElementsByTagName("em");
    testAddr = elementList.item(0);
    {
      success = false;
      try {
        testAddr.setAttributeNS(namespaceURI,"","newValue");
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 5);
      }
      test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    }
    test.done()
  }
})

exports['setAttributeNodeNS'] = testcase({
  /**
   *
   The "setAttributeNode(newAttr)" method raises an
   "INUSE_ATTRIBUTE_ERR DOMException if the "newAttr"
   is already an attribute of another element.

   Retrieve the first emp:address and append
   a newly created element.  The "createAttributeNS(namespaceURI,qualifiedName)"
   and "setAttributeNodeNS(newAttr)" methods are invoked
   to create and add a new attribute to the newly created
   Element.  The "setAttributeNodeNS(newAttr)" method is
   once again called to add the new attribute causing an
   exception to be raised since the attribute is already
   an attribute of another element.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAtNodeNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INUSE_ATTRIBUTE_ERR'])
   */
  setAttributeNodeNS01: function(test) {
    var success;
    var namespaceURI = "http://www.newattr.com";
    var qualifiedName = "emp:newAttr";
    var newElement;
    var newAttr;
    var elementList;
    var testAddr;
    var appendedChild;
    var setAttr1;
    var setAttr2;
    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    test.notEqual(testAddr, null, 'empAddrNotNull');
    newElement = doc.createElement("newElement");
    appendedChild = testAddr.appendChild(newElement);
    newAttr = doc.createAttributeNS(namespaceURI,qualifiedName);
    setAttr1 = newElement.setAttributeNodeNS(newAttr);
    {
      success = false;
      try {
        setAttr2 = testAddr.setAttributeNodeNS(newAttr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 10);
      }
      test.ok(success, 'throw_INUSE_ATTRIBUTE_ERR');
    }
    test.done();
  },
  /**
   *
   The "setAttributeNodeNS(namespaceURI,qualifiedName,value)" method for an attribute causes the
   DOMException NO_MODIFICATION_ALLOWED_ERR to be raised
   if the node is readonly.

   Obtain the children of the THIRD "gender" element.  The elements
   content is an entity reference.  Try to set an attribute
   in the entity reference by executing the
   "setAttributeNodeNS(newAttr)" method.
   This causes a NO_MODIFICATION_ALLOWED_ERR DOMException to be thrown.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NO_MODIFICATION_ALLOWED_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAtNodeNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NO_MODIFICATION_ALLOWED_ERR'])
   */
  setAttributeNodeNS02: function(test) {
    var success;
    var genderList;
    var gender;
    var genList;
    var gen;
    var gList;
    var genElement;
    var newAttr;
    var setAttr1;
    var doc = require('./core/files/staffNS.xml').staffNS();
    gen = doc.createEntityReference("ent4");
    gList = gen.childNodes;
    genElement = gList.item(0);
    test.notEqual(genElement, null, 'genElement should not be null');
    newAttr = doc.createAttributeNS("www.xyz.com","emp:local1");
    {
      success = false;
      try {
        setAttr1 = genElement.setAttributeNodeNS(newAttr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }
    test.done();
  },
  /**
   *
   The "setAttributeNodeNS(newAttr)" adds a new attribute.
   If an attribute with that local name and that namespaceURI is already
   present in the element, it is replaced by the new one.

   Retrieve the first emp:address element and add a new attribute
   to the element.  Since an attribute with the same local name
   and namespaceURI as the newly created attribute does not exist
   the value "null" is returned.
   This test uses the "createAttributeNS(namespaceURI,localName)
   method from the Document interface to create the new attribute to add.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   */
  setAttributeNodeNS03: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var testAddr = doc.getElementsByTagName("emp:address").item(0);
    test.notEqual(testAddr, null, 'testAddr should not be null');
    var newAttr = doc.createAttributeNS('http://www.newattr.com', 'emp:newAttr');
    var newAddrAttr = testAddr.setAttributeNodeNS(newAttr);
    test.equal(newAddrAttr, null, 'newAddrAttr should be null');
    test.done();
  },
  /**
   *
   The "setAttributeNodeNS(newAttr)" adds a new attribute.
   If an attribute with that local name and that namespaceURI is already
   present in the element, it is replaced by the new one.

   Retrieve the first emp:address element and add a new attribute
   to the element.  Since an attribute with the same local name
   and namespaceURI already exists, it is replaced by the new one and
   returns the replaced "Attr" node.
   This test uses the "createAttributeNS(namespaceURI,localName)
   method from the Document interface to create the new attribute to add.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-F68D095
   */
  setAttributeNodeNS04: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var testAddr = doc.getElementsByTagName("emp:address").item(0);
    test.notEqual(testAddr, null, 'testAddr should not be null');
    var newAttr = doc.createAttributeNS("http://www.nist.gov","xxx:domestic");
    var newAddrAttr = testAddr.setAttributeNodeNS(newAttr);
    test.equal(newAddrAttr.nodeName, 'emp:domestic')
    test.done();
  },
  /**
   *
   The "setAttributeNodeNS(newAttr)" method raises an
   "WRONG_DOCUMENT_ERR DOMException if the "newAttr"
   was created from a different document than the one that
   created this document.

   Retrieve the first emp:address and attempt to set a new
   attribute node.  The new
   attribute was created from a document other than the
   one that created this element, therefore a
   WRONG_DOCUMENT_ERR DOMException should be raised.
   This test uses the "createAttributeNS(newAttr)" method
   from the Document interface.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-ElSetAtNodeNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
   */
  setAttributeNodeNS05: function(test) {
    var doc1 = require('./core/files/staffNS.xml').staffNS();
    var doc2 = require('./core/files/staffNS.xml').staffNS();
    var success;
    var namespaceURI = "http://www.newattr.com";
    var qualifiedName = "emp:newAttr";
    var newAttr;
    var elementList;
    var testAddr;
    var setAttr1;
    newAttr = doc2.createAttributeNS(namespaceURI,qualifiedName);
    elementList = doc1.getElementsByTagName("emp:address");
    testAddr = elementList.item(0);
    {
      success = false;
      try {
        setAttr1 = testAddr.setAttributeNodeNS(newAttr);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
      test.done();
    }
  }
})

exports['setNamedItemNS'] = testcase({
  /**
   *
   The "setNamedItemNS(arg)" method for a NamedNodeMap should raise INUSE_ATTRIBUTE_ERR DOMException if arg is an Attr that is already an attribute of another Element object.

   Retrieve an attr node from the third "address" element whose local name is "domestic" and namespaceURI is "http://www.netzero.com".
   Invoke method setNamedItemNS(arg) on the map of the first "address" element with arg being the attr node from above.
   Method should raise INUSE_ATTRIBUTE_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-setNamedItemNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INUSE_ATTRIBUTE_ERR'])
   */
  setNamedItemNS01: function(test) {
    var success;
    var elementList;
    var anotherElement;
    var anotherMap;
    var arg;
    var testAddress;
    var map;
    var setNode;
    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("address");
    anotherElement = elementList.item(2);
    anotherMap = anotherElement.attributes;

    arg = anotherMap.getNamedItemNS("http://www.netzero.com","domestic");
    testAddress = elementList.item(0);
    map = testAddress.attributes;
    {
      success = false;
      try {
        setNode = map.setNamedItemNS(arg);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 10);
      }
      test.ok(success, 'throw_INUSE_ATTRIBUTE_ERR');
      test.done();
    }
  },

  /**
   *
   The "setNamedItemNS(arg)" method for a
   NamedNodeMap should raise WRONG_DOCUMENT_ERR DOMException if arg was
   created from a different document than the one that created this map.

   Create an attr node in a different document with qualifiedName equals
   "dmstc:domestic" and namespaceURI is "http://www.usa.com".
   Access the namednodemap of the first "address" element in this document.
   Invoke method setNamedItemNS(arg) with arg being the attr node from above.
   Method should raise WRONG_DOCUMENT_ERR DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-setNamedItemNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
   */
  setNamedItemNS02: function(test) {
    var success;
    var namespaceURI = "http://www.usa.com";
    var qualifiedName = "dmstc:domestic";
    var arg;
    var elementList;
    var testAddress;
    var attributes;
    var setNode;
    var doc = require('./core/files/staffNS.xml').staffNS();
    var anotherDoc = require('./core/files/staffNS.xml').staffNS();
    arg = anotherDoc.createAttributeNS(namespaceURI,qualifiedName);
    arg.nodeValue = "Maybe";

    elementList = doc.getElementsByTagName("address");
    testAddress = elementList.item(0);
    attributes = testAddress.attributes;
    {
      success = false;
      try {
        setNode = attributes.setNamedItemNS(arg);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 4);
      }
      test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
      test.done();
    }
  },

  /**
   *
   The "setNamedItemNS(arg)" method for a NamedNodeMap should add a node using its namespaceURI and localName given that there is no existing node with the same namespaceURI and localName in the map.

   Create an attr node with namespaceURI "http://www.nist.gov",qualifiedName "prefix:newAttr" and value "newValue".
   Invoke method setNamedItemNS(arg) on the map of the first "address" element where arg is identified by the namespaceURI and qualifiedName from above.
   Method should return the newly added attr node.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-F68D080
   */
  setNamedItemNS03: function(test) {
    var namespaceURI = "http://www.nist.gov";
    var doc = require('./core/files/staffNS.xml').staffNS();
    var arg = doc.createAttributeNS(namespaceURI, "prefix:newAttr");
    arg.nodeValue = "newValue";
    var attributes = doc.getElementsByTagName("address").item(0).attributes;
    attributes.setNamedItemNS(arg);
    var retnode = attributes.getNamedItemNS(namespaceURI,"newAttr");
    test.equal(retnode.nodeValue, 'newValue');
    test.done();
  },

  /**
   *
   The "setNamedItemNS(arg)" method for a
   NamedNodeMap should raise NO_MODIFICATION_ALLOWED_ERR DOMException if
   this map is readonly.

   Retrieve a list of "gender" elements. Get access to the THIRD element
   which contains an ENTITY_REFERENCE child node.  Get access to the node's
   map. Try to add an attribute node specified by arg with
   method setNamedItemNS(arg).  This should result in NO_MODIFICATION_ALLOWED_ERR
   DOMException.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-258A00AF')/constant[@name='NO_MODIFICATION_ALLOWED_ERR'])
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-setNamedItemNS
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#xpointer(id('ID-setNamedItemNS')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NO_MODIFICATION_ALLOWED_ERR'])
   */
  setNamedItemNS04: function(test) {
    var success;
    var namespaceURI = "http://www.w3.org/2000/xmlns/";
    var localName = "local1";
    var elementList;
    var testAddress;
    var nList;
    var child;
    var n2List;
    var child2;
    var attributes;
    var arg;
    var setNode;
    var nodeType;
    var doc = require('./core/files/staffNS.xml').staffNS();
    elementList = doc.getElementsByTagName("gender");
    testAddress = elementList.item(2);
    nList = testAddress.childNodes;

    child = nList.item(0);
    nodeType = child.nodeType;
    if(1 == nodeType) {
      child = doc.createEntityReference("ent4");
      test.notEqual(child, null, 'createdEntRefNotNull');
    }
    n2List = child.childNodes;
    child2 = n2List.item(0);
    test.notEqual(child2, null, 'child2 should not be null');
    attributes = child2.attributes;

    arg = attributes.getNamedItemNS(namespaceURI,localName);
    {
      success = false;
      try {
        setNode = attributes.setNamedItemNS(arg);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 7);
      }
      test.ok(success, 'throw_NO_MODIFICATION_ALLOWED_ERR');
    }
    test.done();
  },

  /**
   *
   The "setNamedItemNS(arg)" method for a
   NamedNodeMap should replace an existing node n1 found in the map with arg if n1
   has the same namespaceURI and localName as arg and return n1.

   Create an attribute node in with namespaceURI "http://www.usa.com"
   and qualifiedName "dmstc:domestic" whose value is "newVal".
   Invoke method setNamedItemNS(arg) on the map of the first "address"
   element. Method should return the old attribute node identified
   by namespaceURI and qualifiedName from above,whose value is "Yes".

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-ElSetAtNodeNS
   */
  setNamedItemNS05: function(test) {
    var doc = require('./core/files/staffNS.xml').staffNS();
    var arg = doc.createAttributeNS("http://www.usa.com", "dmstc:domestic");
    arg.nodeValue = "newValue";
    var attributes = doc.getElementsByTagName("address").item(0).attributes;
    var retnode = attributes.setNamedItemNS(arg);
    test.equal(retnode.nodeValue, 'Yes');
    test.done();
  }
})

// The "getSystemId()" method of a documenttype node contains the system identifier associated with the external subset.
// Retrieve the documenttype.
// Apply the "getSystemId()" method.  The string "staffNS.dtd" should be returned.
// @author NIST
// @author Mary Brady
// @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-Core-DocType-systemId
exports['systemId01'] = function(test) {
  var doc = require('./core/files/staffNS.xml').staffNS();
  test.equal(doc.doctype.systemId, 'staffNS.dtd')
  test.done();
}
