/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const {GraphQLError} = require('graphql');

import type {Location} from './IR';
import type {ASTNode, Source, SourceLocation} from 'graphql';

// Combined results of multiple user errors
export opaque type CombinedUserError: Error = Error;

// Error describing invalid application code from which the compiler
// can recover, ie which does not prevent processing of other inputs.
export opaque type UserError: Error = GraphQLError;

// Error describing invalid application code from which the compiler
// *cannot* recover, ie where the validity of subsequent inputs cannot
// be determined. Try to avoid these errors.
export opaque type NonRecoverableUserError: Error = Error;

// Error describing a bug in the compiler
export opaque type CompilerError: Error = Error;

/**
 * Creates an error describing invalid application code (GraphQL/Schema)
 * that must be fixed by the end developer. This should only be used
 * for local errors that don't affect processing of other user code.
 */
function createUserError(
  message: string,
  locations?: ?$ReadOnlyArray<Location>,
  nodes?: ?$ReadOnlyArray<ASTNode>,
): UserError {
  let messageWithLocations = message;
  if (locations != null) {
    const printedLocations = printLocations(locations);
    messageWithLocations =
      printedLocations.length === 0
        ? message
        : [message, ...printedLocations].join('\n\n') + '\n';
  }
  return new GraphQLError(messageWithLocations, nodes ?? []);
}

/**
 * Similar to createUserError but for errors that are *not* recoverable:
 * the compiler should not continue to process other inputs because their
 * validity can't be determined.
 */
function createNonRecoverableUserError(
  message: string,
  locations?: ?$ReadOnlyArray<Location>,
  nodes?: ?$ReadOnlyArray<ASTNode>,
): NonRecoverableUserError {
  let messageWithLocations = message;
  if (locations != null) {
    const printedLocations = printLocations(locations);
    messageWithLocations =
      printedLocations.length === 0
        ? message
        : [message, ...printedLocations].join('\n\n') + '\n';
  }
  const error = new GraphQLError(messageWithLocations, nodes ?? []);
  return new Error(error.message);
}

/**
 * Creates an error describing a problem with the compiler itself - such
 * as a broken invariant - that must be fixed within the compiler.
 */
function createCompilerError(
  message: string,
  locations?: ?$ReadOnlyArray<Location>,
  nodes?: ?$ReadOnlyArray<ASTNode>,
): CompilerError {
  let messageWithLocations = message;
  if (locations != null) {
    const printedLocations = printLocations(locations);
    messageWithLocations =
      printedLocations.length === 0
        ? message
        : [message, ...printedLocations].join('\n\n') + '\n';
  }
  const error = new GraphQLError(
    `Internal Error: ${messageWithLocations}`,
    nodes ?? [],
  );
  return new Error(error.message);
}

/**
 * Iterates over the elements of some iterable value, calling the
 * supplied callback for each item with a guard for user errors.
 *
 * Non-user errors abort the iteration and are instantly rethrown.
 * User errors are collected and rethrown at the end, if multiple user errors
 * occur, a combined error is thrown.
 */
function eachWithCombinedError<T>(iterable: Iterable<T>, fn: T => void): void {
  const errors: Array<UserError> = [];
  for (const item of iterable) {
    try {
      fn(item);
    } catch (error) {
      if (error instanceof GraphQLError) {
        errors.push(error);
      } else {
        throw error;
      }
    }
  }
  if (errors.length > 0) {
    if (errors.length === 1) {
      throw createUserError(
        String(errors[0])
          .split('\n')
          .map((line, index) => (index === 0 ? `- ${line}` : `  ${line}`))
          .join('\n'),
      );
    }
    throw createUserError(
      `Encountered ${errors.length} errors:\n` +
        errors
          .map(error =>
            String(error)
              .split('\n')
              .map((line, index) => (index === 0 ? `- ${line}` : `  ${line}`))
              .join('\n'),
          )
          .join('\n'),
    );
  }
}

function printLocations(locations: $ReadOnlyArray<Location>): Array<string> {
  const printedLocations = [];
  for (const location of locations) {
    let sourceLocation = location;
    while (sourceLocation.kind === 'Derived') {
      sourceLocation = sourceLocation.source;
    }
    switch (sourceLocation.kind) {
      case 'Source': {
        // source location
        const prefix =
          sourceLocation === location ? 'Source: ' : 'Source (derived): ';
        printedLocations.push(
          prefix +
            highlightSourceAtLocation(
              sourceLocation.source,
              getLocation(sourceLocation.source, sourceLocation.start),
            ),
        );
        break;
      }
      case 'Generated': {
        printedLocations.push('Source: (generated)');
        break;
      }
      case 'Unknown': {
        printedLocations.push('Source: (unknown)');
        break;
      }
      default: {
        (sourceLocation: empty);
        throw createCompilerError(
          `CompilerError: cannot print location '${String(sourceLocation)}'.`,
        );
      }
    }
  }
  return printedLocations;
}

/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */
function highlightSourceAtLocation(
  source: Source,
  location: SourceLocation,
): string {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = whitespace(firstLineColumnOffset) + source.body;

  const lineIndex = location.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = location.line + lineOffset;

  const columnOffset = location.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = location.column + columnOffset;

  const lines = body.split(/\r\n|[\n\r]/g);
  return (
    `${source.name} (${lineNum}:${columnNum})\n` +
    printPrefixedLines([
      // Lines specified like this: ["prefix", "string"],
      [`${lineNum - 1}: `, lines[lineIndex - 1]],
      [`${lineNum}: `, lines[lineIndex]],
      ['', whitespace(columnNum - 1) + '^'],
      [`${lineNum + 1}: `, lines[lineIndex + 1]],
    ])
  );
}

function printPrefixedLines(lines: Array<[string, string]>): string {
  const existingLines = lines.filter(([_, line]) => line !== undefined);

  let padLen = 0;
  for (const [prefix] of existingLines) {
    padLen = Math.max(padLen, prefix.length);
  }

  return existingLines
    .map(([prefix, line]) => lpad(padLen, prefix) + line)
    .join('\n');
}

function whitespace(len: number): string {
  return Array(len + 1).join(' ');
}

function lpad(len: number, str: string): string {
  return whitespace(len - str.length) + str;
}

function getLocation(source: Source, position: number): SourceLocation {
  const lineRegexp = /\r\n|[\n\r]/g;
  let line = 1;
  let column = position + 1;
  let match;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return {line, column};
}

module.exports = {
  createCompilerError,
  createNonRecoverableUserError,
  createUserError,
  eachWithCombinedError,
};
