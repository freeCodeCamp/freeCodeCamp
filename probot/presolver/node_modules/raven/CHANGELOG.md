# Changelog

## 2.6.4 - 2018-09-03

- fix: Updated uuid module (#1481)

## 2.6.3 - 2018-06-20

- fix: Always pass request through parseRequest for raven-node (#1404)

## 2.6.2 - 2018-05-17

- ref: Emit transaction instead of culprit (#458)

## 2.6.1 - 2018-05-10

- fix: correctly detect errors from vm (#457)
- ref: use console.warn for alerts and store them in Set (#455)
- ci: Add node 9 and 10 to travis builds (#456)

## 2.6.0 - 2018-04-24

- fix: Use shallow-copy instead of deep-copy when working with context to prevent too large memory usage and slowing down request responses [See #452]

## 2.5.0 - 2018-04-09

- feat: log non-standard ports in breadcrumbs (#440)
- feat: add flag for unhandled promise rejections (#446)
- fix: Remove a redundant try-catch block (#445)
- fix: Do not override context when capturing non-error exceptions (#444)
- fix: Update stack-trace to handle spaces in paths (#437)
- docs: Remove private DSNs from the docs (#447)
- docs: Update Usage docs to include Domains in Promise support (#438)

## 2.4.2 - 2018-02-27

- fix: Don't throw exception when called captureException without config (#431)
- fix: Preserve context in for rejected promises (#428)
- ref: Log promise rejection reason alongside eventid (#434)
- ref: Use named function for middlewares (#429)

## 2.4.1 - 2018-02-09

- fix: Handle scoped packages structure in node-lsmod (#426)
- fix: Report fatal errors as indeed "fatal" (#425)
- ref: Use a named function for the middleware over an anonymous (#424)

## 2.4.0 - 2018-01-24

- feat: Sensible non-Error exception serializer (#416)
- fix: workaround for express.js 'host' deprecation message (#413)

## 2.3.0 - 12/11/2017

- fix: attach remaining non-enumerables to req [See #387]
- feat: Allow to configure stacktrace for captureMessage calls [See #388]
- fix: access 'process' through global variable [See #399]
- ref: Enable http instrumentation by default [See #401]
- ref: Warn user when using capture/wrap without installing Raven [See #402]
- ci: Integrate Zeus and release with the bot [See #403]
- ref: Delete empty properties before sending event to the server [See #407]
- feat: Support Boom library statusCode [See #408]

## 2.2.1 - 10/02/2017

- Remove unintentional memwatch-next dependency

## 2.2.0 - 10/02/2017
- Fixed all Node v8 tests to ensure everything is working correctly [See #366]
- Raven now uses Prettier to format it's code [See #364]
- Prevent Raven from queueing too many requests in case server is down [See #132]
- Enable keep-alive on socket connection and limit number of sockets [See #284]
- Pull Error's name from constructor, not Error itself to always get correct error type [See #372]
- Updated Errors serialization to store all additional properties and allow for attaching other object instances directly to it [See #376]
- Preserve some non-enumerable properties from request [See #379]
- Fall back to `NODE_ENV` for Sentry Environment [See #384]

## 2.1.2 - 8/16/2017
- Remove errant large file that accidentally got published in 2.1.1. [See #361]

## 2.1.1 - 7/27/2017
- Fix issue where HTTP request was duplicated as `req` (and dropped by Sentry server). [See #340]

## 2.1.0 - 6/20/2017
- Truncate long lines in surrounding source to avoid sending large amounts of minified code [See #329]
- Refactor automatic breadcrumb instrumentation of modules to accommodate compilation tools [See #322]
- Testing for Node 8 [See #328]

## 2.0.2 - 5/24/2017
- Fix issue with sending empty request details when no request is present [See #324]

## 2.0.1 - 5/16/2017
- Fix memory explosion when parsing stack for large files [See #320]

## 2.0.0 - 5/10/2017
- Properly surface errors to preserve process exit conditions [See #308, #257]
  - Node processes with raven will now exit in exactly the same situations as if raven were not present
    - Previously, there were failure scenarios where raven would erroneously cause the process to continue to run when it should have shut down
    - **Be aware when upgrading:** it is possible that with raven-node 2.0, your node process will shut down from exceptions where it previously did not
  - This also includes changes to more reliably finish capturing the exception that induces process shutdown
- Don't include `domain` property as extra property on `Error` objects [See #309]
- Parse `req` object from context or kwargs [See #310]
  - For Express middleware users in particular, raven will now automatically report request details and user context in situations where it previously did not
- Tidied up `.npmignore` to exclude unnecessary files in npm package [See #311]
  - Install size reduced from 484kB to 84kB, which should save npm ~100GB/month in bandwidth
- Removed various deprecated methods [See #313]
- Removed postgres autoBreadcrumbs to avoid webpack dependency issue [See #315, #254]
  - postgres (and more) autoBreadcrumbs will return in version 2.1

## 1.1.6, 1.2.1 - 4/7/2017
- Fix memory leak in `consoleAlert` (and thus, if not disabled, in `captureException`) [See #300]

## 1.2.0 - 3/16/2017
- Add sampleRate config option [See #292]

## 1.1.5 - 3/16/2017
- Fix memory leak in http autoBreadcrumb instrumentation [See #296]

## 1.1.4 - 3/6/2017
- Use `util.format` to get message string in `console` instrumentation [See #289]

## 1.1.3 - 2/27/2017
- Add `parseUser` option to control user parsing behavior [See #274]
- Make http instrumentation use `req.emit` instead of response event handler [See #276]
- Add alert about raven-node vs raven-js when it seems like a browser env [See #277]

## 1.1.2 - 2/8/2017
- Send kwargs to `shouldSendCallback` [See #251]
- Capture breadcrumbs from global context [See #267]
- Make stack parsing native-frame-check work on Windows paths [See #268]
- Bind req/res to context domain in express requestHandler [See #269]
- Fix postgres/pg name mismatch [See #270]

## 1.1.1 and 1.0.1 - 12/13/2016
- Fix middleware backwards compatibility [See #246]

## 1.1.0 - 12/12/2016
- Added support for (automatic) breadcrumbs [See #240]
  - `Raven.captureBreadcrumb` manual method
  - `autoBreadcrumbs` config field to automatically capture breadcrumbs for:
    - console logs
    - http requests
    - postgres queries
- Deprecate `captureQuery` [See #239]

## 1.0.0 - 12/12/2016
- `Raven.config(...)` instead of `new raven.Client(...)`
- `Raven.install()` instead of `client.patchGlobal()`
- The callback to `Raven.captureException` now fires after transmission [See #217]
- Added `captureUnhandledRejections` option for Promise rejections
- Introduced contexts and associated `set/merge/getContext` methods [See #207]
- Added `shouldSendCallback` config option and `set*Callback` methods [See #220]
- Added `intercept()` method [See #225]
- Backwards compatibility was mostly maintained, but lots of stuff was deprecated
  - We'll print console messages if you're doing anything the old way
  - We'll also print console messages in certain situations where behavior might be surprising, like if no DSN is configured
  - You can disable these alerts with `Raven.disableConsoleAlerts();`

## 0.12.3 - 11/21/2016
 * Replace `node-uuid` dependency with `uuid` [See #236]

## 0.12.2 - 11/17/2016
 * Add column number to stack frames [See #235]
 * Check that `require.main.filename` is defined [See #233]

## 0.12.1 - 8/4/2016
 * Fix bug where `environment` option was not actually being transmitted to Sentry [See #185]

## 0.12.0 - 8/1/2016
 * Add `environment` config option and `setRelease` method [See #179]
 * No longer passes `process.env` values [See #181]
 * Connect/Express middleware now attempts to attach `req.user` as User interface [See #177]
 * Use json-stringify-safe to prevent circular refs [See #182]

## 0.11.0 - 5/5/2016
 * `captureError` renamed to `captureException` to match raven-js (alias exists for backwards compat)
 * `parsers.parseError` now coerces Error type to string. [See #155]

## 0.10.0 - 1/24/2016
 * Now supports global context for extra data, tags, user [See #141]
 * Added `setUserContext`, `setExtraContext`, `setTagsContext`

## 0.9.0 - 11/23/2015
 * Always coerce req.body to string. [See 2061d4efbf269c5e2096f2b7b55f5af2249c4aa7]
 * Allow passing options to HTTP transports. [See #123]
 * Fixed tests for node 4.0/5.0
 * Don't send a body for GET/HEAD requests unless one has been passed. [See 0476a6e9818135b8b258b0be0724c369fe30e3c7]

## 0.8.1 - 06/15/2015
 * Fixed a missing `domain` import in the Express/Connect middleware [See #120]

## 0.8.0 - 06/15/2015
 * Drop support for node 0.6
 * Remove `SENTRY_SITE` environment variable usage
 * Fixed `express deprecated req.host: Use req.hostname instead` warning [See #101]
 * Allow passing custom `ca` options for an https request [See #110 #108]
 * Use newer API endpoint [See #105]
 * Added support for Sentry's new Releases feature
 * Update Express/Connect middleware to support domains [See #116]

## 0.7.3 - 03/05/2015
 * When calling `captureError` without an Error, generate a fake `Error` object to pull stacktrace from. [See #87]
 * Prevent `patchGlobal` from causing recursion [See #84]
 * Fixed issues around capturing tags.
 * Removed deprecated `site` parameter.
 * Allow explicitly declaring the `culprit` [See #107]
 * Publicly export out the various parsers [See #111]
 * Support for iojs and node 0.12

## 0.7.2 - 09/09/2014
 * Added `dataCallback` option to Client configuration. See: https://github.com/getsentry/raven-node#pre-processing-data

## 0.7.1 - 08/24/2014
 * Fixed package.json to not install junk from `optionalDependencies`. TIL `optionalDependencies` are still installed. [See #89]

## 0.7.0 - 06/24/2014
 * Moved from mattrobenolt/raven-node into getsentry/raven-node
 * Bumped to sentry protocol version 5
 * Capture all properties off of an Error object and send them along as as `extra` [See #72]
 * Better feature detection support for capturing request parameters. Adds support for use in Koa. [See #78 #79]

## 0.6.3 - 04/02/2014
 * Fix another issue that was breaking when running Raven from the REPL [See #66]
 * Add additional meta data on the error callbacks [See #67 #73]

## 0.6.2 - 02/14/2014
 * Allow overriding the logger name for an individual event
 * Update lsmod to not break when running Raven from the REPL
 * Added a `raven` bin so you can run `raven test [DSN]`

## 0.6.1 - 01/23/2014
  * Use lsmod for getting the list of installed modules [See #55]
  * Parse cookies on the http request always [See #56]
  * Use `stack-trace` to assist in capturing stacks. This should fix compat with the New Relic plugin [See #57]

## 0.6.0 - 11/9/2013
  * Updated sentry protocol to version 4 (Requires Sentry 6.0+ now)
  * Module names now include the full path
  * Attach client IP address to env object

## 0.5.6 - 11/8/2013
  * Include module and function name in stacktrace culprit

## 0.5.5 - 11/8/2013
  * Only record exceptions for 500 status codes from Connect middleware

## 0.5.4 - 10/13/2013
  * Fix DSN parser when using Sentry at a non-root URL, thanks @rcoup [See #44]

## 0.5.3 - 10/4/2013
  * Bump raw-stacktrace version

## 0.5.2 - 9/10/2013
  * Fix compatibilities with CoffeeScript [Fixes #47] [Fixes #50]
  * Doesn't choke on circular references

## 0.5.1 - 5/1/2013
  * Add support for third party transports, thanks @crankycoder

## 0.5.0 - 4/8/2013
  * Remove NODE_ENV entirely, fixes many issues since people have different opinions on wtf this means
  * Several fixes in collecting a better stack trace, thanks @azylman
  * Pass exception through to the patchGlobal callback, thanks @ktmud [See #28]
  * Official 0.10 support!
  * Other misc things. https://github.com/mattrobenolt/raven-node/compare/v0.4.7...v0.5.0

## 0.4.7 - 1/13/2013
  * Actually disable when NODE_ENV does not equal 'production' [Fixes #25]

## 0.4.6 - 1/13/2013
  * Added `platform=node` to payload for Sentry 5.1

## 0.4.5 - 12/05/2012
  * Resolve `node_modules` path properly [Fixes #23]

## 0.4.4 - 11/10/2012
  * Prevent 'error' event from bubbling up due to no listeners [See #22]
  * Augment 'error' event emitter with an actual Error object [See #22]

## 0.4.3 - 10/02/2012
  * Allow a callback to be given to `patchGlobal()` [Fixes #19]
  * Removed old `patch_global()` alias

## 0.4.2 - 9/29/2012
  * Added test coverage to `patchGlobal()`
  * Quit using my own deprecated `get_ident()` method inside `patchGlobal`
  * Send string errors as a normal message to prevent Sentry server from crying [Fixes #18]

## 0.4.1 - 9/3/2012
 * patchGlobal() was actually broken. :( Thanks @ligthyear [Fixes #17]

## 0.4.0 - 8/14/2012
 * Silence and disable Raven/Sentry when using a non-existent or falsey DSN value

## 0.3.0 - 6/23/2012
 * Separate transports out into their own module for portability
 * Added UDP transport [Fixes #10]
 * Ignore sub-transports, such as gevent+https, raven sees it as just https

## 0.2.4 - 6/16/2012
 * Added parsing DSNs with non-standard port. [Fixes #4]
 * Added BSD license

## 0.2.3 - 3/30/2012
 * Prevent any potentially odd stack traces from causing Raven to crash. [Fixes #2]

## 0.2.2 - 3/22/2012
 * raven.Client now emits `logged` and `error` events.

## 0.2.1 - 3/22/2012
 * Fixed connect/express middleware, thanks Almad!

## 0.2.0 - 3/18/2012
 * Renamed all methods to follow `client.capture*()` pattern. (Sorry if you were already using it!)
 * All `npm` installed modules are shoved into Sentry for debugging
 * Toggle actual sending based on `NODE_ENV` variable. Check README for information.
 * Fixes for more types of stack traces.
 * Added `client.captureQuery()`
 * Support for `SENTRY_DSN`, `SENTRY_NAME`, and `SENTRY_SITE` environment variables
 * More test coverage

## 0.1.0 - 3/17/2012
 * Initial release
