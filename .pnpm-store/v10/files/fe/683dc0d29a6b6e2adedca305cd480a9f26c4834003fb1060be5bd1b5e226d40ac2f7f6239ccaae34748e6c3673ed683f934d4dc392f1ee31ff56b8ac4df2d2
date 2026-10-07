export interface OneTest {
    readonly name: string;
    readonly only?: boolean;
    readonly skip?: boolean;
    readonly absoluteBaseUrl: string;
    readonly paths: {
        [key: string]: Array<string>;
    };
    readonly mainFields?: string[];
    readonly addMatchAll?: boolean;
    readonly existingFiles: ReadonlyArray<string>;
    readonly requestedModule: string;
    readonly extensions: ReadonlyArray<string>;
    readonly packageJson?: {};
    readonly expectedPath: string | undefined;
}
export declare const tests: ReadonlyArray<OneTest>;
