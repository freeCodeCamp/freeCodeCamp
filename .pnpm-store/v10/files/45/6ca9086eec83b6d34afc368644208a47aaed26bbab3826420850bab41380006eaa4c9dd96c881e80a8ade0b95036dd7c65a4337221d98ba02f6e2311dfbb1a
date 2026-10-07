import {
	EMPTY_OBJ,
	MODE_HYDRATE,
	MODE_SUSPENDED,
	RESET_MODE
} from '../constants';
import { BaseComponent, getDomSibling } from '../component';
import { Fragment } from '../create-element';
import { diffChildren } from './children';
import { setProperty } from './props';
import { assign, isArray, removeNode, slice } from '../util';
import options from '../options';

/**
 * Diff two virtual nodes and apply proper changes to the DOM
 * @param {PreactElement} parentDom The parent of the DOM element
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object. Modified by
 * getChildContext
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {PreactElement} oldDom The current attached DOM element any new dom
 * elements should be placed around. Likely `null` on first render (except when
 * hydrating). Can be a sibling DOM element when diffing Fragments that have
 * siblings. In most cases, it starts out as `oldChildren[0]._dom`.
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 */
export function diff(
	parentDom,
	newVNode,
	oldVNode,
	globalContext,
	namespace,
	excessDomChildren,
	commitQueue,
	oldDom,
	isHydrating,
	refQueue
) {
	/** @type {any} */
	let tmp,
		newType = newVNode.type;

	// When passing through createElement it assigns the object
	// constructor as undefined. This to prevent JSON-injection.
	if (newVNode.constructor !== undefined) return null;

	// If the previous diff bailed out, resume creating/hydrating.
	if (oldVNode._flags & MODE_SUSPENDED) {
		isHydrating = !!(oldVNode._flags & MODE_HYDRATE);
		oldDom = newVNode._dom = oldVNode._dom;
		excessDomChildren = [oldDom];
	}

	if ((tmp = options._diff)) tmp(newVNode);

	outer: if (typeof newType == 'function') {
		try {
			let c, isNew, oldProps, oldState, snapshot, clearProcessingException;
			let newProps = newVNode.props;
			const isClassComponent =
				'prototype' in newType && newType.prototype.render;

			// Necessary for createContext api. Setting this property will pass
			// the context value as `this.context` just for this component.
			tmp = newType.contextType;
			let provider = tmp && globalContext[tmp._id];
			let componentContext = tmp
				? provider
					? provider.props.value
					: tmp._defaultValue
				: globalContext;

			// Get component and set it to `c`
			if (oldVNode._component) {
				c = newVNode._component = oldVNode._component;
				clearProcessingException = c._processingException = c._pendingError;
			} else {
				// Instantiate the new component
				if (isClassComponent) {
					// @ts-expect-error The check above verifies that newType is suppose to be constructed
					newVNode._component = c = new newType(newProps, componentContext); // eslint-disable-line new-cap
				} else {
					// @ts-expect-error Trust me, Component implements the interface we want
					newVNode._component = c = new BaseComponent(
						newProps,
						componentContext
					);
					c.constructor = newType;
					c.render = doRender;
				}
				if (provider) provider.sub(c);

				c.props = newProps;
				if (!c.state) c.state = {};
				c.context = componentContext;
				c._globalContext = globalContext;
				isNew = c._dirty = true;
				c._renderCallbacks = [];
				c._stateCallbacks = [];
			}

			// Invoke getDerivedStateFromProps
			if (isClassComponent && c._nextState == null) {
				c._nextState = c.state;
			}

			if (isClassComponent && newType.getDerivedStateFromProps != null) {
				if (c._nextState == c.state) {
					c._nextState = assign({}, c._nextState);
				}

				assign(
					c._nextState,
					newType.getDerivedStateFromProps(newProps, c._nextState)
				);
			}

			oldProps = c.props;
			oldState = c.state;
			c._vnode = newVNode;

			// Invoke pre-render lifecycle methods
			if (isNew) {
				if (
					isClassComponent &&
					newType.getDerivedStateFromProps == null &&
					c.componentWillMount != null
				) {
					c.componentWillMount();
				}

				if (isClassComponent && c.componentDidMount != null) {
					c._renderCallbacks.push(c.componentDidMount);
				}
			} else {
				if (
					isClassComponent &&
					newType.getDerivedStateFromProps == null &&
					newProps !== oldProps &&
					c.componentWillReceiveProps != null
				) {
					c.componentWillReceiveProps(newProps, componentContext);
				}

				if (
					!c._force &&
					((c.shouldComponentUpdate != null &&
						c.shouldComponentUpdate(
							newProps,
							c._nextState,
							componentContext
						) === false) ||
						newVNode._original === oldVNode._original)
				) {
					// More info about this here: https://gist.github.com/JoviDeCroock/bec5f2ce93544d2e6070ef8e0036e4e8
					if (newVNode._original !== oldVNode._original) {
						// When we are dealing with a bail because of sCU we have to update
						// the props, state and dirty-state.
						// when we are dealing with strict-equality we don't as the child could still
						// be dirtied see #3883
						c.props = newProps;
						c.state = c._nextState;
						c._dirty = false;
					}

					newVNode._dom = oldVNode._dom;
					newVNode._children = oldVNode._children;
					newVNode._children.some(vnode => {
						if (vnode) vnode._parent = newVNode;
					});

					for (let i = 0; i < c._stateCallbacks.length; i++) {
						c._renderCallbacks.push(c._stateCallbacks[i]);
					}
					c._stateCallbacks = [];

					if (c._renderCallbacks.length) {
						commitQueue.push(c);
					}

					break outer;
				}

				if (c.componentWillUpdate != null) {
					c.componentWillUpdate(newProps, c._nextState, componentContext);
				}

				if (isClassComponent && c.componentDidUpdate != null) {
					c._renderCallbacks.push(() => {
						c.componentDidUpdate(oldProps, oldState, snapshot);
					});
				}
			}

			c.context = componentContext;
			c.props = newProps;
			c._parentDom = parentDom;
			c._force = false;

			let renderHook = options._render,
				count = 0;
			if (isClassComponent) {
				c.state = c._nextState;
				c._dirty = false;

				if (renderHook) renderHook(newVNode);

				tmp = c.render(c.props, c.state, c.context);

				for (let i = 0; i < c._stateCallbacks.length; i++) {
					c._renderCallbacks.push(c._stateCallbacks[i]);
				}
				c._stateCallbacks = [];
			} else {
				do {
					c._dirty = false;
					if (renderHook) renderHook(newVNode);

					tmp = c.render(c.props, c.state, c.context);

					// Handle setState called in render, see #2553
					c.state = c._nextState;
				} while (c._dirty && ++count < 25);
			}

			// Handle setState called in render, see #2553
			c.state = c._nextState;

			if (c.getChildContext != null) {
				globalContext = assign(assign({}, globalContext), c.getChildContext());
			}

			if (isClassComponent && !isNew && c.getSnapshotBeforeUpdate != null) {
				snapshot = c.getSnapshotBeforeUpdate(oldProps, oldState);
			}

			let isTopLevelFragment =
				tmp != null && tmp.type === Fragment && tmp.key == null;
			let renderResult = isTopLevelFragment ? tmp.props.children : tmp;

			diffChildren(
				parentDom,
				isArray(renderResult) ? renderResult : [renderResult],
				newVNode,
				oldVNode,
				globalContext,
				namespace,
				excessDomChildren,
				commitQueue,
				oldDom,
				isHydrating,
				refQueue
			);

			c.base = newVNode._dom;

			// We successfully rendered this VNode, unset any stored hydration/bailout state:
			newVNode._flags &= RESET_MODE;

			if (c._renderCallbacks.length) {
				commitQueue.push(c);
			}

			if (clearProcessingException) {
				c._pendingError = c._processingException = null;
			}
		} catch (e) {
			newVNode._original = null;
			// if hydrating or creating initial tree, bailout preserves DOM:
			if (isHydrating || excessDomChildren != null) {
				newVNode._flags |= isHydrating
					? MODE_HYDRATE | MODE_SUSPENDED
					: MODE_SUSPENDED;

				while (oldDom && oldDom.nodeType === 8 && oldDom.nextSibling) {
					oldDom = oldDom.nextSibling;
				}
				excessDomChildren[excessDomChildren.indexOf(oldDom)] = null;
				newVNode._dom = oldDom;
			} else {
				newVNode._dom = oldVNode._dom;
				newVNode._children = oldVNode._children;
			}
			options._catchError(e, newVNode, oldVNode);
		}
	} else if (
		excessDomChildren == null &&
		newVNode._original === oldVNode._original
	) {
		newVNode._children = oldVNode._children;
		newVNode._dom = oldVNode._dom;
	} else {
		newVNode._dom = diffElementNodes(
			oldVNode._dom,
			newVNode,
			oldVNode,
			globalContext,
			namespace,
			excessDomChildren,
			commitQueue,
			isHydrating,
			refQueue
		);
	}

	if ((tmp = options.diffed)) tmp(newVNode);
}

