var dom = require("../../../../lib/jsdom/level1/core").dom.level1.core;
exports.hc_staff = function() {

  var doc = new dom.Document("html");

  var implementation = new dom.DOMImplementation(doc, {
    "HTML" : "1.0"
  });

  var notations = new dom.NotationNodeMap(
    doc,
    doc.createNotationNode("notation1","notation1File", null),
    doc.createNotationNode("notation2",null, "notation2File")
  );

  // TODO: consider importing the master list of entities
  //       http://www.w3schools.com/tags/ref_symbols.asp
  var entities = new dom.EntityNodeMap(
    doc,
    doc.createEntityNode("alpha", doc.createTextNode("α")),
    doc.createEntityNode("beta", doc.createTextNode("&#946;")),
    doc.createEntityNode("gamma", doc.createTextNode("&#947;")),
    doc.createEntityNode("delta", doc.createTextNode("&#948;")),
    doc.createEntityNode("epsilon", doc.createTextNode("&#949;"))
  );

  // <!ATTLIST acronym dir CDATA "ltr">

  var defaultAttributes = new dom.NamedNodeMap(doc);
  var acronym = doc.createElement("acronym");
  acronym.setAttribute("dir", "ltr");
  defaultAttributes.setNamedItem(acronym);



  var doctype = new dom.DocumentType(doc, "html", entities, notations, defaultAttributes);
  doc.doctype = doctype;
  doc.implementation = implementation;

  doc.appendChild(doc.createComment(" This is comment number 1."));

  var html      = doc.createElement("html");
  var html      = doc.appendChild(html);
  var head      = doc.createElement("head");
  var head      = html.appendChild(head);

	var meta      = doc.createElement("meta");
	meta.setAttribute("http-equiv", "Content-Type");
	meta.setAttribute("content", "text/html; charset=UTF-8");
  head.appendChild(meta);

  var title     = doc.createElement("title")
  title.appendChild(doc.createTextNode("hc_staff"));
  var title     = head.appendChild(title);

  // make the tests work....
  head.appendChild(doc.createElement("script"));
  head.appendChild(doc.createElement("script"));
  head.appendChild(doc.createElement("script"));

  var body      = doc.createElement("body");
  var staff     = html.appendChild(body);

  var employees = [];
  var addresses = [];
  var names     = [];
  var positions = [];
  var genders   = [];
  var ids       = [];
  var salaries  = [];

  // create 5 employees
  for (var i=0; i<5; i++)
  {
    var employee = doc.createElement("p");
    var address  = doc.createElement("acronym");
    var name     = doc.createElement("strong");
    var position = doc.createElement("code");
    var gender   = doc.createElement("var");
    var id       = doc.createElement("em");
    var salary   = doc.createElement("sup");

    employee.appendChild(doc.createTextNode("\n"));
    employee.appendChild(id);
    employee.appendChild(doc.createTextNode("\n"));
    employee.appendChild(name);
    employee.appendChild(doc.createTextNode("\n"));
    employee.appendChild(position);
    employee.appendChild(doc.createTextNode("\n"));
    employee.appendChild(salary);
    employee.appendChild(doc.createTextNode("\n"));
    employee.appendChild(gender);
    employee.appendChild(doc.createTextNode("\n"));
    employee.appendChild(address);
    employee.appendChild(doc.createTextNode("\n"));
    staff.appendChild(employee);

    names.push(name);
    employees.push(employee);
    addresses.push(address);
    genders.push(gender);
    positions.push(position);
    ids.push(id);
    salaries.push(salary);
  }

  ids[0].appendChild(doc.createTextNode("EMP0001"));
  salaries[0].appendChild(doc.createTextNode("56,000"));
  addresses[0].setAttribute("title", "Yes");
  addresses[0].appendChild(doc.createTextNode('1230 North Ave. Dallas, Texas 98551'));
  names[0].appendChild(doc.createTextNode("Margaret Martin"));
  genders[0].appendChild(doc.createTextNode("Female"));
  positions[0].appendChild(doc.createTextNode("Accountant"));

  ids[1].appendChild(doc.createTextNode("EMP0002"));
  salaries[1].appendChild(doc.createTextNode("35,000"));
  addresses[1].setAttribute("title", "Yes");
  addresses[1].setAttribute("class", "Yes");
  addresses[1].appendChild(doc.createTextNode("β Dallas, γ\n 98554"));
  names[1].appendChild(doc.createTextNode("Martha Raynolds"));
  //names[1].appendChild(doc.createCDATASection("This is a CDATASection with EntityReference number 2 &amp;ent2;"));
  //names[1].appendChild(doc.createCDATASection("This is an adjacent CDATASection with a reference to a tab &amp;tab;"));
  genders[1].appendChild(doc.createTextNode("Female"));
  positions[1].appendChild(doc.createTextNode("Secretary"));

  ids[2].appendChild(doc.createTextNode("EMP0003"));
  salaries[2].appendChild(doc.createTextNode("100,000"));
  addresses[2].setAttribute("title", "Yes");
  addresses[2].setAttribute("class", "No");
  addresses[2].appendChild(doc.createTextNode("PO Box 27 Irving, texas 98553"));
  names[2].appendChild(doc.createTextNode("Roger\n Jones")) ;
 // genders[2].appendChild(doc.createEntityReference("&delta;"));//Text("&delta;"));
  positions[2].appendChild(doc.createTextNode("Department Manager"));

  ids[3].appendChild(doc.createTextNode("EMP0004"));
  salaries[3].appendChild(doc.createTextNode("95,000"));
  addresses[3].setAttribute("title", "Yes");
  addresses[3].setAttribute("class", "Yα");
  addresses[3].appendChild(doc.createTextNode("27 South Road. Dallas, Texas 98556"));
  names[3].appendChild(doc.createTextNode("Jeny Oconnor"));
  genders[3].appendChild(doc.createTextNode("Female"));
  positions[3].appendChild(doc.createTextNode("Personal Director"));

  ids[4].appendChild(doc.createTextNode("EMP0005"));
  salaries[4].appendChild(doc.createTextNode("90,000"));
  addresses[4].setAttribute("title", "Yes");
  addresses[4].appendChild(doc.createTextNode("1821 Nordic. Road, Irving Texas 98558"));
  names[4].appendChild(doc.createTextNode("Robert Myers"));
  genders[4].appendChild(doc.createTextNode("male"));
  positions[4].appendChild(doc.createTextNode("Computer Specialist"));

  //doc.appendChild(doc.createProcessingInstruction("TEST-STYLE", "PIDATA"));

  doc.normalize();
  return doc;
};

