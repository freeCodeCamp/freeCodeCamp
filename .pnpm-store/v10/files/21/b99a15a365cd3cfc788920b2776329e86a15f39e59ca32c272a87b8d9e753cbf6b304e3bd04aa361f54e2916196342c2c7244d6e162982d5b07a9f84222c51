# Strict Event Emitter

A type-safe implementation of `EventEmitter` for browser and Node.js.

## Motivation

Despite event emitters potentially accepting any runtime value, defining a strict event contract is crucial when developing complex event-driven architectures. Unfortunately, the native type definitions for Node's `EventEmitter` annotate event names as `string`, which forbids any stricter type validation.

```js
// index.js
const emitter = new EventEmitter()

// Let's say our application expects a "ping"
// event with the number payload.
emitter.on('ping', (n: number) => {})

// We can, however, emit a different event by mistake.
emitter.emit('pong', 1)

// Or even the correct event with the wrong data.
emitter.emit('ping', 'wait, not a number')
```

The purpose of this library is to provide an `EventEmitter` instance that can accept a generic describing the expected events contract.

```ts
import { Emitter } from 'strict-event-emitter'

// Define a strict events contract where keys
// represent event names and values represent
// the list of arguments expected in ".emit()".
type Events = {
  ping: [number]
}

const emitter = new Emitter<Events>()
emitter.addListener('ping', (n) => {
  // "n" argument type is inferred as "number'.
})

emitter.emit('ping', 10) // OK
emitter.emit('unknown', 10) // TypeError (invalid event name)
emitter.emit('ping', 'wait, not a number') // TypeError (invalid data)
```

This library is also a custom `EventEmitter` implementation, which makes it compatible with other environments, like browsers or React Native.

## Getting started

### Install

```bash
npm install strict-event-emitter
```

### Use

```ts
import { Emitter } from 'strict-event-emitter'

// 1. Define an interface that describes your events.
// Set event names as the keys, and their expected payloads as values.
interface Events {
  connect: [id: string]
  disconnect: [id: string]
}

// 2. Create a strict emitter and pass the previously defined "Events"
// as its first generic argument.
const emitter = new Emitter<Events>()

// 3. Use the "emitter" the same way you'd use the regular "EventEmitter" instance.
emitter.addListener('connect', (id) => {})
emitter.emit('connect', 'abc-123')
```

## License

MIT
