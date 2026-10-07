"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withoutProjectParserOptions = withoutProjectParserOptions;
/**
 * Removes options that prompt the parser to parse the project with type
 * information. In other words, you can use this if you are invoking the parser
 * directly, to ensure that one file will be parsed in isolation, which is much,
 * much faster.
 *
 * @see https://github.com/typescript-eslint/typescript-eslint/issues/8428
 */
function withoutProjectParserOptions(opts) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- The variables are meant to be omitted
    const { EXPERIMENTAL_useProjectService, project, projectService, ...rest } = opts;
    return rest;
}
//# sourceMappingURL=withoutProjectParserOptions.js.map