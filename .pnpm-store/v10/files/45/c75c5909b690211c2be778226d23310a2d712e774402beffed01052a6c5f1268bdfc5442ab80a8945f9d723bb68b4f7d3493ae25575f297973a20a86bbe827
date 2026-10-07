# xdg-basedir [![Build Status](https://travis-ci.org/sindresorhus/xdg-basedir.svg?branch=master)](https://travis-ci.org/sindresorhus/xdg-basedir)

> Get [XDG Base Directory](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html) paths


## Install

```
$ npm install xdg-basedir
```


## Usage

```js
const xdgBasedir = require('xdg-basedir');

xdgBasedir.data;
//=> '/home/sindresorhus/.local/share'

xdgBasedir.config;
//=> '/home/sindresorhus/.config'

xdgBasedir.dataDirs
//=> ['/home/sindresorhus/.local/share', '/usr/local/share/', '/usr/share/']
```


## API

The properties `.data`, `.config`, `.cache`, `.runtime` will return `null` in the uncommon case that both the XDG environment variable is not set and the users home directory can't be found. You need to handle this case. A common solution is to [fall back to a temp directory](https://github.com/yeoman/configstore/blob/b82690fc401318ad18dcd7d151a0003a4898a314/index.js#L15).

### .data

Directory for user-specific data files.

### .config

Directory for user-specific configuration files.

### .cache

Directory for user-specific non-essential data files.

### .runtime

Directory for user-specific non-essential runtime files and other file objects (such as sockets, named pipes, etc).

### .dataDirs

Preference-ordered array of base directories to search for data files in addition to `.data`.

### .configDirs

Preference-ordered array of base directories to search for configuration files in addition to `.config`.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
