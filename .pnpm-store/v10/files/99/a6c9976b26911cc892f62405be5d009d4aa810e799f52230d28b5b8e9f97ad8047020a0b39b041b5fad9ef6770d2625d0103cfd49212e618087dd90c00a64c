"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
var Tokenizer_1 = __importDefault(require("./Tokenizer"));
var formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
]);
var pTag = new Set(["p"]);
var openImpliesClose = {
    tr: new Set(["tr", "th", "td"]),
    th: new Set(["th"]),
    td: new Set(["thead", "th", "td"]),
    body: new Set(["head", "link", "script"]),
    li: new Set(["li"]),
    p: pTag,
    h1: pTag,
    h2: pTag,
    h3: pTag,
    h4: pTag,
    h5: pTag,
    h6: pTag,
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: new Set(["option"]),
    optgroup: new Set(["optgroup", "option"]),
    dd: new Set(["dt", "dd"]),
    dt: new Set(["dt", "dd"]),
    address: pTag,
    article: pTag,
    aside: pTag,
    blockquote: pTag,
    details: pTag,
    div: pTag,
    dl: pTag,
    fieldset: pTag,
    figcaption: pTag,
    figure: pTag,
    footer: pTag,
    form: pTag,
    header: pTag,
    hr: pTag,
    main: pTag,
    nav: pTag,
    ol: pTag,
    pre: pTag,
    section: pTag,
    table: pTag,
    ul: pTag,
    rt: new Set(["rt", "rp"]),
    rp: new Set(["rt", "rp"]),
    tbody: new Set(["thead", "tbody"]),
    tfoot: new Set(["thead", "tbody"]),
};
var voidElements = new Set([
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
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set([
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
var reNameEnd = /\s|\//;
var Parser = /** @class */ (function () {
    function Parser(cbs, options) {
        if (options === void 0) { options = {}; }
        var _a, _b, _c, _d, _e;
        /** The start index of the last event. */
        this.startIndex = 0;
        /** The end index of the last event. */
        this.endIndex = null;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.options = options;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames =
            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    Parser.prototype.updatePosition = function (initialOffset) {
        if (this.endIndex === null) {
            if (this.tokenizer.sectionStart <= initialOffset) {
                this.startIndex = 0;
            }
            else {
                this.startIndex = this.tokenizer.sectionStart - initialOffset;
            }
        }
        else {
            this.startIndex = this.endIndex + 1;
        }
        this.endIndex = this.tokenizer.getAbsoluteIndex();
    };
    // Tokenizer event handlers
    Parser.prototype.ontext = function (data) {
        var _a, _b;
        this.updatePosition(1);
        this.endIndex--;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
    };
    Parser.prototype.onopentagname = function (name) {
        var _a, _b;
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.tagname = name;
        if (!this.options.xmlMode &&
            Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
            var el = void 0;
            while (this.stack.length > 0 &&
                openImpliesClose[name].has((el = this.stack[this.stack.length - 1]))) {
                this.onclosetag(el);
            }
        }
        if (this.options.xmlMode || !voidElements.has(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
            }
            else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
            }
        }
        (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    };
    Parser.prototype.onopentagend = function () {
        var _a, _b;
        this.updatePosition(1);
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
            this.attribs = null;
        }
        if (!this.options.xmlMode &&
            this.cbs.onclosetag &&
            voidElements.has(this.tagname)) {
            this.cbs.onclosetag(this.tagname);
        }
        this.tagname = "";
    };
    Parser.prototype.onclosetag = function (name) {
        this.updatePosition(1);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) ||
            htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
        }
        if (this.stack.length &&
            (this.options.xmlMode || !voidElements.has(name))) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    pos = this.stack.length - pos;
                    while (pos--) {
                        // We know the stack has sufficient elements.
                        this.cbs.onclosetag(this.stack.pop());
                    }
                }
                else
                    this.stack.length = pos;
            }
            else if (name === "p" && !this.options.xmlMode) {
                this.onopentagname(name);
                this.closeCurrentTag();
            }
        }
        else if (!this.options.xmlMode && (name === "br" || name === "p")) {
            this.onopentagname(name);
            this.closeCurrentTag();
        }
    };
    Parser.prototype.onselfclosingtag = function () {
        if (this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag();
        }
        else {
            this.onopentagend();
        }
    };
    Parser.prototype.closeCurrentTag = function () {
        var _a, _b;
        var name = this.tagname;
        this.onopentagend();
        /*
         * Self-closing tags will be on the top of the stack
         * (cheaper check than in onclosetag)
         */
        if (this.stack[this.stack.length - 1] === name) {
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
            this.stack.pop();
        }
    };
    Parser.prototype.onattribname = function (name) {
        if (this.lowerCaseAttributeNames) {
            name = name.toLowerCase();
        }
        this.attribname = name;
    };
    Parser.prototype.onattribdata = function (value) {
        this.attribvalue += value;
    };
    Parser.prototype.onattribend = function (quote) {
        var _a, _b;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribname = "";
        this.attribvalue = "";
    };
    Parser.prototype.getInstructionName = function (value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    };
    Parser.prototype.ondeclaration = function (value) {
        if (this.cbs.onprocessinginstruction) {
            var name_1 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
        }
    };
    Parser.prototype.onprocessinginstruction = function (value) {
        if (this.cbs.onprocessinginstruction) {
            var name_2 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
        }
    };
    Parser.prototype.oncomment = function (value) {
        var _a, _b, _c, _d;
        this.updatePosition(4);
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
    };
    Parser.prototype.oncdata = function (value) {
        var _a, _b, _c, _d, _e, _f;
        this.updatePosition(1);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            this.oncomment("[CDATA[" + value + "]]");
        }
    };
    Parser.prototype.onerror = function (err) {
        var _a, _b;
        (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    Parser.prototype.onend = function () {
        var _a, _b;
        if (this.cbs.onclosetag) {
            for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]))
                ;
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    Parser.prototype.reset = function () {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack = [];
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
    };
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    Parser.prototype.parseComplete = function (data) {
        this.reset();
        this.end(data);
    };
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    Parser.prototype.write = function (chunk) {
        this.tokenizer.write(chunk);
    };
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    Parser.prototype.end = function (chunk) {
        this.tokenizer.end(chunk);
    };
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    Parser.prototype.pause = function () {
        this.tokenizer.pause();
    };
    /**
     * Resumes parsing after `pause` was called.
     */
    Parser.prototype.resume = function () {
        this.tokenizer.resume();
    };
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    Parser.prototype.parseChunk = function (chunk) {
        this.write(chunk);
    };
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    Parser.prototype.done = function (chunk) {
        this.end(chunk);
    };
    return Parser;
}());
exports.Parser = Parser;
