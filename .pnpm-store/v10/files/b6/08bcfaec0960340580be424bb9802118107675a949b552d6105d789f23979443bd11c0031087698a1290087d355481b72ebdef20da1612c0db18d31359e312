export const constants: {
  signals: Record<string, number>
  errnos: Record<string, number>
}

export const EOL: '\r\n' | '\n'

export function platform(): 'android' | 'darwin' | 'ios' | 'linux' | 'win32'

export function arch(): 'arm' | 'arm64' | 'ia32' | 'x64'

export function type(): string

export function version(): string

export function release(): string

export function machine(): string

export function execPath(): string

export function pid(): number

export function ppid(): number

export function cwd(): string

export function chdir(dir: string): string

export function tmpdir(): string

export function homedir(): string

export function hostname(): string

export function kill(pid: number, signal?: string | number): void

export function endianness(): 'LE' | 'BE'

export function availableParallelism(): number

export interface CpuUsage {
  user: number
  system: number
}

export function cpuUsage(previous?: CpuUsage): CpuUsage

export function threadCpuUsage(previous?: CpuUsage): CpuUsage

export function resourceUsage(): {
  userCPUTime: number
  systemCPUTime: number
  maxRSS: number
  sharedMemorySize: number
  unsharedDataSize: number
  unsharedStackSize: number
  minorPageFault: number
  majorPageFault: number
  swappedOut: number
  fsRead: number
  fsWrite: number
  ipcSent: number
  ipcReceived: number
  signalsCount: number
  voluntaryContextSwitches: number
  involuntaryContextSwitches: number
}

export function memoryUsage(): {
  rss: number
  heapTotal: number
  heapUsed: number
  external: number
}

export function freemem(): number

export function totalmem(): number

export function uptime(): number

export function loadavg(): ArrayLike<number>

export function cpus(): {
  model: string
  speed: number
  times: {
    user: number
    nice: number
    sys: number
    idle: number
    irq: number
  }
}[]

export function getProcessTitle(): string

export function setProcessTitle(title: unknown): void

export function getEnvKeys(): string[]

export function getEnv(name: string): string | undefined

export function hasEnv(name: string): boolean

export function setEnv(name: string, value: string): void

export function unsetEnv(name: string): void
