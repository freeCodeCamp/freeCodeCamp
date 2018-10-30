let len = 0;
let vertxNext;
export default function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 1, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    scheduleFlush();
  }
}

const browserWindow = (typeof window !== 'undefined') ? window : undefined;
const browserGlobal = browserWindow || {};
const BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
const isNode = typeof self === 'undefined' &&
  typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
const isWorker = typeof Uint8ClampedArray !== 'undefined' &&
  typeof importScripts !== 'undefined' &&
  typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  let nextTick = process.nextTick;
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // setImmediate should be used instead instead
  let version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
  if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
    nextTick = setImmediate;
  }
  return () => nextTick(flush);
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function() {
      vertxNext(flush);
    };
  }
  return useSetTimeout();
}

function useMutationObserver() {
  let iterations = 0;
  let observer = new BrowserMutationObserver(flush);
  let node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return () => node.data = (iterations = ++iterations % 2);
}

// web worker
function useMessageChannel() {
  let channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return () => channel.port2.postMessage(0);
}

function useSetTimeout() {
  return () => setTimeout(flush, 1);
}

const queue = new Array(1000);

function flush() {
  for (let i = 0; i < len; i+=2) {
    let callback = queue[i];
    let arg = queue[i+1];

    callback(arg);

    queue[i] = undefined;
    queue[i+1] = undefined;
  }

  len = 0;
}

function attemptVertex() {
  try {
    let r = require;
    let vertx = r('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch(e) {
    return useSetTimeout();
  }
}

let scheduleFlush;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof require === 'function') {
  scheduleFlush = attemptVertex();
} else {
  scheduleFlush = useSetTimeout();
}
