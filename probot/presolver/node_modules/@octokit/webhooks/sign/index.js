module.exports = sign

const crypto = require('crypto')

function sign (secret, payload) {
  if (!secret || !payload) {
    throw new TypeError('secret & payload required')
  }

  payload = typeof payload === 'string' ? payload : JSON.stringify(payload)
  return 'sha1=' + crypto.createHmac('sha1', secret).update(payload).digest('hex')
}
