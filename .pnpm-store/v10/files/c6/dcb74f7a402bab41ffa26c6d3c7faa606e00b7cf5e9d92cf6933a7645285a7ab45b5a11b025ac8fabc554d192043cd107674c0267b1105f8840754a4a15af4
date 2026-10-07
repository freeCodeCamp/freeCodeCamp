/**
 * Here's how requests are handled in Node.js:
 *
 * 1. http.ClientRequest instance calls `agent.addRequest(request, options, cb)`.
 * 2. Agent creates a new socket: `agent.createSocket(options, cb)`.
 * 3. Agent creates a new connection: `agent.createConnection(options, cb)`.
 */
import net from 'node:net'
import http from 'node:http'
import https from 'node:https'
import {
  MockHttpSocket,
  type MockHttpSocketRequestCallback,
  type MockHttpSocketResponseCallback,
} from './MockHttpSocket'

declare module 'node:http' {
  interface Agent {
    options?: http.AgentOptions
    createConnection(options: any, callback: any): net.Socket
  }
}

interface MockAgentOptions {
  customAgent?: http.RequestOptions['agent']
  onRequest: MockHttpSocketRequestCallback
  onResponse: MockHttpSocketResponseCallback
}

export class MockAgent extends http.Agent {
  private customAgent?: http.RequestOptions['agent']
  private onRequest: MockHttpSocketRequestCallback
  private onResponse: MockHttpSocketResponseCallback

  constructor(options: MockAgentOptions) {
    super()
    this.customAgent = options.customAgent
    this.onRequest = options.onRequest
    this.onResponse = options.onResponse
  }

  public createConnection(options: any, callback: any): net.Socket {
    const createConnection =
      this.customAgent instanceof http.Agent
        ? this.customAgent.createConnection
        : super.createConnection

    const createConnectionOptions =
      this.customAgent instanceof http.Agent
        ? {
            ...options,
            ...this.customAgent.options,
          }
        : options

    const socket = new MockHttpSocket({
      connectionOptions: options,
      createConnection: createConnection.bind(
        this.customAgent || this,
        createConnectionOptions,
        callback
      ),
      onRequest: this.onRequest.bind(this),
      onResponse: this.onResponse.bind(this),
    })

    return socket
  }
}

export class MockHttpsAgent extends https.Agent {
  private customAgent?: https.RequestOptions['agent']
  private onRequest: MockHttpSocketRequestCallback
  private onResponse: MockHttpSocketResponseCallback

  constructor(options: MockAgentOptions) {
    super()
    this.customAgent = options.customAgent
    this.onRequest = options.onRequest
    this.onResponse = options.onResponse
  }

  public createConnection(options: any, callback: any): net.Socket {
    const createConnection =
      this.customAgent instanceof http.Agent
        ? this.customAgent.createConnection
        : super.createConnection

    const createConnectionOptions =
      this.customAgent instanceof http.Agent
        ? {
            ...options,
            ...this.customAgent.options,
          }
        : options

    const socket = new MockHttpSocket({
      connectionOptions: options,
      createConnection: createConnection.bind(
        this.customAgent || this,
        createConnectionOptions,
        callback
      ),
      onRequest: this.onRequest.bind(this),
      onResponse: this.onResponse.bind(this),
    })

    return socket
  }
}
