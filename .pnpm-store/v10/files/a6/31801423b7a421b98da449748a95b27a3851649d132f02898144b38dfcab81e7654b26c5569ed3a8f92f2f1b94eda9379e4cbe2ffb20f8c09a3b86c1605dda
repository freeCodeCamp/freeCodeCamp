# W3C keyname

Tiny library that exports a function `keyName` that takes a keyboard event and
returns a
[`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)-style
string. Will use the actual `key` property of the event if available,
and fall back to a value synthesized from the `keyCode` otherwise.

Probably often wrong on non-US keyboards, since the correspondence
between a key code and the character it produces when shift is held is
predicted based on a hard-coded table. Meant as a fallback for
`KeyboardEvent.key`, not a replacement.

The lookup tables from key codes (`event.keyCode`) to names are
exported as `base` (when Shift isn't held) and `shift` (when Shift is
held).

License: MIT
