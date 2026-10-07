import * as colorette0 from "colorette";
import { Writable } from "stream";

//#region src/constants/ansi-escape-codes.constants.d.ts
/**
 * Indicates an UNICODE characters is coming up.
 */
declare const ANSI_ESCAPE = "\u001B[";
/**
 * Generic ANSI escape characters for terminal based operations.
 */
declare const ANSI_ESCAPE_CODES: {
  CURSOR_HIDE: string;
  CURSOR_SHOW: string;
};
//#endregion
//#region src/constants/environment-variables.constants.d.ts
/**
 * Environment variables for Listr.
 */
declare enum ListrEnvironmentVariables {
  FORCE_UNICODE = "LISTR_FORCE_UNICODE",
  FORCE_TTY = "LISTR_FORCE_TTY",
  DISABLE_COLOR = "NO_COLOR",
  FORCE_COLOR = "FORCE_COLOR",
}
//#endregion
//#region src/constants/listr-error.constants.d.ts
/**
 * The actual error type that is collected and to help identify where the error is triggered from.
 */
declare enum ListrErrorTypes {
  /** Task has failed and will try to retry. */
  WILL_RETRY = "WILL_RETRY",
  /** Task has failed and will try to rollback. */
  WILL_ROLLBACK = "WILL_ROLLBACK",
  /** Task has failed, ran the rollback action but the rollback action itself has failed. */
  HAS_FAILED_TO_ROLLBACK = "HAS_FAILED_TO_ROLLBACK",
  /** Task has failed. */
  HAS_FAILED = "HAS_FAILED",
  /** Task has failed, but exitOnError is set to false, so will ignore this error. */
  HAS_FAILED_WITHOUT_ERROR = "HAS_FAILED_WITHOUT_ERROR",
}
//#endregion
//#region src/constants/listr-events.constants.d.ts
/**
 * Events that are triggered by Listr.
 *
 * These are stateful and singleton events by being attached to the main Listr class and propagating to the subtasks.
 *
 * @see {@link https://listr2.kilic.dev/listr/events.html}
 */
declare enum ListrEventType {
  /** Indicates that underlying renderer should refresh the current render. */
  SHOULD_REFRESH_RENDER = "SHOUD_REFRESH_RENDER",
}
//#endregion
//#region src/constants/listr-renderer.constants.d.ts
declare enum ListrRendererSelection {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  SILENT = "SILENT",
}
//#endregion
//#region src/constants/listr-task-events.constants.d.ts
/**
 * Internal events that are fired from the Task.
 *
 * @see {@link https://listr2.kilic.dev/task/events.html}
 */
declare enum ListrTaskEventType {
  /** Title has changed for the current Task. */
  TITLE = "TITLE",
  /**
   * State has changed for the current Task.
   *
   * @see {@link module:listr2.ListrTaskState}
   */
  STATE = "STATE",
  /** The current Task has been marked as enabled. */
  ENABLED = "ENABLED",
  /** The current Task is currently processing subtasks. */
  SUBTASK = "SUBTASK",
  /** The current Task is now processing a prompt. */
  PROMPT = "PROMPT",
  /** The current Task is now dumping output. */
  OUTPUT = "OUTPUT",
  /**
   * The current Task is now dumping a message.
   *
   * @see {module:Listr2.ListrTaskMessage}
   */
  MESSAGE = "MESSAGE",
  /** The current Task is closed and no further action in expected. */
  CLOSED = "CLOSED",
}
//#endregion
//#region src/constants/listr-task-state.constants.d.ts
/**
 * Tasks can be in various states during the execution.
 *
 * Whenever a state change occurs, the task will emit a {@link module:listr2.ListrTaskEventType.STATE} with the appropriate state.
 */
declare enum ListrTaskState {
  /** Task has not started yet, waiting for pick-up. */
  WAITING = "WAITING",
  /** Task has started. */
  STARTED = "STARTED",
  /** Task has been completed. */
  COMPLETED = "COMPLETED",
  /** Task has failed. */
  FAILED = "FAILED",
  /** Task has been skipped. */
  SKIPPED = "SKIPPED",
  /** Task is currently trying to rollback. */
  ROLLING_BACK = "ROLLING_BACK",
  /** Task has rolledback successfully after failing. */
  ROLLED_BACK = "ROLLED_BACK",
  /** Task is currently retrying. */
  RETRY = "RETRY",
  /** Task is currently paused. */
  PAUSED = "PAUSED",
  /** Task is currently trying to process a prompt. */
  PROMPT = "PROMPT",
  /** Task has successfully processed the prompt. */
  PROMPT_COMPLETED = "PROMPT_COMPLETED",
  /** Task has failed to process the prompt. */
  PROMPT_FAILED = "PROMPT_FAILED",
}
//#endregion
//#region src/interfaces/data.interface.d.ts
interface ObserverLike<T$1> {
  next: (value: T$1) => void;
  complete: () => void;
  error: (err: unknown) => void;
}
interface ObservableLike<T$1 = any> {
  subscribe: (observer: ObserverLike<T$1>) => unknown;
}
interface ReadableLike {
  readable: boolean;
  read: (size?: number) => string | Buffer;
  on: (eventName: 'data' | 'error' | 'end', listener: (data: Buffer | string) => void) => unknown;
}
//#endregion
//#region src/interfaces/event.interface.d.ts
/**
 * Give event map a set of indexes to not make it go crazy when some events are missing from it.
 * They are optional after all.
 */
declare class BaseEventMap {
  [k: string]: any;
}
/**
 * Parameters for the given event in the {@link EventMap}.
 */
type EventData<Event extends string, Map$1 extends Record<string, unknown>> = Event extends keyof Map$1 ? Map$1[Event] : never;
/**
 * An event map of given events that defined the parameters and return types for firing a certain event.
 */
type EventMap<Events extends string> = Partial<Record<Events, unknown>>;
//#endregion
//#region src/lib/event-manager.d.ts
declare class EventManager<Event extends string = string, Map$1 extends Partial<Record<Event, unknown>> = Partial<Record<Event, any>>> {
  private readonly emitter;
  emit<E extends Event = Event>(dispatch: E, args?: EventData<E, Map$1>): void;
  on<E extends Event = Event>(dispatch: E, handler: (data: EventData<E, Map$1>) => void): void;
  once<E extends Event = Event>(dispatch: E, handler: (data: EventData<E, Map$1>) => void): void;
  off<E extends Event = Event>(dispatch: E, handler?: (data: EventData<E, Map$1>) => void): void;
  complete(): void;
}
//#endregion
//#region src/utils/environment/is-observable.d.ts
/**
 * Tests to see if the object is an RxJS {@link Observable}
 * @param obj the object to test
 */
declare function isObservable<T$1>(obj: any): obj is ObservableLike<T$1>;
//#endregion
//#region src/utils/environment/is-readable.d.ts
/**
 * Tests to see if the object is an Readable or NodeJS.ReadableStream {@link Readable, NodeJS.ReadableStream}
 * @param obj the object to test
 */
declare function isReadable(obj: any): obj is ReadableLike;
//#endregion
//#region src/utils/environment/is-unicode-supported.d.ts
declare function isUnicodeSupported(): boolean;
//#endregion
//#region src/utils/format/cleanse-ansi.d.ts
declare function cleanseAnsi(chunk: string): string;
//#endregion
//#region src/utils/format/color.d.ts
/**
 * Creates color palette through underlying dependency of `colorette`.
 *
 * @see {@link https://www.npmjs.com/package/colorette}
 */
declare const color: colorette0.Colorette;
//#endregion
//#region src/utils/format/indent.d.ts
declare function indent(string: string, count: number): string;
//#endregion
//#region src/utils/format/figures.d.ts
declare const FIGURES_MAIN: {
  warning: string;
  cross: string;
  arrowDown: string;
  tick: string;
  arrowRight: string;
  pointer: string;
  checkboxOn: string;
  arrowLeft: string;
  squareSmallFilled: string;
  pointerSmall: string;
};
type Figures = typeof FIGURES_MAIN;
declare const figures: Figures;
//#endregion
//#region src/utils/format/splat.d.ts
declare function splat(message: string, ...splat: any[]): string;
//#endregion
//#region src/utils/logger/logger.d.ts
/**
 * Creates a new Listr2 logger.
 *
 * This logger is used throughout the renderers for consistency.
 *
 * @see {@link https://listr2.kilic.dev/renderer/logger.html}
 */
