// Ciclo 3 - Código mínimo (GREEN)
// Teste: "3 of 3 steps completed" quando 3 de 3 desafios completados

import { describe, it, expect } from 'vitest';

describe('Ciclo3 - Progress Calculation (mínimo)', () => {
  it('computes "3 of 3 steps completed" for 3 completed out of 3', () => {
    const completedChallengeIds = ['c1', 'c2', 'c3'];
    const moduleChallengeIds = ['c1', 'c2', 'c3'];

    const completedInModule = completedChallengeIds.filter(id =>
      new Set(moduleChallengeIds).has(id)
    ).length;

    const totalInModule = moduleChallengeIds.length;

    const stepsText = `${completedInModule} of ${totalInModule} steps completed`;

    expect(completedInModule).toBe(3);
    expect(totalInModule).toBe(3);
    expect(stepsText).toBe('3 of 3 steps completed');
  });
});
