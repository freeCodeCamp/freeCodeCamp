# Installation
> `npm install --save @types/debug`

# Summary
This package contains type definitions for debug (https://github.com/debug-js/debug).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/debug.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/debug/index.d.ts)
````ts
declare var debug: debug.Debug & { debug: debug.Debug; default: debug.Debug };

export = debug;
export as namespace debug;

declare namespace debug {
    interface Debug {
        (namespace: string): Debugger;
        coerce: (val: any) => any;
        disable: () => string;
        enable: (namespaces: string) => void;
        enabled: (namespaces: string) => boolean;
        formatArgs: (this: Debugger, args: any[]) => void;
        log: (...args: any[]) => any;
        selectColor: (namespace: string) => string | number;
        humanize: typeof import("ms");

        names: string[];
        skips: string[];

        formatters: Formatters;

        inspectOpts?: {
            hideDate?: boolean | number | null;
            colors?: boolean | number | null;
            depth?: boolean | number | null;
            showHidden?: boolean | number | null;
        };
    }

    type IDebug = Debug;

    interface Formatters {
        [formatter: string]: (v: any) => string;
    }

    type IDebugger = Debugger;

    interface Debugger {
        (formatter: any, ...args: any[]): void;

        color: string;
        diff: number;
        enabled: boolean;
        log: (...args: any[]) => any;
        namespace: string;
        destroy: () => boolean;
        extend: (namespace: string, delimiter?: string) => Debugger;
    }
}

````

### Additional Details
 * Last updated: Thu, 19 Mar 2026 06:47:22 GMT
 * Dependencies: [@types/ms](https://npmjs.com/package/@types/ms)

# Credits
These definitions were written by [Seon-Wook Park](https://github.com/swook), [Gal Talmor](https://github.com/galtalmor), [John McLaughlin](https://github.com/zamb3zi), [Brasten Sager](https://github.com/brasten), [Nicolas Penin](https://github.com/npenin), [Kristian Brünn](https://github.com/kristianmitk), and [Caleb Gregory](https://github.com/calebgregory).
