//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let eventemitter3 = require("eventemitter3");
eventemitter3 = __toESM(eventemitter3);
let colorette = require("colorette");
colorette = __toESM(colorette);
let util = require("util");
util = __toESM(util);
let os = require("os");
os = __toESM(os);
let string_decoder = require("string_decoder");
string_decoder = __toESM(string_decoder);
let stream = require("stream");
stream = __toESM(stream);
let rfdc = require("rfdc");
rfdc = __toESM(rfdc);
let crypto = require("crypto");
crypto = __toESM(crypto);

//#region src/constants/ansi-escape-codes.constants.ts
/**
* Indicates an UNICODE characters is coming up.
*/
const ANSI_ESCAPE = "\x1B[";
/**
* Generic ANSI escape characters for terminal based operations.
*/
const ANSI_ESCAPE_CODES = {
	CURSOR_HIDE: ANSI_ESCAPE + "?25l",
	CURSOR_SHOW: ANSI_ESCAPE + "?25h"
};

//#endregion
//#region src/constants/environment-variables.constants.ts
/**
* Environment variables for Listr.
*/
let ListrEnvironmentVariables = /* @__PURE__ */ function(ListrEnvironmentVariables$1) {
	ListrEnvironmentVariables$1["FORCE_UNICODE"] = "LISTR_FORCE_UNICODE";
	ListrEnvironmentVariables$1["FORCE_TTY"] = "LISTR_FORCE_TTY";
	ListrEnvironmentVariables$1["DISABLE_COLOR"] = "NO_COLOR";
	ListrEnvironmentVariables$1["FORCE_COLOR"] = "FORCE_COLOR";
	return ListrEnvironmentVariables$1;
}({});

//#endregion
//#region src/constants/listr-error.constants.ts
/**
* The actual error type that is collected and to help identify where the error is triggered from.
*/
let ListrErrorTypes = /* @__PURE__ */ function(ListrErrorTypes$1) {
	/** Task has failed and will try to retry. */
	ListrErrorTypes$1["WILL_RETRY"] = "WILL_RETRY";
	/** Task has failed and will try to rollback. */
	ListrErrorTypes$1["WILL_ROLLBACK"] = "WILL_ROLLBACK";
	/** Task has failed, ran the rollback action but the rollback action itself has failed. */
	ListrErrorTypes$1["HAS_FAILED_TO_ROLLBACK"] = "HAS_FAILED_TO_ROLLBACK";
	/** Task has failed. */
	ListrErrorTypes$1["HAS_FAILED"] = "HAS_FAILED";
	/** Task has failed, but exitOnError is set to false, so will ignore this error. */
	ListrErrorTypes$1["HAS_FAILED_WITHOUT_ERROR"] = "HAS_FAILED_WITHOUT_ERROR";
	return ListrErrorTypes$1;
}({});

//#endregion
//#region src/constants/listr-events.constants.ts
/**
* Events that are triggered by Listr.
*
* These are stateful and singleton events by being attached to the main Listr class and propagating to the subtasks.
*
* @see {@link https://listr2.kilic.dev/listr/events.html}
*/
let ListrEventType = /* @__PURE__ */ function(ListrEventType$1) {
	/** Indicates that underlying renderer should refresh the current render. */
	ListrEventType$1["SHOULD_REFRESH_RENDER"] = "SHOUD_REFRESH_RENDER";
	return ListrEventType$1;
}({});

//#endregion
//#region src/constants/listr-renderer.constants.ts
let ListrRendererSelection = /* @__PURE__ */ function(ListrRendererSelection$1) {
	ListrRendererSelection$1["PRIMARY"] = "PRIMARY";
	ListrRendererSelection$1["SECONDARY"] = "SECONDARY";
	ListrRendererSelection$1["SILENT"] = "SILENT";
	return ListrRendererSelection$1;
}({});

//#endregion
//#region src/constants/listr-task-events.constants.ts
/**
* Internal events that are fired from the Task.
*
* @see {@link https://listr2.kilic.dev/task/events.html}
*/
let ListrTaskEventType = /* @__PURE__ */ function(ListrTaskEventType$1) {
	/** Title has changed for the current Task. */
	ListrTaskEventType$1["TITLE"] = "TITLE";
	/**
	* State has changed for the current Task.
	*
	* @see {@link module:listr2.ListrTaskState}
	*/
	ListrTaskEventType$1["STATE"] = "STATE";
	/** The current Task has been marked as enabled. */
	ListrTaskEventType$1["ENABLED"] = "ENABLED";
	/** The current Task is currently processing subtasks. */
	ListrTaskEventType$1["SUBTASK"] = "SUBTASK";
	/** The current Task is now processing a prompt. */
	ListrTaskEventType$1["PROMPT"] = "PROMPT";
	/** The current Task is now dumping output. */
	ListrTaskEventType$1["OUTPUT"] = "OUTPUT";
	/**
	* The current Task is now dumping a message.
	*
	* @see {module:Listr2.ListrTaskMessage}
	*/
	ListrTaskEventType$1["MESSAGE"] = "MESSAGE";
	/** The current Task is closed and no further action in expected. */
	ListrTaskEventType$1["CLOSED"] = "CLOSED";
	return ListrTaskEventType$1;
}({});

//#endregion
//#region src/constants/listr-task-state.constants.ts
/**
* Tasks can be in various states during the execution.
*
* Whenever a state change occurs, the task will emit a {@link module:listr2.ListrTaskEventType.STATE} with the appropriate state.
*/
let ListrTaskState = /* @__PURE__ */ function(ListrTaskState$1) {
	/** Task has not started yet, waiting for pick-up. */
	ListrTaskState$1["WAITING"] = "WAITING";
	/** Task has started. */
	ListrTaskState$1["STARTED"] = "STARTED";
	/** Task has been completed. */
	ListrTaskState$1["COMPLETED"] = "COMPLETED";
	/** Task has failed. */
	ListrTaskState$1["FAILED"] = "FAILED";
	/** Task has been skipped. */
	ListrTaskState$1["SKIPPED"] = "SKIPPED";
	/** Task is currently trying to rollback. */
	ListrTaskState$1["ROLLING_BACK"] = "ROLLING_BACK";
	/** Task has rolledback successfully after failing. */
	ListrTaskState$1["ROLLED_BACK"] = "ROLLED_BACK";
	/** Task is currently retrying. */
	ListrTaskState$1["RETRY"] = "RETRY";
	/** Task is currently paused. */
	ListrTaskState$1["PAUSED"] = "PAUSED";
	/** Task is currently trying to process a prompt. */
	ListrTaskState$1["PROMPT"] = "PROMPT";
	/** Task has successfully processed the prompt. */
	ListrTaskState$1["PROMPT_COMPLETED"] = "PROMPT_COMPLETED";
	/** Task has failed to process the prompt. */
	ListrTaskState$1["PROMPT_FAILED"] = "PROMPT_FAILED";
	return ListrTaskState$1;
}({});

//#endregion
//#region src/lib/event-manager.ts
var EventManager = class {
	emitter = new eventemitter3.default();
	emit(dispatch, args) {
		this.emitter.emit(dispatch, args);
	}
	on(dispatch, handler) {
		this.emitter.addListener(dispatch, handler);
	}
	once(dispatch, handler) {
		this.emitter.once(dispatch, handler);
	}
	off(dispatch, handler) {
		this.emitter.off(dispatch, handler);
	}
	complete() {
		this.emitter.removeAllListeners();
	}
};

//#endregion
//#region src/interfaces/event.interface.ts
/**
* Give event map a set of indexes to not make it go crazy when some events are missing from it.
* They are optional after all.
*/
var BaseEventMap = class {};

//#endregion
//#region src/utils/environment/is-observable.ts
/**
* Tests to see if the object is an RxJS {@link Observable}
* @param obj the object to test
*/
function isObservable(obj) {
	return !!obj && typeof obj === "object" && typeof obj.subscribe === "function";
}

//#endregion
//#region src/utils/environment/is-readable.ts
/**
* Tests to see if the object is an Readable or NodeJS.ReadableStream {@link Readable, NodeJS.ReadableStream}
* @param obj the object to test
*/
function isReadable(obj) {
	return !!obj && typeof obj === "object" && obj.readable === true && typeof obj.read === "function" && typeof obj.on === "function";
}

//#endregion
//#region src/utils/environment/is-unicode-supported.ts
function isUnicodeSupported() {
	/* istanbul ignore next */
	return !!process.env[ListrEnvironmentVariables.FORCE_UNICODE] || process.platform !== "win32" || !!process.env.CI || !!process.env.WT_SESSION || process.env.TERM_PROGRAM === "vscode" || process.env.TERM === "xterm-256color" || process.env.TERM === "alacritty";
}

//#endregion
//#region src/utils/format/cleanse-ansi.constants.ts
const CLEAR_LINE_REGEX = "(?:\\u001b|\\u009b)\\[[\\=><~/#&.:=?%@~_-]*[0-9]*[\\a-ln-tqyz=><~/#&.:=?%@~_-]+";
const BELL_REGEX = /\u0007/;

//#endregion
//#region src/utils/format/cleanse-ansi.ts
function cleanseAnsi(chunk) {
	return String(chunk).replace(new RegExp(CLEAR_LINE_REGEX, "gmi"), "").replace(new RegExp(BELL_REGEX, "gmi"), "").trim();
}

//#endregion
//#region src/utils/format/color.ts
/**
* Creates color palette through underlying dependency of `colorette`.
*
* @see {@link https://www.npmjs.com/package/colorette}
*/
const color = (0, colorette.createColors)();

//#endregion
//#region src/utils/format/indent.ts
function indent(string, count) {
	return string.replace(/^(?!\s*$)/gm, " ".repeat(count));
}

//#endregion
//#region src/utils/format/figures.ts
const FIGURES_MAIN = {
	warning: "⚠",
	cross: "✖",
	arrowDown: "↓",
	tick: "✔",
	arrowRight: "→",
	pointer: "❯",
	checkboxOn: "☒",
	arrowLeft: "←",
	squareSmallFilled: "◼",
	pointerSmall: "›"
};
const FIGURES_FALLBACK = {
	...FIGURES_MAIN,
	warning: "‼",
	cross: "×",
	tick: "√",
	pointer: ">",
	checkboxOn: "[×]",
	squareSmallFilled: "■"
};
const figures = isUnicodeSupported() ? FIGURES_MAIN : FIGURES_FALLBACK;

