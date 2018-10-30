# rest.js

> GitHub REST API client for JavaScript

[![@latest](https://img.shields.io/npm/v/@octokit/rest.svg)](https://www.npmjs.com/package/@octokit/rest)
[![Build Status](https://travis-ci.org/octokit/rest.js.svg?branch=master)](https://travis-ci.org/octokit/rest.js)
[![Coverage Status](https://coveralls.io/repos/github/octokit/rest.js/badge.svg)](https://coveralls.io/github/octokit/rest.js)
[![Greenkeeper](https://badges.greenkeeper.io/octokit/rest.js.svg)](https://greenkeeper.io/)

## Usage

### Node

Install with `npm install @octokit/rest`.

```js
const octokit = require('@octokit/rest')()

// Compare: https://developer.github.com/v3/repos/#list-organization-repositories
octokit.repos.getForOrg({
  org: 'octokit',
  type: 'public'
}).then(({ data, headers, status }) => {
  // handle data
})
```

### Browser

1. Download `octokit-rest.min.js` from the latest release: https://github.com/octokit/rest.js/releases

2. Load it as script into your web application:

   ```html
   <script src="octokit-rest.min.js"></script>
   ```

3. Initialize `octokit`

   ```js
   const octokit = new Octokit()

   // Compare: https://developer.github.com/v3/repos/#list-organization-repositories
   octokit.repos.getForOrg({
     org: 'octokit',
     type: 'public'
   }).then(({data, headers, status}) => {
     // handle data
   })
   ```

### Client options

All available client options with default values

<!-- HEADS UP: when changing the options for the constructor, make sure to also
     update the type definition templates in scripts/templates/* -->
```js
const octokit = require('@octokit/rest')({
  timeout: 0, // 0 means no request timeout
  headers: {
    accept: 'application/vnd.github.v3+json',
    'user-agent': 'octokit/rest.js v1.2.3' // v1.2.3 will be current version
  },

  // custom GitHub Enterprise URL
  baseUrl: 'https://api.github.com',

  // Node only: advanced request options can be passed as http(s) agent
  agent: undefined
})
```

`@octokit/rest` API docs: https://octokit.github.io/rest.js/  
GitHub v3 REST API docs: https://developer.github.com/v3/

## API Previews

To take advantage of [GitHub’s API Previews](https://developer.github.com/v3/previews/),
pass a custom `accept` header, which you can do with any endpoint method documented
in the [API docs](https://octokit.github.io/rest.js/), e.g.

```js
const { data: { topics } } = octokit.repos.get({
  owner: 'octokit',
  repo: 'rest.js',
  headers: {
    accept: 'application/vnd.github.mercy-preview+json'
  }
})
```

Multiple preview headers can be combined by separating them with commas

```js
const { data: { topics, codeOfConduct } } = octokit.repos.get({
  owner: 'octokit',
  repo: 'rest.js',
  headers: {
    accept: 'application/vnd.github.mercy-preview+json,application/vnd.github.scarlet-witch-preview+json'
  }
})
```

## Authentication

Most GitHub API calls don't require authentication. Rules of thumb:

1. If you can see the information by visiting the site without being logged in, you don't have to be authenticated to retrieve the same information through the API.
2. If you want to change data, you have to be authenticated.

```javascript
// basic
octokit.authenticate({
  type: 'basic',
  username: 'yourusername',
  password: 'password'
})

// oauth
octokit.authenticate({
  type: 'oauth',
  token: 'secrettoken123'
})

// oauth key/secret (to get a token)
octokit.authenticate({
  type: 'oauth',
  key: 'client_id',
  secret: 'client_secret'
})

// token (https://github.com/settings/tokens)
octokit.authenticate({
  type: 'token',
  token: 'secrettoken123'
})

// GitHub app
octokit.authenticate({
  type: 'app',
  token: 'secrettoken123'
})
```

Note: `authenticate` is synchronous because it only sets the credentials
for the following requests.

## Pagination

There are a few pagination-related methods:

- `hasNextPage(response)`
- `hasPreviousPage(response)`
- `hasFirstPage(response)`
- `hasLastPage(response)`
- `getNextPage(response)`
- `getPreviousPage(response)`
- `getFirstPage(response)`
- `getLastPage(response)`

Usage

```js
async function paginate (method) {
  let response = await method({ per_page: 100 })
  let { data } = response
  while (octokit.hasNextPage(response)) {
    response = await octokit.getNextPage(response)
    data = data.concat(response.data)
  }
  return data
}

paginate(octokit.repos.getAll)
  .then(data => {
    // handle all results
  })
```

## Debug

Set `DEBUG=octokit:rest*` for additional debug logs.

## Tests

Before running any tests you have to start the [fixtures server](https://github.com/octokit/fixtures-server)

```
$ npm run start-fixtures-server
```

In a second terminal, run the tests

```bash
$ npm test
```

Or run a specific test

```bash
$ ./node_modules/.bin/mocha test/scenarios/get-repository-test.js
```

Run browser tests

```bash
$ npm run test:browser
```

**Note**: In order to run the same [scenario tests](test/scenarios) in both Node
and browser, we simulate the Cypress environment in Node, see [test/mocha-node-setup.js](test/mocha-node-setup.js).

The examples are run as part of the tests. You can set an `EXAMPLES_GITHUB_TOKEN` environment
variable (or set it in a `.env` file) to avoid running against GitHub's rate limit.

## Contributing

We would love you to contribute to `@octokit/rest`, pull requests are very welcomed!
Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## Credits

`@octokit/rest` was originally created as [`node-github`](https://www.npmjs.com/package/github)
in 2012 by Mike de Boer from Cloud9 IDE, Inc.
It was adopted and renamed by GitHub in 2017

## LICENSE

[MIT](LICENSE)
