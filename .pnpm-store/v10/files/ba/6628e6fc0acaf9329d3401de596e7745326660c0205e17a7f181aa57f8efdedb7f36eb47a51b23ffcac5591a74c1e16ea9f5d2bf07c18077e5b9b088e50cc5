import io from "socket.io-client"
import { reportError, clearError } from "./error-overlay-handler"
let socket = null

export default function socketIo() {
  if (process.env.NODE_ENV !== `production`) {
    if (!socket) {
      // Try to initialize web socket if we didn't do it already
      try {
        // force websocket as transport
        socket = io({
          transports: [process.env.GATSBY_SOCKET_IO_DEFAULT_TRANSPORT],
        })

        // when websocket fails, we'll try polling
        socket.on(`reconnect_attempt`, () => {
          socket.io.opts.transports = [`polling`, `websocket`]
        })

        socket.on(`message`, msg => {
          if (msg.type === `overlayError`) {
            if (msg.payload.message) {
              reportError(msg.payload.id, msg.payload.message)
            } else {
              clearError(msg.payload.id)
            }
            ___emitter.emit(msg.type, msg.payload)
          }
        })

        // Prevents certain browsers spamming XHR 'ERR_CONNECTION_REFUSED'
        // errors within the console, such as when exiting the develop process.
        socket.on(`disconnect`, () => {
          console.warn(`[socket.io] Disconnected from dev server.`)
        })
      } catch (err) {
        console.error(`Could not connect to socket.io on dev server.`)
      }
    }
    return socket
  } else {
    return null
  }
}

// Tell websocket-manager.js the new path we're on.
// This will help the backend prioritize queries for this
// path.
function registerPath(path) {
  socket.emit(`registerPath`, path)
}

// Unregister the former path
function unregisterPath(path) {
  socket.emit(`unregisterPath`, path)
}

export { registerPath, unregisterPath }
