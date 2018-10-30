"use strict";

(function () {
  var Events;

  Events = class Events {
    constructor(instance) {
      this.instance = instance;
      this._events = {};
      this.instance.on = (name, cb) => {
        return this._addListener(name, "many", cb);
      };
      this.instance.once = (name, cb) => {
        return this._addListener(name, "once", cb);
      };
      this.instance.removeAllListeners = (name = null) => {
        if (name != null) {
          return delete this._events[name];
        } else {
          return this._events = {};
        }
      };
    }

    _addListener(name, status, cb) {
      var base;
      if ((base = this._events)[name] == null) {
        base[name] = [];
      }
      this._events[name].push({ cb, status });
      return this.instance;
    }

    trigger(name, args) {
      if (name !== "debug") {
        this.trigger("debug", [`Event triggered: ${name}`, args]);
      }
      if (this._events[name] == null) {
        return;
      }
      this._events[name] = this._events[name].filter(function (listener) {
        return listener.status !== "none";
      });
      return this._events[name].forEach(listener => {
        var e, ret;
        if (listener.status === "none") {
          return;
        }
        if (listener.status === "once") {
          listener.status = "none";
        }
        try {
          ret = listener.cb.apply({}, args);
          if (typeof (ret != null ? ret.then : void 0) === "function") {
            return ret.then(function () {}).catch(e => {
              return this.trigger("error", [e]);
            });
          }
        } catch (error) {
          e = error;
          if ("name" !== "error") {
            return this.trigger("error", [e]);
          }
        }
      });
    }

  };

  module.exports = Events;
}).call(undefined);