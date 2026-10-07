const require_fetchUtils = require('./fetchUtils-umV5xXBy.cjs');
const require_BatchInterceptor = require('./BatchInterceptor-Z1lwK23r.cjs');
require('./bufferUtils-S5_-2eN4.cjs');
const require_ClientRequest = require('./ClientRequest-DFs7FPNi.cjs');
const require_handleRequest = require('./handleRequest-DVOthWJo.cjs');
require('./node-DIKcnzhK.cjs');
const require_XMLHttpRequest = require('./XMLHttpRequest-CUbLHiq6.cjs');
require('./hasConfigurableGlobal-BtHi5OlL.cjs');
const require_fetch = require('./fetch-znfXVEPe.cjs');

//#region src/RemoteHttpInterceptor.ts
var RemoteHttpInterceptor = class extends require_BatchInterceptor.BatchInterceptor {
	constructor() {
		super({
			name: "remote-interceptor",
			interceptors: [
				new require_ClientRequest.ClientRequestInterceptor(),
				new require_XMLHttpRequest.XMLHttpRequestInterceptor(),
				new require_fetch.FetchInterceptor()
			]
		});
	}
	setup() {
		super.setup();
		let handleParentMessage;
		this.on("request", async ({ request, requestId, controller }) => {
			const serializedRequest = JSON.stringify({
				id: requestId,
				method: request.method,
				url: request.url,
				headers: Array.from(request.headers.entries()),
				credentials: request.credentials,
				body: ["GET", "HEAD"].includes(request.method) ? null : await request.text()
			});
			this.logger.info("sent serialized request to the child:", serializedRequest);
			process.send?.(`request:${serializedRequest}`);
			const responsePromise = new Promise((resolve) => {
				handleParentMessage = (message) => {
					if (typeof message !== "string") return resolve();
					if (message.startsWith(`response:${requestId}`)) {
						const [, serializedResponse] = message.match(/^response:.+?:(.+)$/) || [];
						if (!serializedResponse) return resolve();
						const responseInit = JSON.parse(serializedResponse);
						const mockedResponse = new require_fetchUtils.FetchResponse(responseInit.body, {
							url: request.url,
							status: responseInit.status,
							statusText: responseInit.statusText,
							headers: responseInit.headers
						});
						/**
						* @todo Support "errorWith" as well.
						* This response handling from the child is incomplete.
						*/
						controller.respondWith(mockedResponse);
						return resolve();
					}
				};
			});
			this.logger.info("add \"message\" listener to the parent process", handleParentMessage);
			process.addListener("message", handleParentMessage);
			return responsePromise;
		});
		this.subscriptions.push(() => {
			process.removeListener("message", handleParentMessage);
		});
	}
};
function requestReviver(key, value) {
	switch (key) {
		case "url": return new URL(value);
		case "headers": return new Headers(value);
		default: return value;
	}
}
var RemoteHttpResolver = class RemoteHttpResolver extends require_fetchUtils.Interceptor {
	static {
		this.symbol = Symbol("remote-resolver");
	}
	constructor(options) {
		super(RemoteHttpResolver.symbol);
		this.process = options.process;
	}
	setup() {
		const logger = this.logger.extend("setup");
		const handleChildMessage = async (message) => {
			logger.info("received message from child!", message);
			if (typeof message !== "string" || !message.startsWith("request:")) {
				logger.info("unknown message, ignoring...");
				return;
			}
			const [, serializedRequest] = message.match(/^request:(.+)$/) || [];
			if (!serializedRequest) return;
			const requestJson = JSON.parse(serializedRequest, requestReviver);
			logger.info("parsed intercepted request", requestJson);
			const request = new require_fetchUtils.FetchRequest(requestJson.url, {
				method: requestJson.method,
				headers: new Headers(requestJson.headers),
				credentials: requestJson.credentials,
				body: requestJson.body
			});
			const controller = new require_fetchUtils.RequestController(request, {
				passthrough: () => {},
				respondWith: async (response) => {
					if (require_handleRequest.isResponseError(response)) {
						this.logger.info("received a network error!", { response });
						throw new Error("Not implemented");
					}
					this.logger.info("received mocked response!", { response });
					const responseClone = require_fetchUtils.FetchResponse.clone(response);
					const responseText = await responseClone.text();
					const serializedResponse = JSON.stringify({
						status: response.status,
						statusText: response.statusText,
						headers: Array.from(response.headers.entries()),
						body: responseText
					});
					this.process.send(`response:${requestJson.id}:${serializedResponse}`, (error) => {
						if (error) return;
						this.emitter.emit("response", {
							request,
							requestId: requestJson.id,
							response: responseClone,
							isMockedResponse: true
						});
					});
					logger.info("sent serialized mocked response to the parent:", serializedResponse);
				},
				errorWith: (reason) => {
					this.logger.info("request has errored!", { error: reason });
					throw new Error("Not implemented");
				}
			});
			await require_handleRequest.handleRequest({
				request,
				requestId: requestJson.id,
				controller,
				emitter: this.emitter
			});
		};
		this.subscriptions.push(() => {
			this.process.removeListener("message", handleChildMessage);
			logger.info("removed the \"message\" listener from the child process!");
		});
		logger.info("adding a \"message\" listener to the child process");
		this.process.addListener("message", handleChildMessage);
		this.process.once("error", () => this.dispose());
		this.process.once("exit", () => this.dispose());
	}
};

//#endregion
exports.RemoteHttpInterceptor = RemoteHttpInterceptor;
exports.RemoteHttpResolver = RemoteHttpResolver;
exports.requestReviver = requestReviver;
//# sourceMappingURL=RemoteHttpInterceptor.cjs.map