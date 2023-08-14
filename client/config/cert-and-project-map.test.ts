import { uniq } from 'lodash';
import {
  currentCertifications,
  upcomingCertifications,
  legacyCertifications
} from '../../config/certification-settings';
import {
  currentCertTitles,
  upcomingCertTitles,
  legacyCertTitles
} from './cert-and-project-map';

describe('cert-and-project-map', () => {
  describe('currentCertTitles', () => {
    it('should correspond to the currentCertifications config', () => {
      expect(currentCertTitles).toHaveLength(uniq(currentCertTitles).length);
      expect(currentCertTitles).toHaveLength(currentCertifications.length);
    });
  });

  describe('upcomingCertTitles', () => {
    it('should correspond to the upcomingCertifications config', () => {
      expect(upcomingCertTitles).toHaveLength(uniq(upcomingCertTitles).length);
      expect(upcomingCertTitles).toHaveLength(upcomingCertifications.length);
    });
  });

  describe('legacyCertTitles', () => {
    it('should correspond to the legacyCertifications config', () => {
      expect(legacyCertTitles).toHaveLength(uniq(legacyCertTitles).length);
      expect(legacyCertTitles).toHaveLength(legacyCertifications.length);
    });
  });
});
