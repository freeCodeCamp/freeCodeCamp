'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createAutocompleteIndexComponent", {
    enumerable: true,
    get: function() {
        return createAutocompleteIndexComponent;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _cx = require("../../lib/cx");
function createAutocompleteIndexComponent(param) {
    var createElement = param.createElement;
    return function AutocompleteIndex(userProps) {
        var items = userProps.items, HeaderComponent = userProps.HeaderComponent, ItemComponent = userProps.ItemComponent, NoResultsComponent = userProps.NoResultsComponent, getItemProps = userProps.getItemProps, sendEvent = userProps.sendEvent, _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames;
        if (items.length === 0 && !NoResultsComponent) {
            return null;
        }
        return /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompleteIndex', classNames.root)
        }, HeaderComponent && /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompleteIndexHeader', classNames.header)
        }, /*#__PURE__*/ createElement(HeaderComponent, {
            items: items
        })), items.length === 0 && NoResultsComponent ? /*#__PURE__*/ createElement("div", {
            className: (0, _cx.cx)('ais-AutocompleteIndexNoResults', classNames.noResults)
        }, /*#__PURE__*/ createElement(NoResultsComponent, null)) : /*#__PURE__*/ createElement("ol", {
            className: (0, _cx.cx)('ais-AutocompleteIndexList', classNames.list)
        }, items.map(function(item, index) {
            var _getItemProps = getItemProps(item, index), className = _getItemProps.className, onSelect = _getItemProps.onSelect, onApply = _getItemProps.onApply, itemProps = _object_without_properties._(_getItemProps, [
                "className",
                "onSelect",
                "onApply"
            ]);
            return /*#__PURE__*/ createElement("li", _object_spread_props._(_object_spread._({
                key: "".concat(itemProps.id, ":").concat(item.objectID)
            }, itemProps), {
                className: (0, _cx.cx)('ais-AutocompleteIndexItem', classNames.item, className),
                onClick: function onClick() {
                    sendEvent === null || sendEvent === void 0 ? void 0 : sendEvent('click:internal', item, 'Hit Clicked');
                },
                onAuxClick: function onAuxClick() {
                    sendEvent === null || sendEvent === void 0 ? void 0 : sendEvent('click:internal', item, 'Hit Clicked');
                }
            }), /*#__PURE__*/ createElement(ItemComponent, {
                item: item,
                onSelect: onSelect,
                onApply: onApply
            }));
        })));
    };
}
