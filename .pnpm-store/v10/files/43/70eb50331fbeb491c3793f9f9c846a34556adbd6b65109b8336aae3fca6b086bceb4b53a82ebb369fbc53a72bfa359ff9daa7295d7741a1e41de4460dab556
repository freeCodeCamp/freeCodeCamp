Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeVersion = require('../../nodeVersion.js');
const debug = require('../../utils/debug.js');
const common = require('./common.js');

function hashFrames(frames) {
  if (frames === void 0) {
    return;
  }
  return frames.slice(-10).reduce((acc, frame) => `${acc},${frame.function},${frame.lineno},${frame.colno}`, "");
}
function hashFromStack(stackParser, stack) {
  if (stack === void 0) {
    return void 0;
  }
  return hashFrames(stackParser(stack, 1));
}
function createCallbackList(complete) {
  let callbacks = [];
  let completedCalled = false;
  function checkedComplete(result) {
    callbacks = [];
    if (completedCalled) {
      return;
    }
    completedCalled = true;
    complete(result);
  }
  callbacks.push(checkedComplete);
  function add(fn) {
    callbacks.push(fn);
  }
  function next(result) {
    const popped = callbacks.pop() || checkedComplete;
    try {
      popped(result);
    } catch {
      checkedComplete(result);
    }
  }
  return { add, next };
}
class AsyncSession {
  /** Throws if inspector API is not available */
  constructor(_session) {
    this._session = _session;
  }
  static async create(orDefault) {
    if (orDefault) {
      return orDefault;
    }
    const inspector = await import('node:inspector');
    return new AsyncSession(new inspector.Session());
  }
  /** @inheritdoc */
  configureAndConnect(onPause, captureAll) {
    this._session.connect();
    this._session.on("Debugger.paused", (event) => {
      onPause(event, () => {
        this._session.post("Debugger.resume");
      });
    });
    this._session.post("Debugger.enable");
    this._session.post("Debugger.setPauseOnExceptions", { state: captureAll ? "all" : "uncaught" });
  }
  setPauseOnExceptions(captureAll) {
    this._session.post("Debugger.setPauseOnExceptions", { state: captureAll ? "all" : "uncaught" });
  }
  /** @inheritdoc */
  getLocalVariables(objectId, complete) {
    this._getProperties(objectId, (props) => {
      const { add, next } = createCallbackList(complete);
      for (const prop of props) {
        if (prop.value?.objectId && prop.value.className === "Array") {
          const id = prop.value.objectId;
          add((vars) => this._unrollArray(id, prop.name, vars, next));
        } else if (prop.value?.objectId && prop.value.className === "Object") {
          const id = prop.value.objectId;
          add((vars) => this._unrollObject(id, prop.name, vars, next));
        } else if (prop.value) {
          add((vars) => this._unrollOther(prop, vars, next));
        }
      }
      next({});
    });
  }
  /**
   * Gets all the PropertyDescriptors of an object
   */
  _getProperties(objectId, next) {
    this._session.post(
      "Runtime.getProperties",
      {
        objectId,
        ownProperties: true
      },
      (err, params) => {
        if (err) {
          next([]);
        } else {
          next(params.result);
        }
      }
    );
  }
  /**
   * Unrolls an array property
   */
  _unrollArray(objectId, name, vars, next) {
    this._getProperties(objectId, (props) => {
      vars[name] = props.filter((v) => v.name !== "length" && !isNaN(parseInt(v.name, 10))).sort((a, b) => parseInt(a.name, 10) - parseInt(b.name, 10)).map((v) => v.value?.value);
      next(vars);
    });
  }
  /**
   * Unrolls an object property
   */
  _unrollObject(objectId, name, vars, next) {
    this._getProperties(objectId, (props) => {
      vars[name] = props.map((v) => [v.name, v.value?.value]).reduce((obj, [key, val]) => {
        obj[key] = val;
        return obj;
      }, {});
      next(vars);
    });
  }
  /**
   * Unrolls other properties
   */
  _unrollOther(prop, vars, next) {
    if (prop.value) {
      if ("value" in prop.value) {
        if (prop.value.value === void 0 || prop.value.value === null) {
          vars[prop.name] = `<${prop.value.value}>`;
        } else {
          vars[prop.name] = prop.value.value;
        }
      } else if ("description" in prop.value && prop.value.type !== "function") {
        vars[prop.name] = `<${prop.value.description}>`;
      } else if (prop.value.type === "undefined") {
        vars[prop.name] = "<undefined>";
      }
    }
    next(vars);
  }
}
const INTEGRATION_NAME = "LocalVariables";
const _localVariablesSyncIntegration = ((options = {}, sessionOverride) => {
  const cachedFrames = new core.LRUMap(20);
  let rateLimiter;
  let shouldProcessEvent = false;
  function addLocalVariablesToException(exception) {
    const hash = hashFrames(exception.stacktrace?.frames);
    if (hash === void 0) {
      return;
    }
    const cachedFrame = cachedFrames.remove(hash);
    if (cachedFrame === void 0) {
      return;
    }
    const frames = (exception.stacktrace?.frames || []).filter((frame) => frame.function !== "new Promise");
    for (let i = 0; i < frames.length; i++) {
      const frameIndex = frames.length - i - 1;
      const cachedFrameVariable = cachedFrame[i];
      const frameVariable = frames[frameIndex];
      if (!frameVariable || !cachedFrameVariable) {
        break;
      }
      if (
        // We need to have vars to add
        cachedFrameVariable.vars === void 0 || // Only skip out-of-app frames if includeOutOfAppFrames is not true
        frameVariable.in_app === false && options.includeOutOfAppFrames !== true || // The function names need to match
        !common.functionNamesMatch(frameVariable.function, cachedFrameVariable.function)
      ) {
        continue;
      }
      frameVariable.vars = cachedFrameVariable.vars;
    }
  }
  function addLocalVariablesToEvent(event) {
    for (const exception of event.exception?.values || []) {
      addLocalVariablesToException(exception);
    }
    return event;
  }
  let setupPromise;
  async function setup() {
    const client = core.getClient();
    const clientOptions = client?.getOptions();
    if (!clientOptions?.includeLocalVariables) {
      return;
    }
    const unsupportedNodeVersion = nodeVersion.NODE_MAJOR < 18;
    if (unsupportedNodeVersion) {
      core.debug.log("The `LocalVariables` integration is only supported on Node >= v18.");
      return;
    }
    if (await debug.isDebuggerEnabled()) {
      core.debug.warn("Local variables capture has been disabled because the debugger was already enabled");
      return;
    }
    try {
      const session = await AsyncSession.create(sessionOverride);
      const handlePaused = (stackParser, { params: { reason, data, callFrames } }, complete) => {
        if (reason !== "exception" && reason !== "promiseRejection") {
          complete();
          return;
        }
        rateLimiter?.();
        const exceptionHash = hashFromStack(stackParser, data.description);
        if (exceptionHash == void 0) {
          complete();
          return;
        }
        const { add, next } = createCallbackList((frames) => {
          cachedFrames.set(exceptionHash, frames);
          complete();
        });
        for (let i = 0; i < Math.min(callFrames.length, 5); i++) {
          const { scopeChain, functionName, this: obj } = callFrames[i];
          const localScope = scopeChain.find((scope) => scope.type === "local");
          const fn = obj.className === "global" || !obj.className ? functionName : `${obj.className}.${functionName}`;
          if (localScope?.object.objectId === void 0) {
            add((frames) => {
              frames[i] = { function: fn };
              next(frames);
            });
          } else {
            const id = localScope.object.objectId;
            add(
              (frames) => session.getLocalVariables(id, (vars) => {
                frames[i] = { function: fn, vars };
                next(frames);
              })
            );
          }
        }
        next([]);
      };
      const captureAll = options.captureAllExceptions !== false;
      session.configureAndConnect(
        (ev, complete) => handlePaused(clientOptions.stackParser, ev, complete),
        captureAll
      );
      if (captureAll) {
        const max = options.maxExceptionsPerSecond || 50;
        rateLimiter = common.createRateLimiter(
          max,
          () => {
            core.debug.log("Local variables rate-limit lifted.");
            session.setPauseOnExceptions(true);
          },
          (seconds) => {
            core.debug.log(
              `Local variables rate-limit exceeded. Disabling capturing of caught exceptions for ${seconds} seconds.`
            );
            session.setPauseOnExceptions(false);
          }
        );
      }
      shouldProcessEvent = true;
    } catch (error) {
      core.debug.log("The `LocalVariables` integration failed to start.", error);
    }
  }
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      setupPromise = setup();
    },
    async processEvent(event) {
      await setupPromise;
      if (shouldProcessEvent) {
        return addLocalVariablesToEvent(event);
      }
      return event;
    },
    // These are entirely for testing
    _getCachedFramesCount() {
      return cachedFrames.size;
    },
    _getFirstCachedFrame() {
      return cachedFrames.values()[0];
    }
  };
});
const localVariablesSyncIntegration = core.defineIntegration(_localVariablesSyncIntegration);

exports.createCallbackList = createCallbackList;
exports.hashFrames = hashFrames;
exports.hashFromStack = hashFromStack;
exports.localVariablesSyncIntegration = localVariablesSyncIntegration;
//# sourceMappingURL=local-variables-sync.js.map
