/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

// Simulations show these probabilities for a single change
// 93.1% that one group is invalidated
// 4.8% that two groups are invalidated
// 1.1% that 3 groups are invalidated
// 0.1% that 4 or more groups are invalidated
//
// And these for removing/adding 10 lexically adjacent files
// 64.5% that one group is invalidated
// 24.8% that two groups are invalidated
// 7.8% that 3 groups are invalidated
// 2.7% that 4 or more groups are invalidated
//
// And these for removing/adding 3 random files
// 0% that one group is invalidated
// 3.7% that two groups are invalidated
// 80.8% that 3 groups are invalidated
// 12.3% that 4 groups are invalidated
// 3.2% that 5 or more groups are invalidated

/**
 * @param {string} a key
 * @param {string} b key
 * @returns {number} the similarity as number
 */
const similarity = (a, b) => {
	const l = Math.min(a.length, b.length);
	let dist = 0;
	for (let i = 0; i < l; i++) {
		const ca = a.charCodeAt(i);
		const cb = b.charCodeAt(i);
		dist += Math.max(0, 10 - Math.abs(ca - cb));
	}
	return dist;
};

/**
 * @param {string} a key
 * @param {string} b key
 * @param {Set<string>} usedNames set of already used names
 * @returns {string} the common part and a single char for the difference
 */
const getName = (a, b, usedNames) => {
	const l = Math.min(a.length, b.length);
	let i = 0;
	while (i < l) {
		if (a.charCodeAt(i) !== b.charCodeAt(i)) {
			i++;
			break;
		}
		i++;
	}
	while (i < l) {
		const name = a.slice(0, i);
		const lowerName = name.toLowerCase();
		if (!usedNames.has(lowerName)) {
			usedNames.add(lowerName);
			return name;
		}
		i++;
	}
	// names always contain a hash, so this is always unique
	// we don't need to check usedNames nor add it
	return a;
};

/**
 * @param {Record<string, number>} total total size
 * @param {Record<string, number>} size single size
 * @returns {void}
 */
const addSizeTo = (total, size) => {
	for (const key of Object.keys(size)) {
		total[key] = (total[key] || 0) + size[key];
	}
};

/**
 * @param {Record<string, number>} total total size
 * @param {Record<string, number>} size single size
 * @returns {void}
 */
const subtractSizeFrom = (total, size) => {
	for (const key of Object.keys(size)) {
		total[key] -= size[key];
	}
};

/**
 * @template T
 * @param {Iterable<Node<T>>} nodes some nodes
 * @returns {Record<string, number>} total size
 */
const sumSize = nodes => {
	const sum = Object.create(null);
	for (const node of nodes) {
		addSizeTo(sum, node.size);
	}
	return sum;
};

/**
 * @param {Record<string, number>} size size
 * @param {Record<string, number>} maxSize minimum size
 * @returns {boolean} true, when size is too big
 */
const isTooBig = (size, maxSize) => {
	for (const key of Object.keys(size)) {
		const s = size[key];
		if (s === 0) continue;
		const maxSizeValue = maxSize[key];
		if (typeof maxSizeValue === "number" && s > maxSizeValue) return true;
	}
	return false;
};

/**
 * @param {Record<string, number>} size size
 * @param {Record<string, number>} minSize minimum size
 * @returns {boolean} true, when size is too small
 */
const isTooSmall = (size, minSize) => {
	for (const key of Object.keys(size)) {
		const s = size[key];
		if (s === 0) continue;
		const minSizeValue = minSize[key];
		if (typeof minSizeValue === "number" && s < minSizeValue) return true;
	}
	return false;
};

/**
 * @param {Record<string, number>} size size
 * @param {Record<string, number>} minSize minimum size
 * @returns {Set<string>} set of types that are too small
 */
const getTooSmallTypes = (size, minSize) => {
	const types = new Set();
	for (const key of Object.keys(size)) {
		const s = size[key];
		if (s === 0) continue;
		const minSizeValue = minSize[key];
		if (typeof minSizeValue === "number" && s < minSizeValue) types.add(key);
	}
	return types;
};

/**
 * @template T
 * @param {TODO} size size
 * @param {Set<string>} types types
 * @returns {number} number of matching size types
 */
const getNumberOfMatchingSizeTypes = (size, types) => {
	let i = 0;
	for (const key of Object.keys(size)) {
		if (size[key] !== 0 && types.has(key)) i++;
	}
	return i;
};

/**
 * @param {Record<string, number>} size size
 * @param {Set<string>} types types
 * @returns {number} selective size sum
 */
const selectiveSizeSum = (size, types) => {
	let sum = 0;
	for (const key of Object.keys(size)) {
		if (size[key] !== 0 && types.has(key)) sum += size[key];
	}
	return sum;
};

/**
 * @template T
 */
class Node {
	/**
	 * @param {T} item item
	 * @param {string} key key
	 * @param {Record<string, number>} size size
	 */
	constructor(item, key, size) {
		this.item = item;
		this.key = key;
		this.size = size;
	}
}

/**
 * @template T
 */
