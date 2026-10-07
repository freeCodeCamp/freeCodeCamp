"use strict";

require("../../utils/engines-fs-provider");
require("./platform-and-arch-check");
var _getCache = require("../../utils/get-cache");
// "engines-fs-provider" must be first import, as it sets up global
// fs and this need to happen before anything else tries to import fs

if (!global._polyfillRemoteFileCache) {
  global._polyfillRemoteFileCache = (0, _getCache.getCache)(`gatsby`);
}
//# sourceMappingURL=bootstrap.js.map