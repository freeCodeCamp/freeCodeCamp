# Shellwords

Shellwords provides functions to manipulate strings according to the word parsing rules of the UNIX Bourne shell. It is based on [the Ruby module of the same name](http://www.ruby-doc.org/stdlib-1.9.3/libdoc/shellwords/rdoc/Shellwords.html).

## Installation

Add "shellwords" to your `package.json` file and run `npm install`.

## Example

``` javascript
var shellwords = require("shellwords");

shellwords.split("foo 'bar baz'");
// ["foo", "bar baz"]

shellwords.escape("What's up, yo?");
// 'What\\\'s\\ up,\\ yo\\?'
```
