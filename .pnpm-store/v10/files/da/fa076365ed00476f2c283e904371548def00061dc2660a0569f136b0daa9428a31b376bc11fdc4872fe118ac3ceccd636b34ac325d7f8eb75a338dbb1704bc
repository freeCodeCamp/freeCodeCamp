/**
 * Returns all accepted mime types, ordered by precedence as defined
 * in [RFC 7231 Section 5.3.2](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.2).
 *
 * Precedence rules (highest to lowest):
 * 1. Quality value (`q` parameter, default 1).
 * 2. Specificity: `type/subtype` > `type/*` > `*\/*`.
 * 3. Number of media type parameters (more = more specific).
 *
 * Types with `q=0` are excluded (explicitly not acceptable).
 */
export function getAllAcceptedMimeTypes(
  acceptHeader: string | null,
): Array<string> {
  if (acceptHeader == null) {
    return []
  }

  const accepted: Array<{
    type: string
    quality: number
    specificity: number
    parameterCount: number
  }> = []

  for (const part of acceptHeader.split(',')) {
    const [type, ...params] = part.split(';').map((v) => v.trim())

    let quality = 1
    let parameterCount = 0

    for (const param of params) {
      const [key, value] = param.split('=').map((v) => v.trim())

      if (key === 'q') {
        quality = Number(value)
      } else {
        parameterCount++
      }
    }

    // RFC 7231: a quality value of 0 indicates "not acceptable".
    if (quality === 0) {
      continue
    }

    const [mediaType, mediaSubtype] = type.split('/')
    const specificity = mediaType === '*' ? 0 : mediaSubtype === '*' ? 1 : 2

    accepted.push({ type, quality, specificity, parameterCount })
  }

  if (!accepted.length) {
    return []
  }

  return accepted
    .sort((left, right) => {
      if (right.quality !== left.quality) {
        return right.quality - left.quality
      }

      if (right.specificity !== left.specificity) {
        return right.specificity - left.specificity
      }

      return right.parameterCount - left.parameterCount
    })
    .map((entry) => entry.type)
}
