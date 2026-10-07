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
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _preact = require("preact");
var _GeoSearchControls = /*#__PURE__*/ _interop_require_default._(require("../../components/GeoSearchControls/GeoSearchControls"));
var _templating = require("../../lib/templating");
var refineWithMap = function refineWithMap(param) {
    var refine = param.refine, mapInstance = param.mapInstance;
    return refine({
        northEast: mapInstance.getBounds().getNorthEast().toJSON(),
        southWest: mapInstance.getBounds().getSouthWest().toJSON()
    });
};
var collectMarkersForNextRender = function collectMarkersForNextRender(markers, nextIds) {
    return markers.reduce(function(param, marker) {
        var _param = _sliced_to_array._(param, 2), update = _param[0], exit = _param[1];
        var persist = nextIds.includes(marker.__id);
        return persist ? [
            update.concat(marker),
            exit
        ] : [
            update,
            exit.concat(marker)
        ];
    }, [
        [],
        []
    ]);
};
var createBoundingBoxFromMarkers = function createBoundingBoxFromMarkers(google, markers) {
    var latLngBounds = markers.reduce(function(acc, marker) {
        return acc.extend(marker.getPosition());
    }, new google.maps.LatLngBounds());
    return {
        northEast: latLngBounds.getNorthEast().toJSON(),
        southWest: latLngBounds.getSouthWest().toJSON()
    };
};
var lockUserInteraction = function lockUserInteraction(renderState, functionThatAltersTheMapPosition) {
    renderState.isUserInteraction = false;
    functionThatAltersTheMapPosition();
    renderState.isUserInteraction = true;
};
var renderer = function renderer(param, isFirstRendering) {
    var items = param.items, position = param.position, currentRefinement = param.currentRefinement, refine = param.refine, clearMapRefinement = param.clearMapRefinement, toggleRefineOnMapMove = param.toggleRefineOnMapMove, isRefineOnMapMove = param.isRefineOnMapMove, setMapMoveSinceLastRefine = param.setMapMoveSinceLastRefine, hasMapMoveSinceLastRefine = param.hasMapMoveSinceLastRefine, isRefinedWithMap = param.isRefinedWithMap, widgetParams = param.widgetParams, instantSearchInstance = param.instantSearchInstance;
    var container = widgetParams.container, googleReference = widgetParams.googleReference, cssClasses = widgetParams.cssClasses, templates = widgetParams.templates, initialZoom = widgetParams.initialZoom, initialPosition = widgetParams.initialPosition, enableRefine = widgetParams.enableRefine, enableClearMapRefinement = widgetParams.enableClearMapRefinement, enableRefineControl = widgetParams.enableRefineControl, mapOptions = widgetParams.mapOptions, createMarker = widgetParams.createMarker, markerOptions = widgetParams.markerOptions, renderState = widgetParams.renderState;
    if (isFirstRendering) {
        renderState.isUserInteraction = true;
        renderState.isPendingRefine = false;
        renderState.markers = [];
        var rootElement = document.createElement('div');
        rootElement.className = cssClasses.root;
        container.appendChild(rootElement);
        var mapElement = document.createElement('div');
        mapElement.className = cssClasses.map;
        rootElement.appendChild(mapElement);
        var treeElement = document.createElement('div');
        treeElement.className = cssClasses.tree;
        rootElement.appendChild(treeElement);
        renderState.mapInstance = new googleReference.maps.Map(mapElement, _object_spread._({
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            clickableIcons: false,
            zoomControlOptions: {
                position: googleReference.maps.ControlPosition.LEFT_TOP
            }
        }, mapOptions));
        var setupListenersWhenMapIsReady = function setupListenersWhenMapIsReady() {
            var onChange = function onChange() {
                if (renderState.isUserInteraction && enableRefine) {
                    setMapMoveSinceLastRefine();
                    if (isRefineOnMapMove()) {
                        renderState.isPendingRefine = true;
                    }
                }
            };
            renderState.mapInstance.addListener('center_changed', onChange);
            renderState.mapInstance.addListener('zoom_changed', onChange);
            renderState.mapInstance.addListener('dragstart', onChange);
            renderState.mapInstance.addListener('idle', function() {
                if (renderState.isUserInteraction && renderState.isPendingRefine) {
                    renderState.isPendingRefine = false;
                    refineWithMap({
                        mapInstance: renderState.mapInstance,
                        refine: refine
                    });
                }
            });
        };
        googleReference.maps.event.addListenerOnce(renderState.mapInstance, 'idle', setupListenersWhenMapIsReady);
        renderState.templateProps = (0, _templating.prepareTemplateProps)({
            templatesConfig: instantSearchInstance.templatesConfig,
            templates: templates
        });
        return;
    }
    // Collect markers that need to be updated or removed
    var nextItemsIds = items.map(function(_) {
        return _.objectID;
    });
    var _collectMarkersForNextRender = _sliced_to_array._(collectMarkersForNextRender(renderState.markers, nextItemsIds), 2), updateMarkers = _collectMarkersForNextRender[0], exitMarkers = _collectMarkersForNextRender[1];
    // Collect items that will be added
    var updateMarkerIds = updateMarkers.map(function(_) {
        return _.__id;
    });
    var nextPendingItems = items.filter(function(item) {
        return !updateMarkerIds.includes(item.objectID);
    });
    // Remove all markers that need to be removed
    exitMarkers.forEach(function(marker) {
        return marker.setMap(null);
    });
    // Create the markers from the items
    renderState.markers = updateMarkers.concat(nextPendingItems.map(function(item) {
        var marker = createMarker({
            map: renderState.mapInstance,
            item: item
        });
        Object.keys(markerOptions.events).forEach(function(eventName) {
            marker.addListener(eventName, function(event) {
                markerOptions.events[eventName]({
                    map: renderState.mapInstance,
                    event: event,
                    item: item,
                    marker: marker
                });
            });
        });
        return marker;
    }));
    var shouldUpdate = !hasMapMoveSinceLastRefine();
    // We use this value for differentiate the padding to apply during
    // fitBounds. When we don't have a currenRefinement (boundingBox)
    // we let Google Maps compute the automatic padding. But when we
    // provide the currentRefinement we explicitly set the padding
    // to `0` otherwise the map will decrease the zoom on each refine.
    var boundingBoxPadding = currentRefinement ? 0 : null;
    var boundingBox = !currentRefinement && Boolean(renderState.markers.length) ? createBoundingBoxFromMarkers(googleReference, renderState.markers) : currentRefinement;
    if (boundingBox && shouldUpdate) {
        lockUserInteraction(renderState, function() {
            renderState.mapInstance.fitBounds(new googleReference.maps.LatLngBounds(boundingBox.southWest, boundingBox.northEast), boundingBoxPadding);
        });
    } else if (shouldUpdate) {
        lockUserInteraction(renderState, function() {
            renderState.mapInstance.setCenter(position || initialPosition);
            renderState.mapInstance.setZoom(initialZoom);
        });
    }
    (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_GeoSearchControls.default, {
        cssClasses: cssClasses,
        enableRefine: enableRefine,
        enableRefineControl: enableRefineControl,
        enableClearMapRefinement: enableClearMapRefinement,
        isRefineOnMapMove: isRefineOnMapMove(),
        isRefinedWithMap: isRefinedWithMap(),
        hasMapMoveSinceLastRefine: hasMapMoveSinceLastRefine(),
        onRefineToggle: toggleRefineOnMapMove,
        onRefineClick: function onRefineClick() {
            return refineWithMap({
                mapInstance: renderState.mapInstance,
                refine: refine
            });
        },
        onClearClick: clearMapRefinement,
        templateProps: renderState.templateProps
    }), container.querySelector(".".concat(cssClasses.tree)));
};
var _default = renderer;
