import { onUnexpectedError } from '../../../base/common/errors.js';
import { Disposable, isDisposable } from '../../../base/common/lifecycle.js';
import { Schemas } from '../../../base/common/network.js';
import Severity from '../../../base/common/severity.js';
import { localize } from '../../../nls.js';
import { IDialogService } from '../../dialogs/common/dialogs.js';
import { registerSingleton } from '../../instantiation/common/extensions.js';
import { INotificationService } from '../../notification/common/notification.js';
import { ResourceEditStackSnapshot, UndoRedoGroup, UndoRedoSource, IUndoRedoService } from './undoRedo.js';

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
function getResourceLabel(resource) {
    return resource.scheme === Schemas.file ? resource.fsPath : resource.path;
}
let stackElementCounter = 0;
class ResourceStackElement {
    constructor(actual, resourceLabel, strResource, groupId, groupOrder, sourceId, sourceOrder) {
        this.id = (++stackElementCounter);
        this.type = 0 /* UndoRedoElementType.Resource */;
        this.actual = actual;
        this.label = actual.label;
        this.confirmBeforeUndo = actual.confirmBeforeUndo || false;
        this.resourceLabel = resourceLabel;
        this.strResource = strResource;
        this.resourceLabels = [this.resourceLabel];
        this.strResources = [this.strResource];
        this.groupId = groupId;
        this.groupOrder = groupOrder;
        this.sourceId = sourceId;
        this.sourceOrder = sourceOrder;
        this.isValid = true;
    }
    setValid(isValid) {
        this.isValid = isValid;
    }
    toString() {
        return `[id:${this.id}] [group:${this.groupId}] [${this.isValid ? '  VALID' : 'INVALID'}] ${this.actual.constructor.name} - ${this.actual}`;
    }
}
class ResourceReasonPair {
    constructor(resourceLabel, reason) {
        this.resourceLabel = resourceLabel;
        this.reason = reason;
    }
}
class RemovedResources {
    constructor() {
        this.elements = new Map();
    }
    createMessage() {
        const externalRemoval = [];
        const noParallelUniverses = [];
        for (const [, element] of this.elements) {
            const dest = (element.reason === 0 /* RemovedResourceReason.ExternalRemoval */
                ? externalRemoval
                : noParallelUniverses);
            dest.push(element.resourceLabel);
        }
        const messages = [];
        if (externalRemoval.length > 0) {
            messages.push(localize(2030, "The following files have been closed and modified on disk: {0}.", externalRemoval.join(', ')));
        }
        if (noParallelUniverses.length > 0) {
            messages.push(localize(2031, "The following files have been modified in an incompatible way: {0}.", noParallelUniverses.join(', ')));
        }
        return messages.join('\n');
    }
    get size() {
        return this.elements.size;
    }
    has(strResource) {
        return this.elements.has(strResource);
    }
    set(strResource, value) {
        this.elements.set(strResource, value);
    }
    delete(strResource) {
        return this.elements.delete(strResource);
    }
}
class WorkspaceStackElement {
    constructor(actual, resourceLabels, strResources, groupId, groupOrder, sourceId, sourceOrder) {
        this.id = (++stackElementCounter);
        this.type = 1 /* UndoRedoElementType.Workspace */;
        this.actual = actual;
        this.label = actual.label;
        this.confirmBeforeUndo = actual.confirmBeforeUndo || false;
        this.resourceLabels = resourceLabels;
        this.strResources = strResources;
        this.groupId = groupId;
        this.groupOrder = groupOrder;
        this.sourceId = sourceId;
        this.sourceOrder = sourceOrder;
        this.removedResources = null;
        this.invalidatedResources = null;
    }
    canSplit() {
        return (typeof this.actual.split === 'function');
    }
    removeResource(resourceLabel, strResource, reason) {
        if (!this.removedResources) {
            this.removedResources = new RemovedResources();
        }
        if (!this.removedResources.has(strResource)) {
            this.removedResources.set(strResource, new ResourceReasonPair(resourceLabel, reason));
        }
    }
    setValid(resourceLabel, strResource, isValid) {
        if (isValid) {
            if (this.invalidatedResources) {
                this.invalidatedResources.delete(strResource);
                if (this.invalidatedResources.size === 0) {
                    this.invalidatedResources = null;
                }
            }
        }
        else {
            if (!this.invalidatedResources) {
                this.invalidatedResources = new RemovedResources();
            }
            if (!this.invalidatedResources.has(strResource)) {
                this.invalidatedResources.set(strResource, new ResourceReasonPair(resourceLabel, 0 /* RemovedResourceReason.ExternalRemoval */));
            }
        }
    }
    toString() {
        return `[id:${this.id}] [group:${this.groupId}] [${this.invalidatedResources ? 'INVALID' : '  VALID'}] ${this.actual.constructor.name} - ${this.actual}`;
    }
}
class ResourceEditStack {
    constructor(resourceLabel, strResource) {
        this.resourceLabel = resourceLabel;
        this.strResource = strResource;
        this._past = [];
        this._future = [];
        this.locked = false;
        this.versionId = 1;
    }
    dispose() {
        for (const element of this._past) {
            if (element.type === 1 /* UndoRedoElementType.Workspace */) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */);
            }
        }
        for (const element of this._future) {
            if (element.type === 1 /* UndoRedoElementType.Workspace */) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */);
            }
        }
        this.versionId++;
    }
    toString() {
        const result = [];
        result.push(`* ${this.strResource}:`);
        for (let i = 0; i < this._past.length; i++) {
            result.push(`   * [UNDO] ${this._past[i]}`);
        }
        for (let i = this._future.length - 1; i >= 0; i--) {
            result.push(`   * [REDO] ${this._future[i]}`);
        }
        return result.join('\n');
    }
    flushAllElements() {
        this._past = [];
        this._future = [];
        this.versionId++;
    }
    _setElementValidFlag(element, isValid) {
        if (element.type === 1 /* UndoRedoElementType.Workspace */) {
            element.setValid(this.resourceLabel, this.strResource, isValid);
        }
        else {
            element.setValid(isValid);
        }
    }
    setElementsValidFlag(isValid, filter) {
        for (const element of this._past) {
            if (filter(element.actual)) {
                this._setElementValidFlag(element, isValid);
            }
        }
        for (const element of this._future) {
            if (filter(element.actual)) {
                this._setElementValidFlag(element, isValid);
            }
        }
    }
    pushElement(element) {
        // remove the future
        for (const futureElement of this._future) {
            if (futureElement.type === 1 /* UndoRedoElementType.Workspace */) {
                futureElement.removeResource(this.resourceLabel, this.strResource, 1 /* RemovedResourceReason.NoParallelUniverses */);
            }
        }
        this._future = [];
        this._past.push(element);
        this.versionId++;
    }
    createSnapshot(resource) {
        const elements = [];
        for (let i = 0, len = this._past.length; i < len; i++) {
            elements.push(this._past[i].id);
        }
        for (let i = this._future.length - 1; i >= 0; i--) {
            elements.push(this._future[i].id);
        }
        return new ResourceEditStackSnapshot(resource, elements);
    }
    restoreSnapshot(snapshot) {
        const snapshotLength = snapshot.elements.length;
        let isOK = true;
        let snapshotIndex = 0;
        let removePastAfter = -1;
        for (let i = 0, len = this._past.length; i < len; i++, snapshotIndex++) {
            const element = this._past[i];
            if (isOK && (snapshotIndex >= snapshotLength || element.id !== snapshot.elements[snapshotIndex])) {
                isOK = false;
                removePastAfter = 0;
            }
            if (!isOK && element.type === 1 /* UndoRedoElementType.Workspace */) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */);
            }
        }
        let removeFutureBefore = -1;
        for (let i = this._future.length - 1; i >= 0; i--, snapshotIndex++) {
            const element = this._future[i];
            if (isOK && (snapshotIndex >= snapshotLength || element.id !== snapshot.elements[snapshotIndex])) {
                isOK = false;
                removeFutureBefore = i;
            }
            if (!isOK && element.type === 1 /* UndoRedoElementType.Workspace */) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */);
            }
        }
        if (removePastAfter !== -1) {
            this._past = this._past.slice(0, removePastAfter);
        }
        if (removeFutureBefore !== -1) {
            this._future = this._future.slice(removeFutureBefore + 1);
        }
        this.versionId++;
    }
    getElements() {
        const past = [];
        const future = [];
        for (const element of this._past) {
            past.push(element.actual);
        }
        for (const element of this._future) {
            future.push(element.actual);
        }
        return { past, future };
    }
    getClosestPastElement() {
        if (this._past.length === 0) {
            return null;
        }
        return this._past[this._past.length - 1];
    }
    getSecondClosestPastElement() {
        if (this._past.length < 2) {
            return null;
        }
        return this._past[this._past.length - 2];
    }
    getClosestFutureElement() {
        if (this._future.length === 0) {
            return null;
        }
        return this._future[this._future.length - 1];
    }
    hasPastElements() {
        return (this._past.length > 0);
    }
    hasFutureElements() {
        return (this._future.length > 0);
    }
    splitPastWorkspaceElement(toRemove, individualMap) {
        for (let j = this._past.length - 1; j >= 0; j--) {
            if (this._past[j] === toRemove) {
                if (individualMap.has(this.strResource)) {
                    // gets replaced
                    this._past[j] = individualMap.get(this.strResource);
                }
                else {
                    // gets deleted
                    this._past.splice(j, 1);
                }
                break;
            }
        }
        this.versionId++;
    }
    splitFutureWorkspaceElement(toRemove, individualMap) {
        for (let j = this._future.length - 1; j >= 0; j--) {
            if (this._future[j] === toRemove) {
                if (individualMap.has(this.strResource)) {
                    // gets replaced
                    this._future[j] = individualMap.get(this.strResource);
                }
                else {
                    // gets deleted
                    this._future.splice(j, 1);
                }
                break;
            }
        }
        this.versionId++;
    }
    moveBackward(element) {
        this._past.pop();
        this._future.push(element);
        this.versionId++;
    }
    moveForward(element) {
        this._future.pop();
        this._past.push(element);
        this.versionId++;
    }
}
class EditStackSnapshot {
    constructor(editStacks) {
        this.editStacks = editStacks;
        this._versionIds = [];
        for (let i = 0, len = this.editStacks.length; i < len; i++) {
            this._versionIds[i] = this.editStacks[i].versionId;
        }
    }
    isValid() {
        for (let i = 0, len = this.editStacks.length; i < len; i++) {
            if (this._versionIds[i] !== this.editStacks[i].versionId) {
                return false;
            }
        }
        return true;
    }
}
const missingEditStack = new ResourceEditStack('', '');
missingEditStack.locked = true;
let UndoRedoService = class UndoRedoService {
    constructor(_dialogService, _notificationService) {
        this._dialogService = _dialogService;
        this._notificationService = _notificationService;
        this._editStacks = new Map();
        this._uriComparisonKeyComputers = [];
    }
    getUriComparisonKey(resource) {
        for (const uriComparisonKeyComputer of this._uriComparisonKeyComputers) {
            if (uriComparisonKeyComputer[0] === resource.scheme) {
                return uriComparisonKeyComputer[1].getComparisonKey(resource);
            }
        }
        return resource.toString();
    }
    _print(label) {
        console.log(`------------------------------------`);
        console.log(`AFTER ${label}: `);
        const str = [];
        for (const element of this._editStacks) {
            str.push(element[1].toString());
        }
        console.log(str.join('\n'));
    }
    pushElement(element, group = UndoRedoGroup.None, source = UndoRedoSource.None) {
        if (element.type === 0 /* UndoRedoElementType.Resource */) {
            const resourceLabel = getResourceLabel(element.resource);
            const strResource = this.getUriComparisonKey(element.resource);
            this._pushElement(new ResourceStackElement(element, resourceLabel, strResource, group.id, group.nextOrder(), source.id, source.nextOrder()));
        }
        else {
            const seen = new Set();
            const resourceLabels = [];
            const strResources = [];
            for (const resource of element.resources) {
                const resourceLabel = getResourceLabel(resource);
                const strResource = this.getUriComparisonKey(resource);
                if (seen.has(strResource)) {
                    continue;
                }
                seen.add(strResource);
                resourceLabels.push(resourceLabel);
                strResources.push(strResource);
            }
            if (resourceLabels.length === 1) {
                this._pushElement(new ResourceStackElement(element, resourceLabels[0], strResources[0], group.id, group.nextOrder(), source.id, source.nextOrder()));
            }
            else {
                this._pushElement(new WorkspaceStackElement(element, resourceLabels, strResources, group.id, group.nextOrder(), source.id, source.nextOrder()));
            }
        }
    }
    _pushElement(element) {
        for (let i = 0, len = element.strResources.length; i < len; i++) {
            const resourceLabel = element.resourceLabels[i];
            const strResource = element.strResources[i];
            let editStack;
            if (this._editStacks.has(strResource)) {
                editStack = this._editStacks.get(strResource);
            }
            else {
                editStack = new ResourceEditStack(resourceLabel, strResource);
                this._editStacks.set(strResource, editStack);
            }
            editStack.pushElement(element);
        }
    }
    getLastElement(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            if (editStack.hasFutureElements()) {
                return null;
            }
            const closestPastElement = editStack.getClosestPastElement();
            return closestPastElement ? closestPastElement.actual : null;
        }
        return null;
    }
    _splitPastWorkspaceElement(toRemove, ignoreResources) {
        const individualArr = toRemove.actual.split();
        const individualMap = new Map();
        for (const _element of individualArr) {
            const resourceLabel = getResourceLabel(_element.resource);
            const strResource = this.getUriComparisonKey(_element.resource);
            const element = new ResourceStackElement(_element, resourceLabel, strResource, 0, 0, 0, 0);
            individualMap.set(element.strResource, element);
        }
        for (const strResource of toRemove.strResources) {
            if (ignoreResources && ignoreResources.has(strResource)) {
                continue;
            }
            const editStack = this._editStacks.get(strResource);
            editStack.splitPastWorkspaceElement(toRemove, individualMap);
        }
    }
    _splitFutureWorkspaceElement(toRemove, ignoreResources) {
        const individualArr = toRemove.actual.split();
        const individualMap = new Map();
        for (const _element of individualArr) {
            const resourceLabel = getResourceLabel(_element.resource);
            const strResource = this.getUriComparisonKey(_element.resource);
            const element = new ResourceStackElement(_element, resourceLabel, strResource, 0, 0, 0, 0);
            individualMap.set(element.strResource, element);
        }
        for (const strResource of toRemove.strResources) {
            if (ignoreResources && ignoreResources.has(strResource)) {
                continue;
            }
            const editStack = this._editStacks.get(strResource);
            editStack.splitFutureWorkspaceElement(toRemove, individualMap);
        }
    }
    removeElements(resource) {
        const strResource = typeof resource === 'string' ? resource : this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.dispose();
            this._editStacks.delete(strResource);
        }
    }
    setElementsValidFlag(resource, isValid, filter) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.setElementsValidFlag(isValid, filter);
        }
    }
    createSnapshot(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.createSnapshot(resource);
        }
        return new ResourceEditStackSnapshot(resource, []);
    }
    restoreSnapshot(snapshot) {
        const strResource = this.getUriComparisonKey(snapshot.resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.restoreSnapshot(snapshot);
            if (!editStack.hasPastElements() && !editStack.hasFutureElements()) {
                // the edit stack is now empty, just remove it entirely
                editStack.dispose();
                this._editStacks.delete(strResource);
            }
        }
    }
    getElements(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.getElements();
        }
        return { past: [], future: [] };
    }
    _findClosestUndoElementWithSource(sourceId) {
        if (!sourceId) {
            return [null, null];
        }
        // find an element with the sourceId and with the highest sourceOrder ready to be undone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks) {
            const candidate = editStack.getClosestPastElement();
            if (!candidate) {
                continue;
            }
            if (candidate.sourceId === sourceId) {
                if (!matchedElement || candidate.sourceOrder > matchedElement.sourceOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [matchedElement, matchedStrResource];
    }
    canUndo(resourceOrSource) {
        if (resourceOrSource instanceof UndoRedoSource) {
            const [, matchedStrResource] = this._findClosestUndoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? true : false;
        }
        const strResource = this.getUriComparisonKey(resourceOrSource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.hasPastElements();
        }
        return false;
    }
    _onError(err, element) {
        onUnexpectedError(err);
        // An error occurred while undoing or redoing => drop the undo/redo stack for all affected resources
        for (const strResource of element.strResources) {
            this.removeElements(strResource);
        }
        this._notificationService.error(err);
    }
    _acquireLocks(editStackSnapshot) {
        // first, check if all locks can be acquired
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.locked) {
                throw new Error('Cannot acquire edit stack lock');
            }
        }
        // can acquire all locks
        for (const editStack of editStackSnapshot.editStacks) {
            editStack.locked = true;
        }
        return () => {
            // release all locks
            for (const editStack of editStackSnapshot.editStacks) {
                editStack.locked = false;
            }
        };
    }
    _safeInvokeWithLocks(element, invoke, editStackSnapshot, cleanup, continuation) {
        const releaseLocks = this._acquireLocks(editStackSnapshot);
        let result;
        try {
            result = invoke();
        }
        catch (err) {
            releaseLocks();
            cleanup.dispose();
            return this._onError(err, element);
        }
        if (result) {
            // result is Promise<void>
            return result.then(() => {
                releaseLocks();
                cleanup.dispose();
                return continuation();
            }, (err) => {
                releaseLocks();
                cleanup.dispose();
                return this._onError(err, element);
            });
        }
        else {
            // result is void
            releaseLocks();
            cleanup.dispose();
            return continuation();
        }
    }
    async _invokeWorkspacePrepare(element) {
        if (typeof element.actual.prepareUndoRedo === 'undefined') {
            return Disposable.None;
        }
        const result = element.actual.prepareUndoRedo();
        if (typeof result === 'undefined') {
            return Disposable.None;
        }
        return result;
    }
    _invokeResourcePrepare(element, callback) {
        if (element.actual.type !== 1 /* UndoRedoElementType.Workspace */ || typeof element.actual.prepareUndoRedo === 'undefined') {
            // no preparation needed
            return callback(Disposable.None);
        }
        const r = element.actual.prepareUndoRedo();
        if (!r) {
            // nothing to clean up
            return callback(Disposable.None);
        }
        if (isDisposable(r)) {
            return callback(r);
        }
        return r.then((disposable) => {
            return callback(disposable);
        });
    }
    _getAffectedEditStacks(element) {
        const affectedEditStacks = [];
        for (const strResource of element.strResources) {
            affectedEditStacks.push(this._editStacks.get(strResource) || missingEditStack);
        }
        return new EditStackSnapshot(affectedEditStacks);
    }
    _tryToSplitAndUndo(strResource, element, ignoreResources, message) {
        if (element.canSplit()) {
            this._splitPastWorkspaceElement(element, ignoreResources);
            this._notificationService.warn(message);
            return new WorkspaceVerificationError(this._undo(strResource, 0, true));
        }
        else {
            // Cannot safely split this workspace element => flush all undo/redo stacks
            for (const strResource of element.strResources) {
                this.removeElements(strResource);
            }
            this._notificationService.warn(message);
            return new WorkspaceVerificationError();
        }
    }
    _checkWorkspaceUndo(strResource, element, editStackSnapshot, checkInvalidatedResources) {
        if (element.removedResources) {
            return this._tryToSplitAndUndo(strResource, element, element.removedResources, localize(2032, "Could not undo '{0}' across all files. {1}", element.label, element.removedResources.createMessage()));
        }
        if (checkInvalidatedResources && element.invalidatedResources) {
            return this._tryToSplitAndUndo(strResource, element, element.invalidatedResources, localize(2033, "Could not undo '{0}' across all files. {1}", element.label, element.invalidatedResources.createMessage()));
        }
        // this must be the last past element in all the impacted resources!
        const cannotUndoDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.getClosestPastElement() !== element) {
                cannotUndoDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotUndoDueToResources.length > 0) {
            return this._tryToSplitAndUndo(strResource, element, null, localize(2034, "Could not undo '{0}' across all files because changes were made to {1}", element.label, cannotUndoDueToResources.join(', ')));
        }
        const cannotLockDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.locked) {
                cannotLockDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotLockDueToResources.length > 0) {
            return this._tryToSplitAndUndo(strResource, element, null, localize(2035, "Could not undo '{0}' across all files because there is already an undo or redo operation running on {1}", element.label, cannotLockDueToResources.join(', ')));
        }
        // check if new stack elements were added in the meantime...
        if (!editStackSnapshot.isValid()) {
            return this._tryToSplitAndUndo(strResource, element, null, localize(2036, "Could not undo '{0}' across all files because an undo or redo operation occurred in the meantime", element.label));
        }
        return null;
    }
    _workspaceUndo(strResource, element, undoConfirmed) {
        const affectedEditStacks = this._getAffectedEditStacks(element);
        const verificationError = this._checkWorkspaceUndo(strResource, element, affectedEditStacks, /*invalidated resources will be checked after the prepare call*/ false);
        if (verificationError) {
            return verificationError.returnValue;
        }
        return this._confirmAndExecuteWorkspaceUndo(strResource, element, affectedEditStacks, undoConfirmed);
    }
    _isPartOfUndoGroup(element) {
        if (!element.groupId) {
            return false;
        }
        // check that there is at least another element with the same groupId ready to be undone
        for (const [, editStack] of this._editStacks) {
            const pastElement = editStack.getClosestPastElement();
            if (!pastElement) {
                continue;
            }
            if (pastElement === element) {
                const secondPastElement = editStack.getSecondClosestPastElement();
                if (secondPastElement && secondPastElement.groupId === element.groupId) {
                    // there is another element with the same group id in the same stack!
                    return true;
                }
            }
            if (pastElement.groupId === element.groupId) {
                // there is another element with the same group id in another stack!
                return true;
            }
        }
        return false;
    }
    async _confirmAndExecuteWorkspaceUndo(strResource, element, editStackSnapshot, undoConfirmed) {
        if (element.canSplit() && !this._isPartOfUndoGroup(element)) {
            // this element can be split
            let UndoChoice;
            (function (UndoChoice) {
                UndoChoice[UndoChoice["All"] = 0] = "All";
                UndoChoice[UndoChoice["This"] = 1] = "This";
                UndoChoice[UndoChoice["Cancel"] = 2] = "Cancel";
            })(UndoChoice || (UndoChoice = {}));
            const { result } = await this._dialogService.prompt({
                type: Severity.Info,
                message: localize(2037, "Would you like to undo '{0}' across all files?", element.label),
                buttons: [
                    {
                        label: localize(2038, "&&Undo in {0} Files", editStackSnapshot.editStacks.length),
                        run: () => UndoChoice.All
                    },
                    {
                        label: localize(2039, "Undo this &&File"),
                        run: () => UndoChoice.This
                    }
                ],
                cancelButton: {
                    run: () => UndoChoice.Cancel
                }
            });
            if (result === UndoChoice.Cancel) {
                // choice: cancel
                return;
            }
            if (result === UndoChoice.This) {
                // choice: undo this file
                this._splitPastWorkspaceElement(element, null);
                return this._undo(strResource, 0, true);
            }
            // choice: undo in all files
            // At this point, it is possible that the element has been made invalid in the meantime (due to the confirmation await)
            const verificationError1 = this._checkWorkspaceUndo(strResource, element, editStackSnapshot, /*invalidated resources will be checked after the prepare call*/ false);
            if (verificationError1) {
                return verificationError1.returnValue;
            }
            undoConfirmed = true;
        }
        // prepare
        let cleanup;
        try {
            cleanup = await this._invokeWorkspacePrepare(element);
        }
        catch (err) {
            return this._onError(err, element);
        }
        // At this point, it is possible that the element has been made invalid in the meantime (due to the prepare await)
        const verificationError2 = this._checkWorkspaceUndo(strResource, element, editStackSnapshot, /*now also check that there are no more invalidated resources*/ true);
        if (verificationError2) {
            cleanup.dispose();
            return verificationError2.returnValue;
        }
        for (const editStack of editStackSnapshot.editStacks) {
            editStack.moveBackward(element);
        }
        return this._safeInvokeWithLocks(element, () => element.actual.undo(), editStackSnapshot, cleanup, () => this._continueUndoInGroup(element.groupId, undoConfirmed));
    }
    _resourceUndo(editStack, element, undoConfirmed) {
        if (!element.isValid) {
            // invalid element => immediately flush edit stack!
            editStack.flushAllElements();
            return;
        }
        if (editStack.locked) {
            const message = localize(2040, "Could not undo '{0}' because there is already an undo or redo operation running.", element.label);
            this._notificationService.warn(message);
            return;
        }
        return this._invokeResourcePrepare(element, (cleanup) => {
            editStack.moveBackward(element);
            return this._safeInvokeWithLocks(element, () => element.actual.undo(), new EditStackSnapshot([editStack]), cleanup, () => this._continueUndoInGroup(element.groupId, undoConfirmed));
        });
    }
    _findClosestUndoElementInGroup(groupId) {
        if (!groupId) {
            return [null, null];
        }
        // find another element with the same groupId and with the highest groupOrder ready to be undone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks) {
            const candidate = editStack.getClosestPastElement();
            if (!candidate) {
                continue;
            }
            if (candidate.groupId === groupId) {
                if (!matchedElement || candidate.groupOrder > matchedElement.groupOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [matchedElement, matchedStrResource];
    }
    _continueUndoInGroup(groupId, undoConfirmed) {
        if (!groupId) {
            return;
        }
        const [, matchedStrResource] = this._findClosestUndoElementInGroup(groupId);
        if (matchedStrResource) {
            return this._undo(matchedStrResource, 0, undoConfirmed);
        }
    }
    undo(resourceOrSource) {
        if (resourceOrSource instanceof UndoRedoSource) {
            const [, matchedStrResource] = this._findClosestUndoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? this._undo(matchedStrResource, resourceOrSource.id, false) : undefined;
        }
        if (typeof resourceOrSource === 'string') {
            return this._undo(resourceOrSource, 0, false);
        }
        return this._undo(this.getUriComparisonKey(resourceOrSource), 0, false);
    }
    _undo(strResource, sourceId = 0, undoConfirmed) {
        if (!this._editStacks.has(strResource)) {
            return;
        }
        const editStack = this._editStacks.get(strResource);
        const element = editStack.getClosestPastElement();
        if (!element) {
            return;
        }
        if (element.groupId) {
            // this element is a part of a group, we need to make sure undoing in a group is in order
            const [matchedElement, matchedStrResource] = this._findClosestUndoElementInGroup(element.groupId);
            if (element !== matchedElement && matchedStrResource) {
                // there is an element in the same group that should be undone before this one
                return this._undo(matchedStrResource, sourceId, undoConfirmed);
            }
        }
        const shouldPromptForConfirmation = (element.sourceId !== sourceId || element.confirmBeforeUndo);
        if (shouldPromptForConfirmation && !undoConfirmed) {
            // Hit a different source or the element asks for prompt before undo, prompt for confirmation
            return this._confirmAndContinueUndo(strResource, sourceId, element);
        }
        try {
            if (element.type === 1 /* UndoRedoElementType.Workspace */) {
                return this._workspaceUndo(strResource, element, undoConfirmed);
            }
            else {
                return this._resourceUndo(editStack, element, undoConfirmed);
            }
        }
        finally {
        }
    }
    async _confirmAndContinueUndo(strResource, sourceId, element) {
        const result = await this._dialogService.confirm({
            message: localize(2041, "Would you like to undo '{0}'?", element.label),
            primaryButton: localize(2042, "&&Yes"),
            cancelButton: localize(2043, "No")
        });
        if (!result.confirmed) {
            return;
        }
        return this._undo(strResource, sourceId, true);
    }
    _findClosestRedoElementWithSource(sourceId) {
        if (!sourceId) {
            return [null, null];
        }
        // find an element with sourceId and with the lowest sourceOrder ready to be redone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks) {
            const candidate = editStack.getClosestFutureElement();
            if (!candidate) {
                continue;
            }
            if (candidate.sourceId === sourceId) {
                if (!matchedElement || candidate.sourceOrder < matchedElement.sourceOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [matchedElement, matchedStrResource];
    }
    canRedo(resourceOrSource) {
        if (resourceOrSource instanceof UndoRedoSource) {
            const [, matchedStrResource] = this._findClosestRedoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? true : false;
        }
        const strResource = this.getUriComparisonKey(resourceOrSource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.hasFutureElements();
        }
        return false;
    }
    _tryToSplitAndRedo(strResource, element, ignoreResources, message) {
        if (element.canSplit()) {
            this._splitFutureWorkspaceElement(element, ignoreResources);
            this._notificationService.warn(message);
            return new WorkspaceVerificationError(this._redo(strResource));
        }
        else {
            // Cannot safely split this workspace element => flush all undo/redo stacks
            for (const strResource of element.strResources) {
                this.removeElements(strResource);
            }
            this._notificationService.warn(message);
            return new WorkspaceVerificationError();
        }
    }
    _checkWorkspaceRedo(strResource, element, editStackSnapshot, checkInvalidatedResources) {
        if (element.removedResources) {
            return this._tryToSplitAndRedo(strResource, element, element.removedResources, localize(2044, "Could not redo '{0}' across all files. {1}", element.label, element.removedResources.createMessage()));
        }
        if (checkInvalidatedResources && element.invalidatedResources) {
            return this._tryToSplitAndRedo(strResource, element, element.invalidatedResources, localize(2045, "Could not redo '{0}' across all files. {1}", element.label, element.invalidatedResources.createMessage()));
        }
        // this must be the last future element in all the impacted resources!
        const cannotRedoDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.getClosestFutureElement() !== element) {
                cannotRedoDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotRedoDueToResources.length > 0) {
            return this._tryToSplitAndRedo(strResource, element, null, localize(2046, "Could not redo '{0}' across all files because changes were made to {1}", element.label, cannotRedoDueToResources.join(', ')));
        }
        const cannotLockDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.locked) {
                cannotLockDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotLockDueToResources.length > 0) {
            return this._tryToSplitAndRedo(strResource, element, null, localize(2047, "Could not redo '{0}' across all files because there is already an undo or redo operation running on {1}", element.label, cannotLockDueToResources.join(', ')));
        }
        // check if new stack elements were added in the meantime...
        if (!editStackSnapshot.isValid()) {
            return this._tryToSplitAndRedo(strResource, element, null, localize(2048, "Could not redo '{0}' across all files because an undo or redo operation occurred in the meantime", element.label));
        }
        return null;
    }
    _workspaceRedo(strResource, element) {
        const affectedEditStacks = this._getAffectedEditStacks(element);
        const verificationError = this._checkWorkspaceRedo(strResource, element, affectedEditStacks, /*invalidated resources will be checked after the prepare call*/ false);
        if (verificationError) {
            return verificationError.returnValue;
        }
        return this._executeWorkspaceRedo(strResource, element, affectedEditStacks);
    }
    async _executeWorkspaceRedo(strResource, element, editStackSnapshot) {
        // prepare
        let cleanup;
        try {
            cleanup = await this._invokeWorkspacePrepare(element);
        }
        catch (err) {
            return this._onError(err, element);
        }
        // At this point, it is possible that the element has been made invalid in the meantime (due to the prepare await)
        const verificationError = this._checkWorkspaceRedo(strResource, element, editStackSnapshot, /*now also check that there are no more invalidated resources*/ true);
        if (verificationError) {
            cleanup.dispose();
            return verificationError.returnValue;
        }
        for (const editStack of editStackSnapshot.editStacks) {
            editStack.moveForward(element);
        }
        return this._safeInvokeWithLocks(element, () => element.actual.redo(), editStackSnapshot, cleanup, () => this._continueRedoInGroup(element.groupId));
    }
    _resourceRedo(editStack, element) {
        if (!element.isValid) {
            // invalid element => immediately flush edit stack!
            editStack.flushAllElements();
            return;
        }
        if (editStack.locked) {
            const message = localize(2049, "Could not redo '{0}' because there is already an undo or redo operation running.", element.label);
            this._notificationService.warn(message);
            return;
        }
        return this._invokeResourcePrepare(element, (cleanup) => {
            editStack.moveForward(element);
            return this._safeInvokeWithLocks(element, () => element.actual.redo(), new EditStackSnapshot([editStack]), cleanup, () => this._continueRedoInGroup(element.groupId));
        });
    }
    _findClosestRedoElementInGroup(groupId) {
        if (!groupId) {
            return [null, null];
        }
        // find another element with the same groupId and with the lowest groupOrder ready to be redone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks) {
            const candidate = editStack.getClosestFutureElement();
            if (!candidate) {
                continue;
            }
            if (candidate.groupId === groupId) {
                if (!matchedElement || candidate.groupOrder < matchedElement.groupOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [matchedElement, matchedStrResource];
    }
    _continueRedoInGroup(groupId) {
        if (!groupId) {
            return;
        }
        const [, matchedStrResource] = this._findClosestRedoElementInGroup(groupId);
        if (matchedStrResource) {
            return this._redo(matchedStrResource);
        }
    }
    redo(resourceOrSource) {
        if (resourceOrSource instanceof UndoRedoSource) {
            const [, matchedStrResource] = this._findClosestRedoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? this._redo(matchedStrResource) : undefined;
        }
        if (typeof resourceOrSource === 'string') {
            return this._redo(resourceOrSource);
        }
        return this._redo(this.getUriComparisonKey(resourceOrSource));
    }
    _redo(strResource) {
        if (!this._editStacks.has(strResource)) {
            return;
        }
        const editStack = this._editStacks.get(strResource);
        const element = editStack.getClosestFutureElement();
        if (!element) {
            return;
        }
        if (element.groupId) {
            // this element is a part of a group, we need to make sure redoing in a group is in order
            const [matchedElement, matchedStrResource] = this._findClosestRedoElementInGroup(element.groupId);
            if (element !== matchedElement && matchedStrResource) {
                // there is an element in the same group that should be redone before this one
                return this._redo(matchedStrResource);
            }
        }
        try {
            if (element.type === 1 /* UndoRedoElementType.Workspace */) {
                return this._workspaceRedo(strResource, element);
            }
            else {
                return this._resourceRedo(editStack, element);
            }
        }
        finally {
        }
    }
};
UndoRedoService = __decorate([
    __param(0, IDialogService),
    __param(1, INotificationService)
], UndoRedoService);
class WorkspaceVerificationError {
    constructor(returnValue) {
        this.returnValue = returnValue;
    }
}
registerSingleton(IUndoRedoService, UndoRedoService, 1 /* InstantiationType.Delayed */);

export { UndoRedoService };
