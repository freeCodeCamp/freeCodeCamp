/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/**
 * Defines the group options type used by this module.
 * @typedef {object} GroupOptions
 * @property {boolean=} groupChildren
 * @property {boolean=} force
 * @property {number=} targetGroupCount
 */

/**
 * Defines the group config type used by this module.
 * @template I
 * @template G
 * @typedef {object} GroupConfig
 * @property {(item: I) => string[] | undefined} getKeys
 * @property {(name: string, items: I[]) => GroupOptions=} getOptions
 * @property {(key: string, children: I[], items: I[]) => G} createGroup
 */

/**
 * Defines the group type used by this module.
 * @template I
 * @template G
 * @typedef {{ config: GroupConfig<I, G>, name: string, alreadyGrouped: boolean, items: Items<I, G> | undefined }} Group
 */

/**
 * Defines the groups type used by this module.
 * @template I, G
 * @typedef {Set<Group<I, G>>} Groups
 */

/**
 * Defines the item with groups type used by this module.
 * @template I
 * @template G
 * @typedef {object} ItemWithGroups
 * @property {I} item
 * @property {Groups<I, G>} groups
 */

/**
 * Defines the items type used by this module.
 * @template T, G
 * @typedef {Set<ItemWithGroups<T, G>>} Items
 */

/**
 * Returns grouped items.
 * @template I
 * @template G
 * @template R
 * @param {I[]} items the list of items
 * @param {GroupConfig<I, G>[]} groupConfigs configuration
 * @returns {(I | G)[]} grouped items
 */
const smartGrouping = (items, groupConfigs) => {
	/** @type {Items<I, G>} */
	const itemsWithGroups = new Set();
	/** @type {Map<string, Group<I, G>>} */
	const allGroups = new Map();
	for (const item of items) {
		/** @type {Groups<I, G>} */
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
	 * Returns groups items.
	 * @param {Items<I, G>} itemsWithGroups input items with groups
	 * @returns {(I | G)[]} groups items
	 */
	const runGrouping = (itemsWithGroups) => {
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
		/** @type {Map<Group<I, G>, { items: Items<I, G>, options: GroupOptions | false | undefined, used: boolean }>} */
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
		/** @type {(I | G)[]} */
		const results = [];
		for (;;) {
			/** @type {Group<I, G> | undefined} */
			let bestGroup;
			let bestGroupSize = -1;
			/** @type {Items<I, G> | undefined} */
			let bestGroupItems;
			/** @type {GroupOptions | false | undefined} */
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
			results.push(
				groupConfig.createGroup(key, /** @type {I[]} */ (children), allItems)
			);
		}
		for (const { item } of itemsWithGroups) {
			results.push(item);
		}
		return results;
	};
	return runGrouping(itemsWithGroups);
};

module.exports = smartGrouping;
