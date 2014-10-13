var core = require("./core").dom.level2.core,
    html = require("./html").dom.level2.html,
    utils = require("../utils"),
    defineGetter = utils.defineGetter,
    defineSetter = utils.defineSetter,
    inheritFrom = utils.inheritFrom,
    cssom = require("cssom"),
    cssstyle = require("cssstyle"),
    assert = require('assert');

// What works now:
// - Accessing the rules defined in individual stylesheets
// - Modifications to style content attribute are reflected in style property
// - Modifications to style property are reflected in style content attribute
// TODO
// - Modifications to style element's textContent are reflected in sheet property.
// - Modifications to style element's sheet property are reflected in textContent.
// - Modifications to link.href property are reflected in sheet property.
// - Less-used features of link: disabled
// - Less-used features of style: disabled, scoped, title
// - CSSOM-View
//   - getComputedStyle(): requires default stylesheet, cascading, inheritance,
//     filtering by @media (screen? print?), layout for widths/heights
// - Load events are not in the specs, but apparently some browsers
//   implement something. Should onload only fire after all @imports have been
//   loaded, or only the primary sheet?

core.StyleSheet = cssom.StyleSheet;
core.MediaList = cssom.MediaList;
core.CSSStyleSheet = cssom.CSSStyleSheet;
core.CSSRule = cssom.CSSRule;
core.CSSStyleRule = cssom.CSSStyleRule;
core.CSSMediaRule = cssom.CSSMediaRule;
core.CSSImportRule = cssom.CSSImportRule;
core.CSSStyleDeclaration = cssstyle.CSSStyleDeclaration;

// Relavant specs
// http://www.w3.org/TR/DOM-Level-2-Style (2000)
// http://www.w3.org/TR/cssom-view/ (2008)
// http://dev.w3.org/csswg/cssom/ (2010) Meant to replace DOM Level 2 Style
// http://www.whatwg.org/specs/web-apps/current-work/multipage/ HTML5, of course
// http://dev.w3.org/csswg/css-style-attr/  not sure what's new here

// Objects that aren't in cssom library but should be:
//   CSSRuleList  (cssom just uses array)
//   CSSFontFaceRule
//   CSSPageRule

// These rules don't really make sense to implement, so CSSOM draft makes them
// obsolete.
//   CSSCharsetRule
//   CSSUnknownRule

// These objects are considered obsolete by CSSOM draft, although modern
// browsers implement them.
//   CSSValue
//   CSSPrimitiveValue
//   CSSValueList
//   RGBColor
//   Rect
//   Counter

// StyleSheetList -
// http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheetList
// added a push method to help manage the length
core.StyleSheetList = function() {
  this._length = 0;
};
core.StyleSheetList.prototype = {
  item: function (i) {
    return this[i];
  },
  push: function (sheet) {
    this[this._length] = sheet;
    this._length++;
  },
  get length() {
    return this._length;
  }
};

defineGetter(core.Document.prototype, 'styleSheets', function() {
  if (!this._styleSheets) {
    this._styleSheets = new core.StyleSheetList();
  }
  // TODO: each style and link element should register its sheet on creation
  // and remove it on removal.
  return this._styleSheets;
});


/**
 * @this {html.HTMLLinkElement|html.HTMLStyleElement}
 * @param {string} url
 * @param {cssom.CSSStyleSheet} sheet
 * @see http://dev.w3.org/csswg/cssom/#requirements-on-user-agents-implementing0
 */
function fetchStylesheet(url, sheet) {
  html.resourceLoader.load(this, url, function(data, filename) {
    // TODO: abort if the content-type is not text/css, and the document is
    // in strict mode
    sheet.href = html.resourceLoader.resolve(this.ownerDocument, url);
    evaluateStylesheet.call(this, data, sheet, url);
  });
}
/**
 * @this {html.HTMLLinkElement|html.HTMLStyleElement}
 * @param {string} data
 * @param {cssom.CSSStyleSheet} sheet
 * @param {string} baseUrl
 */
function evaluateStylesheet(data, sheet, baseUrl) {
  // this is the element
  var newStyleSheet = cssom.parse(data);
  var spliceArgs = newStyleSheet.cssRules;
  spliceArgs.unshift(0, sheet.cssRules.length);
  Array.prototype.splice.apply(sheet.cssRules, spliceArgs);
  scanForImportRules.call(this, sheet.cssRules, baseUrl);
  this.ownerDocument.styleSheets.push(sheet);
}
/**
 * @this {html.HTMLLinkElement|html.HTMLStyleElement}
 * @param {cssom.CSSStyleSheet} sheet
 * @param {string} baseUrl
 */
