import type * as LogSpan from "../LogSpan.js"

/** @internal */
export const make = (label: string, startTime: number): LogSpan.LogSpan => ({
  label,
  startTime
})

/**
 * Sanitize a given string by replacing spaces, equal signs, and double quotes with underscores.
 *
 * @internal
 */
export const formatLabel = (key: string) => key.replace(/[\s="]/g, "_")

/** @internal */
export const render = (now: number) => (self: LogSpan.LogSpan): string => {
  const label = formatLabel(self.label)
  return `${label}=${now - self.startTime}ms`
}
