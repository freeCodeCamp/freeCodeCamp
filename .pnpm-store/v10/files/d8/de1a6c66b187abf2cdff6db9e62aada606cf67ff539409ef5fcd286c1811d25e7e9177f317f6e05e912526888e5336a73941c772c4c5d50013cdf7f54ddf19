/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { EventEmitter } from '../common/EventEmitter.js';
import { debugError, PuppeteerURL } from '../common/util.js';
import { assert } from '../util/assert.js';
import { DisposableStack } from '../util/disposable.js';
/**
 * The Coverage class provides methods to gather information about parts of
 * JavaScript and CSS that were used by the page.
 *
 * @remarks
 * To output coverage in a form consumable by {@link https://github.com/istanbuljs | Istanbul},
 * see {@link https://github.com/istanbuljs/puppeteer-to-istanbul | puppeteer-to-istanbul}.
 *
 * @example
 * An example of using JavaScript and CSS coverage to get percentage of initially
 * executed code:
 *
 * ```ts
 * // Enable both JavaScript and CSS coverage
 * await Promise.all([
 *   page.coverage.startJSCoverage(),
 *   page.coverage.startCSSCoverage(),
 * ]);
 * // Navigate to page
 * await page.goto('https://example.com');
 * // Disable both JavaScript and CSS coverage
 * const [jsCoverage, cssCoverage] = await Promise.all([
 *   page.coverage.stopJSCoverage(),
 *   page.coverage.stopCSSCoverage(),
 * ]);
 * let totalBytes = 0;
 * let usedBytes = 0;
 * const coverage = [...jsCoverage, ...cssCoverage];
 * for (const entry of coverage) {
 *   totalBytes += entry.text.length;
 *   for (const range of entry.ranges) usedBytes += range.end - range.start - 1;
 * }
 * console.log(`Bytes used: ${(usedBytes / totalBytes) * 100}%`);
 * ```
 *
 * @public
 */
export class Coverage {
    #jsCoverage;
    #cssCoverage;
    /**
     * @internal
     */
    constructor(client) {
        this.#jsCoverage = new JSCoverage(client);
        this.#cssCoverage = new CSSCoverage(client);
    }
    /**
     * @internal
     */
    updateClient(client) {
        this.#jsCoverage.updateClient(client);
        this.#cssCoverage.updateClient(client);
    }
    /**
     * @param options - Set of configurable options for coverage defaults to
     * `resetOnNavigation : true, reportAnonymousScripts : false,`
     * `includeRawScriptCoverage : false, useBlockCoverage : true`
     * @returns Promise that resolves when coverage is started.
     *
     * @remarks
     * Anonymous scripts are ones that don't have an associated url. These are
     * scripts that are dynamically created on the page using `eval` or
     * `new Function`. If `reportAnonymousScripts` is set to `true`, anonymous
     * scripts URL will start with `debugger://VM` (unless a magic //# sourceURL
     * comment is present, in which case that will the be URL).
     */
    async startJSCoverage(options = {}) {
        return await this.#jsCoverage.start(options);
    }
    /**
     * Promise that resolves to the array of coverage reports for
     * all scripts.
     *
     * @remarks
     * JavaScript Coverage doesn't include anonymous scripts by default.
     * However, scripts with sourceURLs are reported.
     */
    async stopJSCoverage() {
        return await this.#jsCoverage.stop();
    }
    /**
     * @param options - Set of configurable options for coverage, defaults to
     * `resetOnNavigation : true`
     * @returns Promise that resolves when coverage is started.
     */
    async startCSSCoverage(options = {}) {
        return await this.#cssCoverage.start(options);
    }
    /**
     * Promise that resolves to the array of coverage reports
     * for all stylesheets.
     *
     * @remarks
     * CSS Coverage doesn't include dynamically injected style tags
     * without sourceURLs.
     */
    async stopCSSCoverage() {
        return await this.#cssCoverage.stop();
    }
}
/**
 * @public
 */
