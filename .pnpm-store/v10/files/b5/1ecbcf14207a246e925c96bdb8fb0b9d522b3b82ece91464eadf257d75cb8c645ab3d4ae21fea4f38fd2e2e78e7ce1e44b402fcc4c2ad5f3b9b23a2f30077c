import { HMRPayload, Plugin } from 'vite';
import { EventEmitter } from 'node:events';
import { C as CustomEventMap, a as ViteNodeRunner, H as HMRPayload$1, b as HotContext } from './index.d-DGmxD2U7.js';
import './trace-mapping.d-DLVdEqOp.js';

type EventType = string | symbol;
type Handler<T = unknown> = (event: T) => void;
interface Emitter<Events extends Record<EventType, unknown>> {
	on: <Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>) => void;
	off: <Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>) => void;
	emit: (<Key extends keyof Events>(type: Key, event: Events[Key]) => void) & (<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never) => void);
}
type HMREmitter = Emitter<{
	message: HMRPayload
}> & EventEmitter;
declare module "vite" {
	interface ViteDevServer {
		emitter: HMREmitter;
	}
}
declare function createHmrEmitter(): HMREmitter;
declare function viteNodeHmrPlugin(): Plugin;

/* eslint-disable no-console */

type ModuleNamespace = Record<string, any> & {
	[Symbol.toStringTag]: "Module"
};
type InferCustomEventPayload<T extends string> = T extends keyof CustomEventMap ? CustomEventMap[T] : any;
interface HotModule {
	id: string;
	callbacks: HotCallback[];
}
interface HotCallback {
	// the dependencies must be fetchable paths
	deps: string[];
	fn: (modules: (ModuleNamespace | undefined)[]) => void;
}
interface CacheData {
	hotModulesMap: Map<string, HotModule>;
	dataMap: Map<string, any>;
	disposeMap: Map<string, (data: any) => void | Promise<void>>;
	pruneMap: Map<string, (data: any) => void | Promise<void>>;
	customListenersMap: Map<string, ((data: any) => void)[]>;
	ctxToListenersMap: Map<string, Map<string, ((data: any) => void)[]>>;
	messageBuffer: string[];
	isFirstUpdate: boolean;
	pending: boolean;
	queued: Promise<(() => void) | undefined>[];
}
declare function getCache(runner: ViteNodeRunner): CacheData;
declare function sendMessageBuffer(runner: ViteNodeRunner, emitter: HMREmitter): void;
declare function reload(runner: ViteNodeRunner, files: string[]): Promise<any[]>;
declare function handleMessage(runner: ViteNodeRunner, emitter: HMREmitter, files: string[], payload: HMRPayload$1): Promise<void>;
declare function createHotContext(runner: ViteNodeRunner, emitter: HMREmitter, files: string[], ownerPath: string): HotContext;

export { createHmrEmitter, createHotContext, getCache, handleMessage, reload, sendMessageBuffer, viteNodeHmrPlugin };
export type { Emitter, EventType, HMREmitter, Handler, HotCallback, HotModule, InferCustomEventPayload, ModuleNamespace };
