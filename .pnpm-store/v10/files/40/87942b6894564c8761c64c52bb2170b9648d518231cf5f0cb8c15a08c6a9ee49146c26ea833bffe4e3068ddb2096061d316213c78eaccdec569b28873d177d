/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 */
export var TargetType;
(function (TargetType) {
    TargetType["PAGE"] = "page";
    TargetType["BACKGROUND_PAGE"] = "background_page";
    TargetType["SERVICE_WORKER"] = "service_worker";
    TargetType["SHARED_WORKER"] = "shared_worker";
    TargetType["BROWSER"] = "browser";
    TargetType["WEBVIEW"] = "webview";
    TargetType["OTHER"] = "other";
    /**
     * @internal
     */
    TargetType["TAB"] = "tab";
})(TargetType || (TargetType = {}));
/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */
export class Target {
    /**
     * @internal
     */
    constructor() { }
    /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */
    async worker() {
        return null;
    }
    /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */
    async page() {
        return null;
    }
}
//# sourceMappingURL=Target.js.map