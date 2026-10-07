import { S as Suite, F as File, T as Task, a as Test } from './tasks.d-CkscK4of.js';
export { C as ChainableFunction, c as createChainable } from './tasks.d-CkscK4of.js';
import { Arrayable } from '@vitest/utils';

/**
* If any tasks been marked as `only`, mark all other tasks as `skip`.
*/
declare function interpretTaskModes(file: Suite, namePattern?: string | RegExp, testLocations?: number[] | undefined, onlyMode?: boolean, parentIsOnly?: boolean, allowOnly?: boolean): void;
declare function someTasksAreOnly(suite: Suite): boolean;
declare function generateHash(str: string): string;
declare function calculateSuiteHash(parent: Suite): void;
declare function createFileTask(filepath: string, root: string, projectName: string | undefined, pool?: string): File;
/**
* Generate a unique ID for a file based on its path and project name
* @param file File relative to the root of the project to keep ID the same between different machines
* @param projectName The name of the test project
*/
declare function generateFileHash(file: string, projectName: string | undefined): string;

/**
* Return a function for running multiple async operations with limited concurrency.
*/
declare function limitConcurrency(concurrency?: number): <
	Args extends unknown[],
	T
>(func: (...args: Args) => PromiseLike<T> | T, ...args: Args) => Promise<T>;

/**
* Partition in tasks groups by consecutive concurrent
*/
declare function partitionSuiteChildren(suite: Suite): Task[][];

/**
* @deprecated use `isTestCase` instead
*/
declare function isAtomTest(s: Task): s is Test;
declare function isTestCase(s: Task): s is Test;
declare function getTests(suite: Arrayable<Task>): Test[];
declare function getTasks(tasks?: Arrayable<Task>): Task[];
declare function getSuites(suite: Arrayable<Task>): Suite[];
declare function hasTests(suite: Arrayable<Suite>): boolean;
declare function hasFailed(suite: Arrayable<Task>): boolean;
declare function getNames(task: Task): string[];
declare function getFullName(task: Task, separator?: string): string;
declare function getTestName(task: Task, separator?: string): string;

export { calculateSuiteHash, createFileTask, generateFileHash, generateHash, getFullName, getNames, getSuites, getTasks, getTestName, getTests, hasFailed, hasTests, interpretTaskModes, isAtomTest, isTestCase, limitConcurrency, partitionSuiteChildren, someTasksAreOnly };
