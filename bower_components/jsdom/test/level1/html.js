var hc_staff = require('./html/files/hc_staff.html');

exports.tests = {
  /**
   *
   The "getDoctype()" method returns null for XML documents
   without a document type declaration.
   Retrieve the XML document without a DTD and invoke the
   "getDoctype()" method.  It should return null.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
   */
  documentgetdoctypenodtd: function(test) {
    var doc = require('./html/files/hc_nodtdstaff.html').hc_nodtdstaff();
    test.equal(doc.doctype, null, 'documentGetDocTypeNoDTDAssert');
    test.done();
  },

  /**
   *
   The "createEntityReference(tagName)" method raises an
   INVALID_CHARACTER_ERR DOMException if the specified
   tagName contains an invalid character.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-392B75AE
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-392B75AE')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  documentinvalidcharacterexceptioncreateentref: function(test) {
    var badEntityRef;
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      badEntityRef = doc.createEntityReference("foo");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   Creating an entity reference with an empty name should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-392B75AE
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-392B75AE')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  documentinvalidcharacterexceptioncreateentref1: function(test) {
    var badEntityRef;
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      badEntityRef = doc.createEntityReference("foo");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   The "createProcessingInstruction(target,data) method
   raises an INVALID_CHARACTER_ERR DOMException if the
   specified tagName contains an invalid character.

   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-135944439
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-135944439')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  documentinvalidcharacterexceptioncreatepi: function(test) {
    var success;
    var badPI;
    var doc = hc_staff.hc_staff();
    success = false;
    try {
      badPI = doc.createProcessingInstruction("foo","data");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   Creating a processing instruction with an empty target should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-135944439
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-135944439')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  documentinvalidcharacterexceptioncreatepi1: function(test) {
    var success;
    var badPI;
    var doc = hc_staff.hc_staff();
    success = false;
    try {
      badPI = doc.createProcessingInstruction("foo","data");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   Appends a text node to an attribute and checks if the value of
   the attribute is changed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   */
  hc_attrappendchild1: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var lastChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = doc.createTextNode("terday");
    retval = titleAttr.appendChild(textNode);
    value = titleAttr.value;

    test.equal(value, "Yesterday", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "Yesterday", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, "terday", 'retvalValue');
    lastChild = titleAttr.lastChild;

    value = lastChild.nodeValue;

    test.equal(value, "terday", 'lastChildValue');

    test.done();
  },

  /**
   *
   Attempts to append an element to the child nodes of an attribute.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   */
  hc_attrappendchild2: function(test) {
    var doc = hc_staff.hc_staff();
    var titleAttr = doc.getElementsByTagName("acronym").item(3).attributes.getNamedItem("title");
    var newChild = doc.createElement("terday");
    var success = false;
    try {
      titleAttr.appendChild(newChild);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 3);
    }
    test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    test.done();
  },

  /**
   *
   Appends a document fragment to an attribute and checks if the value of
   the attribute is changed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   */
  hc_attrappendchild3: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var terNode;
    var dayNode;
    var retval;
    var lastChild;
    var docFrag;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    terNode = doc.createTextNode("ter");
    dayNode = doc.createTextNode("day");
    docFrag = doc.createDocumentFragment();
    retval = docFrag.appendChild(terNode);
    retval = docFrag.appendChild(dayNode);
    retval = titleAttr.appendChild(docFrag);
    value = titleAttr.value;

    test.equal(value, "Yesterday", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "Yesterday", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, null, 'retvalValue');
    lastChild = titleAttr.lastChild;

    value = lastChild.nodeValue;

    test.equal(value, "day", 'lastChildValue');

    test.done();
  },

  /**
   *
   Attempt to append a CDATASection to an attribute which should result
   in a HIERARCHY_REQUEST_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   */
  hc_attrappendchild4: function(test) {
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      doc.createCDATASection("terday");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   Attempt to append a node from another document to an attribute which should result
   in a WRONG_DOCUMENT_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   */
  hc_attrappendchild5: function(test) {
    var doc = hc_staff.hc_staff();
    var otherDoc = hc_staff.hc_staff();
    var titleAttr = doc.getElementsByTagName("acronym").item(3).attributes.getNamedItem("title");
    var textNode = otherDoc.createTextNode("terday");
    var success = false;
    try {
      titleAttr.appendChild(textNode);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 4);
    }
    test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    test.done();
  },

  /**
   *
   Creates an new attribute node and appends a text node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   */
  hc_attrappendchild6: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var lastChild;

    doc = hc_staff.hc_staff();
    titleAttr = doc.createAttribute("title");
    textNode = doc.createTextNode("Yesterday");
    retval = titleAttr.appendChild(textNode);
    value = titleAttr.value;

    test.equal(value, "Yesterday", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "Yesterday", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, "Yesterday", 'retvalValue');
    lastChild = titleAttr.lastChild;

    value = lastChild.nodeValue;

    test.equal(value, "Yesterday", 'lastChildValue');

    test.done();
  },

  /**
   *
   Checks that Node.childNodes for an attribute node contains
   the expected text node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
   */
  hc_attrchildnodes1: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var childNodes;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    childNodes = titleAttr.childNodes;

    test.equal(childNodes.length, 1, 'childNodesSize');
    textNode = childNodes.item(0);
    value = textNode.nodeValue;

    test.equal(value, "Yes", 'child1IsYes');
    textNode = childNodes.item(1);
    test.equal(textNode, null, 'secondItemIsNull');

    test.done();
  },

  /**
   *
   Checks Node.childNodes for an attribute with multiple child nodes.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
   */
  hc_attrchildnodes2: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var childNodes;
    var retval;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    childNodes = titleAttr.childNodes;

    textNode = doc.createTextNode("terday");
    retval = titleAttr.appendChild(textNode);
    test.equal(childNodes.length, 2, 'childNodesSize');
    textNode = childNodes.item(0);
    value = textNode.nodeValue;

    test.equal(value, "Yes", 'child1IsYes');
    textNode = childNodes.item(1);
    value = textNode.nodeValue;

    test.equal(value, "terday", 'child2IsTerday');
    textNode = childNodes.item(2);
    test.equal(textNode, null, 'thirdItemIsNull');

    test.done();
  },

  /**
   *
   Appends a text node to an attribute and clones the node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
   */
  hc_attrclonenode1: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var lastChild;
    var clonedTitle;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");

    textNode = doc.createTextNode("terday");
    retval = titleAttr.appendChild(textNode);

    clonedTitle = titleAttr.cloneNode(false);

    textNode.nodeValue = "text_node_not_cloned";

    value = clonedTitle.value;

    test.equal(value, "Yesterday", 'attrValue');
    value = clonedTitle.nodeValue;

    test.equal(value, "Yesterday", 'attrNodeValue');
    lastChild = clonedTitle.lastChild;

    value = lastChild.nodeValue;

    test.equal(value, "terday", 'lastChildValue');

    test.done();
  },

  /**
   *
   Create a new DocumentFragment and add a newly created Element node(with one attribute).
   Once the element is added, its attribute should be available as an attribute associated
   with an Element within a DocumentFragment.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-35CB04B5
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
   */
  hc_attrcreatedocumentfragment: function(test) {
    var langAttrCount = 0;
    var doc = hc_staff.hc_staff();
    var docFragment = doc.createDocumentFragment();
    var newOne = doc.createElement("html");
    newOne.setAttribute("lang","EN");
    docFragment.appendChild(newOne);
    var attributes = docFragment.firstChild.attributes;
    for(var i=0;i<attributes.length;i++) {
      attribute = attributes.item(i);
      attrName = attribute.nodeName;
      if(attrName == "lang") {
        langAttrCount += 1;
      }
    }
    test.equal(langAttrCount, 1, 'hasLangAttr');
    test.done();
  },

  /**
   *
   The "setValue()" method for an attribute creates a
   Text node with the unparsed content of the string.
   Retrieve the attribute named "class" from the last
   child of of the fourth employee and assign the "Y&ent1;"
   string to its value attribute.  This value is not yet
   parsed and therefore should still be the same upon
   retrieval. This test uses the "getNamedItem(name)" method
   from the NamedNodeMap interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Apr/0057.html
   */
  hc_attrcreatetextnode: function(test) {
    var success;
    var doc;
    var addressList;
    var testNode;
    var attributes;
    var streetAttr;
    var value;

    doc = hc_staff.hc_staff();
    addressList = doc.getElementsByTagName("acronym");
    testNode = addressList.item(3);
    attributes = testNode.attributes;

    streetAttr = attributes.getNamedItem("class");
    streetAttr.value = "Y&ent1;";

    value = streetAttr.value;

    test.equal(value, "Y&ent1;", 'value');
    value = streetAttr.nodeValue;

    test.equal(value, "Y&ent1;", 'nodeValue');

    test.done();
  },

  /**
   *
   The "setNodeValue()" method for an attribute creates a
   Text node with the unparsed content of the string.
   Retrieve the attribute named "class" from the last
   child of of the fourth employee and assign the "Y&ent1;"
   string to its value attribute.  This value is not yet
   parsed and therefore should still be the same upon
   retrieval. This test uses the "getNamedItem(name)" method
   from the NamedNodeMap interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Apr/0057.html
   */
  hc_attrcreatetextnode2: function(test) {
    var success;
    var doc;
    var addressList;
    var testNode;
    var attributes;
    var streetAttr;
    var value;

    doc = hc_staff.hc_staff();
    addressList = doc.getElementsByTagName("acronym");
    testNode = addressList.item(3);
    attributes = testNode.attributes;

    streetAttr = attributes.getNamedItem("class");
    streetAttr.nodeValue = "Y&ent1;";

    value = streetAttr.value;

    test.equal(value, "Y&ent1;", 'value');
    value = streetAttr.nodeValue;

    test.equal(value, "Y&ent1;", 'nodeValue');

    test.done();
  },

  /**
   *
   If an Attr is explicitly assigned any value, then that value is the attributes effective value.
   Retrieve the attribute named "domestic" from the last child of of the first employee
   and examine its nodeValue attribute.  This test uses the "getNamedItem(name)" method
   from the NamedNodeMap interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1074577549
   */
  hc_attreffectivevalue: function(test) {
    var success;
    var doc;
    var addressList;
    var testNode;
    var attributes;
    var domesticAttr;
    var value;

    doc = hc_staff.hc_staff();
    addressList = doc.getElementsByTagName("acronym");
    testNode = addressList.item(0);
    attributes = testNode.attributes;

    domesticAttr = attributes.getNamedItem("title");
    value = domesticAttr.nodeValue;

    test.equal(value, "Yes", 'attrEffectiveValueAssert');

    test.done();
  },

  /**
   *
   Checks that Node.firstChild for an attribute node contains
   the expected text node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-169727388
   */
  hc_attrfirstchild: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var otherChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = titleAttr.firstChild;

    test.notEqual(textNode, null, 'textNodeNotNull');
    value = textNode.nodeValue;

    test.equal(value, "Yes", 'child1IsYes');
    otherChild = textNode.nextSibling;

    test.equal(otherChild, null, 'nextSiblingIsNull');
    otherChild = textNode.previousSibling;

    test.equal(otherChild, null, 'previousSiblingIsNull');

    test.done();
  },

  /**
   *
   Checks the value of an attribute that contains entity references.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
   */
  hc_attrgetvalue1: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var lastChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("class");
    value = titleAttr.value;

    test.equal(value, "Yα", 'attrValue1');

    test.done();
  },

  /**
   *
   Checks the value of an attribute that contains entity references.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
   */
  hc_attrgetvalue2: function(test) {
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      doc.createEntityReference("alpha");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   Checks that Node.hasChildNodes() is true for an attribute with content.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-810594187
   */
  hc_attrhaschildnodes: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var hasChildNodes;



    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");

    hasChildNodes = titleAttr.hasChildNodes();
    test.ok(hasChildNodes, 'hasChildrenIsTrue');

    test.done();
  },

  /**
   *
   Appends a text node to an attribute and checks if the value of
   the attribute is changed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   */
  hc_attrinsertbefore1: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var firstChild;
    var lastChild;
    var refChild = null;


    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = doc.createTextNode("terday");
    retval = titleAttr.insertBefore(textNode,refChild);
    value = titleAttr.value;

    test.equal(value, "Yesterday", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "Yesterday", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, "terday", 'retvalValue');
    firstChild = titleAttr.firstChild;

    value = firstChild.nodeValue;

    test.equal(value, "Yes", 'firstChildValue');
    lastChild = titleAttr.lastChild;

    value = lastChild.nodeValue;

    test.equal(value, "terday", 'lastChildValue');

    test.done();
  },

  /**
   *
   Prepends a text node to an attribute and checks if the value of
   the attribute is changed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   */
  hc_attrinsertbefore2: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var lastChild;
    var firstChild;
    var refChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = doc.createTextNode("terday");
    refChild = titleAttr.firstChild;

    retval = titleAttr.insertBefore(textNode,refChild);
    value = titleAttr.value;

    test.equal(value, "terdayYes", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "terdayYes", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, "terday", 'retvalValue');
    firstChild = titleAttr.firstChild;

    value = firstChild.nodeValue;

    test.equal(value, "terday", 'firstChildValue');
    lastChild = titleAttr.lastChild;

    value = lastChild.nodeValue;

    test.equal(value, "Yes", 'lastChildValue');

    test.done();
  },

  /**
   *
   Appends a document fragment to an attribute and checks if the value of
   the attribute is changed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   */
  hc_attrinsertbefore3: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var terNode;
    var dayNode;
    var docFrag;
    var retval;
    var firstChild;
    var lastChild;
    var refChild = null;


    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    terNode = doc.createTextNode("ter");
    dayNode = doc.createTextNode("day");
    docFrag = doc.createDocumentFragment();
    retval = docFrag.appendChild(terNode);
    retval = docFrag.appendChild(dayNode);
    retval = titleAttr.insertBefore(docFrag,refChild);
    value = titleAttr.value;

    test.equal(value, "Yesterday", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "Yesterday", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, null, 'retvalValue');
    firstChild = titleAttr.firstChild;

    value = firstChild.nodeValue;

    test.equal(value, "Yes", 'firstChildValue');
    lastChild = titleAttr.lastChild;

    value = lastChild.nodeValue;

    test.equal(value, "day", 'lastChildValue');

    test.done();
  },

  /**
   *
   Prepends a document fragment to an attribute and checks if the value of
   the attribute is changed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   */
  hc_attrinsertbefore4: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var terNode;
    var dayNode;
    var docFrag;
    var retval;
    var firstChild;
    var lastChild;
    var refChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    terNode = doc.createTextNode("ter");
    dayNode = doc.createTextNode("day");
    docFrag = doc.createDocumentFragment();
    retval = docFrag.appendChild(terNode);
    retval = docFrag.appendChild(dayNode);
    refChild = titleAttr.firstChild;

    retval = titleAttr.insertBefore(docFrag,refChild);
    value = titleAttr.value;

    test.equal(value, "terdayYes", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "terdayYes", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, null, 'retvalValue');
    firstChild = titleAttr.firstChild;

    value = firstChild.nodeValue;

    test.equal(value, "ter", 'firstChildValue');
    lastChild = titleAttr.lastChild;

    value = lastChild.nodeValue;

    test.equal(value, "Yes", 'lastChildValue');

    test.done();
  },

  /**
   *
   Attempt to append a CDATASection to an attribute which should result
   in a HIERARCHY_REQUEST_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   */
  hc_attrinsertbefore5: function(test) {
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      doc.createCDATASection("terday");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   Attempt to append a text node from another document to an attribute which should result
   in a WRONG_DOCUMENT_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   */
  hc_attrinsertbefore6: function(test) {
    var doc = hc_staff.hc_staff();
    var otherDoc = hc_staff.hc_staff();
    var titleAttr = doc.getElementsByTagName("acronym").item(3).attributes.getNamedItem("title");
    var textNode = otherDoc.createTextNode("terday");
    var success = false;
    try {
      titleAttr.insertBefore(textNode, null);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 4);
    }
    test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    test.done();
  },

  /**
   *
   Appends a document fragment containing a CDATASection to an attribute.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   */
  hc_attrinsertbefore7: function(test) {
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      doc.createCDATASection("day");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   Checks that Node.lastChild for an attribute node contains
   the expected text node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
   */
  hc_attrlastchild: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var otherChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = titleAttr.firstChild;

    test.notEqual(textNode, null, 'textNodeNotNull');
    value = textNode.nodeValue;

    test.equal(value, "Yes", 'child1IsYes');
    otherChild = textNode.nextSibling;

    test.equal(otherChild, null, 'nextSiblingIsNull');
    otherChild = textNode.previousSibling;

    test.equal(otherChild, null, 'previousSiblingIsNull');

    test.done();
  },

  /**
   *
   Retrieve the attribute named class from the last
   child of of the second "p" element and examine its
   NodeName.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1112119403
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   */
  hc_attrname: function(test) {
    var doc = hc_staff.hc_staff();
    var streetAttr = doc.getElementsByTagName("acronym").item(1).attributes.getNamedItem("class");
    test.equal(streetAttr.nodeName, 'class', 'attribute nodeName');
    test.equal(streetAttr.name, 'class', 'attribute name');
    test.done();
  },

  /**
   *
   The "getNextSibling()" method for an Attr node should return null.
   Retrieve the attribute named "domestic" from the last child of of the
   first employee and examine its NextSibling node.  This test uses the
   "getNamedItem(name)" method from the NamedNodeMap interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   */
  hc_attrnextsiblingnull: function(test) {
    var success;
    var doc;
    var addressList;
    var testNode;
    var attributes;
    var domesticAttr;
    var s;

    doc = hc_staff.hc_staff();
    addressList = doc.getElementsByTagName("acronym");
    testNode = addressList.item(0);
    attributes = testNode.attributes;

    domesticAttr = attributes.getNamedItem("title");
    s = domesticAttr.nextSibling;

    test.equal(s, null, 'attrNextSiblingNullAssert');

    test.done();
  },

  /**
   *
   Appends a text node to an attribute, normalizes the attribute
   and checks for a single child node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-162CF083
   */
  hc_attrnormalize: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var firstChild;
    var secondChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = doc.createTextNode("terday");
    retval = titleAttr.appendChild(textNode);
    textNode = doc.createTextNode("");
    retval = titleAttr.appendChild(textNode);
    testNode.normalize();
    value = titleAttr.nodeValue;

    test.equal(value, "Yesterday", 'attrNodeValue');
    firstChild = titleAttr.firstChild;

    value = firstChild.nodeValue;

    test.equal(value, "Yesterday", 'firstChildValue');
    secondChild = firstChild.nextSibling;

    test.equal(secondChild, null, 'secondChildIsNull');

    test.done();
  },

  /**
   *
   The "getParentNode()" method for an Attr node should return null.  Retrieve
   the attribute named "domestic" from the last child of the first employee
   and examine its parentNode attribute.  This test also uses the "getNamedItem(name)"
   method from the NamedNodeMap interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   */
  hc_attrparentnodenull: function(test) {
    var success;
    var doc;
    var addressList;
    var testNode;
    var attributes;
    var domesticAttr;
    var s;

    doc = hc_staff.hc_staff();
    addressList = doc.getElementsByTagName("acronym");
    testNode = addressList.item(0);
    attributes = testNode.attributes;

    domesticAttr = attributes.getNamedItem("title");
    s = domesticAttr.parentNode;

    test.equal(s, null, 'attrParentNodeNullAssert');

    test.done();
  },

  /**
   *
   The "getPreviousSibling()" method for an Attr node should return null.
   Retrieve the attribute named "domestic" from the last child of of the
   first employee and examine its PreviousSibling node.  This test uses the
   "getNamedItem(name)" method from the NamedNodeMap interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-640FB3C8
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   */
  hc_attrprevioussiblingnull: function(test) {
    var success;
    var doc;
    var addressList;
    var testNode;
    var attributes;
    var domesticAttr;
    var s;

    doc = hc_staff.hc_staff();
    addressList = doc.getElementsByTagName("acronym");
    testNode = addressList.item(0);
    attributes = testNode.attributes;

    domesticAttr = attributes.getNamedItem("title");
    s = domesticAttr.previousSibling;

    test.equal(s, null, 'attrPreviousSiblingNullAssert');

    test.done();
  },

  /**
   *
   Removes the child node of an attribute and checks that the value is empty.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
   */
  hc_attrremovechild1: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var firstChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = titleAttr.firstChild;

    test.notEqual(textNode, null, 'attrChildNotNull');
    retval = titleAttr.removeChild(textNode);

    value = titleAttr.value;

    test.equal(value, "", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, "Yes", 'retvalValue');
    firstChild = titleAttr.firstChild;

    test.equal(firstChild, null, 'firstChildNull');

    test.done();
  },

  /**
   *
   Attempts to remove a freshly created text node which should result in a NOT_FOUND_ERR exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
   */
  hc_attrremovechild2: function(test) {
    var doc = hc_staff.hc_staff();
    var titleAttr = doc.getElementsByTagName("acronym").item(3).attributes.getNamedItem("title");
    var textNode = doc.createTextNode("Yesterday");
    var success = false;
    try {
      titleAttr.removeChild(textNode);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 8);
    }
    test.ok(success, 'throw_NOT_FOUND_ERR');
    test.done();
  },

  /**
   *
   Replaces a text node of an attribute and checks if the value of
   the attribute is changed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   */
  hc_attrreplacechild1: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var firstChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = doc.createTextNode("terday");
    firstChild = titleAttr.firstChild;

    test.notEqual(firstChild, null, 'attrChildNotNull');
    retval = titleAttr.replaceChild(textNode,firstChild);
    value = titleAttr.value;

    test.equal(value, "terday", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "terday", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, "Yes", 'retvalValue');
    firstChild = titleAttr.firstChild;

    value = firstChild.nodeValue;

    test.equal(value, "terday", 'firstChildValue');

    test.done();
  },

  /**
   *
   Replaces a text node of an attribute with a document fragment and checks if the value of
   the attribute is changed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   */
  hc_attrreplacechild2: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var terNode;
    var dayNode;
    var docFrag;
    var retval;
    var firstChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    terNode = doc.createTextNode("ter");
    dayNode = doc.createTextNode("day");
    docFrag = doc.createDocumentFragment();
    retval = docFrag.appendChild(terNode);
    retval = docFrag.appendChild(dayNode);
    firstChild = titleAttr.firstChild;

    test.notEqual(firstChild, null, 'attrChildNotNull');
    retval = titleAttr.replaceChild(docFrag,firstChild);
    value = titleAttr.value;

    test.equal(value, "terday", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "terday", 'attrNodeValue');
    value = retval.nodeValue;

    test.equal(value, "Yes", 'retvalValue');
    firstChild = titleAttr.firstChild;

    value = firstChild.nodeValue;

    test.equal(value, "ter", 'firstChildValue');

    test.done();
  },

  /**
   *
   Sets Attr.value on an attribute that only has a simple value.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
   */
  hc_attrsetvalue1: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var retval;
    var firstChild;
    var otherChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    firstChild = titleAttr.firstChild;

    test.notEqual(firstChild, null, 'attrChildNotNull');
    titleAttr.value = "Tomorrow";

    firstChild.nodeValue = "impl reused node";

    value = titleAttr.value;

    test.equal(value, "Tomorrow", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "Tomorrow", 'attrNodeValue');
    firstChild = titleAttr.lastChild;

    value = firstChild.nodeValue;

    test.equal(value, "Tomorrow", 'firstChildValue');
    otherChild = firstChild.nextSibling;

    test.equal(otherChild, null, 'nextSiblingIsNull');

    test.done();
  },

  /**
   *
   Sets Attr.value on an attribute that should contain multiple child nodes.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-221662474
   */
  hc_attrsetvalue2: function(test) {
    var success;
    var doc;
    var acronymList;
    var testNode;
    var attributes;
    var titleAttr;
    var value;
    var textNode;
    var retval;
    var firstChild;
    var otherChild;

    doc = hc_staff.hc_staff();
    acronymList = doc.getElementsByTagName("acronym");
    testNode = acronymList.item(3);
    attributes = testNode.attributes;

    titleAttr = attributes.getNamedItem("title");
    textNode = doc.createTextNode("terday");
    retval = titleAttr.appendChild(textNode);
    firstChild = titleAttr.firstChild;

    test.notEqual(firstChild, null, 'attrChildNotNull');
    titleAttr.value = "Tomorrow";

    firstChild.nodeValue = "impl reused node";

    value = titleAttr.value;

    test.equal(value, "Tomorrow", 'attrValue');
    value = titleAttr.nodeValue;

    test.equal(value, "Tomorrow", 'attrNodeValue');
    firstChild = titleAttr.lastChild;

    value = firstChild.nodeValue;

    test.equal(value, "Tomorrow", 'firstChildValue');
    otherChild = firstChild.nextSibling;

    test.equal(otherChild, null, 'nextSiblingIsNull');

    test.done();
  },

  /**
   *
   The "getSpecified()" method for an Attr node should
   be set to true if the attribute was explicitly given
   a value.
   Retrieve the attribute named "domestic" from the last
   child of of the first employee and examine the value
   returned by the "getSpecified()" method.  This test uses
   the "getNamedItem(name)" method from the NamedNodeMap
   interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-862529273
   */
  hc_attrspecifiedvalue: function(test) {
    var success;
    var doc;
    var addressList;
    var testNode;
    var attributes;
    var domesticAttr;
    var state;

    doc = hc_staff.hc_staff();
    addressList = doc.getElementsByTagName("acronym");
    testNode = addressList.item(0);
    attributes = testNode.attributes;

    domesticAttr = attributes.getNamedItem("title");
    state = domesticAttr.specified;

    test.ok(state, 'acronymTitleSpecified');

    test.done();
  },

  /**
   *
   The "getSpecified()" method for an Attr node should return true if the
   value of the attribute is changed.
   Retrieve the attribute named "class" from the last
   child of of the THIRD employee and change its
   value to "Yes"(which is the default DTD value).  This
   should cause the "getSpecified()" method to be true.
   This test uses the "setAttribute(name,value)" method
   from the Element interface and the "getNamedItem(name)"
   method from the NamedNodeMap interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-862529273
   */
  hc_attrspecifiedvaluechanged: function(test) {
    var success;
    var doc;
    var addressList;
    var testNode;
    var attributes;
    var streetAttr;
    var state;

    doc = hc_staff.hc_staff();
    addressList = doc.getElementsByTagName("acronym");
    testNode = addressList.item(2);
    testNode.setAttribute("class","Yα");
    attributes = testNode.attributes;

    streetAttr = attributes.getNamedItem("class");
    state = streetAttr.specified;

    test.ok(state, 'acronymClassSpecified');

    test.done();
  },

  /**
   *
   The "appendData(arg)" method appends a string to the end
   of the character data of the node.

   Retrieve the character data from the second child
   of the first employee.  The appendData(arg) method is
   called with arg=", Esquire".  The method should append
   the specified data to the already existing character
   data.  The new value return by the "getLength()" method
   should be 24.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-32791A2F
   */
  hc_characterdataappenddata: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childValue;
    var childLength;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.appendData(", Esquire");
    childValue = child.data;

    childLength = childValue.length;
    test.equal(childLength, 24, 'characterdataAppendDataAssert');

    test.done();
  },

  /**
   *
   On successful invocation of the "appendData(arg)"
   method the "getData()" method provides access to the
   concatentation of data and the specified string.

   Retrieve the character data from the second child
   of the first employee.  The appendData(arg) method is
   called with arg=", Esquire".  The method should append
   the specified data to the already existing character
   data.  The new value return by the "getData()" method
   should be "Margaret Martin, Esquire".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-32791A2F
   */
  hc_characterdataappenddatagetdata: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.appendData(", Esquire");
    childData = child.data;

    test.equal(childData, "Margaret Martin, Esquire", 'characterdataAppendDataGetDataAssert');

    test.done();
  },

  /**
   *
   The "deleteData(offset,count)" method removes a range of
   characters from the node.  Delete data at the beginning
   of the character data.

   Retrieve the character data from the last child of the
   first employee.  The "deleteData(offset,count)"
   method is then called with offset=0 and count=16.
   The method should delete the characters from position
   0 thru position 16.  The new value of the character data
   should be "Dallas, Texas 98551".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   */
  hc_characterdatadeletedatabegining: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.deleteData(0,16);
    childData = child.data;

    test.equal(childData, "Dallas, Texas 98551", 'data');

    test.done();
  },

  /**
   *
   The "deleteData(offset,count)" method removes a range of
   characters from the node.  Delete data at the end
   of the character data.

   Retrieve the character data from the last child of the
   first employee.  The "deleteData(offset,count)"
   method is then called with offset=30 and count=5.
   The method should delete the characters from position
   30 thru position 35.  The new value of the character data
   should be "1230 North Ave. Dallas, Texas".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   */
  hc_characterdatadeletedataend: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.deleteData(30,5);
    childData = child.data;

    test.equal(childData, "1230 North Ave. Dallas, Texas ", 'characterdataDeleteDataEndAssert');

    test.done();
  },

  /**
   *
   If the sum of the offset and count used in the
   "deleteData(offset,count) method is greater than the
   length of the character data then all the characters
   from the offset to the end of the data are deleted.

   Retrieve the character data from the last child of the
   first employee.  The "deleteData(offset,count)"
   method is then called with offset=4 and count=50.
   The method should delete the characters from position 4
   to the end of the data since the offset+count(50+4)
   is greater than the length of the character data(35).
   The new value of the character data should be "1230".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   */
  hc_characterdatadeletedataexceedslength: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.deleteData(4,50);
    childData = child.data;

    test.equal(childData, "1230", 'characterdataDeleteDataExceedsLengthAssert');

    test.done();
  },

  /**
   *
   On successful invocation of the "deleteData(offset,count)"
   method, the "getData()" and "getLength()" methods reflect
   the changes.

   Retrieve the character data from the last child of the
   first employee.  The "deleteData(offset,count)"
   method is then called with offset=30 and count=5.
   The method should delete the characters from position
   30 thru position 35.  The new value of the character data
   should be "1230 North Ave. Dallas, Texas" which is
   returned by the "getData()" method and "getLength()"
   method should return 30".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7D61178C
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   */
  hc_characterdatadeletedatagetlengthanddata: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;
    var childLength;
    var result = new Array();


    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.deleteData(30,5);
    childData = child.data;

    test.equal(childData, "1230 North Ave. Dallas, Texas ", 'data');
    childLength = child.length;

    test.equal(childLength, 30, 'length');

    test.done();
  },

  /**
   *
   The "deleteData(offset,count)" method removes a range of
   characters from the node.  Delete data in the middle
   of the character data.

   Retrieve the character data from the last child of the
   first employee.  The "deleteData(offset,count)"
   method is then called with offset=16 and count=8.
   The method should delete the characters from position
   16 thru position 24.  The new value of the character data
   should be "1230 North Ave. Texas 98551".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   */
  hc_characterdatadeletedatamiddle: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.deleteData(16,8);
    childData = child.data;

    test.equal(childData, "1230 North Ave. Texas 98551", 'characterdataDeleteDataMiddleAssert');

    test.done();
  },

  /**
   *

   The "getData()" method retrieves the character data

   currently stored in the node.

   Retrieve the character data from the second child

   of the first employee and invoke the "getData()"

   method.  The method returns the character data

   string.


   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   */
  hc_characterdatagetdata: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    childData = child.data;

    test.equal(childData, "Margaret Martin", 'characterdataGetDataAssert');

    test.done();
  },

  /**
   *
   The "getLength()" method returns the number of characters
   stored in this nodes data.
   Retrieve the character data from the second
   child of the first employee and examine the
   value returned by the getLength() method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7D61178C
   */
  hc_characterdatagetlength: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childValue;
    var childLength;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    childValue = child.data;

    childLength = childValue.length;
    test.equal(childLength, 15, 'characterdataGetLengthAssert');

    test.done();
  },

  /**
   *
   The "deleteData(offset,count)" method raises an
   INDEX_SIZE_ERR DOMException if the specified count
   is negative.

   Retrieve the character data of the last child of the
   first employee and invoke its "deleteData(offset,count)"
   method with offset=10 and count=-3.  It should raise the
   desired exception since the count is negative.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  hc_characterdataindexsizeerrdeletedatacountnegative: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    var success = false;
    try {
      child.substringData(10,-3);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throws_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "deleteData(offset,count)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is greater that the number of characters in the string.

   Retrieve the character data of the last child of the
   first employee and invoke its "deleteData(offset,count)"
   method with offset=40 and count=3.  It should raise the
   desired exception since the offset is greater than the
   number of characters in the string.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_characterdataindexsizeerrdeletedataoffsetgreater: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    var success = false;
    try {
      child.deleteData(40,3);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throw_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "deleteData(offset,count)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is negative.

   Retrieve the character data of the last child of the
   first employee and invoke its "deleteData(offset,count)"
   method with offset=-5 and count=3.  It should raise the
   desired exception since the offset is negative.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   */
  hc_characterdataindexsizeerrdeletedataoffsetnegative: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    var success = false;
    try {
      child.deleteData(-5,3);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throws_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "insertData(offset,arg)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is greater than the number of characters in the string.

   Retrieve the character data of the last child of the
   first employee and invoke its insertData"(offset,arg)"
   method with offset=40 and arg="ABC".  It should raise
   the desired exception since the offset is greater than
   the number of characters in the string.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_characterdataindexsizeerrinsertdataoffsetgreater: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    var success = false;
    try {
      child.deleteData(40,3);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throw_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "insertData(offset,arg)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is negative.

   Retrieve the character data of the last child of the
   first employee and invoke its insertData"(offset,arg)"
   method with offset=-5 and arg="ABC".  It should raise
   the desired exception since the offset is negative.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-E5CBA7FB')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  hc_characterdataindexsizeerrinsertdataoffsetnegative: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    var success = false;
    try {
      child.replaceData(-5,3,"ABC");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throws_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "replaceData(offset,count,arg)" method raises an
   INDEX_SIZE_ERR DOMException if the specified count
   is negative.

   Retrieve the character data of the last child of the
   first employee and invoke its
   "replaceData(offset,count,arg) method with offset=10
   and count=-3 and arg="ABC".  It should raise the
   desired exception since the count is negative.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  hc_characterdataindexsizeerrreplacedatacountnegative: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    var success = false;
    try {
      child.substringData(10,-3);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throws_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "replaceData(offset,count,arg)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is greater than the length of the string.

   Retrieve the character data of the last child of the
   first employee and invoke its
   "replaceData(offset,count,arg) method with offset=40
   and count=3 and arg="ABC".  It should raise the
   desired exception since the offset is greater than the
   length of the string.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-7C603781
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-7C603781')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=242
   */
  hc_characterdataindexsizeerrreplacedataoffsetgreater: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    success = false;
    try {
      child.deleteData(40,3);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throw_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "replaceData(offset,count,arg)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is negative.

   Retrieve the character data of the last child of the
   first employee and invoke its
   "replaceData(offset,count,arg) method with offset=-5
   and count=3 and arg="ABC".  It should raise the
   desired exception since the offset is negative.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-E5CBA7FB')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
   */
  hc_characterdataindexsizeerrreplacedataoffsetnegative: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    success = false;
    try {
      child.replaceData(-5,3,"ABC");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throws_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "substringData(offset,count)" method raises an
   INDEX_SIZE_ERR DOMException if the specified count
   is negative.

   Retrieve the character data of the last child of the
   first employee and invoke its "substringData(offset,count)
   method with offset=10 and count=-3.  It should raise the
   desired exception since the count is negative.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  hc_characterdataindexsizeerrsubstringcountnegative: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    var success = false;
    try {
      child.substringData(10,-3);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throws_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "substringData(offset,count)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is negative.

   Retrieve the character data of the last child of the
   first employee and invoke its "substringData(offset,count)
   method with offset=-5 and count=3.  It should raise the
   desired exception since the offset is negative.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  hc_characterdataindexsizeerrsubstringnegativeoffset: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    success = false;
    try {
      child.substringData(-5,3);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throws_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "substringData(offset,count)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset
   is greater than the number of characters in the string.

   Retrieve the character data of the last child of the
   first employee and invoke its "substringData(offset,count)
   method with offset=40 and count=3.  It should raise the
   desired exception since the offsets value is greater
   than the length.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-6531BCCF')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_characterdataindexsizeerrsubstringoffsetgreater: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("acronym").item(0).firstChild;
    success = false;
    try {
      child.substringData(40,3);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throw_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "insertData(offset,arg)" method will insert a string
   at the specified character offset.  Insert the data at
   the beginning of the character data.

   Retrieve the character data from the second child of
   the first employee.  The "insertData(offset,arg)"
   method is then called with offset=0 and arg="Mss.".
   The method should insert the string "Mss." at position 0.
   The new value of the character data should be
   "Mss. Margaret Martin".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
   */
  hc_characterdatainsertdatabeginning: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.insertData(0,"Mss. ");
    childData = child.data;

    test.equal(childData, "Mss. Margaret Martin", 'characterdataInsertDataBeginningAssert');

    test.done();
  },

  /**
   *
   The "insertData(offset,arg)" method will insert a string
   at the specified character offset.  Insert the data at
   the end of the character data.

   Retrieve the character data from the second child of
   the first employee.  The "insertData(offset,arg)"
   method is then called with offset=15 and arg=", Esquire".
   The method should insert the string ", Esquire" at
   position 15.  The new value of the character data should
   be "Margaret Martin, Esquire".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
   */
  hc_characterdatainsertdataend: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.insertData(15,", Esquire");
    childData = child.data;

    test.equal(childData, "Margaret Martin, Esquire", 'characterdataInsertDataEndAssert');

    test.done();
  },

  /**
   *
   The "insertData(offset,arg)" method will insert a string
   at the specified character offset.  Insert the data in
   the middle of the character data.

   Retrieve the character data from the second child of
   the first employee.  The "insertData(offset,arg)"
   method is then called with offset=9 and arg="Ann".
   The method should insert the string "Ann" at position 9.
   The new value of the character data should be
   "Margaret Ann Martin".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3EDB695F
   */
  hc_characterdatainsertdatamiddle: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.insertData(9,"Ann ");
    childData = child.data;

    test.equal(childData, "Margaret Ann Martin", 'characterdataInsertDataMiddleAssert');

    test.done();
  },

  /**
   *
   The "replaceData(offset,count,arg)" method replaces the
   characters starting at the specified offset with the
   specified string.  Test for replacement in the
   middle of the data.

   Retrieve the character data from the last child of the
   first employee.  The "replaceData(offset,count,arg)"
   method is then called with offset=5 and count=5 and
   arg="South".  The method should replace characters five
   thru 9 of the character data with "South".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
   */
  hc_characterdatareplacedatabegining: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.replaceData(0,4,"2500");
    childData = child.data;

    test.equal(childData, "2500 North Ave. Dallas, Texas 98551", 'characterdataReplaceDataBeginingAssert');

    test.done();
  },

  /**
   *
   The "replaceData(offset,count,arg)" method replaces the
   characters starting at the specified offset with the
   specified string.  Test for replacement at the
   end of the data.

   Retrieve the character data from the last child of the
   first employee.  The "replaceData(offset,count,arg)"
   method is then called with offset=30 and count=5 and
   arg="98665".  The method should replace characters 30
   thru 34 of the character data with "98665".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
   */
  hc_characterdatareplacedataend: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.replaceData(30,5,"98665");
    childData = child.data;

    test.equal(childData, "1230 North Ave. Dallas, Texas 98665", 'characterdataReplaceDataEndAssert');

    test.done();
  },

  /**
   *
   The "replaceData(offset,count,arg)" method replaces the
   characters starting at the specified offset with the
   specified string.  Test the situation where the length
   of the arg string is greater than the specified offset.

   Retrieve the character data from the last child of the
   first employee.  The "replaceData(offset,count,arg)"
   method is then called with offset=0 and count=4 and
   arg="260030".  The method should replace characters one
   thru four with "260030".  Note that the length of the
   specified string is greater that the specified offset.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
   */
  hc_characterdatareplacedataexceedslengthofarg: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.replaceData(0,4,"260030");
    childData = child.data;

    test.equal(childData, "260030 North Ave. Dallas, Texas 98551", 'characterdataReplaceDataExceedsLengthOfArgAssert');

    test.done();
  },

  /**
   *
   If the sum of the offset and count exceeds the length then
   all the characters to the end of the data are replaced.

   Retrieve the character data from the last child of the
   first employee.  The "replaceData(offset,count,arg)"
   method is then called with offset=0 and count=50 and
   arg="2600".  The method should replace all the characters
   with "2600". This is because the sum of the offset and
   count exceeds the length of the character data.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
   */
  hc_characterdatareplacedataexceedslengthofdata: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.replaceData(0,50,"2600");
    childData = child.data;

    test.equal(childData, "2600", 'characterdataReplaceDataExceedsLengthOfDataAssert');

    test.done();
  },

  /**
   *
   The "replaceData(offset,count,arg)" method replaces the
   characters starting at the specified offset with the
   specified string.  Test for replacement in the
   middle of the data.

   Retrieve the character data from the last child of the
   first employee.  The "replaceData(offset,count,arg)"
   method is then called with offset=5 and count=5 and
   arg="South".  The method should replace characters five
   thru 9 of the character data with "South".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-E5CBA7FB
   */
  hc_characterdatareplacedatamiddle: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.replaceData(5,5,"South");
    childData = child.data;

    test.equal(childData, "1230 South Ave. Dallas, Texas 98551", 'characterdataReplaceDataMiddleAssert');

    test.done();
  },

  /**
   *
   The "setNodeValue()" method changes the character data
   currently stored in the node.
   Retrieve the character data from the second child
   of the first employee and invoke the "setNodeValue()"
   method, call "getData()" and compare.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-72AB8359
   */
  hc_characterdatasetnodevalue: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var childData;
    var childValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    child.nodeValue = "Marilyn Martin";

    childData = child.data;

    test.equal(childData, "Marilyn Martin", 'data');
    childValue = child.nodeValue;

    test.equal(childValue, "Marilyn Martin", 'value');

    test.done();
  },

  /**
   *
   If the sum of the "offset" and "count" exceeds the
   "length" then the "substringData(offset,count)" method
   returns all the characters to the end of the data.

   Retrieve the character data from the second child
   of the first employee and access part of the data
   by using the substringData(offset,count) method
   with offset=9 and count=10.  The method should return
   the substring "Martin" since offset+count > length
   (19 > 15).

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
   */
  hc_characterdatasubstringexceedsvalue: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var substring;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    substring = child.substringData(9,10);
    test.equal(substring, "Martin", 'characterdataSubStringExceedsValueAssert');

    test.done();
  },

  /**
   *
   The "substringData(offset,count)" method returns the
   specified string.

   Retrieve the character data from the second child
   of the first employee and access part of the data
   by using the substringData(offset,count) method.  The
   method should return the specified substring starting
   at position "offset" and extract "count" characters.
   The method should return the string "Margaret".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6531BCCF
   */
  hc_characterdatasubstringvalue: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var child;
    var substring;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(0);
    child = nameNode.firstChild;

    substring = child.substringData(0,8);
    test.equal(substring, "Margaret", 'characterdataSubStringValueAssert');

    test.done();
  },

  /**
   *
   A comment is all the characters between the starting
   '<!--' and ending '-->'
   Retrieve the nodes of the DOM document.  Search for a
   comment node and the content is its value.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1334481328
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=509
   */
  hc_commentgetcomment: function(test) {
    var success;
    var doc;
    var elementList;
    var child;
    var childName;
    var childValue;
    var commentCount = 0;
    var childType;
    var attributes;

    doc = hc_staff.hc_staff();
    elementList = doc.childNodes;

    for(var indexN1005E = 0;indexN1005E < elementList.length; indexN1005E++) {
      child = elementList.item(indexN1005E);
      childType = child.nodeType;


      if(
        (8 == childType)
      ) {
        childName = child.nodeName;

        test.equal(childName, "#comment", 'nodeName');
        childValue = child.nodeValue;

        test.equal(childValue, " This is comment number 1.", 'nodeValue');
        attributes = child.attributes;

        test.equal(attributes, null, 'attributes');
        commentCount += 1;

      }

    }
    test.ok(commentCount < 2, 'atMostOneComment');
    test.done();
  },

  /**
   *
   Retrieve the entire DOM document and invoke its
   "createAttribute(name)" method.  It should create a
   new Attribute node with the given name. The name, value
   and type of the newly created object are retrieved and
   output.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1084891198
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_documentcreateattribute: function(test) {
    var doc = hc_staff.hc_staff();
    var newAttrNode = doc.createAttribute("title");
    test.equal(newAttrNode.nodeValue, "", 'value');
    test.equal(newAttrNode.nodeName, 'title', 'attribute name');
    test.equal(newAttrNode.nodeType, 2, 'type');
    test.done();
  },

  /**
   *
   The "createComment(data)" method creates a new Comment
   node given the specified string.
   Retrieve the entire DOM document and invoke its
   "createComment(data)" method.  It should create a new
   Comment node whose "data" is the specified string.
   The content, name and type are retrieved and output.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1334481328
   */
  hc_documentcreatecomment: function(test) {
    var success;
    var doc;
    var newCommentNode;
    var newCommentValue;
    var newCommentName;
    var newCommentType;

    doc = hc_staff.hc_staff();
    newCommentNode = doc.createComment("This is a new Comment node");
    newCommentValue = newCommentNode.nodeValue;

    test.equal(newCommentValue, "This is a new Comment node", 'value');
    newCommentName = newCommentNode.nodeName;

    test.equal(newCommentName, "#comment", 'strong');
    newCommentType = newCommentNode.nodeType;

    test.equal(newCommentType, 8, 'type');

    test.done();
  },

  /**
   *
   The "createDocumentFragment()" method creates an empty
   DocumentFragment object.
   Retrieve the entire DOM document and invoke its
   "createDocumentFragment()" method.  The content, name,
   type and value of the newly created object are output.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-35CB04B5
   */
  hc_documentcreatedocumentfragment: function(test) {
    var doc = hc_staff.hc_staff();
    var newDocFragment = doc.createDocumentFragment();
    test.equal(newDocFragment.childNodes.length, 0, 'length');
    test.equal(newDocFragment.nodeName, "#document-fragment", 'strong');
    test.equal(newDocFragment.nodeType, 11, 'type');
    test.equal(newDocFragment.nodeValue, null, 'value');
    test.done();
  },

  /**
   *
   The "createElement(tagName)" method creates an Element
   of the type specified.
   Retrieve the entire DOM document and invoke its
   "createElement(tagName)" method with tagName="acronym".
   The method should create an instance of an Element node
   whose tagName is "acronym".  The NodeName, NodeType
   and NodeValue are returned.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
   */
  hc_documentcreateelement: function(test) {
    var doc = hc_staff.hc_staff();
    var newElement = doc.createElement("acronym");
    test.equal(newElement.nodeName, 'ACRONYM', 'element strong');
    test.equal(newElement.nodeType, 1, 'type');
    test.equal(newElement.nodeValue, null, 'valueInitiallyNull');
    test.done();
  },

  /**
   *
   The tagName parameter in the "createElement(tagName)"
   method is case-sensitive for XML documents.
   Retrieve the entire DOM document and invoke its
   "createElement(tagName)" method twice.  Once for tagName
   equal to "acronym" and once for tagName equal to "ACRONYM"
   Each call should create a distinct Element node.  The
   newly created Elements are then assigned attributes
   that are retrieved.

   Modified on 27 June 2003 to avoid setting an invalid style
   values and checked the node names to see if they matched expectations.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_documentcreateelementcasesensitive: function(test) {
    var doc = hc_staff.hc_staff();
    var newElement1 = doc.createElement("ACRONYM");
    var newElement2 = doc.createElement("acronym");
    newElement1.setAttribute("lang","EN");
    newElement2.setAttribute("title","Dallas");
    test.equal(newElement1.getAttribute("lang"), "EN", 'attrib1');
    test.equal(newElement2.getAttribute("title"), "Dallas", 'attrib2');
    test.equal(newElement1.nodeName, 'ACRONYM', 'element nodeName1');
    test.equal(newElement2.nodeName, 'ACRONYM', 'element nodeName2');
    test.done();
  },

  /**
   *
   The "createTextNode(data)" method creates a Text node
   given the specfied string.
   Retrieve the entire DOM document and invoke its
   "createTextNode(data)" method.  It should create a
   new Text node whose "data" is the specified string.
   The NodeName and NodeType are also checked.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1975348127
   */
  hc_documentcreatetextnode: function(test) {
    var success;
    var doc;
    var newTextNode;
    var newTextName;
    var newTextValue;
    var newTextType;

    doc = hc_staff.hc_staff();
    newTextNode = doc.createTextNode("This is a new Text node");
    newTextValue = newTextNode.nodeValue;

    test.equal(newTextValue, "This is a new Text node", 'value');
    newTextName = newTextNode.nodeName;

    test.equal(newTextName, "#text", 'strong');
    newTextType = newTextNode.nodeType;

    test.equal(newTextType, 3, 'type');

    test.done();
  },

  /**
   *
   Access Document.doctype for hc_staff, if not text/html should return DocumentType node.
   HTML implementations may return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
   */
  hc_documentgetdoctype: function(test) {
    var doc = hc_staff.hc_staff();
    var docType = doc.doctype;
    test.equal(docType.name, "html", 'nodeName');
    test.equal(docType.nodeValue, null, 'nodeValue');
    test.equal(docType.attributes, null, 'attributes');
    test.done();
  },

  /**
   *
   The "getElementsByTagName(tagName)" method returns a
   NodeList of all the Elements with a given tagName.

   Retrieve the entire DOM document and invoke its
   "getElementsByTagName(tagName)" method with tagName
   equal to "strong".  The method should return a NodeList
   that contains 5 elements.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
   */
  hc_documentgetelementsbytagnamelength: function(test) {
    var success;
    var doc;
    var nameList;

    doc = hc_staff.hc_staff();
    nameList = doc.getElementsByTagName("strong");
    test.equal(nameList.length, 5, 'documentGetElementsByTagNameLengthAssert');

    test.done();
  },

  /**
   *
   Retrieve the entire DOM document and invoke its
   "getElementsByTagName(tagName)" method with tagName
   equal to "*".  The method should return a NodeList
   that contains all the elements of the document.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
   */
  hc_documentgetelementsbytagnametotallength: function(test) {
    var expectedNames = ["HTML", "HEAD", "META", "TITLE", "SCRIPT", "SCRIPT", "SCRIPT", "BODY",
                         "P", "EM", "STRONG", "CODE", "SUP", "VAR", "ACRONYM", "P", "EM", "STRONG",
                         "CODE", "SUP", "VAR", "ACRONYM", "P", "EM", "STRONG", "CODE", "SUP", "VAR",
                         "ACRONYM", "P", "EM", "STRONG", "CODE", "SUP", "VAR", "ACRONYM", "P", "EM",
                         "STRONG", "CODE", "SUP", "VAR", "ACRONYM"];
    var actualNames = [];
    var doc = hc_staff.hc_staff();
    var nameList = doc.getElementsByTagName("*");
    for(var i=0;i<nameList.length;i++) {
      actualNames.push(nameList.item(i).tagName);
    }
    test.deepEqual(actualNames, expectedNames)
    test.done();
  },

  /**
   *
   The "getElementsByTagName(tagName)" method returns a
   NodeList of all the Elements with a given tagName
   in a pre-order traversal of the tree.

   Retrieve the entire DOM document and invoke its
   "getElementsByTagName(tagName)" method with tagName
   equal to "strong".  The method should return a NodeList
   that contains 5 elements.  The FOURTH item in the
   list is retrieved and output.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-A6C9094
   */
  hc_documentgetelementsbytagnamevalue: function(test) {
    var success;
    var doc;
    var nameList;
    var nameNode;
    var firstChild;
    var childValue;

    doc = hc_staff.hc_staff();
    nameList = doc.getElementsByTagName("strong");
    nameNode = nameList.item(3);
    firstChild = nameNode.firstChild;

    childValue = firstChild.nodeValue;

    test.equal(childValue, "Jeny Oconnor", 'documentGetElementsByTagNameValueAssert');

    test.done();
  },

  /**
   *
   Retrieve the entire DOM document and invoke its
   "getImplementation()" method.  If contentType="text/html",
   DOMImplementation.hasFeature("HTML","1.0") should be true.
   Otherwise, DOMImplementation.hasFeature("XML", "1.0")
   should be true.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1B793EBA
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
   */
  hc_documentgetimplementation: function(test) {
    var doc = hc_staff.hc_staff();
    test.ok(doc.implementation.hasFeature("HTML","1.0"), 'supports_HTML_1.0');
    test.done();
  },

  /**
   *
   Load a document and invoke its
   "getDocumentElement()" method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-87CD092
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
   */
  hc_documentgetrootnode: function(test) {
    var doc = hc_staff.hc_staff();
    test.equal(doc.documentElement.nodeName, 'HTML')
    test.done();
  },

  /**
   *
   The "createAttribute(tagName)" method raises an
   INVALID_CHARACTER_ERR DOMException if the specified
   tagName contains an invalid character.

   Retrieve the entire DOM document and invoke its
   "createAttribute(tagName)" method with the tagName equal
   to the string "invalid^Name".  Due to the invalid
   character the desired EXCEPTION should be raised.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1084891198
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-1084891198')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1084891198
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_documentinvalidcharacterexceptioncreateattribute: function(test) {
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      doc.createAttribute("invalid'Name");
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 5);
    }
    test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    test.done();
  },

  /**
   *
   Creating an attribute with an empty name should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1084891198
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-1084891198')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1084891198
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  hc_documentinvalidcharacterexceptioncreateattribute1: function(test) {
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      doc.createAttribute("");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 5);
    }
    test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    test.done();
  },

  /**
   *
   The "createElement(tagName)" method raises an
   INVALID_CHARACTER_ERR DOMException if the specified
   tagName contains an invalid character.

   Retrieve the entire DOM document and invoke its
   "createElement(tagName)" method with the tagName equal
   to the string "invalid^Name".  Due to the invalid
   character the desired EXCEPTION should be raised.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-2141741547')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_documentinvalidcharacterexceptioncreateelement: function(test) {
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      doc.createElement("invalid^Name");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 5);
    }
    test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    test.done();
  },

  /**
   *
   Creating an element with an empty name should cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-2141741547')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-2141741547
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  hc_documentinvalidcharacterexceptioncreateelement1: function(test) {
    var doc = hc_staff.hc_staff();
    var success = false;
    try {
      doc.createElement("");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 5);
    }
    test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    test.done();
  },

  /**
   *
   Load a document and invoke its
   "getImplementation()" method.  This should create a
   DOMImplementation object whose "hasFeature(feature,
   version)" method is invoked with version equal to "".
   If the version is not specified, supporting any version
   feature will cause the method to return "true".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
   * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
   */
  hc_domimplementationfeaturenoversion: function(test) {
    var doc = hc_staff.hc_staff();
    test.ok(doc.implementation.hasFeature("HTML",""), 'hasFeatureBlank');
    test.done();
  },

  /**
   *
   Load a document and invoke its
   "getImplementation()" method.  This should create a
   DOMImplementation object whose "hasFeature(feature,
   version)" method is invoked with version equal to null.
   If the version is not specified, supporting any version
   feature will cause the method to return "true".

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
   * @see http://www.w3.org/2000/11/DOM-Level-2-errata#core-14
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
   */
  hc_domimplementationfeaturenull: function(test) {
    var doc = hc_staff.hc_staff();
    test.ok(doc.implementation.hasFeature("HTML",null), 'supports_HTML_null');
    test.done();
  },

  /**
   *
   Retrieve the entire DOM document and invoke its
   "getImplementation()" method.  This should create a
   DOMImplementation object whose "hasFeature(feature,
   version)" method is invoked with "feature" equal to "html" or "xml".
   The method should return a boolean "true".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=245
   */
  hc_domimplementationfeaturexml: function(test) {
    var doc = hc_staff.hc_staff();
    test.ok(doc.implementation.hasFeature("html","1.0"), 'supports_html_1.0');
    test.done();
  },

  /**
   *
   The "setAttribute(name,value)" method adds a new attribute
   to the Element

   Retrieve the last child of the last employee, then
   add an attribute to it by invoking the
   "setAttribute(name,value)" method.  It should create
   a "strong" attribute with an assigned value equal to
   "value".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_elementaddnewattribute: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var attrValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(4);
    testEmployee.setAttribute("lang","EN-us");
    attrValue = testEmployee.getAttribute("lang");
    test.equal(attrValue, "EN-us", 'attrValue');

    test.done();
  },

  /**
   *
   Retrieve the first attribute from the last child of
   the first employee and invoke the "getSpecified()"
   method.  This test is only intended to show that
   Elements can actually have attributes.  This test uses
   the "getNamedItem(name)" method from the NamedNodeMap
   interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   */
  hc_elementassociatedattribute: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var attributes;
    var domesticAttr;
    var specified;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(0);
    attributes = testEmployee.attributes;

    domesticAttr = attributes.getNamedItem("title");
    specified = domesticAttr.specified;

    test.ok(specified, 'acronymTitleSpecified');

    test.done();
  },

  /**
   *
   The "setAttribute(name,value)" method adds a new attribute
   to the Element.  If the "strong" is already present, then
   its value should be changed to the new one that is in
   the "value" parameter.

   Retrieve the last child of the fourth employee, then add
   an attribute to it by invoking the
   "setAttribute(name,value)" method.  Since the name of the
   used attribute("class") is already present in this
   element, then its value should be changed to the new one
   of the "value" parameter.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
   */
  hc_elementchangeattributevalue: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var attrValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(3);
    testEmployee.setAttribute("class","Neither");
    attrValue = testEmployee.getAttribute("class");
    test.equal(attrValue, "Neither", 'elementChangeAttributeValueAssert');

    test.done();
  },

  /**
   *
   The "setAttributeNode(newAttr)" method adds a new
   attribute to the Element.

   Retrieve first address element and add
   a new attribute node to it by invoking its
   "setAttributeNode(newAttr)" method.  This test makes use
   of the "createAttribute(name)" method from the Document
   interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_elementcreatenewattribute: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddress;
    var newAttribute;
    var oldAttr;
    var districtAttr;
    var attrVal;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddress = elementList.item(0);
    newAttribute = doc.createAttribute("lang");
    oldAttr = testAddress.setAttributeNode(newAttribute);
    test.equal(oldAttr, null, 'old_attr_doesnt_exist');
    districtAttr = testAddress.getAttributeNode("lang");
    test.notEqual(districtAttr, null, 'new_district_accessible');
    attrVal = testAddress.getAttribute("lang");
    test.equal(attrVal, "", 'attr_value');

    test.done();
  },

  /**
   *
   Retrieve the attribute "title" from the last child
   of the first "p" element and check its node name.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-217A91B8
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   */
  hc_elementgetattributenode: function(test) {
    var doc = hc_staff.hc_staff();
    var nodeName = doc.getElementsByTagName("acronym").item(0).getAttributeNode("title").nodeName;
    test.equal(nodeName, 'title', 'attribute nodeName');
    test.done();
  },

  /**
   *
   The "getAttributeNode(name)" method retrieves an
   attribute node by name.  It should return null if the
   "strong" attribute does not exist.

   Retrieve the last child of the first employee and attempt
   to retrieve a non-existing attribute.  The method should
   return "null".  The non-existing attribute to be used
   is "invalidAttribute".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-217A91B8
   */
  hc_elementgetattributenodenull: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var domesticAttr;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(0);
    domesticAttr = testEmployee.getAttributeNode("invalidAttribute");
    test.equal(domesticAttr, null, 'elementGetAttributeNodeNullAssert');

    test.done();
  },

  /**
   *
   The "getAttribute(name)" method returns an empty
   string if no value was assigned to an attribute and
   no default value was given in the DTD file.

   Retrieve the last child of the last employee, then
   invoke "getAttribute(name)" method, where "strong" is an
   attribute without a specified or DTD default value.
   The "getAttribute(name)" method should return the empty
   string.  This method makes use of the
   "createAttribute(newAttr)" method from the Document
   interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-666EE0F9
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_elementgetelementempty: function(test) {
    var success;
    var doc;
    var newAttribute;
    var elementList;
    var testEmployee;
    var domesticAttr;
    var attrValue;

    doc = hc_staff.hc_staff();
    newAttribute = doc.createAttribute("lang");
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(3);
    domesticAttr = testEmployee.setAttributeNode(newAttribute);
    attrValue = testEmployee.getAttribute("lang");
    test.equal(attrValue, "", 'elementGetElementEmptyAssert');

    test.done();
  },

  /**
   *
   The "getElementsByTagName(name)" method returns a list
   of all descendant Elements with the given tag name.
   Test for an empty list.

   Create a NodeList of all the descendant elements
   using the string "noMatch" as the tagName.
   The method should return a NodeList whose length is
   "0" since there are not any descendant elements
   that match the given tag name.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
   */
  hc_elementgetelementsbytagname: function(test) {
    var success;
    var doc;
    var elementList;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    test.equal(elementList.length, 5, 'elementGetElementsByTagNameAssert');

    test.done();
  },

  /**
   *
   The "getElementsByTagName(name)" method returns a list
   of all descendant Elements in the order the children
   were encountered in a pre order traversal of the element
   tree.

   Create a NodeList of all the descendant elements
   using the string "p" as the tagName.
   The method should return a NodeList whose length is
   "5" in the order the children were encountered.
   Access the FOURTH element in the NodeList.  The FOURTH
   element, the first or second should be an "em" node with
   the content "EMP0004".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_elementgetelementsbytagnameaccessnodelist: function(test) {
    var doc = hc_staff.hc_staff();
    var firstC = doc.getElementsByTagName("p").item(3).firstChild;
    var nodeType = firstC.nodeType;
    while (3 == nodeType) {
      firstC = firstC.nextSibling;
      nodeType = firstC.nodeType;
    }
    test.equal(firstC.nodeName, 'EM', 'element childName');
    test.equal(firstC.firstChild.nodeValue, "EMP0004", 'employeeID');
    test.done();
  },

  /**
   *
   The "getElementsByTagName(name)" method returns a list
   of all descendant Elements with the given tag name.

   Create a NodeList of all the descendant elements
   using the string "employee" as the tagName.
   The method should return a NodeList whose length is
   "5".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
   */
  hc_elementgetelementsbytagnamenomatch: function(test) {
    var success;
    var doc;
    var elementList;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("noMatch");
    test.equal(elementList.length, 0, 'elementGetElementsByTagNameNoMatchNoMatchAssert');

    test.done();
  },

  /**
   *
   The "getElementsByTagName(name)" method may use the
   special value "*" to match all tags in the element
   tree.

   Create a NodeList of all the descendant elements
   of the last employee by using the special value "*".
   The method should return all the descendant children(6)
   in the order the children were encountered.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1938918D
   */
  hc_elementgetelementsbytagnamespecialvalue: function(test) {
    var doc = hc_staff.hc_staff();
    var lastempList = doc.getElementsByTagName("p").item(4).getElementsByTagName("*");
    var actual = [];
    for(var i=0;i<lastempList.length;i++) {
      actual.push(lastempList.item(i).nodeName);
    }
    test.deepEqual(actual, ["EM", "STRONG", "CODE", "SUP", "VAR", "ACRONYM"], 'element tagNames');
    test.done();
  },

  /**
   *
   Invoke the "getTagName()" method one the
   root node. The value returned should be "html" or "svg".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-104682815
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
   */
  hc_elementgettagname: function(test) {
    var doc = hc_staff.hc_staff();
    test.equal(doc.documentElement.tagName, 'HTML')
    test.done();
  },

  /**
   *
   The "setAttributeNode(newAttr)" method raises an
   "INUSE_ATTRIBUTE_ERR DOMException if the "newAttr"
   is already an attribute of another element.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-887236154')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=244
   */
  hc_elementinuseattributeerr: function(test) {
    var doc = hc_staff.hc_staff();
    var testAddress = doc.getElementsByTagName("body").item(0);
    var newElement = doc.createElement("p");
    testAddress.appendChild(newElement);
    var newAttribute = doc.createAttribute("title");
    newElement.setAttributeNode(newAttribute);
    var success = false;
    try {
      testAddress.setAttributeNode(newAttribute);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 10);
    }
    test.ok(success, 'throw_INUSE_ATTRIBUTE_ERR');
    test.done();
  },

  /**
   *
   The "setAttribute(name,value)" method raises an
   "INVALID_CHARACTER_ERR DOMException if the specified
   name contains an invalid character.

   Retrieve the last child of the first employee and
   call its "setAttribute(name,value)" method with
   "strong" containing an invalid character.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-F68F082')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_elementinvalidcharacterexception: function(test) {
    var doc = hc_staff.hc_staff();
    var testAddress = doc.getElementsByTagName("acronym").item(0);
    var success = false;
    try {
      testAddress.setAttribute("invalid'Name","value");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 5);
    }
    test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    test.done();
  },

  /**
   *
   Calling Element.setAttribute with an empty name will cause an INVALID_CHARACTER_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68F082
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-F68F082')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INVALID_CHARACTER_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=525
   */
  hc_elementinvalidcharacterexception1: function(test) {
    var doc = hc_staff.hc_staff();
    var testAddress = doc.getElementsByTagName("acronym").item(0);
    var success = false;
    try {
      testAddress.setAttribute("","value");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 5);
    }
    test.ok(success, 'throw_INVALID_CHARACTER_ERR');
    test.done();
  },

  /**
   *
   Append a couple of text nodes to the first sup element, normalize the
   document element and check that the element has been normalized.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-162CF083
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=546
   */
  hc_elementnormalize: function(test) {
    var success;
    var doc;
    var root;
    var elementList;
    var testName;
    var firstChild;
    var childValue;
    var textNode;
    var retNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("sup");
    testName = elementList.item(0);
    textNode = doc.createTextNode("");
    retNode = testName.appendChild(textNode);
    textNode = doc.createTextNode(",000");
    retNode = testName.appendChild(textNode);
    root = doc.documentElement;

    root.normalize();
    elementList = doc.getElementsByTagName("sup");
    testName = elementList.item(0);
    firstChild = testName.firstChild;

    childValue = firstChild.nodeValue;

    test.equal(childValue, "56,000,000", 'elementNormalizeAssert');

    test.done();
  },

  /**
   *
   Add an empty text node to an existing attribute node, normalize the containing element
   and check that the attribute node has eliminated the empty text.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-162CF083
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=482
   */
  hc_elementnormalize2: function(test) {
    var success;
    var doc;
    var root;
    var elementList;
    var element;
    var firstChild;
    var secondChild;
    var childValue;
    var emptyText;
    var attrNode;
    var retval;

    doc = hc_staff.hc_staff();
    root = doc.documentElement;

    emptyText = doc.createTextNode("");
    elementList = root.getElementsByTagName("acronym");
    element = elementList.item(0);
    attrNode = element.getAttributeNode("title");
    retval = attrNode.appendChild(emptyText);
    element.normalize();
    attrNode = element.getAttributeNode("title");
    firstChild = attrNode.firstChild;

    childValue = firstChild.nodeValue;

    test.equal(childValue, "Yes", 'firstChild');
    secondChild = firstChild.nextSibling;

    test.equal(secondChild, null, 'secondChildNull');

    test.done();
  },

  /**
   *
   The "removeAttributeNode(oldAttr)" method raises a
   NOT_FOUND_ERR DOMException if the "oldAttr" attribute
   is not an attribute of the element.

   Retrieve the last employee and attempt to remove
   a non existing attribute node.  This should cause the
   intended exception to be raised.  This test makes use
   of the "createAttribute(name)" method from the Document
   interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D589198
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-D589198')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_elementnotfounderr: function(test) {
    var doc = hc_staff.hc_staff();
    var testAddress = doc.getElementsByTagName("acronym").item(4);
    var oldAttribute = doc.createAttribute("title");
    var success = false;
    try {
      testAddress.removeAttributeNode(oldAttribute);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 8);
    }
    test.ok(success, 'throw_NOT_FOUND_ERR');
    test.done();
  },

  /**
   *
   The "removeAttribute(name)" removes an attribute by name.
   If the attribute has a default value, it is immediately
   replaced.  However, there is no default values in the HTML
   compatible tests, so its value is "".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6D6AC0F9
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Mar/0002.html
   */
  hc_elementremoveattribute: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var attrValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(3);
    testEmployee.removeAttribute("class");
    attrValue = testEmployee.getAttribute("class");

