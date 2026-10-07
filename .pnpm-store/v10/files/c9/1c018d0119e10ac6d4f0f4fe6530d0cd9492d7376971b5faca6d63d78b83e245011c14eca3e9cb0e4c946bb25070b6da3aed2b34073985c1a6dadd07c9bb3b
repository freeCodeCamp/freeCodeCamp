# better-opn

> A better opn. Reuse the same tab on Chrome for 👨‍💻. Inspire by [create-react-app](https://github.com/facebook/create-react-app)

## Install

> `$ yarn add better-opn`

> `$ npm install better-opn`


## Usage

If you wish to overwrite the default browser, override `BROWSER` environment variable to your desire browser name (name is platform dependent).

```js
const opn = require('better-opn');

opn('http://localhost:3000');
```

### Reuse tab by match host

In case your app can navigate to another pathnames and still want to reuse opened tab, set environment variable `OPEN_MATCH_HOST_ONLY=true` can tell this program to find reusable tab by only match the host part of your URL.

```js
process.env.OPEN_MATCH_HOST_ONLY = 'true';

opn('http://localhost:3000/foo/bar'); // This will reuse any tab with URL starting with http://localhost:3000/
```

## Author

- [Michael Lin](https://michaellin.me)
