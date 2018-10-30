yargs
========

Yargs be a node.js library fer hearties tryin' ter parse optstrings.

With yargs, ye be havin' a map that leads straight to yer treasure! Treasure of course, being a simple option hash.

[![Build Status](https://travis-ci.org/bcoe/yargs.png)](https://travis-ci.org/bcoe/yargs)
[![Dependency Status](https://gemnasium.com/bcoe/yargs.png)](https://gemnasium.com/bcoe/yargs)
[![Coverage Status](https://coveralls.io/repos/bcoe/yargs/badge.svg?branch=)](https://coveralls.io/r/bcoe/yargs?branch=)
[![NPM version](https://img.shields.io/npm/v/yargs.svg)](https://www.npmjs.com/package/yargs)

> Yargs is the official successor to optimist. Please feel free to submit issues and pull requests. If you'd like to contribute and don't know where to start, have a look at [the issue list](https://github.com/bcoe/yargs/issues) :)

examples
========

With yargs, the options be just a hash!
-------------------------------------------------------------------

plunder.js:

````javascript
#!/usr/bin/env node
var argv = require('yargs').argv;

if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!');
}
else {
    console.log('Retreat from the xupptumblers!');
}
````

***

    $ ./plunder.js --ships=4 --distance=22
    Plunder more riffiwobbles!

    $ ./plunder.js --ships 12 --distance 98.7
    Retreat from the xupptumblers!

![Joe was one optimistic pirate.](http://i.imgur.com/4WFGVJ9.png)

But don't walk the plank just yet! There be more! You can do short options:
-------------------------------------------------

short.js:

````javascript
#!/usr/bin/env node
var argv = require('yargs').argv;
console.log('(%d,%d)', argv.x, argv.y);
````

***

    $ ./short.js -x 10 -y 21
    (10,21)

And booleans, both long, short, and even grouped:
----------------------------------

bool.js:

````javascript
#!/usr/bin/env node
var util = require('util');
var argv = require('yargs').argv;

if (argv.s) {
    util.print(argv.fr ? 'Le perroquet dit: ' : 'The parrot says: ');
}
console.log(
    (argv.fr ? 'couac' : 'squawk') + (argv.p ? '!' : '')
);
````

***

    $ ./bool.js -s
    The parrot says: squawk

    $ ./bool.js -sp
    The parrot says: squawk!

    $ ./bool.js -sp --fr
    Le perroquet dit: couac!

And non-hyphenated options too! Just use `argv._`!
-------------------------------------------------

nonopt.js:

````javascript
#!/usr/bin/env node
var argv = require('yargs').argv;
console.log('(%d,%d)', argv.x, argv.y);
console.log(argv._);
````

***

    $ ./nonopt.js -x 6.82 -y 3.35 rum
    (6.82,3.35)
    [ 'rum' ]

    $ ./nonopt.js "me hearties" -x 0.54 yo -y 1.12 ho
    (0.54,1.12)
    [ 'me hearties', 'yo', 'ho' ]

Yargs even counts your booleans!
----------------------------------------------------------------------

count.js

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .count('verbose')
    .alias('v', 'verbose')
    .argv;

VERBOSE_LEVEL = argv.verbose;

function WARN()  { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
function INFO()  { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }

WARN("Showing only important stuff");
INFO("Showing semi-mportant stuff too");
DEBUG("Extra chatty mode");
````

***
    $ node count.js
    Showing only important stuff

    $ node count.js -v
    Showing only important stuff
    Showing semi-important stuff too

    $ node count.js -vv
    Showing only important stuff
    Showing semi-important stuff too
    Extra chatty mode

    $ node count.js -v --verbose
    Showing only important stuff
    Showing semi-important stuff too
    Extra chatty mode

Tell users how to use yer options and make demands.
-------------------------------------------------

area.js:

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .usage('Usage: $0 -w [num] -yh[num]')
    .demand(['w','h'])
    .argv;

console.log("The area is:", argv.w * argv.h);
````

***

    $ ./area.js -w 55 -h 11
    605

    $ node ./area.js -w 4.91 -w 2.51
    Usage: node ./area.js -w [num] -h [num]

    Options:
      -w  [required]
      -h  [required]

    Missing required arguments: h

After yer demands have been met, demand more! Ask for non-hypenated arguments!
-----------------------------------------

demand_count.js:

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .demand(2)
    .argv;
console.dir(argv)
````

***

	$ ./demand_count.js a
	Not enough arguments, expected 2, but only found 1
	$ ./demand_count.js a b
	{ _: [ 'a', 'b' ], '$0': 'node ./demand_count.js' }
	$ ./demand_count.js a b c
	{ _: [ 'a', 'b', 'c' ], '$0': 'node ./demand_count.js' }

EVEN MORE SHIVER ME TIMBERS!
------------------

default_singles.js:

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .default('x', 10)
    .default('y', 10)
    .argv
;
console.log(argv.x + argv.y);
````

***

    $ ./default_singles.js -x 5
    15

default_hash.js:

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .default({ x : 10, y : 10 })
    .argv
;
console.log(argv.x + argv.y);
````

***

    $ ./default_hash.js -y 7
    17

And if you really want to get all descriptive about it...
---------------------------------------------------------

boolean_single.js

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .boolean('v')
    .argv
;
console.dir(argv.v);
console.dir(argv._);
````

***

    $ ./boolean_single.js -v "me hearties" yo ho
    true
    [ 'me hearties', 'yo', 'ho' ]


boolean_double.js

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .boolean(['x','y','z'])
    .argv
;
console.dir([ argv.x, argv.y, argv.z ]);
console.dir(argv._);
````

***

    $ ./boolean_double.js -x -z one two three
    [ true, false, true ]
    [ 'one', 'two', 'three' ]

Yargs is here to help you...
---------------------------

Ye can describe parameters fer help messages and set aliases. Yargs figures
out how ter format a handy help string automatically.

line_count.js

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('count', 'Count the lines in a file')
    .demand(1)
    .example('$0 count -f foo.js', 'count the lines in the given file')
    .demand('f')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Load a file')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2015')
    .argv;

var fs = require('fs');
var s = fs.createReadStream(argv.file);

var lines = 0;
s.on('data', function (buf) {
    lines += buf.toString().match(/\n/g).length;
});

s.on('end', function () {
    console.log(lines);
});
````

***
    $ node line_count.js count
    Usage: node test.js <command> [options]

    Commands:
      count    Count the lines in a file

    Options:
      -f, --file  Load a file        [required]
      -h, --help  Show help

    Examples:
      node test.js count -f foo.js    count the lines in the given file

    copyright 2015

    Missing required arguments: f

    $ node line_count.js count --file line_count.js
    20

    $ node line_count.js count -f line_count.js
    20

methods
=======

By itself,

````javascript
require('yargs').argv
`````

will use `process.argv` array to construct the `argv` object.

You can pass in the `process.argv` yourself:

````javascript
require('yargs')([ '-x', '1', '-y', '2' ]).argv
````

or use .parse() to do the same thing:

````javascript
require('yargs').parse([ '-x', '1', '-y', '2' ])
````

The rest of these methods below come in just before the terminating `.argv`.

.alias(key, alias)
------------------

Set key names as equivalent such that updates to a key will propagate to aliases
and vice-versa.

Optionally `.alias()` can take an object that maps keys to aliases.
Each key of this object should be the canonical version of the option, and each
value should be a string or an array of strings.

.default(key, value, [description])
--------------------

Set `argv[key]` to `value` if no option was specified on `process.argv`.

Optionally `.default()` can take an object that maps keys to default values.

But wait, there's more! the default value can be a `function` which returns
a value. The name of the function will be used in the usage string:

```js
var argv = require('yargs')
  .default('random', function randomValue() {
    return Math.random() * 256;
  }).argv;
```

Optionally, `description` can also be provided and will take precedence over
displaying the value in the usage instructions:

```js
.default('timeout', 60000, '(one-minute)');
```

.demand(key, [msg | boolean])
-----------------------------
.require(key, [msg | boolean])
------------------------------
.required(key, [msg | boolean])
-------------------------------

If `key` is a string, show the usage information and exit if `key` wasn't
specified in `process.argv`.

If `key` is a number, demand at least as many non-option arguments, which show
up in `argv._`.

If `key` is an Array, demand each element.

If a `msg` string is given, it will be printed when the argument is missing,
instead of the standard error message. This is especially helpful for the non-option arguments in `argv._`.

If a `boolean` value is given, it controls whether the option is demanded;
this is useful when using `.options()` to specify command line parameters.

.requiresArg(key)
-----------------

Specifies either a single option key (string), or an array of options that
must be followed by option values. If any option value is missing, show the
usage information and exit.

The default behaviour is to set the value of any key not followed by an
option value to `true`.

.implies(x, y)
--------------

Given the key `x` is set, it is required that the key `y` is set.

implies can also accept an object specifying multiple implications.

.describe(key, desc)
--------------------

Describe a `key` for the generated usage information.

Optionally `.describe()` can take an object that maps keys to descriptions.

.option(key, opt)
-----------------
.options(key, opt)
------------------

Instead of chaining together `.alias().demand().default().describe().string()`, you can specify
keys in `opt` for each of the chainable methods.

For example:

````javascript
var argv = require('yargs')
    .option('f', {
        alias : 'file',
        demand: true,
        default: '/etc/passwd',
        describe: 'x marks the spot',
        type: 'string'
    })
    .argv
;
````

is the same as

````javascript
var argv = require('yargs')
    .alias('f', 'file')
    .default('f', '/etc/passwd')
    .argv
;
````

Optionally `.options()` can take an object that maps keys to `opt` parameters.

````javascript
var argv = require('yargs')
    .options({
      'f': {
        alias: 'file',
        demand: true,
        default: '/etc/passwd',
        describe: 'x marks the spot',
        type: 'string'
      }
    })
    .argv
;
````

.usage(message, opts)
---------------------

Set a usage message to show which commands to use. Inside `message`, the string
`$0` will get interpolated to the current script name or node command for the
present script similar to how `$0` works in bash or perl.

`opts` is optional and acts like calling `.options(opts)`.

.command(cmd, desc, [fn])
-------------------

Document the commands exposed by your application.

use `desc` to provide a description for each command your application accepts (the
values stored in `argv._`).

Optionally, you can provide a handler `fn` which will be executed when
a given command is provided. The handler will be executed with an instance
of `yargs`, which can be used to compose nested commands.

Here's an example of top-level and nested commands in action:

```js
var argv = require('yargs')
  .usage('npm <command>')
  .command('install', 'tis a mighty fine package to install')
  .command('publish', 'shiver me timbers, should you be sharing all that', function (yargs) {
    argv = yargs.option('f', {
      alias: 'force',
      description: 'yar, it usually be a bad idea'
    })
    .help('help')
    .argv
  })
  .help('help')
  .argv;
```

.example(cmd, desc)
-------------------

Give some example invocations of your program. Inside `cmd`, the string
`$0` will get interpolated to the current script name or node command for the
present script similar to how `$0` works in bash or perl.
Examples will be printed out as part of the help message.


.epilogue(str)
--------------
.epilog(str)
------------

A message to print at the end of the usage instructions, e.g.,

```js
var argv = require('yargs')
  .epilogue('for more information, find our manual at http://example.com');
```

.check(fn)
----------

Check that certain conditions are met in the provided arguments.

`fn` is called with two arguments, the parsed `argv` hash and an array of options and their aliases.

If `fn` throws or returns a non-truthy value, show the thrown error, usage information, and
exit.

.fail(fn)
---------

Method to execute when a failure occurs, rather then printing the failure message.

`fn` is called with the failure message that would have been printed.

.boolean(key)
-------------

Interpret `key` as a boolean. If a non-flag option follows `key` in
`process.argv`, that string won't get set as the value of `key`.

`key` will default to `false`, unless an `default(key, undefined)` is
explicitly set.

If `key` is an Array, interpret all the elements as booleans.

.string(key)
------------

Tell the parser logic not to interpret `key` as a number or boolean.
This can be useful if you need to preserve leading zeros in an input.

If `key` is an Array, interpret all the elements as strings.

`.string('_')` will result in non-hyphenated arguments being interpreted as strings,
regardless of whether they resemble numbers.

.array(key)
----------

Tell the parser to interpret `key` as an array. If `.array('foo')` is set,
`--foo foo bar` will be parsed as `['foo', 'bar']` rather than as `'bar'`.

.nargs(key, count)
-----------

The number of arguments that should be consumed after a key. This can be a
useful hint to prevent parsing ambiguity:

```js
var argv = require('yargs')
  .nargs('token', 1)
  .parse(['--token', '-my-token']);
```

parses as:

`{ _: [], token: '-my-token', '$0': 'node test' }`

Optionally `.nargs()` can take an object of `key`/`narg` pairs.

.config(key)
------------

Tells the parser that if the option specified by `key` is passed in, it
should be interpreted as a path to a JSON config file. The file is loaded
and parsed, and its properties are set as arguments.

.wrap(columns)
--------------

Format usage output to wrap at `columns` many columns.

By default wrap will be set to `Math.min(80, windowWidth)`. Use `.wrap(null)` to
specify no column limit.

`yargs.wrap(yargs.terminalWidth())` can be used to maximize the width
of yargs' usage instructions.

.strict()
---------

Any command-line argument given that is not demanded, or does not have a
corresponding description, will be reported as an error.

.help([option, [description]])
------------------------------

Add an option (e.g., `--help`) that displays the usage string and exits the
process. If present, the `description` parameter customises the description of
the help option in the usage string.

If invoked without parameters, `.help` returns the generated usage string.

Example:

```
var yargs = require("yargs")
       .usage("$0 -operand1 number -operand2 number -operation [add|subtract]");
console.log(yargs.help());
```

Later on, ```argv``` can be retrived with ```yargs.argv```

.version(version, [option], [description])
----------------------------------------

Add an option (e.g., `--version`) that displays the version number (given by the
`version` parameter) and exits the process. If present, the `description`
parameter customizes the description of the version option in the usage string.

You can provide a `function` for version, rather than a string.
This is useful if you want to use the version from your package.json:

```js
var argv = require('yargs')
  .version(function() {
    return require('../package').version;
  })
  .argv;
```

.showHelpOnFail(enable, [message])
----------------------------------

By default, yargs outputs a usage string if any error is detected. Use the
`.showHelpOnFail` method to customize this behaviour. if `enable` is `false`,
the usage string is not output. If the `message` parameter is present, this
message is output after the error message.

line_count.js

````javascript
#!/usr/bin/env node
var argv = require('yargs')
    .usage('Count the lines in a file.\nUsage: $0')
    .demand('f')
    .alias('f', 'file')
    .describe('f', 'Load a file')
    .showHelpOnFail(false, "Specify --help for available options")
    .argv;

// etc.
````

***

    $ node line_count.js --file
    Missing argument value: f

    Specify --help for available options

.showHelp(consoleLevel='error')
---------------------------

Print the usage data using the [`console`](https://nodejs.org/api/console.html) function `consoleLevel` for printing.

Example:

```
var yargs = require("yargs")
       .usage("$0 -operand1 number -operand2 number -operation [add|subtract]");
yargs.showHelp();
```

Or, to print the usage data to `stdout` instead, you can specify the use of `console.log`:

```
yargs.showHelp("log");
```

Later on, ```argv``` can be retrived with ```yargs.argv```

.completion(cmd, [description], [fn]);
-------------

Enable bash-completion shortcuts for commands and options.

`cmd`: when present in `argv._`, will result in the `.bashrc` completion script
being outputted. To enable bash completions, concat the generated script to your
`.bashrc`, or `.bash_profile`.

`description`: provide a description in your usage instructions for the command
that generates bash completion scripts.

`fn`, rather than relying on yargs' default completion functionlity, which
shiver me timbers is pretty awesome, you can provide your own completion
method.

```js
var argv = require('yargs')
  .completion('completion', function(current, argv) {
    // 'current' is the current command being completed.
    // 'argv' is the parsed arguments so far.
    // simply return an array of completions.
    return [
      'foo',
      'bar'
    ];
  })
  .argv;
```

But wait, there's more! you can provide asynchronous completions.

```js
var argv = require('yargs')
  .completion('completion', function(current, argv, done) {
    setTimeout(function() {
      done([
        'apple',
        'banana'
      ]);
    }, 500);
  })
  .argv;
```

.showCompletionScript()
----------------------

Generate a bash completion script. Users of your application can install this
script in their `.bashrc`, and yargs will provide completion shortcuts for
commands and options.

.exitProcess(enable)
----------------------------------

By default, yargs exits the process when the user passes a help flag, uses the `.version` functionality or when validation fails. Calling `.exitProcess(false)` disables this behavior, enabling further actions after yargs have been validated.

.parse(args)
------------

Parse `args` instead of `process.argv`. Returns the `argv` object.

.reset()
--------

Reset the argument object built up so far. This is useful for
creating nested command line interfaces.

```js
var yargs = require('./yargs')
  .usage('$0 command')
  .command('hello', 'hello command')
  .command('world', 'world command')
  .demand(1, 'must provide a valid command'),
  argv = yargs.argv,
  command = argv._[0];

if (command === 'hello') {
  yargs.reset()
    .usage('$0 hello')
    .help('h')
    .example('$0 hello', 'print the hello message!')
    .argv

  console.log('hello!');
} else if (command === 'world'){
  yargs.reset()
    .usage('$0 world')
    .help('h')
    .example('$0 world', 'print the world message!')
    .argv

  console.log('world!');
} else {
  yargs.showHelp();
}
```

.argv
-----

Get the arguments as a plain old object.

Arguments without a corresponding flag show up in the `argv._` array.

The script name or node command is available at `argv.$0` similarly to how `$0`
works in bash or perl.

parsing tricks
==============

stop parsing
------------

Use `--` to stop parsing flags and stuff the remainder into `argv._`.

    $ node examples/reflect.js -a 1 -b 2 -- -c 3 -d 4
    { _: [ '-c', '3', '-d', '4' ],
      '$0': 'node ./examples/reflect.js',
      a: 1,
      b: 2 }

negate fields
-------------

If you want to explicity set a field to false instead of just leaving it
undefined or to override a default you can do `--no-key`.

    $ node examples/reflect.js -a --no-b
    { _: [],
      '$0': 'node ./examples/reflect.js',
      a: true,
      b: false }

numbers
-------

Every argument that looks like a number (`!isNaN(Number(arg))`) is converted to
one. This way you can just `net.createConnection(argv.port)` and you can add
numbers out of `argv` with `+` without having that mean concatenation,
which is super frustrating.

duplicates
----------

If you specify a flag multiple times it will get turned into an array containing
all the values in order.

    $ node examples/reflect.js -x 5 -x 8 -x 0
    { _: [],
      '$0': 'node ./examples/reflect.js',
        x: [ 5, 8, 0 ] }

dot notation
------------

When you use dots (`.`s) in argument names, an implicit object path is assumed.
This lets you organize arguments into nested objects.

     $ node examples/reflect.js --foo.bar.baz=33 --foo.quux=5
     { _: [],
       '$0': 'node ./examples/reflect.js',
         foo: { bar: { baz: 33 }, quux: 5 } }

short numbers
-------------

Short numeric `head -n5` style argument work too:

    $ node reflect.js -n123 -m456
    { '3': true,
      '6': true,
      _: [],
      '$0': 'node ./reflect.js',
      n: 123,
      m: 456 }

installation
============

With [npm](http://github.com/isaacs/npm), just do:

    npm install yargs

or clone this project on github:

    git clone http://github.com/bcoe/yargs.git

To run the tests with npm, just do:

    npm test

inspired by
===========

This module is loosely inspired by Perl's
[Getopt::Casual](http://search.cpan.org/~photo/Getopt-Casual-0.13.1/Casual.pm).
