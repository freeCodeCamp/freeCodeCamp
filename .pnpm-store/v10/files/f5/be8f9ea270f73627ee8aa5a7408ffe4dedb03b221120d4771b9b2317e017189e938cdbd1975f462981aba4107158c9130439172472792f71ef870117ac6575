/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Target, TargetType } from '../api/Target.js';
import { UnsupportedOperation } from '../common/Errors.js';
import { BidiPage } from './Page.js';
/**
 * @internal
 */
export class BidiBrowserTarget extends Target {
    #browser;
    constructor(browser) {
        super();
        this.#browser = browser;
    }
    asPage() {
        throw new UnsupportedOperation();
    }
    url() {
        return '';
    }
    createCDPSession() {
        throw new UnsupportedOperation();
    }
    type() {
        return TargetType.BROWSER;
    }
    browser() {
        return this.#browser;
    }
    browserContext() {
        return this.#browser.defaultBrowserContext();
    }
    opener() {
        throw new UnsupportedOperation();
    }
}
/**
 * @internal
 */
export class BidiPageTarget extends Target {
    #page;
    constructor(page) {
        super();
        this.#page = page;
    }
    async page() {
        return this.#page;
    }
    async asPage() {
        return await this.page();
    }
    url() {
        return this.#page.url();
    }
    createCDPSession() {
        return this.#page.createCDPSession();
    }
    type() {
        return TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#page.browserContext();
    }
    opener() {
        throw new UnsupportedOperation();
    }
}
/**
 * @internal
 */
export class BidiFrameTarget extends Target {
    #frame;
    #page;
    constructor(frame) {
        super();
        this.#frame = frame;
    }
    async page() {
        if (this.#page === undefined) {
            this.#page = BidiPage.from(this.browserContext(), this.#frame.browsingContext);
        }
        return this.#page;
    }
    async asPage() {
        return await this.page();
    }
    url() {
        return this.#frame.url();
    }
    createCDPSession() {
        return this.#frame.createCDPSession();
    }
    type() {
        return TargetType.PAGE;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#frame.page().browserContext();
    }
    opener() {
        throw new UnsupportedOperation();
    }
}
/**
 * @internal
 */
export class BidiWorkerTarget extends Target {
    #worker;
    constructor(worker) {
        super();
        this.#worker = worker;
    }
    async page() {
        throw new UnsupportedOperation();
    }
    async asPage() {
        throw new UnsupportedOperation();
    }
    url() {
        return this.#worker.url();
    }
    createCDPSession() {
        throw new UnsupportedOperation();
    }
    type() {
        return TargetType.OTHER;
    }
    browser() {
        return this.browserContext().browser();
    }
    browserContext() {
        return this.#worker.frame.page().browserContext();
    }
    opener() {
        throw new UnsupportedOperation();
    }
}
//# sourceMappingURL=Target.js.map