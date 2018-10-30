"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var Events, Group, IORedisConnection, RedisConnection, parser;

  parser = require("./parser");

  Events = require("./Events");

  RedisConnection = require("./RedisConnection");

  IORedisConnection = require("./IORedisConnection");

  Group = function () {
    class Group {
      constructor(limiterOptions = {}) {
        this.deleteKey = this.deleteKey.bind(this);
        this.updateSettings = this.updateSettings.bind(this);
        this.limiterOptions = limiterOptions;
        parser.load(this.limiterOptions, this.defaults, this);
        this.Events = new Events(this);
        this.instances = {};
        this.Bottleneck = require("./Bottleneck");
        this._startAutoCleanup();
        this.sharedConnection = this.connection != null;
        if (this.connection == null) {
          if (this.limiterOptions.datastore === "redis") {
            this.connection = new RedisConnection(Object.assign({}, this.limiterOptions, { Events: this.Events }));
          } else if (this.limiterOptions.datastore === "ioredis") {
            this.connection = new IORedisConnection(Object.assign({}, this.limiterOptions, { Events: this.Events }));
          }
        }
      }

      key(key = "") {
        var ref;
        return (ref = this.instances[key]) != null ? ref : (() => {
          var limiter;
          limiter = this.instances[key] = new this.Bottleneck(Object.assign(this.limiterOptions, {
            id: `${this.id}-${key}`,
            timeout: this.timeout,
            connection: this.connection
          }));
          this.Events.trigger("created", [limiter, key]);
          return limiter;
        })();
      }

      deleteKey(key = "") {
        var instance;
        instance = this.instances[key];
        delete this.instances[key];
        return instance != null ? instance.disconnect() : void 0;
      }

      limiters() {
        var k, ref, results, v;
        ref = this.instances;
        results = [];
        for (k in ref) {
          v = ref[k];
          results.push({
            key: k,
            limiter: v
          });
        }
        return results;
      }

      keys() {
        return Object.keys(this.instances);
      }

      _startAutoCleanup() {
        var _this = this;

        var base;
        clearInterval(this.interval);
        return typeof (base = this.interval = setInterval(_asyncToGenerator(function* () {
          var e, k, ref, results, time, v;
          time = Date.now();
          ref = _this.instances;
          results = [];
          for (k in ref) {
            v = ref[k];
            try {
              if (yield v._store.__groupCheck__(time)) {
                results.push(_this.deleteKey(k));
              } else {
                results.push(void 0);
              }
            } catch (error) {
              e = error;
              results.push(v.Events.trigger("error", [e]));
            }
          }
          return results;
        }), this.timeout / 2)).unref === "function" ? base.unref() : void 0;
      }

      updateSettings(options = {}) {
        parser.overwrite(options, this.defaults, this);
        parser.overwrite(options, options, this.limiterOptions);
        if (options.timeout != null) {
          return this._startAutoCleanup();
        }
      }

      disconnect(flush = true) {
        var ref;
        if (!this.sharedConnection) {
          return (ref = this.connection) != null ? ref.disconnect(flush) : void 0;
        }
      }

    };

    Group.prototype.defaults = {
      timeout: 1000 * 60 * 5,
      connection: null,
      id: "group-key"
    };

    return Group;
  }.call(this);

  module.exports = Group;
}).call(undefined);