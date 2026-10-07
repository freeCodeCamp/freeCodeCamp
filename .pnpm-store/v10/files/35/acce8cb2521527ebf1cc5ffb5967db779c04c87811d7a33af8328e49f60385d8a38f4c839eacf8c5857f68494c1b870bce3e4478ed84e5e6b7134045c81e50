import { HeadersList } from '../glossary'
import { flattenHeadersList } from './flattenHeadersList'

describe('given a headers list', () => {
  it('flattens its multi-value headers', () => {
    const headersList: HeadersList = [
      ['accept', ['application/json', 'text/xml']],
      ['content-type', 'application/pdf'],
    ]

    expect(flattenHeadersList(headersList)).toEqual([
      ['accept', 'application/json, text/xml'],
      ['content-type', 'application/pdf'],
    ])
  })
})
