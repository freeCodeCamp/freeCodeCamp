import { MockedModuleType } from '@vitest/mocker';

type Promisable<T> = T | Promise<T>;
type MockFactoryWithHelper<M = unknown> = (importOriginal: <T extends M = M>() => Promise<T>) => Promisable<Partial<M>>;
type MockFactory = () => any;
interface MockOptions {
	spy?: boolean;
}
interface PendingSuiteMock {
	id: string;
	importer: string;
	action: "mock" | "unmock";
	type?: MockedModuleType;
	factory?: MockFactory;
}

export type { MockFactoryWithHelper as M, PendingSuiteMock as P, MockOptions as a, MockFactory as b };
