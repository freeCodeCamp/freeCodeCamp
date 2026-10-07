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
    get addWidgetId () {
        return addWidgetId;
    },
    get resetWidgetId () {
        return resetWidgetId;
    }
});
var id = 0;
function addWidgetId(widget) {
    if (widget.dependsOn !== 'recommend') {
        return;
    }
    widget.$$id = id++;
}
function resetWidgetId() {
    id = 0;
}
