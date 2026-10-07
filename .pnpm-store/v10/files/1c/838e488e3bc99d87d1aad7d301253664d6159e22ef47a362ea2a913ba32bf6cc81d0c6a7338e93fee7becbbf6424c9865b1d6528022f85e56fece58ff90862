'use strict'

const tape = require('tape')
const BufferList = require('../')
const { Buffer } = require('buffer')

tape('indexOf single byte needle', (t) => {
  const bl = new BufferList(['abcdefg', 'abcdefg', '12345'])

  t.equal(bl.indexOf('e'), 4)
  t.equal(bl.indexOf('e', 5), 11)
  t.equal(bl.indexOf('e', 12), -1)
  t.equal(bl.indexOf('5'), 18)

  t.end()
})

tape('indexOf multiple byte needle', (t) => {
  const bl = new BufferList(['abcdefg', 'abcdefg'])

  t.equal(bl.indexOf('ef'), 4)
  t.equal(bl.indexOf('ef', 5), 11)

  t.end()
})

tape('indexOf multiple byte needles across buffer boundaries', (t) => {
  const bl = new BufferList(['abcdefg', 'abcdefg'])

  t.equal(bl.indexOf('fgabc'), 5)

  t.end()
})

tape('indexOf takes a Uint8Array search', (t) => {
  const bl = new BufferList(['abcdefg', 'abcdefg'])
  const search = new Uint8Array([102, 103, 97, 98, 99]) // fgabc

  t.equal(bl.indexOf(search), 5)

  t.end()
})

tape('indexOf takes a buffer list search', (t) => {
  const bl = new BufferList(['abcdefg', 'abcdefg'])
  const search = new BufferList('fgabc')

  t.equal(bl.indexOf(search), 5)

  t.end()
})

tape('indexOf a zero byte needle', (t) => {
  const b = new BufferList('abcdef')
  const bufEmpty = Buffer.from('')

  t.equal(b.indexOf(''), 0)
  t.equal(b.indexOf('', 1), 1)
  t.equal(b.indexOf('', b.length + 1), b.length)
  t.equal(b.indexOf('', Infinity), b.length)
  t.equal(b.indexOf(bufEmpty), 0)
  t.equal(b.indexOf(bufEmpty, 1), 1)
  t.equal(b.indexOf(bufEmpty, b.length + 1), b.length)
  t.equal(b.indexOf(bufEmpty, Infinity), b.length)

  t.end()
})

tape('indexOf buffers smaller and larger than the needle', (t) => {
  const bl = new BufferList(['abcdefg', 'a', 'bcdefg', 'a', 'bcfgab'])

  t.equal(bl.indexOf('fgabc'), 5)
  t.equal(bl.indexOf('fgabc', 6), 12)
  t.equal(bl.indexOf('fgabc', 13), -1)

  t.end()
})

// only present in node 6+
;(process.version.substr(1).split('.')[0] >= 6) && tape('indexOf latin1 and binary encoding', (t) => {
  const b = new BufferList('abcdef')

  // test latin1 encoding
  t.equal(
    new BufferList(Buffer.from(b.toString('latin1'), 'latin1'))
      .indexOf('d', 0, 'latin1'),
    3
  )
  t.equal(
    new BufferList(Buffer.from(b.toString('latin1'), 'latin1'))
      .indexOf(Buffer.from('d', 'latin1'), 0, 'latin1'),
    3
  )
  t.equal(
    new BufferList(Buffer.from('aa\u00e8aa', 'latin1'))
      .indexOf('\u00e8', 'latin1'),
    2
  )
  t.equal(
    new BufferList(Buffer.from('\u00e8', 'latin1'))
      .indexOf('\u00e8', 'latin1'),
    0
  )
  t.equal(
    new BufferList(Buffer.from('\u00e8', 'latin1'))
      .indexOf(Buffer.from('\u00e8', 'latin1'), 'latin1'),
    0
  )

  // test binary encoding
  t.equal(
    new BufferList(Buffer.from(b.toString('binary'), 'binary'))
      .indexOf('d', 0, 'binary'),
    3
  )
  t.equal(
    new BufferList(Buffer.from(b.toString('binary'), 'binary'))
      .indexOf(Buffer.from('d', 'binary'), 0, 'binary'),
    3
  )
  t.equal(
    new BufferList(Buffer.from('aa\u00e8aa', 'binary'))
      .indexOf('\u00e8', 'binary'),
    2
  )
  t.equal(
    new BufferList(Buffer.from('\u00e8', 'binary'))
      .indexOf('\u00e8', 'binary'),
    0
  )
  t.equal(
    new BufferList(Buffer.from('\u00e8', 'binary'))
      .indexOf(Buffer.from('\u00e8', 'binary'), 'binary'),
    0
  )

  t.end()
})

