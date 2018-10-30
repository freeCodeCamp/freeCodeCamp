# jest-worker

Module for executing heavy tasks under forked processes in parallel, by
providing a `Promise` based interface, minimum overhead, and bound workers.

The module works by providing an absolute path of the module to be loaded in all
forked processes. Files relative to a node module are also accepted. All methods
are exposed on the parent process as promises, so they can be `await`'ed. Child
(worker) methods can either be synchronous or asynchronous.

The module also implements support for bound workers. Binding a worker means
that, based on certain parameters, the same task will always be executed by the
same worker. The way bound workers work is by using the returned string of the
`computeWorkerKey` method. If the string was used before for a task, the call
will be queued to the related worker that processed the task earlier; if not, it
will be executed by the first available worker, then sticked to the worker that
executed it; so the next time it will be processed by the same worker. If you
have no preference on the worker executing the task, but you have defined a
`computeWorkerKey` method because you want _some_ of the tasks to be sticked,
you can return `null` from it.

The list of exposed methods can be explicitly provided via the `exposedMethods`
option. If it is not provided, it will be obtained by requiring the child module
into the main process, and analyzed via reflection. Check the "minimal example"
section for a valid one.

## Install

```sh
$ yarn add jest-worker
```

## Example

This example covers the minimal usage:

### File `parent.js`

```javascript
import Worker from 'jest-worker';

async function main() {
  const worker = new Worker(require.resolve('./worker'));
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

## API

The only exposed method is a constructor (`Worker`) that is initialized by
passing the worker path, plus an options object.

### `workerPath: string` (required)

Node module name or absolute path of the file to be loaded in the child
processes. Use `require.resolve` to transform a relative path into an absolute
one.

### `options: Object` (optional)

#### `exposedMethods: $ReadOnlyArray<string>` (optional)

List of method names that can be called on the child processes from the parent
process. You cannot expose any method named like a public `Worker` method, or
starting with `_`. If you use method auto-discovery, then these methods will not
be exposed, even if they exist.

#### `numWorkers: number` (optional)

Amount of workers to spawn. Defaults to the number of CPUs minus 1.

#### `maxRetries: number` (optional)

Maximum amount of times that a dead child can be re-spawned, per call. Defaults
to `3`, pass `Infinity` to allow endless retries.

#### `forkOptions: Object` (optional)

Allow customizing all options passed to `childProcess.fork`. By default, some
values are set (`cwd`, `env` and `execArgv`), but you can override them and
customize the rest. For a list of valid values, check
[the Node documentation](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options).

#### `computeWorkerKey: (method: string, ...args: Array<any>) => ?string` (optional)

Every time a method exposed via the API is called, `computeWorkerKey` is also
called in order to bound the call to a worker. This is useful for workers that
are able to cache the result or part of it. You bound calls to a worker by
making `computeWorkerKey` return the same identifier for all different calls. If
you do not want to bind the call to any worker, return `null`.

The callback you provide is called with the method name, plus all the rest of
the arguments of the call. Thus, you have full control to decide what to return.
Check a practical example on bound workers under the "bound worker usage"
section.

By default, no process is bound to any worker.

## Worker

The returned `Worker` instance has all the exposed methods, plus some additional
ones to interact with the workers itself:

### `getStdout(): Readable`

Returns a `ReadableStream` where the standard output of all workers is piped.
Note that the `silent` option of the child workers must be set to `true` to make
it work. This is the default set by `jest-worker`, but keep it in mind when
overriding options through `forkOptions`.

### `getStderr(): Readable`

Returns a `ReadableStream` where the standard error of all workers is piped.
Note that the `silent` option of the child workers must be set to `true` to make
it work. This is the default set by `jest-worker`, but keep it in mind when
overriding options through `forkOptions`.

### `end()`

Finishes the workers by killing all workers. No further calls can be done to the
`Worker` instance.

**Note:** Each worker has a unique id (index that starts with `1`) which is
available on `process.env.JEST_WORKER_ID`

# More examples

## Standard usage

This example covers the standard usage:

### File `parent.js`

```javascript
import Worker from 'jest-worker';

async function main() {
  const myWorker = new Worker(require.resolve('./worker'), {
    exposedMethods: ['foo', 'bar', 'getWorkerId'],
    numWorkers: 4,
  });

  console.log(await myWorker.foo('Alice')); // "Hello from foo: Alice"
  console.log(await myWorker.bar('Bob')); // "Hello from bar: Bob"
  console.log(await myWorker.getWorkerId()); // "3" -> this message has sent from the 3rd worker

  myWorker.end();
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
import Worker from 'jest-worker';

async function main() {
  const myWorker = new Worker(require.resolve('./worker'), {
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

  myWorker.end();
}

main();
```

### File `worker.js`

```javascript
import babel from 'babel-core';

const cache = Object.create(null);

export function transform(filename) {
  if (cache[filename]) {
    return cache[filename];
  }

  // jest-worker can handle both immediate results and thenables. If a
  // thenable is returned, it will be await'ed until it resolves.
  return new Promise((resolve, reject) => {
    babel.transformFile(filename, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve((cache[filename] = result));
      }
    });
  });
}
```
