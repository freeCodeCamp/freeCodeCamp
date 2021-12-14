import { getSuperOrder } from './utils';

describe('getSuperOrder', () => {
  it('returns a number for valid superblocks', () => {
    expect.assertions(1);
    expect(typeof getSuperOrder('responsive-web-design')).toBe('number');
  });

  it('throws for unknown superblocks', () => {
    expect.assertions(4);
    expect(() => getSuperOrder()).toThrow();
    expect(() => getSuperOrder(null)).toThrow();
    expect(() => getSuperOrder('')).toThrow();
    expect(() => getSuperOrder('respansive-wib-desoin')).toThrow();
  });

  it('throws for "certifications"', () => {
    expect.assertions(2);
    expect(() => getSuperOrder('certifications')).toThrow();
    expect(() => getSuperOrder('certifications', { isLegacy: true })).toThrow();
  });

  it('returns unique numbers for all current superblocks', () => {
    expect.assertions(12);
    expect(getSuperOrder('responsive-web-design')).toBe(0);
    expect(getSuperOrder('javascript-algorithms-and-data-structures')).toBe(1);
    expect(getSuperOrder('front-end-development-libraries')).toBe(2);
    expect(getSuperOrder('data-visualization')).toBe(3);
    expect(getSuperOrder('relational-databases')).toBe(4);
    expect(getSuperOrder('back-end-development-and-apis')).toBe(5);
    expect(getSuperOrder('quality-assurance')).toBe(6);
    expect(getSuperOrder('scientific-computing-with-python')).toBe(7);
    expect(getSuperOrder('data-analysis-with-python')).toBe(8);
    expect(getSuperOrder('information-security')).toBe(9);
    expect(getSuperOrder('machine-learning-with-python')).toBe(10);
    expect(getSuperOrder('coding-interview-prep')).toBe(11);
  });

  it('returns unique numbers for all legacy superblocks', () => {
    expect.assertions(1);
    expect(getSuperOrder('responsive-web-design', { isLegacy: true })).toBe(12);
  });
});
