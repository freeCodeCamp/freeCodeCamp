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
    get PROMPT_SUGGESTION_FLAG () {
        return PROMPT_SUGGESTION_FLAG;
    },
    get getPromptSuggestionHits () {
        return getPromptSuggestionHits;
    },
    get isPromptSuggestion () {
        return isPromptSuggestion;
    }
});
var _define_property = require("@swc/helpers/_/_define_property");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_spread_props = require("@swc/helpers/_/_object_spread_props");
var _type_of = require("@swc/helpers/_/_type_of");
var PROMPT_SUGGESTION_FLAG = '__isPromptSuggestion';
function getPromptSuggestionHits(param) {
    var hits = param.hits, limit = param.limit;
    return hits.slice(0, limit).map(function(hit) {
        return _object_spread_props._(_object_spread._({}, hit), _define_property._({}, PROMPT_SUGGESTION_FLAG, true));
    });
}
function isPromptSuggestion(item) {
    return Boolean(item && (typeof item === "undefined" ? "undefined" : _type_of._(item)) === 'object' && item[PROMPT_SUGGESTION_FLAG]);
}