export class JSCoverage {
    #client;
    #enabled = false;
    #scriptURLs = new Map();
    #scriptSources = new Map();
    #subscriptions;
    #resetOnNavigation = false;
    #reportAnonymousScripts = false;
    #includeRawScriptCoverage = false;
    /**
     * @internal
     */
    constructor(client) {
        this.#client = client;
    }
    /**
     * @internal
     */
    updateClient(client) {
        this.#client = client;
    }
    async start(options = {}) {
        assert(!this.#enabled, 'JSCoverage is already enabled');
        const { resetOnNavigation = true, reportAnonymousScripts = false, includeRawScriptCoverage = false, useBlockCoverage = true, } = options;
        this.#resetOnNavigation = resetOnNavigation;
        this.#reportAnonymousScripts = reportAnonymousScripts;
        this.#includeRawScriptCoverage = includeRawScriptCoverage;
        this.#enabled = true;
        this.#scriptURLs.clear();
        this.#scriptSources.clear();
        this.#subscriptions = new DisposableStack();
        const clientEmitter = this.#subscriptions.use(new EventEmitter(this.#client));
        clientEmitter.on('Debugger.scriptParsed', this.#onScriptParsed.bind(this));
        clientEmitter.on('Runtime.executionContextsCleared', this.#onExecutionContextsCleared.bind(this));
        await Promise.all([
            this.#client.send('Profiler.enable'),
            this.#client.send('Profiler.startPreciseCoverage', {
                callCount: this.#includeRawScriptCoverage,
                detailed: useBlockCoverage,
            }),
            this.#client.send('Debugger.enable'),
            this.#client.send('Debugger.setSkipAllPauses', { skip: true }),
        ]);
    }
    #onExecutionContextsCleared() {
        if (!this.#resetOnNavigation) {
            return;
        }
        this.#scriptURLs.clear();
        this.#scriptSources.clear();
    }
    async #onScriptParsed(event) {
        // Ignore puppeteer-injected scripts
        if (PuppeteerURL.isPuppeteerURL(event.url)) {
            return;
        }
        // Ignore other anonymous scripts unless the reportAnonymousScripts option is true.
        if (!event.url && !this.#reportAnonymousScripts) {
            return;
        }
        try {
            const response = await this.#client.send('Debugger.getScriptSource', {
                scriptId: event.scriptId,
            });
            this.#scriptURLs.set(event.scriptId, event.url);
            this.#scriptSources.set(event.scriptId, response.scriptSource);
        }
        catch (error) {
            // This might happen if the page has already navigated away.
            debugError(error);
        }
    }
    async stop() {
        assert(this.#enabled, 'JSCoverage is not enabled');
        this.#enabled = false;
        const result = await Promise.all([
            this.#client.send('Profiler.takePreciseCoverage'),
            this.#client.send('Profiler.stopPreciseCoverage'),
            this.#client.send('Profiler.disable'),
            this.#client.send('Debugger.disable'),
        ]);
        this.#subscriptions?.dispose();
        const coverage = [];
        const profileResponse = result[0];
        for (const entry of profileResponse.result) {
            let url = this.#scriptURLs.get(entry.scriptId);
            if (!url && this.#reportAnonymousScripts) {
                url = 'debugger://VM' + entry.scriptId;
            }
            const text = this.#scriptSources.get(entry.scriptId);
            if (text === undefined || url === undefined) {
                continue;
            }
            const flattenRanges = [];
            for (const func of entry.functions) {
                flattenRanges.push(...func.ranges);
            }
            const ranges = convertToDisjointRanges(flattenRanges);
            if (!this.#includeRawScriptCoverage) {
                coverage.push({ url, ranges, text });
            }
            else {
                coverage.push({ url, ranges, text, rawScriptCoverage: entry });
            }
        }
        return coverage;
    }
}
/**
 * @public
 */