declare class ListrLogger<Levels extends string = string> {
  options?: ListrLoggerOptions<Levels>;
  readonly process: ProcessOutput;
  constructor(options?: ListrLoggerOptions<Levels>);
  log(level: Levels, message: string | any[], options?: LoggerFieldOptions): void;
  toStdout(message: string | any[], options?: LoggerFieldOptions, eol?: boolean): void;
  toStderr(message: string | any[], options?: LoggerFieldOptions, eol?: boolean): void;
  wrap(message: string, options?: LoggerFormatOptions): string;
  splat(...args: Parameters<typeof splat>): ReturnType<typeof splat>;
  suffix(message: string, ...suffixes: LoggerField[]): string;
  prefix(message: string, ...prefixes: LoggerField[]): string;
  fields(message: string, options?: LoggerFieldOptions<true>): string;
  icon(level: Levels, icon?: string | false): string;
  protected format(level: Levels, message: string | any[], options?: LoggerFieldOptions): string;
  protected style(level: Levels, message: string): string;
  protected applyFormat(message: string, options?: LoggerFormatOptions): string;
  protected spacing(message: string | undefined): string;
}
//#endregion
//#region src/utils/logger/logger.interface.d.ts
/**
 * Options for the logger
 */
interface ListrLoggerOptions<Levels extends string> extends ProcessOutputRendererOptions, ListrLoggerStyleMap<Levels | string> {
  /**
   * Use icons for the log levels.
   */
  useIcons?: boolean;
  /**
   * Apply fields and templates as presets before and after each message.
   */
  fields?: LoggerFieldOptions<true>;
  /**
   * Send the designated levels to `process.stderr`.
   */
  toStderr?: (Levels | string)[];
}
/**
 * Inject your custom style map consisting of icons and coloring for the ListrLogger.
 *
 * @see {@link https://listr2.kilic.dev/renderer/logger.html}
 */
interface ListrLoggerStyleMap<Levels extends string> {
  /**
   * Coloring of the levels.
   *
   * @see {@link https://listr2.kilic.dev/renderer/logger.html#style}
   */
  color?: Partial<Record<Levels, LoggerFormat>>;
  /**
   * Icons of the levels.
   *
   * @see {@link https://listr2.kilic.dev/renderer/logger.html#style}
   */
  icon?: Partial<Record<Levels, string | (() => string)>>;
}
interface LoggerFieldOptions<MultipleOnly extends boolean = false> {
  /**
   * Prefix fields for the log entry.
   */
  prefix?: MultipleOnly extends false ? LoggerField | LoggerField[] : LoggerField[];
  /**
   * Suffix fields for the log entry.
   */
  suffix?: MultipleOnly extends false ? LoggerField | LoggerField[] : LoggerField[];
}
type LoggerFormat = (message?: string) => string;
interface LoggerFieldFn<Args extends any[] = any[]> {
  /**
   * The value of the given field.
   */
  field: ((...args: Args) => string) | string;
  /**
   * Condition to display the given field.
   */
  condition?: ((...args: Args) => boolean) | boolean;
  /**
   * Formatting/coloring of the field.
   */
  format?: (...args: Args) => LoggerFormat;
  /**
   * Args to pass to other functions whenever this field is triggered.
   */
  args?: Args;
}
type LoggerField<Args extends any[] = any[]> = LoggerFieldFn<Args> | string;
interface RendererLoggerOptions<Levels extends string> {
  /**
   * Inject your custom implementation of the ListrLogger.
   *
   * @see {@link https://listr2.kilic.dev/renderer/logger.html}
   */
  logger?: ListrLogger<Levels>;
}
interface LoggerFormatOptions {
  format?: LoggerFormat;
}
//#endregion
//#region src/utils/logger/logger.constants.d.ts
/** Default ListrLogLevels for the logger */
declare enum ListrLogLevels {
  STARTED = "STARTED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  SKIPPED = "SKIPPED",
  OUTPUT = "OUTPUT",
  TITLE = "TITLE",
  ROLLBACK = "ROLLBACK",
  RETRY = "RETRY",
  PROMPT = "PROMPT",
  PAUSED = "PAUSED",
}
declare const LISTR_LOGGER_STYLE: ListrLoggerStyleMap<ListrLogLevels>;
declare const LISTR_LOGGER_STDERR_LEVELS: ListrLogLevels[];
//#endregion
//#region src/utils/process-output/process-output-buffer.interface.d.ts
interface ProcessOutputBufferEntry {
  time: number;
  entry: string;
  stream?: NodeJS.WriteStream;
}
interface ProcessOutputBufferOptions {
  limit?: number;
  stream?: NodeJS.WriteStream;
}
//#endregion
//#region src/utils/process-output/process-output-buffer.d.ts
declare class ProcessOutputBuffer {
  private readonly options?;
  private buffer;
  private readonly decoder;
  constructor(options?: ProcessOutputBufferOptions);
  get all(): ProcessOutputBufferEntry[];
  get last(): ProcessOutputBufferEntry;
  get length(): number;
  write(data: Uint8Array | string, ...args: [(string | undefined)?, ((err?: Error) => void)?] | [((err?: Error) => void)?]): ReturnType<NodeJS.WriteStream['write']>;
  reset(): void;
}
//#endregion
//#region src/utils/process-output/process-output-stream.d.ts
declare class ProcessOutputStream {
  private stream;
  private readonly method;
  private readonly buffer;
  constructor(stream: NodeJS.WriteStream);
  get out(): NodeJS.WriteStream;
  hijack(): void;
  release(): ProcessOutputBufferEntry[];
  write(...args: Parameters<NodeJS.WriteStream['write']>): ReturnType<NodeJS.WriteStream['write']>;
}
//#endregion
//#region src/utils/process-output/process-output.interface.d.ts
interface ProcessOutputRendererOptions {
  /**
   * Pass your implementation of process output class to write to stdout and stderr.
   *
   * @default 'ProcessOutput'
   * @global global option that can not be temperated with subtasks
   */
  processOutput?: ProcessOutput;
}
/**
 * Customize the behavior of the ProcessOutput.
 */
interface ProcessOutputOptions {
  /**
   * After the `ProcessOutput.release()` which streams should be dumped.
   *
   * @defaultValue `[ 'stdout', 'stderr' ]`
   */
  dump?: (keyof ProcessOutputStreamMap)[];
  /**
   * After the `ProcessOutput.release()` whether to leave empty line or not.
   *
   * @defaultValue `true`
   */
  leaveEmptyLine?: boolean;
}
type ProcessOutputStreamMap = Record<'stdout' | 'stderr', ProcessOutputStream>;
//#endregion
//#region src/utils/process-output/process-output.d.ts
/**
 * Creates a new Listr2 process-output controller.
 *
 * This is used to control the flow to `process.stdout` and `process.stderr` for all renderers.
 *
 * @see {@link https://listr2.kilic.dev/renderer/process-output.html}
 */
