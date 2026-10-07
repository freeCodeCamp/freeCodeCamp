export const Signal = {
  SIGINT: 'SIGINT',
  SIGKILL: 'SIGKILL',
}

/**
 * Get an AbortController used to cancel running tasks on failure/interruption.
 * @returns AbortController
 */
export const getAbortController = (nodeProcess = process) => {
  const abortController = new AbortController()

  nodeProcess.on(Signal.SIGINT, () => {
    abortController.abort(Signal.SIGINT)
  })

  return abortController
}
