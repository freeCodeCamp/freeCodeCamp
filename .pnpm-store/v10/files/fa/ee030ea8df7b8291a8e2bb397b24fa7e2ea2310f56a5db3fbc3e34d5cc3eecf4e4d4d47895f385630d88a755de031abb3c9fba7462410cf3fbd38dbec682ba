'use strict'

const path = require('path')
const { Worker } = require('worker_threads')

const BENCH_THREAD_PATH = path.join(__dirname, 'bench-thread.js')

const LONG_STRING_LENGTH = 1e4
const SHORT_ARRAY_SIZE = 1e3

const shortArrayOfNumbers = new Array(SHORT_ARRAY_SIZE)
const shortArrayOfIntegers = new Array(SHORT_ARRAY_SIZE)
const shortArrayOfShortStrings = new Array(SHORT_ARRAY_SIZE)
const shortArrayOfLongStrings = new Array(SHORT_ARRAY_SIZE)
const shortArrayOfMultiObject = new Array(SHORT_ARRAY_SIZE)

function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}

let longSimpleString = ''
for (let i = 0; i < LONG_STRING_LENGTH; i++) {
  longSimpleString += i
}

let longString = ''
for (let i = 0; i < LONG_STRING_LENGTH; i++) {
  longString += i
  if (i % 100 === 0) {
    longString += '"'
  }
}

for (let i = 0; i < SHORT_ARRAY_SIZE; i++) {
  shortArrayOfNumbers[i] = getRandomInt(1000)
  shortArrayOfIntegers[i] = getRandomInt(1000)
  shortArrayOfShortStrings[i] = 'hello world'
  shortArrayOfLongStrings[i] = longString
  shortArrayOfMultiObject[i] = { s: 'hello world', n: 42, b: true }
}

