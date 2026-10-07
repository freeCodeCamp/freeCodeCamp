const TYPE_REQUEST = "q";
const TYPE_RESPONSE = "s";
const DEFAULT_TIMEOUT = 6e4;
function defaultSerialize(i) {
  return i;
}
const defaultDeserialize = defaultSerialize;
const { clearTimeout, setTimeout } = globalThis;
const random = Math.random.bind(Math);
function createBirpc(functions, options) {
  const {
    post,
    on,
    off = () => {
    },
    eventNames = [],
    serialize = defaultSerialize,
    deserialize = defaultDeserialize,
    resolver,
    bind = "rpc",
    timeout = DEFAULT_TIMEOUT
  } = options;
  const rpcPromiseMap = /* @__PURE__ */ new Map();
  let _promise;
  let closed = false;
  const rpc = new Proxy({}, {
    get(_, method) {
      if (method === "$functions")
        return functions;
      if (method === "$close")
        return close;
      if (method === "$closed")
        return closed;
      if (method === "then" && !eventNames.includes("then") && !("then" in functions))
        return undefined;
      const sendEvent = (...args) => {
        post(serialize({ m: method, a: args, t: TYPE_REQUEST }));
      };
      if (eventNames.includes(method)) {
        sendEvent.asEvent = sendEvent;
        return sendEvent;
      }
      const sendCall = async (...args) => {
        if (closed)
          throw new Error(`[birpc] rpc is closed, cannot call "${method}"`);
        if (_promise) {
          try {
            await _promise;
          } finally {
            _promise = undefined;
          }
        }
        return new Promise((resolve, reject) => {
          const id = nanoid();
          let timeoutId;
          if (timeout >= 0) {
            timeoutId = setTimeout(() => {
              try {
                const handleResult = options.onTimeoutError?.(method, args);
                if (handleResult !== true)
                  throw new Error(`[birpc] timeout on calling "${method}"`);
              } catch (e) {
                reject(e);
              }
              rpcPromiseMap.delete(id);
            }, timeout);
            if (typeof timeoutId === "object")
              timeoutId = timeoutId.unref?.();
          }
          rpcPromiseMap.set(id, { resolve, reject, timeoutId, method });
          post(serialize({ m: method, a: args, i: id, t: "q" }));
        });
      };
      sendCall.asEvent = sendEvent;
      return sendCall;
    }
  });
  function close(error) {
    closed = true;
    rpcPromiseMap.forEach(({ reject, method }) => {
      reject(error || new Error(`[birpc] rpc is closed, cannot call "${method}"`));
    });
    rpcPromiseMap.clear();
    off(onMessage);
  }
  async function onMessage(data, ...extra) {
    let msg;
    try {
      msg = deserialize(data);
    } catch (e) {
      if (options.onGeneralError?.(e) !== true)
        throw e;
      return;
    }
    if (msg.t === TYPE_REQUEST) {
      const { m: method, a: args } = msg;
      let result, error;
      const fn = resolver ? resolver(method, functions[method]) : functions[method];
      if (!fn) {
        error = new Error(`[birpc] function "${method}" not found`);
      } else {
        try {
          result = await fn.apply(bind === "rpc" ? rpc : functions, args);
        } catch (e) {
          error = e;
        }
      }
      if (msg.i) {
        if (error && options.onError)
          options.onError(error, method, args);
        if (error && options.onFunctionError) {
          if (options.onFunctionError(error, method, args) === true)
            return;
        }
        if (!error) {
          try {
            post(serialize({ t: TYPE_RESPONSE, i: msg.i, r: result }), ...extra);
            return;
          } catch (e) {
            error = e;
            if (options.onGeneralError?.(e, method, args) !== true)
              throw e;
          }
        }
        try {
          post(serialize({ t: TYPE_RESPONSE, i: msg.i, e: error }), ...extra);
        } catch (e) {
          if (options.onGeneralError?.(e, method, args) !== true)
            throw e;
        }
      }
    } else {
      const { i: ack, r: result, e: error } = msg;
      const promise = rpcPromiseMap.get(ack);
      if (promise) {
        clearTimeout(promise.timeoutId);
        if (error)
          promise.reject(error);
        else
          promise.resolve(result);
      }
      rpcPromiseMap.delete(ack);
    }
  }
  _promise = on(onMessage);
  return rpc;
}
const urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
function nanoid(size = 21) {
  let id = "";
  let i = size;
  while (i--)
    id += urlAlphabet[random() * 64 | 0];
  return id;
}

export { createBirpc as c };