declare class ProcessOutput {
  private readonly options?;
  readonly stream: ProcessOutputStreamMap;
  protected active: boolean;
  constructor(stdout?: NodeJS.WriteStream, stderr?: NodeJS.WriteStream, options?: ProcessOutputOptions);
  get stdout(): NodeJS.WriteStream;
  get stderr(): NodeJS.WriteStream;
  hijack(): void;
  release(): void;
  toStdout(buffer: string, eol?: boolean): boolean;
  toStderr(buffer: string, eol?: boolean): boolean;
}
//#endregion
//#region src/utils/process-output/writable.d.ts
declare function createWritable(cb: (chunk: string) => void): Writable;
//#endregion
//#region src/utils/prompts/adapter.d.ts
declare abstract class ListrPromptAdapter {
  protected task: Task<any, any, any>;
  protected wrapper: TaskWrapper<any, any, any>;
  private state;
  constructor(task: Task<any, any, any>, wrapper: TaskWrapper<any, any, any>);
  protected reportStarted(): void;
  protected reportFailed(): void;
  protected reportCompleted(): void;
  protected restoreState(): void;
  abstract run<T = any>(...args: any[]): T | Promise<T>;
}
//#endregion
//#region src/utils/ui/spinner.d.ts
declare class Spinner {
  protected readonly spinner: string[];
  private id?;
  private spinnerPosition;
  spin(): void;
  fetch(): string;
  isRunning(): boolean;
  start(cb?: () => void, interval?: number): void;
  stop(): void;
}
//#endregion
//#region src/utils/ui/renderer.d.ts
declare function getRendererClass(renderer: ListrRendererValue): ListrRendererFactory;
declare function getRenderer<Renderer extends ListrRendererValue, FallbackRenderer extends ListrRendererValue>(options: {
  renderer: Renderer;
  rendererOptions: ListrGetRendererOptions<Renderer>;
  fallbackRenderer: FallbackRenderer;
  fallbackRendererOptions: ListrGetRendererOptions<FallbackRenderer>;
  fallbackRendererCondition?: ListrOptions['fallbackRendererCondition'];
  silentRendererCondition?: ListrOptions['silentRendererCondition'];
}): SupportedRenderer<ListrRendererFactory>;
//#endregion
//#region src/utils/assert.d.ts
/**
 * This function asserts the given value as a function or itself.
 * If the value itself is a function it will evaluate it with the passed in arguments,
 * elsewise it will directly return itself.
 */
declare function assertFunctionOrSelf<T$1>(functionOrSelf: T$1, ...args: T$1 extends ((...args: any[]) => any) ? Parameters<T$1> : never): T$1 extends ((...args: any[]) => any) ? ReturnType<T$1> : T$1;
//#endregion
//#region src/utils/clone.d.ts
/**
 * Deep clones a object in the easiest manner.
 */
declare function cloneObject<T$1 extends Record<PropertyKey, any>>(obj: T$1): T$1;
//#endregion
//#region src/utils/concurrency.d.ts
declare class Concurrency {
  private concurrency;
  private count;
  private queue;
  constructor(options: {
    concurrency: number;
  });
  add<T>(fn: () => Promise<T>): Promise<T>;
  private flush;
  private run;
}
//#endregion
//#region src/utils/delay.d.ts
declare function delay(time: number): Promise<void>;
//#endregion
//#region src/lib/task-wrapper.d.ts
/**
 * The original Task that is defined by the user is wrapped with the TaskWrapper to provide additional functionality.
 *
 * @see {@link https://listr2.kilic.dev/task/task.html}
 */
declare class TaskWrapper<Ctx, Renderer extends ListrRendererFactory, FallbackRenderer extends ListrRendererFactory> {
  task: Task<Ctx, Renderer, FallbackRenderer>;
  constructor(task: Task<Ctx, Renderer, FallbackRenderer>);
  get title(): string;
  /**
   * Title of the current task.
   *
   * @see {@link https://listr2.kilic.dev/task/title.html}
   */
  set title(title: string | any[]);
  get output(): string;
  /**
   * Send output from the current task to the renderer.
   *
   * @see {@link https://listr2.kilic.dev/task/output.html}
   */
  set output(output: string | any[]);
  /** Send an output to the output channel as prompt. */
  private set promptOutput(value);
  /**
   * Creates a new set of Listr subtasks.
   *
   * @see {@link https://listr2.kilic.dev/task/subtasks.html}
   */
  newListr<NewCtx = Ctx>(task: ListrTask<NewCtx, Renderer, FallbackRenderer> | ListrTask<NewCtx, Renderer, FallbackRenderer>[] | ((parent: Omit<this, 'skip' | 'enabled'>) => ListrTask<NewCtx, Renderer, FallbackRenderer> | ListrTask<NewCtx, Renderer, FallbackRenderer>[]), options?: ListrSubClassOptions<NewCtx, Renderer, FallbackRenderer>): Listr<NewCtx, any, any>;
  /**
   * Report an error that has to be collected and handled.
   *
   * @see {@link https://listr2.kilic.dev/task/error-handling.html}
   */
  report(error: Error, type: ListrErrorTypes): void;
  /**
   * Skip the current task.
   *
   * @see {@link https://listr2.kilic.dev/task/skip.html}
   */
  skip(message?: string, ...metadata: any[]): void;
  /**
   * Check whether this task is currently in a retry state.
   *
   * @see {@link https://listr2.kilic.dev/task/retry.html}
   */
  isRetrying(): Task<Ctx, Renderer, FallbackRenderer>['retry'];
  /**
   * Create a new prompt for getting user input through the prompt adapter.
   * This will create a new prompt through the adapter if the task is not currently rendering a prompt or will return the active instance.
   *
   * This part of the application requires optional peer dependencies, please refer to documentation.
   *
   * @see {@link https://listr2.kilic.dev/task/prompt.html}
   */
  prompt<T extends ListrPromptAdapter = ListrPromptAdapter>(adapter: new (task: Task<Ctx, Renderer, FallbackRenderer>, wrapper: TaskWrapper<Ctx, Renderer, FallbackRenderer>) => T): T;
  /**
   * Generates a fake stdout for your use case, where it will be tunnelled through Listr to handle the rendering process.
   *
   * @see {@link https://listr2.kilic.dev/renderer/process-output.html}
   */
  stdout(type?: ListrTaskEventType.OUTPUT | ListrTaskEventType.PROMPT): Writable;
  /** Run this task. */
  run(ctx: Ctx): Promise<void>;
}
//#endregion
//#region src/lib/listr-task-event-manager.d.ts
declare class ListrTaskEventManager extends EventManager<ListrTaskEventType, ListrTaskEventMap> {}
//#endregion
//#region src/lib/task.d.ts
/**
 * Creates and handles a runnable instance of the Task.
 */
