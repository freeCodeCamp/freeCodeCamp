import { _ as _$2 } from '@swc/helpers/esm/_call_super.js';
import { _ as _$1 } from '@swc/helpers/esm/_class_call_check.js';
import { _ as _$5 } from '@swc/helpers/esm/_create_class.js';
import { _ as _$3 } from '@swc/helpers/esm/_define_property.js';
import { _ } from '@swc/helpers/esm/_inherits.js';
import { _ as _$4 } from '@swc/helpers/esm/_type_of.js';
import { render } from 'preact';

var createHTMLMarker = function createHTMLMarker(googleReference) {
    var HTMLMarker = /*#__PURE__*/ function(_googleReference_maps_OverlayView) {
        _(HTMLMarker, _googleReference_maps_OverlayView);
        function HTMLMarker(param) {
            var __id = param.__id, position = param.position, map = param.map, template = param.template, className = param.className, _param_anchor = param.anchor, anchor = _param_anchor === void 0 ? {
                x: 0,
                y: 0
            } : _param_anchor;
            _$1(this, HTMLMarker);
            var _this;
            _this = _$2(this, HTMLMarker), _$3(_this, "__id", void 0), _$3(_this, "anchor", void 0), _$3(_this, "offset", void 0), _$3(_this, "listeners", void 0), _$3(_this, "latLng", void 0), _$3(_this, "element", void 0);
            _this.__id = __id;
            _this.anchor = anchor;
            _this.listeners = {};
            _this.latLng = new googleReference.maps.LatLng(position);
            _this.element = document.createElement('div');
            _this.element.className = className;
            _this.element.style.position = 'absolute';
            if ((typeof template === "undefined" ? "undefined" : _$4(template)) === 'object') {
                render(template, _this.element);
            } else {
                _this.element.innerHTML = template;
            }
            _this.setMap(map);
            return _this;
        }
        _$5(HTMLMarker, [
            {
                key: "onAdd",
                value: function onAdd() {
                    // Append the element to the map
                    this.getPanes().overlayMouseTarget.appendChild(this.element);
                    // Compute the offset onAdd & cache it because afterwards
                    // it won't retrieve the correct values, we also avoid
                    // to read the values on every draw
                    var bbBox = this.element.getBoundingClientRect();
                    this.offset = {
                        x: this.anchor.x + bbBox.width / 2,
                        y: this.anchor.y + bbBox.height
                    };
                    // Force the width of the element will avoid the
                    // content to collapse when we move the map
                    this.element.style.width = "".concat(bbBox.width, "px");
                }
            },
            {
                key: "draw",
                value: function draw() {
                    var position = this.getProjection().fromLatLngToDivPixel(this.latLng);
                    this.element.style.left = "".concat(Math.round(position.x - this.offset.x), "px");
                    this.element.style.top = "".concat(Math.round(position.y - this.offset.y), "px");
                    // Markers to the south are in front of markers to the north
                    // This is the default behaviour of Google Maps
                    this.element.style.zIndex = String(parseInt(this.element.style.top, 10));
                }
            },
            {
                key: "onRemove",
                value: function onRemove() {
                    var _this = this;
                    if (this.element) {
                        this.element.parentNode.removeChild(this.element);
                        Object.keys(this.listeners).forEach(function(eventName) {
                            _this.element.removeEventListener(eventName, _this.listeners[eventName]);
                        });
                        // after onRemove the class is no longer used, thus it can be deleted
                        // @ts-expect-error
                        delete this.element;
                        // @ts-expect-error
                        delete this.listeners;
                    }
                }
            },
            {
                key: "addListener",
                value: function addListener(eventName, listener) {
                    this.listeners[eventName] = listener;
                    var element = this.element;
                    element.addEventListener(eventName, listener);
                    return {
                        remove: function remove() {
                            return element.removeEventListener(eventName, listener);
                        }
                    };
                }
            },
            {
                key: "getPosition",
                value: function getPosition() {
                    return this.latLng;
                }
            }
        ]);
        return HTMLMarker;
    }(googleReference.maps.OverlayView);
    return HTMLMarker;
};

export { createHTMLMarker as default };
