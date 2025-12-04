import { describe, it, expect } from 'vitest';
import {
  Certification,
  linkedInCredentialIds,
  certToTitleMap,
  certToIdMap
} from './certification-settings';

describe('linkedInCredentialIds', () => {
  it('should contain a value for all certifications', () => {
    const allCertifications = Object.values(Certification).sort();
    const linkedInCredentialIdsKeys = Object.keys(linkedInCredentialIds).sort();

    expect(linkedInCredentialIdsKeys).toEqual(allCertifications);
  });
});

describe('certToTitleMap', () => {
  it('should not contain duplicate titles', () => {
    const titles = Object.values(certToTitleMap);
    const uniqueTitles = Array.from(new Set(titles));

    expect(titles.length).toBe(uniqueTitles.length);
  });
});

describe('certToIdMap', () => {
  it('should have no duplicate values', () => {
    const ids = Object.values(certToIdMap).sort();
    const uniqueIds = Array.from(new Set(ids)).sort();

    expect(uniqueIds).toEqual(ids);
  });
});