declare class Task<Ctx, Renderer extends ListrRendererFactory = ListrRendererFactory, FallbackRenderer extends ListrRendererFactory = ListrRendererFactory> extends ListrTaskEventManager {
  listr: Listr<Ctx, Renderer, FallbackRenderer>;
  task: ListrTask<Ctx, Renderer, FallbackRenderer>;
  options: ListrOptions;
  rendererOptions: ListrGetRendererOptions<Renderer> | ListrGetRendererOptions<FallbackRenderer>;
  /** Per-task options for the current renderer of the task. */
  rendererTaskOptions: ListrGetRendererTaskOptions<Renderer> | ListrGetRendererTaskOptions<FallbackRenderer>;
  /** Unique id per task, can be used for identifying a Task. */
  id: string;
  /** The current state of the task. */
  state: ListrTaskState;
  /** Subtasks of the current task. */
  subtasks: Task<Ctx, Renderer, FallbackRenderer>[];
  /** Title of the task. */
  title?: string;
  /** Initial/Untouched version of the title for using whenever task has a reset. */
  readonly initialTitle?: string;
  /** Output channel for the task. */
  output?: string;
  /** Current state of the retry process whenever the task is retrying. */
  retry?: ListrTaskRetry;
  /**
   * A channel for messages.
   *
   * This requires a separate channel for messages like error, skip or runtime messages to further utilize in the renderers.
   */
  message: ListrTaskMessage;
  /** Current prompt instance or prompt error whenever the task is prompting. */
  prompt: ListrTaskPrompt;
  /** Parent task of the current task. */
  parent?: Task<Ctx, any, any>;
  /** Enable flag of this task. */
  private enabled;
  /** User provided Task callback function to run. */
  private taskFn;
  /** Marks the task as closed. This is different from finalized since this is not really related to task itself. */
  private closed;
  constructor(listr: Listr<Ctx, Renderer, FallbackRenderer>, task: ListrTask<Ctx, Renderer, FallbackRenderer>, options: ListrOptions, rendererOptions: ListrGetRendererOptions<Renderer> | ListrGetRendererOptions<FallbackRenderer>, /** Per-task options for the current renderer of the task. */
  rendererTaskOptions: ListrGetRendererTaskOptions<Renderer> | ListrGetRendererTaskOptions<FallbackRenderer>);
  /**
   * Update the current state of the Task and emit the neccassary events.
   */
  set state$(state: ListrTaskState);
  /**
   * Update the current output of the Task and emit the neccassary events.
   */
  set output$(data: string);
  /**
   * Update the current prompt output of the Task and emit the neccassary events.
   */
  set promptOutput$(data: string);
  /**
   * Update or extend the current message of the Task and emit the neccassary events.
   */
  set message$(data: Task<Ctx, Renderer, FallbackRenderer>['message']);
  /**
   * Update the current title of the Task and emit the neccassary events.
   */
  set title$(title: string);
  /**
   * Current task path in the hierarchy.
   */
  get path(): string[];
  /**
   * Checks whether the current task with the given context should be set as enabled.
   */
  check(ctx: Ctx): Promise<boolean>;
  /** Returns whether this task has subtasks. */
  hasSubtasks(): boolean;
  /** Returns whether this task is finalized in someform. */
  hasFinalized(): boolean;
  /** Returns whether this task is in progress. */
  isPending(): boolean;
  /** Returns whether this task has started. */
  isStarted(): boolean;
  /** Returns whether this task is skipped. */
  isSkipped(): boolean;
  /** Returns whether this task has been completed. */
  isCompleted(): boolean;
  /** Returns whether this task has been failed. */
  hasFailed(): boolean;
  /** Returns whether this task has an active rollback task going on. */
  isRollingBack(): boolean;
  /** Returns whether the rollback action was successful. */
  hasRolledBack(): boolean;
  /** Returns whether this task has an actively retrying task going on. */
  isRetrying(): boolean;
  /** Returns whether this task has some kind of reset like retry and rollback going on. */
  hasReset(): boolean;
  /** Returns whether enabled function resolves to true. */
  isEnabled(): boolean;
  /** Returns whether this task actually has a title. */
  hasTitle(): boolean;
  /** Returns whether this task has a prompt inside. */
  isPrompt(): boolean;
  /** Returns whether this task is currently paused. */
  isPaused(): boolean;
  /** Returns whether this task is closed. */
  isClosed(): boolean;
  /** Pause the given task for certain time. */
  pause(time: number): Promise<void>;
  /** Run the current task. */
  run(context: Ctx, wrapper: TaskWrapper<Ctx, Renderer, FallbackRenderer>): Promise<void>;
  private close;
}
//#endregion
//#region src/lib/listr-event-manager.d.ts
declare class ListrEventManager extends EventManager<ListrEventType, ListrEventMap> {}
//#endregion
//#region src/renderer/default/renderer.constants.d.ts
declare enum ListrDefaultRendererLogLevels {
  SKIPPED_WITH_COLLAPSE = "SKIPPED_WITH_COLLAPSE",
  SKIPPED_WITHOUT_COLLAPSE = "SKIPPED_WITHOUT_COLLAPSE",
  OUTPUT = "OUTPUT",
  OUTPUT_WITH_BOTTOMBAR = "OUTPUT_WITH_BOTTOMBAR",
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_FAILED_SUBTASKS = "COMPLETED_WITH_FAILED_SUBTASKS",
  COMPLETED_WITH_FAILED_SISTER_TASKS = "COMPLETED_WITH_SISTER_TASKS_FAILED",
  RETRY = "RETRY",
  ROLLING_BACK = "ROLLING_BACK",
  ROLLED_BACK = "ROLLED_BACK",
  FAILED = "FAILED",
  FAILED_WITH_FAILED_SUBTASKS = "FAILED_WITH_SUBTASKS",
  WAITING = "WAITING",
  PAUSED = "PAUSED",
}
declare const LISTR_DEFAULT_RENDERER_STYLE: ListrLoggerStyleMap<ListrDefaultRendererLogLevels>;
//#endregion
//#region src/renderer/default/renderer.d.ts
declare class DefaultRenderer implements ListrRenderer {
  private readonly tasks;
  private readonly options;
  private readonly events;
  static nonTTY: boolean;
  static rendererOptions: ListrDefaultRendererOptions;
  static rendererTaskOptions: ListrDefaultRendererTaskOptions;
  private prompt;
  private activePrompt;
  private readonly spinner;
  private readonly logger;
  private updater;
  private truncate;
  private wrap;
  private readonly buffer;
  private readonly cache;
  constructor(tasks: ListrDefaultRendererTask[], options: ListrDefaultRendererOptions, events: ListrEventManager);
  render(): Promise<void>;
  update(): void;
  end(): void;
  create(options?: {
    tasks?: boolean;
    bottomBar?: boolean;
    prompt?: boolean;
  }): string;
  protected style(task: ListrDefaultRendererTask, output?: boolean): string;
  protected format(message: string, icon: string, level: number): string[];
  protected shouldOutputToOutputBar(task: ListrDefaultRendererTask): boolean;
  protected shouldOutputToBottomBar(task: ListrDefaultRendererTask): boolean;
  private renderer;
  private renderOutputBar;
  private renderBottomBar;
  private renderPrompt;
  private calculate;
  private setupBuffer;
  private reset;
  private dump;
  private indent;
}
//#endregion
//#region src/presets/timer/preset.interface.d.ts
type PresetTimer = LoggerFieldFn<[number]>;
interface RendererPresetTimer {
  /**
   * Show duration for the tasks.
   */
  timer?: PresetTimer;
}
//#endregion
//#region src/presets/timer/preset.d.ts
declare const PRESET_TIMER: PresetTimer;
//#endregion
//#region src/presets/timer/parser.d.ts
/**
 * A basic function to parse minutes and tasks passed given a duration.
 * Useful for renderers to show the task time.
 */
