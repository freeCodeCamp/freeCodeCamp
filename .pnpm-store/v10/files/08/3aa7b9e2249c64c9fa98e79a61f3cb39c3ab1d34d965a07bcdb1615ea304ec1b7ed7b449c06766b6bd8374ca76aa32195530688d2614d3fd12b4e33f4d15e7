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
declare class ManualMockedModule {
	raw: string;
	id: string;
	url: string;
	factory: () => any;
	cache: Record<string | symbol, any> | undefined;
	readonly type = "manual";
	constructor(raw: string, id: string, url: string, factory: () => any);
	resolve(): Promise<Record<string | symbol, any>>;
	static fromJSON(data: ManualMockedModuleSerialized, factory: () => any): ManualMockedModule;
	toJSON(): ManualMockedModuleSerialized;
}
interface ManualMockedModuleSerialized {
	type: "manual";
	url: string;
	id: string;
	raw: string;
}

export { AutomockedModule as A, RedirectedModule as R, AutospiedModule as a, ManualMockedModule as b, MockerRegistry as c };
export type { MockedModuleType as M, AutomockedModuleSerialized as d, AutospiedModuleSerialized as e, ManualMockedModuleSerialized as f, MockedModule as g, MockedModuleSerialized as h, RedirectedModuleSerialized as i };
