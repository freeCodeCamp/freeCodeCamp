/*<?xml version="1.0" encoding="uTf-16"?>
<!DOCTYPE html [
<!ENTITY ent1 'foo'>
<!ENTITY ent2 'foo<br/>'>
<!ELEMENT html (head, body)>
<!ATTLIST html xmlns CDATA #IMPLIED>
<!ELEMENT head (title)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT body (p)>
<!ATTLIST body onload CDATA #IMPLIED>
<!ELEMENT p (#PCDATA|br)*>
<!ELEMENT br EMPTY>
<!ENTITY ent5 PUBLIC "entityURI" "entityFile" NDATA notation1>
<!NOTATION notation1 PUBLIC "notation1File">
]>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
<title>test file</title>
</head>
<body onload="parent.loadCompleted()">
<p>bar</p>
</body>
</html>*/

var core = require('../../../../lib/jsdom/level3/core').dom.level3.core;

exports.barfoo_utf16 = function() {
  var doc = new core.Document();
  var ns = 'http://www.w3.org/2000/xmlns/';
  var implementation = new core.DOMImplementation(doc, {'XML':  ['1.0', '2.0'], 'core': ['1.0', '2.0', '3.0']});

  var notations = new core.NotationNodeMap(doc, doc.createNotationNode('notation1', 'notation1File', null));

  var entities = new core.EntityNodeMap(doc,
    doc.createEntityNode('ent1', doc.createTextNode('foo')),
    doc.createEntityNode('ent2', doc.createTextNode('foo<br/>')));

  var attributes = new core.NamedNodeMap(doc);

  var item = doc.createElementNS(ns, 'html');
  item.setAttribute('xmlns');
  attributes.setNamedItem(item);
  // item = doc.createElementNS(ns, 'script');
  // item.setAttribute('src');
  // item.setAttribute('type');
  // item.setAttribute('charset');
  // attributes.setNamedItem(item);
  item = doc.createElementNS(ns, 'body');
  item.setAttribute('onload');
  attributes.setNamedItem(item);

  doc.doctype = new core.DocumentType(doc, 'xml', entities, notations, attributes);
  doc.implementation = implementation;

  var html = doc.appendChild(doc.createElementNS(ns, 'html'));
  var head = html.appendChild(doc.createElementNS(ns, 'head'));
  var title = doc.createElementNS(ns, 'title');
  title.appendChild(doc.createTextNode('test file'));
  head.appendChild(title);
  var body = html.appendChild(doc.createElementNS(ns, 'body'));
  body.setAttribute('onload', 'parent.loadComplete()');
  var p = doc.createElementNS(ns, 'p');
  p.appendChild(doc.createTextNode('bar'));
  body.appendChild(p);

  doc.normalize();
  return(doc);
};