declare function parseTimer(duration: number): string;
//#endregion
//#region src/presets/timestamp/preset.interface.d.ts
type PresetTimestamp = LoggerFieldFn;
interface RendererPresetTimestamp {
  /**
   * Show timestamp for each event that has been logged.
   */
  timestamp?: PresetTimestamp;
}
//#endregion
//#region src/presets/timestamp/preset.d.ts
declare const PRESET_TIMESTAMP: PresetTimestamp;
//#endregion
//#region src/presets/timestamp/parser.d.ts
declare function parseTimestamp(): string;
//#endregion
//#region src/renderer/default/renderer.interface.d.ts
type ListrDefaultRendererOptionsStyle = ListrLoggerStyleMap<ListrDefaultRendererLogLevels>;
type ListrDefaultRendererTask = ListrRendererTask<typeof DefaultRenderer>;
interface ListrDefaultRendererOptions extends RendererPresetTimer, RendererLoggerOptions<ListrDefaultRendererLogLevels>, ListrLoggerStyleMap<ListrDefaultRendererLogLevels> {
  /**
   * Indentation per-level.
   *
   * - This is a global option that can only be changed through the main Listr class.
   *
   * @defaultValue `2`
   */
  indentation?: number;
  /**
   * Formats the output in to the given lines of `process.stdout.columns`.
   *
   * - This is a global option that can only be changed through the main Listr class.
   *
   * @defaultValue `'wrap'`
   */
  formatOutput?: 'truncate' | 'wrap';
  /**
   * Clear all the output generated by the renderer when the Listr completes the execution successfully.
   *
   * - This is a global option that can only be changed through the main Listr class.
   *
   * @defaultValue `false`
   */
  clearOutput?: boolean;
  /**
   * Only update the render whenever there is a incoming request through the hook.
   *
   * - This is a global option that can only be changed through the main Listr class.
   * - Useful for snapshot tests, where this will disable showing spinner and only update the screen if something else has happened in the task worthy to show.
   *
   * @defaultValue `false`
   */
  lazy?: boolean;
  /**
   * Remove empty lines from the output section for decluterring multiple line output.
   *
   * @defaultValue `true`
   */
  removeEmptyLines?: boolean;
  /**
   * Spinner visually indicates that a task is running.
   *
   * - You can always implement your own spinner, if the current one does not please you visually.
   */
  spinner?: Spinner;
  /**
   * Show the subtasks of the current task.
   *
   * @defaultValue `true`
   */
  showSubtasks?: boolean;
  /**
   * Collapse subtasks after current task completes its execution.
   *
   * @defaultValue `true`
   */
  collapseSubtasks?: boolean;
  /**
   * Show skip messages or show the original title of the task.
   *
   * - `true` will output the given skip message if there is any.
   * - `false` will keep the current task title intact. This will also disable `collapseSkips`.
   *
   * @defaultValue `true`
   */
  showSkipMessage?: boolean;
  /**
   * Collapse skip messages into a single message and overwrite the task title.
   *
   * - `true` will collapse skiped tasks.
   * - `false` will show the skip message as a data output under the current task title.
   *
   * @defaultValue `true`
   */
  collapseSkips?: boolean;
  /**
   * Suffix skip messages to clearly indicate the task has been skipped with in `collapseSkips` mode.
   *
   * - `true` will add `[SKIPPED]` as a suffix.
   * - `false` will not add a suffix.
   *
   * @defaultValue `false`
   */
  suffixSkips?: boolean;
  /**
   * Show the error message or show the original title of the task.
   *
   * - `true` will output the current error encountered with the task if there is any.
   * - `false` will keep the current task title intact. This will also disable `collapseErrors`.
   *
   * @defaultValue `true`
   */
  showErrorMessage?: boolean;
  /**
   * Collapse error messages into a single message and overwrite the task title.
   *
   * - `true` will collapse the error message.
   * - `false` will show the error message as a data output under the current task title.
   *
   * @defaultValue `true`
   */
  collapseErrors?: boolean;
  /**
   * Suffix retry messages to clearly indicate the task is currently retrying.
   *
   * - `true` will add `[RETRY:COUNT]` as a suffix.
   * - `false` will not add a suffix.
   *
   * @defaultValue `false`
   */
  suffixRetries?: boolean;
  /**
   * Show duration for the pauses.
   *
   * @defaultValue `PRESET_TIMER`
   */
  pausedTimer?: PresetTimer;
}
interface ListrDefaultRendererTaskOptions extends RendererPresetTimer {
  /**
   * Write task output to the output bar under the title.
   *
   * - `true` only keep the last line.
   * - `Infinity` will keep all the lines.
   * - `number` will keep the defined amount of lines.
   * - `false` will not render output with this method.
   *
   * @defaultValue `true`
   */
  outputBar?: boolean | number;
  /**
   * Write task output to the bottom bar instead of the gap under the task title itself.
   * This can be useful for stream of data coming in and is the default mode for tasks without a title.
   *
   * This will take	precedence over the `outputBar` option, if explicitly set.
   *
   * - `true` only keep the last line.
   * - `Infinity` will keep all the lines.
   * - `number` will keep the defined amount of lines.
   * - `false` will not render output with this method.
   *
   * @defaultValue `false`
   */
  bottomBar?: boolean | number;
  /**
   * Keep output of the task after task finishes.
   *
   * - This can be enabled for both normal task output under the title and bottom bar.
   *
   * @defaultValue false
   */
  persistentOutput?: boolean;
}
interface ListrDefaultRendererCache {
  render: ListrRendererCacheMap<string[]>;
  rendererOptions: ListrRendererCacheMap<ListrDefaultRendererOptions>;
  rendererTaskOptions: ListrRendererCacheMap<ListrDefaultRendererTaskOptions>;
}
interface ListrDefaultRendererOutputBuffer {
  output: ListrRendererCacheMap<ProcessOutputBuffer>;
  bottom: ListrRendererCacheMap<ProcessOutputBuffer>;
}
//#endregion
//#region src/renderer/silent/renderer.d.ts
declare class SilentRenderer implements ListrRenderer {
  tasks: ListrSilentRendererTask[];
  options: ListrSilentRendererOptions;
  static nonTTY: boolean;
  static rendererOptions: ListrSilentRendererOptions;
  static rendererTaskOptions: ListrSilentRendererTaskOptions;
  constructor(tasks: ListrSilentRendererTask[], options: ListrSilentRendererOptions);
  render(): void;
  end(): void;
}
//#endregion
//#region src/renderer/silent/renderer.interface.d.ts
type ListrSilentRendererTask = ListrRendererTask<typeof SilentRenderer>;
type ListrSilentRendererOptions = never;
type ListrSilentRendererTaskOptions = never;
//#endregion
//#region src/renderer/simple/renderer.d.ts
declare class SimpleRenderer implements ListrRenderer {
  private readonly tasks;
  private options;
  static nonTTY: boolean;
  static rendererOptions: ListrSimpleRendererOptions;
  static rendererTaskOptions: ListrSimpleRendererTaskOptions;
  private readonly logger;
  private readonly cache;
  constructor(tasks: ListrSimpleRendererTask[], options: ListrSimpleRendererOptions);
  end(): void;
  render(): void;
  private renderer;
  private calculate;
  private reset;
}
//#endregion
//#region src/renderer/simple/renderer.interface.d.ts
type ListrSimpleRendererTask = ListrRendererTask<typeof SimpleRenderer>;
interface ListrSimpleRendererOptions extends RendererPresetTimer, RendererPresetTimestamp, RendererLoggerOptions<ListrLogLevels>, ListrLoggerStyleMap<ListrLogLevels> {
  /**
   * Show duration for the pauses.
   *
   * @defaultValue `PRESET_TIMER`
   */
  pausedTimer?: PresetTimer;
}
interface ListrSimpleRendererTaskOptions extends RendererPresetTimer {}
interface ListrSimpleRendererCache {
  rendererOptions: ListrRendererCacheMap<ListrSimpleRendererOptions>;
  rendererTaskOptions: ListrRendererCacheMap<ListrSimpleRendererTaskOptions>;
}
//#endregion
//#region src/renderer/test/renderer.d.ts
declare class TestRenderer implements ListrRenderer {
  private readonly tasks;
  private readonly options;
  static nonTTY: boolean;
  static rendererOptions: ListrTestRendererOptions;
  static rendererTaskOptions: ListrTestRendererTaskOptions;
  private readonly logger;
  private serializer;
  constructor(tasks: ListrTestRendererTask[], options: ListrTestRendererOptions);
  render(): void;
  end(): void;
  private renderer;
}
//#endregion
//#region src/renderer/test/serializer.interface.d.ts
interface TestRendererSerializerOutput<T$1 extends ListrTaskEventType> {
  event: T$1;
  data: ListrTaskEventMap[T$1];
  task?: Partial<Record<TestRendererSerializerTaskKeys, unknown>>;
}
type TestRendererSerializerTaskKeys = Extract<keyof ListrRendererTask<typeof TestRenderer>, 'hasSubtasks' | 'hasFinalized' | 'isPending' | 'isStarted' | 'isSkipped' | 'isCompleted' | 'hasFailed' | 'isRollingBack' | 'hasRolledBack' | 'isRetrying' | 'hasReset' | 'isEnabled' | 'hasTitle' | 'isPrompt' | 'isPaused' | 'title' | 'path'>;
//#endregion
//#region src/renderer/test/renderer.interface.d.ts
type ListrTestRendererTask = ListrRendererTask<typeof TestRenderer>;
interface ListrTestRendererOptions extends RendererLoggerOptions<ListrLogLevels> {
  /**
   * Log subtasks.
   *
   * @defaultValue `true`
   */
  subtasks?: boolean;
  /**
   * Log given task states.
   */
  state?: ListrTaskState[];
  /**
   * Log output.
   */
  output?: boolean;
  /**
   * Log prompt.
   */
  prompt?: boolean;
  /**
   * Log title changes.
   */
  title?: boolean;
  /**
   * Log given messages.
   */
  messages?: (keyof ListrTaskMessage)[];
  /**
   * Log given messages to stderr instead of stdout.
   */
  messagesToStderr?: (keyof ListrTaskMessage)[];
  /**
   * Serialize the given properties of the task inside the logs.
   */
  task?: false | TestRendererSerializerTaskKeys[];
}
type ListrTestRendererTaskOptions = never;
//#endregion
//#region src/renderer/test/serializer.d.ts
declare class TestRendererSerializer {
  options?: ListrTestRendererOptions;
  constructor(options?: ListrTestRendererOptions);
  serialize<T extends ListrTaskEventType>(event: T, data: ListrTaskEventMap[T], task?: ListrTestRendererTask): string;
  generate<T extends ListrTaskEventType>(event: T, data: ListrTaskEventMap[T], task?: ListrTestRendererTask): TestRendererSerializerOutput<T>;
}
//#endregion
//#region src/renderer/verbose/renderer.d.ts
declare class VerboseRenderer implements ListrRenderer {
  private readonly tasks;
  private readonly options;
  static nonTTY: boolean;
  static rendererOptions: ListrVerboseRendererOptions;
  static rendererTaskOptions: ListrVerboseRendererTaskOptions;
  private logger;
  private readonly cache;
  constructor(tasks: ListrVerboseRendererTask[], options: ListrVerboseRendererOptions);
  render(): void;
  end(): void;
  private renderer;
  private calculate;
  private reset;
}
//#endregion
//#region src/renderer/verbose/renderer.interface.d.ts
type ListrVerboseRendererTask = ListrRendererTask<typeof VerboseRenderer>;
interface ListrVerboseRendererOptions extends RendererPresetTimer, RendererPresetTimestamp, RendererLoggerOptions<ListrLogLevels>, ListrLoggerStyleMap<ListrLogLevels> {
  /**
   * Log the title changes of the task.
   *
   * @default `false`
   */
  logTitleChange?: boolean;
  /**
   * Show duration for the pauses.
   *
   * @defaultValue `PRESET_TIMER`
   */
  pausedTimer?: PresetTimer;
}
interface ListrVerboseRendererTaskOptions extends RendererPresetTimer {}
interface ListrVerboseRendererCache {
  rendererOptions: ListrRendererCacheMap<ListrVerboseRendererOptions>;
  rendererTaskOptions: ListrRendererCacheMap<ListrVerboseRendererTaskOptions>;
}
//#endregion
//#region src/interfaces/renderer.interface.d.ts
/** Name of the default renderer. */
type ListrDefaultRendererValue = 'default';
/** Type of default renderer. */
type ListrDefaultRenderer = typeof DefaultRenderer;
/** Name of simple renderer. */
type ListrSimpleRendererValue = 'simple';
/** Type of simple renderer. */
type ListrSimpleRenderer = typeof SimpleRenderer;
/** Name of verbose renderer. */
type ListrVerboseRendererValue = 'verbose';
/** Type of verbose renderer. */
type ListrVerboseRenderer = typeof VerboseRenderer;
/** Name of test renderer. */
type ListrTestRendererValue = 'test';
/** Type of test renderer. */
type ListrTestRenderer = typeof TestRenderer;
/** Name of silent renderer. */
type ListrSilentRendererValue = 'silent';
/** Type of silent renderer. */
type ListrSilentRenderer = typeof SilentRenderer;
/** The default prefered renderer. */
type ListrPrimaryRendererValue = ListrDefaultRendererValue;
/** The default fallback renderer. */
type ListrSecondaryRendererValue = ListrSimpleRendererValue;
/**
 * Listr2 can process either the integrated renderers as string aliases,
 * or utilize a compatible style renderer that extends the ListrRenderer abstract class.
 */
