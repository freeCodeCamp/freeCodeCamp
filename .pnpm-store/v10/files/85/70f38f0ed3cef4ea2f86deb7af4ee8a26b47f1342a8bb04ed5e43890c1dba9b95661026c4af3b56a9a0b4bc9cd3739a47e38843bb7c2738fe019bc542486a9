import build, { OnUnknown } from "../../index";
import { expectType } from "tsd";
import { Transform } from "stream";

/**
 * If enablePipelining is set to true, the function passed as an argument
 * must return a transform. The unknown event should be listened to on the
 * stream passed in the first argument.
 */
expectType<Transform>(build((source) => source, { enablePipelining: true }));

/**
 * If enablePipelining is not set the unknown event can be listened to on
 * the returned stream.
 */
expectType<Transform & OnUnknown>(build((source) => {}));

/**
 * build also accepts an async function
 */
expectType<Transform  & OnUnknown>(build(async (source) => {}));