/**
 * @param {Array<Component>} commitQueue List of components
 * which have callbacks to invoke in commitRoot
 * @param {VNode} root
 */
export function commitRoot(commitQueue, root, refQueue) {
	root._nextDom = undefined;

	for (let i = 0; i < refQueue.length; i++) {
		applyRef(refQueue[i], refQueue[++i], refQueue[++i]);
	}

	if (options._commit) options._commit(root, commitQueue);

	commitQueue.some(c => {
		try {
			// @ts-expect-error Reuse the commitQueue variable here so the type changes
			commitQueue = c._renderCallbacks;
			c._renderCallbacks = [];
			commitQueue.some(cb => {
				// @ts-expect-error See above comment on commitQueue
				cb.call(c);
			});
		} catch (e) {
			options._catchError(e, c._vnode);
		}
	});
}

/**
 * Diff two virtual nodes representing DOM element
 * @param {PreactElement} dom The DOM element representing the virtual nodes
 * being diffed
 * @param {VNode} newVNode The new virtual node
 * @param {VNode} oldVNode The old virtual node
 * @param {object} globalContext The current context object
 * @param {string} namespace Current namespace of the DOM node (HTML, SVG, or MathML)
 * @param {Array<PreactElement>} excessDomChildren
 * @param {Array<Component>} commitQueue List of components which have callbacks
 * to invoke in commitRoot
 * @param {boolean} isHydrating Whether or not we are in hydration
 * @param {any[]} refQueue an array of elements needed to invoke refs
 * @returns {PreactElement}
 */
