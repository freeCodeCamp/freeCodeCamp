import { InternalError } from './devUtils'

describe(InternalError, () => {
  it('creates an InternalError instance', () => {
    const error = new InternalError('Message')

    expect(error.name).toBe('InternalError')
    expect(error.message).toBe('Message')
    expect(error.toString()).toBe('InternalError: Message')
    expect(error.stack).toMatch(/\w+/)
  })

  it('passes the identity check', () => {
    const error = new InternalError('Message')
    expect(error instanceof InternalError).toBe(true)
    expect(error instanceof Error).toBe(true)

    const extraneousError = new Error('Message')
    expect(extraneousError).not.toBeInstanceOf(InternalError)
  })
})
