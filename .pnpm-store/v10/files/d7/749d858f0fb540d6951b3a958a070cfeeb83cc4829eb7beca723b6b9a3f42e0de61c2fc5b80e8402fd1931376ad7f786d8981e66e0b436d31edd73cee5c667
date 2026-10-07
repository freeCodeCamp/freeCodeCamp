"use strict";

const babel = require("./babel-core.cjs");
const maybeParse = require("./maybeParse.cjs");
const astInfo = require("./ast-info.cjs");
const config = require("./configuration.cjs");
const Clients = require("../client.cjs");
var ACTIONS = Clients.ACTIONS;
module.exports = function handleMessage(action, payload) {
  switch (action) {
    case ACTIONS.GET_VERSION:
      return babel.version;
    case ACTIONS.GET_TYPES_INFO:
      return {
        FLOW_FLIPPED_ALIAS_KEYS: babel.types.FLIPPED_ALIAS_KEYS.Flow,
        VISITOR_KEYS: babel.types.VISITOR_KEYS
      };
    case ACTIONS.GET_TOKEN_LABELS:
      return astInfo.getTokLabels();
    case ACTIONS.GET_VISITOR_KEYS:
      return astInfo.getVisitorKeys();
    case ACTIONS.MAYBE_PARSE:
      return config.normalizeBabelParseConfig(payload.options).then(options => maybeParse(payload.code, options));
    case ACTIONS.MAYBE_PARSE_SYNC:
      {
        return maybeParse(payload.code, config.normalizeBabelParseConfigSync(payload.options));
      }
  }
  throw new Error(`Unknown internal parser worker action: ${action}`);
};

//# sourceMappingURL=handle-message.cjs.map
