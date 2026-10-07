import { r as runBaseTests } from '../chunks/base.DfmxU-tU.js';
import { a as createThreadsRpcOptions } from '../chunks/utils.CAioKnHs.js';
import 'vite-node/client';
import '../chunks/execute.B7h3T_Hc.js';
import 'node:fs';
import 'node:url';
import 'node:vm';
import '@vitest/utils/error';
import 'pathe';
import 'vite-node/utils';
import '../path.js';
import 'node:path';
import '@vitest/mocker';
import 'node:module';
import '@vitest/utils';
import '../chunks/utils.XdZDrNZV.js';

class ThreadsBaseWorker {
	getRpcOptions(ctx) {
		return createThreadsRpcOptions(ctx);
	}
	runTests(state) {
		return runBaseTests("run", state);
	}
	collectTests(state) {
		return runBaseTests("collect", state);
	}
}
const worker = new ThreadsBaseWorker();

export { worker as default };
