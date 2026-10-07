import { M as MockedModuleType } from './registry.d-D765pazg.js';
export { A as AutomockedModule, d as AutomockedModuleSerialized, a as AutospiedModule, e as AutospiedModuleSerialized, b as ManualMockedModule, f as ManualMockedModuleSerialized, g as MockedModule, h as MockedModuleSerialized, c as MockerRegistry, R as RedirectedModule, i as RedirectedModuleSerialized } from './registry.d-D765pazg.js';
export { M as ModuleMockFactory, a as ModuleMockFactoryWithHelper, b as ModuleMockOptions } from './types.d-D_aRZRdy.js';

type Key = string | symbol;
interface MockObjectOptions {
	type: MockedModuleType;
	globalConstructors: GlobalConstructors;
	spyOn: (obj: any, prop: Key) => any;
}
declare function mockObject(options: MockObjectOptions, object: Record<Key, any>, mockExports?: Record<Key, any>): Record<Key, any>;
interface GlobalConstructors {
	Object: ObjectConstructor;
	Function: FunctionConstructor;
	RegExp: RegExpConstructor;
	Array: ArrayConstructor;
	Map: MapConstructor;
}

export { MockedModuleType, mockObject };
export type { GlobalConstructors, MockObjectOptions };
