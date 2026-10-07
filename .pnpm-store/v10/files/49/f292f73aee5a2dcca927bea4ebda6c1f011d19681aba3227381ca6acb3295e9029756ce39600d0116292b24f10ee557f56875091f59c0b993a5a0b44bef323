import { SimpleTypedRpcConnection } from './rpc.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function registerDebugChannel(channelId, createClient) {
    // eslint-disable-next-line local/code-no-any-casts
    const g = globalThis;
    let queuedNotifications = [];
    let curHost = undefined;
    const { channel, handler } = createChannelFactoryFromDebugChannel({
        sendNotification: (data) => {
            if (curHost) {
                curHost.sendNotification(data);
            }
            else {
                queuedNotifications.push(data);
            }
        },
    });
    let curClient = undefined;
    (g.$$debugValueEditor_debugChannels ?? (g.$$debugValueEditor_debugChannels = {}))[channelId] = (host) => {
        curClient = createClient();
        curHost = host;
        for (const n of queuedNotifications) {
            host.sendNotification(n);
        }
        queuedNotifications = [];
        return handler;
    };
    return SimpleTypedRpcConnection.createClient(channel, () => {
        if (!curClient) {
            throw new Error('Not supported');
        }
        return curClient;
    });
}
function createChannelFactoryFromDebugChannel(host) {
    let h;
    const channel = (handler) => {
        h = handler;
        return {
            sendNotification: data => {
                host.sendNotification(data);
            },
            sendRequest: data => {
                throw new Error('not supported');
            },
        };
    };
    return {
        channel: channel,
        handler: {
            handleRequest: (data) => {
                if (data.type === 'notification') {
                    return h?.handleNotification(data.data);
                }
                else {
                    return h?.handleRequest(data.data);
                }
            },
        },
    };
}

export { registerDebugChannel };
