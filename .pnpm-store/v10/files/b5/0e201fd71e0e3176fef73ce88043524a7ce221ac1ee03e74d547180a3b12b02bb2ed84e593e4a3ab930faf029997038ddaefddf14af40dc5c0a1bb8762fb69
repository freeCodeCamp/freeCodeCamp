# jest-worker

Module for executing heavy tasks under forked processes in parallel, by providing a `Promise` based interface, minimum overhead, and bound workers.

The module works by providing an absolute path of the module to be loaded in all forked processes. Files relative to a node module are also accepted. All methods are exposed on the parent process as promises, so they can be `await`'ed. Child (worker) methods can either be synchronous or asynchronous.

The module also implements support for bound workers. Binding a worker means that, based on certain parameters, the same task will always be executed by the same worker. The way bound workers work is by using the returned string of the `computeWorkerKey` method. If the string was used before for a task, the call will be queued to the related worker that processed the task earlier; if not, it will be executed by the first available worker, then sticked to the worker that executed it; so the next time it will be processed by the same worker. If you have no preference on the worker executing the task, but you have defined a `computeWorkerKey` method because you want _some_ of the tasks to be sticked, you can return `null` from it.

The list of exposed methods can be explicitly provided via the `exposedMethods` option. If it is not provided, it will be obtained by requiring the child module into the main process, and analyzed via reflection. Check the "minimal example" section for a valid one.

## Install

```sh
$ yarn add jest-worker
```

## Example

This example covers the minimal usage:

### File `parent.js`

```javascript
import {Worker as JestWorker} from 'jest-worker';

async function main() {
  const worker = new JestWorker(require.resolve('./Worker'));
  const result = await worker.hello('Alice'); // "Hello, Alice"
}

main();
```

### File `worker.js`

```javascript
export function hello(param) {
  return 'Hello, ' + param;
}
```

## Experimental worker

