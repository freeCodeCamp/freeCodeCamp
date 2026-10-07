"use strict";

const DOMException = require("../generated/DOMException");

const interfaces = require("../interfaces");

const { implForWrapper } = require("../generated/utils");

const { HTML_NS, SVG_NS } = require("./namespaces");
const { domSymbolTree } = require("./internal-constants");
const { validateAndExtract } = require("./validate-names");
const reportException = require("./runtime-script-errors");
const {
  isValidCustomElementName, upgradeElement, lookupCEDefinition, enqueueCEUpgradeReaction
} = require("./custom-elements");

const INTERFACE_TAG_MAPPING = {
  __proto__: null,
  // https://html.spec.whatwg.org/multipage/dom.html#elements-in-the-dom%3Aelement-interface
  // https://html.spec.whatwg.org/multipage/indices.html#elements-3
  [HTML_NS]: {
    __proto__: null,
    HTMLElement: [
      "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "dd", "dfn", "dt", "em", "figcaption",
      "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rp", "rt", "ruby", "s",
      "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"
    ],
    HTMLAnchorElement: ["a"],
    HTMLAreaElement: ["area"],
    HTMLAudioElement: ["audio"],
    HTMLBaseElement: ["base"],
    HTMLBodyElement: ["body"],
    HTMLBRElement: ["br"],
    HTMLButtonElement: ["button"],
    HTMLCanvasElement: ["canvas"],
    HTMLDataElement: ["data"],
    HTMLDataListElement: ["datalist"],
    HTMLDetailsElement: ["details"],
    HTMLDialogElement: ["dialog"],
    HTMLDirectoryElement: ["dir"],
    HTMLDivElement: ["div"],
    HTMLDListElement: ["dl"],
    HTMLEmbedElement: ["embed"],
    HTMLFieldSetElement: ["fieldset"],
    HTMLFontElement: ["font"],
    HTMLFormElement: ["form"],
    HTMLFrameElement: ["frame"],
    HTMLFrameSetElement: ["frameset"],
    HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
    HTMLHeadElement: ["head"],
    HTMLHRElement: ["hr"],
    HTMLHtmlElement: ["html"],
    HTMLIFrameElement: ["iframe"],
    HTMLImageElement: ["img"],
    HTMLInputElement: ["input"],
    HTMLLabelElement: ["label"],
    HTMLLegendElement: ["legend"],
    HTMLLIElement: ["li"],
    HTMLLinkElement: ["link"],
    HTMLMapElement: ["map"],
    HTMLMarqueeElement: ["marquee"],
    HTMLMediaElement: [],
    HTMLMenuElement: ["menu"],
    HTMLMetaElement: ["meta"],
    HTMLMeterElement: ["meter"],
    HTMLModElement: ["del", "ins"],
    HTMLObjectElement: ["object"],
    HTMLOListElement: ["ol"],
    HTMLOptGroupElement: ["optgroup"],
    HTMLOptionElement: ["option"],
    HTMLOutputElement: ["output"],
    HTMLParagraphElement: ["p"],
    HTMLParamElement: ["param"],
    HTMLPictureElement: ["picture"],
    HTMLPreElement: ["listing", "pre", "xmp"],
    HTMLProgressElement: ["progress"],
    HTMLQuoteElement: ["blockquote", "q"],
    HTMLScriptElement: ["script"],
    HTMLSelectElement: ["select"],
    HTMLSlotElement: ["slot"],
    HTMLSourceElement: ["source"],
    HTMLSpanElement: ["span"],
    HTMLStyleElement: ["style"],
    HTMLTableCaptionElement: ["caption"],
    HTMLTableCellElement: ["th", "td"],
    HTMLTableColElement: ["col", "colgroup"],
    HTMLTableElement: ["table"],
    HTMLTimeElement: ["time"],
    HTMLTitleElement: ["title"],
    HTMLTableRowElement: ["tr"],
    HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
    HTMLTemplateElement: ["template"],
    HTMLTextAreaElement: ["textarea"],
    HTMLTrackElement: ["track"],
    HTMLUListElement: ["ul"],
    HTMLUnknownElement: [],
    HTMLVideoElement: ["video"]
  },
  [SVG_NS]: {
    __proto__: null,
    SVGElement: [],
    SVGGraphicsElement: [],
    SVGDefsElement: ["defs"],
    SVGDescElement: ["desc"],
    SVGGElement: ["g"],
    SVGMetadataElement: ["metadata"],
    SVGSVGElement: ["svg"],
    SVGSwitchElement: ["switch"],
    SVGSymbolElement: ["symbol"],
    SVGTitleElement: ["title"]
  }
};

const TAG_INTERFACE_LOOKUP = Object.create(null);

for (const namespace of [HTML_NS, SVG_NS]) {
  TAG_INTERFACE_LOOKUP[namespace] = Object.create(null);

  const interfaceNames = Object.keys(INTERFACE_TAG_MAPPING[namespace]);
  for (const interfaceName of interfaceNames) {
    const tagNames = INTERFACE_TAG_MAPPING[namespace][interfaceName];

    for (const tagName of tagNames) {
      TAG_INTERFACE_LOOKUP[namespace][tagName] = interfaceName;
    }
  }
}

const UNKNOWN_HTML_ELEMENTS_NAMES = ["applet", "bgsound", "blink", "isindex", "keygen", "multicol", "nextid", "spacer"];
const HTML_ELEMENTS_NAMES = [
  "acronym", "basefont", "big", "center", "nobr", "noembed", "noframes", "plaintext", "rb", "rtc",
  "strike", "tt"
];

