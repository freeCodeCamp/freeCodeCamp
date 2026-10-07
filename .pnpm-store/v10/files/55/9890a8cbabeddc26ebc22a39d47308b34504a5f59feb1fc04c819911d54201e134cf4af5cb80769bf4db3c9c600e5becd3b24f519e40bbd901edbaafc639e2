import { Permutation, compareBy } from '../../../../base/common/arrays.js';
import '../../../../base/common/observableInternal/index.js';
import { bindContextKey } from '../../../../platform/observable/common/platformObservableUtils.js';
import { Range } from '../../../common/core/range.js';
import { TextEdit } from '../../../common/core/edits/textEdit.js';
import { getPositionOffsetTransformerFromTextModel } from '../../../common/core/text/getPositionOffsetTransformerFromTextModel.js';
import { observableValue } from '../../../../base/common/observableInternal/observables/observableValue.js';
import { autorun } from '../../../../base/common/observableInternal/reactions/autorun.js';
import { transaction } from '../../../../base/common/observableInternal/transaction.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const array = [];
function getReadonlyEmptyArray() {
    return array;
}
function getEndPositionsAfterApplying(edits) {
    const newRanges = getModifiedRangesAfterApplying(edits);
    return newRanges.map(range => range.getEndPosition());
}
function getModifiedRangesAfterApplying(edits) {
    const sortPerm = Permutation.createSortPermutation(edits, compareBy(e => e.range, Range.compareRangesUsingStarts));
    const edit = new TextEdit(sortPerm.apply(edits));
    const sortedNewRanges = edit.getNewRanges();
    return sortPerm.inverse().apply(sortedNewRanges);
}
function removeTextReplacementCommonSuffixPrefix(edits, textModel) {
    const transformer = getPositionOffsetTransformerFromTextModel(textModel);
    const text = textModel.getValue();
    const stringReplacements = edits.map(edit => transformer.getStringReplacement(edit));
    const minimalStringReplacements = stringReplacements.map(replacement => replacement.removeCommonSuffixPrefix(text));
    return minimalStringReplacements.map(replacement => transformer.getTextReplacement(replacement));
}
function convertItemsToStableObservables(items, store) {
    const result = observableValue('result', []);
    const innerObservables = [];
    store.add(autorun(reader => {
        const itemsValue = items.read(reader);
        transaction(tx => {
            if (itemsValue.length !== innerObservables.length) {
                innerObservables.length = itemsValue.length;
                for (let i = 0; i < innerObservables.length; i++) {
                    if (!innerObservables[i]) {
                        innerObservables[i] = observableValue('item', itemsValue[i]);
                    }
                }
                result.set([...innerObservables], tx);
            }
            innerObservables.forEach((o, i) => o.set(itemsValue[i], tx));
        });
    }));
    return result;
}
class ObservableContextKeyService {
    constructor(_contextKeyService) {
        this._contextKeyService = _contextKeyService;
    }
    bind(key, obs) {
        return bindContextKey(key, this._contextKeyService, obs instanceof Function ? obs : reader => obs.read(reader));
    }
}
function wait(ms, cancellationToken) {
    return new Promise(resolve => {
        let d = undefined;
        const handle = setTimeout(() => {
            if (d) {
                d.dispose();
            }
            resolve();
        }, ms);
        if (cancellationToken) {
            d = cancellationToken.onCancellationRequested(() => {
                clearTimeout(handle);
                if (d) {
                    d.dispose();
                }
                resolve();
            });
        }
    });
}

export { ObservableContextKeyService, convertItemsToStableObservables, getEndPositionsAfterApplying, getModifiedRangesAfterApplying, getReadonlyEmptyArray, removeTextReplacementCommonSuffixPrefix, wait };
