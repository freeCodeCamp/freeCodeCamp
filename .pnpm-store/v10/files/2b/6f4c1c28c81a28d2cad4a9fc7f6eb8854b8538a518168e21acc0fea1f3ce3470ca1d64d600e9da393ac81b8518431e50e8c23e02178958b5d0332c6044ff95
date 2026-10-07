'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getWidgetAttribute", {
    enumerable: true,
    get: function() {
        return getWidgetAttribute;
    }
});
function getWidgetAttribute(widget, initOptions) {
    var _widget_getWidgetRenderState;
    var renderState = (_widget_getWidgetRenderState = widget.getWidgetRenderState) === null || _widget_getWidgetRenderState === void 0 ? void 0 : _widget_getWidgetRenderState.call(widget, initOptions);
    var attribute = null;
    if (renderState && renderState.widgetParams) {
        // casting as widgetParams is checked just before
        var widgetParams = renderState.widgetParams;
        if (widgetParams.attribute) {
            attribute = widgetParams.attribute;
        } else if (Array.isArray(widgetParams.attributes)) {
            attribute = widgetParams.attributes[0];
        }
    }
    if (typeof attribute !== 'string') {
        throw new Error("Could not find the attribute of the widget:\n\n".concat(JSON.stringify(widget), "\n\nPlease check whether the widget's getWidgetRenderState returns widgetParams.attribute correctly."));
    }
    return attribute;
}
