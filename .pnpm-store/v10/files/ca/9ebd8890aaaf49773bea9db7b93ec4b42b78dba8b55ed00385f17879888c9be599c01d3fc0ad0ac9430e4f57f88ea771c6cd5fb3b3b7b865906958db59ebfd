import { Hookified } from "hookified";
/**
* In-memory message provider for testing and simple use cases.
* Messages are stored and delivered synchronously in memory without persistence.
*/
var MemoryMessageProvider = class {
	_subscriptions;
	_id;
	/**
	* Creates an instance of MemoryMessageProvider.
	* @param {MemoryMessageProviderOptions} options - Optional configuration for the provider.
	*/
	constructor(options) {
		this._subscriptions = /* @__PURE__ */ new Map();
		this._id = options?.id ?? "@qified/memory";
	}
	/**
	* Gets the provider ID for the memory message provider.
	* @returns {string} The provider ID.
	*/
	get id() {
		return this._id;
	}
	/**
	* Sets the provider ID for the memory message provider.
	* @param {string} id The new provider ID.
	*/
	set id(id) {
		this._id = id;
	}
	/**
	* Gets the subscriptions map for all topics.
	* @returns {Map<string, TopicHandler[]>} The subscriptions map.
	*/
	get subscriptions() {
		return this._subscriptions;
	}
	/**
	* Sets the subscriptions map.
	* @param {Map<string, TopicHandler[]>} value The new subscriptions map.
	*/
	set subscriptions(value) {
		this._subscriptions = value;
	}
	/**
	* Publishes a message to a specified topic.
	* All handlers subscribed to the topic will be called synchronously in order.
	* @param {string} topic The topic to publish the message to.
	* @param {Message} message The message to publish.
	* @returns {Promise<void>} A promise that resolves when all handlers have been called.
	*/
	async publish(topic, message) {
		const messageWithProvider = {
			...message,
			providerId: this._id
		};
		const subscriptions = this._subscriptions.get(topic) ?? [];
		for (const subscription of subscriptions) await subscription.handler(messageWithProvider);
	}
	/**
	* Subscribes to a specified topic.
	* @param {string} topic The topic to subscribe to.
	* @param {TopicHandler} handler The handler to process incoming messages.
	* @returns {Promise<void>} A promise that resolves when the subscription is complete.
	*/
	async subscribe(topic, handler) {
		if (!this._subscriptions.has(topic)) this._subscriptions.set(topic, []);
		this._subscriptions.get(topic)?.push(handler);
	}
	/**
	* Unsubscribes from a specified topic.
	* If an ID is provided, only the handler with that ID is removed.
	* If no ID is provided, all handlers for the topic are removed.
	* @param {string} topic The topic to unsubscribe from.
	* @param {string} [id] Optional identifier for the subscription to remove.
	* @returns {Promise<void>} A promise that resolves when the unsubscription is complete.
	*/
	async unsubscribe(topic, id) {
		if (id) {
			const subscriptions = this._subscriptions.get(topic);
			if (subscriptions) this._subscriptions.set(topic, subscriptions.filter((sub) => sub.id !== id));
		} else this._subscriptions.delete(topic);
	}
	/**
	* Disconnects and clears all subscriptions.
	* @returns {Promise<void>} A promise that resolves when the disconnection is complete.
	*/
	async disconnect() {
		this._subscriptions.clear();
	}
};
/**
* In-memory task provider for testing and simple use cases.
* Tasks are stored and processed in memory without persistence.
* Supports task acknowledgment, rejection, retry, and timeout handling.
*/
var MemoryTaskProvider = class {
	_id;
	_timeout;
	_retries;
	_taskHandlers;
	_queues;
	_processing;
	_deadLetterQueue;
	_taskIdCounter = 0;
	_active = true;
	/**
	* Creates an instance of MemoryTaskProvider.
	* @param {MemoryTaskProviderOptions} options - Optional configuration for the provider.
	*/
	constructor(options) {
		this._id = options?.id ?? "@qified/memory";
		this._timeout = options?.timeout ?? 3e4;
		this._retries = options?.retries ?? 3;
		this._taskHandlers = /* @__PURE__ */ new Map();
		this._queues = /* @__PURE__ */ new Map();
		this._processing = /* @__PURE__ */ new Map();
		this._deadLetterQueue = /* @__PURE__ */ new Map();
	}
	/**
	* Gets the provider ID for the memory task provider.
	* @returns {string} The provider ID.
	*/
	get id() {
		return this._id;
	}
	/**
	* Sets the provider ID for the memory task provider.
	* @param {string} id The new provider ID.
	*/
	set id(id) {
		this._id = id;
	}
	/**
	* Gets the default timeout for task processing.
	* @returns {number} The timeout in milliseconds.
	*/
	get timeout() {
		return this._timeout;
	}
	/**
	* Sets the default timeout for task processing.
	* @param {number} timeout The timeout in milliseconds.
	*/
	set timeout(timeout) {
		this._timeout = timeout;
	}
	/**
	* Gets the default maximum retry attempts.
	* @returns {number} The maximum retry attempts.
	*/
	get retries() {
		return this._retries;
	}
	/**
	* Sets the default maximum retry attempts.
	* @param {number} retries The maximum retry attempts.
	*/
	set retries(retries) {
		this._retries = retries;
	}
	/**
	* Gets the task handlers map.
	* @returns {Map<string, TaskHandler[]>} The task handlers map.
	*/
	get taskHandlers() {
		return this._taskHandlers;
	}
	/**
	* Sets the task handlers map.
	* @param {Map<string, TaskHandler[]>} value The new task handlers map.
	*/
	set taskHandlers(value) {
		this._taskHandlers = value;
	}
	/**
	* Generates a unique task ID.
	* @returns {string} A unique task ID.
	*/
	generateTaskId() {
		return `task-${Date.now()}-${++this._taskIdCounter}`;
	}
	/**
	* Enqueues a task to a specific queue.
	* Automatically assigns ID and timestamp to the task.
	* @param {string} queue - The queue name to enqueue to.
	* @param {EnqueueTask} taskData - The task data to enqueue.
	* @returns {Promise<string>} The ID of the enqueued task.
	*/
	async enqueue(queue, taskData) {
		if (!this._active) throw new Error("TaskProvider has been disconnected");
		const task = {
			id: this.generateTaskId(),
			timestamp: Date.now(),
			...taskData
		};
		const queuedTask = {
			task,
			attempt: 0,
			deadlineAt: 0,
			processing: false
		};
		if (!this._queues.has(queue)) this._queues.set(queue, []);
		this._queues.get(queue)?.push(queuedTask);
		await this.processQueue(queue);
		return task.id;
	}
	/**
	* Registers a handler to process tasks from a queue.
	* Starts processing any pending tasks in the queue.
	* @param {string} queue - The queue name to dequeue from.
	* @param {TaskHandler} handler - The handler configuration.
	* @returns {Promise<void>}
	*/
	async dequeue(queue, handler) {
		if (!this._active) throw new Error("TaskProvider has been disconnected");
		if (!this._taskHandlers.has(queue)) this._taskHandlers.set(queue, []);
		this._taskHandlers.get(queue)?.push(handler);
		await this.processQueue(queue);
	}
	/**
	* Processes tasks in a queue by delivering them to registered handlers.
	* @param {string} queue - The queue name to process.
	*/
	async processQueue(queue) {
		/* v8 ignore next -- @preserve */
		if (!this._active) return;
		const handlers = this._taskHandlers.get(queue);
		if (!handlers || handlers.length === 0) return;
		const queuedTasks = this._queues.get(queue);
		if (!queuedTasks || queuedTasks.length === 0) return;
		const processingSet = this._processing.get(queue) ?? /* @__PURE__ */ new Set();
		this._processing.set(queue, processingSet);
		for (const queuedTask of queuedTasks) {
			if (queuedTask.processing || processingSet.has(queuedTask.task.id)) continue;
			queuedTask.processing = true;
			processingSet.add(queuedTask.task.id);
			for (const handler of handlers) this.processTask(queue, queuedTask, handler);
		}
	}
	/**
	* Processes a single task with a handler.
	* @param {string} queue - The queue name.
	* @param {QueuedTask} queuedTask - The queued task to process.
	* @param {TaskHandler} handler - The handler to process the task.
	*/
	async processTask(queue, queuedTask, handler) {
		const { task } = queuedTask;
		const maxRetries = task.maxRetries ?? this._retries;
		const timeout = task.timeout ?? this._timeout;
		queuedTask.attempt++;
		queuedTask.deadlineAt = Date.now() + timeout;
		let acknowledged = false;
		let rejected = false;
		const context = {
			ack: async () => {
				if (acknowledged || rejected) return;
				acknowledged = true;
				await this.removeTask(queue, task.id);
			},
			reject: async (requeue = true) => {
				if (acknowledged || rejected) return;
				rejected = true;
				if (requeue && queuedTask.attempt < maxRetries) {
					queuedTask.processing = false;
					this._processing.get(queue)?.delete(task.id);
					setTimeout(() => {
						this.processQueue(queue);
					}, 100);
				} else {
					await this.moveToDeadLetter(queue, task);
					await this.removeTask(queue, task.id);
				}
			},
			extend: async (ttl) => {
				if (acknowledged || rejected) return;
				queuedTask.deadlineAt = Date.now() + ttl;
				if (queuedTask.timeoutHandle) clearTimeout(queuedTask.timeoutHandle);
				/* v8 ignore next -- @preserve */
				queuedTask.timeoutHandle = setTimeout(() => {
					if (!acknowledged && !rejected) context.reject(true);
				}, ttl);
			},
			metadata: {
				attempt: queuedTask.attempt,
				maxRetries
			}
		};
		queuedTask.timeoutHandle = setTimeout(() => {
			if (!acknowledged && !rejected) context.reject(true);
		}, timeout);
		try {
			await handler.handler(task, context);
			if (!acknowledged && !rejected) await context.ack();
		} catch (_error) {
			if (!acknowledged && !rejected) await context.reject(true);
		} finally {
			if (queuedTask.timeoutHandle) clearTimeout(queuedTask.timeoutHandle);
		}
	}
	/**
	* Removes a task from the queue.
	* @param {string} queue - The queue name.
	* @param {string} taskId - The task ID to remove.
	*/
	async removeTask(queue, taskId) {
		const queuedTasks = this._queues.get(queue);
		if (queuedTasks) {
			const index = queuedTasks.findIndex((qt) => qt.task.id === taskId);
			if (index !== -1) queuedTasks.splice(index, 1);
		}
		this._processing.get(queue)?.delete(taskId);
	}
	/**
	* Moves a task to the dead-letter queue.
	* @param {string} queue - The original queue name.
	* @param {Task} task - The task to move.
	*/
	async moveToDeadLetter(queue, task) {
		const dlqKey = `${queue}:dead-letter`;
		if (!this._deadLetterQueue.has(dlqKey)) this._deadLetterQueue.set(dlqKey, []);
		this._deadLetterQueue.get(dlqKey)?.push(task);
	}
	/**
	* Unsubscribes a handler from a queue.
	* @param {string} queue - The queue name to unsubscribe from.
	* @param {string} [id] - Optional handler ID. If not provided, removes all handlers.
	* @returns {Promise<void>}
	*/
	async unsubscribe(queue, id) {
		if (id) {
			const handlers = this._taskHandlers.get(queue);
			if (handlers) this._taskHandlers.set(queue, handlers.filter((h) => h.id !== id));
		} else this._taskHandlers.delete(queue);
	}
	/**
	* Disconnects and clears all queues and handlers.
	* Stops all task processing.
	* @returns {Promise<void>}
	*/
	async disconnect() {
		this._active = false;
		for (const queuedTasks of this._queues.values()) for (const queuedTask of queuedTasks) if (queuedTask.timeoutHandle) clearTimeout(queuedTask.timeoutHandle);
		this._taskHandlers.clear();
		this._queues.clear();
		this._processing.clear();
		this._deadLetterQueue.clear();
	}
	/**
	* Gets all tasks in the dead-letter queue for a specific queue.
	* Useful for debugging and monitoring failed tasks.
	* @param {string} queue - The queue name.
	* @returns {Task[]} Array of tasks in the dead-letter queue.
	*/
	getDeadLetterTasks(queue) {
		const dlqKey = `${queue}:dead-letter`;
		return this._deadLetterQueue.get(dlqKey) ?? [];
	}
	/**
	* Gets the current state of a queue.
	* Useful for monitoring and debugging.
	* @param {string} queue - The queue name.
	* @returns {Object} Queue statistics.
	*/
	getQueueStats(queue) {
		const queuedTasks = this._queues.get(queue) ?? [];
		const processing = this._processing.get(queue)?.size ?? 0;
		const waiting = queuedTasks.filter((qt) => !qt.processing).length;
		const dlqKey = `${queue}:dead-letter`;
		return {
			waiting,
			processing,
			deadLetter: this._deadLetterQueue.get(dlqKey)?.length ?? 0
		};
	}
};
//#endregion
//#region src/index.ts
/**
* Standard events emitted by Qified.
*/
let QifiedEvents = /* @__PURE__ */ function(QifiedEvents) {
	QifiedEvents["error"] = "error";
	QifiedEvents["info"] = "info";
	QifiedEvents["warn"] = "warn";
	QifiedEvents["publish"] = "publish";
	QifiedEvents["subscribe"] = "subscribe";
	QifiedEvents["unsubscribe"] = "unsubscribe";
	QifiedEvents["disconnect"] = "disconnect";
	return QifiedEvents;
}({});
/**
* Hook event names for before/after lifecycle hooks.
* Before hooks receive a mutable context object that can be modified.
* After hooks receive the final context after the operation completes.
*/
let QifiedHooks = /* @__PURE__ */ function(QifiedHooks) {
	QifiedHooks["beforeSubscribe"] = "before:subscribe";
	QifiedHooks["afterSubscribe"] = "after:subscribe";
	QifiedHooks["beforePublish"] = "before:publish";
	QifiedHooks["afterPublish"] = "after:publish";
	QifiedHooks["beforeUnsubscribe"] = "before:unsubscribe";
	QifiedHooks["afterUnsubscribe"] = "after:unsubscribe";
	QifiedHooks["beforeDisconnect"] = "before:disconnect";
	QifiedHooks["afterDisconnect"] = "after:disconnect";
	return QifiedHooks;
}({});
var Qified = class extends Hookified {
	_messageProviders = [];
	_taskProviders = [];
	/**
	* Creates an instance of Qified.
	* @param {QifiedOptions} options - Optional configuration for Qified.
	*/
	constructor(options) {
		super(options);
		if (options?.messageProviders) if (Array.isArray(options?.messageProviders)) this._messageProviders = options.messageProviders;
		else this._messageProviders = [options?.messageProviders];
		if (options?.taskProviders) if (Array.isArray(options?.taskProviders)) this._taskProviders = options.taskProviders;
		else this._taskProviders = [options?.taskProviders];
	}
	/**
	* Gets or sets the message providers.
	* @returns {MessageProvider[]} The array of message providers.
	*/
	get messageProviders() {
		return this._messageProviders;
	}
	/**
	* Sets the message providers.
	* @param {MessageProvider[]} providers - The array of message providers to set.
	*/
	set messageProviders(providers) {
		this._messageProviders = providers;
	}
	/**
	* Gets or sets the task providers.
	* @returns {TaskProvider[]} The array of task providers.
	*/
	get taskProviders() {
		return this._taskProviders;
	}
	/**
	* Sets the task providers.
	* @param {TaskProvider[]} providers - The array of task providers to set.
	*/
	set taskProviders(providers) {
		this._taskProviders = providers;
	}
	/**
	* Subscribes to a topic. If you have multiple message providers, it will subscribe to the topic on all of them.
	* @param {string} topic - The topic to subscribe to.
	* @param {TopicHandler} handler - The handler to call when a message is published to the topic.
	*/
	async subscribe(topic, handler) {
		try {
			const context = {
				topic,
				handler
			};
			await this.hook(QifiedHooks.beforeSubscribe, context);
			const promises = this._messageProviders.map(async (provider) => provider.subscribe(context.topic, context.handler));
			await Promise.all(promises);
			await this.hook(QifiedHooks.afterSubscribe, {
				topic: context.topic,
				handler: context.handler
			});
			this.emit(QifiedEvents.subscribe, {
				topic: context.topic,
				handler: context.handler
			});
		} catch (error) {
			/* v8 ignore next -- @preserve */
			this.emit(QifiedEvents.error, error);
		}
	}
	/**
	* Publishes a message to a topic. If you have multiple message providers, it will publish the message to all of them.
	* @param {string} topic - The topic to publish to.
	* @param {Message} message - The message to publish.
	*/
	async publish(topic, message) {
		try {
			const context = {
				topic,
				message
			};
			await this.hook(QifiedHooks.beforePublish, context);
			const promises = this._messageProviders.map(async (provider) => provider.publish(context.topic, context.message));
			await Promise.all(promises);
			await this.hook(QifiedHooks.afterPublish, {
				topic: context.topic,
				message: context.message
			});
			this.emit(QifiedEvents.publish, {
				topic: context.topic,
				message: context.message
			});
		} catch (error) {
			/* v8 ignore next -- @preserve */
			this.emit(QifiedEvents.error, error);
		}
	}
	/**
	* Unsubscribes from a topic. If you have multiple message providers, it will unsubscribe from the topic on all of them.
	* If an ID is provided, it will unsubscribe only that handler. If no ID is provided, it will unsubscribe all handlers for the topic.
	* @param topic - The topic to unsubscribe from.
	* @param id - The optional ID of the handler to unsubscribe. If not provided, all handlers for the topic will be unsubscribed.
	*/
	async unsubscribe(topic, id) {
		try {
			const context = {
				topic,
				id
			};
			await this.hook(QifiedHooks.beforeUnsubscribe, context);
			const promises = this._messageProviders.map(async (provider) => provider.unsubscribe(context.topic, context.id));
			await Promise.all(promises);
			await this.hook(QifiedHooks.afterUnsubscribe, {
				topic: context.topic,
				id: context.id
			});
			this.emit(QifiedEvents.unsubscribe, {
				topic: context.topic,
				id: context.id
			});
		} catch (error) {
			/* v8 ignore next -- @preserve */
			this.emit(QifiedEvents.error, error);
		}
	}
	/**
	* Disconnects from all providers.
	* This method will call the `disconnect` method on each message provider.
	*/
	async disconnect() {
		try {
			const context = { providerCount: this._messageProviders.length };
			await this.hook(QifiedHooks.beforeDisconnect, context);
			const promises = this._messageProviders.map(async (provider) => provider.disconnect());
			await Promise.all(promises);
			this._messageProviders = [];
			await this.hook(QifiedHooks.afterDisconnect, { providerCount: context.providerCount });
			this.emit(QifiedEvents.disconnect);
		} catch (error) {
			/* v8 ignore next -- @preserve */
			this.emit(QifiedEvents.error, error);
		}
	}
};
//#endregion
export { MemoryMessageProvider, MemoryTaskProvider, Qified, QifiedEvents, QifiedHooks };
