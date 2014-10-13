var fs = require('fs');
var path = require('path');
var jsdom = require("../../lib/jsdom");
var toPathname = require("../util").toPathname(__dirname);
var toFileUrl = require("../util").toFileUrl(__dirname);
var load = require("../util").load(__dirname +  "/html/");

var level2 = require("../../lib/jsdom/level2/html").dom.level2.html;
var getImplementation = function() {
  var doc = new level2.HTMLDocument();
  return doc.implementation;
};

exports.tests = {
  /**
   *
   The accessKey attribute is a single character access key to give
   access to the form control.
   Retrieve the accessKey attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-89647724
   */
  HTMLAnchorElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "g", "accessKeyLink");
    test.done();
  },

  /**
   *
   The charset attribute indicates the character encoding of the linked
   resource.
   Retrieve the charset attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-67619266
   */
  HTMLAnchorElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharset;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcharset = testNode.charset;
    test.equal(vcharset, "US-ASCII", "charsetLink");
    test.done();
  },

  /**
   *
   The coords attribute is a comma-seperated list of lengths, defining
   an active region geometry.
   Retrieve the coords attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-92079539
   */
  HTMLAnchorElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcoords;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcoords = testNode.coords;
    test.equal(vcoords, "0,0,100,100", "coordsLink");
    test.done();
  },

  /**
   *
   The href attribute contains the URL of the linked resource.
   Retrieve the href attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88517319
   */
  HTMLAnchorElement04: function(test) {
    var doc = load("anchor");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).href, toFileUrl('html/files/pix/submit.gif'), 'hrefLink');
    test.done();
  },

  /**
   *
   The hreflang attribute contains the language code of the linked resource.
   Retrieve the hreflang attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87358513
   */
  HTMLAnchorElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhreflink;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vhreflink = testNode.hreflang;
    test.equal(vhreflink, "en", "hreflangLink");
    test.done();
  },

  /**
   *
   The name attribute contains the anchor name.
   Retrieve the name attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-32783304
   */
  HTMLAnchorElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "Anchor", "nameLink");
    test.done();
  },

  /**
   *
   The rel attribute contains the forward link type.
   Retrieve the rel attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-3815891
   */
  HTMLAnchorElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrel;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vrel = testNode.rel;
    test.equal(vrel, "GLOSSARY", "relLink");
    test.done();
  },

  /**
   *
   The rev attribute contains the reverse link type
   Retrieve the rev attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-58259771
   */
  HTMLAnchorElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrev;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vrev = testNode.rev;
    test.equal(vrev, "STYLESHEET", "revLink");
    test.done();
  },

  /**
   *
   The shape attribute contains the shape of the active area.
   Retrieve the shape attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-49899808
   */
  HTMLAnchorElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vshape;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vshape = testNode.shape;
    test.equal(vshape, "rect", "shapeLink");
    test.done();
  },

  /**
   *
   The tabIndex attribute contains an index that represents the elements
   position in the tabbing order.
   Retrieve the tabIndex attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-41586466
   */
  HTMLAnchorElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 22, "tabIndexLink");
    test.done();
  },

  /**
   *
   The target attribute specifies the frame to render the source in.
   Retrieve the target attribute and examine it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6414197
   */
  HTMLAnchorElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtarget;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor2");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtarget = testNode.target;
    test.equal(vtarget, "dynamic", "targetLink");
    test.done();
  },

  /**
   *
   The type attribute contains the advisory content model.
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63938221
   */
  HTMLAnchorElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "image/gif", "typeLink");
    test.done();
  },

  /**
   *
   HTMLAnchorElement.blur should surrender input focus.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-65068939
   */
  HTMLAnchorElement13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    testNode.blur();
    test.done();
  },

  /**
   *
   HTMLAnchorElement.focus should capture input focus.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-47150313
   */
  HTMLAnchorElement14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    testNode.focus();
    test.done();
  },

  /**
   *
   HTMLAnchorElement.hostname should show the hostname of the href when relative
   * @author Avi Deitcher
   * @see https://developer.mozilla.org/en/DOM/HTMLAnchorElement
   */
  HTMLAnchorElement15: function(test) {
    var doc = load("anchor2");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).hostname, '', 'a.hostname relative');
    test.done();
  },

  /**
   *
   HTMLAnchorElement.hostname should show the hostname of the href when absolute
   * @author Avi Deitcher
   * @see https://developer.mozilla.org/en/DOM/HTMLAnchorElement
   */
  HTMLAnchorElement16: function(test) {
    var doc = load("anchor3");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).hostname, 'www.github.com', 'a.hostname absolute');
    test.done();
  },

  /**
   *
   HTMLAnchorElement.pathname should show the pathname of the href
   * @author Avi Deitcher
   * @see https://developer.mozilla.org/en/DOM/HTMLAnchorElement
   */
  HTMLAnchorElement17: function(test) {
    var doc = load("anchor2");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).pathname, toPathname('html/files/pix/submit.gif'), 'a.pathname relative with ./');
    test.done();
  },

  /**
   *
   HTMLAnchorElement.pathname should show the pathname of the href
   * @author Avi Deitcher
   * @see https://developer.mozilla.org/en/DOM/HTMLAnchorElement
   */
  HTMLAnchorElement18: function(test) {
    var doc = load("anchor3");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).pathname, '/tmpvar/jsdom', 'a.pathname absolute');
    test.done();
  },

  /**
   *
   * HTMLAnchorElement.host should show the host and port if port is not default
   * @author Salvatore Porchia
   * @see https://developer.mozilla.org/en/DOM/HTMLAnchorElement
   */
  HTMLAnchorElement19: function(test) {
    var doc = load("anchor3");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).host, 'www.github.com', 'a.host');
    var doc = load("anchor4");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).host, 'www.github.com:3020', 'a.host');
    test.done();
  },

  /**
   * HTMLAnchorElement.hash should show part of url after hash
   * @author Peter Culak
   * @see https://developer.mozilla.org/en/DOM/HTMLAnchorElement
   */
   HTMLAnchorElement20: function(test) {
     var doc = load("anchor5");
     var nodeList = doc.getElementsByTagName("a");
     test.equal(nodeList.length, 1, 'Asize');
     test.equal(nodeList.item(0).host, 'www.github.com:3020', 'a.host');
     test.equal(nodeList.item(0).hash, '#fragment-identifier', 'a.hash');
     test.done();
  },

  /**
   *
   * HTMLAnchorElement.port should show the port if port is not default
   * @author Salvatore Porchia
   * @see https://developer.mozilla.org/en/DOM/HTMLAnchorElement
   */
  HTMLAnchorElement21: function(test) {
    var doc = load("anchor3");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).port, '', 'a.port');
    var doc = load("anchor4");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).port, '3020', 'a.port');
    test.done();
  },

  /**
   *
   * HTMLAnchorElement.protocol should show the protocol including trailing ':'.
   * @author Salvatore Porchia
   * @see https://developer.mozilla.org/en/DOM/HTMLAnchorElement
   */
  HTMLAnchorElement22: function(test) {
    var doc = load("anchorEmpty");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    // Firefox shows 'http:' Chrome/Safari show ':' on empty href.
    test.equal(nodeList.item(0).protocol, ':', 'a.protocol');
    var doc = load("anchor2");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).protocol, 'file:', 'a.protocol');
    var doc = load("anchor3");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).protocol, 'https:', 'a.protocol');
    var doc = load("anchor4");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).protocol, 'http:', 'a.protocol');
    var doc = load("anchor6");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).protocol, 'special:', 'a.protocol');
    test.done();
  },

  /**
   *
   HTMLAnchorElement.href should show the pathname of the href
   * @author eleith
   */
  HTMLAnchorElement23: function(test) {
    var doc = load("anchorEmpty");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).href, '', 'A.href is empty');
    test.done();
  },

  /**
   *
   * HTMLAnchorElement.pathname should be the empty string when path is empty
   * @author Adam Faulkner
   * @see http://url.spec.whatwg.org/#dom-url-pathname
   */
  HTMLAnchorElement24: function(test) {
    var doc = load("anchorEmpty");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).pathname, '', 'A.pathname is empty');
    test.done();
  },

  /**
   *
   * HTMLAnchorElement.username
   * @author Salvatore Porchia
   * @see http://url.spec.whatwg.org/#dom-url-username
   */
  HTMLAnchorElement25: function(test) {
    var doc = load("anchor7");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).username, 'user', 'A.username');
    test.done();
  },

  /**
   *
   * HTMLAnchorElement.password
   * @author Salvatore Porchia
   * @see http://url.spec.whatwg.org/#dom-url-password
   */
  HTMLAnchorElement26: function(test) {
    var doc = load("anchor7");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).password, 'pa:ss', 'A.password');
    test.done();
  },

  /**
   *
   * HTMLAnchorElement.origin
   * @author Salvatore Porchia
   * @see http://url.spec.whatwg.org/#dom-url-origin
   */
  HTMLAnchorElement27: function(test) {
    var doc = load("anchorEmpty");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).origin, '', 'a.origin');
    var doc = load("anchor2");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).origin, 'file://', 'a.origin');
    var doc = load("anchor3");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).origin, 'https://www.github.com', 'a.origin');
    var doc = load("anchor4");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).origin, 'http://www.github.com:3020', 'a.origin');
    var doc = load("anchor6");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).origin, 'special://www.github.com', 'a.origin');
    var doc = load("anchor7");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).origin, 'http://www.github.com:500', 'a.origin');
    test.done();
  },

  /**
   *
   * HTMLAnchorElement.search
   * @author Salvatore Porchia
   * @see http://url.spec.whatwg.org/#dom-url-search
   */
  HTMLAnchorElement28: function(test) {
    var doc = load("anchor6");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).search, '', 'a.search');
    var doc = load("anchor7");
    var nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'A size');
    test.equal(nodeList.item(0).search, '?testing=tested', 'A.search');
    test.done();
  },

  /**
   *
   The align attribute specifies the alignment of the object(Vertically
   or Horizontally) with respect to its surrounding text.
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-8049912
   */
  HTMLAppletElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign.toLowerCase(), "bottom".toLowerCase(), "alignLink");
    test.done();
  },

  /**
   *
   The alt attribute specifies the alternate text for user agents not
   rendering the normal context of this element.
   Retrieve the alt attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-58610064
   */
  HTMLAppletElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valt;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valt = testNode.alt;
    test.equal(valt, "Applet Number 1", "altLink");
    test.done();
  },

  /**
   *
   The archive attribute specifies a comma-seperated archive list.
   Retrieve the archive attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14476360
   */
  HTMLAppletElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var varchive;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    varchive = testNode.archive;
    test.equal(varchive, "", "archiveLink");
    test.done();
  },

  /**
   *
   The code attribute specifies the applet class file.
   Retrieve the code attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-61509645
   */
  HTMLAppletElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcode = testNode.code;
    test.equal(vcode, "org/w3c/domts/DOMTSApplet.class", "codeLink");
    test.done();
  },

  /**
   *
   The codeBase attribute specifies an optional base URI for the applet.
   Retrieve the codeBase attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6581160
   */
  HTMLAppletElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcodebase;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcodebase = testNode.codeBase;
    test.equal(vcodebase, "applets", "codebase");
    test.done();
  },

  /**
   *
   The height attribute overrides the height.
   Retrieve the height attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-90184867
   */
  HTMLAppletElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vheight = testNode.height;
    test.equal(vheight, "306", "heightLink");
    test.done();
  },

  /**
   *
   The hspace attribute specifies the horizontal space to the left
   and right of this image, applet, or object.
   Retrieve the hspace attribute and examine it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-1567197
   */
  HTMLAppletElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhspace;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vhspace = testNode.hspace;
    test.equal(vhspace, 0, "hspaceLink");
    test.done();
  },

  /**
   *
   The name attribute specifies the name of the applet.
   Retrieve the name attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39843695
   */
  HTMLAppletElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "applet1", "nameLink");
    test.done();
  },

  /**
   *
   The vspace attribute specifies the vertical space above and below
   this image, applet or object.
   Retrieve the vspace attribute and examine it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-22637173
   */
  HTMLAppletElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvspace;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvspace = testNode.vspace;
    test.equal(vvspace, 0, "vspaceLink");
    test.done();
  },

  /**
   *
   The width attribute overrides the regular width.
   Retrieve the width attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-16526327
   */
  HTMLAppletElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, "301", "widthLink");
    test.done();
  },

  /**
   *
   The object attribute specifies the serialized applet file.
   Retrieve the object attribute and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93681523
   */
  HTMLAppletElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vobject;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("applet2");
    nodeList = doc.getElementsByTagName("applet");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vobject = testNode.object;
    test.equal(vobject, "DOMTSApplet.dat", "object");
    test.done();
  },

  /**
   *
   The accessKey attribute specifies a single character access key to
   give access to the control form.
   Retrieve the accessKey attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-57944457
   */
  HTMLAreaElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "a", "alignLink");
    test.done();
  },

  /**
   *
   The alt attribute specifies an alternate text for user agents not
   rendering the normal content of this element.
   Retrieve the alt attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39775416
   */
  HTMLAreaElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valt;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valt = testNode.alt;
    test.equal(valt, "Domain", "altLink");
    test.done();
  },

  /**
   *
   The coords attribute specifies a comma-seperated list of lengths,
   defining an active region geometry.
   Retrieve the coords attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-66021476
   */
  HTMLAreaElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcoords;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcoords = testNode.coords;
    test.equal(vcoords, "0,2,45,45", "coordsLink");
    test.done();
  },

  /**
   *
   The href attribute specifies the URI of the linked resource.
   Retrieve the href attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-34672936
   */
  HTMLAreaElement04: function(test) {
    var doc = load("area");
    var nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    test.equal(nodeList.item(0).href, './files/dletter.html', 'hrefLink');
    test.done();
  },

  /**
   *
   The noHref attribute specifies that this area is inactive.
   Retrieve the noHref attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-61826871
   */
  HTMLAreaElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vnohref;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vnohref = testNode.noHref;
    test.equal(vnohref, false, 'vnohref should be *false*');
    test.done();
  },

  /**
   *
   The shape attribute specifies the shape of the active area.
   Retrieve the shape attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-85683271
   */
  HTMLAreaElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vshape;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vshape = testNode.shape;
    test.equal(vshape.toLowerCase(), "rect".toLowerCase(), "shapeLink");
    test.done();
  },

  /**
   *
   The tabIndex attribute specifies an index that represents the element's
   position in the tabbing order.
   Retrieve the tabIndex attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-8722121
   */
  HTMLAreaElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 10, "tabIndexLink");
    test.done();
  },

  /**
   *
   The target specifies the frame to render the resource in.
   Retrieve the target attribute and examine it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-46054682
   */
  HTMLAreaElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtarget;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area2");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtarget = testNode.target;
    test.equal(vtarget, "dynamic", "targetLink");
    test.done();
  },

  /**
   *
   The clear attribute specifies control flow of text around floats.
   Retrieve the clear attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-82703081
   */
  HTMLBRElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclear;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("br");
    nodeList = doc.getElementsByTagName("br");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclear = testNode.clear;
    test.equal(vclear, "none", "clearLink");
    test.done();
  },

  /**
   *
   The href attribute specifies the base URI.
   Retrieve the href attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-65382887
   */
  HTMLBaseElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhref;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("base");
    nodeList = doc.getElementsByTagName("base");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vhref = testNode.href;
    test.equal(vhref, "about:blank", "hrefLink");
    test.done();
  },

  /**
   *
   The target attribute specifies the default target frame.
   Retrieve the target attribute and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-73844298
   */
  HTMLBaseElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtarget;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("base2");
    nodeList = doc.getElementsByTagName("base");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtarget = testNode.target;
    test.equal(vtarget, "Frame1", "targetLink");
    test.done();
  },

  /**
   *
   The color attribute specifies the base font's color.
   Retrieve the color attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87502302
   */
  HTMLBaseFontElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("basefont");
    nodeList = doc.getElementsByTagName("basefont");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcolor = testNode.color;
    test.equal(vcolor, "#000000", "colorLink");
    test.done();
  },

  /**
   *
   The face attribute specifies the base font's face identifier.
   Retrieve the face attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88128969
   */
  HTMLBaseFontElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vface;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("basefont");
    nodeList = doc.getElementsByTagName("basefont");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vface = testNode.face;
    test.equal(vface, "arial,helvitica", "faceLink");
    test.done();
  },

  /**
   *
   The size attribute specifies the base font's size.
   Retrieve the size attribute and examine it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-38930424
   */
  HTMLBaseFontElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsize;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("basefont");
    nodeList = doc.getElementsByTagName("basefont");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vsize = testNode.size;
    test.equal(vsize, 4, "sizeLink");
    test.done();
  },

  /**
   *
   The aLink attribute specifies the color of active links.
   Retrieve the aLink attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59424581
   */
  HTMLBodyElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valink;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("body");
    nodeList = doc.getElementsByTagName("body");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valink = testNode.aLink;
    test.equal(valink, "#0000ff", "aLinkLink");
    test.done();
  },

  /**
   *
   The background attribute specifies the URI fo the background texture
   tile image.
   Retrieve the background attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-37574810
   */
  HTMLBodyElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbackground;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("body");
    nodeList = doc.getElementsByTagName("body");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vbackground = testNode.background;
    test.equal(vbackground, "./pix/back1.gif", "backgroundLink");
    test.done();
  },

  /**
   *
   The bgColor attribute specifies the document background color.
   Retrieve the bgColor attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-24940084
   */
  HTMLBodyElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbgcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("body");
    nodeList = doc.getElementsByTagName("body");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vbgcolor = testNode.bgColor;
    test.equal(vbgcolor, "#ffff00", "bgColorLink");
    test.done();
  },

  /**
   *
   The link attribute specifies the color of links that are not active
   and unvisited.
   Retrieve the link attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-7662206
   */
  HTMLBodyElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlink;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("body");
    nodeList = doc.getElementsByTagName("body");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlink = testNode.link;
    test.equal(vlink, "#ff0000", "linkLink");
    test.done();
  },

  /**
   *
   The text attribute specifies the document text color.
   Retrieve the text attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-73714763
   */
  HTMLBodyElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtext;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("body");
    nodeList = doc.getElementsByTagName("body");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtext = testNode.text;
    test.equal(vtext, "#000000", "textLink");
    test.done();
  },

  /**
   *
   The vLink attribute specifies the color of links that have been
   visited by the user.
   Retrieve the vLink attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83224305
   */
  HTMLBodyElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvlink;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("body");
    nodeList = doc.getElementsByTagName("body");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvlink = testNode.vLink;
    test.equal(vvlink, "#00ffff", "vLinkLink");
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("hTmL", null) returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-62018039
   */
  HTMLBodyElement07: function(test) {
    var success;
    var doc;
    var body;
    var state;
    var version = null;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    body = doc.body;
    state = body.isSupported("hTmL",version);
    test.ok(state, 'isSupportedHTML');
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("hTmL", "2.0") returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-62018039
   */
  HTMLBodyElement08: function(test) {
    var success;
    var doc;
    var body;
    var state;
    var version = "2.0";
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    body = doc.body;
    state = body.isSupported("hTmL",version);
    test.ok(state, 'isSupportedHTML');
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("xhTmL", null) returns true if hasFeature("XML", null) is true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-62018039
   */
  HTMLBodyElement09: function(test) {
    var success;
    var doc;
    var body;
    var state;
    var hasXML;
    var version = null;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    body = doc.body;
    hasXML = body.isSupported("XML",version);
    state = body.isSupported("xhTmL",version);
    test.equal(state, hasXML, "isSupportedXHTML");
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("xhTmL", "2.0") returns true if hasFeature("XML", "2.0") is true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-62018039
   */
  HTMLBodyElement10: function(test) {
    var success;
    var doc;
    var body;
    var state;
    var hasXML;
    var version = "2.0";
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    body = doc.body;
    hasXML = body.isSupported("XML",version);
    state = body.isSupported("xhTmL",version);
    test.equal(state, hasXML, "isSupportedXHTML");
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("cOrE", null) returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-62018039
   */
  HTMLBodyElement11: function(test) {
    var success;
    var doc;
    var body;
    var state;
    var version = null;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    body = doc.body;
    state = body.isSupported("cOrE",version);
    test.ok(state, 'isSupportedCore');
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("cOrE", "2.0") returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-62018039
   */
  HTMLBodyElement12: function(test) {
    var success;
    var doc;
    var body;
    var state;
    var version = "2.0";
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    body = doc.body;
    state = body.isSupported("cOrE",version);
    test.ok(state, 'isSupportedCore');
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71254493
   */
  HTMLButtonElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var fNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "form2", "formLink");
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   form.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71254493
   */
  HTMLButtonElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The accessKey attribute returns a single character access key to
   give access to the form control.
   Retrieve the accessKey attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-73169431
   */
  HTMLButtonElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "f", "accessKeyLink");
    test.done();
  },

  /**
   *
   The disabled attribute specifies whether the control is unavailable
   in this context.
   Retrieve the disabled attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-92757155
   */
  HTMLButtonElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vdisabled = testNode.disabled;
    test.ok(vdisabled, 'disabledLink');
    test.done();
  },

  /**
   *
   The name attribute is the form control or object name when submitted
   with a form.
   Retrieve the name attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-11029910
   */
  HTMLButtonElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "disabledButton", "nameLink");
    test.done();
  },

  /**
   *
   The tabIndex attribute specifies an index that represents the element's
   position in the tabbing order.
   Retrieve the tabIndex attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39190908
   */
  HTMLButtonElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 20, "tabIndexLink");
    test.done();
  },

  /**
   *
   The type attribute specifies the type of button.
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-27430092
   */
  HTMLButtonElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "reset", "typeLink");
    test.done();
  },

  /**
   *
   The value attribute specifies the current control value.
   Retrieve the value attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-72856782
   */
  HTMLButtonElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vvalue = testNode.value;
    test.equal(vvalue, "Reset Disabled Button", "valueLink");
    test.done();
  },

  /**
   *
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test ordinal index).
   Retrieve the first TABLE element and create a HTMLCollection by invoking
   the "rows" attribute.  The item located at ordinal index 0 is further
   retrieved and its "rowIndex" attribute is examined.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33262535
   */
  HTMLCollection01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowNode;
    var rowsnodeList;
    var vrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    rowNode = rowsnodeList.item(0);
    vrowindex = rowNode.rowIndex;
    test.equal(vrowindex, 0, "rowIndexLink");
    test.done();
  },

  /**
   *
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test node name).
   Retrieve the first FORM element and create a HTMLCollection by invoking
   the elements attribute.  The first SELECT element is further retrieved
   using the elements name attribute.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76728479
   */
  HTMLCollection02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var formNode;
    var formsnodeList;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    formsnodeList = testNode.elements;
    formNode = formsnodeList.namedItem("select1");
    vname = formNode.nodeName;
    test.equal(vname, 'SELECT', 'nameIndexLink');
    test.done();
  },

  /**
   *
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test id attribute).
   Retrieve the first FORM element and create a HTMLCollection by invoking
   the "element" attribute.  The first SELECT element is further retrieved
   using the elements id.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-21069976
   */
  HTMLCollection03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var formNode;
    var formsnodeList;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    formsnodeList = testNode.elements;
    formNode = formsnodeList.namedItem("selectId");
    vname = formNode.nodeName;
    test.equal(vname, 'SELECT', 'nameIndexLink');
    test.done();
  },

  /**
   *
   HTMLCollections are live, they are automatically updated when the
   underlying document is changed.
   Create a HTMLCollection object by invoking the rows attribute of the
   first TABLE element and examine its length, then add a new row and
   re-examine the length.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40057551
   */
  HTMLCollection04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowLength1;
    var rowLength2;
    var rowsnodeList;
    var newRow;
    var vrowindex;
    var doc;
    var result = new Array();
    expectedResult = new Array();
    expectedResult[0] = 4;
    expectedResult[1] = 5;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    rowLength1 = rowsnodeList.length;
    result[result.length] = rowLength1;
    newRow = testNode.insertRow(4);
    rowLength2 = rowsnodeList.length;
    result[result.length] = rowLength2;
    test.deepEqual(result, expectedResult, 'rowIndexLink');
    test.done();
  },

  /**
   *
   The length attribute specifies the length or size of the list.
   Retrieve the first TABLE element and create a HTMLCollection by invoking
   the "rows" attribute.  Retrieve the length attribute of the HTMLCollection
   object.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40057551
   */
  HTMLCollection05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowsnodeList;
    var rowLength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    rowLength = rowsnodeList.length;
    test.equal(rowLength, 4, "rowIndexLink");
    test.done();
  },

  /**
   *
   An item(index) method retrieves an item specified by ordinal index
   (Test for index=0).
   Retrieve the first TABLE element and create a HTMLCollection by invoking
   the "rows" attribute.  The item located at ordinal index 0 is further
   retrieved and its "rowIndex" attribute is examined.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6156016
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33262535
   */
  HTMLCollection06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowNode;
    var rowsnodeList;
    var vrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    rowNode = rowsnodeList.item(0);
    vrowindex = rowNode.rowIndex;
    test.equal(vrowindex, 0, "rowIndexLink");
    test.done();
  },

  /**
   *
   An item(index) method retrieves an item specified by ordinal index
   (Test for index=3).
   Retrieve the first TABLE element and create a HTMLCollection by invoking
   the "rows" attribute.  The item located at ordinal index 3 is further
   retrieved and its "rowIndex" attribute is examined.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33262535
   */
  HTMLCollection07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowNode;
    var rowsnodeList;
    var vrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    rowNode = rowsnodeList.item(3);
    vrowindex = rowNode.rowIndex;
    test.equal(vrowindex, 3, "rowIndexLink");
    test.done();
  },

  /**
   *
   Nodes in a HTMLCollection object are numbered in tree order.
   (Depth-first traversal order).
   Retrieve the first TABLE element and create a HTMLCollection by invoking
   the "rows" attribute.  Access the item in the third ordinal index.  The
   resulting rowIndex attribute is examined and should be two.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33262535
   */
  HTMLCollection08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowNode;
    var rowsnodeList;
    var vrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    rowNode = rowsnodeList.item(2);
    vrowindex = rowNode.rowIndex;
    test.equal(vrowindex, 2, "rowIndexLink");
    test.done();
  },

  /**
   *
   The item(index) method returns null if the index is out of range.
   Retrieve the first TABLE element and create a HTMLCollection by invoking
   the "rows" attribute.  Invoke the item(index) method with an index
   of 5.  This index is out of range and should return null.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33262535
   */
  HTMLCollection09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowNode;
    var rowsnodeList;
    var vrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    rowNode = rowsnodeList.item(5);
    test.equal(rowNode, null, 'rowNode should be null');
    test.done();
  },

  /**
   *
   The namedItem(name) method retrieves a node using a name.  It first
   searches for a node with a matching id attribute.  If it doesn't find
   one, it then searches for a Node with a matching name attribute, but only
   on those elements that are allowed a name attribute.
   Retrieve the first FORM element and create a HTMLCollection by invoking
   the elements attribute.  The first SELECT element is further retrieved
   using the elements name attribute since the id attribute doesn't match.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-21069976
   */
  HTMLCollection10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var formNode;
    var formsnodeList;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    formsnodeList = testNode.elements;
    formNode = formsnodeList.namedItem("select1");
    vname = formNode.nodeName;
    test.equal(vname, 'SELECT', 'nameIndexLink');
    test.done();
  },

  /**
   *
   The namedItem(name) method retrieves a node using a name.  It first
   searches for a node with a matching id attribute.  If it doesn't find
   one, it then searches for a Node with a matching name attribute, but only
   on those elements that are allowed a name attribute.
   Retrieve the first FORM element and create a HTMLCollection by invoking
   the elements attribute.  The first SELECT element is further retrieved
   using the elements id attribute.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76728479
   */
  HTMLCollection11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var formNode;
    var formsnodeList;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    formsnodeList = testNode.elements;
    formNode = formsnodeList.namedItem("selectId");
    vname = formNode.nodeName;
    test.equal(vname, 'SELECT', 'nameIndexLink');
    test.done();
  },

  /**
   *
   The namedItem(name) method retrieves a node using a name.  It first
   searches for a node with a matching id attribute.  If it doesn't find
   one, it then searches for a Node with a matching name attribute, but only
   on those elements that are allowed a name attribute. If there isn't
   a matching node the method returns null.
   Retrieve the first FORM element and create a HTMLCollection by invoking
   the elements attribute.  The method returns null since there is not a
   match of the name or id attribute.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-21069976
   */
  HTMLCollection12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var formNode;
    var formsnodeList;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("collection");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    formsnodeList = testNode.elements;
    formNode = formsnodeList.namedItem("select9");
    test.equal(formNode, null, 'formNode should be null');
    test.done();
  },

  /**
   *
   The compact attribute specifies a boolean value on whether to display
   the list more compactly.
   Retrieve the compact attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75317739
   */
  HTMLDirectoryElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcompact;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("directory");
    nodeList = doc.getElementsByTagName("dir");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcompact = testNode.compact;
    test.ok(vcompact, 'compactLink');
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal text alignment.
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-70908791
   */
  HTMLDivElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("div");
    nodeList = doc.getElementsByTagName("div");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The compact attribute specifies a boolean value on whether to display
   the list more compactly.
   Retrieve the compact attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-21738539
   */
  HTMLDlistElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcompact;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("dl");
    nodeList = doc.getElementsByTagName("dl");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcompact = testNode.compact;
    test.ok(vcompact, 'compactLink');
    test.done();
  },

  /**
   *
   The title attribute is the specified title as a string.
   Retrieve the title attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-18446827
   */
  HTMLDocument01: function(test) {
    var success;
    var nodeList;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vtitle = doc.title;
    test.equal(vtitle, "NIST DOM HTML Test - DOCUMENT", "titleLink");
    test.done();
  },

  /**
   *
   The referrer attribute returns the URI of the page that linked to this
   page.
   Retrieve the referrer attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95229140
   */
  HTMLDocument02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vreferrer;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vreferrer = doc.referrer;
    test.equal(vreferrer, "", "referrerLink");

    // Test configuration of referrer value.
    doc = load("document", { referrer:'http://www.example.com' });
    vreferrer = doc.referrer;
    test.equal(vreferrer, "http://www.example.com", "referrerLink");

    test.done();
  },

  /**
   *
   The domain attribute specifies the domain name of the server that served
   the document, or null if the server cannot be identified by a domain name.
   Retrieve the domain attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-2250147
   */
  HTMLDocument03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdomain;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vdomain = doc.domain;
    test.equal(vdomain, "", "domainLink");
    test.done();
  },

  /**
   *
   The URL attribute specifies the absolute URI of the document.
   Retrieve the URL attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-46183437
   */
  HTMLDocument04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vurl;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vurl = doc.URL;
    test.equal(vurl, toFileUrl('html/files/document.html'), 'URLLink');
    test.done();
  },

  /**
   *
   The body attribute is the element that contains the content for the
   document.
   Retrieve the body attribute and examine its value for the id attribute.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-56360201
   */
  HTMLDocument05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbody;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vbody = doc.body;
    vid = vbody.id;
    test.equal(vid, "TEST-BODY", "idLink");
    test.done();
  },

  /**
   *
   The images attribute returns a collection of all IMG elements in a document.
   Retrieve the images attribute from the document and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-90379117
   */
  HTMLDocument07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vimages;
    var vlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vimages = doc.images;
    vlength = vimages.length;
    test.equal(vlength, 1, "lengthLink");
    test.done();
  },

  /**
   *
   The applets attribute returns a collection of all OBJECT elements that
   include applets abd APPLET elements in a document.
   Retrieve the applets attribute from the document and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-85113862
   */
  HTMLDocument08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vapplets;
    var vlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vapplets = doc.applets;
    vlength = vapplets.length;
    test.equal(vlength, 4, "length");
    test.done();
  },

  /**
   *
   The links attribute returns a collection of all AREA and A elements
   in a document with a value for the href attribute.
   Retrieve the links attribute from the document and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-7068919
   */
  HTMLDocument09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlinks;
    var vlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vlinks = doc.links;
    vlength = vlinks.length;
    test.equal(vlength, 3, "lengthLink");
    test.done();
  },

  /**
   *
   The forms attribute returns a collection of all the forms in a document.
   Retrieve the forms attribute from the document and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-1689064
   */
  HTMLDocument10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vforms;
    var vlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vforms = doc.forms;
    vlength = vforms.length;
    test.equal(vlength, 1, "lengthLink");
    test.done();
  },

  /**
   *
   The anchors attribute returns a collection of all A elements with values
   for the name attribute.
   Retrieve the anchors attribute from the document and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-7577272
   */
  HTMLDocument11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vanchors;
    var vlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vanchors = doc.anchors;
    vlength = vanchors.length;
    test.equal(vlength, 1, "lengthLink");
    test.done();
  },

  /**
   *
   The cookie attribute returns the cookies associated with this document.
   Retrieve the cookie attribute and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-8747038
   * Updated with multiple-cookie test by dai-shi in GH-738.
   */
  HTMLDocument12: function(test) {
    var success;
    var nodeList;
    var vcookie;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    vcookie = doc.cookie;
    test.equal(vcookie, "", "cookieLink");

    doc = load("document", { cookie:false } );
    vcookie = doc.cookie;
    test.equal(vcookie, "", "cookieLink");

    future = new Date();
    future.setTime( future.getTime() + (24 * 60 * 60 * 1000) );
    cookie = 'key=value; expires='+future.toGMTString()+'; path=/';
    doc = load("document", { cookie:cookie });
    vcookie = doc.cookie;
    test.equal(vcookie, "key=value", "cookieLink");

    doc = load("document");
    doc.cookie = "key1=value1";
    doc.cookie = "key2=value2";
    vcookie = doc.cookie;
    test.equal(vcookie, "key1=value1; key2=value2", "cookieLink");

    doc = load("document");
    doc.cookie = "key3=value3; max-age=300";
    doc.cookie = "key4=value4; path=/";
    vcookie = doc.cookie;
    test.equal(vcookie, "key3=value3; key4=value4", "cookieLink");

    test.done();
  },

  /**
   *
   The getElementsByName method returns the (possibly empty) collection
   of elements whose name value is given by the elementName.
   Retrieve all the elements whose name attribute is "mapid".
   Check the length of the nodelist.  It should be 1.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71555259
   */
  HTMLDocument13: function(test) {
    var success;
    var nodeList;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    nodeList = doc.getElementsByName("mapid");
    test.equal(nodeList.length, 1, 'Asize');
    test.done();
  },

  /**
   *
   The getElementsByName method returns the (possibly empty) collection
   of elements whose name value is given by the elementName.
   Retrieve all the elements whose name attribute is "noid".
   Check the length of the nodelist.  It should be 0 since
   the id "noid" does not exist.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71555259
   */
  HTMLDocument14: function(test) {
    var success;
    var nodeList;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    nodeList = doc.getElementsByName("noid");
    test.equal(nodeList.length, 0, 'Asize');
    test.done();
  },

  /**
   *
   The getElementById method returns the Element whose id is given by
   elementId.  If no such element exists, returns null.
   Retrieve the element whose id is "mapid".
   Check the value of the element.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-36113835
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-26809268
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBId
   */
  HTMLDocument15: function(test) {
    var success;
    var elementNode;
    var elementValue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    elementNode = doc.getElementById("mapid");
    elementValue = elementNode.nodeName;
    test.equal(elementValue, 'MAP', 'elementId');
    test.done();
  },

  /**
   *
   The getElementById method returns the Element whose id is given by
   elementId.  If no such element exists, returns null.
   Retrieve the element whose id is "noid".
   The value returned should be null since there are not any elements with
   an id of "noid".
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-36113835
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-26809268
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-getElBId
   */
  HTMLDocument16: function(test) {
    var success;
    var elementNode;
    var elementValue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    elementNode = doc.getElementById("noid");
    test.equal(elementNode, null, 'elementNode should be null');
    test.done();
  },

  /**
   *
   Clears the current document using HTMLDocument.open immediately followed by close.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-72161170
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98948567
   */
  HTMLDocument17: function(test) {
    var success;
    var doc;
    var bodyElem;
    var bodyChild;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    doc.open();
    doc.close();
    bodyElem = doc.body;
    if(
      (bodyElem != null)
    ) {
      bodyChild = bodyElem.firstChild;
      test.equal(bodyChild, null, 'bodyChild should be null');
    }
    test.done();
  },

  /**
   *
   Calls HTMLDocument.close on a document that has not been opened for modification.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98948567
   */
  HTMLDocument18: function(test) {
    var success;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    doc.close();
    test.done();
  },

  /**
   *
   Replaces the current document with a valid HTML document using HTMLDocument.open, write and close.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-72161170
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98948567
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75233634
   */
  HTMLDocument19: function(test) {
    var success;
    var doc;
    var docElem;
    var title;
    doc = load("document");
    doc.open();
    doc.write("&lt;html>");
    doc.write("&lt;body>");
    doc.write("&lt;title>Replacement&lt;/title>");
    doc.write("&lt;/body>");
    doc.write("&lt;p>");
    doc.write("Hello, World.");
    doc.write("&lt;/p>");
    doc.write("&lt;/body>");
    doc.write("&lt;/html>");
    doc.close();
    test.done();
  },

  /**
   *
   Replaces the current document with a valid HTML document using HTMLDocument.open, writeln and close.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-72161170
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98948567
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-35318390
   */
  HTMLDocument20: function(test) {
    var success;
    var doc;
    var docElem;
    var title;
    doc = load("document");
    doc.open();
    doc.writeln("&lt;html>");
    doc.writeln("&lt;body>");
    doc.writeln("&lt;title>Replacement&lt;/title>");
    doc.writeln("&lt;/body>");
    doc.writeln("&lt;p>");
    doc.writeln("Hello, World.");
    doc.writeln("&lt;/p>");
    doc.writeln("&lt;/body>");
    doc.writeln("&lt;/html>");
    doc.close();
    test.done();
  },

  /**
   *
   Replaces the current document checks that writeln adds a new line.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-72161170
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98948567
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75233634
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-35318390
   */
  HTMLDocument21: function(test) {
    var doc = load("document");
    doc.open();
    doc.writeln("&lt;html>");
    doc.writeln("&lt;body>");
    doc.writeln("&lt;title>Replacement&lt;/title>");
    doc.writeln("&lt;/body>");
    doc.write("&lt;pre>");
    doc.writeln("Hello, World.");
    doc.writeln("Hello, World.");
    doc.writeln("&lt;/pre>");
    doc.write("&lt;pre>");
    doc.write("Hello, World.");
    doc.write("Hello, World.");
    doc.writeln("&lt;/pre>");
    doc.writeln("&lt;/body>");
    doc.writeln("&lt;/html>");
    doc.close();
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("hTmL", null) returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-26809268
   */
  HTMLDocument22: function(test) {
    var success;
    var doc;
    var state;
    var version = null;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    state = doc.isSupported("hTmL",version);
    test.ok(state, 'isSupportedHTML');
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("hTmL", "2.0") returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-26809268
   */
  HTMLDocument23: function(test) {
    var success;
    var doc;
    var state;
    var version = "2.0";
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    state = doc.isSupported("hTmL",version);
    test.ok(state, 'isSupportedHTML');
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("xhTmL", null) returns true if hasFeature("XML", null) is true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-26809268
   */
  HTMLDocument24: function(test) {
    var success;
    var doc;
    var state;
    var hasXML;
    var version = null;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    hasXML = doc.isSupported("XML",version);
    state = doc.isSupported("xhTmL",version);
    test.equal(state, hasXML, "isSupportedXHTML");
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("xhTmL", "2.0") returns true if hasFeature("XML", "2.0") is true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-26809268
   */
  HTMLDocument25: function(test) {
    var success;
    var doc;
    var state;
    var hasXML;
    var version = "2.0";
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    hasXML = doc.isSupported("XML",version);
    state = doc.isSupported("xhTmL",version);
    test.equal(state, hasXML, "isSupportedXHTML");
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("cOrE", null) returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-26809268
   */
  HTMLDocument26: function(test) {
    var success;
    var doc;
    var state;
    var version = null;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    state = doc.isSupported("cOrE",version);
    test.ok(state, 'isSupportedCore');
    test.done();
  },

  /**
   *
   Checks that Node.isSupported("cOrE", "2.0") returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#Level-2-Core-Node-supports
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-26809268
   */
  HTMLDocument27: function(test) {
    var success;
    var doc;
    var state;
    var version = "2.0";
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("document");
    state = doc.isSupported("cOrE",version);
    test.ok(state, 'isSupportedCore');
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the HEAD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("head");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-HEAD", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the SUB element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sub");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-SUB", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the SUP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-SUP", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the SPAN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("span");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-SPAN", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the BDO element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("bdo");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-BDO", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the TT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("tt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-TT", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the I element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("i");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-I", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the B element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("b");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-B", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the U element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("u");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-U", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the S element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("s");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-S", "idLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the SMALL element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement100: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("small");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the EM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement101: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("em");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the STRONG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement102: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strong");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the DFN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement103: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dfn");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the CODE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement104: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("code");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the SAMP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement105: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("samp");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the KBD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement106: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("kbd");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the VAR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement107: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("var");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the CITE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement108: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("cite");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the ACRONYM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement109: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("acronym");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the STRIKE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strike");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-STRIKE", "idLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the ABBR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement110: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("abbr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the DD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement111: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dd");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the DT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement112: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the NOFRAMES element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement113: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noframes");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the NOSCRIPT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement114: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noscript");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the ADDRESS element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement115: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("address");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the CENTER element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement116: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("center");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the HEAD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement117: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("head");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "HEAD-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the SUB element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement118: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sub");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "SUB-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the SUP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement119: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "SUP-class", "classNameLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the BIG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("big");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-BIG", "idLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the SPAN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement120: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("span");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "SPAN-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the BDO element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement121: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("bdo");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "BDO-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the TT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement122: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("tt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "TT-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the I element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement123: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("i");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "I-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the B element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement124: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("b");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "B-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the U element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement125: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("u");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "U-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the S element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement126: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("s");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "S-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the STRIKE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement127: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strike");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "STRIKE-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the BIG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement128: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("big");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "BIG-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the SMALL element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement129: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("small");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "SMALL-class", "classNameLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the SMALL element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("small");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-SMALL", "idLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the EM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement130: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("em");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "EM-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the STRONG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement131: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strong");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "STRONG-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the DFN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement132: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dfn");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "DFN-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the CODE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement133: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("code");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "CODE-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the SAMP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement134: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("samp");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "SAMP-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the KBD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement135: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("kbd");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "KBD-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the VAR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement136: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("var");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "VAR-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the CITE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement137: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("cite");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "CITE-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the ACRONYM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement138: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("acronym");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "ACRONYM-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the ABBR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement139: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("abbr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "ABBR-class", "classNameLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the EM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("em");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-EM", "idLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the DD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement140: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dd");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "DD-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the DT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement141: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "DT-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the NOFRAMES element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement142: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noframes");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "NOFRAMES-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the NOSCRIPT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement143: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noscript");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "NOSCRIPT-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the ADDRESS element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement144: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("address");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "ADDRESS-class", "classNameLink");
    test.done();
  },

  /**
   *
   The className attribute specifies the class attribute of the element.
   Retrieve the class attribute of the CENTER element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95362176
   */
  HTMLElement145: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vclassname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("center");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vclassname = testNode.className;
    test.equal(vclassname, "CENTER-class", "classNameLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the STRONG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strong");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-STRONG", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the DFN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement16: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dfn");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-DFN", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the CODE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("code");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-CODE", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the SAMP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("samp");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-SAMP", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the KBD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("kbd");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-KBD", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the VAR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement20: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("var");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-VAR", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the CITE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement21: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("cite");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-CITE", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the ACRONYM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement22: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("acronym");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-ACRONYM", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the ABBR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement23: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("abbr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-ABBR", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the DD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement24: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dd");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-DD", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the DT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement25: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-DT", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the NOFRAMES element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement26: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noframes");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-NOFRAMES", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the NOSCRIPT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement27: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noscript");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-NOSCRIPT", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the ADDRESS element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement28: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("address");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-ADDRESS", "idLink");
    test.done();
  },

  /**
   *
   The id specifies the elements identifier.
   Retrieve the id attribute of the CENTER element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  HTMLElement29: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vid;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("center");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vid = testNode.id;
    test.equal(vid, "Test-CENTER", "idLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the HEAD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement30: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("head");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "HEAD Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the SUB element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement31: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sub");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "SUB Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the SUP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement32: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "SUP Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the SPAN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement33: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("span");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "SPAN Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the BDO element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement34: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("bdo");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "BDO Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the TT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement35: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("tt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "TT Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the I element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement36: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("i");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "I Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the B element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement37: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("b");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "B Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the U element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement38: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("u");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "U Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the S element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement39: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("s");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "S Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the STRIKE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement40: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strike");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "STRIKE Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the BIG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement41: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("big");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "BIG Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the SMALL element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement42: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("small");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "SMALL Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the EM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement43: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("em");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "EM Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the STRONG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement44: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strong");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "STRONG Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the DFN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement45: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dfn");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "DFN Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the CODE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement46: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("code");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "CODE Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the SAMP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement47: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("samp");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "SAMP Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the KBD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement48: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("kbd");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "KBD Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the VAR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement49: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("var");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "VAR Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the CITE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement50: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("cite");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "CITE Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the ACRONYM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement51: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("acronym");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "ACRONYM Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the ABBR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement52: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("abbr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "ABBR Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the DD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement53: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dd");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "DD Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the DT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement54: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "DT Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the NOFRAMES element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement55: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noframes");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "NOFRAMES Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the NOSCRIPT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement56: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noscript");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "NOSCRIPT Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the ADDRESS element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement57: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("address");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "ADDRESS Element", "titleLink");
    test.done();
  },

  /**
   *
   The title attribute specifies the elements advisory title.
   Retrieve the title attribute of the CENTER element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78276800
   */
  HTMLElement58: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("center");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtitle = testNode.title;
    test.equal(vtitle, "CENTER Element", "titleLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the HEAD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement59: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("head");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the SUB element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement60: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sub");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the SUP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement61: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the SPAN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement62: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("span");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the BDO element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement63: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("bdo");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the TT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement64: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("tt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the I element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement65: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("i");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the B element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement66: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("b");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the U element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement67: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("u");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the S element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement68: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("s");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the STRIKE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement69: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strike");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the BIG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement70: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("big");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the SMALL element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement71: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("small");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the EM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement72: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("em");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the STRONG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement73: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strong");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the DFN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement74: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dfn");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the CODE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement75: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("code");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the SAMP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement76: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("samp");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the KBD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement77: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("kbd");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the VAR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement78: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("var");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the CITE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement79: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("cite");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the ACRONYM element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement80: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("acronym");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the ABBR element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement81: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("abbr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the DD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement82: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dd");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the DT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement83: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("dt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the NOFRAMES element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement84: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noframes");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the NOSCRIPT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement85: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("noscript");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the ADDRESS element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement86: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("address");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The lang attribute specifies the language code defined in RFC 1766.
   Retrieve the lang attribute of the CENTER element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59132807
   */
  HTMLElement87: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("center");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vlang = testNode.lang;
    test.equal(vlang, "en", "langLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the HEAD element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement88: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("head");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the SUB element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement89: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sub");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the SUP element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement90: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("sup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the SPAN element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement91: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("span");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the BDO element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement92: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("bdo");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the TT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement93: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("tt");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the I element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement94: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("i");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the B element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement95: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("b");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the U element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement96: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("u");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the S element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement97: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("s");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the STRIKE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement98: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("strike");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The dir attribute specifies the base direction of directionally neutral text and the directionality of tables.
   Retrieve the dir attribute of the BIG element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52460740
   */
  HTMLElement99: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdir;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("element");
    nodeList = doc.getElementsByTagName("big");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdir = testNode.dir;
    test.equal(vdir, "ltr", "dirLink");
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75392630
   */
  HTMLFieldSetElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var fNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("fieldset");
    nodeList = doc.getElementsByTagName("fieldset");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "form2", "formLink");
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   form.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75392630
   */
  HTMLFieldSetElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("fieldset");
    nodeList = doc.getElementsByTagName("fieldset");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The color attribute specifies the font's color.
   Retrieve the color attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-53532975
   */
  HTMLFontElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("font");
    nodeList = doc.getElementsByTagName("font");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcolor = testNode.color;
    test.equal(vcolor, "#000000", "colorLink");
    test.done();
  },

  /**
   *
   The face attribute specifies the font's face identifier.
   Retrieve the face attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-55715655
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTML-HTMLFormElement-length
   */
  HTMLFontElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vface;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("font");
    nodeList = doc.getElementsByTagName("font");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vface = testNode.face;
    test.equal(vface, "arial,helvetica", "faceLink");
    test.done();
  },

  /**
   *
   The size attribute specifies the font's size.
   Retrieve the size attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-90127284
   */
  HTMLFontElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsize;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("font");
    nodeList = doc.getElementsByTagName("font");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vsize = testNode.size;
    test.equal(vsize, "4", "sizeLink");
    test.done();
  },

  /**
   *
   The elements attribute specifies a collection of all control element
   in the form.
   Retrieve the elements attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76728479
   */
  HTMLFormElement01: function(test) {
    var success;
    var nodeList;
    var elementnodeList;
    var testNode;
    var velements;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    elementnodeList = testNode.elements;
    velements = elementnodeList.length;
    test.equal(velements, 3, "elementsLink");
    test.done();
  },

  /**
   *
   The length attribute specifies the number of form controls
   in the form.
   Retrieve the length attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40002357
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTML-HTMLFormElement-length
   */
  HTMLFormElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlength = testNode.length;
    test.equal(vlength, 3, "lengthLink");
    test.done();
  },

  /**
   *
   The id(name) attribute specifies the name of the form.
   Retrieve the id attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-22051454
   */
  HTMLFormElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.id;
    test.equal(vname, "form1", "nameLink");
    test.done();
  },

  /**
   *
   The acceptCharset attribute specifies the list of character sets
   supported by the server.
   Retrieve the acceptCharset attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-19661795
   */
  HTMLFormElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vacceptcharset;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vacceptcharset = testNode.acceptCharset;
    test.equal(vacceptcharset, "US-ASCII", "acceptCharsetLink");
    test.done();
  },

  /**
   *
   The action attribute specifies the server-side form handler.
   Retrieve the action attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-74049184
   */
  HTMLFormElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaction;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vaction = testNode.action;
    test.equal(vaction, './files/getData.pl', 'actionLink');
    test.done();
  },

  /**
   *
   The enctype attribute specifies the content of the submitted form.
   Retrieve the enctype attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-84227810
   */
  HTMLFormElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var venctype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    venctype = testNode.enctype;
    test.equal(venctype, "application/x-www-form-urlencoded", "enctypeLink");
    test.done();
  },

  /**
   *
   The method attribute specifies the HTTP method used to submit the form.
   Retrieve the method attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-82545539
   */
  HTMLFormElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmethod;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vmethod = testNode.method;
    test.equal(vmethod, "post", "methodLink");
    test.done();
  },

  /**
   *
   The target attribute specifies the frame to render the resource in.
   Retrieve the target attribute and examine it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6512890
   */
  HTMLFormElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtarget;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form2");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtarget = testNode.target;
    test.equal(vtarget, "dynamic", "targetLink");
    test.done();
  },

  /**
   *
   HTMLFormElement.reset restores the forms default values.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76767677
   */
  HTMLFormElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form2");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    testNode.reset();
    test.done();
  },

  /**
   *
   HTMLFormElement.submit submits the form.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76767676
   */
  HTMLFormElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("form3");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    testNode.submit();
    test.done();
  },

  /**
   *
   The frameBorder attribute specifies the request for frame borders.
   (frameBorder=1 A border is drawn)
   (FrameBorder=0 A border is not drawn)
   Retrieve the frameBorder attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-11858633
   */
  HTMLFrameElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vframeborder;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame");
    nodeList = doc.getElementsByTagName("frame");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vframeborder = testNode.frameBorder;
    test.equal(vframeborder, "1", "frameborderLink");
    test.done();
  },

  /**
   *
   The longDesc attribute specifies a URI designating a long description
   of this image or frame.
   Retrieve the longDesc attribute of the first FRAME element and examine
   its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-7836998
   */
  HTMLFrameElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlongdesc;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame");
    nodeList = doc.getElementsByTagName("frame");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vlongdesc = testNode.longDesc;
    test.equal(vlongdesc, "about:blank", "longdescLink");
    test.done();
  },

  /**
   *
   The marginHeight attribute specifies the frame margin height, in pixels.
   Retrieve the marginHeight attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-55569778
   */
  HTMLFrameElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmarginheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame");
    nodeList = doc.getElementsByTagName("frame");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vmarginheight = testNode.marginHeight;
    test.equal(vmarginheight, "10", "marginheightLink");
    test.done();
  },

  /**
   *
   The marginWidth attribute specifies the frame margin width, in pixels.
   Retrieve the marginWidth attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-8369969
   */
  HTMLFrameElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmarginwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame");
    nodeList = doc.getElementsByTagName("frame");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vmarginwidth = testNode.marginWidth;
    test.equal(vmarginwidth, "5", "marginwidthLink");
    test.done();
  },

  /**
   *
   The name attribute specifies the frame name(object of the target
   attribute).
   Retrieve the name attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-91128709
   */
  HTMLFrameElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame");
    nodeList = doc.getElementsByTagName("frame");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "Frame1", "nameLink");
    test.done();
  },

  /**
   *
   The noResize attribute specifies if the user can resize the frame.  When
   true, forbid user from resizing frame.
   Retrieve the noResize attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-80766578
   */
  HTMLFrameElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vnoresize;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame");
    nodeList = doc.getElementsByTagName("frame");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vnoresize = testNode.noResize;
    test.ok(vnoresize, 'noresizeLink');
    test.done();
  },

  /**
   *
   The scrolling attribute specifies whether or not the frame should have
   scrollbars.
   Retrieve the scrolling attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-45411424
   */
  HTMLFrameElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vscrolling;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame");
    nodeList = doc.getElementsByTagName("frame");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vscrolling = testNode.scrolling;
    test.equal(vscrolling, "yes", "scrollingLink");
    test.done();
  },

  /**
   *
   The src attribute specifies a URI designating the initial frame contents.
   Retrieve the src attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78799535
   */
  HTMLFrameElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsrc;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame");
    nodeList = doc.getElementsByTagName("frame");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vsrc = testNode.src;
    test.equal(vsrc, './img/right.png', 'srcLink');
    test.done();
  },

  /**
   *
   The contentDocument attribute specifies the document this frame contains,
   if there is any and it is available, or null otherwise.
   Retrieve the contentDocument attribute of the first FRAME element
   and examine its TITLE value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-78799536
   */
  HTMLFrameElement09: function(test) {
    var success;
    var testNode;
    var cd;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frame2");
    doc.onload = function() {
      testNode = doc.getElementById("Frame1");
      cd = testNode.contentDocument;
      vtitle = cd.title;
      // Updated as per: http://lists.w3.org/Archives/Public/www-dom/2009JulSep/0026.html
      test.equal(vtitle, "NIST DOM HTML Test - FRAME", "titleLink");
    };
    test.done();
  },

  /**
   *
   The cols attribute specifies the number of columns of frames in the
   frameset.
   Retrieve the cols attribute of the first FRAMESET element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98869594
   */
  HTMLFrameSetElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcols;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frameset");
    nodeList = doc.getElementsByTagName("frameset");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vcols = testNode.cols;
    test.equal(vcols, "20, 80", "colsLink");
    test.done();
  },

  /**
   *
   The rows attribute specifies the number of rows of frames in the
   frameset.
   Retrieve the rows attribute of the second FRAMESET element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-19739247
   */
  HTMLFrameSetElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("frameset");
    nodeList = doc.getElementsByTagName("frameset");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vrows = testNode.rows;
    test.equal(vrows, "100, 200", "rowsLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the rule alignment on the page.
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-15235012
   */
  HTMLHRElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("hr");
    nodeList = doc.getElementsByTagName("hr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The noShade attribute specifies that the rule should be drawn as
   a solid color.
   Retrieve the noShade attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-79813978
   */
  HTMLHRElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vnoshade;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("hr");
    nodeList = doc.getElementsByTagName("hr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vnoshade = testNode.noShade;
    test.ok(vnoshade, 'noShadeLink');
    test.done();
  },

  /**
   *
   The size attribute specifies the height of the rule.
   Retrieve the size attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-77612587
   */
  HTMLHRElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsize;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("hr");
    nodeList = doc.getElementsByTagName("hr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vsize = testNode.size;
    test.equal(vsize, "5", "sizeLink");
    test.done();
  },

  /**
   *
   The width attribute specifies the width of the rule.
   Retrieve the width attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87744198
   */
  HTMLHRElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("hr");
    nodeList = doc.getElementsByTagName("hr");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, "400", "widthLink");
    test.done();
  },

  /**
   *
   The profile attribute specifies a URI designating a metadata profile.
   Retrieve the profile attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96921909
   */
  HTMLHeadElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vprofile;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("head");
    nodeList = doc.getElementsByTagName("head");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vprofile = testNode.profile;
    test.equal(vprofile, 'http://www.w3.org/2004/07/profile', 'profileLink');
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal text alignment(H1).
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6796462
   */
  HTMLHeadingElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("heading");
    nodeList = doc.getElementsByTagName("h1");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal text alignment(H2).
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6796462
   */
  HTMLHeadingElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("heading");
    nodeList = doc.getElementsByTagName("h2");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "left", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal text alignment(H3).
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6796462
   */
  HTMLHeadingElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("heading");
    nodeList = doc.getElementsByTagName("h3");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "right", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal text alignment(H4).
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6796462
   */
  HTMLHeadingElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("heading");
    nodeList = doc.getElementsByTagName("h4");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "justify", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal text alignment(H5).
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6796462
   */
  HTMLHeadingElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("heading");
    nodeList = doc.getElementsByTagName("h5");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal text alignment(H6).
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6796462
   */
  HTMLHeadingElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("heading");
    nodeList = doc.getElementsByTagName("h6");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "left", "alignLink");
    test.done();
  },

  /**
   *
   The version attribute specifies version information about the document's
   DTD.
   Retrieve the version attribute and examine its value.
   Test is only applicable to HTML, version attribute is not supported in XHTML.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-9383775
   */
  HTMLHtmlElement01: function(test) {
    var nodeList;
    var testNode;
    var vversion;
    var doc;
    doc = load("html");
    nodeList = doc.getElementsByTagName("html");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vversion = testNode.version;
    test.equal(vversion, "-//W3C//DTD HTML 4.01 Transitional//EN", "versionLink");
    test.done();
  },

  /**
   *
   The align attribute aligns this object(vertically or horizontally with
   respect to its surrounding text.
   Retrieve the align attribute of the first IFRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-11309947
   */
  HTMLIFrameElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "top", "alignLink");
    test.done();
  },

  /**
   *
   The frameBorder attribute specifies the request for frame borders.
   (frameBorder=1 A border is drawn)
   (FrameBorder=0 A border is not drawn)
   Retrieve the frameBorder attribute of the first IFRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-22463410
   */
  HTMLIFrameElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vframeborder;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vframeborder = testNode.frameBorder;
    test.equal(vframeborder, "1", "frameborderLink");
    test.done();
  },

  /**
   *
   The height attribute specifies the frame height.
   Retrieve the height attribute of the first IFRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-1678118
   */
  HTMLIFrameElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vheight = testNode.height;
    test.equal(vheight, "50", "heightLink");
    test.done();
  },

  /**
   *
   The longDesc attribute specifies a URI designating a long description
   of this image or frame.
   Retrieve the longDesc attribute of the first IFRAME element and examine
   its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-70472105
   */
  HTMLIFrameElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlongdesc;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlongdesc = testNode.longDesc;
    test.equal(vlongdesc, "about:blank", "longdescLink");
    test.done();
  },

  /**
   *
   The marginWidth attribute specifies the frame margin width, in pixels.
   Retrieve the marginWidth attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-66486595
   */
  HTMLIFrameElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmarginwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vmarginwidth = testNode.marginWidth;
    test.equal(vmarginwidth, "5", "marginwidthLink");
    test.done();
  },

  /**
   *
   The marginHeight attribute specifies the frame margin height, in pixels.
   Retrieve the marginHeight attribute of the first IFRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-91371294
   */
  HTMLIFrameElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmarginheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vmarginheight = testNode.marginHeight;
    test.equal(vmarginheight, "10", "marginheightLink");
    test.done();
  },

  /**
   *
   The name attribute specifies the frame name(object of the target
   attribute).
   Retrieve the name attribute of the first IFRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96819659
   */
  HTMLIFrameElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "Iframe1", "nameLink");
    test.done();
  },

  /**
   *
   The scrolling attribute specifies whether or not the frame should have
   scrollbars.
   Retrieve the scrolling attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-36369822
   */
  HTMLIFrameElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vscrolling;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vscrolling = testNode.scrolling;
    test.equal(vscrolling, "yes", "scrollingLink");
    test.done();
  },

  /**
   *
   The src attribute specifies a URI designating the initial frame contents.
   Retrieve the src attribute of the first FRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-43933957
   */
  HTMLIFrameElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsrc;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vsrc = testNode.src;
    test.equal(vsrc, './img/right.png', 'srcLink');
    test.done();
  },

  /**
   *
   The width attribute specifies the frame width.
   Retrieve the width attribute of the first IFRAME element and examine
   it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-67133005
   */
  HTMLIFrameElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe");
    nodeList = doc.getElementsByTagName("iframe");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, "60", "widthLink");
    test.done();
  },

  /**
   *
   Retrieve the contentDocument attribute of the second IFRAME element
   and examine its title.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-67133006
   */
  HTMLIFrameElement11: function(test) {
    var success;
    var testNode;
    var cd;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("iframe2");
    doc.onload = function() {
      testNode = doc.getElementById("Iframe2");
      cd = testNode.contentDocument;
      vtitle = cd.title;
      test.equal(vtitle, "NIST DOM HTML Test - FRAME", "titleLink");
    };
    test.done();
  },

  /**
   *
   The name attribute specifies the name of the element.
   Retrieve the name attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-47534097
   */
  HTMLImageElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "IMAGE-1", "nameLink");
    test.done();
  },

  /**
   *
   The align attribute aligns this object with respect to its surrounding
   text.
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-3211094
   */
  HTMLImageElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "middle", "alignLink");
    test.done();
  },

  /**
   *
   The alt attribute specifies an alternative text for user agenst not
   rendering the normal content of this element.
   Retrieve the alt attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95636861
   */
  HTMLImageElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valt;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valt = testNode.alt;
    test.equal(valt, "DTS IMAGE LOGO", "altLink");
    test.done();
  },

  /**
   *
   The border attribute specifies the width of the border around the image.
   Retrieve the border attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-136671
   */
  HTMLImageElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vborder;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vborder = testNode.border;
    test.equal(vborder, "0", "borderLink");
    test.done();
  },

  /**
   *
   The height attribute overrides the natural "height" of the image.
   Retrieve the height attribute and examine it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-91561496
   */
  HTMLImageElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vheight = testNode.height;
    test.equal(vheight, 47, "heightLink");
    test.done();
  },

  /**
   *
   The hspace attribute specifies the horizontal space to the left and
   right of this image.
   Retrieve the hspace attribute and examine it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-53675471
   */
  HTMLImageElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhspace;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vhspace = testNode.hspace;
    test.equal(vhspace, 4, "hspaceLink");
    test.done();
  },

  /**
   *
   The isMap attribute indicates the use of server-side image map.
   Retrieve the isMap attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-58983880
   */
  HTMLImageElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vismap;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vismap = testNode.isMap;
    test.equal(vismap, false, 'vismap should be *false*');
    test.done();
  },

  /**
   *
   The longDesc attribute contains an URI designating a long description
   of this image or frame.
   Retrieve the longDesc attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-77376969
   */
  HTMLImageElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlongdesc;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vlongdesc = testNode.longDesc;
    test.equal(vlongdesc, './files/desc.html', 'longDescLink');
    test.done();
  },

  /**
   *
   The src attribute contains an URI designating the source of this image.
   Retrieve the src attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87762984
   */
  HTMLImageElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsrc;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vsrc = testNode.src;
    test.equal(vsrc, toFileUrl('html/files/pix/dts.gif'), 'srcLink');
    test.done();
  },

  /**
   *
   The useMap attribute specifies to use the client-side image map.
   Retrieve the useMap attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-35981181
   */
  HTMLImageElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vusemap;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vusemap = testNode.useMap;
    test.equal(vusemap, "#DTS-MAP", "useMapLink");
    test.done();
  },

  /**
   *
   The vspace attribute specifies the vertical space above and below this
   image.
   Retrieve the vspace attribute and examine it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-85374897
   */
  HTMLImageElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvspace;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvspace = testNode.vspace;
    test.equal(vvspace, 10, "vspaceLink");
    test.done();
  },

  /**
   *
   The width attribute overrides the natural "width" of the image.
   Retrieve the width attribute and examine it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-13839076
   */
  HTMLImageElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("img");
    nodeList = doc.getElementsByTagName("img");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, 115, "widthLink");
    test.done();
  },

  /**
   *
   The defaultValue attribute represents the HTML value of the attribute
   when the type attribute has the value of "Text", "File" or "Password".
   Retrieve the defaultValue attribute of the 1st INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-26091157
   */
  HTMLInputElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdefaultvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    vdefaultvalue = testNode.defaultValue;
    test.equal(vdefaultvalue, "Password", "defaultValueLink");
    test.done();
  },

  /**
   *
   The defaultChecked attribute represents the HTML checked attribute of
   the element when the type attribute has the value checkbox or radio.
   Retrieve the defaultValue attribute of the 4th INPUT element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-20509171
   */
  HTMLInputElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdefaultchecked;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(3);
    vdefaultchecked = testNode.defaultChecked;
    test.ok(vdefaultchecked, 'defaultCheckedLink');
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute of the 1st INPUT element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63239895
   */
  HTMLInputElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var fNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "form1", "formLink");
    test.done();
  },

  /**
   *
   The accept attribute is a comma-seperated list of content types that
   a server processing this form will handle correctly.
   Retrieve the accept attribute of the 9th INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-15328520
   */
  HTMLInputElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccept;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(8);
    vaccept = testNode.accept;
    test.equal(vaccept, 'GIF,JPEG', 'acceptLink');
    test.done();
  },

  /**
   *
   The accessKey attribute is a single character access key to give access
   to the form control.
   Retrieve the accessKey attribute of the 2nd INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59914154
   */
  HTMLInputElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(1);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "c", "accesskeyLink");
    test.done();
  },

  /**
   *
   The align attribute aligns this object(vertically or horizontally)
   with respect to the surrounding text.
   Retrieve the align attribute of the 4th INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96991182
   */
  HTMLInputElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(3);
    valign = testNode.align;
    test.equal(valign.toLowerCase(), "bottom".toLowerCase(), "alignLink");
    test.done();
  },

  /**
   *
   The alt attribute alternates text for user agents not rendering the
   normal content of this element.
   Retrieve the alt attribute of the 1st INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-92701314
   */
  HTMLInputElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valt;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    valt = testNode.alt;
    test.equal(valt, "Password entry", "altLink");
    test.done();
  },

  /**
   *
   The checked attribute represents the current state of the corresponding
   form control when type has the value Radio or Checkbox.
   Retrieve the accept attribute of the 3rd INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-30233917
   */
  HTMLInputElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vchecked;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(2);
    vchecked = testNode.checked;
    test.ok(vchecked, 'checkedLink');
    test.done();
  },

  /**
   *
   The disabled attribute has a TRUE value if it is explicitly set.
   Retrieve the disabled attribute of the 7th INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-50886781
   */
  HTMLInputElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(6);
    vdisabled = testNode.disabled;
    test.ok(vdisabled, 'disabledLink');
    test.done();
  },

  /**
   *
   The maxLength attribute is the maximum number of text characters for text
   fields, when type has the value of Text or Password.
   Retrieve the maxLenght attribute of the 1st INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-54719353
   */
  HTMLInputElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmaxlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    vmaxlength = testNode.maxLength;
    test.equal(vmaxlength, 5, "maxlengthLink");
    test.done();
  },

  /**
   *
   The name attribute is the form control or object name when submitted with
   a form.
   Retrieve the name attribute of the 1st INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-89658498
   */
  HTMLInputElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "Password", "nameLink");
    test.done();
  },

  /**
   *
   The readOnly attribute indicates that this control is read-only when
   type has a value of text or password only.
   Retrieve the readOnly attribute of the 1st INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88461592
   */
  HTMLInputElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vreadonly;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    vreadonly = testNode.readOnly;
    test.ok(vreadonly, 'readonlyLink');
    test.done();
  },

  /**
   *
   The size attribute contains the size information.  Its precise meaning
   is specific to each type of field.
   Retrieve the size attribute of the 1st INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-79659438
   */
  HTMLInputElement13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsize;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    vsize = testNode.size;
    test.equal(vsize, 25, "size");
    test.done();
  },

  /**
   *
   The src attribute specifies the location of the image to decorate the
   graphical submit button when the type has the value Image.
   Retrieve the src attribute of the 8th INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-97320704
   */
  HTMLInputElement14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsrc;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(7);
    vsrc = testNode.src;
    test.equal(vsrc, './pix/submit.gif', 'srcLink');
    test.done();
  },

  /**
   *
   The tabIndex attribute is an index that represents the elements position
   in the tabbing order.
   Retrieve the tabIndex attribute of the 3rd INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-62176355
   */
  HTMLInputElement15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(2);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 9, "tabindexLink");
    test.done();
  },

  /**
   *
   The type attribute is the type of control created.
   Retrieve the type attribute of the 1st INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-62883744
   */
  HTMLInputElement16: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "password", "typeLink");
    test.done();
  },

  /**
   *
   The useMap attribute specifies the use of the client-side image map.
   Retrieve the useMap attribute of the 8th INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-32463706
   */
  HTMLInputElement17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vusemap;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(7);
    vusemap = testNode.useMap;
    test.equal(vusemap, "#submit-map", "usemapLink");
    test.done();
  },

  /**
   *
   The value attribute is the current content of the corresponding form
   control when the type attribute has the value Text, File or Password.
   Retrieve the value attribute of the 2nd INPUT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-49531485
   */
  HTMLInputElement18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(1);
    vvalue = testNode.value;
    test.equal(vvalue, "ReHire", "valueLink");
    test.done();
  },

  /**
   *
   HTMLInputElement.blur should surrender input focus.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-26838235
   */
  HTMLInputElement19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(1);
    testNode.blur();
    test.done();
  },

  /**
   *
   HTMLInputElement.focus should capture input focus.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-65996295
   */
  HTMLInputElement20: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(1);
    testNode.focus();
    test.done();
  },

  /**
   *
   HTMLInputElement.click should change the state of checked on a radio button.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-2651361
   */
  HTMLInputElement21: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var checked;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(1);
    checked = testNode.checked;
    test.equal(checked, false, 'checked should be *false*');
    testNode.click();
    checked = testNode.checked;
    test.ok(checked, 'checkedAfterClick');
    test.done();
  },

  /**
   *
   HTMLInputElement.select should select the contents of a text area.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-34677168
   */
  HTMLInputElement22: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var checked;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("input");
    nodeList = doc.getElementsByTagName("input");
    test.equal(nodeList.length, 9, 'Asize');
    testNode = nodeList.item(0);
    testNode.select();
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87069980
   */
  HTMLIsIndexElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var fNode;
    var doc;
    var prompt;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("isindex");
    nodeList = doc.getElementsByTagName("isindex");
    testNode = nodeList.item(0);
    test.notEqual(testNode, null, 'testNode should not be null');
    prompt = testNode.prompt;
    test.equal(prompt, "New Employee: ", "IsIndex.Prompt");
    fNode = testNode.form;
    test.notEqual(fNode, null, 'fNode should not be null');
    vform = fNode.id;
    test.equal(vform, "form1", "formLink");
    test.equal(nodeList.length, 2, 'Asize');
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   form.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87069980
   */
  HTMLIsIndexElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var prompt;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("isindex");
    nodeList = doc.getElementsByTagName("isindex");
    testNode = nodeList.item(1);
    test.notEqual(testNode, null, 'testNode should not be null');
    prompt = testNode.prompt;
    test.equal(prompt, "Old Employee: ", "IsIndex.Prompt");
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.equal(nodeList.length, 2, 'Asize');
    test.done();
  },

  /**
   *
   The prompt attribute specifies the prompt message.
   Retrieve the prompt attribute of the 1st isindex element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33589862
   */
  HTMLIsIndexElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vprompt;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("isindex");
    nodeList = doc.getElementsByTagName("isindex");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vprompt = testNode.prompt;
    test.equal(vprompt, "New Employee: ", "promptLink");
    test.done();
  },

  /**
   *
   The type attribute is a list item bullet style.
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52387668
   */
  HTMLLIElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("li");
    nodeList = doc.getElementsByTagName("li");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "square", "typeLink");
    test.done();
  },

  /**
   *
   The value attribute is a reset sequence number when used in OL.
   Retrieve the value attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-45496263
   */
  HTMLLIElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("li");
    nodeList = doc.getElementsByTagName("li");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vvalue = testNode.value;
    test.equal(vvalue, 2, "valueLink");
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-32480901
   */
  HTMLLabelElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var fNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("label");
    nodeList = doc.getElementsByTagName("label");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "form1", "formLink");
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   form.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-32480901
   */
  HTMLLabelElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("label");
    nodeList = doc.getElementsByTagName("label");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The accessKey attribute is a single character access key to give access
   to the form control.
   Retrieve the accessKey attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-43589892
   */
  HTMLLabelElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("label");
    nodeList = doc.getElementsByTagName("label");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "b", "accesskeyLink");
    test.done();
  },

  /**
   *
   The htmlFor attribute links this label with another form control by
   id attribute.
   Retrieve the htmlFor attribute of the first LABEL element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96509813
   */
  HTMLLabelElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhtmlfor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("label");
    nodeList = doc.getElementsByTagName("label");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vhtmlfor = testNode.htmlFor;
    test.equal(vhtmlfor, "input1", "htmlForLink");
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute from the first LEGEND element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-29594519
   */
  HTMLLegendElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var fNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("legend");
    nodeList = doc.getElementsByTagName("legend");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "form1", "formLink");
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   form.
   Retrieve the second ELEMENT and examine its form element.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-29594519
   */
  HTMLLegendElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("legend");
    nodeList = doc.getElementsByTagName("legend");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The accessKey attribute is a single character access key to give access
   to the form control.
   Retrieve the accessKey attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-11297832
   */
  HTMLLegendElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("legend");
    nodeList = doc.getElementsByTagName("legend");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "b", "accesskeyLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the text alignment relative to FIELDSET.
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-79538067
   */
  HTMLLegendElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("legend");
    nodeList = doc.getElementsByTagName("legend");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "top", "alignLink");
    test.done();
  },

  /**
   *
   The disabled attribute enables/disables the link.
   Retrieve the disabled attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87355129
   */
  HTMLLinkElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vdisabled = testNode.disabled;
    test.equal(vdisabled, false, 'vdisabled should be *false*');
    test.done();
  },

  /**
   *
   The charset attribute indicates the character encoding of the linked
   resource.
   Retrieve the charset attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63954491
   */
  HTMLLinkElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharset;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vcharset = testNode.charset;
    test.equal(vcharset, "Latin-1", "charsetLink");
    test.done();
  },

  /**
   *
   The href attribute specifies the URI of the linked resource.
   Retrieve the href attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33532588
   */
  HTMLLinkElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhref;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vhref = testNode.href;
    test.equal(vhref, './files/glossary.html', 'hrefLink');
    test.done();
  },

  /**
   *
   The hreflang attribute specifies the language code of the linked resource.
   Retrieve the hreflang attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-85145682
   */
  HTMLLinkElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhreflang;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vhreflang = testNode.hreflang;
    test.equal(vhreflang, "en", "hreflangLink");
    test.done();
  },

  /**
   *
   The media attribute specifies the targeted media.
   Retrieve the media attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75813125
   */
  HTMLLinkElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmedia;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vmedia = testNode.media;
    test.equal(vmedia, "screen", "mediaLink");
    test.done();
  },

  /**
   *
   The rel attribute specifies the forward link type.
   Retrieve the rel attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-41369587
   */
  HTMLLinkElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrel;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vrel = testNode.rel;
    test.equal(vrel, "Glossary", "relLink");
    test.done();
  },

  /**
   *
   The rev attribute specifies the reverse link type.
   Retrieve the rev attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40715461
   */
  HTMLLinkElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrev;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vrev = testNode.rev;
    test.equal(vrev, "stylesheet", "revLink");
    test.done();
  },

  /**
   *
   The type attribute specifies the advisory content type.
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-32498296
   */
  HTMLLinkElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "text/html", "typeLink");
    test.done();
  },

  /**
   *
   The target attribute specifies the frame to render the resource in.
   Retrieve the target attribute and examine it's value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-84183095
   */
  HTMLLinkElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtarget;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("link2");
    nodeList = doc.getElementsByTagName("link");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtarget = testNode.target;
    test.equal(vtarget, "dynamic", "targetLink");
    test.done();
  },

  /**
   *
   The  areas attribute is a list of areas defined for the image map.
   Retrieve the areas attribute and find the number of areas defined.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71838730
   */
  HTMLMapElement01: function(test) {
    var success;
    var nodeList;
    var areasnodeList;
    var testNode;
    var vareas;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("map");
    nodeList = doc.getElementsByTagName("map");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    areasnodeList = testNode.areas;
    vareas = areasnodeList.length;
    test.equal(vareas, 3, "areasLink");
    test.done();
  },

  /**
   *
   The name attribute names the map(for use with usemap).
   Retrieve the name attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52696514
   */
  HTMLMapElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("map");
    nodeList = doc.getElementsByTagName("map");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "mapid", "mapLink");
    test.done();
  },

  /**
   *
   The compact attribute specifies a boolean value on whether to display
   the list more compactly.
   Retrieve the compact attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-68436464
   */
  HTMLMenuElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcompact;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("menu");
    nodeList = doc.getElementsByTagName("menu");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcompact = testNode.compact;
    test.ok(vcompact, 'compactLink');
    test.done();
  },

  /**
   *
   The content attribute specifies associated information.
   Retrieve the content attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87670826
   */
  HTMLMetaElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcontent;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("meta");
    nodeList = doc.getElementsByTagName("meta");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcontent = testNode.content;
    test.equal(vcontent, "text/html; CHARSET=utf-8", "contentLink");
    test.done();
  },

  /**
   *
   The httpEquiv attribute specifies an HTTP respnse header name.
   Retrieve the httpEquiv attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-77289449
   */
  HTMLMetaElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhttpequiv;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("meta");
    nodeList = doc.getElementsByTagName("meta");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vhttpequiv = testNode.httpEquiv;
    test.equal(vhttpequiv, "Content-Type", "httpEquivLink");
    test.done();
  },

  /**
   *
   The name attribute specifies the meta information name.
   Retrieve the name attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-31037081
   */
  HTMLMetaElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("meta");
    nodeList = doc.getElementsByTagName("meta");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "Meta-Name", "nameLink");
    test.done();
  },

  /**
   *
   The scheme attribute specifies a select form of content.
   Retrieve the scheme attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-35993789
   */
  HTMLMetaElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vscheme;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("meta");
    nodeList = doc.getElementsByTagName("meta");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vscheme = testNode.scheme;
    test.equal(vscheme, "NIST", "schemeLink");
    test.done();
  },

  /**
   *
   The cite attribute specifies an URI designating a document that describes
   the reason for the change.
   Retrieve the cite attribute of the INS element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75101708
   */
  HTMLModElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcite;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("mod");
    nodeList = doc.getElementsByTagName("ins");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcite = testNode.cite;
    test.equal(vcite, './files/ins-reasons.html', 'citeLink');
    test.done();
  },

  /**
   *
   The dateTime attribute specifies the date and time of the change.
   Retrieve the dateTime attribute of the INS element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88432678
   */
  HTMLModElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdatetime;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("mod");
    nodeList = doc.getElementsByTagName("ins");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdatetime = testNode.dateTime;
    test.equal(vdatetime, "January 1, 2002", "dateTimeLink");
    test.done();
  },

  /**
   *
   The cite attribute specifies an URI designating a document that describes
   the reason for the change.
   Retrieve the cite attribute of the DEL element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75101708
   */
  HTMLModElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcite;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("mod");
    nodeList = doc.getElementsByTagName("del");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcite = testNode.cite;
    test.equal(vcite, './files/del-reasons.html', 'citeLink');
    test.done();
  },

  /**
   *
   The dateTime attribute specifies the date and time of the change.
   Retrieve the dateTime attribute of the DEL element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88432678
   */
  HTMLModElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdatetime;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("mod");
    nodeList = doc.getElementsByTagName("del");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdatetime = testNode.dateTime;
    test.equal(vdatetime, "January 2, 2002", "dateTimeLink");
    test.done();
  },

  /**
   *
   The compact attribute specifies a boolean value on whether to display
   the list more compactly.
   Retrieve the compact attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76448506
   */
  HTMLOListElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcompact;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("olist");
    nodeList = doc.getElementsByTagName("ol");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcompact = testNode.compact;
    test.ok(vcompact, 'compactLink');
    test.done();
  },

  /**
   *
   The start attribute specifies the starting sequence number.
   Retrieve the start attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14793325
   */
  HTMLOListElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vstart;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("olist");
    nodeList = doc.getElementsByTagName("ol");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vstart = testNode.start;
    test.equal(vstart, 1, "startLink");
    test.done();
  },

  /**
   *
   The type attribute specifies the numbering style.
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40971103
   */
  HTMLOListElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("olist");
    nodeList = doc.getElementsByTagName("ol");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "1", "typeLink");
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-46094773
   */
  HTMLObjectElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var fNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object2");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "object2", "idLink");
    test.done();
  },

  /**
   *
   The code attribute specifies an Applet class file.
   Retrieve the code attribute of the second OBJECT element and examine
   its value.  Should be "" since CODE is not a valid attribute for OBJECT.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75241146
   */
  HTMLObjectElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vcode = testNode.code;

