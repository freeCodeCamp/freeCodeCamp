import type { Maybe } from '../jsutils/Maybe';
import type { ASTNode } from '../language/ast';
import type { SourceLocation } from '../language/location';
import type { Source } from '../language/source';
/**
 * Custom extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */
export interface GraphQLErrorExtensions {
  [attributeName: string]: unknown;
}
/**
 * Custom formatted extensions
 *
 * @remarks
 * Use a unique identifier name for your extension, for example the name of
 * your library or project. Do not use a shortened identifier as this increases
 * the risk of conflicts. We recommend you add at most one extension field,
 * an object which can contain all the values you need.
 */
export interface GraphQLFormattedErrorExtensions {
  [attributeName: string]: unknown;
}
export interface GraphQLErrorOptions {
  nodes?: ReadonlyArray<ASTNode> | ASTNode | null;
  source?: Maybe<Source>;
  positions?: Maybe<ReadonlyArray<number>>;
  path?: Maybe<ReadonlyArray<string | number>>;
  originalError?: Maybe<
    Error & {
      readonly extensions?: unknown;
    }
  >;
  extensions?: Maybe<GraphQLErrorExtensions>;
}
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
export declare class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  readonly locations: ReadonlyArray<SourceLocation> | undefined;
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  readonly path: ReadonlyArray<string | number> | undefined;
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  readonly nodes: ReadonlyArray<ASTNode> | undefined;
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  readonly source: Source | undefined;
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  readonly positions: ReadonlyArray<number> | undefined;
  /**
   * The original error thrown from a field resolver during execution.
   */
  readonly originalError: Error | undefined;
  /**
   * Extension fields to add to the formatted error.
   */
  readonly extensions: GraphQLErrorExtensions;
  constructor(message: string, options?: GraphQLErrorOptions);
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(
    message: string,
    nodes?: ReadonlyArray<ASTNode> | ASTNode | null,
    source?: Maybe<Source>,
    positions?: Maybe<ReadonlyArray<number>>,
    path?: Maybe<ReadonlyArray<string | number>>,
    originalError?: Maybe<
      Error & {
        readonly extensions?: unknown;
      }
    >,
    extensions?: Maybe<GraphQLErrorExtensions>,
  );
  get [Symbol.toStringTag](): string;
  toString(): string;
  toJSON(): GraphQLFormattedError;
}
/**
 * See: https://spec.graphql.org/draft/#sec-Errors
 */
export interface GraphQLFormattedError {
  /**
   * A short, human-readable summary of the problem that **SHOULD NOT** change
   * from occurrence to occurrence of the problem, except for purposes of
   * localization.
   */
  readonly message: string;
  /**
   * If an error can be associated to a particular point in the requested
   * GraphQL document, it should contain a list of locations.
   */
  readonly locations?: ReadonlyArray<SourceLocation>;
  /**
   * If an error can be associated to a particular field in the GraphQL result,
   * it _must_ contain an entry with the key `path` that details the path of
   * the response field which experienced the error. This allows clients to
   * identify whether a null result is intentional or caused by a runtime error.
   */
  readonly path?: ReadonlyArray<string | number>;
  /**
   * Reserved for implementors to extend the protocol however they see fit,
   * and hence there are no additional restrictions on its contents.
   */
  readonly extensions?: GraphQLFormattedErrorExtensions;
}
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 *
 * @deprecated Please use `error.toString` instead. Will be removed in v17
 */
export declare function printError(error: GraphQLError): string;
/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 *
 * @deprecated Please use `error.toJSON` instead. Will be removed in v17
 */
export declare function formatError(error: GraphQLError): GraphQLFormattedError;
