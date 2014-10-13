var HTMLDecode = require('./htmlencoding').HTMLDecode;

function HtmlToDom(parser) {

  if(parser && parser.write) {
    // sax parser
    this.appendHtmlToElement = function(html, element){

      var currentElement = element, currentLevel = 0;

      parser.onerror = function (e) {};

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

        for (i in node.attributes) {
          if (node.attributes.hasOwnProperty(i)) {
            newElement.setAttribute(i, node.attributes[i]);
          }
        }

        for (i=0; i<node.attributes.length; i++) {
            newElement.setAttribute(i, node.attributes.item(i));
        }
        currentElement.appendChild(newElement);
        currentElement = newElement;
      };

      parser.onclosetag = function(node) {
        currentElement = currentElement.parentNode;
      };

      parser.write(html).close();

      return element;
    };

  } else if (parser && (parser.ParseHtml || parser.DefaultHandler)) {

    // Forgiving HTML parser

    if (parser.ParseHtml) {
      // davglass/node-htmlparser
    } else if (parser.DefaultHandler){
      // fb55/htmlparser2

      parser.ParseHtml = function(rawHtml) {
        var handler = new parser.DefaultHandler();
        // Check if document is XML
        var isXML = (/^<\?\s*xml.*version=["']1\.0["'].*\s*\?>/i).test(rawHtml);
        var parserInstance = new parser.Parser(handler, {
          xmlMode: isXML,
          lowerCaseTags: !isXML,
          lowerCaseAttributeNames: !isXML
        });

        parserInstance.includeLocation = false;
        parserInstance.parseComplete(rawHtml);
        return handler.dom;
      };
    }

    this.appendHtmlToElement = function(html, element) {

      if (typeof html !== 'string') {
        html +='';
      }

      var parsed = parser.ParseHtml(html);

      for (var i = 0; i < parsed.length; i++) {
        setChild(element, parsed[i]);
      }

      return element;
    };

  } else if (parser && parser.moduleName == 'HTML5') { /* HTML5 parser */
    this.appendHtmlToElement = function(html, element) {

      if (typeof html !== 'string') {
        html += '';
      }
      if (html.length > 0) {
        if (element.nodeType == 9) {
          new parser.Parser({document: element}).parse(html);
        }
        else {
          var p = new parser.Parser({document: element.ownerDocument});
          p.parse_fragment(html, element);
        }
      }
    };
  } else {

    this.appendHtmlToElement = function(){
      console.log('');
      console.log('###########################################################');
      console.log('#  WARNING: No HTML parser could be found.');
      console.log('#  Element.innerHTML setter support has been disabled');
      console.log('#  Element.innerHTML getter support will still function');
      console.log('#  Download: http://github.com/tautologistics/node-htmlparser');
      console.log('###########################################################');
      console.log('');
    };

  }
};

// utility function for forgiving parser
function setChild(parent, node) {

  var c, newNode, currentDocument = parent._ownerDocument || parent;

  switch (node.type)
  {
    case 'tag':
    case 'script':
    case 'style':
      try {
        newNode = currentDocument.createElement(node.name);
        if (node.location) {
          newNode.sourceLocation = node.location;
          newNode.sourceLocation.file = parent.sourceLocation.file;
        }
      } catch (err) {
        currentDocument.raise('error', 'invalid markup', {
          exception: err,
          node : node
        });

        return null;
      }
    break;

    case 'text':
      // Decode HTML entities if we're not inside a <script> or <style> tag:
      newNode = currentDocument.createTextNode(/^(?:script|style)$/i.test(parent.nodeName) ?
                                                   node.data :
                                                   HTMLDecode(node.data));
    break;

    case 'comment':
      newNode = currentDocument.createComment(node.data);
    break;

    default:
      return null;
    break;
  }

  if (!newNode)
    return null;

  if (node.attribs) {
    for (c in node.attribs) {
      // catchin errors here helps with improperly escaped attributes
      // but properly fixing parent should (can only?) be done in the htmlparser itself
      try {
        newNode.setAttribute(c, HTMLDecode(node.attribs[c]));
      } catch(e2) { /* noop */ }
    }
  }

  if (node.children) {
    for (c = 0; c < node.children.length; c++) {
      setChild(newNode, node.children[c]);
    }
  }

  try{
    return parent.appendChild(newNode);
  }catch(err){
    currentDocument.raise('error', err.message, {
          exception: err,
          node : node
        });
    return null;
  }
}

exports.HtmlToDom = HtmlToDom;
