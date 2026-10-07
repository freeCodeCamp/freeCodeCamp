import { localize } from '../../../nls.js';
import { basename } from '../../../base/common/path.js';
import '../../../base/common/ternarySearchTree.js';
import { URI } from '../../../base/common/uri.js';
import { createDecorator } from '../../instantiation/common/instantiation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const IWorkspaceContextService = createDecorator('contextService');
function isSingleFolderWorkspaceIdentifier(obj) {
    const singleFolderIdentifier = obj;
    return typeof singleFolderIdentifier?.id === 'string' && URI.isUri(singleFolderIdentifier.uri);
}
function isEmptyWorkspaceIdentifier(obj) {
    const emptyWorkspaceIdentifier = obj;
    return typeof emptyWorkspaceIdentifier?.id === 'string'
        && !isSingleFolderWorkspaceIdentifier(obj)
        && !isWorkspaceIdentifier(obj);
}
const UNKNOWN_EMPTY_WINDOW_WORKSPACE = { id: 'empty-window' };
function toWorkspaceIdentifier(arg0, isExtensionDevelopment) {
    // Empty workspace
    if (typeof arg0 === 'string' || typeof arg0 === 'undefined') {
        // With a backupPath, the basename is the empty workspace identifier
        if (typeof arg0 === 'string') {
            return {
                id: basename(arg0)
            };
        }
        return UNKNOWN_EMPTY_WINDOW_WORKSPACE;
    }
    // Multi root
    const workspace = arg0;
    if (workspace.configuration) {
        return {
            id: workspace.id,
            configPath: workspace.configuration
        };
    }
    // Single folder
    if (workspace.folders.length === 1) {
        return {
            id: workspace.id,
            uri: workspace.folders[0].uri
        };
    }
    // Empty window
    return {
        id: workspace.id
    };
}
function isWorkspaceIdentifier(obj) {
    const workspaceIdentifier = obj;
    return typeof workspaceIdentifier?.id === 'string' && URI.isUri(workspaceIdentifier.configPath);
}
class WorkspaceFolder {
    constructor(data, 
    /**
     * Provides access to the original metadata for this workspace
     * folder. This can be different from the metadata provided in
     * this class:
     * - raw paths can be relative
     * - raw paths are not normalized
     */
    raw) {
        this.raw = raw;
        this.uri = data.uri;
        this.index = data.index;
        this.name = data.name;
    }
    toJSON() {
        return { uri: this.uri, name: this.name, index: this.index };
    }
}
const WORKSPACE_EXTENSION = 'code-workspace';
[{ name: localize(2050, "Code Workspace"), extensions: [WORKSPACE_EXTENSION] }];
const STANDALONE_EDITOR_WORKSPACE_ID = '4064f6ec-cb38-4ad0-af64-ee6467e63c82';
function isStandaloneEditorWorkspace(workspace) {
    return workspace.id === STANDALONE_EDITOR_WORKSPACE_ID;
}

export { IWorkspaceContextService, STANDALONE_EDITOR_WORKSPACE_ID, UNKNOWN_EMPTY_WINDOW_WORKSPACE, WORKSPACE_EXTENSION, WorkspaceFolder, isEmptyWorkspaceIdentifier, isSingleFolderWorkspaceIdentifier, isStandaloneEditorWorkspace, isWorkspaceIdentifier, toWorkspaceIdentifier };
