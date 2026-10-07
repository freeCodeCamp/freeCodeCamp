/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class EditorWorkerHost {
    static { this.CHANNEL_NAME = 'editorWorkerHost'; }
    static getChannel(workerServer) {
        return workerServer.getChannel(EditorWorkerHost.CHANNEL_NAME);
    }
    static setChannel(workerClient, obj) {
        workerClient.setChannel(EditorWorkerHost.CHANNEL_NAME, obj);
    }
}

export { EditorWorkerHost };
