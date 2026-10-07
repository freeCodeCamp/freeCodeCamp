/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

const DEFAULT_TIMEOUT = 30000;

/**
 * @internal
 */
export class TimeoutSettings {
  #defaultTimeout: number | null;
  #defaultNavigationTimeout: number | null;

  constructor() {
    this.#defaultTimeout = null;
    this.#defaultNavigationTimeout = null;
  }

  setDefaultTimeout(timeout: number): void {
    this.#defaultTimeout = timeout;
  }

  setDefaultNavigationTimeout(timeout: number): void {
    this.#defaultNavigationTimeout = timeout;
  }

  navigationTimeout(): number {
    if (this.#defaultNavigationTimeout !== null) {
      return this.#defaultNavigationTimeout;
    }
    if (this.#defaultTimeout !== null) {
      return this.#defaultTimeout;
    }
    return DEFAULT_TIMEOUT;
  }

  timeout(): number {
    if (this.#defaultTimeout !== null) {
      return this.#defaultTimeout;
    }
    return DEFAULT_TIMEOUT;
  }
}
