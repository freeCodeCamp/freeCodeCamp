A light, featureful and explicit option parsing library for node.js.

[Why another one? See below](#why). tl;dr: The others I've tried are one of
too loosey goosey (not explicit), too big/too many deps, or ill specified.
YMMV.

Follow <a href="https://twitter.com/intent/user?screen_name=trentmick" target="_blank">@trentmick</a>
for updates to node-dashdash.

# Install

    npm install dashdash


# Usage

```javascript
var dashdash = require('dashdash');

// Specify the options. Minimally `name` (or `names`) and `type`
// must be given for each.
var options = [
    {
        // `names` or a single `name`. First element is the `opts.KEY`.
        names: ['help', 'h'],
        // See "Option specs" below for types.
        type: 'bool',
        help: 'Print this help and exit.'
    }
];

// Shortcut form. As called it infers `process.argv`. See below for
// the longer form to use methods like `.help()` on the Parser object.
var opts = dashdash.parse({options: options});

console.log("opts:", opts);
console.log("args:", opts._args);
```


# Longer Example

A more realistic [starter script "foo.js"](./examples/foo.js) is as follows.
This also shows using `parser.help()` for formatted option help.

```javascript
var dashdash = require('./lib/dashdash');

var options = [
    {
        name: 'version',
        type: 'bool',
        help: 'Print tool version and exit.'
    },
    {
        names: ['help', 'h'],
        type: 'bool',
        help: 'Print this help and exit.'
    },
    {
        names: ['verbose', 'v'],
        type: 'arrayOfBool',
        help: 'Verbose output. Use multiple times for more verbose.'
    },
    {
        names: ['file', 'f'],
        type: 'string',
        help: 'File to process',
        helpArg: 'FILE'
    }
];

var parser = dashdash.createParser({options: options});
try {
    var opts = parser.parse(process.argv);
} catch (e) {
    console.error('foo: error: %s', e.message);
    process.exit(1);
}

console.log("# opts:", opts);
console.log("# args:", opts._args);

// Use `parser.help()` for formatted options help.
if (opts.help) {
    var help = parser.help({includeEnv: true}).trimRight();
    console.log('usage: node foo.js [OPTIONS]\n'
                + 'options:\n'
                + help);
    process.exit(0);
}

// ...
```


Some example output from this script (foo.js):

```
$ node foo.js -h
# opts: { help: true,
  _order: [ { name: 'help', value: true, from: 'argv' } ],
  _args: [] }
# args: []
usage: node foo.js [OPTIONS]
options:
    --version             Print tool version and exit.
    -h, --help            Print this help and exit.
    -v, --verbose         Verbose output. Use multiple times for more verbose.
    -f FILE, --file=FILE  File to process

$ node foo.js -v
# opts: { verbose: [ true ],
  _order: [ { name: 'verbose', value: true, from: 'argv' } ],
  _args: [] }
# args: []

$ node foo.js --version arg1
# opts: { version: true,
  _order: [ { name: 'version', value: true, from: 'argv' } ],
  _args: [ 'arg1' ] }
# args: [ 'arg1' ]

$ node foo.js -f bar.txt
# opts: { file: 'bar.txt',
  _order: [ { name: 'file', value: 'bar.txt', from: 'argv' } ],
  _args: [] }
# args: []

$ node foo.js -vvv --file=blah
# opts: { verbose: [ true, true, true ],
  file: 'blah',
  _order:
   [ { name: 'verbose', value: true, from: 'argv' },
     { name: 'verbose', value: true, from: 'argv' },
     { name: 'verbose', value: true, from: 'argv' },
     { name: 'file', value: 'blah', from: 'argv' } ],
  _args: [] }
# args: []
```


See the ["examples"](examples/) dir for a number of starter examples using
some of dashdash's features.


# Environment variable integration

If you want to allow environment variables to specify options to your tool,
dashdash makes this easy. We can change the 'verbose' option in the example
above to include an 'env' field:

```javascript
    {
        names: ['verbose', 'v'],
        type: 'arrayOfBool',
        env: 'FOO_VERBOSE',         // <--- add this line
        help: 'Verbose output. Use multiple times for more verbose.'
    },
```

then the **"FOO_VERBOSE" environment variable** can be used to set this
option:

```shell
$ FOO_VERBOSE=1 node foo.js
# opts: { verbose: [ true ],
  _order: [ { name: 'verbose', value: true, from: 'env' } ],
  _args: [] }
# args: []
```

Boolean options will interpret the empty string as unset, '0' as false
and anything else as true.

```shell
$ FOO_VERBOSE= node examples/foo.js                 # not set
# opts: { _order: [], _args: [] }
# args: []

$ FOO_VERBOSE=0 node examples/foo.js                # '0' is false
# opts: { verbose: [ false ],
  _order: [ { key: 'verbose', value: false, from: 'env' } ],
  _args: [] }
# args: []

$ FOO_VERBOSE=1 node examples/foo.js                # true
# opts: { verbose: [ true ],
  _order: [ { key: 'verbose', value: true, from: 'env' } ],
  _args: [] }
# args: []

$ FOO_VERBOSE=boogabooga node examples/foo.js       # true
# opts: { verbose: [ true ],
  _order: [ { key: 'verbose', value: true, from: 'env' } ],
  _args: [] }
# args: []
```

Non-booleans can be used as well. Strings:

```shell
$ FOO_FILE=data.txt node examples/foo.js
# opts: { file: 'data.txt',
  _order: [ { key: 'file', value: 'data.txt', from: 'env' } ],
  _args: [] }
# args: []
```

Numbers:

```shell
$ FOO_TIMEOUT=5000 node examples/foo.js
# opts: { timeout: 5000,
  _order: [ { key: 'timeout', value: 5000, from: 'env' } ],
  _args: [] }
# args: []

$ FOO_TIMEOUT=blarg node examples/foo.js
foo: error: arg for "FOO_TIMEOUT" is not a positive integer: "blarg"
```

With the `includeEnv: true` config to `parser.help()` the environment
variable can also be included in **help output**:

    usage: node foo.js [OPTIONS]
    options:
        --version             Print tool version and exit.
        -h, --help            Print this help and exit.
        -v, --verbose         Verbose output. Use multiple times for more verbose.
                              Environment: FOO_VERBOSE=1
        -f FILE, --file=FILE  File to process


# Bash completion

Dashdash provides a simple way to create a Bash completion file that you
can place in your "bash_completion.d" directory -- sometimes that is
"/usr/local/etc/bash_completion.d/"). Features:

- Support for short and long opts
- Support for knowing which options take arguments
- Support for subcommands (e.g. 'git log <TAB>' to show just options for the
  log subcommand). See
  [node-cmdln](https://github.com/trentm/node-cmdln#bash-completion) for
  how to integrate that.
- Does the right thing with "--" to stop options.
- Custom optarg and arg types for custom completions.

Dashdash will return bash completion file content given a parser instance:

    var parser = dashdash.createParser({options: options});
    console.log( parser.bashCompletion({name: 'mycli'}) );

or directly from a `options` array of options specs:

    var code = dashdash.bashCompletionFromOptions({
        name: 'mycli',
        options: OPTIONS
    });

Write that content to "/usr/local/etc/bash_completion.d/mycli" and you will
have Bash completions for `mycli`. Alternatively you can write it to
any file (e.g. "~/.bashrc") and source it.

You could add a `--completion` hidden option to your tool that emits the
completion content and document for your users to call that to install
Bash completions.

See [examples/ddcompletion.js](examples/ddcompletion.js) for a complete
example, including how one can define bash functions for completion of custom
option types. Also see [node-cmdln](https://github.com/trentm/node-cmdln) for
how it uses this for Bash completion for full multi-subcommand tools.

- TODO: document specExtra
- TODO: document includeHidden
- TODO: document custom types, `function complete\_FOO` guide, completionType
- TODO: document argtypes


# Parser config

Parser construction (i.e. `dashdash.createParser(CONFIG)`) takes the
following fields:

- `options` (Array of option specs). Required. See the
  [Option specs](#option-specs) section below.

- `interspersed` (Boolean). Optional. Default is true. If true this allows
  interspersed arguments and options. I.e.:

        node ./tool.js -v arg1 arg2 -h   # '-h' is after interspersed args

  Set it to false to have '-h' **not** get parsed as an option in the above
  example.

- `allowUnknown` (Boolean).  Optional.  Default is false.  If false, this causes
  unknown arguments to throw an error.  I.e.:

        node ./tool.js -v arg1 --afe8asefksjefhas

  Set it to true to treat the unknown option as a positional
  argument.

  **Caveat**: When a shortopt group, such as `-xaz` contains a mix of
  known and unknown options, the *entire* group is passed through
  unmolested as a positional argument.

  Consider if you have a known short option `-a`, and parse the
  following command line:

        node ./tool.js -xaz

  where `-x` and `-z` are unknown.  There are multiple ways to
  interpret this:

    1. `-x` takes a value: `{x: 'az'}`
    2. `-x` and `-z` are both booleans: `{x:true,a:true,z:true}`

  Since dashdash does not know what `-x` and `-z` are, it can't know
  if you'd prefer to receive `{a:true,_args:['-x','-z']}` or
  `{x:'az'}`, or `{_args:['-xaz']}`. Leaving the positional arg unprocessed
  is the easiest mistake for the user to recover from.


# Option specs

Example using all fields (required fields are noted):

```javascript
{
    names: ['file', 'f'],       // Required (one of `names` or `name`).
    type: 'string',             // Required.
    completionType: 'filename',
    env: 'MYTOOL_FILE',
    help: 'Config file to load before running "mytool"',
    helpArg: 'PATH',
    helpWrap: false,
    default: path.resolve(process.env.HOME, '.mytoolrc')
}
```

Each option spec in the `options` array must/can have the following fields:

- `name` (String) or `names` (Array). Required. These give the option name
  and aliases. The first name (if more than one given) is the key for the
  parsed `opts` object.

- `type` (String). Required. One of:

    - bool
    - string
    - number
    - integer
    - positiveInteger
    - date (epoch seconds, e.g. 1396031701, or ISO 8601 format
      `YYYY-MM-DD[THH:MM:SS[.sss][Z]]`, e.g. "2014-03-28T18:35:01.489Z")
    - arrayOfBool
    - arrayOfString
    - arrayOfNumber
    - arrayOfInteger
    - arrayOfPositiveInteger
    - arrayOfDate

  FWIW, these names attempt to match with asserts on
  [assert-plus](https://github.com/mcavage/node-assert-plus).
  You can add your own custom option types with `dashdash.addOptionType`.
  See below.

- `completionType` (String). Optional. This is used for [Bash
  completion](#bash-completion) for an option argument. If not specified,
  then the value of `type` is used. Any string may be specified, but only the
  following values have meaning:

    - `none`: Provide no completions.
    - `file`: Bash's default completion (i.e. `complete -o default`), which
      includes filenames.
    - *Any string FOO for which a `function complete_FOO` Bash function is
      defined.* This is for custom completions for a given tool. Typically
      these custom functions are provided in the `specExtra` argument to
      `dashdash.bashCompletionFromOptions()`. See
      ["examples/ddcompletion.js"](examples/ddcompletion.js) for an example.

- `env` (String or Array of String). Optional. An environment variable name
  (or names) that can be used as a fallback for this option. For example,
  given a "foo.js" like this:

        var options = [{names: ['dry-run', 'n'], env: 'FOO_DRY_RUN'}];
        var opts = dashdash.parse({options: options});

  Both `node foo.js --dry-run` and `FOO_DRY_RUN=1 node foo.js` would result
  in `opts.dry_run = true`.

  An environment variable is only used as a fallback, i.e. it is ignored if
  the associated option is given in `argv`.

- `help` (String). Optional. Used for `parser.help()` output.

- `helpArg` (String). Optional. Used in help output as the placeholder for
  the option argument, e.g. the "PATH" in:

        ...
        -f PATH, --file=PATH    File to process
        ...

- `helpWrap` (Boolean). Optional, default true. Set this to `false` to have
  that option's `help` *not* be text wrapped in `<parser>.help()` output.

- `default`. Optional. A default value used for this option, if the
  option isn't specified in argv.

- `hidden` (Boolean). Optional, default false. If true, help output will not
  include this option. See also the `includeHidden` option to
  `bashCompletionFromOptions()` for [Bash completion](#bash-completion).


# Option group headings

You can add headings between option specs in the `options` array.  To do so,
simply add an object with only a `group` property -- the string to print as
the heading for the subsequent options in the array.  For example:

```javascript
var options = [
    {
        group: 'Armament Options'
    },
    {
        names: [ 'weapon', 'w' ],
        type: 'string'
    },
    {
        group: 'General Options'
    },
    {
        names: [ 'help', 'h' ],
        type: 'bool'
    }
];
...
```

Note: You can use an empty string, `{group: ''}`, to get a blank line in help
output between groups of options.


# Help config

The `parser.help(...)` function is configurable as follows:

        Options:
          Armament Options:
        ^^  -w WEAPON, --weapon=WEAPON  Weapon with which to crush. One of: |
       /                                sword, spear, maul                  |
      /   General Options:                                                  |
     /      -h, --help                  Print this help and exit.           |
    /   ^^^^                            ^                                   |
    \       `-- indent                   `-- helpCol              maxCol ---'
     `-- headingIndent

- `indent` (Number or String). Default 4. Set to a number (for that many
  spaces) or a string for the literal indent.
- `headingIndent` (Number or String). Default half length of `indent`. Set to
  a number (for that many spaces) or a string for the literal indent. This
  indent applies to group heading lines, between normal option lines.
- `nameSort` (String). Default is 'length'. By default the names are
  sorted to put the short opts first (i.e. '-h, --help' preferred
  to '--help, -h'). Set to 'none' to not do this sorting.
- `maxCol` (Number). Default 80. Note that reflow is just done on whitespace
  so a long token in the option help can overflow maxCol.
- `helpCol` (Number). If not set a reasonable value will be determined
  between `minHelpCol` and `maxHelpCol`.
- `minHelpCol` (Number). Default 20.
- `maxHelpCol` (Number). Default 40.
- `helpWrap` (Boolean). Default true. Set to `false` to have option `help`
  strings *not* be textwrapped to the helpCol..maxCol range.
- `includeEnv` (Boolean). Default false. If the option has associated
  environment variables (via the `env` option spec attribute), then
  append mentioned of those envvars to the help string.
- `includeDefault` (Boolean). Default false. If the option has a default value
  (via the `default` option spec attribute, or a default on the option's type),
  then a "Default: VALUE" string will be appended to the help string.


# Custom option types

Dashdash includes a good starter set of option types that it will parse for
you. However, you can add your own via:

    var dashdash = require('dashdash');
    dashdash.addOptionType({
        name: '...',
        takesArg: true,
        helpArg: '...',
        parseArg: function (option, optstr, arg) {
            ...
        },
        array: false,  // optional
        arrayFlatten: false,  // optional
        default: ...,   // optional
        completionType: ...  // optional
    });

For example, a simple option type that accepts 'yes', 'y', 'no' or 'n' as
a boolean argument would look like:

    var dashdash = require('dashdash');

    function parseYesNo(option, optstr, arg) {
        var argLower = arg.toLowerCase()
        if (~['yes', 'y'].indexOf(argLower)) {
            return true;
        } else if (~['no', 'n'].indexOf(argLower)) {
            return false;
        } else {
            throw new Error(format(
                'arg for "%s" is not "yes" or "no": "%s"',
                optstr, arg));
        }
    }

    dashdash.addOptionType({
        name: 'yesno'
        takesArg: true,
        helpArg: '<yes|no>',
        parseArg: parseYesNo
    });

    var options = {
        {names: ['answer', 'a'], type: 'yesno'}
    };
    var opts = dashdash.parse({options: options});

See "examples/custom-option-\*.js" for other examples.
See the `addOptionType` block comment in "lib/dashdash.js" for more details.
Please let me know [with an
issue](https://github.com/trentm/node-dashdash/issues/new) if you write a
generally useful one.



# Why

Why another node.js option parsing lib?

- `nopt` really is just for "tools like npm". Implicit opts (e.g. '--no-foo'
  works for every '--foo'). Can't disable abbreviated opts. Can't do multiple
  usages of same opt, e.g. '-vvv' (I think). Can't do grouped short opts.

- `optimist` has surprise interpretation of options (at least to me).
  Implicit opts mean ambiguities and poor error handling for fat-fingering.
  `process.exit` calls makes it hard to use as a libary.

- `optparse` Incomplete docs. Is this an attempted clone of Python's `optparse`.
  Not clear. Some divergence. `parser.on("name", ...)` API is weird.

- `argparse` Dep on underscore. No thanks just for option processing.
  `find lib | wc -l` -> `26`. Overkill.
  Argparse is a bit different anyway. Not sure I want that.

- `posix-getopt` No type validation. Though that isn't a killer. AFAIK can't
  have a long opt without a short alias. I.e. no `getopt_long` semantics.
  Also, no whizbang features like generated help output.

- ["commander.js"](https://github.com/visionmedia/commander.js): I wrote
  [a critique](http://trentm.com/2014/01/a-critique-of-commander-for-nodejs.html)
  a while back. It seems fine, but last I checked had
  [an outstanding bug](https://github.com/visionmedia/commander.js/pull/121)
  that would prevent me from using it.


# License

MIT. See LICENSE.txt.
