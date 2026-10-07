/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import {source as injectedSource} from '../generated/injected.js';

/**
 * @internal
 */
export class ScriptInjector {
  #updated = false;
  #amendments = new Set<string>();

  // Appends a statement of the form `(PuppeteerUtil) => {...}`.
  append(statement: string): void {
    this.#update(() => {
      this.#amendments.add(statement);
    });
  }

  pop(statement: string): void {
    this.#update(() => {
      this.#amendments.delete(statement);
    });
  }

  inject(inject: (script: string) => void, force = false): void {
    if (this.#updated || force) {
      inject(this.#get());
    }
    this.#updated = false;
  }

  #update(callback: () => void): void {
    callback();
    this.#updated = true;
  }

  #get(): string {
    return `(() => {
      const module = {};
      ${injectedSource}
      ${[...this.#amendments]
        .map(statement => {
          return `(${statement})(module.exports.default);`;
        })
        .join('')}
      return module.exports.default;
    })()`;
  }
}

/**
 * @internal
 */
export const scriptInjector = new ScriptInjector();
