declare class MockerRegistry {
	private readonly registryByUrl;
	private readonly registryById;
	clear(): void;
	keys(): IterableIterator<string>;
	add(mock: MockedModule): void;
	register(json: MockedModuleSerialized): MockedModule;
	register(type: "redirect", raw: string, id: string, url: string, redirect: string): RedirectedModule;
	register(type: "manual", raw: string, id: string, url: string, factory: () => any): ManualMockedModule;
	register(type: "automock", raw: string, id: string, url: string): AutomockedModule;
	register(type: "autospy", id: string, raw: string, url: string): AutospiedModule;
	delete(id: string): void;
	deleteById(id: string): void;
	get(id: string): MockedModule | undefined;
	getById(id: string): MockedModule | undefined;
	has(id: string): boolean;
}
type MockedModule = AutomockedModule | AutospiedModule | ManualMockedModule | RedirectedModule;
type MockedModuleType = "automock" | "autospy" | "manual" | "redirect";
type MockedModuleSerialized = AutomockedModuleSerialized | AutospiedModuleSerialized | ManualMockedModuleSerialized | RedirectedModuleSerialized;
declare class AutomockedModule {
	raw: string;
	id: string;
	url: string;
	readonly type = "automock";
	constructor(raw: string, id: string, url: string);
	static fromJSON(data: AutomockedModuleSerialized): AutospiedModule;
	toJSON(): AutomockedModuleSerialized;
}
interface AutomockedModuleSerialized {
	type: "automock";
	url: string;
	raw: string;
	id: string;
}
declare class AutospiedModule {
	raw: string;
	id: string;
	url: string;
	readonly type = "autospy";
	constructor(raw: string, id: string, url: string);
	static fromJSON(data: AutospiedModuleSerialized): AutospiedModule;
	toJSON(): AutospiedModuleSerialized;
}
interface AutospiedModuleSerialized {
	type: "autospy";
	url: string;
	raw: string;
	id: string;
}
declare class RedirectedModule {
	raw: string;
	id: string;
	url: string;
	redirect: string;
	readonly type = "redirect";
	constructor(raw: string, id: string, url: string, redirect: string);
	static fromJSON(data: RedirectedModuleSerialized): RedirectedModule;
	toJSON(): RedirectedModuleSerialized;
}
interface RedirectedModuleSerialized {
	type: "redirect";
	url: string;
	id: string;
	raw: string;
	redirect: string;
}
declare class ManualMockedModule<T = any> {
	raw: string;
	id: string;
	url: string;
	factory: () => T;
	cache: T | undefined;
	readonly type = "manual";
	constructor(raw: string, id: string, url: string, factory: () => T);
	resolve(): T;
	static fromJSON(data: ManualMockedModuleSerialized, factory: () => any): ManualMockedModule;
	toJSON(): ManualMockedModuleSerialized;
}
interface ManualMockedModuleSerialized {
	type: "manual";
	url: string;
	id: string;
	raw: string;
}

type Awaitable<T> = T | PromiseLike<T>;
type ModuleMockFactoryWithHelper<M = unknown> = (importOriginal: <T extends M = M>() => Promise<T>) => Awaitable<Partial<M>>;
type ModuleMockFactory = () => any;
interface ModuleMockOptions {
	spy?: boolean;
}
interface ServerMockResolution {
	mockType: "manual" | "redirect" | "automock" | "autospy";
	resolvedId: string;
	resolvedUrl: string;
	needsInterop?: boolean;
	redirectUrl?: string | null;
}
interface ServerIdResolution {
	id: string;
	url: string;
	optimized: boolean;
}
interface ModuleMockContext {
	/**
	* When mocking with a factory, this refers to the module that imported the mock.
	*/
	callstack: null | string[];
}
interface TestModuleMocker {
	queueMock(id: string, importer: string, factoryOrOptions?: ModuleMockFactory | ModuleMockOptions): void;
	queueUnmock(id: string, importer: string): void;
	importActual<T>(rawId: string, importer: string, callstack?: string[] | null): Promise<T>;
	importMock(rawId: string, importer: string): Promise<any>;
	mockObject(object: Record<string | symbol, any>, moduleType?: "automock" | "autospy"): Record<string | symbol, any>;
	mockObject(object: Record<string | symbol, any>, mockExports: Record<string | symbol, any> | undefined, moduleType?: "automock" | "autospy"): Record<string | symbol, any>;
	getMockContext(): ModuleMockContext;
	reset(): void;
}

export { AutomockedModule as A, MockerRegistry as M, RedirectedModule as R, AutospiedModule as h, ManualMockedModule as j };
export type { ServerMockResolution as S, TestModuleMocker as T, MockedModule as a, ModuleMockOptions as b, ModuleMockFactoryWithHelper as c, MockedModuleType as d, ModuleMockContext as e, ServerIdResolution as f, AutomockedModuleSerialized as g, AutospiedModuleSerialized as i, ManualMockedModuleSerialized as k, MockedModuleSerialized as l, ModuleMockFactory as m, RedirectedModuleSerialized as n };
