### v2.7.4

* Reset colors prior to ending a line, to eliminate flicker when a line
  is trucated between start and end color sequences.

### v2.7.3

* Only create our onExit handler when we're enabled and remove it when we're
  disabled.  This stops us from creating multiple onExit handlers when
  multiple gauge objects are being used.
* Fix bug where if a theme name were given instead of a theme object, it
  would crash.
* Remove supports-color because it's not actually used.  Uhm.  Yes, I just
  updated it.  >.>

### v2.7.2

* Use supports-color instead of has-color (as the module has been renamed)

### v2.7.1

* Bug fix: Calls to show/pulse while the progress bar is disabled should still
  update our internal representation of what would be shown should it be enabled.

### v2.7.0

* New feature: Add new `isEnabled` method to allow introspection of the gauge's
  "enabledness" as controlled by `.enable()` and `.disable()`.

### v2.6.0

* Bug fix: Don't run the code associated with `enable`/`disable` if the gauge
  is already enabled or disabled respectively.  This prevents leaking event
  listeners, amongst other weirdness.
* New feature: Template items can have default values that will be used if no
  value was otherwise passed in.

### v2.5.3

* Default to `enabled` only if we have a tty.  Users can always override
  this by passing in the `enabled` option explicitly or by calling calling
  `gauge.enable()`.

### v2.5.2

* Externalized `./console-strings.js` into `console-control-strings`.

### v2.5.1

* Update to `signal-exit@3.0.0`, which fixes a compatibility bug with the
  node profiler.
* [#39](https://github.com/iarna/gauge/pull/39) Fix tests on 0.10 and add
  a missing devDependency. ([@helloyou2012](https://github.com/helloyou2012))

### v2.5.0

* Add way to programmatically fetch a list of theme names in a themeset
  (`Themeset.getThemeNames`).

### v2.4.0

* Add support for setting themesets on existing gauge objects.
* Add post-IO callback to `gauge.hide()` as it is somtetimes necessary when
  your terminal is interleaving output from multiple filehandles (ie, stdout
  & stderr).

### v2.3.1

* Fix a refactor bug in setTheme where it wasn't accepting the various types
  of args it should.

### v2.3.0

#### FEATURES

* Add setTemplate & setTheme back in.
* Add support for named themes, you can now ask for things like 'colorASCII'
  and 'brailleSpinner'.  Of course, you can still pass in theme objects.
  Additionally you can now pass in an object with `hasUnicode`, `hasColor` and
  `platform` keys in order to override our guesses as to those values when
  selecting a default theme from the themeset.
* Make the output stream optional (it defaults to `process.stderr` now).
* Add `setWriteTo(stream[, tty])` to change the output stream and,
  optionally, tty.

#### BUG FIXES & REFACTORING

* Abort the display phase early if we're supposed to be hidden and we are.
* Stop printing a bunch of spaces at the end of lines, since we're already
  using an erase-to-end-of-line code anyway.
* The unicode themes were missing the subsection separator.

### v2.2.1

* Fix image in readme

### v2.2.0

* All new themes API– reference themes by name and pass in custom themes and
  themesets (themesets get platform support autodetection done on them to
  select the best theme).  Theme mixins let you add features to all existing
  themes.
* Much, much improved test coverage.

### v2.1.0

* Got rid of ░ in the default platform, noUnicode, hasColor theme.  Thanks
  to @yongtw123 for pointing out this had snuck in.
* Fiddled with the demo output to make it easier to see the spinner spin. Also
  added prints before each platforms test output.
* I forgot to include `signal-exit` in our deps.  <.< Thank you @KenanY for
  finding this. Then I was lazy and made a new commit instead of using his
  PR. Again, thank you for your patience @KenenY.
* Drastically speed up travis testing.
* Add a small javascript demo (demo.js) for showing off the various themes
  (and testing them on diff platforms).
* Change: The subsection separator from ⁄ and / (different chars) to >.
* Fix crasher: A show or pulse without a label would cause the template renderer
  to complain about a missing value.
* New feature: Add the ability to disable the clean-up-on-exit behavior.
  Not something I expect to be widely desirable, but important if you have
  multiple distinct gauge instances in your app.
* Use our own color support detection.
  The `has-color` module proved too magic for my needs, making assumptions
  as to which stream we write to and reading command line arguments.

### v2.0.0

This is a major rewrite of the internals.  Externally there are fewer
changes:

* On node>0.8 gauge object now prints updates at a fixed rate.  This means
  that when you call `show` it may wate up to `updateInterval` ms before it
  actually prints an update.  You override this behavior with the
  `fixedFramerate` option.
* The gauge object now keeps the cursor hidden as long as it's enabled and
  shown.
* The constructor's arguments have changed, now it takes a mandatory output
  stream and an optional options object.  The stream no longer needs to be
  an `ansi`ified stream, although it can be if you want (but we won't make
  use of its special features).
* Previously the gauge was disabled by default if `process.stdout` wasn't a
  tty.  Now it always defaults to enabled.  If you want the previous
  behavior set the `enabled` option to `process.stdout.isTTY`.
* The constructor's options have changed– see the docs for details.
* Themes are entirely different.  If you were using a custom theme, or
  referring to one directly (eg via `Gauge.unicode` or `Gauge.ascii`) then
  you'll need to change your code.  You can get the equivalent of the latter
  with:
  ```
  var themes = require('gauge/themes')
  var unicodeTheme = themes(true, true) // returns the color unicode theme for your platform
  ```
  The default themes no longer use any ambiguous width characters, so even
  if you choose to display those as wide your progress bar should still
  display correctly.
* Templates are entirely different and if you were using a custom one, you
  should consult the documentation to learn how to recreate it.  If you were
  using the default, be aware that it has changed and the result looks quite
  a bit different.
