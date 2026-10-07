/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const NO_MARKER = 0;
const IN_PROGRESS_MARKER = 1;
const DONE_MARKER = 2;
const DONE_MAYBE_ROOT_CYCLE_MARKER = 3;
const DONE_AND_ROOT_MARKER = 4;

/**
 * @template T
 */
class Node {
	/**
	 * @param {T} item the value of the node
	 */
	constructor(item) {
		this.item = item;
		/** @type {Set<Node<T>>} */
		this.dependencies = new Set();
		this.marker = NO_MARKER;
		/** @type {Cycle<T> | undefined} */
		this.cycle = undefined;
		this.incoming = 0;
	}
}

/**
 * @template T
 */
class Cycle {
	constructor() {
		/** @type {Set<Node<T>>} */
		this.nodes = new Set();
	}
}

/**
 * @template T
 * @typedef {object} StackEntry
 * @property {Node<T>} node
 * @property {Node<T>[]} openEdges
 */

/**
 * @template T
 * @param {Iterable<T>} items list of items
 * @param {function(T): Iterable<T>} getDependencies function to get dependencies of an item (items that are not in list are ignored)
 * @returns {Iterable<T>} graph roots of the items
 */
module.exports = (items, getDependencies) => {
	/** @type {Map<T, Node<T>>} */
	const itemToNode = new Map();
	for (const item of items) {
		const node = new Node(item);
		itemToNode.set(item, node);
	}

	// early exit when there is only a single item
	if (itemToNode.size <= 1) return items;

	// grab all the dependencies
	for (const node of itemToNode.values()) {
		for (const dep of getDependencies(node.item)) {
			const depNode = itemToNode.get(dep);
			if (depNode !== undefined) {
				node.dependencies.add(depNode);
			}
		}
	}

	// Set of current root modules
	// items will be removed if a new reference to it has been found
	/** @type {Set<Node<T>>} */
	const roots = new Set();

	// Set of current cycles without references to it
	// cycles will be removed if a new reference to it has been found
	// that is not part of the cycle
	/** @type {Set<Cycle<T>>} */
	const rootCycles = new Set();

	// For all non-marked nodes
	for (const selectedNode of itemToNode.values()) {
		if (selectedNode.marker === NO_MARKER) {
			// deep-walk all referenced modules
			// in a non-recursive way

			// start by entering the selected node
			selectedNode.marker = IN_PROGRESS_MARKER;

			// keep a stack to avoid recursive walk
			/** @type {StackEntry<T>[]} */
			const stack = [
				{
					node: selectedNode,
					openEdges: Array.from(selectedNode.dependencies)
				}
			];

			// process the top item until stack is empty
			while (stack.length > 0) {
				const topOfStack = stack[stack.length - 1];

				// Are there still edges unprocessed in the current node?
				if (topOfStack.openEdges.length > 0) {
					// Process one dependency
					const dependency =
						/** @type {Node<T>} */
						(topOfStack.openEdges.pop());
					switch (dependency.marker) {
						case NO_MARKER:
							// dependency has not be visited yet
							// mark it as in-progress and recurse
							stack.push({
								node: dependency,
								openEdges: Array.from(dependency.dependencies)
							});
							dependency.marker = IN_PROGRESS_MARKER;
							break;
						case IN_PROGRESS_MARKER: {
							// It's a in-progress cycle
							let cycle = dependency.cycle;
							if (!cycle) {
								cycle = new Cycle();
								cycle.nodes.add(dependency);
								dependency.cycle = cycle;
							}
							// set cycle property for each node in the cycle
							// if nodes are already part of a cycle
							// we merge the cycles to a shared cycle
							for (
								let i = stack.length - 1;
								stack[i].node !== dependency;
								i--
							) {
								const node = stack[i].node;
								if (node.cycle) {
									if (node.cycle !== cycle) {
										// merge cycles
										for (const cycleNode of node.cycle.nodes) {
											cycleNode.cycle = cycle;
											cycle.nodes.add(cycleNode);
										}
									}
								} else {
									node.cycle = cycle;
									cycle.nodes.add(node);
								}
							}
							// don't recurse into dependencies
							// these are already on the stack
							break;
						}
						case DONE_AND_ROOT_MARKER:
							// This node has be visited yet and is currently a root node
							// But as this is a new reference to the node
							// it's not really a root
							// so we have to convert it to a normal node
							dependency.marker = DONE_MARKER;
							roots.delete(dependency);
							break;
						case DONE_MAYBE_ROOT_CYCLE_MARKER:
							// This node has be visited yet and
							// is maybe currently part of a completed root cycle
							// we found a new reference to the cycle
							// so it's not really a root cycle
							// remove the cycle from the root cycles
							// and convert it to a normal node
							rootCycles.delete(/** @type {Cycle<T>} */ (dependency.cycle));
							dependency.marker = DONE_MARKER;
							break;
						// DONE_MARKER: nothing to do, don't recurse into dependencies
					}
				} else {
					// All dependencies of the current node has been visited
					// we leave the node
					stack.pop();
					topOfStack.node.marker = DONE_MARKER;
				}
			}
			const cycle = selectedNode.cycle;
			if (cycle) {
				for (const node of cycle.nodes) {
					node.marker = DONE_MAYBE_ROOT_CYCLE_MARKER;
				}
				rootCycles.add(cycle);
			} else {
				selectedNode.marker = DONE_AND_ROOT_MARKER;
				roots.add(selectedNode);
			}
		}
	}

	// Extract roots from root cycles
	// We take the nodes with most incoming edges
	// inside of the cycle
	for (const cycle of rootCycles) {
		let max = 0;
		/** @type {Set<Node<T>>} */
		const cycleRoots = new Set();
		const nodes = cycle.nodes;
		for (const node of nodes) {
			for (const dep of node.dependencies) {
				if (nodes.has(dep)) {
					dep.incoming++;
					if (dep.incoming < max) continue;
					if (dep.incoming > max) {
						cycleRoots.clear();
						max = dep.incoming;
					}
					cycleRoots.add(dep);
				}
			}
		}
		for (const cycleRoot of cycleRoots) {
			roots.add(cycleRoot);
		}
	}

	// When roots were found, return them
	if (roots.size > 0) {
		return Array.from(roots, r => r.item);
	}

	throw new Error("Implementation of findGraphRoots is broken");
};
