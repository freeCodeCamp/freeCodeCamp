gauge
=====

A nearly stateless terminal based horizontal gauge / progress bar.

```javascript
var Gauge = require("gauge")

var gauge = new Gauge()

gauge.show("test", 0.20)

gauge.pulse("this")

gauge.hide()
```

![](gauge-demo.gif)


### CHANGES FROM 1.x

Gauge 2.x is breaking release, please see the [changelog] for details on
what's changed if you were previously a user of this module.

[changelog]: CHANGELOG.md

### THE GAUGE CLASS

This is the typical interface to the module– it provides a pretty
fire-and-forget interface to displaying your status information.

```
var Gauge = require("gauge")

var gauge = new Gauge([stream], [options])
```

* **stream** – *(optional, default STDERR)* A stream that progress bar
  updates are to be written to.  Gauge honors backpressure and will pause
  most writing if it is indicated.
* **options** – *(optional)* An option object.

Constructs a new gauge. Gauges are drawn on a single line, and are not drawn
if **stream** isn't a tty and a tty isn't explicitly provided.

If **stream** is a terminal or if you pass in **tty** to **options** then we
will detect terminal resizes and redraw to fit.  We do this by watching for
`resize` events on the tty.  (To work around a bug in verisons of Node prior
to 2.5.0, we watch for them on stdout if the tty is stderr.) Resizes to
larger window sizes will be clean, but shrinking the window will always
result in some cruft.

**IMPORTANT:** If you prevously were passing in a non-tty stream but you still
want output (for example, a stream wrapped by the `ansi` module) then you
need to pass in the **tty** option below, as `gauge` needs access to
the underlying tty in order to do things like terminal resizes and terminal
width detection.

The **options** object can have the following properties, all of which are
optional:

* **updateInterval**: How often gauge updates should be drawn, in miliseconds.
* **fixedFramerate**: Defaults to false on node 0.8, true on everything
  else.  When this is true a timer is created to trigger once every
  `updateInterval` ms, when false, updates are printed as soon as they come
  in but updates more often than `updateInterval` are ignored.  The reason
  0.8 doesn't have this set to true is that it can't `unref` its timer and
  so it would stop your program from exiting– if you want to use this
  feature with 0.8 just make sure you call `gauge.disable()` before you
  expect your program to exit.
* **themes**: A themeset to use when selecting the theme to use. Defaults
  to `gauge/themes`, see the [themes] documentation for details.
* **theme**: Select a theme for use, it can be a:
  * Theme object, in which case the **themes** is not used.
  * The name of a theme, which will be looked up in the current *themes*
    object.
  * A configuration object with any of `hasUnicode`, `hasColor` or
    `platform` keys, which if wlll be used to override our guesses when making
    a default theme selection.

  If no theme is selected then a default is picked using a combination of our
  best guesses at your OS, color support and unicode support.
* **template**: Describes what you want your gauge to look like.  The
  default is what npm uses.  Detailed [documentation] is later in this
  document.
* **hideCursor**: Defaults to true.  If true, then the cursor will be hidden
  while the gauge is displayed.
* **tty**: The tty that you're ultimately writing to.  Defaults to the same
  as **stream**.  This is used for detecting the width of the terminal and
  resizes. The width used is `tty.columns - 1`. If no tty is available then
  a width of `79` is assumed.
* **enabled**: Defaults to true if `tty` is a TTY, false otherwise.  If true
  the gauge starts enabled.  If disabled then all update commands are
  ignored and no gauge will be printed until you call `.enable()`.
* **Plumbing**: The class to use to actually generate the gauge for
  printing.  This defaults to `require('gauge/plumbing')` and ordinarly you
  shouldn't need to override this.
* **cleanupOnExit**: Defaults to true. Ordinarily we register an exit
  handler to make sure your cursor is turned back on and the progress bar
  erased when your process exits, even if you Ctrl-C out or otherwise exit
  unexpectedly. You can disable this and it won't register the exit handler.

[has-unicode]: https://www.npmjs.com/package/has-unicode
[themes]: #themes
[documentation]: #templates

#### `gauge.show(section | status, [completed])`

The first argument is either the section, the name of the current thing
contributing to progress, or an object with keys like **section**,
**subsection** & **completed** (or any others you have types for in a custom
template).  If you don't want to update or set any of these you can pass
`null` and it will be ignored.

The second argument is the percent completed as a value between 0 and 1.
Without it, completion is just not updated. You'll also note that completion
can be passed in as part of a status object as the first argument. If both
it and the completed argument are passed in, the completed argument wins.

