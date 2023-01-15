import renderer from 'react-test-renderer';

import {
  legacyProjectMap,
  projectMap
} from '../../resources/cert-and-project-map';
import { CertificationSettings } from './certification';

const props = { t: val => val };

const certificationSettings = new CertificationSettings(props);

const { renderCertifications } = certificationSettings;

beforeAll(() => {
  projectMap['JavaScript Algorithms and Data Structures'] = projectMap[
    'JavaScript Algorithms and Data Structures'
  ].map(v => ({
    ...v,
    link: 'javascript'
  }));
});

it('should check legacy certification button consistency', () => {
  const legacyCertifications = Object.keys(legacyProjectMap);

  const tree = renderer
    .create(
      legacyCertifications.map(certName =>
        renderCertifications(certName, legacyProjectMap)
      )
    )
    .toJSON();

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
