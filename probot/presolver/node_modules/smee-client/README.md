# smee-client

Client and CLI for smee.io, a service that delivers webhooks to your local development environment.

## Installation

Install the client with:

```
$ npm install -g smee-client
```

## Usage

### CLI

The `smee` command will forward webhooks from smee.io to your local development environment.

```
$ smee
```

Run `smee --help` for usage.

### Node Client

```js
const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/abc123',
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start()

// Stop forwarding events
events.close()

```
