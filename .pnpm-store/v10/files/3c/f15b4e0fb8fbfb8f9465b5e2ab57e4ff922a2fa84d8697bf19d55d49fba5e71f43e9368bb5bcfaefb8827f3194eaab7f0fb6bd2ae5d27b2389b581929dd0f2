/** @internal */
export type SinkEndReason = ScheduleEnd | UpstreamEnd

/** @internal */
export const OP_SCHEDULE_END = "ScheduleEnd" as const

/** @internal */
export type OP_SCHEDULE_END = typeof OP_SCHEDULE_END

/** @internal */
export const OP_UPSTREAM_END = "UpstreamEnd" as const

/** @internal */
export type OP_UPSTREAM_END = typeof OP_UPSTREAM_END

/** @internal */
export interface ScheduleEnd {
  readonly _tag: OP_SCHEDULE_END
}

/** @internal */
export interface UpstreamEnd {
  readonly _tag: OP_UPSTREAM_END
}

/** @internal */
export const ScheduleEnd: SinkEndReason = { _tag: OP_SCHEDULE_END }

/** @internal */
export const UpstreamEnd: SinkEndReason = { _tag: OP_UPSTREAM_END }