//#endregion
//#region src/utils/format/splat.ts
function splat(message, ...splat$1) {
	return (0, util.format)(String(message), ...splat$1);
}

//#endregion
//#region src/utils/logger/logger.constants.ts
/** Default ListrLogLevels for the logger */
let ListrLogLevels = /* @__PURE__ */ function(ListrLogLevels$1) {
	ListrLogLevels$1["STARTED"] = "STARTED";
	ListrLogLevels$1["COMPLETED"] = "COMPLETED";
	ListrLogLevels$1["FAILED"] = "FAILED";
	ListrLogLevels$1["SKIPPED"] = "SKIPPED";
	ListrLogLevels$1["OUTPUT"] = "OUTPUT";
	ListrLogLevels$1["TITLE"] = "TITLE";
	ListrLogLevels$1["ROLLBACK"] = "ROLLBACK";
	ListrLogLevels$1["RETRY"] = "RETRY";
	ListrLogLevels$1["PROMPT"] = "PROMPT";
	ListrLogLevels$1["PAUSED"] = "PAUSED";
	return ListrLogLevels$1;
}({});
const LISTR_LOGGER_STYLE = {
	icon: {
		[ListrLogLevels.STARTED]: figures.pointer,
		[ListrLogLevels.FAILED]: figures.cross,
		[ListrLogLevels.SKIPPED]: figures.arrowDown,
		[ListrLogLevels.COMPLETED]: figures.tick,
		[ListrLogLevels.OUTPUT]: figures.pointerSmall,
		[ListrLogLevels.TITLE]: figures.arrowRight,
		[ListrLogLevels.RETRY]: figures.warning,
		[ListrLogLevels.ROLLBACK]: figures.arrowLeft,
		[ListrLogLevels.PAUSED]: figures.squareSmallFilled
	},
	color: {
		[ListrLogLevels.STARTED]: color.yellow,
		[ListrLogLevels.FAILED]: color.red,
		[ListrLogLevels.SKIPPED]: color.yellow,
		[ListrLogLevels.COMPLETED]: color.green,
		[ListrLogLevels.RETRY]: color.yellowBright,
		[ListrLogLevels.ROLLBACK]: color.redBright,
		[ListrLogLevels.PAUSED]: color.yellowBright
	}
};
const LISTR_LOGGER_STDERR_LEVELS = [
	ListrLogLevels.RETRY,
	ListrLogLevels.ROLLBACK,
	ListrLogLevels.FAILED
];

//#endregion
//#region src/utils/logger/logger.ts
/**
* Creates a new Listr2 logger.
*
* This logger is used throughout the renderers for consistency.
*
* @see {@link https://listr2.kilic.dev/renderer/logger.html}
*/
var ListrLogger = class {
	process;
	constructor(options) {
		this.options = options;
		this.options = {
			useIcons: true,
			toStderr: [],
			...options ?? {}
		};
		this.options.fields ??= {};
		this.options.fields.prefix ??= [];
		this.options.fields.suffix ??= [];
		this.process = this.options.processOutput ?? new ProcessOutput();
	}
	log(level, message, options) {
		const output = this.format(level, message, options);
		if (this.options.toStderr.includes(level)) {
			this.process.toStderr(output);
			return;
		}
		this.process.toStdout(output);
	}
	toStdout(message, options, eol = true) {
		this.process.toStdout(this.format(null, message, options), eol);
	}
	toStderr(message, options, eol = true) {
		this.process.toStderr(this.format(null, message, options), eol);
	}
	wrap(message, options) {
		if (!message) return message;
		return this.applyFormat(`[${message}]`, options);
	}
	splat(...args) {
		const message = args.shift() ?? "";
		return args.length === 0 ? message : splat(message, args);
	}
	suffix(message, ...suffixes) {
		suffixes.filter(Boolean).forEach((suffix) => {
			message += this.spacing(message);
			if (typeof suffix === "string") message += this.wrap(suffix);
			else if (typeof suffix === "object") {
				suffix.args ??= [];
				if (typeof suffix.condition === "function" ? !suffix.condition(...suffix.args) : !(suffix.condition ?? true)) return message;
				message += this.wrap(typeof suffix.field === "function" ? suffix.field(...suffix.args) : suffix.field, { format: suffix?.format(...suffix.args) });
			}
		});
		return message;
	}
	prefix(message, ...prefixes) {
		prefixes.filter(Boolean).forEach((prefix) => {
			message = this.spacing(message) + message;
			if (typeof prefix === "string") message = this.wrap(prefix) + message;
			else if (typeof prefix === "object") {
				prefix.args ??= [];
				if (typeof prefix.condition === "function" ? !prefix.condition(...prefix.args) : !(prefix.condition ?? true)) return message;
				message = this.wrap(typeof prefix.field === "function" ? prefix.field(...prefix.args) : prefix.field, { format: prefix?.format() }) + message;
			}
		});
		return message;
	}
	fields(message, options) {
		if (this.options?.fields?.prefix) message = this.prefix(message, ...this.options.fields.prefix);
		if (options?.prefix) message = this.prefix(message, ...options.prefix);
		if (options?.suffix) message = this.suffix(message, ...options.suffix);
		if (this.options?.fields?.suffix) message = this.suffix(message, ...this.options.fields.suffix);
		return message;
	}
	icon(level, icon) {
		if (!level) return null;
		if (!icon) {
			const i = this.options.icon?.[level];
			icon = typeof i === "function" ? i() : i;
		}
		const coloring = this.options.color?.[level];
		if (icon && coloring) icon = coloring(icon);
		return icon;
	}
	format(level, message, options) {
		if (!Array.isArray(message)) message = [message];
		message = this.splat(message.shift(), ...message).toString().split(os.EOL).filter((m) => !m || m.trim() !== "").map((m) => {
			return this.style(level, this.fields(m, {
				prefix: Array.isArray(options?.prefix) ? options.prefix : [options?.prefix],
				suffix: Array.isArray(options?.suffix) ? options.suffix : [options?.suffix]
			}));
		}).join(os.EOL);
		return message;
	}
	style(level, message) {
		if (!level || !message) return message;
		const icon = this.icon(level, !this.options.useIcons && this.wrap(level));
		if (icon) message = icon + " " + message;
		return message;
	}
	applyFormat(message, options) {
		if (options?.format) return options.format(message);
		return message;
	}
	spacing(message) {
		return typeof message === "undefined" || message.trim() === "" ? "" : " ";
	}
};

//#endregion
//#region src/utils/process-output/process-output-buffer.ts
var ProcessOutputBuffer = class {
	buffer = [];
	decoder = new string_decoder.StringDecoder();
	constructor(options) {
		this.options = options;
	}
	get all() {
		return this.buffer;
	}
	get last() {
		return this.buffer.at(-1);
	}
	get length() {
		return this.buffer.length;
	}
	write(data, ...args) {
		const callback = args[args.length - 1];
		this.buffer.push({
			time: Date.now(),
			stream: this.options?.stream,
			entry: this.decoder.write(typeof data === "string" ? Buffer.from(data, typeof args[0] === "string" ? args[0] : void 0) : Buffer.from(data))
		});
		if (this.options?.limit) this.buffer = this.buffer.slice(-this.options.limit);
		if (typeof callback === "function") callback();
		return true;
	}
	reset() {
		this.buffer = [];
	}
};

//#endregion
//#region src/utils/process-output/process-output-stream.ts
var ProcessOutputStream = class {
	method;
	buffer;
	constructor(stream$1) {
		this.stream = stream$1;
		this.method = stream$1.write;
		this.buffer = new ProcessOutputBuffer({ stream: stream$1 });
	}
	get out() {
		return Object.assign({}, this.stream, { write: this.write.bind(this) });
	}
	hijack() {
		this.stream.write = this.buffer.write.bind(this.buffer);
	}
	release() {
		this.stream.write = this.method;
		const buffer = [...this.buffer.all];
		this.buffer.reset();
		return buffer;
	}
	write(...args) {
		return this.method.apply(this.stream, args);
	}
};

//#endregion
//#region src/utils/process-output/process-output.ts
/**
* Creates a new Listr2 process-output controller.
*
* This is used to control the flow to `process.stdout` and `process.stderr` for all renderers.
*
* @see {@link https://listr2.kilic.dev/renderer/process-output.html}
*/
var ProcessOutput = class {
	stream;
	active;
	constructor(stdout, stderr, options) {
		this.options = options;
		this.stream = {
			stdout: new ProcessOutputStream(stdout ?? process.stdout),
			stderr: new ProcessOutputStream(stderr ?? process.stderr)
		};
		this.options = {
			dump: ["stdout", "stderr"],
			leaveEmptyLine: true,
			...options
		};
	}
	get stdout() {
		return this.stream.stdout.out;
	}
	get stderr() {
		return this.stream.stderr.out;
	}
	hijack() {
		if (this.active) throw new Error("ProcessOutput has been already hijacked!");
		this.stream.stdout.write(ANSI_ESCAPE_CODES.CURSOR_HIDE);
		Object.values(this.stream).forEach((stream$1) => stream$1.hijack());
		this.active = true;
	}
	release() {
		const output = Object.entries(this.stream).map(([name, stream$1]) => ({
			name,
			buffer: stream$1.release()
		})).filter((output$1) => this.options.dump.includes(output$1.name)).flatMap((output$1) => output$1.buffer).sort((a, b) => a.time - b.time).map((message) => {
			return {
				...message,
				entry: cleanseAnsi(message.entry)
			};
		}).filter((message) => message.entry);
		if (output.length > 0) {
			if (this.options.leaveEmptyLine) this.stdout.write(os.EOL);
			output.forEach((message) => {
				(message.stream ?? this.stdout).write(message.entry + os.EOL);
			});
		}
		this.stream.stdout.write(ANSI_ESCAPE_CODES.CURSOR_SHOW);
		this.active = false;
	}
	toStdout(buffer, eol = true) {
		if (eol) buffer = buffer + os.EOL;
		return this.stream.stdout.write(buffer);
	}
	toStderr(buffer, eol = true) {
		if (eol) buffer = buffer + os.EOL;
		return this.stream.stderr.write(buffer);
	}
};

