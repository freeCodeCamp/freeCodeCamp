/// <reference types="node" />

interface MIMEType {
  type: string
  subtype: string
  parameters: Map<string, string>
  essence: string
}

/**
 * Parse a string to a {@link MIMEType} object. Returns `failure` if the string
 * couldn't be parsed.
 * @see https://mimesniff.spec.whatwg.org/#parse-a-mime-type
 */
export function parseMIMEType (input: string): 'failure' | MIMEType

/**
 * Convert a MIMEType object to a string.
 * @see https://mimesniff.spec.whatwg.org/#serialize-a-mime-type
 */
export function serializeAMimeType (mimeType: MIMEType): string
