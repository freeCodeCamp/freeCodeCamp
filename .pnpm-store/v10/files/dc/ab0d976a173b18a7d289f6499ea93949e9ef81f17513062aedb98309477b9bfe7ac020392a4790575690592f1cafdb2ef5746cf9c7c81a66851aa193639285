/**
 * @jest-environment jsdom
 */
import { Headers } from './Headers'

describe('constructor()', () => {
  it('can be created without any arguments', () => {
    const headers = new Headers()
    expect(Object.fromEntries(headers.entries())).toEqual({})
  })

  it('can be created given a Headers instance', () => {
    const headers = new Headers(new window.Headers({ Accept: '*/*' }))
    expect(Object.fromEntries(headers.entries())).toEqual({ accept: '*/*' })
  })

  it('can be created given a polyfilled Headers instance', () => {
    const firstHeaders = new Headers({ Accept: '*/*' })
    const headers = new Headers(firstHeaders)
    expect(Object.fromEntries(headers.entries())).toEqual({ accept: '*/*' })
  })

  it('can be created given a ["name", "a"] list', () => {
    const headers = new Headers([['accept', '*/*']])
    expect(headers.get('accept')).toEqual('*/*')
  })

  it('can be created given a ["name", ["a", "b"]] list', () => {
    const headers = new Headers([['accept', ['application/json', 'image/png']]])
    expect(headers.get('accept')).toEqual('application/json, image/png')
  })

  it('can be created given a ["name", "a, b"] list', () => {
    const headers = new Headers([['accept', 'application/json, image/png']])
    expect(headers.get('accept')).toEqual('application/json, image/png')
  })

  it('can be created given an headers object', () => {
    const headers = new Headers({ accept: '*/*' })
    expect(headers.get('accept')).toEqual('*/*')
  })

  it('can be created given an object with a null prototype', () => {
    const headersInit = Object.create(null)
    headersInit.accept = '*/*'
    const headers = new Headers(headersInit)
    expect(headers.get('accept')).toEqual('*/*')
  })

  it('duplicates values for the same header names with different casing', () => {
    const headers = new Headers({
      'accept-encoding': 'gzip, deflate, br',
      'Accept-Encoding': 'gzip, deflate, br',
    })
    expect(headers.get('accept-encoding')).toEqual(
      'gzip, deflate, br, gzip, deflate, br'
    )
  })
})

describe('[Symbol.iterator]', () => {
  it('returns the iterator with the [name, value] pairs', () => {
    const headers = new Headers({
      accept: '*/*',
      'accept-language': 'en-US',
      'content-type': 'application/json',
    })

    const entries: Array<[string, string]> = []

    for (const entry of headers) {
      entries.push(entry)
    }

    expect(entries).toEqual([
      ['accept', '*/*'],
      ['accept-language', 'en-US'],
      ['content-type', 'application/json'],
    ])
  })

  it('returns an empty iterator when there is no headers', () => {
    const headers = new Headers()
    const entries: Array<[string, string]> = []

    for (const entry of headers) {
      entries.push(entry)
    }

    expect(entries).toEqual([])
  })
})

describe('[Symbol.toStringTag]', () => {
  it('returns "[object Headers]" when called', () => {
    expect(new Headers().toString()).toEqual('[object Headers]')
  })
})

describe('.keys()', () => {
  it('returns the iterator with the header keys', () => {
    const headers = new Headers({
      accept: '*/*',
      'accept-language': 'en-US',
      'content-type': 'application/json',
    })
    const keys: Array<string> = []

    for (const name of headers.keys()) {
      keys.push(name)
    }

    expect(keys).toEqual(['accept', 'accept-language', 'content-type'])
  })

  it('returns an empty iterator when there is no headers', () => {
    const headers = new Headers()
    const keys: Array<string> = []

    for (const name of headers.keys()) {
      keys.push(name)
    }

    expect(keys).toEqual([])
  })

  it('sorts returned keys alphabetically', () => {
    const headers = new Headers()
    headers.set('X-B', '1')
    headers.set('X-A', '2')
    headers.set('X-C', '3')
    expect(Array.from(headers.keys())).toEqual(['x-a', 'x-b', 'x-c'])
  })

  it('does not combine set-cookie headers', () => {
    const headers = new Headers()
    headers.append('Set-Cookie', 'a=1')
    headers.append('Set-Cookie', 'b=2')
    expect(Array.from(headers.keys())).toEqual(['set-cookie', 'set-cookie'])
  })

  if (process.version.startsWith('22.')) {
    it('returns an iterator with [Symbol.dispose] defined', () => {
      const headers = new Headers()
      expect(headers.keys()[Symbol.dispose]).toBeInstanceOf(Function)
    })
  }
})

