import { HeadersList, FlatHeadersList } from '../glossary'

export function flattenHeadersList(list: HeadersList): FlatHeadersList {
  return list.map(([name, values]) => {
    return [name, ([] as string[]).concat(values).join(', ')]
  })
}