//#endregion
//#region src/utils/process-output/writable.ts
/* istanbul ignore next */
function createWritable(cb) {
	const writable = new stream.Writable();
	writable.rows = Infinity;
	writable.columns = Infinity;
	writable.write = (chunk) => {
		cb(chunk.toString());
		return true;
	};
	return writable;
}

//#endregion
//#region src/utils/prompts/adapter.ts
/* istanbul ignore next */
var ListrPromptAdapter = class {
	state;
	constructor(task, wrapper) {
		this.task = task;
		this.wrapper = wrapper;
	}
	reportStarted() {
		this.state = this.task.state;
		if (this.task.prompt) throw new PromptError("There is already an active prompt attached to this task which may not be cleaned up properly.");
		this.task.prompt = this;
		this.task.state$ = ListrTaskState.PROMPT;
	}
	reportFailed() {
		this.task.state$ = ListrTaskState.PROMPT_FAILED;
		this.restoreState();
	}
	reportCompleted() {
		this.task.state$ = ListrTaskState.PROMPT_COMPLETED;
		this.restoreState();
	}
	restoreState() {
		this.task.prompt = void 0;
		if (this.state) this.task.state = this.state;
	}
};

//#endregion
//#region src/utils/ui/spinner.ts
/* istanbul ignore next */
var Spinner = class {
	spinner = !isUnicodeSupported() ? [
		"-",
		"\\",
		"|",
		"/"
	] : [
		"⠋",
		"⠙",
		"⠹",
		"⠸",
		"⠼",
		"⠴",
		"⠦",
		"⠧",
		"⠇",
		"⠏"
	];
	id;
	spinnerPosition = 0;
	spin() {
		this.spinnerPosition = ++this.spinnerPosition % this.spinner.length;
	}
	fetch() {
		return this.spinner[this.spinnerPosition];
	}
	isRunning() {
		return !!this.id;
	}
	start(cb, interval = 100) {
		this.id = setInterval(() => {
			this.spin();
			if (cb) cb();
		}, interval);
	}
	stop() {
		clearInterval(this.id);
	}
};

//#endregion
//#region src/renderer/default/renderer.constants.ts
let ListrDefaultRendererLogLevels = /* @__PURE__ */ function(ListrDefaultRendererLogLevels$1) {
	ListrDefaultRendererLogLevels$1["SKIPPED_WITH_COLLAPSE"] = "SKIPPED_WITH_COLLAPSE";
	ListrDefaultRendererLogLevels$1["SKIPPED_WITHOUT_COLLAPSE"] = "SKIPPED_WITHOUT_COLLAPSE";
	ListrDefaultRendererLogLevels$1["OUTPUT"] = "OUTPUT";
	ListrDefaultRendererLogLevels$1["OUTPUT_WITH_BOTTOMBAR"] = "OUTPUT_WITH_BOTTOMBAR";
	ListrDefaultRendererLogLevels$1["PENDING"] = "PENDING";
	ListrDefaultRendererLogLevels$1["COMPLETED"] = "COMPLETED";
	ListrDefaultRendererLogLevels$1["COMPLETED_WITH_FAILED_SUBTASKS"] = "COMPLETED_WITH_FAILED_SUBTASKS";
	ListrDefaultRendererLogLevels$1["COMPLETED_WITH_FAILED_SISTER_TASKS"] = "COMPLETED_WITH_SISTER_TASKS_FAILED";
	ListrDefaultRendererLogLevels$1["RETRY"] = "RETRY";
	ListrDefaultRendererLogLevels$1["ROLLING_BACK"] = "ROLLING_BACK";
	ListrDefaultRendererLogLevels$1["ROLLED_BACK"] = "ROLLED_BACK";
	ListrDefaultRendererLogLevels$1["FAILED"] = "FAILED";
	ListrDefaultRendererLogLevels$1["FAILED_WITH_FAILED_SUBTASKS"] = "FAILED_WITH_SUBTASKS";
	ListrDefaultRendererLogLevels$1["WAITING"] = "WAITING";
	ListrDefaultRendererLogLevels$1["PAUSED"] = "PAUSED";
	return ListrDefaultRendererLogLevels$1;
}({});
const LISTR_DEFAULT_RENDERER_STYLE = {
	icon: {
		[ListrDefaultRendererLogLevels.SKIPPED_WITH_COLLAPSE]: figures.arrowDown,
		[ListrDefaultRendererLogLevels.SKIPPED_WITHOUT_COLLAPSE]: figures.warning,
		[ListrDefaultRendererLogLevels.OUTPUT]: figures.pointerSmall,
		[ListrDefaultRendererLogLevels.OUTPUT_WITH_BOTTOMBAR]: figures.pointerSmall,
		[ListrDefaultRendererLogLevels.PENDING]: figures.pointer,
		[ListrDefaultRendererLogLevels.COMPLETED]: figures.tick,
		[ListrDefaultRendererLogLevels.COMPLETED_WITH_FAILED_SUBTASKS]: figures.warning,
		[ListrDefaultRendererLogLevels.COMPLETED_WITH_FAILED_SISTER_TASKS]: figures.squareSmallFilled,
		[ListrDefaultRendererLogLevels.RETRY]: figures.warning,
		[ListrDefaultRendererLogLevels.ROLLING_BACK]: figures.warning,
		[ListrDefaultRendererLogLevels.ROLLED_BACK]: figures.arrowLeft,
		[ListrDefaultRendererLogLevels.FAILED]: figures.cross,
		[ListrDefaultRendererLogLevels.FAILED_WITH_FAILED_SUBTASKS]: figures.pointer,
		[ListrDefaultRendererLogLevels.WAITING]: figures.squareSmallFilled,
		[ListrDefaultRendererLogLevels.PAUSED]: figures.squareSmallFilled
	},
	color: {
		[ListrDefaultRendererLogLevels.SKIPPED_WITH_COLLAPSE]: color.yellow,
		[ListrDefaultRendererLogLevels.SKIPPED_WITHOUT_COLLAPSE]: color.yellow,
		[ListrDefaultRendererLogLevels.PENDING]: color.yellow,
		[ListrDefaultRendererLogLevels.COMPLETED]: color.green,
		[ListrDefaultRendererLogLevels.COMPLETED_WITH_FAILED_SUBTASKS]: color.yellow,
		[ListrDefaultRendererLogLevels.COMPLETED_WITH_FAILED_SISTER_TASKS]: color.red,
		[ListrDefaultRendererLogLevels.RETRY]: color.yellowBright,
		[ListrDefaultRendererLogLevels.ROLLING_BACK]: color.redBright,
		[ListrDefaultRendererLogLevels.ROLLED_BACK]: color.redBright,
		[ListrDefaultRendererLogLevels.FAILED]: color.red,
		[ListrDefaultRendererLogLevels.FAILED_WITH_FAILED_SUBTASKS]: color.red,
		[ListrDefaultRendererLogLevels.WAITING]: color.dim,
		[ListrDefaultRendererLogLevels.PAUSED]: color.yellowBright
	}
};

//#endregion
//#region src/presets/timer/parser.ts
/**
* A basic function to parse minutes and tasks passed given a duration.
* Useful for renderers to show the task time.
*/
/* istanbul ignore next */
function parseTimer(duration) {
	const seconds = Math.floor(duration / 1e3);
	const minutes = Math.floor(seconds / 60);
	let parsedTime;
	if (seconds === 0 && minutes === 0) parsedTime = `0.${Math.floor(duration / 100)}s`;
	if (seconds > 0) parsedTime = `${seconds % 60}s`;
	if (minutes > 0) parsedTime = `${minutes}m${parsedTime}`;
	return parsedTime;
}

//#endregion
//#region src/presets/timer/preset.ts
/* istanbul ignore next */
const PRESET_TIMER = {
	condition: true,
	field: parseTimer,
	format: () => color.dim
};

//#endregion
//#region src/presets/timestamp/parser.ts
/* istanbul ignore next */
function parseTimestamp() {
	const now = /* @__PURE__ */ new Date();
	return String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
}

//#endregion
//#region src/presets/timestamp/preset.ts
/* istanbul ignore next */
const PRESET_TIMESTAMP = {
	condition: true,
	field: parseTimestamp,
	format: () => color.dim
};

