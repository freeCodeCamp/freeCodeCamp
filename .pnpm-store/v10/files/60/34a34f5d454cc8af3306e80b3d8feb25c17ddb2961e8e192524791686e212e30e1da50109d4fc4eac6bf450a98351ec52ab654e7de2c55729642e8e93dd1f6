'use strict';

/**
 * Special values that tell deepmerge to perform a certain action.
 */
const actions = {
    defaultMerge: Symbol("deepmerge-ts: default merge"),
    skip: Symbol("deepmerge-ts: skip"),
};
/**
 * Special values that tell deepmergeInto to perform a certain action.
 */
const actionsInto = {
    defaultMerge: actions.defaultMerge,
};

/**
 * The default function to update meta data.
 *
 * It doesn't update the meta data.
 */
function defaultMetaDataUpdater(previousMeta, metaMeta) {
    return metaMeta;
}
/**
 * The default function to filter values.
 *
 * It filters out undefined values.
 */
function defaultFilterValues(values, meta) {
    return values.filter((value) => value !== undefined);
}

/**
 * The different types of objects deepmerge-ts support.
 */
var ObjectType;
(function (ObjectType) {
    ObjectType[ObjectType["NOT"] = 0] = "NOT";
    ObjectType[ObjectType["RECORD"] = 1] = "RECORD";
    ObjectType[ObjectType["ARRAY"] = 2] = "ARRAY";
    ObjectType[ObjectType["SET"] = 3] = "SET";
    ObjectType[ObjectType["MAP"] = 4] = "MAP";
    ObjectType[ObjectType["OTHER"] = 5] = "OTHER";
})(ObjectType || (ObjectType = {}));
/**
 * Get the type of the given object.
 *
 * @param object - The object to get the type of.
 * @returns The type of the given object.
 */
function getObjectType(object) {
    if (typeof object !== "object" || object === null) {
        return 0 /* ObjectType.NOT */;
    }
    if (Array.isArray(object)) {
        return 2 /* ObjectType.ARRAY */;
    }
    if (isRecord(object)) {
        return 1 /* ObjectType.RECORD */;
    }
    if (object instanceof Set) {
        return 3 /* ObjectType.SET */;
    }
    if (object instanceof Map) {
        return 4 /* ObjectType.MAP */;
    }
    return 5 /* ObjectType.OTHER */;
}
/**
 * Get the keys of the given objects including symbol keys.
 *
 * Note: Only keys to enumerable properties are returned.
 *
 * @param objects - An array of objects to get the keys of.
 * @returns A set containing all the keys of all the given objects.
 */
function getKeys(objects) {
    const keys = new Set();
    for (const object of objects) {
        for (const key of [...Object.keys(object), ...Object.getOwnPropertySymbols(object)]) {
            keys.add(key);
        }
    }
    return keys;
}
/**
 * Does the given object have the given property.
 *
 * @param object - The object to test.
 * @param property - The property to test.
 * @returns Whether the object has the property.
 */
function objectHasProperty(object, property) {
    return typeof object === "object" && Object.prototype.propertyIsEnumerable.call(object, property);
}
/**
 * Get an iterable object that iterates over the given iterables.
 */
function getIterableOfIterables(iterables) {
    let mut_iterablesIndex = 0;
    let mut_iterator = iterables[0]?.[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    do {
                        if (mut_iterator === undefined) {
                            return { done: true, value: undefined };
                        }
                        const result = mut_iterator.next();
                        if (result.done === true) {
                            mut_iterablesIndex += 1;
                            mut_iterator = iterables[mut_iterablesIndex]?.[Symbol.iterator]();
                            continue;
                        }
                        return {
                            done: false,
                            value: result.value,
                        };
                    } while (true);
                },
            };
        },
    };
}
// eslint-disable-next-line unicorn/prefer-set-has -- Array is more performant for a low number of elements.
const validRecordToStringValues = ["[object Object]", "[object Module]"];
/**
 * Does the given object appear to be a record.
 */
