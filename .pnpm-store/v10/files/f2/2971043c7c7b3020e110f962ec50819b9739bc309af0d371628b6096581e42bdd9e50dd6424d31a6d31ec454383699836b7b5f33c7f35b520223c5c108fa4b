type ModuleInfo = Record<string, string>;
/**
 * Add node modules / packages to the event.
 * For this, multiple sources are used:
 * - They can be injected at build time into the __SENTRY_SERVER_MODULES__ variable (e.g. in Next.js)
 * - They are extracted from the dependencies & devDependencies in the package.json file
 * - They are extracted from the require.cache (CJS only)
 */
export declare const modulesIntegration: () => {
    name: string;
    processEvent(event: import("@sentry/core").Event): import("@sentry/core").Event;
    getModules: typeof _getModules;
};
/** Fetches the list of modules and the versions loaded by the entry file for your node.js app. */
declare function _getModules(): ModuleInfo;
export {};
//# sourceMappingURL=modules.d.ts.map