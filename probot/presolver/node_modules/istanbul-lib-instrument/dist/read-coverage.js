'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = readInitialCoverage;

var _constants = require('./constants');

var _babylon = require('babylon');

var _babelTraverse = require('babel-traverse');

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _babelTypes = require('babel-types');

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readInitialCoverage(code) {
    if (typeof code !== 'string') {
        throw new Error('Code must be a string');
    }

    // Parse as leniently as possible
    var ast = (0, _babylon.parse)(code, {
        allowImportExportEverywhere: true,
        allowReturnOutsideFunction: true,
        allowSuperOutsideMethod: true,
        sourceType: "script", // I think ?
        plugins: ["*"]
    });

    var covScope = void 0;
    (0, _babelTraverse2.default)(ast, {
        ObjectProperty: function ObjectProperty(path) {
            var node = path.node;

            if (!node.computed && t.isIdentifier(node.key) && node.key.name === _constants.MAGIC_KEY) {
                var magicValue = path.get('value').evaluate();
                if (!magicValue.confident || magicValue.value !== _constants.MAGIC_VALUE) {
                    return;
                }
                covScope = path.scope.getFunctionParent() || path.scope.getProgramParent();
                path.stop();
            }
        }
    });

    if (!covScope) {
        return null;
    }

    var result = {};

    var _arr = ['path', 'hash', 'gcv', 'coverageData'];
    for (var _i = 0; _i < _arr.length; _i++) {
        var key = _arr[_i];
        var binding = covScope.getOwnBinding(key);
        if (!binding) {
            return null;
        }
        var valuePath = binding.path.get('init');
        var value = valuePath.evaluate();
        if (!value.confident) {
            return null;
        }
        result[key] = value.value;
    }

    delete result.coverageData[_constants.MAGIC_KEY];

    return result;
}