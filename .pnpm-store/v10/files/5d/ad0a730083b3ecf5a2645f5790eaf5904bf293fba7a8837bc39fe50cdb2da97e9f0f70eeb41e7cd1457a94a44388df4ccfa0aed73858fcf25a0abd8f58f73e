"use strict";

const { CookieJar } = require("tough-cookie");

const NodeImpl = require("./Node-impl").implementation;
const idlUtils = require("../generated/utils");
const NODE_TYPE = require("../node-type");
const { mixin, memoizeQuery } = require("../../utils");
const { firstChildWithLocalName, firstChildWithLocalNames, firstDescendantWithLocalName } =
  require("../helpers/traversal");
const whatwgURL = require("whatwg-url");
const StyleSheetList = require("../generated/StyleSheetList.js");
const { domSymbolTree } = require("../helpers/internal-constants");
const eventAccessors = require("../helpers/create-event-accessor");
const { asciiLowercase, stripAndCollapseASCIIWhitespace } = require("../helpers/strings");
const { childTextContent } = require("../helpers/text");
const { HTML_NS, SVG_NS } = require("../helpers/namespaces");
const DOMException = require("../generated/DOMException");
const { parseIntoDocument } = require("../../browser/parser");
const History = require("../generated/History");
const Location = require("../generated/Location");
const HTMLCollection = require("../generated/HTMLCollection");
const NodeList = require("../generated/NodeList");
const validateName = require("../helpers/validate-names").name;
const { validateAndExtract } = require("../helpers/validate-names");
const { fireAnEvent } = require("../helpers/events");
const { shadowIncludingInclusiveDescendantsIterator } = require("../helpers/shadow-dom");
const { enqueueCECallbackReaction } = require("../helpers/custom-elements");
const { createElement, internalCreateElementNSSteps } = require("../helpers/create-element");
const IterableWeakSet = require("../helpers/iterable-weak-set");

const DocumentOrShadowRootImpl = require("./DocumentOrShadowRoot-impl").implementation;
const GlobalEventHandlersImpl = require("./GlobalEventHandlers-impl").implementation;
const NonElementParentNodeImpl = require("./NonElementParentNode-impl").implementation;
const ParentNodeImpl = require("./ParentNode-impl").implementation;

const { clone, listOfElementsWithQualifiedName, listOfElementsWithNamespaceAndLocalName,
  listOfElementsWithClassNames } = require("../node");
const generatedAttr = require("../generated/Attr");
const Comment = require("../generated/Comment");
const ProcessingInstruction = require("../generated/ProcessingInstruction");
const CDATASection = require("../generated/CDATASection");
const Text = require("../generated/Text");
const DocumentFragment = require("../generated/DocumentFragment");
const DOMImplementation = require("../generated/DOMImplementation");
const TreeWalker = require("../generated/TreeWalker");
const NodeIterator = require("../generated/NodeIterator");
const ShadowRoot = require("../generated/ShadowRoot");
const Range = require("../generated/Range");
const documents = require("../documents.js");

const CustomEvent = require("../generated/CustomEvent");
const ErrorEvent = require("../generated/ErrorEvent");
const Event = require("../generated/Event");
const FocusEvent = require("../generated/FocusEvent");
const HashChangeEvent = require("../generated/HashChangeEvent");
const KeyboardEvent = require("../generated/KeyboardEvent");
const MessageEvent = require("../generated/MessageEvent");
const MouseEvent = require("../generated/MouseEvent");
const PopStateEvent = require("../generated/PopStateEvent");
const ProgressEvent = require("../generated/ProgressEvent");
const TouchEvent = require("../generated/TouchEvent");
const UIEvent = require("../generated/UIEvent");

const RequestManager = require("../../browser/resources/request-manager");
const AsyncResourceQueue = require("../../browser/resources/async-resource-queue");
const ResourceQueue = require("../../browser/resources/resource-queue");
const PerDocumentResourceLoader = require("../../browser/resources/per-document-resource-loader");

function clearChildNodes(node) {
  for (let child = domSymbolTree.firstChild(node); child; child = domSymbolTree.firstChild(node)) {
    node.removeChild(child);
  }
}

