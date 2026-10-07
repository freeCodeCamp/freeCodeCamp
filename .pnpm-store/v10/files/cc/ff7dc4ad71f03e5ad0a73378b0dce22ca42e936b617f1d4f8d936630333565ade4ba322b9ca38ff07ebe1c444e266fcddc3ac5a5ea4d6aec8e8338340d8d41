# shebang-regex [![Build Status](https://travis-ci.org/sindresorhus/shebang-regex.svg?branch=master)](https://travis-ci.org/sindresorhus/shebang-regex)

> Regular expression for matching a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) line


## Install

```
$ npm install shebang-regex
```


## Usage

```js
const shebangRegex = require('shebang-regex');

const string = '#!/usr/bin/env node\nconsole.log("unicorns");';

shebangRegex.test(string);
//=> true

shebangRegex.exec(string)[0];
//=> '#!/usr/bin/env node'

shebangRegex.exec(string)[1];
//=> '/usr/bin/env node'
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
