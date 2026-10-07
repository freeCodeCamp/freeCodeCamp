export function nextTick(callback: () => void) {
  setTimeout(callback, 0)
}

export function nextTickAsync(callback: () => void) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback())
    }, 0)
  })
}
