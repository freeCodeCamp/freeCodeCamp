/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Page, WebWorker } from '../api/api.js';
import { Extension } from '../api/api.js';
import type { CdpBrowser } from './Browser.js';
export declare class CdpExtension extends Extension {
    #private;
    constructor(id: string, version: string, name: string, path: string, enabled: boolean, browser: CdpBrowser);
    workers(): Promise<WebWorker[]>;
    pages(): Promise<Page[]>;
    triggerAction(page: Page): Promise<void>;
}
//# sourceMappingURL=Extension.d.ts.map