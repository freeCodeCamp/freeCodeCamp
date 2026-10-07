import styles from 'tinyrainbow';

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

function getKeysOfEnumerableProperties(object, compareKeys) {
	const rawKeys = Object.keys(object);
	const keys = compareKeys === null ? rawKeys : rawKeys.sort(compareKeys);
	if (Object.getOwnPropertySymbols) {
		for (const symbol of Object.getOwnPropertySymbols(object)) {
			if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
				keys.push(symbol);
			}
		}
	}
	return keys;
}
/**
* Return entries (for example, of a map)
* with spacing, indentation, and comma
* without surrounding punctuation (for example, braces)
*/
function printIteratorEntries(iterator, config, indentation, depth, refs, printer, separator = ": ") {
	let result = "";
	let width = 0;
	let current = iterator.next();
	if (!current.done) {
		result += config.spacingOuter;
		const indentationNext = indentation + config.indent;
		while (!current.done) {
			result += indentationNext;
			if (width++ === config.maxWidth) {
				result += "…";
				break;
			}
			const name = printer(current.value[0], config, indentationNext, depth, refs);
			const value = printer(current.value[1], config, indentationNext, depth, refs);
			result += name + separator + value;
			current = iterator.next();
			if (!current.done) {
				result += `,${config.spacingInner}`;
			} else if (!config.min) {
				result += ",";
			}
		}
		result += config.spacingOuter + indentation;
	}
	return result;
}
/**
* Return values (for example, of a set)
* with spacing, indentation, and comma
* without surrounding punctuation (braces or brackets)
*/
function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
	let result = "";
	let width = 0;
	let current = iterator.next();
	if (!current.done) {
		result += config.spacingOuter;
		const indentationNext = indentation + config.indent;
		while (!current.done) {
			result += indentationNext;
			if (width++ === config.maxWidth) {
				result += "…";
				break;
			}
			result += printer(current.value, config, indentationNext, depth, refs);
			current = iterator.next();
			if (!current.done) {
				result += `,${config.spacingInner}`;
			} else if (!config.min) {
				result += ",";
			}
		}
		result += config.spacingOuter + indentation;
	}
	return result;
}
/**
* Return items (for example, of an array)
* with spacing, indentation, and comma
* without surrounding punctuation (for example, brackets)
*/
function printListItems(list, config, indentation, depth, refs, printer) {
	let result = "";
	list = list instanceof ArrayBuffer ? new DataView(list) : list;
	const isDataView = (l) => l instanceof DataView;
	const length = isDataView(list) ? list.byteLength : list.length;
	if (length > 0) {
		result += config.spacingOuter;
		const indentationNext = indentation + config.indent;
		for (let i = 0; i < length; i++) {
			result += indentationNext;
			if (i === config.maxWidth) {
				result += "…";
				break;
			}
			if (isDataView(list) || i in list) {
				result += printer(isDataView(list) ? list.getInt8(i) : list[i], config, indentationNext, depth, refs);
			}
			if (i < length - 1) {
				result += `,${config.spacingInner}`;
			} else if (!config.min) {
				result += ",";
			}
		}
		result += config.spacingOuter + indentation;
	}
	return result;
}
/**
* Return properties of an object
* with spacing, indentation, and comma
* without surrounding punctuation (for example, braces)
*/
function printObjectProperties(val, config, indentation, depth, refs, printer) {
	let result = "";
	const keys = getKeysOfEnumerableProperties(val, config.compareKeys);
	if (keys.length > 0) {
		result += config.spacingOuter;
		const indentationNext = indentation + config.indent;
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			const name = printer(key, config, indentationNext, depth, refs);
			const value = printer(val[key], config, indentationNext, depth, refs);
			result += `${indentationNext + name}: ${value}`;
			if (i < keys.length - 1) {
				result += `,${config.spacingInner}`;
			} else if (!config.min) {
				result += ",";
			}
		}
		result += config.spacingOuter + indentation;
	}
	return result;
}

