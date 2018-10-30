"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var Events, IORedisConnection, Scripts, parser;

  parser = require("./parser");

  Events = require("./Events");

  Scripts = require("./Scripts");

  IORedisConnection = function () {
    class IORedisConnection {
      constructor(options = {}) {
        var Redis;
        Redis = eval("require")("ioredis"); // Obfuscated or else Webpack/Angular will try to inline the optional ioredis module
        parser.load(options, this.defaults, this);
        if (this.Events == null) {
          this.Events = new Events(this);
        }
        this.terminated = false;
        if (this.clusterNodes != null) {
          this.client = new Redis.Cluster(this.clusterNodes, this.clientOptions);
          this.subscriber = new Redis.Cluster(this.clusterNodes, this.clientOptions);
        } else {
          if (this.client == null) {
            this.client = new Redis(this.clientOptions);
          }
          this.subscriber = this.client.duplicate();
        }
        this.limiters = {};
        this.ready = this.Promise.all([this._setup(this.client, false), this._setup(this.subscriber, true)]).then(() => {
          this._loadScripts();
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
          if (client.status === "ready") {
            return resolve();
          } else {
            return client.once("ready", resolve);
          }
        });
      }

      _loadScripts() {
        return Scripts.names.forEach(name => {
          return this.client.defineCommand(name, {
            lua: Scripts.payload(name)
          });
        });
      }

      __addLimiter__(instance) {
        var channel;
        channel = instance.channel();
        return new this.Promise((resolve, reject) => {
          return this.subscriber.subscribe(channel, () => {
            this.limiters[channel] = instance;
            return resolve();
          });
        });
      }

      __removeLimiter__(instance) {
        var _this = this;

        return _asyncToGenerator(function* () {
          var channel;
          channel = instance.channel();
          if (!_this.terminated) {
            yield _this.subscriber.unsubscribe(channel);
          }
          return delete _this.limiters[channel];
        })();
      }

      __scriptArgs__(name, id, args, cb) {
        var keys;
        keys = Scripts.keys(name, id);
        return [keys.length].concat(keys, args, cb);
      }

      __scriptFn__(name) {
        return this.client[name].bind(this.client);
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
        if (flush) {
          return this.Promise.all([this.client.quit(), this.subscriber.quit()]);
        } else {
          this.client.disconnect();
          this.subscriber.disconnect();
          return this.Promise.resolve();
        }
      }

    };

    IORedisConnection.prototype.datastore = "ioredis";

    IORedisConnection.prototype.defaults = {
      clientOptions: {},
      clusterNodes: null,
      client: null,
      Promise: Promise,
      Events: null
    };

    return IORedisConnection;
  }.call(this);

  module.exports = IORedisConnection;
}).call(undefined);