//#endregion
//#region src/renderer/default/renderer.ts
var DefaultRenderer = class DefaultRenderer {
	static nonTTY = false;
	static rendererOptions = {
		indentation: 2,
		clearOutput: false,
		showSubtasks: true,
		collapseSubtasks: true,
		collapseSkips: true,
		showSkipMessage: true,
		suffixSkips: false,
		collapseErrors: true,
		showErrorMessage: true,
		suffixRetries: true,
		lazy: false,
		removeEmptyLines: true,
		formatOutput: "wrap",
		pausedTimer: {
			...PRESET_TIMER,
			format: () => color.yellowBright
		}
	};
	static rendererTaskOptions = { outputBar: true };
	prompt;
	activePrompt;
	spinner;
	logger;
	updater;
	truncate;
	wrap;
	buffer = {
		output: /* @__PURE__ */ new Map(),
		bottom: /* @__PURE__ */ new Map()
	};
	cache = {
		render: /* @__PURE__ */ new Map(),
		rendererOptions: /* @__PURE__ */ new Map(),
		rendererTaskOptions: /* @__PURE__ */ new Map()
	};
	constructor(tasks, options, events) {
		this.tasks = tasks;
		this.options = options;
		this.events = events;
		this.options = {
			...DefaultRenderer.rendererOptions,
			...this.options,
			icon: {
				...LISTR_DEFAULT_RENDERER_STYLE.icon,
				...options?.icon ?? {}
			},
			color: {
				...LISTR_DEFAULT_RENDERER_STYLE.color,
				...options?.color ?? {}
			}
		};
		this.spinner = this.options.spinner ?? new Spinner();
		this.logger = this.options.logger ?? new ListrLogger({
			useIcons: true,
			toStderr: []
		});
		this.logger.options.icon = this.options.icon;
		this.logger.options.color = this.options.color;
	}
	async render() {
		const { createLogUpdate } = await import("log-update");
		const { default: truncate } = await import("cli-truncate");
		const { default: wrap } = await import("wrap-ansi");
		this.updater = createLogUpdate(this.logger.process.stdout);
		this.truncate = truncate;
		this.wrap = wrap;
		this.logger.process.hijack();
		/* istanbul ignore if */
		if (!this.options?.lazy) this.spinner.start(() => {
			this.update();
		});
		this.events.on(ListrEventType.SHOULD_REFRESH_RENDER, () => {
			this.update();
		});
	}
	update() {
		this.updater(this.create());
	}
	end() {
		this.spinner.stop();
		this.updater.clear();
		this.updater.done();
		if (!this.options.clearOutput) this.logger.process.toStdout(this.create({ prompt: false }));
		this.logger.process.release();
	}
	create(options) {
		options = {
			tasks: true,
			bottomBar: true,
			prompt: true,
			...options
		};
		const render = [];
		const renderTasks = this.renderer(this.tasks);
		const renderBottomBar = this.renderBottomBar();
		const renderPrompt = this.renderPrompt();
		if (options.tasks && renderTasks.length > 0) render.push(...renderTasks);
		if (options.bottomBar && renderBottomBar.length > 0) {
			if (render.length > 0) render.push("");
			render.push(...renderBottomBar);
		}
		if (options.prompt && renderPrompt.length > 0) {
			if (render.length > 0) render.push("");
			render.push(...renderPrompt);
		}
		return render.join(os.EOL);
	}
	style(task, output = false) {
		const rendererOptions = this.cache.rendererOptions.get(task.id);
		if (task.isSkipped()) {
			if (output || rendererOptions.collapseSkips) return this.logger.icon(ListrDefaultRendererLogLevels.SKIPPED_WITH_COLLAPSE);
			else if (rendererOptions.collapseSkips === false) return this.logger.icon(ListrDefaultRendererLogLevels.SKIPPED_WITHOUT_COLLAPSE);
		}
		if (output) {
			if (this.shouldOutputToBottomBar(task)) return this.logger.icon(ListrDefaultRendererLogLevels.OUTPUT_WITH_BOTTOMBAR);
			return this.logger.icon(ListrDefaultRendererLogLevels.OUTPUT);
		}
		if (task.hasSubtasks()) {
			if (task.isStarted() || task.isPrompt() && rendererOptions.showSubtasks !== false && !task.subtasks.every((subtask) => !subtask.hasTitle())) return this.logger.icon(ListrDefaultRendererLogLevels.PENDING);
			else if (task.isCompleted() && task.subtasks.some((subtask) => subtask.hasFailed())) return this.logger.icon(ListrDefaultRendererLogLevels.COMPLETED_WITH_FAILED_SUBTASKS);
			else if (task.hasFailed()) return this.logger.icon(ListrDefaultRendererLogLevels.FAILED_WITH_FAILED_SUBTASKS);
		}
		if (task.isStarted() || task.isPrompt()) return this.logger.icon(ListrDefaultRendererLogLevels.PENDING, !this.options?.lazy && this.spinner.fetch());
		else if (task.isCompleted()) return this.logger.icon(ListrDefaultRendererLogLevels.COMPLETED);
		else if (task.isRetrying()) return this.logger.icon(ListrDefaultRendererLogLevels.RETRY, !this.options?.lazy && this.spinner.fetch());
		else if (task.isRollingBack()) return this.logger.icon(ListrDefaultRendererLogLevels.ROLLING_BACK, !this.options?.lazy && this.spinner.fetch());
		else if (task.hasRolledBack()) return this.logger.icon(ListrDefaultRendererLogLevels.ROLLED_BACK);
		else if (task.hasFailed()) return this.logger.icon(ListrDefaultRendererLogLevels.FAILED);
		else if (task.isPaused()) return this.logger.icon(ListrDefaultRendererLogLevels.PAUSED);
		return this.logger.icon(ListrDefaultRendererLogLevels.WAITING);
	}
	format(message, icon, level) {
		if (message.trim() === "") return [];
		if (icon) message = icon + " " + message;
		let parsed;
		const columns = (process.stdout.columns ?? 80) - level * this.options.indentation - 2;
		switch (this.options.formatOutput) {
			case "truncate":
				parsed = message.split(os.EOL).map((s, i) => {
					return this.truncate(this.indent(s, i), columns);
				});
				break;
			case "wrap":
				parsed = this.wrap(message, columns, {
					hard: true,
					trim: false
				}).split(os.EOL).map((s, i) => this.indent(s, i));
				break;
			default: throw new ListrRendererError("Format option for the renderer is wrong.");
		}
		if (this.options.removeEmptyLines) parsed = parsed.filter(Boolean);
		return parsed.map((str) => indent(str, level * this.options.indentation));
	}
	shouldOutputToOutputBar(task) {
		const outputBar = this.cache.rendererTaskOptions.get(task.id).outputBar;
		return typeof outputBar === "number" && outputBar !== 0 || typeof outputBar === "boolean" && outputBar !== false;
	}
	shouldOutputToBottomBar(task) {
		const bottomBar = this.cache.rendererTaskOptions.get(task.id).bottomBar;
		return typeof bottomBar === "number" && bottomBar !== 0 || typeof bottomBar === "boolean" && bottomBar !== false || !task.hasTitle();
	}
	renderer(tasks, level = 0) {
		return tasks.flatMap((task) => {
			if (!task.isEnabled()) return [];
			if (this.cache.render.has(task.id)) return this.cache.render.get(task.id);
			this.calculate(task);
			this.setupBuffer(task);
			const rendererOptions = this.cache.rendererOptions.get(task.id);
			const rendererTaskOptions = this.cache.rendererTaskOptions.get(task.id);
			const output = [];
			if (task.isPrompt()) {
				if (this.activePrompt && this.activePrompt !== task.id) throw new ListrRendererError("Only one prompt can be active at the given time, please re-evaluate your task design.");
				else if (!this.activePrompt) {
					task.on(ListrTaskEventType.PROMPT, (prompt) => {
						const cleansed = cleanseAnsi(prompt);
						if (cleansed) this.prompt = cleansed;
					});
					task.on(ListrTaskEventType.STATE, (state) => {
						if (state === ListrTaskState.PROMPT_COMPLETED || task.hasFinalized() || task.hasReset()) {
							this.prompt = null;
							this.activePrompt = null;
							task.off(ListrTaskEventType.PROMPT);
						}
					});
					this.activePrompt = task.id;
				}
			}
			if (task.hasTitle()) if (!(tasks.some((task$1) => task$1.hasFailed()) && !task.hasFailed() && task.options.exitOnError !== false && !(task.isCompleted() || task.isSkipped()))) if (task.hasFailed() && rendererOptions.collapseErrors) output.push(...this.format(!task.hasSubtasks() && task.message.error && rendererOptions.showErrorMessage ? task.message.error : task.title, this.style(task), level));
			else if (task.isSkipped() && rendererOptions.collapseSkips) output.push(...this.format(this.logger.suffix(task.message.skip && rendererOptions.showSkipMessage ? task.message.skip : task.title, {
				field: ListrLogLevels.SKIPPED,
				condition: rendererOptions.suffixSkips,
				format: () => color.dim
			}), this.style(task), level));
			else if (task.isRetrying()) output.push(...this.format(this.logger.suffix(task.title, {
				field: `${ListrLogLevels.RETRY}:${task.message.retry.count}`,
				format: () => color.yellow,
				condition: rendererOptions.suffixRetries
			}), this.style(task), level));
			else if (task.isCompleted() && task.hasTitle() && assertFunctionOrSelf(rendererTaskOptions.timer?.condition, task.message.duration)) output.push(...this.format(this.logger.suffix(task?.title, {
				...rendererTaskOptions.timer,
				args: [task.message.duration]
			}), this.style(task), level));
			else if (task.isPaused()) output.push(...this.format(this.logger.suffix(task.title, {
				...rendererOptions.pausedTimer,
				args: [task.message.paused - Date.now()]
			}), this.style(task), level));
			else output.push(...this.format(task.title, this.style(task), level));
			else output.push(...this.format(task.title, this.logger.icon(ListrDefaultRendererLogLevels.COMPLETED_WITH_FAILED_SISTER_TASKS), level));
			if (!task.hasSubtasks() || !rendererOptions.showSubtasks) {
				if (task.hasFailed() && rendererOptions.collapseErrors === false && (rendererOptions.showErrorMessage || !rendererOptions.showSubtasks)) output.push(...this.dump(task, level, ListrLogLevels.FAILED));
				else if (task.isSkipped() && rendererOptions.collapseSkips === false && (rendererOptions.showSkipMessage || !rendererOptions.showSubtasks)) output.push(...this.dump(task, level, ListrLogLevels.SKIPPED));
			}
			if (task.isPending() || rendererTaskOptions.persistentOutput) output.push(...this.renderOutputBar(task, level));
			if (rendererOptions.showSubtasks !== false && task.hasSubtasks() && (task.isPending() || task.hasFinalized() && !task.hasTitle() || task.isCompleted() && rendererOptions.collapseSubtasks === false && !task.subtasks.some((subtask) => this.cache.rendererOptions.get(subtask.id)?.collapseSubtasks === true) || task.subtasks.some((subtask) => this.cache.rendererOptions.get(subtask.id)?.collapseSubtasks === false) || task.subtasks.some((subtask) => subtask.hasFailed()) || task.subtasks.some((subtask) => subtask.hasRolledBack()))) {
				const subtaskLevel = !task.hasTitle() ? level : level + 1;
				const subtaskRender = this.renderer(task.subtasks, subtaskLevel);
				output.push(...subtaskRender);
			}
			if (task.hasFinalized()) {
				if (!rendererTaskOptions.persistentOutput) {
					this.buffer.bottom.delete(task.id);
					this.buffer.output.delete(task.id);
				}
			}
			if (task.isClosed()) {
				this.cache.render.set(task.id, output);
				this.reset(task);
			}
			return output;
		});
	}
	renderOutputBar(task, level) {
		const output = this.buffer.output.get(task.id);
		if (!output) return [];
		return output.all.flatMap((o) => this.dump(task, level, ListrLogLevels.OUTPUT, o.entry));
	}
	renderBottomBar() {
		if (this.buffer.bottom.size === 0) return [];
		return Array.from(this.buffer.bottom.values()).flatMap((output) => output.all).sort((a, b) => a.time - b.time).map((output) => output.entry);
	}
	renderPrompt() {
		if (!this.prompt) return [];
		return [this.prompt];
	}
	calculate(task) {
		if (this.cache.rendererOptions.has(task.id) && this.cache.rendererTaskOptions.has(task.id)) return;
		const rendererOptions = {
			...this.options,
			...task.rendererOptions
		};
		this.cache.rendererOptions.set(task.id, rendererOptions);
		this.cache.rendererTaskOptions.set(task.id, {
			...DefaultRenderer.rendererTaskOptions,
			timer: rendererOptions.timer,
			...task.rendererTaskOptions
		});
	}
	setupBuffer(task) {
		if (this.buffer.bottom.has(task.id) || this.buffer.output.has(task.id)) return;
		const rendererTaskOptions = this.cache.rendererTaskOptions.get(task.id);
		if (this.shouldOutputToBottomBar(task) && !this.buffer.bottom.has(task.id)) {
			this.buffer.bottom.set(task.id, new ProcessOutputBuffer({ limit: typeof rendererTaskOptions.bottomBar === "number" ? rendererTaskOptions.bottomBar : 1 }));
			task.on(ListrTaskEventType.OUTPUT, (output) => {
				const data = this.dump(task, -1, ListrLogLevels.OUTPUT, output);
				this.buffer.bottom.get(task.id).write(data.join(os.EOL));
			});
			task.on(ListrTaskEventType.STATE, (state) => {
				switch (state) {
					case ListrTaskState.RETRY || ListrTaskState.ROLLING_BACK:
						this.buffer.bottom.delete(task.id);
						break;
				}
			});
		} else if (this.shouldOutputToOutputBar(task) && !this.buffer.output.has(task.id)) {
			this.buffer.output.set(task.id, new ProcessOutputBuffer({ limit: typeof rendererTaskOptions.outputBar === "number" ? rendererTaskOptions.outputBar : 1 }));
			task.on(ListrTaskEventType.OUTPUT, (output) => {
				this.buffer.output.get(task.id).write(output);
			});
			task.on(ListrTaskEventType.STATE, (state) => {
				switch (state) {
					case ListrTaskState.RETRY || ListrTaskState.ROLLING_BACK:
						this.buffer.output.delete(task.id);
						break;
				}
			});
		}
	}
	reset(task) {
		this.cache.rendererOptions.delete(task.id);
		this.cache.rendererTaskOptions.delete(task.id);
		this.buffer.output.delete(task.id);
	}
	dump(task, level, source = ListrLogLevels.OUTPUT, data) {
		if (!data) switch (source) {
			case ListrLogLevels.OUTPUT:
				data = task.output;
				break;
			case ListrLogLevels.SKIPPED:
				data = task.message.skip;
				break;
			case ListrLogLevels.FAILED:
				data = task.message.error;
				break;
		}
		if (task.hasTitle() && source === ListrLogLevels.FAILED && data === task.title || typeof data !== "string") return [];
		if (source === ListrLogLevels.OUTPUT) data = cleanseAnsi(data);
		return this.format(data, this.style(task, true), level + 1);
	}
	indent(str, i) {
		return i > 0 ? indent(str.trimEnd(), this.options.indentation) : str.trimEnd();
	}
};

