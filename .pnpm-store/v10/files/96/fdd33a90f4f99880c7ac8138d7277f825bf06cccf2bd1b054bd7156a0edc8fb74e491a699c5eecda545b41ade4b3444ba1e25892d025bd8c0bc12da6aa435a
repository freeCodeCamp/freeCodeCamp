/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+relay
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var invariant = require('invariant');

var md5 = require('../util/md5');

var _require = require('./extractAST'),
    toASTRecord = _require.toASTRecord;

var _require2 = require('graphql'),
    Source = _require2.Source,
    parse = _require2.parse;

var Sources = /*#__PURE__*/function () {
  Sources.fromSavedState = function fromSavedState(_ref) {
    var extractFromFile = _ref.extractFromFile,
        savedState = _ref.savedState;
    var state = {};

    var _iterator = (0, _createForOfIteratorHelper2["default"])(savedState),
        _step;

    try {
      var _loop = function _loop() {
        var _step$value = _step.value,
            file = _step$value.file,
            savedStateSources = _step$value.sources;
        var nodes = {};
        var sources = [];

        var _iterator2 = (0, _createForOfIteratorHelper2["default"])(savedStateSources),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var text = _step2.value;
            var doc = parse(new Source(text, file));
            !doc.definitions.length ? process.env.NODE_ENV !== "production" ? invariant(false, 'expected not empty list of definitions') : invariant(false) : void 0;
            var entities = doc.definitions.map(function (node) {
              return toASTRecord(node);
            });
            entities.forEach(function (astRecord) {
              nodes[md5(astRecord.text)] = astRecord.ast;
            });
            sources.push(text);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        state[file] = {
          nodes: nodes,
          sources: sources
        };
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return new Sources({
      extractFromFile: extractFromFile,
      state: state
    });
  };

  function Sources(_ref2) {
    var extractFromFile = _ref2.extractFromFile,
        state = _ref2.state;
    this._extractFromFile = extractFromFile;
    this._state = (0, _objectSpread2["default"])({}, state);
  }

  var _proto = Sources.prototype;

  _proto.processChanges = function processChanges(baseDir, files) {
    var _ast$name$value, _ast$name;

    var added = [];
    var removed = [];
    var state = (0, _objectSpread2["default"])({}, this._state);

    var _iterator3 = (0, _createForOfIteratorHelper2["default"])(files),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _state$file$name$node, _state$file$name;

        var _file = _step3.value;
        var newDefs = void 0;
        var newSources = void 0;

        try {
          var extracted = this._extractFromFile(baseDir, _file);

          if (extracted != null) {
            newDefs = extracted.nodes;
            newSources = extracted.sources;
          }
        } catch (error) {
          throw new Error("RelayCompiler: Sources module failed to parse ".concat(_file.name, ":\n").concat(error.message));
        }

        var hasEntry = state.hasOwnProperty(_file.name);
        var oldEntry = (_state$file$name$node = (_state$file$name = state[_file.name]) === null || _state$file$name === void 0 ? void 0 : _state$file$name.nodes) !== null && _state$file$name$node !== void 0 ? _state$file$name$node : {}; // First case, we have new changes in the file
        // for example changed Query or Fragment

        if (newDefs != null && newDefs.length > 0) {
          // We need to add all entities from the changed file to added arrays
          var newEntry = {};
          var newTexts = new Set();

          var _iterator4 = (0, _createForOfIteratorHelper2["default"])(newDefs),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = _step4.value,
                  _ast = _step4$value.ast,
                  text = _step4$value.text;
              var hashedText = md5(text);

              if (newTexts.has(hashedText)) {
                var name = 'unknown';

                switch (_ast.kind) {
                  case 'FragmentDefinition':
                    name = _ast.name.value;
                    break;

                  case 'OperationDefinition':
                    name = (_ast$name$value = (_ast$name = _ast.name) === null || _ast$name === void 0 ? void 0 : _ast$name.value) !== null && _ast$name$value !== void 0 ? _ast$name$value : 'unnamed operation';
                    break;
                }

                throw new Error("Duplicate definition of `".concat(name, "` in `").concat(_file.name, "`"));
              }

              newTexts.add(hashedText);

              if (hasEntry && oldEntry[hashedText] != null) {
                // Entity text did not change, so we
                // don't need to change it in the state
                newEntry[hashedText] = oldEntry[hashedText];
              } else {
                // Here we have completely new text.
                // We need add it to the `added` changes
                newEntry[hashedText] = _ast;
                added.push({
                  file: _file.name,
                  ast: _ast
                });
              }
            } // Also, we need to delete all old entities
            // that are not included in the new changes

          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (hasEntry) {
            for (var _i = 0, _Object$keys = Object.keys(oldEntry); _i < _Object$keys.length; _i++) {
              var oldHashedText = _Object$keys[_i];
              var ast = oldEntry[oldHashedText];

              if (!newTexts.has(oldHashedText)) {
                removed.push({
                  file: _file.name,
                  ast: ast
                });
              }
            }
          } // Finally, update the state with the changes


          state[_file.name] = {
            nodes: newEntry,
            // $FlowFixMe[incompatible-type]
            sources: newSources
          };
        } else {
          // Otherwise, file has been removed or there are no entities in the file
          if (hasEntry) {
            // We will put all ASTNodes from current state to removed collection
            for (var _i2 = 0, _Object$keys2 = Object.keys(oldEntry); _i2 < _Object$keys2.length; _i2++) {
              var _oldHashedText = _Object$keys2[_i2];
              var _ast2 = oldEntry[_oldHashedText];
              removed.push({
                file: _file.name,
                ast: _ast2
              });
            }

            delete state[_file.name];
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return {
      // $FlowFixMe[incompatible-return]
      changes: {
        added: added,
        removed: removed
      },
      sources: new Sources({
        extractFromFile: this._extractFromFile,
        state: state
      })
    };
  };

  _proto.nodes = function* nodes() {
    for (var _file2 in this._state) {
      var entry = this._state[_file2];

      for (var _i3 = 0, _Object$values = Object.values(entry.nodes); _i3 < _Object$values.length; _i3++) {
        var node = _Object$values[_i3];
        yield node;
      }
    }
  };

  _proto.serializeState = function serializeState() {
    var serializedState = [];

    for (var _file3 in this._state) {
      serializedState.push({
        file: _file3,
        sources: this._state[_file3].sources
      });
    }

    return serializedState;
  };

  return Sources;
}();

module.exports = Sources;