const asymmetricMatcher = typeof Symbol === "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621;
const SPACE$2 = " ";
const serialize$5 = (val, config, indentation, depth, refs, printer) => {
	const stringedValue = val.toString();
	if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
		if (++depth > config.maxDepth) {
			return `[${stringedValue}]`;
		}
		return `${stringedValue + SPACE$2}[${printListItems(val.sample, config, indentation, depth, refs, printer)}]`;
	}
	if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
		if (++depth > config.maxDepth) {
			return `[${stringedValue}]`;
		}
		return `${stringedValue + SPACE$2}{${printObjectProperties(val.sample, config, indentation, depth, refs, printer)}}`;
	}
	if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
		return stringedValue + SPACE$2 + printer(val.sample, config, indentation, depth, refs);
	}
	if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
		return stringedValue + SPACE$2 + printer(val.sample, config, indentation, depth, refs);
	}
	if (typeof val.toAsymmetricMatcher !== "function") {
		throw new TypeError(`Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`);
	}
	return val.toAsymmetricMatcher();
};
const test$5 = (val) => val && val.$$typeof === asymmetricMatcher;
const plugin$5 = {
	serialize: serialize$5,
	test: test$5
};

const SPACE$1 = " ";
const OBJECT_NAMES = new Set(["DOMStringMap", "NamedNodeMap"]);
const ARRAY_REGEXP = /^(?:HTML\w*Collection|NodeList)$/;
function testName(name) {
	return OBJECT_NAMES.has(name) || ARRAY_REGEXP.test(name);
}
const test$4 = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
function isNamedNodeMap(collection) {
	return collection.constructor.name === "NamedNodeMap";
}
const serialize$4 = (collection, config, indentation, depth, refs, printer) => {
	const name = collection.constructor.name;
	if (++depth > config.maxDepth) {
		return `[${name}]`;
	}
	return (config.min ? "" : name + SPACE$1) + (OBJECT_NAMES.has(name) ? `{${printObjectProperties(isNamedNodeMap(collection) ? [...collection].reduce((props, attribute) => {
		props[attribute.name] = attribute.value;
		return props;
	}, {}) : { ...collection }, config, indentation, depth, refs, printer)}}` : `[${printListItems([...collection], config, indentation, depth, refs, printer)}]`);
};
const plugin$4 = {
	serialize: serialize$4,
	test: test$4
};

