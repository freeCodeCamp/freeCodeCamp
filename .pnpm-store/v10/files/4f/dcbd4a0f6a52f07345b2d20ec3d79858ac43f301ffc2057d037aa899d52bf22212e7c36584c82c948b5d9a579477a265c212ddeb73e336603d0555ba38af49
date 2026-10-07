Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('./debug-build.js');
const debugLogger = require('./utils/debug-logger.js');
const is = require('./utils/is.js');
const syncpromise = require('./utils/syncpromise.js');

function notifyEventProcessors(processors, event, hint, index = 0) {
  try {
    const result = _notifyEventProcessors(event, hint, processors, index);
    return is.isThenable(result) ? result : syncpromise.resolvedSyncPromise(result);
  } catch (error) {
    return syncpromise.rejectedSyncPromise(error);
  }
}
function _notifyEventProcessors(event, hint, processors, index) {
  const processor = processors[index];
  if (!event || !processor) {
    return event;
  }
  const result = processor({ ...event }, hint);
  debugBuild.DEBUG_BUILD && result === null && debugLogger.debug.log(`Event processor "${processor.id || "?"}" dropped event`);
  if (is.isThenable(result)) {
    return result.then((final) => _notifyEventProcessors(final, hint, processors, index + 1));
  }
  return _notifyEventProcessors(result, hint, processors, index + 1);
}

exports.notifyEventProcessors = notifyEventProcessors;
//# sourceMappingURL=eventProcessors.js.map
