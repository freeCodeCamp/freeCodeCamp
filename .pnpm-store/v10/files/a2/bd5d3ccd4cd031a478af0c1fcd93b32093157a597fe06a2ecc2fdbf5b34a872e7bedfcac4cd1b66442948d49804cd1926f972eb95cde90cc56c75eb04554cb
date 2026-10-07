import { isMovable, isTaskQueue, isTransferable, kFieldCount, kQueueOptions, kRequestCountField, kResponseCountField, kTransferable, kValue, markMovable } from "./common-Qw-RoVFD.js";
import { MessageChannel, MessagePort, Worker, receiveMessageOnPort } from "node:worker_threads";
import { EventEmitterAsyncResource, once } from "node:events";
import { AsyncResource } from "node:async_hooks";
import { URL, fileURLToPath } from "node:url";
import { join } from "node:path";
import { inspect, types } from "node:util";
import assert from "node:assert";
import { performance } from "node:perf_hooks";
import { readFileSync } from "node:fs";
import os from "node:os";
import childProcess, { fork } from "node:child_process";

//#region src/physicalCpuCount.ts
function exec(command) {
	const output = childProcess.execSync(command, {
		encoding: "utf8",
		stdio: [
			null,
			null,
			null
		]
	});
	return output;
}
let amount;
try {
	const platform = os.platform();
	if (platform === "linux") {
		const output1 = exec("cat /proc/cpuinfo | grep \"physical id\" | sort |uniq | wc -l");
		const output2 = exec("cat /proc/cpuinfo | grep \"core id\" | sort | uniq | wc -l");
		const physicalCpuAmount = parseInt(output1.trim(), 10);
		const physicalCoreAmount = parseInt(output2.trim(), 10);
		amount = physicalCpuAmount * physicalCoreAmount;
	} else if (platform === "darwin") {
		const output = exec("sysctl -n hw.physicalcpu_max");
		amount = parseInt(output.trim(), 10);
	} else if (platform === "win32") throw new Error();
	else {
		const cores = os.cpus().filter(function(cpu, index) {
			const hasHyperthreading = cpu.model.includes("Intel");
			const isOdd = index % 2 === 1;
			return !hasHyperthreading || isOdd;
		});
		amount = cores.length;
	}
} catch {
	amount = os.cpus().length;
}
if (amount === 0) amount = os.cpus().length;

//#endregion
//#region src/runtime/thread-worker.ts
var ThreadWorker = class {
	name = "ThreadWorker";
	runtime = "worker_threads";
	initialize(options) {
		this.thread = new Worker(fileURLToPath(import.meta.url + "/../entry/worker.js"), options);
		this.threadId = this.thread.threadId;
	}
	async terminate() {
		const output = await this.thread.terminate();
		this.channel?.onClose?.();
		return output;
	}
	postMessage(message, transferListItem) {
		return this.thread.postMessage(message, transferListItem);
	}
	on(event, callback) {
		return this.thread.on(event, callback);
	}
	once(event, callback) {
		return this.thread.once(event, callback);
	}
	emit(event, ...data) {
		return this.thread.emit(event, ...data);
	}
	ref() {
		return this.thread.ref();
	}
	unref() {
		return this.thread.unref();
	}
	setChannel(channel) {
		if (channel.onMessage) throw new Error("{ runtime: 'worker_threads' } doesn't support channel.onMessage. Use transferListItem for listening to messages instead.");
		if (channel.postMessage) throw new Error("{ runtime: 'worker_threads' } doesn't support channel.postMessage. Use transferListItem for sending to messages instead.");
		if (this.channel && this.channel !== channel) this.channel.onClose?.();
		this.channel = channel;
	}
};

