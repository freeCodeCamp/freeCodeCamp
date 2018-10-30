# node-dashdash changelog

## not yet released

(nothing yet)

## 1.14.1

- [issue #30] Change the output used by dashdash's Bash completion support to
  indicate "there are no completions for this argument" to cope with different
  sorting rules on different Bash/platforms. For example:

        $ triton -v -p test2 package get <TAB>          # before
        ##-no -tritonpackage- completions-##

        $ triton -v -p test2 package get <TAB>          # after
        ##-no-completion- -results-##

## 1.14.0

- New `synopsisFromOpt(<option spec>)` function. This will be used by
  [node-cmdln](https://github.com/trentm/node-cmdln) to put together a synopsis
  of options for a command. Some examples:

        > synopsisFromOpt({names: ['help', 'h'], type: 'bool'});
        '[ --help | -h ]'
        > synopsisFromOpt({name: 'file', type: 'string', helpArg: 'FILE'});
        '[ --file=FILE ]'


## 1.13.1

- [issue #20] `bashCompletionSpecFromOptions` breaks on an options array with
  an empty-string group.


## 1.13.0

- Update assert-plus dep to 1.x to get recent fixes (particularly for
  `assert.optional*`).

- Drop testing (and official support in packages.json#engines) for node 0.8.x.
  Add testing against node 5.x and 4.x with `make testall`.

- [pull #16] Change the `positiveInteger` type to NOT accept zero (0).
  For those who might need the old behaviour, see
  "examples/custom-option-intGteZero.js".  (By Dave Pacheco.)


## 1.12.2

- Bash completion: Add `argtypes` to specify the types of positional args.
  E.g. this would allow you to have an `ssh` command with `argtypes = ['host',
  'cmd']` for bash completion. You then have to provide Bash functions to
  handle completing those types via the `specExtra` arg. See
  "[examples/ddcompletion.js](examples/ddcompletion.js)" for an example.

- Bash completion: Tweak so that options or only offered as completions when
  there is a leading '-'. E.g. `mytool <TAB>` does NOT offer options, `mytool
  -<TAB>` *does*. Without this, a tool with options would never be able to
  fallback to Bash's "default" completion. For example `ls <TAB>` wouldn't
  result in filename completion. Now it will.

- Bash completion: A workaround for not being able to explicitly have *no*
  completion results. Because dashdash's completion uses `complete -o default`,
  we fallback to Bash's "default" completion (typically for filename
  completion). Before this change, an attempt to explicitly say "there are
  no completions that match" would unintentionally trigger filename completion.
  Instead as a workaround we return:

        $ ddcompletion --none <TAB>         # the 'none' argtype
        ##-no           completions-##

        $ ddcompletion                      # a custom 'fruit' argtype
        apple   banana  orange
        $ ddcompletion z
        ##-no           -fruit-         completions-##

  This is a bit of a hack, but IMO a better experience than the surprise
  of matching a local filename beginning with 'z', which isn't, in this
  case, a "fruit".

## 1.12.1

- Bash completion: Document `<option spec>.completionType`. Add `includeHidden`
  option to `bashCompletionSpecFromOptions()`. Add support for dealing with
  hidden subcmds.


## 1.12.0

- Support for generating Bash completion files. See the "Bash completion"
  section of the README.md and "examples/ddcompletion.js" for an example.


## 1.11.0

- Add the `arrayFlatten` boolean option to `dashdash.addOptionType` used for
  custom option types. This allows one to create an `arrayOf...` option type
  where each usage of the option can return multiple results. For example:

        node mytool.js --foo a,b --foo c

  We could define an option type for `--foo` such that
  `opts.foo = ['a', 'b', 'c']`. See
  "[examples/custom-option-arrayOfCommaSepString.js](examples/custom-option-arrayOfCommaSepString.js)"
  for an example.


## 1.10.1

- Trim the published package to the minimal bits. Before: 24K tarball, 144K unpacked.
  After: 12K tarball, 48K unpacked. `npm` won't let me drop the README.md. :)


## 1.10.0

- [issue #9] Support `includeDefault` in help config (similar to `includeEnv`) to have a
  note of an option's default value, if any, in help output.
- [issue #11] Fix option group breakage introduced in v1.9.0.


## 1.9.0

- [issue #10] Custom option types added with `addOptionType` can specify a
  "default" value. See "examples/custom-option-fruit.js".


## 1.8.0

- Support `hidden: true` in an option spec to have help output exclude this
  option.


## 1.7.3

- [issue #8] Fix parsing of a short option group when one of the
  option takes an argument. For example, consider `tail` with
  a `-f` boolean option and a `-n` option that takes a number
  argument. This should parse:

        tail -fn5

  Before this change, that would not parse correctly.
  It is suspected that this was introduced in version 1.4.0
  (with commit 656fa8bc71c372ebddad0a7026bd71611e2ec99a).


## 1.7.2

- Known issues: #8

- Exclude 'tools/' dir in packages published to npm.


## 1.7.1

- Known issues: #8

- Support an option group *empty string* value:

        ...
        { group: '' },
        ...

  to render as a blank line in option help. This can help separate loosely
  related sets of options without resorting to a title for option groups.


## 1.7.0

- Known issues: #8

- [pull #7] Support for `<parser>.help({helpWrap: false, ...})` option to be able
  to fully control the formatting for option help (by Patrick Mooney) `helpWrap:
  false` can also be set on individual options in the option objects, e.g.:

        var options = [
            {
              names: ['foo'],
              type: 'string',
              helpWrap: false,
              help: 'long help with\n  newlines' +
                '\n  spaces\n  and such\nwill render correctly'
            },
            ...
        ];


## 1.6.0

- Known issues: #8

- [pull #6] Support headings between groups of options (by Joshua M. Clulow)
  so that this code:

        var options = [
            { group: 'Armament Options' },
            { names: [ 'weapon', 'w' ], type: 'string' },
            { group: 'General Options' },
            { names: [ 'help', 'h' ], type: 'bool' }
        ];
        ...

  will give you this help output:

        ...
          Armament Options:
            -w, --weapon

          General Options:
            -h, --help
        ...


## 1.5.0

- Known issues: #8

- Add support for adding custom option types. "examples/custom-option-duration.js"
  shows an example adding a "duration" option type.

        $ node custom-option-duration.js -t 1h
        duration: 3600000 ms
        $ node custom-option-duration.js -t 1s
        duration: 1000 ms
        $ node custom-option-duration.js -t 5d
        duration: 432000000 ms
        $ node custom-option-duration.js -t bogus
        custom-option-duration.js: error: arg for "-t" is not a valid duration: "bogus"

  A custom option type is added via:

        var dashdash = require('dashdash');
        dashdash.addOptionType({
            name: '...',
            takesArg: true,
            helpArg: '...',
            parseArg: function (option, optstr, arg) {
                ...
            }
        });

- [issue #4] Add `date` and `arrayOfDate` option types. They accept these date
  formats: epoch second times (e.g. 1396031701) and ISO 8601 format:
  `YYYY-MM-DD[THH:MM:SS[.sss][Z]]` (e.g. "2014-03-28",
  "2014-03-28T18:35:01.489Z"). See "examples/date.js" for an example usage.

        $ node examples/date.js -s 2014-01-01 -e $(date +%s)
        start at 2014-01-01T00:00:00.000Z
        end at 2014-03-29T04:26:18.000Z


## 1.4.0

- Known issues: #8

- [pull #2, pull #3] Add a `allowUnknown: true` option on `createParser` to
  allow unknown options to be passed through as `opts._args` instead of parsing
  throwing an exception (by https://github.com/isaacs).

  See 'allowUnknown' in the README for a subtle caveat.


## 1.3.2

- Fix a subtlety where a *bool* option using both `env` and `default` didn't
  work exactly correctly. If `default: false` then all was fine (by luck).
  However, if you had an option like this:

        options: [ {
            names: ['verbose', 'v'],
            env: 'FOO_VERBOSE',
            'default': true,    // <--- this
            type: 'bool'
        } ],

  wanted `FOO_VERBOSE=0` to make the option false, then you need the fix
  in this version of dashdash.


## 1.3.1

- [issue #1] Fix an envvar not winning over an option 'default'. Previously
  an option with both `default` and `env` would never take a value from the
  environment variable. E.g. `FOO_FILE` would never work here:

        options: [ {
            names: ['file', 'f'],
            env: 'FOO_FILE',
            'default': 'default.file',
            type: 'string'
        } ],


## 1.3.0

- [Backward incompatible change for boolean envvars] Change the
  interpretation of environment variables for boolean options to consider '0'
  to be false. Previous to this *any* value to the envvar was considered
  true -- which was quite misleading. Example:

        $ FOO_VERBOSE=0 node examples/foo.js
        # opts: { verbose: [ false ],
          _order: [ { key: 'verbose', value: false, from: 'env' } ],
          _args: [] }
        # args: []


## 1.2.1

- Fix for `parse.help({includeEnv: true, ...})` handling to ensure that an
  option with an `env` **but no `help`** still has the "Environment: ..."
  output. E.g.:

        { names: ['foo'], type: 'string', env: 'FOO' }

        ...

        --foo=ARG      Environment: FOO=ARG


## 1.2.0

- Transform the option key on the `opts` object returned from
  `<parser>.parse()` for convenience. Currently this is just
  `s/-/_/g`, e.g. '--dry-run' -> `opts.dry_run`. This allow one to use hyphen
  in option names (common) but not have to do silly things like
  `opt["dry-run"]` to access the parsed results.


## 1.1.0

- Environment variable integration. Envvars can be associated with an option,
  then option processing will fallback to using that envvar if defined and
  if the option isn't specified in argv. See the "Environment variable
  integration" section in the README.

- Change the `<parser>.parse()` signature to take a single object with keys
  for arguments. The old signature is still supported.

- `dashdash.createParser(CONFIG)` alternative to `new dashdash.Parser(CONFIG)`
  a la many node-land APIs.


## 1.0.2

- Add "positiveInteger" and "arrayOfPositiveInteger" option types that only
  accept positive integers.

- Add "integer" and "arrayOfInteger" option types that accepts only integers.
  Note that, for better or worse, these do NOT accept: "0x42" (hex), "1e2"
  (with exponent) or "1.", "3.0" (floats).


## 1.0.1

- Fix not modifying the given option spec objects (which breaks creating
  a Parser with them more than once).


## 1.0.0

First release.
