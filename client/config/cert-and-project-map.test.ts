import path from 'node:path';
import fs from 'node:fs';
import { describe, test, expect } from 'vitest';

import { getContentDir } from '@freecodecamp/curriculum/file-handler';
import { buildCertification } from '@freecodecamp/curriculum/build-certification';

import { allCerts } from './cert-and-project-map';

describe('certifications', () => {
  const certificationsDir = path.resolve(
    getContentDir('english'),
    'certifications'
  );

  const certificationFiles = fs.readdirSync(certificationsDir);

  certificationFiles.forEach(filename => {
    test(`${filename} should have matching items in cert-and-project-map`, () => {
      const filePath = path.join(certificationsDir, filename);
      const result = buildCertification(filePath);

      const certData = result.challenges[0];
      const certTests = certData.tests;

      const matchingCert = allCerts.find(cert => cert.id === certData.id);

      expect(
        matchingCert,
        `Cert ID ${certData.id} not found in allCerts.`
      ).toBeDefined();
      expect(
        matchingCert,
        `Matching cert has no 'projects' property`
      ).toHaveProperty('projects');

      // skip legacy-full-stack as it has no projects
      if (filename !== 'legacy-full-stack.yml') {
        expect(
          Array.isArray(matchingCert?.projects),
          `Matching cert 'projects' is not an array`
        ).toBe(true);

        const certProjects = matchingCert?.projects;

        expect(
          certProjects?.length,
          `Project count mismatch: allCerts has ${certProjects?.length} projects, YAML has ${certTests.length} tests`
        ).toBe(certTests.length);

        certTests.forEach((test, i) => {
          expect(
            test,
            `Test at index ${i} in missing id property`
          ).toHaveProperty('id');
          expect(
            test,
            `Test at index ${i} missing title property`
          ).toHaveProperty('title');

          const matchingProject = certProjects?.[i];

          expect(
            matchingProject,
            `No project found at index ${i} for test ${test.id}`
          ).toBeDefined();
          expect(
            matchingProject?.id,
            `Project ID mismatch at index ${i}: allCerts has "${matchingProject?.id}", YAML has "${test.id}"`
          ).toBe(test.id);
        });
      }
    });
  });
});
