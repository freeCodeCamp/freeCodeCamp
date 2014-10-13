//List from htmlparser2
var voidElements = {
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var expr = {
  upperCaseChars: /([A-Z])/g,
  breakBetweenTags: /(<(\/?\w+).*?>)(?=<(?!\/\2))/gi,
  voidElement: (function() {
    var tags = [];
    for (var i in voidElements) {
      tags.push(i);
    }
    return new RegExp('<' + tags.join('|<'), 'i');
  })()
};

var uncanon = function(str, letter) {
  return '-' + letter.toLowerCase();
};

var HTMLEncode = require('./htmlencoding').HTMLEncode;

exports.stringifyElement = function stringifyElement(element) {
  var tagName = element.tagName.toLowerCase(),
      ret = {
        start: "<" + tagName,
        end:''
      },
      attributes = [],
      i,
      attribute = null;

  if (element.attributes.length) {
    ret.start += " ";
    for (i = 0; i<element.attributes.length; i++) {
      attribute = element.attributes.item(i);
      attributes.push(attribute.name + '="' +
                      HTMLEncode(attribute.nodeValue, true) + '"');
    }
  }
  ret.start += attributes.join(" ");

  if (voidElements[tagName]) {
    ret.start += ">";
    ret.end = '';
  } else {
    ret.start += ">";
    ret.end = "</" + tagName + ">";
  }

  return ret;
};

var rawTextElements = /SCRIPT|STYLE/i;

function stringifyDoctype (doctype) {
  if (doctype.ownerDocument && doctype.ownerDocument._fullDT) {
    return doctype.ownerDocument._fullDT;
  }

  var dt = '<!DOCTYPE ' + doctype.name;
  if (doctype.publicId) {
    // Public ID may never contain double quotes, so this is always safe.
    dt += ' PUBLIC "' + doctype.publicId + '" ';
  }
  if (!doctype.publicId && doctype.systemId) {
    dt += ' SYSTEM ';
  }
  if (doctype.systemId) {
    // System ID may contain double quotes OR single quotes, not never both.
    if (doctype.systemId.indexOf('"') > -1) {
      dt += "'" + doctype.systemId + "'";
    } else {
      dt += '"' + doctype.systemId + '"';
    }
  }
  dt += '>';
  return dt;
}

exports.makeHtmlGenerator = function makeHtmlGenerator(indentUnit, eol) {
  indentUnit = indentUnit || "";
  eol = eol || "";

  return function generateHtmlRecursive(node, rawText, curIndent) {
    var ret = "", parent, current, i;
    curIndent = curIndent || "";
    if (node) {
      if (node.nodeType &&
          node.nodeType === node.ENTITY_REFERENCE_NODE) {
        node = node._entity;
      }

      var childNodesRawText = rawText || rawTextElements.test(node.nodeName);

      switch (node.nodeType) {
        case node.ELEMENT_NODE:
          current = exports.stringifyElement(node);
          if (childNodesRawText) {
            ret += curIndent + current.start;
          } else {
            ret += curIndent + current.start;
          }
          var len = node._childNodes.length;
          if (len > 0) {
            if (node._childNodes[0].nodeType !== node.TEXT_NODE) {
              ret += eol;
            }
            for (i=0; i<len; i++) {
              ret += generateHtmlRecursive(node._childNodes[i], childNodesRawText, curIndent + indentUnit);
            }
            if (node._childNodes[len - 1].nodeType !== node.TEXT_NODE) {
              ret += curIndent;
            }
            ret += current.end + eol;
          } else {
            ret += ((rawText ? node.nodeValue : HTMLEncode(node.nodeValue, false)) || '') + current.end + eol;
          }
          break;
        case node.TEXT_NODE:
          // Skip pure whitespace nodes if we're indenting
          if (!indentUnit || !/^[\s\n]*$/.test(node.nodeValue)) {
            ret += (rawText ? node.nodeValue : HTMLEncode(node.nodeValue, false)) || '';
          }
          break;
        case node.COMMENT_NODE:
          ret += curIndent + '<!--' + node.nodeValue + '-->' + eol;
          break;
        case node.DOCUMENT_NODE:
          for (i=0; i<node._childNodes.length; i++) {
            ret += generateHtmlRecursive(node._childNodes[i], childNodesRawText, curIndent);
          }
          break;
        case node.DOCUMENT_TYPE_NODE:
          ret += stringifyDoctype(node);
        break;
      }
    }
    return ret;
  };
};

exports.domToHtml = function(dom, noformat, raw) {
  var htmlGenerator = exports.makeHtmlGenerator(noformat ? "" : "  ",
                                                noformat ? "" : "\n");
  if (dom._toArray) {
    // node list
    dom = dom._toArray();
  }
  if (typeof dom.length !== 'undefined') {
    var ret = "";
    for (var i=0,len=dom.length; i<len; i++) {
      ret += htmlGenerator(dom[i], raw);
    }
    return ret;
  } else {
    // single node
    return htmlGenerator(dom, raw);
  }
};
