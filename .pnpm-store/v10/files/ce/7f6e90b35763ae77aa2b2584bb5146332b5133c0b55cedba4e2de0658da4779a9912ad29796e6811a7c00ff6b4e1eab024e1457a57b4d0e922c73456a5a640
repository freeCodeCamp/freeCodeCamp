import { Disposable } from '../../../../base/common/lifecycle.js';
import { basename } from '../../../../base/common/resources.js';
import { registerEditorContribution } from '../../../browser/editorExtensions.js';
import { ICodeEditorService } from '../../../browser/services/codeEditorService.js';
import { localize } from '../../../../nls.js';
import { IDialogService } from '../../../../platform/dialogs/common/dialogs.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const ignoreUnusualLineTerminators = 'ignoreUnusualLineTerminators';
function writeIgnoreState(codeEditorService, model, state) {
    codeEditorService.setModelProperty(model.uri, ignoreUnusualLineTerminators, state);
}
function readIgnoreState(codeEditorService, model) {
    return codeEditorService.getModelProperty(model.uri, ignoreUnusualLineTerminators);
}
let UnusualLineTerminatorsDetector = class UnusualLineTerminatorsDetector extends Disposable {
    static { this.ID = 'editor.contrib.unusualLineTerminatorsDetector'; }
    constructor(_editor, _dialogService, _codeEditorService) {
        super();
        this._editor = _editor;
        this._dialogService = _dialogService;
        this._codeEditorService = _codeEditorService;
        this._isPresentingDialog = false;
        this._config = this._editor.getOption(143 /* EditorOption.unusualLineTerminators */);
        this._register(this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(143 /* EditorOption.unusualLineTerminators */)) {
                this._config = this._editor.getOption(143 /* EditorOption.unusualLineTerminators */);
                this._checkForUnusualLineTerminators();
            }
        }));
        this._register(this._editor.onDidChangeModel(() => {
            this._checkForUnusualLineTerminators();
        }));
        this._register(this._editor.onDidChangeModelContent((e) => {
            if (e.isUndoing) {
                // skip checking in case of undoing
                return;
            }
            this._checkForUnusualLineTerminators();
        }));
        this._checkForUnusualLineTerminators();
    }
    async _checkForUnusualLineTerminators() {
        if (this._config === 'off') {
            return;
        }
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        if (!model.mightContainUnusualLineTerminators()) {
            return;
        }
        const ignoreState = readIgnoreState(this._codeEditorService, model);
        if (ignoreState === true) {
            // this model should be ignored
            return;
        }
        if (this._editor.getOption(104 /* EditorOption.readOnly */)) {
            // read only editor => sorry!
            return;
        }
        if (this._config === 'auto') {
            // just do it!
            model.removeUnusualLineTerminators(this._editor.getSelections());
            return;
        }
        if (this._isPresentingDialog) {
            // we're currently showing the dialog, which is async.
            // avoid spamming the user
            return;
        }
        let result;
        try {
            this._isPresentingDialog = true;
            result = await this._dialogService.confirm({
                title: localize(1558, "Unusual Line Terminators"),
                message: localize(1559, "Detected unusual line terminators"),
                detail: localize(1560, "The file '{0}' contains one or more unusual line terminator characters, like Line Separator (LS) or Paragraph Separator (PS).\n\nIt is recommended to remove them from the file. This can be configured via `editor.unusualLineTerminators`.", basename(model.uri)),
                primaryButton: localize(1561, "&&Remove Unusual Line Terminators"),
                cancelButton: localize(1562, "Ignore")
            });
        }
        finally {
            this._isPresentingDialog = false;
        }
        if (!result.confirmed) {
            // this model should be ignored
            writeIgnoreState(this._codeEditorService, model, true);
            return;
        }
        model.removeUnusualLineTerminators(this._editor.getSelections());
    }
};
UnusualLineTerminatorsDetector = __decorate([
    __param(1, IDialogService),
    __param(2, ICodeEditorService)
], UnusualLineTerminatorsDetector);
registerEditorContribution(UnusualLineTerminatorsDetector.ID, UnusualLineTerminatorsDetector, 1 /* EditorContributionInstantiation.AfterFirstRender */);

export { UnusualLineTerminatorsDetector };
