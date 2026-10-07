import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_without_properties.js';
import React from 'react';
import { useStats } from 'react-instantsearch-core';
import { Stats as Stats$1 } from '../ui/Stats.js';

function Stats(_0) {
    var translations = _0.translations, props = _(_0, [
        "translations"
    ]);
    var _useStats = useStats(undefined, {
        $$widgetType: 'ais.stats'
    }), nbHits = _useStats.nbHits, nbSortedHits = _useStats.nbSortedHits, processingTimeMS = _useStats.processingTimeMS, areHitsSorted = _useStats.areHitsSorted;
    var uiProps = {
        nbHits: nbHits,
        nbSortedHits: nbSortedHits,
        processingTimeMS: processingTimeMS,
        areHitsSorted: areHitsSorted,
        translations: _$1({
            rootElementText: function rootElementText(options) {
                return "".concat(options.areHitsSorted ? getSortedResultsSentence(options) : getResultsSentence(options), " found in ").concat(options.processingTimeMS.toLocaleString(), "ms");
            }
        }, translations)
    };
    return /*#__PURE__*/ React.createElement(Stats$1, _$1({}, props, uiProps));
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

export { Stats };
