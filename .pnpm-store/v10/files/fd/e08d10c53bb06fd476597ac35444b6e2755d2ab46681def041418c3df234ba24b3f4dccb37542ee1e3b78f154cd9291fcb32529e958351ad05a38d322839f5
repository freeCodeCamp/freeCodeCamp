import type { LogHandler, MergedRollupOptions, RollupLog } from './rollup';

export interface BatchWarnings {
	add: (warning: RollupLog) => void;
	readonly count: number;
	flush: () => void;
	log: LogHandler;
	readonly warningOccurred: boolean;
}

export type LoadConfigFile = typeof loadConfigFile;

export function loadConfigFile(
	fileName: string,
	commandOptions: any,
	watchMode?: boolean
): Promise<{
	options: MergedRollupOptions[];
	warnings: BatchWarnings;
}>;
