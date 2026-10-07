/* eslint-disable */
/**
 * Utils
 */
const CHANNEL_NAME = '$CSB_RELAY';

function invariant(predicate, message, ...positionals) {
  if (!predicate) {
    throw new Error(message, ...positionals);
  }
}

let counter = 0;

function generateRandomId() {
  const now = Date.now();
  const randomNumber = Math.round(Math.random() * 10000);
  counter += 1;
  return (+`${now}${randomNumber}${counter}`).toString(16);
}

const DEBUG = false;

const debug = (...args) => {
  if (DEBUG) console.debug(...args);
};

function DeferredPromise() {
  let resolve;
  let reject;

  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  promise.state = 'pending';

  promise.resolve = data => {
    if (promise.state !== 'pending') {
      return;
    }

    promise.result = data;

    const onFulfilled = value => {
      promise.state = 'fulfilled';
      return value;
    };

    return resolve(
      data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled)
    );
  };

  promise.reject = reason => {
    if (promise.state !== 'pending') {
      return;
    }

    queueMicrotask(() => {
      promise.state = 'rejected';
    });

    return reject((promise.rejectionReason = reason));
  };

  return promise;
}

/**
 * End utils
 */

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  return self.clients.claim();
});

const pendingRequests = new Map();
function initRelayPort(relayPort) {
  /**
   * @note that "addEventListener" and "onmessage" are not always
   * synonymous in MessageChannel so be careful refactoring this.
   */
  relayPort.onmessage = event => {
    const { data } = event;

    switch (data.$type) {
      case 'preview/response': {
        const message = data;
        const foundRequest = pendingRequests.get(message.id);

        // No pending request associated with the request ID from the message is a no-op.
        invariant(
          foundRequest,
          'Failed to handle "PREVIEW_RESPONSE_TYPE" message from the relay: unknown request ID "%s"',
          message.id
        );

        pendingRequests.delete(message.id);
        foundRequest.resolve({
          status: message.status,
          headers: message.headers,
          body: message.body,
        });
        break;
      }
    }
  };
}

function createRelayPortPromise() {
  const promise = new DeferredPromise();
  promise.then(port => {
    initRelayPort(port);
    return port;
  });
  return promise;
}

// Declare a promise that resolves once the relay sends
// a message with the MessagePort to bind their communication.
let relayPortPromise = createRelayPortPromise();

async function sendToRelay(message) {
  const relayPort = await relayPortPromise;
  invariant(
    relayPort,
    'Failed to send message to the relay: relay message port is not defined',
    message
  );
  relayPort.postMessage(message);
}

self.addEventListener('message', async event => {
  if (typeof event.data !== 'object' || event.data.$channel !== CHANNEL_NAME) {
    return;
  }

  const message = event.data;
  switch (message.$type) {
    case 'worker/invalidate-port': {
      debug('[SW]: Invalidate port');

      relayPortPromise = createRelayPortPromise();

      break;
    }

    case 'worker/init': {
      const nextRelayPort = event.ports[0];

      invariant(
        relayPortPromise.state === 'pending',
        'Failed to initialize relay: relay port promise already fulfilled from previous evaluation.'
      );

      /**
       * @fixme Looks like upon shell restart, the worker is still running,
       * so this promise is already resolved. Resolving it again with
       * the correct message port does nothing, and it keeps pointing
       * to the previous (incorrect) message port.
       */
      relayPortPromise.resolve(nextRelayPort);
      debug('[SW]: relay port resolved', nextRelayPort);
      break;
    }

    case 'worker/ping': {
      // We are only interested in clients sending this.
      if (!(event.source instanceof Client)) {
        return;
      }

      const client = await self.clients.get(event.source.id);
      if (client) {
        const pong = {
          $channel: CHANNEL_NAME,
          $type: 'worker/pong',
        };

        // Send back the pong message to keep the client/worker
        // communication from becoming idle (i.e. terminated).
        client.postMessage(pong);
      }
      break;
    }
  }
});

function getResponse(request) {
  const requestId = generateRandomId();
  const requestPromise = new DeferredPromise();

  // Add some response timeout so the worker doesn't hang indefinitely,
  // making it hard to know what went wrong.
  const timeout = setTimeout(() => {
    pendingRequests.delete(requestId);
    requestPromise.reject(
      new Error(
        `Failed to handle ${request.method} ${request.url} request: no response received from the BroadcastChannel within timeout. There's likely an issue with the relay/worker communication.`
      )
    );
  }, 10000);

  const requestMessage = {
    $channel: CHANNEL_NAME,
    $type: 'preview/request',
    id: requestId,
    url: request.url,
    method: request.method,
  };

  pendingRequests.set(requestId, requestPromise);

  // The worker delegates request resolution to the relay, which,
  // in turn, forwards these request messages to the main frame.
  sendToRelay(requestMessage);

  return requestPromise.finally(() => clearTimeout(timeout));
}

self.addEventListener('fetch', event => {
  const req = event.request.clone();
  const parsedUrl = new URL(req.url);

  /**
   * TODO: figure out a way to filter bundler requests and
   * local requests. Now, it only supports `public`
   */

  if (
    parsedUrl.origin === self.location.origin &&
    (parsedUrl.pathname.startsWith('/public') ||
      parsedUrl.pathname.startsWith('/node_modules/'))
  ) {
    const handleRequest = async () => {
      debug(`[SW]: request `, req);

      const response = await getResponse(req);
      const pathname = parsedUrl.pathname;
      const responseBody =
        pathname.endsWith('.woff2') ||
        pathname.endsWith('.woff') ||
        pathname.endsWith('.ttf')
          ? base64ToUint8Array(response.body)
          : response.body;

      const swResponse = new Response(responseBody, {
        headers: response.headers,
        status: response.status,
      });

      debug(`[SW]: response`, response);
      return swResponse;
    };

    // eslint-disable-next-line
    return event.respondWith(handleRequest());
  }
});

function base64ToUint8Array(base64String) {
  const binaryString = atob(base64String);
  const uint8Array = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  return uint8Array;
}
