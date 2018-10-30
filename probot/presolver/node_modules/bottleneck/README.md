# bottleneck

[![Downloads][npm-downloads]][npm-url]
[![version][npm-version]][npm-url]
[![License][npm-license]][license-url]


Bottleneck is a lightweight and efficient Task Scheduler and Rate Limiter for Node.js and the browser.

Bottleneck is an easy solution as it adds very little complexity to your code. It is battle-hardened, reliable and production-ready and used on a large scale in private companies and open source software.

It supports **Clustering**: it can rate limit jobs across multiple Node.js instances. It uses Redis and strictly atomic operations to stay reliable in the presence of unreliable clients and networks. It also supports *Redis Cluster* and *Redis Sentinel*.

Bottleneck v2 targets **Node 6+** and modern browsers. [Use Babel](https://github.com/SGrondin/bottleneck/issues/81) in your project if you must support older platforms.

Bottleneck v1 is compatible with any browser or Node version. It's still maintained, but it will not be receiving any new features. The v1 documentation is [here](https://github.com/SGrondin/bottleneck/tree/version-1). **[Upgrading from version 1?](#upgrading-to-v2)**

## Install

```
npm install --save bottleneck
```
Not using npm? Import the `bottleneck.min.js` file.


## Quick Start

### Step 1 of 3

Most APIs have a rate limit. For example, to execute 3 requests per second:
```js
import Bottleneck from "bottleneck";

const limiter = new Bottleneck({
  minTime: 333
});
```

If there's a chance some requests might take longer than 333ms and you want to prevent more than 1 request from running at a time, add `maxConcurrent: 1`:
```js
const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 333
});
```

**Sometimes rate limits instead take the form of "X requests every Y seconds".** In this example, we throttle to 100 requests every 60 seconds:
```js
const limiter = new Bottleneck({
  reservoir: 100, // initial value
  reservoirRefreshAmount: 100,
  reservoirRefreshInterval: 60 * 1000 // must be divisible by 250
});
```
`reservoir` is a counter decremented every time a job is launched, we set its initial value to 100. Then, every `reservoirRefreshInterval` (60000 ms), `reservoir` is automatically reset to `reservoirRefreshAmount` (100).

**You should** still use `minTime` and/or `maxConcurrent` to spread out the load since running 100 requests in parallel might not be a good idea!

### Step 2 of 3

#### ➤ Using callbacks?

Instead of this:
```js
someAsyncCall(arg1, arg2, callback);
```
Do this:
```js
limiter.submit(someAsyncCall, arg1, arg2, callback);
```

#### ➤ Using promises?

Instead of this:
```js
myFunction(arg1, arg2)
.then((result) => {
  /* handle result */
});
```
Do this:
```js
limiter.schedule(() => myFunction(arg1, arg2))
.then((result) => {
  /* handle result */
});
```
Or this:
```js
const wrapped = limiter.wrap(myFunction);

wrapped(arg1, arg2)
.then((result) => {
  /* handle result */
});
```

#### ➤ Using async/await?

Instead of this:
```js
const result = await myFunction(arg1, arg2);
```
Do this:
```js
const result = await limiter.schedule(() => myFunction(arg1, arg2));
```
Or this:
```js
const wrapped = limiter.wrap(myFunction);

const result = await wrapped(arg1, arg2);
```

### Step 3 of 3

Remember...

Bottleneck builds a queue of jobs and executes them as soon as possible. By default, the jobs will be executed in the order they were received.

**Read the 'Gotchas' and you're good to go**. Or keep reading to learn about all the fine tuning and advanced options available. If your rate limits need to be enforced across a cluster of computers, read the [Clustering](#Clustering) docs.

[Need help debugging your application?](#debugging-your-application).

Instead of throttling maybe [you want to batch up requests](#batching) into fewer calls?

##### Gotchas

* Make sure you're catching `"error"` events emitted by your limiters!

* Consider setting a `maxConcurrent` value instead of leaving it `null`. This can help your application's performance, especially if you think the limiter's queue might become very long.

* **When using `submit()`**, if a callback isn't necessary, you must pass `null` or an empty function instead. It will not work otherwise.

* **When using `submit()`**, make sure all the jobs will eventually complete by calling their callback, or set an [`expiration`](#job-options). Even if you submitted your job with a `null` callback , it still needs to call its callback. This is particularly important if you are using a `maxConcurrent` value that isn't `null` (unlimited), otherwise those not completed jobs will be clogging up the limiter and no new jobs will be allowed to run. It's safe to call the callback more than once, subsequent calls are ignored.

## Docs

### Constructor

```js
const limiter = new Bottleneck({/* options */});
```

Basic options:

| Option | Default | Description |
|--------|---------|-------------|
| `maxConcurrent` | `null` (unlimited) | How many jobs can be executing at the same time. Consider setting a value instead of leaving it `null`, it can help your application's performance, especially if you think the limiter's queue might get very long. |
| `minTime` | `0` ms | How long to wait after launching a job before launching another one. |
| `highWater` | `null` (unlimited) | How long can the queue be? When the queue length exceeds that value, the selected `strategy` is executed to shed the load. |
| `strategy` | `Bottleneck.strategy.LEAK` | Which strategy to use when the queue gets longer than the high water mark. [Read about strategies](#strategies). Strategies are never executed if `highWater` is `null`. |
| `penalty` | `15 * minTime`, or `5000` when `minTime` is `0` | The `penalty` value used by the `BLOCK` strategy. |
| `reservoir` | `null` (unlimited) | How many jobs can be executed before the limiter stops executing jobs. If `reservoir` reaches `0`, no jobs will be executed until it is no longer `0`. New jobs will still be queued up. |
| `reservoirRefreshInterval` | `null` (disabled) | Every `reservoirRefreshInterval` milliseconds, the `reservoir` value will be automatically reset to `reservoirRefreshAmount`. The `reservoirRefreshInterval` value should be a [multiple of 250 (5000 for Clustering)](https://github.com/SGrondin/bottleneck/issues/88). |
| `reservoirRefreshAmount` | `null` (disabled) | The value to reset `reservoir` to when `reservoirRefreshInterval` is in use. |
| `Promise` | `Promise` (built-in) | This lets you override the Promise library used by Bottleneck. |


### submit()

Adds a job to the queue. This is the callback version of `schedule()`.
```js
limiter.submit(someAsyncCall, arg1, arg2, callback);
```
You can pass `null` instead of an empty function if there is no callback, but `someAsyncCall` still needs to call **its** callback to let the limiter know it has completed its work.

`submit()` can also accept [advanced options](#job-options).

### schedule()

Adds a job to the queue. This is the Promise and async/await version of `submit()`.
```js
const fn = function(arg1, arg2) {
  return httpGet(arg1, arg2); // Here httpGet() returns a promise
};

limiter.schedule(fn, arg1, arg2)
.then((result) => {
  /* ... */
});
```
In other words, `schedule()` takes a function **fn** and a list of arguments. `schedule()` returns a promise that will be executed according to the rate limits.

`schedule()` can also accept [advanced options](#job-options).

Here's another example:
```js
// suppose that `client.get(url)` returns a promise

const url = "https://wikipedia.org";

limiter.schedule(() => client.get(url))
.then(response => console.log(response.body));
```

### wrap()

Takes a function that returns a promise. Returns a function identical to the original, but rate limited.
```js
const wrapped = limiter.wrap(fn);

wrapped()
.then(function (result) {
  /* ... */
})
.catch(function (error) {
  // Bottleneck might need to fail the job even if the original function can never fail.
  // For example, your job is taking longer than the `expiration` time you've set.
});
```

### Job Options

`submit()`, `schedule()`, and `wrap()` all accept advanced options.
```js
// Submit
limiter.submit({/* options */}, someAsyncCall, arg1, arg2, callback);

// Schedule
limiter.schedule({/* options */}, fn, arg1, arg2);

// Wrap
const wrapped = limiter.wrap(fn);
wrapped.withOptions({/* options */}, arg1, arg2);
```

| Option | Default | Description |
|--------|---------|-------------|
| `priority` | `5` | A priority between `0` and `9`. A job with a priority of `4` will be queued ahead of a job with a priority of `5`. **Important:** You must set a low `maxConcurrent` value for priorities to work, otherwise there is nothing to queue because jobs will be be scheduled immediately! |
| `weight` | `1` | Must be an integer equal to or higher than `0`. The `weight` is what increases the number of running jobs (up to `maxConcurrent`) and decreases the `reservoir` value. |
| `expiration` | `null` (unlimited) | The number of milliseconds a job is given to complete. Jobs that execute for longer than `expiration` ms will be failed with a `BottleneckError`. |
| `id` | `<no-id>` | You should give an ID to your jobs, it helps with [debugging](#debugging-your-application). |

### Strategies

A strategy is a simple algorithm that is executed every time adding a job would cause the number of queued jobs to exceed `highWater`. Strategies are never executed if `highWater` is `null`.

#### Bottleneck.strategy.LEAK
When adding a new job to a limiter, if the queue length reaches `highWater`, drop the oldest job with the lowest priority. This is useful when jobs that have been waiting for too long are not important anymore. If all the queued jobs are more important (based on their `priority` value) than the one being added, it will not be added.

#### Bottleneck.strategy.OVERFLOW_PRIORITY
Same as `LEAK`, except it will only drop jobs that are *less important* than the one being added. If all the queued jobs are as or more important than the new one, it will not be added.

#### Bottleneck.strategy.OVERFLOW
When adding a new job to a limiter, if the queue length reaches `highWater`, do not add the new job. This strategy totally ignores priority levels.

#### Bottleneck.strategy.BLOCK
When adding a new job to a limiter, if the queue length reaches `highWater`, the limiter falls into "blocked mode". All queued jobs are dropped and no new jobs will be accepted until the limiter unblocks. It will unblock after `penalty` milliseconds have passed without receiving a new job. `penalty` is equal to `15 * minTime` (or `5000` if `minTime` is `0`) by default. This strategy is ideal when bruteforce attacks are to be expected. This strategy totally ignores priority levels.


### Jobs lifecycle

1. **Received**. You new job has been added to your limiter. Bottleneck needs to check whether if can be accepted into the queue.
2. **Queued**. Bottleneck has accepted your job, but it can not tell at what exact timestamp it will run yet, because it is dependent on previous jobs.
3. **Running**. Your job is not in the queue anymore, it will be executed after a delay that was computed according to your `minTime` setting.
4. **Executing**. Your job is executing its code.
5. **Done**. Your job has completed.

**Note:** By default, Bottleneck does not keep track of DONE jobs, to save memory. You can enable this feature by passing `trackDoneStatus: true` as an option when creating a limiter.

#### counts()

```js
const counts = limiter.counts();

console.log(counts);
/*
{
  RECEIVED: 0,
  QUEUED: 0,
  RUNNING: 0,
  EXECUTING: 0,
  DONE: 0
}
*/
```

Returns an object with the current number of jobs per status in the limiter.

#### jobStatus()

```js
console.log(limiter.jobStatus("some-job-id"));
// Example: QUEUED
```

Returns the status of the job with the provided job id **in the limiter**. Returns `null` if no job with that id exist.

#### jobs()

```js
console.log(limiter.jobs("RUNNING"));
// Example: ['id1', 'id2']
```

Returns an array of all the job ids with the specified status **in the limiter**. Not passing a status string returns all the known ids.

#### queued()

```js
const count = limiter.queued(priority);

console.log(count);
```

`priority` is optional. Returns the number of `QUEUED` jobs with the given `priority` level. Omitting the `priority` argument returns the total number of queued jobs **in the limiter**.

#### empty()

```js
if (limiter.empty()) {
  // do something...
}
```

Returns a boolean which indicates whether there are any `RECEIVED` or `QUEUED` jobs **in the limiter**.

#### running()

```js
limiter.running()
.then((count) => console.log(count));
```

Returns a promise that returns the **total weight** of the `RUNNING` and `EXECUTING` jobs **in the Cluster**.

#### done()

```js
limiter.done()
.then((count) => console.log(count));
```

Returns a promise that returns the **total weight** of `DONE` jobs **in the Cluster**. Does not require passing the `trackDoneStatus: true` option.

#### check()

```js
limiter.check()
.then((wouldRunNow) => console.log(wouldRunNow));
```
Checks if a new job would be executed immediately if it was submitted now. Returns a promise that returns a boolean.


### Events

Event names: `"error"`, `"empty"`, `"idle"`, `"dropped"`, `"depleted"` and `"debug"`.

__error__
```js
limiter.on("error", function (error) {
  /* handle errors here */
});
```

By far the most common source of errors is uncaught exceptions in your application code. If the jobs you add to Bottleneck don't catch their own exceptions, the limiter will emit an `"error"` event.

If using Clustering, errors thrown by the Redis client will emit an `"error"` event.

__empty__
```js
limiter.on("empty", function () {
  // This will be called when `limiter.empty()` becomes true.
});
```

__idle__
```js
limiter.on("idle", function () {
  // This will be called when `limiter.empty()` is `true` and `limiter.running()` is `0`.
});
```

__dropped__
```js
limiter.on("dropped", function (dropped) {
  // This will be called when a strategy was triggered.
  // The dropped request is passed to this event listener.
});
```

__depleted__
```js
limiter.on("depleted", function (empty) {
  // This will be called every time the reservoir drops to 0.
  // The `empty` (boolean) argument indicates whether `limiter.empty()` is currently true.
});
```

__debug__
```js
limiter.on("debug", function (message, data) {
  // Useful to figure out what the limiter is doing in real time
  // and to help debug your application
});
```

Use `removeAllListeners()` with an optional event name as first argument to remove listeners.

Use `.once()` instead of `.on()` to only receive a single event.


### updateSettings()

```js
limiter.updateSettings(options);
```
The options are the same as the [limiter constructor](#constructor).

**Note:** Changes don't affect `SCHEDULED` jobs.

### incrementReservoir()

```js
limiter.incrementReservoir(incrementBy);
```
Returns a promise that returns the new reservoir value.

### currentReservoir()

```js
limiter.currentReservoir()
.then((reservoir) => console.log(reservoir));
```
Returns a promise that returns the current reservoir value.

### stop()

The `stop()` method is used to safely shutdown a limiter. It prevents any new jobs from being added to the limiter and waits for all `EXECUTING` jobs to complete.

```js
limiter.stop(options)
.then(() => {
  console.log("Shutdown completed!")
});
```

`stop()` returns a promise that resolves once all the `EXECUTING` jobs have completed and, if desired, once all non-`EXECUTING` jobs have been dropped.

| Option | Default | Description |
|--------|---------|-------------|
| `dropWaitingJobs` | `true` | When `true`, drop all the `RECEIVED`, `QUEUED` and `RUNNING` jobs. When `false`, allow those jobs to complete before resolving the Promise returned by this method. |
| `dropErrorMessage` | `This limiter has been stopped.` | The error message used to drop jobs when `dropWaitingJobs` is `true`. |
| `enqueueErrorMessage` | `This limiter has been stopped and cannot accept new jobs.` | The error message used to reject a job added to the limiter after `stop()` has been called. |

### chain()

Tasks that are ready to be executed will be added to that other limiter. Suppose you have 2 types of tasks, A and B. They both have their own limiter with their own settings, but both must also follow a global limiter G:
```js
const limiterA = new Bottleneck( /* some settings */ );
const limiterB = new Bottleneck( /* some different settings */ );
const limiterG = new Bottleneck( /* some global settings */ );

limiterA.chain(limiterG);
limiterB.chain(limiterG);

// Requests added to limiterA must follow the A and G rate limits.
// Requests added to limiterB must follow the B and G rate limits.
// Requests added to limiterG must follow the G rate limits.
```

To unchain, call `limiter.chain(null);`.

## Group

The `Group` feature of Bottleneck manages many limiters automatically for you. It creates limiters dynamically and transparently.

Let's take a DNS server as an example of how Bottleneck can be used. It's a service that sees a lot of abuse and where incoming DNS requests need to be rate limited. Bottleneck is so tiny, it's acceptable to create one limiter for each origin IP, even if it means creating thousands of limiters. The `Group` feature is perfect for this use case. Create one Group and use the origin IP to rate limit each IP independently. Each call with the same key (IP) will be routed to the same underlying limiter. A Group is created like a limiter:


```js
const group = new Bottleneck.Group(options);
```

The `options` object will be used for every limiter created by the Group.

The Group is then used with the `.key(str)` method:

```js
// In this example, the key is an IP
group.key("77.66.54.32").submit(someAsyncCall, arg1, arg2, cb);
```

__key()__

* `str` : The key to use. All jobs added with the same key will use the same underlying limiter. *Default: `""`*

The return value of `.key(str)` is a limiter. If it doesn't already exist, it is generated for you. Calling `key()` is how limiters are created inside a Group.

Limiters that have been idle for longer than 5 minutes are deleted to avoid memory leaks, this value can be changed by passing a different `timeout` option, in milliseconds.

__on("created")__

```js
group.on("created", (limiter, key) => {
  console.log("A new limiter was created for key: " + key)

  // Prepare the limiter, for example we'll want to listen to its "error" events!
  limiter.on("error", (err) => {
    // Handle errors here
  })
});
```

Listening for the `"created"` event is the recommended way to set up a new limiter. Your event handler is executed before `key()` returns the newly created limiter.

__updateSettings()__

```js
const group = new Bottleneck.Group({ maxConcurrent: 2, minTime: 250 });
group.updateSettings({ minTime: 500 });
```
After executing the above commands, **new limiters** will be created with `{ maxConcurrent: 2, minTime: 500 }`.


__deleteKey()__

* `str`: The key for the limiter to delete.

Manually deletes the limiter at the specified key. This can be useful when the auto cleanup is turned off.

__keys()__

Returns an array containing all the keys in the Group.

__limiters()__

```js
const limiters = group.limiters();

console.log(limiters);
// [ { key: "some key", limiter: <limiter> }, { key: "some other key", limiter: <some other limiter> } ]
```

## Batching

Some APIs can accept multiple operations in a single call. Bottleneck's Batching feature helps you take advantage of those APIs:
```js
const batcher = new Bottleneck.Batcher({
  maxTime: 1000,
  maxSize: 10
});

batcher.on("batch", (batch) => {
  console.log(batch); // ["some-data", "some-other-data"]

  // Handle batch here
});

batcher.add("some-data");
batcher.add("some-other-data");
```

`batcher.add()` returns a Promise that resolves once the request has been flushed to a `"batch"` event.

| Option | Default | Description |
|--------|---------|-------------|
| `maxTime` | `null` (unlimited) | Maximum acceptable time (in milliseconds) a request can have to wait before being flushed to the `"batch"` event. |
| `maxSize` | `null` (unlimited) | Maximum number of requests in a batch. |

Batching doesn't throttle requests, it only groups them up optimally according to your `maxTime` and `maxSize` settings.

## Clustering

Clustering lets many limiters access the same shared state, stored in Redis. Changes to the state are Atomic, Consistent and Isolated (and fully [ACID](https://en.wikipedia.org/wiki/ACID) with the right [Durability](https://redis.io/topics/persistence) configuration), to eliminate any chances of race conditions or state corruption. Your settings, such as `maxConcurrent`, `minTime`, etc., are shared across the whole cluster, which means —for example— that `{ maxConcurrent: 5 }` guarantees no more than 5 jobs can ever run at a time in the entire cluster of limiters. 100% of Bottleneck's features are supported in Clustering mode. Enabling Clustering is as simple as changing a few settings. It's also a convenient way to store or export state for later use.

### Enabling Clustering

First, add `redis` or `ioredis` to your application's dependencies:
```bash
# NodeRedis (https://github.com/NodeRedis/node_redis)
npm install --save redis

# or ioredis (https://github.com/luin/ioredis)
npm install --save ioredis
```
Then create a limiter or a Group:
```js
const limiter = new Bottleneck({
  /* Some basic options */
  maxConcurrent: 5,
  minTime: 500
  id: "my-super-app" // All limiters with the same id will be clustered together

  /* Clustering options */
  datastore: "redis", // or "ioredis"
  clearDatastore: false,
  clientOptions: {
    host: "127.0.0.1",
    port: 6379

    // Redis client options
    // Using NodeRedis? See https://github.com/NodeRedis/node_redis#options-object-properties
    // Using ioredis? See https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options
  }
});
```

| Option | Default | Description |
|--------|---------|-------------|
| `datastore` | `"local"` | Where the limiter stores its internal state. The default (`"local"`) keeps the state in the limiter itself. Set it to `"redis"` or `"ioredis"` to enable Clustering. |
| `clearDatastore` | `false` | When set to `true`, on initial startup, the limiter will wipe any existing Bottleneck state data on the Redis db. |
| `clientOptions` | `{}` | This object is passed directly to the redis client library you've selected. |
| `clusterNodes` | `null` | **ioredis only.** When `clusterNodes` is not null, the client will be instantiated by calling `new Redis.Cluster(clusterNodes, clientOptions)` instead of `new Redis(clientOptions)`. |
| `timeout` | `null` (no TTL) | The Redis TTL in milliseconds ([TTL](https://redis.io/commands/ttl)) for the keys created by the limiter. When `timeout` is set, the limiter's state will be automatically removed from Redis after `timeout` milliseconds of inactivity. |

**Note: When using Groups**, the `timeout` option has a default of `300000` milliseconds and the generated limiters automatically receive an `id` with the pattern `${group.id}-${KEY}`.

### Important considerations when Clustering

The first limiter connecting to Redis will store its [constructor options](#constructor) on Redis and all subsequent limiters will be using those settings. You can alter the constructor options used by all the connected limiters by calling `updateSettings()`. The `clearDatastore` option instructs a new limiter to wipe any previous Bottleneck data (for that `id`), including previously stored settings.

Queued jobs are **NOT** stored on Redis. They are local to each limiter. Exiting the Node.js process will lose those jobs. This is because Bottleneck has no way to propagate the JS code to run a job across a different Node.js process than the one it originated on. Bottleneck doesn't keep track of the queue contents of the limiters on a cluster for performance and reliability reasons. You can use something like [`BeeQueue`](https://github.com/bee-queue/bee-queue) to get around this limitation.

Due to the above, functionality relying on the queue length happens purely locally:
- Priorities are local. A higher priority job will run before a lower priority job **on the same limiter**. Another limiter on the cluster might run a lower priority job before our higher priority one.
- Assuming constant priority levels, Bottleneck guarantees that jobs will be run in the order they were received **on the same limiter**. Another limiter on the cluster might run a job received later before ours runs.
- `highWater` and load shedding ([strategies](#strategies)) are per limiter. However, one limiter entering Blocked mode will put the entire cluster in Blocked mode until `penalty` milliseconds have passed. See [Strategies](#strategies).
- The `"empty"` event is triggered when the (local) queue is empty.
- The `"idle"` event is triggered when the (local) queue is empty *and* no jobs are currently running anywhere in the cluster.

You must work around these limitations in your application code if they are an issue to you. The `publish()` method could be useful here.

The current design guarantees reliability, is highly performant and lets limiters come and go. Your application can scale up or down, and clients can be disconnected at any time without issues.

It is **strongly recommended** that you give an `id` to every limiter and Group since it is used to build the name of your limiter's Redis keys! Limiters with the same `id` inside the same Redis db will be sharing the same datastore.

It is **strongly recommended** that you set an `expiration` (See [Job Options](#job-options)) *on every job*, since that lets the cluster recover from crashed or disconnected clients. Otherwise, a client crashing while executing a job would not be able to tell the cluster to decrease its number of "running" jobs. By using expirations, those lost jobs are automatically cleared after the specified time has passed. Using expirations is essential to keeping a cluster reliable in the face of unpredictable application bugs, network hiccups, and so on.

Network latency between Node.js and Redis is not taken into account when calculating timings (such as `minTime`). To minimize the impact of latency, Bottleneck performs the absolute minimum number of state accesses. Keeping the Redis server close to your limiters will help you get a more consistent experience. Keeping the clients' OS time consistent will also help.

It is **strongly recommended** to [set up an `"error"` listener](#events) on all your limiters and on your Groups.

Bottleneck does not guarantee that the concurrency will be spread evenly across limiters. With `{ maxConcurrent: 5 }`, it's absolutely possible for a single limiter to end up running 5 jobs simultaneously while the other limiters in the cluster sit idle. To spread the load, use the `.chain()` method:

```js
const clusterLimiter = new Bottleneck({ maxConcurrent: 5, datastore: 'redis' });
const limiter = new Bottleneck({ maxConcurrent: 1 });

limiter.chain(clusterLimiter);

clusterLimiter.ready()
.then(() => {
  // Any Node process can only run one job at a time.
  // Across the whole cluster, up to 5 jobs can run simultaneously.

  limiter.schedule( /* ... */ )
})
.catch((error) => { /* ... */ });
```

### Clustering Methods

The `ready()`, `publish()` and `clients()` methods also exist when using the `local` datastore, for code compatibility reasons: code written for `redis`/`ioredis` won't break with `local`.

#### ready()

This method returns a promise that resolves once the limiter is connected to Redis.

As of v2.9.0, it's no longer necessary to wait for `.ready()` to resolve before issuing commands to a limiter. The commands will be queued until the limiter successfully connects. Make sure to listen to the `"error"` event to handle connection errors.

```js
const limiter = new Bottleneck({/* options */});

limiter.on("error", (err) => {
  // handle network errors
});

limiter.ready()
.then(() => {
  // The limiter is ready
});
```

#### publish(message)

This method broadcasts the `message` string to every limiter in the Cluster. It returns a promise.
```js
const limiter = new Bottleneck({/* options */});

limiter.on("message", (msg) => {
  console.log(msg); // prints "this is a string"
});

limiter.publish("this is a string");
```

To send objects, stringify them first:
```js
limiter.on("message", (msg) => {
  console.log(JSON.parse(msg).hello) // prints "world"
});

limiter.publish(JSON.stringify({ hello: "world" }));
```

#### clients()

If you need direct access to the redis clients, use `.clients()`:
```js
console.log(limiter.clients());
// { client: <Redis Client>, subscriber: <Redis Client> }
```

### Additional Clustering information

- Bottleneck is compatible with [Redis Clusters](https://redis.io/topics/cluster-tutorial), but you must use the `ioredis` datastore and the `clusterNodes` option.
- Bottleneck is compatible with Redis Sentinel, but you must use the `ioredis` datastore.
- Bottleneck's data is stored in Redis keys starting with `b_`. It also uses pubsub channels starting with `b_` It will not interfere with any other data stored on the server.
- Bottleneck loads a few Lua scripts on the Redis server using the `SCRIPT LOAD` command. These scripts only take up a few Kb of memory. Running the `SCRIPT FLUSH` command will cause any connected limiters to experience critical errors until a new limiter connects to Redis and loads the scripts again.
- The Lua scripts are highly optimized and designed to use as few resources as possible.

### Managing Redis Connections

Bottleneck needs to create 2 Redis Clients to function, one for normal operations and one for pubsub subscriptions. These 2 clients are kept in a `Bottleneck.RedisConnection` (NodeRedis) or a `Bottleneck.IORedisConnection` (ioredis) object, referred to as the Connection object.

By default, every Group and every standalone limiter (a limiter not created by a Group) will create their own Connection object, but it is possible to manually control this behavior. In this example, every Group and limiter is sharing the same Connection object and therefore the same 2 clients:
```js
const connection = new Bottleneck.RedisConnection({
  clientOptions: {/* NodeRedis/ioredis options */}
  // ioredis also accepts `clusterNodes` here
});


const limiter = new Bottleneck({ connection: connection });
const group = new Bottleneck.Group({ connection: connection });
```
You can access and reuse the Connection object of any Group or limiter:
```js
const group = new Bottleneck.Group({ connection: limiter.connection });
```
When a Connection object is created manually, the connectivity `"error"` events are emitted on the Connection itself.
```js
connection.on("error", (err) => { /* handle connectivity errors here */ });
```
If you already have a NodeRedis/ioredis client, you can ask Bottleneck to reuse it, although currently the Connection object will still create a second client for pubsub operations:
```js
import Redis from "redis";
const client = new Redis.createClient({/* options */});

const connection = new Bottleneck.RedisConnection({
  // `clientOptions` and `clusterNodes` will be ignored since we're passing a raw client
  client: client
});

const limiter = new Bottleneck({ connection: connection });
const group = new Bottleneck.Group({ connection: connection });
```
Depending on your application, using more clients can improve performance.

Use the `disconnect(flush)` method to close the Redis clients.
```js
limiter.disconnect();
group.disconnect();
```
If you created the Connection object manually, you need to call `connection.disconnect()` instead, for safety reasons.

## Debugging your application

Debugging complex scheduling logic can be difficult, especially when priorities, weights, and network latency all interact with one another.

If your application is not behaving as expected, start by making sure you're catching `"error"` [events emitted](#events) by your limiters and your Groups. Those errors are most likely uncaught exceptions from your application code.

Make sure you've read the ['Gotchas'](#gotchas) section.

To see exactly what a limiter is doing in real time, listen to the `"debug"` event. It contains detailed information about how the limiter is executing your code. Adding [job IDs](#job-options) to all your jobs makes the debug output more readable.

When Bottleneck has to fail one of your jobs, it does so by using `BottleneckError` objects. This lets you tell those errors apart from your own code's errors:
```js
limiter.schedule(fn)
.then((result) => { /* ... */ } )
.catch((error) => {
  if (error instanceof Bottleneck.BottleneckError) {
    /* ... */
  }
});
```

## Upgrading to v2

The internal algorithms essentially haven't changed from v1, but many small changes to the interface were made to introduce new features.

All the breaking changes:
- Bottleneck v2 requires Node 6+ or a modern browser. Use Babel if you must support legacy platforms. Bottleneck v1 will continue to use ES5 only.
- The Bottleneck constructor now takes an options object. See [Constructor](#constructor).
- The `Cluster` feature is now called `Group`. This is to distinguish it from the new v2 [Clustering](#clustering) feature.
- The `Group` constructor takes an options object to match the limiter constructor.
- Jobs take an optional options object. See [Job options](#job-options).
- Removed `submitPriority()`, use `submit()` with an options object instead.
- Removed `schedulePriority()`, use `schedule()` with an options object instead.
- The `rejectOnDrop` option is now `true` by default. It can be set to `false` if you wish to retain v1 behavior. However this option is left undocumented as enabling it is considered to be a poor practice.
- Use `null` instead of `0` to indicate an unlimited `maxConcurrent` value.
- Use `null` instead of `-1` to indicate an unlimited `highWater` value.
- Renamed `changeSettings()` to `updateSettings()`, it now returns a promise to indicate completion. It takes the same options object as the constructor.
- Renamed `nbQueued()` to `queued()`.
- Renamed `nbRunning` to `running()`, it now returns its result using a promise.
- Removed `isBlocked()`.
- Changing the Promise library is now done through the options object like any other limiter setting.
- Removed `changePenalty()`, it is now done through the options object like any other limiter setting.
- Removed `changeReservoir()`, it is now done through the options object like any other limiter setting.
- Removed `stopAll()`. Use the new `stop()` method.
- `check()` now accepts an optional `weight` argument, and returns its result using a promise.
- Removed the `Group` `changeTimeout()` method. Instead, pass a `timeout` option when creating a Group.

Version 2 is more user-friendly and powerful.

After upgrading your code, please take a minute to read the [Debugging your application](#debugging-your-application) chapter.


## Contributing

This README is always in need of improvements. If wording can be clearer and simpler, please consider forking this repo and submitting a Pull Request, or simply opening an issue.

Suggestions and bug reports are also welcome.

To work on the Bottleneck code, simply clone the repo, makes your changes to the files located in `src/` only, then run `./scripts/build.sh && npm test` to ensure that everything is set up correctly.

To speed up compilation time during development, run `./scripts/build.sh dev` instead. Make sure to build and test without `dev` before submitting a PR.

The tests must also pass in Clustering mode. You'll need a Redis server running on `127.0.0.1:6379`, then run `./scripts/build.sh && DATASTORE=redis npm test && DATASTORE=ioredis npm test`.

All contributions are appreciated and will be considered.

[license-url]: https://github.com/SGrondin/bottleneck/blob/master/LICENSE

[npm-url]: https://www.npmjs.com/package/bottleneck
[npm-license]: https://img.shields.io/npm/l/bottleneck.svg?style=flat
[npm-version]: https://img.shields.io/npm/v/bottleneck.svg?style=flat
[npm-downloads]: https://img.shields.io/npm/dm/bottleneck.svg?style=flat
