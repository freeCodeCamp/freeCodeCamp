import { Certification, linkedInCredentialIds } from './certification-settings';

describe('linkedInCredentialIds', () => {
  it('should contain a value for all certifications', () => {
    const allCertifications = Object.values(Certification).sort();
    const linkedInCredentialIdsKeys = Object.keys(linkedInCredentialIds).sort();

    expect(linkedInCredentialIdsKeys).toEqual(allCertifications);
  });
});
