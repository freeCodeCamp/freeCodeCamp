type Awaitable<T> = T | PromiseLike<T>;
type ModuleMockFactoryWithHelper<M = unknown> = (importOriginal: <T extends M = M>() => Promise<T>) => Awaitable<Partial<M>>;
type ModuleMockFactory = () => any;
interface ModuleMockOptions {
	spy?: boolean;
}

export type { ModuleMockFactory as M, ModuleMockFactoryWithHelper as a, ModuleMockOptions as b };