//#endregion
//#region src/runtime/process-worker.ts
const __tinypool_worker_message__ = true;
const SIGKILL_TIMEOUT = 1e3;
var ProcessWorker = class {
	name = "ProcessWorker";
	runtime = "child_process";
	isTerminating = false;
	initialize(options) {
		this.process = fork(fileURLToPath(import.meta.url + "/../entry/process.js"), options.argv, {
			...options,
			stdio: "pipe",
			env: {
				...options.env,
				TINYPOOL_WORKER_ID: options.workerData[0].workerId.toString()
			}
		});
		process.stdout.setMaxListeners(1 + process.stdout.getMaxListeners());
		process.stderr.setMaxListeners(1 + process.stderr.getMaxListeners());
		this.process.stdout?.pipe(process.stdout);
		this.process.stderr?.pipe(process.stderr);
		this.threadId = this.process.pid;
		this.process.on("exit", this.onUnexpectedExit);
		this.waitForExit = new Promise((r) => this.process.on("exit", r));
	}
	onUnexpectedExit = () => {
		this.process.emit("error", new Error("Worker exited unexpectedly"));
	};
	async terminate() {
		this.isTerminating = true;
		this.process.off("exit", this.onUnexpectedExit);
		const sigkillTimeout = setTimeout(() => this.process.kill("SIGKILL"), SIGKILL_TIMEOUT);
		this.process.kill();
		await this.waitForExit;
		this.process.stdout?.unpipe(process.stdout);
		this.process.stderr?.unpipe(process.stderr);
		this.port?.close();
		this.channel?.onClose?.();
		clearTimeout(sigkillTimeout);
	}
	setChannel(channel) {
		if (this.channel && this.channel !== channel) this.channel.onClose?.();
		this.channel = channel;
		this.channel.onMessage?.((message) => {
			this.send(message);
		});
	}
	send(message) {
		if (!this.isTerminating) this.process.send(message);
	}
	postMessage(message, transferListItem) {
		transferListItem?.forEach((item) => {
			if (item instanceof MessagePort) {
				this.port = item;
				this.port.start();
			}
		});
		if (this.port) this.port.on("message", (message$1) => this.send({
			...message$1,
			source: "port",
			__tinypool_worker_message__
		}));
		return this.send({
			...message,
			source: "pool",
			__tinypool_worker_message__
		});
	}
	on(event, callback) {
		return this.process.on(event, (data) => {
			if (event === "error") return callback(data);
			if (!data || !data.__tinypool_worker_message__) return this.channel?.postMessage?.(data);
			if (data.source === "pool") callback(data);
			else if (data.source === "port") this.port.postMessage(data);
		});
	}
	once(event, callback) {
		return this.process.once(event, callback);
	}
	emit(event, ...data) {
		return this.process.emit(event, ...data);
	}
	ref() {
		return this.process.ref();
	}
	unref() {
		this.port?.unref();
		this.process.channel?.unref?.();
		if (hasUnref(this.process.stdout)) this.process.stdout.unref();
		if (hasUnref(this.process.stderr)) this.process.stderr.unref();
		return this.process.unref();
	}
};
function hasUnref(stream) {
	return stream != null && "unref" in stream && typeof stream.unref === "function";
}

