/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as readline from 'node:readline';
import { Browser } from './browser-data/browser-data.js';
/**
 * @public
 */
export declare class CLI {
    #private;
    constructor(opts?: string | {
        cachePath?: string;
        scriptName?: string;
        version?: string;
        prefixCommand?: {
            cmd: string;
            description: string;
        };
        allowCachePathOverride?: boolean;
        pinnedBrowsers?: Partial<Record<Browser, {
            buildId: string;
            skipDownload: boolean;
        }>>;
    }, rl?: readline.Interface);
    run(argv: string[]): Promise<void>;
}
//# sourceMappingURL=CLI.d.ts.map