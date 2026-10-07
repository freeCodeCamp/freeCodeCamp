const require_chunk = require('./chunk-CbDLau6x.cjs');
const require_fetchUtils = require('./fetchUtils-umV5xXBy.cjs');
let _open_draft_deferred_promise = require("@open-draft/deferred-promise");
let _open_draft_until = require("@open-draft/until");

//#region src/utils/isPropertyAccessible.ts
/**
* A function that validates if property access is possible on an object
* without throwing. It returns `true` if the property access is possible
* and `false` otherwise.
*
* Environments like miniflare will throw on property access on certain objects
* like Request and Response, for unimplemented properties.
*/
function isPropertyAccessible(obj, key) {
	try {
		obj[key];
		return true;
	} catch {
		return false;
	}
}

//#endregion
//#region src/utils/emitAsync.ts
/**
* Emits an event on the given emitter but executes
* the listeners sequentially. This accounts for asynchronous
* listeners (e.g. those having "sleep" and handling the request).
*/
async function emitAsync(emitter, eventName, ...data) {
	const listeners = emitter.listeners(eventName);
	if (listeners.length === 0) return;
	for (const listener of listeners) await listener.apply(emitter, data);
}

//#endregion
//#region src/utils/isObject.ts
/**
* Determines if a given value is an instance of object.
*/
function isObject(value, loose = false) {
	return loose ? Object.prototype.toString.call(value).startsWith("[object ") : Object.prototype.toString.call(value) === "[object Object]";
}

//#endregion
//#region src/utils/responseUtils.ts
/**
* Creates a generic 500 Unhandled Exception response.
*/
function createServerErrorResponse(body) {
	return new Response(JSON.stringify(body instanceof Error ? {
		name: body.name,
		message: body.message,
		stack: body.stack
	} : body), {
		status: 500,
		statusText: "Unhandled Exception",
		headers: { "Content-Type": "application/json" }
	});
}
/**
* Check if the given response is a `Response.error()`.
*
* @note Some environments, like Miniflare (Cloudflare) do not
* implement the "Response.type" property and throw on its access.
* Safely check if we can access "type" on "Response" before continuing.
* @see https://github.com/mswjs/msw/issues/1834
*/
function isResponseError(response) {
	return response != null && response instanceof Response && isPropertyAccessible(response, "type") && response.type === "error";
}
/**
* Check if the given value is a `Response` or a Response-like object.
* This is different from `value instanceof Response` because it supports
* custom `Response` constructors, like the one when using Undici directly.
*/
function isResponseLike(value) {
	return isObject(value, true) && isPropertyAccessible(value, "status") && isPropertyAccessible(value, "statusText") && isPropertyAccessible(value, "bodyUsed");
}

//#endregion
//#region src/utils/isNodeLikeError.ts
function isNodeLikeError(error) {
	if (error == null) return false;
	if (!(error instanceof Error)) return false;
	return "code" in error && "errno" in error;
}

//#endregion
//#region src/utils/handleRequest.ts
async function handleRequest(options) {
	const handleResponse = async (response) => {
		if (response instanceof Error) {
			await options.controller.errorWith(response);
			return true;
		}
		if (isResponseError(response)) {
			await options.controller.respondWith(response);
			return true;
		}
		/**
		* Handle normal responses or response-like objects.
		* @note This must come before the arbitrary object check
		* since Response instances are, in fact, objects.
		*/
		if (isResponseLike(response)) {
			await options.controller.respondWith(response);
			return true;
		}
		if (isObject(response)) {
			await options.controller.errorWith(response);
			return true;
		}
		return false;
	};
	const handleResponseError = async (error) => {
		if (error instanceof require_fetchUtils.InterceptorError) throw result.error;
		if (isNodeLikeError(error)) {
			await options.controller.errorWith(error);
			return true;
		}
		if (error instanceof Response) return await handleResponse(error);
		return false;
	};
	const requestAbortPromise = new _open_draft_deferred_promise.DeferredPromise();
	/**
	* @note `signal` is not always defined in React Native.
	*/
	if (options.request.signal) {
		if (options.request.signal.aborted) {
			await options.controller.errorWith(options.request.signal.reason);
			return;
		}
		options.request.signal.addEventListener("abort", () => {
			requestAbortPromise.reject(options.request.signal.reason);
		}, { once: true });
	}
	const result = await (0, _open_draft_until.until)(async () => {
		const requestListenersPromise = emitAsync(options.emitter, "request", {
			requestId: options.requestId,
			request: options.request,
			controller: options.controller
		});
		await Promise.race([
			requestAbortPromise,
			requestListenersPromise,
			options.controller.handled
		]);
	});
	if (requestAbortPromise.state === "rejected") {
		await options.controller.errorWith(requestAbortPromise.rejectionReason);
		return;
	}
	if (result.error) {
		if (await handleResponseError(result.error)) return;
		if (options.emitter.listenerCount("unhandledException") > 0) {
			const unhandledExceptionController = new require_fetchUtils.RequestController(options.request, {
				passthrough() {},
				async respondWith(response) {
					await handleResponse(response);
				},
				async errorWith(reason) {
					/**
					* @note Handle the result of the unhandled controller
					* in the same way as the original request controller.
					* The exception here is that thrown errors within the
					* "unhandledException" event do NOT result in another
					* emit of the same event. They are forwarded as-is.
					*/
					await options.controller.errorWith(reason);
				}
			});
			await emitAsync(options.emitter, "unhandledException", {
				error: result.error,
				request: options.request,
				requestId: options.requestId,
				controller: unhandledExceptionController
			});
			if (unhandledExceptionController.readyState !== require_fetchUtils.RequestController.PENDING) return;
		}
		await options.controller.respondWith(createServerErrorResponse(result.error));
		return;
	}
	if (options.controller.readyState === require_fetchUtils.RequestController.PENDING) return await options.controller.passthrough();
	return options.controller.handled;
}

//#endregion
Object.defineProperty(exports, 'emitAsync', {
  enumerable: true,
  get: function () {
    return emitAsync;
  }
});
Object.defineProperty(exports, 'handleRequest', {
  enumerable: true,
  get: function () {
    return handleRequest;
  }
});
Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function () {
    return isObject;
  }
});
Object.defineProperty(exports, 'isPropertyAccessible', {
  enumerable: true,
  get: function () {
    return isPropertyAccessible;
  }
});
Object.defineProperty(exports, 'isResponseError', {
  enumerable: true,
  get: function () {
    return isResponseError;
  }
});
//# sourceMappingURL=handleRequest-DVOthWJo.cjs.map