/**
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
function escapeHTML(str) {
	return str.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

// Return empty string if keys is empty.
function printProps(keys, props, config, indentation, depth, refs, printer) {
	const indentationNext = indentation + config.indent;
	const colors = config.colors;
	return keys.map((key) => {
		const value = props[key];
		let printed = printer(value, config, indentationNext, depth, refs);
		if (typeof value !== "string") {
			if (printed.includes("\n")) {
				printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
			}
			printed = `{${printed}}`;
		}
		return `${config.spacingInner + indentation + colors.prop.open + key + colors.prop.close}=${colors.value.open}${printed}${colors.value.close}`;
	}).join("");
}
// Return empty string if children is empty.
function printChildren(children, config, indentation, depth, refs, printer) {
	return children.map((child) => config.spacingOuter + indentation + (typeof child === "string" ? printText(child, config) : printer(child, config, indentation, depth, refs))).join("");
}
function printText(text, config) {
	const contentColor = config.colors.content;
	return contentColor.open + escapeHTML(text) + contentColor.close;
}
function printComment(comment, config) {
	const commentColor = config.colors.comment;
	return `${commentColor.open}<!--${escapeHTML(comment)}-->${commentColor.close}`;
}
// Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.
function printElement(type, printedProps, printedChildren, config, indentation) {
	const tagColor = config.colors.tag;
	return `${tagColor.open}<${type}${printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config.spacingOuter}${indentation}${tagColor.open}</${type}` : `${printedProps && !config.min ? "" : " "}/`}>${tagColor.close}`;
}
function printElementAsLeaf(type, config) {
	const tagColor = config.colors.tag;
	return `${tagColor.open}<${type}${tagColor.close} …${tagColor.open} />${tagColor.close}`;
}

const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const FRAGMENT_NODE = 11;
const ELEMENT_REGEXP = /^(?:(?:HTML|SVG)\w*)?Element$/;
function testHasAttribute(val) {
	try {
		return typeof val.hasAttribute === "function" && val.hasAttribute("is");
	} catch {
		return false;
	}
}
function testNode(val) {
	const constructorName = val.constructor.name;
	const { nodeType, tagName } = val;
	const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
	return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
}
const test$3 = (val) => {
	var _val$constructor;
	return (val === null || val === void 0 || (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
};
function nodeIsText(node) {
	return node.nodeType === TEXT_NODE;
}
function nodeIsComment(node) {
	return node.nodeType === COMMENT_NODE;
}
function nodeIsFragment(node) {
	return node.nodeType === FRAGMENT_NODE;
}
const serialize$3 = (node, config, indentation, depth, refs, printer) => {
	if (nodeIsText(node)) {
		return printText(node.data, config);
	}
	if (nodeIsComment(node)) {
		return printComment(node.data, config);
	}
	const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
	if (++depth > config.maxDepth) {
		return printElementAsLeaf(type, config);
	}
	return printElement(type, printProps(nodeIsFragment(node) ? [] : Array.from(node.attributes, (attr) => attr.name).sort(), nodeIsFragment(node) ? {} : [...node.attributes].reduce((props, attribute) => {
		props[attribute.name] = attribute.value;
		return props;
	}, {}), config, indentation + config.indent, depth, refs, printer), printChildren(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
};
const plugin$3 = {
	serialize: serialize$3,
	test: test$3
};

// SENTINEL constants are from https://github.com/facebook/immutable-js
const IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
const IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
const IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
const IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
const IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
const IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
const IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
const IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
const IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
const getImmutableName = (name) => `Immutable.${name}`;
const printAsLeaf = (name) => `[${name}]`;
const SPACE = " ";
const LAZY = "…";
function printImmutableEntries(val, config, indentation, depth, refs, printer, type) {
	return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}{${printIteratorEntries(val.entries(), config, indentation, depth, refs, printer)}}`;
}
// Record has an entries method because it is a collection in immutable v3.
// Return an iterator for Immutable Record from version v3 or v4.
function getRecordEntries(val) {
	let i = 0;
	return { next() {
		if (i < val._keys.length) {
			const key = val._keys[i++];
			return {
				done: false,
				value: [key, val.get(key)]
			};
		}
		return {
			done: true,
			value: undefined
		};
	} };
}
function printImmutableRecord(val, config, indentation, depth, refs, printer) {
	// _name property is defined only for an Immutable Record instance
	// which was constructed with a second optional descriptive name arg
	const name = getImmutableName(val._name || "Record");
	return ++depth > config.maxDepth ? printAsLeaf(name) : `${name + SPACE}{${printIteratorEntries(getRecordEntries(val), config, indentation, depth, refs, printer)}}`;
}
function printImmutableSeq(val, config, indentation, depth, refs, printer) {
	const name = getImmutableName("Seq");
	if (++depth > config.maxDepth) {
		return printAsLeaf(name);
	}
	if (val[IS_KEYED_SENTINEL]) {
		return `${name + SPACE}{${val._iter || val._object ? printIteratorEntries(val.entries(), config, indentation, depth, refs, printer) : LAZY}}`;
	}
	return `${name + SPACE}[${val._iter || val._array || val._collection || val._iterable ? printIteratorValues(val.values(), config, indentation, depth, refs, printer) : LAZY}]`;
}
function printImmutableValues(val, config, indentation, depth, refs, printer, type) {
	return ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}[${printIteratorValues(val.values(), config, indentation, depth, refs, printer)}]`;
}
const serialize$2 = (val, config, indentation, depth, refs, printer) => {
	if (val[IS_MAP_SENTINEL]) {
		return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map");
	}
	if (val[IS_LIST_SENTINEL]) {
		return printImmutableValues(val, config, indentation, depth, refs, printer, "List");
	}
	if (val[IS_SET_SENTINEL]) {
		return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set");
	}
	if (val[IS_STACK_SENTINEL]) {
		return printImmutableValues(val, config, indentation, depth, refs, printer, "Stack");
	}
	if (val[IS_SEQ_SENTINEL]) {
		return printImmutableSeq(val, config, indentation, depth, refs, printer);
	}
	// For compatibility with immutable v3 and v4, let record be the default.
	return printImmutableRecord(val, config, indentation, depth, refs, printer);
};
// Explicitly comparing sentinel properties to true avoids false positive
// when mock identity-obj-proxy returns the key as the value for any key.
const test$2 = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
const plugin$2 = {
	serialize: serialize$2,
	test: test$2
};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var reactIs$1 = {exports: {}};

var reactIs_production = {};

/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production;

function requireReactIs_production () {
	if (hasRequiredReactIs_production) return reactIs_production;
	hasRequiredReactIs_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	  REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function typeOf(object) {
	  if ("object" === typeof object && null !== object) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        switch (((object = object.type), object)) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	          case REACT_VIEW_TRANSITION_TYPE:
	            return object;
	          default:
	            switch (((object = object && object.$$typeof), object)) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	                return object;
	              case REACT_CONSUMER_TYPE:
	                return object;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }
	}
	reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
	reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
	reactIs_production.Element = REACT_ELEMENT_TYPE;
	reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
	reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
	reactIs_production.Lazy = REACT_LAZY_TYPE;
	reactIs_production.Memo = REACT_MEMO_TYPE;
	reactIs_production.Portal = REACT_PORTAL_TYPE;
	reactIs_production.Profiler = REACT_PROFILER_TYPE;
	reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
	reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
	reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	reactIs_production.isContextConsumer = function (object) {
	  return typeOf(object) === REACT_CONSUMER_TYPE;
	};
	reactIs_production.isContextProvider = function (object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	};
	reactIs_production.isElement = function (object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	};
	reactIs_production.isForwardRef = function (object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	};
	reactIs_production.isFragment = function (object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	};
	reactIs_production.isLazy = function (object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	};
	reactIs_production.isMemo = function (object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	};
	reactIs_production.isPortal = function (object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	};
	reactIs_production.isProfiler = function (object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	};
	reactIs_production.isStrictMode = function (object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	};
	reactIs_production.isSuspense = function (object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	};
	reactIs_production.isSuspenseList = function (object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	};
	reactIs_production.isValidElementType = function (type) {
	  return "string" === typeof type ||
	    "function" === typeof type ||
	    type === REACT_FRAGMENT_TYPE ||
	    type === REACT_PROFILER_TYPE ||
	    type === REACT_STRICT_MODE_TYPE ||
	    type === REACT_SUSPENSE_TYPE ||
	    type === REACT_SUSPENSE_LIST_TYPE ||
	    ("object" === typeof type &&
	      null !== type &&
	      (type.$$typeof === REACT_LAZY_TYPE ||
	        type.$$typeof === REACT_MEMO_TYPE ||
	        type.$$typeof === REACT_CONTEXT_TYPE ||
	        type.$$typeof === REACT_CONSUMER_TYPE ||
	        type.$$typeof === REACT_FORWARD_REF_TYPE ||
	        type.$$typeof === REACT_CLIENT_REFERENCE ||
	        void 0 !== type.getModuleId))
	    ? true
	    : false;
	};
	reactIs_production.typeOf = typeOf;
	return reactIs_production;
}

var reactIs_development$1 = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function typeOf(object) {
	      if ("object" === typeof object && null !== object) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            switch (((object = object.type), object)) {
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	              case REACT_SUSPENSE_LIST_TYPE:
	              case REACT_VIEW_TRANSITION_TYPE:
	                return object;
	              default:
	                switch (((object = object && object.$$typeof), object)) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                    return object;
	                  case REACT_CONSUMER_TYPE:
	                    return object;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	    }
	    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	    reactIs_development$1.ContextConsumer = REACT_CONSUMER_TYPE;
	    reactIs_development$1.ContextProvider = REACT_CONTEXT_TYPE;
	    reactIs_development$1.Element = REACT_ELEMENT_TYPE;
	    reactIs_development$1.ForwardRef = REACT_FORWARD_REF_TYPE;
	    reactIs_development$1.Fragment = REACT_FRAGMENT_TYPE;
	    reactIs_development$1.Lazy = REACT_LAZY_TYPE;
	    reactIs_development$1.Memo = REACT_MEMO_TYPE;
	    reactIs_development$1.Portal = REACT_PORTAL_TYPE;
	    reactIs_development$1.Profiler = REACT_PROFILER_TYPE;
	    reactIs_development$1.StrictMode = REACT_STRICT_MODE_TYPE;
	    reactIs_development$1.Suspense = REACT_SUSPENSE_TYPE;
	    reactIs_development$1.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	    reactIs_development$1.isContextConsumer = function (object) {
	      return typeOf(object) === REACT_CONSUMER_TYPE;
	    };
	    reactIs_development$1.isContextProvider = function (object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    };
	    reactIs_development$1.isElement = function (object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    };
	    reactIs_development$1.isForwardRef = function (object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    };
	    reactIs_development$1.isFragment = function (object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    };
	    reactIs_development$1.isLazy = function (object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    };
	    reactIs_development$1.isMemo = function (object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    };
	    reactIs_development$1.isPortal = function (object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    };
	    reactIs_development$1.isProfiler = function (object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    };
	    reactIs_development$1.isStrictMode = function (object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    };
	    reactIs_development$1.isSuspense = function (object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    };
	    reactIs_development$1.isSuspenseList = function (object) {
	      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	    };
	    reactIs_development$1.isValidElementType = function (type) {
	      return "string" === typeof type ||
	        "function" === typeof type ||
	        type === REACT_FRAGMENT_TYPE ||
	        type === REACT_PROFILER_TYPE ||
	        type === REACT_STRICT_MODE_TYPE ||
	        type === REACT_SUSPENSE_TYPE ||
	        type === REACT_SUSPENSE_LIST_TYPE ||
	        ("object" === typeof type &&
	          null !== type &&
	          (type.$$typeof === REACT_LAZY_TYPE ||
	            type.$$typeof === REACT_MEMO_TYPE ||
	            type.$$typeof === REACT_CONTEXT_TYPE ||
	            type.$$typeof === REACT_CONSUMER_TYPE ||
	            type.$$typeof === REACT_FORWARD_REF_TYPE ||
	            type.$$typeof === REACT_CLIENT_REFERENCE ||
	            void 0 !== type.getModuleId))
	        ? true
	        : false;
	    };
	    reactIs_development$1.typeOf = typeOf;
	  })();
	return reactIs_development$1;
}

var hasRequiredReactIs$1;

function requireReactIs$1 () {
	if (hasRequiredReactIs$1) return reactIs$1.exports;
	hasRequiredReactIs$1 = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs$1.exports = requireReactIs_production();
	} else {
	  reactIs$1.exports = requireReactIs_development$1();
	}
	return reactIs$1.exports;
}

var reactIsExports$1 = requireReactIs$1();
var index$1 = /*@__PURE__*/getDefaultExportFromCjs(reactIsExports$1);

