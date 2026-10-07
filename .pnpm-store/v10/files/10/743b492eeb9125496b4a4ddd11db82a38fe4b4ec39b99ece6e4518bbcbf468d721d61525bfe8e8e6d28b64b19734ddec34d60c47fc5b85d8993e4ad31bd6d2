type SelectOption = {
    label: string;
    value: string;
    hint?: string;
};
declare const kCancel: unique symbol;
type PromptCommonOptions = {
    /**
     * Specify how to handle a cancelled prompt (e.g. by pressing Ctrl+C).
     *
     * Default strategy is `"default"`.
     *
     * - `"default"` - Resolve the promise with the `default` value or `initial` value.
     * - `"undefined`" - Resolve the promise with `undefined`.
     * - `"null"` - Resolve the promise with `null`.
     * - `"symbol"` - Resolve the promise with a symbol `Symbol.for("cancel")`.
     * - `"reject"`  - Reject the promise with an error.
     */
    cancel?: "reject" | "default" | "undefined" | "null" | "symbol";
};
type TextPromptOptions = PromptCommonOptions & {
    /**
     * Specifies the prompt type as text.
     * @optional
     * @default "text"
     */
    type?: "text";
    /**
     * The default text value.
     * @optional
     */
    default?: string;
    /**
     * A placeholder text displayed in the prompt.
     * @optional
     */
    placeholder?: string;
    /**
     * The initial text value.
     * @optional
     */
    initial?: string;
};
type ConfirmPromptOptions = PromptCommonOptions & {
    /**
     * Specifies the prompt type as confirm.
     */
    type: "confirm";
    /**
     * The initial value for the confirm prompt.
     * @optional
     */
    initial?: boolean;
};
type SelectPromptOptions = PromptCommonOptions & {
    /**
     * Specifies the prompt type as select.
     */
    type: "select";
    /**
     * The initial value for the select prompt.
     * @optional
     */
    initial?: string;
    /**
     * The options to select from. See {@link SelectOption}.
     */
    options: (string | SelectOption)[];
};
type MultiSelectOptions = PromptCommonOptions & {
    /**
     * Specifies the prompt type as multiselect.
     */
    type: "multiselect";
    /**
     * The options to select from. See {@link SelectOption}.
     */
    initial?: string[];
    /**
     * The options to select from. See {@link SelectOption}.
     */
    options: (string | SelectOption)[];
    /**
     * Whether the prompt requires at least one selection.
     */
    required?: boolean;
};
/**
 * Defines a combined type for all prompt options.
 */
type PromptOptions = TextPromptOptions | ConfirmPromptOptions | SelectPromptOptions | MultiSelectOptions;
type inferPromptReturnType<T extends PromptOptions> = T extends TextPromptOptions ? string : T extends ConfirmPromptOptions ? boolean : T extends SelectPromptOptions ? T["options"][number] extends SelectOption ? T["options"][number]["value"] : T["options"][number] : T extends MultiSelectOptions ? T["options"] : unknown;
type inferPromptCancalReturnType<T extends PromptOptions> = T extends {
    cancel: "reject";
} ? never : T extends {
    cancel: "default";
} ? inferPromptReturnType<T> : T extends {
    cancel: "undefined";
} ? undefined : T extends {
    cancel: "null";
} ? null : T extends {
    cancel: "symbol";
} ? typeof kCancel : inferPromptReturnType<T>;
/**
 * Asynchronously prompts the user for input based on specified options.
 * Supports text, confirm, select and multi-select prompts.
 *
 * @param {string} message - The message to display in the prompt.
 * @param {PromptOptions} [opts={}] - The prompt options. See {@link PromptOptions}.
 * @returns {Promise<inferPromptReturnType<T>>} - A promise that resolves with the user's response, the type of which is inferred from the options. See {@link inferPromptReturnType}.
 */
declare function prompt<_ = any, __ = any, T extends PromptOptions = TextPromptOptions>(message: string, opts?: PromptOptions): Promise<inferPromptReturnType<T> | inferPromptCancalReturnType<T>>;

