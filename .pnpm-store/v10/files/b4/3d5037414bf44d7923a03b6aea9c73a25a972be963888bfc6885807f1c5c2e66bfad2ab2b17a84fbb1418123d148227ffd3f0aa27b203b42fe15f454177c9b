import * as Duration from "../Duration.js";
import * as Effect from "../Effect.js";
import type * as Scope from "../Scope.js";
import type * as Stream from "../Stream.js";
export declare const share: (<A, E>(config: {
    readonly capacity: "unbounded";
    readonly replay?: number | undefined;
    readonly idleTimeToLive?: Duration.DurationInput | undefined;
} | {
    readonly capacity: number;
    readonly strategy?: "sliding" | "dropping" | "suspend" | undefined;
    readonly replay?: number | undefined;
    readonly idleTimeToLive?: Duration.DurationInput | undefined;
}) => <R>(self: Stream.Stream<A, E, R>) => Effect.Effect<Stream.Stream<A, E>, never, R | Scope.Scope>) & (<A, E, R>(self: Stream.Stream<A, E, R>, config: {
    readonly capacity: "unbounded";
    readonly replay?: number | undefined;
    readonly idleTimeToLive?: Duration.DurationInput | undefined;
} | {
    readonly capacity: number;
    readonly strategy?: "sliding" | "dropping" | "suspend" | undefined;
    readonly replay?: number | undefined;
    readonly idleTimeToLive?: Duration.DurationInput | undefined;
}) => Effect.Effect<Stream.Stream<A, E>, never, R | Scope.Scope>);
declare const void_: Stream.Stream<void>;
export { 
/** @internal */
void_ as void };
export declare const zipLatestAll: <T extends ReadonlyArray<Stream.Stream<any, any, any>>>(...streams: T) => Stream.Stream<[T[number]] extends [never] ? never : { [K in keyof T]: T[K] extends Stream.Stream<infer A, infer _E, infer _R> ? A : never; }, [T[number]] extends [never] ? never : T[number] extends Stream.Stream<infer _A, infer _E_1, infer _R_1> ? _E_1 : never, [T[number]] extends [never] ? never : T[number] extends Stream.Stream<infer _A, infer _E_2, infer _R_2> ? _R_2 : never>;
//# sourceMappingURL=stream.d.ts.map