describe('.values()', () => {
  it('returns the iterator with the header values', () => {
    const headers = new Headers({
      accept: '*/*',
      'accept-language': 'en-US',
      'content-type': 'application/json',
    })
    const values: Array<string> = []

    for (const value of headers.values()) {
      values.push(value)
    }

    expect(values).toEqual(['*/*', 'en-US', 'application/json'])
  })

  it('returns an empty iterator when there is no headers', () => {
    const headers = new Headers()
    const values: Array<string> = []

    for (const value of headers.values()) {
      values.push(value)
    }

    expect(values).toEqual([])
  })

  it('sorts returned values alphabetically', () => {
    const headers = new Headers()
    headers.set('X-B', '1')
    headers.set('X-A', '2')
    headers.set('X-C', '3')
    expect(Array.from(headers.values())).toEqual(['2', '1', '3'])
  })

  it('does not combine set-cookie headers', () => {
    const headers = new Headers()
    headers.append('Set-Cookie', 'a=1')
    headers.append('Set-Cookie', 'b=2')
    expect(Array.from(headers.values())).toEqual(['a=1', 'b=2'])
  })

  if (process.version.startsWith('22.')) {
    it('returns an iterator with [Symbol.dispose] defined', () => {
      const headers = new Headers()
      expect(headers.values()[Symbol.dispose]).toBeInstanceOf(Function)
    })
  }
})

describe('.entries()', () => {
  it('returns the iterator with the [name, value] pairs', () => {
    const headers = new Headers({
      accept: '*/*',
      'accept-language': 'en-US',
      'content-type': 'application/json',
    })
    const entries: Array<[string, string]> = []

    for (const entry of headers.entries()) {
      entries.push(entry)
    }

    expect(entries).toEqual([
      ['accept', '*/*'],
      ['accept-language', 'en-US'],
      ['content-type', 'application/json'],
    ])
  })

  it('returns an empty iterator when there is no headers', () => {
    const headers = new Headers()
    const entries: Array<[string, string]> = []

    for (const entry of headers.entries()) {
      entries.push(entry)
    }

    expect(entries).toEqual([])
  })

  it('sorts alphabetically', () => {
    const headers = new Headers()
    headers.set('X-B', '1')
    headers.set('X-A', '2')
    headers.set('X-C', '3')
    expect(Array.from(headers.entries())).toEqual([
      ['x-a', '2'],
      ['x-b', '1'],
      ['x-c', '3'],
    ])
  })

  it('does not combine set-cookie headers', () => {
    const headers = new Headers()
    headers.append('Set-Cookie', 'a=1')
    headers.append('Set-Cookie', 'b=2')
    expect(Array.from(headers.entries())).toEqual([
      ['set-cookie', 'a=1'],
      ['set-cookie', 'b=2'],
    ])
  })

  if (process.version.startsWith('22.')) {
    it('returns an iterator with [Symbol.dispose] defined', () => {
      const headers = new Headers()
      expect(headers.entries()[Symbol.dispose]).toBeInstanceOf(Function)
    })
  }
})

describe('.has()', () => {
  it('throws a TypeError given an invalid header name', () => {
    const headers = new Headers()
    expect(() =>
      headers.has(
        // @ts-expect-error
        123
      )
    ).toThrow(new TypeError('Invalid header name "123"'))
  })

  it('returns true given an existing header name', () => {
    const headers = new Headers({ accept: '*/*' })
    expect(headers.has('accept')).toBe(true)
    expect(headers.has('AcCePt')).toBe(true)
  })

  it('returns false given a non-existing header name', () => {
    const headers = new Headers({ accept: '*/*' })
    expect(headers.has('content-type')).toBe(false)
    expect(headers.has('CoNtEnT-TyPe')).toBe(false)
  })
})

describe('.get()', () => {
  it('throws a TypeError given an invalid header name', () => {
    const headers = new Headers()
    expect(() =>
      headers.get(
        // @ts-expect-error
        123
      )
    ).toThrow(new TypeError('Invalid header name "123"'))
  })

  it('returns the value of the existing header name', () => {
    const headers = new Headers({ 'Content-Type': 'text/plain' })
    expect(headers.get('Content-Type')).toEqual('text/plain')
    expect(headers.get('content-type')).toEqual('text/plain')
    expect(headers.get('CoNtEnT-TyPe')).toEqual('text/plain')
  })

  it('returns null given a non-existing header name', () => {
    const headers = new Headers({ 'Content-Type': 'text/plain' })
    expect(headers.get('accept')).toBeNull()
    expect(headers.get('Accept')).toBeNull()
    expect(headers.get('AcCePt')).toBeNull()
  })

  it('return an empty string for an empty header value', () => {
    const headers = new Headers({ 'Content-Type': '' })
    expect(headers.get('Content-Type')).toEqual('')
  })
})

