# `@octokit/plugins/*`

---

# ⚠️ Plugins are currently experimental. APIs can change at any time.

---

## Usage

```js
const octokit = require('@octokit/rest')()

function myPlugin (octokit) {
  octokit.myMethod = function () {
    // ...
  }
  octokit.hook.before('request', (options) => {
    // change options or cancel request.
    // return promise for async methods
  })
  octokit.hook.after('request', (result, options) => {
    // ...
  })
}

octokit.plugin(myPlugin)

octokit.myMethod()
octokit.request({ url: '/' }) // runs before/after hooks defined above
```
