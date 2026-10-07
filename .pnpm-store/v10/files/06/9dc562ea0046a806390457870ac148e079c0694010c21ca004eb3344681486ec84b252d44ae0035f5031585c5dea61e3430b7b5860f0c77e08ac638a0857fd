import v8 from 'node:v8';
import { r as runBaseTests } from '../chunks/base.DfmxU-tU.js';
import { c as createForksRpcOptions, u as unwrapSerializableConfig } from '../chunks/utils.CAioKnHs.js';
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

class ForksBaseWorker {
	getRpcOptions() {
		return createForksRpcOptions(v8);
	}
	async executeTests(method, state) {
		// TODO: don't rely on reassigning process.exit
		// https://github.com/vitest-dev/vitest/pull/4441#discussion_r1443771486
		const exit = process.exit;
		state.ctx.config = unwrapSerializableConfig(state.ctx.config);
		try {
			await runBaseTests(method, state);
		} finally {
			process.exit = exit;
		}
	}
	runTests(state) {
		return this.executeTests("run", state);
	}
	collectTests(state) {
		return this.executeTests("collect", state);
	}
}
const worker = new ForksBaseWorker();

export { worker as default };
