import { Agent } from 'http'
import { RequestOptions, Agent as HttpsAgent } from 'https'
import { Logger } from '@open-draft/logger'

const logger = new Logger('utils getUrlByRequestOptions')

// Request instance constructed by the "request" library
// has a "self" property that has a "uri" field. This is
// reproducible by performing a "XMLHttpRequest" request in JSDOM.
export interface RequestSelf {
  uri?: URL
}

export type ResolvedRequestOptions = RequestOptions & RequestSelf

export const DEFAULT_PATH = '/'
const DEFAULT_PROTOCOL = 'http:'
const DEFAULT_HOSTNAME = 'localhost'
const SSL_PORT = 443

function getAgent(
  options: ResolvedRequestOptions
): Agent | HttpsAgent | undefined {
  return options.agent instanceof Agent ? options.agent : undefined
}

function getProtocolByRequestOptions(options: ResolvedRequestOptions): string {
  if (options.protocol) {
    return options.protocol
  }

  const agent = getAgent(options)
  const agentProtocol = (agent as RequestOptions)?.protocol

  if (agentProtocol) {
    return agentProtocol
  }

  const port = getPortByRequestOptions(options)
  const isSecureRequest = options.cert || port === SSL_PORT

  return isSecureRequest ? 'https:' : options.uri?.protocol || DEFAULT_PROTOCOL
}

function getPortByRequestOptions(
  options: ResolvedRequestOptions
): number | undefined {
  // Use the explicitly provided port.
  if (options.port) {
    return Number(options.port)
  }

  // Otherwise, try to resolve port from the agent.
  const agent = getAgent(options)

  if ((agent as HttpsAgent)?.options.port) {
    return Number((agent as HttpsAgent).options.port)
  }

  if ((agent as RequestOptions)?.defaultPort) {
    return Number((agent as RequestOptions).defaultPort)
  }

  // Lastly, return undefined indicating that the port
  // must inferred from the protocol. Do not infer it here.
  return undefined
}

interface RequestAuth {
  username: string
  password: string
}

function getAuthByRequestOptions(
  options: ResolvedRequestOptions
): RequestAuth | undefined {
  if (options.auth) {
    const [username, password] = options.auth.split(':')
    return { username, password }
  }
}

/**
 * Returns true if host looks like an IPv6 address without surrounding brackets
 * It assumes any host containing `:` is definitely not IPv4 and probably IPv6,
 * but note that this could include invalid IPv6 addresses as well.
 */
function isRawIPv6Address(host: string): boolean {
  return host.includes(':') && !host.startsWith('[') && !host.endsWith(']')
}

function getHostname(options: ResolvedRequestOptions): string | undefined {
  let host = options.hostname || options.host

  if (host) {
    if (isRawIPv6Address(host)) {
       host = `[${host}]`
    }

    // Check the presence of the port, and if it's present,
    // remove it from the host, returning a hostname.
    return new URL(`http://${host}`).hostname
  }

  return DEFAULT_HOSTNAME
}

/**
 * Creates a `URL` instance from a given `RequestOptions` object.
 */
export function getUrlByRequestOptions(options: ResolvedRequestOptions): URL {
  logger.info('request options', options)

  if (options.uri) {
    logger.info(
      'constructing url from explicitly provided "options.uri": %s',
      options.uri
    )
    return new URL(options.uri.href)
  }

  logger.info('figuring out url from request options...')

  const protocol = getProtocolByRequestOptions(options)
  logger.info('protocol', protocol)

  const port = getPortByRequestOptions(options)
  logger.info('port', port)

  const hostname = getHostname(options)
  logger.info('hostname', hostname)

  const path = options.path || DEFAULT_PATH
  logger.info('path', path)

  const credentials = getAuthByRequestOptions(options)
  logger.info('credentials', credentials)

  const authString = credentials
    ? `${credentials.username}:${credentials.password}@`
    : ''
  logger.info('auth string:', authString)

  const portString = typeof port !== 'undefined' ? `:${port}` : ''
  const url = new URL(`${protocol}//${hostname}${portString}${path}`)
  url.username = credentials?.username || ''
  url.password = credentials?.password || ''

  logger.info('created url:', url)

  return url
}
