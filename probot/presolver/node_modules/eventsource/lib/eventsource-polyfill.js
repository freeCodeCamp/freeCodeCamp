var EventSource = require('./eventsource')

if (typeof window === 'object') {
  window.EventSourcePolyfill = EventSource
  if (!window.EventSource) window.EventSource = EventSource
  module.exports = window.EventSource
} else {
  module.exports = EventSource
}
