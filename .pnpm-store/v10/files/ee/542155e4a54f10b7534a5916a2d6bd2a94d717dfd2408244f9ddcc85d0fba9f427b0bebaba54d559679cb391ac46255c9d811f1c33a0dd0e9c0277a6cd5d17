type EventWithTarget<E extends Event, T> = E & { target: T }

export function bindEvent<E extends Event, T>(
  target: T,
  event: E
): EventWithTarget<E, T> {
  Object.defineProperties(event, {
    target: {
      value: target,
      enumerable: true,
      writable: true,
    },
    currentTarget: {
      value: target,
      enumerable: true,
      writable: true,
    },
  })

  return event as EventWithTarget<E, T>
}
