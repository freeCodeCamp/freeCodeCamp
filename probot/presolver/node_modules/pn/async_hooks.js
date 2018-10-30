var async_hooks = {};
try { async_hooks = require("async_hooks"); } catch (e) { }
module.exports = async_hooks;