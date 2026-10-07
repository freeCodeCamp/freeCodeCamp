export {};

import { LockManager } from "worker_threads";

// lib.webworker has `WorkerNavigator` rather than `Navigator`, so conditionals use `onabort` instead of `onmessage`
type _Navigator = typeof globalThis extends { onabort: any } ? {} : Navigator;
interface Navigator {
    readonly hardwareConcurrency: number;
    readonly language: string;
    readonly languages: readonly string[];
    readonly locks: LockManager;
    readonly platform: string;
    readonly userAgent: string;
}

declare global {
    interface Navigator extends _Navigator {}
    var Navigator: typeof globalThis extends { onabort: any; Navigator: infer T } ? T : {
        prototype: Navigator;
        new(): Navigator;
    };

    // Needs conditional inference for lib.dom and lib.webworker compatibility
    var navigator: typeof globalThis extends { onmessage: any; navigator: infer T } ? T : Navigator;
}
