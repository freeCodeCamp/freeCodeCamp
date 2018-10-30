module.exports = getMissingHeaders

const WEBHOOK_HEADERS = [
  'x-github-event',
  'x-hub-signature',
  'x-github-delivery'
]

// https://developer.github.com/webhooks/#delivery-headers
function getMissingHeaders (request) {
  return WEBHOOK_HEADERS.filter(header => !(header in request.headers))
}
