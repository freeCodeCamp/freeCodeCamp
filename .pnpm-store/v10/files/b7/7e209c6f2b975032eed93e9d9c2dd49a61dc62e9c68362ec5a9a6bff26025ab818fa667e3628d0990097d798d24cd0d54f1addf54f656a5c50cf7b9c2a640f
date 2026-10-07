export function baseUrlFromConnectionOptions(options: any): URL {
  if ('href' in options) {
    return new URL(options.href)
  }

  const protocol = options.port === 443 ? 'https:' : 'http:'
  const host = options.host

  const url = new URL(`${protocol}//${host}`)

  if (options.port) {
    url.port = options.port.toString()
  }

  if (options.path) {
    url.pathname = options.path
  }

  if (options.auth) {
    const [username, password] = options.auth.split(':')
    url.username = username
    url.password = password
  }

  return url
}