//#endregion
//#region src/index.ts
const cpuCount = amount;
function onabort(abortSignal, listener) {
	if ("addEventListener" in abortSignal) abortSignal.addEventListener("abort", listener, { once: true });
	else abortSignal.once("abort", listener);
}
var AbortError = class extends Error {
	constructor() {
		super("The task has been aborted");
	}
	get name() {
		return "AbortError";
	}
};
var CancelError = class extends Error {
	constructor() {
		super("The task has been cancelled");
	}
	get name() {
		return "CancelError";
	}
};
var ArrayTaskQueue = class {
	tasks = [];
	get size() {
		return this.tasks.length;
	}
	shift() {
		return this.tasks.shift();
	}
	push(task) {
		this.tasks.push(task);
	}
	remove(task) {
		const index = this.tasks.indexOf(task);
		assert.notStrictEqual(index, -1);
		this.tasks.splice(index, 1);
	}
	cancel() {
		while (this.tasks.length > 0) {
			const task = this.tasks.pop();
			task?.cancel();
		}
	}
};
const kDefaultOptions = {
	filename: null,
	name: "default",
	runtime: "worker_threads",
	minThreads: Math.max(cpuCount / 2, 1),
	maxThreads: cpuCount,
	idleTimeout: 0,
	maxQueue: Infinity,
	concurrentTasksPerWorker: 1,
	useAtomics: true,
	taskQueue: new ArrayTaskQueue(),
	trackUnmanagedFds: true
};
const kDefaultRunOptions = {
	transferList: void 0,
	filename: null,
	signal: null,
	name: null
};
var DirectlyTransferable = class {
	#value;
	constructor(value) {
		this.#value = value;
	}
	get [kTransferable]() {
		return this.#value;
	}
	get [kValue]() {
		return this.#value;
	}
};
var ArrayBufferViewTransferable = class {
	#view;
	constructor(view) {
		this.#view = view;
	}
	get [kTransferable]() {
		return this.#view.buffer;
	}
	get [kValue]() {
		return this.#view;
	}
};
let taskIdCounter = 0;
function maybeFileURLToPath(filename) {
	return filename.startsWith("file:") ? fileURLToPath(new URL(filename)) : filename;
}
var TaskInfo = class extends AsyncResource {
	abortListener = null;
	workerInfo = null;
	constructor(task, transferList, filename, name, callback, abortSignal, triggerAsyncId, channel) {
		super("Tinypool.Task", {
			requireManualDestroy: true,
			triggerAsyncId
		});
		this.callback = callback;
		this.task = task;
		this.transferList = transferList;
		this.cancel = () => this.callback(new CancelError(), null);
		this.channel = channel;
		if (isMovable(task)) {
			/* istanbul ignore if */
			if (this.transferList == null) this.transferList = [];
			this.transferList = this.transferList.concat(task[kTransferable]);
			this.task = task[kValue];
		}
		this.filename = filename;
		this.name = name;
		this.taskId = taskIdCounter++;
		this.abortSignal = abortSignal;
		this.created = performance.now();
		this.started = 0;
	}
	releaseTask() {
		const ret = this.task;
		this.task = null;
		return ret;
	}
	done(err, result) {
		this.emitDestroy();
		this.runInAsyncScope(this.callback, null, err, result);
		if (this.abortSignal && this.abortListener) if ("removeEventListener" in this.abortSignal && this.abortListener) this.abortSignal.removeEventListener("abort", this.abortListener);
		else this.abortSignal.off("abort", this.abortListener);
	}
	get [kQueueOptions]() {
		return kQueueOptions in this.task ? this.task[kQueueOptions] : null;
	}
};
var AsynchronouslyCreatedResource = class {
	onreadyListeners = [];
	markAsReady() {
		const listeners = this.onreadyListeners;
		assert(listeners !== null);
		this.onreadyListeners = null;
		for (const listener of listeners) listener();
	}
	isReady() {
		return this.onreadyListeners === null;
	}
	onReady(fn) {
		if (this.onreadyListeners === null) {
			fn();
			return;
		}
		this.onreadyListeners.push(fn);
	}
};
var AsynchronouslyCreatedResourcePool = class {
	pendingItems = new Set();
	readyItems = new Set();
	constructor(maximumUsage) {
		this.maximumUsage = maximumUsage;
		this.onAvailableListeners = [];
	}
	add(item) {
		this.pendingItems.add(item);
		item.onReady(() => {
			/* istanbul ignore else */
			if (this.pendingItems.has(item)) {
				this.pendingItems.delete(item);
				this.readyItems.add(item);
				this.maybeAvailable(item);
			}
		});
	}
	delete(item) {
		this.pendingItems.delete(item);
		this.readyItems.delete(item);
	}
	findAvailable() {
		let minUsage = this.maximumUsage;
		let candidate = null;
		for (const item of this.readyItems) {
			const usage = item.currentUsage();
			if (usage === 0) return item;
			if (usage < minUsage) {
				candidate = item;
				minUsage = usage;
			}
		}
		return candidate;
	}
	*[Symbol.iterator]() {
		yield* this.pendingItems;
		yield* this.readyItems;
	}
	get size() {
		return this.pendingItems.size + this.readyItems.size;
	}
	maybeAvailable(item) {
		/* istanbul ignore else */
		if (item.currentUsage() < this.maximumUsage) for (const listener of this.onAvailableListeners) listener(item);
	}
	onAvailable(fn) {
		this.onAvailableListeners.push(fn);
	}
};
const Errors = {
	ThreadTermination: () => new Error("Terminating worker thread"),
	FilenameNotProvided: () => new Error("filename must be provided to run() or in options object"),
	TaskQueueAtLimit: () => new Error("Task queue is at limit"),
	NoTaskQueueAvailable: () => new Error("No task queue available and all Workers are busy")
};
var WorkerInfo = class extends AsynchronouslyCreatedResource {
	idleTimeout = null;
	lastSeenResponseCount = 0;
	constructor(worker, port, workerId, freeWorkerId, onMessage, filename, teardown) {
		super();
		this.worker = worker;
		this.workerId = workerId;
		this.freeWorkerId = freeWorkerId;
		this.teardown = teardown;
		this.filename = filename;
		this.port = port;
		this.port.on("message", (message) => this._handleResponse(message));
		this.onMessage = onMessage;
		this.taskInfos = new Map();
		this.sharedBuffer = new Int32Array(new SharedArrayBuffer(kFieldCount * Int32Array.BYTES_PER_ELEMENT));
	}
	async destroy(timeout) {
		let resolve;
		let reject;
		const ret = new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		});
		if (this.teardown && this.filename) {
			const { teardown, filename } = this;
			await new Promise((resolve$1, reject$1) => {
				this.postTask(new TaskInfo({}, [], filename, teardown, (error, result) => error ? reject$1(error) : resolve$1(result), null, 1, void 0));
			});
		}
		const timer = timeout ? setTimeout(() => reject(new Error("Failed to terminate worker")), timeout) : null;
		this.worker.terminate().then(() => {
			if (timer !== null) clearTimeout(timer);
			this.port.close();
			this.clearIdleTimeout();
			for (const taskInfo of this.taskInfos.values()) taskInfo.done(Errors.ThreadTermination());
			this.taskInfos.clear();
			resolve();
		});
		return ret;
	}
	clearIdleTimeout() {
		if (this.idleTimeout !== null) {
			clearTimeout(this.idleTimeout);
			this.idleTimeout = null;
		}
	}
	ref() {
		this.port.ref();
		return this;
	}
	unref() {
		this.port.unref();
		return this;
	}
	_handleResponse(message) {
		this.usedMemory = message.usedMemory;
		this.onMessage(message);
		if (this.taskInfos.size === 0) this.unref();
	}
	postTask(taskInfo) {
		assert(!this.taskInfos.has(taskInfo.taskId));
		const message = {
			task: taskInfo.releaseTask(),
			taskId: taskInfo.taskId,
			filename: taskInfo.filename,
			name: taskInfo.name
		};
		try {
			if (taskInfo.channel) this.worker.setChannel?.(taskInfo.channel);
			this.port.postMessage(message, taskInfo.transferList);
		} catch (err) {
			taskInfo.done(err);
			return;
		}
		taskInfo.workerInfo = this;
		this.taskInfos.set(taskInfo.taskId, taskInfo);
		this.ref();
		this.clearIdleTimeout();
		Atomics.add(this.sharedBuffer, kRequestCountField, 1);
		Atomics.notify(this.sharedBuffer, kRequestCountField, 1);
	}
	processPendingMessages() {
		const actualResponseCount = Atomics.load(this.sharedBuffer, kResponseCountField);
		if (actualResponseCount !== this.lastSeenResponseCount) {
			this.lastSeenResponseCount = actualResponseCount;
			let entry;
			while ((entry = receiveMessageOnPort(this.port)) !== void 0) this._handleResponse(entry.message);
		}
	}
	isRunningAbortableTask() {
		if (this.taskInfos.size !== 1) return false;
		const [first] = this.taskInfos;
		const [, task] = first || [];
		return task?.abortSignal !== null;
	}
	currentUsage() {
		if (this.isRunningAbortableTask()) return Infinity;
		return this.taskInfos.size;
	}
};
var ThreadPool = class {
	skipQueue = [];
	completed = 0;
	start = performance.now();
	inProcessPendingMessages = false;
	startingUp = false;
	workerFailsDuringBootstrap = false;
	constructor(publicInterface, options) {
		this.publicInterface = publicInterface;
		this.taskQueue = options.taskQueue || new ArrayTaskQueue();
		const filename = options.filename ? maybeFileURLToPath(options.filename) : null;
		this.options = {
			...kDefaultOptions,
			...options,
			filename,
			maxQueue: 0
		};
		if (options.maxThreads !== void 0 && this.options.minThreads >= options.maxThreads) this.options.minThreads = options.maxThreads;
		if (options.minThreads !== void 0 && this.options.maxThreads <= options.minThreads) this.options.maxThreads = options.minThreads;
		if (options.maxQueue === "auto") this.options.maxQueue = this.options.maxThreads ** 2;
		else this.options.maxQueue = options.maxQueue ?? kDefaultOptions.maxQueue;
		this.workerIds = new Map(new Array(this.options.maxThreads).fill(0).map((_, i) => [i + 1, true]));
		this.workers = new AsynchronouslyCreatedResourcePool(this.options.concurrentTasksPerWorker);
		this.workers.onAvailable((w) => this._onWorkerAvailable(w));
		this.startingUp = true;
		this._ensureMinimumWorkers();
		this.startingUp = false;
	}
	_ensureEnoughWorkersForTaskQueue() {
		while (this.workers.size < this.taskQueue.size && this.workers.size < this.options.maxThreads) this._addNewWorker();
	}
	_ensureMaximumWorkers() {
		while (this.workers.size < this.options.maxThreads) this._addNewWorker();
	}
	_ensureMinimumWorkers() {
		while (this.workers.size < this.options.minThreads) this._addNewWorker();
	}
	_addNewWorker() {
		const workerIds = this.workerIds;
		let workerId;
		workerIds.forEach((isIdAvailable, _workerId$1) => {
			if (isIdAvailable && !workerId) {
				workerId = _workerId$1;
				workerIds.set(_workerId$1, false);
			}
		});
		const tinypoolPrivateData = { workerId };
		const worker = this.options.runtime === "child_process" ? new ProcessWorker() : new ThreadWorker();
		worker.initialize({
			env: this.options.env,
			argv: this.options.argv,
			execArgv: this.options.execArgv,
			resourceLimits: this.options.resourceLimits,
			workerData: [tinypoolPrivateData, this.options.workerData],
			trackUnmanagedFds: this.options.trackUnmanagedFds
		});
		const onMessage = (message$1) => {
			const { taskId, result } = message$1;
			const taskInfo = workerInfo.taskInfos.get(taskId);
			workerInfo.taskInfos.delete(taskId);
			if (!this.shouldRecycleWorker(taskInfo)) this.workers.maybeAvailable(workerInfo);
			/* istanbul ignore if */
			if (taskInfo === void 0) {
				const err = new Error(`Unexpected message from Worker: ${inspect(message$1)}`);
				this.publicInterface.emit("error", err);
			} else taskInfo.done(message$1.error, result);
			this._processPendingMessages();
		};
		const { port1, port2 } = new MessageChannel();
		const workerInfo = new WorkerInfo(worker, port1, workerId, () => workerIds.set(workerId, true), onMessage, this.options.filename, this.options.teardown);
		if (this.startingUp) workerInfo.markAsReady();
		const message = {
			filename: this.options.filename,
			name: this.options.name,
			port: port2,
			sharedBuffer: workerInfo.sharedBuffer,
			useAtomics: this.options.useAtomics
		};
		worker.postMessage(message, [port2]);
		worker.on("message", (message$1) => {
			if (message$1.ready === true) {
				port1.start();
				if (workerInfo.currentUsage() === 0) workerInfo.unref();
				if (!workerInfo.isReady()) workerInfo.markAsReady();
				return;
			}
			worker.emit("error", new Error(`Unexpected message on Worker: ${inspect(message$1)}`));
		});
		worker.on("error", (err) => {
			worker.ref = () => {};
			const taskInfos = [...workerInfo.taskInfos.values()];
			workerInfo.taskInfos.clear();
			this._removeWorker(workerInfo);
			if (workerInfo.isReady() && !this.workerFailsDuringBootstrap) this._ensureMinimumWorkers();
			else this.workerFailsDuringBootstrap = true;
			if (taskInfos.length > 0) for (const taskInfo of taskInfos) taskInfo.done(err, null);
			else this.publicInterface.emit("error", err);
		});
		worker.unref();
		port1.on("close", () => {
			worker.ref();
		});
		this.workers.add(workerInfo);
	}
	_processPendingMessages() {
		if (this.inProcessPendingMessages || !this.options.useAtomics) return;
		this.inProcessPendingMessages = true;
		try {
			for (const workerInfo of this.workers) workerInfo.processPendingMessages();
		} finally {
			this.inProcessPendingMessages = false;
		}
	}
	_removeWorker(workerInfo) {
		workerInfo.freeWorkerId();
		this.workers.delete(workerInfo);
		return workerInfo.destroy(this.options.terminateTimeout);
	}
	_onWorkerAvailable(workerInfo) {
		while ((this.taskQueue.size > 0 || this.skipQueue.length > 0) && workerInfo.currentUsage() < this.options.concurrentTasksPerWorker) {
			const taskInfo = this.skipQueue.shift() || this.taskQueue.shift();
			if (taskInfo.abortSignal && workerInfo.taskInfos.size > 0) {
				this.skipQueue.push(taskInfo);
				break;
			}
			const now = performance.now();
			taskInfo.started = now;
			workerInfo.postTask(taskInfo);
			this._maybeDrain();
			return;
		}
		if (workerInfo.taskInfos.size === 0 && this.workers.size > this.options.minThreads) workerInfo.idleTimeout = setTimeout(() => {
			assert.strictEqual(workerInfo.taskInfos.size, 0);
			if (this.workers.size > this.options.minThreads) this._removeWorker(workerInfo);
		}, this.options.idleTimeout).unref();
	}
	runTask(task, options) {
		let { filename, name } = options;
		const { transferList = [], signal = null, channel } = options;
		if (filename == null) filename = this.options.filename;
		if (name == null) name = this.options.name;
		if (typeof filename !== "string") return Promise.reject(Errors.FilenameNotProvided());
		filename = maybeFileURLToPath(filename);
		let resolve;
		let reject;
		const ret = new Promise((res, rej) => {
			resolve = res;
			reject = rej;
		});
		const taskInfo = new TaskInfo(task, transferList, filename, name, (err, result) => {
			this.completed++;
			if (err !== null) reject(err);
			if (this.shouldRecycleWorker(taskInfo)) this._removeWorker(taskInfo.workerInfo).then(() => this._ensureMinimumWorkers()).then(() => this._ensureEnoughWorkersForTaskQueue()).then(() => resolve(result)).catch(reject);
			else resolve(result);
		}, signal, this.publicInterface.asyncResource.asyncId(), channel);
		if (signal !== null) {
			if (signal.aborted) return Promise.reject(new AbortError());
			taskInfo.abortListener = () => {
				reject(new AbortError());
				if (taskInfo.workerInfo !== null) {
					this._removeWorker(taskInfo.workerInfo);
					this._ensureMinimumWorkers();
				} else this.taskQueue.remove(taskInfo);
			};
			onabort(signal, taskInfo.abortListener);
		}
		if (this.taskQueue.size > 0) {
			const totalCapacity = this.options.maxQueue + this.pendingCapacity();
			if (this.taskQueue.size >= totalCapacity) if (this.options.maxQueue === 0) return Promise.reject(Errors.NoTaskQueueAvailable());
			else return Promise.reject(Errors.TaskQueueAtLimit());
			else {
				if (this.workers.size < this.options.maxThreads) this._addNewWorker();
				this.taskQueue.push(taskInfo);
			}
			return ret;
		}
		let workerInfo = this.workers.findAvailable();
		if (workerInfo !== null && workerInfo.currentUsage() > 0 && signal) workerInfo = null;
		let waitingForNewWorker = false;
		if ((workerInfo === null || workerInfo.currentUsage() > 0) && this.workers.size < this.options.maxThreads) {
			this._addNewWorker();
			waitingForNewWorker = true;
		}
		if (workerInfo === null) {
			if (this.options.maxQueue <= 0 && !waitingForNewWorker) return Promise.reject(Errors.NoTaskQueueAvailable());
			else this.taskQueue.push(taskInfo);
			return ret;
		}
		const now = performance.now();
		taskInfo.started = now;
		workerInfo.postTask(taskInfo);
		this._maybeDrain();
		return ret;
	}
	shouldRecycleWorker(taskInfo) {
		if (taskInfo?.workerInfo?.shouldRecycle) return true;
		if (this.options.isolateWorkers && taskInfo?.workerInfo) return true;
		if (!this.options.isolateWorkers && this.options.maxMemoryLimitBeforeRecycle !== void 0 && (taskInfo?.workerInfo?.usedMemory || 0) > this.options.maxMemoryLimitBeforeRecycle) return true;
		return false;
	}
	pendingCapacity() {
		return this.workers.pendingItems.size * this.options.concurrentTasksPerWorker;
	}
	_maybeDrain() {
		if (this.taskQueue.size === 0 && this.skipQueue.length === 0) this.publicInterface.emit("drain");
	}
	async destroy() {
		while (this.skipQueue.length > 0) {
			const taskInfo = this.skipQueue.shift();
			taskInfo.done(new Error("Terminating worker thread"));
		}
		while (this.taskQueue.size > 0) {
			const taskInfo = this.taskQueue.shift();
			taskInfo.done(new Error("Terminating worker thread"));
		}
		const exitEvents = [];
		while (this.workers.size > 0) {
			const [workerInfo] = this.workers;
			exitEvents.push(once(workerInfo.worker, "exit"));
			this._removeWorker(workerInfo);
		}
		await Promise.all(exitEvents);
	}
	async recycleWorkers(options = {}) {
		const runtimeChanged = options?.runtime && options.runtime !== this.options.runtime;
		if (options?.runtime) this.options.runtime = options.runtime;
		if (this.options.isolateWorkers && !runtimeChanged) return;
		const exitEvents = [];
		Array.from(this.workers).filter((workerInfo) => {
			if (workerInfo.currentUsage() === 0) {
				exitEvents.push(once(workerInfo.worker, "exit"));
				this._removeWorker(workerInfo);
			} else workerInfo.shouldRecycle = true;
		});
		await Promise.all(exitEvents);
		this._ensureMinimumWorkers();
	}
};
var Tinypool = class extends EventEmitterAsyncResource {
	#pool;
	constructor(options = {}) {
		if (options.minThreads !== void 0 && options.minThreads > 0 && options.minThreads < 1) options.minThreads = Math.max(1, Math.floor(options.minThreads * cpuCount));
		if (options.maxThreads !== void 0 && options.maxThreads > 0 && options.maxThreads < 1) options.maxThreads = Math.max(1, Math.floor(options.maxThreads * cpuCount));
		super({
			...options,
			name: "Tinypool"
		});
		if (options.minThreads !== void 0 && options.maxThreads !== void 0 && options.minThreads > options.maxThreads) throw new RangeError("options.minThreads and options.maxThreads must not conflict");
		this.#pool = new ThreadPool(this, options);
	}
	run(task, options = kDefaultRunOptions) {
		const { transferList, filename, name, signal, runtime, channel } = options;
		return this.#pool.runTask(task, {
			transferList,
			filename,
			name,
			signal,
			runtime,
			channel
		});
	}
	async destroy() {
		await this.#pool.destroy();
		this.emitDestroy();
	}
	get options() {
		return this.#pool.options;
	}
	get threads() {
		const ret = [];
		for (const workerInfo of this.#pool.workers) ret.push(workerInfo.worker);
		return ret;
	}
	get queueSize() {
		const pool = this.#pool;
		return Math.max(pool.taskQueue.size - pool.pendingCapacity(), 0);
	}
	cancelPendingTasks() {
		const pool = this.#pool;
		pool.taskQueue.cancel();
	}
	async recycleWorkers(options = {}) {
		await this.#pool.recycleWorkers(options);
	}
	get completed() {
		return this.#pool.completed;
	}
	get duration() {
		return performance.now() - this.#pool.start;
	}
	static get isWorkerThread() {
		return process.__tinypool_state__?.isWorkerThread || false;
	}
	static get workerData() {
		return process.__tinypool_state__?.workerData || void 0;
	}
	static get version() {
		const { version } = JSON.parse(readFileSync(join(__dirname, "../package.json"), "utf-8"));
		return version;
	}
	static move(val) {
		if (val != null && typeof val === "object" && typeof val !== "function") {
			if (!isTransferable(val)) if (types.isArrayBufferView(val)) val = new ArrayBufferViewTransferable(val);
			else val = new DirectlyTransferable(val);
			markMovable(val);
		}
		return val;
	}
	static get transferableSymbol() {
		return kTransferable;
	}
	static get valueSymbol() {
		return kValue;
	}
	static get queueOptionsSymbol() {
		return kQueueOptions;
	}
};
const _workerId = process.__tinypool_state__?.workerId;
var src_default = Tinypool;

//#endregion
export { Tinypool, src_default as default, isMovable, isTaskQueue, isTransferable, kFieldCount, kQueueOptions, kRequestCountField, kResponseCountField, kTransferable, kValue, markMovable, _workerId as workerId };