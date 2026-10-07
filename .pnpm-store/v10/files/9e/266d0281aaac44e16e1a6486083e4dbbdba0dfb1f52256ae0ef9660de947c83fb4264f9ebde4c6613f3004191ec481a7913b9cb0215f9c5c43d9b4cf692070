import { vi } from 'vitest'
import { isOnline, isDocumentVisible, joinUrls } from '@internal/query/utils'

afterAll(() => {
  vi.restoreAllMocks()
})

describe('isOnline', () => {
  test('Assumes online=true in a node env', () => {
    vi.spyOn(window, 'navigator', 'get').mockImplementation(
      () => undefined as any,
    )

    expect(navigator).toBeUndefined()
    expect(isOnline()).toBe(true)
  })

  test('Returns false if navigator isOnline=false', () => {
    vi.spyOn(window, 'navigator', 'get').mockImplementation(
      () => ({ onLine: false }) as any,
    )
    expect(isOnline()).toBe(false)
  })

  test('Returns true if navigator isOnline=true', () => {
    vi.spyOn(window, 'navigator', 'get').mockImplementation(
      () => ({ onLine: true }) as any,
    )
    expect(isOnline()).toBe(true)
  })
})

describe('isDocumentVisible', () => {
  test('Assumes true when in a non-browser env', () => {
    vi.spyOn(window, 'document', 'get').mockImplementation(
      () => undefined as any,
    )
    expect(window.document).toBeUndefined()
    expect(isDocumentVisible()).toBe(true)
  })

  test('Returns false when hidden=true', () => {
    vi.spyOn(window, 'document', 'get').mockImplementation(
      () => ({ visibilityState: 'hidden' }) as any,
    )
    expect(isDocumentVisible()).toBe(false)
  })

  test('Returns true when visibilityState=prerender', () => {
    vi.spyOn(window, 'document', 'get').mockImplementation(
      () => ({ visibilityState: 'prerender' }) as any,
    )
    expect(document.visibilityState).toBe('prerender')
    expect(isDocumentVisible()).toBe(true)
  })
  test('Returns true when visibilityState=visible', () => {
    vi.spyOn(window, 'document', 'get').mockImplementation(
      () => ({ visibilityState: 'visible' }) as any,
    )
    expect(document.visibilityState).toBe('visible')
    expect(isDocumentVisible()).toBe(true)
  })
  test('Returns true when visibilityState=undefined', () => {
    vi.spyOn(window, 'document', 'get').mockImplementation(
      () => ({ visibilityState: undefined }) as any,
    )
    expect(document.visibilityState).toBeUndefined()
    expect(isDocumentVisible()).toBe(true)
  })
})

describe('joinUrls', () => {
  test.each([
    ['/api/', '/banana', '/api/banana'],
    ['/api/', 'banana', '/api/banana'],
    ['/api', '/banana', '/api/banana'],
    ['/api', 'banana', '/api/banana'],
    ['', '/banana', '/banana'],
    ['', 'banana', 'banana'],
    ['api', '?a=1', 'api?a=1'],
    ['api/', '?a=1', 'api/?a=1'],
    ['api', 'banana?a=1', 'api/banana?a=1'],
    ['api/', 'banana?a=1', 'api/banana?a=1'],
    ['https://example.com/api', 'banana', 'https://example.com/api/banana'],
    ['https://example.com/api', '/banana', 'https://example.com/api/banana'],
    ['https://example.com/api/', 'banana', 'https://example.com/api/banana'],
    ['https://example.com/api/', '/banana', 'https://example.com/api/banana'],
    ['https://example.com/api/', 'https://example.org', 'https://example.org'],
    ['https://example.com/api/', '//example.org', '//example.org'],
  ])('%s and %s join to %s', (base, url, expected) => {
    expect(joinUrls(base, url)).toBe(expected)
  })
})
