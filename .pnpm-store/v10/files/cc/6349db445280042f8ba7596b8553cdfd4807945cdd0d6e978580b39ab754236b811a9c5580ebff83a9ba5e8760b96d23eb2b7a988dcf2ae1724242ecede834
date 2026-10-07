# workerpool history
https://github.com/josdejong/workerpool


## 2023-10-11, version 6.5.1

- Fix: `workerThreadOpts` not working when `workerType: auto`, see #357.


## 2023-09-13, version 6.5.0

- Implement support for passing options to web workers constructors (#400, 
  #322). Thanks @DonatJR.


## 2023-08-21, version 6.4.2

- Fix: a bug in the timeout of termination (#395, #387). Thanks @Michsior14.


## 2023-08-17, version 6.4.1

- Fix: worker termination before it's ready (#394, #387). Thanks @Michsior14.


## 2023-02-24, version 6.4.0

- Support transferable objects (#3, #374). Thanks @Michsior14.
- Implement a new callback `onTerminate` at the worker side, which can be used
  to clean up resources, and an option `workerTerminateTimeout` which forcefully 
  terminates a worker if it doesn't finish in time (#353, #377). 
  Thanks @Michsior14.
- Pass `workerThreadOpts` to the `onTerminateWorker` callback (#376). 
  Thanks @Michsior14.


## 2022-11-07, version 6.3.1

- Fix #318: debug ports not being released when terminating a pool.


## 2022-10-24, version 6.3.0

- Implement option `workerThreadOpts` to pass options to a worker of type 
  `thread`, a `worker_thread` (#357, fixes #356). Thanks @galElmalah.

## 2022-04-11, version 6.2.1

- Fix #343: `.terminate()` sometimes throwing an exception.


## 2022-01-15, version 6.2.0

- Implement callbacks `onCreateWorker` and `onTerminateWorker`. Thanks @forty.
- Fix #326: robustness fix when terminating a workerpool.


## 2021-06-17, version 6.1.5

- Fix v6.1.4 not being marked as latest anymore on npm due to bug fix
  release v2.3.4.


## 2021-04-05, version 6.1.4

- Fix terminating a pool throwing an error when used in the browser.
  Regression introduced in `v6.1.3`.


## 2021-04-01, version 6.1.3

- Fix #147: disregard messages from terminated workers. 
  Thanks @hhprogram and @Madgvox.


## 2021-03-09, version 6.1.2

- Fix #253, add `./src` again in the published npm package, reverting the change
  in `v6.1.1` (see also #243).


## 2021-03-08, version 6.1.1

- Remove redundant `./src` folder from the published npm package, see #243. 
  Thanks @Nytelife26.


## 2021-01-31, version 6.1.0

- Implemented support for sending events from the worker to the main thread,
  see #51, #227. Thanks @Akryum.
- Fix an issue in Node.js nightly, see #230. Thanks @aduh95.
- Fix #232 `workerpool` not working on IE 10.


## 2021-01-16, version 6.0.4

- Make evaluation of offloaded functions a bit more secure by using 
   `new Function` instead of `eval`. Thanks @tjenkinson.


## 2020-10-28, version 6.0.3

- Fixes and more robustness in terminating workers. Thanks @boneskull.


## 2020-10-03, version 6.0.2

- Fix #32, #175: the promise returned by `Pool.terminate()` now waits until 
  subprocesses are dead before resolving. Thanks @boneskull.


## 2020-09-23, version 6.0.1

- Removed examples from the npm package. Thanks @madbence.


## 2020-05-13, version 6.0.0

WARNING: the library entry points are changed and new source maps are added. 
This may have impact on your project depending on your setup.

- Created separate library entry points in package.json for node.js and browser.
  Thanks @boneskull.
- Generated source maps for both minified and non-minified bundles.
- Removed deprecation warnings for `options.nodeWorker` (renamed to 
  `options.workerType`) and `pool.clear()` (renamed to `pool.terminate()`).


## 2019-12-31, version 5.0.4

- Fixed #121: `isMainThread` not working when using `worker_threads`.
- Drop official support for node.js 8 (end of life).


## 2019-12-23, version 5.0.3

- Fixed library not working in the browser. See #106.


## 2019-11-06, version 5.0.2

- Fixed environment detection in browser. See #106. Thanks @acgrid.


## 2019-10-13, version 5.0.1

- Fixed #96: WorkerPool not cancelling any pending tasks on termination.


## 2019-08-25, version 5.0.0

- Deprecated option `nodeWorker` and created a new, more extensive option
  `workerType` giving full control over the selected type of worker.
  Added new option `'web'` to enforce use a Web Worker. See #85, #74.
- In a node.js environment, the default `workerType` is changed from
  `'process'` to `'thread'`. See #85, #50.
- Improved detection of environment (`browser` or `node`), fixing wrong
  detection in a Jest test environment. See #85.


## 2019-08-21, version 4.0.0

- Pass argument `--max-old-space-size` to child processes. Thanks @patte.
- Removed redundant dependencies, upgraded all devDependencies.
- Fixed Webpack issues of missing modules `child_process` and `worker_threads`.
  See #43.
- Bundled library changed due to the upgrade to Webpack 4. This could possibly
  lead to breaking changes.
- Implemented new option `maxQueueSize`. Thanks @colomboe.
- Fixed exiting workers when the parent process is killed. Thanks @RogerKang.
- Fixed #81: Option `minWorkers: 'max'` not using the configured `maxWorkers`.
- Fixed not passing `nodeWorker` to workers initialized when creating a pool.
  Thanks @spacelan.
- Internal restructure of the code: moved from `lib` to `src`.


## 2019-03-12, version 3.1.2

- Improved error message when a node.js worker unexpectedly exits (see #58).
  Thanks @stefanpenner.

- Allocate debug ports safely, this fixes an issue cause workers to exit
  unexpectedly if more then one worker pool is active, and the process is
  started with a debugger (`node debug` or `node --inspect`).
  Thanks @stefanpenner.


## 2019-02-25, version 3.1.1

- Fix option `nodeWorker: 'auto'` not using worker threads when available.
  Thanks @stefanpenner.


## 2019-02-17, version 3.1.0

- Implemented support for using `worker_threads` in Node.js, via the new option
  `nodeWorker: 'thread'`. Thanks @stefanpenner.


## 2018-12-11, version 3.0.0

- Enable usage in ES6 Webpack projects.
- Dropped support for AMD module system.


## 2021-06-17, version 2.3.4

- Backport fix for Node.js 16, see #309. Thanks @mansona.


## 2018-09-12, version 2.3.3

- Fixed space in license field in `package.json`. Thanks @sagotsky.


## 2018-09-08, version 2.3.2

- Add licence field to `package.json`. Thanks @greyd.


## 2018-07-24, version 2.3.1

- Fixed bug where tasks that are cancelled in a Pool's queue
  causes following tasks to not run. Thanks @greemo.


## 2017-09-30, version 2.3.0

- New method `Pool.terminate(force, timeout)` which will replace
  `Pool.clear(force)`. Thanks @jimsugg.
- Fixed issue with never terminating zombie child processes.
  Thanks @jimsugg.


## 2017-08-20, version 2.2.4

- Fixed a debug issue: look for `--inspect` within argument strings,
  instead of exact match. Thanks @jimsugg.


## 2017-08-19, version 2.2.3

- Updated all examples to neatly include `.catch(...)` callbacks.


## 2017-07-08, version 2.2.2

- Fixed #25: timer of a timeout starting when the task is created
  instead of when the task is started. Thanks @eclipsesk for input.


## 2017-05-07, version 2.2.1

- Fixed #2 and #19: support for debugging child processes. Thanks @tptee.


## 2016-11-26, version 2.2.0

- Implemented #18: method `pool.stats()`.


## 2016-10-11, version 2.1.0

- Implemented support for registering the workers methods asynchronously.
  This enables asynchronous initialization of workers, for example when
  using AMD modules. Thanks @natlibfi-arlehiko.
- Implemented environment variables `platform`, `isMainThread`, and `cpus`.
  Thanks @natlibfi-arlehiko.
- Implemented option `minWorkers`. Thanks @sergei202.


## 2016-09-18, version 2.0.0

- Replaced conversion of Error-objecting using serializerr to custom
  implementation to prevent issues with serializing/deserializing functions.
  This conversion implementation loses the prototype object which means that
  e.g. 'TypeError' will become just 'Error' in the main code. See #8.
  Thanks @natlibfi-arlehiko.


## 2016-09-12, version 1.3.1

- Fix for a bug in PhantomJS (see #7). Thanks @natlibfi-arlehiko.


## 2016-08-21, version 1.3.0

- Determine `maxWorkers` as the number of CPU's minus one in browsers too. See #6.


## 2016-06-25, version 1.2.1

- Fixed #5 error when loading via AMD or bundling using Webpack.


## 2016-05-22, version 1.2.0

- Implemented serializing errors with stacktrace. Thanks @mujx.


## 2016-01-25, version 1.1.0

- Added an error message when wrongly calling `pool.proxy`.
- Fixed function `worker.pool` not accepting both a script and options. See #1.
  Thanks @freund17.


## 2014-05-29, version 1.0.0

- Merged function `Pool.run` into `Pool.exec`, simplifying the API.


## 2014-05-14, version 0.2.0

- Implemented support for cancelling running tasks.
- Implemented support for cancelling running tasks after a timeout.


## 2014-05-07, version 0.1.0

- Implemented support for both node.js and the browser.
- Implemented offloading functions.
- Implemented worker proxy.
- Added docs and examples.


## 2014-05-02, version 0.0.1

- Module name registered at npm.