// https://html.spec.whatwg.org/multipage/dom.html#elements-in-the-dom:element-interface
function getHTMLElementInterface(name) {
  if (UNKNOWN_HTML_ELEMENTS_NAMES.includes(name)) {
    return interfaces.getInterfaceWrapper("HTMLUnknownElement");
  }

  if (HTML_ELEMENTS_NAMES.includes(name)) {
    return interfaces.getInterfaceWrapper("HTMLElement");
  }

  const specDefinedInterface = TAG_INTERFACE_LOOKUP[HTML_NS][name];
  if (specDefinedInterface !== undefined) {
    return interfaces.getInterfaceWrapper(specDefinedInterface);
  }

  if (isValidCustomElementName(name)) {
    return interfaces.getInterfaceWrapper("HTMLElement");
  }

  return interfaces.getInterfaceWrapper("HTMLUnknownElement");
}

// https://svgwg.org/svg2-draft/types.html#ElementsInTheSVGDOM
function getSVGInterface(name) {
  const specDefinedInterface = TAG_INTERFACE_LOOKUP[SVG_NS][name];
  if (specDefinedInterface !== undefined) {
    return interfaces.getInterfaceWrapper(specDefinedInterface);
  }

  return interfaces.getInterfaceWrapper("SVGElement");
}

// Returns the list of valid tag names that can bo associated with a element given its namespace and name.
function getValidTagNames(namespace, name) {
  if (INTERFACE_TAG_MAPPING[namespace] && INTERFACE_TAG_MAPPING[namespace][name]) {
    return INTERFACE_TAG_MAPPING[namespace][name];
  }

  return [];
}

// https://dom.spec.whatwg.org/#concept-create-element
function createElement(
  document,
  localName,
  namespace,
  prefix = null,
  isValue = null,
  synchronousCE = false
) {
  let result = null;

  const { _globalObject } = document;
  const definition = lookupCEDefinition(document, namespace, localName, isValue);

  if (definition !== null && definition.name !== localName) {
    const elementInterface = getHTMLElementInterface(localName);

    result = elementInterface.createImpl(_globalObject, [], {
      ownerDocument: document,
      localName,
      namespace: HTML_NS,
      prefix,
      ceState: "undefined",
      ceDefinition: null,
      isValue
    });

    if (synchronousCE) {
      upgradeElement(definition, result);
    } else {
      enqueueCEUpgradeReaction(result, definition);
    }
  } else if (definition !== null) {
    if (synchronousCE) {
      try {
        const C = definition.constructor;

        const resultWrapper = C.construct();
        result = implForWrapper(resultWrapper);

        if (!result._ceState || !result._ceDefinition || result._namespaceURI !== HTML_NS) {
          throw new TypeError("Internal error: Invalid custom element.");
        }

        if (result._attributeList.length !== 0) {
          throw DOMException.create(_globalObject, ["Unexpected attributes.", "NotSupportedError"]);
        }
        if (domSymbolTree.hasChildren(result)) {
          throw DOMException.create(_globalObject, ["Unexpected child nodes.", "NotSupportedError"]);
        }
        if (domSymbolTree.parent(result)) {
          throw DOMException.create(_globalObject, ["Unexpected element parent.", "NotSupportedError"]);
        }
        if (result._ownerDocument !== document) {
          throw DOMException.create(_globalObject, ["Unexpected element owner document.", "NotSupportedError"]);
        }
        if (result._namespaceURI !== namespace) {
          throw DOMException.create(_globalObject, ["Unexpected element namespace URI.", "NotSupportedError"]);
        }
        if (result._localName !== localName) {
          throw DOMException.create(_globalObject, ["Unexpected element local name.", "NotSupportedError"]);
        }

        result._prefix = prefix;
        result._isValue = isValue;
      } catch (error) {
        reportException(document._defaultView, error);

        const interfaceWrapper = interfaces.getInterfaceWrapper("HTMLUnknownElement");
        result = interfaceWrapper.createImpl(_globalObject, [], {
          ownerDocument: document,
          localName,
          namespace: HTML_NS,
          prefix,
          ceState: "failed",
          ceDefinition: null,
          isValue: null
        });
      }
    } else {
      const interfaceWrapper = interfaces.getInterfaceWrapper("HTMLElement");
      result = interfaceWrapper.createImpl(_globalObject, [], {
        ownerDocument: document,
        localName,
        namespace: HTML_NS,
        prefix,
        ceState: "undefined",
        ceDefinition: null,
        isValue: null
      });

      enqueueCEUpgradeReaction(result, definition);
    }
  } else {
    let elementInterface;

    switch (namespace) {
      case HTML_NS:
        elementInterface = getHTMLElementInterface(localName);
        break;

      case SVG_NS:
        elementInterface = getSVGInterface(localName);
        break;

      default:
        elementInterface = interfaces.getInterfaceWrapper("Element");
        break;
    }

    result = elementInterface.createImpl(_globalObject, [], {
      ownerDocument: document,
      localName,
      namespace,
      prefix,
      ceState: "uncustomized",
      ceDefinition: null,
      isValue
    });

    if (namespace === HTML_NS && (isValidCustomElementName(localName) || isValue !== null)) {
      result._ceState = "undefined";
    }
  }

  return result;
}

// https://dom.spec.whatwg.org/#internal-createelementns-steps
function internalCreateElementNSSteps(document, namespace, qualifiedName, options) {
  const extracted = validateAndExtract(document._globalObject, namespace, qualifiedName);

  let isValue = null;
  if (options && options.is !== undefined) {
    isValue = options.is;
  }

  return createElement(
    document,
    extracted.localName,
    extracted.namespace,
    extracted.prefix,
    isValue,
    true
  );
}

module.exports = {
  createElement,
  internalCreateElementNSSteps,

  getValidTagNames,
  getHTMLElementInterface
};
