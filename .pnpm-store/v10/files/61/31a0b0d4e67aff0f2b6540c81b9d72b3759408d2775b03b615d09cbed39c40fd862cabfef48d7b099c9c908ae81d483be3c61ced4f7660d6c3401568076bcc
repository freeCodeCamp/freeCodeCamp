import { PluckedContent } from './visitor.js';
import { Source } from 'graphql';
/**
 * Additional options for determining how a file is parsed.
 */
export interface GraphQLTagPluckOptions {
    /**
     * Additional options for determining how a file is parsed.An array of packages that are responsible for exporting the GraphQL string parser function. The following modules are supported by default:
     * ```js
     * {
     *   modules: [
     *     {
     *       // import gql from 'graphql-tag'
     *       name: 'graphql-tag',
     *     },
     *     {
     *       name: 'graphql-tag.macro',
     *     },
     *     {
     *       // import { graphql } from 'gatsby'
     *       name: 'gatsby',
     *       identifier: 'graphql',
     *     },
     *     {
     *       name: 'apollo-server-express',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'apollo-server',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'react-relay',
     *       identifier: 'graphql',
     *     },
     *     {
     *       name: 'apollo-boost',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'apollo-server-koa',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'apollo-server-hapi',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'apollo-server-fastify',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: ' apollo-server-lambda',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'apollo-server-micro',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'apollo-server-azure-functions',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'apollo-server-cloud-functions',
     *       identifier: 'gql',
     *     },
     *     {
     *       name: 'apollo-server-cloudflare',
     *       identifier: 'gql',
     *     },
     *   ];
     * }
     * ```
     */
    modules?: Array<{
        name: string;
        identifier?: string;
    }>;
    /**
     * The magic comment anchor to look for when parsing GraphQL strings. Defaults to `graphql`.
     */
    gqlMagicComment?: string;
    /**
     * Allows to use a global identifier instead of a module import.
     * ```js
     * // `graphql` is a global function
     * export const usersQuery = graphql`
     *   {
     *     users {
     *       id
     *       name
     *     }
     *   }
     * `;
     * ```
     */
    globalGqlIdentifierName?: string | string[];
    /**
     * Set to `true` in order to get the found documents as-is, without any changes indentation changes
     */
    skipIndent?: boolean;
}
/**
 * Asynchronously plucks GraphQL template literals from a single file.
 *
 * Supported file extensions include: `.js`, `.mjs`, `.cjs`, `.jsx`, `.ts`, `.mts`, `.cts`, `.tsx`, `.flow`, `.flow.js`, `.flow.jsx`, `.vue`, `.svelte`
 *
 * @param filePath Path to the file containing the code. Required to detect the file type
 * @param code The contents of the file being parsed.
 * @param options Additional options for determining how a file is parsed.
 */
export declare const gqlPluckFromCodeString: (filePath: string, code: string, options?: GraphQLTagPluckOptions) => Promise<Source[]>;
/**
 * Synchronously plucks GraphQL template literals from a single file
 *
 * Supported file extensions include: `.js`, `.mjs`, `.cjs`, `.jsx`, `.ts`, `.mjs`, `.cjs`, `.tsx`, `.flow`, `.flow.js`, `.flow.jsx`, `.vue`, `.svelte`
 *
 * @param filePath Path to the file containing the code. Required to detect the file type
 * @param code The contents of the file being parsed.
 * @param options Additional options for determining how a file is parsed.
 */
export declare const gqlPluckFromCodeStringSync: (filePath: string, code: string, options?: GraphQLTagPluckOptions) => Source[];
export declare function parseCode({ code, filePath, options, }: {
    code: string;
    filePath: string;
    options: GraphQLTagPluckOptions;
}): PluckedContent[];
