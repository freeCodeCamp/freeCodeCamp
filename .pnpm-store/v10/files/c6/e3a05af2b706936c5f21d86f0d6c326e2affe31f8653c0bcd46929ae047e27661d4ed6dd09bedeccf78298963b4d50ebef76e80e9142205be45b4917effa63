/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class SimpleTypedRpcConnection {
    static createClient(channelFactory, getHandler) {
        return new SimpleTypedRpcConnection(channelFactory, getHandler);
    }
    constructor(_channelFactory, _getHandler) {
        this._channelFactory = _channelFactory;
        this._getHandler = _getHandler;
        this._channel = this._channelFactory({
            handleNotification: (notificationData) => {
                const m = notificationData;
                const fn = this._getHandler().notifications[m[0]];
                if (!fn) {
                    throw new Error(`Unknown notification "${m[0]}"!`);
                }
                fn(...m[1]);
            },
            handleRequest: (requestData) => {
                const m = requestData;
                try {
                    const result = this._getHandler().requests[m[0]](...m[1]);
                    return { type: 'result', value: result };
                }
                catch (e) {
                    return { type: 'error', value: e };
                }
            },
        });
        const requests = new Proxy({}, {
            get: (target, key) => {
                return async (...args) => {
                    const result = await this._channel.sendRequest([key, args]);
                    if (result.type === 'error') {
                        throw result.value;
                    }
                    else {
                        return result.value;
                    }
                };
            }
        });
        const notifications = new Proxy({}, {
            get: (target, key) => {
                return (...args) => {
                    this._channel.sendNotification([key, args]);
                };
            }
        });
        // eslint-disable-next-line local/code-no-any-casts
        this.api = { notifications: notifications, requests: requests };
    }
}

export { SimpleTypedRpcConnection };
