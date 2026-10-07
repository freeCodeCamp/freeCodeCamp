interface AfterSuiteRunMeta {
	coverage?: unknown;
	testFiles: string[];
	environment: string;
	projectName?: string;
}
interface UserConsoleLog {
	content: string;
	origin?: string;
	browser?: boolean;
	type: "stdout" | "stderr";
	taskId?: string;
	time: number;
	size: number;
}
interface ModuleGraphData {
	graph: Record<string, string[]>;
	externalized: string[];
	inlined: string[];
}
interface ProvidedContext {}
interface ResolveFunctionResult {
	id: string;
	file: string;
	url: string;
}
interface FetchCachedFileSystemResult {
	cached: true;
	tmp: string;
	id: string;
	file: string | null;
	url: string;
	invalidate: boolean;
}
type LabelColor = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";
interface AsyncLeak {
	filename: string;
	projectName: string;
	stack: string;
	type: string;
}

interface OTELCarrier {
	traceparent?: string;
	tracestate?: string;
}
interface TracesOptions {
	enabled: boolean;
	watchMode?: boolean;
	sdkPath?: string;
	tracerName?: string;
}
declare class Traces {
	#private;
	constructor(options: TracesOptions);
	isEnabled(): boolean;
}

export { Traces as T };
export type { AsyncLeak as A, FetchCachedFileSystemResult as F, LabelColor as L, ModuleGraphData as M, OTELCarrier as O, ProvidedContext as P, ResolveFunctionResult as R, UserConsoleLog as U, AfterSuiteRunMeta as a };
