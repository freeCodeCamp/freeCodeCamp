import { FileSpecification } from '@vitest/runner';
import { O as OTELCarrier } from './traces.d.D2T_R8rx.js';
import { T as TestExecutionMethod } from './worker.d.ZpHpO4yb.js';

type SerializedTestSpecification = [project: {
	name: string | undefined;
	root: string;
}, file: string, options: {
	pool: string;
	testLines?: number[] | undefined;
	testIds?: string[] | undefined;
	testNamePattern?: RegExp | undefined;
	testTagsFilter?: string[] | undefined;
}];

interface ModuleDefinitionLocation {
	line: number;
	column: number;
}
interface SourceModuleLocations {
	modules: ModuleDefinitionDiagnostic[];
	untracked: ModuleDefinitionDiagnostic[];
}
interface ModuleDefinitionDiagnostic {
	start: ModuleDefinitionLocation;
	end: ModuleDefinitionLocation;
	startIndex: number;
	endIndex: number;
	rawUrl: string;
	resolvedUrl: string;
	resolvedId: string;
}
interface ModuleDefinitionDurationsDiagnostic extends ModuleDefinitionDiagnostic {
	selfTime: number;
	totalTime: number;
	transformTime?: number;
	external?: boolean;
	importer?: string;
}
interface UntrackedModuleDefinitionDiagnostic {
	url: string;
	resolvedId: string;
	resolvedUrl: string;
	selfTime: number;
	totalTime: number;
	transformTime?: number;
	external?: boolean;
	importer?: string;
}
interface SourceModuleDiagnostic {
	modules: ModuleDefinitionDurationsDiagnostic[];
	untrackedModules: UntrackedModuleDefinitionDiagnostic[];
}

interface BrowserTesterOptions {
	method: TestExecutionMethod;
	files: FileSpecification[];
	providedContext: string;
	otelCarrier?: OTELCarrier;
}

export type { BrowserTesterOptions as B, ModuleDefinitionDurationsDiagnostic as M, SerializedTestSpecification as S, UntrackedModuleDefinitionDiagnostic as U, ModuleDefinitionDiagnostic as a, ModuleDefinitionLocation as b, SourceModuleDiagnostic as c, SourceModuleLocations as d };
