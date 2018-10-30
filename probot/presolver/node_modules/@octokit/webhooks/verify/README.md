# verify

The `verify` method can be used as a standalone method.

```js
const verify = require('@octokit/webhooks/verify')
const matchesSignature = verify(secret, eventData, signature)
// true or false
```

<table width="100%">
  <tr>
    <td>
      <code>
        options.secret
      </code>
      <em>(String)</em>
    </td>
    <td>
      <strong>Required.</strong>
      Secret as configured in GitHub Settings.
    </td>
  </tr>
  <tr>
    <td>
      <code>
        eventPayload
      </code>
      <em>
        (Object)
      </em>
    </td>
    <td>
      <strong>Required.</strong>
      Webhook request payload as received from GitHub
    </td>
  </tr>
  <tr>
    <td>
      <code>
        signature
      </code>
      <em>
        (String)
      </em>
    </td>
    <td>
      <strong>Required.</strong>
      Signature string as calculated by <code><a href="../sign">sign()</a></code>.
    </td>
  </tr>
</table>

Returns `true` or `false`. Throws error if `secret, ``eventPayload` or `signature` not passed.

Back to [@octokit/webhooks README](..).
