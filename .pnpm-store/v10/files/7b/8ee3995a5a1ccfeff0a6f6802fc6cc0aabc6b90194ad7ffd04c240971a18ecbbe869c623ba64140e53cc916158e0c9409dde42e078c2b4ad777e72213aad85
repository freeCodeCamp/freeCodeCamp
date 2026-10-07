import { isFunction } from '../../../base/common/types.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var GPULifecycle;
(function (GPULifecycle) {
    async function requestDevice(fallback) {
        try {
            if (!navigator.gpu) {
                throw new Error('This browser does not support WebGPU');
            }
            const adapter = (await navigator.gpu.requestAdapter());
            if (!adapter) {
                throw new Error('This browser supports WebGPU but it appears to be disabled');
            }
            return wrapDestroyableInDisposable(await adapter.requestDevice());
        }
        catch (e) {
            if (fallback) {
                fallback(e.message);
            }
            throw e;
        }
    }
    GPULifecycle.requestDevice = requestDevice;
    function createBuffer(device, descriptor, initialValues) {
        const buffer = device.createBuffer(descriptor);
        if (initialValues) {
            device.queue.writeBuffer(buffer, 0, (isFunction(initialValues) ? initialValues() : initialValues));
        }
        return wrapDestroyableInDisposable(buffer);
    }
    GPULifecycle.createBuffer = createBuffer;
    function createTexture(device, descriptor) {
        return wrapDestroyableInDisposable(device.createTexture(descriptor));
    }
    GPULifecycle.createTexture = createTexture;
})(GPULifecycle || (GPULifecycle = {}));
function wrapDestroyableInDisposable(value) {
    return {
        object: value,
        dispose: () => value.destroy()
    };
}

export { GPULifecycle };
