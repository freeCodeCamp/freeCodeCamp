import { isMainThread, parentPort } from 'node:worker_threads';
import { i as init } from './init.D98-gwRW.js';

if (isMainThread || !parentPort) throw new Error("Expected worker to be run in node:worker_threads");
function workerInit(options) {
	const { runTests } = options;
	init({
		post: (response) => parentPort.postMessage(response),
		on: (callback) => parentPort.on("message", callback),
		off: (callback) => parentPort.off("message", callback),
		teardown: () => parentPort.removeAllListeners("message"),
		runTests: async (state, traces) => runTests("run", state, traces),
		collectTests: async (state, traces) => runTests("collect", state, traces),
		setup: options.setup
	});
}

export { workerInit as w };
