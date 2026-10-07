/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * {@link Extension} represents a browser extension installed in the browser.
 * It provides access to the extension's ID, name, and version, as well as
 * methods for interacting with the extension's background workers and pages.
 *
 * @example
 * To get all extensions installed in the browser:
 *
 * ```ts
 * const extensions = await browser.extensions();
 * for (const [id, extension] of extensions) {
 *   console.log(extension.name, id);
 * }
 * ```
 *
 * @experimental
 * @public
 */
export class Extension {
    #id;
    #version;
    #name;
    #path;
    #enabled;
    /**
     * @internal
     */
    constructor(id, version, name, path, enabled) {
        if (!id || !version) {
            throw new Error('Extension ID and version are required');
        }
        this.#id = id;
        this.#version = version;
        this.#name = name;
        this.#path = path;
        this.#enabled = enabled;
    }
    /**
     * Whether the extension is enabled.
     *
     * @public
     */
    get enabled() {
        return this.#enabled;
    }
    /**
     * The path in the file system where the extension is located.
     *
     * @public
     */
    get path() {
        return this.#path;
    }
    /**
     * The version of the extension as specified in its manifest.
     *
     * @public
     */
    get version() {
        return this.#version;
    }
    /**
     * The name of the extension as specified in its manifest.
     *
     * @public
     */
    get name() {
        return this.#name;
    }
    /**
     * The unique identifier of the extension.
     *
     * @public
     */
    get id() {
        return this.#id;
    }
}
//# sourceMappingURL=Extension.js.map