function diffElementNodes(
	dom,
	newVNode,
	oldVNode,
	globalContext,
	namespace,
	excessDomChildren,
	commitQueue,
	isHydrating,
	refQueue
) {
	let oldProps = oldVNode.props;
	let newProps = newVNode.props;
	let nodeType = /** @type {string} */ (newVNode.type);
	/** @type {any} */
	let i;
	/** @type {{ __html?: string }} */
	let newHtml;
	/** @type {{ __html?: string }} */
	let oldHtml;
	/** @type {ComponentChildren} */
	let newChildren;
	let value;
	let inputValue;
	let checked;

	// Tracks entering and exiting namespaces when descending through the tree.
	if (nodeType === 'svg') namespace = 'http://www.w3.org/2000/svg';
	else if (nodeType === 'math')
		namespace = 'http://www.w3.org/1998/Math/MathML';
	else if (!namespace) namespace = 'http://www.w3.org/1999/xhtml';

	if (excessDomChildren != null) {
		for (i = 0; i < excessDomChildren.length; i++) {
			value = excessDomChildren[i];

			// if newVNode matches an element in excessDomChildren or the `dom`
			// argument matches an element in excessDomChildren, remove it from
			// excessDomChildren so it isn't later removed in diffChildren
			if (
				value &&
				'setAttribute' in value === !!nodeType &&
				(nodeType ? value.localName === nodeType : value.nodeType === 3)
			) {
				dom = value;
				excessDomChildren[i] = null;
				break;
			}
		}
	}

	if (dom == null) {
		if (nodeType === null) {
			return document.createTextNode(newProps);
		}

		dom = document.createElementNS(
			namespace,
			nodeType,
			newProps.is && newProps
		);

		// we are creating a new node, so we can assume this is a new subtree (in
		// case we are hydrating), this deopts the hydrate
		if (isHydrating) {
			if (options._hydrationMismatch)
				options._hydrationMismatch(newVNode, excessDomChildren);
			isHydrating = false;
		}
		// we created a new parent, so none of the previously attached children can be reused:
		excessDomChildren = null;
	}

	if (nodeType === null) {
		// During hydration, we still have to split merged text from SSR'd HTML.
		if (oldProps !== newProps && (!isHydrating || dom.data !== newProps)) {
			dom.data = newProps;
		}
	} else {
		// If excessDomChildren was not null, repopulate it with the current element's children:
		excessDomChildren = excessDomChildren && slice.call(dom.childNodes);

		oldProps = oldVNode.props || EMPTY_OBJ;

		// If we are in a situation where we are not hydrating but are using
		// existing DOM (e.g. replaceNode) we should read the existing DOM
		// attributes to diff them
		if (!isHydrating && excessDomChildren != null) {
			oldProps = {};
			for (i = 0; i < dom.attributes.length; i++) {
				value = dom.attributes[i];
				oldProps[value.name] = value.value;
			}
		}

		for (i in oldProps) {
			value = oldProps[i];
			if (i == 'children') {
			} else if (i == 'dangerouslySetInnerHTML') {
				oldHtml = value;
			} else if (!(i in newProps)) {
				if (
					(i == 'value' && 'defaultValue' in newProps) ||
					(i == 'checked' && 'defaultChecked' in newProps)
				) {
					continue;
				}
				setProperty(dom, i, null, value, namespace);
			}
		}

		// During hydration, props are not diffed at all (including dangerouslySetInnerHTML)
		// @TODO we should warn in debug mode when props don't match here.
		for (i in newProps) {
			value = newProps[i];
			if (i == 'children') {
				newChildren = value;
			} else if (i == 'dangerouslySetInnerHTML') {
				newHtml = value;
			} else if (i == 'value') {
				inputValue = value;
			} else if (i == 'checked') {
				checked = value;
			} else if (
				(!isHydrating || typeof value == 'function') &&
				oldProps[i] !== value
			) {
				setProperty(dom, i, value, oldProps[i], namespace);
			}
		}

		// If the new vnode didn't have dangerouslySetInnerHTML, diff its children
		if (newHtml) {
			// Avoid re-applying the same '__html' if it did not changed between re-render
			if (
				!isHydrating &&
				(!oldHtml ||
					(newHtml.__html !== oldHtml.__html &&
						newHtml.__html !== dom.innerHTML))
			) {
				dom.innerHTML = newHtml.__html;
			}

			newVNode._children = [];
		} else {
			if (oldHtml) dom.innerHTML = '';

			diffChildren(
				dom,
				isArray(newChildren) ? newChildren : [newChildren],
				newVNode,
				oldVNode,
				globalContext,
				nodeType === 'foreignObject'
					? 'http://www.w3.org/1999/xhtml'
					: namespace,
				excessDomChildren,
				commitQueue,
				excessDomChildren
					? excessDomChildren[0]
					: oldVNode._children && getDomSibling(oldVNode, 0),
				isHydrating,
				refQueue
			);

			// Remove children that are not part of any vnode.
			if (excessDomChildren != null) {
				for (i = excessDomChildren.length; i--; ) {
					removeNode(excessDomChildren[i]);
				}
			}
		}

		// As above, don't diff props during hydration
		if (!isHydrating) {
			i = 'value';
			if (nodeType === 'progress' && inputValue == null) {
				dom.removeAttribute('value');
			} else if (
				inputValue !== undefined &&
				// #2756 For the <progress>-element the initial value is 0,
				// despite the attribute not being present. When the attribute
				// is missing the progress bar is treated as indeterminate.
				// To fix that we'll always update it when it is 0 for progress elements
				(inputValue !== dom[i] ||
					(nodeType === 'progress' && !inputValue) ||
					// This is only for IE 11 to fix <select> value not being updated.
					// To avoid a stale select value we need to set the option.value
					// again, which triggers IE11 to re-evaluate the select value
					(nodeType === 'option' && inputValue !== oldProps[i]))
			) {
				setProperty(dom, i, inputValue, oldProps[i], namespace);
			}

			i = 'checked';
			if (checked !== undefined && checked !== dom[i]) {
				setProperty(dom, i, checked, oldProps[i], namespace);
			}
		}
	}

	return dom;
}

