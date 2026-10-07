# configstore [![Build Status](https://travis-ci.org/yeoman/configstore.svg?branch=master)](https://travis-ci.org/yeoman/configstore)

> Easily load and persist config without having to think about where and how

The config is stored in a JSON file located in `$XDG_CONFIG_HOME` or `~/.config`.<br>
Example: `~/.config/configstore/some-id.json`

*If you need this for Electron, check out [`electron-store`](https://github.com/sindresorhus/electron-store) instead.*<br>
*And check out [`conf`](https://github.com/sindresorhus/conf) for an updated approach to this concept.*


## Install

```
$ npm install configstore
```


## Usage

```js
const Configstore = require('configstore');
const packageJson = require('./package.json');

// Create a Configstore instance
const config = new Configstore(packageJson.name, {foo: 'bar'});

console.log(config.get('foo'));
//=> 'bar'

config.set('awesome', true);
console.log(config.get('awesome'));
//=> true

// Use dot-notation to access nested properties
config.set('bar.baz', true);
console.log(config.get('bar'));
//=> {baz: true}

config.delete('awesome');
console.log(config.get('awesome'));
//=> undefined
```


## API

### Configstore(packageName, defaults?, options?)

Returns a new instance.

#### packageName

Type: `string`

Name of your package.

#### defaults

Type: `object`

Default config.

#### options

Type: `object`

##### globalConfigPath

Type: `boolean`<br>
Default: `false`

Store the config at `$CONFIG/package-name/config.json` instead of the default `$CONFIG/configstore/package-name.json`. This is not recommended as you might end up conflicting with other tools, rendering the "without having to think" idea moot.

##### configPath

Type: `string`<br>
Default: Automatic

**Please don't use this option unless absolutely necessary and you know what you're doing.**

Set the path of the config file. Overrides the `packageName` and `globalConfigPath` options.

### Instance

You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.

### .set(key, value)

Set an item.

### .set(object)

Set multiple items at once.

### .get(key)

Get an item.

### .has(key)

Check if an item exists.

### .delete(key)

Delete an item.

### .clear()

Delete all items.

### .size

Get the item count.

### .path

Get the path to the config file. Can be used to show the user where the config file is located or even better open it for them.

### .all

Get all the config as an object or replace the current config with an object:

```js
config.all = {
	hello: 'world'
};
```


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-configstore?utm_source=npm-configstore&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
