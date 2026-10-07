import { Test } from '@vitest/runner';
import { ChainableFunction } from '@vitest/runner/utils';
import { TaskResult, Bench, Options } from 'tinybench';

interface Benchmark extends Test {
	meta: {
		benchmark: true
		result?: TaskResult
	};
}
interface BenchmarkResult extends TaskResult {
	name: string;
	rank: number;
	sampleCount: number;
	median: number;
}
type BenchFunction = (this: Bench) => Promise<void> | void;
type ChainableBenchmarkAPI = ChainableFunction<"skip" | "only" | "todo", (name: string | Function, fn?: BenchFunction, options?: Options) => void>;
type BenchmarkAPI = ChainableBenchmarkAPI & {
	skipIf: (condition: any) => ChainableBenchmarkAPI
	runIf: (condition: any) => ChainableBenchmarkAPI
};

export type { BenchmarkResult as B, BenchFunction as a, Benchmark as b, BenchmarkAPI as c };
