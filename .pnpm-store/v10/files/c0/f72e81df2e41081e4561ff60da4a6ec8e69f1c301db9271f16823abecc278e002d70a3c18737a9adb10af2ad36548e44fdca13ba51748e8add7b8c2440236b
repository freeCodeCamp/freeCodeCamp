import * as lib from "./lib";

// Re-export the type definitions globally.
declare global {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedHTML extends lib.TrustedHTML {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedScript extends lib.TrustedScript {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedScriptURL extends lib.TrustedScriptURL {}

    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedTypePolicy extends lib.TrustedTypePolicy {}

    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedTypePolicyFactory extends lib.TrustedTypePolicyFactory {}

    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface TrustedTypePolicyOptions extends lib.TrustedTypePolicyOptions {}

    // Attach the relevant Trusted Types properties to the Window object.
    // eslint-disable-next-line @typescript-eslint/no-empty-interface -- interface to allow module augmentation
    interface Window extends lib.TrustedTypesWindow {}
}

// These are the available exports when using the polyfill as npm package (e.g. in nodejs)
interface InternalTrustedTypePolicyFactory extends lib.TrustedTypePolicyFactory {
    TrustedHTML: typeof lib.TrustedHTML;
    TrustedScript: typeof lib.TrustedScript;
    TrustedScriptURL: typeof lib.TrustedScriptURL;
}

declare const trustedTypes: InternalTrustedTypePolicyFactory;

declare class TrustedTypesEnforcer {
    constructor(config: TrustedTypeConfig);
    install: () => void;
    uninstall: () => void;
}

// tslint:disable-next-line no-unnecessary-class
declare class TrustedTypeConfig {
    constructor(
        isLoggingEnabled: boolean,
        isEnforcementEnabled: boolean,
        allowedPolicyNames: string[],
        allowDuplicates: boolean,
        cspString?: string | null,
        windowObject?: Window,
    );
}

export { TrustedTypeConfig, TrustedTypePolicy, TrustedTypePolicyFactory, trustedTypes, TrustedTypesEnforcer };
