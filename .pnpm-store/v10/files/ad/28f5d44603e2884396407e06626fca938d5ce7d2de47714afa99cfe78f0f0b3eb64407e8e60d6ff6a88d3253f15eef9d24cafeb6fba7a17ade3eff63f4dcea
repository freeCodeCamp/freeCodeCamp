import type { Program } from 'typescript';
import type { Lib } from './lib';
export type DebugLevel = boolean | ('eslint' | 'typescript' | 'typescript-eslint')[];
export type CacheDurationSeconds = number | 'Infinity';
export type EcmaVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 2026 | 'latest' | undefined;
export type SourceTypeClassic = 'module' | 'script';
export type SourceType = 'commonjs' | SourceTypeClassic;
export type JSDocParsingMode = 'all' | 'none' | 'type-info';
/**
 * Granular options to configure the project service.
 */
export interface ProjectServiceOptions {
    /**
     * Globs of files to allow running with the default project compiler options
     * despite not being matched by the project service.
     */
    allowDefaultProject?: string[];
    /**
     * Path to a TSConfig to use instead of TypeScript's default project configuration.
     * @default 'tsconfig.json'
     */
    defaultProject?: string;
    /**
     * Whether to allow TypeScript plugins as configured in the TSConfig.
     */
    loadTypeScriptPlugins?: boolean;
    /**
     * The maximum number of files {@link allowDefaultProject} may match.
     * Each file match slows down linting, so if you do need to use this, please
     * file an informative issue on typescript-eslint explaining why - so we can
     * help you avoid using it!
     * @default 8
     */
    maximumDefaultProjectFileMatchCount_THIS_WILL_SLOW_DOWN_LINTING?: number;
}
export interface ParserOptions {
    [additionalProperties: string]: unknown;
    cacheLifetime?: {
        glob?: CacheDurationSeconds;
    };
    debugLevel?: DebugLevel;
    ecmaFeatures?: {
        [key: string]: unknown;
        globalReturn?: boolean | undefined;
        jsx?: boolean | undefined;
    } | undefined;
    ecmaVersion?: EcmaVersion;
    emitDecoratorMetadata?: boolean;
    errorOnTypeScriptSyntacticAndSemanticIssues?: boolean;
    errorOnUnknownASTType?: boolean;
    experimentalDecorators?: boolean;
    extraFileExtensions?: string[];
    filePath?: string;
    isolatedDeclarations?: boolean;
    jsDocParsingMode?: JSDocParsingMode;
    jsxFragmentName?: string | null;
    jsxPragma?: string | null;
    lib?: Lib[];
    programs?: Program[] | null;
    project?: boolean | string | string[] | null;
    projectFolderIgnoreList?: string[];
    projectService?: boolean | ProjectServiceOptions;
    range?: boolean;
    sourceType?: SourceType | undefined;
    tokens?: boolean;
    tsconfigRootDir?: string;
    warnOnUnsupportedTypeScriptVersion?: boolean;
}
