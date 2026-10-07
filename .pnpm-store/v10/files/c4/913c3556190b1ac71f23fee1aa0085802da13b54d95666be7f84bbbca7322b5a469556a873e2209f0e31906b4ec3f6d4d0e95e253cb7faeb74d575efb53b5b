import type * as Differ from "../Differ.js"
import { dual } from "../Function.js"
import type * as RuntimeFlags from "../RuntimeFlags.js"
import type * as RuntimeFlagsPatch from "../RuntimeFlagsPatch.js"
import * as internalDiffer from "./differ.js"
import * as runtimeFlagsPatch from "./runtimeFlagsPatch.js"

/** @internal */
export const None: RuntimeFlags.RuntimeFlag = 0 as RuntimeFlags.RuntimeFlag

/** @internal */
export const Interruption: RuntimeFlags.RuntimeFlag = 1 << 0 as RuntimeFlags.RuntimeFlag

/** @internal */
export const OpSupervision: RuntimeFlags.RuntimeFlag = 1 << 1 as RuntimeFlags.RuntimeFlag

/** @internal */
export const RuntimeMetrics: RuntimeFlags.RuntimeFlag = 1 << 2 as RuntimeFlags.RuntimeFlag

/** @internal */
export const WindDown: RuntimeFlags.RuntimeFlag = 1 << 4 as RuntimeFlags.RuntimeFlag

/** @internal */
export const CooperativeYielding: RuntimeFlags.RuntimeFlag = 1 << 5 as RuntimeFlags.RuntimeFlag

/** @internal */
export const allFlags: ReadonlyArray<RuntimeFlags.RuntimeFlag> = [
  None,
  Interruption,
  OpSupervision,
  RuntimeMetrics,
  WindDown,
  CooperativeYielding
]

const print = (flag: RuntimeFlags.RuntimeFlag) => {
  switch (flag) {
    case CooperativeYielding: {
      return "CooperativeYielding"
    }
    case WindDown: {
      return "WindDown"
    }
    case RuntimeMetrics: {
      return "RuntimeMetrics"
    }
    case OpSupervision: {
      return "OpSupervision"
    }
    case Interruption: {
      return "Interruption"
    }
    case None: {
      return "None"
    }
  }
}

/** @internal */
export const cooperativeYielding = (self: RuntimeFlags.RuntimeFlags): boolean => isEnabled(self, CooperativeYielding)

