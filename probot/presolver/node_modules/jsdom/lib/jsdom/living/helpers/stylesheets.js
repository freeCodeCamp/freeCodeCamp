"use strict";
const cssom = require("cssom");
const whatwgEncoding = require("whatwg-encoding");
const whatwgURL = require("whatwg-url");
const resourceLoader = require("../../browser/resource-loader");

// TODO: this should really implement https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet
// It (and the things it calls) is nowhere close right now.
exports.fetchStylesheet = (elementImpl, urlString) => {
  const parsedURL = whatwgURL.parseURL(urlString);
  return fetchStylesheetInternal(elementImpl, urlString, parsedURL);
};

// https://drafts.csswg.org/cssom/#remove-a-css-style-sheet
exports.removeStylesheet = (sheet, elementImpl) => {
  const { styleSheets } = elementImpl._ownerDocument;
  styleSheets.splice(styleSheets.indexOf(sheet, 1));

  // Remove the association explicitly; in the spec it's implicit so this step doesn't exist.
  elementImpl.sheet = null;

  // TODO: "Set the CSS style sheet’s parent CSS style sheet, owner node and owner CSS rule to null."
  // Probably when we have a real CSSOM implementation.
};

// https://drafts.csswg.org/cssom/#create-a-css-style-sheet kinda:
// - Parsing failures are not handled gracefully like they should be
// - The import rules stuff seems out of place, and probably should affect the load event...
exports.createStylesheet = (sheetText, elementImpl, baseURL) => {
  let sheet;
  try {
    sheet = cssom.parse(sheetText);
  } catch (e) {
    if (elementImpl._ownerDocument._defaultView) {
      const error = new Error("Could not parse CSS stylesheet");
      error.detail = sheetText;
      error.type = "css parsing";

      elementImpl._ownerDocument._defaultView._virtualConsole.emit("jsdomError", error);
    }
    return;
  }

  scanForImportRules(elementImpl, sheet.cssRules, baseURL);

  addStylesheet(sheet, elementImpl);
};

// https://drafts.csswg.org/cssom/#add-a-css-style-sheet
function addStylesheet(sheet, elementImpl) {
  elementImpl._ownerDocument.styleSheets.push(sheet);

  // Set the association explicitly; in the spec it's implicit.
  elementImpl.sheet = sheet;

  // TODO: title and disabled stuff
}

function fetchStylesheetInternal(elementImpl, urlString, parsedURL) {
  let defaultEncoding = elementImpl._ownerDocument._encoding;
  if (elementImpl.localName === "link" && elementImpl.hasAttribute("charset")) {
    defaultEncoding = whatwgEncoding.labelToName(elementImpl.getAttribute("charset"));
  }

  resourceLoader.load(elementImpl, urlString, { defaultEncoding }, data => {
    // TODO: MIME type checking?
    if (elementImpl.sheet) {
      exports.removeStylesheet(elementImpl.sheet, elementImpl);
    }
    exports.createStylesheet(data, elementImpl, parsedURL);
  });
}

// TODO this is actually really messed up and overwrites the sheet on elementImpl
// Tracking in https://github.com/tmpvar/jsdom/issues/2124
function scanForImportRules(elementImpl, cssRules, baseURL) {
  if (!cssRules) {
    return;
  }

  for (let i = 0; i < cssRules.length; ++i) {
    if (cssRules[i].cssRules) {
      // @media rule: keep searching inside it.
      scanForImportRules(elementImpl, cssRules[i].cssRules, baseURL);
    } else if (cssRules[i].href) {
      // @import rule: fetch the resource and evaluate it.
      // See http://dev.w3.org/csswg/cssom/#css-import-rule
      //     If loading of the style sheet fails its cssRules list is simply
      //     empty. I.e. an @import rule always has an associated style sheet.
      const parsed = whatwgURL.parseURL(cssRules[i].href, { baseURL });
      if (parsed === null) {
        const window = elementImpl._ownerDocument._defaultView;
        if (window) {
          const error = new Error(`Could not parse CSS @import URL ${cssRules[i].href} relative to base URL ` +
                                  `"${whatwgURL.serializeURL(baseURL)}"`);
          error.type = "css @import URL parsing";
          window._virtualConsole.emit("jsdomError", error);
        }
      } else {
        fetchStylesheetInternal(elementImpl, whatwgURL.serializeURL(parsed), parsed);
      }
    }
  }
}
