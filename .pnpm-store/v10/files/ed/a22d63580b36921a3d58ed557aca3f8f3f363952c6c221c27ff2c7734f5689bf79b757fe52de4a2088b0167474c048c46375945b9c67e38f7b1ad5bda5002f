import chalk from "chalk";
import { Span, SpanContext } from "opentracing";
import { ActivityStatuses } from "./constants";
import { IErrorMapEntryPublicApi, ErrorId } from "../structured-errors/error-map";
import { IStructuredError } from "../structured-errors/types";
import { ITimerReporter } from "./reporter-timer";
import { IPhantomReporter } from "./reporter-phantom";
import { IProgressReporter } from "./reporter-progress";
import { ErrorMeta, CreateLogAction, ILogIntent, IRenderPageArgs } from "./types";
import { AdditionalDiagnosticsOutputHandler } from "./redux/diagnostics";
export interface IActivityArgs {
    id?: string;
    parentSpan?: Span | SpanContext;
    tags?: {
        [key: string]: any;
    };
}
/**
 * Reporter module.
 * @module reporter
 */
declare class Reporter {
    /**
     * Strip initial indentation template function.
     */
    stripIndent: import("common-tags").TemplateTag;
    format: chalk.Chalk & chalk.ChalkFunction & {
        supportsColor: false | chalk.ColorSupport;
        Level: chalk.Level;
        Color: ("red" | "white" | "black" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "gray" | "grey" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright") | ("bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgGray" | "bgGrey" | "bgBlackBright" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright");
        ForegroundColor: "red" | "white" | "black" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "gray" | "grey" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright";
        BackgroundColor: "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgGray" | "bgGrey" | "bgBlackBright" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright";
        Modifiers: "hidden" | "bold" | "underline" | "reset" | "dim" | "italic" | "inverse" | "strikethrough" | "visible";
        stderr: chalk.Chalk & {
            supportsColor: false | chalk.ColorSupport;
        };
    };
    errorMap: Record<ErrorId, IErrorMapEntryPublicApi>;
    /**
     * Set a custom error map to the reporter. This allows
     * the reporter to extend the internal error map
     *
     * Please note: The entered IDs ideally should be different from the ones we internally use:
     * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/src/structured-errors/error-map.ts
     */
    setErrorMap: (entry: Record<string, IErrorMapEntryPublicApi>) => void;
    /**
     * Toggle verbosity.
     */
    setVerbose: (_isVerbose?: boolean) => void;
    /**
     * Turn off colors in error output.
     */
    setNoColor: (isNoColor?: boolean) => void;
    /**
     * Log arguments and exit process with status 1.
     */
    panic: (errorMeta: ErrorMeta, error?: Error | Array<Error>, pluginName?: string) => never;
    panicOnBuild: (errorMeta: ErrorMeta, error?: Error | Array<Error>, pluginName?: string) => IStructuredError | Array<IStructuredError>;
    error: (errorMeta: ErrorMeta | Array<ErrorMeta>, error?: Error | Array<Error>, pluginName?: string) => IStructuredError | Array<IStructuredError>;
    /**
     * Set prefix on uptime.
     */
    uptime: (prefix: string) => void;
    verbose: (text: string) => void;
    success: (text?: string) => CreateLogAction;
    info: (text?: string) => CreateLogAction;
    warn: (text?: string) => CreateLogAction;
    log: (text?: string) => CreateLogAction;
    pendingActivity: ({ id, status, }: {
        id: string;
        status?: ActivityStatuses | undefined;
    }) => (((dispatch: import("redux").Dispatch<import("./redux/types").ISetStatus>) => void) | import("./redux/types").IPendingActivity)[];
    completeActivity: (id: string, status?: ActivityStatuses) => void;
    /**
     * Time an activity.
     */
    activityTimer: (text: string, activityArgs?: IActivityArgs, pluginName?: string) => ITimerReporter;
    /**
     * Create an Activity that is not visible to the user
     *
     * During the lifecycle of the Gatsby process, sometimes we need to do some
     * async work and wait for it to complete. A typical example of this is a job.
     * This work should set the status of the process to `in progress` while running and
     * `complete` (or `failure`) when complete. Activities do just this! However, they
     * are visible to the user. So this function can be used to create a _hidden_ activity
     * that while not displayed in the CLI, still triggers a change in process status.
     */
    phantomActivity: (text: string, activityArgs?: IActivityArgs) => IPhantomReporter;
    /**
     * Create a progress bar for an activity
     */
    createProgress: (text: string, total?: number, start?: number, activityArgs?: IActivityArgs, pluginName?: string) => IProgressReporter;
    _setStage: () => void;
    _initReporterMessagingInWorker(sendMessage: (msg: ILogIntent) => void): void;
    _initReporterMessagingInMain(onMessage: (listener: (msg: ILogIntent | unknown) => void) => void): void;
    _renderPageTree(args: IRenderPageArgs): void;
    _registerAdditionalDiagnosticOutputHandler(handler: AdditionalDiagnosticsOutputHandler): void;
}
export type { Reporter };
export declare const reporter: Reporter;