//#endregion
//#region src/renderer/silent/renderer.ts
var SilentRenderer = class {
	static nonTTY = true;
	static rendererOptions;
	static rendererTaskOptions;
	constructor(tasks, options) {
		this.tasks = tasks;
		this.options = options;
	}
	render() {}
	end() {}
};

//#endregion
//#region src/renderer/simple/renderer.ts
var SimpleRenderer = class SimpleRenderer {
	static nonTTY = true;
	static rendererOptions = { pausedTimer: {
		...PRESET_TIMER,
		field: (time) => `${ListrLogLevels.PAUSED}:${time}`,
		format: () => color.yellowBright
	} };
	static rendererTaskOptions = {};
	logger;
	cache = {
		rendererOptions: /* @__PURE__ */ new Map(),
		rendererTaskOptions: /* @__PURE__ */ new Map()
	};
	constructor(tasks, options) {
		this.tasks = tasks;
		this.options = options;
		this.options = {
			...SimpleRenderer.rendererOptions,
			...options,
			icon: {
				...LISTR_LOGGER_STYLE.icon,
				...options?.icon ?? {}
			},
			color: {
				...LISTR_LOGGER_STYLE.color,
				...options?.color ?? {}
			}
		};
		this.logger = this.options.logger ?? new ListrLogger({
			useIcons: true,
			toStderr: LISTR_LOGGER_STDERR_LEVELS
		});
		this.logger.options.icon = this.options.icon;
		this.logger.options.color = this.options.color;
		if (this.options.timestamp) this.logger.options.fields.prefix.unshift(this.options.timestamp);
	}
	end() {}
	render() {
		this.renderer(this.tasks);
	}
	renderer(tasks) {
		tasks.forEach((task) => {
			this.calculate(task);
			task.once(ListrTaskEventType.CLOSED, () => {
				this.reset(task);
			});
			const rendererOptions = this.cache.rendererOptions.get(task.id);
			const rendererTaskOptions = this.cache.rendererTaskOptions.get(task.id);
			task.on(ListrTaskEventType.SUBTASK, (subtasks) => {
				this.renderer(subtasks);
			});
			task.on(ListrTaskEventType.STATE, (state) => {
				if (!task.hasTitle()) return;
				if (state === ListrTaskState.STARTED) this.logger.log(ListrLogLevels.STARTED, task.title);
				else if (state === ListrTaskState.COMPLETED) {
					const timer = rendererTaskOptions?.timer;
					this.logger.log(ListrLogLevels.COMPLETED, task.title, timer && { suffix: {
						...timer,
						condition: !!task.message?.duration && timer.condition,
						args: [task.message.duration]
					} });
				} else if (state === ListrTaskState.PROMPT) {
					this.logger.process.hijack();
					task.on(ListrTaskEventType.PROMPT, (prompt) => {
						this.logger.process.toStderr(prompt, false);
					});
				} else if (state === ListrTaskState.PROMPT_COMPLETED) {
					task.off(ListrTaskEventType.PROMPT);
					this.logger.process.release();
				}
			});
			task.on(ListrTaskEventType.OUTPUT, (output) => {
				this.logger.log(ListrLogLevels.OUTPUT, output);
			});
			task.on(ListrTaskEventType.MESSAGE, (message) => {
				if (message.error) this.logger.log(ListrLogLevels.FAILED, task.title, { suffix: {
					field: `${ListrLogLevels.FAILED}: ${message.error}`,
					format: () => color.red
				} });
				else if (message.skip) this.logger.log(ListrLogLevels.SKIPPED, task.title, { suffix: {
					field: `${ListrLogLevels.SKIPPED}: ${message.skip}`,
					format: () => color.yellow
				} });
				else if (message.rollback) this.logger.log(ListrLogLevels.ROLLBACK, task.title, { suffix: {
					field: `${ListrLogLevels.ROLLBACK}: ${message.rollback}`,
					format: () => color.red
				} });
				else if (message.retry) this.logger.log(ListrLogLevels.RETRY, task.title, { suffix: {
					field: `${ListrLogLevels.RETRY}:${message.retry.count}`,
					format: () => color.red
				} });
				else if (message.paused) {
					const timer = rendererOptions?.pausedTimer;
					this.logger.log(ListrLogLevels.PAUSED, task.title, timer && { suffix: {
						...timer,
						condition: !!message?.paused && timer.condition,
						args: [message.paused - Date.now()]
					} });
				}
			});
		});
	}
	calculate(task) {
		if (this.cache.rendererOptions.has(task.id) && this.cache.rendererTaskOptions.has(task.id)) return;
		const rendererOptions = {
			...this.options,
			...task.rendererOptions
		};
		this.cache.rendererOptions.set(task.id, rendererOptions);
		this.cache.rendererTaskOptions.set(task.id, {
			...SimpleRenderer.rendererTaskOptions,
			timer: rendererOptions.timer,
			...task.rendererTaskOptions
		});
	}
	reset(task) {
		this.cache.rendererOptions.delete(task.id);
		this.cache.rendererTaskOptions.delete(task.id);
	}
};

//#endregion
//#region src/renderer/test/serializer.ts
var TestRendererSerializer = class {
	constructor(options) {
		this.options = options;
	}
	serialize(event, data, task) {
		return JSON.stringify(this.generate(event, data, task));
	}
	generate(event, data, task) {
		const output = {
			event,
			data
		};
		if (typeof this.options?.task !== "boolean") {
			const t = Object.fromEntries(this.options.task.map((entity) => {
				const property = task[entity];
				if (typeof property === "function") return [entity, property.call(task)];
				return [entity, property];
			}));
			if (Object.keys(task).length > 0) output.task = t;
		}
		return output;
	}
};

//#endregion
//#region src/renderer/test/renderer.ts
var TestRenderer = class TestRenderer {
	static nonTTY = true;
	static rendererOptions = {
		subtasks: true,
		state: Object.values(ListrTaskState),
		output: true,
		prompt: true,
		title: true,
		messages: [
			"skip",
			"error",
			"retry",
			"rollback",
			"paused"
		],
		messagesToStderr: [
			"error",
			"rollback",
			"retry"
		],
		task: [
			"hasRolledBack",
			"isRollingBack",
			"isCompleted",
			"isSkipped",
			"hasFinalized",
			"hasSubtasks",
			"title",
			"hasReset",
			"hasTitle",
			"isPrompt",
			"isPaused",
			"isPending",
			"isSkipped",
			"isStarted",
			"hasFailed",
			"isEnabled",
			"isRetrying",
			"path"
		]
	};
	static rendererTaskOptions;
	logger;
	serializer;
	constructor(tasks, options) {
		this.tasks = tasks;
		this.options = options;
		this.options = {
			...TestRenderer.rendererOptions,
			...this.options
		};
		this.logger = this.options.logger ?? new ListrLogger({ useIcons: false });
		this.serializer = new TestRendererSerializer(this.options);
	}
	render() {
		this.renderer(this.tasks);
	}
	end() {}
	renderer(tasks) {
		tasks.forEach((task) => {
			if (this.options.subtasks) task.on(ListrTaskEventType.SUBTASK, (subtasks) => {
				this.renderer(subtasks);
			});
			if (this.options.state) task.on(ListrTaskEventType.STATE, (state) => {
				this.logger.toStdout(this.serializer.serialize(ListrTaskEventType.STATE, state, task));
			});
			if (this.options.output) task.on(ListrTaskEventType.OUTPUT, (data) => {
				this.logger.toStdout(this.serializer.serialize(ListrTaskEventType.OUTPUT, data, task));
			});
			if (this.options.prompt) task.on(ListrTaskEventType.PROMPT, (prompt) => {
				this.logger.toStdout(this.serializer.serialize(ListrTaskEventType.PROMPT, prompt, task));
			});
			if (this.options.title) task.on(ListrTaskEventType.TITLE, (title) => {
				this.logger.toStdout(this.serializer.serialize(ListrTaskEventType.TITLE, title, task));
			});
			task.on(ListrTaskEventType.MESSAGE, (message) => {
				const parsed = Object.fromEntries(Object.entries(message).map(([key, value]) => {
					if (this.options.messages.includes(key)) return [key, value];
				}).filter(Boolean));
				if (Object.keys(parsed).length > 0) {
					const output = this.serializer.serialize(ListrTaskEventType.MESSAGE, parsed, task);
					if (this.options.messagesToStderr.some((state) => Object.keys(parsed).includes(state))) this.logger.toStderr(output);
					else this.logger.toStdout(output);
				}
			});
		});
	}
};

