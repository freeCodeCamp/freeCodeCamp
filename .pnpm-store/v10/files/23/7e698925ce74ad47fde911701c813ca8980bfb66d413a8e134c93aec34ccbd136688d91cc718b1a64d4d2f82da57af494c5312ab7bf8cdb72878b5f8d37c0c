type MettHandler<EventName, Payload> = (e: Payload, eventName: EventName) => void;
export interface IMett {
    on(eventName: EventName, callback: MettHandler<EventName, Payload>): void;
    off(eventName: EventName, callback: MettHandler<EventName, Payload>): void;
    emit(eventName: EventName, e?: Payload): void;
}
type EventName = string;
type Payload = any;
export declare function mett(): IMett;
export {};
