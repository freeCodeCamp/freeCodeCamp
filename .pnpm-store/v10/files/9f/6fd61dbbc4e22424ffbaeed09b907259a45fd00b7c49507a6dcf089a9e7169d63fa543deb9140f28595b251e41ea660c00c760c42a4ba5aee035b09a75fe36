import '../../../vs/editor/browser/coreCommands.js';
import '../../../vs/editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../vs/editor/browser/widget/diffEditor/diffEditor.contribution.js';
import '../../../vs/editor/contrib/anchorSelect/browser/anchorSelect.js';
import '../../../vs/editor/contrib/bracketMatching/browser/bracketMatching.js';
import '../../../vs/editor/contrib/caretOperations/browser/caretOperations.js';
import '../../../vs/editor/contrib/caretOperations/browser/transpose.js';
import '../../../vs/editor/contrib/clipboard/browser/clipboard.js';
import '../../../vs/editor/contrib/codeAction/browser/codeActionContributions.js';
import '../../../vs/editor/contrib/codelens/browser/codelensController.js';
import '../../../vs/editor/contrib/colorPicker/browser/colorPickerContribution.js';
import '../../../vs/editor/contrib/comment/browser/comment.js';
import '../../../vs/editor/contrib/contextmenu/browser/contextmenu.js';
import '../../../vs/editor/contrib/cursorUndo/browser/cursorUndo.js';
import '../../../vs/editor/contrib/dnd/browser/dnd.js';
import '../../../vs/editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js';
import '../../../vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js';
import '../../../vs/editor/contrib/find/browser/findController.js';
import '../../../vs/editor/contrib/folding/browser/folding.js';
import '../../../vs/editor/contrib/fontZoom/browser/fontZoom.js';
import '../../../vs/editor/contrib/format/browser/formatActions.js';
import '../../../vs/editor/contrib/documentSymbols/browser/documentSymbols.js';
import '../../../vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js';
import '../../../vs/editor/contrib/inlineProgress/browser/inlineProgress.js';
import '../../../vs/editor/contrib/gotoSymbol/browser/goToCommands.js';
import '../../../vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js';
import '../../../vs/editor/contrib/gotoError/browser/gotoError.js';
import '../../../vs/editor/contrib/gpu/browser/gpuActions.js';
import '../../../vs/editor/contrib/hover/browser/hoverContribution.js';
import '../../../vs/editor/contrib/indentation/browser/indentation.js';
import '../../../vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js';
import '../../../vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js';
import '../../../vs/editor/contrib/insertFinalNewLine/browser/insertFinalNewLine.js';
import '../../../vs/editor/contrib/lineSelection/browser/lineSelection.js';
import '../../../vs/editor/contrib/linesOperations/browser/linesOperations.js';
import '../../../vs/editor/contrib/linkedEditing/browser/linkedEditing.js';
import '../../../vs/editor/contrib/links/browser/links.js';
import '../../../vs/editor/contrib/longLinesHelper/browser/longLinesHelper.js';
import '../../../vs/editor/contrib/middleScroll/browser/middleScroll.contribution.js';
import '../../../vs/editor/contrib/multicursor/browser/multicursor.js';
import '../../../vs/editor/contrib/parameterHints/browser/parameterHints.js';
import '../../../vs/editor/contrib/placeholderText/browser/placeholderText.contribution.js';
import '../../../vs/editor/contrib/rename/browser/rename.js';
import '../../../vs/editor/contrib/sectionHeaders/browser/sectionHeaders.js';
import '../../../vs/editor/contrib/semanticTokens/browser/documentSemanticTokens.js';
import '../../../vs/editor/contrib/semanticTokens/browser/viewportSemanticTokens.js';
import '../../../vs/editor/contrib/smartSelect/browser/smartSelect.js';
import '../../../vs/editor/contrib/snippet/browser/snippetController2.js';
import '../../../vs/editor/contrib/stickyScroll/browser/stickyScrollContribution.js';
import '../../../vs/editor/contrib/suggest/browser/suggestController.js';
import '../../../vs/editor/contrib/suggest/browser/suggestInlineCompletions.js';
import '../../../vs/editor/contrib/tokenization/browser/tokenization.js';
import '../../../vs/editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js';
import '../../../vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js';
import '../../../vs/editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js';
import '../../../vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js';
import '../../../vs/editor/contrib/wordOperations/browser/wordOperations.js';
import '../../../vs/editor/contrib/wordPartOperations/browser/wordPartOperations.js';
import '../../../vs/editor/contrib/readOnlyMessage/browser/contribution.js';
import '../../../vs/editor/contrib/diffEditorBreadcrumbs/browser/contribution.js';
import '../../../vs/editor/contrib/floatingMenu/browser/floatingMenu.contribution.js';
import '../../../vs/editor/common/standaloneStrings.js';
import '../../../vs/base/browser/ui/codicons/codicon/codicon.css';
import '../../../vs/base/browser/ui/codicons/codicon/codicon-modifiers.css';
import '../../../vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
import '../../../vs/editor/standalone/browser/inspectTokens/inspectTokens.js';
import '../../../vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
import '../../../vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js';
import '../../../vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
import '../../../vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js';
import '../../../vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';
import '../../../vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';
import { languages, MarkerSeverity, MarkerTag, editor, Position, Range, Emitter, Uri } from '../../../vs/editor/editor.api2.js';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e;
function isRequestOrNotification(msg) {
  return msg.method !== void 0;
}
var ErrorObject;
(function(ErrorObject$1) {
  function create(obj) {
    return obj;
  }
  ErrorObject$1.create = create;
})(ErrorObject || (ErrorObject = {}));
var ErrorCode;
(function(ErrorCode$1) {
  ErrorCode$1.parseError = -32700;
  ErrorCode$1.invalidRequest = -32600;
  ErrorCode$1.methodNotFound = -32601;
  ErrorCode$1.invalidParams = -32602;
  ErrorCode$1.internalError = -32603;
  function isServerError(code) {
    return -32099 <= code && code <= -32e3;
  }
  ErrorCode$1.isServerError = isServerError;
  function serverError(code) {
    if (!isServerError(code)) throw new Error("Invalid range for a server error.");
    return code;
  }
  ErrorCode$1.serverError = serverError;
  ErrorCode$1.unexpectedServerError = -32e3;
  function isApplicationError(code) {
    return true;
  }
  ErrorCode$1.isApplicationError = isApplicationError;
  function applicationError(code) {
    return code;
  }
  ErrorCode$1.applicationError = applicationError;
  ErrorCode$1.genericApplicationError = -320100;
})(ErrorCode || (ErrorCode = {}));
var EventEmitter = class {
  constructor() {
    __publicField(this, "listeners", /* @__PURE__ */ new Set());
    __publicField(this, "event", (listener) => {
      this.listeners.add(listener);
      return { dispose: () => {
        this.listeners.delete(listener);
      } };
    });
  }
  fire(args) {
    this.listeners.forEach((listener) => listener(args));
  }
};
var ValueWithChangeEvent = class {
  constructor(initialValue) {
    __publicField(this, "_value");
    __publicField(this, "eventEmitter");
    this._value = initialValue;
    this.eventEmitter = new EventEmitter();
  }
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this._value !== newValue) {
      this._value = newValue;
      this.eventEmitter.fire(newValue);
    }
  }
  get onChange() {
    return this.eventEmitter.event;
  }
};
function createTimeout(delay, callback) {
  const handle = setTimeout(callback, delay);
  return { dispose: () => clearTimeout(handle) };
}
function setAndDeleteOnDispose(set, keyOrItem, item) {
  if (set instanceof Set) {
    set.add(keyOrItem);
    return { dispose: () => set.delete(keyOrItem) };
  } else {
    set.set(keyOrItem, item);
    return { dispose: () => set.delete(keyOrItem) };
  }
}
var Deferred = class {
  constructor() {
    __publicField(this, "_state", "none");
    __publicField(this, "promise");
    __publicField(this, "resolve", () => {
    });
    __publicField(this, "reject", () => {
    });
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  get state() {
    return this._state;
  }
};
var BaseMessageTransport = (_a = class {
  constructor() {
    __publicField(this, "_unprocessedMessages", []);
    __publicField(this, "_messageListener");
    __publicField(this, "id", _a.id++);
    __publicField(this, "_state", new ValueWithChangeEvent({ state: "open" }));
    __publicField(this, "state", this._state);
  }
  /**
  * Sets a callback for incoming messages.
  */
  setListener(listener) {
    this._messageListener = listener;
    if (!listener) return;
    while (this._unprocessedMessages.length > 0 && this._messageListener !== void 0) {
      const msg = this._unprocessedMessages.shift();
      this._messageListener(msg);
    }
  }
  /**
  * Writes a message to the stream.
  */
  send(message) {
    return this._sendImpl(message);
  }
  /**
  * Call this in derived classes to signal a new message.
  */
  _dispatchReceivedMessage(message) {
    if (this._unprocessedMessages.length === 0 && this._messageListener) this._messageListener(message);
    else this._unprocessedMessages.push(message);
  }
  /**
  * Call this in derived classes to signal that the connection closed.
  */
  _onConnectionClosed() {
    this._state.value = {
      state: "closed",
      error: void 0
    };
  }
  log(logger) {
    return new StreamLogger(this, logger ?? new ConsoleMessageLogger());
  }
}, __publicField(_a, "id", 0), _a);
var StreamLogger = class {
  constructor(baseStream, logger) {
    __publicField(this, "baseStream");
    __publicField(this, "logger");
    this.baseStream = baseStream;
    this.logger = logger;
  }
  get state() {
    return this.baseStream.state;
  }
  setListener(listener) {
    if (listener === void 0) {
      this.baseStream.setListener(void 0);
      return;
    }
    this.baseStream.setListener((readMessage) => {
      this.logger.log(this.baseStream, "incoming", readMessage);
      listener(readMessage);
    });
  }
  send(message) {
    this.logger.log(this.baseStream, "outgoing", message);
    return this.baseStream.send(message);
  }
  toString() {
    return `StreamLogger/${this.baseStream.toString()}`;
  }
};
var ConsoleMessageLogger = class {
  log(stream, type, message) {
    const char = type === "incoming" ? "<-" : "->";
    console.log(`${char} [${stream.toString()}] ${JSON.stringify(message)}`);
  }
};
var Channel = class Channel2 {
  constructor(connect) {
    __publicField(this, "connect");
    this.connect = connect;
  }
  mapContext(map) {
    return new Channel2((listener) => this.connect(listener ? mapRequestHandlerContext(listener, map) : void 0));
  }
};
function mapRequestHandlerContext(messageHandler, map) {
  return {
    handleNotification: (request, context) => messageHandler.handleNotification(request, map(context)),
    handleRequest: (request, requestId, context) => messageHandler.handleRequest(request, requestId, map(context))
  };
}
var StreamBasedChannel = class StreamBasedChannel2 {
  constructor(_stream, _listener, _logger) {
    __publicField(this, "_stream");
    __publicField(this, "_listener");
    __publicField(this, "_logger");
    __publicField(this, "_unprocessedResponses", /* @__PURE__ */ new Map());
    __publicField(this, "_lastUsedRequestId", 0);
    this._stream = _stream;
    this._listener = _listener;
    this._logger = _logger;
    this._stream.setListener((message) => {
      if (isRequestOrNotification(message)) if (message.id === void 0) this._processNotification(message);
      else this._processRequest(message);
      else this._processResponse(message);
    });
  }
  /**
  * Creates a channel factory from a given stream and logger.
  * This allows to delay specifying a `RequestHandler`.
  * Once the channel is created, it processes incoming messages.
  */
  static createChannel(stream, logger) {
    let constructed = false;
    return new Channel((listener) => {
      if (constructed) throw new Error(`A channel to the stream ${stream} was already constructed!`);
      else constructed = true;
      return new StreamBasedChannel2(stream, listener, logger);
    });
  }
  get state() {
    return this._stream.state;
  }
  async _processNotification(message) {
    if (message.id !== void 0) throw new Error();
    if (!this._listener) {
      if (this._logger) this._logger.debug({
        text: "Notification ignored",
        message
      });
      return;
    }
    try {
      await this._listener.handleNotification({
        method: message.method,
        params: message.params || null
      });
    } catch (exception) {
      if (this._logger) this._logger.warn({
        text: `Exception was thrown while handling notification: ${exception}`,
        exception,
        message
      });
    }
  }
  async _processRequest(message) {
    if (message.id === void 0) throw new Error();
    let result;
    if (this._listener) try {
      result = await this._listener.handleRequest({
        method: message.method,
        params: message.params || null
      }, message.id);
    } catch (exception) {
      if (this._logger) this._logger.warn({
        text: `Exception was thrown while handling request: ${exception}`,
        message,
        exception
      });
      result = { error: {
        code: ErrorCode.internalError,
        message: "An unexpected exception was thrown.",
        data: void 0
      } };
    }
    else {
      if (this._logger) this._logger.debug({
        text: "Received request even though not listening for requests",
        message
      });
      result = { error: {
        code: ErrorCode.methodNotFound,
        message: "This endpoint does not listen for requests or notifications.",
        data: void 0
      } };
    }
    let responseMsg;
    if ("result" in result) responseMsg = {
      jsonrpc: "2.0",
      id: message.id,
      result: result.result
    };
    else responseMsg = {
      jsonrpc: "2.0",
      id: message.id,
      error: result.error
    };
    await this._stream.send(responseMsg);
  }
  _processResponse(message) {
    const strId = "" + message.id;
    const callback = this._unprocessedResponses.get(strId);
    if (!callback) {
      if (this._logger) this._logger.debug({
        text: "Got an unexpected response message",
        message
      });
      return;
    }
    this._unprocessedResponses.delete(strId);
    callback(message);
  }
  _newRequestId() {
    return this._lastUsedRequestId++;
  }
  sendRequest(request, _context, messageIdCallback) {
    const message = {
      jsonrpc: "2.0",
      id: this._newRequestId(),
      method: request.method,
      params: request.params || void 0
    };
    if (messageIdCallback) messageIdCallback(message.id);
    return new Promise((resolve, reject) => {
      const strId = "" + message.id;
      this._unprocessedResponses.set(strId, (response) => {
        if ("result" in response) resolve({ result: response.result });
        else {
          if (!response.error) reject(/* @__PURE__ */ new Error("Response had neither 'result' nor 'error' field set."));
          resolve({ error: response.error });
        }
      });
      this._stream.send(message).then(void 0, (reason) => {
        this._unprocessedResponses.delete(strId);
        reject(reason);
      });
    });
  }
  sendNotification(notification, context) {
    const msg = {
      jsonrpc: "2.0",
      id: void 0,
      method: notification.method,
      params: notification.params || void 0
    };
    return this._stream.send(msg);
  }
  toString() {
    return "StreamChannel/" + this._stream.toString();
  }
};
var Serializers;
(function(Serializers$1) {
  function sAny() {
    return {
      deserializeFromJson: (input) => ({
        hasErrors: false,
        value: input
      }),
      serializeToJson: (input) => input
    };
  }
  Serializers$1.sAny = sAny;
  function sEmptyObject() {
    return {
      deserializeFromJson: (input) => ({
        hasErrors: false,
        value: {}
      }),
      serializeToJson: (input) => ({})
    };
  }
  Serializers$1.sEmptyObject = sEmptyObject;
  function sVoidFromNull() {
    return {
      deserializeFromJson: (input) => ({
        hasErrors: false,
        value: void 0
      }),
      serializeToJson: (input) => null
    };
  }
  Serializers$1.sVoidFromNull = sVoidFromNull;
})(Serializers || (Serializers = {}));
const OptionalMethodNotFound = Symbol("OptionalMethodNotFound");
var TypedChannelBase = class {
  contextualize(args) {
    return new ContextualizedTypedChannel(this, args);
  }
};
var ContextualizedTypedChannel = class extends TypedChannelBase {
  constructor(underylingTypedChannel, converters) {
    super();
    __publicField(this, "underylingTypedChannel");
    __publicField(this, "converters");
    this.underylingTypedChannel = underylingTypedChannel;
    this.converters = converters;
  }
  async request(requestType, args, newContext) {
    const context = await this.converters.getSendContext(newContext);
    return this.underylingTypedChannel.request(requestType, args, context);
  }
  async notify(notificationType, params, newContext) {
    const context = await this.converters.getSendContext(newContext);
    return this.underylingTypedChannel.notify(notificationType, params, context);
  }
  registerNotificationHandler(type, handler) {
    return this.underylingTypedChannel.registerNotificationHandler(type, async (arg, context) => {
      return await handler(arg, await this.converters.getNewContext(context));
    });
  }
  registerRequestHandler(requestType, handler) {
    return this.underylingTypedChannel.registerRequestHandler(requestType, async (arg, requestId, context) => {
      return await handler(arg, requestId, await this.converters.getNewContext(context));
    });
  }
};
var TypedChannel = class TypedChannel2 extends TypedChannelBase {
  constructor(channelCtor, options = {}) {
    super();
    __publicField(this, "channelCtor");
    __publicField(this, "_requestSender");
    __publicField(this, "_handler", /* @__PURE__ */ new Map());
    __publicField(this, "_unknownNotificationHandler", /* @__PURE__ */ new Set());
    __publicField(this, "_timeout");
    __publicField(this, "sendExceptionDetails", false);
    __publicField(this, "_logger");
    __publicField(this, "listeningDeferred", new Deferred());
    __publicField(this, "onListening", this.listeningDeferred.promise);
    __publicField(this, "_requestDidErrorEventEmitter", new EventEmitter());
    __publicField(this, "onRequestDidError", this._requestDidErrorEventEmitter.event);
    this.channelCtor = channelCtor;
    this._logger = options.logger;
    this.sendExceptionDetails = !!options.sendExceptionDetails;
    this._timeout = createTimeout(1e3, () => {
      if (!this._requestSender) console.warn(`"${this.startListen.name}" has not been called within 1 second after construction of this channel. Did you forget to call it?`, this);
    });
  }
  static fromTransport(stream, options = {}) {
    return new TypedChannel2(StreamBasedChannel.createChannel(stream, options.logger), options);
  }
  /**
  * This method must be called to forward messages from the stream to this channel.
  * This is not done automatically on construction so that this instance
  * can be setup properly before handling messages.
  */
  startListen() {
    if (this._requestSender) throw new Error(`"${this.startListen.name}" can be called only once, but it already has been called.`);
    if (this._timeout) {
      this._timeout.dispose();
      this._timeout = void 0;
    }
    this._requestSender = this.channelCtor.connect({
      handleRequest: (req, id, context) => this.handleRequest(req, id, context),
      handleNotification: (req, context) => this.handleNotification(req, context)
    });
    this.listeningDeferred.resolve();
  }
  checkChannel(channel) {
    if (!channel) throw new Error(`"${this.startListen.name}" must be called before any messages can be sent or received.`);
    return true;
  }
  async handleRequest(request, requestId, context) {
    const handler = this._handler.get(request.method);
    if (!handler) {
      if (this._logger) this._logger.debug({
        text: `No request handler for "${request.method}".`,
        data: { requestObject: request }
      });
      return { error: {
        code: ErrorCode.methodNotFound,
        message: `No request handler for "${request.method}".`,
        data: { method: request.method }
      } };
    }
    if (handler.kind != "request") {
      const message = `"${request.method}" is registered as notification, but was sent as request.`;
      if (this._logger) this._logger.debug({
        text: message,
        data: { requestObject: request }
      });
      return { error: {
        code: ErrorCode.invalidRequest,
        message,
        data: { method: request.method }
      } };
    }
    const decodeResult = handler.requestType.paramsSerializer.deserializeFromJson(request.params);
    if (decodeResult.hasErrors) {
      const message = `Got invalid params: ${decodeResult.errorMessage}`;
      if (this._logger) this._logger.debug({
        text: message,
        data: {
          requestObject: request,
          errorMessage: decodeResult.errorMessage
        }
      });
      return { error: {
        code: ErrorCode.invalidParams,
        message,
        data: { errors: decodeResult.errorMessage }
      } };
    } else {
      const args = decodeResult.value;
      let response;
      try {
        const result = await handler.handler(args, requestId, context);
        if ("error" in result || "errorMessage" in result) {
          const errorData = result.error ? handler.requestType.errorSerializer.serializeToJson(result.error) : void 0;
          response = { error: {
            code: result.errorCode || ErrorCode.genericApplicationError,
            message: result.errorMessage || "An error was returned",
            data: errorData
          } };
        } else response = { result: handler.requestType.resultSerializer.serializeToJson(result.ok) };
      } catch (exception) {
        if (exception instanceof RequestHandlingError) response = { error: {
          code: exception.code,
          message: exception.message
        } };
        else {
          if (this._logger) this._logger.warn({
            text: `An exception was thrown while handling a request: ${exception}.`,
            exception,
            data: { requestObject: request }
          });
          response = { error: {
            code: ErrorCode.unexpectedServerError,
            message: this.sendExceptionDetails ? `An exception was thrown while handling a request: ${exception}.` : "Server has thrown an unexpected exception"
          } };
        }
      }
      return response;
    }
  }
  async handleNotification(request, context) {
    const handler = this._handler.get(request.method);
    if (!handler) {
      for (const h of this._unknownNotificationHandler) h(request);
      if (this._unknownNotificationHandler.size === 0) {
        if (this._logger) this._logger.debug({
          text: `Unhandled notification "${request.method}"`,
          data: { requestObject: request }
        });
      }
      return;
    }
    if (handler.kind != "notification") {
      if (this._logger) this._logger.debug({
        text: `"${request.method}" is registered as request, but was sent as notification.`,
        data: { requestObject: request }
      });
      return;
    }
    const decodeResult = handler.notificationType.paramsSerializer.deserializeFromJson(request.params);
    if (decodeResult.hasErrors) {
      if (this._logger) this._logger.debug({
        text: `Got invalid params: ${decodeResult}`,
        data: {
          requestObject: request,
          errorMessage: decodeResult.errorMessage
        }
      });
      return;
    }
    const val = decodeResult.value;
    for (const handlerFunc of handler.handlers) try {
      handlerFunc(val, context);
    } catch (exception) {
      if (this._logger) this._logger.warn({
        text: `An exception was thrown while handling a notification: ${exception}.`,
        exception,
        data: { requestObject: request }
      });
    }
  }
  registerUnknownNotificationHandler(handler) {
    return setAndDeleteOnDispose(this._unknownNotificationHandler, handler);
  }
  registerRequestHandler(requestType, handler) {
    if (this._handler.get(requestType.method)) throw new Error(`Handler with method "${requestType.method}" already registered.`);
    return setAndDeleteOnDispose(this._handler, requestType.method, {
      kind: "request",
      requestType,
      handler
    });
  }
  registerNotificationHandler(type, handler) {
    let registeredHandler = this._handler.get(type.method);
    if (!registeredHandler) {
      registeredHandler = {
        kind: "notification",
        notificationType: type,
        handlers: /* @__PURE__ */ new Set()
      };
      this._handler.set(type.method, registeredHandler);
    } else {
      if (registeredHandler.kind !== "notification") throw new Error(`Method "${type.method}" was already registered as request handler.`);
      if (registeredHandler.notificationType !== type) throw new Error(`Method "${type.method}" was registered for a different type.`);
    }
    return setAndDeleteOnDispose(registeredHandler.handlers, handler);
  }
  getRegisteredTypes() {
    const result = [];
    for (const h of this._handler.values()) if (h.kind === "notification") result.push(h.notificationType);
    else if (h.kind === "request") result.push(h.requestType);
    return result;
  }
  async request(requestType, args, context) {
    if (!this.checkChannel(this._requestSender)) throw new Error("Impossible");
    const params = requestType.paramsSerializer.serializeToJson(args);
    assertObjectArrayOrNull(params);
    const response = await this._requestSender.sendRequest({
      method: requestType.method,
      params
    }, context);
    if ("error" in response) {
      if (requestType.isOptional && response.error.code === ErrorCode.methodNotFound) return OptionalMethodNotFound;
      let errorData;
      if (response.error.data !== void 0) {
        const deserializationResult = requestType.errorSerializer.deserializeFromJson(response.error.data);
        if (deserializationResult.hasErrors) throw new Error(deserializationResult.errorMessage);
        errorData = deserializationResult.value;
      } else errorData = void 0;
      const error = new RequestHandlingError(response.error.message, errorData, response.error.code);
      this._requestDidErrorEventEmitter.fire({ error });
      throw error;
    } else {
      const result = requestType.resultSerializer.deserializeFromJson(response.result);
      if (result.hasErrors) throw new Error("Could not deserialize response: " + result.errorMessage + `

${JSON.stringify(response, null, 2)}`);
      else return result.value;
    }
  }
  async notify(notificationType, params, context) {
    if (!this.checkChannel(this._requestSender)) throw new Error();
    const encodedParams = notificationType.paramsSerializer.serializeToJson(params);
    assertObjectArrayOrNull(encodedParams);
    this._requestSender.sendNotification({
      method: notificationType.method,
      params: encodedParams
    }, context);
  }
};
function assertObjectArrayOrNull(val) {
  if (val !== null && Array.isArray(val) && typeof val !== "object") throw new Error("Invalid value! Only null, array and object is allowed.");
}
var RequestHandlingError = class RequestHandlingError2 extends Error {
  constructor(message, data, code = ErrorCode.genericApplicationError) {
    super(message);
    __publicField(this, "data");
    __publicField(this, "code");
    this.data = data;
    this.code = code;
    Object.setPrototypeOf(this, RequestHandlingError2.prototype);
  }
};
var RequestType = class RequestType2 {
  constructor(method, paramsSerializer, resultSerializer, errorSerializer, isOptional = false) {
    __publicField(this, "method");
    __publicField(this, "paramsSerializer");
    __publicField(this, "resultSerializer");
    __publicField(this, "errorSerializer");
    __publicField(this, "isOptional");
    __publicField(this, "kind", "request");
    this.method = method;
    this.paramsSerializer = paramsSerializer;
    this.resultSerializer = resultSerializer;
    this.errorSerializer = errorSerializer;
    this.isOptional = isOptional;
  }
  withMethod(method) {
    return new RequestType2(method, this.paramsSerializer, this.resultSerializer, this.errorSerializer);
  }
  optional() {
    return new RequestType2(this.method, this.paramsSerializer, this.resultSerializer, this.errorSerializer, true);
  }
};
var NotificationType = class NotificationType2 {
  constructor(method, paramsSerializer) {
    __publicField(this, "method");
    __publicField(this, "paramsSerializer");
    __publicField(this, "kind", "notification");
    this.method = method;
    this.paramsSerializer = paramsSerializer;
  }
  withMethod(method) {
    return new NotificationType2(method, this.paramsSerializer);
  }
};
function unverifiedRequest(request) {
  return new RequestType((request || {}).method, Serializers.sAny(), Serializers.sAny(), Serializers.sAny());
}
function unverifiedNotification(request) {
  return new NotificationType((request || {}).method, Serializers.sAny());
}
const IsErrorWrapper = Symbol();
var ErrorWrapper = (_b = IsErrorWrapper, _c = class {
  constructor(error) {
    __publicField(this, "error");
    __publicField(this, _b);
    this.error = error;
  }
}, __publicField(_c, "factory", (error) => {
  return new _c(error);
}), _c);
function contract(contractObj) {
  const server = transform(contractObj["server"]);
  const client = transform(contractObj["client"]);
  return new Contract(contractObj.tags || [], server, client);
}
function transform(requestMap) {
  const result = {};
  for (const [key, req] of Object.entries(requestMap)) {
    const method = req.method ? req.method : key;
    result[key] = req.withMethod(method);
  }
  return result;
}
var Contract = class Contract2 {
  constructor(tags = [], server, client) {
    __publicField(this, "tags");
    __publicField(this, "server");
    __publicField(this, "client");
    this.tags = tags;
    this.server = server;
    this.client = client;
  }
  _onlyDesignTime() {
    return /* @__PURE__ */ new Error("This property is not meant to be accessed at runtime");
  }
  get TContractObject() {
    throw this._onlyDesignTime();
  }
  get TClientInterface() {
    throw this._onlyDesignTime();
  }
  get TServerInterface() {
    throw this._onlyDesignTime();
  }
  get TClientHandler() {
    throw this._onlyDesignTime();
  }
  get TServerHandler() {
    throw this._onlyDesignTime();
  }
  get TTags() {
    throw this._onlyDesignTime();
  }
  getInterface(typedChannel, myContract, otherContract, myInterface) {
    const counterpart = this.buildCounterpart(typedChannel, otherContract);
    const disposable = this.registerHandlers(typedChannel, myContract, myInterface, counterpart);
    return {
      counterpart,
      dispose: () => disposable.dispose()
    };
  }
  buildCounterpart(typedChannel, otherContract) {
    const counterpart = {};
    for (const [key, req] of Object.entries(otherContract)) {
      let method;
      if (req.kind === "request") if (req.isOptional) method = async (args, context) => {
        if (args === void 0) args = {};
        try {
          return await typedChannel.request(req, args, context);
        } catch (error) {
          if (error && error.code === ErrorCode.methodNotFound) return OptionalMethodNotFound;
          throw error;
        }
      };
      else method = (args, context) => {
        if (args === void 0) args = {};
        return typedChannel.request(req, args, context);
      };
      else method = (args, context) => {
        if (args === void 0) args = {};
        return typedChannel.notify(req, args, context);
      };
      counterpart[key] = method;
    }
    return counterpart;
  }
  registerHandlers(typedChannel, myContract, myInterface, counterpart) {
    const disposables = [];
    for (const [key, req] of Object.entries(myContract)) if (req.kind === "request") {
      let method = myInterface[key];
      if (!method) continue;
      const handler = this.createRequestHandler(counterpart, method);
      disposables.push(typedChannel.registerRequestHandler(req, handler));
    } else {
      const method = myInterface[key];
      if (method) disposables.push(typedChannel.registerNotificationHandler(req, (args, context) => {
        method(args, {
          context,
          counterpart
        });
      }));
    }
    return { dispose: () => disposables.forEach((d) => d.dispose()) };
  }
  createRequestHandler(counterpart, method) {
    return async (args, requestId, listenerContext) => {
      const result = await method(args, {
        context: listenerContext,
        counterpart,
        newErr: ErrorWrapper.factory,
        requestId
      });
      if (result instanceof ErrorWrapper) return result.error;
      return { ok: result };
    };
  }
  /**
  * Gets a server object directly from a stream by constructing a new `TypedChannel`.
  * It also registers the client implementation to the stream.
  * The channel starts listening immediately.
  */
  static getServerFromStream(contract$1, stream, options, clientImplementation) {
    const channel = TypedChannel.fromTransport(stream, options);
    const { server } = contract$1.getServer(channel, clientImplementation);
    channel.startListen();
    return {
      channel,
      server
    };
  }
  /**
  * Gets a client object directly from a stream by constructing a new `TypedChannel`.
  * It also registers the server implementation to the stream.
  * The channel starts listening immediately.
  */
  static registerServerToStream(contract$1, stream, options, serverImplementation) {
    const channel = TypedChannel.fromTransport(stream, options);
    const { client } = contract$1.registerServer(channel, serverImplementation);
    channel.startListen();
    return {
      channel,
      client
    };
  }
  getServer(typedChannel, clientImplementation) {
    const { counterpart, dispose } = this.getInterface(typedChannel, this.client, this.server, clientImplementation);
    return {
      server: counterpart,
      dispose
    };
  }
  registerServer(typedChannel, serverImplementation) {
    const { counterpart, dispose } = this.getInterface(typedChannel, this.server, this.client, serverImplementation);
    return {
      client: counterpart,
      dispose
    };
  }
  withContext() {
    return new Contract2(this.tags, this.server, this.client);
  }
};
let FoldingRangeKind = /* @__PURE__ */ (function(FoldingRangeKind$1) {
  FoldingRangeKind$1["Comment"] = "comment";
  FoldingRangeKind$1["Imports"] = "imports";
  FoldingRangeKind$1["Region"] = "region";
  return FoldingRangeKind$1;
})({});
let SymbolKind = /* @__PURE__ */ (function(SymbolKind$1) {
  SymbolKind$1[SymbolKind$1["File"] = 1] = "File";
  SymbolKind$1[SymbolKind$1["Module"] = 2] = "Module";
  SymbolKind$1[SymbolKind$1["Namespace"] = 3] = "Namespace";
  SymbolKind$1[SymbolKind$1["Package"] = 4] = "Package";
  SymbolKind$1[SymbolKind$1["Class"] = 5] = "Class";
  SymbolKind$1[SymbolKind$1["Method"] = 6] = "Method";
  SymbolKind$1[SymbolKind$1["Property"] = 7] = "Property";
  SymbolKind$1[SymbolKind$1["Field"] = 8] = "Field";
  SymbolKind$1[SymbolKind$1["Constructor"] = 9] = "Constructor";
  SymbolKind$1[SymbolKind$1["Enum"] = 10] = "Enum";
  SymbolKind$1[SymbolKind$1["Interface"] = 11] = "Interface";
  SymbolKind$1[SymbolKind$1["Function"] = 12] = "Function";
  SymbolKind$1[SymbolKind$1["Variable"] = 13] = "Variable";
  SymbolKind$1[SymbolKind$1["Constant"] = 14] = "Constant";
  SymbolKind$1[SymbolKind$1["String"] = 15] = "String";
  SymbolKind$1[SymbolKind$1["Number"] = 16] = "Number";
  SymbolKind$1[SymbolKind$1["Boolean"] = 17] = "Boolean";
  SymbolKind$1[SymbolKind$1["Array"] = 18] = "Array";
  SymbolKind$1[SymbolKind$1["Object"] = 19] = "Object";
  SymbolKind$1[SymbolKind$1["Key"] = 20] = "Key";
  SymbolKind$1[SymbolKind$1["Null"] = 21] = "Null";
  SymbolKind$1[SymbolKind$1["EnumMember"] = 22] = "EnumMember";
  SymbolKind$1[SymbolKind$1["Struct"] = 23] = "Struct";
  SymbolKind$1[SymbolKind$1["Event"] = 24] = "Event";
  SymbolKind$1[SymbolKind$1["Operator"] = 25] = "Operator";
  SymbolKind$1[SymbolKind$1["TypeParameter"] = 26] = "TypeParameter";
  return SymbolKind$1;
})({});
let SymbolTag = /* @__PURE__ */ (function(SymbolTag$1) {
  SymbolTag$1[SymbolTag$1["Deprecated"] = 1] = "Deprecated";
  return SymbolTag$1;
})({});
let InlayHintKind = /* @__PURE__ */ (function(InlayHintKind$1) {
  InlayHintKind$1[InlayHintKind$1["Type"] = 1] = "Type";
  InlayHintKind$1[InlayHintKind$1["Parameter"] = 2] = "Parameter";
  return InlayHintKind$1;
})({});
let TextDocumentSyncKind = /* @__PURE__ */ (function(TextDocumentSyncKind$1) {
  TextDocumentSyncKind$1[TextDocumentSyncKind$1["None"] = 0] = "None";
  TextDocumentSyncKind$1[TextDocumentSyncKind$1["Full"] = 1] = "Full";
  TextDocumentSyncKind$1[TextDocumentSyncKind$1["Incremental"] = 2] = "Incremental";
  return TextDocumentSyncKind$1;
})({});
let CompletionItemKind = /* @__PURE__ */ (function(CompletionItemKind$1) {
  CompletionItemKind$1[CompletionItemKind$1["Text"] = 1] = "Text";
  CompletionItemKind$1[CompletionItemKind$1["Method"] = 2] = "Method";
  CompletionItemKind$1[CompletionItemKind$1["Function"] = 3] = "Function";
  CompletionItemKind$1[CompletionItemKind$1["Constructor"] = 4] = "Constructor";
  CompletionItemKind$1[CompletionItemKind$1["Field"] = 5] = "Field";
  CompletionItemKind$1[CompletionItemKind$1["Variable"] = 6] = "Variable";
  CompletionItemKind$1[CompletionItemKind$1["Class"] = 7] = "Class";
  CompletionItemKind$1[CompletionItemKind$1["Interface"] = 8] = "Interface";
  CompletionItemKind$1[CompletionItemKind$1["Module"] = 9] = "Module";
  CompletionItemKind$1[CompletionItemKind$1["Property"] = 10] = "Property";
  CompletionItemKind$1[CompletionItemKind$1["Unit"] = 11] = "Unit";
  CompletionItemKind$1[CompletionItemKind$1["Value"] = 12] = "Value";
  CompletionItemKind$1[CompletionItemKind$1["Enum"] = 13] = "Enum";
  CompletionItemKind$1[CompletionItemKind$1["Keyword"] = 14] = "Keyword";
  CompletionItemKind$1[CompletionItemKind$1["Snippet"] = 15] = "Snippet";
  CompletionItemKind$1[CompletionItemKind$1["Color"] = 16] = "Color";
  CompletionItemKind$1[CompletionItemKind$1["File"] = 17] = "File";
  CompletionItemKind$1[CompletionItemKind$1["Reference"] = 18] = "Reference";
  CompletionItemKind$1[CompletionItemKind$1["Folder"] = 19] = "Folder";
  CompletionItemKind$1[CompletionItemKind$1["EnumMember"] = 20] = "EnumMember";
  CompletionItemKind$1[CompletionItemKind$1["Constant"] = 21] = "Constant";
  CompletionItemKind$1[CompletionItemKind$1["Struct"] = 22] = "Struct";
  CompletionItemKind$1[CompletionItemKind$1["Event"] = 23] = "Event";
  CompletionItemKind$1[CompletionItemKind$1["Operator"] = 24] = "Operator";
  CompletionItemKind$1[CompletionItemKind$1["TypeParameter"] = 25] = "TypeParameter";
  return CompletionItemKind$1;
})({});
let CompletionItemTag = /* @__PURE__ */ (function(CompletionItemTag$1) {
  CompletionItemTag$1[CompletionItemTag$1["Deprecated"] = 1] = "Deprecated";
  return CompletionItemTag$1;
})({});
let InsertTextFormat = /* @__PURE__ */ (function(InsertTextFormat$1) {
  InsertTextFormat$1[InsertTextFormat$1["PlainText"] = 1] = "PlainText";
  InsertTextFormat$1[InsertTextFormat$1["Snippet"] = 2] = "Snippet";
  return InsertTextFormat$1;
})({});
let DocumentHighlightKind = /* @__PURE__ */ (function(DocumentHighlightKind$1) {
  DocumentHighlightKind$1[DocumentHighlightKind$1["Text"] = 1] = "Text";
  DocumentHighlightKind$1[DocumentHighlightKind$1["Read"] = 2] = "Read";
  DocumentHighlightKind$1[DocumentHighlightKind$1["Write"] = 3] = "Write";
  return DocumentHighlightKind$1;
})({});
let CodeActionKind = /* @__PURE__ */ (function(CodeActionKind$1) {
  CodeActionKind$1["Empty"] = "";
  CodeActionKind$1["QuickFix"] = "quickfix";
  CodeActionKind$1["Refactor"] = "refactor";
  CodeActionKind$1["RefactorExtract"] = "refactor.extract";
  CodeActionKind$1["RefactorInline"] = "refactor.inline";
  CodeActionKind$1["RefactorRewrite"] = "refactor.rewrite";
  CodeActionKind$1["Source"] = "source";
  CodeActionKind$1["SourceOrganizeImports"] = "source.organizeImports";
  CodeActionKind$1["SourceFixAll"] = "source.fixAll";
  return CodeActionKind$1;
})({});
let MarkupKind = /* @__PURE__ */ (function(MarkupKind$1) {
  MarkupKind$1["PlainText"] = "plaintext";
  MarkupKind$1["Markdown"] = "markdown";
  return MarkupKind$1;
})({});
let DiagnosticSeverity = /* @__PURE__ */ (function(DiagnosticSeverity$1) {
  DiagnosticSeverity$1[DiagnosticSeverity$1["Error"] = 1] = "Error";
  DiagnosticSeverity$1[DiagnosticSeverity$1["Warning"] = 2] = "Warning";
  DiagnosticSeverity$1[DiagnosticSeverity$1["Information"] = 3] = "Information";
  DiagnosticSeverity$1[DiagnosticSeverity$1["Hint"] = 4] = "Hint";
  return DiagnosticSeverity$1;
})({});
let DiagnosticTag = /* @__PURE__ */ (function(DiagnosticTag$1) {
  DiagnosticTag$1[DiagnosticTag$1["Unnecessary"] = 1] = "Unnecessary";
  DiagnosticTag$1[DiagnosticTag$1["Deprecated"] = 2] = "Deprecated";
  return DiagnosticTag$1;
})({});
let CompletionTriggerKind = /* @__PURE__ */ (function(CompletionTriggerKind$1) {
  CompletionTriggerKind$1[CompletionTriggerKind$1["Invoked"] = 1] = "Invoked";
  CompletionTriggerKind$1[CompletionTriggerKind$1["TriggerCharacter"] = 2] = "TriggerCharacter";
  CompletionTriggerKind$1[CompletionTriggerKind$1["TriggerForIncompleteCompletions"] = 3] = "TriggerForIncompleteCompletions";
  return CompletionTriggerKind$1;
})({});
let SignatureHelpTriggerKind = /* @__PURE__ */ (function(SignatureHelpTriggerKind$1) {
  SignatureHelpTriggerKind$1[SignatureHelpTriggerKind$1["Invoked"] = 1] = "Invoked";
  SignatureHelpTriggerKind$1[SignatureHelpTriggerKind$1["TriggerCharacter"] = 2] = "TriggerCharacter";
  SignatureHelpTriggerKind$1[SignatureHelpTriggerKind$1["ContentChange"] = 3] = "ContentChange";
  return SignatureHelpTriggerKind$1;
})({});
let CodeActionTriggerKind = /* @__PURE__ */ (function(CodeActionTriggerKind$1) {
  CodeActionTriggerKind$1[CodeActionTriggerKind$1["Invoked"] = 1] = "Invoked";
  CodeActionTriggerKind$1[CodeActionTriggerKind$1["Automatic"] = 2] = "Automatic";
  return CodeActionTriggerKind$1;
})({});
let TokenFormat = /* @__PURE__ */ (function(TokenFormat$1) {
  TokenFormat$1["Relative"] = "relative";
  return TokenFormat$1;
})({});
var Capability = class {
  constructor(method) {
    this.method = method;
  }
};
const capabilities = {
  textDocumentImplementation: new Capability("textDocument/implementation"),
  textDocumentTypeDefinition: new Capability("textDocument/typeDefinition"),
  textDocumentDocumentColor: new Capability("textDocument/documentColor"),
  textDocumentColorPresentation: new Capability("textDocument/colorPresentation"),
  textDocumentFoldingRange: new Capability("textDocument/foldingRange"),
  textDocumentDeclaration: new Capability("textDocument/declaration"),
  textDocumentSelectionRange: new Capability("textDocument/selectionRange"),
  textDocumentPrepareCallHierarchy: new Capability("textDocument/prepareCallHierarchy"),
  textDocumentSemanticTokensFull: new Capability("textDocument/semanticTokens/full"),
  textDocumentSemanticTokensFullDelta: new Capability("textDocument/semanticTokens/full/delta"),
  textDocumentLinkedEditingRange: new Capability("textDocument/linkedEditingRange"),
  workspaceWillCreateFiles: new Capability("workspace/willCreateFiles"),
  workspaceWillRenameFiles: new Capability("workspace/willRenameFiles"),
  workspaceWillDeleteFiles: new Capability("workspace/willDeleteFiles"),
  textDocumentMoniker: new Capability("textDocument/moniker"),
  textDocumentPrepareTypeHierarchy: new Capability("textDocument/prepareTypeHierarchy"),
  textDocumentInlineValue: new Capability("textDocument/inlineValue"),
  textDocumentInlayHint: new Capability("textDocument/inlayHint"),
  textDocumentDiagnostic: new Capability("textDocument/diagnostic"),
  textDocumentInlineCompletion: new Capability("textDocument/inlineCompletion"),
  textDocumentWillSaveWaitUntil: new Capability("textDocument/willSaveWaitUntil"),
  textDocumentCompletion: new Capability("textDocument/completion"),
  textDocumentHover: new Capability("textDocument/hover"),
  textDocumentSignatureHelp: new Capability("textDocument/signatureHelp"),
  textDocumentDefinition: new Capability("textDocument/definition"),
  textDocumentReferences: new Capability("textDocument/references"),
  textDocumentDocumentHighlight: new Capability("textDocument/documentHighlight"),
  textDocumentDocumentSymbol: new Capability("textDocument/documentSymbol"),
  textDocumentCodeAction: new Capability("textDocument/codeAction"),
  workspaceSymbol: new Capability("workspace/symbol"),
  textDocumentCodeLens: new Capability("textDocument/codeLens"),
  textDocumentDocumentLink: new Capability("textDocument/documentLink"),
  textDocumentFormatting: new Capability("textDocument/formatting"),
  textDocumentRangeFormatting: new Capability("textDocument/rangeFormatting"),
  textDocumentRangesFormatting: new Capability("textDocument/rangesFormatting"),
  textDocumentOnTypeFormatting: new Capability("textDocument/onTypeFormatting"),
  textDocumentRename: new Capability("textDocument/rename"),
  workspaceExecuteCommand: new Capability("workspace/executeCommand"),
  workspaceDidCreateFiles: new Capability("workspace/didCreateFiles"),
  workspaceDidRenameFiles: new Capability("workspace/didRenameFiles"),
  workspaceDidDeleteFiles: new Capability("workspace/didDeleteFiles"),
  workspaceDidChangeConfiguration: new Capability("workspace/didChangeConfiguration"),
  textDocumentDidOpen: new Capability("textDocument/didOpen"),
  textDocumentDidChange: new Capability("textDocument/didChange"),
  textDocumentDidClose: new Capability("textDocument/didClose"),
  textDocumentDidSave: new Capability("textDocument/didSave"),
  textDocumentWillSave: new Capability("textDocument/willSave"),
  workspaceDidChangeWatchedFiles: new Capability("workspace/didChangeWatchedFiles")
};
const api = contract({
  server: {
    textDocumentImplementation: unverifiedRequest({ method: "textDocument/implementation" }),
    textDocumentTypeDefinition: unverifiedRequest({ method: "textDocument/typeDefinition" }),
    textDocumentDocumentColor: unverifiedRequest({ method: "textDocument/documentColor" }),
    textDocumentColorPresentation: unverifiedRequest({ method: "textDocument/colorPresentation" }),
    textDocumentFoldingRange: unverifiedRequest({ method: "textDocument/foldingRange" }),
    textDocumentDeclaration: unverifiedRequest({ method: "textDocument/declaration" }),
    textDocumentSelectionRange: unverifiedRequest({ method: "textDocument/selectionRange" }),
    textDocumentPrepareCallHierarchy: unverifiedRequest({ method: "textDocument/prepareCallHierarchy" }),
    callHierarchyIncomingCalls: unverifiedRequest({ method: "callHierarchy/incomingCalls" }),
    callHierarchyOutgoingCalls: unverifiedRequest({ method: "callHierarchy/outgoingCalls" }),
    textDocumentSemanticTokensFull: unverifiedRequest({ method: "textDocument/semanticTokens/full" }),
    textDocumentSemanticTokensFullDelta: unverifiedRequest({ method: "textDocument/semanticTokens/full/delta" }),
    textDocumentSemanticTokensRange: unverifiedRequest({ method: "textDocument/semanticTokens/range" }),
    textDocumentLinkedEditingRange: unverifiedRequest({ method: "textDocument/linkedEditingRange" }),
    workspaceWillCreateFiles: unverifiedRequest({ method: "workspace/willCreateFiles" }),
    workspaceWillRenameFiles: unverifiedRequest({ method: "workspace/willRenameFiles" }),
    workspaceWillDeleteFiles: unverifiedRequest({ method: "workspace/willDeleteFiles" }),
    textDocumentMoniker: unverifiedRequest({ method: "textDocument/moniker" }),
    textDocumentPrepareTypeHierarchy: unverifiedRequest({ method: "textDocument/prepareTypeHierarchy" }),
    typeHierarchySupertypes: unverifiedRequest({ method: "typeHierarchy/supertypes" }),
    typeHierarchySubtypes: unverifiedRequest({ method: "typeHierarchy/subtypes" }),
    textDocumentInlineValue: unverifiedRequest({ method: "textDocument/inlineValue" }),
    textDocumentInlayHint: unverifiedRequest({ method: "textDocument/inlayHint" }),
    inlayHintResolve: unverifiedRequest({ method: "inlayHint/resolve" }),
    textDocumentDiagnostic: unverifiedRequest({ method: "textDocument/diagnostic" }),
    workspaceDiagnostic: unverifiedRequest({ method: "workspace/diagnostic" }),
    textDocumentInlineCompletion: unverifiedRequest({ method: "textDocument/inlineCompletion" }),
    initialize: unverifiedRequest({ method: "initialize" }),
    shutdown: unverifiedRequest({ method: "shutdown" }),
    textDocumentWillSaveWaitUntil: unverifiedRequest({ method: "textDocument/willSaveWaitUntil" }),
    textDocumentCompletion: unverifiedRequest({ method: "textDocument/completion" }),
    completionItemResolve: unverifiedRequest({ method: "completionItem/resolve" }),
    textDocumentHover: unverifiedRequest({ method: "textDocument/hover" }),
    textDocumentSignatureHelp: unverifiedRequest({ method: "textDocument/signatureHelp" }),
    textDocumentDefinition: unverifiedRequest({ method: "textDocument/definition" }),
    textDocumentReferences: unverifiedRequest({ method: "textDocument/references" }),
    textDocumentDocumentHighlight: unverifiedRequest({ method: "textDocument/documentHighlight" }),
    textDocumentDocumentSymbol: unverifiedRequest({ method: "textDocument/documentSymbol" }),
    textDocumentCodeAction: unverifiedRequest({ method: "textDocument/codeAction" }),
    codeActionResolve: unverifiedRequest({ method: "codeAction/resolve" }),
    workspaceSymbol: unverifiedRequest({ method: "workspace/symbol" }),
    workspaceSymbolResolve: unverifiedRequest({ method: "workspaceSymbol/resolve" }),
    textDocumentCodeLens: unverifiedRequest({ method: "textDocument/codeLens" }),
    codeLensResolve: unverifiedRequest({ method: "codeLens/resolve" }),
    textDocumentDocumentLink: unverifiedRequest({ method: "textDocument/documentLink" }),
    documentLinkResolve: unverifiedRequest({ method: "documentLink/resolve" }),
    textDocumentFormatting: unverifiedRequest({ method: "textDocument/formatting" }),
    textDocumentRangeFormatting: unverifiedRequest({ method: "textDocument/rangeFormatting" }),
    textDocumentRangesFormatting: unverifiedRequest({ method: "textDocument/rangesFormatting" }),
    textDocumentOnTypeFormatting: unverifiedRequest({ method: "textDocument/onTypeFormatting" }),
    textDocumentRename: unverifiedRequest({ method: "textDocument/rename" }),
    textDocumentPrepareRename: unverifiedRequest({ method: "textDocument/prepareRename" }),
    workspaceExecuteCommand: unverifiedRequest({ method: "workspace/executeCommand" }),
    workspaceDidChangeWorkspaceFolders: unverifiedNotification({ method: "workspace/didChangeWorkspaceFolders" }),
    windowWorkDoneProgressCancel: unverifiedNotification({ method: "window/workDoneProgress/cancel" }),
    workspaceDidCreateFiles: unverifiedNotification({ method: "workspace/didCreateFiles" }),
    workspaceDidRenameFiles: unverifiedNotification({ method: "workspace/didRenameFiles" }),
    workspaceDidDeleteFiles: unverifiedNotification({ method: "workspace/didDeleteFiles" }),
    notebookDocumentDidOpen: unverifiedNotification({ method: "notebookDocument/didOpen" }),
    notebookDocumentDidChange: unverifiedNotification({ method: "notebookDocument/didChange" }),
    notebookDocumentDidSave: unverifiedNotification({ method: "notebookDocument/didSave" }),
    notebookDocumentDidClose: unverifiedNotification({ method: "notebookDocument/didClose" }),
    initialized: unverifiedNotification({ method: "initialized" }),
    exit: unverifiedNotification({ method: "exit" }),
    workspaceDidChangeConfiguration: unverifiedNotification({ method: "workspace/didChangeConfiguration" }),
    textDocumentDidOpen: unverifiedNotification({ method: "textDocument/didOpen" }),
    textDocumentDidChange: unverifiedNotification({ method: "textDocument/didChange" }),
    textDocumentDidClose: unverifiedNotification({ method: "textDocument/didClose" }),
    textDocumentDidSave: unverifiedNotification({ method: "textDocument/didSave" }),
    textDocumentWillSave: unverifiedNotification({ method: "textDocument/willSave" }),
    workspaceDidChangeWatchedFiles: unverifiedNotification({ method: "workspace/didChangeWatchedFiles" }),
    setTrace: unverifiedNotification({ method: "$/setTrace" }),
    cancelRequest: unverifiedNotification({ method: "$/cancelRequest" }),
    progress: unverifiedNotification({ method: "$/progress" })
  },
  client: {
    workspaceWorkspaceFolders: unverifiedRequest({ method: "workspace/workspaceFolders" }).optional(),
    workspaceConfiguration: unverifiedRequest({ method: "workspace/configuration" }).optional(),
    workspaceFoldingRangeRefresh: unverifiedRequest({ method: "workspace/foldingRange/refresh" }).optional(),
    windowWorkDoneProgressCreate: unverifiedRequest({ method: "window/workDoneProgress/create" }).optional(),
    workspaceSemanticTokensRefresh: unverifiedRequest({ method: "workspace/semanticTokens/refresh" }).optional(),
    windowShowDocument: unverifiedRequest({ method: "window/showDocument" }).optional(),
    workspaceInlineValueRefresh: unverifiedRequest({ method: "workspace/inlineValue/refresh" }).optional(),
    workspaceInlayHintRefresh: unverifiedRequest({ method: "workspace/inlayHint/refresh" }).optional(),
    workspaceDiagnosticRefresh: unverifiedRequest({ method: "workspace/diagnostic/refresh" }).optional(),
    clientRegisterCapability: unverifiedRequest({ method: "client/registerCapability" }).optional(),
    clientUnregisterCapability: unverifiedRequest({ method: "client/unregisterCapability" }).optional(),
    windowShowMessageRequest: unverifiedRequest({ method: "window/showMessageRequest" }).optional(),
    workspaceCodeLensRefresh: unverifiedRequest({ method: "workspace/codeLens/refresh" }).optional(),
    workspaceApplyEdit: unverifiedRequest({ method: "workspace/applyEdit" }).optional(),
    windowShowMessage: unverifiedNotification({ method: "window/showMessage" }),
    windowLogMessage: unverifiedNotification({ method: "window/logMessage" }),
    telemetryEvent: unverifiedNotification({ method: "telemetry/event" }),
    textDocumentPublishDiagnostics: unverifiedNotification({ method: "textDocument/publishDiagnostics" }),
    logTrace: unverifiedNotification({ method: "$/logTrace" }),
    cancelRequest: unverifiedNotification({ method: "$/cancelRequest" }),
    progress: unverifiedNotification({ method: "$/progress" })
  }
});
function assertTargetTextModel(input, expectedTextModel) {
  if (input.textModel !== expectedTextModel) throw new Error(`Expected text model to be ${expectedTextModel}, but got ${input.textModel}`);
  return input;
}
var Disposable = (_d = class {
  constructor() {
    __publicField(this, "_store", new DisposableStore());
  }
  dispose() {
    this._store.dispose();
  }
  _register(t) {
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    return this._store.add(t);
  }
}, __publicField(_d, "None", Object.freeze({ dispose() {
} })), _d);
var DisposableStore = (_e = class {
  constructor() {
    __publicField(this, "_toDispose", /* @__PURE__ */ new Set());
    __publicField(this, "_isDisposed", false);
  }
  dispose() {
    if (this._isDisposed) return;
    this._isDisposed = true;
    this.clear();
  }
  clear() {
    if (this._toDispose.size === 0) return;
    try {
      for (const item of this._toDispose) item.dispose();
    } finally {
      this._toDispose.clear();
    }
  }
  add(t) {
    if (!t) return t;
    if (t === this) throw new Error("Cannot register a disposable on itself!");
    if (this._isDisposed) {
      if (!_e.DISABLE_DISPOSED_WARNING) console.warn((/* @__PURE__ */ new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!")).stack);
    } else this._toDispose.add(t);
    return t;
  }
}, __publicField(_e, "DISABLE_DISPOSED_WARNING", false), _e);
const lspCodeActionKindToMonacoCodeActionKind = /* @__PURE__ */ new Map([
  [CodeActionKind.Empty, ""],
  [CodeActionKind.QuickFix, "quickfix"],
  [CodeActionKind.Refactor, "refactor"],
  [CodeActionKind.RefactorExtract, "refactor.extract"],
  [CodeActionKind.RefactorInline, "refactor.inline"],
  [CodeActionKind.RefactorRewrite, "refactor.rewrite"],
  [CodeActionKind.Source, "source"],
  [CodeActionKind.SourceOrganizeImports, "source.organizeImports"],
  [CodeActionKind.SourceFixAll, "source.fixAll"]
]);
function toMonacoCodeActionKind(kind) {
  if (!kind) return;
  return lspCodeActionKindToMonacoCodeActionKind.get(kind) ?? kind;
}
const monacoCodeActionTriggerTypeToLspCodeActionTriggerKind = /* @__PURE__ */ new Map([[languages.CodeActionTriggerType.Invoke, CodeActionTriggerKind.Invoked], [languages.CodeActionTriggerType.Auto, CodeActionTriggerKind.Automatic]]);
function toLspCodeActionTriggerKind(monacoTrigger) {
  return monacoCodeActionTriggerTypeToLspCodeActionTriggerKind.get(monacoTrigger) ?? CodeActionTriggerKind.Invoked;
}
const lspCompletionItemKindToMonacoCompletionItemKind = /* @__PURE__ */ new Map([
  [CompletionItemKind.Text, languages.CompletionItemKind.Text],
  [CompletionItemKind.Method, languages.CompletionItemKind.Method],
  [CompletionItemKind.Function, languages.CompletionItemKind.Function],
  [CompletionItemKind.Constructor, languages.CompletionItemKind.Constructor],
  [CompletionItemKind.Field, languages.CompletionItemKind.Field],
  [CompletionItemKind.Variable, languages.CompletionItemKind.Variable],
  [CompletionItemKind.Class, languages.CompletionItemKind.Class],
  [CompletionItemKind.Interface, languages.CompletionItemKind.Interface],
  [CompletionItemKind.Module, languages.CompletionItemKind.Module],
  [CompletionItemKind.Property, languages.CompletionItemKind.Property],
  [CompletionItemKind.Unit, languages.CompletionItemKind.Unit],
  [CompletionItemKind.Value, languages.CompletionItemKind.Value],
  [CompletionItemKind.Enum, languages.CompletionItemKind.Enum],
  [CompletionItemKind.Keyword, languages.CompletionItemKind.Keyword],
  [CompletionItemKind.Snippet, languages.CompletionItemKind.Snippet],
  [CompletionItemKind.Color, languages.CompletionItemKind.Color],
  [CompletionItemKind.File, languages.CompletionItemKind.File],
  [CompletionItemKind.Reference, languages.CompletionItemKind.Reference],
  [CompletionItemKind.Folder, languages.CompletionItemKind.Folder],
  [CompletionItemKind.EnumMember, languages.CompletionItemKind.EnumMember],
  [CompletionItemKind.Constant, languages.CompletionItemKind.Constant],
  [CompletionItemKind.Struct, languages.CompletionItemKind.Struct],
  [CompletionItemKind.Event, languages.CompletionItemKind.Event],
  [CompletionItemKind.Operator, languages.CompletionItemKind.Operator],
  [CompletionItemKind.TypeParameter, languages.CompletionItemKind.TypeParameter]
]);
function toMonacoCompletionItemKind(kind) {
  if (!kind) return languages.CompletionItemKind.Text;
  return lspCompletionItemKindToMonacoCompletionItemKind.get(kind) ?? languages.CompletionItemKind.Text;
}
const lspCompletionItemTagToMonacoCompletionItemTag = /* @__PURE__ */ new Map([[CompletionItemTag.Deprecated, languages.CompletionItemTag.Deprecated]]);
function toMonacoCompletionItemTag(tag) {
  return lspCompletionItemTagToMonacoCompletionItemTag.get(tag);
}
const monacoCompletionTriggerKindToLspCompletionTriggerKind = /* @__PURE__ */ new Map([
  [languages.CompletionTriggerKind.Invoke, CompletionTriggerKind.Invoked],
  [languages.CompletionTriggerKind.TriggerCharacter, CompletionTriggerKind.TriggerCharacter],
  [languages.CompletionTriggerKind.TriggerForIncompleteCompletions, CompletionTriggerKind.TriggerForIncompleteCompletions]
]);
function toLspCompletionTriggerKind(monacoKind) {
  return monacoCompletionTriggerKindToLspCompletionTriggerKind.get(monacoKind) ?? CompletionTriggerKind.Invoked;
}
const lspInsertTextFormatToMonacoInsertTextRules = /* @__PURE__ */ new Map([[InsertTextFormat.Snippet, languages.CompletionItemInsertTextRule.InsertAsSnippet]]);
function toMonacoInsertTextRules(format) {
  if (!format) return;
  return lspInsertTextFormatToMonacoInsertTextRules.get(format);
}
const lspSymbolKindToMonacoSymbolKind = /* @__PURE__ */ new Map([
  [SymbolKind.File, languages.SymbolKind.File],
  [SymbolKind.Module, languages.SymbolKind.Module],
  [SymbolKind.Namespace, languages.SymbolKind.Namespace],
  [SymbolKind.Package, languages.SymbolKind.Package],
  [SymbolKind.Class, languages.SymbolKind.Class],
  [SymbolKind.Method, languages.SymbolKind.Method],
  [SymbolKind.Property, languages.SymbolKind.Property],
  [SymbolKind.Field, languages.SymbolKind.Field],
  [SymbolKind.Constructor, languages.SymbolKind.Constructor],
  [SymbolKind.Enum, languages.SymbolKind.Enum],
  [SymbolKind.Interface, languages.SymbolKind.Interface],
  [SymbolKind.Function, languages.SymbolKind.Function],
  [SymbolKind.Variable, languages.SymbolKind.Variable],
  [SymbolKind.Constant, languages.SymbolKind.Constant],
  [SymbolKind.String, languages.SymbolKind.String],
  [SymbolKind.Number, languages.SymbolKind.Number],
  [SymbolKind.Boolean, languages.SymbolKind.Boolean],
  [SymbolKind.Array, languages.SymbolKind.Array],
  [SymbolKind.Object, languages.SymbolKind.Object],
  [SymbolKind.Key, languages.SymbolKind.Key],
  [SymbolKind.Null, languages.SymbolKind.Null],
  [SymbolKind.EnumMember, languages.SymbolKind.EnumMember],
  [SymbolKind.Struct, languages.SymbolKind.Struct],
  [SymbolKind.Event, languages.SymbolKind.Event],
  [SymbolKind.Operator, languages.SymbolKind.Operator],
  [SymbolKind.TypeParameter, languages.SymbolKind.TypeParameter]
]);
function toMonacoSymbolKind(kind) {
  return lspSymbolKindToMonacoSymbolKind.get(kind) ?? languages.SymbolKind.File;
}
const lspSymbolTagToMonacoSymbolTag = /* @__PURE__ */ new Map([[SymbolTag.Deprecated, languages.SymbolTag.Deprecated]]);
function toMonacoSymbolTag(tag) {
  return lspSymbolTagToMonacoSymbolTag.get(tag);
}
const lspDocumentHighlightKindToMonacoDocumentHighlightKind = /* @__PURE__ */ new Map([
  [DocumentHighlightKind.Text, languages.DocumentHighlightKind.Text],
  [DocumentHighlightKind.Read, languages.DocumentHighlightKind.Read],
  [DocumentHighlightKind.Write, languages.DocumentHighlightKind.Write]
]);
function toMonacoDocumentHighlightKind(kind) {
  if (!kind) return languages.DocumentHighlightKind.Text;
  return lspDocumentHighlightKindToMonacoDocumentHighlightKind.get(kind) ?? languages.DocumentHighlightKind.Text;
}
const lspFoldingRangeKindToMonacoFoldingRangeKind = /* @__PURE__ */ new Map([
  [FoldingRangeKind.Comment, languages.FoldingRangeKind.Comment],
  [FoldingRangeKind.Imports, languages.FoldingRangeKind.Imports],
  [FoldingRangeKind.Region, languages.FoldingRangeKind.Region]
]);
function toMonacoFoldingRangeKind(kind) {
  if (!kind) return;
  return lspFoldingRangeKindToMonacoFoldingRangeKind.get(kind);
}
const monacoMarkerSeverityToLspDiagnosticSeverity = /* @__PURE__ */ new Map([
  [MarkerSeverity.Error, DiagnosticSeverity.Error],
  [MarkerSeverity.Warning, DiagnosticSeverity.Warning],
  [MarkerSeverity.Info, DiagnosticSeverity.Information],
  [MarkerSeverity.Hint, DiagnosticSeverity.Hint]
]);
function toLspDiagnosticSeverity(severity) {
  return monacoMarkerSeverityToLspDiagnosticSeverity.get(severity) ?? DiagnosticSeverity.Error;
}
const lspDiagnosticSeverityToMonacoMarkerSeverity = /* @__PURE__ */ new Map([
  [DiagnosticSeverity.Error, MarkerSeverity.Error],
  [DiagnosticSeverity.Warning, MarkerSeverity.Warning],
  [DiagnosticSeverity.Information, MarkerSeverity.Info],
  [DiagnosticSeverity.Hint, MarkerSeverity.Hint]
]);
function toMonacoDiagnosticSeverity(severity) {
  if (!severity) return MarkerSeverity.Error;
  return lspDiagnosticSeverityToMonacoMarkerSeverity.get(severity) ?? MarkerSeverity.Error;
}
const lspDiagnosticTagToMonacoMarkerTag = /* @__PURE__ */ new Map([[DiagnosticTag.Unnecessary, MarkerTag.Unnecessary], [DiagnosticTag.Deprecated, MarkerTag.Deprecated]]);
function toMonacoDiagnosticTag(tag) {
  return lspDiagnosticTagToMonacoMarkerTag.get(tag);
}
const monacoSignatureHelpTriggerKindToLspSignatureHelpTriggerKind = /* @__PURE__ */ new Map([
  [languages.SignatureHelpTriggerKind.Invoke, SignatureHelpTriggerKind.Invoked],
  [languages.SignatureHelpTriggerKind.TriggerCharacter, SignatureHelpTriggerKind.TriggerCharacter],
  [languages.SignatureHelpTriggerKind.ContentChange, SignatureHelpTriggerKind.ContentChange]
]);
function toLspSignatureHelpTriggerKind(monacoKind) {
  return monacoSignatureHelpTriggerKindToLspSignatureHelpTriggerKind.get(monacoKind) ?? SignatureHelpTriggerKind.Invoked;
}
function toMonacoCommand(command) {
  if (!command) return;
  return {
    id: command.command,
    title: command.title,
    arguments: command.arguments
  };
}
const lspInlayHintKindToMonacoInlayHintKind = /* @__PURE__ */ new Map([[InlayHintKind.Type, languages.InlayHintKind.Type], [InlayHintKind.Parameter, languages.InlayHintKind.Parameter]]);
function toMonacoInlayHintKind(kind) {
  if (!kind) return languages.InlayHintKind.Type;
  return lspInlayHintKindToMonacoInlayHintKind.get(kind) ?? languages.InlayHintKind.Type;
}
function toMonacoLocation(location, client) {
  if ("targetUri" in location) {
    const translatedRange = client.bridge.translateBackRange({ uri: location.targetUri }, location.targetRange);
    return {
      uri: translatedRange.textModel.uri,
      range: translatedRange.range,
      originSelectionRange: location.originSelectionRange ? client.bridge.translateBackRange({ uri: location.targetUri }, location.originSelectionRange).range : void 0,
      targetSelectionRange: location.targetSelectionRange ? client.bridge.translateBackRange({ uri: location.targetUri }, location.targetSelectionRange).range : void 0
    };
  } else {
    const translatedRange = client.bridge.translateBackRange({ uri: location.uri }, location.range);
    return {
      uri: translatedRange.textModel.uri,
      range: translatedRange.range
    };
  }
}
function toMonacoLanguageSelector(s) {
  if (!s || s.length === 0) return { language: "*" };
  return s.map((s$1) => {
    if ("notebook" in s$1) if (typeof s$1.notebook === "string") return {
      notebookType: s$1.notebook,
      language: s$1.language
    };
    else return {
      notebookType: s$1.notebook.notebookType,
      language: s$1.language,
      pattern: s$1.notebook.pattern,
      scheme: s$1.notebook.scheme
    };
    else return {
      language: s$1.language,
      pattern: s$1.pattern,
      scheme: s$1.scheme
    };
  });
}
function matchesDocumentSelector(model, selector) {
  if (!selector) return true;
  const languageId = model.getLanguageId();
  model.uri.toString(true);
  if (!selector || selector.length === 0) return true;
  for (const filter of selector) {
    if (filter.language && filter.language !== "*" && filter.language !== languageId) continue;
    return true;
  }
  return false;
}
function toDiagnosticMarker(diagnostic) {
  const marker = {
    severity: toMonacoDiagnosticSeverity(diagnostic.severity),
    startLineNumber: diagnostic.range.start.line + 1,
    startColumn: diagnostic.range.start.character + 1,
    endLineNumber: diagnostic.range.end.line + 1,
    endColumn: diagnostic.range.end.character + 1,
    message: diagnostic.message,
    source: diagnostic.source,
    code: typeof diagnostic.code === "string" ? diagnostic.code : diagnostic.code?.toString()
  };
  if (diagnostic.tags) marker.tags = diagnostic.tags.map((tag) => toMonacoDiagnosticTag(tag)).filter((tag) => tag !== void 0);
  if (diagnostic.relatedInformation) marker.relatedInformation = diagnostic.relatedInformation.map((info) => ({
    resource: Uri.parse(info.location.uri),
    startLineNumber: info.location.range.start.line + 1,
    startColumn: info.location.range.start.character + 1,
    endLineNumber: info.location.range.end.line + 1,
    endColumn: info.location.range.end.character + 1,
    message: info.message
  }));
  return marker;
}
var LspCompletionFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { completion: {
      dynamicRegistration: true,
      contextSupport: true,
      completionItemKind: { valueSet: Array.from(lspCompletionItemKindToMonacoCompletionItemKind.keys()) },
      completionItem: {
        tagSupport: { valueSet: Array.from(lspCompletionItemTagToMonacoCompletionItemTag.keys()) },
        commitCharactersSupport: true,
        deprecatedSupport: true,
        preselectSupport: true
      }
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentCompletion, true, (capability) => {
      return languages.registerCompletionItemProvider(toMonacoLanguageSelector(capability.documentSelector), new LspCompletionProvider(this._connection, capability));
    }));
  }
};
var LspCompletionProvider = class {
  constructor(_client, _capabilities) {
    __publicField(this, "resolveCompletionItem");
    this._client = _client;
    this._capabilities = _capabilities;
    if (_capabilities.resolveProvider) this.resolveCompletionItem = async (item, token) => {
      applyLspCompletionItemProperties(item, await this._client.server.completionItemResolve(item._lspItem), this._client.bridge, item._translated, item._model);
      return item;
    };
  }
  get triggerCharacters() {
    return this._capabilities.triggerCharacters;
  }
  async provideCompletionItems(model, position, context, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentCompletion({
      textDocument: translated.textDocument,
      position: translated.position,
      context: context.triggerCharacter ? {
        triggerKind: toLspCompletionTriggerKind(context.triggerKind),
        triggerCharacter: context.triggerCharacter
      } : void 0
    });
    if (!result) return { suggestions: [] };
    return { suggestions: (Array.isArray(result) ? result : result.items).map((i) => {
      return {
        ...convertLspToMonacoCompletionItem(i, this._client.bridge, translated, model, position),
        _lspItem: i,
        _translated: translated,
        _model: model
      };
    }) };
  }
};
function convertLspToMonacoCompletionItem(lspItem, bridge, translated, model, position) {
  let insertText = lspItem.insertText || lspItem.label;
  let range = void 0;
  if (lspItem.textEdit) if ("range" in lspItem.textEdit) {
    insertText = lspItem.textEdit.newText;
    range = assertTargetTextModel(bridge.translateBackRange(translated.textDocument, lspItem.textEdit.range), model).range;
  } else {
    insertText = lspItem.textEdit.newText;
    range = {
      insert: assertTargetTextModel(bridge.translateBackRange(translated.textDocument, lspItem.textEdit.insert), model).range,
      replace: assertTargetTextModel(bridge.translateBackRange(translated.textDocument, lspItem.textEdit.replace), model).range
    };
  }
  if (!range) range = Range.fromPositions(position, position);
  const item = {
    label: lspItem.label,
    kind: toMonacoCompletionItemKind(lspItem.kind),
    insertText,
    sortText: lspItem.sortText,
    filterText: lspItem.filterText,
    preselect: lspItem.preselect,
    commitCharacters: lspItem.commitCharacters,
    range
  };
  applyLspCompletionItemProperties(item, lspItem, bridge, translated, model);
  return item;
}
function applyLspCompletionItemProperties(monacoItem, lspItem, bridge, translated, targetModel) {
  if (lspItem.detail !== void 0) monacoItem.detail = lspItem.detail;
  if (lspItem.documentation !== void 0) monacoItem.documentation = toMonacoDocumentation$1(lspItem.documentation);
  if (lspItem.insertTextFormat !== void 0) monacoItem.insertTextRules = toMonacoInsertTextRules(lspItem.insertTextFormat);
  if (lspItem.tags && lspItem.tags.length > 0) monacoItem.tags = lspItem.tags.map(toMonacoCompletionItemTag).filter((tag) => tag !== void 0);
  if (lspItem.additionalTextEdits && lspItem.additionalTextEdits.length > 0) monacoItem.additionalTextEdits = lspItem.additionalTextEdits.map((edit) => ({
    range: assertTargetTextModel(bridge.translateBackRange(translated.textDocument, edit.range), targetModel).range,
    text: edit.newText
  }));
  if (lspItem.command) monacoItem.command = toMonacoCommand(lspItem.command);
}
function toMonacoDocumentation$1(doc) {
  if (!doc) return void 0;
  if (typeof doc === "string") return doc;
  return {
    value: doc.value,
    isTrusted: true
  };
}
var LspHoverFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { hover: {
      dynamicRegistration: true,
      contentFormat: [MarkupKind.Markdown, MarkupKind.PlainText]
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentHover, true, (capability) => {
      return languages.registerHoverProvider(toMonacoLanguageSelector(capability.documentSelector), new LspHoverProvider(this._connection, capability));
    }));
  }
};
var LspHoverProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideHover(model, position, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentHover({
      textDocument: translated.textDocument,
      position: translated.position
    });
    if (!result || !result.contents) return null;
    return {
      contents: toMonacoMarkdownString(result.contents),
      range: result.range ? this._client.bridge.translateBackRange(translated.textDocument, result.range).range : void 0
    };
  }
};
function toMonacoMarkdownString(contents) {
  if (Array.isArray(contents)) return contents.map((c) => toSingleMarkdownString(c));
  return [toSingleMarkdownString(contents)];
}
function toSingleMarkdownString(content) {
  if (typeof content === "string") return {
    value: content,
    isTrusted: true
  };
  if ("kind" in content) return {
    value: content.value,
    isTrusted: true
  };
  return {
    value: `\`\`\`${content.language}
${content.value}
\`\`\``,
    isTrusted: true
  };
}
var LspSignatureHelpFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { signatureHelp: {
      dynamicRegistration: true,
      contextSupport: true,
      signatureInformation: {
        documentationFormat: [MarkupKind.Markdown, MarkupKind.PlainText],
        parameterInformation: { labelOffsetSupport: true },
        activeParameterSupport: true
      }
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentSignatureHelp, true, (capability) => {
      return languages.registerSignatureHelpProvider(toMonacoLanguageSelector(capability.documentSelector), new LspSignatureHelpProvider(this._connection, capability));
    }));
  }
};
var LspSignatureHelpProvider = class {
  constructor(_client, _capabilities) {
    __publicField(this, "signatureHelpTriggerCharacters");
    __publicField(this, "signatureHelpRetriggerCharacters");
    this._client = _client;
    this._capabilities = _capabilities;
    this.signatureHelpTriggerCharacters = _capabilities.triggerCharacters;
    this.signatureHelpRetriggerCharacters = _capabilities.retriggerCharacters;
  }
  async provideSignatureHelp(model, position, token, context) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentSignatureHelp({
      textDocument: translated.textDocument,
      position: translated.position,
      context: {
        triggerKind: toLspSignatureHelpTriggerKind(context.triggerKind),
        triggerCharacter: context.triggerCharacter,
        isRetrigger: context.isRetrigger
      }
    });
    if (!result) return null;
    return {
      value: {
        signatures: result.signatures.map((sig) => ({
          label: sig.label,
          documentation: toMonacoDocumentation(sig.documentation),
          parameters: sig.parameters?.map((param) => ({
            label: param.label,
            documentation: toMonacoDocumentation(param.documentation)
          })) || [],
          activeParameter: sig.activeParameter
        })),
        activeSignature: result.activeSignature || 0,
        activeParameter: result.activeParameter || 0
      },
      dispose: () => {
      }
    };
  }
};
function toMonacoDocumentation(doc) {
  if (!doc) return void 0;
  if (typeof doc === "string") return doc;
  return {
    value: doc.value,
    isTrusted: true
  };
}
var LspDefinitionFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { definition: {
      dynamicRegistration: true,
      linkSupport: true
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDefinition, true, (capability) => {
      return languages.registerDefinitionProvider(toMonacoLanguageSelector(capability.documentSelector), new LspDefinitionProvider(this._connection, capability));
    }));
  }
};
var LspDefinitionProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideDefinition(model, position, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentDefinition({
      textDocument: translated.textDocument,
      position: translated.position
    });
    if (!result) return null;
    if (Array.isArray(result)) return result.map((loc) => toMonacoLocation(loc, this._client));
    return toMonacoLocation(result, this._client);
  }
};
var LspDeclarationFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { declaration: {
      dynamicRegistration: true,
      linkSupport: true
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDeclaration, true, (capability) => {
      return languages.registerDeclarationProvider(toMonacoLanguageSelector(capability.documentSelector), new LspDeclarationProvider(this._connection, capability));
    }));
  }
};
var LspDeclarationProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideDeclaration(model, position, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentDeclaration({
      textDocument: translated.textDocument,
      position: translated.position
    });
    if (!result) return null;
    if (Array.isArray(result)) return result.map((loc) => toMonacoLocation(loc, this._client));
    return toMonacoLocation(result, this._client);
  }
};
var LspTypeDefinitionFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { typeDefinition: {
      dynamicRegistration: true,
      linkSupport: true
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentTypeDefinition, true, (capability) => {
      return languages.registerTypeDefinitionProvider(toMonacoLanguageSelector(capability.documentSelector), new LspTypeDefinitionProvider(this._connection, capability));
    }));
  }
};
var LspTypeDefinitionProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideTypeDefinition(model, position, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentTypeDefinition({
      textDocument: translated.textDocument,
      position: translated.position
    });
    if (!result) return null;
    if (Array.isArray(result)) return result.map((loc) => toMonacoLocation(loc, this._client));
    return toMonacoLocation(result, this._client);
  }
};
var LspImplementationFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { implementation: {
      dynamicRegistration: true,
      linkSupport: true
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentImplementation, true, (capability) => {
      return languages.registerImplementationProvider(toMonacoLanguageSelector(capability.documentSelector), new LspImplementationProvider(this._connection, capability));
    }));
  }
};
var LspImplementationProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideImplementation(model, position, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentImplementation({
      textDocument: translated.textDocument,
      position: translated.position
    });
    if (!result) return null;
    if (Array.isArray(result)) return result.map((loc) => toMonacoLocation(loc, this._client));
    return toMonacoLocation(result, this._client);
  }
};
var LspReferencesFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { references: { dynamicRegistration: true } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentReferences, true, (capability) => {
      return languages.registerReferenceProvider(toMonacoLanguageSelector(capability.documentSelector), new LspReferenceProvider(this._connection, capability));
    }));
  }
};
var LspReferenceProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideReferences(model, position, context, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentReferences({
      textDocument: translated.textDocument,
      position: translated.position,
      context: { includeDeclaration: context.includeDeclaration }
    });
    if (!result) return null;
    return result.map((loc) => {
      const translated$1 = this._client.bridge.translateBackRange({ uri: loc.uri }, loc.range);
      return {
        uri: translated$1.textModel.uri,
        range: translated$1.range
      };
    });
  }
};
var LspDocumentHighlightFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { documentHighlight: { dynamicRegistration: true } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDocumentHighlight, true, (capability) => {
      return languages.registerDocumentHighlightProvider(toMonacoLanguageSelector(capability.documentSelector), new LspDocumentHighlightProvider(this._connection, capability));
    }));
  }
};
var LspDocumentHighlightProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideDocumentHighlights(model, position, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentDocumentHighlight({
      textDocument: translated.textDocument,
      position: translated.position
    });
    if (!result) return null;
    return result.map((highlight) => ({
      range: this._client.bridge.translateBackRange(translated.textDocument, highlight.range).range,
      kind: toMonacoDocumentHighlightKind(highlight.kind)
    }));
  }
};
var LspDocumentSymbolFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { documentSymbol: {
      dynamicRegistration: true,
      hierarchicalDocumentSymbolSupport: true,
      symbolKind: { valueSet: Array.from(lspSymbolKindToMonacoSymbolKind.keys()) },
      tagSupport: { valueSet: [SymbolTag.Deprecated] }
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDocumentSymbol, true, (capability) => {
      return languages.registerDocumentSymbolProvider(toMonacoLanguageSelector(capability.documentSelector), new LspDocumentSymbolProvider(this._connection, capability));
    }));
  }
};
var LspDocumentSymbolProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideDocumentSymbols(model, token) {
    const translated = this._client.bridge.translate(model, new Position(1, 1));
    const result = await this._client.server.textDocumentDocumentSymbol({ textDocument: translated.textDocument });
    if (!result) return null;
    if (Array.isArray(result) && result.length > 0) if ("location" in result[0]) return result.map((symbol) => toMonacoSymbolInformation(symbol, this._client));
    else return result.map((symbol) => toMonacoDocumentSymbol(symbol, this._client, translated.textDocument));
    return [];
  }
};
function toMonacoDocumentSymbol(symbol, client, textDocument) {
  return {
    name: symbol.name,
    detail: symbol.detail || "",
    kind: toMonacoSymbolKind(symbol.kind),
    tags: symbol.tags?.map((tag) => toMonacoSymbolTag(tag)).filter((t) => t !== void 0) || [],
    range: client.bridge.translateBackRange(textDocument, symbol.range).range,
    selectionRange: client.bridge.translateBackRange(textDocument, symbol.selectionRange).range,
    children: symbol.children?.map((child) => toMonacoDocumentSymbol(child, client, textDocument)) || []
  };
}
function toMonacoSymbolInformation(symbol, client) {
  return {
    name: symbol.name,
    detail: "",
    kind: toMonacoSymbolKind(symbol.kind),
    tags: symbol.tags?.map((tag) => toMonacoSymbolTag(tag)).filter((t) => t !== void 0) || [],
    range: client.bridge.translateBackRange({ uri: symbol.location.uri }, symbol.location.range).range,
    selectionRange: client.bridge.translateBackRange({ uri: symbol.location.uri }, symbol.location.range).range,
    children: []
  };
}
var LspRenameFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { rename: {
      dynamicRegistration: true,
      prepareSupport: true
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentRename, true, (capability) => {
      return languages.registerRenameProvider(toMonacoLanguageSelector(capability.documentSelector), new LspRenameProvider(this._connection, capability));
    }));
  }
};
var LspRenameProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideRenameEdits(model, position, newName, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentRename({
      textDocument: translated.textDocument,
      position: translated.position,
      newName
    });
    if (!result) return null;
    return toMonacoWorkspaceEdit$1(result, this._client);
  }
  async resolveRenameLocation(model, position, token) {
    if (!this._capabilities.prepareProvider) return null;
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentPrepareRename({
      textDocument: translated.textDocument,
      position: translated.position
    });
    if (!result) return null;
    if ("range" in result && "placeholder" in result) return {
      range: this._client.bridge.translateBackRange(translated.textDocument, result.range).range,
      text: result.placeholder
    };
    else if ("defaultBehavior" in result) return null;
    else if ("start" in result && "end" in result) {
      const range = this._client.bridge.translateBackRange(translated.textDocument, result).range;
      return {
        range,
        text: model.getValueInRange(range)
      };
    }
    return null;
  }
};
function toMonacoWorkspaceEdit$1(edit, client) {
  const edits = [];
  if (edit.changes) for (const uri in edit.changes) {
    const textEdits = edit.changes[uri];
    for (const textEdit of textEdits) {
      const translated = client.bridge.translateBackRange({ uri }, textEdit.range);
      edits.push({
        resource: translated.textModel.uri,
        versionId: void 0,
        textEdit: {
          range: translated.range,
          text: textEdit.newText
        }
      });
    }
  }
  if (edit.documentChanges) {
    for (const change of edit.documentChanges) if ("textDocument" in change) {
      const uri = change.textDocument.uri;
      for (const textEdit of change.edits) {
        const translated = client.bridge.translateBackRange({ uri }, textEdit.range);
        edits.push({
          resource: translated.textModel.uri,
          versionId: change.textDocument.version,
          textEdit: {
            range: translated.range,
            text: textEdit.newText
          }
        });
      }
    }
  }
  return { edits };
}
var LspCodeActionFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { codeAction: {
      dynamicRegistration: true,
      codeActionLiteralSupport: { codeActionKind: { valueSet: Array.from(lspCodeActionKindToMonacoCodeActionKind.keys()) } },
      isPreferredSupport: true,
      disabledSupport: true,
      dataSupport: true,
      resolveSupport: { properties: ["edit"] }
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentCodeAction, true, (capability) => {
      return languages.registerCodeActionProvider(toMonacoLanguageSelector(capability.documentSelector), new LspCodeActionProvider(this._connection, capability));
    }));
  }
};
var LspCodeActionProvider = class {
  constructor(_client, _capabilities) {
    __publicField(this, "resolveCodeAction");
    this._client = _client;
    this._capabilities = _capabilities;
    if (_capabilities.resolveProvider) this.resolveCodeAction = async (codeAction, token) => {
      if (codeAction._lspAction) {
        const resolved = await this._client.server.codeActionResolve(codeAction._lspAction);
        if (resolved.edit) codeAction.edit = toMonacoWorkspaceEdit(resolved.edit, this._client);
        if (resolved.command) codeAction.command = toMonacoCommand(resolved.command);
      }
      return codeAction;
    };
  }
  async provideCodeActions(model, range, context, token) {
    const translated = this._client.bridge.translate(model, range.getStartPosition());
    const result = await this._client.server.textDocumentCodeAction({
      textDocument: translated.textDocument,
      range: this._client.bridge.translateRange(model, range),
      context: {
        diagnostics: context.markers.map((marker) => ({
          range: this._client.bridge.translateRange(model, Range.lift(marker)),
          message: marker.message,
          severity: toLspDiagnosticSeverity(marker.severity)
        })),
        triggerKind: toLspCodeActionTriggerKind(context.trigger)
      }
    });
    if (!result) return null;
    return {
      actions: (Array.isArray(result) ? result : [result]).map((action) => {
        if ("title" in action && !("kind" in action)) {
          const cmd = action;
          return {
            title: cmd.title,
            command: toMonacoCommand(cmd)
          };
        } else {
          const codeAction = action;
          return {
            title: codeAction.title,
            kind: toMonacoCodeActionKind(codeAction.kind),
            isPreferred: codeAction.isPreferred,
            disabled: codeAction.disabled?.reason,
            edit: codeAction.edit ? toMonacoWorkspaceEdit(codeAction.edit, this._client) : void 0,
            command: toMonacoCommand(codeAction.command),
            _lspAction: codeAction
          };
        }
      }),
      dispose: () => {
      }
    };
  }
};
function toMonacoWorkspaceEdit(edit, client) {
  const edits = [];
  if (edit.changes) for (const uri in edit.changes) {
    const textEdits = edit.changes[uri];
    for (const textEdit of textEdits) {
      const translated = client.bridge.translateBackRange({ uri }, textEdit.range);
      edits.push({
        resource: translated.textModel.uri,
        versionId: void 0,
        textEdit: {
          range: translated.range,
          text: textEdit.newText
        }
      });
    }
  }
  if (edit.documentChanges) {
    for (const change of edit.documentChanges) if ("textDocument" in change) {
      const uri = change.textDocument.uri;
      for (const textEdit of change.edits) {
        const translated = client.bridge.translateBackRange({ uri }, textEdit.range);
        edits.push({
          resource: translated.textModel.uri,
          versionId: change.textDocument.version ?? void 0,
          textEdit: {
            range: translated.range,
            text: textEdit.newText
          }
        });
      }
    }
  }
  return { edits };
}
var LspCodeLensFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { codeLens: { dynamicRegistration: true } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentCodeLens, true, (capability) => {
      return languages.registerCodeLensProvider(toMonacoLanguageSelector(capability.documentSelector), new LspCodeLensProvider(this._connection, capability));
    }));
  }
};
var LspCodeLensProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideCodeLenses(model, token) {
    const translated = this._client.bridge.translate(model, new Position(1, 1));
    const result = await this._client.server.textDocumentCodeLens({ textDocument: translated.textDocument });
    if (!result) return null;
    return {
      lenses: result.map((lens) => {
        return {
          range: assertTargetTextModel(this._client.bridge.translateBackRange(translated.textDocument, lens.range), model).range,
          command: toMonacoCommand(lens.command),
          _lspCodeLens: lens
        };
      }),
      dispose: () => {
      }
    };
  }
  async resolveCodeLens(model, codeLens, token) {
    if (!this._capabilities.resolveProvider || !codeLens._lspCodeLens) return codeLens;
    const resolved = await this._client.server.codeLensResolve(codeLens._lspCodeLens);
    if (resolved.command) codeLens.command = {
      id: resolved.command.command,
      title: resolved.command.title,
      arguments: resolved.command.arguments
    };
    return codeLens;
  }
};
var LspDocumentLinkFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { documentLink: {
      dynamicRegistration: true,
      tooltipSupport: true
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDocumentLink, true, (capability) => {
      return languages.registerLinkProvider(toMonacoLanguageSelector(capability.documentSelector), new LspDocumentLinkProvider(this._connection, capability));
    }));
  }
};
var LspDocumentLinkProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideLinks(model, token) {
    const translated = this._client.bridge.translate(model, new Position(1, 1));
    const result = await this._client.server.textDocumentDocumentLink({ textDocument: translated.textDocument });
    if (!result) return null;
    return { links: result.map((link) => ({
      range: this._client.bridge.translateBackRange(translated.textDocument, link.range).range,
      url: link.target,
      tooltip: link.tooltip
    })) };
  }
  async resolveLink(link, token) {
    if (!this._capabilities.resolveProvider) return link;
    return link;
  }
};
var LspFormattingFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { formatting: { dynamicRegistration: true } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentFormatting, true, (capability) => {
      return languages.registerDocumentFormattingEditProvider(toMonacoLanguageSelector(capability.documentSelector), new LspDocumentFormattingProvider(this._connection, capability));
    }));
  }
};
var LspDocumentFormattingProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideDocumentFormattingEdits(model, options, token) {
    const translated = this._client.bridge.translate(model, new Position(1, 1));
    const result = await this._client.server.textDocumentFormatting({
      textDocument: translated.textDocument,
      options: {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
      }
    });
    if (!result) return null;
    return result.map((edit) => ({
      range: this._client.bridge.translateBackRange(translated.textDocument, edit.range).range,
      text: edit.newText
    }));
  }
};
var LspRangeFormattingFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { rangeFormatting: { dynamicRegistration: true } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentRangeFormatting, true, (capability) => {
      return languages.registerDocumentRangeFormattingEditProvider(toMonacoLanguageSelector(capability.documentSelector), new LspDocumentRangeFormattingProvider(this._connection, capability));
    }));
  }
};
var LspDocumentRangeFormattingProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideDocumentRangeFormattingEdits(model, range, options, token) {
    const translated = this._client.bridge.translate(model, range.getStartPosition());
    const result = await this._client.server.textDocumentRangeFormatting({
      textDocument: translated.textDocument,
      range: this._client.bridge.translateRange(model, range),
      options: {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
      }
    });
    if (!result) return null;
    return result.map((edit) => ({
      range: this._client.bridge.translateBackRange(translated.textDocument, edit.range).range,
      text: edit.newText
    }));
  }
};
var LspOnTypeFormattingFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { onTypeFormatting: { dynamicRegistration: true } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentOnTypeFormatting, true, (capability) => {
      return languages.registerOnTypeFormattingEditProvider(toMonacoLanguageSelector(capability.documentSelector), new LspOnTypeFormattingProvider(this._connection, capability));
    }));
  }
};
var LspOnTypeFormattingProvider = class {
  constructor(_client, _capabilities) {
    __publicField(this, "autoFormatTriggerCharacters");
    this._client = _client;
    this._capabilities = _capabilities;
    this.autoFormatTriggerCharacters = [_capabilities.firstTriggerCharacter, ..._capabilities.moreTriggerCharacter || []];
  }
  async provideOnTypeFormattingEdits(model, position, ch, options, token) {
    const translated = this._client.bridge.translate(model, position);
    const result = await this._client.server.textDocumentOnTypeFormatting({
      textDocument: translated.textDocument,
      position: translated.position,
      ch,
      options: {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
      }
    });
    if (!result) return null;
    return result.map((edit) => ({
      range: this._client.bridge.translateBackRange(translated.textDocument, edit.range).range,
      text: edit.newText
    }));
  }
};
var LspFoldingRangeFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { foldingRange: {
      dynamicRegistration: true,
      rangeLimit: 5e3,
      lineFoldingOnly: false,
      foldingRangeKind: { valueSet: [
        FoldingRangeKind.Comment,
        FoldingRangeKind.Imports,
        FoldingRangeKind.Region
      ] }
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentFoldingRange, true, (capability) => {
      return languages.registerFoldingRangeProvider(toMonacoLanguageSelector(capability.documentSelector), new LspFoldingRangeProvider(this._connection, capability));
    }));
  }
};
var LspFoldingRangeProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideFoldingRanges(model, context, token) {
    const translated = this._client.bridge.translate(model, new Position(1, 1));
    const result = await this._client.server.textDocumentFoldingRange({ textDocument: translated.textDocument });
    if (!result) return null;
    return result.map((range) => ({
      start: range.startLine + 1,
      end: range.endLine + 1,
      kind: toMonacoFoldingRangeKind(range.kind)
    }));
  }
};
var LspSelectionRangeFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { selectionRange: { dynamicRegistration: true } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentSelectionRange, true, (capability) => {
      return languages.registerSelectionRangeProvider(toMonacoLanguageSelector(capability.documentSelector), new LspSelectionRangeProvider(this._connection, capability));
    }));
  }
};
var LspSelectionRangeProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  async provideSelectionRanges(model, positions, token) {
    const translated = this._client.bridge.translate(model, positions[0]);
    const result = await this._client.server.textDocumentSelectionRange({
      textDocument: translated.textDocument,
      positions: positions.map((pos) => this._client.bridge.translate(model, pos).position)
    });
    if (!result) return null;
    return result.map((selRange) => this.convertSelectionRange(selRange, translated.textDocument));
  }
  convertSelectionRange(range, textDocument) {
    const result = [];
    let current = range;
    while (current) {
      result.push({ range: this._client.bridge.translateBackRange(textDocument, current.range).range });
      current = current.parent;
    }
    return result;
  }
};
var LspInlayHintsFeature = class extends Disposable {
  constructor(_connection) {
    super();
    __publicField(this, "_providers", /* @__PURE__ */ new Set());
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({
      textDocument: { inlayHint: {
        dynamicRegistration: true,
        resolveSupport: { properties: [
          "tooltip",
          "textEdits",
          "label.tooltip",
          "label.location",
          "label.command"
        ] }
      } },
      workspace: { inlayHint: { refreshSupport: true } }
    }));
    this._register(this._connection.connection.registerRequestHandler(api.client.workspaceInlayHintRefresh, async () => {
      for (const provider of this._providers) provider.refresh();
      return { ok: null };
    }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentInlayHint, true, (capability) => {
      const provider = new LspInlayHintsProvider(this._connection, capability);
      this._providers.add(provider);
      const disposable = languages.registerInlayHintsProvider(toMonacoLanguageSelector(capability.documentSelector), provider);
      return { dispose: () => {
        this._providers.delete(provider);
        disposable.dispose();
      } };
    }));
  }
};
var LspInlayHintsProvider = class {
  constructor(_client, _capabilities) {
    __publicField(this, "_onDidChangeInlayHints", new Emitter());
    __publicField(this, "onDidChangeInlayHints", this._onDidChangeInlayHints.event);
    __publicField(this, "resolveInlayHint");
    this._client = _client;
    this._capabilities = _capabilities;
    if (_capabilities.resolveProvider) this.resolveInlayHint = async (hint, token) => {
      const resolved = await this._client.server.inlayHintResolve(hint._lspInlayHint);
      if (resolved.tooltip) hint.tooltip = toMonacoTooltip(resolved.tooltip);
      if (resolved.label !== hint._lspInlayHint.label) hint.label = toLspInlayHintLabel(resolved.label);
      if (resolved.textEdits) hint.textEdits = resolved.textEdits.map((edit) => {
        return {
          range: this._client.bridge.translateBackRange({ uri: hint._targetUri }, edit.range).range,
          text: edit.newText
        };
      });
      return hint;
    };
  }
  refresh() {
    this._onDidChangeInlayHints.fire();
  }
  async provideInlayHints(model, range, token) {
    const translated = this._client.bridge.translate(model, range.getStartPosition());
    const result = await retryOnContentModified(async () => await this._client.server.textDocumentInlayHint({
      textDocument: translated.textDocument,
      range: this._client.bridge.translateRange(model, range)
    }));
    if (!result) return null;
    return {
      hints: result.map((hint) => {
        return {
          label: toLspInlayHintLabel(hint.label),
          position: assertTargetTextModel(this._client.bridge.translateBack(translated.textDocument, hint.position), model).position,
          kind: toMonacoInlayHintKind(hint.kind),
          tooltip: toMonacoTooltip(hint.tooltip),
          paddingLeft: hint.paddingLeft,
          paddingRight: hint.paddingRight,
          textEdits: hint.textEdits?.map((edit) => ({
            range: assertTargetTextModel(this._client.bridge.translateBackRange(translated.textDocument, edit.range), model).range,
            text: edit.newText
          })),
          _lspInlayHint: hint,
          _targetUri: translated.textDocument.uri
        };
      }),
      dispose: () => {
      }
    };
  }
};
async function retryOnContentModified(cb) {
  for (let triesLeft = 3; ; triesLeft--) try {
    return await cb();
  } catch (e) {
    if (e.message === "content modified" && triesLeft > 0) continue;
    throw e;
  }
}
function toLspInlayHintLabel(label) {
  if (typeof label === "string") return label;
  return label.map((part) => {
    const monacoLabelPart = {
      label: part.value,
      tooltip: toMonacoTooltip(part.tooltip),
      command: toMonacoCommand(part.command)
    };
    if (part.location) monacoLabelPart.location = {
      uri: Uri.parse(part.location.uri),
      range: new Range(part.location.range.start.line + 1, part.location.range.start.character + 1, part.location.range.end.line + 1, part.location.range.end.character + 1)
    };
    return monacoLabelPart;
  });
}
function toMonacoTooltip(tooltip) {
  if (!tooltip) return;
  if (typeof tooltip === "string") return tooltip;
  return {
    value: tooltip.value,
    isTrusted: true
  };
}
var LspSemanticTokensFeature = class extends Disposable {
  constructor(_connection) {
    super();
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: { semanticTokens: {
      dynamicRegistration: true,
      requests: {
        range: true,
        full: { delta: true }
      },
      tokenTypes: [
        "namespace",
        "type",
        "class",
        "enum",
        "interface",
        "struct",
        "typeParameter",
        "parameter",
        "variable",
        "property",
        "enumMember",
        "event",
        "function",
        "method",
        "macro",
        "keyword",
        "modifier",
        "comment",
        "string",
        "number",
        "regexp",
        "operator",
        "decorator"
      ],
      tokenModifiers: [
        "declaration",
        "definition",
        "readonly",
        "static",
        "deprecated",
        "abstract",
        "async",
        "modification",
        "documentation",
        "defaultLibrary"
      ],
      formats: [TokenFormat.Relative],
      overlappingTokenSupport: false,
      multilineTokenSupport: true
    } } }));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentSemanticTokensFull, true, (capability) => {
      return languages.registerDocumentSemanticTokensProvider(toMonacoLanguageSelector(capability.documentSelector), new LspSemanticTokensProvider(this._connection, capability));
    }));
  }
};
var LspSemanticTokensProvider = class {
  constructor(_client, _capabilities) {
    this._client = _client;
    this._capabilities = _capabilities;
  }
  getLegend() {
    return {
      tokenTypes: this._capabilities.legend.tokenTypes,
      tokenModifiers: this._capabilities.legend.tokenModifiers
    };
  }
  releaseDocumentSemanticTokens(resultId) {
  }
  async provideDocumentSemanticTokens(model, lastResultId, token) {
    const translated = this._client.bridge.translate(model, model.getPositionAt(0));
    const full = this._capabilities.full;
    if (lastResultId && full && typeof full === "object" && full.delta) {
      const deltaResult = await this._client.server.textDocumentSemanticTokensFullDelta({
        textDocument: translated.textDocument,
        previousResultId: lastResultId
      });
      if (!deltaResult) return null;
      if ("edits" in deltaResult) return {
        resultId: deltaResult.resultId,
        edits: deltaResult.edits.map((edit) => ({
          start: edit.start,
          deleteCount: edit.deleteCount,
          data: edit.data ? new Uint32Array(edit.data) : void 0
        }))
      };
      else return {
        resultId: deltaResult.resultId,
        data: new Uint32Array(deltaResult.data)
      };
    }
    const result = await this._client.server.textDocumentSemanticTokensFull({ textDocument: translated.textDocument });
    if (!result) return null;
    return {
      resultId: result.resultId,
      data: new Uint32Array(result.data)
    };
  }
  async provideDocumentSemanticTokensEdits(model, previousResultId, token) {
    return this.provideDocumentSemanticTokens(model, previousResultId, token);
  }
};
var LspDiagnosticsFeature = class extends Disposable {
  constructor(_connection) {
    super();
    __publicField(this, "_diagnosticsMarkerOwner", "lsp");
    __publicField(this, "_pullDiagnosticProviders", /* @__PURE__ */ new Map());
    this._connection = _connection;
    this._register(this._connection.capabilities.addStaticClientCapabilities({ textDocument: {
      publishDiagnostics: {
        relatedInformation: true,
        tagSupport: { valueSet: [...lspDiagnosticTagToMonacoMarkerTag.keys()] },
        versionSupport: true,
        codeDescriptionSupport: true,
        dataSupport: true
      },
      diagnostic: {
        dynamicRegistration: true,
        relatedDocumentSupport: true
      }
    } }));
    debugger;
    this._register(this._connection.connection.registerNotificationHandler(api.client.textDocumentPublishDiagnostics, (params) => this._handlePublishDiagnostics(params)));
    this._register(this._connection.capabilities.registerCapabilityHandler(capabilities.textDocumentDiagnostic, true, (capability) => {
      const disposables = new DisposableStore();
      for (const model of editor.getModels()) this._addPullDiagnosticProvider(model, capability, disposables);
      disposables.add(editor.onDidCreateModel((model) => {
        this._addPullDiagnosticProvider(model, capability, disposables);
      }));
      return disposables;
    }));
  }
  _addPullDiagnosticProvider(model, capability, disposables) {
    model.getLanguageId();
    if (!matchesDocumentSelector(model, capability.documentSelector)) return;
    const provider = new ModelDiagnosticProvider(model, this._connection, this._diagnosticsMarkerOwner, capability);
    this._pullDiagnosticProviders.set(model, provider);
    disposables.add(provider);
    disposables.add(model.onWillDispose(() => {
      this._pullDiagnosticProviders.delete(model);
    }));
  }
  _handlePublishDiagnostics(params) {
    const uri = params.uri;
    try {
      const model = this._connection.bridge.translateBack({ uri }, {
        line: 0,
        character: 0
      }).textModel;
      if (!model || model.isDisposed()) return;
      const markers = params.diagnostics.map((diagnostic) => toDiagnosticMarker(diagnostic));
      editor.setModelMarkers(model, this._diagnosticsMarkerOwner, markers);
    } catch (error) {
      console.debug(`Could not set diagnostics for ${uri}:`, error);
    }
  }
};
var ModelDiagnosticProvider = class extends Disposable {
  constructor(_model, _connection, _markerOwner, _capability) {
    super();
    __publicField(this, "_updateHandle");
    __publicField(this, "_previousResultId");
    this._model = _model;
    this._connection = _connection;
    this._markerOwner = _markerOwner;
    this._capability = _capability;
    this._register(this._model.onDidChangeContent(() => {
      this._scheduleDiagnosticUpdate();
    }));
    this._scheduleDiagnosticUpdate();
  }
  _scheduleDiagnosticUpdate() {
    if (this._updateHandle !== void 0) clearTimeout(this._updateHandle);
    this._updateHandle = window.setTimeout(() => {
      this._updateHandle = void 0;
      this._requestDiagnostics();
    }, 500);
  }
  async _requestDiagnostics() {
    if (this._model.isDisposed()) return;
    try {
      const translated = this._connection.bridge.translate(this._model, new Position(1, 1));
      const result = await this._connection.server.textDocumentDiagnostic({
        textDocument: translated.textDocument,
        identifier: this._capability.identifier,
        previousResultId: this._previousResultId
      });
      if (this._model.isDisposed()) return;
      this._handleDiagnosticReport(result);
    } catch (error) {
      console.error("Error requesting diagnostics:", error);
    }
  }
  _handleDiagnosticReport(report) {
    if (report.kind === "full") {
      this._previousResultId = report.resultId;
      const markers = report.items.map((diagnostic) => toDiagnosticMarker(diagnostic));
      editor.setModelMarkers(this._model, this._markerOwner, markers);
      if ("relatedDocuments" in report && report.relatedDocuments) this._handleRelatedDocuments(report.relatedDocuments);
    } else if (report.kind === "unchanged") this._previousResultId = report.resultId;
  }
  _handleRelatedDocuments(relatedDocuments) {
    for (const [uri, report] of Object.entries(relatedDocuments)) try {
      const model = this._connection.bridge.translateBack({ uri }, {
        line: 0,
        character: 0
      }).textModel;
      if (!model || model.isDisposed()) continue;
      if (report.kind === "full") {
        const markers = report.items.map((diagnostic) => toDiagnosticMarker(diagnostic));
        editor.setModelMarkers(model, this._markerOwner, markers);
      }
    } catch (error) {
      console.debug(`Could not set related diagnostics for ${uri}:`, error);
    }
  }
  dispose() {
    if (this._updateHandle !== void 0) {
      clearTimeout(this._updateHandle);
      this._updateHandle = void 0;
    }
    super.dispose();
  }
};
var LspConnection = class {
  constructor(server, bridge, capabilities$1, connection) {
    this.server = server;
    this.bridge = bridge;
    this.capabilities = capabilities$1;
    this.connection = connection;
  }
};
var LspCapabilitiesRegistry = class extends Disposable {
  constructor(_connection) {
    super();
    __publicField(this, "_staticCapabilities", /* @__PURE__ */ new Set());
    __publicField(this, "_dynamicFromStatic", DynamicFromStaticOptions.create());
    __publicField(this, "_registrations", /* @__PURE__ */ new Map());
    __publicField(this, "_serverCapabilities");
    this._connection = _connection;
    this._register(this._connection.registerRequestHandler(api.client.clientRegisterCapability, async (params) => {
      for (const registration of params.registrations) {
        const capability = getCapabilityByMethod(registration.method);
        const r = new CapabilityRegistration(registration.id, capability, registration.registerOptions, false);
        this._registerCapabilityOptions(r);
      }
      return { ok: null };
    }));
    this._register(this._connection.registerRequestHandler(api.client.clientUnregisterCapability, async (params) => {
      for (const unregistration of params.unregisterations) {
        const capability = getCapabilityByMethod(unregistration.method);
        const info = this._registrations.get(capability);
        const handlerInfo = info?.registrations.get(unregistration.id);
        if (!handlerInfo) throw new Error(`No registration for method ${unregistration.method} with id ${unregistration.id}`);
        handlerInfo?.handlerDisposables.forEach((d) => d.dispose());
        info?.registrations.delete(unregistration.id);
      }
      return { ok: null };
    }));
  }
  _registerCapabilityOptions(registration) {
    let registrationForMethod = this._registrations.get(registration.capability);
    if (!registrationForMethod) {
      registrationForMethod = new CapabilityInfo();
      this._registrations.set(registration.capability, registrationForMethod);
    }
    if (registrationForMethod.registrations.has(registration.id)) throw new Error(`Handler for method ${registration.capability.method} with id ${registration.id} already registered`);
    registrationForMethod.registrations.set(registration.id, registration);
    for (const h of registrationForMethod.handlers) {
      if (!h.handleStaticCapability && registration.isFromStatic) continue;
      registration.handlerDisposables.set(h, h.handler(registration.options));
    }
  }
  setServerCapabilities(serverCapabilities) {
    if (this._serverCapabilities) throw new Error("Server capabilities already set");
    this._serverCapabilities = serverCapabilities;
    for (const cap of Object.values(capabilities)) {
      const options = this._dynamicFromStatic.getOptions(cap, serverCapabilities);
      if (options) this._registerCapabilityOptions(new CapabilityRegistration(cap.method, cap, options, true));
    }
  }
  getClientCapabilities() {
    const result = {};
    for (const c of this._staticCapabilities) deepAssign(result, c.cap);
    return result;
  }
  addStaticClientCapabilities(capability) {
    const obj = { cap: capability };
    this._staticCapabilities.add(obj);
    return { dispose: () => {
      this._staticCapabilities.delete(obj);
    } };
  }
  registerCapabilityHandler(capability, handleStaticCapability, handler) {
    let info = this._registrations.get(capability);
    if (!info) {
      info = new CapabilityInfo();
      this._registrations.set(capability, info);
    }
    const handlerInfo = new CapabilityHandler(capability, handleStaticCapability, handler);
    info.handlers.add(handlerInfo);
    for (const registration of info.registrations.values()) {
      if (!handlerInfo.handleStaticCapability && registration.isFromStatic) continue;
      registration.handlerDisposables.set(handlerInfo, handler(registration.options));
    }
    return { dispose: () => {
      info.handlers.delete(handlerInfo);
      for (const registration of info.registrations.values()) {
        const disposable = registration.handlerDisposables.get(handlerInfo);
        if (disposable) {
          disposable.dispose();
          registration.handlerDisposables.delete(handlerInfo);
        }
      }
    } };
  }
};
var CapabilityHandler = class {
  constructor(capability, handleStaticCapability, handler) {
    this.capability = capability;
    this.handleStaticCapability = handleStaticCapability;
    this.handler = handler;
  }
};
var CapabilityRegistration = class {
  constructor(id, capability, options, isFromStatic) {
    __publicField(this, "handlerDisposables", /* @__PURE__ */ new Map());
    this.id = id;
    this.capability = capability;
    this.options = options;
    this.isFromStatic = isFromStatic;
  }
};
const capabilitiesByMethod = new Map([...Object.values(capabilities)].map((c) => [c.method, c]));
function getCapabilityByMethod(method) {
  const c = capabilitiesByMethod.get(method);
  if (!c) throw new Error(`No capability found for method ${method}`);
  return c;
}
var CapabilityInfo = class {
  constructor() {
    __publicField(this, "handlers", /* @__PURE__ */ new Set());
    __publicField(this, "registrations", /* @__PURE__ */ new Map());
  }
};
var DynamicFromStaticOptions = class DynamicFromStaticOptions2 {
  constructor() {
    __publicField(this, "_mappings", /* @__PURE__ */ new Map());
  }
  static create() {
    const o = new DynamicFromStaticOptions2();
    o.set(capabilities.textDocumentDidChange, (s) => {
      if (s.textDocumentSync === void 0) return;
      if (typeof s.textDocumentSync === "object") return {
        syncKind: s.textDocumentSync.change ?? TextDocumentSyncKind.None,
        documentSelector: null
      };
      else return {
        syncKind: s.textDocumentSync,
        documentSelector: null
      };
    });
    o.set(capabilities.textDocumentCompletion, (s) => s.completionProvider);
    o.set(capabilities.textDocumentHover, (s) => s.hoverProvider);
    o.set(capabilities.textDocumentSignatureHelp, (s) => s.signatureHelpProvider);
    o.set(capabilities.textDocumentDefinition, (s) => s.definitionProvider);
    o.set(capabilities.textDocumentReferences, (s) => s.referencesProvider);
    o.set(capabilities.textDocumentDocumentHighlight, (s) => s.documentHighlightProvider);
    o.set(capabilities.textDocumentDocumentSymbol, (s) => s.documentSymbolProvider);
    o.set(capabilities.textDocumentCodeAction, (s) => s.codeActionProvider);
    o.set(capabilities.textDocumentCodeLens, (s) => s.codeLensProvider);
    o.set(capabilities.textDocumentDocumentLink, (s) => s.documentLinkProvider);
    o.set(capabilities.textDocumentFormatting, (s) => s.documentFormattingProvider);
    o.set(capabilities.textDocumentRangeFormatting, (s) => s.documentRangeFormattingProvider);
    o.set(capabilities.textDocumentOnTypeFormatting, (s) => s.documentOnTypeFormattingProvider);
    o.set(capabilities.textDocumentRename, (s) => s.renameProvider);
    o.set(capabilities.textDocumentFoldingRange, (s) => s.foldingRangeProvider);
    o.set(capabilities.textDocumentDeclaration, (s) => s.declarationProvider);
    o.set(capabilities.textDocumentTypeDefinition, (s) => s.typeDefinitionProvider);
    o.set(capabilities.textDocumentImplementation, (s) => s.implementationProvider);
    o.set(capabilities.textDocumentDocumentColor, (s) => s.colorProvider);
    o.set(capabilities.textDocumentSelectionRange, (s) => s.selectionRangeProvider);
    o.set(capabilities.textDocumentLinkedEditingRange, (s) => s.linkedEditingRangeProvider);
    o.set(capabilities.textDocumentPrepareCallHierarchy, (s) => s.callHierarchyProvider);
    o.set(capabilities.textDocumentSemanticTokensFull, (s) => s.semanticTokensProvider);
    o.set(capabilities.textDocumentInlayHint, (s) => s.inlayHintProvider);
    o.set(capabilities.textDocumentInlineValue, (s) => s.inlineValueProvider);
    o.set(capabilities.textDocumentDiagnostic, (s) => s.diagnosticProvider);
    o.set(capabilities.textDocumentMoniker, (s) => s.monikerProvider);
    o.set(capabilities.textDocumentPrepareTypeHierarchy, (s) => s.typeHierarchyProvider);
    o.set(capabilities.workspaceSymbol, (s) => s.workspaceSymbolProvider);
    o.set(capabilities.workspaceExecuteCommand, (s) => s.executeCommandProvider);
    return o;
  }
  set(capability, getOptionsFromStatic) {
    if (this._mappings.has(capability.method)) throw new Error(`Capability for method ${capability.method} already registered`);
    this._mappings.set(capability.method, getOptionsFromStatic);
  }
  getOptions(capability, serverCapabilities) {
    const getter = this._mappings.get(capability.method);
    if (!getter) return;
    return getter(serverCapabilities);
  }
};
function deepAssign(target, source) {
  for (const key of Object.keys(source)) {
    const srcValue = source[key];
    if (srcValue === void 0) continue;
    const tgtValue = target[key];
    if (tgtValue === void 0) {
      target[key] = srcValue;
      continue;
    }
    if (typeof srcValue !== "object" || srcValue === null) {
      target[key] = srcValue;
      continue;
    }
    if (typeof tgtValue !== "object" || tgtValue === null) {
      target[key] = srcValue;
      continue;
    }
    deepAssign(tgtValue, srcValue);
  }
}
var TextDocumentSynchronizer = class extends Disposable {
  constructor(_server, _capabilities) {
    super();
    __publicField(this, "_managedModels", /* @__PURE__ */ new Map());
    __publicField(this, "_managedModelsReverse", /* @__PURE__ */ new Map());
    __publicField(this, "_started", false);
    this._server = _server;
    this._capabilities = _capabilities;
    this._register(this._capabilities.addStaticClientCapabilities({ textDocument: { synchronization: {
      dynamicRegistration: true,
      willSave: false,
      willSaveWaitUntil: false,
      didSave: false
    } } }));
    this._register(_capabilities.registerCapabilityHandler(capabilities.textDocumentDidChange, true, (e) => {
      if (this._started) return { dispose: () => {
      } };
      this._started = true;
      this._register(editor.onDidCreateModel((m) => {
        this._getOrCreateManagedModel(m);
      }));
      for (const m of editor.getModels()) this._getOrCreateManagedModel(m);
      return { dispose: () => {
      } };
    }));
  }
  _getOrCreateManagedModel(m) {
    if (!this._started) throw new Error("Not started");
    const uriStr = m.uri.toString(true).toLowerCase();
    let mm = this._managedModels.get(m);
    if (!mm) {
      mm = new ManagedModel(m, this._server);
      this._managedModels.set(m, mm);
      this._managedModelsReverse.set(uriStr, m);
    }
    m.onWillDispose(() => {
      mm.dispose();
      this._managedModels.delete(m);
      this._managedModelsReverse.delete(uriStr);
    });
    return mm;
  }
  translateBack(textDocument, position) {
    const uri = textDocument.uri.toLowerCase();
    const textModel = this._managedModelsReverse.get(uri);
    if (!textModel) throw new Error(`No text model for uri ${uri}`);
    return {
      textModel,
      position: new Position(position.line + 1, position.character + 1)
    };
  }
  translateBackRange(textDocument, range) {
    const uri = textDocument.uri.toLowerCase();
    const textModel = this._managedModelsReverse.get(uri);
    if (!textModel) throw new Error(`No text model for uri ${uri}`);
    return {
      textModel,
      range: new Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1)
    };
  }
  translate(textModel, monacoPos) {
    return {
      textDocument: { uri: textModel.uri.toString(true) },
      position: {
        line: monacoPos.lineNumber - 1,
        character: monacoPos.column - 1
      }
    };
  }
  translateRange(textModel, monacoRange) {
    return {
      start: {
        line: monacoRange.startLineNumber - 1,
        character: monacoRange.startColumn - 1
      },
      end: {
        line: monacoRange.endLineNumber - 1,
        character: monacoRange.endColumn - 1
      }
    };
  }
};
var ManagedModel = class extends Disposable {
  constructor(_textModel, _api) {
    super();
    this._textModel = _textModel;
    this._api = _api;
    const uri = _textModel.uri.toString(true).toLowerCase();
    this._api.textDocumentDidOpen({ textDocument: {
      languageId: _textModel.getLanguageId(),
      uri,
      version: _textModel.getVersionId(),
      text: _textModel.getValue()
    } });
    this._register(_textModel.onDidChangeContent((e) => {
      const contentChanges = e.changes.map((c) => toLspTextDocumentContentChangeEvent(c));
      this._api.textDocumentDidChange({
        textDocument: {
          uri,
          version: _textModel.getVersionId()
        },
        contentChanges
      });
    }));
    this._register({ dispose: () => {
      this._api.textDocumentDidClose({ textDocument: { uri } });
    } });
  }
};
function toLspTextDocumentContentChangeEvent(change) {
  return {
    range: toLspRange(change.range),
    rangeLength: change.rangeLength,
    text: change.text
  };
}
function toLspRange(range) {
  return {
    start: {
      line: range.startLineNumber - 1,
      character: range.startColumn - 1
    },
    end: {
      line: range.endLineNumber - 1,
      character: range.endColumn - 1
    }
  };
}
var MonacoLspClient = class {
  constructor(transport) {
    __publicField(this, "_connection");
    __publicField(this, "_capabilitiesRegistry");
    __publicField(this, "_bridge");
    __publicField(this, "_initPromise");
    const c = TypedChannel.fromTransport(transport);
    const s = api.getServer(c, {});
    c.startListen();
    this._capabilitiesRegistry = new LspCapabilitiesRegistry(c);
    this._bridge = new TextDocumentSynchronizer(s.server, this._capabilitiesRegistry);
    this._connection = new LspConnection(s.server, this._bridge, this._capabilitiesRegistry, c);
    this.createFeatures();
    this._initPromise = this._init();
  }
  async _init() {
    const result = await this._connection.server.initialize({
      processId: null,
      capabilities: this._capabilitiesRegistry.getClientCapabilities(),
      rootUri: null
    });
    this._connection.server.initialized({});
    this._capabilitiesRegistry.setServerCapabilities(result.capabilities);
  }
  createFeatures() {
    const store = new DisposableStore();
    store.add(new LspCompletionFeature(this._connection));
    store.add(new LspHoverFeature(this._connection));
    store.add(new LspSignatureHelpFeature(this._connection));
    store.add(new LspDefinitionFeature(this._connection));
    store.add(new LspDeclarationFeature(this._connection));
    store.add(new LspTypeDefinitionFeature(this._connection));
    store.add(new LspImplementationFeature(this._connection));
    store.add(new LspReferencesFeature(this._connection));
    store.add(new LspDocumentHighlightFeature(this._connection));
    store.add(new LspDocumentSymbolFeature(this._connection));
    store.add(new LspRenameFeature(this._connection));
    store.add(new LspCodeActionFeature(this._connection));
    store.add(new LspCodeLensFeature(this._connection));
    store.add(new LspDocumentLinkFeature(this._connection));
    store.add(new LspFormattingFeature(this._connection));
    store.add(new LspRangeFormattingFeature(this._connection));
    store.add(new LspOnTypeFormattingFeature(this._connection));
    store.add(new LspFoldingRangeFeature(this._connection));
    store.add(new LspSelectionRangeFeature(this._connection));
    store.add(new LspInlayHintsFeature(this._connection));
    store.add(new LspSemanticTokensFeature(this._connection));
    store.add(new LspDiagnosticsFeature(this._connection));
    return store;
  }
};
var ws = null;
if (typeof WebSocket !== "undefined") ws = WebSocket;
else if (typeof MozWebSocket !== "undefined") ws = MozWebSocket;
else if (typeof global !== "undefined") ws = global.WebSocket || global.MozWebSocket;
else if (typeof window !== "undefined") ws = window.WebSocket || window.MozWebSocket;
else if (typeof self !== "undefined") ws = self.WebSocket || self.MozWebSocket;
var browser_default = ws;
function normalizeWebSocketOptions(options) {
  if ("host" in options) return { address: `${options.forceTls ? "wss" : "ws"}://${options.host}:${options.port}` };
  else return options;
}
var WebSocketTransport = class WebSocketTransport2 extends BaseMessageTransport {
  constructor(socket) {
    super();
    __publicField(this, "socket");
    __publicField(this, "errorEmitter", new EventEmitter());
    __publicField(this, "onError", this.errorEmitter);
    this.socket = socket;
    socket.onmessage = (msg) => {
      try {
        const data = msg.data;
        if (typeof data === "string") {
          const json = JSON.parse(data);
          this._dispatchReceivedMessage(json);
        } else throw new Error("Not supported");
      } catch (error) {
        this.errorEmitter.fire({ error });
      }
    };
    socket.onclose = (_event) => {
      this._onConnectionClosed();
    };
  }
  static connectTo(options) {
    const ws$1 = new browser_default(normalizeWebSocketOptions(options).address);
    return new Promise((res, rej) => {
      ws$1.onerror = (err) => {
        rej(err);
      };
      ws$1.onopen = () => {
        res(new WebSocketTransport2(ws$1));
      };
    });
  }
  static fromWebSocket(socket) {
    return new WebSocketTransport2(socket);
  }
  /**
  * Closes the underlying socket.
  */
  close() {
    this.socket.close();
  }
  /**
  * Same as `close`.
  */
  dispose() {
    this.close();
  }
  _sendImpl(message) {
    const str = JSON.stringify(message);
    return new Promise((res, rej) => {
      this.socket.send(str, (err) => {
        if (err) rej(err);
        else res();
      });
    });
  }
  toString() {
    return `${this.id}@${this.socket.url}`;
  }
};
var WindowLikeTransport = class extends BaseMessageTransport {
  constructor(_windowLike, _source = void 0, _loadingState = void 0) {
    super();
    __publicField(this, "_windowLike");
    __publicField(this, "_source");
    __publicField(this, "_loadingState");
    __publicField(this, "_disposed", false);
    __publicField(this, "_messageHandler", ({ data, source }) => {
      if (this._source && source !== this._source) return;
      if (typeof data === "object" && data) this._dispatchReceivedMessage(data);
    });
    this._windowLike = _windowLike;
    this._source = _source;
    this._loadingState = _loadingState;
    this._windowLike.addEventListener("message", this._messageHandler);
  }
  async _sendImpl(message) {
    if (this._disposed) throw new Error("Transport is disposed");
    if (this._loadingState && !this._loadingState.loaded) await this._loadingState.onLoaded;
    this._windowLike.postMessage(message);
  }
  toString() {
    return `${this.id}@${this._windowLike}`;
  }
  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    this._windowLike.removeEventListener("message", this._messageHandler);
  }
};
function createTransportToWorker(worker) {
  if (typeof window === "undefined") throw new Error(`call this function from the main browser thread`);
  return new WindowLikeTransport(worker);
}
function createTransportToIFrame(iframe) {
  if (typeof window === "undefined") throw new Error(`call this function from the main browser thread`);
  return new WindowLikeTransport(iframe.contentWindow, iframe.contentWindow, {
    loaded: window.document.readyState === "complete",
    onLoaded: new Promise((res) => {
      window.addEventListener("load", () => res());
    })
  });
}

export { MonacoLspClient, WebSocketTransport, createTransportToIFrame, createTransportToWorker };
