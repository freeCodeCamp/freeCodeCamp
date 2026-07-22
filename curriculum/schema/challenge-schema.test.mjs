import { describe, expect, it } from 'vitest';

import { schema } from './challenge-schema.js';

describe('challenge schema', () => {
  it('should not be changed without informing the mobile team', () => {
    expect(schema.describe()).toMatchSnapshot();
  });
});