//#endregion
//#region src/renderer/verbose/renderer.ts
var VerboseRenderer = class VerboseRenderer {
	static nonTTY = true;
	static rendererOptions = {
		logTitleChange: false,
		pausedTimer: {
			...PRESET_TIMER,
			format: () => color.yellowBright
		}
	};
	static rendererTaskOptions;
	logger;
	cache = {
		rendererOptions: /* @__PURE__ */ new Map(),
		rendererTaskOptions: /* @__PURE__ */ new Map()
	};
	constructor(tasks, options) {
		this.tasks = tasks;
		this.options = options;
		this.options = {
			...VerboseRenderer.rendererOptions,
			...this.options,
			icon: {
				...LISTR_LOGGER_STYLE.icon,
				...options?.icon ?? {}
			},
			color: {
				...LISTR_LOGGER_STYLE.color,
				...options?.color ?? {}
			}
		};
		this.logger = this.options.logger ?? new ListrLogger({
			useIcons: false,
			toStderr: LISTR_LOGGER_STDERR_LEVELS
		});
		this.logger.options.icon = this.options.icon;
		this.logger.options.color = this.options.color;
		if (this.options.timestamp) this.logger.options.fields.prefix.unshift(this.options.timestamp);
	}
	render() {
		this.renderer(this.tasks);
	}
	end() {}
	renderer(tasks) {
		tasks.forEach((task) => {
			this.calculate(task);
			task.once(ListrTaskEventType.CLOSED, () => {
				this.reset(task);
			});
			const rendererOptions = this.cache.rendererOptions.get(task.id);
			const rendererTaskOptions = this.cache.rendererTaskOptions.get(task.id);
			task.on(ListrTaskEventType.SUBTASK, (subtasks) => {
				this.renderer(subtasks);
			});
			task.on(ListrTaskEventType.STATE, (state) => {
				if (!task.hasTitle()) return;
				if (state === ListrTaskState.STARTED) this.logger.log(ListrLogLevels.STARTED, task.title);
				else if (state === ListrTaskState.COMPLETED) {
					const timer = rendererTaskOptions.timer;
					this.logger.log(ListrLogLevels.COMPLETED, task.title, timer && { suffix: {
						...timer,
						condition: !!task.message?.duration && timer.condition,
						args: [task.message.duration]
					} });
				}
			});
			task.on(ListrTaskEventType.OUTPUT, (data) => {
				this.logger.log(ListrLogLevels.OUTPUT, data);
			});
			task.on(ListrTaskEventType.PROMPT, (prompt) => {
				const cleansed = cleanseAnsi(prompt);
				if (cleansed) this.logger.log(ListrLogLevels.PROMPT, cleansed);
			});
			if (this.options?.logTitleChange !== false) task.on(ListrTaskEventType.TITLE, (title) => {
				this.logger.log(ListrLogLevels.TITLE, title);
			});
			task.on(ListrTaskEventType.MESSAGE, (message) => {
				if (message?.error) this.logger.log(ListrLogLevels.FAILED, message.error);
				else if (message?.skip) this.logger.log(ListrLogLevels.SKIPPED, message.skip);
				else if (message?.rollback) this.logger.log(ListrLogLevels.ROLLBACK, message.rollback);
				else if (message?.retry) this.logger.log(ListrLogLevels.RETRY, task.title, { suffix: message.retry.count.toString() });
				else if (message?.paused) {
					const timer = rendererOptions?.pausedTimer;
					this.logger.log(ListrLogLevels.PAUSED, task.title, timer && { suffix: {
						...timer,
						condition: !!message?.paused && timer.condition,
						args: [message.paused - Date.now()]
					} });
				}
			});
		});
	}
	calculate(task) {
		if (this.cache.rendererOptions.has(task.id) && this.cache.rendererTaskOptions.has(task.id)) return;
		const rendererOptions = {
			...this.options,
			...task.rendererOptions
		};
		this.cache.rendererOptions.set(task.id, rendererOptions);
		this.cache.rendererTaskOptions.set(task.id, {
			...VerboseRenderer.rendererTaskOptions,
			timer: rendererOptions.timer,
			...task.rendererTaskOptions
		});
	}
	reset(task) {
		this.cache.rendererOptions.delete(task.id);
		this.cache.rendererTaskOptions.delete(task.id);
	}
};

//#endregion
//#region src/utils/ui/renderer.ts
const RENDERERS = {
	default: DefaultRenderer,
	simple: SimpleRenderer,
	verbose: VerboseRenderer,
	test: TestRenderer,
	silent: SilentRenderer
};
function isRendererSupported(renderer) {
	return process.stdout.isTTY === true || renderer.nonTTY === true;
}
function getRendererClass(renderer) {
	if (typeof renderer === "string") return RENDERERS[renderer] ?? RENDERERS.default;
	return typeof renderer === "function" ? renderer : RENDERERS.default;
}
function getRenderer(options) {
	if (assertFunctionOrSelf(options?.silentRendererCondition)) return {
		renderer: getRendererClass("silent"),
		selection: ListrRendererSelection.SILENT
	};
	const r = {
		renderer: getRendererClass(options.renderer),
		options: options.rendererOptions,
		selection: ListrRendererSelection.PRIMARY
	};
	if (!isRendererSupported(r.renderer) || assertFunctionOrSelf(options?.fallbackRendererCondition)) return {
		renderer: getRendererClass(options.fallbackRenderer),
		options: options.fallbackRendererOptions,
		selection: ListrRendererSelection.SECONDARY
	};
	return r;
}

//#endregion
//#region src/utils/assert.ts
/**
* This function asserts the given value as a function or itself.
* If the value itself is a function it will evaluate it with the passed in arguments,
* elsewise it will directly return itself.
*/
function assertFunctionOrSelf(functionOrSelf, ...args) {
	if (typeof functionOrSelf === "function") return functionOrSelf(...args);
	else return functionOrSelf;
}

//#endregion
//#region src/utils/clone.ts
const clone = (0, rfdc.default)({ circles: true });
/**
* Deep clones a object in the easiest manner.
*/
function cloneObject(obj) {
	return clone(obj);
}

//#endregion
//#region src/utils/concurrency.ts
var Concurrency = class {
	concurrency;
	count;
	queue;
	constructor(options) {
		this.concurrency = options.concurrency;
		this.count = 0;
		this.queue = /* @__PURE__ */ new Set();
	}
	add(fn) {
		if (this.count < this.concurrency) return this.run(fn);
		return new Promise((resolve) => {
			const callback = () => resolve(this.run(fn));
			this.queue.add(callback);
		});
	}
	flush() {
		for (const callback of this.queue) {
			if (this.count >= this.concurrency) break;
			this.queue.delete(callback);
			callback();
		}
	}
	run(fn) {
		this.count++;
		const promise = fn();
		const cleanup = () => {
			this.count--;
			this.flush();
		};
		promise.then(cleanup, () => {
			this.queue.clear();
		});
		return promise;
	}
};

//#endregion
//#region src/utils/delay.ts
function delay(time) {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
}

//#endregion
//#region src/interfaces/listr-error.interface.ts
/**
* Internal error handling mechanism for Listr collects the errors and details for a failed task.
*
* @see {@link https://listr2.kilic.dev/task/error-handling.html}
*/
var ListrError = class extends Error {
	path;
	ctx;
	constructor(error, type, task) {
		super(error.message);
		this.error = error;
		this.type = type;
		this.task = task;
		this.name = "ListrError";
		this.path = task.path;
		if (task?.options.collectErrors === "full") {
			this.task = cloneObject(task);
			this.ctx = cloneObject(task.listr.ctx);
		}
		this.stack = error?.stack;
	}
};

//#endregion
//#region src/interfaces/listr-renderer-error.interface.ts
/**
* Internal error coming from renderer.
*/
var ListrRendererError = class extends Error {};

//#endregion
//#region src/interfaces/prompt-error.interface.ts
/**
* Internal error handling mechanism for Listr prompts to identify the failing cause is coming from a prompt.
*
* @see {@link https://listr2.kilic.dev/task/prompts.html}
*/
var PromptError = class extends Error {};