/** @internal */
export const disable = dual<
  (flag: RuntimeFlags.RuntimeFlag) => (self: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags,
  (self: RuntimeFlags.RuntimeFlags, flag: RuntimeFlags.RuntimeFlag) => RuntimeFlags.RuntimeFlags
>(2, (self, flag) => (self & ~flag) as RuntimeFlags.RuntimeFlags)

/** @internal */
export const disableAll = dual<
  (flags: RuntimeFlags.RuntimeFlags) => (self: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags,
  (self: RuntimeFlags.RuntimeFlags, flags: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags
>(2, (self, flags) => (self & ~flags) as RuntimeFlags.RuntimeFlags)

/** @internal */
export const enable = dual<
  (flag: RuntimeFlags.RuntimeFlag) => (self: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags,
  (self: RuntimeFlags.RuntimeFlags, flag: RuntimeFlags.RuntimeFlag) => RuntimeFlags.RuntimeFlags
>(2, (self, flag) => (self | flag) as RuntimeFlags.RuntimeFlags)

/** @internal */
export const enableAll = dual<
  (flags: RuntimeFlags.RuntimeFlags) => (self: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags,
  (self: RuntimeFlags.RuntimeFlags, flags: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags
>(2, (self, flags) => (self | flags) as RuntimeFlags.RuntimeFlags)

/** @internal */
export const interruptible = (self: RuntimeFlags.RuntimeFlags): boolean => interruption(self) && !windDown(self)

/** @internal */
export const interruption = (self: RuntimeFlags.RuntimeFlags): boolean => isEnabled(self, Interruption)

/** @internal */
export const isDisabled = dual<
  (flag: RuntimeFlags.RuntimeFlag) => (self: RuntimeFlags.RuntimeFlags) => boolean,
  (self: RuntimeFlags.RuntimeFlags, flag: RuntimeFlags.RuntimeFlag) => boolean
>(2, (self, flag) => !isEnabled(self, flag))

/** @internal */
export const isEnabled = dual<
  (flag: RuntimeFlags.RuntimeFlag) => (self: RuntimeFlags.RuntimeFlags) => boolean,
  (self: RuntimeFlags.RuntimeFlags, flag: RuntimeFlags.RuntimeFlag) => boolean
>(2, (self, flag) => (self & flag) !== 0)

/** @internal */
export const make = (...flags: ReadonlyArray<RuntimeFlags.RuntimeFlag>): RuntimeFlags.RuntimeFlags =>
  flags.reduce((a, b) => a | b, 0) as RuntimeFlags.RuntimeFlags

/** @internal */
export const none: RuntimeFlags.RuntimeFlags = make(None)

/** @internal */
export const opSupervision = (self: RuntimeFlags.RuntimeFlags): boolean => isEnabled(self, OpSupervision)

/** @internal */
export const render = (self: RuntimeFlags.RuntimeFlags): string => {
  const active: Array<string> = []
  allFlags.forEach((flag) => {
    if (isEnabled(self, flag)) {
      active.push(`${print(flag)}`)
    }
  })
  return `RuntimeFlags(${active.join(", ")})`
}

/** @internal */
export const runtimeMetrics = (self: RuntimeFlags.RuntimeFlags): boolean => isEnabled(self, RuntimeMetrics)

/** @internal */
export const toSet = (self: RuntimeFlags.RuntimeFlags): ReadonlySet<RuntimeFlags.RuntimeFlag> =>
  new Set(allFlags.filter((flag) => isEnabled(self, flag)))

export const windDown = (self: RuntimeFlags.RuntimeFlags): boolean => isEnabled(self, WindDown)

// circular with RuntimeFlagsPatch

/** @internal */
export const enabledSet = (self: RuntimeFlagsPatch.RuntimeFlagsPatch): ReadonlySet<RuntimeFlags.RuntimeFlag> =>
  toSet((runtimeFlagsPatch.active(self) & runtimeFlagsPatch.enabled(self)) as RuntimeFlags.RuntimeFlags)

/** @internal */
export const disabledSet = (self: RuntimeFlagsPatch.RuntimeFlagsPatch): ReadonlySet<RuntimeFlags.RuntimeFlag> =>
  toSet((runtimeFlagsPatch.active(self) & ~runtimeFlagsPatch.enabled(self)) as RuntimeFlags.RuntimeFlags)

/** @internal */
export const diff = dual<
  (that: RuntimeFlags.RuntimeFlags) => (self: RuntimeFlags.RuntimeFlags) => RuntimeFlagsPatch.RuntimeFlagsPatch,
  (self: RuntimeFlags.RuntimeFlags, that: RuntimeFlags.RuntimeFlags) => RuntimeFlagsPatch.RuntimeFlagsPatch
>(2, (self, that) => runtimeFlagsPatch.make(self ^ that, that))

/** @internal */
export const patch = dual<
  (patch: RuntimeFlagsPatch.RuntimeFlagsPatch) => (self: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags,
  (self: RuntimeFlags.RuntimeFlags, patch: RuntimeFlagsPatch.RuntimeFlagsPatch) => RuntimeFlags.RuntimeFlags
>(2, (self, patch) =>
  (
    (self & (runtimeFlagsPatch.invert(runtimeFlagsPatch.active(patch)) | runtimeFlagsPatch.enabled(patch))) |
    (runtimeFlagsPatch.active(patch) & runtimeFlagsPatch.enabled(patch))
  ) as RuntimeFlags.RuntimeFlags)

/** @internal */
export const renderPatch = (self: RuntimeFlagsPatch.RuntimeFlagsPatch): string => {
  const enabled = Array.from(enabledSet(self))
    .map((flag) => print(flag))
    .join(", ")
  const disabled = Array.from(disabledSet(self))
    .map((flag) => print(flag))
    .join(", ")
  return `RuntimeFlagsPatch(enabled = (${enabled}), disabled = (${disabled}))`
}

/** @internal */
export const differ: Differ.Differ<RuntimeFlags.RuntimeFlags, RuntimeFlagsPatch.RuntimeFlagsPatch> = internalDiffer
  .make({
    empty: runtimeFlagsPatch.empty,
    diff: (oldValue, newValue) => diff(oldValue, newValue),
    combine: (first, second) => runtimeFlagsPatch.andThen(second)(first),
    patch: (_patch, oldValue) => patch(oldValue, _patch)
  })
