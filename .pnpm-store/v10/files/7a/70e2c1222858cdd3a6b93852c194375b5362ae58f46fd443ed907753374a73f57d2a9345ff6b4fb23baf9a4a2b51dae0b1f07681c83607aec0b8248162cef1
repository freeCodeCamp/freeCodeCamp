/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');

/**
 * The compiler profiler builds a "call graph" of high level operations as a
 * means of tracking time spent over the course of running the compiler.
 */

type Trace =
  | MetadataTrace
  | BeginDurationTrace
  | EndDurationTrace
  | EventTrace
  | BeginAsyncTrace
  | EndAsyncTrace;

type MetadataTrace = {|
  ph: 'M',
  pid: number, // Process ID
  tid: number, // Thread ID
  name: 'process_name' | 'thread_name',
  args: {|name: string|},
|};

type BeginDurationTrace = {|
  ph: 'B',
  name: string, // Event name
  pid: number, // Process ID
  tid: number, // Thread ID
  ts: number, // Relative timestamp integer microseconds
|};

type EndDurationTrace = {|
  ph: 'E',
  name: string, // Event name
  pid: number, // Process ID
  tid: number, // Thread ID
  ts: number, // Relative timestamp integer microseconds
|};

type EventTrace = {|
  ph: 'X',
  name: string, // Event name
  pid: number, // Process ID
  tid: number, // Thread ID
  ts: number, // Relative timestamp integer in microseconds
  dur: number, // Duration timestamp integer in microseconds
|};

type BeginAsyncTrace = {|
  ph: 'b',
  name: string, // Async event name
  cat: string, // Async category
  id: number, // Async tree ID
  pid: number, // Process ID
  tid: number, // Thread ID
  ts: number, // Relative timestamp integer microseconds
|};

type EndAsyncTrace = {|
  ph: 'e',
  name: string, // Async event name
  cat: string, // Async category
  id: number, // Async tree ID
  pid: number, // Process ID
  tid: number, // Thread ID
  ts: number, // Relative timestamp integer microseconds
|};

let enabled = false;
const traces: Array<Trace> = [
  {
    ph: 'M',
    pid: 0,
    tid: 0,
    name: 'process_name',
    args: {name: 'relay-compiler'},
  },
  {
    ph: 'M',
    pid: 0,
    tid: 0,
    name: 'thread_name',
    args: {name: 'relay-compiler'},
  },
];
const stack: Array<BeginDurationTrace> = [];

function enable(): void {
  enabled = true;
}

function getTraces(): Array<Trace> {
  return traces;
}

/**
 * Run the provided function as part of a stack profile.
 */
function run<T>(name: string, fn: () => T): T {
  return instrument(fn, name)();
}

/**
 * Run the provided async function as part context in a stack profile.
 * See instrumentAsyncContext() for limitations and usage notes.
 */
function asyncContext<T: Promise<$FlowFixMe>>(name: string, fn: () => T): T {
  return instrumentAsyncContext(fn, name)();
}

/**
 * Wait for the provided async operation as an async profile.
 */
function waitFor<T: Promise<$FlowFixMe>>(name: string, fn: () => T): T {
  return instrumentWait(fn, name)();
}

/**
 * Return a new instrumented sync function to be part of a stack profile.
 *
 * This instruments synchronous functions to be displayed in a stack
 * visualization. To instrument async functions, see instrumentAsyncContext()
 * and instrumentWait().
 */
function instrument<F: (...$FlowFixMe) => mixed>(fn: F, name?: string): F {
  if (!enabled) {
    return fn;
  }
  const profileName =
    name ??
    // $FlowFixMe[prop-missing] - Flow no longer considers statics of functions as any
    fn.displayName ??
    fn.name;
  const instrumented = function() {
    const traceId = start(profileName);
    try {
      return fn.apply(this, arguments);
    } finally {
      end(traceId);
    }
  };
  instrumented.displayName = profileName;
  return (instrumented: $FlowFixMe);
}

/**
 * Return a new instrumented async function which provides context for a stack.
 *
 * Because the resulting profiling information will be incorporated into a
 * stack visualization, the instrumented function must represent a distinct
 * region of time which does not overlap with any other async context.
 *
 * In other words, functions instrumented with instrumentAsyncContext must not
 * run in parallel via Promise.all().
 *
 * To instrument functions which will run in parallel, use instrumentWait().
 */