//#endregion
//#region src/lib/task-wrapper.ts
/**
* The original Task that is defined by the user is wrapped with the TaskWrapper to provide additional functionality.
*
* @see {@link https://listr2.kilic.dev/task/task.html}
*/
var TaskWrapper = class {
	constructor(task) {
		this.task = task;
	}
	/* istanbul ignore next */
	get title() {
		return this.task.title;
	}
	/**
	* Title of the current task.
	*
	* @see {@link https://listr2.kilic.dev/task/title.html}
	*/
	set title(title) {
		title = Array.isArray(title) ? title : [title];
		this.task.title$ = splat(title.shift(), ...title);
	}
	/* istanbul ignore next */
	get output() {
		return this.task.output;
	}
	/* istanbul ignore next */
	/**
	* Send output from the current task to the renderer.
	*
	* @see {@link https://listr2.kilic.dev/task/output.html}
	*/
	set output(output) {
		output = Array.isArray(output) ? output : [output];
		this.task.output$ = splat(output.shift(), ...output);
	}
	/* istanbul ignore next */
	/** Send an output to the output channel as prompt. */
	set promptOutput(output) {
		this.task.promptOutput$ = output;
	}
	/**
	* Creates a new set of Listr subtasks.
	*
	* @see {@link https://listr2.kilic.dev/task/subtasks.html}
	*/
	newListr(task, options) {
		let tasks;
		if (typeof task === "function") tasks = task(this);
		else tasks = task;
		return new Listr(tasks, options, this.task);
	}
	/**
	* Report an error that has to be collected and handled.
	*
	* @see {@link https://listr2.kilic.dev/task/error-handling.html}
	*/
	report(error, type) {
		if (this.task.options.collectErrors !== false) this.task.listr.errors.push(new ListrError(error, type, this.task));
		this.task.message$ = { error: error.message ?? this.task?.title };
	}
	/**
	* Skip the current task.
	*
	* @see {@link https://listr2.kilic.dev/task/skip.html}
	*/
	skip(message, ...metadata) {
		this.task.state$ = ListrTaskState.SKIPPED;
		if (message) this.task.message$ = { skip: message ? splat(message, ...metadata) : this.task?.title };
	}
	/**
	* Check whether this task is currently in a retry state.
	*
	* @see {@link https://listr2.kilic.dev/task/retry.html}
	*/
	isRetrying() {
		return this.task.isRetrying() ? this.task.retry : { count: 0 };
	}
	/* istanbul ignore next */
	/**
	* Create a new prompt for getting user input through the prompt adapter.
	* This will create a new prompt through the adapter if the task is not currently rendering a prompt or will return the active instance.
	*
	* This part of the application requires optional peer dependencies, please refer to documentation.
	*
	* @see {@link https://listr2.kilic.dev/task/prompt.html}
	*/
	prompt(adapter) {
		if (this.task.prompt) return this.task.prompt;
		return new adapter(this.task, this);
	}
	/* istanbul ignore next */
	/**
	* Generates a fake stdout for your use case, where it will be tunnelled through Listr to handle the rendering process.
	*
	* @see {@link https://listr2.kilic.dev/renderer/process-output.html}
	*/
	stdout(type) {
		return createWritable((chunk) => {
			switch (type) {
				case ListrTaskEventType.PROMPT:
					this.promptOutput = chunk;
					break;
				default: this.output = chunk;
			}
		});
	}
	/** Run this task. */
	run(ctx) {
		return this.task.run(ctx, this);
	}
};

//#endregion
//#region src/lib/listr-task-event-manager.ts
var ListrTaskEventManager = class extends EventManager {};

//#endregion
//#region src/lib/task.ts
/**
* Creates and handles a runnable instance of the Task.
*/
var Task = class extends ListrTaskEventManager {
	/** Unique id per task, can be used for identifying a Task. */
	id = (0, crypto.randomUUID)();
	/** The current state of the task. */
	state = ListrTaskState.WAITING;
	/** Subtasks of the current task. */
	subtasks;
	/** Title of the task. */
	title;
	/** Initial/Untouched version of the title for using whenever task has a reset. */
	initialTitle;
	/** Output channel for the task. */
	output;
	/** Current state of the retry process whenever the task is retrying. */
	retry;
	/**
	* A channel for messages.
	*
	* This requires a separate channel for messages like error, skip or runtime messages to further utilize in the renderers.
	*/
	message = {};
	/** Current prompt instance or prompt error whenever the task is prompting. */
	prompt;
	/** Parent task of the current task. */
	parent;
	/** Enable flag of this task. */
	enabled;
	/** User provided Task callback function to run. */
	taskFn;
	/** Marks the task as closed. This is different from finalized since this is not really related to task itself. */
	closed;
	constructor(listr, task, options, rendererOptions, rendererTaskOptions) {
		super();
		this.listr = listr;
		this.task = task;
		this.options = options;
		this.rendererOptions = rendererOptions;
		this.rendererTaskOptions = rendererTaskOptions;
		if (task.title) {
			const title = Array.isArray(task?.title) ? task.title : [task.title];
			this.title = splat(title.shift(), ...title);
			this.initialTitle = this.title;
		}
		this.taskFn = task.task;
		this.parent = listr.parentTask;
	}
	/**
	* Update the current state of the Task and emit the neccassary events.
	*/
	set state$(state) {
		this.state = state;
		this.emit(ListrTaskEventType.STATE, state);
		if (this.hasSubtasks() && this.hasFailed()) {
			for (const subtask of this.subtasks) if (subtask.state === ListrTaskState.STARTED) subtask.state$ = ListrTaskState.FAILED;
		}
		this.listr.events.emit(ListrEventType.SHOULD_REFRESH_RENDER);
	}
	/**
	* Update the current output of the Task and emit the neccassary events.
	*/
	set output$(data) {
		this.output = data;
		this.emit(ListrTaskEventType.OUTPUT, data);
		this.listr.events.emit(ListrEventType.SHOULD_REFRESH_RENDER);
	}
	/**
	* Update the current prompt output of the Task and emit the neccassary events.
	*/
	set promptOutput$(data) {
		this.emit(ListrTaskEventType.PROMPT, data);
		if (cleanseAnsi(data)) this.listr.events.emit(ListrEventType.SHOULD_REFRESH_RENDER);
	}
	/**
	* Update or extend the current message of the Task and emit the neccassary events.
	*/
	set message$(data) {
		this.message = {
			...this.message,
			...data
		};
		this.emit(ListrTaskEventType.MESSAGE, data);
		this.listr.events.emit(ListrEventType.SHOULD_REFRESH_RENDER);
	}
	/**
	* Update the current title of the Task and emit the neccassary events.
	*/
	set title$(title) {
		this.title = title;
		this.emit(ListrTaskEventType.TITLE, title);
		this.listr.events.emit(ListrEventType.SHOULD_REFRESH_RENDER);
	}
	/**
	* Current task path in the hierarchy.
	*/
	get path() {
		return [...this.listr.path, this.initialTitle];
	}
	/**
	* Checks whether the current task with the given context should be set as enabled.
	*/
	async check(ctx) {
		if (this.state === ListrTaskState.WAITING) {
			this.enabled = await assertFunctionOrSelf(this.task?.enabled ?? true, ctx);
			this.emit(ListrTaskEventType.ENABLED, this.enabled);
			this.listr.events.emit(ListrEventType.SHOULD_REFRESH_RENDER);
		}
		return this.enabled;
	}
	/** Returns whether this task has subtasks. */
	hasSubtasks() {
		return this.subtasks?.length > 0;
	}
	/** Returns whether this task is finalized in someform. */
	hasFinalized() {
		return this.isCompleted() || this.hasFailed() || this.isSkipped() || this.hasRolledBack();
	}
	/** Returns whether this task is in progress. */
	isPending() {
		return this.isStarted() || this.isPrompt() || this.hasReset();
	}
	/** Returns whether this task has started. */
	isStarted() {
		return this.state === ListrTaskState.STARTED;
	}
	/** Returns whether this task is skipped. */
	isSkipped() {
		return this.state === ListrTaskState.SKIPPED;
	}
	/** Returns whether this task has been completed. */
	isCompleted() {
		return this.state === ListrTaskState.COMPLETED;
	}
	/** Returns whether this task has been failed. */
	hasFailed() {
		return this.state === ListrTaskState.FAILED;
	}
	/** Returns whether this task has an active rollback task going on. */
	isRollingBack() {
		return this.state === ListrTaskState.ROLLING_BACK;
	}
	/** Returns whether the rollback action was successful. */
	hasRolledBack() {
		return this.state === ListrTaskState.ROLLED_BACK;
	}
	/** Returns whether this task has an actively retrying task going on. */
	isRetrying() {
		return this.state === ListrTaskState.RETRY;
	}
	/** Returns whether this task has some kind of reset like retry and rollback going on. */
	hasReset() {
		return this.state === ListrTaskState.RETRY || this.state === ListrTaskState.ROLLING_BACK;
	}
	/** Returns whether enabled function resolves to true. */
	isEnabled() {
		return this.enabled;
	}
	/** Returns whether this task actually has a title. */
	hasTitle() {
		return typeof this?.title === "string";
	}
	/** Returns whether this task has a prompt inside. */
	isPrompt() {
		return this.state === ListrTaskState.PROMPT;
	}
	/** Returns whether this task is currently paused. */
	isPaused() {
		return this.state === ListrTaskState.PAUSED;
	}
	/** Returns whether this task is closed. */
	isClosed() {
		return this.closed;
	}
	/** Pause the given task for certain time. */
	async pause(time) {
		const state = this.state;
		this.state$ = ListrTaskState.PAUSED;
		this.message$ = { paused: Date.now() + time };
		await delay(time);
		this.state$ = state;
		this.message$ = { paused: null };
	}
	/** Run the current task. */
	async run(context, wrapper) {
		const handleResult = (result) => {
			if (result instanceof Listr) {
				result.options = {
					...this.options,
					...result.options
				};
				result.rendererClass = getRendererClass("silent");
				this.subtasks = result.tasks;
				result.errors = this.listr.errors;
				this.emit(ListrTaskEventType.SUBTASK, this.subtasks);
				result = result.run(context);
			} else if (result instanceof Promise) result = result.then(handleResult);
			else if (isReadable(result)) result = new Promise((resolve, reject) => {
				result.on("data", (data) => {
					this.output$ = data.toString();
				});
				result.on("error", (error) => reject(error));
				result.on("end", () => resolve(null));
			});
			else if (isObservable(result)) result = new Promise((resolve, reject) => {
				result.subscribe({
					next: (data) => {
						this.output$ = data;
					},
					error: reject,
					complete: resolve
				});
			});
			return result;
		};
		const startTime = Date.now();
		this.state$ = ListrTaskState.STARTED;
		const skipped = await assertFunctionOrSelf(this.task?.skip ?? false, context);
		if (skipped) {
			if (typeof skipped === "string") this.message$ = { skip: skipped };
			else if (this.hasTitle()) this.message$ = { skip: this.title };
			else this.message$ = { skip: "Skipped task without a title." };
			this.state$ = ListrTaskState.SKIPPED;
			return;
		}
		try {
			const retryCount = typeof this.task?.retry === "number" && this.task.retry > 0 ? this.task.retry + 1 : typeof this.task?.retry === "object" && this.task.retry.tries > 0 ? this.task.retry.tries + 1 : 1;
			const retryDelay = typeof this.task.retry === "object" && this.task.retry.delay;
			for (let retries = 1; retries <= retryCount; retries++) try {
				await handleResult(this.taskFn(context, wrapper));
				break;
			} catch (err) {
				if (retries !== retryCount) {
					this.retry = {
						count: retries,
						error: err
					};
					this.message$ = { retry: this.retry };
					this.title$ = this.initialTitle;
					this.output = void 0;
					wrapper.report(err, ListrErrorTypes.WILL_RETRY);
					this.state$ = ListrTaskState.RETRY;
					if (retryDelay) await this.pause(retryDelay);
				} else throw err;
			}
			if (this.isStarted() || this.isRetrying()) {
				this.message$ = { duration: Date.now() - startTime };
				this.state$ = ListrTaskState.COMPLETED;
			}
		} catch (error) {
			if (this.prompt instanceof PromptError) error = this.prompt;
			if (this.task?.rollback) {
				wrapper.report(error, ListrErrorTypes.WILL_ROLLBACK);
				try {
					this.state$ = ListrTaskState.ROLLING_BACK;
					await this.task.rollback(context, wrapper);
					this.message$ = { rollback: this.title };
					this.state$ = ListrTaskState.ROLLED_BACK;
				} catch (err) {
					this.state$ = ListrTaskState.FAILED;
					wrapper.report(err, ListrErrorTypes.HAS_FAILED_TO_ROLLBACK);
					this.close();
					throw err;
				}
				if (this.listr.options?.exitAfterRollback !== false) {
					this.close();
					throw error;
				}
			} else {
				this.state$ = ListrTaskState.FAILED;
				if (this.listr.options.exitOnError !== false && await assertFunctionOrSelf(this.task?.exitOnError, context) !== false) {
					wrapper.report(error, ListrErrorTypes.HAS_FAILED);
					this.close();
					throw error;
				} else if (!this.hasSubtasks()) wrapper.report(error, ListrErrorTypes.HAS_FAILED_WITHOUT_ERROR);
			}
		} finally {
			this.close();
		}
	}
	close() {
		this.emit(ListrTaskEventType.CLOSED);
		this.listr.events.emit(ListrEventType.SHOULD_REFRESH_RENDER);
		this.complete();
	}
};

