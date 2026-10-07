import { eventMap } from './eventMap';
export type EventType = keyof typeof eventMap;
export type EventTypeInit<K extends EventType> = SpecificEventInit<FixedDocumentEventMap[K]>;
export interface FixedDocumentEventMap extends DocumentEventMap {
    input: InputEvent;
}
type SpecificEventInit<E extends Event> = E extends InputEvent ? InputEventInit : E extends ClipboardEvent ? ClipboardEventInit : E extends KeyboardEvent ? KeyboardEventInit : E extends PointerEvent ? PointerEventInit : E extends MouseEvent ? MouseEventInit : E extends FocusEvent ? FocusEventInit : E extends UIEvent ? UIEventInit : EventInit;
export interface PointerCoords {
    x?: number;
    y?: number;
    clientX?: number;
    clientY?: number;
    offsetX?: number;
    offsetY?: number;
    pageX?: number;
    pageY?: number;
    screenX?: number;
    screenY?: number;
}
export {};
