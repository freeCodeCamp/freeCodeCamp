/**
 * Removes options that prompt the parser to parse the project with type
 * information. In other words, you can use this if you are invoking the parser
 * directly, to ensure that one file will be parsed in isolation, which is much,
 * much faster.
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/8428
 */
export declare function withoutProjectParserOptions<Options extends object>(opts: Options): Omit<Options, 'EXPERIMENTAL_useProjectService' | 'project' | 'projectService'>;
