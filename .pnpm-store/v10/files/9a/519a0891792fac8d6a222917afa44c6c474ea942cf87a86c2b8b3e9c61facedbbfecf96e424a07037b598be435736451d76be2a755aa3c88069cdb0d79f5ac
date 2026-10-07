export function tryCatch<Fn extends (...args: any[]) => any>(
  fn: Fn,
  onException?: (error: Error) => void,
): ReturnType<Fn> | undefined {
  try {
    const result = fn()
    return result
  } catch (error) {
    onException?.(error as Error)
  }
}
