import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

/**
 * End process by pid, forcefully, including child processes
 *
 * @see {@link https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/taskkill}
 *
 * @param {number} pid
 */
const killWin32Subprocesses = async (pid) => {
  await execAsync(`taskkill /pid ${pid} /T /F`)
}

/**
 * Kill all processes in the group by using negative pid
 *
 * @see {@link https://pubs.opengroup.org/onlinepubs/9699919799/functions/kill.html}
 *
 * @param {number} pid
 */
const killUnixSubprocesses = async (pid) => {
  process.kill(-pid, 'SIGKILL')
}

/**
 * @param {number} pid
 * @param {boolean} [isWin32]
 */
export const killSubProcesses = async (pid, isWin32 = process.platform === 'win32') => {
  try {
    if (isWin32) {
      await killWin32Subprocesses(pid)
    } else {
      await killUnixSubprocesses(pid)
    }
  } catch {
    /** ignore errors */
  }
}
