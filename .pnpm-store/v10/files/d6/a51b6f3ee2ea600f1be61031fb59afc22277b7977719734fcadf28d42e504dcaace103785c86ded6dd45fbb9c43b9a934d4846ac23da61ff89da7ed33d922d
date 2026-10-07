import { registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { EditorZoom } from '../../../common/config/editorZoom.js';
import { localize2 } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class EditorFontZoomIn extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.fontZoomIn',
            label: localize2(1011, "Increase Editor Font Size"),
            precondition: undefined
        });
    }
    run(accessor, editor) {
        EditorZoom.setZoomLevel(EditorZoom.getZoomLevel() + 1);
    }
}
class EditorFontZoomOut extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.fontZoomOut',
            label: localize2(1012, "Decrease Editor Font Size"),
            precondition: undefined
        });
    }
    run(accessor, editor) {
        EditorZoom.setZoomLevel(EditorZoom.getZoomLevel() - 1);
    }
}
class EditorFontZoomReset extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.fontZoomReset',
            label: localize2(1013, "Reset Editor Font Size"),
            precondition: undefined
        });
    }
    run(accessor, editor) {
        EditorZoom.setZoomLevel(0);
    }
}
registerEditorAction(EditorFontZoomIn);
registerEditorAction(EditorFontZoomOut);
registerEditorAction(EditorFontZoomReset);
