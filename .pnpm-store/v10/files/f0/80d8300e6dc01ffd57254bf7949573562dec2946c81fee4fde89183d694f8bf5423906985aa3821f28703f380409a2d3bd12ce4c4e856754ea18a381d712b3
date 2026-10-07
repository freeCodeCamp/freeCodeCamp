const getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
        _aliases.push(name);
    }
    if (aliases) {
        for (const alias of aliases) {
            _aliases.push(alias);
        }
    }
    return _aliases;
};
const getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
export const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
                isRemoved = true;
                for (const alias of aliases) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                for (const alias of getAllAliases(entry.name, entry.aliases)) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ` +
                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +
                        `middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = absoluteEntries[toOverrideIndex];
                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` +
                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +
                                `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` +
                                `${entry.priority} priority in ${entry.step} step.`);
                        }
                        absoluteEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = relativeEntries[toOverrideIndex];
                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` +
                                `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                                `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` +
                                `"${entry.toMiddleware}" middleware.`);
                        }
                        relativeEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name, aliases: _aliases } = entry;
                if (tags && tags.includes(toRemove)) {
                    const aliases = getAllAliases(name, _aliases);
                    for (const alias of aliases) {
                        entriesNameSet.delete(alias);
                    }
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                const step = mw.step ??
                    mw.relation +
                        " " +
                        mw.toMiddleware;
                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
        },
        identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
                identifyOnResolve = toggle;
            return identifyOnResolve;
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
                console.log(stack.identify());
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};
