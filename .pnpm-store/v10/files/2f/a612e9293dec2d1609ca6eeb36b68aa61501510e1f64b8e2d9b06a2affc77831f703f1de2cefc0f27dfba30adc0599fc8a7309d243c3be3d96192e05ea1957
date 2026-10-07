import * as Chunk from "../../Chunk.js";
import * as Effect from "../../Effect.js";
import * as Option from "../../Option.js";
import * as Queue from "../../Queue.js";
import * as take from "../take.js";
/** @internal */
export const emit = value => Effect.succeed(Chunk.of(value));
/** @internal */
export const emitChunk = chunk => Effect.succeed(chunk);
/** @internal */
export const empty = () => Effect.succeed(Chunk.empty());
/** @internal */
export const end = () => Effect.fail(Option.none());
/** @internal */
export const fail = error => Effect.fail(Option.some(error));
/** @internal */
export const failCause = cause => Effect.mapError(Effect.failCause(cause), Option.some);
/** @internal */
export const fromDequeue = dequeue => Effect.flatMap(Queue.take(dequeue), take.done);
//# sourceMappingURL=pull.js.map