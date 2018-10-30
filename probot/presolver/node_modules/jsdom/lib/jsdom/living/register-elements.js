"use strict";
/* eslint global-require: 0 */

const DocumentImpl = require("./nodes/Document-impl.js");

const mappings = {
  // https://html.spec.whatwg.org/multipage/dom.html#elements-in-the-dom%3Aelement-interface
  // https://html.spec.whatwg.org/multipage/indices.html#elements-3
  "http://www.w3.org/1999/xhtml": {
    HTMLElement: {
      file: require("./generated/HTMLElement.js"),
      tags: [
        "abbr",
        "acronym",
        "address",
        "article",
        "aside",
        "b",
        "basefont",
        "bdi",
        "bdo",
        "big",
        "center",
        "cite",
        "code",
        "dd",
        "dfn",
        "dt",
        "em",
        "figcaption",
        "figure",
        "footer",
        "header",
        "hgroup",
        "i",
        "kbd",
        "main",
        "mark",
        "nav",
        "nobr",
        "noembed",
        "noframes",
        "noscript",
        "plaintext",
        "rb",
        "rp",
        "rt",
        "rtc",
        "ruby",
        "s",
        "samp",
        "section",
        "small",
        "strike",
        "strong",
        "sub",
        "summary",
        "sup",
        "tt",
        "u",
        "var",
        "wbr"
      ]
    },
    HTMLAnchorElement: {
      file: require("./generated/HTMLAnchorElement.js"),
      tags: ["a"]
    },
    HTMLAreaElement: {
      file: require("./generated/HTMLAreaElement.js"),
      tags: ["area"]
    },
    HTMLAudioElement: {
      file: require("./generated/HTMLAudioElement.js"),
      tags: ["audio"]
    },
    HTMLBaseElement: {
      file: require("./generated/HTMLBaseElement.js"),
      tags: ["base"]
    },
    HTMLBodyElement: {
      file: require("./generated/HTMLBodyElement.js"),
      tags: ["body"]
    },
    HTMLBRElement: {
      file: require("./generated/HTMLBRElement.js"),
      tags: ["br"]
    },
    HTMLButtonElement: {
      file: require("./generated/HTMLButtonElement.js"),
      tags: ["button"]
    },
    HTMLCanvasElement: {
      file: require("./generated/HTMLCanvasElement.js"),
      tags: ["canvas"]
    },
    HTMLDataElement: {
      file: require("./generated/HTMLDataElement.js"),
      tags: ["data"]
    },
    HTMLDataListElement: {
      file: require("./generated/HTMLDataListElement.js"),
      tags: ["datalist"]
    },
    HTMLDetailsElement: {
      file: require("./generated/HTMLDetailsElement.js"),
      tags: ["details"]
    },
    HTMLDialogElement: {
      file: require("./generated/HTMLDialogElement.js"),
      tags: ["dialog"]
    },
    HTMLDirectoryElement: {
      file: require("./generated/HTMLDirectoryElement.js"),
      tags: ["dir"]
    },
    HTMLDivElement: {
      file: require("./generated/HTMLDivElement.js"),
      tags: ["div"]
    },
    HTMLDListElement: {
      file: require("./generated/HTMLDListElement.js"),
      tags: ["dl"]
    },
    HTMLEmbedElement: {
      file: require("./generated/HTMLEmbedElement.js"),
      tags: ["embed"]
    },
    HTMLFieldSetElement: {
      file: require("./generated/HTMLFieldSetElement.js"),
      tags: ["fieldset"]
    },
    HTMLFontElement: {
      file: require("./generated/HTMLFontElement.js"),
      tags: ["font"]
    },
    HTMLFormElement: {
      file: require("./generated/HTMLFormElement.js"),
      tags: ["form"]
    },
    HTMLFrameElement: {
      file: require("./generated/HTMLFrameElement.js"),
      tags: ["frame"]
    },
    HTMLFrameSetElement: {
      file: require("./generated/HTMLFrameSetElement.js"),
      tags: ["frameset"]
    },
    HTMLHeadingElement: {
      file: require("./generated/HTMLHeadingElement.js"),
      tags: ["h1", "h2", "h3", "h4", "h5", "h6"]
    },
    HTMLHeadElement: {
      file: require("./generated/HTMLHeadElement.js"),
      tags: ["head"]
    },
    HTMLHRElement: {
      file: require("./generated/HTMLHRElement.js"),
      tags: ["hr"]
    },
    HTMLHtmlElement: {
      file: require("./generated/HTMLHtmlElement.js"),
      tags: ["html"]
    },
    HTMLIFrameElement: {
      file: require("./generated/HTMLIFrameElement.js"),
      tags: ["iframe"]
    },
    HTMLImageElement: {
      file: require("./generated/HTMLImageElement.js"),
      tags: ["img"]
    },
    HTMLInputElement: {
      file: require("./generated/HTMLInputElement.js"),
      tags: ["input"]
    },
    HTMLLabelElement: {
      file: require("./generated/HTMLLabelElement.js"),
      tags: ["label"]
    },
    HTMLLegendElement: {
      file: require("./generated/HTMLLegendElement.js"),
      tags: ["legend"]
    },
    HTMLLIElement: {
      file: require("./generated/HTMLLIElement.js"),
      tags: ["li"]
    },
    HTMLLinkElement: {
      file: require("./generated/HTMLLinkElement.js"),
      tags: ["link"]
    },
    HTMLMapElement: {
      file: require("./generated/HTMLMapElement.js"),
      tags: ["map"]
    },
    HTMLMarqueeElement: {
      file: require("./generated/HTMLMarqueeElement.js"),
      tags: ["marquee"]
    },
    HTMLMediaElement: {
      file: require("./generated/HTMLMediaElement.js"),
      tags: []
    },
    HTMLMenuElement: {
      file: require("./generated/HTMLMenuElement.js"),
      tags: ["menu"]
    },
    HTMLMetaElement: {
      file: require("./generated/HTMLMetaElement.js"),
      tags: ["meta"]
    },
    HTMLMeterElement: {
      file: require("./generated/HTMLMeterElement.js"),
      tags: ["meter"]
    },
    HTMLModElement: {
      file: require("./generated/HTMLModElement.js"),
      tags: ["del", "ins"]
    },
    HTMLObjectElement: {
      file: require("./generated/HTMLObjectElement.js"),
      tags: ["object"]
    },
    HTMLOListElement: {
      file: require("./generated/HTMLOListElement.js"),
      tags: ["ol"]
    },
    HTMLOptGroupElement: {
      file: require("./generated/HTMLOptGroupElement.js"),
      tags: ["optgroup"]
    },
    HTMLOptionElement: {
      file: require("./generated/HTMLOptionElement.js"),
      tags: ["option"]
    },
    HTMLOutputElement: {
      file: require("./generated/HTMLOutputElement.js"),
      tags: ["output"]
    },
    HTMLParagraphElement: {
      file: require("./generated/HTMLParagraphElement.js"),
      tags: ["p"]
    },
    HTMLParamElement: {
      file: require("./generated/HTMLParamElement.js"),
      tags: ["param"]
    },
    HTMLPictureElement: {
      file: require("./generated/HTMLPictureElement.js"),
      tags: ["picture"]
    },
    HTMLPreElement: {
      file: require("./generated/HTMLPreElement.js"),
      tags: ["listing", "pre", "xmp"]
    },
    HTMLProgressElement: {
      file: require("./generated/HTMLProgressElement.js"),
      tags: ["progress"]
    },
    HTMLQuoteElement: {
      file: require("./generated/HTMLQuoteElement.js"),
      tags: ["blockquote", "q"]
    },
    HTMLScriptElement: {
      file: require("./generated/HTMLScriptElement.js"),
      tags: ["script"]
    },
    HTMLSelectElement: {
      file: require("./generated/HTMLSelectElement.js"),
      tags: ["select"]
    },
    HTMLSourceElement: {
      file: require("./generated/HTMLSourceElement.js"),
      tags: ["source"]
    },
    HTMLSpanElement: {
      file: require("./generated/HTMLSpanElement.js"),
      tags: ["span"]
    },
    HTMLStyleElement: {
      file: require("./generated/HTMLStyleElement.js"),
      tags: ["style"]
    },
    HTMLTableCaptionElement: {
      file: require("./generated/HTMLTableCaptionElement.js"),
      tags: ["caption"]
    },
    HTMLTableCellElement: {
      file: require("./generated/HTMLTableCellElement.js"),
      tags: ["th", "td"]
    },
    HTMLTableColElement: {
      file: require("./generated/HTMLTableColElement.js"),
      tags: ["col", "colgroup"]
    },
    HTMLTableElement: {
      file: require("./generated/HTMLTableElement.js"),
      tags: ["table"]
    },
    HTMLTimeElement: {
      file: require("./generated/HTMLTimeElement.js"),
      tags: ["time"]
    },
    HTMLTitleElement: {
      file: require("./generated/HTMLTitleElement.js"),
      tags: ["title"]
    },
    HTMLTableRowElement: {
      file: require("./generated/HTMLTableRowElement.js"),
      tags: ["tr"]
    },
    HTMLTableSectionElement: {
      file: require("./generated/HTMLTableSectionElement.js"),
      tags: ["thead", "tbody", "tfoot"]
    },
    HTMLTemplateElement: {
      file: require("./generated/HTMLTemplateElement.js"),
      tags: ["template"]
    },
    HTMLTextAreaElement: {
      file: require("./generated/HTMLTextAreaElement.js"),
      tags: ["textarea"]
    },
    HTMLTrackElement: {
      file: require("./generated/HTMLTrackElement.js"),
      tags: ["track"]
    },
    HTMLUListElement: {
      file: require("./generated/HTMLUListElement.js"),
      tags: ["ul"]
    },
    HTMLUnknownElement: {
      file: require("./generated/HTMLUnknownElement.js"),
      tags: []
    },
    HTMLVideoElement: {
      file: require("./generated/HTMLVideoElement.js"),
      tags: ["video"]
    }
  },
  "http://www.w3.org/2000/svg": {
    SVGElement: {
      file: require("./generated/SVGElement.js"),
      tags: []
    },
    SVGGraphicsElement: {
      file: require("./generated/SVGGraphicsElement.js"),
      tags: []
    },
    SVGSVGElement: {
      file: require("./generated/SVGSVGElement.js"),
      tags: ["svg"]
    }
  }
};

module.exports = core => {
  for (const ns of Object.keys(mappings)) {
    const interfaces = mappings[ns];
    DocumentImpl.implementation.prototype._elementBuilders[ns] = Object.create(null);

    for (const interfaceName of Object.keys(interfaces)) {
      const { file, tags } = interfaces[interfaceName];

      core[interfaceName] = file.interface;

      for (const tagName of tags) {
        DocumentImpl.implementation.prototype._elementBuilders[ns][tagName] = (document, localName, namespace) => {
          return file.createImpl([], {
            ownerDocument: document,
            localName,
            namespace
          });
        };
      }
    }
  }
};
