"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireDefault(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Profiler {
  startProfiling() {
    let inspector;

    try {
      inspector = require('inspector');
    } catch (err) {
      throw new (_diagnostic().default)({
        diagnostic: {
          message: `The inspector module isn't available`,
          origin: '@parcel/workers',
          hints: ['Disable build profiling']
        }
      });
    }

    this.session = new inspector.Session();
    this.session.connect();
    return Promise.all([this.sendCommand('Profiler.setSamplingInterval', {
      interval: 100
    }), this.sendCommand('Profiler.enable'), this.sendCommand('Profiler.start')]);
  }

  sendCommand(method, params) {
    (0, _assert().default)(this.session != null);
    return new Promise((resolve, reject) => {
      this.session.post(method, params, (err, params) => {
        if (err == null) {
          resolve(params);
        } else {
          reject(err);
        }
      });
    });
  }

  destroy() {
    if (this.session != null) {
      this.session.disconnect();
    }
  }

  async stopProfiling() {
    let res = await this.sendCommand('Profiler.stop');
    this.destroy();
    return res.profile;
  }

}

exports.default = Profiler;