function scanForImportRules(cssRules, baseUrl) {
  if (!cssRules) return;
  for (var i = 0; i < cssRules.length; ++i) {
    if (cssRules[i].cssRules) {
      // @media rule: keep searching inside it.
      scanForImportRules.call(this, cssRules[i].cssRules, baseUrl);
    } else if (cssRules[i].href) {
      // @import rule: fetch the resource and evaluate it.
      // See http://dev.w3.org/csswg/cssom/#css-import-rule
      //     If loading of the style sheet fails its cssRules list is simply
      //     empty. I.e. an @import rule always has an associated style sheet.
      fetchStylesheet.call(this, cssRules[i].href, this.sheet);
    }
  }
}

/**
 * @param {string} data
 * @param {cssstyle.CSSStyleDeclaration} style
 */
function evaluateStyleAttribute(data) {
  // this is the element.

}

/**
 * Subclass of core.Attr that reflects the current cssText.
 */
function StyleAttr(node, value) {
  this._node = node;
  core.Attr.call(this, node.ownerDocument, 'style');
  if (!this._node._ignoreValueOfStyleAttr) {
    this.nodeValue = value;
  }
}
inheritFrom(core.Attr, StyleAttr, {
  get nodeValue() {
    if (typeof this._node._style === 'string') {
      return this._node._style;
    } else {
      return this._node.style.cssText;
    }
  },
  set nodeValue(value) {
    this._node._style = value;
  }
});

/**
 * Overwrite core.AttrNodeMap#setNamedItem to create a StyleAttr instance
 * instead of a core.Attr if the name equals 'style'.
 */
utils.intercept(core.AttributeList, '$setNode', function(_super, args, attr) {
  if (attr.name == 'style') {
    attr = new StyleAttr(this._parentNode, attr.nodeValue);
  }
  return _super.call(this, attr);
});

/**
 * Lazily create a CSSStyleDeclaration.
 */
defineGetter(html.HTMLElement.prototype, 'style', function() {
  if (typeof this._style === 'string') {
    // currently, cssom's parse doesn't really work if you pass in
    // {state: 'name'}, so instead we just build a dummy sheet.
    var styleSheet = cssom.parse('dummy{' + this._style + '}');
    this._style = new cssstyle.CSSStyleDeclaration();
    if (styleSheet.cssRules.length > 0 && styleSheet.cssRules[0].style) {
      var newStyle = styleSheet.cssRules[0].style;
      for (var i = 0; i < newStyle.length; ++i) {
        var prop = newStyle[i];
        this._style.setProperty(
            prop,
            newStyle.getPropertyValue(prop),
            newStyle.getPropertyPriority(prop));
      }
    }
  }
  if (!this._style) {
    this._style = new cssstyle.CSSStyleDeclaration();

  }
  if (!this.getAttributeNode('style')) {
    // Tell the StyleAttr constructor to not overwrite this._style
    this._ignoreValueOfStyleAttr = true;
    this.setAttribute('style');
    this._ignoreValueOfStyleAttr = false;
  }
  return this._style;
});

assert.equal(undefined, html.HTMLLinkElement._init);
html.HTMLLinkElement._init = function() {
  this.addEventListener('DOMNodeInsertedIntoDocument', function() {
    if (!/(?:[ \t\n\r\f]|^)stylesheet(?:[ \t\n\r\f]|$)/i.test(this.rel)) {
      // rel is a space-separated list of tokens, and the original rel types
      // are case-insensitive.
      return;
    }
    if (this.href) {
      fetchStylesheet.call(this, this.href, this.sheet);
    }
  });
  this.addEventListener('DOMNodeRemovedFromDocument', function() {
  });
};
/**
 * @this {HTMLStyleElement|HTMLLinkElement}
 */
var getOrCreateSheet = function() {
  if (!this._cssStyleSheet) {
    this._cssStyleSheet = new cssom.CSSStyleSheet();
  }
  return this._cssStyleSheet;
};
defineGetter(html.HTMLLinkElement.prototype, 'sheet', getOrCreateSheet);

assert.equal(undefined, html.HTMLStyleElement._init);
html.HTMLStyleElement._init = function() {
  //console.log('init style')
  this.addEventListener('DOMNodeInsertedIntoDocument', function() {
    //console.log('style inserted')
    //console.log('sheet: ', this.sheet);
    if (this.type && this.type !== 'text/css') {
      //console.log('bad type: ' + this.type)
      return;
    }
    var content = '';
    Array.prototype.forEach.call(this.childNodes, function (child) {
      if (child.nodeType === child.TEXT_NODE) { // text node
        content += child.nodeValue;
      }
    });
    evaluateStylesheet.call(this, content, this.sheet, this._ownerDocument.URL);
  });
};
defineGetter(html.HTMLStyleElement.prototype, 'sheet', getOrCreateSheet);

exports.dom = {
  level2 : {
    html : html,
    core : core
  }
};
