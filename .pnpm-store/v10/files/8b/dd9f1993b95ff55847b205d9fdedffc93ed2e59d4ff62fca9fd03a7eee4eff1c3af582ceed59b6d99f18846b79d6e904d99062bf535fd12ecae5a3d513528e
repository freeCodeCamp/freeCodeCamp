export enum StatusCodeColor {
  Success = '#69AB32',
  Warning = '#F0BB4B',
  Danger = '#E95F5D',
}

/**
 * Returns a HEX color for a given response status code number.
 */
export function getStatusCodeColor(status: number): StatusCodeColor {
  if (status < 300) {
    return StatusCodeColor.Success
  }

  if (status < 400) {
    return StatusCodeColor.Warning
  }

  return StatusCodeColor.Danger
}