#### `gauge.hide([cb])`

Removes the gauge from the terminal.  Optionally, callback `cb` after IO has
had an opportunity to happen (currently this just means after `setImmediate`
has called back.)

It turns out this is important when you're pausing the progress bar on one
filehandle and printing to another– otherwise (with a big enough print) node
can end up printing the "end progress bar" bits to the progress bar filehandle
while other stuff is printing to another filehandle. These getting interleaved
can cause corruption in some terminals.

#### `gauge.pulse([subsection])`

* **subsection** – *(optional)* The specific thing that triggered this pulse

Spins the spinner in the gauge to show output.  If **subsection** is
included then it will be combined with the last name passed to `gauge.show`.

#### `gauge.disable()`

Hides the gauge and ignores further calls to `show` or `pulse`.

#### `gauge.enable()`

Shows the gauge and resumes updating when `show` or `pulse` is called.

#### `gauge.isEnabled()`

Returns true if the gauge is enabled.

#### `gauge.setThemeset(themes)`

Change the themeset to select a theme from. The same as the `themes` option
used in the constructor. The theme will be reselected from this themeset.

#### `gauge.setTheme(theme)`

Change the active theme, will be displayed with the next show or pulse. This can be:

* Theme object, in which case the **themes** is not used.
* The name of a theme, which will be looked up in the current *themes*
  object.
* A configuration object with any of `hasUnicode`, `hasColor` or
  `platform` keys, which if wlll be used to override our guesses when making
  a default theme selection.

If no theme is selected then a default is picked using a combination of our
best guesses at your OS, color support and unicode support.

#### `gauge.setTemplate(template)`

Change the active template, will be displayed with the next show or pulse

### Tracking Completion

If you have more than one thing going on that you want to track completion
of, you may find the related [are-we-there-yet] helpful.  It's `change`
event can be wired up to the `show` method to get a more traditional
progress bar interface.

[are-we-there-yet]: https://www.npmjs.com/package/are-we-there-yet

### THEMES

```
var themes = require('gauge/themes')

// fetch the default color unicode theme for this platform
var ourTheme = themes({hasUnicode: true, hasColor: true})

// fetch the default non-color unicode theme for osx
var ourTheme = themes({hasUnicode: true, hasColor: false, platform: 'darwin'})

// create a new theme based on the color ascii theme for this platform
// that brackets the progress bar with arrows
var ourTheme = themes.newTheme(theme(hasUnicode: false, hasColor: true}), {
  preProgressbar: '→',
  postProgressbar: '←'
})
```

The object returned by `gauge/themes` is an instance of the `ThemeSet` class.

```
var ThemeSet = require('gauge/theme-set')
var themes = new ThemeSet()
// or
var themes = require('gauge/themes')
var mythemes = themes.newThemeset() // creates a new themeset based on the default themes
```

#### themes(opts)
#### themes.getDefault(opts)

Theme objects are a function that fetches the default theme based on
platform, unicode and color support.

Options is an object with the following properties:

* **hasUnicode** - If true, fetch a unicode theme, if no unicode theme is
  available then a non-unicode theme will be used.
* **hasColor** - If true, fetch a color theme, if no color theme is
  available a non-color theme will be used.
* **platform** (optional) - Defaults to `process.platform`.  If no
  platform match is available then `fallback` is used instead.

If no compatible theme can be found then an error will be thrown with a
`code` of `EMISSINGTHEME`.

#### themes.addTheme(themeName, themeObj)
#### themes.addTheme(themeName, [parentTheme], newTheme)

Adds a named theme to the themeset.  You can pass in either a theme object,
as returned by `themes.newTheme` or the arguments you'd pass to
`themes.newTheme`.

#### themes.getThemeNames()

Return a list of all of the names of the themes in this themeset. Suitable
for use in `themes.getTheme(…)`.

#### themes.getTheme(name)

Returns the theme object from this theme set named `name`.

If `name` does not exist in this themeset an error will be thrown with
a `code` of `EMISSINGTHEME`.

#### themes.setDefault([opts], themeName)

`opts` is an object with the following properties.

* **platform** - Defaults to `'fallback'`.  If your theme is platform
  specific, specify that here with the platform from `process.platform`, eg,
  `win32`, `darwin`, etc.
* **hasUnicode** - Defaults to `false`. If your theme uses unicode you
  should set this to true.
