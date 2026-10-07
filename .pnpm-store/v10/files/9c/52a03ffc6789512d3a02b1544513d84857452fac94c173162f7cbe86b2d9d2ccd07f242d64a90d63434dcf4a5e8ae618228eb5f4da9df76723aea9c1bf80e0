var requireFoolWebpack = require('./requireFoolWebpack');

// source: https://github.com/flexdinesh/browser-or-node
var isNode = function (nodeProcess) {
  return (
    typeof nodeProcess !== 'undefined' &&
    nodeProcess.versions != null &&
    nodeProcess.versions.node != null
  );
}
module.exports.isNode = isNode

// determines the JavaScript platform: browser or node
module.exports.platform = typeof process !== 'undefined' && isNode(process)
  ? 'node'
  : 'browser';

// determines whether the code is running in main thread or not
// note that in node.js we have to check both worker_thread and child_process
var worker_threads = tryRequireFoolWebpack('worker_threads');
module.exports.isMainThread = module.exports.platform === 'node'
  ? ((!worker_threads || worker_threads.isMainThread) && !process.connected)
  : typeof Window !== 'undefined';

// determines the number of cpus available
module.exports.cpus = module.exports.platform === 'browser'
  ? self.navigator.hardwareConcurrency
  : requireFoolWebpack('os').cpus().length;

function tryRequireFoolWebpack (module) {
  try {
    return requireFoolWebpack(module);
  } catch(err) {
    return null
  }
}
