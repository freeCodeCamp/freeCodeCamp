/// <reference path="bottleneck.d.ts" />

import Bottleneck from "bottleneck";
// import * as assert from "assert";
function assert(b: boolean): void { }

/*
This file is run by scripts/build.sh.
It is used to validate the typings in bottleneck.d.ts.
The command is: tsc --noEmit --strictNullChecks test.ts
This file cannot be run directly.
In order to do that, you must comment out the first line,
and change "bottleneck" to "." on the third line.
*/

function withCb(foo: number, bar: () => void, cb: (err: any, result: string) => void) {
  let s: string = `cb ${foo}`;
  cb(null, s);
}

console.log(Bottleneck);

let limiter = new Bottleneck({
  maxConcurrent: 5,
  minTime: 1000,
  highWater: 20,
  strategy: Bottleneck.strategy.LEAK,
  reservoirRefreshInterval: 1000 * 60,
  reservoirRefreshAmount: 10
});

limiter.ready().then(() => { console.log('Ready') });
limiter.clients().client;
limiter.disconnect();

limiter.currentReservoir().then(function (x) {
  if (x != null) {
    let i: number = x;
  }
});

limiter.incrementReservoir(5).then(function (x) {
  if (x != null) {
    let i: number = x;
  }
});

limiter.running().then(function (x) {
  let i: number = x;
});

limiter.done().then(function (x) {
  let i: number = x;
});

limiter.submit(withCb, 1, () => {}, (err, result) => {
  let s: string = result;
  console.log(s);
  assert(s == "cb 1");
});

function withPromise(foo: number, bar: () => void): PromiseLike<string> {
  let s: string = `promise ${foo}`;
  return Promise.resolve(s);
}

let foo: Promise<string> = limiter.schedule(withPromise, 1, () => {});
foo.then(function (result: string) {
  let s: string = result;
  console.log(s);
  assert(s == "promise 1");
});

limiter.on("message", (msg) => console.log(msg));

limiter.publish(JSON.stringify({ a: "abc", b: { c: 123 }}));

let group = new Bottleneck.Group({
  maxConcurrent: 5,
  minTime: 1000,
  highWater: 10,
  strategy: Bottleneck.strategy.LEAK,
  datastore: "ioredis",
  clearDatastore: true,
  clientOptions: {},
  clusterNodes: []
});

group.on('created', (limiter, key) => {
  assert(limiter.empty())
  assert(key.length > 0)
})

group.key("foo").submit(withCb, 2, () => {}, (err, result) => {
    let s: string = `${result} foo`;
    console.log(s);
    assert(s == "cb 2 foo");
});

group.key("bar").submit({ priority: 4 }, withCb, 3, () => {}, (err, result) => {
    let s: string = `${result} bar`;
    console.log(s);
    assert(s == "cb 3 foo");
});

let f1: Promise<string> = group.key("pizza").schedule(withPromise, 2, () => {});
f1.then(function (result: string) {
  let s: string = result;
  console.log(s);
  assert(s == "promise 2");
});

let f2: Promise<string> = group.key("pie").schedule({ priority: 4 }, withPromise, 3, () => {});
f2.then(function (result: string) {
  let s: string = result;
  console.log(s);
  assert(s == "promise 3");
});

let wrapped = limiter.wrap((a: number, b: number) => {
  let s: string = `Total: ${a + b}`;
  return Promise.resolve(s);
});

wrapped(1, 2).then((x) => {
  let s: string = x;
  console.log(s);
  assert(s == "Total: 3");
});

wrapped.withOptions({ priority: 1, id: 'some-id' }, 9, 9).then((x) => {
  let s: string = x;
  console.log(s);
  assert(s == "Total: 18");
})

let counts = limiter.counts();
console.log(`${counts.EXECUTING + 2}`);
console.log(limiter.jobStatus('some-id'))
console.log(limiter.jobs());
console.log(limiter.jobs(Bottleneck.Status.RUNNING));


group.deleteKey("pizza");
group.updateSettings({ timeout: 5, maxConcurrent: null, reservoir: null });

let keys: string[] = group.keys();
assert(keys.length == 3);

let queued: number = limiter.chain(group.key("pizza")).queued();

limiter.stop({
  dropWaitingJobs: true,
  dropErrorMessage: "Begone!",
  enqueueErrorMessage: "Denied!"
}).then(() => {
  console.log('All stopped.')
})

wrapped(4, 5).catch((e) => {
  assert(e.message === "Denied!")
})

const id: string = limiter.id;
const datastore: string = limiter.datastore;
const channel: string = limiter.channel();

const redisConnection = new Bottleneck.RedisConnection({
  client: "NodeRedis client object",
  clientOptions: {}
})

redisConnection.on("error", (err) => {
  console.log(err.message)
})

const limiterWithConn = new Bottleneck({
  connection: redisConnection
})

const ioredisConnection = new Bottleneck.IORedisConnection({
  client: "ioredis client object",
  clientOptions: {},
  clusterNodes: []
})

ioredisConnection.on("error", (err: Bottleneck.BottleneckError) => {
  console.log(err.message)
})

const groupWithConn = new Bottleneck.Group({
  connection: ioredisConnection
})

const limiterWithConnFromGroup = new Bottleneck({
  connection: groupWithConn.connection
})

const groupWithConnFromLimiter = new Bottleneck.Group({
  connection: limiterWithConn.connection
})


const batcher = new Bottleneck.Batcher({
  maxTime: 1000,
  maxSize: 10
})

batcher.on("batch", (batch) => {
  const len: number = batch.length
  console.log("Number of elements:", len)
})

batcher.on("error", (err: Bottleneck.BottleneckError) => {
  console.log(err.message)
})

batcher.add("abc")
batcher.add({ xyz: 5 })
.then(() => console.log("Flushed!"))
