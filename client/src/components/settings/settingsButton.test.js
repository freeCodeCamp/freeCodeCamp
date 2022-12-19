import renderer from 'react-test-renderer';

import {
  legacyProjectMap,
  projectMap
} from '../../resources/cert-and-project-map';
import { CertificationSettings } from './certification';

const certificationSettings = new CertificationSettings();

certificationSettings.props = { t: t => t };

const { renderCertifications } = certificationSettings;

it('should check legacy certification button consistency', () => {
  const legacyCertifications = Object.keys(legacyProjectMap);

  const tree = renderer.create(
    legacyCertifications.map(certName =>
      renderCertifications(certName, legacyProjectMap)
    )
  );

  expect(tree).toMatchSnapshot();
});

it('should check certification button consistency', () => {
  const certifications = Object.keys(projectMap);

  const tree = renderer
    .create(
      certifications.map(certName => renderCertifications(certName, projectMap))
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
