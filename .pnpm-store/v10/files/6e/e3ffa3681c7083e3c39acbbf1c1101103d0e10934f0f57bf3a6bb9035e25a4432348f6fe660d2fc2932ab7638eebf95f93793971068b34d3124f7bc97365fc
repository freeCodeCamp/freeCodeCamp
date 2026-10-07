Utilities for determining whether characters belong to character classes defined
by the XML specs.

## Organization

It used to be that the library was contained in a single file and you could just
import/require/what-have-you the `xmlchars` module. However, that setup did not
work well for people who cared about code optimization. Importing `xmlchars`
meant importing *all* of the library and because of the way the code was
generated there was no way to shake the resulting code tree.

Different modules cover different standards. At the time this documentation was
last updated, we had:

* `xmlchars/xml/1.0/ed5` which covers XML 1.0 edition 5.
* `xmlchars/xml/1.0/ed4` which covers XML 1.0 edition 4.
* `xmlchars/xml/1.1/ed2` which covers XML 1.0 edition 2.
* `xmlchars/xmlns/1.0/ed3` which covers XML Namespaces 1.0 edition 3.

## Features

The "things" each module contains can be categorized as follows:

1. "Fragments": these are parts and pieces of regular expressions that
correspond to the productions defined in the standard that the module
covers. You'd use these to *build regular expressions*.

2. Regular expressions that correspond to the productions defined in the
standard that the module covers.

3. Lists: these are arrays of characters that correspond to the productions.

4. Functions that test code points to verify whether they fit a production.