/**
 * Defines the level of logs as specific numbers or special number types.
 *
 * @type {0 | 1 | 2 | 3 | 4 | 5 | (number & {})} LogLevel - Represents the log level.
 * @default 0 - Represents the default log level.
 */
type LogLevel = 0 | 1 | 2 | 3 | 4 | 5 | (number & {});
/**
 * A mapping of `LogType` to its corresponding numeric log level.
 *
 * @type {Record<LogType, number>} LogLevels - key-value pairs of log types to their numeric levels. See {@link LogType}.
 */
declare const LogLevels: Record<LogType, number>;
/**
 * Lists the types of log messages supported by the system.
 *
 * @type {"silent" | "fatal" | "error" | "warn" | "log" | "info" | "success" | "fail" | "ready" | "start" | "box" | "debug" | "trace" | "verbose"} LogType - Represents the specific type of log message.
 */
type LogType = "silent" | "fatal" | "error" | "warn" | "log" | "info" | "success" | "fail" | "ready" | "start" | "box" | "debug" | "trace" | "verbose";
/**
 * Maps `LogType` to a `Partial<LogObject>`, primarily defining the log level.
 *
 * @type {Record<LogType, Partial<LogObject>>} LogTypes - key-value pairs of log types to partial log objects, specifying log levels. See {@link LogType} and {@link LogObject}.
 */
declare const LogTypes: Record<LogType, Partial<LogObject>>;

interface ConsolaOptions {
    /**
     * An array of ConsolaReporter instances used to handle and output log messages.
     */
    reporters: ConsolaReporter[];
    /**
     * A record mapping LogType to InputLogObject, defining the log configuration for each log type.
     * See {@link LogType} and {@link InputLogObject}.
     */
    types: Record<LogType, InputLogObject>;
    /**
     * The minimum log level to output. See {@link LogLevel}.
     */
    level: LogLevel;
    /**
     * Default properties applied to all log messages unless overridden. See {@link InputLogObject}.
     */
    defaults: InputLogObject;
    /**
     * The maximum number of times a log message can be repeated within a given timeframe.
     */
    throttle: number;
    /**
     * The minimum time in milliseconds that must elapse before a throttled log message can be logged again.
     */
    throttleMin: number;
    /**
     * The Node.js writable stream for standard output. See {@link NodeJS.WriteStream}.
     * @optional
     */
    stdout?: NodeJS.WriteStream;
    /**
     * The Node.js writeable stream for standard error output. See {@link NodeJS.WriteStream}.
     * @optional
     */
    stderr?: NodeJS.WriteStream;
    /**
     * A function that allows you to mock log messages for testing purposes.
     * @optional
     */
    mockFn?: (type: LogType, defaults: InputLogObject) => (...args: any) => void;
    /**
     * Custom prompt function to use. It can be undefined.
     * @optional
     */
    prompt?: typeof prompt | undefined;
    /**
     * Configuration options for formatting log messages. See {@link FormatOptions}.
     */
    formatOptions: FormatOptions;
}
/**
 * @see https://nodejs.org/api/util.html#util_util_inspect_object_showhidden_depth_colors
 */
