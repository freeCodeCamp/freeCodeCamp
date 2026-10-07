# Rettime

A type-safe marriage of `EventTarget` and `EventEmitter`.

## Features

- 🎯 **Event-based**. Control event flow: prevent defaults, stop propagation, cancel events. Something your common `Emitter` can't do.
- 🗼 **Emitter-inspired**. Emit event types and data, don't bother with creating `Event` instances. A bit less verbosity than a common `EventTarget`.
- ⛑️ **Type-safe**. Describe the exact event types and payloads accepted by the emitter. Never emit or listen to unknown events.
- 🧰 **Convenience methods** like `.emitAsPromise()` and `.emitAsGenerator()` to build more complex event-driven systems.
- 🐙 **Tiny**. 700B gzipped.

> [!WARNING]
> This library **does not** have performance as the end goal. In fact, since it operates on events and supports event cancellation, it will likely be _slower_ than the emitters that don't do that.

## Motivation

### Why not just `EventTarget`?

The `EventTarget` API is fantastic. It works in the browser and in Node.js, dispatches actual events, supports cancellation, etc. At the same time, it has a number of flaws that prevent me from using it for anything serious:

- Complete lack of type safety. The `type` in `new Event(type)` is not a type argument in `lib.dom.ts`. It's always `string`. It means it's impossible to narrow it down to a literal string type to achieve type safety.
- No concept of `.prependListener()`. There is no way to add a listener to run _first_, before other existing listeners.
- No concept of `.removeAllListeners()`. You have to remove each individual listener by hand. Good if you own the listeners, not so good if you don't.
- No concept of `.listenerCount()` or knowing if a dispatched event had any listeners (the `boolean` returned from `.dispatch()` indicates if the event has been prevented, not whether it had any listeners).
- (Opinionated) Verbose. I prefer `.on()` over `.addEventListener()`. I prefer passing data than constructing `new MessageEvent()` all the time.

### Why not just `Emitter` (in Node.js)?

The `Emitter` API in Node.js is great, but it has its own downsides:

- Node.js-specific. `Emitter` does not work in the browser.
- Lacks any type safety.
- No concept of `.stopPropagation()` and `.stopImmediatePropagation()`. Those methods are defined but literally do nothing.

## Install

```sh
npm install rettime
```

## API

### `TypedEvent`

`TypedEvent` is a subset of `MessageEvent` that allows for type-safe event declaration.

```ts
new TypedEvent<DataType, ReturnType, EventType>(type: EventType, { data: DataType })
```

> The `data` argument depends on the `DataType` of your event. Use `void` if the event must not send any data.


#### Reserved events

_Reserved events_ refer to event types reserved for specific behaviors by the library.

#### `*`

Using a wildcard (`*`) event type allows you to listen to _any_ events emitted on the emitter. This is similar to methods like `.onAny()` you might find in the wild.

```ts
const emitter = new Emitter<{
  greeting: TypedEvent<string>()
  cart: TypedEvent<CartItem[]>()
}>()

emitter
  .on('*', (event) => {
    event.type // "greeting" | "cart"
    console.log(`Caught: ${event.type}, ${event.data}`)
  })
  .on('greeting', (event) => {
    console.log(`Hello, ${event.data}!`)
  })

emitter.emit('greeting', 'John')
// "Caught: greeting, John"
// "Hello, John!"
````

Wildcard listeners are supported by all subscription methods, like `.on()`, `.once()`, `.earlyOn()`, and .`earlyOnce()`, are type-safe and fully support the listener order sensitivity.

#### Custom events

You can implement custom events by extending the default `TypedEvent` class and forwarding the type arguments that it expects:

```ts
class GreetingEvent<
  DataType = void,
  ReturnType = any,
  EventType extends string = string,
> extends TypedEvent<DataType, ReturnType, EventType> {
  public id: string
}

const emitter = new Emitter<{ greeting: GreetingEvent<'john'> }>()

emitter.on('greeting', (event) => {
  console.log(event instanceof GreetingEvent) // true
  console.log(event instanceof TypedEvent) // true
  console.log(event instanceof MessageEvent) // true

  console.log(event.type) // "greeting"
  console.log(event.data) // "john"
  console.log(event.id) // string
})
```

### `Emitter`

```ts
new Emitter<EventMap>()
```

The `EventMap` type argument allows you describe the supported event types, their payload, and the return type of their event listeners.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ hello: TypedEvent<string, number> }>()

emitter.on('hello', () => 1) // ✅
emitter.on('hello', () => 'oops') // ❌ string not assignable to type number

emitter.emit(new TypedEvent('hello', { data: 'John' })) // ✅
emitter.emit(new TypedEvent('hello', { data: 123 })) // ❌ number is not assignable to type string
emitter.emit(new TypedEvent('hello')) // ❌ missing data argument of type string

emitter.emit(new TypedEvent('unknown')) // ❌ "unknown" does not satisfy "hello"
```

