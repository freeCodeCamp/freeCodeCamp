// definitions for @algolia/events 4.0
// based of events@1.1.1
// Project: https://github.com/algolia/events
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
//                 Shenwei Wang <https://github.com/weareoutman>
//                 Haroen Viaene <https://github.com/haroenv>
// commented-out functions are 3.0 functions not implemented here

export type Listener = (...args: any[]) => void;

/**
 * A version of Node's require("events").EventEmitter
 */
export default class EventEmitter {
  static listenerCount(emitter: EventEmitter, type: string | number): number;
  static defaultMaxListeners: number;

  // eventNames(): Array<string | number>;
  setMaxListeners(n: number): this;
  // getMaxListeners(): number;
  emit(type: string | number, ...args: any[]): boolean;
  addListener(type: string | number, listener: Listener): this;
  on(type: string | number, listener: Listener): this;
  once(type: string | number, listener: Listener): this;
  // prependListener(type: string | number, listener: Listener): this;
  // prependOnceListener(type: string | number, listener: Listener): this;
  removeListener(type: string | number, listener: Listener): this;
  // off(type: string | number, listener: Listener): this;
  removeAllListeners(type?: string | number): this;
  listeners(type: string | number): Listener[];
  listenerCount(type: string | number): number;
  // rawListeners(type: string | number): Listener[];
}
