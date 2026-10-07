import { HeadersList } from '../glossary'

export function headersToList(headers: Headers): HeadersList {
  const headersList: HeadersList = []

  headers.forEach((value, name) => {
    const resolvedValue = value.includes(',')
      ? value.split(',').map((value) => value.trim())
      : value

    headersList.push([name, resolvedValue])
  })

  return headersList
}
