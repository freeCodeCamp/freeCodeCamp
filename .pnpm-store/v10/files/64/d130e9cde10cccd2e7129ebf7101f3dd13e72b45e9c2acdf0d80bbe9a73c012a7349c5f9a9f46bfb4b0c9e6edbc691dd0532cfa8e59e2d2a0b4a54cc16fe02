export type CpuArchitecture = 'arm64' | 'x64' | 'arm' | 'ia32' | 'mips' | 'mipsel' | 'ppc' | 'ppc64' | 'riscv64' | 's390' | 's390x';

/**
Get the operating system CPU architecture.

@example
```
import {systemArchitecture} from 'system-architecture';

// On ARM64 macOS
console.log(await systemArchitecture());
//=> 'arm64'
```
*/
export function systemArchitecture(): Promise<CpuArchitecture>;

/**
Get the operating system CPU architecture.

@example
```
import {systemArchitectureSync} from 'system-architecture';

// On ARM64 macOS
console.log(systemArchitectureSync());
//=> 'arm64'
```
*/
export function systemArchitectureSync(): CpuArchitecture;
