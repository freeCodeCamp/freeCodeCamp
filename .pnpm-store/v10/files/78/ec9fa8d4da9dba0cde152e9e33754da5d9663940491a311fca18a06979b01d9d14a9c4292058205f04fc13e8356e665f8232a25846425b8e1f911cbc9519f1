import {
	createElement,
	render as preactRender,
	cloneElement as preactCloneElement,
	createRef,
	Component,
	createContext,
	Fragment
} from 'preact';
import {
	useState,
	useId,
	useReducer,
	useEffect,
	useLayoutEffect,
	useRef,
	useImperativeHandle,
	useMemo,
	useCallback,
	useContext,
	useDebugValue
} from 'preact/hooks';
import { PureComponent } from './PureComponent';
import { memo } from './memo';
import { forwardRef } from './forwardRef';
import { Children } from './Children';
import { Suspense, lazy } from './suspense';
import { SuspenseList } from './suspense-list';
import { createPortal } from './portals';
import { is } from './util';
import {
	hydrate,
	render,
	REACT_ELEMENT_TYPE,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
} from './render';

const version = '18.3.1'; // trick libraries to think we are react

/**
 * Legacy version of createElement.
 * @param {import('./internal').VNode["type"]} type The node name or Component constructor
 */
function createFactory(type) {
	return createElement.bind(null, type);
}

/**
 * Check if the passed element is a valid (p)react node.
 * @param {*} element The element to check
 * @returns {boolean}
 */
function isValidElement(element) {
	return !!element && element.$$typeof === REACT_ELEMENT_TYPE;
}

/**
 * Check if the passed element is a Fragment node.
 * @param {*} element The element to check
 * @returns {boolean}
 */
function isFragment(element) {
	return isValidElement(element) && element.type === Fragment;
}

/**
 * Check if the passed element is a Memo node.
 * @param {*} element The element to check
 * @returns {boolean}
 */
function isMemo(element) {
	return (
		!!element &&
		!!element.displayName &&
		(typeof element.displayName === 'string' ||
			element.displayName instanceof String) &&
		element.displayName.startsWith('Memo(')
	);
}

/**
 * Wrap `cloneElement` to abort if the passed element is not a valid element and apply
 * all vnode normalizations.
 * @param {import('./internal').VNode} element The vnode to clone
 * @param {object} props Props to add when cloning
 * @param {Array<import('./internal').ComponentChildren>} rest Optional component children
 */
function cloneElement(element) {
	if (!isValidElement(element)) return element;
	return preactCloneElement.apply(null, arguments);
}

/**
 * Remove a component tree from the DOM, including state and event handlers.
 * @param {import('./internal').PreactElement} container
 * @returns {boolean}
 */
function unmountComponentAtNode(container) {
	if (container._children) {
		preactRender(null, container);
		return true;
	}
	return false;
}

/**
 * Get the matching DOM node for a component
 * @param {import('./internal').Component} component
 * @returns {import('./internal').PreactElement | null}
 */
function findDOMNode(component) {
	return (
		(component &&
			(component.base || (component.nodeType === 1 && component))) ||
		null
	);
}

/**
 * Deprecated way to control batched rendering inside the reconciler, but we
 * already schedule in batches inside our rendering code
 * @template Arg
 * @param {(arg: Arg) => void} callback function that triggers the updated
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 */
// eslint-disable-next-line camelcase
const unstable_batchedUpdates = (callback, arg) => callback(arg);

/**
 * In React, `flushSync` flushes the entire tree and forces a rerender. It's
 * implmented here as a no-op.
 * @template Arg
 * @template Result
 * @param {(arg: Arg) => Result} callback function that runs before the flush
 * @param {Arg} [arg] Optional argument that can be passed to the callback
 * @returns
 */
const flushSync = (callback, arg) => callback(arg);

/**
 * Strict Mode is not implemented in Preact, so we provide a stand-in for it
 * that just renders its children without imposing any restrictions.
 */
const StrictMode = Fragment;

export function startTransition(cb) {
	cb();
}

export function useDeferredValue(val) {
	return val;
}

export function useTransition() {
	return [false, startTransition];
}

// TODO: in theory this should be done after a VNode is diffed as we want to insert
// styles/... before it attaches
export const useInsertionEffect = useLayoutEffect;

// compat to react-is
export const isElement = isValidElement;

/**
 * This is taken from https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js#L84
 * on a high level this cuts out the warnings, ... and attempts a smaller implementation
 * @typedef {{ _value: any; _getSnapshot: () => any }} Store
 */
export function useSyncExternalStore(subscribe, getSnapshot) {
	const value = getSnapshot();

	/**
	 * @typedef {{ _instance: Store }} StoreRef
	 * @type {[StoreRef, (store: StoreRef) => void]}
	 */
	const [{ _instance }, forceUpdate] = useState({
		_instance: { _value: value, _getSnapshot: getSnapshot }
	});

	useLayoutEffect(() => {
		_instance._value = value;
		_instance._getSnapshot = getSnapshot;

		if (didSnapshotChange(_instance)) {
			forceUpdate({ _instance });
		}
	}, [subscribe, value, getSnapshot]);

	useEffect(() => {
		if (didSnapshotChange(_instance)) {
			forceUpdate({ _instance });
		}

		return subscribe(() => {
			if (didSnapshotChange(_instance)) {
				forceUpdate({ _instance });
			}
		});
	}, [subscribe]);

	return value;
}

/** @type {(inst: Store) => boolean} */
function didSnapshotChange(inst) {
	const latestGetSnapshot = inst._getSnapshot;
	const prevValue = inst._value;
	try {
		const nextValue = latestGetSnapshot();
		return !is(prevValue, nextValue);
	} catch (error) {
		return true;
	}
}

export * from 'preact/hooks';
export {
	version,
	Children,
	render,
	hydrate,
	unmountComponentAtNode,
	createPortal,
	createElement,
	createContext,
	createFactory,
	cloneElement,
	createRef,
	Fragment,
	isValidElement,
	isFragment,
	isMemo,
	findDOMNode,
	Component,
	PureComponent,
	memo,
	forwardRef,
	flushSync,
	// eslint-disable-next-line camelcase
	unstable_batchedUpdates,
	StrictMode,
	Suspense,
	SuspenseList,
	lazy,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
};

// React copies the named exports to the default one.
export default {
	useState,
	useId,
	useReducer,
	useEffect,
	useLayoutEffect,
	useInsertionEffect,
	useTransition,
	useDeferredValue,
	useSyncExternalStore,
	startTransition,
	useRef,
	useImperativeHandle,
	useMemo,
	useCallback,
	useContext,
	useDebugValue,
	version,
	Children,
	render,
	hydrate,
	unmountComponentAtNode,
	createPortal,
	createElement,
	createContext,
	createFactory,
	cloneElement,
	createRef,
	Fragment,
	isValidElement,
	isElement,
	isFragment,
	isMemo,
	findDOMNode,
	Component,
	PureComponent,
	memo,
	forwardRef,
	flushSync,
	unstable_batchedUpdates,
	StrictMode,
	Suspense,
	SuspenseList,
	lazy,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
};
