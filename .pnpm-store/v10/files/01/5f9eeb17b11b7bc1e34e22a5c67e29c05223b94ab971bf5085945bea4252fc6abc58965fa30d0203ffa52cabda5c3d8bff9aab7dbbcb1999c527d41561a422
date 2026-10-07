import { Component, toChildArray } from 'preact';
import { suspended } from './suspense.js';

// Indexes to linked list nodes (nodes are stored as arrays to save bytes).
const SUSPENDED_COUNT = 0;
const RESOLVED_COUNT = 1;
const NEXT_NODE = 2;

// Having custom inheritance instead of a class here saves a lot of bytes.
export function SuspenseList() {
	this._next = null;
	this._map = null;
}

// Mark one of child's earlier suspensions as resolved.
// Some pending callbacks may become callable due to this
// (e.g. the last suspended descendant gets resolved when
// revealOrder === 'together'). Process those callbacks as well.
const resolve = (list, child, node) => {
	if (++node[RESOLVED_COUNT] === node[SUSPENDED_COUNT]) {
		// The number a child (or any of its descendants) has been suspended
		// matches the number of times it's been resolved. Therefore we
		// mark the child as completely resolved by deleting it from ._map.
		// This is used to figure out when *all* children have been completely
		// resolved when revealOrder is 'together'.
		list._map.delete(child);
	}

	// If revealOrder is falsy then we can do an early exit, as the
	// callbacks won't get queued in the node anyway.
	// If revealOrder is 'together' then also do an early exit
	// if all suspended descendants have not yet been resolved.
	if (
		!list.props.revealOrder ||
		(list.props.revealOrder[0] === 't' && list._map.size)
	) {
		return;
	}

	// Walk the currently suspended children in order, calling their
	// stored callbacks on the way. Stop if we encounter a child that
	// has not been completely resolved yet.
	node = list._next;
	while (node) {
		while (node.length > 3) {
			node.pop()();
		}
		if (node[RESOLVED_COUNT] < node[SUSPENDED_COUNT]) {
			break;
		}
		list._next = node = node[NEXT_NODE];
	}
};

// Things we do here to save some bytes but are not proper JS inheritance:
// - call `new Component()` as the prototype
// - do not set `Suspense.prototype.constructor` to `Suspense`
SuspenseList.prototype = new Component();

SuspenseList.prototype._suspended = function (child) {
	const list = this;
	const delegated = suspended(list._vnode);

	let node = list._map.get(child);
	node[SUSPENDED_COUNT]++;

	return unsuspend => {
		const wrappedUnsuspend = () => {
			if (!list.props.revealOrder) {
				// Special case the undefined (falsy) revealOrder, as there
				// is no need to coordinate a specific order or unsuspends.
				unsuspend();
			} else {
				node.push(unsuspend);
				resolve(list, child, node);
			}
		};
		if (delegated) {
			delegated(wrappedUnsuspend);
		} else {
			wrappedUnsuspend();
		}
	};
};

SuspenseList.prototype.render = function (props) {
	this._next = null;
	this._map = new Map();

	const children = toChildArray(props.children);
	if (props.revealOrder && props.revealOrder[0] === 'b') {
		// If order === 'backwards' (or, well, anything starting with a 'b')
		// then flip the child list around so that the last child will be
		// the first in the linked list.
		children.reverse();
	}
	// Build the linked list. Iterate through the children in reverse order
	// so that `_next` points to the first linked list node to be resolved.
	for (let i = children.length; i--; ) {
		// Create a new linked list node as an array of form:
		// 	[suspended_count, resolved_count, next_node]
		// where suspended_count and resolved_count are numeric counters for
		// keeping track how many times a node has been suspended and resolved.
		//
		// Note that suspended_count starts from 1 instead of 0, so we can block
		// processing callbacks until componentDidMount has been called. In a sense
		// node is suspended at least until componentDidMount gets called!
		//
		// Pending callbacks are added to the end of the node:
		// 	[suspended_count, resolved_count, next_node, callback_0, callback_1, ...]
		this._map.set(children[i], (this._next = [1, 0, this._next]));
	}
	return props.children;
};

SuspenseList.prototype.componentDidUpdate =
	SuspenseList.prototype.componentDidMount = function () {
		// Iterate through all children after mounting for two reasons:
		// 1. As each node[SUSPENDED_COUNT] starts from 1, this iteration increases
		//    each node[RELEASED_COUNT] by 1, therefore balancing the counters.
		//    The nodes can now be completely consumed from the linked list.
		// 2. Handle nodes that might have gotten resolved between render and
		//    componentDidMount.
		this._map.forEach((node, child) => {
			resolve(this, child, node);
		});
	};
