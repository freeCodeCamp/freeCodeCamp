"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
/*
 * Module dependencies
 */
var ElementType = __importStar(require("domelementtype"));
var entities_1 = require("entities");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */
var foreignNames_js_1 = require("./foreignNames.js");
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes)
        return;
    var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false
        ? replaceQuotes
        : opts.xmlMode || opts.encodeEntities !== "utf8"
            ? entities_1.encodeXML
            : entities_1.escapeAttribute;
    return Object.keys(attributes)
        .map(function (key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return "".concat(key, "=\"").concat(encode(value), "\"");
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render(node, options) {
    if (options === void 0) { options = {}; }
    var nodes = "length" in node ? node : [node];
    var output = "";
    for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
exports.render = render;
exports.default = render;
function renderNode(node, options) {
    switch (node.type) {
        case ElementType.Root:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case ElementType.Doctype:
        case ElementType.Directive:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), { xmlMode: false });
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
    }
    var tag = "<".concat(elem.name);
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += " ".concat(attribs);
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</".concat(elem.name, ">");
        }
    }
    return tag;
}
function renderDirective(elem) {
    return "<".concat(elem.data, ">");
}
function renderText(elem, opts) {
    var _a;
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data =
            opts.xmlMode || opts.encodeEntities !== "utf8"
                ? (0, entities_1.encodeXML)(data)
                : (0, entities_1.escapeText)(data);
    }
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[".concat(elem.children[0].data, "]]>");
}
function renderComment(elem) {
    return "<!--".concat(elem.data, "-->");
}
