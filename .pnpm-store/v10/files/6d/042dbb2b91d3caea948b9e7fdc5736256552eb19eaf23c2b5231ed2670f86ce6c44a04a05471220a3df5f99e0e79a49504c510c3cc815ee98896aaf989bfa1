/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const NO_MARKER = 0;
const IN_PROGRESS_MARKER = 1;
const DONE_MARKER = 2;
const CANDIDATE_MARKER = 3;

/**
 * Defines the nodes type used by this module.
 * @template T
 * @typedef {Set<Node<T>>} Nodes
 */

/**
 * Represents the node runtime component.
 * @template T
 */
class Node {
	/**
	 * Creates an instance of Node.
	 * @param {T} item the value of the node
	 */
	constructor(item) {
		this.item = item;
		/** @type {Nodes<T>} */
		this.dependencies = new Set();
		/** @type {SCC<T>} */
		this.scc = new SCC();
		// Each node starts as a single-node SCC
		this.scc.nodes.add(this);
		/** @type {number} */
		this.incoming = 0;
	}
}

/**
 * SCC (strongly connected component)
 * @template T
 */
class SCC {
	constructor() {
		/** @type {Nodes<T>} */
		this.nodes = new Set();
		this.marker = NO_MARKER;
	}
}

/**
 * Defines the stack entry type used by this module.
 * @template T
 * @typedef {object} StackEntry
 * @property {Node<T>} node
 * @property {Node<T>[]} openEdges
 */

/**
 * Returns graph roots of the items.
 * @template T
 * @param {Iterable<T>} items list of items
 * @param {(item: T) => Iterable<T>} getDependencies function to get dependencies of an item (items that are not in list are ignored)
 * @returns {Iterable<T>} graph roots of the items
 */
module.exports = (items, getDependencies) => {
	/** @type {Map<T, Node<T>>} */
	const itemToNode = new Map();
	for (const item of items) {
		const node = new Node(item);
		itemToNode.set(item, node);
	}

	// Early exit when there is only one node
	if (itemToNode.size <= 1) return items;

	// Build graph edges
	for (const node of itemToNode.values()) {
		for (const dep of getDependencies(node.item)) {
			const depNode = itemToNode.get(dep);
			if (depNode !== undefined) {
				node.dependencies.add(depNode);
			}
		}
	}

	// All candidate root SCCs, they will be removed once an incoming edge is found
	/** @type {Set<SCC<T>>} */
	const rootSCCs = new Set();

	for (const selectedNode of itemToNode.values()) {
		// DFS walk only once per unseen SCC
		if (selectedNode.scc.marker === NO_MARKER) {
			selectedNode.scc.marker = IN_PROGRESS_MARKER;

			// Keep a stack to avoid recursive walk
			/** @type {StackEntry<T>[]} */
			const stack = [
				{
					node: selectedNode,
					openEdges: [...selectedNode.dependencies]
				}
			];

			while (stack.length > 0) {
				const topOfStack = stack[stack.length - 1];

				// Process one unvisited outgoing edge if available
				if (topOfStack.openEdges.length > 0) {
					const dependency =
						/** @type {Node<T>} */
						(topOfStack.openEdges.pop());
					const depSCC = dependency.scc;
					switch (depSCC.marker) {
						case NO_MARKER:
							// First time we see this SCC: enter it
							stack.push({
								node: dependency,
								openEdges: [...dependency.dependencies]
							});
							depSCC.marker = IN_PROGRESS_MARKER;
							break;
						case IN_PROGRESS_MARKER: {
							// Back-edge to an SCC that is still on the stack
							// Example:
							//   A -> B -> C -> D
							//        ^         |
							//        |_________|
							// If we are at `D` and traverse `D` -> `B`, then `B/C/D` must be in one SCC
							/** @type {Set<SCC<T>>} */
							const sccsToMerge = new Set();
							for (
								let i = stack.length - 1;
								stack[i].node.scc !== depSCC;
								i--
							) {
								sccsToMerge.add(stack[i].node.scc);
							}
							for (const sccToMerge of sccsToMerge) {
								for (const nodeInMergedSCC of sccToMerge.nodes) {
									nodeInMergedSCC.scc = depSCC;
									depSCC.nodes.add(nodeInMergedSCC);
								}
							}
							break;
						}
						case CANDIDATE_MARKER:
							// This finished SCC was previously considered as root SCC
							// We just found a new incoming edge, so it is no longer a candidate
							rootSCCs.delete(/** @type {SCC<T>} */ (depSCC));
							depSCC.marker = DONE_MARKER;
							break;
						case DONE_MARKER:
							// Already finalized and not a candidate
							break;
					}
				} else {
					// All dependencies of the current node have been processed
					// So we leave the node
					stack.pop();
					// Mark an SCC as DONE only when the popped node is the last
					// node from that SCC remaining on the current stack.
					//   A -> B -> C -> D
					//        ^         |
					//        |_________|
					// If `B` is popped and the new stack top is `A`, they are in
					// different SCCs, so B's SCC can be finalized.
					if (
						stack.length &&
						topOfStack.node.scc !== stack[stack.length - 1].node.scc
					) {
						topOfStack.node.scc.marker = DONE_MARKER;
					}
				}
			}
			const scc = selectedNode.scc;
			// This SCC is complete and currently has no known incoming edge
			scc.marker = CANDIDATE_MARKER;
			rootSCCs.add(scc);
		}
	}

	/** @type {Set<T>} */
	const rootNodes = new Set();

	// For each root SCC, we select node with the most incoming edges
	// from within the same SCC
	for (const scc of rootSCCs) {
		let max = 0;
		/** @type {Nodes<T>} */
		const nodes = new Set(scc.nodes);
		for (const node of scc.nodes) {
			for (const dep of node.dependencies) {
				if (scc.nodes.has(dep)) {
					dep.incoming++;
					if (dep.incoming < max) continue;
					if (dep.incoming > max) {
						nodes.clear();
						max = dep.incoming;
					}
					nodes.add(dep);
				}
			}
		}
		for (const node of nodes) {
			rootNodes.add(node.item);
		}
	}

	// When root nodes were found, return them
	if (rootNodes.size > 0) return rootNodes;

	throw new Error("Implementation of findGraphRoots is broken");
};
