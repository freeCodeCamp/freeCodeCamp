var dom = require("../../../../lib/jsdom/level2/core").dom.level2.core;

exports.staff = function() {

  var doc = new dom.Document("html");
  var implementation = new dom.DOMImplementation(doc, {
    "XML" : ["1.0", "2.0"],
    "core": ["1.0", "2.0", "3.0"]
  });

  var notations = new dom.NotationNodeMap(
    doc,
    doc.createNotationNode("notation1","notation1File", null),
    doc.createNotationNode("notation2",null, "notation2File")
  );

  var entElement = doc.createElementNS("http://www.w3.org/2000/xmlns/","entElement1");
  entElement.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:local1", "www.xyz.com");
  entElement.appendChild(doc.createTextNode("Element data"));
  var procElement = doc.createProcessingInstruction("PItarget", "PfIdata");
  var ent4 = doc.createEntityNode("ent4",entElement, procElement);

  var ent5 = doc.createEntityNode("ent5");
  ent5.publicId = "entityURI";
  ent5.systemId = "entityFile";
  ent5.notationName = "notation1";

  var entities = new dom.EntityNodeMap(
    doc,
    doc.createEntityNode("ent1", doc.createTextNode("es")),
    doc.createEntityNode("ent2",doc.createTextNode("1900 Dallas Road")),
    doc.createEntityNode("ent3",doc.createTextNode("Texas")),
    ent4,
    ent5
  );

  // <!ATTLIST acronym dir CDATA "ltr">

  var defaultAttributes = new dom.NamedNodeMap(doc);
  var acronym = doc.createElementNS("http://www.w3.org/2000/xmlns/","acronym");
  acronym.setAttribute("dir", "ltr");
  defaultAttributes.setNamedItem(acronym);



  var doctype = new dom.DocumentType(doc, "xml", entities, notations, defaultAttributes);
  doc.doctype = doctype;
  doc.implementation = implementation;

  doc.appendChild(doc.createComment(" This is comment number 1."));

  var staff = doc.createElementNS(null, "staff");
  doc.appendChild(staff);


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
    var employee = doc.createElementNS("http://www.w3.org/2000/xmlns/","employee");
    var address  = doc.createElementNS("http://www.w3.org/2000/xmlns/","address");
    var name     = doc.createElementNS("http://www.w3.org/2000/xmlns/","name");
    var position = doc.createElementNS("http://www.w3.org/2000/xmlns/","position");
    var gender   = doc.createElementNS("http://www.w3.org/2000/xmlns/","gender");
    var id       = doc.createElementNS("http://www.w3.org/2000/xmlns/","id");
    var salary   = doc.createElementNS("http://www.w3.org/2000/xmlns/","salary");

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

    // default address
    address.setAttribute("street", "Yes");

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
  addresses[0].setAttribute("domestic", "Yes");

  addresses[0].appendChild(doc.createTextNode('1230 North Ave. Dallas, Texas 98551'));
  names[0].appendChild(doc.createTextNode("Margaret Martin"));
  genders[0].appendChild(doc.createTextNode("Female"));
  positions[0].appendChild(doc.createTextNode("Accountant"));

  ids[1].appendChild(doc.createTextNode("EMP0002"));
  salaries[1].appendChild(doc.createTextNode("35,000"));
  addresses[1].setAttribute("domestic", "Yes");
  addresses[1].setAttribute("street", "Yes");
  addresses[1].appendChild(doc.createTextNode("β Dallas, γ\n 98554"));
  names[1].appendChild(doc.createTextNode("Martha Raynolds"));
  names[1].appendChild(doc.createCDATASection("This is a CDATASection with EntityReference number 2 &amp;ent2;"));
  names[1].appendChild(doc.createCDATASection("This is an adjacent CDATASection with a reference to a tab &amp;tab;"));
  genders[1].appendChild(doc.createTextNode("Female"));
  positions[1].appendChild(doc.createTextNode("Secretary"));

  ids[2].appendChild(doc.createTextNode("EMP0003"));
  salaries[2].appendChild(doc.createTextNode("100,000"));
  addresses[2].setAttribute("domestic", "Yes");
  addresses[2].setAttribute("street", "No");
  addresses[2].appendChild(doc.createTextNode("PO Box 27 Irving, texas 98553"));
  names[2].appendChild(doc.createTextNode("Roger\n Jones")) ;
  genders[2].appendChild(doc.createEntityReference("&ent4;"));//Text("&delta;"));
  positions[2].appendChild(doc.createTextNode("Department Manager"));

  ids[3].appendChild(doc.createTextNode("EMP0004"));
  salaries[3].appendChild(doc.createTextNode("95,000"));
  addresses[3].setAttribute("domestic", "Yes");
  addresses[3].setAttribute("street", "Yα");
  addresses[3].appendChild(doc.createTextNode("27 South Road. Dallas, Texas 98556"));
  names[3].appendChild(doc.createTextNode("Jeny Oconnor"));
  genders[3].appendChild(doc.createTextNode("Female"));
  positions[3].appendChild(doc.createTextNode("Personal Director"));

  ids[4].appendChild(doc.createTextNode("EMP0005"));
  salaries[4].appendChild(doc.createTextNode("90,000"));
  addresses[4].setAttribute("street", "Yes");
  addresses[4].appendChild(doc.createTextNode("1821 Nordic. Road, Irving Texas 98558"));
  names[4].appendChild(doc.createTextNode("Robert Myers"));
  genders[4].appendChild(doc.createTextNode("male"));
  positions[4].appendChild(doc.createTextNode("Computer Specialist"));

  doc.appendChild(doc.createProcessingInstruction("TEST-STYLE", "PIDATA"));

  doc.normalize();
  return doc;
};
