var browser = require("../../lib/jsdom/browser");
var dom = browser.browserAugmentation(require("../../lib/jsdom/level2/core").dom.level2.core);

var util = require("util");


  var doc = new dom.Document("html");

  var implementation = new dom.DOMImplementation(doc, {
    "HTML" : "1.0",
    "DisableLiveLists" : "1.0"
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
    doc.createEntityNode("alpha", "α"),
    doc.createEntityNode("beta", "&#946;"),
    doc.createEntityNode("gamma", "&#947;"),
    doc.createEntityNode("delta", "&#948;"),
    doc.createEntityNode("epsilon", "&#949;")
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
  ids[3].className = "classy";
  salaries[3].appendChild(doc.createTextNode("95,000"));
  addresses[3].setAttribute("title", "Yes");
  addresses[3].setAttribute("class", "Yα");
  addresses[3].appendChild(doc.createTextNode("27 South Road. Dallas, Texas 98556"));
  names[3].appendChild(doc.createTextNode("Jeny Oconnor"));
  genders[3].appendChild(doc.createTextNode("Female"));
  positions[3].appendChild(doc.createTextNode("Personal Director"));

  ids[4].appendChild(doc.createTextNode("EMP0005"));
  salaries[4].appendChild(doc.createTextNode("90,000"));
  addresses[4].setAttribute("title", "No");
  addresses[4].id = "theid";
  addresses[4].appendChild(doc.createTextNode("1821 Nordic. Road, Irving Texas 98558"));
  names[4].appendChild(doc.createTextNode("Robert Myers"));
  genders[4].appendChild(doc.createTextNode("male"));
  positions[4].appendChild(doc.createTextNode("Computer Specialist"));

  //doc.appendChild(doc.createProcessingInstruction("TEST-STYLE", "PIDATA"));

  doc.normalize();

var sizzleSandbox = {};
var sizzle = require("./sizzle").sizzleInit(sizzleSandbox, doc);
console.log(util.inspect(sizzle('.classy,p acronym#theid').length));


