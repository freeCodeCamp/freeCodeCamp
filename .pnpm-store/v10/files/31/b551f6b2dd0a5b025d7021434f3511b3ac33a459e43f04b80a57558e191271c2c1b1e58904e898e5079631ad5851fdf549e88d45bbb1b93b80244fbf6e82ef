'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "checkIndexUiState", {
    enumerable: true,
    get: function() {
        return checkIndexUiState;
    }
});
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _to_consumable_array = require("@swc/helpers/_/_to_consumable_array");
var _capitalize = require("./capitalize");
var _logger = require("./logger");
var _typedObject = require("./typedObject");
// Some connectors are responsible for multiple widgets so we need
// to map them.
function getWidgetNames(connectorName) {
    switch(connectorName){
        case 'range':
            return [];
        case 'menu':
            return [
                'menu',
                'menuSelect'
            ];
        default:
            return [
                connectorName
            ];
    }
}
var stateToWidgetsMap = {
    query: {
        connectors: [
            'connectSearchBox'
        ],
        widgets: [
            'ais.searchBox',
            'ais.autocomplete',
            'ais.voiceSearch'
        ]
    },
    refinementList: {
        connectors: [
            'connectRefinementList'
        ],
        widgets: [
            'ais.refinementList'
        ]
    },
    menu: {
        connectors: [
            'connectMenu'
        ],
        widgets: [
            'ais.menu'
        ]
    },
    hierarchicalMenu: {
        connectors: [
            'connectHierarchicalMenu'
        ],
        widgets: [
            'ais.hierarchicalMenu'
        ]
    },
    numericMenu: {
        connectors: [
            'connectNumericMenu'
        ],
        widgets: [
            'ais.numericMenu'
        ]
    },
    ratingMenu: {
        connectors: [
            'connectRatingMenu'
        ],
        widgets: [
            'ais.ratingMenu'
        ]
    },
    range: {
        connectors: [
            'connectRange'
        ],
        widgets: [
            'ais.rangeInput',
            'ais.rangeSlider',
            'ais.range'
        ]
    },
    toggle: {
        connectors: [
            'connectToggleRefinement'
        ],
        widgets: [
            'ais.toggleRefinement'
        ]
    },
    geoSearch: {
        connectors: [
            'connectGeoSearch'
        ],
        widgets: [
            'ais.geoSearch'
        ]
    },
    sortBy: {
        connectors: [
            'connectSortBy'
        ],
        widgets: [
            'ais.sortBy'
        ]
    },
    page: {
        connectors: [
            'connectPagination'
        ],
        widgets: [
            'ais.pagination',
            'ais.infiniteHits'
        ]
    },
    hitsPerPage: {
        connectors: [
            'connectHitsPerPage'
        ],
        widgets: [
            'ais.hitsPerPage'
        ]
    },
    configure: {
        connectors: [
            'connectConfigure'
        ],
        widgets: [
            'ais.configure'
        ]
    },
    places: {
        connectors: [],
        widgets: [
            'ais.places'
        ]
    }
};
function checkIndexUiState(param) {
    var index = param.index, indexUiState = param.indexUiState;
    var mountedWidgets = index.getWidgets().map(function(widget) {
        return widget.$$type;
    }).filter(Boolean);
    var missingWidgets = (0, _typedObject.keys)(indexUiState).reduce(function(acc, parameter) {
        var widgetUiState = stateToWidgetsMap[parameter];
        if (!widgetUiState) {
            return acc;
        }
        var requiredWidgets = widgetUiState.widgets;
        if (requiredWidgets && !requiredWidgets.some(function(requiredWidget) {
            return mountedWidgets.includes(requiredWidget);
        })) {
            acc.push([
                parameter,
                {
                    connectors: widgetUiState.connectors,
                    widgets: widgetUiState.widgets.map(function(widgetIdentifier) {
                        return widgetIdentifier.split('ais.')[1];
                    })
                }
            ]);
        }
        return acc;
    }, []);
    (0, _logger.warning)(missingWidgets.length === 0, 'The UI state for the index "'.concat(index.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(index.getIndexId(), '":\n\n').concat(missingWidgets.map(function(param) {
        var _param = _sliced_to_array._(param, 2), stateParameter = _param[0], widgets = _param[1].widgets;
        var _instance;
        return "- `".concat(stateParameter, "` needs one of these widgets: ").concat((_instance = []).concat.apply(_instance, _to_consumable_array._(widgets.map(function(name) {
            return getWidgetNames(name);
        }))).map(function(name) {
            return '"'.concat(name, '"');
        }).join(', '));
    }).join('\n'), '\n\nIf you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don\'t render anything:\n\n```\n').concat(missingWidgets.filter(function(param) {
        var _param = _sliced_to_array._(param, 2); _param[0]; var connectors = _param[1].connectors;
        return connectors.length > 0;
    }).map(function(param) {
        var _param = _sliced_to_array._(param, 2); _param[0]; var _param_ = _param[1], connectors = _param_.connectors, widgets = _param_.widgets;
        var capitalizedWidget = (0, _capitalize.capitalize)(widgets[0]);
        var connectorName = connectors[0];
        return "const virtual".concat(capitalizedWidget, " = ").concat(connectorName, "(() => null);");
    }).join('\n'), "\n\nsearch.addWidgets([\n  ").concat(missingWidgets.filter(function(param) {
        var _param = _sliced_to_array._(param, 2); _param[0]; var connectors = _param[1].connectors;
        return connectors.length > 0;
    }).map(function(param) {
        var _param = _sliced_to_array._(param, 2); _param[0]; var widgets = _param[1].widgets;
        var capitalizedWidget = (0, _capitalize.capitalize)(widgets[0]);
        return "virtual".concat(capitalizedWidget, "({ /* ... */ })");
    }).join(',\n  '), "\n]);\n```\n\nIf you're using custom widgets that do set these query parameters, we recommend using connectors instead.\n\nSee https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets"));
}