var ReactIs19 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: index$1
}, [reactIsExports$1]);

var reactIs = {exports: {}};

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
	function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=g;reactIs_production_min.Element=b;reactIs_production_min.ForwardRef=l;reactIs_production_min.Fragment=d;reactIs_production_min.Lazy=q;reactIs_production_min.Memo=p;reactIs_production_min.Portal=c;reactIs_production_min.Profiler=f;reactIs_production_min.StrictMode=e;reactIs_production_min.Suspense=m;
	reactIs_production_min.SuspenseList=n;reactIs_production_min.isAsyncMode=function(){return  false};reactIs_production_min.isConcurrentMode=function(){return  false};reactIs_production_min.isContextConsumer=function(a){return v(a)===h};reactIs_production_min.isContextProvider=function(a){return v(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return v(a)===l};reactIs_production_min.isFragment=function(a){return v(a)===d};reactIs_production_min.isLazy=function(a){return v(a)===q};reactIs_production_min.isMemo=function(a){return v(a)===p};
	reactIs_production_min.isPortal=function(a){return v(a)===c};reactIs_production_min.isProfiler=function(a){return v(a)===f};reactIs_production_min.isStrictMode=function(a){return v(a)===e};reactIs_production_min.isSuspense=function(a){return v(a)===m};reactIs_production_min.isSuspenseList=function(a){return v(a)===n};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?true:false};reactIs_production_min.typeOf=v;
	return reactIs_production_min;
}

