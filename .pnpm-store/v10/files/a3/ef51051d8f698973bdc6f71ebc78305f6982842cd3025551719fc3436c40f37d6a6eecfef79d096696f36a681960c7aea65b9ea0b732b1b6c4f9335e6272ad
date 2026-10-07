import { isMovable, kRequestCountField, kResponseCountField, kTransferable, kValue } from "../common-Qw-RoVFD.js";
import { stderr, stdout } from "../utils-De75vAgL.js";
import { getHandler, throwInNextTick } from "../utils-B--2TaWv.js";
import { parentPort, receiveMessageOnPort, workerData } from "node:worker_threads";

//#region src/entry/worker.ts
const [tinypoolPrivateData, workerData$1] = workerData;
process.__tinypool_state__ = {
	isWorkerThread: true,
	isTinypoolWorker: true,
	workerData: workerData$1,
	workerId: tinypoolPrivateData.workerId
};
const memoryUsage = process.memoryUsage.bind(process);
let useAtomics = process.env.PISCINA_DISABLE_ATOMICS !== "1";
parentPort.on("message", (message) => {
	useAtomics = process.env.PISCINA_DISABLE_ATOMICS === "1" ? false : message.useAtomics;
	const { port, sharedBuffer, filename, name } = message;
	(async function() {
		if (filename !== null) await getHandler(filename, name);
		const readyMessage = { ready: true };
		parentPort.postMessage(readyMessage);
		port.start();
		port.on("message", onMessage.bind(null, port, sharedBuffer));
		atomicsWaitLoop(port, sharedBuffer);
	})().catch(throwInNextTick);
});
let currentTasks = 0;
let lastSeenRequestCount = 0;
function atomicsWaitLoop(port, sharedBuffer) {
	if (!useAtomics) return;
	while (currentTasks === 0) {
		Atomics.wait(sharedBuffer, kRequestCountField, lastSeenRequestCount);
		lastSeenRequestCount = Atomics.load(sharedBuffer, kRequestCountField);
		let entry;
		while ((entry = receiveMessageOnPort(port)) !== void 0) onMessage(port, sharedBuffer, entry.message);
	}
}
function onMessage(port, sharedBuffer, message) {
	currentTasks++;
	const { taskId, task, filename, name } = message;
	(async function() {
		let response;
		let transferList = [];
		try {
			const handler = await getHandler(filename, name);
			if (handler === null) throw new Error(`No handler function "${name}" exported from "${filename}"`);
			let result = await handler(task);
			if (isMovable(result)) {
				transferList = transferList.concat(result[kTransferable]);
				result = result[kValue];
			}
			response = {
				taskId,
				result,
				error: null,
				usedMemory: memoryUsage().heapUsed
			};
			if (stdout()?.writableLength > 0) await new Promise((resolve) => process.stdout.write("", resolve));
			if (stderr()?.writableLength > 0) await new Promise((resolve) => process.stderr.write("", resolve));
		} catch (error) {
			response = {
				taskId,
				result: null,
				error,
				usedMemory: memoryUsage().heapUsed
			};
		}
		currentTasks--;
		port.postMessage(response, transferList);
		Atomics.add(sharedBuffer, kResponseCountField, 1);
		atomicsWaitLoop(port, sharedBuffer);
	})().catch(throwInNextTick);
}

//#endregion