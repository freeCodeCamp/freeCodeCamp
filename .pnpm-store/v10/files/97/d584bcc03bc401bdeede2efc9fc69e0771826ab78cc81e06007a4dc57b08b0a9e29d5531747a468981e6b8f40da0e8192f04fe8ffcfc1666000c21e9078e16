format
======

printf, sprintf, and vsprintf for JavaScript


Installation
============

npm install format

The code works in browsers as well, you can copy these functions into your project
or otherwise include them with your other JavaScript.

Usage
=====

    var format = require('format')
      , printf = format.printf
      , vsprintf = format.vsprintf
      // or if you want to keep it old school
      , sprintf = format

    // Print 'hello world'
    printf('%s world', 'hello')

    var what = 'life, the universe, and everything'
    format('%d is the answer to %s', 42, what)
    // => '42 is the answer to life, the universe, and everything'

    vsprintf('%d is the answer to %s', [42, what])
    // => '42 is the answer to life, the universe, and everything'

Supported format specifiers: b, c, d, f, o, s, x, and X.

See `man 3 printf` or `man 1 printf` for details.

Precision is supported for floating point numbers.

License
=======

Copyright 2010 - 2014 Sami Samhuri sami@samhuri.net

[MIT license](http://sjs.mit-license.org)