type ListrRendererValue = ListrSilentRendererValue | ListrDefaultRendererValue | ListrSimpleRendererValue | ListrVerboseRendererValue | ListrTestRendererValue | ListrRendererFactory;
/**
 * Returns the class type from friendly names of the renderers.
 */
type ListrGetRendererClassFromValue<T$1 extends ListrRendererValue> = T$1 extends ListrDefaultRendererValue ? ListrDefaultRenderer : T$1 extends ListrSimpleRendererValue ? ListrSimpleRenderer : T$1 extends ListrVerboseRendererValue ? ListrVerboseRenderer : T$1 extends ListrTestRendererValue ? ListrTestRenderer : T$1 extends ListrSilentRenderer ? ListrSilentRenderer : T$1 extends ListrRendererFactory ? T$1 : never;
/**
 * Returns the friendly names from the type of renderer classes.
 */
type ListrGetRendererValueFromClass<T$1 extends ListrRendererFactory> = T$1 extends DefaultRenderer ? ListrDefaultRendererValue : T$1 extends SimpleRenderer ? ListrSimpleRendererValue : T$1 extends VerboseRenderer ? ListrVerboseRendererValue : T$1 extends TestRenderer ? ListrTestRendererValue : T$1 extends SilentRenderer ? ListrSilentRenderer : T$1 extends ListrRendererFactory ? T$1 : never;
/**
 * Returns renderer global options depending on the renderer type.
 */
type ListrGetRendererOptions<T$1 extends ListrRendererValue> = T$1 extends ListrRendererValue ? ListrGetRendererClassFromValue<T$1>['rendererOptions'] : never;
/**
 * Returns renderer per-task options depending on the renderer type.
 */
type ListrGetRendererTaskOptions<T$1 extends ListrRendererValue> = T$1 extends ListrRendererValue ? ListrGetRendererClassFromValue<T$1>['rendererTaskOptions'] : never;
/** Selection and options of the primary preferred renderer. */
interface ListrPrimaryRendererSelection<T$1 extends ListrRendererValue> extends ListrPrimaryRendererOptions<T$1> {
  /** Default renderer preferred. */
  renderer?: T$1;
}
/** Options of the primary preferred renderer. */
interface ListrPrimaryRendererOptions<T$1 extends ListrRendererValue> {
  /** Renderer options depending on the current renderer. */
  rendererOptions?: ListrGetRendererOptions<T$1>;
}
/** Task options of the primary preferred renderer. */
interface ListrPrimaryRendererTaskOptions<T$1 extends ListrRendererValue> {
  /** Renderer options depending on the current renderer. */
  rendererOptions?: ListrGetRendererTaskOptions<T$1>;
}
/** Selection and options of the preferred fallback renderer. */
interface ListrSecondaryRendererSelection<T$1 extends ListrRendererValue> extends ListrSecondaryRendererOptions<T$1> {
  /** Fallback renderer preferred. */
  fallbackRenderer?: T$1;
}
/** Options of the fallback renderer. */
interface ListrSecondaryRendererOptions<T$1 extends ListrRendererValue> {
  /** Renderer options depending on the fallback renderer. */
  fallbackRendererOptions?: ListrGetRendererOptions<T$1>;
}
/** Task options of the fallback renderer. */
interface ListrSecondaryRendererTaskOptions<T$1 extends ListrRendererValue> {
  /** Renderer options depending on the fallback renderer. */
  fallbackRendererOptions?: ListrGetRendererTaskOptions<T$1>;
}
/** Renderer options for the parent Listr class, including setup for selecting default and fallback renderers.  */
type ListrRendererOptions<Renderer extends ListrRendererValue, FallbackRenderer extends ListrRendererValue> = ListrPrimaryRendererSelection<Renderer> & ListrSecondaryRendererSelection<FallbackRenderer>;
/**
 * The definition of a ListrRenderer.
 *
 * @see {@link https://listr2.kilic.dev/renderer/renderer.html}
 */
declare class ListrRenderer {
  /** designate renderer global options that is specific to the current renderer */
  static rendererOptions: Record<PropertyKey, any>;
  /** designate renderer per task options that is specific to the current renderer  */
  static rendererTaskOptions: Record<PropertyKey, any>;
  /** designate whether this renderer can work in non-tty environments */
  static nonTTY: boolean;
  /** A function to what to do on render */
  render: () => void | Promise<void>;
  /** A function to what to do on end of the render */
  end: (err?: Error) => void;
  /** create a new renderer */
  constructor(tasks: Task<any, ListrRendererFactory, ListrRendererFactory>[], options: typeof ListrRenderer.rendererOptions, events?: ListrEventManager);
}
/** Factory of compatible Listr renderers. */
type ListrRendererFactory = typeof ListrRenderer;
/** Renderer selection for current Listr. */
interface SupportedRenderer<Renderer extends ListrRendererFactory> {
  renderer: Renderer;
  options?: ListrGetRendererOptions<Renderer>;
  selection: ListrRendererSelection;
}
type ListrRendererCacheMap<T$1> = Map<Task<any, any, any>['id'], T$1>;
//#endregion
//#region src/interfaces/listr.interface.d.ts
/** Listr context. */
type ListrContext = any | undefined;
/**
 * Options to set the behavior of Listr.
 */
