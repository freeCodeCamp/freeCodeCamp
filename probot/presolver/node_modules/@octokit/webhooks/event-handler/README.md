# event-handler

If you implement the route to receive webhook events from GitHub yourself then you can use the `event-handler` as a standalone module

## Example

```js
const EventHandler = require('@octokit/webhooks/event-handler')
const eventHandler = new EventHandler({
  async transform (event) {
    // optionally transform passed event before handlers are called
    return event
  }
})
eventHandler.on('installation', asyncInstallationHook)

// put this inside your webhooks route handler
eventHandler.receive({
  id: request.headers['x-github-delivery'],
  name: request.headers['x-github-event'],
  payload: request.body
}).catch(handleErrorsFromHooks)
```

## 🚨 Verify events

If you receive events through a publicly accessible URL, make sure to verify that the event request is coming from GitHub:

```js
const verify = require('@octokit/webhooks/verify')
const secret = 'mysecret'

if (!verify(secret, request.payload, request.headers['x-github-signature'])) {
  throw new Error('Signature does not match event payload & secret')
}
```

## API

The `event-handler` API implements [`.receive()`](../#webhooksreceive), [`.on()`](../#webhookson) and [`.removeListener()`](../#webhooksremovelistener).

Back to [@octokit/webhooks README](..).
