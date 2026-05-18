import { describe, it, expect } from 'vitest';
import { assignVariantBucket } from './drip-campaign.js';

describe('assignVariantBucket', () => {
  it('should return either A or B', () => {
    const variant = assignVariantBucket('test-user-id');
    expect(['A', 'B']).toContain(variant);
  });

  it('should return consistent results for the same userId', () => {
    const userId = '6863cb33ad61b38a74d2ba40';
    const variant1 = assignVariantBucket(userId);
    const variant2 = assignVariantBucket(userId);
    const variant3 = assignVariantBucket(userId);

    expect(variant1).toBe(variant2);
    expect(variant2).toBe(variant3);
  });

  it('should distribute users across both buckets', () => {
    const variants = new Set<string>();

    // Test with multiple user IDs to ensure both buckets are possible
    for (let i = 0; i < 100; i++) {
      const variant = assignVariantBucket(`user-${i}`);
      variants.add(variant);
    }

    // Both A and B should be present
    expect(variants.has('A')).toBe(true);
    expect(variants.has('B')).toBe(true);
  });
});
