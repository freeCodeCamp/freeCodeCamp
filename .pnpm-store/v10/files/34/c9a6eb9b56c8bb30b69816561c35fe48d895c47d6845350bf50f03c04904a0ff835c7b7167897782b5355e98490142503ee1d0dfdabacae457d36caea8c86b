import { stderr, stdout } from "../utils-De75vAgL.js";
import { getHandler, throwInNextTick } from "../utils-B--2TaWv.js";

//#region src/entry/process.ts
process.__tinypool_state__ = {
	isChildProcess: true,
	isTinypoolWorker: true,
	workerData: null,
	workerId: Number(process.env.TINYPOOL_WORKER_ID)
};
const memoryUsage = process.memoryUsage.bind(process);
const send = process.send.bind(process);
process.on("message", (message) => {
	if (!message || !message.__tinypool_worker_message__) return;
	if (message.source === "pool") {
		const { filename, name } = message;
		(async function() {
			if (filename !== null) await getHandler(filename, name);
			send({
				ready: true,
				source: "pool",
				__tinypool_worker_message__: true
			}, () => {});
		})().catch(throwInNextTick);
		return;
	}
	if (message.source === "port") {
		onMessage(message).catch(throwInNextTick);
		return;
	}
	throw new Error(`Unexpected TinypoolWorkerMessage ${JSON.stringify(message)}`);
});
async function onMessage(message) {
	const { taskId, task, filename, name } = message;
	let response;
	try {
		const handler = await getHandler(filename, name);
		if (handler === null) throw new Error(`No handler function "${name}" exported from "${filename}"`);
		const result = await handler(task);
		response = {
			source: "port",
			__tinypool_worker_message__: true,
			taskId,
			result,
			error: null,
			usedMemory: memoryUsage().heapUsed
		};
		if (stdout()?.writableLength > 0) await new Promise((resolve) => process.stdout.write("", resolve));
		if (stderr()?.writableLength > 0) await new Promise((resolve) => process.stderr.write("", resolve));
	} catch (error) {
		response = {
			source: "port",
			__tinypool_worker_message__: true,
			taskId,
			result: null,
			error: serializeError(error),
			usedMemory: memoryUsage().heapUsed
		};
	}
	send(response);
}
function serializeError(error) {
	if (error instanceof Error) return {
		...error,
		name: error.name,
		stack: error.stack,
		message: error.message
	};
	return String(error);
}

//#endregion