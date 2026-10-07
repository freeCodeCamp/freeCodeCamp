import { DEBUG_BUILD } from './debug-build.js';
import { debug } from './utils/debug-logger.js';
import { isThenable } from './utils/is.js';
import { resolvedSyncPromise, rejectedSyncPromise } from './utils/syncpromise.js';

function notifyEventProcessors(processors, event, hint, index = 0) {
  try {
    const result = _notifyEventProcessors(event, hint, processors, index);
    return isThenable(result) ? result : resolvedSyncPromise(result);
  } catch (error) {
    return rejectedSyncPromise(error);
  }
}
function _notifyEventProcessors(event, hint, processors, index) {
  const processor = processors[index];
  if (!event || !processor) {
    return event;
  }
  const result = processor({ ...event }, hint);
  DEBUG_BUILD && result === null && debug.log(`Event processor "${processor.id || "?"}" dropped event`);
  if (isThenable(result)) {
    return result.then((final) => _notifyEventProcessors(final, hint, processors, index + 1));
  }
  return _notifyEventProcessors(result, hint, processors, index + 1);
}

export { notifyEventProcessors };
//# sourceMappingURL=eventProcessors.js.map