// XXX SUPERSEDED BY DOM4
    test.strictEqual(attrValue, null, 'attrValue');
//    test.equal(attrValue, "", 'attrValue');

    test.done();
  },

  /**
   *
   The "removeAttributeNode(oldAttr)" method removes the
   specified attribute.

   Retrieve the last child of the third employee, add a
   new "lang" attribute to it and then try to remove it.
   To verify that the node was removed use the
   "getNamedItem(name)" method from the NamedNodeMap
   interface.  It also uses the "getAttributes()" method
   from the Node interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D589198
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_elementremoveattributeaftercreate: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var newAttribute;
    var attributes;
    var districtAttr;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(2);
    newAttribute = doc.createAttribute("lang");
    districtAttr = testEmployee.setAttributeNode(newAttribute);
    districtAttr = testEmployee.removeAttributeNode(newAttribute);
    attributes = testEmployee.attributes;

    districtAttr = attributes.getNamedItem("lang");
    test.equal(districtAttr, null, 'removed_item_null');

    test.done();
  },

  /**
   *
   The "removeAttributeNode(oldAttr)" method returns the
   node that was removed.

   Retrieve the last child of the third employee and
   remove its "class" Attr node.  The method should
   return the old attribute node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D589198
   */
  hc_elementremoveattributenode: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var streetAttr;
    var removedAttr;
    var removedValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(2);
    streetAttr = testEmployee.getAttributeNode("class");
    removedAttr = testEmployee.removeAttributeNode(streetAttr);
    test.notEqual(removedAttr, null, 'removedAttrNotNull');
    removedValue = removedAttr.value;

    test.equal(removedValue, "No", 'elementRemoveAttributeNodeAssert');

    test.done();
  },

  /**
   *
   This test calls setAttributeNode to replace an attribute with itself.
   Since the node is not an attribute of another Element, it would
   be inappropriate to throw an INUSE_ATTRIBUTE_ERR.

   This test was derived from elementinuserattributeerr which
   inadvertanly made this test.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
   */
  hc_elementreplaceattributewithself: function(test) {
    var doc = hc_staff.hc_staff();
    var testEmployee = doc.getElementsByTagName("acronym").item(2);
    var streetAttr = testEmployee.getAttributeNode("class");
    var replacedAttr = testEmployee.setAttributeNode(streetAttr);
    test.equal(replacedAttr, streetAttr, 'replacedAttr')
    test.done();
  },

  /**
   *
   The "setAttributeNode(newAttr)" method adds a new
   attribute to the Element.  If the "newAttr" Attr node is
   already present in this element, it should replace the
   existing one.

   Retrieve the last child of the third employee and add a
   new attribute node by invoking the "setAttributeNode(new
   Attr)" method.  The new attribute node to be added is
   "class", which is already present in this element.  The
   method should replace the existing Attr node with the
   new one.  This test uses the "createAttribute(name)"
   method from the Document interface.

   * @author Curt Arnold
   */
  hc_elementreplaceexistingattribute: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var newAttribute;
    var strong;
    var setAttr;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(2);
    newAttribute = doc.createAttribute("class");
    setAttr = testEmployee.setAttributeNode(newAttribute);
    strong = testEmployee.getAttribute("class");
    test.equal(strong, "", 'replacedValue');

    test.done();
  },

  /**
   *
   If the "setAttributeNode(newAttr)" method replaces an
   existing Attr node with the same name, then it should
   return the previously existing Attr node.

   Retrieve the last child of the third employee and add a
   new attribute node.  The new attribute node is "class",
   which is already present in this Element.  The method
   should return the existing Attr node(old "class" Attr).
   This test uses the "createAttribute(name)" method
   from the Document interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
   */
  hc_elementreplaceexistingattributegevalue: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var newAttribute;
    var streetAttr;
    var value;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(2);
    newAttribute = doc.createAttribute("class");
    streetAttr = testEmployee.setAttributeNode(newAttribute);
    test.notEqual(streetAttr, null, 'previousAttrNotNull');
    value = streetAttr.value;

    test.equal(value, "No", 'previousAttrValue');

    test.done();
  },

  /**
   *
   Create a list of all the attributes of the last child
   of the first "p" element by using the "getAttributes()"
   method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Mar/0002.html
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
   */
  hc_elementretrieveallattributes: function(test) {
    var doc = hc_staff.hc_staff();
    var attributes = doc.getElementsByTagName("acronym").item(0).attributes;
    var actual = [];
    for(var i=0;i<attributes.length;i++) {
      actual.push(attributes.item(i).nodeName);
    }
    test.deepEqual(actual, ['title'])
    test.done();
  },

  /**
   *
   The "getAttribute(name)" method returns an attribute
   value by name.

   Retrieve the second address element, then
   invoke the 'getAttribute("class")' method.  This should
   return the value of the attribute("No").

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-666EE0F9
   */
  hc_elementretrieveattrvalue: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddress;
    var attrValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddress = elementList.item(2);
    attrValue = testAddress.getAttribute("class");
    test.equal(attrValue, "No", 'attrValue');

    test.done();
  },

  /**
   *
   The "getElementsByTagName()" method returns a NodeList
   of all descendant elements with a given tagName.

   Invoke the "getElementsByTagName()" method and create
   a NodeList of "code" elements.  Retrieve the second
   "code" element in the list and return the NodeName.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-104682815
   */
  hc_elementretrievetagname: function(test) {
    var doc = hc_staff.hc_staff();
    var testEmployee = doc.getElementsByTagName("code").item(1);
    test.equal(testEmployee.nodeName, 'CODE', 'element nodeName');
    test.equal(testEmployee.tagName, 'CODE', 'element tagName');
    test.done();
  },

  /**
   *
   The "setAttributeNode(newAttr)" method returns the
   null value if no previously existing Attr node with the
   same name was replaced.

   Retrieve the last child of the third employee and add a
   new attribute to it.  The new attribute node added is
   "lang", which is not part of this Element.  The
   method should return the null value.
   This test uses the "createAttribute(name)"
   method from the Document interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_elementsetattributenodenull: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var newAttribute;
    var districtAttr;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(2);
    newAttribute = doc.createAttribute("lang");
    districtAttr = testEmployee.setAttributeNode(newAttribute);
    test.equal(districtAttr, null, 'elementSetAttributeNodeNullAssert');

    test.done();
  },

  /**
   *
   The "setAttributeNode(newAttr)" method raises an
   "WRONG_DOCUMENT_ERR DOMException if the "newAttr"
   was created from a different document than the one that
   created this document.

   Retrieve the last employee and attempt to set a new
   attribute node for its "employee" element.  The new
   attribute was created from a document other than the
   one that created this element, therefore a
   WRONG_DOCUMENT_ERR DOMException should be raised.

   This test uses the "createAttribute(newAttr)" method
   from the Document interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-887236154
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-887236154')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_elementwrongdocumenterr: function(test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    var newAttribute = doc2.createAttribute("newAttribute");
    var testAddress = doc1.getElementsByTagName("acronym").item(4);
    var success = false;
    try {
      testAddress.setAttributeNode(newAttribute);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 4);
    }
    test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    test.done();
  },

  /**
   *
   An attempt to add remove an entity should result in a NO_MODIFICATION_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1788794630
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D58B193
   */
  hc_entitiesremovenameditem1: function(test) {
    // NOTE: no tests get run here...
    test.done();
  },

  /**
   *
   An attempt to add an element to the named node map returned by entities should
   result in a NO_MODIFICATION_ERR or HIERARCHY_REQUEST_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1788794630
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   */
  hc_entitiessetnameditem1: function(test) {
    // NOTE: no tests get run here
    test.done();
  },

  /**
   *
   Create a NamedNodeMap object from the attributes of the
   last child of the third "p" element and traverse the
   list from index 0 thru length -1.  All indices should
   be valid.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6D0FB19E
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=250
   */
  hc_namednodemapchildnoderange: function(test) {
    var doc = hc_staff.hc_staff();
    var attributes = doc.getElementsByTagName("acronym").item(2).attributes;
    test.equal(attributes.length, 2, 'htmlLength');
    test.notEqual(attributes.item(0), null, 'attr0');
    test.notEqual(attributes.item(1), null, 'attr1');
    test.equal(attributes.item(3), null, 'attr3');
    test.done();
  },

  /**
   *
   Retrieve the second "p" element and create a NamedNodeMap
   listing of the attributes of the last child.  Once the
   list is created an invocation of the "getNamedItem(name)"
   method is done with name="title".  This should result
   in the title Attr node being returned.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1074577549
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   */
  hc_namednodemapgetnameditem: function(test) {
    var doc = hc_staff.hc_staff();
    var domesticAttr = doc.getElementsByTagName("acronym").item(1).attributes.getNamedItem("title");
    test.equal(domesticAttr.nodeName, 'title', 'attribute nodeName');
    test.done();
  },

  /**
   *
   The "setNamedItem(arg)" method raises a
   INUSE_ATTRIBUTE_ERR DOMException if "arg" is an
   Attr that is already in an attribute of another Element.

   Create a NamedNodeMap object from the attributes of the
   last child of the third employee and attempt to add
   an attribute that is already being used by the first
   employee.  This should raise the desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-1025163788')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_namednodemapinuseattributeerr: function(test) {
    var doc = hc_staff.hc_staff();
    var firstNode = doc.getElementsByTagName("acronym").item(0);
    var domesticAttr = doc.createAttribute("title");
    domesticAttr.value = "Yα";
    firstNode.setAttributeNode(domesticAttr);
    var attributes = doc.getElementsByTagName("acronym").item(2).attributes;
    var success = false;
    try {
      attributes.setNamedItem(domesticAttr);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 10);
    }
    test.ok(success, 'throw_INUSE_ATTRIBUTE_ERR');
    test.done();
  },

  /**
   *
   The "removeNamedItem(name)" method raises a
   NOT_FOUND_ERR DOMException if there is not a node
   named "strong" in the map.

   Create a NamedNodeMap object from the attributes of the
   last child of the third employee and attempt to remove
   the "lang" attribute.  There is not a node named
   "lang" in the list and therefore the desired
   exception should be raised.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D58B193
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-D58B193')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INUSE_ATTRIBUTE_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_namednodemapnotfounderr: function(test) {
    var doc = hc_staff.hc_staff();
    var attributes = doc.getElementsByTagName("acronym").item(2).attributes;
    var success = false;
    try {
      attributes.removeNamedItem("lang");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 8);
    }
    test.ok(success, 'throw_NOT_FOUND_ERR');
    test.done();
  },

  /**
   *
   Retrieve the second "p" element and evaluate Node.attributes.length.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6D0FB19E
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=250
   */
  hc_namednodemapnumberofnodes: function(test) {
    var doc = hc_staff.hc_staff();
    var attributes = doc.getElementsByTagName("acronym").item(2).attributes;
    test.equal(attributes.length, 2, 'htmlLength');
    test.done();
  },

  /**
   *
   The "removeNamedItem(name)" method removes a node
   specified by name.

   Retrieve the third employee and create a NamedNodeMap
   object of the attributes of the last child.  Once the
   list is created invoke the "removeNamedItem(name)"
   method with name="class".  This should result
   in the removal of the specified attribute.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D58B193
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Mar/0002.html
   */
  hc_namednodemapremovenameditem: function(test) {
    var success;
    var doc;
    var elementList;
    var newAttribute;
    var testAddress;
    var attributes;
    var streetAttr;
    var specified;
    var removedNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");

    testAddress = elementList.item(2);
    attributes = testAddress.attributes;

    removedNode = attributes.removeNamedItem("class");
    streetAttr = attributes.getNamedItem("class");
    test.equal(streetAttr, null, 'isnull');

    test.done();
  },

  /**
   *
   Retrieve the second p element and create a NamedNodeMap
   listing of the attributes of the last child.  Once the
   list is created an invocation of the "getNamedItem(name)"
   method is done with name="class".  This should result
   in the method returning an Attr node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1074577549
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1112119403
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   */
  hc_namednodemapreturnattrnode: function(test) {
    var doc = hc_staff.hc_staff();
    var streetAttr = doc.getElementsByTagName("acronym").item(1).attributes.getNamedItem("class");
    test.equal(streetAttr.nodeType, 2, 'typeAssert')
    test.equal(streetAttr.nodeName, 'class', 'attribute nodeName');
    test.equal(streetAttr.name, 'class', 'attribute name');
    test.done();
  },

  /**
   *
   The "item(index)" method returns the indexth item in
   the map(test for first item).

   Retrieve the second "acronym" get the NamedNodeMap of the attributes. Since the
   DOM does not specify an order of these nodes the contents
   of the FIRST node can contain either "title", "class" or "dir".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
   */
  hc_namednodemapreturnfirstitem: function(test) {
    var doc = hc_staff.hc_staff();
    var attributes = doc.getElementsByTagName("acronym").item(1).attributes;
    var actual = [];
    for(var i=0;i<attributes.length;i++) {
      actual.push(attributes.item(i).nodeName);
    }
    // assertEqualsCollection("attrName_html",toLowerArray(htmlExpected),toLowerArray(actual));
    test.deepEqual(actual, ['title', 'class'])
    test.done();
  },

  /**
   *
   The "item(index)" method returns the indexth item in
   the map(test for last item).

   Retrieve the second "acronym" and get the attribute name. Since the
   DOM does not specify an order of these nodes the contents
   of the LAST node can contain either "title" or "class".
   The test should return "true" if the LAST node is either
   of these values.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
   */
  hc_namednodemapreturnlastitem: function(test) {
    var doc = hc_staff.hc_staff();
    var attributes = doc.getElementsByTagName("acronym").item(1).attributes;
    var actual = [];
    for(var i=0;i<attributes.length;i++) {
      actual.push(attributes.item(i).nodeName);
    }
    test.deepEqual(actual, ['title', 'class'])
    test.done();
  },

  /**
   *
   The "getNamedItem(name)" method returns null of the
   specified name did not identify any node in the map.

   Retrieve the second employee and create a NamedNodeMap
   listing of the attributes of the last child.  Once the
   list is created an invocation of the "getNamedItem(name)"
   method is done with name="lang".  This name does not
   match any names in the list therefore the method should
   return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1074577549
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_namednodemapreturnnull: function(test) {
    var success;
    var doc;
    var elementList;
    var testEmployee;
    var attributes;
    var districtNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testEmployee = elementList.item(1);
    attributes = testEmployee.attributes;

    districtNode = attributes.getNamedItem("lang");
    test.equal(districtNode, null, 'langAttrNull');

    test.done();
  },

  /**
   *
   Retrieve the second "p" element and create a NamedNodeMap
   object from the attributes of the last child by
   invoking the "getAttributes()" method.  Once the
   list is created an invocation of the "setNamedItem(arg)"
   method is done with arg=newAttr, where newAttr is a
   new Attr Node previously created.  The "setNamedItem(arg)"
   method should add then new node to the NamedNodeItem
   object by using its "nodeName" attribute("lang').
   This node is then retrieved using the "getNamedItem(name)"
   method.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_namednodemapsetnameditem: function(test) {
    var doc = hc_staff.hc_staff();
    var testAddress = doc.getElementsByTagName("acronym").item(1);
    var newAttribute = doc.createAttribute("lang");
    var attributes = testAddress.attributes;
    attributes.setNamedItem(newAttribute);
    test.equal(attributes.getNamedItem("lang").nodeName, 'lang', 'attribute nodeName');
    test.done();
  },

  /**
   *
   If the "setNamedItem(arg)" method replaces an already
   existing node with the same name then the already
   existing node is returned.

   Retrieve the third employee and create a NamedNodeMap
   object from the attributes of the last child by
   invoking the "getAttributes()" method.  Once the
   list is created an invocation of the "setNamedItem(arg)"
   method is done with arg=newAttr, where newAttr is a
   new Attr Node previously created and whose node name
   already exists in the map.  The "setNamedItem(arg)"
   method should replace the already existing node with
   the new one and return the existing node.
   This test uses the "createAttribute(name)" method from
   the document interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   */
  hc_namednodemapsetnameditemreturnvalue: function(test) {
    var success;
    var doc;
    var elementList;
    var newAttribute;
    var testAddress;
    var attributes;
    var newNode;
    var attrValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddress = elementList.item(2);
    newAttribute = doc.createAttribute("class");
    attributes = testAddress.attributes;

    newNode = attributes.setNamedItem(newAttribute);
    test.notEqual(newNode, null, 'previousAttrNotNull');
    attrValue = newNode.nodeValue;

    test.equal(attrValue, "No", 'previousAttrValue');

    test.done();
  },

  /**
   *
   If the node to be added by the "setNamedItem(arg)" method
   already exists in the NamedNodeMap, it is replaced by
   the new one.

   Retrieve the second employee and create a NamedNodeMap
   object from the attributes of the last child by
   invoking the "getAttributes()" method.  Once the
   list is created an invocation of the "setNamedItem(arg)"
   method is done with arg=newAttr, where newAttr is a
   new Attr Node previously created and whose node name
   already exists in the map.  The "setNamedItem(arg)"
   method should replace the already existing node with
   the new one.
   This node is then retrieved using the "getNamedItem(name)"
   method.  This test uses the "createAttribute(name)"
   method from the document interface

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   */
  hc_namednodemapsetnameditemthatexists: function(test) {
    var success;
    var doc;
    var elementList;
    var newAttribute;
    var testAddress;
    var attributes;
    var districtNode;
    var attrValue;
    var setNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddress = elementList.item(1);
    newAttribute = doc.createAttribute("class");
    attributes = testAddress.attributes;

    setNode = attributes.setNamedItem(newAttribute);
    districtNode = attributes.getNamedItem("class");
    attrValue = districtNode.nodeValue;

    test.equal(attrValue, "", 'namednodemapSetNamedItemThatExistsAssert');

    test.done();
  },

  /**
   *
   If the "setNamedItem(arg)" method does not replace an
   existing node with the same name then it returns null.

   Retrieve the third employee and create a NamedNodeMap
   object from the attributes of the last child.
   Once the list is created the "setNamedItem(arg)" method
   is invoked with arg=newAttr, where newAttr is a
   newly created Attr Node and whose node name
   already exists in the map.  The "setNamedItem(arg)"
   method should add the new node and return null.
   This test uses the "createAttribute(name)" method from
   the document interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-349467F9
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=243
   */
  hc_namednodemapsetnameditemwithnewvalue: function(test) {
    var success;
    var doc;
    var elementList;
    var newAttribute;
    var testAddress;
    var attributes;
    var newNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddress = elementList.item(2);
    newAttribute = doc.createAttribute("lang");
    attributes = testAddress.attributes;

    newNode = attributes.setNamedItem(newAttribute);
    test.equal(newNode, null, 'prevValueNull');

    test.done();
  },

  /**
   *
   The "setNamedItem(arg)" method raises a
   WRONG_DOCUMENT_ERR DOMException if "arg" was created
   from a different document than the one that created
   the NamedNodeMap.

   Create a NamedNodeMap object from the attributes of the
   last child of the third employee and attempt to add
   another Attr node to it that was created from a
   different DOM document.  This should raise the desired
   exception.  This method uses the "createAttribute(name)"
   method from the Document interface.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-1025163788')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_namednodemapwrongdocumenterr: function(test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    var attributes = doc1.getElementsByTagName("acronym").item(2).attributes;
    var newAttribute = doc2.createAttribute("newAttribute");
    var success = false;
    try {
      attributes.setNamedItem(newAttribute);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 4);
    }
    test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    test.done();
  },

  /**
   *
   Retrieve the second "p" and append a "br" Element
   node to the list of children.   The last node in the list
   is then retrieved and its NodeName examined.   The
   "getNodeName()" method should return "br".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeappendchild: function(test) {
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var createdNode = doc.createElement("br");
    employeeNode.appendChild(createdNode);
    var lchild = employeeNode.lastChild;
    test.equal(lchild.nodeName, 'BR', 'element nodeName');
    test.done();
  },

  /**
   *
   If the "newChild" is already in the tree, it is first
   removed before the new one is appended.

   Retrieve the "em" second employee and
   append the first child to the end of the list.   After
   the "appendChild(newChild)" method is invoked the first
   child should be the one that was second and the last
   child should be the one that was first.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodeappendchildchildexists: function(test) {
    var expected = ["STRONG", "CODE", "SUP", "VAR", "ACRONYM", "EM"];
    var doc = hc_staff.hc_staff();
    var childNode = doc.getElementsByTagName("p").item(1);
    var childList = childNode.getElementsByTagName("*");
    childNode.appendChild(childList.item(0));
    var actual = [];
    for(var i=0;i<childList.length;i++) {
      actual.push(childList.item(i).nodeName);
    }
    test.deepEqual(actual, expected, 'element liveByTagName');
    childList = childNode.childNodes;
    var refreshedActual = [];
    for(var i=0;i<childList.length;i++) {
      if (1 == childList.item(i).nodeType) {
        refreshedActual.push(childList.item(i).nodeName);
      }
    }
    test.deepEqual(refreshedActual, expected, 'element refreshedChildNodes');
    test.done();
  },

  /**
   *
   If the "newChild" is a DocumentFragment object then
   all its content is added to the child list of this node.

   Create and populate a new DocumentFragment object and
   append it to the second employee.   After the
   "appendChild(newChild)" method is invoked retrieve the
   new nodes at the end of the list, they should be the
   two Element nodes from the DocumentFragment.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeappendchilddocfragment: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var childList;
    var newdocFragment;
    var newChild1;
    var newChild2;
    var child;
    var childName;
    var result = new Array();

    var appendedChild;
    var nodeType;
    expected = ["EM", "STRONG", "CODE", "SUP", "VAR", "ACRONYM", "BR", "B"];

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    childList = employeeNode.childNodes;

    newdocFragment = doc.createDocumentFragment();
    newChild1 = doc.createElement("br");
    newChild2 = doc.createElement("b");
    appendedChild = newdocFragment.appendChild(newChild1);
    appendedChild = newdocFragment.appendChild(newChild2);
    appendedChild = employeeNode.appendChild(newdocFragment);
    for(var indexN100A2 = 0;indexN100A2 < childList.length; indexN100A2++) {
      child = childList.item(indexN100A2);
      nodeType = child.nodeType;


      if(
        (1 == nodeType)
      ) {
        childName = child.nodeName;

        result[result.length] = childName;

      }

    }
    test.deepEqual(result, expected, 'element nodeNames');

    test.done();
  },

  /**
   *
   The "appendChild(newChild)" method returns the node
   added.

   Append a newly created node to the child list of the
   second employee and check the NodeName returned.   The
   "getNodeName()" method should return "br".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeappendchildgetnodename: function(test) {
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var newChild = doc.createElement("br");
    var appendNode = employeeNode.appendChild(newChild);
    test.equal(appendNode.nodeName, 'BR', 'element nodeName');
    test.done();
  },

  /**
   *
   The "appendChild(newChild)" method raises a
   HIERARCHY_REQUEST_ERR DOMException if this node is of
   a type that does not allow children of the type "newChild"
   to be inserted.

   Retrieve the root node and attempt to append a newly
   created Attr node.   An Element node cannot have children
   of the "Attr" type, therefore the desired exception
   should be raised.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-184E7107')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_nodeappendchildinvalidnodetype: function(test) {
    var doc = hc_staff.hc_staff();
    var rootNode = doc.documentElement;
    var newChild = doc.createAttribute("newAttribute");
    var success = false;
    try {
      rootNode.appendChild(newChild);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 3);
    }
    test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    test.done();
  },

  /**
   *
   The "appendChild(newChild)" method raises a
   WRONG_DOCUMENT_ERR DOMException if the "newChild" was
   created from a different document than the one that
   created this node.

   Retrieve the second employee and attempt to append
   a node created from a different document.   An attempt
   to make such a replacement should raise the desired
   exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-184E7107')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeappendchildnewchilddiffdocument: function(test) {
    doc1 = hc_staff.hc_staff();
    doc2 = hc_staff.hc_staff();
    var newChild = doc1.createElement("br");
    var elementNode = doc2.getElementsByTagName("p").item(1);
    var success = false;
    try {
      elementNode.appendChild(newChild);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 4);
    }
    test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    test.done();
  },

  /**
   *
   The "appendChild(newChild)" method raises a
   HIERARCHY_REQUEST_ERR DOMException if the node to
   append is one of this node's ancestors.

   Retrieve the second employee and attempt to append
   an ancestor node(root node) to it.
   An attempt to make such an addition should raise the
   desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-184E7107')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   */
  hc_nodeappendchildnodeancestor: function(test) {
    var doc = hc_staff.hc_staff();
    var newChild = doc.documentElement;
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var success = false;
    try {
      employeeNode.appendChild(newChild);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 3);
    }
    test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    test.done();
  },

  /**
   *
   The "getAttributes()" method invoked on an Attribute
   Node returns null.

   Retrieve the first attribute from the last child of the
   first employee and invoke the "getAttributes()" method
   on the Attribute Node.  It should return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-637646024
   */
  hc_nodeattributenodeattribute: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddr;
    var addrAttr;
    var attrNode;
    var attrList;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddr = elementList.item(0);
    addrAttr = testAddr.attributes;

    attrNode = addrAttr.item(0);
    attrList = attrNode.attributes;

    test.equal(attrList, null, 'nodeAttributeNodeAttributeAssert1');

    test.done();
  },

  /**
   *
   Retrieve the Attribute named "title" from the last
   child of the first p element and check the string returned
   by the "getNodeName()" method.   It should be equal to
   "title".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   */
  hc_nodeattributenodename: function(test) {
    var doc = hc_staff.hc_staff();
    var addrAttr = doc.getElementsByTagName("acronym").item(0).getAttributeNode("title");
    test.equal(addrAttr.nodeName, 'title', 'attribute nodeName');
    test.done();
  },

  /**
   *

   The "getNodeType()" method for an Attribute Node

   returns the constant value 2.



   Retrieve the first attribute from the last child of

   the first employee and invoke the "getNodeType()"

   method.   The method should return 2.


   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
   */
  hc_nodeattributenodetype: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddr;
    var addrAttr;
    var nodeType;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddr = elementList.item(0);
    addrAttr = testAddr.getAttributeNode("title");
    nodeType = addrAttr.nodeType;

    test.equal(nodeType, 2, 'nodeAttrNodeTypeAssert1');

    test.done();
  },

  /**
   *

   The string returned by the "getNodeValue()" method for an
   Attribute Node is the value of the Attribute.

   Retrieve the Attribute named "title" from the last
   child of the first "p" and check the string returned
   by the "getNodeValue()" method.   It should be equal to
   "Yes".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   */
  hc_nodeattributenodevalue: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddr;
    var addrAttr;
    var attrValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddr = elementList.item(0);
    addrAttr = testAddr.getAttributeNode("title");
    attrValue = addrAttr.nodeValue;

    test.equal(attrValue, "Yes", 'nodeValue');

    test.done();
  },

  /**
   *

   The "getChildNodes()" method returns a NodeList
   that contains all children of this node.

   Retrieve the second employee and check the NodeList
   returned by the "getChildNodes()" method.   The
   length of the list should be 13.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodechildnodes: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var childNode;
    var childNodes;
    var nodeType;
    var childName;
    var actual = new Array();

    expected = ["EM", "STRONG", "CODE", "SUP", "VAR", "ACRONYM"];

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    childNodes = employeeNode.childNodes;

    for(var indexN1006C = 0;indexN1006C < childNodes.length; indexN1006C++) {
      childNode = childNodes.item(indexN1006C);
      nodeType = childNode.nodeType;

      childName = childNode.nodeName;


      if(
        (1 == nodeType)
      ) {
        actual[actual.length] = childName;

      }

      else {
        test.equal(nodeType, 3, 'textNodeType');

      }

    }
    test.deepEqual(actual, expected, 'element elementNames');

    test.done();
  },

  /**
   *
   The NodeList returned by the "getChildNodes()" method
   is live.   Changes on the node's children are immediately
   reflected on the nodes returned in the NodeList.

   Create a NodeList of the children of the second employee
   and then add a newly created element that was created
   by the "createElement()" method(Document Interface) to
   the second employee by using the "appendChild()" method.
   The length of the NodeList should reflect this new
   addition to the child list.   It should return the value 14.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-184E7107
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodechildnodesappendchild: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var childList;
    var createdNode;
    var childNode;
    var childName;
    var childType;
    var textNode;
    var actual = new Array();

    expected = ["EM", "STRONG", "CODE", "SUP", "VAR", "ACRONYM", "BR"];

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    childList = employeeNode.childNodes;

    createdNode = doc.createElement("br");
    employeeNode = employeeNode.appendChild(createdNode);
    for(var indexN10087 = 0;indexN10087 < childList.length; indexN10087++) {
      childNode = childList.item(indexN10087);
      childName = childNode.nodeName;

      childType = childNode.nodeType;


      if(
        (1 == childType)
      ) {
        actual[actual.length] = childName;

      }

      else {
        test.equal(childType, 3, 'textNodeType');

      }

    }
    test.deepEqual(actual, expected, 'element childElements');

    test.done();
  },

  /**
   *
   The "getChildNodes()" method returns a NodeList
   that contains all children of this node.   If there
   are not any children, this is a NodeList that does not
   contain any nodes.

   Retrieve the character data of the second "em" node and
   invoke the "getChildNodes()" method.   The
   NodeList returned should not have any nodes.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodechildnodesempty: function(test) {
    var success;
    var doc;
    var elementList;
    var childList;
    var employeeNode;
    var textNode;
    var length;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("em");
    employeeNode = elementList.item(1);
    textNode = employeeNode.firstChild;

    childList = textNode.childNodes;

    length = childList.length;

    test.equal(length, 0, 'length_zero');

    test.done();
  },

  /**
   *
   Retrieve the second acronym element and invoke
   the cloneNode method.   The
   duplicate node returned by the method should copy the
   attributes associated with this node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
   */
  hc_nodecloneattributescopied: function(test) {
    var doc = hc_staff.hc_staff();
    var attributes = doc.getElementsByTagName("acronym").item(1).cloneNode(false).attributes;
    var actual = [];
    for(var i=0;i<attributes.length;i++) {
      actual.push(attributes.item(i).nodeName);
    }
    test.deepEqual(actual, ['title', 'class'])
    test.done();
  },

  /**
   *
   The "cloneNode(deep)" method does not copy text unless it
   is deep cloned.(Test for deep=false)

   Retrieve the fourth child of the second employee and
   the "cloneNode(deep)" method with deep=false.   The
   duplicate node returned by the method should not copy
   any text data contained in this node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
   */
  hc_nodeclonefalsenocopytext: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var childList;
    var childNode;
    var clonedNode;
    var lastChildNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    childList = employeeNode.childNodes;

    childNode = childList.item(3);
    clonedNode = childNode.cloneNode(false);
    lastChildNode = clonedNode.lastChild;

    test.equal(lastChildNode, null, 'nodeCloneFalseNoCopyTextAssert1');

    test.done();
  },

  /**
   *
   The duplicate node returned by the "cloneNode(deep)"
   method does not have a ParentNode.

   Retrieve the second employee and invoke the
   "cloneNode(deep)" method with deep=false.   The
   duplicate node returned should return null when the
   "getParentNode()" is invoked.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
   */
  hc_nodeclonegetparentnull: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var clonedNode;
    var parentNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    clonedNode = employeeNode.cloneNode(false);
    parentNode = clonedNode.parentNode;

    test.equal(parentNode, null, 'nodeCloneGetParentNullAssert1');

    test.done();
  },

  /**
   *
   The "cloneNode(deep)" method returns a copy of the node
   only if deep=false.

   Retrieve the second employee and invoke the
   "cloneNode(deep)" method with deep=false.   The
   method should only clone this node.   The NodeName and
   length of the NodeList are checked.   The "getNodeName()"
   method should return "employee" and the "getLength()"
   method should return 0.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
   */
  hc_nodeclonenodefalse: function(test) {
    var doc = hc_staff.hc_staff();
    var clonedNode = doc.getElementsByTagName("p").item(1).cloneNode(false);
    test.equal(clonedNode.nodeName, 'P', 'element strong');
    test.equal(clonedNode.childNodes.length, 0, 'length');
    test.done();
  },

  /**
   *
   The "cloneNode(deep)" method returns a copy of the node
   and the subtree under it if deep=true.

   Retrieve the second employee and invoke the
   "cloneNode(deep)" method with deep=true.   The
   method should clone this node and the subtree under it.
   The NodeName of each child in the returned node is
   checked to insure the entire subtree under the second
   employee was cloned.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodeclonenodetrue: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var clonedNode;
    var clonedList;
    var clonedChild;
    var clonedChildName;
    var origList;
    var origChild;
    var origChildName;
    var result = new Array();

    var expected = new Array();


    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    origList = employeeNode.childNodes;

    for(var indexN10065 = 0;indexN10065 < origList.length; indexN10065++) {
      origChild = origList.item(indexN10065);
      origChildName = origChild.nodeName;

      expected[expected.length] = origChildName;

    }
    clonedNode = employeeNode.cloneNode(true);
    clonedList = clonedNode.childNodes;

    for(var indexN1007B = 0;indexN1007B < clonedList.length; indexN1007B++) {
      clonedChild = clonedList.item(indexN1007B);
      clonedChildName = clonedChild.nodeName;

      result[result.length] = clonedChildName;

    }
    test.deepEqual(result, expected, 'clone');

    test.done();
  },

  /**
   *
   The "cloneNode(deep)" method does not copy text unless it
   is deep cloned.(Test for deep=true)

   Retrieve the eighth child of the second employee and
   the "cloneNode(deep)" method with deep=true.   The
   duplicate node returned by the method should copy
   any text data contained in this node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-3A0ED0A4
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodeclonetruecopytext: function(test) {
    var success;
    var doc;
    var elementList;
    var childNode;
    var clonedNode;
    var lastChildNode;
    var childValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("sup");
    childNode = elementList.item(1);
    clonedNode = childNode.cloneNode(true);
    lastChildNode = clonedNode.lastChild;

    childValue = lastChildNode.nodeValue;

    test.equal(childValue, "35,000", 'cloneContainsText');

    test.done();
  },

  /**
   *
   The "getAttributes()" method invoked on a Comment
   Node returns null.

   Find any comment that is an immediate child of the root
   and assert that Node.attributes is null.  Then create
   a new comment node (in case they had been omitted) and
   make the assertion.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=263
   */
  hc_nodecommentnodeattributes: function(test) {
    var success;
    var doc;
    var commentNode;
    var nodeList;
    var attrList;
    var nodeType;

    doc = hc_staff.hc_staff();
    nodeList = doc.childNodes;

    for(var indexN10043 = 0;indexN10043 < nodeList.length; indexN10043++) {
      commentNode = nodeList.item(indexN10043);
      nodeType = commentNode.nodeType;


      if(
        (8 == nodeType)
      ) {
        attrList = commentNode.attributes;

        test.equal(attrList, null, 'existingCommentAttributesNull');

      }

    }
    commentNode = doc.createComment("This is a comment");
    attrList = commentNode.attributes;

    test.equal(attrList, null, 'createdCommentAttributesNull');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeName()" method for a
   Comment Node is "#comment".

   Retrieve the Comment node in the XML file
   and check the string returned by the "getNodeName()"
   method.   It should be equal to "#comment".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
   */
  hc_nodecommentnodename: function(test) {
    var success;
    var doc;
    var elementList;
    var commentNode;
    var nodeType;
    var commentName;
    var commentNodeName;

    doc = hc_staff.hc_staff();
    elementList = doc.childNodes;

    for(var indexN10044 = 0;indexN10044 < elementList.length; indexN10044++) {
      commentNode = elementList.item(indexN10044);
      nodeType = commentNode.nodeType;


      if(
        (8 == nodeType)
      ) {
        commentNodeName = commentNode.nodeName;

        test.equal(commentNodeName, "#comment", 'existingNodeName');

      }

    }
    commentNode = doc.createComment("This is a comment");
    commentNodeName = commentNode.nodeName;

    test.equal(commentNodeName, "#comment", 'createdNodeName');

    test.done();
  },

  /**
   *
   The "getNodeType()" method for a Comment Node
   returns the constant value 8.

   Retrieve the nodes from the document and check for
   a comment node and invoke the "getNodeType()" method.   This should
   return 8.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
   */
  hc_nodecommentnodetype: function(test) {
    var success;
    var doc;
    var testList;
    var commentNode;
    var commentNodeName;
    var nodeType;

    doc = hc_staff.hc_staff();
    testList = doc.childNodes;

    for(var indexN10040 = 0;indexN10040 < testList.length; indexN10040++) {
      commentNode = testList.item(indexN10040);
      commentNodeName = commentNode.nodeName;


      if(
        ("#comment" == commentNodeName)
      ) {
        nodeType = commentNode.nodeType;

        test.equal(nodeType, 8, 'existingCommentNodeType');

      }

    }
    commentNode = doc.createComment("This is a comment");
    nodeType = commentNode.nodeType;

    test.equal(nodeType, 8, 'createdCommentNodeType');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeValue()" method for a
   Comment Node is the content of the comment.

   Retrieve the comment in the XML file and
   check the string returned by the "getNodeValue()" method.
   It should be equal to "This is comment number 1".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=248
   */
  hc_nodecommentnodevalue: function(test) {
    var success;
    var doc;
    var elementList;
    var commentNode;
    var commentName;
    var commentValue;

    doc = hc_staff.hc_staff();
    elementList = doc.childNodes;

    for(var indexN10040 = 0;indexN10040 < elementList.length; indexN10040++) {
      commentNode = elementList.item(indexN10040);
      commentName = commentNode.nodeName;


      if(
        ("#comment" == commentName)
      ) {
        commentValue = commentNode.nodeValue;

        test.equal(commentValue, " This is comment number 1.", 'value');

      }

    }
    commentNode = doc.createComment(" This is a comment");
    commentValue = commentNode.nodeValue;

    test.equal(commentValue, " This is a comment", 'createdCommentNodeValue');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeName()" method for a
   DocumentFragment Node is "#document-frament".

   Retrieve the DOM document and invoke the
   "createDocumentFragment()" method and check the string
   returned by the "getNodeName()" method.   It should be
   equal to "#document-fragment".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
   */
  hc_nodedocumentfragmentnodename: function(test) {
    var doc = hc_staff.hc_staff();
    var docFragment = doc.createDocumentFragment();
    test.equal(docFragment.nodeName, "#document-fragment", 'nodeDocumentFragmentNodeNameAssert1');
    test.done();
  },

  /**
   *
   The "getNodeType()" method for a DocumentFragment Node
   returns the constant value 11.

   Invoke the "createDocumentFragment()" method and
   examine the NodeType of the document fragment
   returned by the "getNodeType()" method.   The method
   should return 11.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
   */
  hc_nodedocumentfragmentnodetype: function(test) {
    var success;
    var doc;
    var documentFragmentNode;
    var nodeType;

    doc = hc_staff.hc_staff();
    documentFragmentNode = doc.createDocumentFragment();
    nodeType = documentFragmentNode.nodeType;

    test.equal(nodeType, 11, 'nodeDocumentFragmentNodeTypeAssert1');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeValue()" method for a
   DocumentFragment Node is null.

   Retrieve the DOM document and invoke the
   "createDocumentFragment()" method and check the string
   returned by the "getNodeValue()" method.   It should be
   equal to null.

   * @author Curt Arnold
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   */
  hc_nodedocumentfragmentnodevalue: function(test) {
    var success;
    var doc;
    var docFragment;
    var attrList;
    var value;

    doc = hc_staff.hc_staff();
    docFragment = doc.createDocumentFragment();
    attrList = docFragment.attributes;

    test.equal(attrList, null, 'attributesNull');
    value = docFragment.nodeValue;

    test.equal(value, null, 'initiallyNull');

    test.done();
  },

  /**
   *
   The "getAttributes()" method invoked on a Document
   Node returns null.

   Retrieve the DOM Document and invoke the
   "getAttributes()" method on the Document Node.
   It should return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
   */
  hc_nodedocumentnodeattribute: function(test) {
    var success;
    var doc;
    var attrList;

    doc = hc_staff.hc_staff();
    attrList = doc.attributes;

    test.equal(attrList, null, 'doc_attributes_is_null');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeName()" method for a
   Document Node is "#document".

   Retrieve the DOM document and check the string returned
   by the "getNodeName()" method.   It should be equal to
   "#document".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   */
  hc_nodedocumentnodename: function(test) {
    var success;
    var doc;
    var documentName;

    doc = hc_staff.hc_staff();
    documentName = doc.nodeName;

    test.equal(documentName, "#document", 'documentNodeName');

    test.done();
  },

  /**
   *
   The "getNodeType()" method for a Document Node
   returns the constant value 9.

   Retrieve the document and invoke the "getNodeType()"
   method.   The method should return 9.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
   */
  hc_nodedocumentnodetype: function(test) {
    var success;
    var doc;
    var nodeType;

    doc = hc_staff.hc_staff();
    nodeType = doc.nodeType;

    test.equal(nodeType, 9, 'nodeDocumentNodeTypeAssert1');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeValue()" method for a
   Document Node is null.

   Retrieve the DOM Document and check the string returned
   by the "getNodeValue()" method.   It should be equal to
   null.


   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   */
  hc_nodedocumentnodevalue: function(test) {
    var success;
    var doc;
    var documentValue;

    doc = hc_staff.hc_staff();
    documentValue = doc.nodeValue;

    test.equal(documentValue, null, 'documentNodeValue');

    test.done();
  },

  /**
   *
   Retrieve the third "acronym" element and evaluate Node.attributes.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=236
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2003Jun/0011.html
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=184
   */
  hc_nodeelementnodeattributes: function(test) {
    var doc = hc_staff.hc_staff();
    var attributes = doc.getElementsByTagName("acronym").item(2).attributes;
    var actual = [];
    for(var i=0;i<attributes.length;i++) {
      actual.push(attributes.item(i).nodeName);
    }
    test.deepEqual(actual, ['title', 'class'])
    test.done();
  },

  /**
   *
   Retrieve the first Element Node(Root Node) of the
   DOM object and check the string returned by the
   "getNodeName()" method.   It should be equal to its
   tagName.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
   */
  hc_nodeelementnodename: function(test) {
    var doc = hc_staff.hc_staff();
    test.equal(doc.documentElement.nodeName, 'HTML')
    test.done();
  },

  /**
   *
   The "getNodeType()" method for an Element Node
   returns the constant value 1.

   Retrieve the root node and invoke the "getNodeType()"
   method.   The method should return 1.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
   */
  hc_nodeelementnodetype: function(test) {
    var success;
    var doc;
    var rootNode;
    var nodeType;

    doc = hc_staff.hc_staff();
    rootNode = doc.documentElement;

    nodeType = rootNode.nodeType;

    test.equal(nodeType, 1, 'nodeElementNodeTypeAssert1');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeValue()" method for an
   Element Node is null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   */
  hc_nodeelementnodevalue: function(test) {
    var success;
    var doc;
    var elementNode;
    var elementValue;

    doc = hc_staff.hc_staff();
    elementNode = doc.documentElement;

    elementValue = elementNode.nodeValue;

    test.equal(elementValue, null, 'elementNodeValue');

    test.done();
  },

  /**
   *
   The "getFirstChild()" method returns the first child
   of this node.

   Retrieve the second employee and invoke the
   "getFirstChild()" method.   The NodeName returned
   should be "#text" or "EM".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-169727388
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodegetfirstchild: function(test) {
    var doc = hc_staff.hc_staff();
    var fchildNode = doc.getElementsByTagName("p").item(1).firstChild;
    test.equal(fchildNode.nodeName, "#text", 'firstChild_w_whitespace');
    test.done();
  },

  /**
   *
   If there is not a first child then the "getFirstChild()"
   method returns null.

   Retrieve the text of the first "em" element and invoke the "getFirstChild()" method.   It
   should return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-169727388
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodegetfirstchildnull: function(test) {
    var doc = hc_staff.hc_staff();
    emText = doc.getElementsByTagName("em").item(0).firstChild;
    test.equal(emText.firstChild, null, 'nullChild');
    test.done();
  },

  /**
   *
   The "getLastChild()" method returns the last child
   of this node.

   Retrieve the second employee and invoke the
   "getLastChild()" method.   The NodeName returned
   should be "#text".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
   */
  hc_nodegetlastchild: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var lchildNode;
    var childName;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    lchildNode = employeeNode.lastChild;

    childName = lchildNode.nodeName;

    test.equal(childName, "#text", 'whitespace');

    test.done();
  },

  /**
   *

   If there is not a last child then the "getLastChild()"
   method returns null.

   Retrieve the text of the first "em" element and invoke the "getFirstChild()" method.   It
   should return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-61AD09FB
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodegetlastchildnull: function(test) {
    var success;
    var doc;
    var emList;
    var emNode;
    var emText;
    var nullChild;

    doc = hc_staff.hc_staff();
    emList = doc.getElementsByTagName("em");
    emNode = emList.item(0);
    emText = emNode.firstChild;

    nullChild = emText.lastChild;

    test.equal(nullChild, null, 'nullChild');

    test.done();
  },

  /**
   *
   The "getNextSibling()" method returns the node immediately
   following this node.

   Retrieve the first child of the second employee and
   invoke the "getNextSibling()" method.   It should return
   a node with the NodeName of "#text".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
   */
  hc_nodegetnextsibling: function(test) {
    var success;
    var doc;
    var elementList;
    var emNode;
    var nsNode;
    var nsName;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("em");
    emNode = elementList.item(1);
    nsNode = emNode.nextSibling;

    nsName = nsNode.nodeName;

    test.equal(nsName, "#text", 'whitespace');

    test.done();
  },

  /**
   *

   If there is not a node immediately following this node the

   "getNextSibling()" method returns null.



   Retrieve the first child of the second employee and

   invoke the "getNextSibling()" method.   It should

   be set to null.


   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-6AC54C2F
   */
  hc_nodegetnextsiblingnull: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var lcNode;
    var nsNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    lcNode = employeeNode.lastChild;

    nsNode = lcNode.nextSibling;

    test.equal(nsNode, null, 'nodeGetNextSiblingNullAssert1');

    test.done();
  },

  /**
   *
   Evaluate Node.ownerDocument on the second "p" element.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#node-ownerDoc
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=251
   */
  hc_nodegetownerdocument: function(test) {
    var doc = hc_staff.hc_staff();
    var elementName = doc.getElementsByTagName("p").item(1).ownerDocument.documentElement.nodeName;
    test.equal(elementName, 'HTML')
    test.done();
  },

  /**
   *

   The "getOwnerDocument()" method returns null if the target

   node itself is a document.



   Invoke the "getOwnerDocument()" method on the master

   document.   The Document returned should be null.


   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#node-ownerDoc
   */
  hc_nodegetownerdocumentnull: function(test) {
    var success;
    var doc;
    var ownerDocument;

    doc = hc_staff.hc_staff();
    ownerDocument = doc.ownerDocument;

    test.equal(ownerDocument, null, 'nodeGetOwnerDocumentNullAssert1');

    test.done();
  },

  /**
   *
   The "getPreviousSibling()" method returns the node
   immediately preceding this node.

   Retrieve the second child of the second employee and
   invoke the "getPreviousSibling()" method.   It should
   return a node with a NodeName of "#text".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-640FB3C8
   */
  hc_nodegetprevioussibling: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var psNode;
    var psName;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(1);
    psNode = nameNode.previousSibling;

    psName = psNode.nodeName;

    test.equal(psName, "#text", 'whitespace');

    test.done();
  },

  /**
   *

   If there is not a node immediately preceding this node the

   "getPreviousSibling()" method returns null.



   Retrieve the first child of the second employee and

   invoke the "getPreviousSibling()" method.   It should

   be set to null.


   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-640FB3C8
   */
  hc_nodegetprevioussiblingnull: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var fcNode;
    var psNode;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(2);
    fcNode = employeeNode.firstChild;

    psNode = fcNode.previousSibling;

    test.equal(psNode, null, 'nodeGetPreviousSiblingNullAssert1');

    test.done();
  },

  /**
   *
   The "hasChildNodes()" method returns true if the node
   has children.

   Retrieve the root node("staff") and invoke the
   "hasChildNodes()" method.   It should return the boolean
   value "true".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-810594187
   */
  hc_nodehaschildnodes: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var state;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    state = employeeNode.hasChildNodes();
    test.ok(state, 'nodeHasChildAssert1');

    test.done();
  },

  /**
   *
   The "hasChildNodes()" method returns false if the node
   does not have any children.

   Retrieve the text of the first "em" element and invoke the "hasChildNodes()" method.   It
   should return false.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-810594187
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodehaschildnodesfalse: function(test) {
    var success;
    var doc;
    var emList;
    var emNode;
    var emText;
    var hasChild;

    doc = hc_staff.hc_staff();
    emList = doc.getElementsByTagName("em");
    emNode = emList.item(0);
    emText = emNode.firstChild;
    hasChild = emText.hasChildNodes();
    test.equal(hasChild, false, 'hasChild');
    test.done();
  },

  /**
   *
   The "insertBefore(newChild,refChild)" method inserts the
   node "newChild" before the node "refChild".

   Insert a newly created Element node before the second
   sup element in the document and check the "newChild"
   and "refChild" after insertion for correct placement.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=261
   */
  hc_nodeinsertbefore: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var childList;
    var refChild;
    var newChild;
    var child;
    var childName;
    var insertedNode;
    var actual = new Array();

    expected = ["EM", "STRONG", "CODE", "BR", "SUP", "VAR", "ACRONYM"];
    var nodeType;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("sup");
    refChild = elementList.item(2);
    employeeNode = refChild.parentNode;

    childList = employeeNode.childNodes;

    newChild = doc.createElement("br");
    insertedNode = employeeNode.insertBefore(newChild,refChild);
    for(var indexN10091 = 0;indexN10091 < childList.length; indexN10091++) {
      child = childList.item(indexN10091);
      nodeType = child.nodeType;


      if(
        (1 == nodeType)
      ) {
        childName = child.nodeName;

        actual[actual.length] = childName;

      }

    }
    test.deepEqual(actual, expected, 'element nodeNames');

    test.done();
  },

  /**
   *
   If the "newChild" is a DocumentFragment object then all
   its children are inserted in the same order before the
   the "refChild".

   Create a DocumentFragment object and populate it with
   two Element nodes.   Retrieve the second employee and
   insert the newly created DocumentFragment before its
   fourth child.   The second employee should now have two
   extra children("newChild1" and "newChild2") at
   positions fourth and fifth respectively.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeinsertbeforedocfragment: function(test) {
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    refChild = employeeNode.childNodes.item(3);
    var newdocFragment = doc.createDocumentFragment();
    newdocFragment.appendChild(doc.createElement("br"));
    newdocFragment.appendChild(doc.createElement("b"));
    employeeNode.insertBefore(newdocFragment,refChild);
    test.equal(employeeNode.childNodes.item(3).nodeName, 'BR', 'element childName3');
    test.equal(employeeNode.childNodes.item(4).nodeName, 'B', 'element childName4');
    test.done();
  },

  /**
   *
   The "insertBefore(newChild,refChild)" method raises a
   HIERARCHY_REQUEST_ERR DOMException if this node is of
   a type that does not allow children of the type "newChild"
   to be inserted.

   Retrieve the root node and attempt to insert a newly
   created Attr node.   An Element node cannot have children
   of the "Attr" type, therefore the desired exception
   should be raised.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=406
   */
  hc_nodeinsertbeforeinvalidnodetype: function(test) {
    var doc = hc_staff.hc_staff();
    var newChild = doc.createAttribute("title");
    var refChild = doc.getElementsByTagName("p").item(1);
    var rootNode = refChild.parentNode;
    var success = false;
    try {
      rootNode.insertBefore(newChild,refChild);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 3);
    }
    test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    test.done();
  },

  /**
   *
   The "insertBefore(newChild,refChild)" method raises a
   WRONG_DOCUMENT_ERR DOMException if the "newChild" was
   created from a different document than the one that
   created this node.

   Retrieve the second employee and attempt to insert a new
   child that was created from a different document than the
   one that created the second employee.   An attempt to
   insert such a child should raise the desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='WRONG_DOCUMENT_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeinsertbeforenewchilddiffdocument: function(test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    var newChild = doc1.createElement("br");
    var elementNode = doc2.getElementsByTagName("p").item(1);
    var refChild = elementNode.firstChild;
    var success = false;
    try {
      elementNode.insertBefore(newChild,refChild);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 4);
    }
    test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    test.done();
  },

  /**
   *
   If the "newChild" is already in the tree, the
   "insertBefore(newChild,refChild)" method must first
   remove it before the insertion takes place.

   Insert a node Element ("em") that is already
   present in the tree.   The existing node should be
   removed first and the new one inserted.   The node is
   inserted at a different position in the tree to assure
   that it was indeed inserted.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodeinsertbeforenewchildexists: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var childList;
    var refChild;
    var newChild;
    var child;
    var childName;
    var insertedNode;
    expected = ["STRONG", "CODE", "SUP", "VAR", "EM", "ACRONYM"];
    var result = new Array();

    var nodeType;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    childList = employeeNode.getElementsByTagName("*");
    refChild = childList.item(5);
    newChild = childList.item(0);
    insertedNode = employeeNode.insertBefore(newChild,refChild);
    for(var indexN1008C = 0;indexN1008C < childList.length; indexN1008C++) {
      child = childList.item(indexN1008C);
      nodeType = child.nodeType;


      if(
        (1 == nodeType)
      ) {
        childName = child.nodeName;

        result[result.length] = childName;

      }

    }
    test.deepEqual(result, expected, 'element childNames');

    test.done();
  },

  /**
   *
   The "insertBefore(newChild,refChild)" method raises a
   HIERARCHY_REQUEST_ERR DOMException if the node to be
   inserted is one of this nodes ancestors.

   Retrieve the second employee and attempt to insert a
   node that is one of its ancestors(root node).   An
   attempt to insert such a node should raise the
   desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   */
  hc_nodeinsertbeforenodeancestor: function(test) {
    var doc = hc_staff.hc_staff();
    var newChild = doc.documentElement;
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var refChild = employeeNode.childNodes.item(0);
    var success = false;
    try {
      employeeNode.insertBefore(newChild,refChild);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 3);
    }
    test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    test.done();
  },

  /**
   *
   The "insertBefore(newChild,refchild)" method returns
   the node being inserted.

   Insert an Element node before the fourth
   child of the second employee and check the node
   returned from the "insertBefore(newChild,refChild)"
   method.   The node returned should be "newChild".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeinsertbeforenodename: function(test) {
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var refChild = employeeNode.childNodes.item(3);
    var newChild = doc.createElement("br");
    var insertedNode = employeeNode.insertBefore(newChild,refChild);
    test.equal(insertedNode.nodeName, 'BR', 'element nodeName');
    test.done();
  },

  /**
   *
   The "insertBefore(newChild,refChild)" method raises a
   NOT_FOUND_ERR DOMException if the reference child is
   not a child of this node.

   Retrieve the second employee and attempt to insert a
   new node before a reference node that is not a child
   of this node.   An attempt to insert before a non child
   node should raise the desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-952280727')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_nodeinsertbeforerefchildnonexistent: function(test) {
    var doc = hc_staff.hc_staff();
    var newChild = doc.createElement("br");
    var refChild = doc.createElement("b");
    var elementNode = doc.getElementsByTagName("p").item(1);
    var success = false;
    try {
      elementNode.insertBefore(newChild,refChild);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 8);
    }
    test.ok(success, 'throw_NOT_FOUND_ERR');
    test.done();
  },

  /**
   *
   If the "refChild" is null then the
   "insertBefore(newChild,refChild)" method inserts the
   node "newChild" at the end of the list of children.

   Retrieve the second employee and invoke the
   "insertBefore(newChild,refChild)" method with
   refChild=null.   Since "refChild" is null the "newChild"
   should be added to the end of the list.   The last item
   in the list is checked after insertion.   The last Element
   node of the list should be "newChild".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-952280727
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeinsertbeforerefchildnull: function(test) {
    var refChild = null;
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var newChild = doc.createElement("br");
    employeeNode.insertBefore(newChild,refChild);
    test.equal(employeeNode.lastChild.nodeName, 'BR', 'element nodeName');
    test.done();
  },

  /**
   *
   Create a list of all the children elements of the third
   employee and access its first child by using an index
   of 0.  This should result in the whitspace before "em" being
   selected (em when ignoring whitespace).
   Further we evaluate its content(by using
   the "getNodeName()" method) to ensure the proper
   element was accessed.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodelistindexequalzero: function(test) {
    var doc = hc_staff.hc_staff();
    employeeList = doc.getElementsByTagName("p").item(2).childNodes;
    test.equal(employeeList.item(0).nodeName, "#text", 'childName_w_whitespace');
    test.done();
  },

  /**
   *
   The "getLength()" method returns the number of nodes
   in the list.

   Create a list of all the children elements of the third
   employee and invoke the "getLength()" method.
   It should contain the value 13.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodelistindexgetlength: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var employeeList;
    var length;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(2);
    employeeList = employeeNode.childNodes;

    length = employeeList.length;


    if(
      (6 == length)
    ) {
      test.equal(length, 6, 'length_wo_space');

    }

    else {
      test.equal(length, 13, 'length_w_space');

    }

    test.done();
  },

  /**
   *
   The "getLength()" method returns the number of nodes
   in the list.(Test for EMPTY list)

   Create a list of all the children of the Text node
   inside the first child of the third employee and
   invoke the "getLength()" method.   It should contain
   the value 0.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodelistindexgetlengthofemptylist: function(test) {
    var success;
    var doc;
    var emList;
    var emNode;
    var textNode;
    var textList;
    var length;

    doc = hc_staff.hc_staff();
    emList = doc.getElementsByTagName("em");
    emNode = emList.item(2);
    textNode = emNode.firstChild;

    textList = textNode.childNodes;

    length = textList.length;

    test.equal(length, 0, 'length');

    test.done();
  },

  /**
   *
   The items in the list are accessible via an integral
   index starting from zero.
   (Index not equal 0)

   Create a list of all the children elements of the third
   employee and access its fourth child by using an index
   of 3 and calling getNodeName() which should return
   "strong" (no whitespace)  or "#text" (with whitespace).

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodelistindexnotzero: function(test) {
    var doc = hc_staff.hc_staff();
    child = doc.getElementsByTagName("p").item(2).childNodes.item(3);
    test.equal(child.nodeName, 'STRONG', 'element childName_strong');
    test.done();
  },

  /**
   *
   Create a list of all the children elements of the third
   employee and access its first child by invoking the
   "item(index)" method with an index=0.  This should
   result in node with a nodeName of "#text" or "em".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodelistreturnfirstitem: function(test) {
    var doc = hc_staff.hc_staff();
    var child = doc.getElementsByTagName("p").item(2).childNodes.item(0);
    test.equal(child.nodeName, "#text", 'nodeName_w_space');
    test.done();
  },

  /**
   *
   Create a list of all the children elements of the third
   employee and access its last child by invoking the
   "item(index)" method with an index=length-1.  This should
   result in node with nodeName="#text" or acronym.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodelistreturnlastitem: function(test) {
    var doc = hc_staff.hc_staff();
    var employeeList = doc.getElementsByTagName("p").item(2).childNodes;
    var child = employeeList.item(employeeList.length-1);
    test.equal(child.nodeName, "#text", 'lastNodeName_w_whitespace');
    test.done();
  },

  /**
   *
   The range of valid child node indices is 0 thru length -1

   Create a list of all the children elements of the third
   employee and traverse the list from index=0 thru
   length -1.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-203510337
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-844377136
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodelisttraverselist: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var employeeList;
    var child;
    var childName;
    var nodeType;
    var result = new Array();

    expected = ["EM", "STRONG", "CODE", "SUP", "VAR", "ACRONYM"];

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(2);
    employeeList = employeeNode.childNodes;

    for(var indexN10073 = 0;indexN10073 < employeeList.length; indexN10073++) {
      child = employeeList.item(indexN10073);
      nodeType = child.nodeType;

      childName = child.nodeName;


      if(
        (1 == nodeType)
      ) {
        result[result.length] = childName;

      }

      else {
        test.equal(nodeType, 3, 'textNodeType');
        test.equal(childName, "#text", 'textNodeName');

      }

    }
    test.deepEqual(result, expected, 'element nodeNames');

    test.done();
  },

  /**
   *
   The "getParentNode()" method returns the parent
   of this node.

   Retrieve the second employee and invoke the
   "getParentNode()" method on this node.   It should
   be set to "body".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
   */
  hc_nodeparentnode: function(test) {
    var doc = hc_staff.hc_staff();
    var parentNode = doc.getElementsByTagName("p").item(1).parentNode;
    test.equal(parentNode.nodeName, 'BODY', 'element parentNodeName');
    test.done();
  },

  /**
   *
   The "getParentNode()" method invoked on a node that has
   just been created and not yet added to the tree is null.

   Create a new "employee" Element node using the
   "createElement(name)" method from the Document interface.
   Since this new node has not yet been added to the tree,
   the "getParentNode()" method will return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1060184317
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodeparentnodenull: function(test) {
    var success;
    var doc;
    var createdNode;
    var parentNode;

    doc = hc_staff.hc_staff();
    createdNode = doc.createElement("br");
    parentNode = createdNode.parentNode;

    test.equal(parentNode, null, 'parentNode');

    test.done();
  },

  /**
   *
   The "removeChild(oldChild)" method removes the child node
   indicated by "oldChild" from the list of children and
   returns it.

   Remove the first employee by invoking the
   "removeChild(oldChild)" method an checking the
   node returned by the "getParentNode()" method.   It
   should be set to null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_noderemovechild: function(test) {
    var success;
    var doc;
    var rootNode;
    var childList;
    var childToRemove;
    var removedChild;
    var parentNode;

    doc = hc_staff.hc_staff();
    rootNode = doc.documentElement;

    childList = rootNode.childNodes;

    childToRemove = childList.item(1);
    removedChild = rootNode.removeChild(childToRemove);
    parentNode = removedChild.parentNode;

    test.equal(parentNode, null, 'parentNodeNull');

    test.done();
  },

  /**
   *
   The "removeChild(oldChild)" method returns
   the node being removed.

   Remove the first child of the second employee
   and check the NodeName returned by the
   "removeChild(oldChild)" method.   The returned node
   should have a NodeName equal to "#text".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_noderemovechildgetnodename: function(test) {
    var success;
    var doc;
    var elementList;
    var employeeNode;
    var childList;
    var oldChild;
    var removedChild;
    var childName;
    var oldName;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("p");
    employeeNode = elementList.item(1);
    childList = employeeNode.childNodes;

    oldChild = childList.item(0);
    oldName = oldChild.nodeName;

    removedChild = employeeNode.removeChild(oldChild);
    test.notEqual(removedChild, null, 'notnull');
    childName = removedChild.nodeName;

    test.equal(childName, oldName, 'nodeName');

    test.done();
  },

  /**
   *
   The "removeChild(oldChild)" method removes the node
   indicated by "oldChild".

   Retrieve the second p element and remove its first child.
   After the removal, the second p element should have 5 element
   children and the first child should now be the child
   that used to be at the second position in the list.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_noderemovechildnode: function(test) {
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var childList = employeeNode.childNodes;
    var oldChild = employeeNode.getElementsByTagName("em").item(0);
    var removedChild = employeeNode.removeChild(oldChild);
    test.equal(removedChild.nodeName, 'EM', 'element removedName');
    var actual = [];
    for(var i=0;i<childList.length;i++) {
      if (1 == childList.item(i).nodeType) {
        actual.push(childList.item(i).nodeName);
      } else {
        test.equal(childList.item(i).nodeType, 3, 'textNodeType');
        test.equal(childList.item(i).nodeName, "#text", 'textNodeName');
      }
    }
    test.deepEqual(actual, ['STRONG', 'CODE', 'SUP', 'VAR', 'ACRONYM'], 'element childNames')
    test.done();
  },

  /**
   *
   The "removeChild(oldChild)" method raises a
   NOT_FOUND_ERR DOMException if the old child is
   not a child of this node.

   Retrieve the second employee and attempt to remove a
   node that is not one of its children.   An attempt to
   remove such a node should raise the desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-1734834066')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1734834066
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_noderemovechildoldchildnonexistent: function(test) {
    var doc = hc_staff.hc_staff();
    var oldChild = doc.createElement("br");
    var elementNode = doc.getElementsByTagName("p").item(1);
    var success = false;
    try {
      elementNode.removeChild(oldChild);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 8);
    }
    test.ok(success, 'throw_NOT_FOUND_ERR');
    test.done();
  },

  /**
   *
   The "replaceChild(newChild,oldChild)" method replaces
   the node "oldChild" with the node "newChild".

   Replace the first element of the second employee with
   a newly created Element node.   Check the first position
   after the replacement operation is completed.   The new
   Element should be "newChild".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodereplacechild: function(test) {
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var oldChild = employeeNode.childNodes.item(0);
    var newChild = doc.createElement("br");
    employeeNode.replaceChild(newChild,oldChild);
    var child = employeeNode.childNodes.item(0);
    test.equal(child.nodeName, 'BR', 'element nodeName');
    test.done();
  },

  /**
   *
   The "replaceChild(newChild,oldChild)" method raises a
   HIERARCHY_REQUEST_ERR DOMException if this node is of
   a type that does not allow children of the type "newChild"
   to be inserted.

   Retrieve the root node and attempt to replace
   one of its children with a newly created Attr node.
   An Element node cannot have children of the "Attr"
   type, therefore the desired exception should be raised.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=406
   */
  hc_nodereplacechildinvalidnodetype: function(test) {
    var doc = hc_staff.hc_staff();
    var newChild = doc.createAttribute("lang");
    var oldChild = doc.getElementsByTagName("p").item(1);
    var rootNode = oldChild.parentNode;
    var success = false;
    try {
      rootNode.replaceChild(newChild,oldChild);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 3);
    }
    test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    test.done();
  },

  /**
   *
   The "replaceChild(newChild,oldChild)" method raises a
   WRONG_DOCUMENT_ERR DOMException if the "newChild" was
   created from a different document than the one that
   created this node.

   Retrieve the second employee and attempt to replace one
   of its children with a node created from a different
   document.   An attempt to make such a replacement
   should raise the desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodereplacechildnewchilddiffdocument: function(test) {
    var doc1 = hc_staff.hc_staff();
    var doc2 = hc_staff.hc_staff();
    var newChild = doc1.createElement("br");
    var elementNode = doc2.getElementsByTagName("p").item(1);
    var oldChild = elementNode.firstChild;
    var success = false;
    try {
      elementNode.replaceChild(newChild,oldChild);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 4);
    }
    test.ok(success, 'throw_WRONG_DOCUMENT_ERR');
    test.done();
  },

  /**
   *
   If the "newChild" is already in the tree, it is first
   removed before the new one is added.

   Retrieve the second "p" and replace "acronym" with its "em".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=246
   */
  hc_nodereplacechildnewchildexists: function(test) {
    var actual = [];
    var expected = ["STRONG", "CODE", "SUP", "VAR", "EM"];
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var childList = employeeNode.getElementsByTagName("*");
    var newChild = childList.item(0);
    var oldChild = childList.item(5);
    var replacedChild = employeeNode.replaceChild(newChild,oldChild);
    test.equal(replacedChild, oldChild, 'return_value_same');
    for(var i=0;i<childList.length;i++) {
      if (1 == childList.item(i).nodeType) {
        actual.push(childList.item(i).nodeName)
      } else {
        test.equal(childList.item(i).nodeType, 3, 'textNodeType');
        test.equal(childList.item(i).nodeName, "#text", 'textNodeName');
      }
    }
    test.deepEqual(actual, expected, 'element childNames');
    test.done();
  },

  /**
   *
   The "replaceChild(newChild,oldChild)" method raises a
   HIERARCHY_REQUEST_ERR DOMException if the node to put
   in is one of this node's ancestors.

   Retrieve the second employee and attempt to replace
   one of its children with an ancestor node(root node).
   An attempt to make such a replacement should raise the
   desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='HIERARCHY_REQUEST_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   */
  hc_nodereplacechildnodeancestor: function(test) {
    var doc = hc_staff.hc_staff();
    var newChild = doc.documentElement;
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var oldChild = employeeNode.childNodes.item(0);
    var success = false;
    try {
      employeeNode.replaceChild(newChild,oldChild);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 3);
    }
    test.ok(success, 'throw_HIERARCHY_REQUEST_ERR');
    test.done();
  },

  /**
   *
   The "replaceChild(newChild,oldChild)" method returns
   the node being replaced.

   Replace the second Element of the second employee with
   a newly created node Element and check the NodeName
   returned by the "replaceChild(newChild,oldChild)"
   method.   The returned node should have a NodeName equal
   to "em".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodereplacechildnodename: function(test) {
    var doc = hc_staff.hc_staff();
    var employeeNode = doc.getElementsByTagName("p").item(1);
    var oldChild = employeeNode.getElementsByTagName("em").item(0);
    var newChild = doc.createElement("br");
    var replacedNode = employeeNode.replaceChild(newChild,oldChild);
    test.equal(replacedNode.nodeName, 'EM', 'element replacedNodeName');
    test.done();
  },

  /**
   *
   The "replaceChild(newChild,oldChild)" method raises a
   NOT_FOUND_ERR DOMException if the old child is
   not a child of this node.

   Retrieve the second employee and attempt to replace a
   node that is not one of its children.   An attempt to
   replace such a node should raise the desired exception.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-785887307')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='NOT_FOUND_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-785887307
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=247
   */
  hc_nodereplacechildoldchildnonexistent: function(test) {
    var doc = hc_staff.hc_staff();
    var newChild = doc.createElement("br");
    var oldChild = doc.createElement("b");
    var elementNode = doc.getElementsByTagName("p").item(1);
    var success = false;
    try {
      elementNode.replaceChild(newChild,oldChild);
    }
    catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 8);
    }
    test.ok(success, 'throw_NOT_FOUND_ERR');
    test.done();
  },

  /**
   *
   The "getAttributes()" method invoked on a Text
   Node returns null.

   Retrieve the Text node from the last child of the
   first employee and invoke the "getAttributes()" method
   on the Text Node.  It should return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-84CF096
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1312295772
   */
  hc_nodetextnodeattribute: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddr;
    var textNode;
    var attrList;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddr = elementList.item(0);
    textNode = testAddr.firstChild;

    attrList = textNode.attributes;

    test.equal(attrList, null, 'text_attributes_is_null');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeName()" method for a
   Text Node is "#text".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D095
   */
  hc_nodetextnodename: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddr;
    var textNode;
    var textName;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddr = elementList.item(0);
    textNode = testAddr.firstChild;

    textName = textNode.nodeName;

    test.equal(textName, "#text", 'textNodeName');

    test.done();
  },

  /**
   *

   The "getNodeType()" method for a Text Node

   returns the constant value 3.



   Retrieve the Text node from the last child of

   the first employee and invoke the "getNodeType()"

   method.   The method should return 3.


   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-111237558
   */
  hc_nodetextnodetype: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddr;
    var textNode;
    var nodeType;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddr = elementList.item(0);
    textNode = testAddr.firstChild;

    nodeType = textNode.nodeType;

    test.equal(nodeType, 3, 'nodeTextNodeTypeAssert1');

    test.done();
  },

  /**
   *
   The string returned by the "getNodeValue()" method for a
   Text Node is the content of the Text node.

   Retrieve the Text node from the last child of the first
   employee and check the string returned by the
   "getNodeValue()" method.   It should be equal to
   "1230 North Ave. Dallas, Texas 98551".

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   */
  hc_nodetextnodevalue: function(test) {
    var success;
    var doc;
    var elementList;
    var testAddr;
    var textNode;
    var textValue;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    testAddr = elementList.item(0);
    textNode = testAddr.firstChild;

    textValue = textNode.nodeValue;

    test.equal(textValue, "1230 North Ave. Dallas, Texas 98551", 'textNodeValue');

    test.done();
  },

  /**
   *
   An element is created, setNodeValue is called with a non-null argument, but getNodeValue
   should still return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
   */
  hc_nodevalue01: function(test) {
    var success;
    var doc;
    var newNode;
    var newValue;

    doc = hc_staff.hc_staff();
    newNode = doc.createElement("acronym");
    newValue = newNode.nodeValue;

    test.equal(newValue, null, 'initiallyNull');
    newNode.nodeValue = "This should have no effect";

    newValue = newNode.nodeValue;

    test.equal(newValue, null, 'nullAfterAttemptedChange');

    test.done();
  },

  /**
   *
   An comment is created, setNodeValue is called with a non-null argument, but getNodeValue
   should still return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1728279322
   */
  hc_nodevalue02: function(test) {
    var success;
    var doc;
    var newNode;
    var newValue;

    doc = hc_staff.hc_staff();
    newNode = doc.createComment("This is a new Comment node");
    newValue = newNode.nodeValue;

    test.equal(newValue, "This is a new Comment node", 'initial');
    newNode.nodeValue = "This should have an effect";

    newValue = newNode.nodeValue;

    test.equal(newValue, "This should have an effect", 'afterChange');

    test.done();
  },

  /**
   *
   An entity reference is created, setNodeValue is called with a non-null argument, but getNodeValue
   should still return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-11C98490
   */
  hc_nodevalue03: function(test) {
    doc = hc_staff.hc_staff();
    success = false;
    try {
      doc.createEntityReference("ent1");
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 9);
    }
    test.ok(success, 'throw_NOT_SUPPORTED_ERR');
    test.done();
  },

  /**
   *
   An document type accessed, setNodeValue is called with a non-null argument, but getNodeValue
   should still return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A31
   */
  hc_nodevalue04: function(test) {
    var doc = hc_staff.hc_staff();
    var newNode = doc.doctype;
    test.notEqual(newNode, null, 'docTypeNotNullOrDocIsHTML');
    test.notEqual(newNode, null, 'docTypeNotNull');
    test.equal(newNode.nodeValue, null, 'initiallyNull');
    newNode.nodeValue = "This should have no effect";
    test.equal(newNode.nodeValue, null, 'nullAfterAttemptedChange');
    test.done();
  },

  /**
   *
   A document fragment is created, setNodeValue is called with a non-null argument, but getNodeValue
   should still return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-B63ED1A3
   */
  hc_nodevalue05: function(test) {
    var success;
    var doc;
    var newNode;
    var newValue;

    doc = hc_staff.hc_staff();
    newNode = doc.createDocumentFragment();
    newValue = newNode.nodeValue;

    test.equal(newValue, null, 'initiallyNull');
    newNode.nodeValue = "This should have no effect";

    newValue = newNode.nodeValue;

    test.equal(newValue, null, 'nullAfterAttemptedChange');

    test.done();
  },

  /**
   *
   An document is accessed, setNodeValue is called with a non-null argument, but getNodeValue
   should still return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#i-Document
   */
  hc_nodevalue06: function(test) {
    var success;
    var newNode;
    var newValue;

    newNode = hc_staff.hc_staff();
    newValue = newNode.nodeValue;

    test.equal(newValue, null, 'initiallyNull');
    newNode.nodeValue = "This should have no effect";

    newValue = newNode.nodeValue;

    test.equal(newValue, null, 'nullAfterAttemptedChange');

    test.done();
  },

  /**
   *
   An Entity is accessed, setNodeValue is called with a non-null argument, but getNodeValue
   should still return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-527DCFF2
   */
  hc_nodevalue07: function(test) {
    // NOTE: no tests run here...
    test.done();
  },

  /**
   *
   An notation is accessed, setNodeValue is called with a non-null argument, but getNodeValue
   should still return null.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5431D1B9
   */
  hc_nodevalue08: function(test) {
    // NOTE: no tests run here...
    test.done();
  },

  /**
   *
   An attempt to add remove an notation should result in a NO_MODIFICATION_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D46829EF
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D58B193
   */
  hc_notationsremovenameditem1: function(test) {
    // NOTE: no tests run here
    test.done();
  },

  /**
   *
   An attempt to add an element to the named node map returned by notations should
   result in a NO_MODIFICATION_ERR or HIERARCHY_REQUEST_ERR.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-D46829EF
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1025163788
   */
  hc_notationssetnameditem1: function(test) {
    // NOTE: no tests run here
    test.done();
  },

  /**
   *
   The "splitText(offset)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset is
   negative.

   Retrieve the textual data from the second child of the
   third employee and invoke the "splitText(offset)" method.
   The desired exception should be raised since the offset
   is a negative number.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-38853C1D')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  hc_textindexsizeerrnegativeoffset: function(test) {
    var doc = hc_staff.hc_staff();
    var textNode = doc.getElementsByTagName("strong").item(2).firstChild;
    var success = false;
    try {
      textNode.splitText(-69);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throws_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   The "splitText(offset)" method raises an
   INDEX_SIZE_ERR DOMException if the specified offset is
   greater than the number of characters in the Text node.

   Retrieve the textual data from the second child of the
   third employee and invoke the "splitText(offset)" method.
   The desired exception should be raised since the offset
   is a greater than the number of characters in the Text
   node.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-258A00AF')/constant[@name='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#xpointer(id('ID-38853C1D')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=249
   */
  hc_textindexsizeerroffsetoutofbounds: function(test) {
    var doc = hc_staff.hc_staff();
    var textNode = doc.getElementsByTagName("strong").item(2).firstChild;
    var success = false;
    try {
      textNode.splitText(300);
    } catch(ex) {
      success = (typeof(ex.code) != 'undefined' && ex.code == 1);
    }
    test.ok(success, 'throw_INDEX_SIZE_ERR');
    test.done();
  },

  /**
   *
   Retrieve the textual data from the last child of the
   second employee.   That node is composed of two
   EntityReference nodes and two Text nodes.   After
   the content node is parsed, the "acronym" Element
   should contain four children with each one of the
   EntityReferences containing one child.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1451460987
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-11C98490
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-745549614
   */
  hc_textparseintolistofelements: function(test) {
    var expectedNormal = ["β", " Dallas, ", "γ", "\n 98554"];
    var expectedExpanded = ["β Dallas, γ\n 98554"];
    var doc = hc_staff.hc_staff();
    var childList = doc.getElementsByTagName("acronym").item(1).childNodes;
    var actual = [];
    for(var i=0;i<childList.length;i++) {
      if (childList.item(i).nodeValue == null) {
        test.notEqual(childList.item(i).firstChild, null, 'grandChildNotNull');
        actual.push(childList.item(i).firstChild.nodeValue);
      } else {
        actual.push(childList.item(i).nodeValue);
      }
    }
    if (1 == childList.length) {
      test.deepEqual(actual, expectedExpanded, 'assertEqCoalescing');
    } else {
      test.deepEqual(actual, expectedNormal, 'assertEqNormal');
    }
    test.done();
  },

  /**
   *
   The "splitText(offset)" method returns the new Text node.

   Retrieve the textual data from the last child of the
   first employee and invoke the "splitText(offset)" method.
   The method should return the new Text node.   The offset
   value used for this test is 30.   The "getNodeValue()"
   method is called to check that the new node now contains
   the characters at and after position 30.
   (Starting count at 0)

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
   */
  hc_textsplittextfour: function(test) {
    var success;
    var doc;
    var elementList;
    var addressNode;
    var textNode;
    var splitNode;
    var value;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("acronym");
    addressNode = elementList.item(0);
    textNode = addressNode.firstChild;

    splitNode = textNode.splitText(30);
    value = splitNode.nodeValue;

    test.equal(value, "98551", 'textSplitTextFourAssert');

    test.done();
  },

  /**
   *
   The "splitText(offset)" method breaks the Text node into
   two Text nodes at the specified offset keeping each node
   as siblings in the tree.

   Retrieve the textual data from the second child of the
   third employee and invoke the "splitText(offset)" method.
   The method splits the Text node into two new sibling
   Text nodes keeping both of them in the tree.   This test
   checks the "nextSibling()" method of the original node
   to ensure that the two nodes are indeed siblings.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
   */
  hc_textsplittextone: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var textNode;
    var splitNode;
    var secondPart;
    var value;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(2);
    textNode = nameNode.firstChild;

    splitNode = textNode.splitText(7);
    secondPart = textNode.nextSibling;

    value = secondPart.nodeValue;

    test.equal(value, "Jones", 'textSplitTextOneAssert');

    test.done();
  },

  /**
   *
   After the "splitText(offset)" method breaks the Text node
   into two Text nodes, the new Text node contains all the
   content at and after the offset point.

   Retrieve the textual data from the second child of the
   third employee and invoke the "splitText(offset)" method.
   The new Text node should contain all the content
   at and after the offset point.   The "getNodeValue()"
   method is called to check that the new node now contains
   the characters at and after position seven.
   (Starting count at 0)

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
   */
  hc_textsplittextthree: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var textNode;
    var splitNode;
    var value;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(2);
    textNode = nameNode.firstChild;

    splitNode = textNode.splitText(6);
    value = splitNode.nodeValue;

    test.equal(value, " Jones", 'textSplitTextThreeAssert');

    test.done();
  },

  /**
   *
   After the "splitText(offset)" method breaks the Text node
   into two Text nodes, the original node contains all the
   content up to the offset point.

   Retrieve the textual data from the second child of the
   third employee and invoke the "splitText(offset)" method.
   The original Text node should contain all the content
   up to the offset point.   The "getNodeValue()" method
   is called to check that the original node now contains
   the first five characters.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-38853C1D
   */
  hc_textsplittexttwo: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var textNode;
    var splitNode;
    var value;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(2);
    textNode = nameNode.firstChild;

    splitNode = textNode.splitText(5);
    value = textNode.nodeValue;

    test.equal(value, "Roger", 'textSplitTextTwoAssert');

    test.done();
  },

  /**
   *
   If there is not any markup inside an Element or Attr node
   content, then the text is contained in a single object
   implementing the Text interface that is the only child
   of the element.

   Retrieve the textual data from the second child of the
   third employee.   That Text node contains a block of
   multiple text lines without markup, so they should be
   treated as a single Text node.   The "getNodeValue()"
   method should contain the combination of the two lines.

   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-1312295772
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-F68D080
   */
  hc_textwithnomarkup: function(test) {
    var success;
    var doc;
    var elementList;
    var nameNode;
    var nodeV;
    var value;

    doc = hc_staff.hc_staff();
    elementList = doc.getElementsByTagName("strong");
    nameNode = elementList.item(2);
    nodeV = nameNode.firstChild;

    value = nodeV.nodeValue;

    test.equal(value, "Roger\n Jones", 'textWithNoMarkupAssert');

    test.done();
  },
};
