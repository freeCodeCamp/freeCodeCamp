import { Emitter, EventMap } from 'strict-event-emitter'

/**
 * Emits an event on the given emitter but executes
 * the listeners sequentially. This accounts for asynchronous
 * listeners (e.g. those having "sleep" and handling the request).
 */
export async function emitAsync<
  Events extends EventMap,
  EventName extends keyof Events
>(
  emitter: Emitter<Events>,
  eventName: EventName,
  ...data: Events[EventName]
): Promise<void> {
  const listeners = emitter.listeners(eventName)

  if (listeners.length === 0) {
    return
  }

  for (const listener of listeners) {
    await listener.apply(emitter, data)
  }
}
