'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Stats", {
    enumerable: true,
    get: function() {
        return Stats;
    }
});
var _interop_require_default = require("@swc/helpers/_/_interop_require_default");
var _object_spread = require("@swc/helpers/_/_object_spread");
var _object_without_properties = require("@swc/helpers/_/_object_without_properties");
var _react = /*#__PURE__*/ _interop_require_default._(require("react"));
var _reactinstantsearchcore = require("react-instantsearch-core");
var _Stats = require("../ui/Stats");
function Stats(_0) {
    var translations = _0.translations, props = _object_without_properties._(_0, [
        "translations"
    ]);
    var _useStats = (0, _reactinstantsearchcore.useStats)(undefined, {
        $$widgetType: 'ais.stats'
    }), nbHits = _useStats.nbHits, nbSortedHits = _useStats.nbSortedHits, processingTimeMS = _useStats.processingTimeMS, areHitsSorted = _useStats.areHitsSorted;
    var uiProps = {
        nbHits: nbHits,
        nbSortedHits: nbSortedHits,
        processingTimeMS: processingTimeMS,
        areHitsSorted: areHitsSorted,
        translations: _object_spread._({
            rootElementText: function rootElementText(options) {
                return "".concat(options.areHitsSorted ? getSortedResultsSentence(options) : getResultsSentence(options), " found in ").concat(options.processingTimeMS.toLocaleString(), "ms");
            }
        }, translations)
    };
    return /*#__PURE__*/ _react.default.createElement(_Stats.Stats, _object_spread._({}, props, uiProps));
}
function getSortedResultsSentence(param) {
    var nbHits = param.nbHits, nbSortedHits = param.nbSortedHits;
    var suffix = "sorted out of ".concat(nbHits.toLocaleString());
    if (nbSortedHits === 0) {
        return "No relevant results ".concat(suffix);
    }
    if (nbSortedHits === 1) {
        return "1 relevant result ".concat(suffix);
    }
    if (nbSortedHits > 1) {
        return "".concat((nbSortedHits || 0).toLocaleString(), " relevant results ").concat(suffix);
    }
    return '';
}
function getResultsSentence(param) {
    var nbHits = param.nbHits;
    if (nbHits === 0) {
        return 'No results';
    }
    if (nbHits === 1) {
        return '1 result';
    }
    if (nbHits > 1) {
        return "".concat(nbHits.toLocaleString(), " results");
    }
    return '';
}
