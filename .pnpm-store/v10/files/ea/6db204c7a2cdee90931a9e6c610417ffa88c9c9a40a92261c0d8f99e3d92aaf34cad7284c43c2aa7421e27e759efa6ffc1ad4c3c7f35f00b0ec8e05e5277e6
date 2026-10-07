import { appendHeader } from './appendHeader'

describe('appendHeader', () => {
  describe('given appending a non-existing header', () => {
    describe('with a single new value', () => {
      it('should create it and assign the value', () => {
        const headers = appendHeader({}, 'content-type', 'application/json')
        expect(headers).toHaveProperty('content-type', 'application/json')
      })
    })

    describe('with multiple new values', () => {
      it('should create a list of values', () => {
        const headers = appendHeader({}, 'accept', [
          'application/json',
          'text/plain',
        ])
        expect(headers).toHaveProperty('accept', [
          'application/json',
          'text/plain',
        ])
      })
    })
  })

  describe('given appending to an existing header', () => {
    describe('with a single new value', () => {
      it('should append a single value to existing values', () => {
        const headers = appendHeader(
          {
            'content-type': 'application/json',
          },
          'content-type',
          'image/png'
        )

        expect(headers).toHaveProperty('content-type', [
          'application/json',
          'image/png',
        ])
      })
    })

    describe('with multiple new values', () => {
      it('should merge multiple values with existing values', () => {
        const headers = appendHeader(
          {
            'content-type': 'application/json',
          },
          'content-type',
          ['image/png', 'text/plain']
        )

        expect(headers).toHaveProperty('content-type', [
          'application/json',
          'image/png',
          'text/plain',
        ])
      })
    })
  })
})