interface FormatOptions {
    /**
     * The maximum number of columns to output, affects formatting.
     * @optional
     */
    columns?: number;
    /**
     * Whether to include timestamp information in log messages.
     * @optional
     */
    date?: boolean;
    /**
     * Whether to use colors in the output.
     * @optional
     */
    colors?: boolean;
    /**
     * Specifies whether or not the output should be compact. Accepts a boolean or numeric level of compactness.
     * @optional
     */
    compact?: boolean | number;
    /**
     * Error cause level.
     */
    errorLevel?: number;
    /**
     * Allows additional custom formatting options.
     */
    [key: string]: unknown;
}
interface InputLogObject {
    /**
     * The logging level of the message. See {@link LogLevel}.
     * @optional
     */
    level?: LogLevel;
    /**
     * A string tag to categorise or identify the log message.
     * @optional
     */
    tag?: string;
    /**
     * The type of log message, which affects how it's processed and displayed. See {@link LogType}.
     * @optional
     */
    type?: LogType;
    /**
     * The main log message text.
     * @optional
     */
    message?: string;
    /**
     * Additional text or texts to be logged with the message.
     * @optional
     */
    additional?: string | string[];
    /**
     * Additional arguments to be logged with the message.
     * @optional
     */
    args?: any[];
    /**
     * The date and time when the log message was created.
     * @optional
     */
    date?: Date;
}
interface LogObject extends InputLogObject {
    /**
     * The logging level of the message, overridden if required. See {@link LogLevel}.
     */
    level: LogLevel;
    /**
     * The type of log message, overridden if required. See {@link LogType}.
     */
    type: LogType;
    /**
     * A string tag to categorise or identify the log message, overridden if necessary.
     */
    tag: string;
    /**
     * Additional arguments to be logged with the message, overridden if necessary.
     */
    args: any[];
    /**
     * The date and time the log message was created, overridden if necessary.
     */
    date: Date;
    /**
     * Allows additional custom properties to be set on the log object.
     */
    [key: string]: unknown;
}
interface ConsolaReporter {
    /**
     * Defines how a log message is processed and displayed by this reporter.
     * @param logObj The LogObject containing the log information to process. See {@link LogObject}.
     * @param ctx An object containing context information such as options. See {@link ConsolaOptions}.
     */
    log: (logObj: LogObject, ctx: {
        options: ConsolaOptions;
    }) => void;
}

/**
 * Consola class for logging management with support for pause/resume, mocking and customisable reporting.
 * Provides flexible logging capabilities including level-based logging, custom reporters and integration options.
 *
 * @class Consola
 */
