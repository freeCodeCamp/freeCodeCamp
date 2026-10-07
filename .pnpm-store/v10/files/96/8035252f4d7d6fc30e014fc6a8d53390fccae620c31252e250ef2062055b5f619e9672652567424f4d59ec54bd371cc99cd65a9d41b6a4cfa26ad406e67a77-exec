#!/usr/bin/env node
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { CLI, Browser } from '@puppeteer/browsers';
import { PUPPETEER_REVISIONS } from 'puppeteer-core/internal/revisions.js';
import { packageVersion } from 'puppeteer-core/internal/util/version.js';
import puppeteer from '../puppeteer.js';
const config = await puppeteer.configuration();
void new CLI({
    cachePath: config.cacheDirectory,
    scriptName: 'puppeteer',
    version: packageVersion,
    prefixCommand: {
        cmd: 'browsers',
        description: 'Manage browsers of this Puppeteer installation',
    },
    allowCachePathOverride: false,
    pinnedBrowsers: {
        [Browser.CHROME]: {
            buildId: config.chrome?.version || PUPPETEER_REVISIONS['chrome'] || 'latest',
            skipDownload: config.chrome?.skipDownload ?? false,
        },
        [Browser.FIREFOX]: {
            buildId: config.firefox?.version || PUPPETEER_REVISIONS['firefox'] || 'latest',
            skipDownload: config.firefox?.skipDownload ?? true,
        },
        [Browser.CHROMEHEADLESSSHELL]: {
            buildId: config['chrome-headless-shell']?.version ||
                PUPPETEER_REVISIONS['chrome-headless-shell'] ||
                'latest',
            skipDownload: config['chrome-headless-shell']?.skipDownload ?? false,
        },
    },
}).run(process.argv);
//# sourceMappingURL=cli.js.map