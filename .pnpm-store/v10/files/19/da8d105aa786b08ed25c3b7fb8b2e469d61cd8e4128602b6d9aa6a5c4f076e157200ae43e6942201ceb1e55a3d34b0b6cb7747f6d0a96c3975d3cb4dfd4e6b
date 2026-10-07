export function isDomParserSupportedType(
  type: string
): type is DOMParserSupportedType {
  const supportedTypes: Array<DOMParserSupportedType> = [
    'application/xhtml+xml',
    'application/xml',
    'image/svg+xml',
    'text/html',
    'text/xml',
  ]
  return supportedTypes.some((supportedType) => {
    return type.startsWith(supportedType)
  })
}