class Group {
	/**
	 * @param {Node<T>[]} nodes nodes
	 * @param {number[] | null} similarities similarities between the nodes (length = nodes.length - 1)
	 * @param {Record<string, number>=} size size of the group
	 */
	constructor(nodes, similarities, size) {
		this.nodes = nodes;
		this.similarities = similarities;
		this.size = size || sumSize(nodes);
		/** @type {string | undefined} */
		this.key = undefined;
	}

	/**
	 * @param {function(Node<T>): boolean} filter filter function
	 * @returns {Node<T>[] | undefined} removed nodes
	 */
	popNodes(filter) {
		const newNodes = [];
		const newSimilarities = [];
		const resultNodes = [];
		let lastNode;
		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			if (filter(node)) {
				resultNodes.push(node);
			} else {
				if (newNodes.length > 0) {
					newSimilarities.push(
						lastNode === this.nodes[i - 1]
							? /** @type {number[]} */ (this.similarities)[i - 1]
							: similarity(/** @type {Node<T>} */ (lastNode).key, node.key)
					);
				}
				newNodes.push(node);
				lastNode = node;
			}
		}
		if (resultNodes.length === this.nodes.length) return;
		this.nodes = newNodes;
		this.similarities = newSimilarities;
		this.size = sumSize(newNodes);
		return resultNodes;
	}
}

/**
 * @template T
 * @param {Iterable<Node<T>>} nodes nodes
 * @returns {number[]} similarities
 */
const getSimilarities = nodes => {
	// calculate similarities between lexically adjacent nodes
	/** @type {number[]} */
	const similarities = [];
	let last;
	for (const node of nodes) {
		if (last !== undefined) {
			similarities.push(similarity(last.key, node.key));
		}
		last = node;
	}
	return similarities;
};

/**
 * @template T
 * @typedef {object} GroupedItems<T>
 * @property {string} key
 * @property {T[]} items
 * @property {Record<string, number>} size
 */

/**
 * @template T
 * @typedef {object} Options
 * @property {Record<string, number>} maxSize maximum size of a group
 * @property {Record<string, number>} minSize minimum size of a group (preferred over maximum size)
 * @property {Iterable<T>} items a list of items
 * @property {function(T): Record<string, number>} getSize function to get size of an item
 * @property {function(T): string} getKey function to get the key of an item
 */

/**
 * @template T
 * @param {Options<T>} options options object
 * @returns {GroupedItems<T>[]} grouped items
 */
