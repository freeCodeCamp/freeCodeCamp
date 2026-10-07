"use strict";

const preferDefault = m => m && m.default || m;
if (process.env.BUILD_STAGE === `develop`) {
  module.exports = preferDefault(require(`./public-page-renderer-dev`));
} else if (process.env.BUILD_STAGE === `build-javascript`) {
  module.exports = preferDefault(require(`./public-page-renderer-prod`));
} else {
  module.exports = () => null;
}
//# sourceMappingURL=public-page-renderer.js.map