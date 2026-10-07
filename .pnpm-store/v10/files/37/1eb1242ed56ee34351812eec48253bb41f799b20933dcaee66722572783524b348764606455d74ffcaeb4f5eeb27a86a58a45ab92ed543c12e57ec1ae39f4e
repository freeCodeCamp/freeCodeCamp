/**
Escape RegExp special characters.

You can also use this to escape a string that is inserted into the middle of a regex, for example, into a character class.

@example
```
import escapeStringRegexp = require('escape-string-regexp');

const escapedString = escapeStringRegexp('How much $ for a 🦄?');
//=> 'How much \\$ for a 🦄\\?'

new RegExp(escapedString);
```
*/
declare const escapeStringRegexp: (string: string) => string;

export = escapeStringRegexp;