// XXX SUPERSEDED BY DOM4
//    test.equal(vcode, "", "codeLink");
    test.strictEqual(vcode, null, "codeLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the alignment of this object with respect
   to its surrounding text.
   Retrieve the align attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-16962097
   */
  HTMLObjectElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "middle", "alignLink");
    test.done();
  },

  /**
   *
   The archive attribute specifies a space-separated list of archives.
   Retrieve the archive attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-47783837
   */
  HTMLObjectElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var varchive;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    varchive = testNode.archive;
    test.equal(varchive, "", "archiveLink");
    test.done();
  },

  /**
   *
   The border attribute specifies the widht of the border around the object.
   Retrieve the border attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-82818419
   */
  HTMLObjectElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vborder;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vborder = testNode.border;
    test.equal(vborder, "0", "borderLink");
    test.done();
  },

  /**
   *
   The codeBase attribute specifies the base URI for the classid, data and
   archive attributes.
   Retrieve the codeBase attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-25709136
   */
  HTMLObjectElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcodebase;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vcodebase = testNode.codeBase;
    // assertURIEquals("codebaseLink",null,"//xw2k.sdct.itl.nist.gov/brady/dom/",null,null,null,null,null,null,vcodebase);
  test.equal(vcodebase, 'http://xw2k.sdct.itl.nist.gov/brady/dom/', 'codebaseLink');
    test.done();
  },

  /**
   *
   The codeType attribute specifies the data downloaded via the classid
   attribute.
   Retrieve the codeType attribute of the second OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-19945008
   */
  HTMLObjectElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcodetype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vcodetype = testNode.codeType;
    test.equal(vcodetype, "image/gif", "codetypeLink");
    test.done();
  },

  /**
   *
   The data attribute specifies the URI of the location of the objects data.
   Retrieve the data attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-81766986
   */
  HTMLObjectElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdata;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vdata = testNode.data;
    test.equal(vdata, './pix/logo.gif', 'dataLink');
    test.done();
  },

  /**
   *
   The declare attribute specifies this object should be declared only and
   no instance of it should be created.
   Retrieve the declare attribute of the second OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-942770
   */
  HTMLObjectElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdeclare;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vdeclare = testNode.declare;
    test.ok(vdeclare, 'declareLink');
    test.done();
  },

  /**
   *
   The height attribute overrides the value of the actual height of the
   object.
   Retrieve the height attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88925838
   */
  HTMLObjectElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vheight = testNode.height;
    test.equal(vheight, "60", "heightLink");
    test.done();
  },

  /**
   *
   The hspace attribute specifies the horizontal space to the left and right
   of this image, applet or object.
   Retrieve the hspace attribute of the first OBJECT element and examine
   it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-17085376
   */
  HTMLObjectElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhspace;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vhspace = testNode.hspace;
    test.equal(vhspace, 0, "hspaceLink");
    test.done();
  },

  /**
   *
   The standby attribute specifies a message to render while loading the
   object.
   Retrieve the standby attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-25039673
   */
  HTMLObjectElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vstandby;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vstandby = testNode.standby;
    test.equal(vstandby, "Loading Image ...", "alignLink");
    test.done();
  },

  /**
   *
   The tabIndex attribute specifies the elements position in the tabbing
   order.
   Retrieve the tabIndex attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-27083787
   */
  HTMLObjectElement13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 0, "tabIndexLink");
    test.done();
  },

  /**
   *
   The type attribute specifies the content type for data downloaded via
   the data attribute.
   Retrieve the type attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-91665621
   */
  HTMLObjectElement14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "image/gif", "typeLink");
    test.done();
  },

  /**
   *
   The useMap attribute specifies the used client-side image map.
   Retrieve the useMap attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6649772
   */
  HTMLObjectElement15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vusemap;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vusemap = testNode.useMap;
    test.equal(vusemap, "#DivLogo-map", "useMapLink");
    test.done();
  },

  /**
   *
   The vspace attribute specifies the vertical space above or below this
   image, applet or object.
   Retrieve the vspace attribute of the first OBJECT element and examine
   it's value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-8682483
   */
  HTMLObjectElement16: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvspace;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vvspace = testNode.vspace;
    test.equal(vvspace, 0, "vspaceLink");
    test.done();
  },

  /**
   *
   The width attribute overrides the original width value.
   Retrieve the width attribute of the first OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-38538620
   */
  HTMLObjectElement17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, "550", "widthLink");
    test.done();
  },

  /**
   *
   The name attribute specifies form control or object name when submitted
   with a form.
   Retrieve the name attribute of the second OBJECT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-20110362
   */
  HTMLObjectElement18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vname = testNode.name;
    test.equal(vname, "OBJECT2", "vspaceLink");
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   form.
   Retrieve the form attribute and examine its value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-46094773
   */
  HTMLObjectElement19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object2");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The contentDocument attribute specifies the document this object contains,
   if there is any and it is available, or null otherwise.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-38538621
   */
  HTMLObjectElement20: function(test) {
    var success;
    var testNode;
    var cd;
    var vtitle;
    var doc;
    var nodeList;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object2");
    nodeList = doc.getElementsByTagName("object");
    testNode = nodeList.item(1);
    cd = testNode.contentDocument;
    test.equal(cd, null, 'cd should be null');
    test.done();
  },

  /**
   *
   The disabled attribute indicates that the control is unavailable in
   this context.
   Retrieve the disabled attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-15518803
   */
  HTMLOptGroupElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optgroup");
    nodeList = doc.getElementsByTagName("optgroup");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vdisabled = testNode.disabled;
    test.ok(vdisabled, 'disabledLink');
    test.done();
  },

  /**
   *
   The label attribute specifies the label assigned to this option group.
   Retrieve the label attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-95806054
   */
  HTMLOptGroupElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlabel;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optgroup");
    nodeList = doc.getElementsByTagName("optgroup");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vlabel = testNode.label;
    test.equal(vlabel, "Regular Employees", "labelLink");
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute from the first SELECT element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-17116503
   */
  HTMLOptionElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var fNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(0);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "form1", "formLink");
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   a form.
   Retrieve the first OPTION attribute from the second select element and
   examine its form element.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-17116503
   */
  HTMLOptionElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(6);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The defaultSelected attribute contains the value of the selected
   attribute.
   Retrieve the defaultSelected attribute from the first OPTION element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-37770574
   */
  HTMLOptionElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdefaultselected;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(0);
    vdefaultselected = testNode.defaultSelected;
    test.ok(vdefaultselected, 'defaultSelectedLink');
    test.done();
  },

  /**
   *
   The text attribute contains the text contained within the option element.
   Retrieve the text attribute from the second OPTION element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-48154426
   */
  HTMLOptionElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtext;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(1);
    vtext = testNode.text;
    test.equal(vtext, "EMP10002", "textLink");
    test.done();
  },

  /**
   *
   The index attribute indicates th index of this OPTION in ints parent
   SELECT.
   Retrieve the index attribute from the seventh OPTION element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14038413
   */
  HTMLOptionElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(6);
    vindex = testNode.index;
    test.equal(vindex, 1, "indexLink");
    test.done();
  },

  /**
   *
   The disabled attribute indicates that this control is not available
   within this context.
   Retrieve the disabled attribute from the last OPTION element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-23482473
   */
  HTMLOptionElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(9);
    vdisabled = testNode.disabled;
    test.ok(vdisabled, 'disabledLink');
    test.done();
  },

  /**
   *
   The label attribute is used in hierarchical menus.  It specifies
   a shorter label for an option that the content of the OPTION element.
   Retrieve the label attribute from the second OPTION element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40736115
   */
  HTMLOptionElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlabel;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(1);
    vlabel = testNode.label;
    test.equal(vlabel, "l1", "labelLink");
    test.done();
  },

  /**
   *
   The selected attribute indicates the current state of the corresponding
   form control in an interactive user-agent.
   Retrieve the selected attribute from the first OPTION element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-70874476
   */
  HTMLOptionElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vselected;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(0);
    vselected = testNode.defaultSelected;
    test.ok(vselected, 'selectedLink');
    test.done();
  },

  /**
   *
   The value attribute contains the current form control value.
   Retrieve the value attribute from the first OPTION element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6185554
   */
  HTMLOptionElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("option");
    nodeList = doc.getElementsByTagName("option");
    test.equal(nodeList.length, 10, 'Asize');
    testNode = nodeList.item(0);
    vvalue = testNode.value;
    test.equal(vvalue, "10001", "valueLink");
    test.done();
  },

  /**
   *
   The selected attribute of an option should be true if no other option is
   selected in the SELECT.
   */
  HTMLOptionElement10: function(test) {
    var doc;
    doc = load("option");
    var select = doc.getElementsByName('select2').item(0);
    select.options._toArray().forEach(function(option, idx) {
      if (idx === 0) {
        test.ok(option.selected);
      } else {
        test.ok(!option.selected);
      }
    });
    test.done();
  },

  /**
   *
   The selected value of an option should be based on whether or not
   it has been selected and/or by default if it is at index 0
   */
  HTMLOptionElement11: function(test) {
    var doc;
    doc = load("option");
    var select = doc.getElementsByName('select2').item(0);

    select.options.item(3).selected = true;

    select.options._toArray().forEach(function(option, idx) {
      if (idx === 3) {
        test.ok(option.selected);
      } else {
        test.ok(!option.selected);
      }
    });
    test.done();
  },

  /**
   *
   An orphaned option element should maintain it's existing selected value.

   based on experiements in chrome
   */
  HTMLOptionElement12: function(test) {
    var doc;
    doc = load("option");
    var select = doc.getElementsByName('select2').item(0);

    select.options.item(0).selected = true;

    var option = select.options.item(0);
    select.remove(0);

    test.ok(!option.parentNode);
    test.ok(option.selected);
    test.ok(option !== select.options.item(0));
    test.ok(select.options.item(0).selected);

    test.done();
  },

  /**
   *
   An HTMLOptionsCollection is a list of nodes representing HTML option
   element.
   The length attribute specifies the length or size of the list.
   Retrieve the first SELECT element and create a HTMLOptionsCollection
   of the OPTION elements.  Check the size of the length of OPTION elements.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTMLOptionsCollection-length
   */
  HTMLOptionsCollection01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var optionsList;
    var vlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optionscollection");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    optionsList = testNode.options;
    vlength = optionsList.length;
    test.equal(vlength, 5, "lengthLink");
    test.done();
  },

  /**
   *
   An HTMLOptionsCollection is a list of nodes representing HTML option
   element.
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test ordinal index=3).
   The item() method retrieves a node specified by ordinal index.
   Nodes are numbered in tree order.  The index origin is 0.
   Retrieve the first SELECT element.  Create a HTMLOptionsCollection.
   Retrieve the fourth item in the list and examine its firstChild's
   nodeValue.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTMLOptionsCollection-item
   */
  HTMLOptionsCollection02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var optionsNode;
    var optionsValueNode;
    var optionsList;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optionscollection");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    optionsList = testNode.options;
    optionsNode = optionsList.item(3);
    optionsValueNode = optionsNode.firstChild;
    vvalue = optionsValueNode.nodeValue;
    test.equal(vvalue, "EMP10004", "valueIndexLink");
    test.done();
  },

  /**
   *
   An HTMLOptionsCollection is a list of nodes representing HTML option
   element.
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test node name).
   The namedItem method retrieves a Node using a name.  It first searches
   for a node with a matching id attribute.  If it doesn't find one, it
   then searches for a Node with a matching name attribute, but only
   those elements that are allowed a name attribute.
   Retrieve the first FORM element.  Create a HTMLCollection of the elements.
   Search for an element that has select1 as the value for the name attribute.
   Get the nodeName of that element.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTMLOptionsCollection-namedItem
   */
  HTMLOptionsCollection03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var optionsNode;
    var formsnodeList;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optionscollection");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    formsnodeList = testNode.elements;
    optionsNode = formsnodeList.namedItem("select1");
    vname = optionsNode.nodeName;
    test.equal(vname, 'SELECT', 'nameIndexLink');
    test.done();
  },

  /**
   *
   An HTMLOptionsCollection is a list of nodes representing HTML option
   element.
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test node name).
   The namedItem method retrieves a Node using a name.  It first searches
   for a node with a matching id attribute.  If it doesn't find one, it
   then searches for a Node with a matching name attribute, but only
   those elements that are allowed a name attribute.
   Retrieve the first FORM element.  Create a HTMLCollection of the elements.
   Search for an element that has selectId as the value for the id attribute.
   Get the nodeName of that element.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTMLOptionsCollection-namedItem
   */
  HTMLOptionsCollection04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var optionsNode;
    var formsnodeList;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optionscollection");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    formsnodeList = testNode.elements;
    optionsNode = formsnodeList.namedItem("selectId");
    vname = optionsNode.nodeName;
    test.equal(vname, 'SELECT', 'nameIndexLink');
    test.done();
  },

  /**
   *
   An HTMLOptionsCollection is a list of nodes representing HTML option
   element.
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test node name).
   The namedItem method retrieves a Node using a name.  It first searches
   for a node with a matching id attribute.  If it doesn't find one, it
   then searches for a Node with a matching name attribute, but only
   those elements that are allowed a name attribute.  Upon failure(e.q., no
   node with this name exists), returns null.
   Retrieve the first FORM element.  Create a HTMLCollection of the elements.
   Search for an element that has select9 as the value for the name attribute.
   Null should be returned since there is not any name or id attribute with
   select9 as a value.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTMLOptionsCollection-namedItem
   */
  HTMLOptionsCollection05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var optionsNode;
    var formsnodeList;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optionscollection");
    nodeList = doc.getElementsByTagName("form");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    formsnodeList = testNode.elements;
    optionsNode = formsnodeList.namedItem("select9");
    test.equal(optionsNode, null, 'optionsNode should be null');
    test.done();
  },

  /**
   *
   An HTMLOptionsCollection is a list of nodes representing HTML option
   element.
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test ordinal index).
   The item() method retrieves a node specified by ordinal index.
   A value of null is returned if the index is out of range.
   Retrieve the first SELECT element.  Create a HTMLOptionsCollection.
   Retrieve the tenth item in the list - null should be returned since
   there are not 10 items in the list.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTMLOptionsCollection-item
   */
  HTMLOptionsCollection06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var optionsNode;
    var optionsValueNode;
    var optionsList;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optionscollection");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    optionsList = testNode.options;
    optionsNode = optionsList.item(10);
    test.equal(optionsNode, null, 'optionsNode should be null');
    test.done();
  },

  /**
   *
   An HTMLOptionsCollection is a list of nodes representing HTML option
   element.
   An individual node may be accessed by either ordinal index, the node's
   name or id attributes.  (Test ordinal index=0).
   The item() method retrieves a node specified by ordinal index. Nodes
   are numbered in tree order.  The index origin is 0.
   Retrieve the first SELECT element.  Create a HTMLOptionsCollection.
   Retrieve the first item in the list and examine its firstChild's
   nodeValue.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTMLOptionsCollection-item
   */
  HTMLOptionsCollection07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var optionsNode;
    var optionsValueNode;
    var optionsList;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("optionscollection");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    optionsList = testNode.options;
    optionsNode = optionsList.item(0);
    optionsValueNode = optionsNode.firstChild;
    vvalue = optionsValueNode.nodeValue;
    test.equal(vvalue, "EMP10001", "valueIndexLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal text alignment.
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-53465507
   */
  HTMLParagraphElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("paragraph");
    nodeList = doc.getElementsByTagName("p");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The  name attribute specifies the name of the run-time parameter.
   Retrieve the name attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59871447
   */
  HTMLParamElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("param");
    nodeList = doc.getElementsByTagName("param");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "image3", "nameLink");
    test.done();
  },

  /**
   *
   The value attribute specifies the value of the run-time parameter.
   Retrieve the value attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-77971357
   */
  HTMLParamElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("param");
    nodeList = doc.getElementsByTagName("param");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvalue = testNode.value;
    test.equal(vvalue, 'image/file.gif', 'valueLink');
    test.done();
  },

  /**
   *
   The valueType attribute specifies information about the meaning of the
   value specified by the value attribute.
   Retrieve the valueType attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-23931872
   */
  HTMLParamElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvaluetype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("param");
    nodeList = doc.getElementsByTagName("param");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvaluetype = testNode.valueType;
    test.equal(vvaluetype, "ref", "valueTypeLink");
    test.done();
  },

  /**
   *
   The type attribute specifies the content type for the value attribute
   when valuetype has the value ref.
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-18179888
   */
  HTMLParamElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("param");
    nodeList = doc.getElementsByTagName("param");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "image/gif", "typeLink");
    test.done();
  },

  /**
   *
   The width attribute specifies the fixed width for content.
   Retrieve the width attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-13894083
   */
  HTMLPreElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("pre");
    nodeList = doc.getElementsByTagName("pre");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, 277, "widthLink");
    test.done();
  },

  /**
   *
   The cite attribute specifies a URI designating a source document
   or message.
   Retrieve the cite attribute from the Q element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-53895598
   */
  HTMLQuoteElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcite;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("quote");
    nodeList = doc.getElementsByTagName("q");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcite = testNode.cite;
    test.equal(vcite, './files/Q.html', 'citeLink');
    test.done();
  },

  /**
   *
   The cite attribute specifies a URI designating a source document
   or message.
   Retrieve the cite attribute from the BLOCKQUOTE element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-53895598
   */
  HTMLQuoteElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcite;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("quote");
    nodeList = doc.getElementsByTagName("blockquote");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcite = testNode.cite;
    test.equal(vcite, './files/BLOCKQUOTE.html', 'citeLink');
    test.done();
  },

  /**
   *
   The text attribute specifies the script content of the element.
   Retrieve the text attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-46872999
   */
  HTMLScriptElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtext;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("script");
    nodeList = doc.getElementsByTagName("script");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtext = testNode.text;
    test.equal(vtext, "var a=2;", "textLink");
    test.done();
  },

  /**
   *
   The charset attribute specifies the character encoding of the linked
   resource.
   Retrieve the charset attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-35305677
   */
  HTMLScriptElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharset;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("script");
    nodeList = doc.getElementsByTagName("script");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcharset = testNode.charset;
    test.equal(vcharset, "US-ASCII", "charsetLink");
    test.done();
  },

  /**
   *
   The defer attribute specifies the user agent can defer processing of
   the script.
   Retrieve the defer attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93788534
   */
  HTMLScriptElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdefer;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("script");
    nodeList = doc.getElementsByTagName("script");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdefer = testNode.defer;
    test.ok(vdefer, 'deferLink');
    test.done();
  },

  /**
   *
   The src attribute specifies a URI designating an external script.
   Retrieve the src attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-75147231
   */
  HTMLScriptElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsrc;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("script");
    nodeList = doc.getElementsByTagName("script");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vsrc = testNode.src;
    test.equal(vsrc, './js/script1.js', 'srcLink');
    test.done();
  },

  /**
   *
   The type attribute specifies the content of the script language.
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-30534818
   */
  HTMLScriptElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("script");
    nodeList = doc.getElementsByTagName("script");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "text/javaScript", "typeLink");
    test.done();
  },

  /**
   *
   htmlFor is described as for future use.  Test accesses the value, but makes no assertions about its value.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-66979266
   */
  HTMLScriptElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var htmlFor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("script");
    nodeList = doc.getElementsByTagName("script");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    htmlFor = testNode.htmlFor;
    test.done();
  },

  /**
   *
   event is described as for future use.  Test accesses the value, but makes no assertions about its value.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-56700403
   */
  HTMLScriptElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var event;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("script");
    nodeList = doc.getElementsByTagName("script");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    event = testNode.event;
    test.done();
  },

  /**
   *
   Tests that when document.write is used from within a script tag, the contents will be output after the script element.  Guards against regression
   * @author Kyle Blomquist
   */

  HTMLScriptElement08: function(test) {
    var success;
    var scriptNode;
    var testNode;
    var isAfterScript;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("scriptinline");
    nodeList = doc.getElementsByTagName("script");
    test.equal(nodeList.length, 1, 'Asize');
    scriptNode = nodeList.item(0);
    testNode = doc.getElementById("inlinetest");
    test.equal(testNode.innerHTML, 'Test', '#inlinetest exists and contains correct text')
    isAfterScript = testNode.previousSibling.isEqualNode(scriptNode);
    test.equal(isAfterScript, true, '#inlinetest is correctly placed after the script tag that created it');
    test.done();
  },

  /**
   *
   Tests that when document.write is used from within a script tag, the rest of the contents of the page will not be altered.  Guards against regression
   * @author Kyle Blomquist
   */

  HTMLScriptElement09: function(test) {
    var success;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("scriptinline");
    testNode = doc.getElementById("existingtag");
    test.equal(testNode.innerHTML, 'Hello World', '#inlinetest exists and contains correct text')
    test.done();
  },

  /**
   *
   The type attribute is the string "select-multiple" when multiple
   attribute is true.
   Retrieve the type attribute from the first SELECT element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-58783172
   */
  HTMLSelectElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "select-multiple", "typeLink");
    test.done();
  },

  /**
   *
   The selectedIndex attribute specifies the ordinal index of the selected
   option.
   Retrieve the selectedIndex attribute from the first SELECT element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-85676760
   */
  HTMLSelectElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vselectedindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vselectedindex = testNode.selectedIndex;
    test.equal(vselectedindex, 0, "selectedIndexLink");
    test.done();
  },

  /**
   *
   The selectedIndex attribute specifies the ordinal index of the selected
   option.  If no element is selected -1 is returned.
   Retrieve the selectedIndex attribute from the second SELECT element and
   examine its value.
   Per http://www.w3.org/TR/html401/interact/forms.html#h-17.6.1,
   without an explicit selected attribute, user agent behavior is
   undefined.  There is no way to coerce no option to be selected.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-85676760
   */
  HTMLSelectElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vselectedindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vselectedindex = testNode.selectedIndex;
    test.done();
  },

  /**
   *
   The value attribute specifies the current form control value.
   Retrieve the value attribute from the first SELECT element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59351919
   */
  HTMLSelectElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vvalue = testNode.value;
    test.equal(vvalue, "EMP1", "valueLink");
    test.done();
  },

  /**
   *
   The length attribute specifies the number of options in this select.
   Retrieve the length attribute from the first SELECT element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-5933486
   */
  HTMLSelectElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vlength;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vlength = testNode.length;
    test.equal(vlength, 5, "lengthLink");
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute from the first SELECT element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-20489458
   */
  HTMLSelectElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var fNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "form1", "formLink");
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   a form.
   Retrieve the second SELECT element and
   examine its form element.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-20489458
   */
  HTMLSelectElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The options attribute returns a collection of OPTION elements contained
   by this element.
   Retrieve the options attribute from the first SELECT element and
   examine the items of the returned collection.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-30606413
   */
  HTMLSelectElement08: function(test) {
    var expectedOptions = ['OPTION', 'OPTION', 'OPTION', 'OPTION', 'OPTION']
    var doc = load("select");
    var nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    var result = [];
    var options = nodeList.item(0).options;
    for(var i=0;i<options.length; i++) {
      result.push(options.item(i).nodeName);
    }
    test.deepEqual(result, expectedOptions, 'optionsLink');
    test.done();
  },

  /**
   *
   The disabled attribute indicates that this control is not available
   within this context.
   Retrieve the disabled attribute from the third SELECT element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-79102918
   */
  HTMLSelectElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(2);
    vdisabled = testNode.disabled;
    test.ok(vdisabled, 'disabledLink');
    test.done();
  },

  /**
   *
   The multiple attribute(if true) indicates that multiple OPTION elements
   may be selected
   Retrieve the multiple attribute from the first SELECT element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-13246613
   */
  HTMLSelectElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmultiple;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vmultiple = testNode.multiple;
    test.ok(vmultiple, 'multipleLink');
    test.done();
  },

  /**
   *
   The name attribute specifies the form control or object name when
   submitted with a form.
   Retrieve the name attribute from the first SELECT element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-41636323
   */
  HTMLSelectElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "select1", "nameLink");
    test.done();
  },

  /**
   *
   The size attribute specifies the number of visible rows.
   Retrieve the size attribute from the first SELECT element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-18293826
   */
  HTMLSelectElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsize;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vsize = testNode.size;
    test.equal(vsize, 1, "sizeLink");
    test.done();
  },

  /**
   *
   The tabIndex attribute specifies an index that represents the elements
   position in the tabbing order.
   Retrieve the tabIndex attribute from the first SELECT element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40676705
   */
  HTMLSelectElement13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 7, "tabIndexLink");
    test.done();
  },

  /**
   *
   focus should give the select element input focus.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-32130014
   */
  HTMLSelectElement14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    testNode.focus();
    test.done();
  },

  /**
   *
   blur should surrender input focus.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-28216144
   */
  HTMLSelectElement15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    testNode.blur();
    test.done();
  },

  /**
   *
   Removes an option using HTMLSelectElement.remove.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33404570
   */
  HTMLSelectElement16: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var optLength;
    var selected;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    testNode.remove(0);
    optLength = testNode.length;
    test.equal(optLength, 4, "optLength");
    selected = testNode.selectedIndex;
    test.equal(selected, -1, "selected");
    test.done();
  },

  /**
   *
   Removes a non-existant option using HTMLSelectElement.remove.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-33404570
   */
  HTMLSelectElement17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var optLength;
    var selected;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    testNode.remove(6);
    optLength = testNode.length;
    test.equal(optLength, 5, "optLength");
    selected = testNode.selectedIndex;
    test.equal(selected, 0, "selected");
    test.done();
  },

  /**
   *
   Add a new option at the end of an select using HTMLSelectElement.add.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14493106
   */
  HTMLSelectElement18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var optLength;
    var selected;
    var newOpt;
    var newOptText;
    var opt;
    var optText;
    var optValue;
    var retNode;
    var nullNode = null;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    newOpt = doc.createElement("option");
    newOptText = doc.createTextNode("EMP31415");
    retNode = newOpt.appendChild(newOptText);
    testNode.add(newOpt,nullNode);
    optLength = testNode.length;
    test.equal(optLength, 6, "optLength");
    selected = testNode.selectedIndex;
    test.equal(selected, 0, "selected");
    opt = testNode.lastChild;
    optText = opt.firstChild;
    optValue = optText.nodeValue;
    test.equal(optValue, "EMP31415", "lastValue");
    test.done();
  },

  /**
   *
   Add a new option before the selected node using HTMLSelectElement.add.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14493106
   */
  HTMLSelectElement19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var optLength;
    var selected;
    var newOpt;
    var newOptText;
    var opt;
    var optText;
    var optValue;
    var retNode;
    var options;
    var selectedNode;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    newOpt = doc.createElement("option");
    newOptText = doc.createTextNode("EMP31415");
    retNode = newOpt.appendChild(newOptText);
    options = testNode.options;
    selectedNode = options.item(0);
    testNode.add(newOpt,selectedNode);
    optLength = testNode.length;
    test.equal(optLength, 6, "optLength");
    selected = testNode.selectedIndex;
    test.equal(selected, 1, "selected");
    options = testNode.options;
    opt = options.item(0);
    optText = opt.firstChild;
    optValue = optText.nodeValue;
    test.equal(optValue, "EMP31415", "lastValue");
    test.done();
  },

  /**
   *
   Attempting to add an new option using HTMLSelectElement.add before a node that is not a child of the select
   element should raise a NOT_FOUND_ERR.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-14493106
   */
  HTMLSelectElement20: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var optLength;
    var selected;
    var newOpt;
    var newOptText;
    var retNode;
    var options;
    var otherSelect;
    var selectedNode;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("select");
    nodeList = doc.getElementsByTagName("select");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    otherSelect = nodeList.item(1);
    newOpt = doc.createElement("option");
    newOptText = doc.createTextNode("EMP31415");
    retNode = newOpt.appendChild(newOptText);
    options = otherSelect.options;
    selectedNode = options.item(0);
    {
      success = false;
      try {
        testNode.add(newOpt,selectedNode);
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
   The disabled attribute enables/disables the stylesheet.
   Retrieve the disabled attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-51162010
   */
  HTMLStyleElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("style");
    nodeList = doc.getElementsByTagName("style");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vdisabled = testNode.disabled;
    test.equal(vdisabled, false, 'vdisabled should be *false*');
    test.done();
  },

  /**
   *
   The media attribute identifies the intended medium of the style info.
   Retrieve the media attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76412738
   */
  HTMLStyleElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vmedia;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("style");
    nodeList = doc.getElementsByTagName("style");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vmedia = testNode.media;
    test.equal(vmedia, "screen", "mediaLink");
    test.done();
  },

  /**
   *
   The type attribute specifies the style sheet language(Internet media type).
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-22472002
   */
  HTMLStyleElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("style");
    nodeList = doc.getElementsByTagName("style");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "text/css", "typeLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the caption alignment with respect to
   the table.
   Retrieve the align attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-79875068
   */
  HTMLTableCaptionElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecaption");
    nodeList = doc.getElementsByTagName("caption");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "top", "alignLink");
    test.done();
  },

  /**
   *
   The  cellIndex attribute specifies the index of this cell in the row(TH).
   Retrieve the cellIndex attribute of the first TH element and examine its
   value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-80748363
   */
  HTMLTableCellElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcellindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(0);
    vcellindex = testNode.cellIndex;
    test.equal(vcellindex, 0, "cellIndexLink");
    test.done();
  },

  /**
   *
   The  cellIndex attribute specifies the index of this cell in the row(TD).
   Retrieve the cellIndex attribute of the first TD element and examine its
   value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-80748363
   */
  HTMLTableCellElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcellindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(0);
    vcellindex = testNode.cellIndex;
    test.equal(vcellindex, 0, "cellIndexLink");
    test.done();
  },

  /**
   *
   The abbr attribute specifies the abbreviation for table header cells(TH).
   Retrieve the abbr attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-74444037
   */
  HTMLTableCellElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vabbr;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vabbr = testNode.abbr;
    test.equal(vabbr, "hd1", "abbrLink");
    test.done();
  },

  /**
   *
   The abbr attribute specifies the abbreviation for table data cells(TD).
   Retrieve the abbr attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-74444037
   */
  HTMLTableCellElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vabbr;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vabbr = testNode.abbr;
    test.equal(vabbr, "hd2", "abbrLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal alignment for table
   header cells(TH).
   Retrieve the align attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98433879
   */
  HTMLTableCellElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal alignment for table
   data cells(TD).
   Retrieve the align attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98433879
   */
  HTMLTableCellElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The axis attribute specifies the names group of related headers for table
   header cells(TH).
   Retrieve the align attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76554418
   */
  HTMLTableCellElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaxis;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vaxis = testNode.axis;
    test.equal(vaxis, "center", "axisLink");
    test.done();
  },

  /**
   *
   The axis attribute specifies the names group of related headers for table
   data cells(TD).
   Retrieve the axis attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76554418
   */
  HTMLTableCellElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaxis;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vaxis = testNode.axis;
    test.equal(vaxis, "center", "axisLink");
    test.done();
  },

  /**
   *
   The bgColor attribute specifies the cells background color for
   table header cells(TH).
   Retrieve the bgColor attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88135431
   */
  HTMLTableCellElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbgcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vbgcolor = testNode.bgColor;
    test.equal(vbgcolor.toLowerCase(), "#00FFFF".toLowerCase(), "bgColorLink");
    test.done();
  },

  /**
   *
   The bgColor attribute specifies the cells background color for table
   data cells(TD).
   Retrieve the bgColor attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88135431
   */
  HTMLTableCellElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbgcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vbgcolor = testNode.bgColor;
    test.equal(vbgcolor.toLowerCase(), "#FF0000".toLowerCase(), "bgColorLink");
    test.done();
  },

  /**
   *
   The char attribute specifies the alignment character for cells in a column
   of table header cells(TH).
   Retrieve the char attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-30914780
   */
  HTMLTableCellElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vch = testNode.ch;
    test.equal(vch, ":", "chLink");
    test.done();
  },

  /**
   *
   The char attribute specifies the alignment character for cells in a column
   of table data cells(TD).
   Retrieve the char attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-30914780
   */
  HTMLTableCellElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vch = testNode.ch;
    test.equal(vch, ":", "chLink");
    test.done();
  },

  /**
   *
   The charoff attribute specifies the offset of alignment characacter
   of table header cells(TH).
   Retrieve the charoff attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-20144310
   */
  HTMLTableCellElement13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vcharoff = testNode.chOff;
    test.equal(vcharoff, "1", "chOffLink");
    test.done();
  },

  /**
   *
   The charoff attribute specifies the offset of alignment character
   of table data cells(TD).
   Retrieve the charoff attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-20144310
   */
  HTMLTableCellElement14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vcharoff = testNode.chOff;
    test.equal(vcharoff, "1", "chOffLink");
    test.done();
  },

  /**
   *
   The colSpan attribute specifies the number of columns spanned by a table
   header(TH) cell.
   Retrieve the colspan attribute of the second TH element and examine its
   value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-84645244
   */
  HTMLTableCellElement15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcolspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vcolspan = testNode.colSpan;
    test.equal(vcolspan, 1, "colSpanLink");
    test.done();
  },

  /**
   *
   The colSpan attribute specifies the number of columns spanned by a
   table data(TD) cell.
   Retrieve the colSpan attribute of the second TD element and examine its
   value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-84645244
   */
  HTMLTableCellElement16: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcolspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vcolspan = testNode.colSpan;
    test.equal(vcolspan, 1, "colSpanLink");
    test.done();
  },

  /**
   *
   The headers attribute specifies a list of id attribute values for
   table header cells(TH).
   Retrieve the headers attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-89104817
   */
  HTMLTableCellElement17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheaders;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vheaders = testNode.headers;
    test.equal(vheaders, "header-1", "headersLink");
    test.done();
  },

  /**
   *
   The headers attribute specifies a list of id attribute values for
   table data cells(TD).
   Retrieve the headers attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-89104817
   */
  HTMLTableCellElement18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheaders;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vheaders = testNode.headers;
    test.equal(vheaders, "header-3", "headersLink");
    test.done();
  },

  /**
   *
   The height attribute specifies the cell height.
   Retrieve the height attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83679212
   */
  HTMLTableCellElement19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vheight = testNode.height;
    test.equal(vheight, "50", "heightLink");
    test.done();
  },

  /**
   *
   The height attribute specifies the cell height.
   Retrieve the height attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83679212
   */
  HTMLTableCellElement20: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vheight = testNode.height;
    test.equal(vheight, "50", "heightLink");
    test.done();
  },

  /**
   *
   The noWrap attribute supresses word wrapping.
   Retrieve the noWrap attribute of the second TH Element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-62922045
   */
  HTMLTableCellElement21: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vnowrap;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vnowrap = testNode.noWrap;
    test.ok(vnowrap, 'noWrapLink');
    test.done();
  },

  /**
   *
   The noWrap attribute supresses word wrapping.
   Retrieve the noWrap attribute of the second TD Element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-62922045
   */
  HTMLTableCellElement22: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vnowrap;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vnowrap = testNode.noWrap;
    test.ok(vnowrap, 'noWrapLink');
    test.done();
  },

  /**
   *
   The rowSpan attribute specifies the number of rows spanned by a table
   header(TH) cell.
   Retrieve the rowSpan attribute of the second TH element and examine its
   value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-48237625
   */
  HTMLTableCellElement23: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrowspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vrowspan = testNode.rowSpan;
    test.equal(vrowspan, 1, "rowSpanLink");
    test.done();
  },

  /**
   *
   The rowSpan attribute specifies the number of rows spanned by a
   table data(TD) cell.
   Retrieve the rowSpan attribute of the second TD element and examine its
   value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-48237625
   */
  HTMLTableCellElement24: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrowspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vrowspan = testNode.rowSpan;
    test.equal(vrowspan, 1, "rowSpanLink");
    test.done();
  },

  /**
   *
   The scope attribute specifies the scope covered by header cells.
   Retrieve the scope attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-36139952
   */
  HTMLTableCellElement25: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vscope;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vscope = testNode.scope;
    test.equal(vscope, "col", "scopeLink");
    test.done();
  },

  /**
   *
   The scope attribute specifies the scope covered by data cells.
   Retrieve the scope attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-36139952
   */
  HTMLTableCellElement26: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vscope;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vscope = testNode.scope;
    test.equal(vscope, "col", "scopeLink");
    test.done();
  },

  /**
   *
   The vAlign attribute specifies the vertical alignment of data in cell.
   Retrieve the vAlign attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-58284221
   */
  HTMLTableCellElement27: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The vAlign attribute specifies the vertical alignment of data in cell.
   Retrieve the vAlign attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-58284221
   */
  HTMLTableCellElement28: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The width attribute specifies the cells width.
   Retrieve the width attribute from the second TH element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-27480795
   */
  HTMLTableCellElement29: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("th");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vwidth = testNode.width;
    test.equal(vwidth, "170", "widthLink");
    test.done();
  },

  /**
   *
   The width attribute specifies the cells width.
   Retrieve the width attribute from the second TD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-27480795
   */
  HTMLTableCellElement30: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vwidth = testNode.width;
    test.equal(vwidth, "175", "widthLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal alignment of cell data
   in column(COL).
   Retrieve the align attribute from the COL element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-31128447
   */
  HTMLTableColElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal alignment of cell data
   in column(COLGROUP).
   Retrieve the align attribute from the COLGROUP element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-31128447
   */
  HTMLTableColElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("colgroup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The char attribute specifies the alignment character for cells
   in a column(COL).
   Retrieve the char attribute from the COL element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-9447412
   */
  HTMLTableColElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vch = testNode.ch;
    test.equal(vch, "*", "chLink");
    test.done();
  },

  /**
   *
   The char attribute specifies the alignment character for cells
   in a column(COLGROUP).
   Retrieve the char attribute from the COLGROUP element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-9447412
   */
  HTMLTableColElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("colgroup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vch = testNode.ch;
    test.equal(vch, "$", "chLink");
    test.done();
  },

  /**
   *
   The charoff attribute specifies offset of alignment character(COL).
   Retrieve the charoff attribute from the COL element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-57779225
   */
  HTMLTableColElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vchoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vchoff = testNode.chOff;
    test.equal(vchoff, "20", "chLink");
    test.done();
  },

  /**
   *
   The charoff attribute specifies offset of alignment character(COLGROUP).
   Retrieve the charoff attribute from the COLGROUP element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-57779225
   */
  HTMLTableColElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vchoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("colgroup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vchoff = testNode.chOff;
    test.equal(vchoff, "15", "chLink");
    test.done();
  },

  /**
   *
   The span attribute indicates the number of columns in a group or affected
   by a grouping(COL).
   Retrieve the span attribute of the COL element and examine its
   value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96511335
   */
  HTMLTableColElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vspan = testNode.span;
    test.equal(vspan, 1, "spanLink");
    test.done();
  },

  /**
   *
   The span attribute indicates the number of columns in a group or affected
   by a grouping(COLGROUP).
   Retrieve the span attribute of the COLGROUP element and examine its
   value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96511335
   */
  HTMLTableColElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("colgroup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vspan = testNode.span;
    test.equal(vspan, 2, "spanLink");
    test.done();
  },

  /**
   *
   The vAlign attribute specifies the vertical alignment of cell data
   in column(COL).
   Retrieve the vAlign attribute from the COL element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83291710
   */
  HTMLTableColElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The vAlign attribute specifies the vertical alignment of cell data
   in column(COLGROUP).
   Retrieve the vAlign attribute from the COLGROUP element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83291710
   */
  HTMLTableColElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("colgroup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The width attribute specifies the default column width(COL).
   Retrieve the width attribute from the COL element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-25196799
   */
  HTMLTableColElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, "20", "widthLink");
    test.done();
  },

  /**
   *
   The width attribute specifies the default column width(COLGORUP).
   Retrieve the width attribute from the COLGROUP element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-25196799
   */
  HTMLTableColElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("colgroup");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, "20", "widthLink");
    test.done();
  },

  /**
   *
   The caption attribute returns the tables CAPTION.
   Retrieve the align attribute of the CAPTION element from the second
   TABLE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14594520
   */
  HTMLTableElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcaption;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vcaption = testNode.caption;
    valign = vcaption.align;
    test.equal(valign, "top", "alignLink");
    test.done();
  },

  /**
   *
   The caption attribute returns the tables CAPTION or void if it does not
   exist.
   Retrieve the CAPTION element from within the first TABLE element.
   Since one does not exist it should be void.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14594520
   */
  HTMLTableElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcaption;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vcaption = testNode.caption;
    test.equal(vcaption, null, 'vcaption should be null');
    test.done();
  },

  /**
   *
   The tHead attribute returns the tables THEAD.
   Retrieve the align attribute of the THEAD element from the second
   TABLE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-9530944
   */
  HTMLTableElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tHead;
    valign = vsection.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The tHead attribute returns the tables THEAD or null if it does not
   exist.
   Retrieve the THEAD element from within the first TABLE element.
   Since one does not exist it should be null.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-9530944
   */
  HTMLTableElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vsection = testNode.tHead;
    test.equal(vsection, null, 'vsection should be null');
    test.done();
  },

  /**
   *
   The tFoot attribute returns the tables TFOOT.
   Retrieve the align attribute of the TFOOT element from the second
   TABLE element and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  HTMLTableElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tFoot;
    valign = vsection.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The tFoot attribute returns the tables TFOOT or null if it does not
   exist.
   Retrieve the TFOOT element from within the first TABLE element.
   Since one does not exist it should be null.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  HTMLTableElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vsection = testNode.tFoot;
    test.equal(vsection, null, 'vsection should be null');
    test.done();
  },

  /**
   *
   The rows attribute returns a collection of all the rows in the table,
   including al in THEAD, TFOOT, all TBODY elements.
   Retrieve the rows attribute from the second TABLE element and
   examine the items of the returned collection.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6156016
   */
  HTMLTableElement07: function(test) {
    var expectedOptions = ['TR', 'TR' ,'TR' ,'TR'];
    var doc = load("table");
    var nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    var rows = nodeList.item(1).rows;
    var result = [];
    for(var i=0;i<rows.length;i++) {
      result.push(rows.item(i).nodeName);
    }
    test.deepEqual(result, expectedOptions, 'rowsLink');
    test.done();
  },

  /**
   *
   The tBodies attribute returns a collection of all the defined
   table bodies.
   Retrieve the tBodies attribute from the second TABLE element and
   examine the items of the returned collection.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63206416
   */
  HTMLTableElement08: function(test) {
    var expectedOptions = ["TBODY"];
    var doc = load("table");
    var nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    tbodies = nodeList.item(1).tBodies;
    var result = [];
    for(var i=0;i<tbodies.length;i++) {
      result.push(tbodies.item(i).nodeName);
    }
    test.deepEqual(result, expectedOptions, 'tbodiesLink');
    test.done();
  },

  /**
   *
   The tBodies attribute returns a collection of all the defined
   table bodies.
   Retrieve the tBodies attribute from the third TABLE element and
   examine the items of the returned collection. Tests multiple TBODY
   elements.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63206416
   */
  HTMLTableElement09: function(test) {
    var expectedOptions = ['TBODY', 'TBODY', 'TBODY'];
    var doc = load("table");
    var nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    var tbodies = nodeList.item(2).tBodies;
    var result = [];
    for(var i=0;i<tbodies.length;i++) {
      result.push(tbodies.item(i).nodeName);
    }
    test.deepEqual(result, expectedOptions, 'tbodiesLink');
    test.done();
  },

  /**
   *
   The align attribute specifies the table's position with respect to the
   rest of the document.
   Retrieve the align attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-23180977
   */
  HTMLTableElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The bgColor attribute specifies cell background color.
   Retrieve the bgColor attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83532985
   */
  HTMLTableElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbgcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vbgcolor = testNode.bgColor;
    test.equal(vbgcolor, "#ff0000", "bgColorLink");
    test.done();
  },

  /**
   *
   The border attribute specifies the width of the border around the table.
   Retrieve the border attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-50969400
   */
  HTMLTableElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vborder;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vborder = testNode.border;
    test.equal(vborder, "4", "borderLink");
    test.done();
  },

  /**
   *
   The cellpadding attribute specifies the horizontal and vertical space
   between cell content and cell borders.
   Retrieve the cellpadding attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59162158
   */
  HTMLTableElement13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcellpadding;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vcellpadding = testNode.cellPadding;
    test.equal(vcellpadding, "2", "cellPaddingLink");
    test.done();
  },

  /**
   *
   The cellSpacing attribute specifies the horizontal and vertical separation
   between cells.
   Retrieve the cellSpacing attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-68907883
   */
  HTMLTableElement14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var cellSpacing;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    cellSpacing = testNode.cellSpacing;
    test.equal(cellSpacing, "2", "cellSpacingLink");
    test.done();
  },

  /**
   *
   The frame attribute specifies which external table borders to render.
   Retrieve the frame attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64808476
   */
  HTMLTableElement15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vframe;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vframe = testNode.frame;
    test.equal(vframe, "border", "frameLink");
    test.done();
  },

  /**
   *
   The rules attribute specifies which internal table borders to render.
   Retrieve the rules attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-26347553
   */
  HTMLTableElement16: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrules;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vrules = testNode.rules;
    test.equal(vrules, "all", "rulesLink");
    test.done();
  },

  /**
   *
   The summary attribute is a description about the purpose or structure
   of a table.
   Retrieve the summary attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-44998528
   */
  HTMLTableElement17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsummary;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsummary = testNode.summary;
    test.equal(vsummary, "HTML Control Table", "summaryLink");
    test.done();
  },

  /**
   *
   The width attribute specifies the desired table width.
   Retrieve the width attribute of the first TABLE element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-77447361
   */
  HTMLTableElement18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vwidth = testNode.width;
    test.equal(vwidth, "680", "widthLink");
    test.done();
  },

  /**
   *
   The createTHead() method creates a table header row or returns
   an existing one.
   Create a new THEAD element on the first TABLE element.  The first
   TABLE element should return null to make sure one doesn't exist.
   After creation of the THEAD element the value is once again
   checked and should not be null.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-70313345
   */
  HTMLTableElement19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection1;
    var vsection2;
    var newHead;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vsection1 = testNode.tHead;
    test.equal(vsection1, null, 'vsection1 should be null');
    newHead = testNode.createTHead();
    vsection2 = testNode.tHead;
    test.notEqual(vsection2, null, 'vsection2 should not be null');
    test.done();
  },

  /**
   *
   The createTHead() method creates a table header row or returns
   an existing one.
   Try to create a new THEAD element on the second TABLE element.
   Since a THEAD element already exists in the TABLE element a new
   THEAD element is not created and information from the already
   existing THEAD element is returned.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-70313345
   */
  HTMLTableElement20: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var newHead;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    newHead = testNode.createTHead();
    vsection = testNode.tHead;
    valign = vsection.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The deleteTHead() method deletes the header from the table.
   The deleteTHead() method will delete the THEAD Element from the
   second TABLE element.  First make sure that the THEAD element exists
   and then count the number of rows.  After the THEAD element is
   deleted there should be one less row.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-38310198
   */
  HTMLTableElement21: function(test) {
    var success;
    var nodeList;
    var rowsnodeList;
    var testNode;
    var vsection1;
    var vsection2;
    var vrows;
    var doc;
    var result = new Array();
    expectedResult = new Array();
    expectedResult[0] = 4;
    expectedResult[1] = 3;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsection1 = testNode.tHead;
    test.notEqual(vsection1, null, 'vsection1 should not be null');
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    result[result.length] = vrows;
    testNode.deleteTHead();
    vsection2 = testNode.tHead;
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    result[result.length] = vrows;
    test.deepEqual(result, expectedResult, 'rowsLink');
    test.done();
  },

  /**
   *
   The createTFoot() method creates a table footer row or returns
   an existing one.
   Create a new TFOOT element on the first TABLE element.  The first
   TABLE element should return null to make sure one doesn't exist.
   After creation of the TFOOT element the value is once again
   checked and should not be null.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-8453710
   */
  HTMLTableElement22: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection1;
    var vsection2;
    var newFoot;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vsection1 = testNode.tFoot;
    test.equal(vsection1, null, 'vsection1 should be null');
    newFoot = testNode.createTFoot();
    vsection2 = testNode.tFoot;
    test.notEqual(vsection2, null, 'vsection2 should not be null');
    test.done();
  },

  /**
   *
   The createTFoot() method creates a table footer row or returns
   an existing one.
   Try to create a new TFOOT element on the second TABLE element.
   Since a TFOOT element already exists in the TABLE element a new
   TFOOT element is not created and information from the already
   existing TFOOT element is returned.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-8453710
   */
  HTMLTableElement23: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var newFoot;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    newFoot = testNode.createTFoot();
    vsection = testNode.tFoot;
    valign = vsection.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The deleteTFoot() method deletes the footer from the table.
   The deleteTFoot() method will delete the TFOOT Element from the
   second TABLE element.  First make sure that the TFOOT element exists
   and then count the number of rows.  After the TFOOT element is
   deleted there should be one less row.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-78363258
   */
  HTMLTableElement24: function(test) {
    var success;
    var nodeList;
    var rowsnodeList;
    var testNode;
    var vsection1;
    var vsection2;
    var vrows;
    var doc;
    var result = new Array();
    expectedResult = new Array();
    expectedResult[0] = 4;
    expectedResult[1] = 3;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsection1 = testNode.tFoot;
    test.notEqual(vsection1, null, 'vsection1 should not be null');
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    result[result.length] = vrows;
    testNode.deleteTFoot();
    vsection2 = testNode.tFoot;
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    result[result.length] = vrows;
    test.deepEqual(result, expectedResult, 'rowsLink');
    test.done();
  },

  /**
   *
   The createCaption() method creates a new table caption object or returns
   an existing one.
   Create a new CAPTION element on the first TABLE element.  Since
   one does not currently exist the CAPTION element is created.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96920263
   */
  HTMLTableElement25: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection1;
    var vsection2;
    var newCaption;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vsection1 = testNode.caption;
    test.equal(vsection1, null, 'vsection1 should be null');
    newCaption = testNode.createCaption();
    vsection2 = testNode.caption;
    test.notEqual(vsection2, null, 'vsection2 should not be null');
    test.done();
  },

  /**
   *
   The createCaption() method creates a new table caption object or returns
   an existing one.
   Create a new CAPTION element on the first TABLE element.  Since
   one currently exists the CAPTION element is not created and you
   can get the align attribute from the CAPTION element that exists.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96920263
   */
  HTMLTableElement26: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection1;
    var vcaption;
    var newCaption;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsection1 = testNode.caption;
    test.notEqual(vsection1, null, 'vsection1 should not be null');
    newCaption = testNode.createCaption();
    vcaption = testNode.caption;
    valign = vcaption.align;
    test.equal(valign, "top", "alignLink");
    test.done();
  },

  /**
   *
   The deleteCaption() method deletes the table caption.
   Delete the CAPTION element on the second TABLE element.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-22930071
   */
  HTMLTableElement27: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection1;
    var vsection2;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsection1 = testNode.caption;
    test.notEqual(vsection1, null, 'vsection1 should not be null');
    testNode.deleteCaption();
    vsection2 = testNode.caption;
    test.equal(vsection2, null, 'vsection2 should be null');
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the second TABLE element and invoke the insertRow() method
   with an index of 0. Currently the zero indexed row is in the THEAD
   section of the TABLE.  The number of rows in the THEAD section before
   insertion of the new row is one.  After the new row is inserted the number
   of rows in the THEAD section is two.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39872903
   */
  HTMLTableElement28: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vsection1;
    var vsection2;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsection1 = testNode.tHead;
    rowsnodeList = vsection1.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink1");
    newRow = testNode.insertRow(0);
    vsection2 = testNode.tHead;
    rowsnodeList = vsection2.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the second TABLE element and invoke the insertRow() method
   with an index of two. Currently the 2nd indexed row is in the TBODY
   section of the TABLE.  The number of rows in the TBODY section before
   insertion of the new row is two.  After the new row is inserted the number
   of rows in the TBODY section is three.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39872903
   */
  HTMLTableElement29: function(test) {
    var success;
    var nodeList;
    var tbodiesnodeList;
    var testNode;
    var bodyNode;
    var newRow;
    var rowsnodeList;
    var vsection1;
    var vsection2;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    tbodiesnodeList = testNode.tBodies;
    bodyNode = tbodiesnodeList.item(0);
    rowsnodeList = bodyNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink1");
    newRow = testNode.insertRow(2);
    tbodiesnodeList = testNode.tBodies;
    bodyNode = tbodiesnodeList.item(0);
    rowsnodeList = bodyNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 3, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the second TABLE element and invoke the insertRow() method
   with an index of four. After the new row is inserted the number of rows
   in the table should be five.
   Also the number of rows in the TFOOT section before
   insertion of the new row is one.  After the new row is inserted the number
   of rows in the TFOOT section is two.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39872903
   */
  HTMLTableElement30: function(test) {
    var success;
    var nodeList;
    var tbodiesnodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vsection1;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 4, "rowsLink1");
    vsection1 = testNode.tFoot;
    rowsnodeList = vsection1.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink");
    newRow = testNode.insertRow(4);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 5, "rowsLink2");
    vsection1 = testNode.tFoot;
    rowsnodeList = vsection1.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink3");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.  In addition, when
   the table is empty the row is inserted into a TBODY which is created
   and inserted into the table.
   Load the table1 file which has a non-empty table element.
   Create an empty TABLE element and append to the document.
   Check to make sure that the empty TABLE element doesn't
   have a TBODY element.  Insert a new row into the empty
   TABLE element.  Check for existence of the a TBODY element
   in the table.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39872903
   * @see http://lists.w3.org/Archives/Public/www-dom-ts/2002Aug/0019.html
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=502
   */
  HTMLTableElement31: function(test) {
    var success;
    var nodeList;
    var testNode;
    var tableNode;
    var tbodiesnodeList;
    var newRow;
    var doc;
    var table;
    var tbodiesLength;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table1");
    nodeList = doc.getElementsByTagName("body");
    test.equal(nodeList.length, 1, 'tableSize1');
    testNode = nodeList.item(0);
    table = doc.createElement("table");
    tableNode = testNode.appendChild(table);
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'tableSize2');
    tbodiesnodeList = tableNode.tBodies;
    tbodiesLength = tbodiesnodeList.length;
    test.equal(tbodiesLength, 0, "Asize3");
    newRow = tableNode.insertRow(0);
    tbodiesnodeList = tableNode.tBodies;
    tbodiesLength = tbodiesnodeList.length;
    test.equal(tbodiesLength, 1, "Asize4");
    test.done();
  },

  /**
   *
   The deleteRow() method deletes a table row.
   Retrieve the second TABLE element and invoke the deleteRow() method
   with an index of 0(first row). Currently there are four rows in the
   table.  After the deleteRow() method is called there should be
   three rows in the table.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-13114938
   */
  HTMLTableElement32: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 4, "rowsLink1");
    testNode.deleteRow(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 3, "rowsLink2");
    test.done();
  },

  /**
   *
   The deleteRow() method deletes a table row.
   Retrieve the second TABLE element and invoke the deleteRow() method
   with an index of 3(last row). Currently there are four rows in the
   table.  The deleteRow() method is called and now there should be three.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-13114938
   */
  HTMLTableElement33: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 4, "rowsLink1");
    testNode.deleteRow(3);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 3, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is greater than the number of rows.
   Retrieve the second TABLE element which has four rows.  Try
   to insert a new row using an index of five.  This should throw
   a INDEX_SIZE_ERR DOMException since there are only four rows.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-39872903
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-39872903')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableElement34: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    {
      success = false;
      try {
        newRow = testNode.insertRow(5);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableElement34');
    }
    test.done();
  },

  /**
   *
   The insertRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is negative.
   Retrieve the second TABLE element which has four rows.  Try
   to insert a new row using an index of negative five.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is negative.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-39872903
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-39872903')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableElement35: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    {
      success = false;
      try {
        newRow = testNode.insertRow(-5);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableElement35');
    }
    test.done();
  },

  /**
   *
   The deleteRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is greater than the number of rows.
   Retrieve the second TABLE element which has four rows.  Try
   to delete a new row using an index of five.  This should throw
   a INDEX_SIZE_ERR DOMException since there are only four rows.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-13114938
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-13114938')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableElement36: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    {
      success = false;
      try {
        testNode.deleteRow(5);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableElement36');
    }
    test.done();
  },

  /**
   *
   The deleteRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is equal the number of rows.
   Retrieve the second TABLE element which has four rows.  Try
   to delete a new row using an index of four.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is equal to the
   number of rows.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-13114938
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-13114938')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableElement37: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    {
      success = false;
      try {
        testNode.deleteRow(4);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableElement37');
    }
    test.done();
  },

  /**
   *
   The deleteRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is negative.
   Retrieve the second TABLE element which has four rows.  Try
   to delete a new row using an index of negative five.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is negative.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-13114938
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-13114938')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableElement38: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    {
      success = false;
      try {
        testNode.deleteRow(-5);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableElement38');
    }
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   If index is -1 or equal to the number of rows, the new row
   is appended.
   Retrieve the second TABLE element and invoke the insertRow() method
   with an index of negative one.
   The number of rows in the TBODY section before insertion with an index
   of negative one is two.  After the new row is inserted the number
   of rows in the TBODY section is three.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-39872903
   */
  HTMLTableElement39: function(test) {
    var success;
    var nodeList;
    var tbodiesnodeList;
    var testNode;
    var bodyNode;
    var newRow;
    var rowsnodeList;
    var vsection1;
    var vsection2;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    tbodiesnodeList = testNode.tBodies;
    bodyNode = tbodiesnodeList.item(0);
    rowsnodeList = bodyNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink1");
    newRow = testNode.insertRow(-1);
    tbodiesnodeList = testNode.tBodies;
    bodyNode = tbodiesnodeList.item(0);
    rowsnodeList = bodyNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 3, "rowsLink2");
    test.done();
  },

  /**
   *
   The deleteRow() method deletes a table row.  If the index is -1
   the last row of the table is deleted.
   Retrieve the second TABLE element and invoke the deleteRow() method
   with an index of negative one. Currently there are four rows in the
   table.  The deleteRow() method is called and now there should be three.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-13114938
   */
  HTMLTableElement40: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 4, "rowsLink1");
    testNode.deleteRow(-1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 3, "rowsLink2");
    test.done();
  },

  /**
   *
   The rowIndex attribute specifies the index of the row, relative to the
   entire table, starting from 0.  This is in document tree order and
   not display order.  The rowIndex does not take into account sections
   (THEAD, TFOOT, or TBODY) within the table.
   Retrieve the third TR element within the document and examine
   its rowIndex value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-67347567
   */
  HTMLTableRowElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    vrowindex = testNode.rowIndex;
    test.equal(vrowindex, 1, "rowIndexLink");
    test.done();
  },

  /**
   *
   The sectionRowIndex attribute specifies the index of this row, relative
   to the current section(THEAD, TFOOT, or TBODY),starting from 0.
   Retrieve the second TR(1st In THEAD) element within the document and
   examine its sectionRowIndex value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-79105901
   */
  HTMLTableRowElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsectionrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(1);
    vsectionrowindex = testNode.sectionRowIndex;
    test.equal(vsectionrowindex, 0, "sectionRowIndexLink");
    test.done();
  },

  /**
   *
   The sectionRowIndex attribute specifies the index of this row, relative
   to the current section(THEAD, TFOOT, or TBODY),starting from 0.
   Retrieve the third TR(1st In TFOOT) element within the document and
   examine its sectionRowIndex value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-79105901
   */
  HTMLTableRowElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsectionrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(2);
    vsectionrowindex = testNode.sectionRowIndex;
    test.equal(vsectionrowindex, 0, "sectionRowIndexLink");
    test.done();
  },

  /**
   *
   The sectionRowIndex attribute specifies the index of this row, relative
   to the current section(THEAD, TFOOT, or TBODY),starting from 0.
   Retrieve the fifth TR(2nd In TBODY) element within the document and
   examine its sectionRowIndex value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-79105901
   */
  HTMLTableRowElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsectionrowindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(4);
    vsectionrowindex = testNode.sectionRowIndex;
    test.equal(vsectionrowindex, 1, "sectionRowIndexLink");
    test.done();
  },

  /**
   *
   The cells attribute specifies the collection of cells in this row.
   Retrieve the fourth TR element and examine the value of
   the cells length attribute.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-67349879
   */
  HTMLTableRowElement05: function(test) {
    var success;
    var nodeList;
    var cellsnodeList;
    var testNode;
    var vcells;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 6, "cellsLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal alignment of data within
   cells of this row.
   Retrieve the align attribute of the second TR element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-74098257
   */
  HTMLTableRowElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(1);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The bgColor attribute specifies the background color of rows.
   Retrieve the bgColor attribute of the second TR element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-18161327
   */
  HTMLTableRowElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbgcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(1);
    vbgcolor = testNode.bgColor;
    test.equal(vbgcolor.toLowerCase(), "#00FFFF".toLowerCase(), "bgColorLink");
    test.done();
  },

  /**
   *
   The ch attribute specifies the alignment character for cells in a column.
   Retrieve the char attribute of the second TR element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-16230502
   */
  HTMLTableRowElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(1);
    vch = testNode.ch;
    test.equal(vch, "*", "chLink");
    test.done();
  },

  /**
   *
   The chOff attribute specifies the offset of alignment character.
   Retrieve the charoff attribute of the second TR element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-68207461
   */
  HTMLTableRowElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vchoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(1);
    vchoff = testNode.chOff;
    test.equal(vchoff, "1", "charOffLink");
    test.done();
  },

  /**
   *
   The vAlign attribute specifies the vertical alignment of data within
   cells of this row.
   Retrieve the vAlign attribute of the second TR element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-90000058
   */
  HTMLTableRowElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(1);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The insertCell() method inserts an empty TD cell into this row.
   Retrieve the fourth TR element and examine the value of
   the cells length attribute which should be set to six.
   Check the value of the first TD element.  Invoke the
   insertCell() which will create an empty TD cell at the
   zero index position.  Check the value of the newly created
   cell and make sure it is null and also the numbers of cells
   should now be seven.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-68927016
   */
  HTMLTableRowElement11: function(test) {
    var success;
    var nodeList;
    var cellsnodeList;
    var testNode;
    var trNode;
    var cellNode;
    var value;
    var newCell;
    var vcells;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 6, "cellsLink1");
    trNode = cellsnodeList.item(0);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "EMP0001", "value1Link");
    newCell = testNode.insertCell(0);
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 7, "cellsLink2");
    trNode = cellsnodeList.item(0);
    cellNode = trNode.firstChild;
    test.equal(cellNode, null, 'cellNode should be null');
    test.done();
  },

  /**
   *
   The insertCell() method inserts an empty TD cell into this row.
   Retrieve the fourth TR element and examine the value of
   the cells length attribute which should be set to six.
   Check the value of the last TD element.  Invoke the
   insertCell() which will append the empty cell to the end of the list.
   Check the value of the newly created cell and make sure it is null
   and also the numbers of cells should now be seven.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-68927016
   */
  HTMLTableRowElement12: function(test) {
    var success;
    var nodeList;
    var cellsnodeList;
    var testNode;
    var trNode;
    var cellNode;
    var value;
    var newCell;
    var vcells;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 6, "cellsLink1");
    trNode = cellsnodeList.item(5);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "1230 North Ave. Dallas, Texas 98551", "value1Link");
    newCell = testNode.insertCell(6);
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 7, "cellsLink2");
    trNode = cellsnodeList.item(6);
    cellNode = trNode.firstChild;
    test.equal(cellNode, null, 'cellNode should be null');
    test.done();
  },

  /**
   *
   The deleteCell() method deletes a cell from the current row.
   Retrieve the fourth TR element and examine the value of
   the cells length attribute which should be set to six.
   Check the value of the first TD element.  Invoke the
   deleteCell() method which will delete a cell from the current row.
   Check the value of the cell at the zero index and also check
   the number of cells which should now be five.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-11738598
   */
  HTMLTableRowElement13: function(test) {
    var success;
    var nodeList;
    var cellsnodeList;
    var testNode;
    var trNode;
    var cellNode;
    var value;
    var vcells;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 6, "cellsLink1");
    trNode = cellsnodeList.item(0);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "EMP0001", "value1Link");
    testNode.deleteCell(0);
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 5, "cellsLink2");
    trNode = cellsnodeList.item(0);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "Margaret Martin", "value2Link");
    test.done();
  },

  /**
   *
   The deleteCell() method deletes a cell from the current row.
   Retrieve the fourth TR element and examine the value of
   the cells length attribute which should be set to six.
   Check the value of the third(index 2) TD element.  Invoke the
   deleteCell() method which will delete a cell from the current row.
   Check the value of the third cell(index 2) and also check
   the number of cells which should now be five.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-11738598
   */
  HTMLTableRowElement14: function(test) {
    var success;
    var nodeList;
    var cellsnodeList;
    var testNode;
    var trNode;
    var cellNode;
    var value;
    var vcells;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 6, "cellsLink1");
    trNode = cellsnodeList.item(2);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "Accountant", "value1Link");
    testNode.deleteCell(2);
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 5, "cellsLink2");
    trNode = cellsnodeList.item(2);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "56,000", "value2Link");
    test.done();
  },

  /**
   *
   The insertCell() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is greater than the number of cells.
   Retrieve the fourth TR element which has six cells.  Try
   to insert a cell using an index of seven.  This should throw
   a INDEX_SIZE_ERR DOMException since there are only six cells.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-68927016
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-68927016')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableRowElement15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newCell;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    {
      success = false;
      try {
        newCell = testNode.insertCell(7);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableRowElement15');
    }
    test.done();
  },

  /**
   *
   The insertCell() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is negative.
   Retrieve the fourth TR element which has six cells.  Try
   to insert a cell using an index of negative seven.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is negative.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-68927016
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-68927016')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableRowElement16: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newCell;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    {
      success = false;
      try {
        newCell = testNode.insertCell(-7);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableRowElement16');
    }
    test.done();
  },

  /**
   *
   The deleteCell() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is greater than the number of cells.
   Retrieve the fourth TR element which has six cells.  Try
   to delete a cell using an index of seven.  This should throw
   a INDEX_SIZE_ERR DOMException since there are only six cells.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-11738598
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-11738598')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableRowElement17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    {
      success = false;
      try {
        testNode.deleteCell(7);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableRowElement17');
    }
    test.done();
  },

  /**
   *
   The deleteCell() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is equal to the number of cells.
   Retrieve the fourth TR element which has six cells.  Try
   to delete a cell using an index of six.  This should throw
   a INDEX_SIZE_ERR DOMException since there are only six cells.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-11738598
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-11738598')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableRowElement18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    {
      success = false;
      try {
        testNode.deleteCell(6);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableRowElement18');
    }
    test.done();
  },

  /**
   *
   The deleteCell() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is negative.
   Retrieve the fourth TR element which has six cells.  Try
   to delete a cell using an index of negative six.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is negative.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-11738598
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-11738598')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableRowElement19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    {
      success = false;
      try {
        testNode.deleteCell(-6);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableRowElement19');
    }
    test.done();
  },

  /**
   *
   The insertCell() method inserts an empty TD cell into this row.
   If index is -1 or equal to the number of cells, the new cell is
   appended.
   Retrieve the fourth TR element and examine the value of
   the cells length attribute which should be set to six.
   Check the value of the last TD element.  Invoke the
   insertCell() with an index of negative one
   which will append the empty cell to the end of the list.
   Check the value of the newly created cell and make sure it is null
   and also the numbers of cells should now be seven.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-68927016
   */
  HTMLTableRowElement20: function(test) {
    var success;
    var nodeList;
    var cellsnodeList;
    var testNode;
    var trNode;
    var cellNode;
    var value;
    var newCell;
    var vcells;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 6, "cellsLink1");
    trNode = cellsnodeList.item(5);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "1230 North Ave. Dallas, Texas 98551", "value1Link");
    newCell = testNode.insertCell(-1);
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 7, "cellsLink2");
    trNode = cellsnodeList.item(6);
    cellNode = trNode.firstChild;
    test.equal(cellNode, null, 'cellNode should be null');
    test.done();
  },

  /**
   *
   The deleteCell() method deletes a cell from the currtent row.  If
   the index is -1 the last cell in the row is deleted.
   Retrieve the fourth TR element and examine the value of
   the cells length attribute which should be set to six.
   Check the value of the last TD element.  Invoke the
   deleteCell() with an index of negative one
   which will delete the last cell in the row.
   Check the value of the of the last cell
   and also the numbers of cells should now be five.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-11738598
   */
  HTMLTableRowElement21: function(test) {
    var success;
    var nodeList;
    var cellsnodeList;
    var testNode;
    var trNode;
    var cellNode;
    var value;
    var vcells;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 6, "cellsLink1");
    trNode = cellsnodeList.item(5);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "1230 North Ave. Dallas, Texas 98551", "value1Link");
    testNode.deleteCell(-1);
    testNode = nodeList.item(3);
    cellsnodeList = testNode.cells;
    vcells = cellsnodeList.length;
    test.equal(vcells, 5, "cellsLink2");
    trNode = cellsnodeList.item(4);
    cellNode = trNode.firstChild;
    value = cellNode.nodeValue;
    test.equal(value, "Female", "value2Link");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal alignment of data within
   cells.
   Retrieve the align attribute of the first THEAD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40530119
   */
  HTMLTableSectionElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal alignment of data within
   cells.
   Retrieve the align attribute of the first TFOOT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40530119
   */
  HTMLTableSectionElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tfoot");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The align attribute specifies the horizontal alignment of data within
   cells.
   Retrieve the align attribute of the first TBODY element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-40530119
   */
  HTMLTableSectionElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The ch attribute specifies the alignment character for cells in a
   column.
   Retrieve the char attribute of the first THEAD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83470012
   */
  HTMLTableSectionElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vch = testNode.ch;
    test.equal(vch, "*", "chLink");
    test.done();
  },

  /**
   *
   The ch attribute specifies the alignment character for cells in a
   column.
   Retrieve the char attribute of the first TFOOT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83470012
   */
  HTMLTableSectionElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tfoot");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vch = testNode.ch;
    test.equal(vch, "+", "chLink");
    test.done();
  },

  /**
   *
   The ch attribute specifies the alignment character for cells in a
   column.
   Retrieve the char attribute of the first TBODY element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83470012
   */
  HTMLTableSectionElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vch = testNode.ch;
    test.equal(vch, "$", "chLink");
    test.done();
  },

  /**
   *
   The chOff attribute specifies the offset of alignment character.
   Retrieve the charoff attribute of the first THEAD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-53459732
   */
  HTMLTableSectionElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcharoff = testNode.chOff;
    test.equal(vcharoff, "1", "chOffLink");
    test.done();
  },

  /**
   *
   The chOff attribute specifies the offset of alignment character.
   Retrieve the charoff attribute of the first TFOOT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-53459732
   */
  HTMLTableSectionElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tfoot");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcharoff = testNode.chOff;
    test.equal(vcharoff, "2", "chOffLink");
    test.done();
  },

  /**
   *
   The chOff attribute specifies the offset of alignment character.
   Retrieve the charoff attribute of the first TBODY element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-53459732
   */
  HTMLTableSectionElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vcharoff = testNode.chOff;
    test.equal(vcharoff, "3", "chOffLink");
    test.done();
  },

  /**
   *
   The vAlign attribute specifies the vertical alignment of cell data in
   column.
   Retrieve the vAlign attribute of the first THEAD element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-4379116
   */
  HTMLTableSectionElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The vAlign attribute specifies the vertical alignment of cell data in
   column.
   Retrieve the vAlign attribute of the first TFOOT element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-4379116
   */
  HTMLTableSectionElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tfoot");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The vAlign attribute specifies the vertical alignment of cell data in
   column.
   Retrieve the vAlign attribute of the first TBODY element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-4379116
   */
  HTMLTableSectionElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The rows attribute specifies the collection of rows in this table section.
   Retrieve the first THEAD element and examine the value of
   the rows length attribute.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52092650
   */
  HTMLTableSectionElement13: function(test) {
    var success;
    var nodeList;
    var rowsnodeList;
    var testNode;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink");
    test.done();
  },

  /**
   *
   The rows attribute specifies the collection of rows in this table section.
   Retrieve the first TFOOT element and examine the value of
   the rows length attribute.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52092650
   */
  HTMLTableSectionElement14: function(test) {
    var success;
    var nodeList;
    var rowsnodeList;
    var testNode;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tfoot");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink");
    test.done();
  },

  /**
   *
   The rows attribute specifies the collection of rows in this table section.
   Retrieve the first TBODY element and examine the value of
   the rows length attribute.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-52092650
   */
  HTMLTableSectionElement15: function(test) {
    var success;
    var nodeList;
    var rowsnodeList;
    var testNode;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the first THEAD element and invoke the insertRow() method
   with an index of 0.  The nuber of rows in the THEAD section before
   insertion of the new row is one.  After the new row is inserted the number
   of rows in the THEAD section is two.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93995626
   */
  HTMLTableSectionElement16: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink1");
    newRow = testNode.insertRow(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the first TFOOT element and invoke the insertRow() method
   with an index of 0.  The nuber of rows in the TFOOT section before
   insertion of the new row is one.  After the new row is inserted the number
   of rows in the TFOOT section is two.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93995626
   */
  HTMLTableSectionElement17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tfoot");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink1");
    newRow = testNode.insertRow(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the first TBODY element and invoke the insertRow() method
   with an index of 0.  The nuber of rows in the TBODY section before
   insertion of the new row is two.  After the new row is inserted the number
   of rows in the TBODY section is three.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93995626
   */
  HTMLTableSectionElement18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink1");
    newRow = testNode.insertRow(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 3, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the first THEAD element and invoke the insertRow() method
   with an index of 1.  The nuber of rows in the THEAD section before
   insertion of the new row is one therefore the new row is appended.
   After the new row is inserted the number of rows in the THEAD
   section is two.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93995626
   */
  HTMLTableSectionElement19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink1");
    newRow = testNode.insertRow(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the first TFOOT element and invoke the insertRow() method
   with an index of one.  The nuber of rows in the TFOOT section before
   insertion of the new row is one therefore the new row is appended.
   After the new row is inserted the number of rows in the TFOOT section
   is two.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93995626
   */
  HTMLTableSectionElement20: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tfoot");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink1");
    newRow = testNode.insertRow(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.
   Retrieve the first TBODY element and invoke the insertRow() method
   with an index of two.  The number of rows in the TBODY section before
   insertion of the new row is two therefore the row is appended.
   After the new row is inserted the number of rows in the TBODY section is
   three.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93995626
   * @see http://www.w3.org/Bugs/Public/show_bug.cgi?id=502
   */
  HTMLTableSectionElement21: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink1");
    newRow = testNode.insertRow(2);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 3, "rowsLink2");
    test.done();
  },

  /**
   *
   The deleteRow() method deletes a row from this section.
   Retrieve the first THEAD element and invoke the deleteRow() method
   with an index of 0.  The nuber of rows in the THEAD section before
   the deletion of the row is one.  After the row is deleted the number
   of rows in the THEAD section is zero.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-5625626
   */
  HTMLTableSectionElement22: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink1");
    testNode.deleteRow(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 0, "rowsLink2");
    test.done();
  },

  /**
   *
   The deleteRow() method deletes a row from this section.
   Retrieve the first TFOOT element and invoke the deleteRow() method
   with an index of 0.  The nuber of rows in the TFOOT section before
   the deletion of the row is one.  After the row is deleted the number
   of rows in the TFOOT section is zero.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-5625626
   */
  HTMLTableSectionElement23: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tfoot");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink1");
    testNode.deleteRow(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 0, "rowsLink2");
    test.done();
  },

  /**
   *
   The deleteRow() method deletes a row from this section.
   Retrieve the first TBODY element and invoke the deleteRow() method
   with an index of 0.  The nuber of rows in the TBODY section before
   the deletion of the row is two.  After the row is deleted the number
   of rows in the TBODY section is one.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-5625626
   */
  HTMLTableSectionElement24: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink1");
    testNode.deleteRow(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink2");
    test.done();
  },

  /**
   *
   The insertRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is greater than the number of rows.
   Retrieve the first THEAD element which has one row.  Try
   to insert a new row using an index of two.  This should throw
   a INDEX_SIZE_ERR DOMException since there is only one row.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-93995626
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-93995626')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableSectionElement25: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    {
      success = false;
      try {
        newRow = testNode.insertRow(2);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableSectionElement25');
    }
    test.done();
  },

  /**
   *
   The insertRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is negative.
   Retrieve the first THEAD element which has one row.  Try
   to insert a new row using an index of negative two.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is negative.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-93995626
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-93995626')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableSectionElement26: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    {
      success = false;
      try {
        newRow = testNode.insertRow(-2);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableSectionElement26');
    }
    test.done();
  },

  /**
   *
   The deleteRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is greater than the number of rows.
   Retrieve the first THEAD element which has one row.  Try
   to delete a row using an index of two.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is greater than the
   number of rows.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-5625626
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-5625626')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableSectionElement27: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    {
      success = false;
      try {
        testNode.deleteRow(2);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableSectionElement27');
    }
    test.done();
  },

  /**
   *
   The deleteRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is equal to the number of rows.
   Retrieve the first THEAD element which has one row.  Try
   to delete a row using an index of 1.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is equal to the
   number of rows.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-5625626
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-5625626')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableSectionElement28: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    {
      success = false;
      try {
        testNode.deleteRow(1);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableSectionElement28');
    }
    test.done();
  },

  /**
   *
   The deleteRow() method throws a INDEX_SIZE_ERR DOMException
   if the specified index is negative.
   Retrieve the first THEAD element which has one row.  Try
   to delete a row using an index of negative two.  This should throw
   a INDEX_SIZE_ERR DOMException since the index is negative.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-5625626
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#xpointer(id('ID-5625626')/raises/exception[@name='DOMException']/descr/p[substring-before(.,':')='INDEX_SIZE_ERR'])
   */
  HTMLTableSectionElement29: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    {
      success = false;
      try {
        testNode.deleteRow(-2);
      }
      catch(ex) {
        success = (typeof(ex.code) != 'undefined' && ex.code == 1);
      }
      test.ok(success, 'HTMLTableSectionElement29');
    }
    test.done();
  },

  /**
   *
   The insertRow() method inserts a new empty table row.  The new
   row is inserted immediately before the current indexth row in this
   section.  If index is -1 or equal to the number of rows in this section,
   the new row is appended.
   Retrieve the first THEAD element and invoke the insertRow() method
   with an index of negative one.  Since the index is negative one the
   new row is appended.
   After the new row is appended the number of rows in the THEAD
   section is two.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-93995626
   */
  HTMLTableSectionElement30: function(test) {
    var success;
    var nodeList;
    var testNode;
    var newRow;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("thead");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink1");
    newRow = testNode.insertRow(-1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink2");
    test.done();
  },

  /**
   *
   The deleteRow() method deletes a row from this section.  The index
   starts from 0 and is relative only to the rows contained inside
   this section, not all the rows in the table.  If the index is -1
   the last row will be deleted.
   Retrieve the second TBODY element and invoke the deleteRow() method
   with an index of -1.  The nuber of rows in the THEAD section before
   the deletion of the row is two.  After the row is deleted the number
   of rows in the TBODY section is one.
   * @author NIST
   * @author Rick Rivello
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-5625626
   */
  HTMLTableSectionElement31: function(test) {
    var success;
    var nodeList;
    var testNode;
    var rowsnodeList;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("tbody");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 2, "rowsLink1");
    testNode.deleteRow(-1);
    rowsnodeList = testNode.rows;
    vrows = rowsnodeList.length;
    test.equal(vrows, 1, "rowsLink2");
    test.done();
  },

  /**
   *
   The defaultValue attribute represents the HTML value of the attribute
   when the type attribute has the value of "Text", "File" or "Password".
   Retrieve the defaultValue attribute of the 2nd TEXTAREA element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-36152213
   */
  HTMLTextAreaElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdefaultvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vdefaultvalue = testNode.defaultValue;
    test.equal(vdefaultvalue, "TEXTAREA2", "defaultValueLink");
    test.done();
  },

  /**
   *
   The form attribute returns the FORM element containing this control.
   Retrieve the form attribute from the first TEXTAREA element
   and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-18911464
   */
  HTMLTextAreaElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var fNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    fNode = testNode.form;
    vform = fNode.id;
    test.equal(vform, "form1", "formLink");
    test.done();
  },

  /**
   *
   The form attribute returns null if control in not within the context of
   a form.
   Retrieve the second TEXTAREA element and
   examine its form element.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-18911464
   */
  HTMLTextAreaElement03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The accessKey attribute specifies a single character access key to
   give access to the form control.
   Retrieve the accessKey attribute of the 1st TEXTAREA element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-93102991
   */
  HTMLTextAreaElement04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "c", "accessKeyLink");
    test.done();
  },

  /**
   *
   The cols attribute specifies the width of control(in characters).
   Retrieve the cols attribute of the 1st TEXTAREA element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-51387225
   */
  HTMLTextAreaElement05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcols;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vcols = testNode.cols;
    test.equal(vcols, 20, "colsLink");
    test.done();
  },

  /**
   *
   The disabled attribute specifies the control is unavailable in this
   context.
   Retrieve the disabled attribute from the 2nd TEXTAREA element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98725443
   */
  HTMLTextAreaElement06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vdisabled = testNode.disabled;
    test.ok(vdisabled, 'disabledLink');
    test.done();
  },

  /**
   *
   The name attribute specifies the form control or object name when
   submitted with a form.
   Retrieve the name attribute of the 1st TEXTAREA element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-70715578
   */
  HTMLTextAreaElement07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vname = testNode.name;
    test.equal(vname, "text1", "nameLink");
    test.done();
  },

  /**
   *
   The readOnly attribute specifies this control is read-only.
   Retrieve the readOnly attribute from the 3rd TEXTAREA element and
   examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39131423
   */
  HTMLTextAreaElement08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vreadonly;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(2);
    vreadonly = testNode.readOnly;
    test.ok(vreadonly, 'readOnlyLink');
    test.done();
  },

  /**
   *
   The rows attribute specifies the number of text rowns.
   Retrieve the rows attribute of the 1st TEXTAREA element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-46975887
   */
  HTMLTextAreaElement09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vrows = testNode.rows;
    test.equal(vrows, 7, "rowsLink");
    test.done();
  },

  /**
   *
   The tabIndex attribute is an index that represents the element's position
   in the tabbing order.
   Retrieve the tabIndex attribute of the 1st TEXTAREA element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-60363303
   */
  HTMLTextAreaElement10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 5, "tabIndexLink");
    test.done();
  },

  /**
   *
   The type attribute specifies the type of this form control.
   Retrieve the type attribute of the 1st TEXTAREA element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-24874179
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#HTML-HTMLTextAreaElement-type
   */
  HTMLTextAreaElement11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "textarea", "typeLink");
    test.done();
  },

  /**
   *
   The value attribute represents the current contents of the corresponding
   form control, in an interactive user agent.
   Retrieve the value attribute of the 1st TEXTAREA element and examine
   its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-70715579
   */
  HTMLTextAreaElement12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    vvalue = testNode.value;
    test.equal(vvalue, "TEXTAREA1", "valueLink");
    test.done();
  },

  /**
   *
   Calling HTMLTextAreaElement.blur should surrender input focus.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6750689
   */
  HTMLTextAreaElement13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    testNode.blur();
    test.done();
  },

  /**
   *
   Calling HTMLTextAreaElement.focus should capture input focus.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39055426
   */
  HTMLTextAreaElement14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    testNode.focus();
    test.done();
  },

  /**
   *
   Calling HTMLTextAreaElement.select should select the text area.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-48880622
   */
  HTMLTextAreaElement15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("textarea");
    nodeList = doc.getElementsByTagName("textarea");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(0);
    testNode.select();
    test.done();
  },

  /**
   *
   The text attribute is the specified title as a string.
   Retrieve the text attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-77500413
   */
  HTMLTitleElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtext;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("title");
    nodeList = doc.getElementsByTagName("title");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtext = testNode.text;
    test.equal(vtext, "NIST DOM HTML Test - TITLE", "textLink");
    test.done();
  },

  /**
   *
   The compact attribute specifies whether to reduce spacing between list
   items.
   Retrieve the compact attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39864178
   */
  HTMLUListElement01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcompact;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("ulist");
    nodeList = doc.getElementsByTagName("ul");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vcompact = testNode.compact;
    test.ok(vcompact, 'compactLink');
    test.done();
  },

  /**
   *
   The type attribute specifies the bullet style.
   Retrieve the type attribute and examine its value.
   * @author NIST
   * @author Mary Brady
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96874670
   */
  HTMLUListElement02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("ulist");
    nodeList = doc.getElementsByTagName("ul");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "disc", "typeLink");
    test.done();
  },

  /**
   *
   A single character access key to give access to the form control.
   The value of attribute accessKey of the anchor element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-89647724
   */
  anchor01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "g", "accessKeyLink");
    test.done();
  },

  /**
   *
   The character encoding of the linked resource.
   The value of attribute charset of the anchor element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-67619266
   */
  anchor02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcharset;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcharset = testNode.charset;
    test.equal(vcharset, "US-ASCII", "charsetLink");
    test.done();
  },

  /**
   *
   Comma-separated list of lengths, defining an active region geometry.
   The value of attribute coords of the anchor element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-92079539
   */
  anchor03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcoords;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcoords = testNode.coords;
    test.equal(vcoords, "0,0,100,100", "coordsLink");
    test.done();
  },

  /**
   *
   The URI of the linked resource.
   The value of attribute href of the anchor element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88517319
   */
  anchor04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhref;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vhref = testNode.href;
    test.equal(vhref, toFileUrl('html/files/pix/submit.gif'), 'hrefLink');
    test.done();
  },

  /**
   *
   Advisory content type.
   The value of attribute type of the anchor element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63938221
   */
  anchor05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "image/gif", "typeLink");
    test.done();
  },

  /**
   *
   The shape of the active area. The coordinates are given by coords
   The value of attribute shape of the anchor element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-49899808
   */
  anchor06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vshape;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    nodeList = doc.getElementsByTagName("a");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vshape = testNode.shape;
    test.equal(vshape, "rect", "shapeLink");
    test.done();
  },

  /**
   *
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-66021476
   */
  area01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcoords;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcoords = testNode.coords;
    test.equal(vcoords, "0,2,45,45", "coordsLink");
    test.done();
  },

  /**
   *
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-61826871
   */
  area02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vnohref;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vnohref = testNode.noHref;
    test.equal(vnohref, false, 'vnohref should be *false*');
    test.done();
  },

  /**
   *
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-8722121
   */
  area03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 10, "tabIndexLink");
    test.done();
  },

  /**
   *
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-57944457
   */
  area04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaccesskey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("area");
    nodeList = doc.getElementsByTagName("area");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vaccesskey = testNode.accessKey;
    test.equal(vaccesskey, "a", "accessKeyLink");
    test.done();
  },

  /**
   *
   The value of attribute color of the basefont element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-87502302
   */
  basefont01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("basefont");
    nodeList = doc.getElementsByTagName("basefont");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcolor = testNode.color;
    test.equal(vcolor, "#000000", "colorLink");
    test.done();
  },

  /**
   *
   Color of active links (after mouse-button down, but before mouse-button up).
   The value of attribute alink of the body element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59424581
   */
  body01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valink;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("body");
    nodeList = doc.getElementsByTagName("body");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valink = testNode.aLink;
    test.equal(valink, "#0000ff", "aLinkLink");
    test.done();
  },

  /**
   *
   Returns the FORM element containing this control. Returns null if this control is not within the context of a form.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71254493
   */
  button01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   The value of attribute name of the form element which contains this button is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71254493
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-63534901
   */
  button02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var formNode;
    var vfname;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    formNode = testNode.form;
    vfname = formNode.id;
    test.equal(vfname, "form2", "formLink");
    test.done();
  },

  /**
   *
   The value of attribute action of the form element which contains this button is read and checked against the expected value
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71254493
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-74049184
   */
  button03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var formNode;
    var vfaction;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    formNode = testNode.form;
    vfaction = formNode.action;
    test.equal(vfaction, "...", "formLink");
    test.done();
  },

  /**
   *
   The value of attribute method of the form element which contains this button is read and checked against the expected value
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-71254493
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-82545539
   */
  button04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var formNode;
    var vfmethod;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    formNode = testNode.form;
    vfmethod = formNode.method;
    test.equal(vfmethod.toLowerCase(), "POST".toLowerCase(), "formLink");
    test.done();
  },

  /**
   *
   A single character access key to give access to the form control.
   The value of attribute accessKey of the button element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-73169431
   */
  button05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vakey;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vakey = testNode.accessKey;
    test.equal(vakey.toLowerCase(), "f".toLowerCase(), "accessKeyLink");
    test.done();
  },

  /**
   *
   Index that represents the element's position in the tabbing order.
   The value of attribute tabIndex of the button element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-39190908
   */
  button06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabIndex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtabIndex = testNode.tabIndex;
    test.equal(vtabIndex, 20, "tabIndexLink");
    test.done();
  },

  /**
   *
   The type of button
   The value of attribute type of the button element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-27430092
   */
  button07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "reset", "typeLink");
    test.done();
  },

  /**
   *
   The control is unavailable in this context.
   The boolean value of attribute disabled of the button element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-92757155
   */
  button08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdisabled;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vdisabled = testNode.disabled;
    test.ok(vdisabled, 'disabledLink');
    test.done();
  },

  /**
   *
   The current form control value.
   The value of attribute value of the button element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-72856782
   */
  button09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalue;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("button");
    nodeList = doc.getElementsByTagName("button");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vvalue = testNode.value;
    test.equal(vvalue, "Reset Disabled Button", "typeLink");
    test.done();
  },

  /**
   *
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-21738539
   */
  dlist01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcompact;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("dl");
    nodeList = doc.getElementsByTagName("dl");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcompact = testNode.compact;
    test.ok(vcompact, 'compactLink');
    test.done();
  },

  /**
   *
   Retrieve the title attribute of HTMLDocument and examine it's value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-18446827
   */
  doc01: function(test) {
    var success;
    var vtitle;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    vtitle = doc.title;
    test.equal(vtitle, "NIST DOM HTML Test - Anchor", "titleLink");
    test.done();
  },

  /**
   *
   hasFeature("hTmL", null) should return true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-core#ID-5CED94D7
   */
  hasFeature01: function(test) {
    var success;
    var doc;
    var domImpl;
    var version = null;
    var state;
    domImpl = getImplementation();
    state = domImpl.hasFeature("hTmL",version);
    test.ok(state, 'hasHTMLnull');
    test.done();
  },

  /**
   *
   hasFeature("hTmL", "2.0") should return true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  hasFeature02: function(test) {
    var success;
    var doc;
    var domImpl;
    var version = "2.0";
    var state;
    domImpl = getImplementation();
    state = domImpl.hasFeature("hTmL",version);
    test.ok(state, 'hasHTML2');
    test.done();
  },

  /**
   *
   hasFeature("xhTmL", null) should return true if hasFeature("XML", null) returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  hasFeature03: function(test) {
    var success;
    var doc;
    var domImpl;
    var version = null;
    var state;
    var hasXML;
    domImpl = getImplementation();
    hasXML = domImpl.hasFeature("XML",version);
    state = domImpl.hasFeature("xhTmL",version);
    test.equal(state, hasXML, "hasXHTML");
    test.done();
  },

  /**
   *
   hasFeature("xhTmL", "2.0") should return true if hasFeature("XML", "2.0") returns true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  hasFeature04: function(test) {
    var success;
    var doc;
    var domImpl;
    var version = "2.0";
    var state;
    var hasXML;
    domImpl = getImplementation();
    hasXML = domImpl.hasFeature("XML",version);
    state = domImpl.hasFeature("xhTmL",version);
    test.equal(state, hasXML, "hasXHTML");
    test.done();
  },

  /**
   *
   hasFeature("cOrE", null) should return true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  hasFeature05: function(test) {
    var success;
    var doc;
    var domImpl;
    var version = null;
    var state;
    domImpl = getImplementation();
    state = domImpl.hasFeature("cOrE",version);
    test.ok(state, 'hasCore');
    test.done();
  },

  /**
   *
   hasFeature("cOrE", "2.0") should return true.
   * @author Curt Arnold
   * @see http://www.w3.org/TR/DOM-Level-2-Core/core#ID-5CED94D7
   */
  hasFeature06: function(test) {
    var success;
    var doc;
    var domImpl;
    var version = "2.0";
    var state;
    domImpl = getImplementation();
    state = domImpl.hasFeature("cOrE",version);
    test.ok(state, 'hasCore');
    test.done();
  },

  /**
   *
   Returns the FORM element containing this control. Returns null if this control is not within the context of a form.
   The value of attribute form of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-46094773
   */
  object01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vform;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vform = testNode.form;
    test.equal(vform, null, 'vform should be null');
    test.done();
  },

  /**
   *
   Aligns this object (vertically or horizontally) with respect to its surrounding text.
   The value of attribute align of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-16962097
   */
  object02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "middle", "alignLink");
    test.done();
  },

  /**
   *
   Space-separated list of archives
   The value of attribute archive of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-47783837
   */
  object03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var varchive;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    varchive = testNode.archive;
    test.equal(varchive, "", "archiveLink");
    test.done();
  },

  /**
   *
   Width of border around the object.
   The value of attribute border of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-82818419
   */
  object04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vborder;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vborder = testNode.border;
    test.equal(vborder, "0", "borderLink");
    test.done();
  },

  /**
   *
   Base URI for classid, data, and archive attributes.
   The value of attribute codebase of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-25709136
   */
  object05: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcodebase;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vcodebase = testNode.codeBase;
    test.equal(vcodebase, "http://xw2k.sdct.itl.nist.gov/brady/dom/", "codebaseLink");
    test.done();
  },

  /**
   *
   A URI specifying the location of the object's data.
   The value of attribute data of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-81766986
   */
  object06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vdata;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vdata = testNode.data;
    test.equal(vdata, "./pix/logo.gif", "dataLink");
    test.done();
  },

  /**
   *
   The value of attribute height of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88925838
   */
  object07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vheight = testNode.height;
    test.equal(vheight, "60", "heightLink");
    test.done();
  },

  /**
   *
   Horizontal space to the left and right of this image, applet, or object.
   The value of attribute hspace of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-17085376
   */
  object08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vhspace;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vhspace = testNode.hspace;
    test.equal(vhspace, 0, "hspaceLink");
    test.done();
  },

  /**
   *
   Message to render while loading the object.
   The value of attribute standby of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-25039673
   */
  object09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vstandby;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vstandby = testNode.standby;
    test.equal(vstandby, "Loading Image ...", "standbyLink");
    test.done();
  },

  /**
   *
   Index that represents the element's position in the tabbing order.
   The value of attribute tabIndex of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-27083787
   */
  object10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtabindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtabindex = testNode.tabIndex;
    test.equal(vtabindex, 0, "tabIndexLink");
    test.done();
  },

  /**
   *
   Content type for data downloaded via data attribute.
   The value of attribute type of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-91665621
   */
  object11: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vtype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vtype = testNode.type;
    test.equal(vtype, "image/gif", "typeLink");
    test.done();
  },

  /**
   *
   The value of attribute usemap of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-6649772
   */
  object12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vusemap;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vusemap = testNode.useMap;
    test.equal(vusemap, "#DivLogo-map", "useMapLink");
    test.done();
  },

  /**
   *
   Vertical space above and below this image, applet, or object.
   The value of attribute vspace of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/DOM-Level-2-HTML/html#ID-8682483
   */
  object13: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvspace;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vvspace = testNode.vspace;
    test.equal(vvspace, 0, "vspaceLink");
    test.done();
  },

  /**
   *
   The value of attribute width of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-38538620
   */
  object14: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, "550", "widthLink");
    test.done();
  },

  /**
   *
   Content type for data downloaded via classid attribute.
   The value of attribute codetype of the object element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-19945008
   */
  object15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcodetype;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("object");
    nodeList = doc.getElementsByTagName("object");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vcodetype = testNode.codeType;
    test.equal(vcodetype, "image/gif", "codeTypeLink");
    test.done();
  },

  /**
   *
   Returns the table's CAPTION, or void if none exists.
   The value of attribute caption of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14594520
   */
  table01: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcaption;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table1");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vcaption = testNode.caption;
    test.equal(vcaption, null, 'vcaption should be null');
    test.done();
  },

  /**
   *
   Caption alignment with respect to the table.
   The value of attribute align of the tablecaption element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-14594520
   */
  table02: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcaption;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vcaption = testNode.caption;
    valign = vcaption.align;
    test.equal(valign, "top", "alignLink");
    test.done();
  },

  /**
   *
   Alignment character for cells in a column.
   The value of attribute ch of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-9530944
   */
  table03: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tHead;
    vch = vsection.ch;
    test.equal(vch, "*", "chLink");
    test.done();
  },

  /**
   *
   Horizontal alignment of data in cells.
   The value of attribute align of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-9530944
   */
  table04: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tHead;
    valign = vsection.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   Vertical alignment of data in cells.
   The value of attribute valign of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  table06: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var vvAlign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tFoot;
    vvAlign = vsection.vAlign;
    test.equal(vvAlign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   The collection of rows in this table section.
   The value of attribute rows of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  table07: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var vcollection;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tFoot;
    vcollection = vsection.rows;
    vrows = vcollection.length;
    test.equal(vrows, 1, "vrowsLink");
    test.done();
  },

  /**
   *
   Horizontal alignment of data in cells.
   The value of attribute align of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  table08: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tFoot;
    valign = vsection.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   Vertical alignment of data in cells.
   The value of attribute valign of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-9530944
   */
  table09: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tHead;
    vvalign = vsection.vAlign;
    test.equal(vvalign, "middle", "alignLink");
    test.done();
  },

  /**
   *
   Alignment character for cells in a column.
   The value of attribute ch of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  table10: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tFoot;
    vch = vsection.ch;
    test.equal(vch, "+", "chLink");
    test.done();
  },

  /**
   *
   Offset of alignment character.
   The value of attribute choff of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  table12: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var vchoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tHead;
    vchoff = vsection.chOff;
    test.equal(vchoff, "1", "choffLink");
    test.done();
  },

  /**
   *
   The collection of rows in this table section.
   The value of attribute rows of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  table15: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var vcollection;
    var vrows;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tHead;
    vcollection = vsection.rows;
    vrows = vcollection.length;
    test.equal(vrows, 1, "vrowsLink");
    test.done();
  },

  /**
   *
   Offset of alignment character.
   The value of attribute chOff of the tablesection element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64197097
   */
  table17: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsection;
    var vchoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablesection");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 2, 'Asize');
    testNode = nodeList.item(1);
    vsection = testNode.tFoot;
    vchoff = vsection.chOff;
    test.equal(vchoff, "2", "choffLink");
    test.done();
  },

  /**
   *
   The index of this cell in the row.
   The value of attribute cellIndex of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-80748363
   */
  table18: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vcindex = testNode.cellIndex;
    test.equal(vcindex, 1, "cellIndexLink");
    test.done();
  },

  /**
   *
   Abbreviation for header cells.
   The index of this cell in the row.
   The value of attribute abbr of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-74444037
   */
  table19: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vabbr;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vabbr = testNode.abbr;
    test.equal(vabbr, "hd2", "abbrLink");
    test.done();
  },

  /**
   *
   Names group of related headers.
   The value of attribute axis of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-76554418
   */
  table20: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vaxis;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vaxis = testNode.axis;
    test.equal(vaxis, "center", "axisLink");
    test.done();
  },

  /**
   *
   Horizontal alignment of data in cell.
   The value of attribute align of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-98433879
   */
  table21: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   Cell background color.
   The value of attribute bgColor of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-88135431
   */
  table22: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbgcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vbgcolor = testNode.bgColor;
    test.equal(vbgcolor.toLowerCase(), "#FF0000".toLowerCase(), "bgcolorLink");
    test.done();
  },

  /**
   *
   Alignment character for cells in a column.
   The value of attribute char of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-30914780
   */
  table23: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vch = testNode.ch;
    test.equal(vch, ":", "chLink");
    test.done();
  },

  /**
   *
   offset of alignment character.
   The value of attribute chOff of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-20144310
   */
  table24: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vchoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vchoff = testNode.chOff;
    test.equal(vchoff, "1", "chOffLink");
    test.done();
  },

  /**
   *
   Number of columns spanned by cell.
   The value of attribute colspan of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-84645244
   */
  table25: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcolspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vcolspan = testNode.colSpan;
    test.equal(vcolspan, 1, "colSpanLink");
    test.done();
  },

  /**
   *
   The value of attribute height of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83679212
   */
  table26: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheight;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vheight = testNode.height;
    test.equal(vheight, "50", "heightLink");
    test.done();
  },

  /**
   *
   Suppress word wrapping.
   The value of attribute nowrap of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-62922045
   */
  table27: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vnowrap;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vnowrap = testNode.noWrap;
    test.ok(vnowrap, 'nowrapLink');
    test.done();
  },

  /**
   *
   Number of rows spanned by cell.
   The value of attribute rowspan of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-48237625
   */
  table28: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrowspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vrowspan = testNode.rowSpan;
    test.equal(vrowspan, 1, "rowSpanLink");
    test.done();
  },

  /**
   *
   Scope covered by header cells.
   The value of attribute scope of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-36139952
   */
  table29: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vscope;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vscope = testNode.scope;
    test.equal(vscope, "col", "scopeLink");
    test.done();
  },

  /**
   *
   List of id attribute values for header cells.
   The value of attribute headers of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-89104817
   */
  table30: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vheaders;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vheaders = testNode.headers;
    test.equal(vheaders, "header-3", "headersLink");
    test.done();
  },

  /**
   *
   Vertical alignment of data in cell.
   The value of attribute valign of the tablecell element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-58284221
   */
  table31: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   cell width.
   The value of attribute width of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-27480795
   */
  table32: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecell");
    nodeList = doc.getElementsByTagName("td");
    test.equal(nodeList.length, 4, 'Asize');
    testNode = nodeList.item(1);
    vwidth = testNode.width;
    test.equal(vwidth, "175", "vwidthLink");
    test.done();
  },

  /**
   *
   Specifies the table's position with respect to the rest of the document.
   The value of attribute align of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-23180977
   */
  table33: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   The width of the border around the table.
   The value of attribute border of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-50969400
   */
  table34: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vborder;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vborder = testNode.border;
    test.equal(vborder, "4", "borderLink");
    test.done();
  },

  /**
   *
   Cell background color.
   The value of attribute bgcolor of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83532985
   */
  table35: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbgcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vbgcolor = testNode.bgColor;
    test.equal(vbgcolor, "#ff0000", "bgcolorLink");
    test.done();
  },

  /**
   *
   Specifies which external table borders to render.
   The value of attribute frame of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-64808476
   */
  table36: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vframe;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vframe = testNode.frame;
    test.equal(vframe, "border", "frameLink");
    test.done();
  },

  /**
   *
   Specifies the horizontal and vertical space between cell content and cell borders. The value of attribute cellpadding of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-59162158
   */
  table37: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcellpadding;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vcellpadding = testNode.cellPadding;
    test.equal(vcellpadding, "2", "cellpaddingLink");
    test.done();
  },

  /**
   *
   Specifies the horizontal and vertical separation between cells.
   The value of attribute cellspacing of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-68907883
   */
  table38: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vcellspacing;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vcellspacing = testNode.cellSpacing;
    test.equal(vcellspacing, "2", "cellspacingLink");
    test.done();
  },

  /**
   *
   Supplementary description about the purpose or structure of a table.
   The value of attribute summary of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-44998528
   */
  table39: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vsummary;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vsummary = testNode.summary;
    test.equal(vsummary, "HTML Control Table", "summaryLink");
    test.done();
  },

  /**
   *
   Specifies which internal table borders to render.
   The value of attribute rules of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-26347553
   */
  table40: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrules;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vrules = testNode.rules;
    test.equal(vrules, "all", "rulesLink");
    test.done();
  },

  /**
   *
   Specifies the desired table width.
   The value of attribute width of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-77447361
   */
  table41: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("table");
    test.equal(nodeList.length, 3, 'Asize');
    testNode = nodeList.item(1);
    vwidth = testNode.width;
    test.equal(vwidth, "680", "widthLink");
    test.done();
  },

  /**
   *
   Horizontal alignment of data within cells of this row.
   The value of attribute align of the tablerow element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-74098257
   */
  table42: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 8, 'Asize');
    testNode = nodeList.item(1);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   Background color for rows.
   The value of attribute bgcolor of the tablerow element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-18161327
   */
  table43: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vbgcolor;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 8, 'Asize');
    testNode = nodeList.item(1);
    vbgcolor = testNode.bgColor;
    test.equal(vbgcolor.toLowerCase(), "#00FFFF".toLowerCase(), "bgcolorLink");
    test.done();
  },

  /**
   *
   Vertical alignment of data within cells of this row.
   The value of attribute valign of the tablerow element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-90000058
   */
  table44: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("table");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 8, 'Asize');
    testNode = nodeList.item(1);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "valignLink");
    test.done();
  },

  /**
   *
   Alignment character for cells in a column.
   The value of attribute ch of the tablerow element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-16230502
   */
  table45: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(1);
    vch = testNode.ch;
    test.equal(vch, "*", "vchLink");
    test.done();
  },

  /**
   *
   Offset of alignment character.
   The value of attribute choff of the tablerow element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-68207461
   */
  table46: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vchoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(1);
    vchoff = testNode.chOff;
    test.equal(vchoff, "1", "choffLink");
    test.done();
  },

  /**
   *
   The index of this row, relative to the entire table.
   The value of attribute rowIndex of the table element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-67347567
   */
  table47: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vrindex;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablerow");
    nodeList = doc.getElementsByTagName("tr");
    test.equal(nodeList.length, 5, 'Asize');
    testNode = nodeList.item(4);
    vrindex = testNode.rowIndex;
    test.equal(vrindex, 2, "rowIndexLink");
    test.done();
  },

  /**
   *
   Horizontal alignment of cell data in column.
   The value of attribute align of the tablecol element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-74098257
   */
  table48: function(test) {
    var success;
    var nodeList;
    var testNode;
    var valign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    valign = testNode.align;
    test.equal(valign, "center", "alignLink");
    test.done();
  },

  /**
   *
   Alignment character for cells in a column.
   The value of attribute ch of the tablecol element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-16230502
   */
  table49: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vch;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vch = testNode.ch;
    test.equal(vch, "*", "chLink");
    test.done();
  },

  /**
   *
   Offset of alignment character.
   The value of attribute choff of the tablecol element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-68207461
   */
  table50: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vchoff;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vchoff = testNode.chOff;
    test.equal(vchoff, "20", "chOffLink");
    test.done();
  },

  /**
   *
   Indicates the number of columns in a group or affected by a grouping.
   The value of attribute span of the tablecol element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-96511335
   */
  table51: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vspan;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vspan = testNode.span;
    test.equal(vspan, 1, "spanLink");
    test.done();
  },

  /**
   *
   Vertical alignment of cell data in column.
   The value of attribute valign of the tablecol element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-83291710
   */
  table52: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vvalign;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vvalign = testNode.vAlign;
    test.equal(vvalign, "middle", "vAlignLink");
    test.done();
  },

  /**
   *
   Default column width.
   The value of attribute width of the tablecol element is read and checked against the expected value.
   * @author Netscape
   * @author Sivakiran Tummala
   * @see http://www.w3.org/TR/1998/REC-DOM-Level-1-19981001/level-one-html#ID-25196799
   */
  table53: function(test) {
    var success;
    var nodeList;
    var testNode;
    var vwidth;
    var doc;
    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("tablecol");
    nodeList = doc.getElementsByTagName("col");
    test.equal(nodeList.length, 1, 'Asize');
    testNode = nodeList.item(0);
    vwidth = testNode.width;
    test.equal(vwidth, "20", "widthLink");
    test.done();
  },

  document_write_before_loaded: function(test) {
    var anchor, doc, docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    doc.innerHTML = "<html><body><p><a id='Anchor'>Anchor Text</a></body></html>";
    anchor = doc.getElementById("Anchor");
    doc.readyState = 'loading';
    doc.write("hello world");
    test.equal(anchor.innerHTML, 'hello world', "#Anchor's innerHTML should be set");
    test.done();
  },

  event_default_action: function(test) {
    var success;
    var doc;
    var target;
    var evt;
    var preventDefault;
    var performedDefault = false;

    var docRef = null;
    if (typeof(this.doc) != 'undefined') {
      docRef = this.doc;
    }
    doc = load("anchor");
    var a = doc.getElementById("Anchor");
    a.addEventListener("foo", function() {}, true);
    evt = doc.createEvent("Events");
    evt.initEvent("foo",false,false);

    a._eventDefaults['foo'] = function(event) {
      performedDefault = true;
    };
    preventDefault = a.dispatchEvent(evt);
    test.equal(preventDefault, false, 'preventDefault should be *false*');
    test.ok(performedDefault, 'performedDefault');
    test.done();
  },

  only_special_tags_have_name_and_it_reflects_the_attribute: function(test) {
    var doc = load("anchor");

    ['a', 'applet', 'button', 'form', 'frame', 'iframe', 'img', 'input', 'map',
     'meta', 'object', 'param', 'select', 'textarea'].forEach(function (tagName) {
      var element = doc.createElement(tagName);
      // http://www.w3.org/html/wg/drafts/html/master/forms.html#attr-fe-name plus
      // http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#reflect
      test.strictEqual(element.name, null, '<' + tagName + '> elements should have null name properties by default.');

      element.name = 'foo';
      test.strictEqual(element.name, 'foo', '<' + tagName + '> elements should allow setting and retrieving their name properties.');
      test.strictEqual(element.name, element.getAttribute('name'), '<' + tagName + '> elements should have name properties equal to their name attributes.');
    });

    ['section', 'abbr', 'label', 'option', 'customTag'].forEach(function (tagName) {
      var element = doc.createElement(tagName);
      test.strictEqual(element.name, undefined, '<' + tagName + '> elements should not have a value for the name property');
    });

    test.done();
  },

  checked_property_is_boolean: function(test) {
    var doc = load("anchor");

    doc.innerHTML = '<input id="x" type="checkbox" checked>';
    var el1 = doc.getElementById("x");

    test.strictEqual(el1.checked, true, "no attribute value");

    doc.innerHTML = '<input id="x" type="checkbox" checked="">';
    var el2 = doc.getElementById("x");

    test.strictEqual(el2.checked, true, "empty attribute value");

    doc.innerHTML = '<input id="x" type="checkbox">';
    var el3 = doc.getElementById("x");
    el3.checked = false;

    test.strictEqual(el3.hasAttribute("checked"), false, "staying false does not insert attribute");

    doc.innerHTML = '<input id="x" type="checkbox" checked="checked">';
    var el4 = doc.getElementById("x");
    el4.checked = false;

    test.strictEqual(el4.hasAttribute("checked"), false, "changing to false removes attribute");

    test.done();
  },

  normalize_method_defined_on_string_prototype_should_not_affect_getting_attribute_properties: function (test) {
    String.prototype.normalize = function () {
      return "masked alt";
    };
    var doc = jsdom.jsdom("<img alt=\"alt\" />");
    var img = doc.getElementsByTagName("img").item(0);

    test.strictEqual(img.alt, "alt", "<img> elements should not have their attribute properties masked by defining " +
      "a normalize method on string instances");

    delete String.prototype.normalize;
    test.done();
  },


  normalize_method_defined_on_string_prototype_should_not_affect_setting_attribute_properties: function (test) {
    String.prototype.normalize = function () {
      return "masked action";
    };
    var doc = jsdom.jsdom("<form></form>");
    var form = doc.getElementsByTagName("form").item(0);
    form.action = "test.html";

    test.strictEqual(form.action, "test.html", "<form> elements should not have their attribute properties masked " +
      "by defining a normalize method on string instances when removing empty attributes");

    delete String.prototype.normalize;
    test.done();
  },

  filename_with_spaces_in_script_tag_can_be_read: function(test) {
    jsdom.env(
      '<html><head></head><body></body></html>',
      ['./html/files/js/script with spaces.js'],
      function(err, window){
        test.strictEqual(err, null, "There should be no errors when using scripts with spaces in their filenames");
        test.done();
      }
    );
  },

  rowIndex_on_detached_table_row_should_return_minus_one: function(test) {
    var doc = jsdom.jsdom();
    var row = doc.createElement('tr');

    test.strictEqual(row.rowIndex, -1, "rowIndex should equal -1");
    test.done();
  },

  readonly_attribute_works_in_empty_form: function(test) {
    jsdom.env(
      '<input id="input" readonly />', function (err, window) {
        test.strictEqual(window.document.getElementById("input").readOnly, true);
        jsdom.env(
          '<input id="input" readonly="" />', function (err, window) {
            test.strictEqual(window.document.getElementById("input").readOnly, true);
            test.done();
          }
        );
      }
    );
  },

  selected_attribute_works_in_empty_form: function(test) {
    jsdom.env(
      '<select multiple><option selected="" /><option selected /></select>', function (err, window) {
        var options = window.document.getElementsByTagName('option');
        test.ok(options[0].selected, 'attribute with empty value');
        test.ok(options[1].selected, 'attribute without value');
        test.done();
      }
    );
  },

  htmlcollection_allows_index_access_for_name_and_id: function(test) {
    jsdom.env(
      '<form><input name="test"><input id="test2"></form>', function (err, window) {
        var form = window.document.getElementsByTagName('form')[0];
        test.ok(form.elements.test, 'form.elements by name');
        test.ok(form.elements.test2, 'form.elements by id');
        test.done();
      }
    );
  },

  htmlcollection_index_access_prefers_id_over_name: function(test) {
    jsdom.env(
      '<form><input name="test"><input id="test"><input id="test2"><input name="test2"></form>', function (err, window) {
        var form = window.document.getElementsByTagName('form')[0];
        var elem = form.elements.test;
        test.strictEqual(elem && elem.getAttribute('id'), 'test');
        elem = form.elements.test2;
        test.strictEqual(elem && elem.getAttribute('id'), 'test2');
        test.done();
      }
    );
  },

  parsing_with_bad_html_tag: function(test) {
    var doc;
    test.doesNotThrow(function () {
      doc = jsdom.jsdom(
        '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://www.facebook.com/2008/fbml" ' +
                                                   'xmlns:og="xmlns:fb="http://ogp.me/ns/fb#"></html>');
    });

    test.done();
  }
}
