import { EventEmitter } from "events";

declare function avvio(done?: Function): avvio.Avvio<null>;
declare function avvio<I>(
  instance: I,
  options?: avvio.Options,
  done?: Function
): avvio.Avvio<I>;

/**
 * Typescript cannot manage changes related to options "expose"
 * because undefined before runtime
 */
declare namespace avvio {
  type context<I> = I extends null ? Avvio<I> : mixedInstance<I>;
  type mixedInstance<I> = I & Server<I>;

  interface Options {
    expose?: {
      use?: string;
      after?: string;
      ready?: string;
      close?: string;
      onClose?: string;
    };
    autostart?: boolean;
    timeout?: number;
  }

  interface Plugin<O, I> {
    (server: context<I>, options: O, done: (err?: Error) => void): unknown;
  }

  interface Server<I> {
    use: Use<I>;
    after: After<I>;
    ready: Ready<I>;
    close: Close<I>;
    onClose: OnClose<I>;
  }

  interface Avvio<I> extends EventEmitter, Server<I> {
    on(event: "start", listener: () => void): this;
    on(event: "preReady", listener: () => void): this;
    on(event: "close", listener: () => void): this;

    start(): this;

    toJSON(): Object;

    prettyPrint(): string;

    override: (
      server: context<I>,
      fn: Plugin<any, I>,
      options: any
    ) => context<I>;

    started: boolean;
    booted: boolean;
  }

  // Avvio methods
  interface After<I, C = context<I>> {
    (fn: (err: Error) => void): C;
    (fn: (err: Error, done: Function) => void): C;
    (fn: (err: Error, context: C, done: Function) => void): C;
  }

  interface Use<I, C = context<I>> {
    <O>(fn: avvio.Plugin<O, I>, options?: O | ((server: C) => O)): C;
  }

  interface Ready<I, C = context<I>> {
    (): Promise<C>;
    (callback: (err?: Error) => void): void;
    (callback: (err: Error, done: Function) => void): void;
    (callback: (err: Error, context: C, done: Function) => void): void;
  }

  interface Close<I, C = context<I>> {
    (fn: (err: Error) => void): void;
    (fn: (err: Error, done: Function) => void): void;
    (fn: (err: Error, context: C, done: Function) => void): void;
  }

  interface OnClose<I, C = context<I>> {
    (fn: (context: C, done: Function) => void): C;
  }
}

export = avvio;
