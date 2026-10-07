export { M as ModuleMocker, c as createCompilerHints } from './chunk-mocker.js';
import { M as MockerRegistry } from './chunk-registry.js';
import { c as createManualModuleSource, a as cleanUrl } from './chunk-utils.js';
export { M as ModuleMockerServerInterceptor } from './chunk-interceptor-native.js';
import './index.js';
import './chunk-pathe.M-eThtNZ.js';

class ModuleMockerMSWInterceptor {
	mocks = new MockerRegistry();
	startPromise;
	worker;
	constructor(options = {}) {
		this.options = options;
		if (!options.globalThisAccessor) {
			options.globalThisAccessor = "\"__vitest_mocker__\"";
		}
	}
	async register(module) {
		await this.init();
		this.mocks.add(module);
	}
	async delete(url) {
		await this.init();
		this.mocks.delete(url);
	}
	async invalidate() {
		this.mocks.clear();
	}
	async resolveManualMock(mock) {
		const exports = Object.keys(await mock.resolve());
		const text = createManualModuleSource(mock.url, exports, this.options.globalThisAccessor);
		return new Response(text, { headers: { "Content-Type": "application/javascript" } });
	}
	async init() {
		if (this.worker) {
			return this.worker;
		}
		if (this.startPromise) {
			return this.startPromise;
		}
		const worker = this.options.mswWorker;
		this.startPromise = Promise.all([worker ? { setupWorker(handler) {
			worker.use(handler);
			return worker;
		} } : import('msw/browser'), import('msw/core/http')]).then(([{ setupWorker }, { http }]) => {
			const worker = setupWorker(http.get(/.+/, async ({ request }) => {
				const path = cleanQuery(request.url.slice(location.origin.length));
				if (!this.mocks.has(path)) {
					return passthrough();
				}
				const mock = this.mocks.get(path);
				switch (mock.type) {
					case "manual": return this.resolveManualMock(mock);
					case "automock":
					case "autospy": return Response.redirect(injectQuery(path, `mock=${mock.type}`));
					case "redirect": return Response.redirect(mock.redirect);
					default: throw new Error(`Unknown mock type: ${mock.type}`);
				}
			}));
			return worker.start(this.options.mswOptions).then(() => worker);
		}).finally(() => {
			this.worker = worker;
			this.startPromise = undefined;
		});
		return await this.startPromise;
	}
}
const trailingSeparatorRE = /[?&]$/;
const timestampRE = /\bt=\d{13}&?\b/;
const versionRE = /\bv=\w{8}&?\b/;
function cleanQuery(url) {
	return url.replace(timestampRE, "").replace(versionRE, "").replace(trailingSeparatorRE, "");
}
function passthrough() {
	return new Response(null, {
		status: 302,
		statusText: "Passthrough",
		headers: { "x-msw-intention": "passthrough" }
	});
}
const replacePercentageRE = /%/g;
function injectQuery(url, queryToInject) {
	// encode percents for consistent behavior with pathToFileURL
	// see #2614 for details
	const resolvedUrl = new URL(url.replace(replacePercentageRE, "%25"), location.href);
	const { search, hash } = resolvedUrl;
	const pathname = cleanUrl(url);
	return `${pathname}?${queryToInject}${search ? `&${search.slice(1)}` : ""}${hash ?? ""}`;
}

export { ModuleMockerMSWInterceptor };
