import { describe, it, expect } from 'vitest'
import { getCleanUrl } from './getCleanUrl'

describe('getCleanUrl', () => {
  describe('given a URL without query parameters', () => {
    it('should return url href as-is', () => {
      const url = new URL('https://github.com')
      expect(getCleanUrl(url)).toEqual('https://github.com/')
    })
  })

  describe('given a URL with query parameters', () => {
    it('should return url without parameters', () => {
      const url = new URL('https://github.com/mswjs/?userId=abc-123')
      expect(getCleanUrl(url)).toEqual('https://github.com/mswjs/')
    })
  })

  describe('given a URL with a hash', () => {
    it('should return a url without hash', () => {
      const url = new URL('https://github.com/mswjs/#hello-world')
      expect(getCleanUrl(url)).toEqual('https://github.com/mswjs/')
    })
  })

  describe('given an absolute URL ', () => {
    it('should return a clean relative URL', () => {
      const url = new URL('/login?query=value', 'https://github.com')
      expect(getCleanUrl(url, false)).toEqual('/login')
    })
  })
})
