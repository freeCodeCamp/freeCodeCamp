import * as events from './web'

type EventConstructor = typeof events.Event
type CustomEventConstructor = typeof events.CustomEvent
type EventTargetConstructor = typeof events.EventTarget

declare global {
  type Event = events.Event
  type CustomEvent<T = any> = events.CustomEvent<T>
  type EventTarget = events.EventTarget

  const Event: EventConstructor
  const CustomEvent: CustomEventConstructor
  const EventTarget: EventTargetConstructor
}
