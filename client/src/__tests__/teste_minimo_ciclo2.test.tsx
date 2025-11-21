// Ciclo 2 - Código mínimo (GREEN)
// Teste: "1 of 3 steps completed" quando 1 de 3 desafios completados

import { describe, it, expect } from 'vitest';

describe('Ciclo2 - Progress Calculation (mínimo)', () => {
  it('computes "1 of 3 steps completed" for 1 completed out of 3', () => {
    const completedChallengeIds = ['c1'];
    const moduleChallengeIds = ['c1', 'c2', 'c3'];

    const completedInModule = completedChallengeIds.filter(id =>
      new Set(moduleChallengeIds).has(id)
    ).length;

    const totalInModule = moduleChallengeIds.length;

    const stepsText = `${completedInModule} of ${totalInModule} steps completed`;

    expect(completedInModule).toBe(1);
    expect(totalInModule).toBe(3);
    expect(stepsText).toBe('1 of 3 steps completed');
  });
});
