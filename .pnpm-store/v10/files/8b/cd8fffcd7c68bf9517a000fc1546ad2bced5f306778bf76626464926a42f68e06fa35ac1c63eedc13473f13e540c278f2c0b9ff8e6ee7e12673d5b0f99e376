## read

For reading user input from stdin.

Similar to the `readline` builtin's `question()` method, but with a
few more features.

## USAGE

```javascript
var read = require("read")
read(options, callback)
```

The callback gets called with either the user input, or the default
specified, or an error, as `callback(error, result, isDefault)`
node style.

## OPTIONS

Every option is optional.

* `prompt` What to write to stdout before reading input.
* `silent` Don't echo the output as the user types it.
* `replace` Replace silenced characters with the supplied character value.
* `timeout` Number of ms to wait for user input before giving up.
* `default` The default value if the user enters nothing.
* `edit` Allow the user to edit the default value.
* `terminal` Treat the output as a TTY, whether it is or not.
* `input` Readable stream to get input data from. (default `process.stdin`)
* `output` Writeable stream to write prompts to. (default: `process.stdout`)

If silent is true, and the input is a TTY, then read will set raw
mode, and read character by character.

## COMPATIBILITY

This module works sort of with node 0.6.  It does not work with node
versions less than 0.6.  It is best on node 0.8.

On node version 0.6, it will remove all listeners on the input
stream's `data` and `keypress` events, because the readline module did
not fully clean up after itself in that version of node, and did not
make it possible to clean up after it in a way that has no potential
for side effects.

Additionally, some of the readline options (like `terminal`) will not
function in versions of node before 0.8, because they were not
implemented in the builtin readline module.

## CONTRIBUTING

Patches welcome.
