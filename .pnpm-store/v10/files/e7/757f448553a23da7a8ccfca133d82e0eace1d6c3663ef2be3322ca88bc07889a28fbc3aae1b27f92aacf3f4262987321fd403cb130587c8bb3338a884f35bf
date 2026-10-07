import { globalValue } from "../GlobalValue.js"
import type * as Request from "../Request.js"
import { fiberRefUnsafeMake } from "./core.js"

/** @internal */
export const currentRequestMap = globalValue(
  Symbol.for("effect/FiberRef/currentRequestMap"),
  () => fiberRefUnsafeMake(new Map<any, Request.Entry<any>>())
)
