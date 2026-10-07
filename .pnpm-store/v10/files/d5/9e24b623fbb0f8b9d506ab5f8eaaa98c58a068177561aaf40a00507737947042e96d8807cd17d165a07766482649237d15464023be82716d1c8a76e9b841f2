/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * @typedef {object} GroupOptions
 * @property {boolean=} groupChildren
 * @property {boolean=} force
 * @property {number=} targetGroupCount
 */

/**
 * @template T
 * @template R
 * @typedef {object} GroupConfig
 * @property {function(T): string[] | undefined} getKeys
 * @property {function(string, (R | T)[], T[]): R} createGroup
 * @property {function(string, T[]): GroupOptions=} getOptions
 */

/**
 * @template T
 * @template R
 * @typedef {object} ItemWithGroups
 * @property {T} item
 * @property {Set<Group<T, R>>} groups
 */

/**
 * @template T
 * @template R
 * @typedef {{ config: GroupConfig<T, R>, name: string, alreadyGrouped: boolean, items: Set<ItemWithGroups<T, R>> | undefined }} Group
 */

/**
 * @template T
 * @template R
 * @param {T[]} items the list of items
 * @param {GroupConfig<T, R>[]} groupConfigs configuration
 * @returns {(R | T)[]} grouped items
 */
const smartGrouping = (items, groupConfigs) => {
	/** @type {Set<ItemWithGroups<T, R>>} */
	const itemsWithGroups = new Set();
	/** @type {Map<string, Group<T, R>>} */
	const allGroups = new Map();
	for (const item of items) {
		/** @type {Set<Group<T, R>>} */
		const groups = new Set();
		for (let i = 0; i < groupConfigs.length; i++) {
			const groupConfig = groupConfigs[i];
			const keys = groupConfig.getKeys(item);
			if (keys) {
				for (const name of keys) {
					const key = `${i}:${name}`;
					let group = allGroups.get(key);
					if (group === undefined) {
						allGroups.set(
							key,
							(group = {
								config: groupConfig,
								name,
								alreadyGrouped: false,
								items: undefined
							})
						);
					}
					groups.add(group);
				}
			}
		}
		itemsWithGroups.add({
			item,
			groups
		});
	}
	/**
	 * @param {Set<ItemWithGroups<T, R>>} itemsWithGroups input items with groups
	 * @returns {(T | R)[]} groups items
	 */
	const runGrouping = itemsWithGroups => {
		const totalSize = itemsWithGroups.size;
		for (const entry of itemsWithGroups) {
			for (const group of entry.groups) {
				if (group.alreadyGrouped) continue;
				const items = group.items;
				if (items === undefined) {
					group.items = new Set([entry]);
				} else {
					items.add(entry);
				}
			}
		}
		/** @type {Map<Group<T, R>, { items: Set<ItemWithGroups<T, R>>, options: GroupOptions | false | undefined, used: boolean }>} */
		const groupMap = new Map();
		for (const group of allGroups.values()) {
			if (group.items) {
				const items = group.items;
				group.items = undefined;
				groupMap.set(group, {
					items,
					options: undefined,
					used: false
				});
			}
		}
		/** @type {(T | R)[]} */
		const results = [];
		for (;;) {
			/** @type {Group<T, R> | undefined} */
			let bestGroup;
			let bestGroupSize = -1;
			let bestGroupItems;
			let bestGroupOptions;
			for (const [group, state] of groupMap) {
				const { items, used } = state;
				let options = state.options;
				if (options === undefined) {
					const groupConfig = group.config;
					state.options = options =
						(groupConfig.getOptions &&
							groupConfig.getOptions(
								group.name,
								Array.from(items, ({ item }) => item)
							)) ||
						false;
				}

				const force = options && options.force;
				if (!force) {
					if (bestGroupOptions && bestGroupOptions.force) continue;
					if (used) continue;
					if (items.size <= 1 || totalSize - items.size <= 1) {
						continue;
					}
				}
				const targetGroupCount = (options && options.targetGroupCount) || 4;
				const sizeValue = force
					? items.size
					: Math.min(
							items.size,
							(totalSize * 2) / targetGroupCount +
								itemsWithGroups.size -
								items.size
						);
				if (
					sizeValue > bestGroupSize ||
					(force && (!bestGroupOptions || !bestGroupOptions.force))
				) {
					bestGroup = group;
					bestGroupSize = sizeValue;
					bestGroupItems = items;
					bestGroupOptions = options;
				}
			}
			if (bestGroup === undefined) {
				break;
			}
			const items = new Set(bestGroupItems);
			const options = bestGroupOptions;

			const groupChildren = !options || options.groupChildren !== false;

			for (const item of items) {
				itemsWithGroups.delete(item);
				// Remove all groups that items have from the map to not select them again
				for (const group of item.groups) {
					const state = groupMap.get(group);
					if (state !== undefined) {
						state.items.delete(item);
						if (state.items.size === 0) {
							groupMap.delete(group);
						} else {
							state.options = undefined;
							if (groupChildren) {
								state.used = true;
							}
						}
					}
				}
			}
			groupMap.delete(bestGroup);

			const key = bestGroup.name;
			const groupConfig = bestGroup.config;

			const allItems = Array.from(items, ({ item }) => item);

			bestGroup.alreadyGrouped = true;
			const children = groupChildren ? runGrouping(items) : allItems;
			bestGroup.alreadyGrouped = false;

			results.push(groupConfig.createGroup(key, children, allItems));
		}
		for (const { item } of itemsWithGroups) {
			results.push(item);
		}
		return results;
	};
	return runGrouping(itemsWithGroups);
};

module.exports = smartGrouping;
