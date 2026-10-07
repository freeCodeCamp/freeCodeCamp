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
 *
 */
import { mkdtemp } from 'fs/promises';
import os from 'os';
import path from 'path';
import { launch } from '@puppeteer/browsers';
import debug from 'debug';
import { MapperCdpConnection } from '../cdp/CdpConnection.js';
import { MapperServerCdpConnection } from './MapperCdpConnection.js';
import { PipeTransport } from './PipeTransport.js';
import { getMapperTabSource } from './reader.js';
const debugInternal = debug('bidi:mapper:internal');
/**
 * BrowserProcess is responsible for running the browser and BiDi Mapper within
 * it.
 * 1. Launch Chromium (using Puppeteer for now).
 * 2. Get `BiDi-CDP` mapper JS binaries using `MapperReader`.
 * 3. Run `BiDi-CDP` mapper in launched browser using `MapperRunner`.
 * 4. Bind `BiDi-CDP` mapper to the `BiDi server` to forward messages from BiDi
 * Mapper to the client.
 */
export class BrowserInstance {
    #mapperCdpConnection;
    #browserProcess;
    static async run(chromeOptions, verbose) {
        const profileDir = await mkdtemp(path.join(os.tmpdir(), 'web-driver-bidi-server-'));
        // See https://github.com/GoogleChrome/chrome-launcher/blob/main/docs/chrome-flags-for-tools.md
        const chromeArguments = [
            // keep-sorted start
            '--allow-browser-signin=false',
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-notifications',
            '--disable-popup-blocking',
            '--disable-search-engine-choice-screen',
            '--enable-automation',
            '--no-default-browser-check',
            '--no-first-run',
            '--password-store=basic',
            '--remote-debugging-pipe',
            '--use-mock-keychain',
            `--user-data-dir=${profileDir}`,
            // keep-sorted end
            ...chromeOptions.chromeArgs,
            'about:blank',
        ];
        const executablePath = chromeOptions.chromeBinary ?? process.env['BROWSER_BIN'];
        if (!executablePath) {
            throw new Error('Could not find Chrome binary');
        }
        const launchArguments = {
            executablePath,
            args: chromeArguments,
            env: process.env,
            pipe: true,
        };
        debugInternal(`Launching browser`, {
            executablePath,
            args: chromeArguments,
        });
        const browserProcess = launch(launchArguments);
        const cdpConnection = this.#establishPipeConnection(browserProcess);
        // 2. Get `BiDi-CDP` mapper JS binaries.
        const mapperTabSource = await getMapperTabSource();
        // 3. Run `BiDi-CDP` mapper in launched browser using `MapperRunner`.
        const mapperCdpConnection = await MapperServerCdpConnection.create(cdpConnection, mapperTabSource, verbose);
        return new BrowserInstance(mapperCdpConnection, browserProcess);
    }
    constructor(mapperCdpConnection, browserProcess) {
        this.#mapperCdpConnection = mapperCdpConnection;
        this.#browserProcess = browserProcess;
    }
    async close() {
        // Close the mapper tab.
        this.#mapperCdpConnection.close();
        // Close browser.
        await this.#browserProcess.close();
    }
    bidiSession() {
        return this.#mapperCdpConnection.bidiSession();
    }
    static #establishPipeConnection(browserProcess) {
        debugInternal('Establishing pipe connection to browser process with pid: ', browserProcess.nodeProcess.pid);
        const { 3: pipeWrite, 4: pipeRead } = browserProcess.nodeProcess.stdio;
        const transport = new PipeTransport(pipeWrite, pipeRead);
        return new MapperCdpConnection(transport);
    }
}
//# sourceMappingURL=BrowserInstance.js.map