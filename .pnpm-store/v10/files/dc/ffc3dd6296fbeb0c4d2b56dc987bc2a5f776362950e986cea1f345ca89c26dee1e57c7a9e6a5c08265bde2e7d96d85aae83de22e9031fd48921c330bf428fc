import { S as Suite, c as File, e as Task, a1 as TestTagDefinition, a5 as VitestRunnerConfig, a as Test } from './tasks.d-Bh0IjN67.js';
export { ag as ChainableFunction, ah as createChainable } from './tasks.d-Bh0IjN67.js';
import { ParsedStack, Arrayable } from '@vitest/utils';
import '@vitest/utils/diff';

/**
* If any tasks been marked as `only`, mark all other tasks as `skip`.
*/
declare function interpretTaskModes(file: Suite, namePattern?: string | RegExp, testLocations?: number[] | undefined, testIds?: string[] | undefined, testTagsFilter?: ((testTags: string[]) => boolean) | undefined, onlyMode?: boolean, parentIsOnly?: boolean, allowOnly?: boolean): void;
declare function someTasksAreOnly(suite: Suite): boolean;
declare function generateHash(str: string): string;
declare function calculateSuiteHash(parent: Suite): void;
declare function createFileTask(filepath: string, root: string, projectName: string | undefined, pool?: string, viteEnvironment?: string): File;
/**
* Generate a unique ID for a file based on its path and project name
* @param file File relative to the root of the project to keep ID the same between different machines
* @param projectName The name of the test project
*/
declare function generateFileHash(file: string, projectName: string | undefined): string;
declare function findTestFileStackTrace(testFilePath: string, error: string): ParsedStack | undefined;

interface ConcurrencyLimiter extends ConcurrencyLimiterFn {
	acquire: () => (() => void) | Promise<() => void>;
}
type ConcurrencyLimiterFn = <
	Args extends unknown[],
	T
>(func: (...args: Args) => PromiseLike<T> | T, ...args: Args) => Promise<T>;
/**
* Return a function for running multiple async operations with limited concurrency.
*/
declare function limitConcurrency(concurrency?: number): ConcurrencyLimiter;

/**
* Partition in tasks groups by consecutive concurrent
*/
declare function partitionSuiteChildren(suite: Suite): Task[][];

/**
* @experimental
*/
declare function matchesTags(testTags: string[]): boolean;
declare function validateTags(config: VitestRunnerConfig, tags: string[]): void;
declare function createTagsFilter(tagsExpr: string[], availableTags: TestTagDefinition[]): (testTags: string[]) => boolean;

declare function isTestCase(s: Task): s is Test;
declare function getTests(suite: Arrayable<Task>): Test[];
declare function getTasks(tasks?: Arrayable<Task>): Task[];
declare function getSuites(suite: Arrayable<Task>): Suite[];
declare function hasTests(suite: Arrayable<Suite>): boolean;
declare function hasFailed(suite: Arrayable<Task>): boolean;
declare function getNames(task: Task): string[];
declare function getFullName(task: Task, separator?: string): string;
declare function getTestName(task: Task, separator?: string): string;
declare function createTaskName(names: readonly (string | undefined)[], separator?: string): string;

export { calculateSuiteHash, createFileTask, createTagsFilter, createTaskName, findTestFileStackTrace, generateFileHash, generateHash, getFullName, getNames, getSuites, getTasks, getTestName, getTests, hasFailed, hasTests, interpretTaskModes, isTestCase, limitConcurrency, matchesTags, partitionSuiteChildren, someTasksAreOnly, validateTags };
