"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var BottleneckError, IORedisConnection, RedisConnection, RedisDatastore, parser;

  parser = require("./parser");

  BottleneckError = require("./BottleneckError");

  RedisConnection = require("./RedisConnection");

  IORedisConnection = require("./IORedisConnection");

  RedisDatastore = class RedisDatastore {
    constructor(instance, storeOptions, storeInstanceOptions) {
      this.instance = instance;
      this.storeOptions = storeOptions;
      this.originalId = this.instance.id;
      parser.load(storeInstanceOptions, storeInstanceOptions, this);
      this.clients = {};
      this.sharedConnection = this.connection != null;
      if (this.connection == null) {
        this.connection = this.instance.datastore === "redis" ? new RedisConnection({
          clientOptions: this.clientOptions,
          Promise: this.Promise,
          Events: this.instance.Events
        }) : this.instance.datastore === "ioredis" ? new IORedisConnection({
          clientOptions: this.clientOptions,
          clusterNodes: this.clusterNodes,
          Promise: this.Promise,
          Events: this.instance.Events
        }) : void 0;
      }
      this.instance.connection = this.connection;
      this.instance.datastore = this.connection.datastore;
      this.ready = this.connection.ready.then(clients => {
        this.clients = clients;
        return this.runScript("init", this.prepareInitSettings(this.clearDatastore));
      }).then(() => {
        return this.connection.__addLimiter__(this.instance);
      }).then(() => {
        var base;
        if (typeof (base = this.heartbeat = setInterval(() => {
          return this.runScript("heartbeat", []).catch(e => {
            return this.instance.Events.trigger("error", [e]);
          });
        }, this.heartbeatInterval)).unref === "function") {
          base.unref();
        }
        return this.clients;
      });
    }

    __publish__(message) {
      var _this = this;

      return _asyncToGenerator(function* () {
        var client;

        var _ref = yield _this.ready;

        client = _ref.client;

        return client.publish(_this.instance.channel(), `message:${message.toString()}`);
      })();
    }

    onMessage(message) {
      var data, pos, type;
      pos = message.indexOf(":");
      var _ref2 = [message.slice(0, pos), message.slice(pos + 1)];
      type = _ref2[0];
      data = _ref2[1];

      if (type === "capacity") {
        return this.instance._drainAll(data.length > 0 ? ~~data : void 0);
      } else if (type === "message") {
        return this.instance.Events.trigger("message", [data]);
      } else if (type === "blocked") {
        return this.instance._dropAllQueued();
      }
    }

    __disconnect__(flush) {
      clearInterval(this.heartbeat);
      if (this.sharedConnection) {
        return this.connection.__removeLimiter__(this.instance);
      } else {
        return this.connection.disconnect(flush);
      }
    }

    runScript(name, args) {
      var _this2 = this;

      return _asyncToGenerator(function* () {
        if (!(name === "init" || name === "heartbeat")) {
          yield _this2.ready;
        }
        args.unshift(Date.now().toString());
        return new _this2.Promise(function (resolve, reject) {
          var arr;
          _this2.instance.Events.trigger("debug", [`Calling Redis script: ${name}.lua`, args]);
          arr = _this2.connection.__scriptArgs__(name, _this2.originalId, args, function (err, replies) {
            if (err != null) {
              return reject(err);
            }
            return resolve(replies);
          });
          return _this2.connection.__scriptFn__(name).apply({}, arr);
        }).catch(function (e) {
          if (e.message === "SETTINGS_KEY_NOT_FOUND") {
            return _this2.runScript("init", _this2.prepareInitSettings(false)).then(function () {
              return _this2.runScript(name, args);
            });
          } else {
            return _this2.Promise.reject(e);
          }
        });
      })();
    }

    prepareArray(arr) {
      var i, len, results, x;
      results = [];
      for (i = 0, len = arr.length; i < len; i++) {
        x = arr[i];
        results.push(x != null ? x.toString() : "");
      }
      return results;
    }

    prepareObject(obj) {
      var arr, k, v;
      arr = [];
      for (k in obj) {
        v = obj[k];
        arr.push(k, v != null ? v.toString() : "");
      }
      return arr;
    }

    prepareInitSettings(clear) {
      var args;
      args = this.prepareObject(Object.assign({}, this.storeOptions, {
        id: this.originalId,
        version: this.instance.version,
        groupTimeout: this.timeout
      }));
      args.unshift(clear ? 1 : 0, this.instance.version);
      return args;
    }

    convertBool(b) {
      return !!b;
    }

    __updateSettings__(options) {
      var _this3 = this;

      return _asyncToGenerator(function* () {
        yield _this3.runScript("update_settings", _this3.prepareObject(options));
        return parser.overwrite(options, options, _this3.storeOptions);
      })();
    }

    __running__() {
      return this.runScript("running", []);
    }

    __done__() {
      return this.runScript("done", []);
    }

    __groupCheck__() {
      var _this4 = this;

      return _asyncToGenerator(function* () {
        return _this4.convertBool((yield _this4.runScript("group_check", [])));
      })();
    }

    __incrementReservoir__(incr) {
      return this.runScript("increment_reservoir", [incr]);
    }

    __currentReservoir__() {
      return this.runScript("current_reservoir", []);
    }

    __check__(weight) {
      var _this5 = this;

      return _asyncToGenerator(function* () {
        return _this5.convertBool((yield _this5.runScript("check", _this5.prepareArray([weight]))));
      })();
    }

    __register__(index, weight, expiration) {
      var _this6 = this;

      return _asyncToGenerator(function* () {
        var reservoir, success, wait;

        var _ref3 = yield _this6.runScript("register", _this6.prepareArray([index, weight, expiration]));

        var _ref4 = _slicedToArray(_ref3, 3);

        success = _ref4[0];
        wait = _ref4[1];
        reservoir = _ref4[2];

        return {
          success: _this6.convertBool(success),
          wait,
          reservoir
        };
      })();
    }

    __submit__(queueLength, weight) {
      var _this7 = this;

      return _asyncToGenerator(function* () {
        var blocked, e, maxConcurrent, overweight, reachedHWM, strategy;
        try {
          var _ref5 = yield _this7.runScript("submit", _this7.prepareArray([queueLength, weight]));

          var _ref6 = _slicedToArray(_ref5, 3);

          reachedHWM = _ref6[0];
          blocked = _ref6[1];
          strategy = _ref6[2];

          return {
            reachedHWM: _this7.convertBool(reachedHWM),
            blocked: _this7.convertBool(blocked),
            strategy
          };
        } catch (error) {
          e = error;
          if (e.message.indexOf("OVERWEIGHT") === 0) {
            var _e$message$split = e.message.split(":");

            var _e$message$split2 = _slicedToArray(_e$message$split, 3);

            overweight = _e$message$split2[0];
            weight = _e$message$split2[1];
            maxConcurrent = _e$message$split2[2];

            throw new BottleneckError(`Impossible to add a job having a weight of ${weight} to a limiter having a maxConcurrent setting of ${maxConcurrent}`);
          } else {
            throw e;
          }
        }
      })();
    }

    __free__(index, weight) {
      var _this8 = this;

      return _asyncToGenerator(function* () {
        var running;
        running = yield _this8.runScript("free", _this8.prepareArray([index]));
        return { running };
      })();
    }

  };

  module.exports = RedisDatastore;
}).call(undefined);