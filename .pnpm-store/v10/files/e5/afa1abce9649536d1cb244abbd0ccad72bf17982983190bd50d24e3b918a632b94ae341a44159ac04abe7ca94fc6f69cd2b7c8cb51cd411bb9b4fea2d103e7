const babel = require("./babel-core.js");
const {
  setOptions,
  transform,
  transformSync
} = require("./transform.js");
module.exports = function handleMessage(action, payload) {
  switch (action) {
    case "GET_DEFAULT_EXTENSIONS":
      return babel.DEFAULT_EXTENSIONS;
    case "SET_OPTIONS":
      setOptions(payload);
      return;
    case "TRANSFORM":
      return transform(payload.code, payload.filename);
    case "TRANSFORM_SYNC":
      {
        return transformSync(payload.code, payload.filename);
      }
  }
  throw new Error(`Unknown internal parser worker action: ${action}`);
};

//# sourceMappingURL=handle-message.js.map
