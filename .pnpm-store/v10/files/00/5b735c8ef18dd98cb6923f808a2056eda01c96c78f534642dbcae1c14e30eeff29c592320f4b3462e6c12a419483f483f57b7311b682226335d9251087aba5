import { promise as queueAsPromised } from './queue.js'

/* eslint-disable */

const queue = queueAsPromised(worker, 1)

console.log('the result is', await queue.push(42))

async function worker (arg) {
  return 42 * 2
}
