import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ as _$2 } from '@swc/helpers/esm/_object_spread_props.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import { cx } from 'instantsearch-ui-components';
import { render } from 'preact';
import connectGeoSearch from '../../connectors/geo-search/connectGeoSearch.js';
import { component } from '../../lib/suit.js';
import createHTMLMarker from './createHTMLMarker.js';
import defaultTemplates from './defaultTemplates.js';
import renderer from './GeoSearchRenderer.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { getContainerNode } from '../../lib/utils/getContainerNode.js';
import { renderTemplate } from '../../lib/templating/renderTemplate.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'geo-search'
});
var suit = component('GeoSearch');
/**
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
 */ var geoSearch = (function geoSearch(widgetParams) {
    var _ref = widgetParams || {}, _ref_initialZoom = _ref.initialZoom, initialZoom = _ref_initialZoom === void 0 ? 1 : _ref_initialZoom, _ref_initialPosition = _ref.initialPosition, initialPosition = _ref_initialPosition === void 0 ? {
        lat: 0,
        lng: 0
    } : _ref_initialPosition, tmp = _ref.templates, userTemplates = tmp === void 0 ? {} : tmp, tmp1 = _ref.cssClasses, userCssClasses = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref.builtInMarker, userBuiltInMarker = tmp2 === void 0 ? {} : tmp2, userCustomHTMLMarker = _ref.customHTMLMarker, _ref_enableRefine = _ref.enableRefine, enableRefine = _ref_enableRefine === void 0 ? true : _ref_enableRefine, _ref_enableClearMapRefinement = _ref.enableClearMapRefinement, enableClearMapRefinement = _ref_enableClearMapRefinement === void 0 ? true : _ref_enableClearMapRefinement, _ref_enableRefineControl = _ref.enableRefineControl, enableRefineControl = _ref_enableRefineControl === void 0 ? true : _ref_enableRefineControl, container = _ref.container, googleReference = _ref.googleReference, otherWidgetParams = _(_ref, [
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
    var containerNode = getContainerNode(container);
    var cssClasses = {
        root: cx(suit(), userCssClasses.root),
        // Required only to mount / unmount the Preact tree
        tree: suit({
            descendantName: 'tree'
        }),
        map: cx(suit({
            descendantName: 'map'
        }), userCssClasses.map),
        control: cx(suit({
            descendantName: 'control'
        }), userCssClasses.control),
        label: cx(suit({
            descendantName: 'label'
        }), userCssClasses.label),
        selectedLabel: cx(suit({
            descendantName: 'label',
            modifierName: 'selected'
        }), userCssClasses.selectedLabel),
        input: cx(suit({
            descendantName: 'input'
        }), userCssClasses.input),
        redo: cx(suit({
            descendantName: 'redo'
        }), userCssClasses.redo),
        disabledRedo: cx(suit({
            descendantName: 'redo',
            modifierName: 'disabled'
        }), userCssClasses.disabledRedo),
        reset: cx(suit({
            descendantName: 'reset'
        }), userCssClasses.reset)
    };
    var templates = _$1({}, defaultTemplates, userTemplates);
    var builtInMarker = _$1({}, defaultBuiltInMarker, userBuiltInMarker);
    var isCustomHTMLMarker = Boolean(userCustomHTMLMarker) || Boolean(userTemplates.HTMLMarker);
    var customHTMLMarker = isCustomHTMLMarker && _$1({}, defaultCustomHTMLMarker, userCustomHTMLMarker);
    var createBuiltInMarker = function createBuiltInMarker(_0) {
        var item = _0.item, rest = _(_0, [
            "item"
        ]);
        return new googleReference.maps.Marker(_$2(_$1({}, builtInMarker.createOptions(item), rest), {
            // @ts-expect-error @types/googlemaps doesn't document this
            __id: item.objectID,
            position: item._geoloc
        }));
    };
    var HTMLMarker = createHTMLMarker(googleReference);
    var createCustomHTMLMarker = function createCustomHTMLMarker(_0) {
        var item = _0.item, rest = _(_0, [
            "item"
        ]);
        return new HTMLMarker(_$2(_$1({}, customHTMLMarker.createOptions(item), rest), {
            __id: item.objectID,
            position: item._geoloc,
            className: cx(suit({
                descendantName: 'marker'
            })),
            template: renderTemplate({
                templateKey: 'HTMLMarker',
                templates: templates,
                data: item
            })
        }));
    };
    var createMarker = !customHTMLMarker ? createBuiltInMarker : createCustomHTMLMarker;
    var markerOptions = !customHTMLMarker ? builtInMarker : customHTMLMarker;
    var makeWidget = connectGeoSearch(renderer, function() {
        return render(null, containerNode);
    });
    return _$2(_$1({}, makeWidget(_$2(_$1({}, otherWidgetParams), {
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
});

export { geoSearch as default };