declare class Consola {
    options: ConsolaOptions;
    _lastLog: {
        serialized?: string;
        object?: LogObject;
        count?: number;
        time?: Date;
        timeout?: ReturnType<typeof setTimeout>;
    };
    _mockFn?: ConsolaOptions["mockFn"];
    /**
     * Creates an instance of Consola with specified options or defaults.
     *
     * @param {Partial<ConsolaOptions>} [options={}] - Configuration options for the Consola instance.
     */
    constructor(options?: Partial<ConsolaOptions>);
    /**
     * Gets the current log level of the Consola instance.
     *
     * @returns {number} The current log level.
     */
    get level(): LogLevel;
    /**
     * Sets the minimum log level that will be output by the instance.
     *
     * @param {number} level - The new log level to set.
     */
    set level(level: LogLevel);
    /**
     * Displays a prompt to the user and returns the response.
     * Throw an error if `prompt` is not supported by the current configuration.
     *
     * @template T
     * @param {string} message - The message to display in the prompt.
     * @param {T} [opts] - Optional options for the prompt. See {@link PromptOptions}.
     * @returns {promise<T>} A promise that infer with the prompt options. See {@link PromptOptions}.
     */
    prompt<T extends PromptOptions>(message: string, opts?: T): Promise<(T extends TextPromptOptions ? string : T extends ConfirmPromptOptions ? boolean : T extends SelectPromptOptions ? T["options"][number] extends {
        label: string;
        value: string;
        hint?: string;
    } ? T["options"][number]["value"] : T["options"][number] : T extends MultiSelectOptions ? T["options"] : unknown) | (T extends {
        cancel: "reject";
    } ? never : T extends {
        cancel: "default";
    } ? T extends infer T_1 ? T_1 extends T ? T_1 extends TextPromptOptions ? string : T_1 extends ConfirmPromptOptions ? boolean : T_1 extends SelectPromptOptions ? T_1["options"][number] extends {
        label: string;
        value: string;
        hint?: string;
    } ? T_1["options"][number]["value"] : T_1["options"][number] : T_1 extends MultiSelectOptions ? T_1["options"] : unknown : never : never : T extends {
        cancel: "undefined";
    } ? undefined : T extends {
        cancel: "null";
    } ? null : T extends {
        cancel: "symbol";
    } ? typeof kCancel : T extends TextPromptOptions ? string : T extends ConfirmPromptOptions ? boolean : T extends SelectPromptOptions ? T["options"][number] extends {
        label: string;
        value: string;
        hint?: string;
    } ? T["options"][number]["value"] : T["options"][number] : T extends MultiSelectOptions ? T["options"] : unknown)>;
    /**
     * Creates a new instance of Consola, inheriting options from the current instance, with possible overrides.
     *
     * @param {Partial<ConsolaOptions>} options - Optional overrides for the new instance. See {@link ConsolaOptions}.
     * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
     */
    create(options: Partial<ConsolaOptions>): ConsolaInstance;
    /**
     * Creates a new Consola instance with the specified default log object properties.
     *
     * @param {InputLogObject} defaults - Default properties to include in any log from the new instance. See {@link InputLogObject}.
     * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
     */
    withDefaults(defaults: InputLogObject): ConsolaInstance;
    /**
     * Creates a new Consola instance with a specified tag, which will be included in every log.
     *
     * @param {string} tag - The tag to include in each log of the new instance.
     * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
     */
    withTag(tag: string): ConsolaInstance;
    /**
     * Adds a custom reporter to the Consola instance.
     * Reporters will be called for each log message, depending on their implementation and log level.
     *
     * @param {ConsolaReporter} reporter - The reporter to add. See {@link ConsolaReporter}.
     * @returns {Consola} The current Consola instance.
     */
    addReporter(reporter: ConsolaReporter): this;
    /**
     * Removes a custom reporter from the Consola instance.
     * If no reporter is specified, all reporters will be removed.
     *
     * @param {ConsolaReporter} reporter - The reporter to remove. See {@link ConsolaReporter}.
     * @returns {Consola} The current Consola instance.
     */
    removeReporter(reporter: ConsolaReporter): ConsolaReporter[] | this;
    /**
     * Replaces all reporters of the Consola instance with the specified array of reporters.
     *
     * @param {ConsolaReporter[]} reporters - The new reporters to set. See {@link ConsolaReporter}.
     * @returns {Consola} The current Consola instance.
     */
    setReporters(reporters: ConsolaReporter[]): this;
    wrapAll(): void;
    restoreAll(): void;
    /**
     * Overrides console methods with Consola logging methods for consistent logging.
     */
    wrapConsole(): void;
    /**
     * Restores the original console methods, removing Consola overrides.
     */
    restoreConsole(): void;
    /**
     * Overrides standard output and error streams to redirect them through Consola.
     */
    wrapStd(): void;
    _wrapStream(stream: NodeJS.WriteStream | undefined, type: LogType): void;
    /**
     * Restores the original standard output and error streams, removing the Consola redirection.
     */
    restoreStd(): void;
    _restoreStream(stream?: NodeJS.WriteStream): void;
    /**
     * Pauses logging, queues incoming logs until resumed.
     */
    pauseLogs(): void;
    /**
     * Resumes logging, processing any queued logs.
     */
    resumeLogs(): void;
    /**
     * Replaces logging methods with mocks if a mock function is provided.
     *
     * @param {ConsolaOptions["mockFn"]} mockFn - The function to use for mocking logging methods. See {@link ConsolaOptions["mockFn"]}.
     */
    mockTypes(mockFn?: ConsolaOptions["mockFn"]): void;
    _wrapLogFn(defaults: InputLogObject, isRaw?: boolean): (...args: any[]) => false | undefined;
    _logFn(defaults: InputLogObject, args: any[], isRaw?: boolean): false | undefined;
    _log(logObj: LogObject): void;
}
interface LogFn {
    (message: InputLogObject | any, ...args: any[]): void;
    raw: (...args: any[]) => void;
}
type ConsolaInstance = Consola & Record<LogType, LogFn>;
/**
 * Utility for creating a new Consola instance with optional configuration.
 *
 * @param {Partial<ConsolaOptions>} [options={}] - Optional configuration options for the new Consola instance. See {@link ConsolaOptions}.
 * @returns {ConsolaInstance} A new instance of Consola. See {@link ConsolaInstance}.
 */
declare function createConsola(options?: Partial<ConsolaOptions>): ConsolaInstance;

export { type ConfirmPromptOptions, Consola, type ConsolaInstance, type ConsolaOptions, type ConsolaReporter, type FormatOptions, type InputLogObject, type LogLevel, LogLevels, type LogObject, type LogType, LogTypes, type MultiSelectOptions, type PromptOptions, type SelectPromptOptions, type TextPromptOptions, createConsola };