function instrumentAsyncContext<F: (...$FlowFixMe) => Promise<$FlowFixMe>>(
  fn: F,
  name?: string,
): F {
  if (!enabled) {
    return fn;
  }

  const profileName: string =
    name ??
    // $FlowFixMe[prop-missing] - Flow no longer considers statics of functions as any
    fn.displayName ??
    fn.name;
  const instrumented = async function() {
    const traceId = start(profileName);
    try {
      return await fn.apply(this, arguments);
    } finally {
      end(traceId);
    }
  };
  instrumented.displayName = profileName;
  return (instrumented: $FlowFixMe);
}

/**
 * Return a new instrumented function which performs an awaited async operation.
 *
 * The instrumented function is not included in the overall run time of the
 * compiler, instead it captures the time waiting on some asynchronous external
 * resource such as network or filesystem which are often run in parallel.
 */
function instrumentWait<F: (...$FlowFixMe) => Promise<$FlowFixMe>>(
  fn: F,
  name?: string,
): F {
  if (!enabled) {
    return fn;
  }
  const profileName: string =
    name ??
    // $FlowFixMe[prop-missing] - Flow no longer considers statics of functions as any
    fn.displayName ??
    fn.name;
  const instrumented = async function() {
    const traceId = startWait(profileName);
    try {
      return await fn.apply(this, arguments);
    } finally {
      end(traceId);
    }
  };
  instrumented.displayName = profileName;
  return (instrumented: $FlowFixMe);
}

const T_ZERO = process.hrtime();

// Return a Uint32 of microtime duration since program start.
function microtime(): number {
  const hrtime = process.hrtime(T_ZERO);
  // eslint-disable-next-line no-bitwise
  return 0 | (hrtime[0] * 1e6 + Math.round(hrtime[1] / 1e3));
}

/**
 * Start a stack profile with a particular name, returns an ID to pass to end().
 *
 * Other profiles may start before this one ends, which will be represented as
 * nested operations, however all nested operations must end before this ends.
 *
 * In particular, be careful to end after errors.
 */
function start(name: string): number {
  const beginTrace = {
    ph: 'B',
    name,
    pid: 0,
    tid: 0,
    ts: microtime(),
  };
  traces.push(beginTrace);
  stack.push(beginTrace);
  return traces.length - 1;
}

let asyncID = 0;

/**
 * Start an async wait profile with a particular name, returns an ID to pass
 * to end().
 *
 * Other profiles may start before this one ends, which will be represented as
 * nested operations, however all nested operations must end before this ends.
 *
 * In particular, be careful to end after errors.
 */
function startWait(name: string): number {
  traces.push({
    ph: 'b',
    name,
    cat: 'wait',
    id: asyncID++,
    pid: 0,
    tid: 0,
    ts: microtime(),
  });
  return traces.length - 1;
}

function end(traceIdx: number): void {
  const trace = traces[traceIdx];

  if (trace.ph === 'b') {
    traces.push({
      ph: 'e',
      cat: trace.cat,
      name: trace.name,
      id: trace.id,
      pid: trace.pid,
      tid: trace.tid,
      ts: microtime(),
    });
    return;
  }

  invariant(trace.ph === 'B', 'Begin trace phase');
  invariant(
    stack.pop() === trace,
    'GraphQLCompilerProfiler: The profile trace %s ended before nested traces. ' +
      'If it is async, try using Profile.waitFor or Profile.profileWait.',
    trace.name,
  );

  const prevTrace = traces[traces.length - 1];

  if (trace === prevTrace) {
    traces[traceIdx] = {
      ph: 'X',
      name: trace.name,
      pid: trace.pid,
      tid: trace.tid,
      ts: trace.ts,
      dur: microtime() - trace.ts,
    };
    return;
  }

  traces.push({
    ph: 'E',
    name: trace.name,
    pid: trace.pid,
    tid: trace.tid,
    ts: microtime(),
  });
}

module.exports = {
  enable,
  getTraces,
  run,
  asyncContext,
  waitFor,
  instrument,
  instrumentAsyncContext,
  instrumentWait,
  start,
  startWait,
  end,
};
