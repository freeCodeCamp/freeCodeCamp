import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, test, expect } from 'vitest';

import { allCerts } from '../../client/config/cert-and-project-map.js';
import { buildCertification } from './build-certification.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('build-certification', () => {
  const certificationsDir = path.join(
    __dirname,
    '..',
    'challenges/english/certifications'
  );
  const yamlFiles = fs
    .readdirSync(certificationsDir)
    .filter(file => file.endsWith('.yml'));

  yamlFiles.forEach(file => {
    describe(`${file} file`, () => {
      const filePath = path.join(certificationsDir, file);
      const result = buildCertification(filePath);

      test('should have the correct properties', () => {
        expect(result).toHaveProperty('challenges');
        expect(Array.isArray(result.challenges)).toBe(true);
        expect(result.challenges).toHaveLength(1);

        const certData = result.challenges[0];
        expect(certData).toHaveProperty('id');
        expect(certData).toHaveProperty('title');
        expect(certData).toHaveProperty('certification');
        expect(certData).toHaveProperty('challengeType');
        expect(certData).toHaveProperty('tests');
        expect(Array.isArray(certData.tests)).toBe(true);
      });

      test('Should have matching items in cert-and-project-map', () => {
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
        if (file !== 'legacy-full-stack.yml') {
          expect(
            Array.isArray(matchingCert.projects),
            `Matching cert 'projects' is not an array`
          ).toBe(true);

          const certProjects = matchingCert.projects;

          expect(
            certProjects.length,
            `Project count mismatch: allCerts has ${certProjects.length} projects, YAML has ${certTests.length} tests`
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

            const matchingProject = certProjects[i];

            expect(
              matchingProject,
              `No project found at index ${i} for test ${test.id}`
            ).toBeDefined();
            expect(
              matchingProject.id,
              `Project ID mismatch at index ${i}: allCerts has "${matchingProject.id}", YAML has "${test.id}"`
            ).toBe(test.id);
          });
        }
      });
    });
  });
});