#### Describing events

The `Emitter` class requires a type argument that describes the event map. If you do not provide that argument, adding listeners or emitting events will produce a type error as your emitter doesn't have an event map defined.

An event map is an object of the following shape:

```ts
{
  [type: string]: TypedEvent
}
```

The `type` is a string indicating the event type (e.g. `greet` or `ping`). The array it accepts has two members: `args` describes the arguments accepted by this event (can also be `never` for events without arguments) and `returnValue` is an optional type for the data returned from the listeners for this event.

Let's say you want to define a `greet` event that expects a user name as data and returns a greeting string:

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ greet: TypedEvent<string, string> }>()

emitter.on('greet', (event) => {
  console.log(`Hello, ${event.data}!`)
})
emitter.emit(new TypedEvent('greet', { data: 'John' }))
// "Hello, John!"
```

Here's another example where we define a `ping` event that has no arguments but returns a timestamp for each ping:

```ts
const emitter = new Emitter<{ ping: TypedEvent<void, number> }>()

emitter.on('ping', () => Date.now())

const results = await emitter.emitAsPromise(new TypedEvent('ping'))
// [1745658424732]
```

> [!IMPORTANT]
> When providing type arguments to your `TypedEvents`, you **do not** need to provide the `EventType` argument—it will be inferred from your event map.

### `.on(type, listener[, options])`

Adds an event listener for the given event type.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ hello: TypedEvent<string> }>()

emitter.on('hello', (event) => {
  // `event` is a `TypedEvent` instance derived from `MessageEvent`.
  console.log(event.data)
})
```

All methods that add new listeners return an `AbortController` instance bound to that listener. You can use that controller to cancel the event handling, including mid-air:

```ts
const controller = emitter.on('hello', listener)
controller.abort(reason)
```

All methods that add new listeners also accept an optional `options` argument. You can use it to configure event handling behavior. For example, you can provide an existing `AbortController` signal as the `options.signal` value so the attached listener abides by your controller:

```ts
emitter.on('hello', listener, { signal: controller.signal })
```

> Both the public controller of the event and your custom controller are combined using `AbortSignal.any()`.

### `.once(type, listener[, options])`

Adds a one-time event listener for the given event type.

### `.earlyOn(type, listener[, options])`

Prepends a listener for the given event type.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ hello: TypedEvent<void, number> }>()

emitter.on('hello', () => 1)
emitter.earlyOn('hello', () => 2)

const results = await emitter.emitAsPromise(new TypedEvent('hello'))
// [2, 1]
```

### `.earlyOnce(type, listener[, options])`

Prepends a one-time listener for the given event type.

### `.emit(type[, data])`

Emits the given event with optional data.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ hello: TypedEvent<string> }>()

emitter.on('hello', (event) => console.log(event.data))

emitter.emit(new TypedEvent('hello', 'John'))
```

### `.emitAsPromise(type[, data])`

Emits the given event and returns a Promise that resolves with the returned data of all matching event listeners, or rejects whenever any of the matching event listeners throws an error.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ hello: TypedEvent<number, Promise<number>> }>()

emitter.on('hello', async (event) => {
  await sleep(100)
  return event.data + 1
})
emitter.on('hello', async (event) => event.data + 2)

const values = await emitter.emitAsPromise(new TypedEvent('hello', { data: 1 }))
// [2, 3]
```

> Unlike `.emit()`, the `.emitAsPromise()` method _awaits asynchronous listeners_.

### `.emitAsGenerator(type[, data])`

Emits the given event and returns a generator function that exhausts all matching event listeners. Using a generator gives you granular control over what listeners are called.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ hello: TypedEvent<string, number> }>()

emitter.on('hello', () => 1)
emitter.on('hello', () => 2)

for (const listenerResult of emitter.emitAsGenerator(
  new TypedEvent('hello', { data: 'John' }),
)) {
  // Stop event emission if a listener returns a particular value.
  if (listenerResult === 1) {
    break
  }
}
```

