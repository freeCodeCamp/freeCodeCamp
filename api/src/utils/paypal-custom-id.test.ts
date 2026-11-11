import { describe, expect, it } from 'vitest';

import { decodeCustomId, encodeCustomId } from './paypal-custom-id.js';

const donorId = '5fa2db00a25c1c1fa49ce067';

describe('PayPal custom id', () => {
  it('round trips a donor id', () => {
    expect(decodeCustomId(encodeCustomId(donorId))).toBe(donorId);
  });

  it('stays within the 127 character limit PayPal allows', () => {
    expect(encodeCustomId(donorId).length).toBeLessThanOrEqual(127);
  });

  it('has no donor for a custom id written by another app', () => {
    expect(decodeCustomId(donorId)).toBe(null);
    expect(decodeCustomId('order-12345')).toBe(null);
  });

  it('has no donor for a payload of another version', () => {
    const otherVersion = Buffer.from(
      JSON.stringify({ v: 2, u: donorId })
    ).toString('base64url');

    expect(decodeCustomId(otherVersion)).toBe(null);
  });

  it('has no donor when the custom id is missing', () => {
    expect(decodeCustomId(undefined)).toBe(null);
  });
});
