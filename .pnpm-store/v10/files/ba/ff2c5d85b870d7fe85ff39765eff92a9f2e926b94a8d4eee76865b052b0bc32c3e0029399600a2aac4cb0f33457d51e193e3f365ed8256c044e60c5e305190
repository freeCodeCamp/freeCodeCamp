interface GetTimestampOptions {
  milliseconds?: boolean
}

/**
 * Returns a timestamp string in a "HH:MM:SS" format.
 */
export function getTimestamp(options?: GetTimestampOptions): string {
  const now = new Date()
  const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`

  if (options?.milliseconds) {
    return `${timestamp}.${now.getMilliseconds().toString().padStart(3, '0')}`
  }

  return timestamp
}
