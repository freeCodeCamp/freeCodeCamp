"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.writeRedirects = exports.startRedirectListener = void 0;
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _redux = require("../redux");
let lastHash = null;
let bootstrapFinished = false;
const writeRedirects = async () => {
  bootstrapFinished = true;
  const {
    program,
    redirects,
    pages
  } = _redux.store.getState();
  const redirectMatchingPageWarnings = [];
  const browserRedirects = [];
  for (const redirect of redirects) {
    const alternativePath = redirect.fromPath.endsWith(`/`) ? redirect.fromPath.slice(0, -1) : redirect.fromPath + `/`;
    let hasSamePage;
    if ((hasSamePage = pages.has(redirect.fromPath)) || pages.has(alternativePath)) {
      redirectMatchingPageWarnings.push(` - page: "${hasSamePage ? redirect.fromPath : alternativePath}" and redirect: "${redirect.fromPath}" -> "${redirect.toPath}"`);
    }
    // Filter for redirects that are meant for the browser.
    if (redirect.redirectInBrowser) {
      browserRedirects.push({
        ...redirect,
        fromPath: redirect.ignoreCase ? redirect.fromPath.toLowerCase() : redirect.fromPath
      });
    }
  }
  if (redirectMatchingPageWarnings.length > 0) {
    _reporter.default.warn(`There are routes that match both page and redirect. Pages take precedence over redirects so the redirect will not work:\n${redirectMatchingPageWarnings.join(`\n`)}`);
  }
  const newHash = await (0, _gatsbyCoreUtils.md5)(JSON.stringify(browserRedirects));
  if (newHash === lastHash) {
    return;
  }
  lastHash = newHash;
  await _fsExtra.default.writeFile((0, _gatsbyCoreUtils.joinPath)(program.directory, `.cache/redirects.json`), JSON.stringify(browserRedirects, null, 2));
};
exports.writeRedirects = writeRedirects;
const debouncedWriteRedirects = (0, _debounce2.default)(() => {
  // Don't write redirects again until bootstrap has finished.
  if (bootstrapFinished) {
    writeRedirects();
  }
}, 250);
const startRedirectListener = () => {
  _redux.emitter.on(`CREATE_REDIRECT`, () => {
    debouncedWriteRedirects();
  });
};
exports.startRedirectListener = startRedirectListener;
//# sourceMappingURL=redirects-writer.js.map