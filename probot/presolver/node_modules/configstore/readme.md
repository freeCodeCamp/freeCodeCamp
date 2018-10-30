# configstore [![Build Status](https://travis-ci.org/yeoman/configstore.svg?branch=master)](https://travis-ci.org/yeoman/configstore)

> Easily load and persist config without having to think about where and how

Config is stored in a JSON file located in `$XDG_CONFIG_HOME` or `~/.config`.<br>
Example: `~/.config/configstore/some-id.json`

*If you need this for Electron, check out [`electron-store`](https://github.com/sindresorhus/electron-store) instead.*


## Usage

```js
const Configstore = require('configstore');
const pkg = require('./package.json');

// create a Configstore instance with an unique ID e.g.
// Package name and optionally some default values
const conf = new Configstore(pkg.name, {foo: 'bar'});

console.log(conf.get('foo'));
//=> 'bar'

conf.set('awesome', true);
console.log(conf.get('awesome'));
//=> true

// Use dot-notation to access nested properties
conf.set('bar.baz', true);
console.log(conf.get('bar'));
//=> {baz: true}

conf.delete('awesome');
console.log(conf.get('awesome'));
//=> undefined
```


## API

### Configstore(packageName, [defaults], [options])

Returns a new instance.

#### packageName

Type: `string`

Name of your package.

#### defaults

Type: `Object`

Default config.

#### options

##### globalConfigPath

Type: `boolean`<br>
Default: `false`

Store the config at `$CONFIG/package-name/config.json` instead of the default `$CONFIG/configstore/package-name.json`. This is not recommended as you might end up conflicting with other tools, rendering the "without having to think" idea moot.

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
conf.all = {
	hello: 'world'
};
```


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)<br>
Copyright Google
