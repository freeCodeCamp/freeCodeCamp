import { isNative } from '../../../base/common/platform.js';
import { Registry } from '../../registry/common/platform.js';

//#region Editor / Resources DND
const CodeDataTransfers = {
    EDITORS: 'CodeEditors',
    FILES: 'CodeFiles'};
class DragAndDropContributionRegistry {
}
const Extensions = {
    DragAndDropContribution: 'workbench.contributions.dragAndDrop'
};
Registry.add(Extensions.DragAndDropContribution, new DragAndDropContributionRegistry());
//#endregion
//#region DND Utilities
/**
 * A singleton to store transfer data during drag & drop operations that are only valid within the application.
 */
class LocalSelectionTransfer {
    static { this.INSTANCE = new LocalSelectionTransfer(); }
    constructor() {
        // protect against external instantiation
    }
    static getInstance() {
        return LocalSelectionTransfer.INSTANCE;
    }
    hasData(proto) {
        return proto && proto === this.proto;
    }
    getData(proto) {
        if (this.hasData(proto)) {
            return this.data;
        }
        return undefined;
    }
}
/**
 * A helper to get access to Electrons `webUtils.getPathForFile` function
 * in a safe way without crashing the application when running in the web.
 */
function getPathForFile(file) {
    if (isNative && typeof globalThis.vscode?.webUtils?.getPathForFile === 'function') {
        return globalThis.vscode?.webUtils?.getPathForFile(file);
    }
    return undefined;
}
//#endregion

export { CodeDataTransfers, Extensions, LocalSelectionTransfer, getPathForFile };
