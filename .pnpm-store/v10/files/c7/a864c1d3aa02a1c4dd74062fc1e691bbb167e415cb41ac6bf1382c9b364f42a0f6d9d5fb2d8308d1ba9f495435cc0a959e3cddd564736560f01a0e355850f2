import { Disposable } from '../../../../base/common/lifecycle.js';
import { registerEditorContribution } from '../../../browser/editorExtensions.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class LongLinesHelper extends Disposable {
    static { this.ID = 'editor.contrib.longLinesHelper'; }
    constructor(_editor) {
        super();
        this._editor = _editor;
        this._register(this._editor.onMouseDown((e) => {
            const stopRenderingLineAfter = this._editor.getOption(133 /* EditorOption.stopRenderingLineAfter */);
            if (stopRenderingLineAfter >= 0 && e.target.type === 6 /* MouseTargetType.CONTENT_TEXT */ && e.target.position.column >= stopRenderingLineAfter) {
                this._editor.updateOptions({
                    stopRenderingLineAfter: -1
                });
            }
        }));
    }
}
registerEditorContribution(LongLinesHelper.ID, LongLinesHelper, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
