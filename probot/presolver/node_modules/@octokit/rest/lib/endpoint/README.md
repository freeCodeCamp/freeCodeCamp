[back to `@octokit/rest`]('../..')

# `@octokit/rest/endpoint`

> Turn REST API endpoint options into generic request options

---

# ⚠️ This is not a public API at this point and can change at any time

---

## Usage

```js
const octokitRestEndpoint = require('@octokit/rest/lib/endpoint')

const options = octokitRestEndpoint({
  // request options
  method: 'GET',
  url: '/orgs/:org/repos',
  // parameters
  org: 'octokit',
  type: 'private'
})
```

`options` would now look something like

```js
{
  method: 'GET',
  url: 'https://api.github.com/orgs/octokit/repos?type=private',
  headers: {
    'user-agent': 'myApp v1.2.3',
    accept: 'application/vnd.github.v3+json'
  }
}
```

You can pass them to your request library of preference.

## Options

### `method`

Any supported [http verb](https://developer.github.com/v3/#http-verbs), case insensitive.

### `url`

A path or full URL which may contain `:variable` or `{variable}` placeholders,
e.g. `/orgs/:org/repos`. The `url` is parsed using

## Defaults

| Name                   | Value                                                                               |
|------------------------|-------------------------------------------------------------------------------------|
| **method**             | `'get'`                                                                             |
| **baseUrl**            | `'https://api.github.com'`                                                          |
| **headers.accept**     | `'application/vnd.github.v3+json'`                                                  |
| **headers.user-agent** | `'octokit/rest.js v1.2.3'` (1.2.3 being the current `@octokit/rest` version number) plus what ever [universal-user-agent](https://www.npmjs.com/package/universal-user-agent) returns. If you pass a custom value such as `myApp v1.2.3` then it will be used as prefix |

_To be done_: change defaults with

```js
const octokitRestEndpoint = require('@octokit/rest/lib/endpoint').defaults({
  baseUrl: 'http://my-custom-host/api/v3'
})
```
