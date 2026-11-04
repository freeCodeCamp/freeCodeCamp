import { readFileSync } from 'node:fs';

import { expect, it } from 'vitest';

it('explains that Sarah is asking about the source of the issue in Task 61', () => {
  const challenge = readFileSync(
    new URL(
      '../challenges/english/blocks/learn-how-to-plan-future-events/675329bc0e2bfa7f1c4f7411.md',
      import.meta.url
    ),
    'utf8'
  );
  const explanation = challenge
    .split('# --explanation--')[1]
    .trim()
    .split(/\r?\n\r?\n/)[0];

  expect(explanation).toBe(
    "Pay attention to the phrase `where it originated from` in Sarah's question. It indicates that she is asking about the source of the issue."
  );
});
