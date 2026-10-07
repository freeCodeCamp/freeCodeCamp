import { noop } from '@internal/listenerMiddleware/utils'
import { AClockworkOrange } from './fixtures/book'

describe('Entity utils', () => {
  describe(`selectIdValue()`, () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(noop)

    beforeEach(() => {
      vi.resetModules() // this is important - it clears the cache
      vi.stubEnv('NODE_ENV', 'development')
    })

    afterEach(() => {
      vi.unstubAllEnvs()
      vi.clearAllMocks()
    })

    afterAll(() => {
      vi.restoreAllMocks()
    })

    it('should not warn when key does exist', async () => {
      const { selectIdValue } = await import('../utils')

      selectIdValue(AClockworkOrange, (book: any) => book.id)
      expect(consoleWarnSpy).not.toHaveBeenCalled()
    })

    it('should warn when key does not exist in dev mode', async () => {
      const { selectIdValue } = await import('../utils')

      expect(process.env.NODE_ENV).toBe('development')

      selectIdValue(AClockworkOrange, (book: any) => book.foo)

      expect(consoleWarnSpy).toHaveBeenCalledOnce()
    })

    it('should warn when key is undefined in dev mode', async () => {
      const { selectIdValue } = await import('../utils')

      expect(process.env.NODE_ENV).toBe('development')

      const undefinedAClockworkOrange = { ...AClockworkOrange, id: undefined }
      selectIdValue(undefinedAClockworkOrange, (book: any) => book.id)

      expect(consoleWarnSpy).toHaveBeenCalledOnce()
    })

    it('should not warn when key does not exist in prod mode', async () => {
      vi.stubEnv('NODE_ENV', 'production')

      const { selectIdValue } = await import('../utils')

      selectIdValue(AClockworkOrange, (book: any) => book.foo)

      expect(consoleWarnSpy).not.toHaveBeenCalled()
    })

    it('should not warn when key is undefined in prod mode', async () => {
      vi.stubEnv('NODE_ENV', 'production')

      const { selectIdValue } = await import('../utils')

      const undefinedAClockworkOrange = { ...AClockworkOrange, id: undefined }
      selectIdValue(undefinedAClockworkOrange, (book: any) => book.id)

      expect(consoleWarnSpy).not.toHaveBeenCalled()
    })
  })
})