//#endregion
//#region src/lib/listr-event-manager.ts
var ListrEventManager = class extends EventManager {};

//#endregion
//#region src/listr.ts
/**
* Create a new task list with Listr.
*
* @see {@link https://listr2.kilic.dev/listr/listr.html}
*/
var Listr = class {
	tasks = [];
	errors = [];
	ctx;
	events;
	path = [];
	rendererClass;
	rendererClassOptions;
	rendererSelection;
	boundSignalHandler;
	concurrency;
	renderer;
	constructor(task, options, parentTask) {
		this.task = task;
		this.options = options;
		this.parentTask = parentTask;
		this.options = {
			concurrent: false,
			renderer: "default",
			fallbackRenderer: "simple",
			exitOnError: true,
			exitAfterRollback: true,
			collectErrors: false,
			registerSignalListeners: true,
			...this.parentTask?.options ?? {},
			...options
		};
		if (this.options.concurrent === true) this.options.concurrent = Infinity;
		else if (typeof this.options.concurrent !== "number") this.options.concurrent = 1;
		this.concurrency = new Concurrency({ concurrency: this.options.concurrent });
		if (parentTask) {
			this.path = [...parentTask.listr.path, parentTask.title];
			this.errors = parentTask.listr.errors;
		}
		if (this.parentTask?.listr.events instanceof ListrEventManager) this.events = this.parentTask.listr.events;
		else this.events = new ListrEventManager();
		/* istanbul ignore if */
		if (this.options?.forceTTY || process.env[ListrEnvironmentVariables.FORCE_TTY]) {
			process.stdout.isTTY = true;
			process.stderr.isTTY = true;
		}
		/* istanbul ignore if */
		if (this.options?.forceUnicode) process.env[ListrEnvironmentVariables.FORCE_UNICODE] = "1";
		const renderer = getRenderer({
			renderer: this.options.renderer,
			rendererOptions: this.options.rendererOptions,
			fallbackRenderer: this.options.fallbackRenderer,
			fallbackRendererOptions: this.options.fallbackRendererOptions,
			fallbackRendererCondition: this.options?.fallbackRendererCondition,
			silentRendererCondition: this.options?.silentRendererCondition
		});
		this.rendererClass = renderer.renderer;
		this.rendererClassOptions = renderer.options;
		this.rendererSelection = renderer.selection;
		/* istanbul ignore next */
		this.add(task ?? []);
		/* istanbul ignore if */
		if (this.options.registerSignalListeners) {
			this.boundSignalHandler = this.signalHandler.bind(this);
			process.once("SIGINT", this.boundSignalHandler).setMaxListeners(0);
		}
	}
	/**
	* Whether this is the root task.
	*/
	isRoot() {
		return !this.parentTask;
	}
	/**
	* Whether this is a subtask of another task list.
	*/
	isSubtask() {
		return !!this.parentTask;
	}
	/**
	* Add tasks to current task list.
	*
	* @see {@link https://listr2.kilic.dev/task/task.html}
	*/
	add(tasks) {
		this.tasks.push(...this.generate(tasks));
	}
	/**
	* Run the task list.
	*
	* @see {@link https://listr2.kilic.dev/listr/listr.html#run-the-generated-task-list}
	*/
	async run(context) {
		if (!this.renderer) this.renderer = new this.rendererClass(this.tasks, this.rendererClassOptions, this.events);
		await this.renderer.render();
		this.ctx = this.options?.ctx ?? context ?? {};
		try {
			await Promise.all(this.tasks.map((task) => task.check(this.ctx)));
			await Promise.all(this.tasks.map((task) => this.concurrency.add(() => this.runTask(task))));
			this.renderer.end();
			this.removeSignalHandler();
		} catch (err) {
			if (this.options.exitOnError !== false) {
				this.renderer.end(err);
				this.removeSignalHandler();
				throw err;
			}
		}
		return this.ctx;
	}
	generate(tasks) {
		tasks = Array.isArray(tasks) ? tasks : [tasks];
		return tasks.map((task) => {
			let rendererTaskOptions;
			if (this.rendererSelection === ListrRendererSelection.PRIMARY) rendererTaskOptions = task.rendererOptions;
			else if (this.rendererSelection === ListrRendererSelection.SECONDARY) rendererTaskOptions = task.fallbackRendererOptions;
			return new Task(this, task, this.options, this.rendererClassOptions, rendererTaskOptions);
		});
	}
	async runTask(task) {
		if (!await task.check(this.ctx)) return;
		return new TaskWrapper(task).run(this.ctx);
	}
	signalHandler() {
		this.tasks?.forEach(async (task) => {
			if (task.isPending()) task.state$ = ListrTaskState.FAILED;
		});
		if (this.isRoot()) {
			this.renderer?.end(/* @__PURE__ */ new Error("Interrupted."));
			process.exit(127);
		}
	}
	removeSignalHandler() {
		if (this.boundSignalHandler) process.removeListener("SIGINT", this.boundSignalHandler);
	}
};

//#endregion
exports.ANSI_ESCAPE = ANSI_ESCAPE;
exports.ANSI_ESCAPE_CODES = ANSI_ESCAPE_CODES;
exports.BaseEventMap = BaseEventMap;
exports.Concurrency = Concurrency;
exports.DefaultRenderer = DefaultRenderer;
exports.EventManager = EventManager;
exports.LISTR_DEFAULT_RENDERER_STYLE = LISTR_DEFAULT_RENDERER_STYLE;
exports.LISTR_LOGGER_STDERR_LEVELS = LISTR_LOGGER_STDERR_LEVELS;
exports.LISTR_LOGGER_STYLE = LISTR_LOGGER_STYLE;
exports.Listr = Listr;
exports.ListrDefaultRendererLogLevels = ListrDefaultRendererLogLevels;
exports.ListrEnvironmentVariables = ListrEnvironmentVariables;
exports.ListrError = ListrError;
exports.ListrErrorTypes = ListrErrorTypes;
exports.ListrEventManager = ListrEventManager;
exports.ListrEventType = ListrEventType;
exports.ListrLogLevels = ListrLogLevels;
exports.ListrLogger = ListrLogger;
exports.ListrPromptAdapter = ListrPromptAdapter;
exports.ListrRendererError = ListrRendererError;
exports.ListrRendererSelection = ListrRendererSelection;
exports.ListrTaskEventManager = ListrTaskEventManager;
exports.ListrTaskEventType = ListrTaskEventType;
exports.ListrTaskState = ListrTaskState;
exports.PRESET_TIMER = PRESET_TIMER;
exports.PRESET_TIMESTAMP = PRESET_TIMESTAMP;
exports.ProcessOutput = ProcessOutput;
exports.ProcessOutputBuffer = ProcessOutputBuffer;
exports.ProcessOutputStream = ProcessOutputStream;
exports.PromptError = PromptError;
exports.SilentRenderer = SilentRenderer;
exports.SimpleRenderer = SimpleRenderer;
exports.Spinner = Spinner;
exports.TestRenderer = TestRenderer;
exports.TestRendererSerializer = TestRendererSerializer;
exports.VerboseRenderer = VerboseRenderer;
exports.assertFunctionOrSelf = assertFunctionOrSelf;
exports.cleanseAnsi = cleanseAnsi;
exports.cloneObject = cloneObject;
exports.color = color;
exports.createWritable = createWritable;
exports.delay = delay;
exports.figures = figures;
exports.getRenderer = getRenderer;
exports.getRendererClass = getRendererClass;
exports.indent = indent;
exports.isObservable = isObservable;
exports.isReadable = isReadable;
exports.isUnicodeSupported = isUnicodeSupported;
exports.parseTimer = parseTimer;
exports.parseTimestamp = parseTimestamp;
exports.splat = splat;