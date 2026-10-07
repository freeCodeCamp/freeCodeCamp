class MockerRegistry {
	registryByUrl = new Map();
	registryById = new Map();
	clear() {
		this.registryByUrl.clear();
		this.registryById.clear();
	}
	keys() {
		return this.registryByUrl.keys();
	}
	add(mock) {
		this.registryByUrl.set(mock.url, mock);
		this.registryById.set(mock.id, mock);
	}
	register(typeOrEvent, raw, id, url, factoryOrRedirect) {
		const type = typeof typeOrEvent === "object" ? typeOrEvent.type : typeOrEvent;
		if (typeof typeOrEvent === "object") {
			const event = typeOrEvent;
			if (event instanceof AutomockedModule || event instanceof AutospiedModule || event instanceof ManualMockedModule || event instanceof RedirectedModule) {
				throw new TypeError(`[vitest] Cannot register a mock that is already defined. ` + `Expected a JSON representation from \`MockedModule.toJSON\`, instead got "${event.type}". ` + `Use "registry.add()" to update a mock instead.`);
			}
			if (event.type === "automock") {
				const module = AutomockedModule.fromJSON(event);
				this.add(module);
				return module;
			} else if (event.type === "autospy") {
				const module = AutospiedModule.fromJSON(event);
				this.add(module);
				return module;
			} else if (event.type === "redirect") {
				const module = RedirectedModule.fromJSON(event);
				this.add(module);
				return module;
			} else if (event.type === "manual") {
				throw new Error(`Cannot set serialized manual mock. Define a factory function manually with \`ManualMockedModule.fromJSON()\`.`);
			} else {
				throw new Error(`Unknown mock type: ${event.type}`);
			}
		}
		if (typeof raw !== "string") {
			throw new TypeError("[vitest] Mocks require a raw string.");
		}
		if (typeof url !== "string") {
			throw new TypeError("[vitest] Mocks require a url string.");
		}
		if (typeof id !== "string") {
			throw new TypeError("[vitest] Mocks require an id string.");
		}
		if (type === "manual") {
			if (typeof factoryOrRedirect !== "function") {
				throw new TypeError("[vitest] Manual mocks require a factory function.");
			}
			const mock = new ManualMockedModule(raw, id, url, factoryOrRedirect);
			this.add(mock);
			return mock;
		} else if (type === "automock" || type === "autospy") {
			const mock = type === "automock" ? new AutomockedModule(raw, id, url) : new AutospiedModule(raw, id, url);
			this.add(mock);
			return mock;
		} else if (type === "redirect") {
			if (typeof factoryOrRedirect !== "string") {
				throw new TypeError("[vitest] Redirect mocks require a redirect string.");
			}
			const mock = new RedirectedModule(raw, id, url, factoryOrRedirect);
			this.add(mock);
			return mock;
		} else {
			throw new Error(`[vitest] Unknown mock type: ${type}`);
		}
	}
	delete(id) {
		this.registryByUrl.delete(id);
	}
	get(id) {
		return this.registryByUrl.get(id);
	}
	getById(id) {
		return this.registryById.get(id);
	}
	has(id) {
		return this.registryByUrl.has(id);
	}
}
class AutomockedModule {
	type = "automock";
	constructor(raw, id, url) {
		this.raw = raw;
		this.id = id;
		this.url = url;
	}
	static fromJSON(data) {
		return new AutospiedModule(data.raw, data.id, data.url);
	}
	toJSON() {
		return {
			type: this.type,
			url: this.url,
			raw: this.raw,
			id: this.id
		};
	}
}
class AutospiedModule {
	type = "autospy";
	constructor(raw, id, url) {
		this.raw = raw;
		this.id = id;
		this.url = url;
	}
	static fromJSON(data) {
		return new AutospiedModule(data.raw, data.id, data.url);
	}
	toJSON() {
		return {
			type: this.type,
			url: this.url,
			id: this.id,
			raw: this.raw
		};
	}
}
class RedirectedModule {
	type = "redirect";
	constructor(raw, id, url, redirect) {
		this.raw = raw;
		this.id = id;
		this.url = url;
		this.redirect = redirect;
	}
	static fromJSON(data) {
		return new RedirectedModule(data.raw, data.id, data.url, data.redirect);
	}
	toJSON() {
		return {
			type: this.type,
			url: this.url,
			raw: this.raw,
			id: this.id,
			redirect: this.redirect
		};
	}
}
class ManualMockedModule {
	cache;
	type = "manual";
	constructor(raw, id, url, factory) {
		this.raw = raw;
		this.id = id;
		this.url = url;
		this.factory = factory;
	}
	async resolve() {
		if (this.cache) {
			return this.cache;
		}
		let exports;
		try {
			exports = await this.factory();
		} catch (err) {
			const vitestError = new Error("[vitest] There was an error when mocking a module. " + "If you are using \"vi.mock\" factory, make sure there are no top level variables inside, since this call is hoisted to top of the file. " + "Read more: https://vitest.dev/api/vi.html#vi-mock");
			vitestError.cause = err;
			throw vitestError;
		}
		if (exports === null || typeof exports !== "object" || Array.isArray(exports)) {
			throw new TypeError(`[vitest] vi.mock("${this.raw}", factory?: () => unknown) is not returning an object. Did you mean to return an object with a "default" key?`);
		}
		return this.cache = exports;
	}
	static fromJSON(data, factory) {
		return new ManualMockedModule(data.raw, data.id, data.url, factory);
	}
	toJSON() {
		return {
			type: this.type,
			url: this.url,
			id: this.id,
			raw: this.raw
		};
	}
}

export { AutomockedModule as A, MockerRegistry as M, RedirectedModule as R, ManualMockedModule as a, AutospiedModule as b };
