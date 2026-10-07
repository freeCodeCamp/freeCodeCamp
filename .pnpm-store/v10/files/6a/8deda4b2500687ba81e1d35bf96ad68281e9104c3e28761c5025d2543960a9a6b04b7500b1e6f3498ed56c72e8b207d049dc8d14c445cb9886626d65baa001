# rc

The non-configurable configuration loader for lazy people.

## Usage

The only option is to pass rc the name of your app, and your default configuration.

```javascript
var conf = require('rc')(appname, {
  //defaults go here.
  port: 2468,

  //defaults which are objects will be merged, not replaced
  views: {
    engine: 'jade'
  }
});
```

`rc` will return your configuration options merged with the defaults you specify.
If you pass in a predefined defaults object, it will be mutated:

```javascript
var conf = {};
require('rc')(appname, conf);
```

If `rc` finds any config files for your app, the returned config object will have
a `configs` array containing their paths:

```javascript
var appCfg = require('rc')(appname, conf);
appCfg.configs[0] // /etc/appnamerc
appCfg.configs[1] // /home/dominictarr/.config/appname
appCfg.config // same as appCfg.configs[appCfg.configs.length - 1]
```

## Standards

Given your application name (`appname`), rc will look in all the obvious places for configuration.

  * command line arguments, parsed by minimist _(e.g. `--foo baz`, also nested: `--foo.bar=baz`)_
  * environment variables prefixed with `${appname}_`
    * or use "\_\_" to indicate nested properties <br/> _(e.g. `appname_foo__bar__baz` => `foo.bar.baz`)_
  * if you passed an option `--config file` then from that file
  * a local `.${appname}rc` or the first found looking in `./ ../ ../../ ../../../` etc.
  * `$HOME/.${appname}rc`
  * `$HOME/.${appname}/config`
  * `$HOME/.config/${appname}`
  * `$HOME/.config/${appname}/config`
  * `/etc/${appname}rc`
  * `/etc/${appname}/config`
  * the defaults object you passed in.

All configuration sources that were found will be flattened into one object,
so that sources **earlier** in this list override later ones.


## Configuration File Formats

Configuration files (e.g. `.appnamerc`) may be in either [json](http://json.org/example) or [ini](http://en.wikipedia.org/wiki/INI_file) format. **No** file extension (`.json` or `.ini`) should be used. The example configurations below are equivalent:


#### Formatted as `ini`

```
; You can include comments in `ini` format if you want.

dependsOn=0.10.0


; `rc` has built-in support for ini sections, see?

[commands]
  www     = ./commands/www
  console = ./commands/repl


; You can even do nested sections

[generators.options]
  engine  = ejs

[generators.modules]
  new     = generate-new
  engine  = generate-backend

```

#### Formatted as `json`

```javascript
{
  // You can even comment your JSON, if you want
  "dependsOn": "0.10.0",
  "commands": {
    "www": "./commands/www",
    "console": "./commands/repl"
  },
  "generators": {
    "options": {
      "engine": "ejs"
    },
    "modules": {
      "new": "generate-new",
      "backend": "generate-backend"
    }
  }
}
```

Comments are stripped from JSON config via [strip-json-comments](https://github.com/sindresorhus/strip-json-comments).

> Since ini, and env variables do not have a standard for types, your application needs be prepared for strings.

To ensure that string representations of booleans and numbers are always converted into their proper types (especially useful if you intend to do strict `===` comparisons), consider using a module such as [parse-strings-in-object](https://github.com/anselanza/parse-strings-in-object) to wrap the config object returned from rc.


## Simple example demonstrating precedence
Assume you have an application like this (notice the hard-coded defaults passed to rc):
```
const conf = require('rc')('myapp', {
    port: 12345,
    mode: 'test'
});

console.log(JSON.stringify(conf, null, 2));
```
You also have a file `config.json`, with these contents:
```
{
  "port": 9000,
  "foo": "from config json",
  "something": "else"
}
```
And a file `.myapprc` in the same folder, with these contents:
```
{
  "port": "3001",
  "foo": "bar"
}
```
Here is the expected output from various commands:

`node .`
```
{
  "port": "3001",
  "mode": "test",
  "foo": "bar",
  "_": [],
  "configs": [
    "/Users/stephen/repos/conftest/.myapprc"
  ],
  "config": "/Users/stephen/repos/conftest/.myapprc"
}
```
*Default `mode` from hard-coded object is retained, but port is overridden by `.myapprc` file (automatically found based on appname match), and `foo` is added.*


`node . --foo baz`
```
{
  "port": "3001",
  "mode": "test",
  "foo": "baz",
  "_": [],
  "configs": [
    "/Users/stephen/repos/conftest/.myapprc"
  ],
  "config": "/Users/stephen/repos/conftest/.myapprc"
}
```
*Same result as above but `foo` is overridden because command-line arguments take precedence over `.myapprc` file.*

`node . --foo barbar --config config.json`
```
{
  "port": 9000,
  "mode": "test",
  "foo": "barbar",
  "something": "else",
  "_": [],
  "config": "config.json",
  "configs": [
    "/Users/stephen/repos/conftest/.myapprc",
    "config.json"
  ]
}
```
*Now the `port` comes from the `config.json` file specified (overriding the value from `.myapprc`), and `foo` value is overriden by command-line despite also being specified in the `config.json` file.*
 


## Advanced Usage

#### Pass in your own `argv`

You may pass in your own `argv` as the third argument to `rc`.  This is in case you want to [use your own command-line opts parser](https://github.com/dominictarr/rc/pull/12).

```javascript
require('rc')(appname, defaults, customArgvParser);
```

## Pass in your own parser

If you have a special need to use a non-standard parser,
you can do so by passing in the parser as the 4th argument.
(leave the 3rd as null to get the default args parser)

```javascript
require('rc')(appname, defaults, null, parser);
```

This may also be used to force a more strict format,
such as strict, valid JSON only.

## Note on Performance

`rc` is running `fs.statSync`-- so make sure you don't use it in a hot code path (e.g. a request handler) 


## License

Multi-licensed under the two-clause BSD License, MIT License, or Apache License, version 2.0