/*
<?xml version="1.0"?>
<?TEST-STYLE PIDATA?>
<!DOCTYPE html
   PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "xhtml1-strict.dtd" [
   <!ENTITY alpha "&#945;">
   <!ENTITY beta "&#946;">
   <!ENTITY gamma "&#947;">
   <!ENTITY delta "&#948;">
   <!ENTITY epsilon "&#949;">
   <!ENTITY alpha "&#950;">
   <!NOTATION notation1 PUBLIC "notation1File">
   <!NOTATION notation2 SYSTEM "notation2File">
   <!ATTLIST acronym dir CDATA "ltr">

]>
<!-- This is comment number 1.-->
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<title>hc_staff</title>
	<script type="text/javascript" src="svgunit.js"/>
	<script charset="UTF-8" type="text/javascript" src="svgtest.js"/>
	<script type='text/javascript'>function loadComplete() { startTest(); }</script>
</head>
<body>
 <p>
  <em>EMP0001</em>
  <strong>Margaret Martin</strong>
  <code>Accountant</code>
  <sup>56,000</sup>

  <var>Female</var>
  <acronym title="Yes">1230 North Ave. Dallas, Texas 98551</acronym>
 </p>
 <p>
  <em>EMP0002</em>
  <strong>Martha RaynoldsThis is a CDATASection with EntityReference number 2 &amp;ent2;
This is an adjacent CDATASection with a reference to a tab &amp;tab;</strong>

  <code>Secretary</code>
  <sup>35,000</sup>
  <var>Female</var>
  <acronym title="Yes" class="Yes">&beta; Dallas, &gamma;
 98554</acronym>
 </p>

 <p>
  <em>EMP0003</em>
  <strong>Roger
 Jones</strong>
  <code>Department Manager</code>
  <sup>100,000</sup>
  <var>&delta;</var>
  <acronym title="Yes" class="No">PO Box 27 Irving, texas 98553</acronym>

 </p>
 <p>
  <em>EMP0004</em>
  <strong>Jeny Oconnor</strong>
  <code>Personnel Director</code>
  <sup>95,000</sup>
  <var>Female</var>

  <acronym title="Yes" class="Y&alpha;">27 South Road. Dallas, Texas 98556</acronym>
 </p>
 <p>
  <em>EMP0005</em>
  <strong>Robert Myers</strong>
  <code>Computer Specialist</code>
  <sup>90,000</sup>

  <var>male</var>
  <acronym title="Yes">1821 Nordic. Road, Irving Texas 98558</acronym>
 </p>
</body></html>
*/