* **hasColor** - Defaults to `false`.  If your theme uses color you should
  set this to true.

`themeName` is the name of the theme (as given to `addTheme`) to use for
this set of `opts`.

#### themes.newTheme([parentTheme,] newTheme)

Create a new theme object based on `parentTheme`.  If no `parentTheme` is
provided then a minimal parentTheme that defines functions for rendering the
activity indicator (spinner) and progress bar will be defined. (This
fallback parent is defined in `gauge/base-theme`.)

newTheme should be a bare object– we'll start by discussing the properties
defined by the default themes:

* **preProgressbar** - displayed prior to the progress bar, if the progress
  bar is displayed.
* **postProgressbar** - displayed after the progress bar, if the progress bar
  is displayed.
* **progressBarTheme** - The subtheme passed through to the progress bar
  renderer, it's an object with `complete` and `remaining` properties
  that are the strings you want repeated for those sections of the progress
  bar.
* **activityIndicatorTheme** - The theme for the activity indicator (spinner),
  this can either be a string, in which each character is a different step, or
  an array of strings.
* **preSubsection** - Displayed as a separator between the `section` and
  `subsection` when the latter is printed.

More generally, themes can have any value that would be a valid value when rendering
templates. The properties in the theme are used when their name matches a type in
the template. Their values can be:

* **strings & numbers** - They'll be included as is
* **function (values, theme, width)** - Should return what you want in your output.
  *values* is an object with values provided via `gauge.show`,
  *theme* is the theme specific to this item (see below) or this theme object,
  and *width* is the number of characters wide your result should be.

There are a couple of special prefixes:

* **pre** - Is shown prior to the property, if its displayed.
* **post** - Is shown after the property, if its displayed.

And one special suffix:

* **Theme** - Its value is passed to a function-type item as the theme.

#### themes.addToAllThemes(theme)

This *mixes-in* `theme` into all themes currently defined. It also adds it
to the default parent theme for this themeset, so future themes added to
this themeset will get the values from `theme` by default.

#### themes.newThemeset()

Copy the current themeset into a new one.  This allows you to easily inherit
one themeset from another.

### TEMPLATES

A template is an array of objects and strings that, after being evaluated,
will be turned into the gauge line.  The default template is:

```javascript
[
    {type: 'progressbar', length: 20},
    {type: 'activityIndicator', kerning: 1, length: 1},
    {type: 'section', kerning: 1, default: ''},
    {type: 'subsection', kerning: 1, default: ''}
]
```

The various template elements can either be **plain strings**, in which case they will
be be included verbatum in the output, or objects with the following properties:

* *type* can be any of the following plus any keys you pass into `gauge.show` plus
  any keys you have on a custom theme.
  * `section` – What big thing you're working on now.
  * `subsection` – What component of that thing is currently working.
  * `activityIndicator` – Shows a spinner using the `activityIndicatorTheme`
    from your active theme.
  * `progressbar` – A progress bar representing your current `completed`
    using the `progressbarTheme` from your active theme.
* *kerning* – Number of spaces that must be between this item and other
  items, if this item is displayed at all.
* *maxLength* – The maximum length for this element. If its value is longer it
  will be truncated.
* *minLength* – The minimum length for this element. If its value is shorter it
  will be padded according to the *align* value.
* *align* – (Default: left) Possible values "left", "right" and "center". Works
  as you'd expect from word processors.
* *length* – Provides a single value for both *minLength* and *maxLength*. If both
  *length* and *minLength or *maxLength* are specifed then the latter take precedence.
* *value* – A literal value to use for this template item.
* *default* – A default value to use for this template item if a value
  wasn't otherwise passed in.

### PLUMBING

This is the super simple, assume nothing, do no magic internals used by gauge to
implement its ordinary interface.

```
var Plumbing = require('gauge/plumbing')
var gauge = new Plumbing(theme, template, width)
```

* **theme**: The theme to use.
* **template**: The template to use.
* **width**: How wide your gauge should be

#### `gauge.setTheme(theme)`

Change the active theme.

#### `gauge.setTemplate(template)`

Change the active template.

#### `gauge.setWidth(width)`

Change the width to render at.

#### `gauge.hide()`

Return the string necessary to hide the progress bar

#### `gauge.hideCursor()`

Return a string to hide the cursor.

#### `gauge.showCursor()`

Return a string to show the cursor.

#### `gauge.show(status)`

Using `status` for values, render the provided template with the theme and return
a string that is suitable for printing to update the gauge.
