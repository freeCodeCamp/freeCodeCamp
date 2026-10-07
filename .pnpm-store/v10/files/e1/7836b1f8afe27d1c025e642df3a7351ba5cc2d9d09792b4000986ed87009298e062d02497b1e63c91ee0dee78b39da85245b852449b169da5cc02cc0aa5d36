let nextHandle = 1;
const RESOLVED = (() => Promise.resolve())();
const activeHandles: { [key: number]: any } = {};

/**
 * Finds the handle in the list of active handles, and removes it.
 * Returns `true` if found, `false` otherwise. Used both to clear
 * Immediate scheduled tasks, and to identify if a task should be scheduled.
 */
function findAndClearHandle(handle: number): boolean {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}

/**
 * Helper functions to schedule and unschedule microtasks.
 */
export const Immediate = {
  setImmediate(cb: () => void): number {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    RESOLVED.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },

  clearImmediate(handle: number): void {
    findAndClearHandle(handle);
  },
};

/**
 * Used for internal testing purposes only. Do not export from library.
 */
export const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};
