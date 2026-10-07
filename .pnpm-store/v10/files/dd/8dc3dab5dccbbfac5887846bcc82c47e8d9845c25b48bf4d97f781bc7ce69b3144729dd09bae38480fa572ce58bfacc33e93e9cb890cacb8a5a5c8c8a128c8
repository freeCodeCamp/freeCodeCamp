# webdriver-bidi-protocol

This repository contains TypeScript types conforming to the [WebDriver
BiDi](https://w3c.github.io/webdriver-bidi/) specification. It also
supports WebDriver BiDi extension modules defined in other
specifications:

- [Permissions](https://w3c.github.io/permissions/#automation-webdriver-bidi)
- [Web Bluetooth](https://webbluetoothcg.github.io/web-bluetooth/#automated-testing)

## Installation

```
npm install webdriver-bidi-protocol
```

## Usage

In your TypeScript client implementation, you can now import WebDriver
BiDi types:

```ts
import {Commands} from 'webdriver-bidi-protocol';

async function sendCommand<T extends keyof Commands>(
  method: T,
  params: Commands[T]['params']
): {result: Commands[T]['returnType']} {
  // Implementation for sending the data using WebSockets.
}

// Now TypeScript validates that the params match the spec for 'browsingContext.print'.
await sendCommand('browsingContext.print', {context: 'xxx'});
```

## Versioning

This package patch version will be incremented whenever there are
specification updates. 