Node 10 shipped with [worker-threads](https://nodejs.org/api/worker_threads.html), a "threading API" that uses SharedArrayBuffers to communicate between the main process and its child threads. This experimental Node feature can significantly improve the communication time between parent and child processes in `jest-worker`.

Since `worker_threads` are considered experimental in Node, you have to opt-in to this behavior by passing `enableWorkerThreads: true` when instantiating the worker. While the feature was unflagged in Node 11.7.0, you'll need to run the Node process with the `--experimental-worker` flag for Node 10.

## API

The `Worker` export is a constructor that is initialized by passing the worker path, plus an options object.

### `workerPath: string` (required)

Node module name or absolute path of the file to be loaded in the child processes. Use `require.resolve` to transform a relative path into an absolute one.

### `options: Object` (optional)

#### `exposedMethods: $ReadOnlyArray<string>` (optional)

List of method names that can be called on the child processes from the parent process. You cannot expose any method named like a public `Worker` method, or starting with `_`. If you use method auto-discovery, then these methods will not be exposed, even if they exist.

#### `numWorkers: number` (optional)

Amount of workers to spawn. Defaults to the number of CPUs minus 1.

#### `maxRetries: number` (optional)

Maximum amount of times that a dead child can be re-spawned, per call. Defaults to `3`, pass `Infinity` to allow endless retries.

#### `forkOptions: Object` (optional)

Allow customizing all options passed to `childProcess.fork`. By default, some values are set (`cwd`, `env` and `execArgv`), but you can override them and customize the rest. For a list of valid values, check [the Node documentation](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options).

#### `computeWorkerKey: (method: string, ...args: Array<any>) => ?string` (optional)

Every time a method exposed via the API is called, `computeWorkerKey` is also called in order to bound the call to a worker. This is useful for workers that are able to cache the result or part of it. You bound calls to a worker by making `computeWorkerKey` return the same identifier for all different calls. If you do not want to bind the call to any worker, return `null`.

The callback you provide is called with the method name, plus all the rest of the arguments of the call. Thus, you have full control to decide what to return. Check a practical example on bound workers under the "bound worker usage" section.

By default, no process is bound to any worker.

#### `setupArgs: Array<mixed>` (optional)

The arguments that will be passed to the `setup` method during initialization.

#### `WorkerPool: (workerPath: string, options?: WorkerPoolOptions) => WorkerPoolInterface` (optional)

Provide a custom worker pool to be used for spawning child processes. By default, Jest will use a node thread pool if available and fall back to child process threads.

#### `enableWorkerThreads: boolean` (optional)

`jest-worker` will automatically detect if `worker_threads` are available, but will not use them unless passed `enableWorkerThreads: true`.

### `workerSchedulingPolicy: 'round-robin' | 'in-order'` (optional)

Specifies the policy how tasks are assigned to workers if multiple workers are _idle_:

- `round-robin` (default): The task will be sequentially distributed onto the workers. The first task is assigned to the worker 1, the second to the worker 2, to ensure that the work is distributed across workers.
- `in-order`: The task will be assigned to the first free worker starting with worker 1 and only assign the work to worker 2 if the worker 1 is busy.

Tasks are always assigned to the first free worker as soon as tasks start to queue up. The scheduling policy does not define the task scheduling which is always first-in, first-out.

### `taskQueue`: TaskQueue` (optional)

The task queue defines in which order tasks (method calls) are processed by the workers. `jest-worker` ships with a `FifoQueue` and `PriorityQueue`:

- `FifoQueue` (default): Processes the method calls (tasks) in the call order.
- `PriorityQueue`: Processes the method calls by a computed priority in natural ordering (lower priorities first). Tasks with the same priority are processed in any order (FIFO not guaranteed). The constructor accepts a single argument, the function that is passed the name of the called function and the arguments and returns a numerical value for the priority: `new require('jest-worker').PriorityQueue((method, filename) => filename.length)`.

## JestWorker

### Methods

The returned `JestWorker` instance has all the exposed methods, plus some additional ones to interact with the workers itself:

#### `getStdout(): Readable`

Returns a `ReadableStream` where the standard output of all workers is piped. Note that the `silent` option of the child workers must be set to `true` to make it work. This is the default set by `jest-worker`, but keep it in mind when overriding options through `forkOptions`.

#### `getStderr(): Readable`

Returns a `ReadableStream` where the standard error of all workers is piped. Note that the `silent` option of the child workers must be set to `true` to make it work. This is the default set by `jest-worker`, but keep it in mind when overriding options through `forkOptions`.

#### `end()`

Finishes the workers by killing all workers. No further calls can be done to the `Worker` instance.

Returns a Promise that resolves with `{ forceExited: boolean }` once all workers are dead. If `forceExited` is `true`, at least one of the workers did not exit gracefully, which likely happened because it executed a leaky task that left handles open. This should be avoided, force exiting workers is a last resort to prevent creating lots of orphans.

**Note:**

`await`ing the `end()` Promise immediately after the workers are no longer needed before proceeding to do other useful things in your program may not be a good idea. If workers have to be force exited, `jest-worker` may go through multiple stages of force exiting (e.g. SIGTERM, later SIGKILL) and give the worker overall around 1 second time to exit on its own. During this time, your program will wait, even though it may not be necessary that all workers are dead before continuing execution.

Consider deliberately leaving this Promise floating (unhandled resolution). After your program has done the rest of its work and is about to exit, the Node process will wait for the Promise to resolve after all workers are dead as the last event loop task. That way you parallelized computation time of your program and waiting time and you didn't delay the outputs of your program unnecessarily.

### Worker IDs

Each worker has a unique id (index that starts with `1`), which is available inside the worker as `process.env.JEST_WORKER_ID`.

## Setting up and tearing down the child process

The child process can define two special methods (both of them can be asynchronous):

- `setup()`: If defined, it's executed before the first call to any method in the child.
- `teardown()`: If defined, it's executed when the farm ends.

# More examples

## Standard usage

This example covers the standard usage:

### File `parent.js`

```javascript
import {Worker as JestWorker} from 'jest-worker';

async function main() {
  const myWorker = new JestWorker(require.resolve('./Worker'), {
    exposedMethods: ['foo', 'bar', 'getWorkerId'],
    numWorkers: 4,
  });

  console.log(await myWorker.foo('Alice')); // "Hello from foo: Alice"
  console.log(await myWorker.bar('Bob')); // "Hello from bar: Bob"
  console.log(await myWorker.getWorkerId()); // "3" -> this message has sent from the 3rd worker

  const {forceExited} = await myWorker.end();
  if (forceExited) {
    console.error('Workers failed to exit gracefully');
  }
}

main();
```

### File `worker.js`

```javascript
export function foo(param) {
  return 'Hello from foo: ' + param;
}

export function bar(param) {
  return 'Hello from bar: ' + param;
}

export function getWorkerId() {
  return process.env.JEST_WORKER_ID;
}
```

## Bound worker usage:

This example covers the usage with a `computeWorkerKey` method:

### File `parent.js`

```javascript
import {Worker as JestWorker} from 'jest-worker';

async function main() {
  const myWorker = new JestWorker(require.resolve('./Worker'), {
    computeWorkerKey: (method, filename) => filename,
  });

  // Transform the given file, within the first available worker.
  console.log(await myWorker.transform('/tmp/foo.js'));

  // Wait a bit.
  await sleep(10000);

  // Transform the same file again. Will immediately return because the
  // transformed file is cached in the worker, and `computeWorkerKey` ensures
  // the same worker that processed the file the first time will process it now.
  console.log(await myWorker.transform('/tmp/foo.js'));

  const {forceExited} = await myWorker.end();
  if (forceExited) {
    console.error('Workers failed to exit gracefully');
  }
}

main();
```

### File `worker.js`

```javascript
import babel from '@babel/core';

const cache = Object.create(null);

export function transform(filename) {
  if (cache[filename]) {
    return cache[filename];
  }

  // jest-worker can handle both immediate results and thenables. If a
  // thenable is returned, it will be await'ed until it resolves.
  return babel.transformFileAsync(filename).then(result => {
    cache[filename] = result;

    return result;
  });
}
```
