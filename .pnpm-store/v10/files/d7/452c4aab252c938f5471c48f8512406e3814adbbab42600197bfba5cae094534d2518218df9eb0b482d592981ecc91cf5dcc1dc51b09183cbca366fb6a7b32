export default function format (url) {
  let result = ''

  result += url.protocol || ''
  result += url.slashes ? '//' : ''
  result += url.auth ? url.auth + '@' : ''

  if (url.hostname && url.hostname.indexOf(':') !== -1) {
    // ipv6 address
    result += '[' + url.hostname + ']'
  } else {
    result += url.hostname || ''
  }

  result += url.port ? ':' + url.port : ''
  result += url.pathname || ''
  result += url.search || ''
  result += url.hash || ''

  return result
};
