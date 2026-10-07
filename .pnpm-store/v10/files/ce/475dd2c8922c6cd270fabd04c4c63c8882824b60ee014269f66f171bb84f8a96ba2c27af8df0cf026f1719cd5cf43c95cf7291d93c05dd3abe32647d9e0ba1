/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const editorFeatures = [];
/**
 * Registers an editor feature. Editor features will be instantiated only once, as soon as
 * the first code editor is instantiated.
 */
function registerEditorFeature(ctor) {
    editorFeatures.push(ctor);
}
function getEditorFeatures() {
    return editorFeatures.slice(0);
}

export { getEditorFeatures, registerEditorFeature };
