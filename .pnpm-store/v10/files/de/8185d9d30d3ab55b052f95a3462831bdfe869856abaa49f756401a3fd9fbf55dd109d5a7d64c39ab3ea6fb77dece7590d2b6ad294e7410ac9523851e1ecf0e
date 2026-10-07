'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createListComponent", {
    enumerable: true,
    get: function() {
        return createListComponent;
    }
});
function createListComponent(param) {
    var createElement = param.createElement;
    return function List(userProps) {
        var _userProps_classNames = userProps.classNames, classNames = _userProps_classNames === void 0 ? {} : _userProps_classNames, ItemComponent = userProps.itemComponent, items = userProps.items, sendEvent = userProps.sendEvent;
        return /*#__PURE__*/ createElement("div", {
            className: classNames.container
        }, /*#__PURE__*/ createElement("ol", {
            className: classNames.list
        }, items.map(function(item) {
            return /*#__PURE__*/ createElement("li", {
                key: item.objectID,
                className: classNames.item,
                onClick: function onClick() {
                    sendEvent('click:internal', item, 'Item Clicked');
                },
                onAuxClick: function onAuxClick() {
                    sendEvent('click:internal', item, 'Item Clicked');
                }
            }, /*#__PURE__*/ createElement(ItemComponent, {
                item: item,
                sendEvent: sendEvent
            }));
        })));
    };
}
