/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Page } from './Page.js';
import type { WebWorker } from './WebWorker.js';
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
export declare abstract class Extension {
    #private;
    /**
     * @internal
     */
    constructor(id: string, version: string, name: string, path: string, enabled: boolean);
    /**
     * Whether the extension is enabled.
     *
     * @public
     */
    get enabled(): boolean;
    /**
     * The path in the file system where the extension is located.
     *
     * @public
     */
    get path(): string;
    /**
     * The version of the extension as specified in its manifest.
     *
     * @public
     */
    get version(): string;
    /**
     * The name of the extension as specified in its manifest.
     *
     * @public
     */
    get name(): string;
    /**
     * The unique identifier of the extension.
     *
     * @public
     */
    get id(): string;
    /**
     * Returns a list of the currently active service workers belonging
     * to the extension.
     *
     * @public
     */
    abstract workers(): Promise<WebWorker[]>;
    /**
     * Returns a list of the currently active and visible pages belonging
     * to the extension.
     *
     * @public
     */
    abstract pages(): Promise<Page[]>;
    /**
     * Triggers the default action of the extension for a specified page.
     * This typically simulates a user clicking the extension's action icon
     * in the browser toolbar, potentially opening a popup or executing an action script.
     *
     * @param page - The page to trigger the action on.
     * @public
     */
    abstract triggerAction(page: Page): Promise<void>;
}
//# sourceMappingURL=Extension.d.ts.map