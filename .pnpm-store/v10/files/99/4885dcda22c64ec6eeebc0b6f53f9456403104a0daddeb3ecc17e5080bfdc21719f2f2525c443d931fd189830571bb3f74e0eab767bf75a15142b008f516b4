/*
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { InvalidArgumentException, NoSuchElementException, UnableToSetFileInputException, NoSuchNodeException, } from '../../../protocol/protocol.js';
import { assert } from '../../../utils/assert.js';
import { ActionDispatcher } from '../input/ActionDispatcher.js';
import { InputStateManager } from '../input/InputStateManager.js';
export class InputProcessor {
    #browsingContextStorage;
    #inputStateManager = new InputStateManager();
    constructor(browsingContextStorage) {
        this.#browsingContextStorage = browsingContextStorage;
    }
    async performActions(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        const inputState = this.#inputStateManager.get(context.top);
        const actionsByTick = this.#getActionsByTick(params, inputState);
        const dispatcher = new ActionDispatcher(inputState, this.#browsingContextStorage, params.context, await ActionDispatcher.isMacOS(context).catch(() => false));
        await dispatcher.dispatchActions(actionsByTick);
        return {};
    }
    async releaseActions(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        const topContext = context.top;
        const inputState = this.#inputStateManager.get(topContext);
        const dispatcher = new ActionDispatcher(inputState, this.#browsingContextStorage, params.context, await ActionDispatcher.isMacOS(context).catch(() => false));
        await dispatcher.dispatchTickActions(inputState.cancelList.reverse());
        this.#inputStateManager.delete(topContext);
        return {};
    }
    async setFiles(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        const hiddenSandboxRealm = await context.getOrCreateHiddenSandbox();
        let result;
        try {
            result = await hiddenSandboxRealm.callFunction(String(function getFiles(fileListLength) {
                if (!(this instanceof HTMLInputElement)) {
                    if (this instanceof Element) {
                        return 1 /* ErrorCode.Element */;
                    }
                    return 0 /* ErrorCode.Node */;
                }
                if (this.type !== 'file') {
                    return 2 /* ErrorCode.Type */;
                }
                if (this.disabled) {
                    return 3 /* ErrorCode.Disabled */;
                }
                if (fileListLength > 1 && !this.multiple) {
                    return 4 /* ErrorCode.Multiple */;
                }
                return;
            }), false, params.element, [{ type: 'number', value: params.files.length }]);
        }
        catch {
            throw new NoSuchNodeException(`Could not find element ${params.element.sharedId}`);
        }
        assert(result.type === 'success');
        if (result.result.type === 'number') {
            switch (result.result.value) {
                case 0 /* ErrorCode.Node */: {
                    throw new NoSuchElementException(`Could not find element ${params.element.sharedId}`);
                }
                case 1 /* ErrorCode.Element */: {
                    throw new UnableToSetFileInputException(`Element ${params.element.sharedId} is not a input`);
                }
                case 2 /* ErrorCode.Type */: {
                    throw new UnableToSetFileInputException(`Input element ${params.element.sharedId} is not a file type`);
                }
                case 3 /* ErrorCode.Disabled */: {
                    throw new UnableToSetFileInputException(`Input element ${params.element.sharedId} is disabled`);
                }
                case 4 /* ErrorCode.Multiple */: {
                    throw new UnableToSetFileInputException(`Cannot set multiple files on a non-multiple input element`);
                }
            }
        }
        /**
         * The zero-length array is a special case, it seems that
         * DOM.setFileInputFiles does not actually update the files in that case, so
         * the solution is to eval the element value to a new FileList directly.
         */
        if (params.files.length === 0) {
            // XXX: These events should converted to trusted events. Perhaps do this
            // in `DOM.setFileInputFiles`?
            await hiddenSandboxRealm.callFunction(String(function dispatchEvent() {
                if (this.files?.length === 0) {
                    this.dispatchEvent(new Event('cancel', {
                        bubbles: true,
                    }));
                    return;
                }
                this.files = new DataTransfer().files;
                // Dispatch events for this case because it should behave akin to a user action.
                this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
                this.dispatchEvent(new Event('change', { bubbles: true }));
            }), false, params.element);
            return {};
        }
        // Our goal here is to iterate over the input element files and get their
        // file paths.
        const paths = [];
        for (let i = 0; i < params.files.length; ++i) {
            const result = await hiddenSandboxRealm.callFunction(String(function getFiles(index) {
                return this.files?.item(index);
            }), false, params.element, [{ type: 'number', value: 0 }], "root" /* Script.ResultOwnership.Root */);
            assert(result.type === 'success');
            if (result.result.type !== 'object') {
                break;
            }
            const { handle } = result.result;
            assert(handle !== undefined);
            const { path } = await hiddenSandboxRealm.cdpClient.sendCommand('DOM.getFileInfo', {
                objectId: handle,
            });
            paths.push(path);
            // Cleanup the handle.
            void hiddenSandboxRealm.disown(handle).catch(undefined);
        }
        paths.sort();
        // We create a new array so we preserve the order of the original files.
        const sortedFiles = [...params.files].sort();
        if (paths.length !== params.files.length ||
            sortedFiles.some((path, index) => {
                return paths[index] !== path;
            })) {
            const { objectId } = await hiddenSandboxRealm.deserializeForCdp(params.element);
            // This cannot throw since this was just used in `callFunction` above.
            assert(objectId !== undefined);
            await hiddenSandboxRealm.cdpClient.sendCommand('DOM.setFileInputFiles', {
                files: params.files,
                objectId,
            });
        }
        else {
            // XXX: We should dispatch a trusted event.
            await hiddenSandboxRealm.callFunction(String(function dispatchEvent() {
                this.dispatchEvent(new Event('cancel', {
                    bubbles: true,
                }));
            }), false, params.element);
        }
        return {};
    }
    #getActionsByTick(params, inputState) {
        const actionsByTick = [];
        for (const action of params.actions) {
            switch (action.type) {
                case "pointer" /* SourceType.Pointer */: {
                    action.parameters ??= { pointerType: "mouse" /* Input.PointerType.Mouse */ };
                    action.parameters.pointerType ??= "mouse" /* Input.PointerType.Mouse */;
                    const source = inputState.getOrCreate(action.id, "pointer" /* SourceType.Pointer */, action.parameters.pointerType);
                    if (source.subtype !== action.parameters.pointerType) {
                        throw new InvalidArgumentException(`Expected input source ${action.id} to be ${source.subtype}; got ${action.parameters.pointerType}.`);
                    }
                    // https://github.com/GoogleChromeLabs/chromium-bidi/issues/3043
                    source.resetClickCount();
                    break;
                }
                default:
                    inputState.getOrCreate(action.id, action.type);
            }
            const actions = action.actions.map((item) => ({
                id: action.id,
                action: item,
            }));
            for (let i = 0; i < actions.length; i++) {
                if (actionsByTick.length === i) {
                    actionsByTick.push([]);
                }
                actionsByTick[i].push(actions[i]);
            }
        }
        return actionsByTick;
    }
}
//# sourceMappingURL=InputProcessor.js.map