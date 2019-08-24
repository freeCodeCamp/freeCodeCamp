---
title: Worker Threads
---

## Worker Threads

[Worker Threads](https://nodejs.org/api/worker_threads.html) is a Node.js default library made to enable the use of threads that execute JavaScript in parallel. They are useful for performing CPU-intensive JavaScript operations. They will not help much with I/O-intensive work. Node.js's built-in asynchronous I/O operations are more efficient than Workers can be. They became available in Node.js 10.5.0. Prior to Node.js 11.7.0.

### Get Started 

#### Requiring Worker Threads


```js

const worker = require('worker_threads');

```

#### Worker Main Thread


```js

const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  new Worker(__filename);
} else {
  console.log('Inside Worker!');
  console.log(isMainThread);  // Prints 'false'.
}

```

#### Worker Thread Prime Number Example


```js

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const min = 2;
let primes = [];
function generatePrimes(start, range) {
  let isPrime = true;
  let end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = min; j < Math.sqrt(end); j++) {
      if (i !== j && i%j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}
if (isMainThread) {
  const max = 1e7;
  const threadCount = +process.argv[2] || 2;
  const threads = new Set();;
  console.log(`Running with ${threadCount} threads...`);
  const range = Math.ceil((max - min) / threadCount);
  let start = min;
  for (let i = 0; i < threadCount - 1; i++) {
    const myStart = start;
    threads.add(new Worker(__filename, { workerData: { start: myStart, range }}));
    start += range;
  }
  threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadCount)}}));
  for (let worker of threads) {
    worker.on('error', (err) => { throw err; });
    worker.on('exit', () => {
      threads.delete(worker);
      console.log(`Thread exiting, ${threads.size} running...`);
      if (threads.size === 0) {
        console.log(primes.join('\n'));
      }
    })
    worker.on('message', (msg) => {
      primes = primes.concat(msg);
    });
  }
} else {
  generatePrimes(workerData.start, workerData.range);
  parentPort.postMessage(primes);
}

```

#### Why and When use Worker Thread

- When you want to do multi threading operations in Node.js.
- When you want to activate a thread in thread pool for processing.

#### More information 

- [Official NodeJS site for Worker Thread](https://nodejs.org/api/worker_threads.html)
- [npm package for Worker Thread](https://www.npmjs.com/package/worker-thread)
