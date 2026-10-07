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
 */
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { debugInfo, WebSocketServer } from './WebSocketServer.js';
export function parseCommandLineArgs() {
    return yargs(hideBin(process.argv))
        .usage(`$0`, `[PORT=8080] [VERBOSE=8080]`)
        .option('port', {
        alias: 'p',
        describe: 'Port that BiDi server should listen to. Default is 8080.',
        type: 'number',
        default: process.env['PORT'] ? Number(process.env['PORT']) : 8080,
    })
        .option('verbose', {
        alias: 'v',
        describe: 'If present, the Mapper debug log, including CDP commands and events will be logged into the server output.',
        type: 'boolean',
        default: process.env['VERBOSE'] === 'true' || false,
    })
        .parseSync();
}
(() => {
    try {
        const argv = parseCommandLineArgs();
        const { port, verbose } = argv;
        debugInfo('Launching BiDi server...');
        new WebSocketServer(port, verbose);
        debugInfo('BiDi server launched');
    }
    catch (e) {
        debugInfo('Error launching BiDi server', e);
    }
})();
//# sourceMappingURL=index.js.map