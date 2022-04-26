// utils are not typed (yet), so we have to disable some checks
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import fs from 'fs';
import path from 'path';
import { SuperBlocks } from '../config/certification-settings';
import { getSuperOrder, getSuperBlockFromDir } from './utils';

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
    expect.assertions(1);
    expect(() => getSuperOrder('certifications')).toThrow();
  });

  it('returns unique numbers for all current superblocks', () => {
    expect.assertions(13);
    expect(getSuperOrder('responsive-web-design')).toBe(0);
    expect(getSuperOrder('javascript-algorithms-and-data-structures')).toBe(1);
    expect(getSuperOrder('front-end-development-libraries')).toBe(2);
    expect(getSuperOrder('data-visualization')).toBe(3);
    expect(getSuperOrder('back-end-development-and-apis')).toBe(4);
    expect(getSuperOrder('quality-assurance')).toBe(5);
    expect(getSuperOrder('scientific-computing-with-python')).toBe(6);
    expect(getSuperOrder('data-analysis-with-python')).toBe(7);
    expect(getSuperOrder('information-security')).toBe(8);
    expect(getSuperOrder('machine-learning-with-python')).toBe(9);
    expect(getSuperOrder('coding-interview-prep')).toBe(10);
    expect(getSuperOrder('2022/responsive-web-design')).toBe(11);
    expect(getSuperOrder('relational-database')).toBe(12);
  });

  // Skipping these tests instead of deleting, so the infrastructure is there when we do the next superblock
  it.skip('returns a different order if passed the option showNewCurriculum: true', () => {
    expect.assertions(13);
    expect(
      getSuperOrder('responsive-web-design', { showNewCurriculum: true })
    ).toBe(0);
    expect(
      getSuperOrder('javascript-algorithms-and-data-structures', {
        showNewCurriculum: true
      })
    ).toBe(1);
    expect(
      getSuperOrder('front-end-development-libraries', {
        showNewCurriculum: true
      })
    ).toBe(2);
    expect(
      getSuperOrder('data-visualization', { showNewCurriculum: true })
    ).toBe(3);
    expect(
      getSuperOrder('back-end-development-and-apis', {
        showNewCurriculum: true
      })
    ).toBe(4);
    expect(
      getSuperOrder('quality-assurance', { showNewCurriculum: true })
    ).toBe(5);
    expect(
      getSuperOrder('scientific-computing-with-python', {
        showNewCurriculum: true
      })
    ).toBe(6);
    expect(
      getSuperOrder('data-analysis-with-python', { showNewCurriculum: true })
    ).toBe(7);
    expect(
      getSuperOrder('information-security', { showNewCurriculum: true })
    ).toBe(8);
    expect(
      getSuperOrder('machine-learning-with-python', { showNewCurriculum: true })
    ).toBe(9);
    expect(
      getSuperOrder('coding-interview-prep', { showNewCurriculum: true })
    ).toBe(10);
    expect(
      getSuperOrder('2022/responsive-web-design', { showNewCurriculum: true })
    ).toBe(11);
    expect(
      getSuperOrder('relational-database', { showNewCurriculum: true })
    ).toBe(12);
  });
});

describe('getSuperBlockFromPath', () => {
  const directories = fs.readdirSync(
    path.join(__dirname, './challenges/english')
  );

  it('handles all the directories in ./challenges/english', () => {
    expect.assertions(14);

    for (const directory of directories) {
      expect(() => getSuperBlockFromDir(directory)).not.toThrow();
    }
  });

  it("returns valid superblocks (or 'certifications') for all valid arguments", () => {
    expect.assertions(14);

    const superBlockPaths = directories.filter(x => x !== '00-certifications');

    for (const directory of superBlockPaths) {
      expect(Object.values(SuperBlocks)).toContain(
        getSuperBlockFromDir(directory)
      );
    }
    expect(getSuperBlockFromDir('00-certifications')).toBe('certifications');
  });

  it("returns all valid superblocks (and 'certifications')", () => {
    expect.assertions(1);

    const superBlocks = new Set();
    for (const directory of directories) {
      superBlocks.add(getSuperBlockFromDir(directory));
    }

    // + 1 for 'certifications'
    expect(superBlocks.size).toBe(Object.values(SuperBlocks).length + 1);
  });

  it('throws if a directory is unknown', () => {
    expect.assertions(1);

    expect(() => getSuperBlockFromDir('unknown')).toThrow();
  });
});
