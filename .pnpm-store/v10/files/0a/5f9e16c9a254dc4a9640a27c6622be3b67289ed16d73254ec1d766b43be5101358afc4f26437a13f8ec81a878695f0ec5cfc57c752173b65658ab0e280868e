declare module "node:console" {
    import { InspectOptions } from "node:util";
    namespace console {
        interface ConsoleOptions {
            stdout: NodeJS.WritableStream;
            stderr?: NodeJS.WritableStream | undefined;
            /**
             * Ignore errors when writing to the underlying streams.
             * @default true
             */
            ignoreErrors?: boolean | undefined;
            /**
             * Set color support for this `Console` instance. Setting to true enables coloring while inspecting
             * values. Setting to `false` disables coloring while inspecting values. Setting to `'auto'` makes color
             * support depend on the value of the `isTTY` property and the value returned by `getColorDepth()` on the
             * respective stream. This option can not be used, if `inspectOptions.colors` is set as well.
             * @default 'auto'
             */
            colorMode?: boolean | "auto" | undefined;
            /**
             * Specifies options that are passed along to
             * [`util.inspect()`](https://nodejs.org/docs/latest-v25.x/api/util.html#utilinspectobject-options).
             */
            inspectOptions?: InspectOptions | ReadonlyMap<NodeJS.WritableStream, InspectOptions> | undefined;
            /**
             * Set group indentation.
             * @default 2
             */
            groupIndentation?: number | undefined;
        }
        interface Console {
            readonly Console: {
                prototype: Console;
                new(stdout: NodeJS.WritableStream, stderr?: NodeJS.WritableStream, ignoreErrors?: boolean): Console;
                new(options: ConsoleOptions): Console;
            };
            assert(condition?: unknown, ...data: any[]): void;
            clear(): void;
            count(label?: string): void;
            countReset(label?: string): void;
            debug(...data: any[]): void;
            dir(item?: any, options?: InspectOptions): void;
            dirxml(...data: any[]): void;
            error(...data: any[]): void;
            group(...data: any[]): void;
            groupCollapsed(...data: any[]): void;
            groupEnd(): void;
            info(...data: any[]): void;
            log(...data: any[]): void;
            table(tabularData?: any, properties?: string[]): void;
            time(label?: string): void;
            timeEnd(label?: string): void;
            timeLog(label?: string, ...data: any[]): void;
            trace(...data: any[]): void;
            warn(...data: any[]): void;
            /**
             * This method does not display anything unless used in the inspector. The `console.profile()`
             * method starts a JavaScript CPU profile with an optional label until {@link profileEnd}
             * is called. The profile is then added to the Profile panel of the inspector.
             *
             * ```js
             * console.profile('MyLabel');
             * // Some code
             * console.profileEnd('MyLabel');
             * // Adds the profile 'MyLabel' to the Profiles panel of the inspector.
             * ```
             * @since v8.0.0
             */
            profile(label?: string): void;
            /**
             * This method does not display anything unless used in the inspector. Stops the current
             * JavaScript CPU profiling session if one has been started and prints the report to the
             * Profiles panel of the inspector. See {@link profile} for an example.
             *
             * If this method is called without a label, the most recently started profile is stopped.
             * @since v8.0.0
             */
            profileEnd(label?: string): void;
            /**
             * This method does not display anything unless used in the inspector. The `console.timeStamp()`
             * method adds an event with the label `'label'` to the Timeline panel of the inspector.
             * @since v8.0.0
             */
            timeStamp(label?: string): void;
        }
    }
    var console: console.Console;
    export = console;
}
declare module "console" {
    import console = require("node:console");
    export = console;
}
