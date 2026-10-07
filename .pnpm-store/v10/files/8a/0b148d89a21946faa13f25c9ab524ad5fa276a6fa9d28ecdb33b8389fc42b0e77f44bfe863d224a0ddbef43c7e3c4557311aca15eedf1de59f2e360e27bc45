/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const Printer = require('../core/IRPrinter');
const Profiler = require('../core/GraphQLCompilerProfiler');
const RelayCodeGenerator = require('./RelayCodeGenerator');

const filterContextForNode = require('../core/filterContextForNode');

import type CompilerContext from '../core/CompilerContext';
import type {IRTransform} from '../core/CompilerContext';
import type {GeneratedDefinition} from '../core/IR';
import type {Reporter} from '../reporters/Reporter';
import type {GeneratedNode} from 'relay-runtime';

export type RelayCompilerTransforms = {
  commonTransforms: $ReadOnlyArray<IRTransform>,
  codegenTransforms: $ReadOnlyArray<IRTransform>,
  fragmentTransforms: $ReadOnlyArray<IRTransform>,
  printTransforms: $ReadOnlyArray<IRTransform>,
  queryTransforms: $ReadOnlyArray<IRTransform>,
  ...
};

function createFragmentContext(
  context: CompilerContext,
  transforms: RelayCompilerTransforms,
  reporter?: Reporter,
): CompilerContext {
  // The fragment is used for reading data from the normalized store.
  return context.applyTransforms(
    [...transforms.commonTransforms, ...transforms.fragmentTransforms],
    reporter,
  );
}

function createPrintContext(
  context: CompilerContext,
  transforms: RelayCompilerTransforms,
  reporter?: Reporter,
): CompilerContext {
  // The unflattened query is used for printing, since flattening creates an
  // invalid query.
  return context.applyTransforms(
    [
      ...transforms.commonTransforms,
      ...transforms.queryTransforms,
      ...transforms.printTransforms,
    ],
    reporter,
  );
}

function createCodeGenContext(
  context: CompilerContext,
  transforms: RelayCompilerTransforms,
  reporter?: Reporter,
): CompilerContext {
  // The flattened query is used for codegen in order to reduce the number of
  // duplicate fields that must be processed during response normalization.
  return context.applyTransforms(
    [
      ...transforms.commonTransforms,
      ...transforms.queryTransforms,
      ...transforms.codegenTransforms,
    ],
    reporter,
  );
}

function compile(
  context: CompilerContext,
  fragmentContext: CompilerContext,
  printContext: CompilerContext,
  codeGenContext: CompilerContext,
): $ReadOnlyArray<[GeneratedDefinition, GeneratedNode]> {
  const results = [];
  const schema = context.getSchema();

  // Add everything from codeGenContext, these are the operations as well as
  // SplitOperations from @match.
  for (const node of codeGenContext.documents()) {
    if (node.kind === 'Root') {
      const fragment = fragmentContext.getRoot(node.name);
      const request = {
        kind: 'Request',
        fragment: {
          kind: 'Fragment',
          argumentDefinitions: fragment.argumentDefinitions,
          directives: fragment.directives,
          loc: {kind: 'Derived', source: node.loc},
          metadata: null,
          name: fragment.name,
          selections: fragment.selections,
          type: fragment.type,
        },
        id: null,
        loc: node.loc,
        metadata: node.metadata || {},
        name: fragment.name,
        root: node,
        text: printOperation(printContext, fragment.name),
      };
      results.push([request, RelayCodeGenerator.generate(schema, request)]);
    } else {
      results.push([node, RelayCodeGenerator.generate(schema, node)]);
    }
  }

  // Add all the Fragments from the fragmentContext for the reader ASTs.
  for (const node of fragmentContext.documents()) {
    if (node.kind === 'Fragment') {
      results.push([node, RelayCodeGenerator.generate(schema, node)]);
    }
  }
  return results;
}

const OPERATION_ORDER = {
  Root: 0,
  SplitOperation: 1,
  Fragment: 2,
};
function printOperation(printContext: CompilerContext, name: string): string {
  const printableRoot = printContext.getRoot(name);
  return filterContextForNode(printableRoot, printContext)
    .documents()
    .sort((a, b) => {
      if (a.kind !== b.kind) {
        return OPERATION_ORDER[a.kind] - OPERATION_ORDER[b.kind];
      }
      return a.name < b.name ? -1 : 1;
    })
    .map(doc => Printer.print(printContext.getSchema(), doc))
    .join('\n');
}

/**
 * Transforms the provided compiler context
 *
 * compileRelayArtifacts generates artifacts for Relay's runtime as a result of
 * applying a series of transforms. Each kind of artifact is dependent on
 * transforms being applied in the following order:
 *
 *   - Fragment Readers: commonTransforms, fragmentTransforms
 *   - Operation Writers: commonTransforms, queryTransforms, codegenTransforms
 *   - GraphQL Text: commonTransforms, queryTransforms, printTransforms
 *
 * The order of the transforms applied for each artifact below is important.
 * CompilerContext will memoize applying each transform, so while
 * `commonTransforms` appears in each artifacts' application, it will not result
 * in repeated work as long as the order remains consistent across each context.
 */
function compileRelayArtifacts(
  context: CompilerContext,
  transforms: RelayCompilerTransforms,
  reporter?: Reporter,
): $ReadOnlyArray<[GeneratedDefinition, GeneratedNode]> {
  return Profiler.run('GraphQLCompiler.compile', () => {
    const fragmentContext = createFragmentContext(
      context,
      transforms,
      reporter,
    );
    const printContext = createPrintContext(context, transforms, reporter);
    const codeGenContext = createCodeGenContext(context, transforms, reporter);
    return compile(context, fragmentContext, printContext, codeGenContext);
  });
}

module.exports = compileRelayArtifacts;
