import { EditorWorkerClient } from '../../browser/services/editorWorkerService.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Create a new web worker that has model syncing capabilities built in.
 * Specify an AMD module to load that will `create` an object that will be proxied.
 */
function createWebWorker(modelService, opts) {
    return new MonacoWebWorkerImpl(modelService, opts);
}
class MonacoWebWorkerImpl extends EditorWorkerClient {
    constructor(modelService, opts) {
        super(opts.worker, opts.keepIdleModels || false, modelService);
        this._foreignModuleHost = opts.host || null;
        this._foreignProxy = this._getProxy().then(proxy => {
            return new Proxy({}, {
                get(target, prop, receiver) {
                    if (prop === 'then') {
                        // Don't forward the call when the proxy is returned in an async function and the runtime tries to .then it.
                        return undefined;
                    }
                    if (typeof prop !== 'string') {
                        throw new Error(`Not supported`);
                    }
                    return (...args) => {
                        return proxy.$fmr(prop, args);
                    };
                }
            });
        });
    }
    // foreign host request
    fhr(method, args) {
        if (!this._foreignModuleHost || typeof this._foreignModuleHost[method] !== 'function') {
            return Promise.reject(new Error('Missing method ' + method + ' or missing main thread foreign host.'));
        }
        try {
            return Promise.resolve(this._foreignModuleHost[method].apply(this._foreignModuleHost, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    getProxy() {
        return this._foreignProxy;
    }
    withSyncedResources(resources) {
        return this.workerWithSyncedResources(resources).then(_ => this.getProxy());
    }
}

export { createWebWorker };
