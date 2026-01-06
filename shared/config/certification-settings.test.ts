import { describe, it, expect } from 'vitest';
import {
  Certification,
  linkedInCredentialIds,
  certToTitleMap,
  certToIdMap,
  certSlugTypeMap,
  isCertified
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

describe('certSlugTypeMap', () => {
  it('should contain a value for all certifications', () => {
    const allCertifications = Object.values(Certification).sort();
    const certSlugTypeMapKeys = Object.keys(certSlugTypeMap).sort();

    expect(certSlugTypeMapKeys).toEqual(allCertifications);
  });

  it('should have no duplicate values', () => {
    const types = Object.values(certSlugTypeMap).sort();
    const uniqueTypes = Array.from(new Set(types)).sort();

    expect(uniqueTypes).toEqual(types);
  });
});

describe('isCertified', () => {
  it('should return true if a user has the specified certification', () => {
    const cert = Certification.RespWebDesignV9;
    const user = {
      isRespWebDesignCertV9: true
    };

    expect(isCertified(user, cert)).toBe(true);
  });

  it('should return false if a user does not have the specified certification', () => {
    const cert = Certification.JsAlgoDataStruct;
    const user = {
      isRespWebDesignCertV9: true
    };

    expect(isCertified(user, cert)).toBe(false);
  });

  it('should return false if the certification does not exist', () => {
    const cert = 'NonExistentCert' as Certification;
    const user = {
      isRespWebDesignCertV9: true
    };

    expect(isCertified(user, cert)).toBe(false);
  });
});
