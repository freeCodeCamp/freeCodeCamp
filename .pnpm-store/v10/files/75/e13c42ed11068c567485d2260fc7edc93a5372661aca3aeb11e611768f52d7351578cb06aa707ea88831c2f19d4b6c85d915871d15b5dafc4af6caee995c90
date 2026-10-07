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
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _instantsearchuicomponents = require("instantsearch-ui-components");
var _preact = require("preact");
var _Answers = /*#__PURE__*/ _interop_require_default._(require("../../components/Answers/Answers"));
var _connectAnswers = /*#__PURE__*/ _interop_require_default._(require("../../connectors/answers/connectAnswers"));
var _suit = require("../../lib/suit");
var _templating = require("../../lib/templating");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'answers'
});
var suit = (0, _suit.component)('Answers');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, renderState = param.renderState, templates = param.templates;
    return function(param, isFirstRendering) {
        var hits = param.hits, isLoading = param.isLoading, instantSearchInstance = param.instantSearchInstance;
        if (isFirstRendering) {
            renderState.templateProps = (0, _templating.prepareTemplateProps)({
                defaultTemplates: _defaultTemplates.default,
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_Answers.default, {
            cssClasses: cssClasses,
            hits: hits,
            isLoading: isLoading,
            templateProps: renderState.templateProps
        }), containerNode);
    };
};
/**
 * @deprecated the answers service is no longer offered, and this widget will be removed in InstantSearch.js v5
 */ var answersWidget = function answersWidget(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, attributesForPrediction = _ref.attributesForPrediction, queryLanguages = _ref.queryLanguages, nbHits = _ref.nbHits, searchDebounceTime = _ref.searchDebounceTime, renderDebounceTime = _ref.renderDebounceTime, escapeHTML = _ref.escapeHTML, extraParameters = _ref.extraParameters, _ref_templates = _ref.templates, templates = _ref_templates === void 0 ? {} : _ref_templates, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        emptyRoot: (0, _instantsearchuicomponents.cx)(suit({
            modifierName: 'empty'
        }), userCssClasses.emptyRoot),
        header: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'header'
        }), userCssClasses.header),
        loader: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'loader'
        }), userCssClasses.loader),
        list: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'list'
        }), userCssClasses.list),
        item: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'item'
        }), userCssClasses.item)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        renderState: {}
    });
    var makeWidget = (0, _connectAnswers.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        attributesForPrediction: attributesForPrediction,
        queryLanguages: queryLanguages,
        nbHits: nbHits,
        searchDebounceTime: searchDebounceTime,
        renderDebounceTime: renderDebounceTime,
        escapeHTML: escapeHTML,
        extraParameters: extraParameters
    })), {
        $$widgetType: 'ais.answers'
    });
};
var _default = (0, _utils.deprecate)(answersWidget, 'The answers widget is deprecated and will be removed in InstantSearch.js 5.0');
