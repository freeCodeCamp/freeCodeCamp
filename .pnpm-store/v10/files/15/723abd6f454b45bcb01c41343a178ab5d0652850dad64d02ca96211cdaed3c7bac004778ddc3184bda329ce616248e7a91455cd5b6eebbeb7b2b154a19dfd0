"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _core() {
  const data = require("@parcel/core");

  _core = function () {
    return data;
  };

  return data;
}

var _package = _interopRequireDefault(require("../package.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// $FlowFixMe
let HANDLE_ID = 0; // $FlowFixMe

const handleById = new Map();

class Handle {
  constructor(opts) {
    var _opts$id;

    this.id = (_opts$id = opts.id) !== null && _opts$id !== void 0 ? _opts$id : ++HANDLE_ID;
    this.fn = opts.fn;
    this.childId = opts.childId;
    handleById.set(this.id, this);
  }

  dispose() {
    handleById.delete(this.id);
  }

  serialize() {
    return {
      id: this.id,
      childId: this.childId
    };
  }

  static deserialize(opts) {
    return new Handle(opts);
  }

} // Register the Handle as a serializable class so that it will properly be deserialized
// by anything that uses WorkerFarm.


exports.default = Handle;
(0, _core().registerSerializableClass)(`${_package.default.version}:Handle`, Handle);