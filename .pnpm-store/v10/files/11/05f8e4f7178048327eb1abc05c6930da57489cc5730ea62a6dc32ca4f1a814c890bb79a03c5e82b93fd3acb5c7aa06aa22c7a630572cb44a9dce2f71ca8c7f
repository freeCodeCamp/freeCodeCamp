import { _ as _$2 } from '@swc/helpers/esm/_define_property.js';
import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import { _ as _$3 } from '@swc/helpers/esm/_type_of.js';

var PROMPT_SUGGESTION_FLAG = '__isPromptSuggestion';
function getPromptSuggestionHits(param) {
    var hits = param.hits, limit = param.limit;
    return hits.slice(0, limit).map(function(hit) {
        return _(_$1({}, hit), _$2({}, PROMPT_SUGGESTION_FLAG, true));
    });
}
function isPromptSuggestion(item) {
    return Boolean(item && (typeof item === "undefined" ? "undefined" : _$3(item)) === 'object' && item[PROMPT_SUGGESTION_FLAG]);
}

export { PROMPT_SUGGESTION_FLAG, getPromptSuggestionHits, isPromptSuggestion };
