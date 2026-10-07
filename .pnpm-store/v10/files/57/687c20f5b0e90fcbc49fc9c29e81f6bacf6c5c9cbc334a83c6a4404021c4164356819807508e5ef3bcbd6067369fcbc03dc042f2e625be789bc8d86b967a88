/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var crypto = require('crypto');

var nullthrows = require('nullthrows');

var _require = require('./GraphQLASTUtils'),
    getName = _require.getName;

function createEmptyState() {
  return {
    artifacts: new Map(),
    metadata: new Map()
  };
}

function serializeState(state) {
  var json = [];

  var _iterator = (0, _createForOfIteratorHelper2["default"])(state.artifacts),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          name = _step$value[0],
          artifacts = _step$value[1];
      json.push([name, Array.from(artifacts).map(function (filename) {
        var _state$metadata$get;

        return [filename, (_state$metadata$get = state.metadata.get(filename)) !== null && _state$metadata$get !== void 0 ? _state$metadata$get : ''];
      })]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return json;
}

function deserializeState(json) {
  var metadata = new Map();
  var artifacts = new Map();
  json.forEach(function (_ref) {
    var name = _ref[0],
        artifactArray = _ref[1];
    var artifactsFiles = new Set();
    artifactArray.forEach(function (_ref2) {
      var filename = _ref2[0],
          sha1hex = _ref2[1];
      artifactsFiles.add(filename);
      metadata.set(filename, sha1hex);
    });
    artifacts.set(name, artifactsFiles);
  });
  return {
    artifacts: artifacts,
    metadata: metadata
  };
}

function updateState(state, changes, generatedArtifacts, filesystem, resolveFullPath) {
  var nextState = {
    artifacts: new Map(state.artifacts),
    metadata: new Map(state.metadata)
  };
  var deletionCandidates = new Set();
  var addedNames = new Set();

  var _iterator2 = (0, _createForOfIteratorHelper2["default"])(changes.added),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var ast = _step2.value.ast;
      addedNames.add(getName(ast));
    } // For every removed AST node, delete the generated artifacts tracked for that
    // node, unless the AST node was also added when the file was moved or the
    // AST changed which shows up as added and removed in changes.

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var _iterator3 = (0, _createForOfIteratorHelper2["default"])(changes.removed),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _ast = _step3.value.ast;
      var name = getName(_ast);

      if (addedNames.has(name)) {
        // Update, we deal with that when iterating the added nodes.
        continue;
      }

      var entry = nextState.artifacts.get(name);

      if (entry == null) {
        // No existing artifacts to delete
        continue;
      }

      var _iterator7 = (0, _createForOfIteratorHelper2["default"])(entry.keys()),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var outdatedFile = _step7.value;
          deletionCandidates.add(outdatedFile);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      nextState.artifacts["delete"](name);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var _iterator4 = (0, _createForOfIteratorHelper2["default"])(generatedArtifacts.artifacts),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _step4$value = _step4.value,
          _name = _step4$value[0],
          artifacts = _step4$value[1];
      var oldEntry = nextState.artifacts.get(_name);

      if (oldEntry != null) {
        var _iterator8 = (0, _createForOfIteratorHelper2["default"])(oldEntry),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _outdatedFile = _step8.value;

            if (!artifacts.has(_outdatedFile)) {
              deletionCandidates.add(_outdatedFile);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }

      nextState.artifacts.set(_name, artifacts);

      var _iterator9 = (0, _createForOfIteratorHelper2["default"])(artifacts.keys()),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _generatedArtifacts$m;

          var filename = _step9.value;
          nextState.metadata.set(filename, (_generatedArtifacts$m = generatedArtifacts.metadata.get(filename)) !== null && _generatedArtifacts$m !== void 0 ? _generatedArtifacts$m : '');
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  if (deletionCandidates.size === 0) {
    return nextState;
  }

  var nextGeneratedArtifacts = new Set();

  var _iterator5 = (0, _createForOfIteratorHelper2["default"])(eachNameAndArtifact(nextState)),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _step5$value = _step5.value,
          artifact = _step5$value[1];
      nextGeneratedArtifacts.add(artifact);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var _iterator6 = (0, _createForOfIteratorHelper2["default"])(deletionCandidates),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var candidate = _step6.value;
      var someoneElseArtifact = nextGeneratedArtifacts.has(candidate);

      if (someoneElseArtifact) {
        // Sometimes, there are artifacts that are generated by multiple files
        // If this candidate is also generated by someone else in
        // artifact map, we just skip it here
        continue;
      }

      var candidatePath = resolveFullPath(candidate);

      if (filesystem.existsSync(candidatePath)) {
        filesystem.unlinkSync(candidatePath);
        nextState.metadata["delete"](candidate);
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return nextState;
}

function producedFiles(dirs, artifactsMetadata) {
  var result = new Map();
  dirs.forEach(function (_ref3) {
    var baseDir = _ref3.baseDir,
        dir = _ref3.dir;
    var _dir$changes = dir.changes,
        deleted = _dir$changes.deleted,
        updated = _dir$changes.updated,
        created = _dir$changes.created,
        unchanged = _dir$changes.unchanged;

    if (deleted.length > 0) {
      throw new Error('Did not expect to see a deletion entry here.');
    }

    [].concat((0, _toConsumableArray2["default"])(updated), (0, _toConsumableArray2["default"])(created)).forEach(function (filename) {
      var name = dir.getPath(filename).substr(baseDir.length + 1);
      var sha1hex = sha1(nullthrows(dir.read(filename)));
      result.set(name, sha1hex);
    });
    unchanged.forEach(function (filename) {
      var name = dir.getPath(filename).substr(baseDir.length + 1);
      var sha1hex = artifactsMetadata.get(name);
      result.set(name, sha1hex !== null && sha1hex !== void 0 ? sha1hex : sha1(nullthrows(dir.read(filename))));
    });
  });
  return result;
}

function* eachNameAndArtifact(artifacts) {
  var _iterator10 = (0, _createForOfIteratorHelper2["default"])(artifacts.artifacts),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var _step10$value = _step10.value,
          name = _step10$value[0],
          artifactsForSource = _step10$value[1];

      var _iterator11 = (0, _createForOfIteratorHelper2["default"])(artifactsForSource.keys()),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var artifactFile = _step11.value;
          yield [name, artifactFile];
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
}

function sha1(content) {
  return crypto.createHash('sha1').update(content).digest('hex');
}

module.exports = {
  createEmptyState: createEmptyState,
  serializeState: serializeState,
  deserializeState: deserializeState,
  updateState: updateState,
  producedFiles: producedFiles,
  eachNameAndArtifact: eachNameAndArtifact
};