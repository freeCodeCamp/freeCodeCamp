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
var _VoiceSearch = /*#__PURE__*/ _interop_require_default._(require("../../components/VoiceSearch/VoiceSearch"));
var _connectVoiceSearch = /*#__PURE__*/ _interop_require_default._(require("../../connectors/voice-search/connectVoiceSearch"));
var _suit = require("../../lib/suit");
var _utils = require("../../lib/utils");
var _defaultTemplates = /*#__PURE__*/ _interop_require_default._(require("./defaultTemplates"));
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: 'voice-search'
});
var suit = (0, _suit.component)('VoiceSearch');
var renderer = function renderer(param) {
    var containerNode = param.containerNode, cssClasses = param.cssClasses, templates = param.templates;
    return function(param) {
        var isBrowserSupported = param.isBrowserSupported, isListening = param.isListening, toggleListening = param.toggleListening, voiceListeningState = param.voiceListeningState;
        (0, _preact.render)(/*#__PURE__*/ (0, _preact.h)(_VoiceSearch.default, {
            cssClasses: cssClasses,
            templates: templates,
            isBrowserSupported: isBrowserSupported,
            isListening: isListening,
            toggleListening: toggleListening,
            voiceListeningState: voiceListeningState
        }), containerNode);
    };
};
var voiceSearch = function voiceSearch(widgetParams) {
    var _ref = widgetParams || {}, container = _ref.container, tmp = _ref.cssClasses, userCssClasses = tmp === void 0 ? {} : tmp, tmp1 = _ref.templates, userTemplates = tmp1 === void 0 ? {} : tmp1, _ref_searchAsYouSpeak = _ref.searchAsYouSpeak, searchAsYouSpeak = _ref_searchAsYouSpeak === void 0 ? false : _ref_searchAsYouSpeak, language = _ref.language, additionalQueryParameters = _ref.additionalQueryParameters, createVoiceSearchHelper = _ref.createVoiceSearchHelper;
    if (!container) {
        throw new Error(withUsage('The `container` option is required.'));
    }
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _instantsearchuicomponents.cx)(suit(), userCssClasses.root),
        button: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'button'
        }), userCssClasses.button),
        status: (0, _instantsearchuicomponents.cx)(suit({
            descendantName: 'status'
        }), userCssClasses.status)
    };
    var templates = _object_spread._({}, _defaultTemplates.default, userTemplates);
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        templates: templates
    });
    var makeWidget = (0, _connectVoiceSearch.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return _object_spread_props._(_object_spread._({}, makeWidget({
        container: containerNode,
        cssClasses: cssClasses,
        templates: templates,
        searchAsYouSpeak: searchAsYouSpeak,
        language: language,
        additionalQueryParameters: additionalQueryParameters,
        createVoiceSearchHelper: createVoiceSearchHelper
    })), {
        $$widgetType: 'ais.voiceSearch'
    });
};
var _default = voiceSearch;
