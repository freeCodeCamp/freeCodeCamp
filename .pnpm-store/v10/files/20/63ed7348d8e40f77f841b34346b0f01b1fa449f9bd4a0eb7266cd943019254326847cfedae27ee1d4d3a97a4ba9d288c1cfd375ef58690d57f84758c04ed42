import { W as WorkerGlobalState, C as ContextRPC, B as BirpcOptions, R as RuntimeRPC } from './chunks/worker.d.1GmBbd7G.js';
import { Awaitable } from '@vitest/utils';
import * as v8 from 'v8';
import { a as SerializedConfig } from './chunks/config.d.D2ROskhv.js';
import { W as WorkerContext } from './chunks/worker.d.CKwWzBSj.js';
import '@vitest/runner';
import 'vite-node';
import './chunks/environment.d.cL3nLXbE.js';
import 'vitest/optional-types.js';
import '@vitest/snapshot';
import '@vitest/pretty-format';
import '@vitest/snapshot/environment';
import '@vitest/utils/diff';
import 'node:worker_threads';

declare function provideWorkerState(context: any, state: WorkerGlobalState): WorkerGlobalState;

declare function run(ctx: ContextRPC): Promise<void>;
declare function collect(ctx: ContextRPC): Promise<void>;

declare function runBaseTests(method: "run" | "collect", state: WorkerGlobalState): Promise<void>;

type WorkerRpcOptions = Pick<BirpcOptions<RuntimeRPC>, "on" | "post" | "serialize" | "deserialize">;
interface VitestWorker {
	getRpcOptions: (ctx: ContextRPC) => WorkerRpcOptions;
	runTests: (state: WorkerGlobalState) => Awaitable<unknown>;
	collectTests: (state: WorkerGlobalState) => Awaitable<unknown>;
}

declare function createThreadsRpcOptions({ port }: WorkerContext): WorkerRpcOptions;
declare function createForksRpcOptions(nodeV8: typeof v8): WorkerRpcOptions;
/**
* Reverts the wrapping done by `utils/config-helpers.ts`'s `wrapSerializableConfig`
*/
declare function unwrapSerializableConfig(config: SerializedConfig): SerializedConfig;

declare function runVmTests(method: "run" | "collect", state: WorkerGlobalState): Promise<void>;

export { collect as collectVitestWorkerTests, createForksRpcOptions, createThreadsRpcOptions, provideWorkerState, runBaseTests, run as runVitestWorker, runVmTests, unwrapSerializableConfig };
export type { VitestWorker, WorkerRpcOptions };
