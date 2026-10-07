"use strict";

exports.__esModule = true;
exports.onInitialClientRender = void 0;
var _gatsbyScript = require("gatsby-script");
var _injectPartytownSnippet = require("./utils/inject-partytown-snippet");
// Makes sure off-main-thread scripts are loaded in `gatsby develop`
const onInitialClientRender = () => {
  if (process.env.NODE_ENV !== `development`) {
    return;
  }
  (0, _injectPartytownSnippet.injectPartytownSnippet)(_gatsbyScript.collectedScriptsByPage.get(window.location.pathname));

  // Clear scripts after we've used them to avoid leaky behavior
  _gatsbyScript.collectedScriptsByPage.delete(window.location.pathname);
};

// Client-side navigation (CSR, e.g. Gatsby Link navigations) are broken upstream in Partytown.
// We need an official API from Partytown for handling re-configuration and on-demand script loading.
// Until then, `off-main-thread` scripts load only on server-side navigation (SSR).
// See https://github.com/BuilderIO/partytown/issues/74 for more details.
exports.onInitialClientRender = onInitialClientRender;
//# sourceMappingURL=gatsby-browser.js.map