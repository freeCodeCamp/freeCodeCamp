import colors from 'picocolors'

export function invariant(predicate, message, ...args) {
  if (!predicate) {
    // eslint-disable-next-line no-console
    console.error(colors.red(message), ...args)
    process.exit(1)
  }
}