function pad(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function toLastModifiedString(date) {
  return pad(date.getMonth() + 1) +
    "/" + pad(date.getDate()) +
    "/" + date.getFullYear() +
    " " + pad(date.getHours()) +
    ":" + pad(date.getMinutes()) +
    ":" + pad(date.getSeconds());
}

const eventInterfaceTable = {
  customevent: CustomEvent,
  errorevent: ErrorEvent,
  event: Event,
  events: Event,
  focusevent: FocusEvent,
  hashchangeevent: HashChangeEvent,
  htmlevents: Event,
  keyboardevent: KeyboardEvent,
  messageevent: MessageEvent,
  mouseevent: MouseEvent,
  mouseevents: MouseEvent,
  popstateevent: PopStateEvent,
  progressevent: ProgressEvent,
  svgevents: Event,
  touchevent: TouchEvent,
  uievent: UIEvent,
  uievents: UIEvent
};

class DocumentImpl extends NodeImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._initGlobalEvents();

    this._ownerDocument = this;
    this.nodeType = NODE_TYPE.DOCUMENT_NODE;
    if (!privateData.options) {
      privateData.options = {};
    }
    if (!privateData.options.parsingMode) {
      privateData.options.parsingMode = "xml";
    }
    if (!privateData.options.encoding) {
      privateData.options.encoding = "UTF-8";
    }
    if (!privateData.options.contentType) {
      privateData.options.contentType = privateData.options.parsingMode === "xml" ? "application/xml" : "text/html";
    }

    this._parsingMode = privateData.options.parsingMode;

    this._implementation = DOMImplementation.createImpl(this._globalObject, [], {
      ownerDocument: this
    });

    this._defaultView = privateData.options.defaultView || null;
    this._global = privateData.options.global;
    this._ids = Object.create(null);
    this._attached = true;
    this._currentScript = null;
    this._pageShowingFlag = false;
    this._cookieJar = privateData.options.cookieJar;
    this._parseOptions = privateData.options.parseOptions || {};
    this._scriptingDisabled = privateData.options.scriptingDisabled;
    if (this._cookieJar === undefined) {
      this._cookieJar = new CookieJar(null, { looseMode: true });
    }

    if (this._scriptingDisabled) {
      this._parseOptions.scriptingEnabled = false;
    }

    this.contentType = privateData.options.contentType;
    this._encoding = privateData.options.encoding;

    const urlOption = privateData.options.url === undefined ? "about:blank" : privateData.options.url;
    const parsed = whatwgURL.parseURL(urlOption);
    if (parsed === null) {
      throw new TypeError(`Could not parse "${urlOption}" as a URL`);
    }

    this._URL = parsed;
    this._origin = urlOption === "about:blank" && privateData.options.parentOrigin ?
      privateData.options.parentOrigin :
      whatwgURL.serializeURLOrigin(this._URL);

    this._location = Location.createImpl(this._globalObject, [], { relevantDocument: this });
    this._history = History.createImpl(this._globalObject, [], {
      window: this._defaultView,
      document: this,
      actAsIfLocationReloadCalled: () => this._location.reload()
    });

    this._workingNodeIterators = new IterableWeakSet();

    this._referrer = privateData.options.referrer || "";
    this._lastModified = toLastModifiedString(privateData.options.lastModified || new Date());
    this._asyncQueue = new AsyncResourceQueue();
    this._queue = new ResourceQueue({ asyncQueue: this._asyncQueue, paused: false });
    this._deferQueue = new ResourceQueue({ paused: true });
    this._requestManager = new RequestManager();
    this._currentDocumentReadiness = privateData.options.readyState || "loading";

    this._lastFocusedElement = null;

    this._resourceLoader = new PerDocumentResourceLoader(this);

    // Each Document in a browsing context can also have a latest entry. This is the entry for that Document
    // to which the browsing context's session history was most recently traversed. When a Document is created,
    // it initially has no latest entry.
    this._latestEntry = null;

    // https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#throw-on-dynamic-markup-insertion-counter
    this._throwOnDynamicMarkupInsertionCounter = 0;

    // Cache of computed element styles
    this._styleCache = null;

    // Cache of document base URL
    this._baseURLCache = null;
    this._baseURLSerializedCache = null;
  }

  _clearBaseURLCache() {
    this._baseURLCache = null;
    this._baseURLSerializedCache = null;
  }

  // https://html.spec.whatwg.org/multipage/infrastructure.html#document-base-url
  baseURL() {
    if (this._baseURLCache) {
      return this._baseURLCache;
    }

    const firstBase = this.querySelector("base[href]");

    this._baseURLCache = firstBase === null ?
      this._fallbackBaseURL() :
      this._frozenBaseURL(firstBase, this._fallbackBaseURL());
    return this._baseURLCache;
  }

  baseURLSerialized() {
    if (this._baseURLSerializedCache) {
      return this._baseURLSerializedCache;
    }

    const result = whatwgURL.serializeURL(this.baseURL());
    this._baseURLSerializedCache = result;
    return result;
  }

  // https://html.spec.whatwg.org/#resolve-a-url
  encodingParseAURL(url) {
    // TODO account for encoding (once whatwg-url supports that)
    return whatwgURL.parseURL(url, { baseURL: this.baseURL() });
  }

  // https://html.spec.whatwg.org/#frozen-base-url
  _frozenBaseURL(baseElement, fallbackBaseURL) {
    // The spec is eager (setting the frozen base URL when things change); we are lazy (getting it when we need to).
    //
    // There is a slight difference, which is when history.pushState() is involved. The frozen base URL does not get
    // updated in response to history.pushState() per spec, but since we're lazy, it will get updated.
    //
    // The test in to-port-to-wpts/history.js checks for the current jsdom behavior (which is incorrect).
    // We could make it pass by not invalidating the base URL cache, actually. But that would just make the fallback
    // base URL case use the stale base URL.
    //
    // TODO: implement, with tests for all code paths, the spec's behavior.

    const baseHrefAttribute = baseElement.getAttributeNS(null, "href");
    const result = whatwgURL.parseURL(baseHrefAttribute, { baseURL: fallbackBaseURL });
    return result === null ? fallbackBaseURL : result;
  }

  // https://html.spec.whatwg.org/#fallback-base-url
  _fallbackBaseURL() {
    if (this.URL === "about:blank" && this._defaultView &&
      this._defaultView._parent !== this._defaultView) {
      const parentDocument = idlUtils.implForWrapper(this._defaultView._parent._document);
      return parentDocument.baseURL();
    }

    return this._URL;
  }

  _getTheParent(event) {
    if (event.type === "load" || !this._defaultView) {
      return null;
    }

    return idlUtils.implForWrapper(this._defaultView);
  }

  get compatMode() {
    return this._parsingMode === "xml" || this.doctype ? "CSS1Compat" : "BackCompat";
  }
  get charset() {
    return this._encoding;
  }
  get characterSet() {
    return this._encoding;
  }
  get inputEncoding() {
    return this._encoding;
  }
  get doctype() {
    for (const childNode of domSymbolTree.childrenIterator(this)) {
      if (childNode.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) {
        return childNode;
      }
    }
    return null;
  }
  get URL() {
    return whatwgURL.serializeURL(this._URL);
  }
  get documentURI() {
    return whatwgURL.serializeURL(this._URL);
  }
  get location() {
    return this._defaultView ? this._location : null;
  }

  // https://dom.spec.whatwg.org/#dom-document-documentelement
  get documentElement() {
    for (const childNode of domSymbolTree.childrenIterator(this)) {
      if (childNode.nodeType === NODE_TYPE.ELEMENT_NODE) {
        return childNode;
      }
    }

    return null;
  }

  get implementation() {
    return this._implementation;
  }
  set implementation(implementation) {
    this._implementation = implementation;
  }

  get defaultView() {
    return this._defaultView;
  }

  get currentScript() {
    return this._currentScript;
  }

  get readyState() {
    return this._currentDocumentReadiness;
  }

  set readyState(state) {
    this._currentDocumentReadiness = state;
    fireAnEvent("readystatechange", this);
  }

  hasFocus() {
    return Boolean(this._lastFocusedElement);
  }

  _descendantRemoved(parent, child) {
    if (child.tagName === "STYLE") {
      this.styleSheets._remove(child.sheet);
    }

    super._descendantRemoved(parent, child);
  }

  write(...args) {
    let text = "";
    for (let i = 0; i < args.length; ++i) {
      text += args[i];
    }

    if (this._parsingMode === "xml") {
      throw DOMException.create(this._globalObject, [
        "Cannot use document.write on XML documents",
        "InvalidStateError"
      ]);
    }

    if (this._throwOnDynamicMarkupInsertionCounter > 0) {
      throw DOMException.create(this._globalObject, [
        "Cannot use document.write while a custom element upgrades",
        "InvalidStateError"
      ]);
    }

    if (this._writeAfterElement) {
      // If called from an script element directly (during the first tick),
      // the new elements are inserted right after that element.
      const tempDiv = this.createElement("div");
      tempDiv.innerHTML = text;

      let child = tempDiv.firstChild;
      let previous = this._writeAfterElement;
      const parent = this._writeAfterElement.parentNode;

      while (child) {
        const node = child;
        child = child.nextSibling;

        node._isMovingDueToDocumentWrite = true; // hack for script execution
        parent.insertBefore(node, previous.nextSibling);
        node._isMovingDueToDocumentWrite = false;

        previous = node;
      }
    } else if (this.readyState === "loading") {
      // During page loading, document.write appends to the current element
      // Find the last child that has been added to the document.
      if (this.lastChild) {
        let node = this;
        while (node.lastChild && node.lastChild.nodeType === NODE_TYPE.ELEMENT_NODE) {
          node = node.lastChild;
        }
        node.innerHTML = text;
      } else {
        clearChildNodes(this);
        parseIntoDocument(text, this);
      }
    } else if (text) {
      clearChildNodes(this);
      parseIntoDocument(text, this);
    }
  }

  writeln(...args) {
    this.write(...args, "\n");
  }

  // This is implemented separately for Document (which has a _ids cache) and DocumentFragment (which does not).
  getElementById(id) {
    if (!this._ids[id]) {
      return null;
    }

    // Let's find the first element with where it's root is the document.
    const matchElement = this._ids[id].find(candidate => {
      let root = candidate;
      while (domSymbolTree.parent(root)) {
        root = domSymbolTree.parent(root);
      }

      return root === this;
    });

    return matchElement || null;
  }

  get referrer() {
    return this._referrer || "";
  }
  get lastModified() {
    return this._lastModified;
  }
  get images() {
    return this.getElementsByTagName("IMG");
  }
  get embeds() {
    return this.getElementsByTagName("EMBED");
  }
  get plugins() {
    return this.embeds;
  }
  get links() {
    return HTMLCollection.createImpl(this._globalObject, [], {
      element: this,
      query: () => domSymbolTree.treeToArray(this, {
        filter: node => (node._localName === "a" || node._localName === "area") &&
                        node.hasAttributeNS(null, "href") &&
                        node._namespaceURI === HTML_NS
      })
    });
  }
  get forms() {
    return this.getElementsByTagName("FORM");
  }
  get scripts() {
    return this.getElementsByTagName("SCRIPT");
  }
  get anchors() {
    return HTMLCollection.createImpl(this._globalObject, [], {
      element: this,
      query: () => domSymbolTree.treeToArray(this, {
        filter: node => node._localName === "a" &&
                        node.hasAttributeNS(null, "name") &&
                        node._namespaceURI === HTML_NS
      })
    });
  }

  // The applets attribute must return an
  // HTMLCollection rooted at the Document node,
  // whose filter matches nothing.
  // (It exists for historical reasons.)
  get applets() {
    return HTMLCollection.createImpl(this._globalObject, [], {
      element: this,
      query: () => []
    });
  }

  open() {
    let child = domSymbolTree.firstChild(this);
    while (child) {
      this.removeChild(child);
      child = domSymbolTree.firstChild(this);
    }
    this._modified();
    return this;
  }
  close(noQueue) {
    // In some cases like when creating an empty iframe, I want to emit the
    // events right away to avoid problems if later I asign the property src.
    if (noQueue) {
      this.readyState = "complete";

      fireAnEvent("DOMContentLoaded", this, undefined, { bubbles: true });
      fireAnEvent("load", this);

      return;
    }
    this._queue.resume();

    const dummyPromise = Promise.resolve();

    const onDOMContentLoad = () => {
      const doc = this;
      function dispatchEvent() {
        // https://html.spec.whatwg.org/#the-end
        doc.readyState = "interactive";
        fireAnEvent("DOMContentLoaded", doc, undefined, { bubbles: true });
      }

      return new Promise(resolve => {
        if (!this._deferQueue.tail) {
          dispatchEvent();
          resolve();
          return;
        }

        this._deferQueue.setListener(() => {
          dispatchEvent();
          resolve();
        });

        this._deferQueue.resume();
      });
    };

    const onLoad = () => {
      const doc = this;
      function dispatchEvent() {
        doc.readyState = "complete";
        fireAnEvent("load", doc);
      }

      return new Promise(resolve => {
        if (this._asyncQueue.count() === 0) {
          dispatchEvent();
          resolve();
          return;
        }

        this._asyncQueue.setListener(() => {
          dispatchEvent();
          resolve();
        });
      });
    };

    this._queue.push(dummyPromise, onDOMContentLoad, null);
    // Set the readyState to 'complete' once all resources are loaded.
    // As a side-effect the document's load-event will be dispatched.
    this._queue.push(dummyPromise, onLoad, null, true);
  }

  getElementsByName(elementName) {
    return NodeList.createImpl(this._globalObject, [], {
      element: this,
      query: () => domSymbolTree.treeToArray(this, {
        filter: node => node.getAttributeNS && node.getAttributeNS(null, "name") === elementName
      })
    });
  }

  get title() {
    const { documentElement } = this;
    let value = "";

    if (documentElement && documentElement._localName === "svg") {
      const svgTitleElement = firstChildWithLocalName(documentElement, "title", SVG_NS);

      if (svgTitleElement) {
        value = childTextContent(svgTitleElement);
      }
    } else {
      const titleElement = firstDescendantWithLocalName(this, "title");

      if (titleElement) {
        value = childTextContent(titleElement);
      }
    }

    value = stripAndCollapseASCIIWhitespace(value);

    return value;
  }

  set title(value) {
    const { documentElement } = this;
    let element;

    if (documentElement && documentElement._localName === "svg") {
      element = firstChildWithLocalName(documentElement, "title", SVG_NS);

      if (!element) {
        element = this.createElementNS(SVG_NS, "title");

        this._insert(element, documentElement.firstChild);
      }

      element.textContent = value;
    } else if (documentElement && documentElement._namespaceURI === HTML_NS) {
      const titleElement = firstDescendantWithLocalName(this, "title");
      const headElement = this.head;

      if (titleElement === null && headElement === null) {
        return;
      }

      if (titleElement !== null) {
        element = titleElement;
      } else {
        element = this.createElement("title");
        headElement._append(element);
      }

      element.textContent = value;
    }
  }

  get dir() {
    return this.documentElement ? this.documentElement.dir : "";
  }
  set dir(value) {
    if (this.documentElement) {
      this.documentElement.dir = value;
    }
  }

  get head() {
    return this.documentElement ? firstChildWithLocalName(this.documentElement, "head") : null;
  }

  get body() {
    const { documentElement } = this;
    if (!documentElement || documentElement._localName !== "html" ||
        documentElement._namespaceURI !== HTML_NS) {
      return null;
    }

    return firstChildWithLocalNames(this.documentElement, new Set(["body", "frameset"]));
  }

  set body(value) {
    if (value === null ||
        value._namespaceURI !== HTML_NS ||
        (value._localName !== "body" && value._localName !== "frameset")) {
      throw DOMException.create(this._globalObject, [
        "Cannot set the body to null or a non-body/frameset element",
        "HierarchyRequestError"
      ]);
    }

    const bodyElement = this.body;
    if (value === bodyElement) {
      return;
    }

    if (bodyElement !== null) {
      bodyElement.parentNode._replace(value, bodyElement);
      return;
    }

    const { documentElement } = this;
    if (documentElement === null) {
      throw DOMException.create(this._globalObject, [
        "Cannot set the body when there is no document element",
        "HierarchyRequestError"
      ]);
    }

    documentElement._append(value);
  }

  _runPreRemovingSteps(oldNode) {
    // https://html.spec.whatwg.org/#focus-fixup-rule
    if (oldNode === this.activeElement) {
      this._lastFocusedElement = this.body;
    }
    for (const activeNodeIterator of this._workingNodeIterators) {
      activeNodeIterator._preRemovingSteps(oldNode);
    }
  }

  createEvent(type) {
    const typeLower = type.toLowerCase();
    const eventWrapper = eventInterfaceTable[typeLower] || null;

    if (!eventWrapper) {
      throw DOMException.create(this._globalObject, [
        "The provided event type (\"" + type + "\") is invalid",
        "NotSupportedError"
      ]);
    }

    const impl = eventWrapper.createImpl(this._globalObject, [""]);
    impl._initializedFlag = false;
    return impl;
  }

  createRange() {
    return Range.createImpl(this._globalObject, [], {
      start: { node: this, offset: 0 },
      end: { node: this, offset: 0 }
    });
  }

  createProcessingInstruction(target, data) {
    validateName(this._globalObject, target);

    if (data.includes("?>")) {
      throw DOMException.create(this._globalObject, [
        "Processing instruction data cannot contain the string \"?>\"",
        "InvalidCharacterError"
      ]);
    }

    return ProcessingInstruction.createImpl(this._globalObject, [], {
      ownerDocument: this,
      target,
      data
    });
  }

  // https://dom.spec.whatwg.org/#dom-document-createcdatasection
  createCDATASection(data) {
    if (this._parsingMode === "html") {
      throw DOMException.create(this._globalObject, [
        "Cannot create CDATA sections in HTML documents",
        "NotSupportedError"
      ]);
    }

    if (data.includes("]]>")) {
      throw DOMException.create(this._globalObject, [
        "CDATA section data cannot contain the string \"]]>\"",
        "InvalidCharacterError"
      ]);
    }

    return CDATASection.createImpl(this._globalObject, [], {
      ownerDocument: this,
      data
    });
  }

  createTextNode(data) {
    return Text.createImpl(this._globalObject, [], {
      ownerDocument: this,
      data
    });
  }

  createComment(data) {
    return Comment.createImpl(this._globalObject, [], {
      ownerDocument: this,
      data
    });
  }

  // https://dom.spec.whatwg.org/#dom-document-createelement
  createElement(localName, options) {
    validateName(this._globalObject, localName);

    if (this._parsingMode === "html") {
      localName = asciiLowercase(localName);
    }

    let isValue = null;
    if (options && options.is !== undefined) {
      isValue = options.is;
    }

    const namespace = this._parsingMode === "html" || this.contentType === "application/xhtml+xml" ? HTML_NS : null;

    return createElement(this, localName, namespace, null, isValue, true);
  }

  // https://dom.spec.whatwg.org/#dom-document-createelementns
  createElementNS(namespace, qualifiedName, options) {
    return internalCreateElementNSSteps(this, namespace, qualifiedName, options);
  }

  createDocumentFragment() {
    return DocumentFragment.createImpl(this._globalObject, [], { ownerDocument: this });
  }

  createAttribute(localName) {
    validateName(this._globalObject, localName);

    if (this._parsingMode === "html") {
      localName = asciiLowercase(localName);
    }

    return this._createAttribute({ localName });
  }

  createAttributeNS(namespace, name) {
    if (namespace === undefined) {
      namespace = null;
    }
    namespace = namespace !== null ? String(namespace) : namespace;

    const extracted = validateAndExtract(this._globalObject, namespace, name);
    return this._createAttribute({
      namespace: extracted.namespace,
      namespacePrefix: extracted.prefix,
      localName: extracted.localName
    });
  }

  // Using this helper function rather than directly calling generatedAttr.createImpl may be preferred in some files,
  // to avoid introducing a potentially cyclic dependency on generated/Attr.js.
  _createAttribute({
    localName,
    value,
    namespace,
    namespacePrefix
  }) {
    return generatedAttr.createImpl(this._globalObject, [], {
      localName,
      value,
      namespace,
      namespacePrefix,
      ownerDocument: this
    });
  }

  createTreeWalker(root, whatToShow, filter) {
    return TreeWalker.createImpl(this._globalObject, [], { root, whatToShow, filter });
  }

  createNodeIterator(root, whatToShow, filter) {
    const nodeIterator = NodeIterator.createImpl(this._globalObject, [], { root, whatToShow, filter });
    this._workingNodeIterators.add(nodeIterator);
    return nodeIterator;
  }

  importNode(node, deep) {
    if (node.nodeType === NODE_TYPE.DOCUMENT_NODE) {
      throw DOMException.create(this._globalObject, [
        "Cannot import a document node",
        "NotSupportedError"
      ]);
    } else if (ShadowRoot.isImpl(node)) {
      throw DOMException.create(this._globalObject, [
        "Cannot adopt a shadow root",
        "NotSupportedError"
      ]);
    }

    return clone(node, this, deep);
  }

  // https://dom.spec.whatwg.org/#dom-document-adoptnode
  adoptNode(node) {
    if (node.nodeType === NODE_TYPE.DOCUMENT_NODE) {
      throw DOMException.create(this._globalObject, [
        "Cannot adopt a document node",
        "NotSupportedError"
      ]);
    } else if (ShadowRoot.isImpl(node)) {
      throw DOMException.create(this._globalObject, [
        "Cannot adopt a shadow root",
        "HierarchyRequestError"
      ]);
    }

    this._adoptNode(node);

    return node;
  }

  // https://dom.spec.whatwg.org/#concept-node-adopt
  _adoptNode(node) {
    const newDocument = this;
    const oldDocument = node._ownerDocument;

    const parent = domSymbolTree.parent(node);
    if (parent) {
      parent._remove(node);
    }

    if (oldDocument !== newDocument) {
      for (const inclusiveDescendant of shadowIncludingInclusiveDescendantsIterator(node)) {
        inclusiveDescendant._ownerDocument = newDocument;
      }

      for (const inclusiveDescendant of shadowIncludingInclusiveDescendantsIterator(node)) {
        if (inclusiveDescendant._ceState === "custom") {
          enqueueCECallbackReaction(inclusiveDescendant, "adoptedCallback", [
            idlUtils.wrapperForImpl(oldDocument),
            idlUtils.wrapperForImpl(newDocument)
          ]);
        }
      }

      for (const inclusiveDescendant of shadowIncludingInclusiveDescendantsIterator(node)) {
        if (inclusiveDescendant._adoptingSteps) {
          inclusiveDescendant._adoptingSteps(oldDocument);
        }
      }
    }
  }

  get cookie() {
    return this._cookieJar.getCookieStringSync(this.URL, { http: false });
  }
  set cookie(cookieStr) {
    cookieStr = String(cookieStr);
    this._cookieJar.setCookieSync(cookieStr, this.URL, {
      http: false,
      ignoreError: true
    });
  }

  // The clear(), captureEvents(), and releaseEvents() methods must do nothing
  clear() {}

  captureEvents() {}

  releaseEvents() {}

  get styleSheets() {
    if (!this._styleSheets) {
      this._styleSheets = StyleSheetList.createImpl(this._globalObject);
    }

    // TODO: each style and link element should register its sheet on creation
    // and remove it on removal.
    return this._styleSheets;
  }

  get hidden() {
    if (this._defaultView && this._defaultView._pretendToBeVisual) {
      return false;
    }

    return true;
  }

  get visibilityState() {
    if (this._defaultView && this._defaultView._pretendToBeVisual) {
      return "visible";
    }

    return "prerender";
  }

  // https://w3c.github.io/selection-api/#extensions-to-document-interface
  getSelection() {
    return this._defaultView ? this._defaultView._selection : null;
  }

  // Needed to ensure that the resulting document has the correct prototype chain:
  // https://dom.spec.whatwg.org/#concept-node-clone says "that implements the same interfaces as node".
  _cloneDocument() {
    const copy = documents.createImpl(
      this._globalObject,
      {
        contentType: this.contentType,
        encoding: this._encoding,
        parsingMode: this._parsingMode
      }
    );

    copy._URL = this._URL;
    copy._origin = this._origin;
    return copy;
  }
}

eventAccessors.createEventAccessor(DocumentImpl.prototype, "readystatechange");
mixin(DocumentImpl.prototype, DocumentOrShadowRootImpl.prototype);
mixin(DocumentImpl.prototype, GlobalEventHandlersImpl.prototype);
mixin(DocumentImpl.prototype, NonElementParentNodeImpl.prototype);
mixin(DocumentImpl.prototype, ParentNodeImpl.prototype);

DocumentImpl.prototype.getElementsByTagName = memoizeQuery(function (qualifiedName) {
  return listOfElementsWithQualifiedName(qualifiedName, this);
});

DocumentImpl.prototype.getElementsByTagNameNS = memoizeQuery(function (namespace, localName) {
  return listOfElementsWithNamespaceAndLocalName(namespace, localName, this);
});

DocumentImpl.prototype.getElementsByClassName = memoizeQuery(function getElementsByClassName(classNames) {
  return listOfElementsWithClassNames(classNames, this);
});

module.exports = {
  implementation: DocumentImpl
};
