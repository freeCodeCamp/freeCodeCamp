# @vitest/snapshot

Lightweight implementation of Jest's snapshots.

## Usage

```js
import { SnapshotClient } from '@vitest/snapshot'
import { NodeSnapshotEnvironment } from '@vitest/snapshot/environment'
import { SnapshotManager } from '@vitest/snapshot/manager'

const client = new SnapshotClient({
  // you need to provide your own equality check implementation if you use it
  // this function is called when `.toMatchSnapshot({ property: 1 })` is called
  isEqual: (received, expected) =>
    equals(received, expected, [iterableEquality, subsetEquality]),
})

// class that implements snapshot saving and reading
// by default uses fs module, but you can provide your own implementation depending on the environment
const environment = new NodeSnapshotEnvironment()

// you need to implement this yourselves,
// this depends on your runner
function getCurrentFilepath() {
  return '/file.spec.js'
}
function getCurrentTestName() {
  return 'test1'
}

// example for inline snapshots, nothing is required to support regular snapshots,
// just call `assert` with `isInline: false`
function wrapper(received) {
  function __INLINE_SNAPSHOT__(inlineSnapshot, message) {
    client.assert({
      received,
      message,
      isInline: true,
      inlineSnapshot,
      filepath: getCurrentFilepath(),
      name: getCurrentTestName(),
    })
  }
  return {
    // the name is hard-coded, it should be inside another function, so Vitest can find the actual test file where it was called (parses call stack trace + 2)
    // you can override this behaviour in SnapshotState's `_inferInlineSnapshotStack` method by providing your own SnapshotState to SnapshotClient constructor
    toMatchInlineSnapshot: (...args) => __INLINE_SNAPSHOT__(...args),
  }
}

const options = {
  updateSnapshot: 'new',
  snapshotEnvironment: environment,
}

await client.startCurrentRun(
  getCurrentFilepath(),
  getCurrentTestName(),
  options
)

// this will save snapshot to a file which is returned by "snapshotEnvironment.resolvePath"
client.assert({
  received: 'some text',
  isInline: false,
})

// uses "pretty-format", so it requires quotes
// also naming is hard-coded when parsing test files
wrapper('text 1').toMatchInlineSnapshot()
wrapper('text 2').toMatchInlineSnapshot('"text 2"')

const result = await client.finishCurrentRun() // this saves files and returns SnapshotResult

// you can use manager to manage several clients
const manager = new SnapshotManager(options)
manager.add(result)

// do something
// and then read the summary

console.log(manager.summary)
```
