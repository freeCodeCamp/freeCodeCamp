import { initialize } from '../base/common/worker/webWorkerBootstrap.js';
import { EditorWorker } from './common/services/editorWebWorker.js';
import { EditorWorkerHost } from './common/services/editorWorkerHost.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Used by `monaco-editor` to hook up web worker rpc.
 * @skipMangle
 * @internal
 */
function start(createClient) {
    let client;
    const webWorkerServer = initialize((workerServer) => {
        const editorWorkerHost = EditorWorkerHost.getChannel(workerServer);
        const host = new Proxy({}, {
            get(target, prop, receiver) {
                if (prop === 'then') {
                    // Don't forward the call when the proxy is returned in an async function and the runtime tries to .then it.
                    return undefined;
                }
                if (typeof prop !== 'string') {
                    throw new Error(`Not supported`);
                }
                return (...args) => {
                    return editorWorkerHost.$fhr(prop, args);
                };
            }
        });
        const ctx = {
            host: host,
            getMirrorModels: () => {
                return webWorkerServer.requestHandler.getModels();
            }
        };
        client = createClient(ctx);
        return new EditorWorker(client);
    });
    return client;
}

export { start };
