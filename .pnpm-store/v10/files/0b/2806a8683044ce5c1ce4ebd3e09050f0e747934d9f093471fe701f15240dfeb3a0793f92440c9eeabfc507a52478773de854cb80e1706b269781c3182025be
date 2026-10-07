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

const Profiler = require('./GraphQLCompilerProfiler');

const invariant = require('invariant');

const {createUserError} = require('./CompilerError');
// $FlowFixMe[untyped-import] - immutable.js is not flow-typed
const {OrderedMap: ImmutableOrderedMap} = require('immutable');

import type {Reporter} from '../reporters/Reporter';
import type {Fragment, Location, Root, SplitOperation} from './IR';
import type {Schema} from './Schema';

export type IRTransform = CompilerContext => CompilerContext;

export type CompilerContextDocument = Fragment | Root | SplitOperation;

/**
 * An immutable representation of a corpus of documents being compiled together.
 * For each document, the context stores the IR and any validation errors.
 */
class CompilerContext {
  _isMutable: boolean;
  // $FlowFixMe[value-as-type]
  _documents: ImmutableOrderedMap<string, CompilerContextDocument>;
  _withTransform: WeakMap<IRTransform, CompilerContext>;
  +_schema: Schema;

  constructor(schema: Schema) {
    this._isMutable = false;
    this._documents = new ImmutableOrderedMap();
    this._withTransform = new WeakMap();
    this._schema = schema;
  }

  /**
   * Returns the documents for the context in the order they were added.
   */
  documents(): Array<CompilerContextDocument> {
    return this._documents.toArray();
  }

  forEachDocument(fn: CompilerContextDocument => void): void {
    this._documents.forEach(fn);
  }

  replace(node: CompilerContextDocument): CompilerContext {
    return this._update(
      this._documents.update(node.name, existing => {
        invariant(
          existing,
          'CompilerContext: Expected to replace existing node %s, but ' +
            'one was not found in the context.',
          node.name,
        );
        return node;
      }),
    );
  }

  add(node: CompilerContextDocument): CompilerContext {
    return this._update(
      this._documents.update(node.name, existing => {
        invariant(
          !existing,
          'CompilerContext: Duplicate document named `%s`. GraphQL ' +
            'fragments and roots must have unique names.',
          node.name,
        );
        return node;
      }),
    );
  }

  addAll(nodes: $ReadOnlyArray<CompilerContextDocument>): CompilerContext {
    return this.withMutations(mutable =>
      nodes.reduce((ctx, definition) => ctx.add(definition), mutable),
    );
  }

  /**
   * Apply a list of compiler transforms and return a new compiler context.
   */
  applyTransforms(
    transforms: $ReadOnlyArray<IRTransform>,
    reporter?: Reporter,
  ): CompilerContext {
    return Profiler.run('applyTransforms', () =>
      transforms.reduce(
        (ctx, transform) => ctx.applyTransform(transform, reporter),
        this,
      ),
    );
  }

  /**
   * Applies a transform to this context, returning a new context.
   *
   * This is memoized such that applying the same sequence of transforms will
   * not result in duplicated work.
   */
  applyTransform(transform: IRTransform, reporter?: Reporter): CompilerContext {
    let transformed = this._withTransform.get(transform);
    if (!transformed) {
      const start = process.hrtime();
      transformed = Profiler.instrument(transform)(this);
      const delta = process.hrtime(start);
      const deltaMs = Math.round((delta[0] * 1e9 + delta[1]) / 1e6);
      reporter && reporter.reportTime(transform.name, deltaMs);
      this._withTransform.set(transform, transformed);
    }
    return transformed;
  }

  get(name: string): ?CompilerContextDocument {
    return this._documents.get(name);
  }

  getFragment(name: string, referencedFrom?: ?Location): Fragment {
    const node = this._documents.get(name);
    if (node == null) {
      throw createUserError(
        `Cannot find fragment '${name}'.`,
        referencedFrom != null ? [referencedFrom] : null,
      );
    } else if (node.kind !== 'Fragment') {
      throw createUserError(
        `Cannot find fragment '${name}', a document with this name exists ` +
          'but is not a fragment.',
        [node.loc, referencedFrom].filter(Boolean),
      );
    }
    return node;
  }

  getRoot(name: string): Root {
    const node = this._documents.get(name);
    if (node == null) {
      throw createUserError(`Cannot find root '${name}'.`);
    } else if (node.kind !== 'Root') {
      throw createUserError(
        `Cannot find root '${name}', a document with this name exists but ` +
          'is not a root.',
        [node.loc],
      );
    }
    return node;
  }

  remove(name: string): CompilerContext {
    return this._update(this._documents.delete(name));
  }

  withMutations(fn: CompilerContext => CompilerContext): CompilerContext {
    const mutableCopy = this._update(this._documents.asMutable());
    mutableCopy._isMutable = true;
    const result = fn(mutableCopy);
    result._isMutable = false;
    result._documents = result._documents.asImmutable();
    return this._documents === result._documents ? this : result;
  }

  _update(
    documents: ImmutableOrderedMap<string, CompilerContextDocument>,
  ): CompilerContext {
    const context = this._isMutable
      ? this
      : new CompilerContext(this.getSchema());
    context._documents = documents;
    return context;
  }

  getSchema(): Schema {
    return this._schema;
  }
}

module.exports = CompilerContext;