interface ListrOptions<Ctx = ListrContext> {
  /**
   * Inject a context through this options wrapper.
   *
   * @defaultValue `{}`
   * @see {@link https://listr2.kilic.dev/listr/context.html}
   */
  ctx?: Ctx;
  /**
   * Concurrency limits how many tasks will be running in parallel.
   *
   * - `false` will only run a single task at a time.
   * - `true` will set it to `Infinity` to run all the tasks in parallel.
   * - Given a `number` it will limit the concurrency to that number.
   *
   * @defaultValue `false`
   */
  concurrent?: boolean | number;
  /**
   * Determine the default behavior of exiting on errors.
   *
   * - `true` will exit the current Listr whenever it encounters an error.
   * - `false` will continue the execution of current Listr if it encounters an error.
   *
   * @defaultValue `true`
   */
  exitOnError?: boolean;
  /**
   * Determine the behavior of exiting after rollback actions.
   *
   * This is independent of `exitOnError`, since failure of a rollback can be a more critical operation comparing to
   * failing a single task.
   *
   * - `true` will stop the execution whenever a rollback happens.
   * - `false` will continue after successfully recovering from a rollback.
   *
   * @defaultValue `true`
   */
  exitAfterRollback?: boolean;
  /**
   * Collects errors inside the `Listr.errors`.
   *
   * - `false` will collect no errors.
   * - `minimal` will only collect the error message and the location.
   * - `full` will clone the current context and task in to the error instance.
   *
   * @defaultValue `false`
   * @see {@link https://listr2.kilic.dev/task/error-handling.html#collected-errors}
   */
  collectErrors?: false | 'minimal' | 'full';
  /**
   * Listr will track SIGINIT signal to update the renderer one last time before failing, therefore it needs to
   * register exit listeners.
   *
   * @defaultValue true
   */
  registerSignalListeners?: boolean;
  /**
   * Determine the certain condition required to use the fallback renderer.
   *
   * @defaultValue handled internally
   */
  fallbackRendererCondition?: boolean | (() => boolean);
  /**
   * Determine the certain condition required to use the silent renderer.
   *
   * @defaultValue handled internally
   */
  silentRendererCondition?: boolean | (() => boolean);
  /**
   * Forces TTY stdout even though your current output may not be compatible.
   *
   * @defaultValue `false`
   */
  forceTTY?: boolean;
  /**
   * Forces unicode icons even though your current output may not be compatible.
   *
   * @defaultValue `false`
   */
  forceUnicode?: boolean;
}
/**
 * Parent Listr has more options where you can also change global settings.
 *
 * Any subtasks will respect those options so they will be stripped of that properties.
 */
interface ListrBaseClassOptions<Ctx = ListrContext, Renderer extends ListrRendererValue = ListrPrimaryRendererValue, FallbackRenderer extends ListrRendererValue = ListrSecondaryRendererValue> extends ListrOptions<Ctx>, ListrPrimaryRendererSelection<Renderer>, ListrSecondaryRendererSelection<FallbackRenderer> {}
/**
 * Subtasks has reduced set options where the missing ones are explicitly set by the base class.
 */
interface ListrSubClassOptions<Ctx = ListrContext, Renderer extends ListrRendererValue = ListrPrimaryRendererValue, FallbackRenderer extends ListrRendererValue = ListrSecondaryRendererValue> extends Omit<ListrOptions<Ctx>, 'registerSignalListeners' | 'fallbackRendererCondition' | 'silentRendererCondition' | 'forceTTY' | 'forceUnicode'>, ListrPrimaryRendererOptions<Renderer>, ListrSecondaryRendererOptions<FallbackRenderer> {}
//#endregion
//#region src/interfaces/listr-error.interface.d.ts
/**
 * Internal error handling mechanism for Listr collects the errors and details for a failed task.
 *
 * @see {@link https://listr2.kilic.dev/task/error-handling.html}
 */
declare class ListrError<Ctx extends ListrContext = ListrContext> extends Error {
  error: Error;
  type: ListrErrorTypes;
  task: Task<Ctx, ListrRendererFactory, ListrRendererFactory>;
  path: string[];
  ctx: Ctx;
  constructor(error: Error, type: ListrErrorTypes, task: Task<Ctx, ListrRendererFactory, ListrRendererFactory>);
}
//#endregion
//#region src/interfaces/listr-event-map.interface.d.ts
/**
 * Event map for Listr.
 *
 * @see {@link https://listr2.kilic.dev/listr/events.html}
 * @see {@link module:listr2.ListrEventType}
 */
declare class ListrEventMap extends BaseEventMap implements EventMap<ListrEventType> {
  [ListrEventType.SHOULD_REFRESH_RENDER]: never;
}
//#endregion
//#region src/interfaces/listr-renderer-error.interface.d.ts
/**
 * Internal error coming from renderer.
 */
declare class ListrRendererError extends Error {}
//#endregion
//#region src/interfaces/task.interface.d.ts
/**
 * Defines the task, conditions and options to run a specific task in the Listr.
 * This defines the external API for the task where {@link TaskWrapper} is used internally.
 *
 * @see {@link https://listr2.kilic.dev/task/task.html}
 */
interface ListrTask<Ctx = ListrContext, Renderer extends ListrRendererFactory = any, FallbackRenderer extends ListrRendererFactory = any> extends ListrPrimaryRendererTaskOptions<Renderer>, ListrSecondaryRendererTaskOptions<FallbackRenderer> {
  /**
   * Title of the task.
   *
   * Give this task a title to enchance it on the preferred renderer.
   *
   * - Tasks without a title will be hidden from view in renderers and will act as a background task.
   *
   * @see {@link https://listr2.kilic.dev/task/title.html}
   */
  title?: string | any[];
  /**
   * The task itself in the form of a `Function`, `Promise`, `Listr`, `Observable` or `Stream`.
   *
   * - Task will be executed, whenever the provided criterion is met with the current state and whenever the time for that specific task has come.
   *
   * @see {@link https://listr2.kilic.dev/task/task.html}
   */
  task: ListrTaskFn<Ctx, Renderer, FallbackRenderer>;
  /**
   * Enable a task depending on the context.
   *
   * - The callback function will be evaluated before all the tasks start to check which tasks has been enabled.
   * - The callback function will be evaluated again before the task starts.
   *
   * @see {@link https://listr2.kilic.dev/task/enable.html}
   */
  enabled?: boolean | ((ctx: Ctx) => boolean | Promise<boolean>);
  /**
   * Skip this task depending on the context.
   *
   * - The callback function will be evaluated once before the task starts.
   *
   * @see {@link https://listr2.kilic.dev/task/skip.html}
   */
  skip?: boolean | string | ((ctx: Ctx) => boolean | string | Promise<boolean | string>);
  /**
   * Retries a task with the given amounts whenever a task fails.
   *
   * @see {@link https://listr2.kilic.dev/task/retry.html}
   */
  retry?: number | {
    tries: number;
    delay?: number;
  };
  /**
   * The callback function that you provide will run whenever the attached task fails and
   * give you the ability to revert your changes, before failing.
   *
   * @see {@link https://listr2.kilic.dev/task/rollback.html}
   */
  rollback?: ListrTaskFn<Ctx, Renderer, FallbackRenderer>;
  /**
   * Determine the default behavior of exiting on errors for this attached task.
   */
  exitOnError?: boolean | ((ctx: Ctx) => boolean | Promise<boolean>);
}
/**
 * Result of the processed task can be any of the supported types.
 */
type ListrTaskResult<Ctx> = string | Promise<any> | Listr<Ctx, ListrRendererValue, ListrRendererValue> | ReadableLike | ObservableLike<any>;
/**
 * The callback function from the user that defines the task.
 */
type ListrTaskFn<Ctx, Renderer extends ListrRendererFactory, FallbackRenderer extends ListrRendererFactory> = (ctx: Ctx, task: TaskWrapper<Ctx, Renderer, FallbackRenderer>) => void | ListrTaskResult<Ctx>;
/**
 * Tasks can have attached prompts to them.
 */
type ListrTaskPrompt = ListrPromptAdapter;
/**
 * Tasks can retry themselves when defined.
 *
 * - This holds the value of the current error and the current retry attempt.
 */
interface ListrTaskRetry {
  count: number;
  error?: Error;
}
/**
 * Task can provide additional information depending on the current state of the Task.
 *
 * TaskMessage is used to propagate these messages to the renderers for displaying them to the end-user.
 */
