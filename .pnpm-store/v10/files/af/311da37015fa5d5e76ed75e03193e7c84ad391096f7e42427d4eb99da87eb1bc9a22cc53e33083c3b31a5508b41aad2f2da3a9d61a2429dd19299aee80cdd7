import { EditorType } from '../common/editorCommon.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 *@internal
 */
function isCodeEditor(thing) {
    if (thing && typeof thing.getEditorType === 'function') {
        return thing.getEditorType() === EditorType.ICodeEditor;
    }
    else {
        return false;
    }
}
/**
 *@internal
 */
function isDiffEditor(thing) {
    if (thing && typeof thing.getEditorType === 'function') {
        return thing.getEditorType() === EditorType.IDiffEditor;
    }
    else {
        return false;
    }
}
/**
 *@internal
 */
function isCompositeEditor(thing) {
    return !!thing
        && typeof thing === 'object'
        && typeof thing.onDidChangeActiveEditor === 'function';
}
/**
 *@internal
 */
function getCodeEditor(thing) {
    if (isCodeEditor(thing)) {
        return thing;
    }
    if (isDiffEditor(thing)) {
        return thing.getModifiedEditor();
    }
    if (isCompositeEditor(thing) && isCodeEditor(thing.activeCodeEditor)) {
        return thing.activeCodeEditor;
    }
    return null;
}

export { getCodeEditor, isCodeEditor, isCompositeEditor, isDiffEditor };
