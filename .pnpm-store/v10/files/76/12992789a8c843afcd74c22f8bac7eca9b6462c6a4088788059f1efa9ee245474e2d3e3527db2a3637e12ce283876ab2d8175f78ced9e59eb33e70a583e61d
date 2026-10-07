import { W as WorkerGlobalState, a as WorkerSetupContext, B as BirpcOptions } from './chunks/worker.d.ZpHpO4yb.js';
import { T as Traces } from './chunks/traces.d.D2T_R8rx.js';
import { Awaitable } from '@vitest/utils';
import { ModuleRunner } from 'vite/module-runner';
import { R as RuntimeRPC } from './chunks/rpc.d.B_8sPU0w.js';
import '@vitest/runner';
import './chunks/config.d.A1h_Y6Jt.js';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/utils/diff';
import './chunks/environment.d.CrsxCzP1.js';

/** @experimental */
declare function setupBaseEnvironment(context: WorkerSetupContext): Promise<() => Promise<void>>;
/** @experimental */
declare function runBaseTests(method: "run" | "collect", state: WorkerGlobalState, traces: Traces): Promise<void>;

type WorkerRpcOptions = Pick<BirpcOptions<RuntimeRPC>, "on" | "off" | "post" | "serialize" | "deserialize">;
interface VitestWorker extends WorkerRpcOptions {
	runTests: (state: WorkerGlobalState, traces: Traces) => Awaitable<unknown>;
	collectTests: (state: WorkerGlobalState, traces: Traces) => Awaitable<unknown>;
	onModuleRunner?: (moduleRunner: ModuleRunner) => Awaitable<unknown>;
	setup?: (context: WorkerSetupContext) => void | Promise<() => Promise<unknown>>;
}

interface Options extends VitestWorker {
	teardown?: () => void;
}
/** @experimental */
declare function init(worker: Options): void;

export { init, runBaseTests, setupBaseEnvironment as setupEnvironment };
