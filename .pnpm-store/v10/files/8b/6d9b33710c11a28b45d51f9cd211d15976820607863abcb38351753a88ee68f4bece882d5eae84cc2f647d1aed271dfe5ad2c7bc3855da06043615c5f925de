/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var CodeMarker = require('../util/CodeMarker');

var createPrintRequireModuleDependency = require('./createPrintRequireModuleDependency');

var dedupeJSONStringify = require('../util/dedupeJSONStringify');

var invariant = require('invariant');

var md5 = require('../util/md5');

var _require = require('relay-runtime'),
    RelayConcreteNode = _require.RelayConcreteNode;

function getConcreteType(node) {
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
      node;
      !false ? process.env.NODE_ENV !== "production" ? invariant(false, 'Unexpected GeneratedNode kind: `%s`.', node.kind) : invariant(false) : void 0;
  }
}

function writeRelayGeneratedFile(schema, codegenDir, definition, _generatedNode, formatModule, typeText, _persistQuery, sourceHash, extension) {
  var printModuleDependency = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : createPrintRequireModuleDependency();
  var shouldRepersist = arguments.length > 10 ? arguments[10] : undefined;
  var writeQueryParameters = arguments.length > 11 ? arguments[11] : undefined;
  var languagePlugin = arguments.length > 12 ? arguments[12] : undefined;
  var generatedNode = _generatedNode; // Copy to const so Flow can refine.

  var persistQuery = _persistQuery;
  var operationName = generatedNode.kind === 'Request' ? generatedNode.params.name : generatedNode.name;
  var moduleName = (languagePlugin === null || languagePlugin === void 0 ? void 0 : languagePlugin.getModuleName) ? languagePlugin.getModuleName(operationName) : operationName + '.graphql';
  var filename = moduleName + '.' + extension;
  var queryParametersFilename = generatedNode.kind === 'Request' ? "".concat(generatedNode.params.name, "$Parameters.").concat(extension) : null;
  var typeName = getConcreteType(generatedNode);
  var docText;

  if (generatedNode.kind === RelayConcreteNode.REQUEST) {
    docText = generatedNode.params.text != null ? generatedNode.params.text : null;
  } // Use `Promise.resolve` to work around a Babel 7.8/7.9 issue.


  return Promise.resolve().then( /*#__PURE__*/_asyncToGenerator(function* () {
    var _generatedNode$metada;

    var hash = null;

    if (generatedNode.kind === RelayConcreteNode.REQUEST) {
      !(docText != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'writeRelayGeneratedFile: Expected `text` for operations to be set.') : invariant(false) : void 0;
      var _generatedNode$params = generatedNode.params.metadata,
          _ignored = _generatedNode$params.isRefetchableQuery,
          _ignored2 = _generatedNode$params.derivedFrom,
          nextMetadata = (0, _objectWithoutPropertiesLoose2["default"])(_generatedNode$params, ["isRefetchableQuery", "derivedFrom"]);
      var nextRequestParams;

      if (persistQuery != null) {
        hash = md5(docText);
        var id = null;

        if (!shouldRepersist) {
          // Unless we `shouldRepersist` the query, check if the @relayHash matches
          // the operation text of the current text and re-use the persisted
          // operation id.
          var oldContent = codegenDir.read(filename);
          var oldHash = extractHash(oldContent);
          var oldRequestID = extractRelayRequestID(oldContent);

          if (hash === oldHash && oldRequestID != null) {
            id = oldRequestID;
          }
        }

        if (id == null) {
          // $FlowFixMe[incompatible-call]
          id = yield persistQuery(docText);
        }

        nextRequestParams = {
          id: id,
          metadata: nextMetadata,
          // $FlowFixMe[prop-missing]
          // $FlowFixMe[incompatible-use]
          name: generatedNode.params.name,
          // $FlowFixMe[prop-missing]
          // $FlowFixMe[incompatible-use]
          operationKind: generatedNode.params.operationKind,
          text: null
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
          text: docText
        };
      } // $FlowFixMe[incompatible-type]


      generatedNode = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, generatedNode), {}, {
        // $FlowFixMe[incompatible-type]
        params: nextRequestParams
      });
    } // Strip metadata only used within the compiler


    if (generatedNode.kind === RelayConcreteNode.SPLIT_OPERATION && ((_generatedNode$metada = generatedNode.metadata) === null || _generatedNode$metada === void 0 ? void 0 : _generatedNode$metada.derivedFrom) != null) {
      var _generatedNode$metada2 = generatedNode.metadata,
          _ignored3 = _generatedNode$metada2.derivedFrom,
          metadata = (0, _objectWithoutPropertiesLoose2["default"])(_generatedNode$metada2, ["derivedFrom"]); // $FlowFixMe[incompatible-type]

      generatedNode = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, generatedNode), {}, {
        metadata: metadata
      });
    }

    var moduleText = formatModule({
      moduleName: moduleName,
      documentType: typeName,
      definition: definition,
      kind: generatedNode.kind,
      docText: docText,
      typeText: typeText,
      hash: hash != null ? "@relayHash ".concat(hash) : null,
      concreteText: CodeMarker.postProcess(dedupeJSONStringify(generatedNode), printModuleDependency),
      sourceHash: sourceHash,
      // $FlowFixMe[incompatible-call]
      node: generatedNode,
      schema: schema
    });
    codegenDir.writeFile(filename, moduleText, shouldRepersist);

    if (writeQueryParameters && queryParametersFilename != null && generatedNode.kind === RelayConcreteNode.REQUEST && // $FlowFixMe[incompatible-type]
    generatedNode.params.operationKind === 'query') {
      writeQueryParameters(codegenDir, queryParametersFilename, moduleName, // $FlowFixMe[incompatible-call]
      generatedNode.params);
    } // $FlowFixMe[incompatible-call]


    return generatedNode;
  }));
}

function extractHash(text) {
  if (text == null || text.length === 0) {
    return null;
  }

  if (/<<<<<|>>>>>/.test(text)) {
    // looks like a merge conflict
    return null;
  }

  var match = text.match(/@relayHash (\w{32})\b/m);
  return match && match[1];
}

function extractRelayRequestID(text) {
  if (text == null || text.length === 0) {
    return null;
  }

  if (/<<<<<|>>>>>/.test(text)) {
    // looks like a merge conflict
    return null;
  }

  var match = text.match(/@relayRequestID (.+)/);
  return match ? match[1] : null;
}

module.exports = writeRelayGeneratedFile;