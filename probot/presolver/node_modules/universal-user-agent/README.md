# universal-user-agent

> Get a user agent string in both browser and node

[![@latest](https://img.shields.io/npm/v/universal-user-agent.svg)](https://www.npmjs.com/package/universal-user-agent)
[![Build Status](https://travis-ci.com/gr2m/universal-user-agent.svg?branch=master)](https://travis-ci.com/gr2m/universal-user-agent)
[![Coverage Status](https://coveralls.io/repos/github/gr2m/universal-user-agent/badge.svg)](https://coveralls.io/github/gr2m/universal-user-agent)
[![Greenkeeper](https://badges.greenkeeper.io/gr2m/universal-user-agent.svg)](https://greenkeeper.io/)

```js
const getUserAgent = require('universal-user-agent')
const userAgent = getUserAgent()

// userAgent will look like this
// in browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:61.0) Gecko/20100101 Firefox/61.0"
// in node: Node.js/v8.9.4 (macOS High Sierra; x64)
```

## Credits

The Node implementation was originally inspired by [default-user-agent](https://www.npmjs.com/package/default-user-agent).

## License

[ISC](LICENSE.md)
