'use strict'

const os = require('node:os')
const { test } = require('tap')
const { sink, once } = require('./helper')
const pino = require('../')

const { pid } = process
const hostname = os.hostname()

function testEscape (ch, key) {
  test('correctly escape ' + ch, async ({ same }) => {
    const stream = sink()
    const instance = pino({
      name: 'hello'
    }, stream)
    instance.fatal('this contains ' + key)
    const result = await once(stream, 'data')
    delete result.time
    same(result, {
      pid,
      hostname,
      level: 60,
      name: 'hello',
      msg: 'this contains ' + key
    })
  })
}

testEscape('\\n', '\n')
testEscape('\\/', '/')
testEscape('\\\\', '\\')
testEscape('\\r', '\r')
testEscape('\\t', '\t')
testEscape('\\b', '\b')

const toEscape = [
  '\u0000', // NUL  Null character
  '\u0001', // SOH  Start of Heading
  '\u0002', // STX  Start of Text
  '\u0003', // ETX  End-of-text character
  '\u0004', // EOT  End-of-transmission character
  '\u0005', // ENQ  Enquiry character
  '\u0006', // ACK  Acknowledge character
  '\u0007', // BEL  Bell character
  '\u0008', // BS   Backspace
  '\u0009', // HT   Horizontal tab
  '\u000A', // LF   Line feed
  '\u000B', // VT   Vertical tab
  '\u000C', // FF   Form feed
  '\u000D', // CR   Carriage return
  '\u000E', // SO   Shift Out
  '\u000F', // SI   Shift In
  '\u0010', // DLE  Data Link Escape
  '\u0011', // DC1  Device Control 1
  '\u0012', // DC2  Device Control 2
  '\u0013', // DC3  Device Control 3
  '\u0014', // DC4  Device Control 4
  '\u0015', // NAK  Negative-acknowledge character
  '\u0016', // SYN  Synchronous Idle
  '\u0017', // ETB  End of Transmission Block
  '\u0018', // CAN  Cancel character
  '\u0019', // EM   End of Medium
  '\u001A', // SUB  Substitute character
  '\u001B', // ESC  Escape character
  '\u001C', // FS   File Separator
  '\u001D', // GS   Group Separator
  '\u001E', // RS   Record Separator
  '\u001F' // US   Unit Separator
]

toEscape.forEach((key) => {
  testEscape(JSON.stringify(key), key)
})

test('correctly escape `hello \\u001F world \\n \\u0022`', async ({ same }) => {
  const stream = sink()
  const instance = pino({
    name: 'hello'
  }, stream)
  instance.fatal('hello \u001F world \n \u0022')
  const result = await once(stream, 'data')
  delete result.time
  same(result, {
    pid,
    hostname,
    level: 60,
    name: 'hello',
    msg: 'hello \u001F world \n \u0022'
  })
})
