# why-is-node-running

Node is running but you don't know why? `why-is-node-running` is here to help you.

## Installation

Node 8 and above:

```bash
npm i why-is-node-running -g
```

Earlier Node versions (no longer supported):

```bash
npm i why-is-node-running@v1.x -g
```

## Usage

```js
const log = require('why-is-node-running') // should be your first require
const net = require('net')

function createServer () {
  const server = net.createServer()
  setInterval(function () {}, 1000)
  server.listen(0)
}

createServer()
createServer()

setTimeout(function () {
  log() // logs out active handles that are keeping node running
}, 100)
```

Save the file as `example.js`, then execute:

```bash
node ./example.js
```

Here's the output:

```
There are 5 handle(s) keeping the process running

# Timeout
/home/maf/dev/node_modules/why-is-node-running/example.js:6  - setInterval(function () {}, 1000)
/home/maf/dev/node_modules/why-is-node-running/example.js:10 - createServer()

# TCPSERVERWRAP
/home/maf/dev/node_modules/why-is-node-running/example.js:7  - server.listen(0)
/home/maf/dev/node_modules/why-is-node-running/example.js:10 - createServer()

# Timeout
/home/maf/dev/node_modules/why-is-node-running/example.js:6  - setInterval(function () {}, 1000)
/home/maf/dev/node_modules/why-is-node-running/example.js:11 - createServer()

# TCPSERVERWRAP
/home/maf/dev/node_modules/why-is-node-running/example.js:7  - server.listen(0)
/home/maf/dev/node_modules/why-is-node-running/example.js:11 - createServer()

# Timeout
/home/maf/dev/node_modules/why-is-node-running/example.js:13 - setTimeout(function () {
```

**Important Note!**
`unref`ed timers do not prevent the Node process from exiting. If you are running with Node v11.0.0 and above, `unref`ed timers will not be listed in the above list. Unfortunately, this is not supported in node versions below v11.0.0.

## CLI

You can also run `why-is-node-running` as a standalone if you don't want to include it inside your code. Sending `SIGUSR1`/`SIGINFO` signal to the process will produce the log. (`Ctrl + T` on macOS and BSD systems)

```bash
why-is-node-running /path/to/some/file.js
```

```
probing module /path/to/some/file.js
kill -SIGUSR1 31115 for logging
```

To trigger the log:

```
kill -SIGUSR1 31115
```

## Require CLI Option

You can also use the node `-r` option to include `why-is-node-running`:

```bash
node -r why-is-node-running/include /path/to/some/file.js
```

The steps are otherwise the same as the above CLI section

## License

MIT
