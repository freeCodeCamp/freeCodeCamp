import { r as Interceptor, t as ExtractEventNames } from "./Interceptor-BsZ21ue0.cjs";
import { EventMap, Listener } from "strict-event-emitter";

//#region src/BatchInterceptor.d.ts
interface BatchInterceptorOptions<InterceptorList extends ReadonlyArray<Interceptor<any>>> {
  name: string;
  interceptors: InterceptorList;
}
type ExtractEventMapType<InterceptorList extends ReadonlyArray<Interceptor<any>>> = InterceptorList extends ReadonlyArray<infer InterceptorType> ? InterceptorType extends Interceptor<infer EventMap> ? EventMap : never : never;
/**
 * A batch interceptor that exposes a single interface
 * to apply and operate with multiple interceptors at once.
 */
declare class BatchInterceptor<InterceptorList extends ReadonlyArray<Interceptor<any>>, Events extends EventMap = ExtractEventMapType<InterceptorList>> extends Interceptor<Events> {
  static symbol: symbol;
  private interceptors;
  constructor(options: BatchInterceptorOptions<InterceptorList>);
  protected setup(): void;
  on<EventName extends ExtractEventNames<Events>>(event: EventName, listener: Listener<Events[EventName]>): this;
  once<EventName extends ExtractEventNames<Events>>(event: EventName, listener: Listener<Events[EventName]>): this;
  off<EventName extends ExtractEventNames<Events>>(event: EventName, listener: Listener<Events[EventName]>): this;
  removeAllListeners<EventName extends ExtractEventNames<Events>>(event?: EventName | undefined): this;
}
//#endregion
export { BatchInterceptorOptions as n, ExtractEventMapType as r, BatchInterceptor as t };
//# sourceMappingURL=BatchInterceptor-KKF8Q47I.d.cts.map