tape('indexOf the entire nodejs10 buffer test suite', (t) => {
  const b = new BufferList('abcdef')
  const bufA = Buffer.from('a')
  const bufBc = Buffer.from('bc')
  const bufF = Buffer.from('f')
  const bufZ = Buffer.from('z')

  const stringComparison = 'abcdef'

  t.equal(b.indexOf('a'), 0)
  t.equal(b.indexOf('a', 1), -1)
  t.equal(b.indexOf('a', -1), -1)
  t.equal(b.indexOf('a', -4), -1)
  t.equal(b.indexOf('a', -b.length), 0)
  t.equal(b.indexOf('a', NaN), 0)
  t.equal(b.indexOf('a', -Infinity), 0)
  t.equal(b.indexOf('a', Infinity), -1)
  t.equal(b.indexOf('bc'), 1)
  t.equal(b.indexOf('bc', 2), -1)
  t.equal(b.indexOf('bc', -1), -1)
  t.equal(b.indexOf('bc', -3), -1)
  t.equal(b.indexOf('bc', -5), 1)
  t.equal(b.indexOf('bc', NaN), 1)
  t.equal(b.indexOf('bc', -Infinity), 1)
  t.equal(b.indexOf('bc', Infinity), -1)
  t.equal(b.indexOf('f'), b.length - 1)
  t.equal(b.indexOf('z'), -1)

  // empty search tests
  t.equal(b.indexOf(bufA), 0)
  t.equal(b.indexOf(bufA, 1), -1)
  t.equal(b.indexOf(bufA, -1), -1)
  t.equal(b.indexOf(bufA, -4), -1)
  t.equal(b.indexOf(bufA, -b.length), 0)
  t.equal(b.indexOf(bufA, NaN), 0)
  t.equal(b.indexOf(bufA, -Infinity), 0)
  t.equal(b.indexOf(bufA, Infinity), -1)
  t.equal(b.indexOf(bufBc), 1)
  t.equal(b.indexOf(bufBc, 2), -1)
  t.equal(b.indexOf(bufBc, -1), -1)
  t.equal(b.indexOf(bufBc, -3), -1)
  t.equal(b.indexOf(bufBc, -5), 1)
  t.equal(b.indexOf(bufBc, NaN), 1)
  t.equal(b.indexOf(bufBc, -Infinity), 1)
  t.equal(b.indexOf(bufBc, Infinity), -1)
  t.equal(b.indexOf(bufF), b.length - 1)
  t.equal(b.indexOf(bufZ), -1)
  t.equal(b.indexOf(0x61), 0)
  t.equal(b.indexOf(0x61, 1), -1)
  t.equal(b.indexOf(0x61, -1), -1)
  t.equal(b.indexOf(0x61, -4), -1)
  t.equal(b.indexOf(0x61, -b.length), 0)
  t.equal(b.indexOf(0x61, NaN), 0)
  t.equal(b.indexOf(0x61, -Infinity), 0)
  t.equal(b.indexOf(0x61, Infinity), -1)
  t.equal(b.indexOf(0x0), -1)

  // test offsets
  t.equal(b.indexOf('d', 2), 3)
  t.equal(b.indexOf('f', 5), 5)
  t.equal(b.indexOf('f', -1), 5)
  t.equal(b.indexOf('f', 6), -1)

  t.equal(b.indexOf(Buffer.from('d'), 2), 3)
  t.equal(b.indexOf(Buffer.from('f'), 5), 5)
  t.equal(b.indexOf(Buffer.from('f'), -1), 5)
  t.equal(b.indexOf(Buffer.from('f'), 6), -1)

  t.equal(Buffer.from('ff').indexOf(Buffer.from('f'), 1, 'ucs2'), -1)

  // test invalid and uppercase encoding
  t.equal(b.indexOf('b', 'utf8'), 1)
  t.equal(b.indexOf('b', 'UTF8'), 1)
  t.equal(b.indexOf('62', 'HEX'), 1)
  t.throws(() => b.indexOf('bad', 'enc'), TypeError)

  // test hex encoding
  t.equal(
    Buffer.from(b.toString('hex'), 'hex')
      .indexOf('64', 0, 'hex'),
    3
  )
  t.equal(
    Buffer.from(b.toString('hex'), 'hex')
      .indexOf(Buffer.from('64', 'hex'), 0, 'hex'),
    3
  )

  // test base64 encoding
  t.equal(
    Buffer.from(b.toString('base64'), 'base64')
      .indexOf('ZA==', 0, 'base64'),
    3
  )
  t.equal(
    Buffer.from(b.toString('base64'), 'base64')
      .indexOf(Buffer.from('ZA==', 'base64'), 0, 'base64'),
    3
  )

  // test ascii encoding
  t.equal(
    Buffer.from(b.toString('ascii'), 'ascii')
      .indexOf('d', 0, 'ascii'),
    3
  )
  t.equal(
    Buffer.from(b.toString('ascii'), 'ascii')
      .indexOf(Buffer.from('d', 'ascii'), 0, 'ascii'),
    3
  )

  // test optional offset with passed encoding
  t.equal(Buffer.from('aaaa0').indexOf('30', 'hex'), 4)
  t.equal(Buffer.from('aaaa00a').indexOf('3030', 'hex'), 4)

  {
    // test usc2 encoding
    const twoByteString = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2')

    t.equal(8, twoByteString.indexOf('\u0395', 4, 'ucs2'))
    t.equal(6, twoByteString.indexOf('\u03a3', -4, 'ucs2'))
    t.equal(4, twoByteString.indexOf('\u03a3', -6, 'ucs2'))
    t.equal(4, twoByteString.indexOf(
      Buffer.from('\u03a3', 'ucs2'), -6, 'ucs2'))
    t.equal(-1, twoByteString.indexOf('\u03a3', -2, 'ucs2'))
  }

  const mixedByteStringUcs2 =
      Buffer.from('\u039a\u0391abc\u03a3\u03a3\u0395', 'ucs2')

  t.equal(6, mixedByteStringUcs2.indexOf('bc', 0, 'ucs2'))
  t.equal(10, mixedByteStringUcs2.indexOf('\u03a3', 0, 'ucs2'))
  t.equal(-1, mixedByteStringUcs2.indexOf('\u0396', 0, 'ucs2'))

  t.equal(
    6, mixedByteStringUcs2.indexOf(Buffer.from('bc', 'ucs2'), 0, 'ucs2'))
  t.equal(
    10, mixedByteStringUcs2.indexOf(Buffer.from('\u03a3', 'ucs2'), 0, 'ucs2'))
  t.equal(
    -1, mixedByteStringUcs2.indexOf(Buffer.from('\u0396', 'ucs2'), 0, 'ucs2'))

  {
    const twoByteString = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2')

    // Test single char pattern
    t.equal(0, twoByteString.indexOf('\u039a', 0, 'ucs2'))
    let index = twoByteString.indexOf('\u0391', 0, 'ucs2')
    t.equal(2, index, `Alpha - at index ${index}`)
    index = twoByteString.indexOf('\u03a3', 0, 'ucs2')
    t.equal(4, index, `First Sigma - at index ${index}`)
    index = twoByteString.indexOf('\u03a3', 6, 'ucs2')
    t.equal(6, index, `Second Sigma - at index ${index}`)
    index = twoByteString.indexOf('\u0395', 0, 'ucs2')
    t.equal(8, index, `Epsilon - at index ${index}`)
    index = twoByteString.indexOf('\u0392', 0, 'ucs2')
    t.equal(-1, index, `Not beta - at index ${index}`)

    // Test multi-char pattern
    index = twoByteString.indexOf('\u039a\u0391', 0, 'ucs2')
    t.equal(0, index, `Lambda Alpha - at index ${index}`)
    index = twoByteString.indexOf('\u0391\u03a3', 0, 'ucs2')
    t.equal(2, index, `Alpha Sigma - at index ${index}`)
    index = twoByteString.indexOf('\u03a3\u03a3', 0, 'ucs2')
    t.equal(4, index, `Sigma Sigma - at index ${index}`)
    index = twoByteString.indexOf('\u03a3\u0395', 0, 'ucs2')
    t.equal(6, index, `Sigma Epsilon - at index ${index}`)
  }

  const mixedByteStringUtf8 = Buffer.from('\u039a\u0391abc\u03a3\u03a3\u0395')

  t.equal(5, mixedByteStringUtf8.indexOf('bc'))
  t.equal(5, mixedByteStringUtf8.indexOf('bc', 5))
  t.equal(5, mixedByteStringUtf8.indexOf('bc', -8))
  t.equal(7, mixedByteStringUtf8.indexOf('\u03a3'))
  t.equal(-1, mixedByteStringUtf8.indexOf('\u0396'))

  // Test complex string indexOf algorithms. Only trigger for long strings.
  // Long string that isn't a simple repeat of a shorter string.
  let longString = 'A'
  for (let i = 66; i < 76; i++) { // from 'B' to 'K'
    longString = longString + String.fromCharCode(i) + longString
  }

  const longBufferString = Buffer.from(longString)

  // pattern of 15 chars, repeated every 16 chars in long
  let pattern = 'ABACABADABACABA'
  for (let i = 0; i < longBufferString.length - pattern.length; i += 7) {
    const index = longBufferString.indexOf(pattern, i)
    t.equal((i + 15) & ~0xf, index,
      `Long ABACABA...-string at index ${i}`)
  }

  let index = longBufferString.indexOf('AJABACA')
  t.equal(510, index, `Long AJABACA, First J - at index ${index}`)
  index = longBufferString.indexOf('AJABACA', 511)
  t.equal(1534, index, `Long AJABACA, Second J - at index ${index}`)

  pattern = 'JABACABADABACABA'
  index = longBufferString.indexOf(pattern)
  t.equal(511, index, `Long JABACABA..., First J - at index ${index}`)
  index = longBufferString.indexOf(pattern, 512)
  t.equal(
    1535, index, `Long JABACABA..., Second J - at index ${index}`)

  // Search for a non-ASCII string in a pure ASCII string.
  const asciiString = Buffer.from(
    'somethingnotatallsinisterwhichalsoworks')
  t.equal(-1, asciiString.indexOf('\x2061'))
  t.equal(3, asciiString.indexOf('eth', 0))

  // Search in string containing many non-ASCII chars.
  const allCodePoints = []
  for (let i = 0; i < 65536; i++) {
    allCodePoints[i] = i
  }

  const allCharsString = String.fromCharCode.apply(String, allCodePoints)
  const allCharsBufferUtf8 = Buffer.from(allCharsString)
  const allCharsBufferUcs2 = Buffer.from(allCharsString, 'ucs2')

  // Search for string long enough to trigger complex search with ASCII pattern
  // and UC16 subject.
  t.equal(-1, allCharsBufferUtf8.indexOf('notfound'))
  t.equal(-1, allCharsBufferUcs2.indexOf('notfound'))

  // Needle is longer than haystack, but only because it's encoded as UTF-16
  t.equal(Buffer.from('aaaa').indexOf('a'.repeat(4), 'ucs2'), -1)

  t.equal(Buffer.from('aaaa').indexOf('a'.repeat(4), 'utf8'), 0)
  t.equal(Buffer.from('aaaa').indexOf('你好', 'ucs2'), -1)

  // Haystack has odd length, but the needle is UCS2.
  t.equal(Buffer.from('aaaaa').indexOf('b', 'ucs2'), -1)

  {
    // Find substrings in Utf8.
    const lengths = [1, 3, 15] // Single char, simple and complex.
    const indices = [0x5, 0x60, 0x400, 0x680, 0x7ee, 0xFF02, 0x16610, 0x2f77b]
    for (let lengthIndex = 0; lengthIndex < lengths.length; lengthIndex++) {
      for (let i = 0; i < indices.length; i++) {
        const index = indices[i]
        let length = lengths[lengthIndex]

        if (index + length > 0x7F) {
          length = 2 * length
        }

        if (index + length > 0x7FF) {
          length = 3 * length
        }

        if (index + length > 0xFFFF) {
          length = 4 * length
        }

        const patternBufferUtf8 = allCharsBufferUtf8.slice(index, index + length)
        t.equal(index, allCharsBufferUtf8.indexOf(patternBufferUtf8))

        const patternStringUtf8 = patternBufferUtf8.toString()
        t.equal(index, allCharsBufferUtf8.indexOf(patternStringUtf8))
      }
    }
  }

  {
    // Find substrings in Usc2.
    const lengths = [2, 4, 16] // Single char, simple and complex.
    const indices = [0x5, 0x65, 0x105, 0x205, 0x285, 0x2005, 0x2085, 0xfff0]

    for (let lengthIndex = 0; lengthIndex < lengths.length; lengthIndex++) {
      for (let i = 0; i < indices.length; i++) {
        const index = indices[i] * 2
        const length = lengths[lengthIndex]

        const patternBufferUcs2 =
            allCharsBufferUcs2.slice(index, index + length)
        t.equal(
          index, allCharsBufferUcs2.indexOf(patternBufferUcs2, 0, 'ucs2'))

        const patternStringUcs2 = patternBufferUcs2.toString('ucs2')
        t.equal(
          index, allCharsBufferUcs2.indexOf(patternStringUcs2, 0, 'ucs2'))
      }
    }
  }

  [
    () => {},
    {},
    []
  ].forEach((val) => {
    t.throws(() => b.indexOf(val), TypeError, `"${JSON.stringify(val)}" should throw`)
  })

  // Test weird offset arguments.
  // The following offsets coerce to NaN or 0, searching the whole Buffer
  t.equal(b.indexOf('b', undefined), 1)
  t.equal(b.indexOf('b', {}), 1)
  t.equal(b.indexOf('b', 0), 1)
  t.equal(b.indexOf('b', null), 1)
  t.equal(b.indexOf('b', []), 1)

  // The following offset coerces to 2, in other words +[2] === 2
  t.equal(b.indexOf('b', [2]), -1)

  // Behavior should match String.indexOf()
  t.equal(
    b.indexOf('b', undefined),
    stringComparison.indexOf('b', undefined))
  t.equal(
    b.indexOf('b', {}),
    stringComparison.indexOf('b', {}))
  t.equal(
    b.indexOf('b', 0),
    stringComparison.indexOf('b', 0))
  t.equal(
    b.indexOf('b', null),
    stringComparison.indexOf('b', null))
  t.equal(
    b.indexOf('b', []),
    stringComparison.indexOf('b', []))
  t.equal(
    b.indexOf('b', [2]),
    stringComparison.indexOf('b', [2]))

  // test truncation of Number arguments to uint8
  {
    const buf = Buffer.from('this is a test')

    t.equal(buf.indexOf(0x6973), 3)
    t.equal(buf.indexOf(0x697320), 4)
    t.equal(buf.indexOf(0x69732069), 2)
    t.equal(buf.indexOf(0x697374657374), 0)
    t.equal(buf.indexOf(0x69737374), 0)
    t.equal(buf.indexOf(0x69737465), 11)
    t.equal(buf.indexOf(0x69737465), 11)
    t.equal(buf.indexOf(-140), 0)
    t.equal(buf.indexOf(-152), 1)
    t.equal(buf.indexOf(0xff), -1)
    t.equal(buf.indexOf(0xffff), -1)
  }

  // Test that Uint8Array arguments are okay.
  {
    const needle = new Uint8Array([0x66, 0x6f, 0x6f])
    const haystack = new BufferList(Buffer.from('a foo b foo'))
    t.equal(haystack.indexOf(needle), 2)
  }

  t.end()
})
