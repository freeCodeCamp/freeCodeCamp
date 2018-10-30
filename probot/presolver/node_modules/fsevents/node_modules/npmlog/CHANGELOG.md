### v4.0.2

* Added installation instructions.

### v4.0.1

* Fix bugs where `log.progressEnabled` got out of sync with how `gauge` kept
  track of these things resulting in a progressbar that couldn't be disabled.

### v4.0.0

* Allow creating log levels that are an empty string or 0.

### v3.1.2

* Update to `gauge@1.6.0` adding support for default values for template
  items.

### v3.1.1

* Update to `gauge@1.5.3` to fix to `1.x` compatibility when it comes to
  when a progress bar is enabled.  In `1.x` if you didn't have a TTY the
  progress bar was never shown.  In `2.x` it merely defaults to disabled,
  but you can enable it explicitly if you still want progress updates.

### v3.1.0

* Update to `gauge@2.5.2`:
  * Updates the `signal-exit` dependency which fixes an incompatibility with
    the node profiler.
  * Uses externalizes its ansi code generation in `console-control-strings`
* Make the default progress bar include the last line printed, colored as it
  would be when printing to a tty.

### v3.0.0

* Switch to `gauge@2.0.0`, for better performance, better look.
* Set stderr/stdout blocking if they're tty's, so that we can hide a
  progress bar going to stderr and then safely print to stdout.  Without
  this the two can end up overlapping producing confusing and sometimes
  corrupted output.

### v2.0.0

* Make the `error` event non-fatal so that folks can use it as a prefix.

### v1.0.0

* Add progress bar with `gauge@1.1.0`
