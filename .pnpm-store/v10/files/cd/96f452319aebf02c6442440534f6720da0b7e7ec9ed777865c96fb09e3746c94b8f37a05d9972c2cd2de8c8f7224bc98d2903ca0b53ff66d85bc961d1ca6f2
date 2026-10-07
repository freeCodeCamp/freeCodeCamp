let _open_draft_logger = require("@open-draft/logger");
let strict_event_emitter = require("strict-event-emitter");

//#region src/Interceptor.ts
/**
* Request header name to detect when a single request
* is being handled by nested interceptors (XHR -> ClientRequest).
* Obscure by design to prevent collisions with user-defined headers.
* Ideally, come up with the Interceptor-level mechanism for this.
* @see https://github.com/mswjs/interceptors/issues/378
*/
const INTERNAL_REQUEST_ID_HEADER_NAME = "x-interceptors-internal-request-id";
function getGlobalSymbol(symbol) {
	return globalThis[symbol] || void 0;
}
function setGlobalSymbol(symbol, value) {
	globalThis[symbol] = value;
}
function deleteGlobalSymbol(symbol) {
	delete globalThis[symbol];
}
let InterceptorReadyState = /* @__PURE__ */ function(InterceptorReadyState$1) {
	InterceptorReadyState$1["INACTIVE"] = "INACTIVE";
	InterceptorReadyState$1["APPLYING"] = "APPLYING";
	InterceptorReadyState$1["APPLIED"] = "APPLIED";
	InterceptorReadyState$1["DISPOSING"] = "DISPOSING";
	InterceptorReadyState$1["DISPOSED"] = "DISPOSED";
	return InterceptorReadyState$1;
}({});
var Interceptor = class {
	constructor(symbol) {
		this.symbol = symbol;
		this.readyState = InterceptorReadyState.INACTIVE;
		this.emitter = new strict_event_emitter.Emitter();
		this.subscriptions = [];
		this.logger = new _open_draft_logger.Logger(symbol.description);
		this.emitter.setMaxListeners(0);
		this.logger.info("constructing the interceptor...");
	}
	/**
	* Determine if this interceptor can be applied
	* in the current environment.
	*/
	checkEnvironment() {
		return true;
	}
	/**
	* Apply this interceptor to the current process.
	* Returns an already running interceptor instance if it's present.
	*/
	apply() {
		const logger = this.logger.extend("apply");
		logger.info("applying the interceptor...");
		if (this.readyState === InterceptorReadyState.APPLIED) {
			logger.info("intercepted already applied!");
			return;
		}
		if (!this.checkEnvironment()) {
			logger.info("the interceptor cannot be applied in this environment!");
			return;
		}
		this.readyState = InterceptorReadyState.APPLYING;
		const runningInstance = this.getInstance();
		if (runningInstance) {
			logger.info("found a running instance, reusing...");
			this.on = (event, listener) => {
				logger.info("proxying the \"%s\" listener", event);
				runningInstance.emitter.addListener(event, listener);
				this.subscriptions.push(() => {
					runningInstance.emitter.removeListener(event, listener);
					logger.info("removed proxied \"%s\" listener!", event);
				});
				return this;
			};
			this.readyState = InterceptorReadyState.APPLIED;
			return;
		}
		logger.info("no running instance found, setting up a new instance...");
		this.setup();
		this.setInstance();
		this.readyState = InterceptorReadyState.APPLIED;
	}
	/**
	* Setup the module augments and stubs necessary for this interceptor.
	* This method is not run if there's a running interceptor instance
	* to prevent instantiating an interceptor multiple times.
	*/
	setup() {}
	/**
	* Listen to the interceptor's public events.
	*/
	on(event, listener) {
		const logger = this.logger.extend("on");
		if (this.readyState === InterceptorReadyState.DISPOSING || this.readyState === InterceptorReadyState.DISPOSED) {
			logger.info("cannot listen to events, already disposed!");
			return this;
		}
		logger.info("adding \"%s\" event listener:", event, listener);
		this.emitter.on(event, listener);
		return this;
	}
	once(event, listener) {
		this.emitter.once(event, listener);
		return this;
	}
	off(event, listener) {
		this.emitter.off(event, listener);
		return this;
	}
	removeAllListeners(event) {
		this.emitter.removeAllListeners(event);
		return this;
	}
	/**
	* Disposes of any side-effects this interceptor has introduced.
	*/
	dispose() {
		const logger = this.logger.extend("dispose");
		if (this.readyState === InterceptorReadyState.DISPOSED) {
			logger.info("cannot dispose, already disposed!");
			return;
		}
		logger.info("disposing the interceptor...");
		this.readyState = InterceptorReadyState.DISPOSING;
		if (!this.getInstance()) {
			logger.info("no interceptors running, skipping dispose...");
			return;
		}
		this.clearInstance();
		logger.info("global symbol deleted:", getGlobalSymbol(this.symbol));
		if (this.subscriptions.length > 0) {
			logger.info("disposing of %d subscriptions...", this.subscriptions.length);
			for (const dispose of this.subscriptions) dispose();
			this.subscriptions = [];
			logger.info("disposed of all subscriptions!", this.subscriptions.length);
		}
		this.emitter.removeAllListeners();
		logger.info("destroyed the listener!");
		this.readyState = InterceptorReadyState.DISPOSED;
	}
	getInstance() {
		const instance = getGlobalSymbol(this.symbol);
		this.logger.info("retrieved global instance:", instance?.constructor?.name);
		return instance;
	}
	setInstance() {
		setGlobalSymbol(this.symbol, this);
		this.logger.info("set global instance!", this.symbol.description);
	}
	clearInstance() {
		deleteGlobalSymbol(this.symbol);
		this.logger.info("cleared global instance!", this.symbol.description);
	}
};

//#endregion
//#region src/createRequestId.ts
/**
* Generate a random ID string to represent a request.
* @example
* createRequestId()
* // "f774b6c9c600f"
*/
function createRequestId() {
	return Math.random().toString(16).slice(2);
}

//#endregion
Object.defineProperty(exports, 'INTERNAL_REQUEST_ID_HEADER_NAME', {
  enumerable: true,
  get: function () {
    return INTERNAL_REQUEST_ID_HEADER_NAME;
  }
});
Object.defineProperty(exports, 'Interceptor', {
  enumerable: true,
  get: function () {
    return Interceptor;
  }
});
Object.defineProperty(exports, 'InterceptorReadyState', {
  enumerable: true,
  get: function () {
    return InterceptorReadyState;
  }
});
Object.defineProperty(exports, 'createRequestId', {
  enumerable: true,
  get: function () {
    return createRequestId;
  }
});
Object.defineProperty(exports, 'deleteGlobalSymbol', {
  enumerable: true,
  get: function () {
    return deleteGlobalSymbol;
  }
});
Object.defineProperty(exports, 'getGlobalSymbol', {
  enumerable: true,
  get: function () {
    return getGlobalSymbol;
  }
});
//# sourceMappingURL=createRequestId-DOf8Ktjs.cjs.map