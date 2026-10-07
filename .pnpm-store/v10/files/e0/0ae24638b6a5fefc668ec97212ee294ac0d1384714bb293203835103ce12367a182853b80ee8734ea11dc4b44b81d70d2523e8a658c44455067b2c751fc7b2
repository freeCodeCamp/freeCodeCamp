import {
	render as preactRender,
	hydrate as preactHydrate,
	options,
	toChildArray,
	Component
} from 'preact';
import {
	useCallback,
	useContext,
	useDebugValue,
	useEffect,
	useId,
	useImperativeHandle,
	useLayoutEffect,
	useMemo,
	useReducer,
	useRef,
	useState
} from 'preact/hooks';
import {
	useDeferredValue,
	useInsertionEffect,
	useSyncExternalStore,
	useTransition
} from './index';

export const REACT_ELEMENT_TYPE =
	(typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.element')) ||
	0xeac7;

const CAMEL_PROPS =
	/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
const ON_ANI = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
const CAMEL_REPLACE = /[A-Z0-9]/g;
const IS_DOM = typeof document !== 'undefined';

// Input types for which onchange should not be converted to oninput.
// type="file|checkbox|radio", plus "range" in IE11.
// (IE11 doesn't support Symbol, which we use here to turn `rad` into `ra` which matches "range")
const onChangeInputType = type =>
	(typeof Symbol != 'undefined' && typeof Symbol() == 'symbol'
		? /fil|che|rad/
		: /fil|che|ra/
	).test(type);

// Some libraries like `react-virtualized` explicitly check for this.
Component.prototype.isReactComponent = {};

// `UNSAFE_*` lifecycle hooks
// Preact only ever invokes the unprefixed methods.
// Here we provide a base "fallback" implementation that calls any defined UNSAFE_ prefixed method.
// - If a component defines its own `componentDidMount()` (including via defineProperty), use that.
// - If a component defines `UNSAFE_componentDidMount()`, `componentDidMount` is the alias getter/setter.
// - If anything assigns to an `UNSAFE_*` property, the assignment is forwarded to the unprefixed property.
// See https://github.com/preactjs/preact/issues/1941
[
	'componentWillMount',
	'componentWillReceiveProps',
	'componentWillUpdate'
].forEach(key => {
	Object.defineProperty(Component.prototype, key, {
		configurable: true,
		get() {
			return this['UNSAFE_' + key];
		},
		set(v) {
			Object.defineProperty(this, key, {
				configurable: true,
				writable: true,
				value: v
			});
		}
	});
});

/**
 * Proxy render() since React returns a Component reference.
 * @param {import('./internal').VNode} vnode VNode tree to render
 * @param {import('./internal').PreactElement} parent DOM node to render vnode tree into
 * @param {() => void} [callback] Optional callback that will be called after rendering
 * @returns {import('./internal').Component | null} The root component reference or null
 */
export function render(vnode, parent, callback) {
	// React destroys any existing DOM nodes, see #1727
	// ...but only on the first render, see #1828
	if (parent._children == null) {
		parent.textContent = '';
	}

	preactRender(vnode, parent);
	if (typeof callback == 'function') callback();

	return vnode ? vnode._component : null;
}

export function hydrate(vnode, parent, callback) {
	preactHydrate(vnode, parent);
	if (typeof callback == 'function') callback();

	return vnode ? vnode._component : null;
}

let oldEventHook = options.event;
options.event = e => {
	if (oldEventHook) e = oldEventHook(e);

	e.persist = empty;
	e.isPropagationStopped = isPropagationStopped;
	e.isDefaultPrevented = isDefaultPrevented;
	return (e.nativeEvent = e);
};

function empty() {}

function isPropagationStopped() {
	return this.cancelBubble;
}

function isDefaultPrevented() {
	return this.defaultPrevented;
}

const classNameDescriptorNonEnumberable = {
	enumerable: false,
	configurable: true,
	get() {
		return this.class;
	}
};

function handleDomVNode(vnode) {
	let props = vnode.props,
		type = vnode.type,
		normalizedProps = {};

	let isNonDashedType = type.indexOf('-') === -1;
	for (let i in props) {
		let value = props[i];

		if (
			(i === 'value' && 'defaultValue' in props && value == null) ||
			// Emulate React's behavior of not rendering the contents of noscript tags on the client.
			(IS_DOM && i === 'children' && type === 'noscript') ||
			i === 'class' ||
			i === 'className'
		) {
			// Skip applying value if it is null/undefined and we already set
			// a default value
			continue;
		}

		let lowerCased = i.toLowerCase();
		if (i === 'defaultValue' && 'value' in props && props.value == null) {
			// `defaultValue` is treated as a fallback `value` when a value prop is present but null/undefined.
			// `defaultValue` for Elements with no value prop is the same as the DOM defaultValue property.
			i = 'value';
		} else if (i === 'download' && value === true) {
			// Calling `setAttribute` with a truthy value will lead to it being
			// passed as a stringified value, e.g. `download="true"`. React
			// converts it to an empty string instead, otherwise the attribute
			// value will be used as the file name and the file will be called
			// "true" upon downloading it.
			value = '';
		} else if (lowerCased === 'translate' && value === 'no') {
			value = false;
		} else if (lowerCased[0] === 'o' && lowerCased[1] === 'n') {
			if (lowerCased === 'ondoubleclick') {
				i = 'ondblclick';
			} else if (
				lowerCased === 'onchange' &&
				(type === 'input' || type === 'textarea') &&
				!onChangeInputType(props.type)
			) {
				lowerCased = i = 'oninput';
			} else if (lowerCased === 'onfocus') {
				i = 'onfocusin';
			} else if (lowerCased === 'onblur') {
				i = 'onfocusout';
			} else if (ON_ANI.test(i)) {
				i = lowerCased;
			}
		} else if (isNonDashedType && CAMEL_PROPS.test(i)) {
			i = i.replace(CAMEL_REPLACE, '-$&').toLowerCase();
		} else if (value === null) {
			value = undefined;
		}

		// Add support for onInput and onChange, see #3561
		// if we have an oninput prop already change it to oninputCapture
		if (lowerCased === 'oninput') {
			i = lowerCased;
			if (normalizedProps[i]) {
				i = 'oninputCapture';
			}
		}

		normalizedProps[i] = value;
	}

	// Add support for array select values: <select multiple value={[]} />
	if (
		type == 'select' &&
		normalizedProps.multiple &&
		Array.isArray(normalizedProps.value)
	) {
		// forEach() always returns undefined, which we abuse here to unset the value prop.
		normalizedProps.value = toChildArray(props.children).forEach(child => {
			child.props.selected =
				normalizedProps.value.indexOf(child.props.value) != -1;
		});
	}

	// Adding support for defaultValue in select tag
	if (type == 'select' && normalizedProps.defaultValue != null) {
		normalizedProps.value = toChildArray(props.children).forEach(child => {
			if (normalizedProps.multiple) {
				child.props.selected =
					normalizedProps.defaultValue.indexOf(child.props.value) != -1;
			} else {
				child.props.selected =
					normalizedProps.defaultValue == child.props.value;
			}
		});
	}

	if (props.class && !props.className) {
		normalizedProps.class = props.class;
		Object.defineProperty(
			normalizedProps,
			'className',
			classNameDescriptorNonEnumberable
		);
	} else if (props.className && !props.class) {
		normalizedProps.class = normalizedProps.className = props.className;
	} else if (props.class && props.className) {
		normalizedProps.class = normalizedProps.className = props.className;
	}

	vnode.props = normalizedProps;
}

let oldVNodeHook = options.vnode;
options.vnode = vnode => {
	// only normalize props on Element nodes
	if (typeof vnode.type === 'string') {
		handleDomVNode(vnode);
	}

	vnode.$$typeof = REACT_ELEMENT_TYPE;

	if (oldVNodeHook) oldVNodeHook(vnode);
};

// Only needed for react-relay
let currentComponent;
const oldBeforeRender = options._render;
options._render = function (vnode) {
	if (oldBeforeRender) {
		oldBeforeRender(vnode);
	}
	currentComponent = vnode._component;
};

const oldDiffed = options.diffed;
/** @type {(vnode: import('./internal').VNode) => void} */
options.diffed = function (vnode) {
	if (oldDiffed) {
		oldDiffed(vnode);
	}

	const props = vnode.props;
	const dom = vnode._dom;

	if (
		dom != null &&
		vnode.type === 'textarea' &&
		'value' in props &&
		props.value !== dom.value
	) {
		dom.value = props.value == null ? '' : props.value;
	}

	currentComponent = null;
};

// This is a very very private internal function for React it
// is used to sort-of do runtime dependency injection.
export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
	ReactCurrentDispatcher: {
		current: {
			readContext(context) {
				return currentComponent._globalContext[context._id].props.value;
			},
			useCallback,
			useContext,
			useDebugValue,
			useDeferredValue,
			useEffect,
			useId,
			useImperativeHandle,
			useInsertionEffect,
			useLayoutEffect,
			useMemo,
			// useMutableSource, // experimental-only and replaced by uSES, likely not worth supporting
			useReducer,
			useRef,
			useState,
			useSyncExternalStore,
			useTransition
		}
	}
};
