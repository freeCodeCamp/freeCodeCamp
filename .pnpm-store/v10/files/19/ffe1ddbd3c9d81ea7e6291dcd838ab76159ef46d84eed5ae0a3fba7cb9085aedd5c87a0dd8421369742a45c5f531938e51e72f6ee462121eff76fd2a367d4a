"use strict";

const style = require("../level2/style");
const xpath = require("../level3/xpath");

// This object defines the mapping between the interface name and the generated interface wrapper code.
// Note: The mapping needs to stay as-is in order due to interface evaluation.
// We cannot "refactor" this to something less duplicative because that would break bundlers which depend on static
// analysis of require()s.
const generatedInterfaces = {
  DOMException: require("./generated/DOMException.js"),

  URL: require("whatwg-url/webidl2js-wrapper").URL,
  URLSearchParams: require("whatwg-url/webidl2js-wrapper").URLSearchParams,

  EventTarget: require("./generated/EventTarget"),

  NamedNodeMap: require("./generated/NamedNodeMap"),
  Node: require("./generated/Node"),
  Attr: require("./generated/Attr"),
  Element: require("./generated/Element"),
  DocumentFragment: require("./generated/DocumentFragment"),
  DOMImplementation: require("./generated/DOMImplementation"),
  Document: require("./generated/Document"),
  XMLDocument: require("./generated/XMLDocument"),
  CharacterData: require("./generated/CharacterData"),
  Text: require("./generated/Text"),
  CDATASection: require("./generated/CDATASection"),
  ProcessingInstruction: require("./generated/ProcessingInstruction"),
  Comment: require("./generated/Comment"),
  DocumentType: require("./generated/DocumentType"),
  NodeList: require("./generated/NodeList"),
  RadioNodeList: require("./generated/RadioNodeList"),
  HTMLCollection: require("./generated/HTMLCollection"),
  HTMLOptionsCollection: require("./generated/HTMLOptionsCollection"),
  DOMStringMap: require("./generated/DOMStringMap"),
  DOMTokenList: require("./generated/DOMTokenList"),

  StyleSheetList: require("./generated/StyleSheetList.js"),

  HTMLElement: require("./generated/HTMLElement.js"),
  HTMLHeadElement: require("./generated/HTMLHeadElement.js"),
  HTMLTitleElement: require("./generated/HTMLTitleElement.js"),
  HTMLBaseElement: require("./generated/HTMLBaseElement.js"),
  HTMLLinkElement: require("./generated/HTMLLinkElement.js"),
  HTMLMetaElement: require("./generated/HTMLMetaElement.js"),
  HTMLStyleElement: require("./generated/HTMLStyleElement.js"),
  HTMLBodyElement: require("./generated/HTMLBodyElement.js"),
  HTMLHeadingElement: require("./generated/HTMLHeadingElement.js"),
  HTMLParagraphElement: require("./generated/HTMLParagraphElement.js"),
  HTMLHRElement: require("./generated/HTMLHRElement.js"),
  HTMLPreElement: require("./generated/HTMLPreElement.js"),
  HTMLUListElement: require("./generated/HTMLUListElement.js"),
  HTMLOListElement: require("./generated/HTMLOListElement.js"),
  HTMLLIElement: require("./generated/HTMLLIElement.js"),
  HTMLMenuElement: require("./generated/HTMLMenuElement.js"),
  HTMLDListElement: require("./generated/HTMLDListElement.js"),
  HTMLDivElement: require("./generated/HTMLDivElement.js"),
  HTMLAnchorElement: require("./generated/HTMLAnchorElement.js"),
  HTMLAreaElement: require("./generated/HTMLAreaElement.js"),
  HTMLBRElement: require("./generated/HTMLBRElement.js"),
  HTMLButtonElement: require("./generated/HTMLButtonElement.js"),
  HTMLCanvasElement: require("./generated/HTMLCanvasElement.js"),
  HTMLDataElement: require("./generated/HTMLDataElement.js"),
  HTMLDataListElement: require("./generated/HTMLDataListElement.js"),
  HTMLDetailsElement: require("./generated/HTMLDetailsElement.js"),
  HTMLDialogElement: require("./generated/HTMLDialogElement.js"),
  HTMLDirectoryElement: require("./generated/HTMLDirectoryElement.js"),
  HTMLFieldSetElement: require("./generated/HTMLFieldSetElement.js"),
  HTMLFontElement: require("./generated/HTMLFontElement.js"),
  HTMLFormElement: require("./generated/HTMLFormElement.js"),
  HTMLHtmlElement: require("./generated/HTMLHtmlElement.js"),
  HTMLImageElement: require("./generated/HTMLImageElement.js"),
  HTMLInputElement: require("./generated/HTMLInputElement.js"),
  HTMLLabelElement: require("./generated/HTMLLabelElement.js"),
  HTMLLegendElement: require("./generated/HTMLLegendElement.js"),
  HTMLMapElement: require("./generated/HTMLMapElement.js"),
  HTMLMarqueeElement: require("./generated/HTMLMarqueeElement.js"),
  HTMLMediaElement: require("./generated/HTMLMediaElement.js"),
  HTMLMeterElement: require("./generated/HTMLMeterElement.js"),
  HTMLModElement: require("./generated/HTMLModElement.js"),
  HTMLOptGroupElement: require("./generated/HTMLOptGroupElement.js"),
  HTMLOptionElement: require("./generated/HTMLOptionElement.js"),
  HTMLOutputElement: require("./generated/HTMLOutputElement.js"),
  HTMLPictureElement: require("./generated/HTMLPictureElement.js"),
  HTMLProgressElement: require("./generated/HTMLProgressElement.js"),
  HTMLQuoteElement: require("./generated/HTMLQuoteElement.js"),
  HTMLScriptElement: require("./generated/HTMLScriptElement.js"),
  HTMLSelectElement: require("./generated/HTMLSelectElement.js"),
  HTMLSlotElement: require("./generated/HTMLSlotElement.js"),
  HTMLSourceElement: require("./generated/HTMLSourceElement.js"),
  HTMLSpanElement: require("./generated/HTMLSpanElement.js"),
  HTMLTableCaptionElement: require("./generated/HTMLTableCaptionElement.js"),
  HTMLTableCellElement: require("./generated/HTMLTableCellElement.js"),
  HTMLTableColElement: require("./generated/HTMLTableColElement.js"),
  HTMLTableElement: require("./generated/HTMLTableElement.js"),
  HTMLTimeElement: require("./generated/HTMLTimeElement.js"),
  HTMLTableRowElement: require("./generated/HTMLTableRowElement.js"),
  HTMLTableSectionElement: require("./generated/HTMLTableSectionElement.js"),
  HTMLTemplateElement: require("./generated/HTMLTemplateElement.js"),
  HTMLTextAreaElement: require("./generated/HTMLTextAreaElement.js"),
  HTMLUnknownElement: require("./generated/HTMLUnknownElement.js"),
  HTMLFrameElement: require("./generated/HTMLFrameElement.js"),
  HTMLFrameSetElement: require("./generated/HTMLFrameSetElement.js"),
  HTMLIFrameElement: require("./generated/HTMLIFrameElement.js"),
  HTMLEmbedElement: require("./generated/HTMLEmbedElement.js"),
  HTMLObjectElement: require("./generated/HTMLObjectElement.js"),
  HTMLParamElement: require("./generated/HTMLParamElement.js"),
  HTMLVideoElement: require("./generated/HTMLVideoElement.js"),
  HTMLAudioElement: require("./generated/HTMLAudioElement.js"),
  HTMLTrackElement: require("./generated/HTMLTrackElement.js"),
  HTMLFormControlsCollection: require("./generated/HTMLFormControlsCollection.js"),

  SVGElement: require("./generated/SVGElement.js"),
  SVGGraphicsElement: require("./generated/SVGGraphicsElement.js"),
  SVGSVGElement: require("./generated/SVGSVGElement.js"),
  SVGGElement: require("./generated/SVGGElement.js"),
  SVGDefsElement: require("./generated/SVGDefsElement.js"),
  SVGDescElement: require("./generated/SVGDescElement.js"),
  SVGMetadataElement: require("./generated/SVGMetadataElement.js"),
  SVGTitleElement: require("./generated/SVGTitleElement.js"),
  SVGSymbolElement: require("./generated/SVGSymbolElement.js"),
  SVGSwitchElement: require("./generated/SVGSwitchElement.js"),

  SVGAnimatedPreserveAspectRatio: require("./generated/SVGAnimatedPreserveAspectRatio"),
  SVGAnimatedRect: require("./generated/SVGAnimatedRect"),
  SVGAnimatedString: require("./generated/SVGAnimatedString"),
  SVGNumber: require("./generated/SVGNumber"),
  SVGPreserveAspectRatio: require("./generated/SVGPreserveAspectRatio"),
  SVGRect: require("./generated/SVGRect"),
  SVGStringList: require("./generated/SVGStringList"),

  Event: require("./generated/Event"),
  CloseEvent: require("./generated/CloseEvent"),
  CustomEvent: require("./generated/CustomEvent"),
  MessageEvent: require("./generated/MessageEvent"),
  ErrorEvent: require("./generated/ErrorEvent"),
  HashChangeEvent: require("./generated/HashChangeEvent"),
  PopStateEvent: require("./generated/PopStateEvent"),
  StorageEvent: require("./generated/StorageEvent"),
  ProgressEvent: require("./generated/ProgressEvent"),
  PageTransitionEvent: require("./generated/PageTransitionEvent"),
  SubmitEvent: require("./generated/SubmitEvent"),

  UIEvent: require("./generated/UIEvent"),
  FocusEvent: require("./generated/FocusEvent"),
  InputEvent: require("./generated/InputEvent"),
  MouseEvent: require("./generated/MouseEvent"),
  KeyboardEvent: require("./generated/KeyboardEvent"),
  TouchEvent: require("./generated/TouchEvent"),
  CompositionEvent: require("./generated/CompositionEvent"),
  WheelEvent: require("./generated/WheelEvent"),

  BarProp: require("./generated/BarProp"),
  External: require("./generated/External"),
  Location: require("./generated/Location"),
  History: require("./generated/History"),
  Screen: require("./generated/Screen"),
  Performance: require("./generated/Performance"),
  Navigator: require("./generated/Navigator"),

  Crypto: require("./generated/Crypto"),

  PluginArray: require("./generated/PluginArray"),
  MimeTypeArray: require("./generated/MimeTypeArray"),
  Plugin: require("./generated/Plugin"),
  MimeType: require("./generated/MimeType"),

  FileReader: require("./generated/FileReader"),
  Blob: require("./generated/Blob"),
  File: require("./generated/File"),
  FileList: require("./generated/FileList"),
  ValidityState: require("./generated/ValidityState"),

  DOMParser: require("./generated/DOMParser"),
  XMLSerializer: require("./generated/XMLSerializer"),

  FormData: require("./generated/FormData"),
  XMLHttpRequestEventTarget: require("./generated/XMLHttpRequestEventTarget"),
  XMLHttpRequestUpload: require("./generated/XMLHttpRequestUpload"),
  XMLHttpRequest: require("./generated/XMLHttpRequest"),
  WebSocket: require("./generated/WebSocket"),

  NodeFilter: require("./generated/NodeFilter"),
  NodeIterator: require("./generated/NodeIterator"),
  TreeWalker: require("./generated/TreeWalker"),

  AbstractRange: require("./generated/AbstractRange"),
  Range: require("./generated/Range"),
  StaticRange: require("./generated/StaticRange"),
  Selection: require("./generated/Selection"),

  Storage: require("./generated/Storage"),

  CustomElementRegistry: require("./generated/CustomElementRegistry"),
  ElementInternals: require("./generated/ElementInternals"),
  ShadowRoot: require("./generated/ShadowRoot"),

  MutationObserver: require("./generated/MutationObserver"),
  MutationRecord: require("./generated/MutationRecord"),

  Headers: require("./generated/Headers"),
  AbortController: require("./generated/AbortController"),
  AbortSignal: require("./generated/AbortSignal"),

  DOMRectReadOnly: require("./generated/DOMRectReadOnly"),
  DOMRect: require("./generated/DOMRect")
};

function install(window, name, interfaceConstructor) {
  Object.defineProperty(window, name, {
    configurable: true,
    writable: true,
    value: interfaceConstructor
  });
}

exports.installInterfaces = (window, globalNames) => {
  // Install generated interface.
  for (const generatedInterface of Object.values(generatedInterfaces)) {
    generatedInterface.install(window, globalNames);
  }

  // Install legacy HTMLDocument interface
  // https://html.spec.whatwg.org/#htmldocument
  install(window, "HTMLDocument", window.Document);

  // https://webidl.spec.whatwg.org/#es-DOMException-specialness
  Object.setPrototypeOf(window.DOMException.prototype, window.Error.prototype);

  // These need to be cleaned up...
  style.addToCore(window);
  xpath(window);
};

// Returns an interface webidl2js wrapper given its an interface name.
exports.getInterfaceWrapper = name => {
  return generatedInterfaces[name];
};
