"use strict";

exports.__esModule = true;

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

exports.default = mergeSourceMap;

var _sourceMap = require("source-map");

var _sourceMap2 = _interopRequireDefault(_sourceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeSourceMap(inputMap, map) {
  var input = buildMappingData(inputMap);
  var output = buildMappingData(map);

  var mergedGenerator = new _sourceMap2.default.SourceMapGenerator();
  for (var _iterator = input.sources, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var _ref4 = _ref2;
    var _source = _ref4.source;

    if (typeof _source.content === "string") {
      mergedGenerator.setSourceContent(_source.path, _source.content);
    }
  }

  if (output.sources.length === 1) {
    var defaultSource = output.sources[0];
    var insertedMappings = new _map2.default();

    eachInputGeneratedRange(input, function (generated, original, source) {
      eachOverlappingGeneratedOutputRange(defaultSource, generated, function (item) {
        var key = makeMappingKey(item);
        if (insertedMappings.has(key)) return;
        insertedMappings.set(key, item);

        mergedGenerator.addMapping({
          source: source.path,
          original: {
            line: original.line,
            column: original.columnStart
          },
          generated: {
            line: item.line,
            column: item.columnStart
          },
          name: original.name
        });
      });
    });

    for (var _iterator2 = insertedMappings.values(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var item = _ref3;

      if (item.columnEnd === Infinity) {
        continue;
      }

      var clearItem = {
        line: item.line,
        columnStart: item.columnEnd
      };

      var key = makeMappingKey(clearItem);
      if (insertedMappings.has(key)) {
        continue;
      }

      mergedGenerator.addMapping({
        generated: {
          line: clearItem.line,
          column: clearItem.columnStart
        }
      });
    }
  }

  var result = mergedGenerator.toJSON();

  if (typeof input.sourceRoot === "string") {
    result.sourceRoot = input.sourceRoot;
  }
  return result;
}

function makeMappingKey(item) {
  return (0, _stringify2.default)([item.line, item.columnStart]);
}

function eachOverlappingGeneratedOutputRange(outputFile, inputGeneratedRange, callback) {
  var overlappingOriginal = filterApplicableOriginalRanges(outputFile, inputGeneratedRange);

  for (var _iterator3 = overlappingOriginal, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
    var _ref6;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref6 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref6 = _i3.value;
    }

    var _ref7 = _ref6;
    var _generated = _ref7.generated;

    for (var _iterator4 = _generated, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
      var _ref8;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref8 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref8 = _i4.value;
      }

      var item = _ref8;

      callback(item);
    }
  }
}

function filterApplicableOriginalRanges(_ref9, _ref10) {
  var mappings = _ref9.mappings;
  var line = _ref10.line,
      columnStart = _ref10.columnStart,
      columnEnd = _ref10.columnEnd;

  return filterSortedArray(mappings, function (_ref11) {
    var outOriginal = _ref11.original;

    if (line > outOriginal.line) return -1;
    if (line < outOriginal.line) return 1;

    if (columnStart >= outOriginal.columnEnd) return -1;
    if (columnEnd <= outOriginal.columnStart) return 1;

    return 0;
  });
}

function eachInputGeneratedRange(map, callback) {
  for (var _iterator5 = map.sources, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
    var _ref13;

    if (_isArray5) {
      if (_i5 >= _iterator5.length) break;
      _ref13 = _iterator5[_i5++];
    } else {
      _i5 = _iterator5.next();
      if (_i5.done) break;
      _ref13 = _i5.value;
    }

    var _ref14 = _ref13;
    var _source2 = _ref14.source,
        _mappings = _ref14.mappings;

    for (var _iterator6 = _mappings, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
      var _ref16;

      if (_isArray6) {
        if (_i6 >= _iterator6.length) break;
        _ref16 = _iterator6[_i6++];
      } else {
        _i6 = _iterator6.next();
        if (_i6.done) break;
        _ref16 = _i6.value;
      }

      var _ref17 = _ref16;
      var _original = _ref17.original,
          _generated2 = _ref17.generated;

      for (var _iterator7 = _generated2, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
        var _ref18;

        if (_isArray7) {
          if (_i7 >= _iterator7.length) break;
          _ref18 = _iterator7[_i7++];
        } else {
          _i7 = _iterator7.next();
          if (_i7.done) break;
          _ref18 = _i7.value;
        }

        var item = _ref18;

        callback(item, _original, _source2);
      }
    }
  }
}

function buildMappingData(map) {
  var consumer = new _sourceMap2.default.SourceMapConsumer((0, _extends3.default)({}, map, {
    sourceRoot: null
  }));

  var sources = new _map2.default();
  var mappings = new _map2.default();

  var last = null;

  consumer.computeColumnSpans();

  consumer.eachMapping(function (m) {
    if (m.originalLine === null) return;

    var source = sources.get(m.source);
    if (!source) {
      source = {
        path: m.source,
        content: consumer.sourceContentFor(m.source, true)
      };
      sources.set(m.source, source);
    }

    var sourceData = mappings.get(source);
    if (!sourceData) {
      sourceData = {
        source: source,
        mappings: []
      };
      mappings.set(source, sourceData);
    }

    var obj = {
      line: m.originalLine,
      columnStart: m.originalColumn,
      columnEnd: Infinity,
      name: m.name
    };

    if (last && last.source === source && last.mapping.line === m.originalLine) {
      last.mapping.columnEnd = m.originalColumn;
    }

    last = {
      source: source,
      mapping: obj
    };

    sourceData.mappings.push({
      original: obj,
      generated: consumer.allGeneratedPositionsFor({
        source: m.source,
        line: m.originalLine,
        column: m.originalColumn
      }).map(function (item) {
        return {
          line: item.line,
          columnStart: item.column,

          columnEnd: item.lastColumn + 1
        };
      })
    });
  }, null, _sourceMap2.default.SourceMapConsumer.ORIGINAL_ORDER);

  return {
    file: map.file,
    sourceRoot: map.sourceRoot,
    sources: (0, _from2.default)(mappings.values())
  };
}

function findInsertionLocation(array, callback) {
  var left = 0;
  var right = array.length;
  while (left < right) {
    var mid = Math.floor((left + right) / 2);
    var item = array[mid];

    var result = callback(item);
    if (result === 0) {
      left = mid;
      break;
    }
    if (result >= 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  var i = left;
  if (i < array.length) {
    while (i > 0 && callback(array[i]) >= 0) {
      i--;
    }
    return i + 1;
  }

  return i;
}

function filterSortedArray(array, callback) {
  var start = findInsertionLocation(array, callback);

  var results = [];
  for (var i = start; i < array.length && callback(array[i]) === 0; i++) {
    results.push(array[i]);
  }

  return results;
}
module.exports = exports["default"];