const benchmarks = [
  {
    name: 'short string',
    schema: {
      type: 'string'
    },
    input: 'hello world'
  },
  {
    name: 'unsafe short string',
    schema: {
      type: 'string',
      format: 'unsafe'
    },
    input: 'hello world'
  },
  {
    name: 'short string with double quote',
    schema: {
      type: 'string'
    },
    input: 'hello " world'
  },
  {
    name: 'long string without double quotes',
    schema: {
      type: 'string'
    },
    input: longSimpleString
  },
  {
    name: 'unsafe long string without double quotes',
    schema: {
      type: 'string',
      format: 'unsafe'
    },
    input: longSimpleString
  },
  {
    name: 'long string',
    schema: {
      type: 'string'
    },
    input: longString
  },
  {
    name: 'unsafe long string',
    schema: {
      type: 'string',
      format: 'unsafe'
    },
    input: longString
  },
  {
    name: 'number',
    schema: {
      type: 'number'
    },
    input: 42
  },
  {
    name: 'integer',
    schema: {
      type: 'integer'
    },
    input: 42
  },
  {
    name: 'formatted date-time',
    schema: {
      type: 'string',
      format: 'date-time'
    },
    input: new Date()
  },
  {
    name: 'formatted date',
    schema: {
      type: 'string',
      format: 'date'
    },
    input: new Date()
  },
  {
    name: 'formatted time',
    schema: {
      type: 'string',
      format: 'time'
    },
    input: new Date()
  },
  {
    name: 'short array of numbers',
    schema: {
      type: 'array',
      items: { type: 'number' }
    },
    input: shortArrayOfNumbers
  },
  {
    name: 'short array of integers',
    schema: {
      type: 'array',
      items: { type: 'integer' }
    },
    input: shortArrayOfIntegers
  },
  {
    name: 'short array of short strings',
    schema: {
      type: 'array',
      items: { type: 'string' }
    },
    input: shortArrayOfShortStrings
  },
  {
    name: 'short array of long strings',
    schema: {
      type: 'array',
      items: { type: 'string' }
    },
    input: shortArrayOfShortStrings
  },
  {
    name: 'short array of objects with properties of different types',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          s: { type: 'string' },
          n: { type: 'number' },
          b: { type: 'boolean' }
        }
      }
    },
    input: shortArrayOfMultiObject
  },
  {
    name: 'object with number property',
    schema: {
      type: 'object',
      properties: {
        a: { type: 'number' }
      }
    },
    input: { a: 42 }
  },
  {
    name: 'object with integer property',
    schema: {
      type: 'object',
      properties: {
        a: { type: 'integer' }
      }
    },
    input: { a: 42 }
  },
  {
    name: 'object with short string property',
    schema: {
      type: 'object',
      properties: {
        a: { type: 'string' }
      }
    },
    input: { a: 'hello world' }
  },
  {
    name: 'object with long string property',
    schema: {
      type: 'object',
      properties: {
        a: { type: 'string' }
      }
    },
    input: { a: longString }
  },
  {
    name: 'object with properties of different types',
    schema: {
      type: 'object',
      properties: {
        s1: { type: 'string' },
        n1: { type: 'number' },
        b1: { type: 'boolean' },
        s2: { type: 'string' },
        n2: { type: 'number' },
        b2: { type: 'boolean' },
        s3: { type: 'string' },
        n3: { type: 'number' },
        b3: { type: 'boolean' },
        s4: { type: 'string' },
        n4: { type: 'number' },
        b4: { type: 'boolean' },
        s5: { type: 'string' },
        n5: { type: 'number' },
        b5: { type: 'boolean' }
      }
    },
    input: {
      s1: 'hello world',
      n1: 42,
      b1: true,
      s2: 'hello world',
      n2: 42,
      b2: true,
      s3: 'hello world',
      n3: 42,
      b3: true,
      s4: 'hello world',
      n4: 42,
      b4: true,
      s5: 'hello world',
      n5: 42,
      b5: true
    }
  },
  {
    name: 'simple object',
    schema: {
      title: 'Example Schema',
      type: 'object',
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: ['string', 'null']
        },
        age: {
          description: 'Age in years',
          type: 'integer',
          minimum: 0
        }
      }
    },
    input: { firstName: 'Max', lastName: 'Power', age: 22 }
  },
  {
    name: 'simple object with required fields',
    schema: {
      title: 'Example Schema',
      type: 'object',
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: ['string', 'null']
        },
        age: {
          description: 'Age in years',
          type: 'integer',
          minimum: 0
        }
      },
      required: ['firstName', 'lastName', 'age']
    },
    input: { firstName: 'Max', lastName: 'Power', age: 22 }
  },
  {
    name: 'object with const string property',
    schema: {
      type: 'object',
      properties: {
        a: { const: 'const string' }
      }
    },
    input: { a: 'const string' }
  },
  {
    name: 'object with const number property',
    schema: {
      type: 'object',
      properties: {
        a: { const: 1 }
      }
    },
    input: { a: 1 }
  },
  {
    name: 'object with const bool property',
    schema: {
      type: 'object',
      properties: {
        a: { const: true }
      }
    },
    input: { a: true }
  },
  {
    name: 'object with const object property',
    schema: {
      type: 'object',
      properties: {
        foo: { const: { bar: 'baz' } }
      }
    },
    input: {
      foo: { bar: 'baz' }
    }
  },
  {
    name: 'object with const null property',
    schema: {
      type: 'object',
      properties: {
        foo: { const: null }
      }
    },
    input: {
      foo: null
    }
  }
]

async function runBenchmark (benchmark) {
  const worker = new Worker(BENCH_THREAD_PATH, { workerData: benchmark })

  return new Promise((resolve, reject) => {
    let result = null
    worker.on('error', reject)
    worker.on('message', (benchResult) => {
      result = benchResult
    })
    worker.on('exit', (code) => {
      if (code === 0) {
        resolve(result)
      } else {
        reject(new Error(`Worker stopped with exit code ${code}`))
      }
    })
  })
}

async function runBenchmarks () {
  let maxNameLength = 0
  for (const benchmark of benchmarks) {
    maxNameLength = Math.max(benchmark.name.length, maxNameLength)
  }

  for (const benchmark of benchmarks) {
    benchmark.name = benchmark.name.padEnd(maxNameLength, '.')
    const resultMessage = await runBenchmark(benchmark)
    console.log(resultMessage)
  }
}

runBenchmarks()
