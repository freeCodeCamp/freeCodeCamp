# npmlog

The logger util that npm uses.

This logger is very basic.  It does the logging for npm.  It supports
custom levels and colored output.

By default, logs are written to stderr.  If you want to send log messages
to outputs other than streams, then you can change the `log.stream`
member, or you can just listen to the events that it emits, and do
whatever you want with them.

# Installation

```console
npm install npmlog --save
```

# Basic Usage

```javascript
var log = require('npmlog')

// additional stuff ---------------------------+
// message ----------+                         |
// prefix ----+      |                         |
// level -+   |      |                         |
//        v   v      v                         v
    log.info('fyi', 'I have a kitty cat: %j', myKittyCat)
```

## log.level

* {String}

The level to display logs at.  Any logs at or above this level will be
displayed.  The special level `silent` will prevent anything from being
displayed ever.

## log.record

* {Array}

An array of all the log messages that have been entered.

## log.maxRecordSize

* {Number}

The maximum number of records to keep.  If log.record gets bigger than
10% over this value, then it is sliced down to 90% of this value.

The reason for the 10% window is so that it doesn't have to resize a
large array on every log entry.

## log.prefixStyle

* {Object}

A style object that specifies how prefixes are styled.  (See below)

## log.headingStyle

* {Object}

A style object that specifies how the heading is styled.  (See below)

## log.heading

* {String} Default: ""

If set, a heading that is printed at the start of every line.

## log.stream

* {Stream} Default: `process.stderr`

The stream where output is written.

## log.enableColor()

Force colors to be used on all messages, regardless of the output
stream.

## log.disableColor()

Disable colors on all messages.

## log.enableProgress()

Enable the display of log activity spinner and progress bar

## log.disableProgress()

Disable the display of a progress bar

## log.enableUnicode()

Force the unicode theme to be used for the progress bar.

## log.disableUnicode()

Disable the use of unicode in the progress bar.

## log.setGaugeTemplate(template)

Set a template for outputting the progress bar. See the [gauge documentation] for details.

[gauge documentation]: https://npmjs.com/package/gauge

## log.setGaugeThemeset(themes)

Select a themeset to pick themes from for the progress bar. See the [gauge documentation] for details.

## log.pause()

Stop emitting messages to the stream, but do not drop them.

## log.resume()

Emit all buffered messages that were written while paused.

## log.log(level, prefix, message, ...)

* `level` {String} The level to emit the message at
* `prefix` {String} A string prefix.  Set to "" to skip.
* `message...` Arguments to `util.format`

Emit a log message at the specified level.

## log\[level](prefix, message, ...)

For example,

* log.silly(prefix, message, ...)
* log.verbose(prefix, message, ...)
* log.info(prefix, message, ...)
* log.http(prefix, message, ...)
* log.warn(prefix, message, ...)
* log.error(prefix, message, ...)

Like `log.log(level, prefix, message, ...)`.  In this way, each level is
given a shorthand, so you can do `log.info(prefix, message)`.

## log.addLevel(level, n, style, disp)

* `level` {String} Level indicator
* `n` {Number} The numeric level
* `style` {Object} Object with fg, bg, inverse, etc.
* `disp` {String} Optional replacement for `level` in the output.

Sets up a new level with a shorthand function and so forth.

Note that if the number is `Infinity`, then setting the level to that
will cause all log messages to be suppressed.  If the number is
`-Infinity`, then the only way to show it is to enable all log messages.

## log.newItem(name, todo, weight)

* `name` {String} Optional; progress item name.
* `todo` {Number} Optional; total amount of work to be done. Default 0.
* `weight` {Number} Optional; the weight of this item relative to others. Default 1.

This adds a new `are-we-there-yet` item tracker to the progress tracker. The
object returned has the `log[level]` methods but is otherwise an
`are-we-there-yet` `Tracker` object.

## log.newStream(name, todo, weight)

This adds a new `are-we-there-yet` stream tracker to the progress tracker. The
object returned has the `log[level]` methods but is otherwise an
`are-we-there-yet` `TrackerStream` object.

## log.newGroup(name, weight)

This adds a new `are-we-there-yet` tracker group to the progress tracker. The
object returned has the `log[level]` methods but is otherwise an
`are-we-there-yet` `TrackerGroup` object.

# Events

Events are all emitted with the message object.

* `log` Emitted for all messages
* `log.<level>` Emitted for all messages with the `<level>` level.
* `<prefix>` Messages with prefixes also emit their prefix as an event.

# Style Objects

Style objects can have the following fields:

* `fg` {String} Color for the foreground text
* `bg` {String} Color for the background
* `bold`, `inverse`, `underline` {Boolean} Set the associated property
* `bell` {Boolean} Make a noise (This is pretty annoying, probably.)

# Message Objects

Every log event is emitted with a message object, and the `log.record`
list contains all of them that have been created.  They have the
following fields:

* `id` {Number}
* `level` {String}
* `prefix` {String}
* `message` {String} Result of `util.format()`
* `messageRaw` {Array} Arguments to `util.format()`

# Blocking TTYs

We use [`set-blocking`](https://npmjs.com/package/set-blocking) to set
stderr and stdout blocking if they are tty's and have the setBlocking call.
This is a work around for an issue in early versions of Node.js 6.x, which
made stderr and stdout non-blocking on OSX. (They are always blocking
Windows and were never blocking on Linux.) `npmlog` needs them to be blocking
so that it can allow output to stdout and stderr to be interlaced.
