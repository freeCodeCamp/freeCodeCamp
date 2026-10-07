/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
export * from './index.js';
import fs from 'node:fs';
import path from 'node:path';
import { environment } from './environment.js';
import * as Puppeteer from './index.js';
// Set up Node-specific environment dependencies.
environment.value = {
    fs,
    path,
    ScreenRecorder: Puppeteer.ScreenRecorder,
};
/**
 * @public
 */
const puppeteer = new Puppeteer.PuppeteerNode({
    isPuppeteerCore: true,
});
export const { 
/**
 * @public
 */
connect, 
/**
 * @public
 */
defaultArgs, 
/**
 * @public
 */
executablePath, 
/**
 * @public
 */
launch, } = puppeteer;
export default puppeteer;
//# sourceMappingURL=puppeteer-core.js.map