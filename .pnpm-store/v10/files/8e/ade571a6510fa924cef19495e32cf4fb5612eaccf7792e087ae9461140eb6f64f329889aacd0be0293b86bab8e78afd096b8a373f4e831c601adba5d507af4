export {};

import * as worker_threads from "node:worker_threads";

type _BroadcastChannel = typeof globalThis extends { onmessage: any } ? {} : worker_threads.BroadcastChannel;
type _MessageChannel = typeof globalThis extends { onmessage: any } ? {} : worker_threads.MessageChannel;
type _MessagePort = typeof globalThis extends { onmessage: any } ? {} : worker_threads.MessagePort;

declare global {
    function structuredClone<T = any>(value: T, options?: worker_threads.StructuredSerializeOptions): T;

    interface BroadcastChannel extends _BroadcastChannel {}
    var BroadcastChannel: typeof globalThis extends { onmessage: any; BroadcastChannel: infer T } ? T
        : typeof worker_threads.BroadcastChannel;

    interface MessageChannel extends _MessageChannel {}
    var MessageChannel: typeof globalThis extends { onmessage: any; MessageChannel: infer T } ? T
        : typeof worker_threads.MessageChannel;

    interface MessagePort extends _MessagePort {}
    var MessagePort: typeof globalThis extends { onmessage: any; MessagePort: infer T } ? T
        : typeof worker_threads.MessagePort;
}
