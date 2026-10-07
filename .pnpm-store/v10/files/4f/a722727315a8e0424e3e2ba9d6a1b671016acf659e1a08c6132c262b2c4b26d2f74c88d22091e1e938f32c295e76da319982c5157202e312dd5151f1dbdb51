import { Headers } from '../Headers'
import { HeadersList } from '../glossary'

export function listToHeaders(list: HeadersList): Headers {
  const headers = new Headers()

  list.forEach(([name, value]) => {
    const values = ([] as string[]).concat(value)

    values.forEach((value) => {
      headers.append(name, value)
    })
  })

  return headers
}
