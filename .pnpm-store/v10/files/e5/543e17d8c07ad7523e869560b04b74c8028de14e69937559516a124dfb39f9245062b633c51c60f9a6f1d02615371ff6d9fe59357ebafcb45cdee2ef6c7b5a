import { StopWatch } from '../../../../base/common/stopwatch.js';
import { registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { localize2 } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ForceRetokenizeAction extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.forceRetokenize',
            label: localize2(1532, "Developer: Force Retokenize"),
            precondition: undefined
        });
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        model.tokenization.resetTokenization();
        const sw = new StopWatch();
        model.tokenization.forceTokenization(model.getLineCount());
        sw.stop();
        console.log(`tokenization took ${sw.elapsed()}`);
    }
}
registerEditorAction(ForceRetokenizeAction);
