'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readFromFixture;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _node = require('when/node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * reads the text contents of <name>.txt in the fixtures folder
 * relative to the caller module's test file
 * @param  {String} name - the name of the fixture you want to read
 * @return {Promise<String>} - the retrieved fixture's file contents
 */
function readFromFixture(dirname, name) {
  return _node2.default.call(_fs2.default.readFile, _path2.default.join(dirname, 'fixtures/' + name + '.txt'), 'utf8').then(function (contents) {
    return contents.replace(/\r\n/g, '\n').trim();
  });
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9yZWFkRnJvbUZpeHR1cmUvcmVhZEZyb21GaXh0dXJlLmpzIl0sIm5hbWVzIjpbInJlYWRGcm9tRml4dHVyZSIsImRpcm5hbWUiLCJuYW1lIiwibm9kZSIsImNhbGwiLCJmcyIsInJlYWRGaWxlIiwicGF0aCIsImpvaW4iLCJ0aGVuIiwiY29udGVudHMiLCJyZXBsYWNlIiwidHJpbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBVXdCQSxlOztBQVZ4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7QUFNZSxTQUFTQSxlQUFULENBQXlCQyxPQUF6QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDckQsU0FBT0MsZUFDSkMsSUFESSxDQUNDQyxhQUFHQyxRQURKLEVBQ2NDLGVBQUtDLElBQUwsQ0FBVVAsT0FBVixnQkFBK0JDLElBQS9CLFVBRGQsRUFDMEQsTUFEMUQsRUFFSk8sSUFGSSxDQUVDO0FBQUEsV0FBWUMsU0FBU0MsT0FBVCxDQUFpQixPQUFqQixFQUEwQixJQUExQixFQUFnQ0MsSUFBaEMsRUFBWjtBQUFBLEdBRkQsQ0FBUDtBQUdEIiwiZmlsZSI6InJlYWRGcm9tRml4dHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBub2RlIGZyb20gJ3doZW4vbm9kZSc7XG5cbi8qKlxuICogcmVhZHMgdGhlIHRleHQgY29udGVudHMgb2YgPG5hbWU+LnR4dCBpbiB0aGUgZml4dHVyZXMgZm9sZGVyXG4gKiByZWxhdGl2ZSB0byB0aGUgY2FsbGVyIG1vZHVsZSdzIHRlc3QgZmlsZVxuICogQHBhcmFtICB7U3RyaW5nfSBuYW1lIC0gdGhlIG5hbWUgb2YgdGhlIGZpeHR1cmUgeW91IHdhbnQgdG8gcmVhZFxuICogQHJldHVybiB7UHJvbWlzZTxTdHJpbmc+fSAtIHRoZSByZXRyaWV2ZWQgZml4dHVyZSdzIGZpbGUgY29udGVudHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZEZyb21GaXh0dXJlKGRpcm5hbWUsIG5hbWUpIHtcbiAgcmV0dXJuIG5vZGVcbiAgICAuY2FsbChmcy5yZWFkRmlsZSwgcGF0aC5qb2luKGRpcm5hbWUsIGBmaXh0dXJlcy8ke25hbWV9LnR4dGApLCAndXRmOCcpXG4gICAgLnRoZW4oY29udGVudHMgPT4gY29udGVudHMucmVwbGFjZSgvXFxyXFxuL2csICdcXG4nKS50cmltKCkpO1xufVxuIl19