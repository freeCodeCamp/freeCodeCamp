'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get createAutocompleteStorage () {
        return createAutocompleteStorage;
    },
    get createStorage () {
        return createStorage;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _type_of = require("@swc/helpers/_/_type_of");
var _lib = require("../../lib");
function createAutocompleteStorage(param) {
    var useEffect = param.useEffect, useMemo = param.useMemo, useState = param.useState;
    return function useStorage(param) {
        var showRecent = param.showRecent, query = param.query, indices = param.indices, indicesConfig = param.indicesConfig, suggestionsIndexName = param.suggestionsIndexName;
        var storageKey = showRecent && (typeof showRecent === "undefined" ? "undefined" : _type_of._(showRecent)) === 'object' ? showRecent.storageKey : undefined;
        var storage = useMemo(function() {
            return createStorage({
                limit: 5,
                storageKey: storageKey
            });
        }, [
            storageKey
        ]);
        var _useState = _sliced_to_array._(useState(storage.getSnapshot()), 2), snapshot = _useState[0], setSnapshot = _useState[1];
        useEffect(function() {
            storage.registerUpdateListener(function() {
                setSnapshot(storage.getSnapshot());
            });
            return function() {
                storage.unregisterUpdateListener();
            };
        }, [
            storage
        ]);
        if (!showRecent) {
            return {
                storage: {
                    onAdd: function onAdd() {},
                    onRemove: function onRemove() {}
                },
                storageHits: [],
                indicesForPropGetters: indices,
                indicesConfigForPropGetters: indicesConfig
            };
        }
        var storageHits = snapshot.getAll(query).map(function(value) {
            return {
                objectID: value,
                query: value,
                __indexName: 'recent-searches',
                _highlightResult: getHighlightedAttribute({
                    item: {
                        query: value
                    },
                    query: query || ''
                })
            };
        });
        var indicesForPropGetters = _to_consumable_array._(indices.map(function(index) {
            return index.indexName === suggestionsIndexName ? _object_spread_props._(_object_spread._({}, index), {
                hits: index.hits.filter(function(hit) {
                    return !(0, _lib.find)(storageHits, function(storageHit) {
                        return storageHit.query === hit.query;
                    });
                })
            }) : index;
        }));
        var indicesConfigForPropGetters = _to_consumable_array._(indicesConfig);
        indicesForPropGetters.unshift({
            indexName: 'recent-searches',
            indexId: 'recent-searches',
            hits: storageHits
        });
        indicesConfigForPropGetters.unshift({
            indexName: 'recent-searches',
            // @ts-expect-error - we know it has query as it's generated from storageHits
            getQuery: function getQuery(item) {
                return item.query;
            }
        });
        return {
            storage: storage,
            storageHits: storageHits,
            indicesForPropGetters: indicesForPropGetters,
            indicesConfigForPropGetters: indicesConfigForPropGetters
        };
    };
}
var LOCAL_STORAGE_KEY_TEST = 'test-localstorage-support';
var LOCAL_STORAGE_KEY = 'autocomplete-recent-searches';
function isLocalStorageSupported() {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY_TEST, '');
        localStorage.removeItem(LOCAL_STORAGE_KEY_TEST);
        return true;
    } catch (error) {
        return false;
    }
}
function getHighlightedAttribute(param) {
    var item = param.item, query = param.query;
    if (!query.trim().length) {
        return {
            query: {
                matchLevel: 'none'
            }
        };
    }
    return {
        query: {
            value: item.query.replace(new RegExp(query.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi'), function(match) {
                return "<mark>".concat(match, "</mark>");
            })
        }
    };
}
function getLocalStorage() {
    var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : LOCAL_STORAGE_KEY;
    if (!isLocalStorageSupported()) {
        return {
            setItems: function setItems() {},
            getItems: function getItems() {
                return [];
            }
        };
    }
    return {
        setItems: function setItems(items) {
            try {
                window.localStorage.setItem(key, JSON.stringify(items));
            } catch (unused) {
            // do nothing, this likely means the storage is full
            }
        },
        getItems: function getItems() {
            var items = window.localStorage.getItem(key);
            return items ? JSON.parse(items) : [];
        }
    };
}
function createStorage(param) {
    var _param_limit = param.limit, limit = _param_limit === void 0 ? 5 : _param_limit, storageKey = param.storageKey;
    var storage = getLocalStorage(storageKey);
    var updateListener = null;
    return {
        onAdd: function onAdd(query) {
            this.onRemove(query);
            storage.setItems([
                query
            ].concat(_to_consumable_array._(storage.getItems())));
        },
        onRemove: function onRemove(query) {
            storage.setItems(storage.getItems().filter(function(q) {
                return q !== query;
            }));
            updateListener === null || updateListener === void 0 ? void 0 : updateListener();
        },
        registerUpdateListener: function registerUpdateListener(callback) {
            updateListener = callback;
        },
        unregisterUpdateListener: function unregisterUpdateListener() {
            updateListener = null;
        },
        getSnapshot: function getSnapshot() {
            return {
                getAll: function getAll() {
                    var query = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
                    return storage.getItems().filter(function(q) {
                        return q.includes(query);
                    }).slice(0, limit);
                }
            };
        }
    };
}
