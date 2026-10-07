'use strict';

// global for TypeScript alone
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * The **GeoSearch** widget displays the list of results from the search on a Google Maps. It also provides a way to search for results based on their position. The widget also provide some of the common GeoSearch patterns like search on map interaction.
 *
 * @requirements
 *
 * Note that the GeoSearch widget uses the [geosearch](https://www.algolia.com/doc/guides/searching/geo-search) capabilities of Algolia. Your hits **must** have a `_geoloc` attribute in order to be displayed on the map.
 *
 * Currently, the feature is not compatible with multiple values in the _geoloc attribute.
 *
 * You are also responsible for loading the Google Maps library, it's not shipped with InstantSearch. You need to load the Google Maps library and pass a reference to the widget. You can find more information about how to install the library in [the Google Maps documentation](https://developers.google.com/maps/documentation/javascript/tutorial).
 *
 * Don't forget to explicitly set the `height` of the map container (default class `.ais-geo-search--map`), otherwise it won't be shown (it's a requirement of Google Maps).
 */ "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _connectGeoSearch = /*#__PURE__*/ _interop_require_default._(require("../../connectors/geo-search/connectGeoSearch"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _createHTMLMarker = /*#__PURE__*/ _interop_require_default._(require("./createHTMLMarker"));
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var _GeoSearchRenderer = /*#__PURE__*/ _interop_require_default._(require("./GeoSearchRenderer"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'geo-search'
});
var suit = (0, _suit.component)('GeoSearch');
var _default = function geoSearch(widgetParams) {
    var _ref = widgetParams || {}, _ref_initialZoom = _ref.initialZoom, initialZoom = _ref_initialZoom === void 0 ? 1 : _ref_initialZoom, _ref_initialPosition = _ref.initialPosition, initialPosition = _ref_initialPosition === void 0 ? {
        lat: 0,
        lng: 0
    } : _ref_initialPosition, tmp = _ref.templates, userTemplates = tmp === void 0 ? {} : tmp, tmp1 = _ref.cssClasses, userCssClasses = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref.builtInMarker, userBuiltInMarker = tmp2 === void 0 ? {} : tmp2, userCustomHTMLMarker = _ref.customHTMLMarker, _ref_enableRefine = _ref.enableRefine, enableRefine = _ref_enableRefine === void 0 ? true : _ref_enableRefine, _ref_enableClearMapRefinement = _ref.enableClearMapRefinement, enableClearMapRefinement = _ref_enableClearMapRefinement === void 0 ? true : _ref_enableClearMapRefinement, _ref_enableRefineControl = _ref.enableRefineControl, enableRefineControl = _ref_enableRefineControl === void 0 ? true : _ref_enableRefineControl, container = _ref.container, googleReference = _ref.googleReference, otherWidgetParams = _object_without_properties._(_ref, [
        "initialZoom",
        "initialPosition",
        "templates",
        "cssClasses",
        "builtInMarker",
        "customHTMLMarker",
        "enableRefine",
        "enableClearMapRefinement",
        "enableRefineControl",
        "container",
        "googleReference"
    ]);
    var defaultBuiltInMarker = {
        createOptions: function createOptions() {
            return {};
        },
        events: {}
    };
    var defaultCustomHTMLMarker = {
        createOptions: function createOptions() {
            return {};
        },
        events: {}
    };
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    if (!googleReference) {
        throw new Error(withUsage('The `googleReference` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        // Required only to mount / unmount the Preact tree
        tree: suit({
            descendantName: 'tree'
        }),
        map: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'map'
        }), userCssClasses.map),
        control: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'control'
        }), userCssClasses.control),
        label: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        selectedLabel: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'label',
            modifierName: 'selected'
        }), userCssClasses.selectedLabel),
        input: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'input'
        }), userCssClasses.input),
        redo: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'redo'
        }), userCssClasses.redo),
        disabledRedo: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'redo',
            modifierName: 'disabled'
        }), userCssClasses.disabledRedo),
        reset: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'reset'
        }), userCssClasses.reset)
    };
    var templates = _object_spread._({}, _defaultTemplates.default, userTemplates);
    var builtInMarker = _object_spread._({}, defaultBuiltInMarker, userBuiltInMarker);
    var isCustomHTMLMarker = Boolean(userCustomHTMLMarker) || Boolean(userTemplates.HTMLMarker);
    var customHTMLMarker = isCustomHTMLMarker && _object_spread._({}, defaultCustomHTMLMarker, userCustomHTMLMarker);
    var createBuiltInMarker = function createBuiltInMarker(_0) {
        var item = _0.item, rest = _object_without_properties._(_0, [
            "item"
        ]);
        return new googleReference.maps.Marker(_object_spread_props._(_object_spread._({}, builtInMarker.createOptions(item), rest), {
            // @ts-expect-error @types/googlemaps doesn't document this
            __id: item.objectID,
            position: item._geoloc
        }));
    };
    var HTMLMarker = (0, _createHTMLMarker.default)(googleReference);
    var createCustomHTMLMarker = function createCustomHTMLMarker(_0) {
        var item = _0.item, rest = _object_without_properties._(_0, [
            "item"
        ]);
        return new HTMLMarker(_object_spread_props._(_object_spread._({}, customHTMLMarker.createOptions(item), rest), {
            __id: item.objectID,
            position: item._geoloc,
            className: (0, _instantsearchuicomponents.cx)(suit({
                descendantName: 'marker'
            })),
            template: (0, _templating.renderTemplate)({
                templateKey: 'HTMLMarker',
                templates: templates,
                data: item
            })
        }));
    };
    var createMarker = !customHTMLMarker ? createBuiltInMarker : createCustomHTMLMarker;
    var markerOptions = !customHTMLMarker ? builtInMarker : customHTMLMarker;
    var makeWidget = (0, _connectGeoSearch.default)(_GeoSearchRenderer.default, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget(_object_spread_props._(_object_spread._({}, otherWidgetParams), {
        // @TODO: this type doesn't preserve the generic correctly,
        // (but as they're internal only it's not a big problem)
        templates: templates,
        renderState: {},
        container: containerNode,
        googleReference: googleReference,
        initialZoom: initialZoom,
        initialPosition: initialPosition,
        cssClasses: cssClasses,
        createMarker: createMarker,
        markerOptions: markerOptions,
        enableRefine: enableRefine,
        enableClearMapRefinement: enableClearMapRefinement,
        enableRefineControl: enableRefineControl
    }))), {
        $$widgetType: 'ais.geoSearch'
    });
};
