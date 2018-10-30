module.exports = isntWebhook

// Example webhook event request:
// https://developer.github.com/webhooks/#example-delivery
function isntWebhook (request, options) {
  // GitHub sends all events as POST requests
  if (request.method !== 'POST') {
    return true
  }

  // We must match the configured path to allow custom POST routes which include
  // the webhook route. For example if the webhook route is / then it would be
  // impossible to define a `POST /my/custom/app` route as the `POST /`.
  if (request.url.split('?')[0] !== options.path) {
    return true
  }

  return false
}
