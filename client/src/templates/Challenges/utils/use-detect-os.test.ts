import { describe, test, expect } from 'vitest';

import { userAgentDataToArchitecture } from './use-detect-os';

describe('userAgentDataToArchitecture', () => {
  test('defaults to x86 when architecture is empty and bitness is 32', () => {
    const data = { architecture: '', bitness: '32' } as const;
    const result = userAgentDataToArchitecture(data);
    expect(result).toBe('x86');
  });

  test('defaults to x86_64 when architecture is empty and bitness is 64', () => {
    const data = { architecture: '', bitness: '64' } as const;
    const result = userAgentDataToArchitecture(data);
    expect(result).toBe('x86_64');
  });

  test('defaults to 32bit when bitness is empty', () => {
    const empty = { architecture: '', bitness: '' } as const;
    const emptyResult = userAgentDataToArchitecture(empty);
    expect(emptyResult).toBe('x86');

    const x86 = { architecture: 'x86', bitness: '' } as const;
    const x86Result = userAgentDataToArchitecture(x86);
    expect(x86Result).toBe('x86');

    const arm = { architecture: 'arm', bitness: '' } as const;
    const armResult = userAgentDataToArchitecture(arm);
    expect(armResult).toBe('arm');
  });
});
