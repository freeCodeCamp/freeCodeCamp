"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var Events, RedisConnection, Scripts, parser;

  parser = require("./parser");

  Events = require("./Events");

  Scripts = require("./Scripts");

  RedisConnection = function () {
    class RedisConnection {
      constructor(options = {}) {
        var Redis;
        Redis = eval("require")("redis"); // Obfuscated or else Webpack/Angular will try to inline the optional redis module
        parser.load(options, this.defaults, this);
        if (this.Events == null) {
          this.Events = new Events(this);
        }
        this.terminated = false;
        if (this.client == null) {
          this.client = Redis.createClient(this.clientOptions);
        }
        this.subscriber = this.client.duplicate();
        this.limiters = {};
        this.shas = {};
        this.ready = this.Promise.all([this._setup(this.client, false), this._setup(this.subscriber, true)]).then(() => {
          return this._loadScripts();
        }).then(() => {
          return { client: this.client, subscriber: this.subscriber };
        });
      }

      _setup(client, subscriber) {
        return new this.Promise((resolve, reject) => {
          client.on("error", e => {
            return this.Events.trigger("error", [e]);
          });
          if (subscriber) {
            client.on("message", (channel, message) => {
              var ref;
              return (ref = this.limiters[channel]) != null ? ref._store.onMessage(message) : void 0;
            });
          }
          if (client.ready) {
            return resolve();
          } else {
            return client.once("ready", resolve);
          }
        });
      }

      _loadScript(name) {
        return new this.Promise((resolve, reject) => {
          var payload;
          payload = Scripts.payload(name);
          return this.client.multi([["script", "load", payload]]).exec((err, replies) => {
            if (err != null) {
              return reject(err);
            }
            this.shas[name] = replies[0];
            return resolve(replies[0]);
          });
        });
      }

      _loadScripts() {
        return this.Promise.all(Scripts.names.map(k => {
          return this._loadScript(k);
        }));
      }

      __addLimiter__(instance) {
        var channel;
        channel = instance.channel();
        return new this.Promise((resolve, reject) => {
          var handler;
          handler = chan => {
            if (chan === channel) {
              this.subscriber.removeListener("subscribe", handler);
              this.limiters[channel] = instance;
              return resolve();
            }
          };
          this.subscriber.on("subscribe", handler);
          return this.subscriber.subscribe(channel);
        });
      }

      __removeLimiter__(instance) {
        var _this = this;

        return _asyncToGenerator(function* () {
          var channel;
          channel = instance.channel();
          if (!_this.terminated) {
            yield new _this.Promise(function (resolve, reject) {
              return _this.subscriber.unsubscribe(channel, function (err, chan) {
                if (err != null) {
                  return reject(err);
                }
                if (chan === channel) {
                  return resolve();
                }
              });
            });
          }
          return delete _this.limiters[channel];
        })();
      }

      __scriptArgs__(name, id, args, cb) {
        var keys;
        keys = Scripts.keys(name, id);
        return [this.shas[name], keys.length].concat(keys, args, cb);
      }

      __scriptFn__(name) {
        return this.client.evalsha.bind(this.client);
      }

      disconnect(flush = true) {
        var i, k, len, ref;
        ref = Object.keys(this.limiters);
        for (i = 0, len = ref.length; i < len; i++) {
          k = ref[i];
          clearInterval(this.limiters[k]._store.heartbeat);
        }
        this.limiters = {};
        this.terminated = true;
        this.client.end(flush);
        this.subscriber.end(flush);
        return this.Promise.resolve();
      }

    };

    RedisConnection.prototype.datastore = "redis";

    RedisConnection.prototype.defaults = {
      clientOptions: {},
      client: null,
      Promise: Promise,
      Events: null
    };

    return RedisConnection;
  }.call(this);

  module.exports = RedisConnection;
}).call(undefined);