module.exports = ({ maxSize, minSize, items, getSize, getKey }) => {
	/** @type {Group<T>[]} */
	const result = [];

	const nodes = Array.from(
		items,
		item => new Node(item, getKey(item), getSize(item))
	);

	/** @type {Node<T>[]} */
	const initialNodes = [];

	// lexically ordering of keys
	nodes.sort((a, b) => {
		if (a.key < b.key) return -1;
		if (a.key > b.key) return 1;
		return 0;
	});

	// return nodes bigger than maxSize directly as group
	// But make sure that minSize is not violated
	for (const node of nodes) {
		if (isTooBig(node.size, maxSize) && !isTooSmall(node.size, minSize)) {
			result.push(new Group([node], []));
		} else {
			initialNodes.push(node);
		}
	}

	if (initialNodes.length > 0) {
		const initialGroup = new Group(initialNodes, getSimilarities(initialNodes));

		/**
		 * @param {Group<T>} group group
		 * @param {Record<string, number>} consideredSize size of the group to consider
		 * @returns {boolean} true, if the group was modified
		 */
		const removeProblematicNodes = (group, consideredSize = group.size) => {
			const problemTypes = getTooSmallTypes(consideredSize, minSize);
			if (problemTypes.size > 0) {
				// We hit an edge case where the working set is already smaller than minSize
				// We merge problematic nodes with the smallest result node to keep minSize intact
				const problemNodes = group.popNodes(
					n => getNumberOfMatchingSizeTypes(n.size, problemTypes) > 0
				);
				if (problemNodes === undefined) return false;
				// Only merge it with result nodes that have the problematic size type
				const possibleResultGroups = result.filter(
					n => getNumberOfMatchingSizeTypes(n.size, problemTypes) > 0
				);
				if (possibleResultGroups.length > 0) {
					const bestGroup = possibleResultGroups.reduce((min, group) => {
						const minMatches = getNumberOfMatchingSizeTypes(min, problemTypes);
						const groupMatches = getNumberOfMatchingSizeTypes(
							group,
							problemTypes
						);
						if (minMatches !== groupMatches)
							return minMatches < groupMatches ? group : min;
						if (
							selectiveSizeSum(min.size, problemTypes) >
							selectiveSizeSum(group.size, problemTypes)
						)
							return group;
						return min;
					});
					for (const node of problemNodes) bestGroup.nodes.push(node);
					bestGroup.nodes.sort((a, b) => {
						if (a.key < b.key) return -1;
						if (a.key > b.key) return 1;
						return 0;
					});
				} else {
					// There are no other nodes with the same size types
					// We create a new group and have to accept that it's smaller than minSize
					result.push(new Group(problemNodes, null));
				}
				return true;
			}
			return false;
		};

		if (initialGroup.nodes.length > 0) {
			const queue = [initialGroup];

			while (queue.length) {
				const group = /** @type {Group<T>} */ (queue.pop());
				// only groups bigger than maxSize need to be splitted
				if (!isTooBig(group.size, maxSize)) {
					result.push(group);
					continue;
				}
				// If the group is already too small
				// we try to work only with the unproblematic nodes
				if (removeProblematicNodes(group)) {
					// This changed something, so we try this group again
					queue.push(group);
					continue;
				}

				// find unsplittable area from left and right
				// going minSize from left and right
				// at least one node need to be included otherwise we get stuck
				let left = 1;
				const leftSize = Object.create(null);
				addSizeTo(leftSize, group.nodes[0].size);
				while (left < group.nodes.length && isTooSmall(leftSize, minSize)) {
					addSizeTo(leftSize, group.nodes[left].size);
					left++;
				}
				let right = group.nodes.length - 2;
				const rightSize = Object.create(null);
				addSizeTo(rightSize, group.nodes[group.nodes.length - 1].size);
				while (right >= 0 && isTooSmall(rightSize, minSize)) {
					addSizeTo(rightSize, group.nodes[right].size);
					right--;
				}

				//      left v   v right
				// [ O O O ] O O O [ O O O ]
				// ^^^^^^^^^ leftSize
				//       rightSize ^^^^^^^^^
				// leftSize > minSize
				// rightSize > minSize

				// Perfect split: [ O O O ] [ O O O ]
				//                right === left - 1

				if (left - 1 > right) {
					// We try to remove some problematic nodes to "fix" that
					let prevSize;
					if (right < group.nodes.length - left) {
						subtractSizeFrom(rightSize, group.nodes[right + 1].size);
						prevSize = rightSize;
					} else {
						subtractSizeFrom(leftSize, group.nodes[left - 1].size);
						prevSize = leftSize;
					}
					if (removeProblematicNodes(group, prevSize)) {
						// This changed something, so we try this group again
						queue.push(group);
						continue;
					}
					// can't split group while holding minSize
					// because minSize is preferred of maxSize we return
					// the problematic nodes as result here even while it's too big
					// To avoid this make sure maxSize > minSize * 3
					result.push(group);
					continue;
				}
				if (left <= right) {
					// when there is a area between left and right
					// we look for best split point
					// we split at the minimum similarity
					// here key space is separated the most
					// But we also need to make sure to not create too small groups
					let best = -1;
					let bestSimilarity = Infinity;
					let pos = left;
					const rightSize = sumSize(group.nodes.slice(pos));

					//       pos v   v right
					// [ O O O ] O O O [ O O O ]
					// ^^^^^^^^^ leftSize
					// rightSize ^^^^^^^^^^^^^^^

					while (pos <= right + 1) {
						const similarity = /** @type {number[]} */ (group.similarities)[
							pos - 1
						];
						if (
							similarity < bestSimilarity &&
							!isTooSmall(leftSize, minSize) &&
							!isTooSmall(rightSize, minSize)
						) {
							best = pos;
							bestSimilarity = similarity;
						}
						addSizeTo(leftSize, group.nodes[pos].size);
						subtractSizeFrom(rightSize, group.nodes[pos].size);
						pos++;
					}
					if (best < 0) {
						// This can't happen
						// but if that assumption is wrong
						// fallback to a big group
						result.push(group);
						continue;
					}
					left = best;
					right = best - 1;
				}

				// create two new groups for left and right area
				// and queue them up
				const rightNodes = [group.nodes[right + 1]];
				/** @type {number[]} */
				const rightSimilarities = [];
				for (let i = right + 2; i < group.nodes.length; i++) {
					rightSimilarities.push(
						/** @type {number[]} */ (group.similarities)[i - 1]
					);
					rightNodes.push(group.nodes[i]);
				}
				queue.push(new Group(rightNodes, rightSimilarities));

				const leftNodes = [group.nodes[0]];
				/** @type {number[]} */
				const leftSimilarities = [];
				for (let i = 1; i < left; i++) {
					leftSimilarities.push(
						/** @type {number[]} */ (group.similarities)[i - 1]
					);
					leftNodes.push(group.nodes[i]);
				}
				queue.push(new Group(leftNodes, leftSimilarities));
			}
		}
	}

	// lexically ordering
	result.sort((a, b) => {
		if (a.nodes[0].key < b.nodes[0].key) return -1;
		if (a.nodes[0].key > b.nodes[0].key) return 1;
		return 0;
	});

	// give every group a name
	const usedNames = new Set();
	for (let i = 0; i < result.length; i++) {
		const group = result[i];
		if (group.nodes.length === 1) {
			group.key = group.nodes[0].key;
		} else {
			const first = group.nodes[0];
			const last = group.nodes[group.nodes.length - 1];
			const name = getName(first.key, last.key, usedNames);
			group.key = name;
		}
	}

	// return the results
	return result.map(
		group =>
			/** @type {GroupedItems<T>} */
			({
				key: group.key,
				items: group.nodes.map(node => node.item),
				size: group.size
			})
	);
};
