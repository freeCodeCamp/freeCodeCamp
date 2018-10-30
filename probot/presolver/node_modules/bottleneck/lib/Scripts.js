"use strict";

(function () {
  var libraries, lua, templates;

  lua = require("./lua.json");

  libraries = {
    get_time: lua["get_time.lua"],
    refresh_capacity: lua["refresh_capacity.lua"],
    conditions_check: lua["conditions_check.lua"],
    refresh_expiration: lua["refresh_expiration.lua"],
    validate_keys: lua["validate_keys.lua"]
  };

  templates = {
    init: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["refresh_capacity", "refresh_expiration"],
      code: lua["init.lua"]
    },
    heartbeat: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity"],
      code: lua["heartbeat.lua"]
    },
    update_settings: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "refresh_expiration"],
      code: lua["update_settings.lua"]
    },
    running: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity"],
      code: lua["running.lua"]
    },
    done: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity"],
      code: lua["done.lua"]
    },
    group_check: {
      keys: function keys(id) {
        return [`b_${id}_settings`];
      },
      libs: [],
      code: lua["group_check.lua"]
    },
    check: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "conditions_check"],
      code: lua["check.lua"]
    },
    submit: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "conditions_check", "refresh_expiration"],
      code: lua["submit.lua"]
    },
    register: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "conditions_check", "refresh_expiration"],
      code: lua["register.lua"]
    },
    free: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity"],
      code: lua["free.lua"]
    },
    current_reservoir: {
      keys: function keys(id) {
        return [`b_${id}_settings`];
      },
      libs: ["validate_keys"],
      code: lua["current_reservoir.lua"]
    },
    increment_reservoir: {
      keys: function keys(id) {
        return [`b_${id}_settings`, `b_${id}_running`, `b_${id}_executing`];
      },
      libs: ["validate_keys", "refresh_capacity", "refresh_expiration"],
      code: lua["increment_reservoir.lua"]
    }
  };

  exports.names = Object.keys(templates);

  exports.keys = function (name, id) {
    return templates[name].keys(id);
  };

  exports.payload = function (name) {
    return templates[name].libs.map(function (lib) {
      return libraries[lib];
    }).join("\n") + templates[name].code;
  };
}).call(undefined);