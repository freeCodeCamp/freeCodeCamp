/// <reference lib="dom" />

import { invariant } from "outvariant";
import { DeferredPromise } from "@open-draft/deferred-promise";

import { CHANNEL_NAME } from "./constants";
import {
  IPreviewReadyMessage,
  IPreviewInitMessage,
  IWorkerPingMessage,
  IWorkerInitMessage,
  IPreviewResponseMessage,
} from "./types";
import { getWorkerInstance } from "./utils";

declare global {
  var __SERVICE_WORKER_BUNDLE_NAME: string;
}

// Create a message channel for communication with the Service Worker.
const workerChannel = new MessageChannel();

const workerReadyPromise = new DeferredPromise<ServiceWorker>();

workerReadyPromise.then((worker) => {
  // console.debug("worker is ready, initializing MessageChannel...");

  // Always post the initial MessageChannel message to the worker
  // as soon as the worker is ready. This is done once.
  const workerInitMessage: IWorkerInitMessage = {
    $channel: CHANNEL_NAME,
    $type: "worker/init",
  };
  worker.postMessage(workerInitMessage, [workerChannel.port2]);

  return worker;
});

const parentPortPromise = new DeferredPromise<MessagePort>();
window.addEventListener(
  "message",
  (event: MessageEvent<IPreviewInitMessage>) => {
    if (event.data.$type === "preview/init") {
      const parentPort = event.ports[0];
      parentPort.onmessage = async (evt: MessageEvent) => {
        if (
          typeof evt.data === "object" &&
          evt.data.$channel === CHANNEL_NAME &&
          evt.data.$type === "preview/response"
        ) {
          const msg: IPreviewResponseMessage = evt.data;
          workerChannel.port1.postMessage(msg);
        }
      };
      parentPortPromise.resolve(parentPort);
    }
  }
);

workerChannel.port1.onmessage = async (event) => {
  const data = event.data;

  // console.debug("incoming message from the worker", event.data);

  if (data.$channel === CHANNEL_NAME) {
    // Pause the message handling until the parent has taken control of the preview.
    const port = await parentPortPromise;

    // Route all data to the parent.
    const message = data;
    port.postMessage(message);
  }
};

const workerUrl = new URL(__SERVICE_WORKER_BUNDLE_NAME, location.origin).href;

/**
 * Establish a ping/pong messages between the client and the worker.
 * This prevent their communication from becoming idle, which causes
 * some browsers to terminate the worker after a period of inactivity.
 */
function preventStaleTermination(worker: ServiceWorker): void {
  const keepaliveInterval = setInterval(() => {
    const pingMessage: IWorkerPingMessage = {
      $channel: CHANNEL_NAME,
      $type: "worker/ping",
    };
    worker.postMessage(pingMessage);
  }, 5_000);

  worker.addEventListener("statechange", () => {
    // Stop the keepalive if the worker becomes redundant
    // (e.g. get unregistered or force-reloaded).
    if (worker.state === "redundant") {
      clearInterval(keepaliveInterval);
    }
  });
}

async function getServiceWorker(): Promise<ServiceWorker | null> {
  invariant(
    "serviceWorker" in navigator,
    "Failed to start the relay Service Worker: Service Worker API is not supported in this browser"
  );

  /**
   * Registers the relay Service Worker anew.
   */
  const registerWorker = async (): Promise<ServiceWorker | null> => {
    const registration = await navigator.serviceWorker.register(
      __SERVICE_WORKER_BUNDLE_NAME,
      {
        scope: "/",
      }
    );
    return getWorkerInstance(registration);
  };

  // Unregisters irrelevant worker registrations.
  const registrations = await navigator.serviceWorker.getRegistrations();
  // console.debug("all registrations", location, registrations);

  await Promise.all(
    registrations.map((registration) => {
      const worker = getWorkerInstance(registration);

      // Unregister any worker that shouldn't be there.
      if (worker && worker.scriptURL !== workerUrl) {
        // console.debug(
        //   "found irrelevant worker registration, unregistering...",
        //   worker,
        //   registration
        // );
        return registration.unregister();
      }
    })
  );

  // Get the existing Service Worker controller, if any.
  const { controller } = navigator.serviceWorker;

  // No controller means the relay does not have any Service Worker registered.
  if (!controller) {
    // console.debug(
    //   "relay is not controlled by a worker, registering a new worker..."
    // );
    return registerWorker();
  }

  // If the controller has the same script as the expected worker,
  // this means the correct worker is already handling the page.
  if (controller.scriptURL === workerUrl) {
    // console.debug(
    //   "relay is controlled by the correct worker",
    //   controller.scriptURL
    // );
    return controller;
  }

  const [controllerRegistration, registration] = await Promise.all([
    navigator.serviceWorker.getRegistration(controller.scriptURL),
    navigator.serviceWorker.getRegistration(workerUrl),
  ]);

  // console.debug("controller registration:", controllerRegistration);
  // console.debug("worker registration:", registration);

  // If there's no registration associated with the correct worker,
  // unregister whichever existing controller and register the worker anew.
  if (!registration) {
    // console.debug(
    //   'no registration found for "%s", unregistering controller and registering a new worker...',
    //   workerUrl
    // );
    await controllerRegistration?.unregister();
    return registerWorker();
  }

  // Waiting registration means the correct worker is queued but
  // hasn't been installed/activated yet. Promote it by updating.
  if (registration.waiting) {
    // console.debug("found waiting registration, promoting...");
    await registration.update();
    const worker = getWorkerInstance(registration);

    invariant(
      worker,
      "Failed to retrieve the worker instance after promotion: worked does not exist"
    );
    invariant(
      registration.active,
      'Failed to promove a waiting Service Worker: expected the worker state to be "active" but got "%s"',
      worker.state
    );

    return worker;
  }

  return null;
}

async function start() {
  // console.debug("starting the request relay...", { workerUrl });

  const worker = await getServiceWorker().catch((error) => {
    console.error(
      "Failed to ensure the relay has a Service Worker registered. See details below."
    );
    console.error(error);
    return;
  });
  await navigator.serviceWorker.ready;

  invariant(worker, "Failed to retrieve the worker instance: worker not found");
  preventStaleTermination(worker);

  workerReadyPromise.resolve(worker);

  // Wait until the parent sends the init event
  // via the MessageChannel, acknowledging that it recognized the relay.
  const parentPort = await parentPortPromise;
  // console.debug("parent port received", parentPort);

  const readyMessage: IPreviewReadyMessage = {
    $channel: CHANNEL_NAME,
    $type: "preview/ready",
  };
  parentPort.postMessage(readyMessage);
}

start().catch(console.error);
