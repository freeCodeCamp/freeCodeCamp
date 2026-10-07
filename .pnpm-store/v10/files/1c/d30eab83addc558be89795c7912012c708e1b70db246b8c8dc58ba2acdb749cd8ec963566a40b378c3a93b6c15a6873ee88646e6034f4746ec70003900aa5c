import { IEventTarget } from '../interfaces';
import { TNativeEventTarget } from './native-event-target';

export type TEventTargetConstructor = new <EventMap extends Record<string, Event>>(
    nativeEventTarget: TNativeEventTarget
) => IEventTarget<EventMap>;
