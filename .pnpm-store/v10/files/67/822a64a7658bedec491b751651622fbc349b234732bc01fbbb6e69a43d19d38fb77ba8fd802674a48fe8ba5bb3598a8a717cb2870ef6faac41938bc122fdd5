# meow

> CLI app helper

![](meow.gif)

*I would recommend reading this [guide](https://clig.dev) on how to make user-friendly command-line tools.*

## Features

- Parses arguments
- Converts flags to [camelCase](https://github.com/sindresorhus/camelcase)
- Negates flags when using the `--no-` prefix
- Outputs version when `--version`
- Outputs description and supplied help text when `--help`
- Makes unhandled rejected promises [fail hard](https://github.com/sindresorhus/hard-rejection) instead of the default silent fail
- Sets the process title to the binary name defined in package.json
- No dependencies!

## Install

```sh
npm install meow
```

## Usage

```sh
./foo-app.js unicorns --rainbow
```

```js
#!/usr/bin/env node
import meow from 'meow';
import foo from './lib/index.js';

const cli = meow(`
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`, {
	importMeta: import.meta,
	flags: {
		rainbow: {
			type: 'boolean',
			shortFlag: 'r'
		}
	}
});
/*
{
	input: ['unicorns'],
	flags: {rainbow: true},
	...
}
*/

foo(cli.input.at(0), cli.flags);
```

## API

### meow(helpText, options?)
### meow(options)

Returns an `object` with:

- `input` *(Array)* - Non-flag arguments
- `flags` *(Object)* - Flags converted to camelCase excluding aliases
- `unnormalizedFlags` *(Object)* - Flags converted to camelCase including aliases
- `pkg` *(Object)* - The `package.json` object
- `help` *(string)* - The help text used with `--help`
- `showHelp([exitCode=2])` *(Function)* - Show the help text and exit with `exitCode`
- `showVersion()` *(Function)* - Show the version text and exit

#### helpText

Type: `string`

Shortcut for the `help` option.

#### options

Type: `object`

##### importMeta

Type: `object`

Pass in [`import.meta`](https://nodejs.org/dist/latest/docs/api/esm.html#esm_import_meta). This is used to find the correct package.json file.

##### flags

Type: `object`

Define argument flags.

The key is the flag name in camel-case and the value is an object with any of:

- `type`: Type of value. (Possible values: `string` `boolean` `number`)
- `choices`: Limit valid values to a predefined set of choices.
- `default`: Default value when the flag is not specified.
- `shortFlag`: A short flag alias.
- `aliases`: Other names for the flag.
- `isMultiple`: Indicates a flag can be set multiple times. Values are turned into an array. (Default: false)
	- Multiple values are provided by specifying the flag multiple times, for example, `$ foo -u rainbow -u cat`. Space- or comma-separated values are [currently *not* supported](https://github.com/sindresorhus/meow/issues/164).
- `isRequired`: Determine if the flag is required. (Default: false)
	- If it's only known at runtime whether the flag is required or not, you can pass a `Function` instead of a `boolean`, which based on the given flags and other non-flag arguments, should decide if the flag is required. Two arguments are passed to the function:
	- The first argument is the **flags** object, which contains the flags converted to camel-case excluding aliases.
	- The second argument is the **input** string array, which contains the non-flag arguments.
	- The function should return a `boolean`, true if the flag is required, otherwise false.

Note that flags are always defined using a camel-case key (`myKey`), but will match arguments in kebab-case (`--my-key`).

Example:

```js
flags: {
	unicorn: {
		type: 'string',
		choices: ['rainbow', 'cat', 'unicorn'],
		default: ['rainbow', 'cat'],
		shortFlag: 'u',
		aliases: ['unicorns'],
		isMultiple: true,
		isRequired: (flags, input) => {
			if (flags.otherFlag) {
				return true;
			}

			return false;
		}
	}
}
```

##### description

Type: `string | boolean`\
Default: The package.json `"description"` property

Description to show above the help text.

Set it to `false` to disable it altogether.

##### help

Type: `string | boolean`

The help text you want shown.

The input is reindented and starting/ending newlines are trimmed which means you can use a [template literal](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings) without having to care about using the correct amount of indent.

The description will be shown above your help text automatically.

##### version

Type: `string | boolean`\
Default: The package.json `"version"` property

Set a custom version output.

##### autoHelp

Type: `boolean`\
Default: `true`

Automatically show the help text when the `--help` flag is present. Useful to set this value to `false` when a CLI manages child CLIs with their own help text.

This option is only considered when there is only one argument in `process.argv`.

##### autoVersion

Type: `boolean`\
Default: `true`

Automatically show the version text when the `--version` flag is present. Useful to set this value to `false` when a CLI manages child CLIs with their own version text.

This option is only considered when there is only one argument in `process.argv`.

##### pkg

Type: `object`\
Default: Closest package.json upwards

package.json as an `object`.

Note: Setting this stops `meow` from finding a package.json.

*You most likely don't need this option.*

##### argv

Type: `string[]`\
Default: `process.argv.slice(2)`

Custom arguments object.

##### inferType

Type: `boolean`\
Default: `false`

Infer the argument type.

By default, the argument `5` in `$ foo 5` becomes a string. Enabling this would infer it as a number.

##### booleanDefault

Type: `boolean | null | undefined`\
Default: `false`

Value of `boolean` flags not defined in `argv`.

If set to `undefined`, the flags not defined in `argv` will be excluded from the result.
The `default` value set in `boolean` flags take precedence over `booleanDefault`.

_Note: If used in conjunction with `isMultiple`, the default flag value is set to `[]`._

__Caution: Explicitly specifying `undefined` for `booleanDefault` has different meaning from omitting key itself.__

Example:

```js
import meow from 'meow';

const cli = meow(`
	Usage
	  $ foo

	Options
	  --rainbow, -r  Include a rainbow
	  --unicorn, -u  Include a unicorn
	  --no-sparkles  Exclude sparkles

	Examples
	  $ foo
	  🌈 unicorns✨🌈
`, {
	importMeta: import.meta,
	booleanDefault: undefined,
	flags: {
		rainbow: {
			type: 'boolean',
			default: true,
			shortFlag: 'r'
		},
		unicorn: {
			type: 'boolean',
			default: false,
			shortFlag: 'u'
		},
		cake: {
			type: 'boolean',
			shortFlag: 'c'
		},
		sparkles: {
			type: 'boolean',
			default: true
		}
	}
});
/*
{
	flags: {
		rainbow: true,
		unicorn: false,
		sparkles: true
	},
	unnormalizedFlags: {
		rainbow: true,
		r: true,
		unicorn: false,
		u: false,
		sparkles: true
	},
	…
}
*/
```

##### allowUnknownFlags

Type `boolean`\
Default: `true`

Whether to allow unknown flags or not.

##### helpIndent

Type `number`\
Default: `2`

The number of spaces to use for indenting the help text.

## Promises

Meow will make unhandled rejected promises [fail hard](https://github.com/sindresorhus/hard-rejection) instead of the default silent fail. Meaning you don't have to manually `.catch()` promises used in your CLI.

## Tips

See [`chalk`](https://github.com/chalk/chalk) if you want to colorize the terminal output.

See [`get-stdin`](https://github.com/sindresorhus/get-stdin) if you want to accept input from stdin.

See [`conf`](https://github.com/sindresorhus/conf) if you need to persist some data.

[More useful CLI utilities…](https://github.com/sindresorhus/awesome-nodejs#command-line-utilities)
