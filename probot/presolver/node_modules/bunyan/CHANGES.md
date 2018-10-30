# bunyan Changelog

Known issues:

- [issue #58] Can't install to a dir with spaces. This is [this node-gyp
  bug](https://github.com/TooTallNate/node-gyp/issues/65).

## not yet released

(nothing yet)


## 1.8.12

- [issue #444] Fix the `bunyan` CLI to not duplicate the "HTTP/1.1 ..." status
  line when serializing a "res" field.


## 1.8.11

- [issue #504] The `bunyan` 1.x CLI adds a `Host: $client_req.address[:$client_req.port]`
  header when rendering a `client_req` field in a log record. Fix that here to:
  (a) not add it if `client_req.headers` already includes a host header; and
  (b) not include the given `port` if it is 80 or 443 (*assuming* that is the
  default port.
  Note: `bunyan` 2.x CLI will stop adding this Host header because it is a guess
  that can be wrong and misleading.


## 1.8.10

- Ensure that `bunyan` errors out if attempting to use `-p PID` and
  file args at the same time.


## 1.8.9

- [pull #409, issue #246] Revert a change added to the `bunyan` CLI version
  1.0.1 where `SIGINT` was ignored, such that Ctrl+C could not be used to
  terminate bunyan. (By @zbjornson and @davepacheco.)
- [pull #469] Fix a strict mode (`"use strict;"`) error in some versions of
  Safari.


## 1.8.8

- Fix breakage due to a silly last minute "fix 'make check'".


## 1.8.7

Note: *Bad release.* Use 1.8.8 or later.

- [issue #484] Fix breakage due to #474 in previous release.


## 1.8.6

Note: *Bad release.* Use 1.8.7 or later.

- [issue #474] Bunyan's `safeCycles` is too slow when logging large objects.


## 1.8.5

- [issue #401] Improved performance when using disabled log levels.


## 1.8.4

- [issue #454] Fix `src` usage with node v7.


## 1.8.3

- [issue #450] Fix `log.info(null)` crash that resulted from #426 in v1.8.2.


## 1.8.2

- [issue #449] Bump dtrace-provider dep to 0.7.0 to help avoid deprecation
  warnings with node v6 in some cases.
- [issue #426] Ensure `log.info({err: err})` results in a "msg" value, just
  like `log.info(err)`.


## 1.8.1

- [pull #386] Fix bad bug in rotation that could cause a crash with
  error message "cannot start a rotation when already rotating"
  (by Frankie O'Rourke). The bug was introduced in 1.8.0.


## 1.8.0

Note: *Bad release.* An addition in this release broke 'rotating-file' usage.
Use 1.8.1 or later.

- [issue #370] Fix `bunyan -p ...` (i.e. DTrace integration) on node
  4.x and 5.x.
- [issue #329, pull #330] Update the 'rotating-file' stream to do a file
  rotation on initialization if the mtime on the file path indicates the
  last rotation time was missed -- i.e. if the app wasn't running at the
  time. (by Paul Milham.)


## 1.7.1

- [issue #332, pull #355] Ensure stream for type='stream' stream is a writable
  stream. (By Michael Nisi.)

- [issue #344] Fix "rotating-file" Bunyan streams to not miss rotations when configured
  for a period greater than approximately 25 days. Before this there was an issue
  where periods greater than node.js's maximum `setTimeout` length would fail to rotate.
  (By Martijn Schrage.)

- [issue #234, pull #345] Improve `bunyan` CLI rendering of "res" field
  HTTP responses to not show two blank lines for an empty body.
  (By Michael Nisi.)


## 1.7.0

- [pull #311, #302, #310] Improve the runtime environment detection to fix
  running under [NW.js](http://nwjs.io/). Contributions by Adam Lynch, Jeremy
  Ruppel, and Aleksey Timchenko.

- [pull #318] Add `reemitErrorEvents` optional boolean for streams added to a
  Bunyan logger to control whether an "error" event on the stream will be
  re-emitted on the `Logger` instance.

        var log = bunyan.createLogger({
            name: 'foo',
            streams: [
                {
                    type: 'raw',
                    stream: new MyCustomStream(),
                    reemitErrorEvents: true
                }
            ]
        });

  Before this change, "error" events were re-emitted on [`file`
  streams](https://github.com/trentm/node-bunyan#stream-type-file) only. The new
  behaviour is as follows:

    - `reemitErrorEvents` not specified: `file` streams will re-emit error events
      on the Logger instance.
    - `reemitErrorEvents: true`: error events will be re-emitted on the Logger
      for any stream with a `.on()` function -- which includes file streams,
      process.stdout/stderr, and any object that inherits from EventEmitter.
    - `reemitErrorEvents: false`: error events will not be re-emitted for any
      streams.

  Dev Note: Bunyan `Logger` objects don't currently have a `.close()` method
  in which registered error event handlers can be *un*registered. That means
  that a (presumably rare) situation where code adds dozens of Bunyan Logger
  streams to, e.g. process.stdout, and with `reemitErrorEvents: true`, could
  result in leaking Logger objects.

  Original work for allowing "error" re-emitting on non-file streams is
  by Marc Udoff in pull #318.


## 1.6.0

- [pull #304, issue #245] Use [Moment.js][momentjs.com] library to handle
  `bunyan` CLI time formatting in some cases, especially to fix display of
  local time. It is now required for local time formatting (i.e. `bunyan -L`
  or `bunyan --time local`). (By David M. Lee.)

- [pull #252] Fix errant `client_res={}` in `bunyan` CLI rendering, and avoid
  extra newlines in `client_req` rendering in some cases. (By Thomas Heymann.)

- [pull #291, issue #303] Fix `LOG.child(...)` to *not* override the "hostname"
  field of the parent. A use case is when one manually sets "hostname" to
  something other than `os.hostname()`. (By github.com/Cactusbone.)

- [issue #325] Allow one to set `level: 0` in `createLogger` to turn on
  logging for all levels. (Adapted from #336 by github.com/sometimesalready.)

- Add guards (to `resolveLevel`) so that all "level" values are validated.
  Before this, a bogus level like "foo" or -12 or `['some', 'array']` would
  silently be accepted -- with undefined results.

- Doc updates for #340 and #305.

- Update `make test` to test against node 5, 4, 0.12 and 0.10.


## 1.5.1

- [issue #296] Fix `src: true`, which was broken in v1.5.0.


## 1.5.0

Note: *Bad release.* The addition of `'use strict';` broke Bunyan's `src: true`
feature. Use 1.5.1 instead.

- [pull #236, issue #231, issue #223] Fix strict mode in the browser.
- [pull #282, issue #213] Fixes bunyan to work with webpack. By Denis Izmaylov.
- [pull #294] Update to dtrace-provider 0.6 to fix with node 4.0 and io.js 3.0.
- Dropped support for 0.8 (can't install deps easily anymore for running
  test suite). Bump to a recent iojs version for testing.


## 1.4.0

(Bumping minor ver b/c I'm wary of dtrace-provider changes. :)

- [issue #258, pull #259] Update to dtrace-provider 0.5 to fix
  install and tests on recent io.js versions.
- safe-json-stringify@1.0.3 changed output, breaking some tests. Fix those.


## 1.3.6

- [issue #244] Make `bunyan` defensive on `res.header=null`.


## 1.3.5

- [issue #233] Make `bunyan` defensive on res.header as a boolean.
- [issue #242] Make `bunyan` defensive on err.stack not being a string.


## 1.3.4

- Allow `log.child(...)` to work even if the logger is a *sub-class*
  of Bunyan's Logger class.
- [issue #219] Hide 'source-map-support' require from browserify.
- [issue #218] Reset `haveNonRawStreams` on `<logger>.addStream`.


## 1.3.3

- [pull #127] Update to dtrace-provider 0.4.0, which gives io.js 1.x support
  for dtrace-y parts of Bunyan.


## 1.3.2

- [pull #182] Fallback to using the optional 'safe-json-stringify' module
  if `JSON.stringify` throws -- possibly with an enumerable property
  getter than throws. By Martin Gausby.


## 1.3.1

- Export `bunyan.RotatingFileStream` which is needed if one wants to
  customize it. E.g. see issue #194.

- [pull #122] Source Map support for caller line position for [the "src"
  field](https://github.com/trentm/node-bunyan#src). This could be interesting
  for [CoffeeScript](http://coffeescript.org/documentation/docs/sourcemap.html)
  users of Bunyan. By Manuel Schneider.

- [issue #164] Ensure a top-level `level` given in `bunyan.createLogger`
  is *used* for given `streams`. For example, ensure that the following
  results in the stream having a DEBUG level:

        var log = bunyan.createLogger({
            name: 'foo',
            level: 'debug',
            streams: [
                {
                    path: '/var/tmp/foo.log'
                }
            ]
        });

  This was broken in the 1.0.1 release. Between that release and 1.3.0
  the "/var/tmp/foo.log" stream would be at the INFO level (Bunyan's
  default level).


## 1.3.0

- [issue #103] `bunyan -L` (or `bunyan --time local`) to show local time.
  Bunyan log records store `time` in UTC time. Sometimes it is convenient
  to display in local time.

- [issue #205] Fix the "The Bunyan CLI crashed!" checking to properly warn of
  the common failure case when `-c CONDITION` is being used.


## 1.2.4

- [issue #210] Export `bunyan.nameFromLevel` and `bunyan.levelFromName`. It can
  be a pain for custom streams to have to reproduce that.

- [issue #100] Gracefully handle the case of an unbound
  `Logger.{info,debug,...}` being used for logging, e.g.:

        myEmittingThing.on('data', log.info)

  Before this change, bunyan would throw. Now it emits a warning to stderr
  *once*, and then silently ignores those log attempts, e.g.:

        bunyan usage error: /Users/trentm/tm/node-bunyan/foo.js:12: attempt to log with an unbound log method: `this` is: { _events: { data: [Function] } }


## 1.2.3

- [issue #184] Fix log rotation for rotation periods > ~25 days. Before this
  change, a rotation period longer than this could hit [the maximum setTimeout
  delay in node.js](https://github.com/joyent/node/issues/8656). By Daniel Juhl.


## 1.2.2

- Drop the guard that a bunyan Logger level must be between TRACE (10)
  and FATAL (60), inclusive. This allows a trick of setting the level
  to `FATAL + 1` to turn logging off. While the standard named log levels are
  the golden path, then intention was not to get in the way of using
  other level numbers.


## 1.2.1

- [issue #178, #181] Get at least dtrace-provider 0.3.1 for
  optionalDependencies to get a fix for install with decoupled npm (e.g. with
  homebrew's node and npm).


## 1.2.0

- [issue #157] Restore dtrace-provider as a dependency (in
  "optionalDependencies").

  Dtrace-provider version 0.3.0 add build sugar that should eliminate the
  problems from older versions:
  The build is not attempted on Linux and Windows. The build spew is
  *not* emitted by default (use `V=1 npm install` to see it); instead a
  short warning is emitted if the build fails.

  Also, importantly, the new dtrace-provider fixes working with node
  v0.11/0.12.


## 1.1.3

- [issue #165] Include extra `err` fields in `bunyan` CLI output. Before
  this change only the fields part of the typical node.js error stack
  (err.stack, err.message, err.name) would be emitted, even though
  the Bunyan *library* would typically include err.code and err.signal
  in the raw JSON log record.


## 1.1.2

- Fix a breakage in `log.info(err)` on a logger with no serializers.


## 1.1.1

Note: *Bad release.* It breaks `log.info(err)` on a logger with no serializers.
Use version 1.1.2.

- [pull #168] Fix handling of `log.info(err)` to use the `log` Logger's `err`
  serializer if it has one, instead of always using the core Bunyan err
  serializer. (By Mihai Tomescu.)


## 1.1.0

- [issue #162] Preliminary support for [browserify](http://browserify.org/).
  See [the section in the README](../README.md#browserify).


## 1.0.1

- [issues #105, #138, #151] Export `<Logger>.addStream(...)` and
  `<Logger>.addSerializers(...)` to be able to add them after Logger creation.
  Thanks @andreineculau!

- [issue #159] Fix bad handling in construtor guard intending to allow
  creation without "new": `var log = Logger(...)`. Thanks @rmg!

- [issue #156] Smaller install size via .npmignore file.

- [issue #126, #161] Ignore SIGINT (Ctrl+C) when processing stdin. `...| bunyan`
  should expect the preceding process in the pipeline to handle SIGINT. While
  it is doing so, `bunyan` should continue to process any remaining output.
  Thanks @timborodin and @jnordberg!

- [issue #160] Stop using ANSI 'grey' in `bunyan` CLI output, because of the
  problems that causes with Solarized Dark themes (see
  <https://github.com/altercation/solarized/issues/220>).


## 1.0.0

- [issue #87] **Backward incompatible change to `-c CODE`** improving
  performance by over 10x (good!), with a backward incompatible change to
  semantics (unfortunate), and adding some sugar (good!).

  The `-c CODE` implementation was changed to use a JS function for processing
  rather than `vm.runInNewContext`. The latter was specatularly slow, so
  won't be missed. Unfortunately this does mean a few semantic differences in
  the `CODE`, the most noticeable of which is that **`this` is required to
  access the object fields:**

        # Bad. Works with bunyan 0.x but not 1.x.
        $ bunyan -c 'pid === 123' foo.log
        ...

        # Good. Works with all versions of bunyan
        $ bunyan -c 'this.pid === 123' foo.log
        ...

  The old behaviour of `-c` can be restored with the `BUNYAN_EXEC=vm`
  environment variable:

        $ BUNYAN_EXEC=vm bunyan -c 'pid === 123' foo.log
        ...

  Some sugar was also added: the TRACE, DEBUG, ... constants are defined, so
  one can:

        $ bunyan -c 'this.level >= ERROR && this.component === "http"' foo.log
        ...

  And example of the speed improvement on a 10 MiB log example:

        $ time BUNYAN_EXEC=vm bunyan -c 'this.level === ERROR' big.log | cat >slow

        real    0m6.349s
        user    0m6.292s
        sys    0m0.110s

        $ time bunyan -c 'this.level === ERROR' big.log | cat >fast

        real    0m0.333s
        user    0m0.303s
        sys    0m0.028s

  The change was courtesy Patrick Mooney (https://github.com/pfmooney). Thanks!

- Add `bunyan -0 ...` shortcut for `bunyan -o bunyan ...`.

- [issue #135] **Backward incompatible.** Drop dtrace-provider even from
  `optionalDependencies`. Dtrace-provider has proven a consistent barrier to
  installing bunyan, because it is a binary dep. Even as an *optional* dep it
  still caused confusion and install noise.

  Users of Bunyan on dtrace-y platforms (SmartOS, Mac, Illumos, Solaris) will
  need to manually `npm install dtrace-provider` themselves to get [Bunyan's
  dtrace support](https://github.com/trentm/node-bunyan#runtime-log-snooping-via-dtrace)
  to work. If not installed, bunyan should stub it out properly.



## 0.23.1

- [pull #125, pull #97, issue #73] Unref rotating-file timeout which was
  preventing processes from exiting (by https://github.com/chakrit and
  https://github.com/glenn-murray-bse). Note: this only fixes the issue
  for node 0.10 and above.


## 0.23.0

- [issue #139] Fix `bunyan` crash on a log record with `res.header` that is an
  object. A side effect of this improvement is that a record with `res.statusCode`
  but no header info will render a response block, for example:

        [2012-08-08T10:25:47.637Z]  INFO: my-service/12859 on my-host: some message (...)
            ...
            --
            HTTP/1.1 200 OK
            --
            ...

- [pull #42] Fix `bunyan` crash on a log record with `req.headers` that is a *string*
  (by https://github.com/aexmachina).

- Drop node 0.6 support. I can't effectively `npm install` with a node 0.6
  anymore.

- [issue #85] Ensure logging a non-object/non-string doesn't throw (by
  https://github.com/mhart). This changes fixes:

        log.info(<bool>)     # TypeError: Object.keys called on non-object
        log.info(<function>) # "msg":"" (instead of wanted "msg":"[Function]")
        log.info(<array>)    # "msg":"" (instead of wanted "msg":util.format(<array>))


## 0.22.3

- Republish the same code to npm.


## 0.22.2

Note: Bad release. The published package in the npm registry got corrupted. Use 0.22.3 or later.

- [issue #131] Allow `log.info(<number>)` and, most importantly, don't crash on that.

- Update 'mv' optional dep to latest.


## 0.22.1

- [issue #111] Fix a crash when attempting to use `bunyan -p` on a platform without
  dtrace.

- [issue #101] Fix a crash in `bunyan` rendering a record with unexpected "res.headers".


## 0.22.0

- [issue #104] `log.reopenFileStreams()` convenience method to be used with external log
  rotation.


## 0.21.4

- [issue #96] Fix `bunyan` to default to paging (with `less`) by default in node 0.10.0.
  The intention has always been to default to paging for node >=0.8.


## 0.21.3

- [issue #90] Fix `bunyan -p '*'` breakage in version 0.21.2.


## 0.21.2

**Note: Bad release. The switchrate change below broke `bunyan -p '*'` usage
(see issue #90). Use 0.21.3 or later.**

- [issue #88] Should be able to efficiently combine "-l" with "-p *".

- Avoid DTrace buffer filling up, e.g. like this:

        $ bunyan -p 42241 > /tmp/all.log
        dtrace: error on enabled probe ID 3 (ID 75795: bunyan42241:mod-87ea640:log-trace:log-trace): out of scratch space in action #1 at DIF offset 12
        dtrace: error on enabled probe ID 3 (ID 75795: bunyan42241:mod-87ea640:log-trace:log-trace): out of scratch space in action #1 at DIF offset 12
        dtrace: 138 drops on CPU 4
        ...

  From Bryan: "the DTrace buffer is filling up because the string size is so
  large... by increasing the switchrate, you're increasing the rate at
  which that buffer is emptied."


## 0.21.1

- [pull #83] Support rendering 'client_res' key in bunyan CLI (by
  github.com/mcavage).


## 0.21.0

- 'make check' clean, 4-space indenting. No functional change here, just
  lots of code change.
- [issue #80, #82] Drop assert that broke using 'rotating-file' with
  a default `period` (by github.com/ricardograca).


## 0.20.0

- [Slight backward incompatibility] Fix serializer bug introduced in 0.18.3
  (see below) to only apply serializers to log records when appropriate.

  This also makes a semantic change to custom serializers. Before this change
  a serializer function was called for a log record key when that value was
  truth-y. The semantic change is to call the serializer function as long
  as the value is not `undefined`. That means that a serializer function
  should handle falsey values such as `false` and `null`.

- Update to latest 'mv' dep (required for rotating-file support) to support
  node v0.10.0.


## 0.19.0

**WARNING**: This release includes a bug introduced in bunyan 0.18.3 (see
below). Please upgrade to bunyan 0.20.0.

- [Slight backward incompatibility] Change the default error serialization
  (a.k.a. `bunyan.stdSerializers.err`) to *not* serialize all additional
  attributes of the given error object. This is an open door to unsafe logging
  and logging should always be safe. With this change, error serialization
  will log these attributes: message, name, stack, code, signal. The latter
  two are added because some core node APIs include those fields (e.g.
  `child_process.exec`).

  Concrete examples where this has hurt have been the "domain" change
  necessitating 0.18.3 and a case where
  [node-restify](https://github.com/mcavage/node-restify) uses an error object
  as the response object. When logging the `err` and `res` in the same log
  statement (common for restify audit logging), the `res.body` would be JSON
  stringified as '[Circular]' as it had already been emitted for the `err` key.
  This results in a WTF with the bunyan CLI because the `err.body` is not
  rendered.

  If you need the old behaviour back you will need to do this:

        var bunyan = require('bunyan');
        var errSkips = {
            // Skip domain keys. `domain` especially can have huge objects that can
            // OOM your app when trying to JSON.stringify.
            domain: true,
            domain_emitter: true,
            domain_bound: true,
            domain_thrown: true
        };
        bunyan.stdSerializers.err = function err(err) {
           if (!err || !err.stack)
               return err;
           var obj = {
               message: err.message,
               name: err.name,
               stack: getFullErrorStack(err)
           }
           Object.keys(err).forEach(function (k) {
               if (err[k] !== undefined && !errSkips[k]) {
                   obj[k] = err[k];
               }
           });
           return obj;
         };

- "long" and "bunyan" output formats for the CLI. `bunyan -o long` is the default
  format, the same as before, just called "long" now instead of the cheesy "paul"
  name. The "bunyan" output format is the same as "json-0", just with a more
  convenient name.


## 0.18.3

**WARNING**: This release introduced a bug such that all serializers are
applied to all log records even if the log record did not contain the key
for that serializer. If a logger serializer function does not handle
being given `undefined`, then you'll get warnings like this on stderr:

    bunyan: ERROR: This should never happen. This is a bug in <https://github.com/trentm/node-bunyan> or in this application. Exception from "foo" Logger serializer: Error: ...
        at Object.bunyan.createLogger.serializers.foo (.../myapp.js:20:15)
        at Logger._applySerializers (.../lib/bunyan.js:644:46)
        at Array.forEach (native)
        at Logger._applySerializers (.../lib/bunyan.js:640:33)
        ...

and the following junk in written log records:

    "foo":"(Error in Bunyan log "foo" serializer broke field. See stderr for details.)"

Please upgrade to bunyan 0.20.0.


- Change the `bunyan.stdSerializers.err` serializer for errors to *exclude*
  [the "domain*" keys](http://nodejs.org/docs/latest/api/all.html#all_additions_to_error_objects).
  `err.domain` will include its assigned members which can arbitrarily large
  objects that are not intended for logging.

- Make the "dtrace-provider" dependency optional. I hate to do this, but
  installing bunyan on Windows is made very difficult with this as a required
  dep.  Even though "dtrace-provider" stubs out for non-dtrace-y platforms,
  without a compiler and Python around, node-gyp just falls over.


## 0.18.2

- [pull #67] Remove debugging prints in rotating-file support.
  (by github.com/chad3814).
- Update to dtrace-provider@0.2.7.


## 0.18.1

- Get the `bunyan` CLI to **not** automatically page (i.e. pipe to `less`)
  if stdin isn't a TTY, or if following dtrace probe output (via `-p PID`),
  or if not given log file arguments.


## 0.18.0

- Automatic paging support in the `bunyan` CLI (similar to `git log` et al).
  IOW, `bunyan` will open your pager (by default `less`) and pipe rendered
  log output through it. A main benefit of this is getting colored logs with
  a pager without the pain. Before you had to explicit use `--color` to tell
  bunyan to color output when the output was not a TTY:

        bunyan foo.log --color | less -R        # before
        bunyan foo.log                          # now

  Disable with the `--no-pager` option or the `BUNYAN_NO_PAGER=1` environment
  variable.

  Limitations: Only supported for node >=0.8. Windows is not supported (at
  least not yet).

- Switch test suite to nodeunit (still using a node-tap'ish API via
  a helper).


## 0.17.0

- [issue #33] Log rotation support:

        var bunyan = require('bunyan');
        var log = bunyan.createLogger({
            name: 'myapp',
            streams: [{
                type: 'rotating-file',
                path: '/var/log/myapp.log',
                count: 7,
                period: 'daily'
            }]
        });


- Tweak to CLI default pretty output: don't special case "latency" field.
  The special casing was perhaps nice, but less self-explanatory.
  Before:

        [2012-12-27T21:17:38.218Z]  INFO: audit/45769 on myserver: handled: 200 (15ms, audit=true, bar=baz)
          GET /foo
          ...

  After:

        [2012-12-27T21:17:38.218Z]  INFO: audit/45769 on myserver: handled: 200 (audit=true, bar=baz, latency=15)
          GET /foo
          ...

- *Exit* CLI on EPIPE, otherwise we sit there useless processing a huge log
  file with, e.g.  `bunyan huge.log | head`.


## 0.16.8

- Guards on `-c CONDITION` usage to attempt to be more user friendly.
  Bogus JS code will result in this:

        $ bunyan portal.log -c 'this.req.username==boo@foo'
        bunyan: error: illegal CONDITION code: SyntaxError: Unexpected token ILLEGAL
          CONDITION script:
            Object.prototype.TRACE = 10;
            Object.prototype.DEBUG = 20;
            Object.prototype.INFO = 30;
            Object.prototype.WARN = 40;
            Object.prototype.ERROR = 50;
            Object.prototype.FATAL = 60;
            this.req.username==boo@foo
          Error:
            SyntaxError: Unexpected token ILLEGAL
                at new Script (vm.js:32:12)
                at Function.Script.createScript (vm.js:48:10)
                at parseArgv (/Users/trentm/tm/node-bunyan-0.x/bin/bunyan:465:27)
                at main (/Users/trentm/tm/node-bunyan-0.x/bin/bunyan:1252:16)
                at Object.<anonymous> (/Users/trentm/tm/node-bunyan-0.x/bin/bunyan:1330:3)
                at Module._compile (module.js:449:26)
                at Object.Module._extensions..js (module.js:467:10)
                at Module.load (module.js:356:32)
                at Function.Module._load (module.js:312:12)
                at Module.runMain (module.js:492:10)

  And all CONDITION scripts will be run against a minimal valid Bunyan
  log record to ensure they properly guard against undefined values
  (at least as much as can reasonably be checked). For example:

        $ bunyan portal.log -c 'this.req.username=="bob"'
        bunyan: error: CONDITION code cannot safely filter a minimal Bunyan log record
          CONDITION script:
            Object.prototype.TRACE = 10;
            Object.prototype.DEBUG = 20;
            Object.prototype.INFO = 30;
            Object.prototype.WARN = 40;
            Object.prototype.ERROR = 50;
            Object.prototype.FATAL = 60;
            this.req.username=="bob"
          Minimal Bunyan log record:
            {
              "v": 0,
              "level": 30,
              "name": "name",
              "hostname": "hostname",
              "pid": 123,
              "time": 1355514346206,
              "msg": "msg"
            }
          Filter error:
            TypeError: Cannot read property 'username' of undefined
                at bunyan-condition-0:7:9
                at Script.Object.keys.forEach.(anonymous function) [as runInNewContext] (vm.js:41:22)
                at parseArgv (/Users/trentm/tm/node-bunyan-0.x/bin/bunyan:477:18)
                at main (/Users/trentm/tm/node-bunyan-0.x/bin/bunyan:1252:16)
                at Object.<anonymous> (/Users/trentm/tm/node-bunyan-0.x/bin/bunyan:1330:3)
                at Module._compile (module.js:449:26)
                at Object.Module._extensions..js (module.js:467:10)
                at Module.load (module.js:356:32)
                at Function.Module._load (module.js:312:12)
                at Module.runMain (module.js:492:10)

  A proper way to do that condition would be:

        $ bunyan portal.log -c 'this.req && this.req.username=="bob"'



## 0.16.7

- [issue #59] Clear a possibly interrupted ANSI color code on signal
  termination.


## 0.16.6

- [issue #56] Support `bunyan -p NAME` to dtrace all PIDs matching 'NAME' in
  their command and args (using `ps -A -o pid,command | grep NAME` or, on SunOS
  `pgrep -lf NAME`). E.g.:

        bunyan -p myappname

  This is useful for usage of node's [cluster
  module](http://nodejs.org/docs/latest/api/all.html#all_cluster) where you'll
  have multiple worker processes.


## 0.16.5

- Allow `bunyan -p '*'` to capture bunyan dtrace probes from **all** processes.
- issue #55: Add support for `BUNYAN_NO_COLOR` environment variable to
  turn off all output coloring. This is still overridden by the `--color`
  and `--no-color` options.


## 0.16.4

- issue #54: Ensure (again, see 0.16.2) that stderr from the dtrace child
  process (when using `bunyan -p PID`) gets through. There had been a race
  between exiting bunyan and the flushing of the dtrace process' stderr.


## 0.16.3

- Drop 'trentm-dtrace-provider' fork dep now that
  <https://github.com/chrisa/node-dtrace-provider/pull/24> has been resolved.
  Back to dtrace-provider.


## 0.16.2

- Ensure that stderr from the dtrace child process (when using `bunyan -p PID`)
  gets through. The `pipe` usage wasn't working on SmartOS. This is important
  to show the user if they need to 'sudo'.


## 0.16.1

- Ensure that a possible dtrace child process (with using `bunyan -p PID`) is
  terminated on signal termination of the bunyan CLI (at least for SIGINT,
  SIGQUIT, SIGTERM, SIGHUP).


## 0.16.0

- Add `bunyan -p PID` support. This is a convenience wrapper that effectively
  calls:

        dtrace -x strsize=4k -qn 'bunyan$PID:::log-*{printf("%s", copyinstr(arg0))}' | bunyan


## 0.15.0

- issue #48: Dtrace support! The elevator pitch is you can watch all logging
  from all Bunyan-using process with something like this:

        dtrace -x strsize=4k -qn 'bunyan*:::log-*{printf("%d: %s: %s", pid, probefunc, copyinstr(arg0))}'

  And this can include log levels *below* what the service is actually configured
  to log. E.g. if the service is only logging at INFO level and you need to see
  DEBUG log messages, with this you can. Obviously this only works on dtrace-y
  platforms: Illumos derivatives of SunOS (e.g. SmartOS, OmniOS), Mac, FreeBSD.

  Or get the bunyan CLI to render logs nicely:

        dtrace -x strsize=4k -qn 'bunyan*:::log-*{printf("%s", copyinstr(arg0))}' | bunyan

  See <https://github.com/trentm/node-bunyan#dtrace-support> for details. By
  Bryan Cantrill.


## 0.14.6

- Export `bunyan.safeCycles()`. This may be useful for custom `type == "raw"`
  streams that may do JSON stringification of log records themselves. Usage:

        var str = JSON.stringify(rec, bunyan.safeCycles());

- [issue #49] Allow a `log.child()` to specify the level of inherited streams.
  For example:

        # Before
        var childLog = log.child({...});
        childLog.level('debug');

        # After
        var childLog = log.child({..., level: 'debug'});

- Improve the Bunyan CLI crash message to make it easier to provide relevant
  details in a bug report.


## 0.14.5

- Fix a bug in the long-stack-trace error serialization added in 0.14.4. The
  symptom:

        bunyan@0.14.4: .../node_modules/bunyan/lib/bunyan.js:1002
          var ret = ex.stack || ex.toString();
                      ^
        TypeError: Cannot read property 'stack' of undefined
            at getFullErrorStack (.../node_modules/bunyan/lib/bunyan.js:1002:15)
            ...


## 0.14.4

- **Bad release. Use 0.14.5 instead.**
- Improve error serialization to walk the chain of `.cause()` errors
  from the likes of `WError` or `VError` error classes from
  [verror](https://github.com/davepacheco/node-verror) and
  [restify v2.0](https://github.com/mcavage/node-restify). Example:

        [2012-10-11T00:30:21.871Z] ERROR: imgapi/99612 on 0525989e-2086-4270-b960-41dd661ebd7d: my-message
            ValidationFailedError: my-message; caused by TypeError: cause-error-message
                at Server.apiPing (/opt/smartdc/imgapi/lib/app.js:45:23)
                at next (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:550:50)
                at Server.setupReq (/opt/smartdc/imgapi/lib/app.js:178:9)
                at next (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:550:50)
                at Server.parseBody (/opt/smartdc/imgapi/node_modules/restify/lib/plugins/body_parser.js:15:33)
                at next (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:550:50)
                at Server.parseQueryString (/opt/smartdc/imgapi/node_modules/restify/lib/plugins/query.js:40:25)
                at next (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:550:50)
                at Server._run (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:579:17)
                at Server._handle.log.trace.req (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:480:38)
            Caused by: TypeError: cause-error-message
                at Server.apiPing (/opt/smartdc/imgapi/lib/app.js:40:25)
                at next (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:550:50)
                at Server.setupReq (/opt/smartdc/imgapi/lib/app.js:178:9)
                at next (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:550:50)
                at Server.parseBody (/opt/smartdc/imgapi/node_modules/restify/lib/plugins/body_parser.js:15:33)
                at next (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:550:50)
                at Server.parseQueryString (/opt/smartdc/imgapi/node_modules/restify/lib/plugins/query.js:40:25)
                at next (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:550:50)
                at Server._run (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:579:17)
                at Server._handle.log.trace.req (/opt/smartdc/imgapi/node_modules/restify/lib/server.js:480:38)


## 0.14.2

- [issue #45] Fix bunyan CLI (default output mode) to not crash on a 'res'
  field that isn't a response object, but a string.


## 0.14.1

- [issue #44] Fix the default `bunyan` CLI output of a `res.body` that is an
  object instead of a string. See issue#38 for the same with `req.body`.


## 0.14.0

- [pull #41] Safe `JSON.stringify`ing of emitted log records to avoid blowing
  up on circular objects (by Isaac Schlueter).


## 0.13.5

- [issue #39] Fix a bug with `client_req` handling in the default output
  of the `bunyan` CLI.


## 0.13.4

- [issue #38] Fix the default `bunyan` CLI output of a `req.body` that is an
  object instead of a string.


## 0.13.3

- Export `bunyan.resolveLevel(NAME-OR-NUM)` to resolve a level name or number
  to its log level number value:

        > bunyan.resolveLevel('INFO')
        30
        > bunyan.resolveLevel('debug')
        20

  A side-effect of this change is that the uppercase level name is now allowed
  in the logger constructor.


## 0.13.2

- [issue #35] Ensure that an accidental `log.info(BUFFER)`, where BUFFER is
  a node.js Buffer object, doesn't blow up.


## 0.13.1

- [issue #34] Ensure `req.body`, `res.body` and other request/response fields
  are emitted by the `bunyan` CLI (mostly by Rob Gulewich).



## 0.13.0

- [issue #31] Re-instate defines for the (uppercase) log level names (TRACE,
  DEBUG, etc.) in `bunyan -c "..."` filtering condition code. E.g.:

        $ ... | bunyan -c 'level >= ERROR'


## 0.12.0

- [pull #32] `bunyan -o short` for more concise output (by Dave Pacheco). E.g.:

        22:56:52.856Z  INFO myservice: My message

  instead of:

        [2012-02-08T22:56:52.856Z]  INFO: myservice/123 on example.com: My message


## 0.11.3

- Add '--strict' option to `bunyan` CLI to suppress all but legal Bunyan JSON
  log lines. By default non-JSON, and non-Bunyan lines are passed through.


## 0.11.2

- [issue #30] Robust handling of 'req' field without a 'headers' subfield
  in `bunyan` CLI.
- [issue #31] Pull the TRACE, DEBUG, et al defines from `bunyan -c "..."`
  filtering code. This was added in v0.11.1, but has a significant adverse
  affect.


## 0.11.1

- **Bad release. The TRACE et al names are bleeding into the log records
  when using '-c'.**
- Add defines for the (uppercase) log level names (TRACE, DEBUG, etc.) in
  `bunyan -c "..."` filtering condition code. E.g.:

        $ ... | bunyan -c 'level >= ERROR'


## 0.11.0

- [pull #29] Add -l/--level for level filtering, and -c/--condition for
  arbitrary conditional filtering (by github.com/isaacs):

        $ ... | bunyan -l error   # filter out log records below error
        $ ... | bunyan -l 50      # numeric value works too
        $ ... | bunyan -c 'level===50'              # equiv with -c filtering
        $ ... | bunyan -c 'pid===123'               # filter on any field
        $ ... | bunyan -c 'pid===123' -c '_audit'   # multiple filters


## 0.10.0

- [pull #24] Support for gzip'ed log files in the bunyan CLI (by
  github.com/mhart):

        $ bunyan foo.log.gz
        ...


## 0.9.0

- [pull #16] Bullet proof the `bunyan.stdSerializers` (by github.com/rlidwka).

- [pull #15] The `bunyan` CLI will now chronologically merge multiple log
  streams when it is given multiple file arguments. (by github.com/davepacheco)

        $ bunyan foo.log bar.log
        ... merged log records ...

- [pull #15] A new `bunyan.RingBuffer` stream class that is useful for
  keeping the last N log messages in memory. This can be a fast way to keep
  recent, and thus hopefully relevant, log messages. (by @dapsays,
  github.com/davepacheco)

  Potential uses: Live debugging if a running process could inspect those
  messages. One could dump recent log messages at a finer log level than is
  typically logged on
  [`uncaughtException`](http://nodejs.org/docs/latest/api/all.html#all_event_uncaughtexception).

        var ringbuffer = new bunyan.RingBuffer({ limit: 100 });
        var log = new bunyan({
            name: 'foo',
            streams: [{
                type: 'raw',
                stream: ringbuffer,
                level: 'debug'
            }]
        });

        log.info('hello world');
        console.log(ringbuffer.records);

- Add support for "raw" streams. This is a logging stream that is given
  raw log record objects instead of a JSON-stringified string.

        function Collector() {
            this.records = [];
        }
        Collector.prototype.write = function (rec) {
            this.records.push(rec);
        }
        var log = new Logger({
            name: 'mylog',
            streams: [{
                type: 'raw',
                stream: new Collector()
            }]
        });

  See "examples/raw-stream.js". I expect raw streams to be useful for
  piping Bunyan logging to separate services (e.g. <http://www.loggly.com/>,
  <https://github.com/etsy/statsd>) or to separate in-process handling.

- Add test/corpus/*.log files (accidentally excluded) so the test suite
  actually works(!).


## 0.8.0

- [pull #21] Bunyan loggers now re-emit `fs.createWriteStream` error events.
  By github.com/EvanOxfeld. See "examples/handle-fs-error.js" and
  "test/error-event.js" for details.

        var log = new Logger({name: 'mylog', streams: [{path: FILENAME}]});
        log.on('error', function (err, stream) {
            // Handle error writing to or creating FILENAME.
        });

- jsstyle'ing (via `make check`)


## 0.7.0

- [issue #12] Add `bunyan.createLogger(OPTIONS)` form, as is more typical in
  node.js APIs.  This'll eventually become the preferred form.


## 0.6.9

- Change `bunyan` CLI default output to color "src" info red. Before the "src"
  information was uncolored. The "src" info is the filename, line number and
  function name resulting from using `src: true` in `Logger` creation. I.e.,
  the `(/Users/trentm/tm/node-bunyan/examples/hi.js:10)` in:

        [2012-04-10T22:28:58.237Z]  INFO: myapp/39339 on banana.local (/Users/trentm/tm/node-bunyan/examples/hi.js:10): hi

- Tweak `bunyan` CLI default output to still show an "err" field if it doesn't
  have a "stack" attribute.


## 0.6.8

- Fix bad bug in `log.child({...}, true);` where the added child fields **would
  be added to the parent's fields**. This bug only existed for the "fast child"
  path (that second `true` argument). A side-effect of fixing this is that
  the "fast child" path is only 5 times as fast as the regular `log.child`,
  instead of 10 times faster.


## 0.6.7

- [issue #6] Fix bleeding 'type' var to global namespace. (Thanks Mike!)


## 0.6.6

- Add support to the `bunyan` CLI taking log file path args, `bunyan foo.log`,
  in addition to the usual `cat foo.log | bunyan`.
- Improve reliability of the default output formatting of the `bunyan` CLI.
  Before it could blow up processing log records missing some expected
  fields.


## 0.6.5

- ANSI coloring output from `bunyan` CLI tool (for the default output mode/style).
  Also add the '--color' option to force coloring if the output stream is not
  a TTY, e.g. `cat my.log | bunyan --color | less -R`. Use `--no-color` to
  disable coloring, e.g. if your terminal doesn't support ANSI codes.
- Add 'level' field to log record before custom fields for that record. This
  just means that the raw record JSON will show the 'level' field earlier,
  which is a bit nicer for raw reading.


## 0.6.4

- [issue #5] Fix `log.info() -> boolean` to work properly. Previous all were
  returning false. Ditto all trace/debug/.../fatal methods.


## 0.6.3

- Allow an optional `msg` and arguments to the `log.info(<Error> err)` logging
  form. For example, before:

        log.debug(my_error_instance)            // good
        log.debug(my_error_instance, "boom!")   // wasn't allowed

  Now the latter is allowed if you want to expliciting set the log msg. Of course
  this applies to all the `log.{trace|debug|info...}()` methods.

- `bunyan` cli output: clarify extra fields with quoting if empty or have
  spaces. E.g. 'cmd' and 'stderr' in the following:

        [2012-02-12T00:30:43.736Z] INFO: mo-docs/43194 on banana.local: buildDocs results (req_id=185edca2-2886-43dc-911c-fe41c09ec0f5, route=PutDocset, error=null, stderr="", cmd="make docs")


## 0.6.2

- Fix/guard against unintended inclusion of some files in npm published package
  due to <https://github.com/isaacs/npm/issues/2144>


## 0.6.1

- Internal: starting jsstyle usage.
- Internal: add .npmignore. Previous packages had reams of bunyan crud in them.


## 0.6.0

- Add 'pid' automatic log record field.


## 0.5.3

- Add 'client_req' (HTTP client request) standard formatting in `bunyan` CLI
  default output.
- Improve `bunyan` CLI default output to include *all* log record keys. Unknown keys
  are either included in the first line parenthetical (if short) or in the indented
  subsequent block (if long or multiline).


## 0.5.2

- [issue #3] More type checking of `new Logger(...)` and `log.child(...)`
  options.
- Start a test suite.


## 0.5.1

- [issue #2] Add guard on `JSON.stringify`ing of log records before emission.
  This will prevent `log.info` et al throwing on record fields that cannot be
  represented as JSON. An error will be printed on stderr and a clipped log
  record emitted with a 'bunyanMsg' key including error details. E.g.:

        bunyan: ERROR: could not stringify log record from /Users/trentm/tm/node-bunyan/examples/unstringifyable.js:12: TypeError: Converting circular structure to JSON
        {
          "name": "foo",
          "hostname": "banana.local",
          "bunyanMsg": "bunyan: ERROR: could not stringify log record from /Users/trentm/tm/node-bunyan/examples/unstringifyable.js:12: TypeError: Converting circular structure to JSON",
        ...

  Some timing shows this does effect log speed:

        $ node tools/timeguard.js     # before
        Time try/catch-guard on JSON.stringify:
         - log.info:  0.07365ms per iteration
        $ node tools/timeguard.js     # after
        Time try/catch-guard on JSON.stringify:
         - log.info:  0.07368ms per iteration


## 0.5.0

- Use 10/20/... instead of 1/2/... for level constant values. Ostensibly this
  allows for intermediary levels from the defined "trace/debug/..." set.
  However, that is discouraged. I'd need a strong user argument to add
  support for easily using alternative levels. Consider using a separate
  JSON field instead.
- s/service/name/ for Logger name field. "service" is unnecessarily tied
  to usage for a service. No need to differ from log4j Logger "name".
- Add `log.level(...)` and `log.levels(...)` API for changing logger stream
  levels.
- Add `TRACE|DEBUG|INFO|WARN|ERROR|FATAL` level constants to exports.
- Add `log.info(err)` special case for logging an `Error` instance. For
  example `log.info(new TypeError("boom")` will produce:

        ...
        "err": {
          "message": "boom",
          "name": "TypeError",
          "stack": "TypeError: boom\n    at Object.<anonymous> ..."
        },
        "msg": "boom",
        ...


## 0.4.0

- Add `new Logger({src: true})` config option to have a 'src' attribute be
  automatically added to log records with the log call source info. Example:

        "src": {
          "file": "/Users/trentm/tm/node-bunyan/examples/src.js",
          "line": 20,
          "func": "Wuzzle.woos"
        },


## 0.3.0

- `log.child(options[, simple])` Added `simple` boolean arg. Set `true` to
  assert that options only add fields (no config changes). Results in a 10x
  speed increase in child creation. See "tools/timechild.js". On my Mac,
  "fast child" creation takes about 0.001ms. IOW, if your app is dishing
  10,000 req/s, then creating a log child for each request will take
  about 1% of the request time.
- `log.clone` -> `log.child` to better reflect the relationship: streams and
  serializers are inherited. Streams can't be removed as part of the child
  creation. The child doesn't own the parent's streams (so can't close them).
- Clean up Logger creation. The goal here was to ensure `log.child` usage
  is fast. TODO: measure that.
- Add `Logger.stdSerializers.err` serializer which is necessary to get good
  Error object logging with node 0.6 (where core Error object properties
  are non-enumerable).


## 0.2.0

- Spec'ing core/recommended log record fields.
- Add `LOG_VERSION` to exports.
- Improvements to request/response serializations.


## 0.1.0

First release.
