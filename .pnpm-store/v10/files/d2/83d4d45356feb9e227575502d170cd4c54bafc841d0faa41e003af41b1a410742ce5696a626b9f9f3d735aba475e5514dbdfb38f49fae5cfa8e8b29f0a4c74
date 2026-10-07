import type { SerializedError } from '@reduxjs/toolkit'

const task = 'task'
const listener = 'listener'
const completed = 'completed'
const cancelled = 'cancelled'

/* TaskAbortError error codes  */
export const taskCancelled = `task-${cancelled}` as const
export const taskCompleted = `task-${completed}` as const
export const listenerCancelled = `${listener}-${cancelled}` as const
export const listenerCompleted = `${listener}-${completed}` as const

export class TaskAbortError implements SerializedError {
  name = 'TaskAbortError'
  message: string
  constructor(public code: string | undefined) {
    this.message = `${task} ${cancelled} (reason: ${code})`
  }
}
