import { a as RequestController, c as Interceptor, n as FetchResponse, t as FetchRequest } from "./fetchUtils-BKJ1XmiO.mjs";
import { t as BatchInterceptor } from "./BatchInterceptor-DdMNfSUY.mjs";
import "./bufferUtils-DxPxwff_.mjs";
import { t as ClientRequestInterceptor } from "./ClientRequest-dRpI9v1o.mjs";
import { n as isResponseError, t as handleRequest } from "./handleRequest-DCLzePtS.mjs";
import "./node-lsdNwZEW.mjs";
import { t as XMLHttpRequestInterceptor } from "./XMLHttpRequest-BgkpwNOu.mjs";
import "./hasConfigurableGlobal-Cwrs35Xo.mjs";
import { t as FetchInterceptor } from "./fetch-BciBtVqm.mjs";

//#region src/RemoteHttpInterceptor.ts
var RemoteHttpInterceptor = class extends BatchInterceptor {
	constructor() {
		super({
			name: "remote-interceptor",
			interceptors: [
				new ClientRequestInterceptor(),
				new XMLHttpRequestInterceptor(),
				new FetchInterceptor()
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
						const mockedResponse = new FetchResponse(responseInit.body, {
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
var RemoteHttpResolver = class RemoteHttpResolver extends Interceptor {
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
			const request = new FetchRequest(requestJson.url, {
				method: requestJson.method,
				headers: new Headers(requestJson.headers),
				credentials: requestJson.credentials,
				body: requestJson.body
			});
			const controller = new RequestController(request, {
				passthrough: () => {},
				respondWith: async (response) => {
					if (isResponseError(response)) {
						this.logger.info("received a network error!", { response });
						throw new Error("Not implemented");
					}
					this.logger.info("received mocked response!", { response });
					const responseClone = FetchResponse.clone(response);
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
			await handleRequest({
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
export { RemoteHttpInterceptor, RemoteHttpResolver, requestReviver };
//# sourceMappingURL=RemoteHttpInterceptor.mjs.map