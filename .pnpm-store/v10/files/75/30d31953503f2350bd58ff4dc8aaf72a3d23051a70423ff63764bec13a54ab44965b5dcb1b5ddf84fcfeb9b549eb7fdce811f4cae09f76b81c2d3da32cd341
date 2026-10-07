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

const CodeMarker = require('../util/CodeMarker');

const createPrintRequireModuleDependency = require('./createPrintRequireModuleDependency');
const dedupeJSONStringify = require('../util/dedupeJSONStringify');
const invariant = require('invariant');
const md5 = require('../util/md5');

const {RelayConcreteNode} = require('relay-runtime');

import type {GeneratedDefinition} from '../core/IR';
import type {Schema} from '../core/Schema';
import type {
  FormatModule,
  PluginInterface,
} from '../language/RelayLanguagePluginInterface';
import type CodegenDirectory from './CodegenDirectory';
import type {GeneratedNode, RequestParameters} from 'relay-runtime';

function getConcreteType(node: GeneratedNode): string {
  switch (node.kind) {
    case RelayConcreteNode.FRAGMENT:
      return 'ReaderFragment';
    case RelayConcreteNode.REQUEST:
      return 'ConcreteRequest';
    case RelayConcreteNode.SPLIT_OPERATION:
      return 'NormalizationSplitOperation';
    case RelayConcreteNode.INLINE_DATA_FRAGMENT:
      return 'ReaderInlineDataFragment';
    default:
      (node: empty);
      invariant(false, 'Unexpected GeneratedNode kind: `%s`.', node.kind);
  }
}

function writeRelayGeneratedFile(
  schema: Schema,
  codegenDir: CodegenDirectory,
  definition: GeneratedDefinition,
  _generatedNode: GeneratedNode,
  formatModule: FormatModule,
  typeText: string,
  _persistQuery: ?(text: string) => Promise<string>,
  sourceHash: string,
  extension: string,
  printModuleDependency: (
    moduleName: string,
  ) => string = createPrintRequireModuleDependency(),
  shouldRepersist: boolean,
  writeQueryParameters: (
    dir: CodegenDirectory,
    filename: string,
    moduleName: string,
    params: RequestParameters,
  ) => void,
  languagePlugin: ?PluginInterface,
): Promise<?GeneratedNode> {
  let generatedNode: GeneratedNode = _generatedNode;
  // Copy to const so Flow can refine.
  const persistQuery = _persistQuery;
  const operationName =
    generatedNode.kind === 'Request'
      ? generatedNode.params.name
      : generatedNode.name;
  const moduleName = languagePlugin?.getModuleName
    ? languagePlugin.getModuleName(operationName)
    : operationName + '.graphql';

  const filename = moduleName + '.' + extension;
  const queryParametersFilename =
    generatedNode.kind === 'Request'
      ? `${generatedNode.params.name}$Parameters.${extension}`
      : null;

  const typeName = getConcreteType(generatedNode);

  let docText;
  if (generatedNode.kind === RelayConcreteNode.REQUEST) {
    docText =
      generatedNode.params.text != null ? generatedNode.params.text : null;
  }

  // Use `Promise.resolve` to work around a Babel 7.8/7.9 issue.
  return Promise.resolve().then(async () => {
    let hash = null;
    if (generatedNode.kind === RelayConcreteNode.REQUEST) {
      invariant(
        docText != null,
        'writeRelayGeneratedFile: Expected `text` for operations to be set.',
      );

      const {
        isRefetchableQuery: _ignored,
        derivedFrom: _ignored2,
        ...nextMetadata
      } = generatedNode.params.metadata;

      let nextRequestParams;
      if (persistQuery != null) {
        hash = md5(docText);

        let id = null;
        if (!shouldRepersist) {
          // Unless we `shouldRepersist` the query, check if the @relayHash matches
          // the operation text of the current text and re-use the persisted
          // operation id.
          const oldContent = codegenDir.read(filename);
          const oldHash = extractHash(oldContent);
          const oldRequestID = extractRelayRequestID(oldContent);
          if (hash === oldHash && oldRequestID != null) {
            id = oldRequestID;
          }
        }
        if (id == null) {
          // $FlowFixMe[incompatible-call]
          id = await persistQuery(docText);
        }
        nextRequestParams = {
          id,
          metadata: nextMetadata,
          // $FlowFixMe[prop-missing]
          // $FlowFixMe[incompatible-use]
          name: generatedNode.params.name,
          // $FlowFixMe[prop-missing]
          // $FlowFixMe[incompatible-use]
          operationKind: generatedNode.params.operationKind,
          text: null,
        };
      } else {
        nextRequestParams = {
          cacheID: md5(docText),
          id: null,
          metadata: nextMetadata,
          // $FlowFixMe[prop-missing]
          // $FlowFixMe[incompatible-use]
          name: generatedNode.params.name,
          // $FlowFixMe[prop-missing]
          // $FlowFixMe[incompatible-use]
          operationKind: generatedNode.params.operationKind,
          text: docText,
        };
      }
      // $FlowFixMe[incompatible-type]
      generatedNode = {
        ...generatedNode,
        // $FlowFixMe[incompatible-type]
        params: nextRequestParams,
      };
    }

    // Strip metadata only used within the compiler
    if (
      generatedNode.kind === RelayConcreteNode.SPLIT_OPERATION &&
      generatedNode.metadata?.derivedFrom != null
    ) {
      const {derivedFrom: _ignored, ...metadata} = generatedNode.metadata;
      // $FlowFixMe[incompatible-type]
      generatedNode = {
        ...generatedNode,
        metadata,
      };
    }

    const moduleText = formatModule({
      moduleName,
      documentType: typeName,
      definition,
      kind: generatedNode.kind,
      docText,
      typeText,
      hash: hash != null ? `@relayHash ${hash}` : null,
      concreteText: CodeMarker.postProcess(
        dedupeJSONStringify(generatedNode),
        printModuleDependency,
      ),
      sourceHash,
      // $FlowFixMe[incompatible-call]
      node: generatedNode,
      schema,
    });
    codegenDir.writeFile(filename, moduleText, shouldRepersist);
    if (
      writeQueryParameters &&
      queryParametersFilename != null &&
      generatedNode.kind === RelayConcreteNode.REQUEST &&
      // $FlowFixMe[incompatible-type]
      generatedNode.params.operationKind === 'query'
    ) {
      writeQueryParameters(
        codegenDir,
        queryParametersFilename,
        moduleName,
        // $FlowFixMe[incompatible-call]
        generatedNode.params,
      );
    }
    // $FlowFixMe[incompatible-call]
    return generatedNode;
  });
}

function extractHash(text: ?string): ?string {
  if (text == null || text.length === 0) {
    return null;
  }
  if (/<<<<<|>>>>>/.test(text)) {
    // looks like a merge conflict
    return null;
  }
  const match = text.match(/@relayHash (\w{32})\b/m);
  return match && match[1];
}

function extractRelayRequestID(text: ?string): ?string {
  if (text == null || text.length === 0) {
    return null;
  }
  if (/<<<<<|>>>>>/.test(text)) {
    // looks like a merge conflict
    return null;
  }
  const match = text.match(/@relayRequestID (.+)/);
  return match ? match[1] : null;
}

module.exports = writeRelayGeneratedFile;
