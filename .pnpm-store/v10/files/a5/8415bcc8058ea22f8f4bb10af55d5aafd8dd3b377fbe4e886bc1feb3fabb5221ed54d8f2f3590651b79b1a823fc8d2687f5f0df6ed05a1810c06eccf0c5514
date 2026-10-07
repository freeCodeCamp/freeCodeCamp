import type { ProjectServiceOptions } from '@typescript-eslint/types';
import type * as ts from 'typescript/lib/tsserverlibrary';
/**
 * Shortcut type to refer to TypeScript's server ProjectService.
 */
export type TypeScriptProjectService = ts.server.ProjectService;
/**
 * A created Project Service instance, as well as metadata on its creation.
 */
export interface ProjectServiceAndMetadata {
    /**
     * Files allowed to be loaded from the default project, if any were specified.
     */
    allowDefaultProject: string[] | undefined;
    /**
     * The performance.now() timestamp of the last reload of the project service.
     */
    lastReloadTimestamp: number;
    /**
     * The maximum number of files that can be matched by the default project.
     */
    maximumDefaultProjectFileMatchCount: number;
    /**
     * The created TypeScript Project Service instance.
     */
    service: TypeScriptProjectService;
}
/**
 * Settings to create a new Project Service instance with {@link createProjectService}.
 */
export interface CreateProjectServiceSettings {
    /**
     * Granular options to configure the project service.
     */
    options?: ProjectServiceOptions;
    /**
     * How aggressively (and slowly) to parse JSDoc comments.
     */
    jsDocParsingMode?: ts.JSDocParsingMode;
    /**
     * Root directory for the tsconfig.json file, if not the current directory.
     */
    tsconfigRootDir?: string;
    /**
     * Custom project service host.
     *
     * @default `ts.sys` with stub watchers
     */
    host?: Partial<ts.server.ServerHost>;
}
/**
 * Creates a new Project Service instance, as well as metadata on its creation.
 * @param settings Settings to create a new Project Service instance.
 * @returns A new Project Service instance, as well as metadata on its creation.
 * @example
 * ```ts
 * import { createProjectService } from '@typescript-eslint/project-service';
 *
 * const { service } = createProjectService();
 *
 * service.openClientFile('index.ts');
 * ```
 */
export declare function createProjectService({ host, jsDocParsingMode, options: optionsRaw, tsconfigRootDir, }?: CreateProjectServiceSettings): ProjectServiceAndMetadata;
export { type ProjectServiceOptions } from '@typescript-eslint/types';