function isRecord(value) {
    // All records are objects.
    if (!validRecordToStringValues.includes(Object.prototype.toString.call(value))) {
        return false;
    }
    const { constructor } = value;
    // If has modified constructor.
    // eslint-disable-next-line ts/no-unnecessary-condition
    if (constructor === undefined) {
        return true;
    }
    const prototype = constructor.prototype;
    // If has modified prototype.
    if (prototype === null ||
        typeof prototype !== "object" ||
        !validRecordToStringValues.includes(Object.prototype.toString.call(prototype))) {
        return false;
    }
    // If constructor does not have an Object-specific method.
    // eslint-disable-next-line sonar/prefer-single-boolean-return, no-prototype-builtins
    if (!prototype.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    // Most likely a record.
    return true;
}

/**
 * The default strategy to merge records.
 *
 * @param values - The records.
 */
function mergeRecords$1(values, utils, meta) {
    const result = {};
    for (const key of getKeys(values)) {
        const propValues = [];
        for (const value of values) {
            if (objectHasProperty(value, key)) {
                propValues.push(value[key]);
            }
        }
        if (propValues.length === 0) {
            continue;
        }
        const updatedMeta = utils.metaDataUpdater(meta, {
            key,
            parents: values,
        });
        const propertyResult = mergeUnknowns(propValues, utils, updatedMeta);
        if (propertyResult === actions.skip) {
            continue;
        }
        if (key === "__proto__") {
            Object.defineProperty(result, key, {
                value: propertyResult,
                configurable: true,
                enumerable: true,
                writable: true,
            });
        }
        else {
            result[key] = propertyResult;
        }
    }
    return result;
}
/**
 * The default strategy to merge arrays.
 *
 * @param values - The arrays.
 */
function mergeArrays$1(values) {
    return values.flat();
}
/**
 * The default strategy to merge sets.
 *
 * @param values - The sets.
 */
function mergeSets$1(values) {
    return new Set(getIterableOfIterables(values));
}
/**
 * The default strategy to merge maps.
 *
 * @param values - The maps.
 */
function mergeMaps$1(values) {
    return new Map(getIterableOfIterables(values));
}
/**
 * Get the last value in the given array.
 */
function mergeOthers$1(values) {
    return values.at(-1);
}
/**
 * The merge functions.
 */
const mergeFunctions = {
    mergeRecords: mergeRecords$1,
    mergeArrays: mergeArrays$1,
    mergeSets: mergeSets$1,
    mergeMaps: mergeMaps$1,
    mergeOthers: mergeOthers$1,
};

/**
 * Deeply merge objects.
 *
 * @param objects - The objects to merge.
 */
function deepmerge(...objects) {
    return deepmergeCustom({})(...objects);
}
function deepmergeCustom(options, rootMetaData) {
    const utils = getUtils(options, customizedDeepmerge);
    /**
     * The customized deepmerge function.
     */
    function customizedDeepmerge(...objects) {
        return mergeUnknowns(objects, utils, rootMetaData);
    }
    return customizedDeepmerge;
}
/**
 * The the utils that are available to the merge functions.
 *
 * @param options - The options the user specified
 */
function getUtils(options, customizedDeepmerge) {
    return {
        defaultMergeFunctions: mergeFunctions,
        mergeFunctions: {
            ...mergeFunctions,
            ...Object.fromEntries(Object.entries(options)
                .filter(([key, option]) => Object.hasOwn(mergeFunctions, key))
                .map(([key, option]) => (option === false ? [key, mergeFunctions.mergeOthers] : [key, option]))),
        },
        metaDataUpdater: (options.metaDataUpdater ?? defaultMetaDataUpdater),
        deepmerge: customizedDeepmerge,
        useImplicitDefaultMerging: options.enableImplicitDefaultMerging ?? false,
        filterValues: options.filterValues === false ? undefined : (options.filterValues ?? defaultFilterValues),
        actions,
    };
}
/**
 * Merge unknown things.
 *
 * @param values - The values.
 */
function mergeUnknowns(values, utils, meta) {
    const filteredValues = utils.filterValues?.(values, meta) ?? values;
    if (filteredValues.length === 0) {
        return undefined;
    }
    if (filteredValues.length === 1) {
        return mergeOthers(filteredValues, utils, meta);
    }
    const type = getObjectType(filteredValues[0]);
    if (type !== 0 /* ObjectType.NOT */ && type !== 5 /* ObjectType.OTHER */) {
        for (let mut_index = 1; mut_index < filteredValues.length; mut_index++) {
            if (getObjectType(filteredValues[mut_index]) === type) {
                continue;
            }
            return mergeOthers(filteredValues, utils, meta);
        }
    }
    switch (type) {
        case 1 /* ObjectType.RECORD */: {
            return mergeRecords(filteredValues, utils, meta);
        }
        case 2 /* ObjectType.ARRAY */: {
            return mergeArrays(filteredValues, utils, meta);
        }
        case 3 /* ObjectType.SET */: {
            return mergeSets(filteredValues, utils, meta);
        }
        case 4 /* ObjectType.MAP */: {
            return mergeMaps(filteredValues, utils, meta);
        }
        default: {
            return mergeOthers(filteredValues, utils, meta);
        }
    }
}
/**
 * Merge records.
 *
 * @param values - The records.
 */
function mergeRecords(values, utils, meta) {
    const result = utils.mergeFunctions.mergeRecords(values, utils, meta);
    if (result === actions.defaultMerge ||
        (utils.useImplicitDefaultMerging &&
            result === undefined &&
            utils.mergeFunctions.mergeRecords !== utils.defaultMergeFunctions.mergeRecords)) {
        return utils.defaultMergeFunctions.mergeRecords(values, utils, meta);
    }
    return result;
}
/**
 * Merge arrays.
 *
 * @param values - The arrays.
 */
function mergeArrays(values, utils, meta) {
    const result = utils.mergeFunctions.mergeArrays(values, utils, meta);
    if (result === actions.defaultMerge ||
        (utils.useImplicitDefaultMerging &&
            result === undefined &&
            utils.mergeFunctions.mergeArrays !== utils.defaultMergeFunctions.mergeArrays)) {
        return utils.defaultMergeFunctions.mergeArrays(values);
    }
    return result;
}
/**
 * Merge sets.
 *
 * @param values - The sets.
 */
function mergeSets(values, utils, meta) {
    const result = utils.mergeFunctions.mergeSets(values, utils, meta);
    if (result === actions.defaultMerge ||
        (utils.useImplicitDefaultMerging &&
            result === undefined &&
            utils.mergeFunctions.mergeSets !== utils.defaultMergeFunctions.mergeSets)) {
        return utils.defaultMergeFunctions.mergeSets(values);
    }
    return result;
}
/**
 * Merge maps.
 *
 * @param values - The maps.
 */
function mergeMaps(values, utils, meta) {
    const result = utils.mergeFunctions.mergeMaps(values, utils, meta);
    if (result === actions.defaultMerge ||
        (utils.useImplicitDefaultMerging &&
            result === undefined &&
            utils.mergeFunctions.mergeMaps !== utils.defaultMergeFunctions.mergeMaps)) {
        return utils.defaultMergeFunctions.mergeMaps(values);
    }
    return result;
}
/**
 * Merge other things.
 *
 * @param values - The other things.
 */
function mergeOthers(values, utils, meta) {
    const result = utils.mergeFunctions.mergeOthers(values, utils, meta);
    if (result === actions.defaultMerge ||
        (utils.useImplicitDefaultMerging &&
            result === undefined &&
            utils.mergeFunctions.mergeOthers !== utils.defaultMergeFunctions.mergeOthers)) {
        return utils.defaultMergeFunctions.mergeOthers(values);
    }
    return result;
}

/**
 * The default strategy to merge records into a target record.
 *
 * @param mut_target - The result will be mutated into this record
 * @param values - The records (including the target's value if there is one).
 */
function mergeRecordsInto$1(mut_target, values, utils, meta) {
    for (const key of getKeys(values)) {
        const propValues = [];
        for (const value of values) {
            if (objectHasProperty(value, key)) {
                propValues.push(value[key]);
            }
        }
        if (propValues.length === 0) {
            continue;
        }
        const updatedMeta = utils.metaDataUpdater(meta, {
            key,
            parents: values,
        });
        const propertyTarget = { value: propValues[0] };
        mergeUnknownsInto(propertyTarget, propValues, utils, updatedMeta);
        if (key === "__proto__") {
            Object.defineProperty(mut_target.value, key, {
                value: propertyTarget.value,
                configurable: true,
                enumerable: true,
                writable: true,
            });
        }
        else {
            mut_target.value[key] = propertyTarget.value;
        }
    }
}
/**
 * The default strategy to merge arrays into a target array.
 *
 * @param mut_target - The result will be mutated into this array
 * @param values - The arrays (including the target's value if there is one).
 */
function mergeArraysInto$1(mut_target, values) {
    mut_target.value.push(...values.slice(1).flat());
}
/**
 * The default strategy to merge sets into a target set.
 *
 * @param mut_target - The result will be mutated into this set
 * @param values - The sets (including the target's value if there is one).
 */
function mergeSetsInto$1(mut_target, values) {
    for (const value of getIterableOfIterables(values.slice(1))) {
        mut_target.value.add(value);
    }
}
/**
 * The default strategy to merge maps into a target map.
 *
 * @param mut_target - The result will be mutated into this map
 * @param values - The maps (including the target's value if there is one).
 */
function mergeMapsInto$1(mut_target, values) {
    for (const [key, value] of getIterableOfIterables(values.slice(1))) {
        mut_target.value.set(key, value);
    }
}
/**
 * Set the target to the last value.
 */
function mergeOthersInto$1(mut_target, values) {
    mut_target.value = values.at(-1);
}
/**
 * The merge functions.
 */
const mergeIntoFunctions = {
    mergeRecords: mergeRecordsInto$1,
    mergeArrays: mergeArraysInto$1,
    mergeSets: mergeSetsInto$1,
    mergeMaps: mergeMapsInto$1,
    mergeOthers: mergeOthersInto$1,
};

function deepmergeInto(target, ...objects) {
    return void deepmergeIntoCustom({})(target, ...objects);
}
function deepmergeIntoCustom(options, rootMetaData) {
    const utils = getIntoUtils(options, customizedDeepmergeInto);
    /**
     * The customized deepmerge function.
     */
    function customizedDeepmergeInto(target, ...objects) {
        mergeUnknownsInto({ value: target }, [target, ...objects], utils, rootMetaData);
    }
    return customizedDeepmergeInto;
}
/**
 * The the utils that are available to the merge functions.
 *
 * @param options - The options the user specified
 */
function getIntoUtils(options, customizedDeepmergeInto) {
    return {
        defaultMergeFunctions: mergeIntoFunctions,
        mergeFunctions: {
            ...mergeIntoFunctions,
            ...Object.fromEntries(Object.entries(options)
                .filter(([key, option]) => Object.hasOwn(mergeIntoFunctions, key))
                .map(([key, option]) => (option === false ? [key, mergeIntoFunctions.mergeOthers] : [key, option]))),
        },
        metaDataUpdater: (options.metaDataUpdater ?? defaultMetaDataUpdater),
        deepmergeInto: customizedDeepmergeInto,
        filterValues: options.filterValues === false ? undefined : (options.filterValues ?? defaultFilterValues),
        actions: actionsInto,
    };
}
/**
 * Merge unknown things into a target.
 *
 * @param mut_target - The target to merge into.
 * @param values - The values.
 */
function mergeUnknownsInto(mut_target, values, utils, meta) {
    const filteredValues = utils.filterValues?.(values, meta) ?? values;
    if (filteredValues.length === 0) {
        return;
    }
    if (filteredValues.length === 1) {
        return void mergeOthersInto(mut_target, filteredValues, utils, meta);
    }
    const type = getObjectType(mut_target.value);
    if (type !== 0 /* ObjectType.NOT */ && type !== 5 /* ObjectType.OTHER */) {
        for (let mut_index = 1; mut_index < filteredValues.length; mut_index++) {
            if (getObjectType(filteredValues[mut_index]) === type) {
                continue;
            }
            return void mergeOthersInto(mut_target, filteredValues, utils, meta);
        }
    }
    switch (type) {
        case 1 /* ObjectType.RECORD */: {
            return void mergeRecordsInto(mut_target, filteredValues, utils, meta);
        }
        case 2 /* ObjectType.ARRAY */: {
            return void mergeArraysInto(mut_target, filteredValues, utils, meta);
        }
        case 3 /* ObjectType.SET */: {
            return void mergeSetsInto(mut_target, filteredValues, utils, meta);
        }
        case 4 /* ObjectType.MAP */: {
            return void mergeMapsInto(mut_target, filteredValues, utils, meta);
        }
        default: {
            return void mergeOthersInto(mut_target, filteredValues, utils, meta);
        }
    }
}
/**
 * Merge records into a target record.
 *
 * @param mut_target - The target to merge into.
 * @param values - The records.
 */
function mergeRecordsInto(mut_target, values, utils, meta) {
    const action = utils.mergeFunctions.mergeRecords(mut_target, values, utils, meta);
    if (action === actionsInto.defaultMerge) {
        utils.defaultMergeFunctions.mergeRecords(mut_target, values, utils, meta);
    }
}
/**
 * Merge arrays into a target array.
 *
 * @param mut_target - The target to merge into.
 * @param values - The arrays.
 */
function mergeArraysInto(mut_target, values, utils, meta) {
    const action = utils.mergeFunctions.mergeArrays(mut_target, values, utils, meta);
    if (action === actionsInto.defaultMerge) {
        utils.defaultMergeFunctions.mergeArrays(mut_target, values);
    }
}
/**
 * Merge sets into a target set.
 *
 * @param mut_target - The target to merge into.
 * @param values - The sets.
 */
function mergeSetsInto(mut_target, values, utils, meta) {
    const action = utils.mergeFunctions.mergeSets(mut_target, values, utils, meta);
    if (action === actionsInto.defaultMerge) {
        utils.defaultMergeFunctions.mergeSets(mut_target, values);
    }
}
/**
 * Merge maps into a target map.
 *
 * @param mut_target - The target to merge into.
 * @param values - The maps.
 */
function mergeMapsInto(mut_target, values, utils, meta) {
    const action = utils.mergeFunctions.mergeMaps(mut_target, values, utils, meta);
    if (action === actionsInto.defaultMerge) {
        utils.defaultMergeFunctions.mergeMaps(mut_target, values);
    }
}
/**
 * Merge other things into a target.
 *
 * @param mut_target - The target to merge into.
 * @param values - The other things.
 */
function mergeOthersInto(mut_target, values, utils, meta) {
    const action = utils.mergeFunctions.mergeOthers(mut_target, values, utils, meta);
    if (action === actionsInto.defaultMerge || mut_target.value === actionsInto.defaultMerge) {
        utils.defaultMergeFunctions.mergeOthers(mut_target, values);
    }
}

exports.deepmerge = deepmerge;
exports.deepmergeCustom = deepmergeCustom;
exports.deepmergeInto = deepmergeInto;
exports.deepmergeIntoCustom = deepmergeIntoCustom;
exports.getKeys = getKeys;
exports.getObjectType = getObjectType;
exports.objectHasProperty = objectHasProperty;
