"use strict";
const MIMEType = require("whatwg-mimetype");
const { parseURL, serializeURL } = require("whatwg-url");
const { evaluateJavaScriptURL } = require("../window/navigation");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { applyDocumentFeatures } = require("../../browser/documentfeatures");
const resourceLoader = require("../../browser/resource-loader");
const { defineGetter, reflectURLAttribute } = require("../../utils");
const { documentBaseURL } = require("../helpers/document-base-url");
const { getAttributeValue } = require("../attributes");
const idlUtils = require("../generated/utils");

function loadFrame(frame) {
  if (frame._contentDocument) {
    if (frame._contentDocument._defaultView) {
      // close calls delete on its document.
      frame._contentDocument._defaultView.close();
    } else {
      delete frame._contentDocument;
    }
  }

  const parentDoc = frame._ownerDocument;

  // https://html.spec.whatwg.org/#process-the-iframe-attributes
  let url;
  const srcAttribute = getAttributeValue(frame, "src");
  if (srcAttribute === "") {
    url = parseURL("about:blank");
  } else {
    url = parseURL(srcAttribute, { baseURL: documentBaseURL(parentDoc) || undefined }) || parseURL("about:blank");
  }
  const serializedURL = serializeURL(url);

  // This is not great, but prevents a require cycle during webidl2js generation
  const wnd = new parentDoc._defaultView.constructor({
    parsingMode: "html",
    url: url.scheme === "javascript" || serializedURL === "about:blank" ? parentDoc.URL : serializedURL,
    resourceLoader: parentDoc._customResourceLoader,
    userAgent: parentDoc._defaultView.navigator.userAgent,
    referrer: parentDoc.URL,
    cookieJar: parentDoc._cookieJar,
    pool: parentDoc._pool,
    encoding: parentDoc._encoding,
    agentOptions: parentDoc._agentOptions,
    strictSSL: parentDoc._strictSSL,
    proxy: parentDoc._proxy,
    runScripts: parentDoc._defaultView._runScripts,
    commonForOrigin: parentDoc._defaultView._commonForOrigin
  });
  const contentDoc = frame._contentDocument = idlUtils.implForWrapper(wnd._document);
  applyDocumentFeatures(contentDoc, parentDoc._implementation._features);

  const parent = parentDoc._defaultView;
  const contentWindow = contentDoc._defaultView;
  contentWindow._parent = parent;
  contentWindow._top = parent.top;
  contentWindow._frameElement = frame;
  contentWindow._virtualConsole = parent._virtualConsole;

  if (parentDoc.origin === contentDoc.origin) {
    contentWindow._currentOriginData.windowsInSameOrigin.push(contentWindow);
  }

  // Handle about:blank with a simulated load of an empty document.
  if (serializedURL === "about:blank") {
    // Cannot be done inside the enqueued callback; the documentElement etc. need to be immediately available.
    contentDoc.write("<html><head></head><body></body></html>");
    contentDoc.close();
    resourceLoader.enqueue(frame)(); // to fire the load event
  } else if (url.scheme === "javascript") {
    // Cannot be done inside the enqueued callback; the documentElement etc. need to be immediately available.
    contentDoc.write("<html><head></head><body></body></html>");
    contentDoc.close();
    const result = evaluateJavaScriptURL(contentWindow, url);
    if (typeof result === "string") {
      contentDoc.body.textContent = result;
    }
    resourceLoader.enqueue(frame)(); // to fire the load event
  } else {
    resourceLoader.load(
      frame,
      serializedURL,
      { defaultEncoding: parentDoc._encoding, detectMetaCharset: true },
      (html, responseURL, response) => {
        if (response) {
          const contentType = MIMEType.parse(response.headers["content-type"]);
          if (contentType) {
            if (contentType.isXML()) {
              contentDoc._parsingMode = "xml";
            }
            contentDoc.contentType = contentType.essence;
            contentDoc._encoding = contentType.parameters.get("charset");
          }
        }
        contentDoc.write(html);
        contentDoc.close();
      }
    );
  }
}

function refreshAccessors(document) {
  const window = document._defaultView;

  if (!window) {
    return;
  }

  const frames = document.querySelectorAll("iframe,frame");

  // delete accessors for all frames
  for (let i = 0; i < window._length; ++i) {
    delete window[i];
  }

  window._length = frames.length;
  Array.prototype.forEach.call(frames, (frame, i) => {
    defineGetter(window, i, () => frame.contentWindow);
  });
}

class HTMLFrameElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);
    this._contentDocument = null;
  }
  _attrModified(name, value, oldVal) {
    super._attrModified(name, value, oldVal);
    if (name === "src") {
      // iframe should never load in a document without a Window
      // (e.g. implementation.createHTMLDocument)
      if (this._attached && this._ownerDocument._defaultView) {
        loadFrame(this);
      }
    }
  }

  _detach() {
    super._detach();

    if (this.contentWindow) {
      this.contentWindow.close();
    }

    refreshAccessors(this._ownerDocument);
  }

  _attach() {
    super._attach();

    if (this._ownerDocument._defaultView) {
      loadFrame(this);
    }
    refreshAccessors(this._ownerDocument);
  }

  get contentDocument() {
    return this._contentDocument;
  }

  get contentWindow() {
    return this.contentDocument ? this.contentDocument._defaultView : null;
  }

  get src() {
    return reflectURLAttribute(this, "src");
  }

  set src(value) {
    this.setAttribute("src", value);
  }

  get longDesc() {
    return reflectURLAttribute(this, "longdesc");
  }

  set longDesc(value) {
    this.setAttribute("longdesc", value);
  }
}

module.exports = {
  implementation: HTMLFrameElementImpl
};

