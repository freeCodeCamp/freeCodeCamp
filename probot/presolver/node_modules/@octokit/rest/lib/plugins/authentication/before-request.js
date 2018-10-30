module.exports = authenticationBeforeRequest

const btoa = require('btoa-lite')
const uniq = require('lodash/uniq')

const deprecate = require('../../deprecate')

function authenticationBeforeRequest (state, options) {
  if (!state.auth.type) {
    return
  }

  if (state.auth.type === 'basic') {
    const hash = btoa(`${state.auth.username}:${state.auth.password}`)
    options.headers['authorization'] = `Basic ${hash}`
    return
  }

  if (state.auth.type === 'token') {
    options.headers['authorization'] = `token ${state.auth.token}`
    return
  }

  // deprecate state.auth.type === 'integration', rename to 'app'
  if (state.auth.type === 'integration') {
    deprecate('authentication type "integration" is deprecated. Use "app" instead.')
    state.auth.type = 'app'
  }

  if (state.auth.type === 'app') {
    options.headers['authorization'] = `Bearer ${state.auth.token}`
    const acceptHeaders = options.headers['accept'].split(',')
      .concat('application/vnd.github.machine-man-preview+json')
    options.headers['accept'] = uniq(acceptHeaders).filter(Boolean).join(',')
    return
  }

  options.url += options.url.indexOf('?') === -1 ? '?' : '&'

  if (state.auth.token) {
    options.url += `access_token=${encodeURIComponent(state.auth.token)}`
    return
  }

  const key = encodeURIComponent(state.auth.key)
  const secret = encodeURIComponent(state.auth.secret)
  options.url += `client_id=${key}&client_secret=${secret}`
}
