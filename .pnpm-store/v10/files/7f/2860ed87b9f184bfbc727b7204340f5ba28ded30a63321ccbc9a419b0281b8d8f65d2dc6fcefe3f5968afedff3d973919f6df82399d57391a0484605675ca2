/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Browser} from './Browser.js';
import type {BrowserContext} from './BrowserContext.js';
import type {CDPSession} from './CDPSession.js';
import type {Page} from './Page.js';
import type {WebWorker} from './WebWorker.js';

/**
 * @public
 */
export enum TargetType {
  PAGE = 'page',
  BACKGROUND_PAGE = 'background_page',
  SERVICE_WORKER = 'service_worker',
  SHARED_WORKER = 'shared_worker',
  BROWSER = 'browser',
  WEBVIEW = 'webview',
  OTHER = 'other',
  /**
   * @internal
   */
  TAB = 'tab',
}

/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */
export abstract class Target {
  /**
   * @internal
   */
  protected constructor() {}

  /**
   * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
   */
  async worker(): Promise<WebWorker | null> {
    return null;
  }

  /**
   * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
   * returns `null`.
   */
  async page(): Promise<Page | null> {
    return null;
  }

  /**
   * Forcefully creates a page for a target of any type. It is useful if you
   * want to handle a CDP target of type `other` as a page. If you deal with a
   * regular page target, use {@link Target.page}.
   */
  abstract asPage(): Promise<Page>;

  abstract url(): string;

  /**
   * Creates a Chrome Devtools Protocol session attached to the target.
   */
  abstract createCDPSession(): Promise<CDPSession>;

  /**
   * Identifies what kind of target this is.
   *
   * @remarks
   *
   * See {@link https://developer.chrome.com/extensions/background_pages | docs} for more info about background pages.
   */
  abstract type(): TargetType;

  /**
   * Get the browser the target belongs to.
   */
  abstract browser(): Browser;

  /**
   * Get the browser context the target belongs to.
   */
  abstract browserContext(): BrowserContext;

  /**
   * Get the target that opened this target. Top-level targets return `null`.
   */
  abstract opener(): Target | undefined;
}
