'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAutocompletePropGetters", {
    enumerable: true,
    get: function() {
        return createAutocompletePropGetters;
    }
});
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _type_of = require("@swc/helpers/_/_type_of");
var _lib = require("../../lib");
function createAutocompletePropGetters(param) {
    var useEffect = param.useEffect, useId = param.useId, useMemo = param.useMemo, useRef = param.useRef, useState = param.useState;
    return function usePropGetters(param) {
        var indices = param.indices, indicesConfig = param.indicesConfig, onRefine = param.onRefine, globalOnSelect = param.onSelect, onApply = param.onApply, onSubmit = param.onSubmit, placeholder = param.placeholder, _param_isDetached = param.isDetached, isDetached = _param_isDetached === void 0 ? false : _param_isDetached, _param_shouldHidePanel = param.shouldHidePanel, shouldHidePanel = _param_shouldHidePanel === void 0 ? false : _param_shouldHidePanel, _param_autoFocus = param.autoFocus, autoFocus = _param_autoFocus === void 0 ? false : _param_autoFocus;
        var getElementId = createGetElementId(useId());
        var inputRef = useRef(null);
        var rootRef = useRef(null);
        var _useState = _sliced_to_array._(useState(autoFocus), 2), isOpen = _useState[0], setIsOpen = _useState[1];
        var _useState1 = _sliced_to_array._(useState(undefined), 2), activeDescendant = _useState1[0], setActiveDescendant = _useState1[1];
        var _useMemo = useMemo(function() {
            return buildItems({
                indices: indices,
                indicesConfig: indicesConfig,
                getElementId: getElementId
            });
        }, [
            indices,
            indicesConfig,
            getElementId
        ]), items = _useMemo.items, itemsIds = _useMemo.itemsIds;
        useEffect(function() {
            // In detached mode, we don't close the panel on body click
            // because the overlay handles closing
            if (isDetached) {
                return function() {};
            }
            var onBodyClick = function onBodyClick(event) {
                var _unwrapRef;
                if ((_unwrapRef = unwrapRef(rootRef)) === null || _unwrapRef === void 0 ? void 0 : _unwrapRef.contains(event.target)) {
                    return;
                }
                setIsOpen(false);
            };
            document.body.addEventListener('click', onBodyClick);
            return function() {
                document.body.removeEventListener('click', onBodyClick);
            };
        }, [
            rootRef,
            isDetached
        ]);
        var getNextActiveDescendant = function getNextActiveDescendant(key) {
            switch(key){
                case 'ArrowUp':
                    {
                        var prevIndex = itemsIds.indexOf(activeDescendant || '') - 1;
                        return itemsIds[prevIndex] || itemsIds[itemsIds.length - 1];
                    }
                case 'ArrowDown':
                    {
                        var nextIndex = itemsIds.indexOf(activeDescendant || '') + 1;
                        return itemsIds[nextIndex] || itemsIds[0];
                    }
                default:
                    return undefined;
            }
        };
        var submit = function submit() {
            var override = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var _override_activeDescendant;
            if (isOpen) {
                setIsOpen(false);
            } else {
                var _inputRef_current;
                (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.blur();
            }
            var actualDescendant = (_override_activeDescendant = override.activeDescendant) !== null && _override_activeDescendant !== void 0 ? _override_activeDescendant : activeDescendant;
            if (!actualDescendant && override.query !== undefined) {
                onRefine(override.query);
            }
            if (actualDescendant && items.has(actualDescendant)) {
                var _ref;
                var _items_get = items.get(actualDescendant), item = _items_get.item, _items_get_config = _items_get.config, indexOnSelect = _items_get_config.onSelect, getQuery = _items_get_config.getQuery, getURL = _items_get_config.getURL;
                var actualOnSelect = indexOnSelect !== null && indexOnSelect !== void 0 ? indexOnSelect : globalOnSelect;
                actualOnSelect({
                    item: item,
                    query: (_ref = getQuery === null || getQuery === void 0 ? void 0 : getQuery(item)) !== null && _ref !== void 0 ? _ref : '',
                    url: getURL === null || getURL === void 0 ? void 0 : getURL(item),
                    setQuery: function setQuery(query) {
                        return onRefine(query);
                    }
                });
                setActiveDescendant(undefined);
            }
            onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
        };
        return {
            getInputProps: function getInputProps() {
                return {
                    id: getElementId('input'),
                    ref: inputRef,
                    role: 'combobox',
                    autoFocus: autoFocus,
                    'aria-autocomplete': 'list',
                    'aria-expanded': isOpen,
                    'aria-haspopup': 'grid',
                    'aria-controls': getElementId('panel'),
                    'aria-activedescendant': activeDescendant,
                    placeholder: placeholder,
                    onFocus: function onFocus() {
                        return setIsOpen(true);
                    },
                    onKeyDown: function onKeyDown(event) {
                        switch(event.key){
                            case 'Escape':
                                {
                                    if (isOpen) {
                                        setIsOpen(false);
                                        event.preventDefault();
                                    } else {
                                        setActiveDescendant(undefined);
                                    }
                                    break;
                                }
                            case 'ArrowUp':
                            case 'ArrowDown':
                                {
                                    var _document_getElementById;
                                    setIsOpen(true);
                                    var nextActiveDescendant = getNextActiveDescendant(event.key);
                                    setActiveDescendant(nextActiveDescendant);
                                    (_document_getElementById = document.getElementById(nextActiveDescendant)) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.scrollIntoView(false);
                                    event.preventDefault();
                                    break;
                                }
                            case 'Enter':
                                {
                                    submit({
                                        query: event.target.value
                                    });
                                    break;
                                }
                            case 'Tab':
                                // In detached mode, Tab doesn't close the panel
                                if (!isDetached) {
                                    setIsOpen(false);
                                }
                                break;
                            default:
                                setIsOpen(true);
                                return;
                        }
                    },
                    onKeyUp: function onKeyUp(event) {
                        switch(event.key){
                            case 'ArrowLeft':
                            case 'ArrowUp':
                            case 'ArrowRight':
                            case 'ArrowDown':
                            case 'Escape':
                            case 'Return':
                                event.preventDefault();
                                return;
                            default:
                                setActiveDescendant(undefined);
                                break;
                        }
                    }
                };
            },
            getItemProps: function getItemProps(item, index) {
                var id = getElementId('item', item.__indexName, index);
                return {
                    id: id,
                    role: 'row',
                    'aria-selected': id === activeDescendant,
                    onSelect: function onSelect() {
                        return submit({
                            activeDescendant: id
                        });
                    },
                    onApply: function onApply1() {
                        var _ref;
                        var _items_get = items.get(id), currentItem = _items_get.item, getQuery = _items_get.config.getQuery;
                        onApply((_ref = getQuery === null || getQuery === void 0 ? void 0 : getQuery(currentItem)) !== null && _ref !== void 0 ? _ref : '');
                    }
                };
            },
            getPanelProps: function getPanelProps() {
                return {
                    hidden: !isOpen || shouldHidePanel,
                    id: getElementId('panel'),
                    role: 'grid',
                    'aria-labelledby': getElementId('input')
                };
            },
            getRootProps: function getRootProps() {
                return {
                    ref: rootRef
                };
            },
            isOpen: isOpen,
            setIsOpen: setIsOpen,
            focusInput: function focusInput() {
                var _inputRef_current;
                (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();
            }
        };
    };
}
function buildItems(param) {
    var _loop = function(i) {
        var _indices_i;
        var currentIndexConfig = (0, _lib.find)(indicesConfig, function(config) {
            return config.indexName === indices[i].indexName;
        });
        var hits = ((_indices_i = indices[i]) === null || _indices_i === void 0 ? void 0 : _indices_i.hits) || [];
        for(var position = 0; position < hits.length; position++){
            var itemId = getElementId('item', (currentIndexConfig === null || currentIndexConfig === void 0 ? void 0 : currentIndexConfig.indexName) || indices[i].indexName, position);
            items.set(itemId, {
                item: hits[position],
                config: currentIndexConfig
            });
            itemsIds.push(itemId);
        }
    };
    var indices = param.indices, indicesConfig = param.indicesConfig, getElementId = param.getElementId;
    var itemsIds = [];
    var items = new Map();
    for(var i = 0; i < indices.length; i++)_loop(i);
    return {
        items: items,
        itemsIds: itemsIds
    };
}
function createGetElementId(autocompleteId) {
    return function getElementId() {
        for(var _len = arguments.length, suffixes = new Array(_len), _key = 0; _key < _len; _key++){
            suffixes[_key] = arguments[_key];
        }
        var prefix = 'autocomplete';
        return "".concat(prefix).concat(autocompleteId).concat(suffixes.join(':'));
    };
}
/**
 * Returns the framework-agnostic value of a ref.
 */ function unwrapRef(ref) {
    return ref.current && _type_of._(ref.current) === 'object' && 'base' in ref.current ? ref.current.base // Preact
     : ref.current; // React
}
