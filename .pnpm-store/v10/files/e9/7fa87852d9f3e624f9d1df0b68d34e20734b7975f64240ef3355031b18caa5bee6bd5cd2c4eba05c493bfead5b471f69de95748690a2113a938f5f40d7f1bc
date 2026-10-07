// src/index.ts
import { Buffer } from "buffer";
var _serialize = (data, escapeColonStrings = true) => {
  if (data === void 0 || data === null) {
    return "null";
  }
  if (typeof data === "string") {
    return JSON.stringify(
      escapeColonStrings && data.startsWith(":") ? `:${data}` : data
    );
  }
  if (Buffer.isBuffer(data)) {
    return JSON.stringify(`:base64:${data.toString("base64")}`);
  }
  if (data?.toJSON) {
    data = data.toJSON();
  }
  if (typeof data === "object") {
    let s = "";
    const array = Array.isArray(data);
    s = array ? "[" : "{";
    let first = true;
    for (const k in data) {
      const ignore = typeof data[k] === "function" || !array && data[k] === void 0;
      if (!Object.hasOwn(data, k) || ignore) {
        continue;
      }
      if (!first) {
        s += ",";
      }
      first = false;
      if (array) {
        s += _serialize(data[k], escapeColonStrings);
      } else if (data[k] !== void 0) {
        s += `${_serialize(k, false)}:${_serialize(data[k], escapeColonStrings)}`;
      }
    }
    s += array ? "]" : "}";
    return s;
  }
  return JSON.stringify(data);
};
var defaultSerialize = (data) => {
  return _serialize(data, true);
};
var defaultDeserialize = (data) => JSON.parse(data, (_, value) => {
  if (typeof value === "string") {
    if (value.startsWith(":base64:")) {
      return Buffer.from(value.slice(8), "base64");
    }
    return value.startsWith(":") ? value.slice(1) : value;
  }
  return value;
});
export {
  defaultDeserialize,
  defaultSerialize
};
