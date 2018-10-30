[back to `@octokit/rest`]('../..')

# `@octokit/rest/request`

> Turn REST API endpoint options into generic request options

---

# ⚠️ This is not a public API at this point and can change at any time

---

## Usage

```js
const octokitRestRequest = require('@octokit/rest/lib/request')

octokitRestRequest({
  // request options
  method: 'GET',
  url: '/orgs/:org/repos',
  // parameters
  org: 'octokit',
  type: 'private'
}) // returns promise
```

Sends a `GET` request to https://api.github.com/orgs/octokit/repos?type=private&per_page=20&page=2
with `user-agent` and `accept` headers set.

It accepts the same options and has the same defaults as [`@octokit/rest/endpoint`](../endpoint)
