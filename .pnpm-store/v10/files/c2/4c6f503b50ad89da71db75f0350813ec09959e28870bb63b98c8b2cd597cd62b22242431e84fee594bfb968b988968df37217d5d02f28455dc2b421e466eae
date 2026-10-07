'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _childContext = require('./childContext');var _childContext2 = _interopRequireDefault(_childContext);
var _remotePath = require('./remotePath');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Namespace = function () {
  function Namespace(
  path,
  context,
  ExportMapBuilder)
  {_classCallCheck(this, Namespace);
    this.remotePathResolver = new _remotePath.RemotePath(path, context);
    this.context = context;
    this.ExportMapBuilder = ExportMapBuilder;
    this.namespaces = new Map();
  }_createClass(Namespace, [{ key: 'resolveImport', value: function () {function resolveImport(

      value) {
        var rp = this.remotePathResolver.resolve(value);
        if (rp == null) {return null;}
        return this.ExportMapBuilder['for']((0, _childContext2['default'])(rp, this.context));
      }return resolveImport;}() }, { key: 'getNamespace', value: function () {function getNamespace(

      identifier) {var _this = this;
        if (!this.namespaces.has(identifier.name)) {return;}
        return function () {return _this.resolveImport(_this.namespaces.get(identifier.name));};
      }return getNamespace;}() }, { key: 'add', value: function () {function add(

      object, identifier) {
        var nsfn = this.getNamespace(identifier);
        if (nsfn) {
          Object.defineProperty(object, 'namespace', { get: nsfn });
        }

        return object;
      }return add;}() }, { key: 'rawSet', value: function () {function rawSet(

      name, value) {
        this.namespaces.set(name, value);
      }return rawSet;}() }]);return Namespace;}();exports['default'] = Namespace;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHBvcnRNYXAvbmFtZXNwYWNlLmpzIl0sIm5hbWVzIjpbIk5hbWVzcGFjZSIsInBhdGgiLCJjb250ZXh0IiwiRXhwb3J0TWFwQnVpbGRlciIsInJlbW90ZVBhdGhSZXNvbHZlciIsIlJlbW90ZVBhdGgiLCJuYW1lc3BhY2VzIiwiTWFwIiwidmFsdWUiLCJycCIsInJlc29sdmUiLCJpZGVudGlmaWVyIiwiaGFzIiwibmFtZSIsInJlc29sdmVJbXBvcnQiLCJnZXQiLCJvYmplY3QiLCJuc2ZuIiwiZ2V0TmFtZXNwYWNlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzZXQiXSwibWFwcGluZ3MiOiJnbkJBQUEsOEM7QUFDQSwwQzs7QUFFcUJBLFM7QUFDbkI7QUFDRUMsTUFERjtBQUVFQyxTQUZGO0FBR0VDLGtCQUhGO0FBSUU7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixJQUFJQyxzQkFBSixDQUFlSixJQUFmLEVBQXFCQyxPQUFyQixDQUExQjtBQUNBLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCQSxnQkFBeEI7QUFDQSxTQUFLRyxVQUFMLEdBQWtCLElBQUlDLEdBQUosRUFBbEI7QUFDRCxHOztBQUVhQyxXLEVBQU87QUFDbkIsWUFBTUMsS0FBSyxLQUFLTCxrQkFBTCxDQUF3Qk0sT0FBeEIsQ0FBZ0NGLEtBQWhDLENBQVg7QUFDQSxZQUFJQyxNQUFNLElBQVYsRUFBZ0IsQ0FBRSxPQUFPLElBQVAsQ0FBYztBQUNoQyxlQUFPLEtBQUtOLGdCQUFMLFFBQTBCLCtCQUFhTSxFQUFiLEVBQWlCLEtBQUtQLE9BQXRCLENBQTFCLENBQVA7QUFDRCxPOztBQUVZUyxnQixFQUFZO0FBQ3ZCLFlBQUksQ0FBQyxLQUFLTCxVQUFMLENBQWdCTSxHQUFoQixDQUFvQkQsV0FBV0UsSUFBL0IsQ0FBTCxFQUEyQyxDQUFFLE9BQVM7QUFDdEQsZUFBTyxvQkFBTSxNQUFLQyxhQUFMLENBQW1CLE1BQUtSLFVBQUwsQ0FBZ0JTLEdBQWhCLENBQW9CSixXQUFXRSxJQUEvQixDQUFuQixDQUFOLEVBQVA7QUFDRCxPOztBQUVHRyxZLEVBQVFMLFUsRUFBWTtBQUN0QixZQUFNTSxPQUFPLEtBQUtDLFlBQUwsQ0FBa0JQLFVBQWxCLENBQWI7QUFDQSxZQUFJTSxJQUFKLEVBQVU7QUFDUkUsaUJBQU9DLGNBQVAsQ0FBc0JKLE1BQXRCLEVBQThCLFdBQTlCLEVBQTJDLEVBQUVELEtBQUtFLElBQVAsRUFBM0M7QUFDRDs7QUFFRCxlQUFPRCxNQUFQO0FBQ0QsTzs7QUFFTUgsVSxFQUFNTCxLLEVBQU87QUFDbEIsYUFBS0YsVUFBTCxDQUFnQmUsR0FBaEIsQ0FBb0JSLElBQXBCLEVBQTBCTCxLQUExQjtBQUNELE8sZ0VBbENrQlIsUyIsImZpbGUiOiJuYW1lc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hpbGRDb250ZXh0IGZyb20gJy4vY2hpbGRDb250ZXh0JztcbmltcG9ydCB7IFJlbW90ZVBhdGggfSBmcm9tICcuL3JlbW90ZVBhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYW1lc3BhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRoLFxuICAgIGNvbnRleHQsXG4gICAgRXhwb3J0TWFwQnVpbGRlcixcbiAgKSB7XG4gICAgdGhpcy5yZW1vdGVQYXRoUmVzb2x2ZXIgPSBuZXcgUmVtb3RlUGF0aChwYXRoLCBjb250ZXh0KTtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuRXhwb3J0TWFwQnVpbGRlciA9IEV4cG9ydE1hcEJ1aWxkZXI7XG4gICAgdGhpcy5uYW1lc3BhY2VzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgcmVzb2x2ZUltcG9ydCh2YWx1ZSkge1xuICAgIGNvbnN0IHJwID0gdGhpcy5yZW1vdGVQYXRoUmVzb2x2ZXIucmVzb2x2ZSh2YWx1ZSk7XG4gICAgaWYgKHJwID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gdGhpcy5FeHBvcnRNYXBCdWlsZGVyLmZvcihjaGlsZENvbnRleHQocnAsIHRoaXMuY29udGV4dCkpO1xuICB9XG5cbiAgZ2V0TmFtZXNwYWNlKGlkZW50aWZpZXIpIHtcbiAgICBpZiAoIXRoaXMubmFtZXNwYWNlcy5oYXMoaWRlbnRpZmllci5uYW1lKSkgeyByZXR1cm47IH1cbiAgICByZXR1cm4gKCkgPT4gdGhpcy5yZXNvbHZlSW1wb3J0KHRoaXMubmFtZXNwYWNlcy5nZXQoaWRlbnRpZmllci5uYW1lKSk7XG4gIH1cblxuICBhZGQob2JqZWN0LCBpZGVudGlmaWVyKSB7XG4gICAgY29uc3QgbnNmbiA9IHRoaXMuZ2V0TmFtZXNwYWNlKGlkZW50aWZpZXIpO1xuICAgIGlmIChuc2ZuKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCAnbmFtZXNwYWNlJywgeyBnZXQ6IG5zZm4gfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIHJhd1NldChuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubmFtZXNwYWNlcy5zZXQobmFtZSwgdmFsdWUpO1xuICB9XG59XG4iXX0=