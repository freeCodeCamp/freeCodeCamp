# saslprep

_Note: This is a fork of the original [`saslprep`](https://www.npmjs.com/package/saslprep) npm package
and provides equivalent functionality._

Stringprep Profile for User Names and Passwords, [rfc4013](https://tools.ietf.org/html/rfc4013)

### Usage

```js
const saslprep = require('@mongodb-js/saslprep');

saslprep('password\u00AD'); // password
saslprep('password\u0007'); // Error: prohibited character
```

### API

##### `saslprep(input: String, opts: Options): String`

Normalize user name or password.

##### `Options.allowUnassigned: bool`

A special behavior for unassigned code points, see https://tools.ietf.org/html/rfc4013#section-2.5. Disabled by default.

## License

MIT, 2017-2019 (c) Dmitriy Tsvettsikh
