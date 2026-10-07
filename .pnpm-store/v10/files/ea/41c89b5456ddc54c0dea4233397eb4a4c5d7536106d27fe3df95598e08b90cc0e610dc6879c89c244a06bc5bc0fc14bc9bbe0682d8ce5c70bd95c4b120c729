"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var attachWebSocketLogger_exports = {};
__export(attachWebSocketLogger_exports, {
  attachWebSocketLogger: () => attachWebSocketLogger,
  colors: () => colors,
  logConnectionOpen: () => logConnectionOpen
});
module.exports = __toCommonJS(attachWebSocketLogger_exports);
var import_devUtils = require("../../utils/internal/devUtils");
var import_getTimestamp = require("../../utils/logging/getTimestamp");
var import_toPublicUrl = require("../../utils/request/toPublicUrl");
var import_getMessageLength = require("./getMessageLength");
var import_getPublicData = require("./getPublicData");
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
  const publicUrl = (0, import_toPublicUrl.toPublicUrl)(client.url);
  console.groupCollapsed(
    import_devUtils.devUtils.formatMessage(`${(0, import_getTimestamp.getTimestamp)()} %c\u25B6%c ${publicUrl}`),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log("Client:", client.socket);
  console.groupEnd();
}
function logConnectionClose(event) {
  const target = event.target;
  const publicUrl = (0, import_toPublicUrl.toPublicUrl)(target.url);
  console.groupCollapsed(
    import_devUtils.devUtils.formatMessage(
      `${(0, import_getTimestamp.getTimestamp)({ milliseconds: true })} %c\u25A0%c ${publicUrl}`
    ),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log(event);
  console.groupEnd();
}
function logClientError(event) {
  const socket = event.target;
  const publicUrl = (0, import_toPublicUrl.toPublicUrl)(socket.url);
  console.groupCollapsed(
    import_devUtils.devUtils.formatMessage(
      `${(0, import_getTimestamp.getTimestamp)({ milliseconds: true })} %c\xD7%c ${publicUrl}`
    ),
    `color:${colors.system}`,
    "color:inherit"
  );
  console.log(event);
  console.groupEnd();
}
async function logOutgoingClientMessage(event) {
  const byteLength = (0, import_getMessageLength.getMessageLength)(event.data);
  const publicData = await (0, import_getPublicData.getPublicData)(event.data);
  const arrow = event.defaultPrevented ? "\u21E1" : "\u2B06";
  console.groupCollapsed(
    import_devUtils.devUtils.formatMessage(
      `${(0, import_getTimestamp.getTimestamp)({ milliseconds: true })} %c${arrow}%c ${publicData} %c${byteLength}%c`
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
  const byteLength = (0, import_getMessageLength.getMessageLength)(event.data);
  const publicData = await (0, import_getPublicData.getPublicData)(event.data);
  console.groupCollapsed(
    import_devUtils.devUtils.formatMessage(
      `${(0, import_getTimestamp.getTimestamp)({ milliseconds: true })} %c\u2B06%c ${publicData} %c${byteLength}%c`
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
  const byteLength = (0, import_getMessageLength.getMessageLength)(event.data);
  const publicData = await (0, import_getPublicData.getPublicData)(event.data);
  console.groupCollapsed(
    import_devUtils.devUtils.formatMessage(
      `${(0, import_getTimestamp.getTimestamp)({ milliseconds: true })} %c\u2B07%c ${publicData} %c${byteLength}%c`
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
  const byteLength = (0, import_getMessageLength.getMessageLength)(event.data);
  const publicData = await (0, import_getPublicData.getPublicData)(event.data);
  const arrow = event.defaultPrevented ? "\u21E3" : "\u2B07";
  console.groupCollapsed(
    import_devUtils.devUtils.formatMessage(
      `${(0, import_getTimestamp.getTimestamp)({ milliseconds: true })} %c${arrow}%c ${publicData} %c${byteLength}%c`
    ),
    `color:${colors.incoming}`,
    "color:inherit",
    "color:gray;font-weight:normal",
    "color:inherit;font-weight:inherit"
  );
  console.log(event);
  console.groupEnd();
}
//# sourceMappingURL=attachWebSocketLogger.js.map