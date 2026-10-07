/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {Target, TargetType} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';
import type {CDPSession} from '../puppeteer-core.js';

import type {BidiBrowser} from './Browser.js';
import type {BidiBrowserContext} from './BrowserContext.js';
import type {BidiFrame} from './Frame.js';
import {BidiPage} from './Page.js';
import type {BidiWebWorker} from './WebWorker.js';

/**
 * @internal
 */
export class BidiBrowserTarget extends Target {
  #browser: BidiBrowser;

  constructor(browser: BidiBrowser) {
    super();
    this.#browser = browser;
  }

  override asPage(): Promise<BidiPage> {
    throw new UnsupportedOperation();
  }
  override url(): string {
    return '';
  }
  override createCDPSession(): Promise<CDPSession> {
    throw new UnsupportedOperation();
  }
  override type(): TargetType {
    return TargetType.BROWSER;
  }
  override browser(): BidiBrowser {
    return this.#browser;
  }
  override browserContext(): BidiBrowserContext {
    return this.#browser.defaultBrowserContext();
  }
  override opener(): Target | undefined {
    throw new UnsupportedOperation();
  }
}

/**
 * @internal
 */
export class BidiPageTarget extends Target {
  #page: BidiPage;

  constructor(page: BidiPage) {
    super();
    this.#page = page;
  }

  override async page(): Promise<BidiPage> {
    return this.#page;
  }
  override async asPage(): Promise<BidiPage> {
    return await this.page();
  }
  override url(): string {
    return this.#page.url();
  }
  override createCDPSession(): Promise<CDPSession> {
    return this.#page.createCDPSession();
  }
  override type(): TargetType {
    return TargetType.PAGE;
  }
  override browser(): BidiBrowser {
    return this.browserContext().browser();
  }
  override browserContext(): BidiBrowserContext {
    return this.#page.browserContext();
  }
  override opener(): Target | undefined {
    throw new UnsupportedOperation();
  }
}

/**
 * @internal
 */
export class BidiFrameTarget extends Target {
  #frame: BidiFrame;
  #page: BidiPage | undefined;

  constructor(frame: BidiFrame) {
    super();
    this.#frame = frame;
  }

  override async page(): Promise<BidiPage> {
    if (this.#page === undefined) {
      this.#page = BidiPage.from(
        this.browserContext(),
        this.#frame.browsingContext,
      );
    }
    return this.#page;
  }
  override async asPage(): Promise<BidiPage> {
    return await this.page();
  }
  override url(): string {
    return this.#frame.url();
  }
  override createCDPSession(): Promise<CDPSession> {
    return this.#frame.createCDPSession();
  }
  override type(): TargetType {
    return TargetType.PAGE;
  }
  override browser(): BidiBrowser {
    return this.browserContext().browser();
  }
  override browserContext(): BidiBrowserContext {
    return this.#frame.page().browserContext();
  }
  override opener(): Target | undefined {
    throw new UnsupportedOperation();
  }
}

/**
 * @internal
 */
export class BidiWorkerTarget extends Target {
  #worker: BidiWebWorker;

  constructor(worker: BidiWebWorker) {
    super();
    this.#worker = worker;
  }

  override async page(): Promise<BidiPage> {
    throw new UnsupportedOperation();
  }
  override async asPage(): Promise<BidiPage> {
    throw new UnsupportedOperation();
  }
  override url(): string {
    return this.#worker.url();
  }
  override createCDPSession(): Promise<CDPSession> {
    throw new UnsupportedOperation();
  }
  override type(): TargetType {
    return TargetType.OTHER;
  }
  override browser(): BidiBrowser {
    return this.browserContext().browser();
  }
  override browserContext(): BidiBrowserContext {
    return this.#worker.frame.page().browserContext();
  }
  override opener(): Target | undefined {
    throw new UnsupportedOperation();
  }
}
