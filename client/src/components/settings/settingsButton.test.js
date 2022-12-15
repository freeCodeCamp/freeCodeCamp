import renderer from 'react-test-renderer';

import {
  legacyProjectMap,
  projectMap
} from '../../resources/cert-and-project-map';
import { CertificationSettings } from './certification';

const certificationSettings = new CertificationSettings();

it('should check legacy certification button consistency', () => {
  certificationSettings.props = { t: t => t };

  const { renderCertifications } = certificationSettings;

  const legacyCertifications = Object.keys(legacyProjectMap);

  const tree = renderer.create(
    legacyCertifications.map(certName =>
      renderCertifications(certName, legacyProjectMap)
    )
  );

  expect(tree).toMatchSnapshot();
});

it('should check certification button consistency', () => {
  certificationSettings.props = { t: t => t };

  const { renderCertifications } = certificationSettings;

  const certifications = Object.keys(projectMap);

  const tree = renderer.create(
    certifications.map(certName => renderCertifications(certName, projectMap))
  );

  expect(tree).toMatchSnapshot();
});