var reactIs_development = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_SERVER_CONTEXT_TYPE:
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	function isSuspenseList(object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	}

	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.SuspenseList = SuspenseList;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isSuspenseList = isSuspenseList;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

var reactIsExports = requireReactIs();
var index = /*@__PURE__*/getDefaultExportFromCjs(reactIsExports);

var ReactIs18 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: index
}, [reactIsExports]);

const reactIsMethods = [
	"isAsyncMode",
	"isConcurrentMode",
	"isContextConsumer",
	"isContextProvider",
	"isElement",
	"isForwardRef",
	"isFragment",
	"isLazy",
	"isMemo",
	"isPortal",
	"isProfiler",
	"isStrictMode",
	"isSuspense",
	"isSuspenseList",
	"isValidElementType"
];
const ReactIs = Object.fromEntries(reactIsMethods.map((m) => [m, (v) => ReactIs18[m](v) || ReactIs19[m](v)]));
// Given element.props.children, or subtree during recursive traversal,
// return flattened array of children.
function getChildren(arg, children = []) {
	if (Array.isArray(arg)) {
		for (const item of arg) {
			getChildren(item, children);
		}
	} else if (arg != null && arg !== false && arg !== "") {
		children.push(arg);
	}
	return children;
}
function getType(element) {
	const type = element.type;
	if (typeof type === "string") {
		return type;
	}
	if (typeof type === "function") {
		return type.displayName || type.name || "Unknown";
	}
	if (ReactIs.isFragment(element)) {
		return "React.Fragment";
	}
	if (ReactIs.isSuspense(element)) {
		return "React.Suspense";
	}
	if (typeof type === "object" && type !== null) {
		if (ReactIs.isContextProvider(element)) {
			return "Context.Provider";
		}
		if (ReactIs.isContextConsumer(element)) {
			return "Context.Consumer";
		}
		if (ReactIs.isForwardRef(element)) {
			if (type.displayName) {
				return type.displayName;
			}
			const functionName = type.render.displayName || type.render.name || "";
			return functionName === "" ? "ForwardRef" : `ForwardRef(${functionName})`;
		}
		if (ReactIs.isMemo(element)) {
			const functionName = type.displayName || type.type.displayName || type.type.name || "";
			return functionName === "" ? "Memo" : `Memo(${functionName})`;
		}
	}
	return "UNDEFINED";
}
function getPropKeys$1(element) {
	const { props } = element;
	return Object.keys(props).filter((key) => key !== "children" && props[key] !== undefined).sort();
}
const serialize$1 = (element, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? printElementAsLeaf(getType(element), config) : printElement(getType(element), printProps(getPropKeys$1(element), element.props, config, indentation + config.indent, depth, refs, printer), printChildren(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
const test$1 = (val) => val != null && ReactIs.isElement(val);
const plugin$1 = {
	serialize: serialize$1,
	test: test$1
};

const testSymbol = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
function getPropKeys(object) {
	const { props } = object;
	return props ? Object.keys(props).filter((key) => props[key] !== undefined).sort() : [];
}
const serialize = (object, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? printElementAsLeaf(object.type, config) : printElement(object.type, object.props ? printProps(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : "", object.children ? printChildren(object.children, config, indentation + config.indent, depth, refs, printer) : "", config, indentation);
const test = (val) => val && val.$$typeof === testSymbol;
const plugin = {
	serialize,
	test
};

const toString = Object.prototype.toString;
const toISOString = Date.prototype.toISOString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
/**
* Explicitly comparing typeof constructor to function avoids undefined as name
* when mock identity-obj-proxy returns the key as the value for any key.
*/
function getConstructorName(val) {
	return typeof val.constructor === "function" && val.constructor.name || "Object";
}
/** Is val is equal to global window object? Works even if it does not exist :) */
function isWindow(val) {
	return typeof window !== "undefined" && val === window;
}
// eslint-disable-next-line regexp/no-super-linear-backtracking
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
const NEWLINE_REGEXP = /\n/g;
class PrettyFormatPluginError extends Error {
	constructor(message, stack) {
		super(message);
		this.stack = stack;
		this.name = this.constructor.name;
	}
}
function isToStringedArrayType(toStringed) {
	return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
}
function printNumber(val) {
	return Object.is(val, -0) ? "-0" : String(val);
}
function printBigInt(val) {
	return String(`${val}n`);
}
function printFunction(val, printFunctionName) {
	if (!printFunctionName) {
		return "[Function]";
	}
	return `[Function ${val.name || "anonymous"}]`;
}
function printSymbol(val) {
	return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
}
function printError(val) {
	return `[${errorToString.call(val)}]`;
}
/**
* The first port of call for printing an object, handles most of the
* data-types in JS.
*/
function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
	if (val === true || val === false) {
		return `${val}`;
	}
	if (val === undefined) {
		return "undefined";
	}
	if (val === null) {
		return "null";
	}
	const typeOf = typeof val;
	if (typeOf === "number") {
		return printNumber(val);
	}
	if (typeOf === "bigint") {
		return printBigInt(val);
	}
	if (typeOf === "string") {
		if (escapeString) {
			return `"${val.replaceAll(/"|\\/g, "\\$&")}"`;
		}
		return `"${val}"`;
	}
	if (typeOf === "function") {
		return printFunction(val, printFunctionName);
	}
	if (typeOf === "symbol") {
		return printSymbol(val);
	}
	const toStringed = toString.call(val);
	if (toStringed === "[object WeakMap]") {
		return "WeakMap {}";
	}
	if (toStringed === "[object WeakSet]") {
		return "WeakSet {}";
	}
	if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
		return printFunction(val, printFunctionName);
	}
	if (toStringed === "[object Symbol]") {
		return printSymbol(val);
	}
	if (toStringed === "[object Date]") {
		return Number.isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
	}
	if (toStringed === "[object Error]") {
		return printError(val);
	}
	if (toStringed === "[object RegExp]") {
		if (escapeRegex) {
			// https://github.com/benjamingr/RegExp.escape/blob/main/polyfill.js
			return regExpToString.call(val).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&");
		}
		return regExpToString.call(val);
	}
	if (val instanceof Error) {
		return printError(val);
	}
	return null;
}
/**
* Handles more complex objects ( such as objects with circular references.
* maps and sets etc )
*/
function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
	if (refs.includes(val)) {
		return "[Circular]";
	}
	refs = [...refs];
	refs.push(val);
	const hitMaxDepth = ++depth > config.maxDepth;
	const min = config.min;
	if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
		return printer(val.toJSON(), config, indentation, depth, refs, true);
	}
	const toStringed = toString.call(val);
	if (toStringed === "[object Arguments]") {
		return hitMaxDepth ? "[Arguments]" : `${min ? "" : "Arguments "}[${printListItems(val, config, indentation, depth, refs, printer)}]`;
	}
	if (isToStringedArrayType(toStringed)) {
		return hitMaxDepth ? `[${val.constructor.name}]` : `${min ? "" : !config.printBasicPrototype && val.constructor.name === "Array" ? "" : `${val.constructor.name} `}[${printListItems(val, config, indentation, depth, refs, printer)}]`;
	}
	if (toStringed === "[object Map]") {
		return hitMaxDepth ? "[Map]" : `Map {${printIteratorEntries(val.entries(), config, indentation, depth, refs, printer, " => ")}}`;
	}
	if (toStringed === "[object Set]") {
		return hitMaxDepth ? "[Set]" : `Set {${printIteratorValues(val.values(), config, indentation, depth, refs, printer)}}`;
	}
	// Avoid failure to serialize global window object in jsdom test environment.
	// For example, not even relevant if window is prop of React element.
	return hitMaxDepth || isWindow(val) ? `[${getConstructorName(val)}]` : `${min ? "" : !config.printBasicPrototype && getConstructorName(val) === "Object" ? "" : `${getConstructorName(val)} `}{${printObjectProperties(val, config, indentation, depth, refs, printer)}}`;
}
const ErrorPlugin = {
	test: (val) => val && val instanceof Error,
	serialize(val, config, indentation, depth, refs, printer) {
		if (refs.includes(val)) {
			return "[Circular]";
		}
		refs = [...refs, val];
		const hitMaxDepth = ++depth > config.maxDepth;
		const { message, cause,...rest } = val;
		const entries = {
			message,
			...typeof cause !== "undefined" ? { cause } : {},
			...val instanceof AggregateError ? { errors: val.errors } : {},
			...rest
		};
		const name = val.name !== "Error" ? val.name : getConstructorName(val);
		return hitMaxDepth ? `[${name}]` : `${name} {${printIteratorEntries(Object.entries(entries).values(), config, indentation, depth, refs, printer)}}`;
	}
};
function isNewPlugin(plugin) {
	return plugin.serialize != null;
}
function printPlugin(plugin, val, config, indentation, depth, refs) {
	let printed;
	try {
		printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, (valChild) => printer(valChild, config, indentation, depth, refs), (str) => {
			const indentationNext = indentation + config.indent;
			return indentationNext + str.replaceAll(NEWLINE_REGEXP, `\n${indentationNext}`);
		}, {
			edgeSpacing: config.spacingOuter,
			min: config.min,
			spacing: config.spacingInner
		}, config.colors);
	} catch (error) {
		throw new PrettyFormatPluginError(error.message, error.stack);
	}
	if (typeof printed !== "string") {
		throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
	}
	return printed;
}
function findPlugin(plugins, val) {
	for (const plugin of plugins) {
		try {
			if (plugin.test(val)) {
				return plugin;
			}
		} catch (error) {
			throw new PrettyFormatPluginError(error.message, error.stack);
		}
	}
	return null;
}
function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
	const plugin = findPlugin(config.plugins, val);
	if (plugin !== null) {
		return printPlugin(plugin, val, config, indentation, depth, refs);
	}
	const basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);
	if (basicResult !== null) {
		return basicResult;
	}
	return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
}
const DEFAULT_THEME = {
	comment: "gray",
	content: "reset",
	prop: "yellow",
	tag: "cyan",
	value: "green"
};
const DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
const DEFAULT_OPTIONS = {
	callToJSON: true,
	compareKeys: undefined,
	escapeRegex: false,
	escapeString: true,
	highlight: false,
	indent: 2,
	maxDepth: Number.POSITIVE_INFINITY,
	maxWidth: Number.POSITIVE_INFINITY,
	min: false,
	plugins: [],
	printBasicPrototype: true,
	printFunctionName: true,
	theme: DEFAULT_THEME
};
function validateOptions(options) {
	for (const key of Object.keys(options)) {
		if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key)) {
			throw new Error(`pretty-format: Unknown option "${key}".`);
		}
	}
	if (options.min && options.indent !== undefined && options.indent !== 0) {
		throw new Error("pretty-format: Options \"min\" and \"indent\" cannot be used together.");
	}
}
function getColorsHighlight() {
	return DEFAULT_THEME_KEYS.reduce((colors, key) => {
		const value = DEFAULT_THEME[key];
		const color = value && styles[value];
		if (color && typeof color.close === "string" && typeof color.open === "string") {
			colors[key] = color;
		} else {
			throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
		}
		return colors;
	}, Object.create(null));
}
function getColorsEmpty() {
	return DEFAULT_THEME_KEYS.reduce((colors, key) => {
		colors[key] = {
			close: "",
			open: ""
		};
		return colors;
	}, Object.create(null));
}
function getPrintFunctionName(options) {
	return (options === null || options === void 0 ? void 0 : options.printFunctionName) ?? DEFAULT_OPTIONS.printFunctionName;
}
function getEscapeRegex(options) {
	return (options === null || options === void 0 ? void 0 : options.escapeRegex) ?? DEFAULT_OPTIONS.escapeRegex;
}
function getEscapeString(options) {
	return (options === null || options === void 0 ? void 0 : options.escapeString) ?? DEFAULT_OPTIONS.escapeString;
}
function getConfig(options) {
	return {
		callToJSON: (options === null || options === void 0 ? void 0 : options.callToJSON) ?? DEFAULT_OPTIONS.callToJSON,
		colors: (options === null || options === void 0 ? void 0 : options.highlight) ? getColorsHighlight() : getColorsEmpty(),
		compareKeys: typeof (options === null || options === void 0 ? void 0 : options.compareKeys) === "function" || (options === null || options === void 0 ? void 0 : options.compareKeys) === null ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
		escapeRegex: getEscapeRegex(options),
		escapeString: getEscapeString(options),
		indent: (options === null || options === void 0 ? void 0 : options.min) ? "" : createIndent((options === null || options === void 0 ? void 0 : options.indent) ?? DEFAULT_OPTIONS.indent),
		maxDepth: (options === null || options === void 0 ? void 0 : options.maxDepth) ?? DEFAULT_OPTIONS.maxDepth,
		maxWidth: (options === null || options === void 0 ? void 0 : options.maxWidth) ?? DEFAULT_OPTIONS.maxWidth,
		min: (options === null || options === void 0 ? void 0 : options.min) ?? DEFAULT_OPTIONS.min,
		plugins: (options === null || options === void 0 ? void 0 : options.plugins) ?? DEFAULT_OPTIONS.plugins,
		printBasicPrototype: (options === null || options === void 0 ? void 0 : options.printBasicPrototype) ?? true,
		printFunctionName: getPrintFunctionName(options),
		spacingInner: (options === null || options === void 0 ? void 0 : options.min) ? " " : "\n",
		spacingOuter: (options === null || options === void 0 ? void 0 : options.min) ? "" : "\n"
	};
}
function createIndent(indent) {
	return Array.from({ length: indent + 1 }).join(" ");
}
/**
* Returns a presentation string of your `val` object
* @param val any potential JavaScript object
* @param options Custom settings
*/
function format(val, options) {
	if (options) {
		validateOptions(options);
		if (options.plugins) {
			const plugin = findPlugin(options.plugins, val);
			if (plugin !== null) {
				return printPlugin(plugin, val, getConfig(options), "", 0, []);
			}
		}
	}
	const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
	if (basicResult !== null) {
		return basicResult;
	}
	return printComplexValue(val, getConfig(options), "", 0, []);
}
const plugins = {
	AsymmetricMatcher: plugin$5,
	DOMCollection: plugin$4,
	DOMElement: plugin$3,
	Immutable: plugin$2,
	ReactElement: plugin$1,
	ReactTestComponent: plugin,
	Error: ErrorPlugin
};

export { DEFAULT_OPTIONS, format, plugins };
