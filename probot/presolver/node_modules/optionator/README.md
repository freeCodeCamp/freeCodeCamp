# Optionator
<a name="optionator" />

Optionator is a JavaScript option parsing and help generation library used by [eslint](http://eslint.org), [Grasp](http://graspjs.com), [LiveScript](http://livescript.net), [esmangle](https://github.com/estools/esmangle), [escodegen](https://github.com/estools/escodegen), and [many more](https://www.npmjs.com/browse/depended/optionator).

For an online demo, check out the [Grasp online demo](http://www.graspjs.com/#demo).

[About](#about) &middot; [Usage](#usage) &middot; [Settings Format](#settings-format) &middot; [Argument Format](#argument-format)

## Why?
The  problem with other option parsers, such as `yargs` or `minimist`, is they just accept all input, valid or not.
With Optionator, if you mistype an option, it will give you an error (with a suggestion for what you meant).
If you give the wrong type of argument for an option, it will give you an error rather than supplying the wrong input to your application.

    $ cmd --halp
    Invalid option '--halp' - perhaps you meant '--help'?

    $ cmd --count str
    Invalid value for option 'count' - expected type Int, received value: str.

Other helpful features include reformatting the help text based on the size of the console, so that it fits even if the console is narrow, and accepting not just an array (eg. process.argv), but a string or object as well, making things like testing much easier.

## About
Optionator uses [type-check](https://github.com/gkz/type-check) and [levn](https://github.com/gkz/levn) behind the scenes to cast and verify input according the specified types.

MIT license. Version 0.8.2

    npm install optionator

For updates on Optionator, [follow me on twitter](https://twitter.com/gkzahariev).

## Usage
`require('optionator');` returns a function. It has one property, `VERSION`, the current version of the library as a string. This function is called with an object specifying your options and other information, see the [settings format section](#settings-format). This in turn returns an object with three properties, `parse`, `parseArgv`, `generateHelp`, and `generateHelpForOption`, which are all functions.

```js
var optionator = require('optionator')({
    prepend: 'Usage: cmd [options]',
    append: 'Version 1.0.0',
    options: [{
        option: 'help',
        alias: 'h',
        type: 'Boolean',
        description: 'displays help'
    }, {
        option: 'count',
        alias: 'c',
        type: 'Int',
        description: 'number of things',
        example: 'cmd --count 2'
    }]
});

var options = optionator.parseArgv(process.argv);
if (options.help) {
    console.log(optionator.generateHelp());
}
...
```

### parse(input, parseOptions)
`parse` processes the `input` according to your settings, and returns an object with the results.

##### arguments
* input - `[String] | Object | String` - the input you wish to parse
* parseOptions - `{slice: Int}` - all options optional
    - `slice` specifies how much to slice away from the beginning if the input is an array or string - by default `0` for string, `2` for array (works with `process.argv`)

##### returns
`Object` - the parsed options, each key is a camelCase version of the option name (specified in dash-case), and each value is the processed value for that option. Positional values are in an array under the `_` key.

##### example
```js
parse(['node', 't.js', '--count', '2', 'positional']); // {count: 2, _: ['positional']}
parse('--count 2 positional');                         // {count: 2, _: ['positional']}
parse({count: 2, _:['positional']});                   // {count: 2, _: ['positional']}
```

### parseArgv(input)
`parseArgv` works exactly like `parse`, but only for array input and it slices off the first two elements.

##### arguments
* input - `[String]` - the input you wish to parse

##### returns
See "returns" section in "parse"

##### example
```js
parseArgv(process.argv);
```

### generateHelp(helpOptions)
`generateHelp` produces help text based on your settings.

##### arguments
* helpOptions - `{showHidden: Boolean, interpolate: Object}` - all options optional
    - `showHidden` specifies whether to show options with `hidden: true` specified, by default it is `false`
    - `interpolate` specify data to be interpolated in `prepend` and `append` text, `{{key}}` is the format - eg. `generateHelp({interpolate:{version: '0.4.2'}})`, will change this `append` text: `Version {{version}}` to `Version 0.4.2`

##### returns
`String` - the generated help text

##### example
```js
generateHelp(); /*
"Usage: cmd [options] positional

  -h, --help       displays help
  -c, --count Int  number of things

Version  1.0.0
"*/
```

### generateHelpForOption(optionName)
`generateHelpForOption` produces expanded help text for the specified with `optionName` option. If an `example` was specified for the option, it will be displayed,  and if a `longDescription` was specified, it will display that instead of the `description`.

##### arguments
* optionName - `String` - the name of the option to display

##### returns
`String` - the generated help text for the option

##### example
```js
generateHelpForOption('count'); /*
"-c, --count Int
description: number of things
example: cmd --count 2
"*/
```

## Settings Format
When your `require('optionator')`, you get a function that takes in a settings object. This object has the type:

    {
      prepend: String,
      append: String,
      options: [{heading: String} | {
        option: String,
        alias: [String] | String,
        type: String,
        enum: [String],
        default: String,
        restPositional: Boolean,
        required: Boolean,
        overrideRequired: Boolean,
        dependsOn: [String] | String,
        concatRepeatedArrays: Boolean | (Boolean, Object),
        mergeRepeatedObjects: Boolean,
        description: String,
        longDescription: String,
        example: [String] | String
      }],
      helpStyle: {
        aliasSeparator: String,
        typeSeparator: String,
        descriptionSeparator: String,
        initialIndent: Int,
        secondaryIndent: Int,
        maxPadFactor: Number
      },
      mutuallyExclusive: [[String | [String]]],
      concatRepeatedArrays: Boolean | (Boolean, Object), // deprecated, set in defaults object
      mergeRepeatedObjects: Boolean, // deprecated, set in defaults object
      positionalAnywhere: Boolean,
      typeAliases: Object,
      defaults: Object
    }

All of the properties are optional (the `Maybe` has been excluded for brevities sake), except for having either `heading: String` or `option: String` in each object in the `options` array.

### Top Level Properties
* `prepend` is an optional string to be placed before the options in the help text
* `append` is an optional string to be placed after the options in the help text
* `options` is a required array specifying your options and headings, the options and headings will be displayed in the order specified
* `helpStyle` is an optional object which enables you to change the default appearance of some aspects of the help text
* `mutuallyExclusive` is an optional array of arrays of either strings or arrays of strings. The top level array is a list of rules, each rule is a list of elements - each element can be either a string (the name of an option), or a list of strings (a group of option names) - there will be an error if more than one element is present
* `concatRepeatedArrays` see description under the "Option Properties" heading - use at the top level is deprecated, if you want to set this for all options, use the `defaults` property
* `mergeRepeatedObjects` see description under the "Option Properties" heading - use at the top level is deprecated, if you want to set this for all options, use the `defaults` property
* `positionalAnywhere` is an optional boolean (defaults to `true`) - when `true` it allows positional arguments anywhere, when `false`, all arguments after the first positional one are taken to be positional as well, even if they look like a flag. For example, with `positionalAnywhere: false`, the arguments `--flag --boom 12 --crack` would have two positional arguments: `12` and `--crack`
* `typeAliases` is an optional object, it allows you to set aliases for types, eg. `{Path: 'String'}` would allow you to use the type `Path` as an alias for the type `String`
* `defaults` is an optional object following the option properties format, which specifies default values for all options. A default will be overridden if manually set. For example, you can do `default: { type: "String" }` to set the default type of all options to `String`, and then override that default in an individual option by setting the `type` property

#### Heading Properties
* `heading` a required string, the name of the heading

#### Option Properties
* `option` the required name of the option - use dash-case, without the leading dashes
* `alias` is an optional string or array of strings which specify any aliases for the option
* `type` is a required string in the [type check](https://github.com/gkz/type-check) [format](https://github.com/gkz/type-check#type-format), this will be used to cast the inputted value and validate it
* `enum` is an optional array of strings, each string will be parsed by [levn](https://github.com/gkz/levn) - the argument value must be one of the resulting values - each potential value must validate against the specified `type`
* `default` is a optional string, which will be parsed by [levn](https://github.com/gkz/levn) and used as the default value if none is set - the value must validate against the specified `type`
* `restPositional` is an optional boolean - if set to `true`, everything after the option will be taken to be a positional argument, even if it looks like a named argument
* `required` is an optional boolean - if set to `true`, the option parsing will fail if the option is not defined
* `overrideRequired` is a optional boolean - if set to `true` and the option is used, and there is another option which is required but not set, it will override the need for the required option and there will be no error - this is useful if you have required options and want to use `--help` or `--version` flags
* `concatRepeatedArrays` is an optional boolean or tuple with boolean and options object (defaults to `false`) - when set to `true` and an option contains an array value and is repeated, the subsequent values for the flag will be appended rather than overwriting the original value - eg. option `g` of type `[String]`: `-g a -g b -g c,d` will result in `['a','b','c','d']`

 You can supply an options object by giving the following value: `[true, options]`. The one currently supported option is `oneValuePerFlag`, this only allows one array value per flag. This is useful if your potential values contain a comma.
* `mergeRepeatedObjects` is an optional boolean (defaults to `false`) - when set to `true` and an option contains an object value and is repeated, the subsequent values for the flag will be merged rather than overwriting the original value - eg. option `g` of type `Object`: `-g a:1 -g b:2 -g c:3,d:4` will result in `{a: 1, b: 2, c: 3, d: 4}`
* `dependsOn` is an optional string or array of strings - if simply a string (the name of another option), it will make sure that that other option is set, if an array of strings, depending on whether `'and'` or `'or'` is first, it will either check whether all (`['and', 'option-a', 'option-b']`), or at least one (`['or', 'option-a', 'option-b']`) other options are set
* `description` is an optional string, which will be displayed next to the option in the help text
* `longDescription` is an optional string, it will be displayed instead of the `description` when `generateHelpForOption` is used
* `example` is an optional string or array of strings with example(s) for the option - these will be displayed when `generateHelpForOption` is used

#### Help Style Properties
* `aliasSeparator` is an optional string, separates multiple names from each other - default: ' ,'
* `typeSeparator` is an optional string, separates the type from the names - default: ' '
* `descriptionSeparator` is an optional string , separates the description from the padded name and type - default: '  '
* `initialIndent` is an optional int - the amount of indent for options - default: 2
* `secondaryIndent` is an optional int - the amount of indent if wrapped fully (in addition to the initial indent) - default: 4
* `maxPadFactor` is an optional number - affects the default level of padding for the names/type, it is multiplied by the average of the length of the names/type - default: 1.5

## Argument Format
At the highest level there are two types of arguments: named, and positional.

Name arguments of any length are prefixed with `--` (eg. `--go`), and those of one character may be prefixed with either `--` or `-` (eg. `-g`).

There are two types of named arguments: boolean flags (eg. `--problemo`, `-p`) which take no value and result in a `true` if they are present, the falsey `undefined` if they are not present, or `false` if present and explicitly prefixed with `no` (eg. `--no-problemo`). Named arguments with values (eg. `--tseries 800`, `-t 800`) are the other type. If the option has a type `Boolean` it will automatically be made into a boolean flag. Any other type results in a named argument that takes a value.

For more information about how to properly set types to get the value you want, take a look at the [type check](https://github.com/gkz/type-check) and [levn](https://github.com/gkz/levn) pages.

You can group single character arguments that use a single `-`, however all except the last must be boolean flags (which take no value). The last may be a boolean flag, or an argument which takes a value - eg. `-ba 2` is equivalent to `-b -a 2`.

Positional arguments are all those values which do not fall under the above - they can be anywhere, not just at the end. For example, in `cmd -b one -a 2 two` where `b` is a boolean flag, and `a` has the type `Number`, there are two positional arguments, `one` and `two`.

Everything after an `--` is positional, even if it looks like a named argument.

You may optionally use `=` to separate option names from values, for example: `--count=2`.

If you specify the option `NUM`, then any argument using a single `-` followed by a number will be valid and will set the value of `NUM`. Eg. `-2` will be parsed into `NUM: 2`.

If duplicate named arguments are present, the last one will be taken.

## Technical About
`optionator` is written in [LiveScript](http://livescript.net/) - a language that compiles to JavaScript. It uses [levn](https://github.com/gkz/levn) to cast arguments to their specified type, and uses [type-check](https://github.com/gkz/type-check) to validate values. It also uses the [prelude.ls](http://preludels.com/) library.
