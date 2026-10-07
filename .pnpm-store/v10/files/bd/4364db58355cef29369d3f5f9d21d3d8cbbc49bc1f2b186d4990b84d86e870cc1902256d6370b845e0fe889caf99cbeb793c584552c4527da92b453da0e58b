import './types.d-BjI5eAwu.js';

type Key = string | symbol;
type CreateMockInstanceProcedure = (options?: {
	prototypeMembers?: (string | symbol)[];
	name?: string | symbol;
	originalImplementation?: (...args: any[]) => any;
	keepMembersImplementation?: boolean;
}) => any;
interface MockObjectOptions {
	type: "automock" | "autospy";
	globalConstructors: GlobalConstructors;
	createMockInstance: CreateMockInstanceProcedure;
}
declare function mockObject(options: MockObjectOptions, object: Record<Key, any>, mockExports?: Record<Key, any>): Record<Key, any>;
interface GlobalConstructors {
	Object: ObjectConstructor;
	Function: FunctionConstructor;
	RegExp: RegExpConstructor;
	Array: ArrayConstructor;
	Map: MapConstructor;
}

export { mockObject as m };
export type { CreateMockInstanceProcedure as C, GlobalConstructors as G, MockObjectOptions as M };
