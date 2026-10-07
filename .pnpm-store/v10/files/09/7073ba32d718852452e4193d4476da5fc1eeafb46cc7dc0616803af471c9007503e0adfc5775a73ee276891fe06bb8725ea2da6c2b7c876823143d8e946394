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
    get default () {
        return _default;
    },
    get defaultTemplates () {
        return defaultTemplates;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Stats = /*#__PURE__*/ _interop_require_default._(require("../../components/Stats/Stats"));
var _connectStats = /*#__PURE__*/ _interop_require_default._(require("../../connectors/stats/connectStats"));
var _formatNumber = require("../../lib/formatNumber");
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'stats'
});
var suit = (0, _suit.component)('Stats');
var defaultTemplates = {
    text: function text(props) {
        return "".concat(props.areHitsSorted ? getSortedResultsSentence(props) : getResultsSentence(props), " found in ").concat(props.processingTimeMS, "ms");
    }
};
function getSortedResultsSentence(param) {
    var nbHits = param.nbHits, hasNoSortedResults = param.hasNoSortedResults, hasOneSortedResults = param.hasOneSortedResults, hasManySortedResults = param.hasManySortedResults, nbSortedHits = param.nbSortedHits;
    var suffix = "sorted out of ".concat((0, _formatNumber.formatNumber)(nbHits));
    if (hasNoSortedResults) {
        return "No relevant results ".concat(suffix);
    }
    if (hasOneSortedResults) {
        return "1 relevant result ".concat(suffix);
    }
    if (hasManySortedResults) {
        return "".concat((0, _formatNumber.formatNumber)(nbSortedHits || 0), " relevant results ").concat(suffix);
    }
    return '';
}
function getResultsSentence(param) {
    var nbHits = param.nbHits, hasNoResults = param.hasNoResults, hasOneResult = param.hasOneResult, hasManyResults = param.hasManyResults;
    if (hasNoResults) {
        return 'No results';
    }
    if (hasOneResult) {
        return '1 result';
    }
    if (hasManyResults) {
        return "".concat((0, _formatNumber.formatNumber)(nbHits), " results");
    }
    return '';
}
var renderer = function renderer(param) {
    var renderState = param.renderState, cssClasses = param.cssClasses, containerNode = param.containerNode, templates = param.templates;
    return function(param, isFirstRendering) {
        var hitsPerPage = param.hitsPerPage, nbHits = param.nbHits, nbSortedHits = param.nbSortedHits, areHitsSorted = param.areHitsSorted, nbPages = param.nbPages, page = param.page, processingTimeMS = param.processingTimeMS, query = param.query, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: defaultTemplates,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_Stats.default, {
            cssClasses: cssClasses,
            hitsPerPage: hitsPerPage,
            nbHits: nbHits,
            nbSortedHits: nbSortedHits,
            areHitsSorted: areHitsSorted,
            nbPages: nbPages,
            page: page,
            processingTimeMS: processingTimeMS,
            query: query,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
/**
 * The `stats` widget is used to display useful insights about the current results.
 *
 * By default, it will display the **number of hits** and the time taken to compute the
 * results inside the engine.
 */ var stats = function stats(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        text: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'text'
        }), userCssClasses.text)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        renderState: {}
    });
    var makeWidget = (0, _connectStats.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({})), {
        $$widgetType: 'ais.stats'
    });
};
var _default = stats;
