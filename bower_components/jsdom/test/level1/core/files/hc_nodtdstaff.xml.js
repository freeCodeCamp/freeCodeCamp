var dom = require("../../../../lib/jsdom/level1/core").dom.level1.core;
exports.hc_nodtdstaff = function() {

  var doc = new dom.Document("html");
  var implementation = new dom.DOMImplementation(doc, {
    "XML" : "1.0"
  });

  doc.implementation = implementation;

/*
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>hc_nodtdstaff</title></head><body>
 <p>
  <em>EMP0001</em>
  <strong>Margaret Martin</strong>
  <code>Accountant</code>
  <sup>56,000</sup>
  <var>Female</var>

  <acronym title="Yes">1230 North Ave. Dallas, Texas 98551</acronym>
 </p>
</body></html>
*/

  doc.normalize();
  return doc;
};
