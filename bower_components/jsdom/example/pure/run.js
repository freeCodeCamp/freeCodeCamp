var browser = require("../../lib/jsdom/browser/index");
var dom = new browser.browserAugmentation(require("../../lib/jsdom/level2/html").dom.level2.html);
var sax = require("./sax");
var util = require('util');


// TODO: change this example to use pluggable parser

/**
  setup innerHTML setter
 */
dom.Element.prototype.__defineSetter__('innerHTML', function(html) {


  // first remove all the children
  for (var i=this.childNodes.length-1; i>=0;i--)
  {
    this.removeChild(this.childNodes.item(i));
  }

  var currentElement = this, currentLevel = 0;

  /**
    setup sax parser
  */
  parser = sax.parser(false);

  parser.onerror = function (e) {

  };
  parser.ontext = function (t) {

    var ownerDocument = currentElement.ownerDocument || currentElement;
    var newText = ownerDocument.createTextNode(t);
    currentElement.appendChild(newText);
  };
  parser.onopentag = function (node) {
    var nodeName  = node.name.toLowerCase(),
        document   = currentElement.ownerDocument || currentElement,
        newElement = document.createElement(nodeName),
        i          = 0,
        length     = (node.attributes && node.attributes.length) ?
                      node.attributes.length                     :
                      0;

    for (i in node.attributes)
    {
      if (node.attributes.hasOwnProperty(i)) {
        newElement.setAttribute(i, node.attributes[i]);
      }
    }
    currentElement.appendChild(newElement);
    currentElement = newElement;
  };
  parser.onclosetag = function(node) {
    currentElement = currentElement.parentNode;
  }

  parser.write(html).close();
});



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

var entities = new dom.EntityNodeMap(doc);

var doctype = new dom.DocumentType(doc, "html", entities, notations);
doc.doctype = doctype;
doc.implementation = implementation;

doc.innerHTML = '<html><head></head><body><div class="who"></div></body></html>';

var window = {
  alert : function() { console.log(util.inspect(arguments)); },
  document : doc
};

window.Sizzle = require("../sizzle/sizzle").sizzleInit(window, doc);
var $   = require("./pure").pureInit(window, doc);
$("div").autoRender({"who":"Hello Wrrrld"});
console.log(doc.innerHTML);



