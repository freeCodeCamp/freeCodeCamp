# extsprintf: extended POSIX-style sprintf

Stripped down version of s[n]printf(3c).  We make a best effort to throw an
exception when given a format string we don't understand, rather than ignoring
it, so that we won't break existing programs if/when we go implement the rest
of this.

This implementation currently supports specifying

* field alignment ('-' flag),
* zero-pad ('0' flag)
* always show numeric sign ('+' flag),
* field width
* conversions for strings, decimal integers, and floats (numbers).
* argument size specifiers.  These are all accepted but ignored, since
  Javascript has no notion of the physical size of an argument.

Everything else is currently unsupported, most notably: precision, unsigned
numbers, non-decimal numbers, and characters.

Besides the usual POSIX conversions, this implementation supports:

* `%j`: pretty-print a JSON object (using node's "inspect")
* `%r`: pretty-print an Error object

# Example

First, install it:

    # npm install extsprintf

Now, use it:

    var mod_extsprintf = require('extsprintf');
    console.log(mod_extsprintf.sprintf('hello %25s', 'world'));

outputs:

    hello                     world

# Also supported

**printf**: same args as sprintf, but prints the result to stdout

**fprintf**: same args as sprintf, preceded by a Node stream.  Prints the result
to the given stream.
