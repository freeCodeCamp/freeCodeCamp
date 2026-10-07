import { DevEnvironment } from 'vite';
import { V as Vitest, T as TestProject, a as TestProjectConfiguration } from './reporters.d.CEnv6XRv.js';

/**
* Generate a unique cache identifier.
*
* Return `false` to disable caching of the file.
* @experimental
*/
interface CacheKeyIdGenerator {
	(context: CacheKeyIdGeneratorContext): string | undefined | null | false;
}
/**
* @experimental
*/
interface CacheKeyIdGeneratorContext {
	environment: DevEnvironment;
	id: string;
	sourceCode: string;
}

interface VitestPluginContext {
	vitest: Vitest;
	project: TestProject;
	injectTestProjects: (config: TestProjectConfiguration | TestProjectConfiguration[]) => Promise<TestProject[]>;
	/**
	* Define a generator that will be applied before hashing the cache key.
	*
	* Use this to make sure Vitest generates correct hash. It is a good idea
	* to define this function if your plugin can be registered with different options.
	*
	* This is called only if `experimental.fsModuleCache` is defined.
	* @experimental
	*/
	experimental_defineCacheKeyGenerator: (callback: CacheKeyIdGenerator) => void;
}

export type { CacheKeyIdGenerator as C, VitestPluginContext as V, CacheKeyIdGeneratorContext as a };
