var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define("back", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function arr_back(arr) {
        return arr[arr.length - 1];
    }
    exports.default = arr_back;
});
define("nodes/type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NodeType;
    (function (NodeType) {
        NodeType[NodeType["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
        NodeType[NodeType["TEXT_NODE"] = 3] = "TEXT_NODE";
        NodeType[NodeType["COMMENT_NODE"] = 8] = "COMMENT_NODE";
    })(NodeType || (NodeType = {}));
    exports.default = NodeType;
});
define("nodes/node", ["require", "exports", "he"], function (require, exports, he_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Node Class as base class for TextNode and HTMLElement.
     */
    var Node = /** @class */ (function () {
        function Node(parentNode, range) {
            if (parentNode === void 0) { parentNode = null; }
            this.parentNode = parentNode;
            this.childNodes = [];
            Object.defineProperty(this, 'range', {
                enumerable: false,
                writable: true,
                configurable: true,
                value: range !== null && range !== void 0 ? range : [-1, -1]
            });
        }
        /**
         * Remove current node
         */
        Node.prototype.remove = function () {
            var _this = this;
            if (this.parentNode) {
                var children = this.parentNode.childNodes;
                this.parentNode.childNodes = children.filter(function (child) {
                    return _this !== child;
                });
                this.parentNode = null;
            }
            return this;
        };
        Object.defineProperty(Node.prototype, "innerText", {
            get: function () {
                return this.rawText;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Node.prototype, "textContent", {
            get: function () {
                return (0, he_1.decode)(this.rawText);
            },
            set: function (val) {
                this.rawText = (0, he_1.encode)(val);
            },
            enumerable: false,
            configurable: true
        });
        return Node;
    }());
    exports.default = Node;
});
define("matcher", ["require", "exports", "nodes/type"], function (require, exports, type_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    type_1 = __importDefault(type_1);
    function isTag(node) {
        return node && node.nodeType === type_1.default.ELEMENT_NODE;
    }
    function getAttributeValue(elem, name) {
        return isTag(elem) ? elem.getAttribute(name) : undefined;
    }
    function getName(elem) {
        return ((elem && elem.rawTagName) || '').toLowerCase();
    }
    function getChildren(node) {
        return node && node.childNodes;
    }
    function getParent(node) {
        return node ? node.parentNode : null;
    }
    function getText(node) {
        return node.text;
    }
    function removeSubsets(nodes) {
        var idx = nodes.length;
        var node;
        var ancestor;
        var replace;
        // Check if each node (or one of its ancestors) is already contained in the
        // array.
        while (--idx > -1) {
            node = ancestor = nodes[idx];
            // Temporarily remove the node under consideration
            nodes[idx] = null;
            replace = true;
            while (ancestor) {
                if (nodes.indexOf(ancestor) > -1) {
                    replace = false;
                    nodes.splice(idx, 1);
                    break;
                }
                ancestor = getParent(ancestor);
            }
            // If the node has been found to be unique, re-insert it.
            if (replace) {
                nodes[idx] = node;
            }
        }
        return nodes;
    }
    function existsOne(test, elems) {
        return elems.some(function (elem) {
            return isTag(elem) ? test(elem) || existsOne(test, getChildren(elem)) : false;
        });
    }
    function getSiblings(node) {
        var parent = getParent(node);
        return parent && getChildren(parent);
    }
    function hasAttrib(elem, name) {
        return getAttributeValue(elem, name) !== undefined;
    }
    function findOne(test, elems) {
        var elem = null;
        for (var i = 0, l = elems.length; i < l && !elem; i++) {
            var el = elems[i];
            if (test(el)) {
                elem = el;
            }
            else {
                var childs = getChildren(el);
                if (childs && childs.length > 0) {
                    elem = findOne(test, childs);
                }
            }
        }
        return elem;
    }
    function findAll(test, nodes) {
        var result = [];
        for (var i = 0, j = nodes.length; i < j; i++) {
            if (!isTag(nodes[i]))
                continue;
            if (test(nodes[i]))
                result.push(nodes[i]);
            var childs = getChildren(nodes[i]);
            if (childs)
                result = result.concat(findAll(test, childs));
        }
        return result;
    }
    exports.default = {
        isTag: isTag,
        getAttributeValue: getAttributeValue,
        getName: getName,
        getChildren: getChildren,
        getParent: getParent,
        getText: getText,
        removeSubsets: removeSubsets,
        existsOne: existsOne,
        getSiblings: getSiblings,
        hasAttrib: hasAttrib,
        findOne: findOne,
        findAll: findAll
    };
});
define("void-tag", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VoidTag = /** @class */ (function () {
        function VoidTag(addClosingSlash, tags) {
            if (addClosingSlash === void 0) { addClosingSlash = false; }
            this.addClosingSlash = addClosingSlash;
            if (Array.isArray(tags)) {
                this.voidTags = tags.reduce(function (set, tag) {
                    return set.add(tag.toLowerCase());
                }, new Set());
            }
            else {
                this.voidTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'].reduce(function (set, tag) {
                    return set.add(tag);
                }, new Set());
            }
        }
        VoidTag.prototype.formatNode = function (tag, attrs, innerHTML) {
            var addClosingSlash = this.addClosingSlash;
            var closingSpace = (addClosingSlash && attrs && !attrs.endsWith(' ')) ? ' ' : '';
            var closingSlash = addClosingSlash ? "".concat(closingSpace, "/") : '';
            return this.isVoidElement(tag.toLowerCase()) ? "<".concat(tag).concat(attrs).concat(closingSlash, ">") : "<".concat(tag).concat(attrs, ">").concat(innerHTML, "</").concat(tag, ">");
        };
        VoidTag.prototype.isVoidElement = function (tag) {
            return this.voidTags.has(tag);
        };
        return VoidTag;
    }());
    exports.default = VoidTag;
});
define("nodes/text", ["require", "exports", "he", "nodes/node", "nodes/type"], function (require, exports, he_2, node_1, type_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_1 = __importDefault(node_1);
    type_2 = __importDefault(type_2);
    /**
     * TextNode to contain a text element in DOM tree.
     * @param {string} value [description]
     */
    var TextNode = /** @class */ (function (_super) {
        __extends(TextNode, _super);
        function TextNode(rawText, parentNode, range) {
            var _this = _super.call(this, parentNode, range) || this;
            /**
             * Node Type declaration.
             * @type {Number}
             */
            _this.nodeType = type_2.default.TEXT_NODE;
            _this._rawText = rawText;
            return _this;
        }
        TextNode.prototype.clone = function () {
            return new TextNode(this._rawText, null);
        };
        Object.defineProperty(TextNode.prototype, "rawText", {
            get: function () {
                return this._rawText;
            },
            /**
             * Set rawText and invalidate trimmed caches
             */
            set: function (text) {
                this._rawText = text;
                this._trimmedRawText = void 0;
                this._trimmedText = void 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextNode.prototype, "trimmedRawText", {
            /**
             * Returns raw text with all whitespace trimmed except single leading/trailing non-breaking space
             */
            get: function () {
                if (this._trimmedRawText !== undefined)
                    return this._trimmedRawText;
                this._trimmedRawText = trimText(this.rawText);
                return this._trimmedRawText;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextNode.prototype, "trimmedText", {
            /**
             * Returns text with all whitespace trimmed except single leading/trailing non-breaking space
             */
            get: function () {
                if (this._trimmedText !== undefined)
                    return this._trimmedText;
                this._trimmedText = trimText(this.text);
                return this._trimmedText;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextNode.prototype, "text", {
            /**
             * Get unescaped text value of current node and its children.
             * @return {string} text content
             */
            get: function () {
                return (0, he_2.decode)(this.rawText);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TextNode.prototype, "isWhitespace", {
            /**
             * Detect if the node contains only white space.
             * @return {boolean}
             */
            get: function () {
                return /^(\s|&nbsp;)*$/.test(this.rawText);
            },
            enumerable: false,
            configurable: true
        });
        TextNode.prototype.toString = function () {
            return this.rawText;
        };
        return TextNode;
    }(node_1.default));
    exports.default = TextNode;
    /**
     * Trim whitespace except single leading/trailing non-breaking space
     */
    function trimText(text) {
        var i = 0;
        var startPos;
        var endPos;
        while (i >= 0 && i < text.length) {
            if (/\S/.test(text[i])) {
                if (startPos === undefined) {
                    startPos = i;
                    i = text.length;
                }
                else {
                    endPos = i;
                    i = void 0;
                }
            }
            if (startPos === undefined)
                i++;
            else
                i--;
        }
        if (startPos === undefined)
            startPos = 0;
        if (endPos === undefined)
            endPos = text.length - 1;
        var hasLeadingSpace = startPos > 0 && /[^\S\r\n]/.test(text[startPos - 1]);
        var hasTrailingSpace = endPos < (text.length - 1) && /[^\S\r\n]/.test(text[endPos + 1]);
        return (hasLeadingSpace ? ' ' : '') + text.slice(startPos, endPos + 1) + (hasTrailingSpace ? ' ' : '');
    }
});
define("nodes/html", ["require", "exports", "css-select", "he", "back", "matcher", "void-tag", "nodes/comment", "nodes/node", "nodes/text", "nodes/type"], function (require, exports, css_select_1, he_3, back_1, matcher_1, void_tag_1, comment_1, node_2, text_1, type_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = exports.base_parse = void 0;
    he_3 = __importDefault(he_3);
    back_1 = __importDefault(back_1);
    matcher_1 = __importDefault(matcher_1);
    void_tag_1 = __importDefault(void_tag_1);
    comment_1 = __importDefault(comment_1);
    node_2 = __importDefault(node_2);
    text_1 = __importDefault(text_1);
    type_3 = __importDefault(type_3);
    function decode(val) {
        // clone string
        return JSON.parse(JSON.stringify(he_3.default.decode(val)));
    }
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
    var Htags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup'];
    var Dtags = ['details', 'dialog', 'dd', 'div', 'dt'];
    var Ftags = ['fieldset', 'figcaption', 'figure', 'footer', 'form'];
    var tableTags = ['table', 'td', 'tr'];
    var htmlTags = ['address', 'article', 'aside', 'blockquote', 'br', 'hr', 'li', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'ul'];
    var kBlockElements = new Set();
    function addToKBlockElement() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var addToSet = function (array) {
            for (var index = 0; index < array.length; index++) {
                var element = array[index];
                kBlockElements.add(element);
                kBlockElements.add(element.toUpperCase());
            }
        };
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            addToSet(arg);
        }
    }
    addToKBlockElement(Htags, Dtags, Ftags, tableTags, htmlTags);
    var DOMTokenList = /** @class */ (function () {
        function DOMTokenList(valuesInit, afterUpdate) {
            if (valuesInit === void 0) { valuesInit = []; }
            if (afterUpdate === void 0) { afterUpdate = function () { return null; }; }
            this._set = new Set(valuesInit);
            this._afterUpdate = afterUpdate;
        }
        DOMTokenList.prototype._validate = function (c) {
            if (/\s/.test(c)) {
                throw new Error("DOMException in DOMTokenList.add: The token '".concat(c, "' contains HTML space characters, which are not valid in tokens."));
            }
        };
        DOMTokenList.prototype.add = function (c) {
            this._validate(c);
            this._set.add(c);
            this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
        };
        DOMTokenList.prototype.replace = function (c1, c2) {
            this._validate(c2);
            this._set.delete(c1);
            this._set.add(c2);
            this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
        };
        DOMTokenList.prototype.remove = function (c) {
            this._set.delete(c) && this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
        };
        DOMTokenList.prototype.toggle = function (c) {
            this._validate(c);
            if (this._set.has(c))
                this._set.delete(c);
            else
                this._set.add(c);
            this._afterUpdate(this); // eslint-disable-line @typescript-eslint/no-unsafe-call
        };
        DOMTokenList.prototype.contains = function (c) {
            return this._set.has(c);
        };
        Object.defineProperty(DOMTokenList.prototype, "length", {
            get: function () {
                return this._set.size;
            },
            enumerable: false,
            configurable: true
        });
        DOMTokenList.prototype.values = function () {
            return this._set.values();
        };
        Object.defineProperty(DOMTokenList.prototype, "value", {
            get: function () {
                return Array.from(this._set.values());
            },
            enumerable: false,
            configurable: true
        });
        DOMTokenList.prototype.toString = function () {
            return Array.from(this._set.values()).join(' ');
        };
        return DOMTokenList;
    }());
    /**
     * HTMLElement, which contains a set of children.
     *
     * Note: this is a minimalist implementation, no complete tree
     *   structure provided (no parentNode, nextSibling,
     *   previousSibling etc).
     * @class HTMLElement
     * @extends {Node}
     */
    var HTMLElement = /** @class */ (function (_super) {
        __extends(HTMLElement, _super);
        /**
         * Creates an instance of HTMLElement.
         * @param keyAttrs	id and class attribute
         * @param [rawAttrs]	attributes in string
         *
         * @memberof HTMLElement
         */
        function HTMLElement(tagName, keyAttrs, rawAttrs, parentNode, range, voidTag) {
            if (rawAttrs === void 0) { rawAttrs = ''; }
            if (voidTag === void 0) { voidTag = new void_tag_1.default(); }
            var _this = _super.call(this, parentNode, range) || this;
            _this.rawAttrs = rawAttrs;
            _this.voidTag = voidTag;
            /**
             * Node Type declaration.
             */
            _this.nodeType = type_3.default.ELEMENT_NODE;
            _this.rawTagName = tagName;
            _this.rawAttrs = rawAttrs || '';
            _this.id = keyAttrs.id || '';
            _this.childNodes = [];
            _this.classList = new DOMTokenList(keyAttrs.class ? keyAttrs.class.split(/\s+/) : [], function (classList) { return _this.setAttribute('class', classList.toString()); } // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            );
            if (keyAttrs.id) {
                if (!rawAttrs) {
                    _this.rawAttrs = "id=\"".concat(keyAttrs.id, "\"");
                }
            }
            if (keyAttrs.class) {
                if (!rawAttrs) {
                    var cls = "class=\"".concat(_this.classList.toString(), "\"");
                    if (_this.rawAttrs) {
                        _this.rawAttrs += " ".concat(cls);
                    }
                    else {
                        _this.rawAttrs = cls;
                    }
                }
            }
            return _this;
        }
        /**
         * Quote attribute values
         * @param attr attribute value
         * @returns {string} quoted value
         */
        HTMLElement.prototype.quoteAttribute = function (attr) {
            if (attr == null) {
                return 'null';
            }
            return JSON.stringify(attr.replace(/"/g, '&quot;'));
        };
        /**
         * Remove Child element from childNodes array
         * @param {HTMLElement} node     node to remove
         */
        HTMLElement.prototype.removeChild = function (node) {
            this.childNodes = this.childNodes.filter(function (child) {
                return child !== node;
            });
            return this;
        };
        /**
         * Exchanges given child with new child
         * @param {HTMLElement} oldNode     node to exchange
         * @param {HTMLElement} newNode     new node
         */
        HTMLElement.prototype.exchangeChild = function (oldNode, newNode) {
            var children = this.childNodes;
            this.childNodes = children.map(function (child) {
                if (child === oldNode) {
                    return newNode;
                }
                return child;
            });
            return this;
        };
        Object.defineProperty(HTMLElement.prototype, "tagName", {
            get: function () {
                return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName;
            },
            set: function (newname) {
                this.rawTagName = newname.toLowerCase();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "localName", {
            get: function () {
                return this.rawTagName.toLowerCase();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "isVoidElement", {
            get: function () {
                return this.voidTag.isVoidElement(this.localName);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "rawText", {
            /**
             * Get escpaed (as-it) text value of current node and its children.
             * @return {string} text content
             */
            get: function () {
                return this.childNodes.reduce(function (pre, cur) {
                    return (pre += cur.rawText);
                }, '');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "textContent", {
            get: function () {
                return decode(this.rawText);
            },
            set: function (val) {
                var content = [new text_1.default(val, this)];
                this.childNodes = content;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "text", {
            /**
             * Get unescaped text value of current node and its children.
             * @return {string} text content
             */
            get: function () {
                return decode(this.rawText);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "structuredText", {
            /**
             * Get structured Text (with '\n' etc.)
             * @return {string} structured text
             */
            get: function () {
                var currentBlock = [];
                var blocks = [currentBlock];
                function dfs(node) {
                    if (node.nodeType === type_3.default.ELEMENT_NODE) {
                        if (kBlockElements.has(node.rawTagName)) {
                            if (currentBlock.length > 0) {
                                blocks.push((currentBlock = []));
                            }
                            node.childNodes.forEach(dfs);
                            if (currentBlock.length > 0) {
                                blocks.push((currentBlock = []));
                            }
                        }
                        else {
                            node.childNodes.forEach(dfs);
                        }
                    }
                    else if (node.nodeType === type_3.default.TEXT_NODE) {
                        if (node.isWhitespace) {
                            // Whitespace node, postponed output
                            currentBlock.prependWhitespace = true;
                        }
                        else {
                            var text = node.trimmedText;
                            if (currentBlock.prependWhitespace) {
                                text = " ".concat(text);
                                currentBlock.prependWhitespace = false;
                            }
                            currentBlock.push(text);
                        }
                    }
                }
                dfs(this);
                return blocks
                    .map(function (block) {
                    return block.join('').replace(/\s{2,}/g, ' '); // Normalize each line's whitespace
                })
                    .join('\n')
                    .replace(/\s+$/, ''); // trimRight;
            },
            enumerable: false,
            configurable: true
        });
        HTMLElement.prototype.toString = function () {
            var tag = this.rawTagName;
            if (tag) {
                var attrs = this.rawAttrs ? " ".concat(this.rawAttrs) : '';
                return this.voidTag.formatNode(tag, attrs, this.innerHTML);
            }
            return this.innerHTML;
        };
        Object.defineProperty(HTMLElement.prototype, "innerHTML", {
            get: function () {
                return this.childNodes
                    .map(function (child) {
                    return child.toString();
                })
                    .join('');
            },
            set: function (content) {
                //const r = parse(content, global.options); // TODO global.options ?
                var r = parse(content);
                var nodes = r.childNodes.length ? r.childNodes : [new text_1.default(content, this)];
                resetParent(nodes, this);
                resetParent(this.childNodes, null);
                this.childNodes = nodes;
            },
            enumerable: false,
            configurable: true
        });
        HTMLElement.prototype.set_content = function (content, options) {
            if (options === void 0) { options = {}; }
            if (content instanceof node_2.default) {
                content = [content];
            }
            else if (typeof content == 'string') {
                var r = parse(content, options);
                content = r.childNodes.length ? r.childNodes : [new text_1.default(content, this)];
            }
            resetParent(this.childNodes, null);
            resetParent(content, this);
            this.childNodes = content;
            return this;
        };
        HTMLElement.prototype.replaceWith = function () {
            var _this = this;
            var nodes = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                nodes[_i] = arguments[_i];
            }
            var parent = this.parentNode;
            var content = nodes
                .map(function (node) {
                if (node instanceof node_2.default) {
                    return [node];
                }
                else if (typeof node == 'string') {
                    // const r = parse(content, global.options); // TODO global.options ?
                    var r = parse(node);
                    return r.childNodes.length ? r.childNodes : [new text_1.default(node, _this)];
                }
                return [];
            })
                .flat();
            var idx = parent.childNodes.findIndex(function (child) {
                return child === _this;
            });
            resetParent([this], null);
            parent.childNodes = __spreadArray(__spreadArray(__spreadArray([], parent.childNodes.slice(0, idx), true), resetParent(content, parent), true), parent.childNodes.slice(idx + 1), true);
        };
        Object.defineProperty(HTMLElement.prototype, "outerHTML", {
            get: function () {
                return this.toString();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Trim element from right (in block) after seeing pattern in a TextNode.
         * @param  {RegExp} pattern pattern to find
         * @return {HTMLElement}    reference to current node
         */
        HTMLElement.prototype.trimRight = function (pattern) {
            for (var i = 0; i < this.childNodes.length; i++) {
                var childNode = this.childNodes[i];
                if (childNode.nodeType === type_3.default.ELEMENT_NODE) {
                    childNode.trimRight(pattern);
                }
                else {
                    var index = childNode.rawText.search(pattern);
                    if (index > -1) {
                        childNode.rawText = childNode.rawText.substr(0, index);
                        // trim all following nodes.
                        this.childNodes.length = i + 1;
                    }
                }
            }
            return this;
        };
        Object.defineProperty(HTMLElement.prototype, "structure", {
            /**
             * Get DOM structure
             * @return {string} strucutre
             */
            get: function () {
                var res = [];
                var indention = 0;
                function write(str) {
                    res.push('  '.repeat(indention) + str);
                }
                function dfs(node) {
                    var idStr = node.id ? "#".concat(node.id) : '';
                    var classStr = node.classList.length ? ".".concat(node.classList.value.join('.')) : ''; // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
                    write("".concat(node.rawTagName).concat(idStr).concat(classStr));
                    indention++;
                    node.childNodes.forEach(function (childNode) {
                        if (childNode.nodeType === type_3.default.ELEMENT_NODE) {
                            dfs(childNode);
                        }
                        else if (childNode.nodeType === type_3.default.TEXT_NODE) {
                            if (!childNode.isWhitespace) {
                                write('#text');
                            }
                        }
                    });
                    indention--;
                }
                dfs(this);
                return res.join('\n');
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Remove whitespaces in this sub tree.
         * @return {HTMLElement} pointer to this
         */
        HTMLElement.prototype.removeWhitespace = function () {
            var _this = this;
            var o = 0;
            this.childNodes.forEach(function (node) {
                if (node.nodeType === type_3.default.TEXT_NODE) {
                    if (node.isWhitespace) {
                        return;
                    }
                    node.rawText = node.trimmedRawText;
                }
                else if (node.nodeType === type_3.default.ELEMENT_NODE) {
                    node.removeWhitespace();
                }
                _this.childNodes[o++] = node;
            });
            this.childNodes.length = o;
            return this;
        };
        /**
         * Query CSS selector to find matching nodes.
         * @param  {string}         selector Simplified CSS selector
         * @return {HTMLElement[]}  matching elements
         */
        HTMLElement.prototype.querySelectorAll = function (selector) {
            return (0, css_select_1.selectAll)(selector, this, {
                xmlMode: true,
                adapter: matcher_1.default,
            });
        };
        /**
         * Query CSS Selector to find matching node.
         * @param  {string}         selector Simplified CSS selector
         * @return {(HTMLElement|null)}    matching node
         */
        HTMLElement.prototype.querySelector = function (selector) {
            return (0, css_select_1.selectOne)(selector, this, {
                xmlMode: true,
                adapter: matcher_1.default,
            });
        };
        /**
         * find elements by their tagName
         * @param {string} tagName the tagName of the elements to select
         */
        HTMLElement.prototype.getElementsByTagName = function (tagName) {
            var upperCasedTagName = tagName.toUpperCase();
            var re = [];
            var stack = [];
            var currentNodeReference = this;
            var index = 0;
            // index turns to undefined once the stack is empty and the first condition occurs
            // which happens once all relevant children are searched through
            while (index !== undefined) {
                var child = void 0;
                // make it work with sparse arrays
                do {
                    child = currentNodeReference.childNodes[index++];
                } while (index < currentNodeReference.childNodes.length && child === undefined);
                // if the child does not exist we move on with the last provided index (which belongs to the parentNode)
                if (child === undefined) {
                    currentNodeReference = currentNodeReference.parentNode;
                    index = stack.pop();
                    continue;
                }
                if (child.nodeType === type_3.default.ELEMENT_NODE) {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName#syntax
                    if (tagName === '*' || child.tagName === upperCasedTagName)
                        re.push(child);
                    // if children are existing push the current status to the stack and keep searching for elements in the level below
                    if (child.childNodes.length > 0) {
                        stack.push(index);
                        currentNodeReference = child;
                        index = 0;
                    }
                }
            }
            return re;
        };
        /**
         * find element by it's id
         * @param {string} id the id of the element to select
         */
        HTMLElement.prototype.getElementById = function (id) {
            var stack = [];
            var currentNodeReference = this;
            var index = 0;
            // index turns to undefined once the stack is empty and the first condition occurs
            // which happens once all relevant children are searched through
            while (index !== undefined) {
                var child = void 0;
                // make it work with sparse arrays
                do {
                    child = currentNodeReference.childNodes[index++];
                } while (index < currentNodeReference.childNodes.length && child === undefined);
                // if the child does not exist we move on with the last provided index (which belongs to the parentNode)
                if (child === undefined) {
                    currentNodeReference = currentNodeReference.parentNode;
                    index = stack.pop();
                    continue;
                }
                if (child.nodeType === type_3.default.ELEMENT_NODE) {
                    if (child.id === id) {
                        return child;
                    }
                    ;
                    // if children are existing push the current status to the stack and keep searching for elements in the level below
                    if (child.childNodes.length > 0) {
                        stack.push(index);
                        currentNodeReference = child;
                        index = 0;
                    }
                }
            }
            return null;
        };
        /**
         * traverses the Element and its parents (heading toward the document root) until it finds a node that matches the provided selector string. Will return itself or the matching ancestor. If no such element exists, it returns null.
         * @param selector a DOMString containing a selector list
         */
        HTMLElement.prototype.closest = function (selector) {
            var mapChild = new Map();
            var el = this;
            var old = null;
            function findOne(test, elems) {
                var elem = null;
                for (var i = 0, l = elems.length; i < l && !elem; i++) {
                    var el_1 = elems[i];
                    if (test(el_1)) {
                        elem = el_1;
                    }
                    else {
                        var child = mapChild.get(el_1);
                        if (child) {
                            elem = findOne(test, [child]);
                        }
                    }
                }
                return elem;
            }
            while (el) {
                mapChild.set(el, old);
                old = el;
                el = el.parentNode;
            }
            el = this;
            while (el) {
                var e = (0, css_select_1.selectOne)(selector, el, {
                    xmlMode: true,
                    adapter: __assign(__assign({}, matcher_1.default), { getChildren: function (node) {
                            var child = mapChild.get(node);
                            return child && [child];
                        }, getSiblings: function (node) {
                            return [node];
                        }, findOne: findOne, findAll: function () {
                            return [];
                        } }),
                });
                if (e) {
                    return e;
                }
                el = el.parentNode;
            }
            return null;
        };
        /**
         * Append a child node to childNodes
         * @param  {Node} node node to append
         * @return {Node}      node appended
         */
        HTMLElement.prototype.appendChild = function (node) {
            // remove the node from it's parent
            node.remove();
            this.childNodes.push(node);
            node.parentNode = this;
            return node;
        };
        Object.defineProperty(HTMLElement.prototype, "firstChild", {
            /**
             * Get first child node
             * @return {Node} first child node
             */
            get: function () {
                return this.childNodes[0];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "lastChild", {
            /**
             * Get last child node
             * @return {Node} last child node
             */
            get: function () {
                return (0, back_1.default)(this.childNodes);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "attrs", {
            /**
             * Get attributes
             * @access private
             * @return {Object} parsed and unescaped attributes
             */
            get: function () {
                if (this._attrs) {
                    return this._attrs;
                }
                this._attrs = {};
                var attrs = this.rawAttributes;
                for (var key in attrs) {
                    var val = attrs[key] || '';
                    this._attrs[key.toLowerCase()] = decode(val);
                }
                return this._attrs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "attributes", {
            get: function () {
                var ret_attrs = {};
                var attrs = this.rawAttributes;
                for (var key in attrs) {
                    var val = attrs[key] || '';
                    ret_attrs[key] = decode(val);
                }
                return ret_attrs;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "rawAttributes", {
            /**
             * Get escaped (as-is) attributes
             * @return {Object} parsed attributes
             */
            get: function () {
                if (this._rawAttrs) {
                    return this._rawAttrs;
                }
                var attrs = {};
                if (this.rawAttrs) {
                    var re = /([a-zA-Z()[\]#@][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g;
                    var match = void 0;
                    while ((match = re.exec(this.rawAttrs))) {
                        var key = match[1];
                        var val = match[2] || null;
                        if (val && (val[0] === "'" || val[0] === "\""))
                            val = val.slice(1, val.length - 1);
                        attrs[key] = val;
                    }
                }
                this._rawAttrs = attrs;
                return attrs;
            },
            enumerable: false,
            configurable: true
        });
        HTMLElement.prototype.removeAttribute = function (key) {
            var attrs = this.rawAttributes;
            delete attrs[key];
            // Update this.attribute
            if (this._attrs) {
                delete this._attrs[key];
            }
            // Update rawString
            this.rawAttrs = Object.keys(attrs)
                .map(function (name) {
                var val = JSON.stringify(attrs[name]);
                if (val === undefined || val === 'null') {
                    return name;
                }
                return "".concat(name, "=").concat(val);
            })
                .join(' ');
            // Update this.id
            if (key === 'id') {
                this.id = '';
            }
            return this;
        };
        HTMLElement.prototype.hasAttribute = function (key) {
            return key.toLowerCase() in this.attrs;
        };
        /**
         * Get an attribute
         * @return {string} value of the attribute
         */
        HTMLElement.prototype.getAttribute = function (key) {
            return this.attrs[key.toLowerCase()];
        };
        /**
         * Set an attribute value to the HTMLElement
         * @param {string} key The attribute name
         * @param {string} value The value to set, or null / undefined to remove an attribute
         */
        HTMLElement.prototype.setAttribute = function (key, value) {
            var _this = this;
            if (arguments.length < 2) {
                throw new Error("Failed to execute 'setAttribute' on 'Element'");
            }
            var k2 = key.toLowerCase();
            var attrs = this.rawAttributes;
            for (var k in attrs) {
                if (k.toLowerCase() === k2) {
                    key = k;
                    break;
                }
            }
            attrs[key] = String(value);
            // update this.attrs
            if (this._attrs) {
                this._attrs[k2] = decode(attrs[key]);
            }
            // Update rawString
            this.rawAttrs = Object.keys(attrs)
                .map(function (name) {
                var val = _this.quoteAttribute(attrs[name]);
                if (val === 'null' || val === '""')
                    return name;
                return "".concat(name, "=").concat(val);
            })
                .join(' ');
            // Update this.id
            if (key === 'id') {
                this.id = value;
            }
        };
        /**
         * Replace all the attributes of the HTMLElement by the provided attributes
         * @param {Attributes} attributes the new attribute set
         */
        HTMLElement.prototype.setAttributes = function (attributes) {
            var _this = this;
            // Invalidate current this.attributes
            if (this._attrs) {
                delete this._attrs;
            }
            // Invalidate current this.rawAttributes
            if (this._rawAttrs) {
                delete this._rawAttrs;
            }
            // Update rawString
            this.rawAttrs = Object.keys(attributes)
                .map(function (name) {
                var val = attributes[name];
                if (val === 'null' || val === '""')
                    return name;
                return "".concat(name, "=").concat(_this.quoteAttribute(String(val)));
            })
                .join(' ');
            return this;
        };
        HTMLElement.prototype.insertAdjacentHTML = function (where, html) {
            var _a, _b, _c;
            var _this = this;
            if (arguments.length < 2) {
                throw new Error('2 arguments required');
            }
            var p = parse(html);
            if (where === 'afterend') {
                var idx = this.parentNode.childNodes.findIndex(function (child) {
                    return child === _this;
                });
                resetParent(p.childNodes, this.parentNode);
                (_a = this.parentNode.childNodes).splice.apply(_a, __spreadArray([idx + 1, 0], p.childNodes, false));
            }
            else if (where === 'afterbegin') {
                resetParent(p.childNodes, this);
                (_b = this.childNodes).unshift.apply(_b, p.childNodes);
            }
            else if (where === 'beforeend') {
                p.childNodes.forEach(function (n) {
                    _this.appendChild(n);
                });
            }
            else if (where === 'beforebegin') {
                var idx = this.parentNode.childNodes.findIndex(function (child) {
                    return child === _this;
                });
                resetParent(p.childNodes, this.parentNode);
                (_c = this.parentNode.childNodes).splice.apply(_c, __spreadArray([idx, 0], p.childNodes, false));
            }
            else {
                throw new Error("The value provided ('".concat(where, "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"));
            }
            return this;
            // if (!where || html === undefined || html === null) {
            // 	return;
            // }
        };
        Object.defineProperty(HTMLElement.prototype, "nextSibling", {
            get: function () {
                if (this.parentNode) {
                    var children = this.parentNode.childNodes;
                    var i = 0;
                    while (i < children.length) {
                        var child = children[i++];
                        if (this === child)
                            return children[i] || null;
                    }
                    return null;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "nextElementSibling", {
            get: function () {
                if (this.parentNode) {
                    var children = this.parentNode.childNodes;
                    var i = 0;
                    var find = false;
                    while (i < children.length) {
                        var child = children[i++];
                        if (find) {
                            if (child instanceof HTMLElement) {
                                return child || null;
                            }
                        }
                        else if (this === child) {
                            find = true;
                        }
                    }
                    return null;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "previousSibling", {
            get: function () {
                if (this.parentNode) {
                    var children = this.parentNode.childNodes;
                    var i = children.length;
                    while (i > 0) {
                        var child = children[--i];
                        if (this === child)
                            return children[i - 1] || null;
                    }
                    return null;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "previousElementSibling", {
            get: function () {
                if (this.parentNode) {
                    var children = this.parentNode.childNodes;
                    var i = children.length;
                    var find = false;
                    while (i > 0) {
                        var child = children[--i];
                        if (find) {
                            if (child instanceof HTMLElement) {
                                return child || null;
                            }
                        }
                        else if (this === child) {
                            find = true;
                        }
                    }
                    return null;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HTMLElement.prototype, "classNames", {
            get: function () {
                return this.classList.toString();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Clone this Node
         */
        HTMLElement.prototype.clone = function () {
            return parse(this.toString()).firstChild;
        };
        return HTMLElement;
    }(node_2.default));
    exports.default = HTMLElement;
    // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
    var kMarkupPattern = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g;
    var kAttributePattern = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi;
    var kSelfClosingElements = {
        area: true,
        AREA: true,
        base: true,
        BASE: true,
        br: true,
        BR: true,
        col: true,
        COL: true,
        hr: true,
        HR: true,
        img: true,
        IMG: true,
        input: true,
        INPUT: true,
        link: true,
        LINK: true,
        meta: true,
        META: true,
        source: true,
        SOURCE: true,
        embed: true,
        EMBED: true,
        param: true,
        PARAM: true,
        track: true,
        TRACK: true,
        wbr: true,
        WBR: true,
    };
    var kElementsClosedByOpening = {
        li: { li: true, LI: true },
        LI: { li: true, LI: true },
        p: { p: true, div: true, P: true, DIV: true },
        P: { p: true, div: true, P: true, DIV: true },
        b: { div: true, DIV: true },
        B: { div: true, DIV: true },
        td: { td: true, th: true, TD: true, TH: true },
        TD: { td: true, th: true, TD: true, TH: true },
        th: { td: true, th: true, TD: true, TH: true },
        TH: { td: true, th: true, TD: true, TH: true },
        h1: { h1: true, H1: true },
        H1: { h1: true, H1: true },
        h2: { h2: true, H2: true },
        H2: { h2: true, H2: true },
        h3: { h3: true, H3: true },
        H3: { h3: true, H3: true },
        h4: { h4: true, H4: true },
        H4: { h4: true, H4: true },
        h5: { h5: true, H5: true },
        H5: { h5: true, H5: true },
        h6: { h6: true, H6: true },
        H6: { h6: true, H6: true },
    };
    var kElementsClosedByClosing = {
        li: { ul: true, ol: true, UL: true, OL: true },
        LI: { ul: true, ol: true, UL: true, OL: true },
        a: { div: true, DIV: true },
        A: { div: true, DIV: true },
        b: { div: true, DIV: true },
        B: { div: true, DIV: true },
        i: { div: true, DIV: true },
        I: { div: true, DIV: true },
        p: { div: true, DIV: true },
        P: { div: true, DIV: true },
        td: { tr: true, table: true, TR: true, TABLE: true },
        TD: { tr: true, table: true, TR: true, TABLE: true },
        th: { tr: true, table: true, TR: true, TABLE: true },
        TH: { tr: true, table: true, TR: true, TABLE: true },
    };
    var frameflag = 'documentfragmentcontainer';
    /**
     * Parses HTML and returns a root element
     * Parse a chuck of HTML source.
     * @param  {string} data      html
     * @return {HTMLElement}      root element
     */
    function base_parse(data, options) {
        var _a, _b;
        if (options === void 0) { options = { lowerCaseTagName: false, comment: false }; }
        var voidTag = new void_tag_1.default((_a = options === null || options === void 0 ? void 0 : options.voidTag) === null || _a === void 0 ? void 0 : _a.closingSlash, (_b = options === null || options === void 0 ? void 0 : options.voidTag) === null || _b === void 0 ? void 0 : _b.tags);
        var elements = options.blockTextElements || {
            script: true,
            noscript: true,
            style: true,
            pre: true,
        };
        var element_names = Object.keys(elements);
        var kBlockTextElements = element_names.map(function (it) { return new RegExp("^".concat(it, "$"), 'i'); });
        var kIgnoreElements = element_names.filter(function (it) { return elements[it]; }).map(function (it) { return new RegExp("^".concat(it, "$"), 'i'); });
        function element_should_be_ignore(tag) {
            return kIgnoreElements.some(function (it) { return it.test(tag); });
        }
        function is_block_text_element(tag) {
            return kBlockTextElements.some(function (it) { return it.test(tag); });
        }
        var createRange = function (startPos, endPos) { return [startPos - frameFlagOffset, endPos - frameFlagOffset]; };
        var root = new HTMLElement(null, {}, '', null, [0, data.length], voidTag);
        var currentParent = root;
        var stack = [root];
        var lastTextPos = -1;
        var noNestedTagIndex = undefined;
        var match;
        // https://github.com/taoqf/node-html-parser/issues/38
        data = "<".concat(frameflag, ">").concat(data, "</").concat(frameflag, ">");
        var lowerCaseTagName = options.lowerCaseTagName;
        var dataEndPos = data.length - (frameflag.length + 2);
        var frameFlagOffset = frameflag.length + 2;
        while ((match = kMarkupPattern.exec(data))) {
            // Note: Object destructuring here consistently tests as higher performance than array destructuring
            // eslint-disable-next-line prefer-const
            var matchText = match[0], leadingSlash = match[1], tagName = match[2], attributes = match[3], closingSlash = match[4];
            var matchLength = matchText.length;
            var tagStartPos = kMarkupPattern.lastIndex - matchLength;
            var tagEndPos = kMarkupPattern.lastIndex;
            // Add TextNode if content
            if (lastTextPos > -1) {
                if (lastTextPos + matchLength < tagEndPos) {
                    var text = data.substring(lastTextPos, tagStartPos);
                    currentParent.appendChild(new text_1.default(text, currentParent, createRange(lastTextPos, tagStartPos)));
                }
            }
            lastTextPos = kMarkupPattern.lastIndex;
            // https://github.com/taoqf/node-html-parser/issues/38
            // Skip frameflag node
            if (tagName === frameflag)
                continue;
            // Handle comments
            if (matchText[1] === '!') {
                if (options.comment) {
                    // Only keep what is in between <!-- and -->
                    var text = data.substring(tagStartPos + 4, tagEndPos - 3);
                    currentParent.appendChild(new comment_1.default(text, currentParent, createRange(tagStartPos, tagEndPos)));
                }
                continue;
            }
            /* -- Handle tag matching -- */
            // Fix tag casing if necessary
            if (lowerCaseTagName)
                tagName = tagName.toLowerCase();
            // Handle opening tags (ie. <this> not </that>)
            if (!leadingSlash) {
                /* Populate attributes */
                var attrs = {};
                for (var attMatch = void 0; (attMatch = kAttributePattern.exec(attributes));) {
                    var key = attMatch[1], val = attMatch[2];
                    var isQuoted = val[0] === "'" || val[0] === "\"";
                    attrs[key.toLowerCase()] = isQuoted ? val.slice(1, val.length - 1) : val;
                }
                var parentTagName = currentParent.rawTagName;
                if (!closingSlash && kElementsClosedByOpening[parentTagName]) {
                    if (kElementsClosedByOpening[parentTagName][tagName]) {
                        stack.pop();
                        currentParent = (0, back_1.default)(stack);
                    }
                }
                // Prevent nested A tags by terminating the last A and starting a new one : see issue #144
                if (tagName === 'a' || tagName === 'A') {
                    if (noNestedTagIndex !== undefined) {
                        stack.splice(noNestedTagIndex);
                        currentParent = (0, back_1.default)(stack);
                    }
                    noNestedTagIndex = stack.length;
                }
                var tagEndPos_1 = kMarkupPattern.lastIndex;
                var tagStartPos_1 = tagEndPos_1 - matchLength;
                currentParent = currentParent.appendChild(
                // Initialize range (end position updated later for closed tags)
                new HTMLElement(tagName, attrs, attributes.slice(1), null, createRange(tagStartPos_1, tagEndPos_1), voidTag));
                stack.push(currentParent);
                if (is_block_text_element(tagName)) {
                    // Find closing tag
                    var closeMarkup = "</".concat(tagName, ">");
                    var closeIndex = lowerCaseTagName
                        ? data.toLocaleLowerCase().indexOf(closeMarkup, kMarkupPattern.lastIndex)
                        : data.indexOf(closeMarkup, kMarkupPattern.lastIndex);
                    var textEndPos = closeIndex === -1 ? dataEndPos : closeIndex;
                    if (element_should_be_ignore(tagName)) {
                        var text = data.substring(tagEndPos_1, textEndPos);
                        if (text.length > 0 && /\S/.test(text)) {
                            currentParent.appendChild(new text_1.default(text, currentParent, createRange(tagEndPos_1, textEndPos)));
                        }
                    }
                    if (closeIndex === -1) {
                        lastTextPos = kMarkupPattern.lastIndex = data.length + 1;
                    }
                    else {
                        lastTextPos = kMarkupPattern.lastIndex = closeIndex + closeMarkup.length;
                        // Cause to be treated as self-closing, because no close found
                        leadingSlash = '/';
                    }
                }
            }
            // Handle closing tags or self-closed elements (ie </tag> or <br>)
            if (leadingSlash || closingSlash || kSelfClosingElements[tagName]) {
                while (true) {
                    if (tagName === 'a' || tagName === 'A')
                        noNestedTagIndex = undefined;
                    if (currentParent.rawTagName === tagName) {
                        // Update range end for closed tag
                        currentParent.range[1] = createRange(-1, Math.max(lastTextPos, tagEndPos))[1];
                        stack.pop();
                        currentParent = (0, back_1.default)(stack);
                        break;
                    }
                    else {
                        var parentTagName = currentParent.tagName;
                        // Trying to close current tag, and move on
                        if (kElementsClosedByClosing[parentTagName]) {
                            if (kElementsClosedByClosing[parentTagName][tagName]) {
                                stack.pop();
                                currentParent = (0, back_1.default)(stack);
                                continue;
                            }
                        }
                        // Use aggressive strategy to handle unmatching markups.
                        break;
                    }
                }
            }
        }
        return stack;
    }
    exports.base_parse = base_parse;
    /**
     * Parses HTML and returns a root element
     * Parse a chuck of HTML source.
     */
    function parse(data, options) {
        if (options === void 0) { options = { lowerCaseTagName: false, comment: false }; }
        var stack = base_parse(data, options);
        var root = stack[0];
        var _loop_1 = function () {
            // Handle each error elements.
            var last = stack.pop();
            var oneBefore = (0, back_1.default)(stack);
            if (last.parentNode && last.parentNode.parentNode) {
                if (last.parentNode === oneBefore && last.tagName === oneBefore.tagName) {
                    // Pair error case <h3> <h3> handle : Fixes to <h3> </h3>
                    // this is wrong, becouse this will put the H3 outside the current right position which should be inside the current Html Element, see issue 152 for more info
                    if (options.parseNoneClosedTags !== true) {
                        oneBefore.removeChild(last);
                        last.childNodes.forEach(function (child) {
                            oneBefore.parentNode.appendChild(child);
                        });
                        stack.pop();
                    }
                }
                else {
                    // Single error  <div> <h3> </div> handle: Just removes <h3>
                    // Why remove? this is already a HtmlElement and the missing <H3> is already added in this case. see issue 152 for more info
                    // eslint-disable-next-line no-lonely-if
                    if (options.parseNoneClosedTags !== true) {
                        oneBefore.removeChild(last);
                        last.childNodes.forEach(function (child) {
                            oneBefore.appendChild(child);
                        });
                    }
                }
            }
            else {
                // If it's final element just skip.
            }
        };
        while (stack.length > 1) {
            _loop_1();
        }
        // response.childNodes.forEach((node) => {
        // 	if (node instanceof HTMLElement) {
        // 		node.parentNode = null;
        // 	}
        // });
        return root;
    }
    exports.parse = parse;
    function resetParent(nodes, parent) {
        return nodes.map(function (node) {
            node.parentNode = parent;
            return node;
        });
    }
});
define("nodes/comment", ["require", "exports", "nodes/node", "nodes/type"], function (require, exports, node_3, type_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_3 = __importDefault(node_3);
    type_4 = __importDefault(type_4);
    var CommentNode = /** @class */ (function (_super) {
        __extends(CommentNode, _super);
        function CommentNode(rawText, parentNode, range) {
            var _this = _super.call(this, parentNode, range) || this;
            _this.rawText = rawText;
            /**
             * Node Type declaration.
             * @type {Number}
             */
            _this.nodeType = type_4.default.COMMENT_NODE;
            return _this;
        }
        CommentNode.prototype.clone = function () {
            return new CommentNode(this.rawText, null);
        };
        Object.defineProperty(CommentNode.prototype, "text", {
            /**
             * Get unescaped text value of current node and its children.
             * @return {string} text content
             */
            get: function () {
                return this.rawText;
            },
            enumerable: false,
            configurable: true
        });
        CommentNode.prototype.toString = function () {
            return "<!--".concat(this.rawText, "-->");
        };
        return CommentNode;
    }(node_3.default));
    exports.default = CommentNode;
});
define("parse", ["require", "exports", "nodes/html"], function (require, exports, html_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = void 0;
    Object.defineProperty(exports, "default", { enumerable: true, get: function () { return html_1.parse; } });
});
define("valid", ["require", "exports", "nodes/html"], function (require, exports, html_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Parses HTML and returns a root element
     * Parse a chuck of HTML source.
     */
    function valid(data, options) {
        if (options === void 0) { options = { lowerCaseTagName: false, comment: false }; }
        var stack = (0, html_2.base_parse)(data, options);
        return Boolean(stack.length === 1);
    }
    exports.default = valid;
});
define("index", ["require", "exports", "nodes/comment", "nodes/html", "nodes/node", "nodes/text", "nodes/type", "parse", "valid"], function (require, exports, comment_2, html_3, node_4, text_2, type_5, parse_1, valid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NodeType = exports.TextNode = exports.Node = exports.valid = exports.CommentNode = exports.HTMLElement = exports.parse = void 0;
    comment_2 = __importDefault(comment_2);
    html_3 = __importDefault(html_3);
    node_4 = __importDefault(node_4);
    text_2 = __importDefault(text_2);
    type_5 = __importDefault(type_5);
    parse_1 = __importDefault(parse_1);
    valid_1 = __importDefault(valid_1);
    exports.CommentNode = comment_2.default;
    exports.HTMLElement = html_3.default;
    exports.Node = node_4.default;
    exports.TextNode = text_2.default;
    exports.NodeType = type_5.default;
    exports.valid = valid_1.default;
    function parse(data, options) {
        if (options === void 0) { options = {
            lowerCaseTagName: false,
            comment: false
        }; }
        return (0, parse_1.default)(data, options);
    }
    exports.default = parse;
    exports.parse = parse;
    parse.parse = parse_1.default;
    parse.HTMLElement = html_3.default;
    parse.CommentNode = comment_2.default;
    parse.valid = valid_1.default;
    parse.Node = node_4.default;
    parse.TextNode = text_2.default;
    parse.NodeType = type_5.default;
});
