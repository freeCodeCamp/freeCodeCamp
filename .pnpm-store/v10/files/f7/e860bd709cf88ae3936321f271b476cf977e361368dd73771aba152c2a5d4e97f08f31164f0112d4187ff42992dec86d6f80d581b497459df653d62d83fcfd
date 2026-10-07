import type { Emitter } from 'strict-event-emitter'
import { type EventMap } from 'strict-event-emitter'

/**
 * Pipes all emitted events from one emitter to another.
 */
export function pipeEvents<Events extends EventMap>(
  source: Emitter<Events>,
  destination: Emitter<Events>,
): void {
  const rawEmit: typeof source.emit & { _isPiped?: boolean } = source.emit

  if (rawEmit._isPiped) {
    return
  }

  const sourceEmit: typeof source.emit & { _isPiped?: boolean } =
    function sourceEmit(this: typeof source, event, ...data) {
      destination.emit(event, ...data)
      return rawEmit.call(this, event, ...data)
    }

  sourceEmit._isPiped = true

  source.emit = sourceEmit
}
