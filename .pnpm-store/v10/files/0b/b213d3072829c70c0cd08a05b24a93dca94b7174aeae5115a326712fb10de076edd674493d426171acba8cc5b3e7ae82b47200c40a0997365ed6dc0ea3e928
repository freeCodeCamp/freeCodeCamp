'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _utils = require("../../lib/utils");
/**
 * This widget sets the geolocation value for the search based on the selected
 * result in the Algolia Places autocomplete.
 * @deprecated the places service is no longer offered, and this widget will be removed in InstantSearch.js v5
 */ var placesWidget = function placesWidget(widgetParams) {
    var _ref = widgetParams || {}, placesReference = _ref.placesReference, _ref_defaultPosition = _ref.defaultPosition, defaultPosition = _ref_defaultPosition === void 0 ? [] : _ref_defaultPosition, placesOptions = _object_without_properties._(_ref, [
        "placesReference",
        "defaultPosition"
    ]);
    if (typeof placesReference !== 'function') {
        throw new Error('The `placesReference` option requires a valid Places.js reference.');
    }
    var placesAutocomplete = placesReference(placesOptions);
    var state = {
        query: '',
        initialLatLngViaIP: undefined,
        isInitialLatLngViaIPSet: false
    };
    return {
        $$type: 'ais.places',
        $$widgetType: 'ais.places',
        init: function init(param) {
            var helper = param.helper;
            placesAutocomplete.on('change', function(eventOptions) {
                var _eventOptions_suggestion = eventOptions.suggestion, value = _eventOptions_suggestion.value, _eventOptions_suggestion_latlng = _eventOptions_suggestion.latlng, lat = _eventOptions_suggestion_latlng.lat, lng = _eventOptions_suggestion_latlng.lng;
                state.query = value;
                helper.setQueryParameter('insideBoundingBox', undefined).setQueryParameter('aroundLatLngViaIP', false).setQueryParameter('aroundLatLng', "".concat(lat, ",").concat(lng)).search();
            });
            placesAutocomplete.on('clear', function() {
                state.query = '';
                helper.setQueryParameter('insideBoundingBox', undefined);
                if (defaultPosition.length > 1) {
                    helper.setQueryParameter('aroundLatLngViaIP', false).setQueryParameter('aroundLatLng', defaultPosition.join(','));
                } else {
                    helper.setQueryParameter('aroundLatLngViaIP', state.initialLatLngViaIP).setQueryParameter('aroundLatLng', undefined);
                }
                helper.search();
            });
        },
        getWidgetUiState: function getWidgetUiState(uiState, param) {
            var searchParameters = param.searchParameters;
            var position = searchParameters.aroundLatLng || defaultPosition.join(',');
            var hasPositionSet = position !== defaultPosition.join(',');
            if (!hasPositionSet && !state.query) {
                uiState.places; var uiStateWithoutPlaces = _object_without_properties._(uiState, [
                    "places"
                ]);
                return uiStateWithoutPlaces;
            }
            return _object_spread_props._(_object_spread._({}, uiState), {
                places: {
                    query: state.query,
                    position: position
                }
            });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, param) {
            var uiState = param.uiState;
            var _ref = uiState.places || {}, _ref_query = _ref.query, query = _ref_query === void 0 ? '' : _ref_query, _ref_position = _ref.position, position = _ref_position === void 0 ? defaultPosition.join(',') : _ref_position;
            state.query = query;
            if (!state.isInitialLatLngViaIPSet) {
                state.isInitialLatLngViaIPSet = true;
                state.initialLatLngViaIP = searchParameters.aroundLatLngViaIP;
            }
            placesAutocomplete.setVal(query);
            placesAutocomplete.close();
            return searchParameters.setQueryParameter('insideBoundingBox', undefined).setQueryParameter('aroundLatLngViaIP', false).setQueryParameter('aroundLatLng', position || undefined);
        },
        getRenderState: function getRenderState(renderState, renderOptions) {
            return _object_spread_props._(_object_spread._({}, renderState), {
                places: this.getWidgetRenderState(renderOptions)
            });
        },
        getWidgetRenderState: function getWidgetRenderState() {
            return {
                widgetParams: widgetParams
            };
        }
    };
};
var _default = (0, _utils.deprecate)(placesWidget, 'The places widget is deprecated and will be removed in InstantSearch.js 5.0.');