interface ListrTaskMessage {
  /** Elapsed time of the current task, whenever the Task completes. */
  duration?: number;
  /** Error message from the current task, whenever the Task fails. */
  error?: string;
  /** Skip message from the current task, whenever the Task skips. */
  skip?: string;
  /** Rollback message from the current task, whenever the Task finishes rollback. */
  rollback?: string;
  /** Retry message from the current task, whenever the Task tries to retry. */
  retry?: ListrTaskRetry;
  /** Holds the time as epoch time of when will this task continue to execute. */
  paused?: number;
}
/**
 * Listr Task after the renderer has been selected and renderer related options removed.
 */
type ListrRendererTask<SelectedRenderer extends ListrRendererFactory> = Task<any, SelectedRenderer, SelectedRenderer>;
//#endregion
//#region src/interfaces/listr-task-event-map.interface.d.ts
/**
 * Event map for Task.
 *
 * @see {@link https://listr2.kilic.dev/task/events.html}
 * @see {@link module:listr2.ListrTaskEventType}
 */
declare class ListrTaskEventMap extends BaseEventMap implements EventMap<ListrTaskEventType> {
  [ListrTaskEventType.STATE]: ListrTaskState;
  [ListrTaskEventType.ENABLED]: boolean;
  [ListrTaskEventType.SUBTASK]: Task<any, any, any>[];
  [ListrTaskEventType.TITLE]: string;
  [ListrTaskEventType.OUTPUT]: string;
  [ListrTaskEventType.MESSAGE]: ListrTaskMessage;
  [ListrTaskEventType.PROMPT]: string;
  [ListrTaskEventType.CLOSED]: never;
}
//#endregion
//#region src/interfaces/prompt-error.interface.d.ts
/**
 * Internal error handling mechanism for Listr prompts to identify the failing cause is coming from a prompt.
 *
 * @see {@link https://listr2.kilic.dev/task/prompts.html}
 */
declare class PromptError extends Error {}
//#endregion
//#region src/listr.d.ts
/**
 * Create a new task list with Listr.
 *
 * @see {@link https://listr2.kilic.dev/listr/listr.html}
 */
declare class Listr<Ctx = ListrContext, Renderer extends ListrRendererValue = ListrPrimaryRendererValue, FallbackRenderer extends ListrRendererValue = ListrSecondaryRendererValue> {
  task: ListrTask<Ctx, ListrGetRendererClassFromValue<Renderer>, ListrGetRendererClassFromValue<FallbackRenderer>> | ListrTask<Ctx, ListrGetRendererClassFromValue<Renderer>, ListrGetRendererClassFromValue<FallbackRenderer>>[];
  options?: ListrBaseClassOptions<Ctx, Renderer, FallbackRenderer>;
  parentTask?: Task<any, ListrGetRendererClassFromValue<Renderer>, ListrGetRendererClassFromValue<FallbackRenderer>>;
  tasks: Task<Ctx, ListrGetRendererClassFromValue<Renderer>, ListrGetRendererClassFromValue<FallbackRenderer>>[];
  errors: ListrError<Ctx>[];
  ctx: Ctx;
  events: ListrEventManager;
  path: string[];
  rendererClass: ListrRendererFactory;
  rendererClassOptions: ListrGetRendererOptions<ListrGetRendererClassFromValue<Renderer> | ListrGetRendererClassFromValue<FallbackRenderer>>;
  rendererSelection: ListrRendererSelection;
  boundSignalHandler: () => void;
  private concurrency;
  private renderer;
  constructor(task: ListrTask<Ctx, ListrGetRendererClassFromValue<Renderer>, ListrGetRendererClassFromValue<FallbackRenderer>> | ListrTask<Ctx, ListrGetRendererClassFromValue<Renderer>, ListrGetRendererClassFromValue<FallbackRenderer>>[], options?: ListrBaseClassOptions<Ctx, Renderer, FallbackRenderer>, parentTask?: Task<any, ListrGetRendererClassFromValue<Renderer>, ListrGetRendererClassFromValue<FallbackRenderer>>);
  /**
   * Whether this is the root task.
   */
  isRoot(): boolean;
  /**
   * Whether this is a subtask of another task list.
   */
  isSubtask(): boolean;
  /**
   * Add tasks to current task list.
   *
   * @see {@link https://listr2.kilic.dev/task/task.html}
   */
  add(tasks: ListrTask<Ctx, ListrGetRendererClassFromValue<Renderer>> | ListrTask<Ctx, ListrGetRendererClassFromValue<Renderer>>[]): void;
  /**
   * Run the task list.
   *
   * @see {@link https://listr2.kilic.dev/listr/listr.html#run-the-generated-task-list}
   */
  run(context?: Ctx): Promise<Ctx>;
  private generate;
  private runTask;
  private signalHandler;
  private removeSignalHandler;
}
//#endregion
export { ANSI_ESCAPE, ANSI_ESCAPE_CODES, BaseEventMap, Concurrency, DefaultRenderer, EventData, EventManager, EventMap, Figures, LISTR_DEFAULT_RENDERER_STYLE, LISTR_LOGGER_STDERR_LEVELS, LISTR_LOGGER_STYLE, Listr, ListrBaseClassOptions, ListrContext, ListrDefaultRenderer, ListrDefaultRendererCache, ListrDefaultRendererLogLevels, ListrDefaultRendererOptions, ListrDefaultRendererOptionsStyle, ListrDefaultRendererOutputBuffer, ListrDefaultRendererTask, ListrDefaultRendererTaskOptions, ListrDefaultRendererValue, ListrEnvironmentVariables, ListrError, ListrErrorTypes, ListrEventManager, ListrEventMap, ListrEventType, ListrGetRendererClassFromValue, ListrGetRendererOptions, ListrGetRendererTaskOptions, ListrGetRendererValueFromClass, ListrLogLevels, ListrLogger, ListrLoggerOptions, ListrLoggerStyleMap, ListrOptions, ListrPrimaryRendererOptions, ListrPrimaryRendererSelection, ListrPrimaryRendererTaskOptions, ListrPrimaryRendererValue, ListrPromptAdapter, ListrRenderer, ListrRendererCacheMap, ListrRendererError, ListrRendererFactory, ListrRendererOptions, ListrRendererSelection, ListrRendererTask, ListrRendererValue, ListrSecondaryRendererOptions, ListrSecondaryRendererSelection, ListrSecondaryRendererTaskOptions, ListrSecondaryRendererValue, ListrSilentRenderer, ListrSilentRendererOptions, ListrSilentRendererTask, ListrSilentRendererTaskOptions, ListrSilentRendererValue, ListrSimpleRenderer, ListrSimpleRendererCache, ListrSimpleRendererOptions, ListrSimpleRendererTask, ListrSimpleRendererTaskOptions, ListrSimpleRendererValue, ListrSubClassOptions, ListrTask, ListrTaskEventManager, ListrTaskEventMap, ListrTaskEventType, ListrTaskFn, ListrTaskMessage, type Task as ListrTaskObject, ListrTaskPrompt, ListrTaskResult, ListrTaskRetry, ListrTaskState, type TaskWrapper as ListrTaskWrapper, ListrTestRenderer, ListrTestRendererOptions, ListrTestRendererTask, ListrTestRendererTaskOptions, ListrTestRendererValue, ListrVerboseRenderer, ListrVerboseRendererCache, ListrVerboseRendererOptions, ListrVerboseRendererTask, ListrVerboseRendererTaskOptions, ListrVerboseRendererValue, LoggerField, LoggerFieldFn, LoggerFieldOptions, LoggerFormat, LoggerFormatOptions, ObservableLike, PRESET_TIMER, PRESET_TIMESTAMP, PresetTimer, PresetTimestamp, ProcessOutput, ProcessOutputBuffer, ProcessOutputBufferEntry, ProcessOutputBufferOptions, ProcessOutputOptions, ProcessOutputRendererOptions, ProcessOutputStream, ProcessOutputStreamMap, PromptError, ReadableLike, RendererLoggerOptions, RendererPresetTimer, RendererPresetTimestamp, SilentRenderer, SimpleRenderer, Spinner, SupportedRenderer, TestRenderer, TestRendererSerializer, TestRendererSerializerOutput, TestRendererSerializerTaskKeys, VerboseRenderer, assertFunctionOrSelf, cleanseAnsi, cloneObject, color, createWritable, delay, figures, getRenderer, getRendererClass, indent, isObservable, isReadable, isUnicodeSupported, parseTimer, parseTimestamp, splat };