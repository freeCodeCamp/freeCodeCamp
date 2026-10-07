/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {CdpFrame} from './Frame.js';

/**
 * @internal
 */
export class CdpPreloadScript {
  /**
   * This is the ID of the preload script returned by
   * Page.addScriptToEvaluateOnNewDocument in the main frame.
   *
   * Sub-frames would get a different CDP ID because
   * addScriptToEvaluateOnNewDocument is called for each subframe. But
   * users only see this ID and subframe IDs are internal to Puppeteer.
   */
  #id: string;
  #source: string;
  #frameToId = new WeakMap<CdpFrame, string>();

  constructor(mainFrame: CdpFrame, id: string, source: string) {
    this.#id = id;
    this.#source = source;
    this.#frameToId.set(mainFrame, id);
  }

  get id(): string {
    return this.#id;
  }

  get source(): string {
    return this.#source;
  }

  getIdForFrame(frame: CdpFrame): string | undefined {
    return this.#frameToId.get(frame);
  }

  setIdForFrame(frame: CdpFrame, identifier: string): void {
    this.#frameToId.set(frame, identifier);
  }
}