/**
 * Invoke or update a ref, depending on whether it is a function or object ref.
 * @param {Ref<any> & { _unmount?: unknown }} ref
 * @param {any} value
 * @param {VNode} vnode
 */
export function applyRef(ref, value, vnode) {
	try {
		if (typeof ref == 'function') {
			let hasRefUnmount = typeof ref._unmount == 'function';
			if (hasRefUnmount) {
				// @ts-ignore TS doesn't like moving narrowing checks into variables
				ref._unmount();
			}

			if (!hasRefUnmount || value != null) {
				// Store the cleanup function on the function
				// instance object itself to avoid shape
				// transitioning vnode
				ref._unmount = ref(value);
			}
		} else ref.current = value;
	} catch (e) {
		options._catchError(e, vnode);
	}
}

/**
 * Unmount a virtual node from the tree and apply DOM changes
 * @param {VNode} vnode The virtual node to unmount
 * @param {VNode} parentVNode The parent of the VNode that initiated the unmount
 * @param {boolean} [skipRemove] Flag that indicates that a parent node of the
 * current element is already detached from the DOM.
 */
export function unmount(vnode, parentVNode, skipRemove) {
	let r;
	if (options.unmount) options.unmount(vnode);

	if ((r = vnode.ref)) {
		if (!r.current || r.current === vnode._dom) {
			applyRef(r, null, parentVNode);
		}
	}

	if ((r = vnode._component) != null) {
		if (r.componentWillUnmount) {
			try {
				r.componentWillUnmount();
			} catch (e) {
				options._catchError(e, parentVNode);
			}
		}

		r.base = r._parentDom = null;
	}

	if ((r = vnode._children)) {
		for (let i = 0; i < r.length; i++) {
			if (r[i]) {
				unmount(
					r[i],
					parentVNode,
					skipRemove || typeof vnode.type != 'function'
				);
			}
		}
	}

	if (!skipRemove) {
		removeNode(vnode._dom);
	}

	// Must be set to `undefined` to properly clean up `_nextDom`
	// for which `null` is a valid value. See comment in `create-element.js`
	vnode._component = vnode._parent = vnode._dom = vnode._nextDom = undefined;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}
