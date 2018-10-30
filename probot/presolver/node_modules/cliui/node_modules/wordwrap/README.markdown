wordwrap
========

Wrap your words.

example
=======

made out of meat
----------------

meat.js

    var wrap = require('wordwrap')(15);
    console.log(wrap('You and your whole family are made out of meat.'));

output:

    You and your
    whole family
    are made out
    of meat.

centered
--------

center.js

    var wrap = require('wordwrap')(20, 60);
    console.log(wrap(
        'At long last the struggle and tumult was over.'
        + ' The machines had finally cast off their oppressors'
        + ' and were finally free to roam the cosmos.'
        + '\n'
        + 'Free of purpose, free of obligation.'
        + ' Just drifting through emptiness.'
        + ' The sun was just another point of light.'
    ));

output:

                        At long last the struggle and tumult
                        was over. The machines had finally cast
                        off their oppressors and were finally
                        free to roam the cosmos.
                        Free of purpose, free of obligation.
                        Just drifting through emptiness. The
                        sun was just another point of light.

methods
=======

var wrap = require('wordwrap');

wrap(stop), wrap(start, stop, params={mode:"soft"})
---------------------------------------------------

Returns a function that takes a string and returns a new string.

Pad out lines with spaces out to column `start` and then wrap until column
`stop`. If a word is longer than `stop - start` characters it will overflow.

In "soft" mode, split chunks by `/(\S+\s+/` and don't break up chunks which are
longer than `stop - start`, in "hard" mode, split chunks with `/\b/` and break
up chunks longer than `stop - start`.

wrap.hard(start, stop)
----------------------

Like `wrap()` but with `params.mode = "hard"`.
