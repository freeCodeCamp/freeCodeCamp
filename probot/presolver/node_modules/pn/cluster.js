var cluster = require("cluster");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  SCHED_NONE: { enumerable: true, value: cluster.SCHED_NONE },
  SCHED_RR: { enumerable: true, value: cluster.SCHED_RR },
  Worker: { enumerable: true, value: cluster.Worker },
  //_events: // skipping
  //_eventsCount: // skipping
  //_maxListeners: // skipping
  disconnect: { enumerable: true, value: promisify(cluster, cluster.disconnect, 0) },
  domain: { enumerable: true, get: function() { return cluster.domain; }, set: function(v) { cluster.domain = v; } },
  fork: { enumerable: true, value: bind(cluster, cluster.fork) },
  isMaster: { enumerable: true, get: function() { return cluster.isMaster; }, set: function(v) { cluster.isMaster = v; } },
  isWorker: { enumerable: true, get: function() { return cluster.isWorker; }, set: function(v) { cluster.isWorker = v; } },
  schedulingPolicy: { enumerable: true, get: function() { return cluster.schedulingPolicy; }, set: function(v) { cluster.schedulingPolicy = v; } },
  settings: { enumerable: true, get: function() { return cluster.settings; }, set: function(v) { cluster.settings = v; } },
  setupMaster: { enumerable: true, value: bind(cluster, cluster.setupMaster) },
  workers: { enumerable: true, get: function() { return cluster.workers; }, set: function(v) { cluster.workers = v; } },
});