import type { ScriptHTMLAttributes } from "react";
export declare enum ScriptStrategy {
    postHydrate = "post-hydrate",
    idle = "idle",
    offMainThread = "off-main-thread"
}
export interface ScriptProps extends Omit<ScriptHTMLAttributes<HTMLScriptElement>, `onLoad` | `onError`> {
    id?: string;
    strategy?: ScriptStrategy | `post-hydrate` | `idle` | `off-main-thread`;
    children?: string;
    onLoad?: (event: Event) => void;
    onError?: (event: ErrorEvent) => void;
    forward?: Array<string>;
}
export declare const scriptCache: Set<string>;
export declare const scriptCallbackCache: Map<string, {
    load?: {
        callbacks?: Array<(event: Event) => void>;
        event?: Event | undefined;
    };
    error?: {
        callbacks?: Array<(event: ErrorEvent) => void>;
        event?: ErrorEvent | undefined;
    };
}>;
declare function GatsbyScriptLocationWrapper(props: ScriptProps): JSX.Element;
export { GatsbyScriptLocationWrapper as Script };