describe('.set()', () => {
  it('returns if given an invalid header name', () => {
    const headers = new Headers()
    expect(
      headers.set(
        // @ts-expect-error
        123,
        'value'
      )
    ).toBeUndefined()
    expect(Object.fromEntries(headers.entries())).toEqual({})
  })

  it('returns if given an invalid header value', () => {
    const headers = new Headers()
    expect(
      headers.set(
        'foo',
        // @ts-expect-error
        123
      )
    ).toBeUndefined()
    expect(headers.set('foo', '  value  ')).toBeUndefined()
    expect(Object.fromEntries(headers.entries())).toEqual({})
  })

  it('sets a new header', () => {
    const headers = new Headers({ accept: '*/*' })

    headers.set('content-type', 'application/json')
    expect(headers.get('accept')).toEqual('*/*')
    expect(headers.get('content-type')).toEqual('application/json')
  })

  it('overrides an existing header with the same name', () => {
    const headers = new Headers({ accept: '*/*' })

    headers.set('accept', 'image/png')
    expect(headers.get('accept')).toEqual('image/png')

    headers.set('AcCePt', 'text/plain')
    expect(headers.get('accept')).toEqual('text/plain')
  })
})

describe('.append()', () => {
  it('appends a new header', () => {
    const headers = new Headers({ accept: '*/*' })

    headers.append('content-type', 'application/json')
    expect(headers.get('accept')).toEqual('*/*')
    expect(headers.get('content-type')).toEqual('application/json')
  })

  it('joins the values with the existing header', () => {
    const headers = new Headers({ accept: '*/*' })

    headers.append('accept', 'image/png')
    expect(headers.get('accept')).toEqual('*/*, image/png')
  })

  it('duplicates values with the existing header', () => {
    const headers = new Headers({ accept: '*/*' })

    headers.append('Accept', '*/*')
    expect(headers.get('accept')).toEqual('*/*, */*')
  })
})

describe('.delete()', () => {
  it('returns if given an invalid header name', () => {
    const headers = new Headers({ accept: '*/*' })
    expect(
      headers.delete(
        // @ts-expect-error
        123
      )
    ).toBeUndefined()
    expect(Object.fromEntries(headers.entries())).toEqual({
      accept: '*/*',
    })
  })

  it('deletes the existing header', () => {
    const headers = new Headers({ accept: '*/*' })

    headers.delete('accept')
    expect(headers.has('accept')).toBe(false)
    expect(headers.has('AcCePt')).toBe(false)
    expect(headers.get('accept')).toBeNull()
    expect(headers.get('AcCePt')).toBeNull()
  })

  it('does nothing given a non-existing header', () => {
    const headers = new Headers({ accept: '*/*' })

    headers.delete('content-type')
    expect(headers.get('accept')).toEqual('*/*')
    expect(headers.get('AcCePt')).toEqual('*/*')
  })
})

describe('.forEach()', () => {
  it('traverses each header once', () => {
    const headers = new Headers({ accept: '*/*', 'user-agent': 'agent' })
    const headerSet = new Set()

    headers.forEach((value, name, headers) => {
      expect(value).toBe(headers.get(name))
      expect(headerSet.has(name)).toBe(false)
      headerSet.add(name)
    })

    // `Headers.forEach` returns normalized lowercase names.
    expect(headerSet).toEqual(new Set(['accept', 'user-agent']))
  })

  it('traverses each header once with a custom "this" argument', () => {
    const headers = new Headers({ accept: '*/*', 'User-Agent': 'agent' })
    const headerSet = new Set()

    headers.forEach(function (value, name, headers) {
      expect(value).toBe(headers.get(name))
      expect(this.has(name)).toBe(false)
      this.add(name)
    }, headerSet)

    expect(headerSet).toEqual(new Set(['accept', 'user-agent']))
  })
})

describe('.getSetCookie()', () => {
  it('returns an empty array given no Set-Cookie headers', () => {
    const headers = new Headers()
    expect(headers.getSetCookie()).toEqual([])
  })

  it('returns empty string if Set-Cookie header was set to empty string', () => {
    const headers = new Headers({ 'Set-Cookie': '' })
    expect(headers.getSetCookie()).toEqual([''])
  })

  it('returns a list of a single existing Set-Cookie header', () => {
    const headers = new Headers({
      'Set-Cookie': 'name=cookie; Expires=Wed, 21 Oct 2015 07:28:00 GMT',
    })
    expect(headers.getSetCookie()).toEqual([
      'name=cookie; Expires=Wed, 21 Oct 2015 07:28:00 GMT',
    ])
  })

  it('returns a list of all existing Set-Cookie headers', () => {
    const headers = new Headers()
    headers.append(
      'Set-Cookie',
      'name=cookie; Expires=Wed, 21 Oct 2015 07:28:00 GMT'
    )
    headers.append(
      'Set-Cookie',
      'name=session; Expires=Wed, 21 Oct 2015 07:28:00 GMT'
    )

    expect(headers.getSetCookie()).toEqual([
      'name=cookie; Expires=Wed, 21 Oct 2015 07:28:00 GMT',
      'name=session; Expires=Wed, 21 Oct 2015 07:28:00 GMT',
    ])
  })
})
