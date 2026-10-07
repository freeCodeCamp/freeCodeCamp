'use strict'

// The swagger standard does not accept the url param with ':'
// so '/user/:id' is not valid.
// This function converts the url in a swagger compliant url string
// => '/user/{id}'
// custom verbs at the end of a url are okay => /user::watch but should be rendered as /user:watch in swagger
const COLON = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'
function formatParamUrl (str) {
  let i, char
  let state = 'skip'
  let path = ''
  let param = ''
  let level = 0
  // count for regex if no param exist
  let regexp = 0
  for (i = 0; i < str.length; i++) {
    char = str[i]
    switch (state) {
      case 'colon': {
        // we only accept a-zA-Z0-9_ in param
        if (COLON.indexOf(char) !== -1) {
          param += char
        } else if (char === '(') {
          state = 'regexp'
          level++
        } else {
          // end
          state = 'skip'
          path += '{' + param + '}'
          path += char
          param = ''
        }
        break
      }
      case 'regexp': {
        if (char === '(') {
          level++
        } else if (char === ')') {
          level--
        }
        // we end if the level reach zero
        if (level === 0) {
          state = 'skip'
          if (param === '') {
            regexp++
            param = 'regexp' + String(regexp)
          }
          path += '{' + param + '}'
          param = ''
        }
        break
      }
      default: {
        // we check if we need to change state
        if (char === ':' && str[i + 1] === ':') {
          // double colon -> single colon
          path += char
          // skip one more
          i++
        } else if (char === ':') {
          // single colon -> state colon
          state = 'colon'
        } else if (char === '(') {
          state = 'regexp'
          level++
        } else if (char === '*') {
          // * -> {*}
          // should be exist once only
          path += '{*}'
        } else {
          path += char
        }
      }
    }
  }
  // clean up
  if (state === 'colon' && param !== '') {
    path += '{' + param + '}'
  }
  return path
}

module.exports = {
  formatParamUrl
}
