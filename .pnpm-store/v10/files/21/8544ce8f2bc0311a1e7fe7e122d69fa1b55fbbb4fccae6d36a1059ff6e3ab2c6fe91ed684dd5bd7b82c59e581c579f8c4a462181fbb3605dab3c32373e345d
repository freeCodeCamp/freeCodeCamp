import { devUtils } from '../../utils/internal/devUtils.mjs';
import { getTimestamp } from '../../utils/logging/getTimestamp.mjs';
import { toPublicUrl } from '../../utils/request/toPublicUrl.mjs';
import { getMessageLength } from './getMessageLength.mjs';
import { getPublicData } from './getPublicData.mjs';
const colors = {
  system: "#3b82f6",
  outgoing: "#22c55e",
  incoming: "#ef4444",
  mocked: "#ff6a33"
};
function attachWebSocketLogger(connection) {
  const { client, server } = connection;
  const controller = new AbortController();
  logConnectionOpen(client);
  client.addEventListener(
    "message",
    (event) => {
      logOutgoingClientMessage(event);
    },
    { signal: controller.signal }
  );
  client.addEventListener(
    "close",
    (event) => {
      logConnectionClose(event);
    },
    { signal: controller.signal }
  );
  client.socket.addEventListener(
    "error",
    (event) => {
      logClientError(event);
    },
    { signal: controller.signal }
  );
  const { send: originalClientSend } = client;
  client.send = new Proxy(client.send, {
    apply(target, thisArg, args) {
      const [data] = args;
      const messageEvent = new MessageEvent("message", { data });
      Object.defineProperties(messageEvent, {
        currentTarget: {
          enumerable: true,
          writable: false,
          value: client.socket
        },
        target: {
          enumerable: true,
          writable: false,
          value: client.socket
        }
      });
      queueMicrotask(() => {
        logIncomingMockedClientMessage(messageEvent);
      });
      return Reflect.apply(target, thisArg, args);
    }
  });
  server.addEventListener(
    "open",
    () => {
      server.addEventListener("message", (event) => {
        logIncomingServerMessage(event);
      });
    },
    {
      once: true,
      signal: controller.signal
    }
  );
  const { send: originalServerSend } = server;
  server.send = new Proxy(server.send, {
    apply(target, thisArg, args) {
      const [data] = args;
      const messageEvent = new MessageEvent("message", { data });
      Object.defineProperties(messageEvent, {
        currentTarget: {
          enumerable: true,
          writable: false,
          value: server.socket
        },
        target: {
          enumerable: true,
          writable: false,
          value: server.socket
        }
      });
      logOutgoingMockedClientMessage(messageEvent);
      return Reflect.apply(target, thisArg, args);
    }
  });
  controller.signal.addEventListener(
    "abort",
    () => {
      client.send = originalClientSend;
      server.send = originalServerSend;
    },
    { once: true }
  );
  return () => {
    controller.abort();
  };
}
function logConnectionOpen(client) {
  const publicUrl = toPublicUrl(client.url);
  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp()} %c\u25B6%c ${publicUrl}`),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log("Client:", client.socket);
  console.groupEnd();
}
function logConnectionClose(event) {
  const target = event.target;
  const publicUrl = toPublicUrl(target.url);
  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c\u25A0%c ${publicUrl}`
    ),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log(event);
  console.groupEnd();
}
function logClientError(event) {
  const socket = event.target;
  const publicUrl = toPublicUrl(socket.url);
  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c\xD7%c ${publicUrl}`
    ),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logOutgoingClientMessage(event) {
  const byteLength = getMessageLength(event.data);
  const publicData = await getPublicData(event.data);
  const arrow = event.defaultPrevented ? "\u21E1" : "\u2B06";
  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c${arrow}%c ${publicData} %c${byteLength}%c`
    ),
    `color:${colors.outgoing}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logOutgoingMockedClientMessage(event) {
  const byteLength = getMessageLength(event.data);
  const publicData = await getPublicData(event.data);
  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c\u2B06%c ${publicData} %c${byteLength}%c`
    ),
    `color:${colors.mocked}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logIncomingMockedClientMessage(event) {
  const byteLength = getMessageLength(event.data);
  const publicData = await getPublicData(event.data);
  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c\u2B07%c ${publicData} %c${byteLength}%c`
    ),
    `color:${colors.mocked}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logIncomingServerMessage(event) {
  const byteLength = getMessageLength(event.data);
  const publicData = await getPublicData(event.data);
  const arrow = event.defaultPrevented ? "\u21E3" : "\u2B07";
  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c${arrow}%c ${publicData} %c${byteLength}%c`
    ),
    `color:${colors.incoming}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}
export {
  attachWebSocketLogger,
  colors,
  logConnectionOpen
};
//# sourceMappingURL=attachWebSocketLogger.mjs.map