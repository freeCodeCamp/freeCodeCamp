/**
 * Copyright 2021 Google LLC.
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
 *
 * @license
 */
import { BidiServer } from '../bidiMapper/BidiMapper.js';
import { MapperCdpConnection } from '../cdp/CdpConnection.js';
import { LogType } from '../utils/log.js';
import { BidiParser } from './BidiParser.js';
import { generatePage, log } from './mapperTabPage.js';
import { WindowBidiTransport, WindowCdpTransport } from './Transport.js';
generatePage();
const mapperTabToServerTransport = new WindowBidiTransport();
const cdpTransport = new WindowCdpTransport();
/**
 * A CdpTransport implementation that uses the window.cdp bindings
 * injected by Target.exposeDevToolsProtocol.
 */
const cdpConnection = new MapperCdpConnection(cdpTransport, log);
/**
 * Launches the BiDi mapper instance.
 * @param {string} selfTargetId
 * @param options Mapper options. E.g. `acceptInsecureCerts`.
 */
async function runMapperInstance(selfTargetId) {
    // eslint-disable-next-line no-console
    console.log('Launching Mapper instance with selfTargetId:', selfTargetId);
    const bidiServer = await BidiServer.createAndStart(mapperTabToServerTransport, cdpConnection, 
    /**
     * Create a Browser CDP Session per Mapper instance.
     */
    await cdpConnection.createBrowserSession(), selfTargetId, new BidiParser(), log);
    log(LogType.debugInfo, 'Mapper instance has been launched');
    return bidiServer;
}
/**
 * Set `window.runMapper` to a function which launches the BiDi mapper instance.
 * @param selfTargetId Needed to filter out info related to BiDi target.
 */
window.runMapperInstance = async (selfTargetId) => {
    await runMapperInstance(selfTargetId);
};
//# sourceMappingURL=bidiTab.js.map