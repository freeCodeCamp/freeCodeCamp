/// <reference types="node" resolution-mode="require"/>
import type { EventEmitter } from 'node:events';
type Origin = EventEmitter;
type Event = string | symbol;
type Fn = (...args: any[]) => void;
type Unhandler = {
    once: (origin: Origin, event: Event, fn: Fn) => void;
    unhandleAll: () => void;
};
export default function unhandle(): Unhandler;
export {};