export class CSSCoverage {
    #client;
    #enabled = false;
    #stylesheetURLs = new Map();
    #stylesheetSources = new Map();
    #eventListeners;
    #resetOnNavigation = false;
    constructor(client) {
        this.#client = client;
    }
    /**
     * @internal
     */
    updateClient(client) {
        this.#client = client;
    }
    async start(options = {}) {
        assert(!this.#enabled, 'CSSCoverage is already enabled');
        const { resetOnNavigation = true } = options;
        this.#resetOnNavigation = resetOnNavigation;
        this.#enabled = true;
        this.#stylesheetURLs.clear();
        this.#stylesheetSources.clear();
        this.#eventListeners = new DisposableStack();
        const clientEmitter = this.#eventListeners.use(new EventEmitter(this.#client));
        clientEmitter.on('CSS.styleSheetAdded', this.#onStyleSheet.bind(this));
        clientEmitter.on('Runtime.executionContextsCleared', this.#onExecutionContextsCleared.bind(this));
        await Promise.all([
            this.#client.send('DOM.enable'),
            this.#client.send('CSS.enable'),
            this.#client.send('CSS.startRuleUsageTracking'),
        ]);
    }
    #onExecutionContextsCleared() {
        if (!this.#resetOnNavigation) {
            return;
        }
        this.#stylesheetURLs.clear();
        this.#stylesheetSources.clear();
    }
    async #onStyleSheet(event) {
        const header = event.header;
        // Ignore anonymous scripts
        if (!header.sourceURL) {
            return;
        }
        try {
            const response = await this.#client.send('CSS.getStyleSheetText', {
                styleSheetId: header.styleSheetId,
            });
            this.#stylesheetURLs.set(header.styleSheetId, header.sourceURL);
            this.#stylesheetSources.set(header.styleSheetId, response.text);
        }
        catch (error) {
            // This might happen if the page has already navigated away.
            debugError(error);
        }
    }
    async stop() {
        assert(this.#enabled, 'CSSCoverage is not enabled');
        this.#enabled = false;
        const ruleTrackingResponse = await this.#client.send('CSS.stopRuleUsageTracking');
        await Promise.all([
            this.#client.send('CSS.disable'),
            this.#client.send('DOM.disable'),
        ]);
        this.#eventListeners?.dispose();
        // aggregate by styleSheetId
        const styleSheetIdToCoverage = new Map();
        for (const entry of ruleTrackingResponse.ruleUsage) {
            let ranges = styleSheetIdToCoverage.get(entry.styleSheetId);
            if (!ranges) {
                ranges = [];
                styleSheetIdToCoverage.set(entry.styleSheetId, ranges);
            }
            ranges.push({
                startOffset: entry.startOffset,
                endOffset: entry.endOffset,
                count: entry.used ? 1 : 0,
            });
        }
        const coverage = [];
        for (const styleSheetId of this.#stylesheetURLs.keys()) {
            const url = this.#stylesheetURLs.get(styleSheetId);
            assert(typeof url !== 'undefined', `Stylesheet URL is undefined (styleSheetId=${styleSheetId})`);
            const text = this.#stylesheetSources.get(styleSheetId);
            assert(typeof text !== 'undefined', `Stylesheet text is undefined (styleSheetId=${styleSheetId})`);
            const ranges = convertToDisjointRanges(styleSheetIdToCoverage.get(styleSheetId) || []);
            coverage.push({ url, ranges, text });
        }
        return coverage;
    }
}
function convertToDisjointRanges(nestedRanges) {
    const points = [];
    for (const range of nestedRanges) {
        points.push({ offset: range.startOffset, type: 0, range });
        points.push({ offset: range.endOffset, type: 1, range });
    }
    // Sort points to form a valid parenthesis sequence.
    points.sort((a, b) => {
        // Sort with increasing offsets.
        if (a.offset !== b.offset) {
            return a.offset - b.offset;
        }
        // All "end" points should go before "start" points.
        if (a.type !== b.type) {
            return b.type - a.type;
        }
        const aLength = a.range.endOffset - a.range.startOffset;
        const bLength = b.range.endOffset - b.range.startOffset;
        // For two "start" points, the one with longer range goes first.
        if (a.type === 0) {
            return bLength - aLength;
        }
        // For two "end" points, the one with shorter range goes first.
        return aLength - bLength;
    });
    const hitCountStack = [];
    const results = [];
    let lastOffset = 0;
    // Run scanning line to intersect all ranges.
    for (const point of points) {
        if (hitCountStack.length &&
            lastOffset < point.offset &&
            hitCountStack[hitCountStack.length - 1] > 0) {
            const lastResult = results[results.length - 1];
            if (lastResult && lastResult.end === lastOffset) {
                lastResult.end = point.offset;
            }
            else {
                results.push({ start: lastOffset, end: point.offset });
            }
        }
        lastOffset = point.offset;
        if (point.type === 0) {
            hitCountStack.push(point.range.count);
        }
        else {
            hitCountStack.pop();
        }
    }
    // Filter out empty ranges.
    return results.filter(range => {
        return range.end - range.start > 0;
    });
}
//# sourceMappingURL=Coverage.js.map