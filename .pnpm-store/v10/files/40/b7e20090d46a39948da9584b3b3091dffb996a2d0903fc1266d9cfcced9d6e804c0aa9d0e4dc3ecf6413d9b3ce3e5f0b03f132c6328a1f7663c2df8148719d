import '@swc/helpers/esm/_sliced_to_array.js';
import '@swc/helpers/esm/_to_consumable_array.js';
import { keys } from './typedObject.js';

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
    keys(indexUiState).reduce(function(acc, parameter) {
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
}

export { checkIndexUiState };