### `.listeners([type])`

Returns the list of all event listeners matching the given event type. If no event `type` is provided, returns the list of all existing event listeners.

### `.listenerCount([type])`

Returns the number of the event listeners matching the given event type. If no event `type` is provided, returns the total number of existing listeners.

### `.removeListener(type, listener)`

Removes the event listener for the given event type.

### `.removeAllListeners([type])`

Removes all event listeners for the given event type. If no event `type` is provided, removes all existing event listeners.

## Types

This library comes with a set of helper types for building absurdly strongly typed emitters.

### `EventMap`

#### `EventMap.EventTypes`

Returns a union of all the event types from the given event map.

```ts
type MyEventMap = { greeting: TypedEvent; handshake: TypedEvent }

type Events = EventMap.EventTypes<MyEventMap>
// "greeting" | "handshake"
```


#### `EventMap.Events`

Returns a union of all public events from the given event map.

```ts
class GreetingEvent extends TypedEvent {}

type MyEventMap = { greeting: GreetingEvent; handshake: TypedEvent }

type Events = EventMap.Events<MyEventMap>
// GreetingEvent | TypedEvent
```

#### `EventMap.Event`

Returns the `Event` type (or its subtype) representing the given event type.

```ts
import { EventMap, TypedEvent } from 'rettime'

type MyEventMap = { greeting: TypedEvent<'john'> }
type GreetingEvent = EventMap.Event<MyEventMap, 'greeting'>
// TypedEvent<'john'>
```

#### `EventMap.EventData`

Returns the data type of the given event type.

```ts
import { EventMap, TypedEvent } from 'rettime'

type MyEventMap = { greeting: TypedEvent<'hello'> }
type GreetingData = EventMap.EventData<MyEventMap, 'greeting'>
// "hello"
```

#### `EventMap.Listener`

Returns the type of the given event's listener.

```ts
import { EventMap, TypedEvent } from 'rettime'

type MyEventMap = { greeting: TypedEvent<string, number[]> }
type GreetingListener = EventMap.Listener<MyEventMap, 'greeting'>
// (event: TypedEvent<string>) => number[]
```

#### `EventMap.ListenerReturnType`

Returns the return type of the given event's listener.

```ts
import { EventMap, TypedEvent } from 'rettime'

type MyEventMap = { getTotalPrice: TypedEvent<Cart, number> }
type CartTotal = EventMap.ListenerReturnType<MyEventMap, 'getTotalPrice'>
// number
```

### `Emitter`

#### `Emitter.AllEventTypes`

Returns a union of all the event types, both public and reserved, for the given emitter.

```ts
const emitter = new Emitter<{ greeting: TypedEvent, handshake: TypedEvent }>()

type Events = Emitter.AllEventTypes<typeof emitter>
// "*" | "greeting" | "handshake"
```

#### `Emitter.PublicEventTypes`

Returns a union of the public event types for the given emitter.

```ts
const emitter = new Emitter<{ greeting: TypedEvent, handshake: TypedEvent }>()

type Events = Emitter.PublicEventTypes<typeof emitter>
// "greeting" | "handshake"
```

> Public events exclude reserved events like `*`.

#### `Emitter.Events`

Returns a union of all public events for the given emitter.

```ts
class GreetingEvent extends TypedEvent {}

const emitter = new Emitter<{ greeting: GreetingEvent, handshake: TypedEvent }>()

type Events = Emitter.Events<typeof emitter>
// GreetingEvent | TypedEvent
```

#### `Emitter.Event`

Returns the `Event` type (or its subtype) representing the given listener.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ greeting: TypedEvent<'john'> }>()
type GreetingEvent = Emitter.Event<typeof emitter, 'greeting'>
// TypedEvent<'john'>
```

#### `Emitter.Listener`

Returns the type of the given event's listener.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ greeting: TypedEvent<string, number[]> }>()
type GreetingListener = Emitter.Listener<typeof emitter, 'greeting'>
// (event: TypedEvent<string>) => number[]
```

> The `Listener` helper is in itself type-safe, allowing only known event types as the second argument.

#### `Emitter.ListenerReturnType`

Returns the return type of the given event's listener.

```ts
import { Emitter, TypedEvent } from 'rettime'

const emitter = new Emitter<{ getTotalPrice: TypedEvent<Cart, number> }>()
type CartTotal = Emitter.ListenerReturnType<typeof emitter, 'getTotalPrice'>
// number
```
