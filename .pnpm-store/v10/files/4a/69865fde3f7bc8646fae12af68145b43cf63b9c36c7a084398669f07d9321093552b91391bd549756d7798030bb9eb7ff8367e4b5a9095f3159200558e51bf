import { BinaryType } from './BinaryType';
export declare const engineEnvVarMap: {
    "query-engine": string;
    "libquery-engine": string;
    "schema-engine": string;
};
export declare const deprecatedEnvVarMap: Partial<typeof engineEnvVarMap>;
type PathFromEnvValue = {
    path: string;
    fromEnvVar: string;
};
export declare function getBinaryEnvVarPath(binaryName: BinaryType): PathFromEnvValue | null;
export declare function allEngineEnvVarsSet(binaries: string[]): boolean;
export {};
