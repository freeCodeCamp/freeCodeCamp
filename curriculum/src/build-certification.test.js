import fs from 'fs';
import path from 'path';
import { describe, test, expect } from 'vitest';

import { buildCertification } from './build-certification.js';
import { getContentDir } from './file-handler.js';

describe('build-certification', () => {
  const certificationsDir = path.resolve(
    getContentDir('english'),
    'certifications'
  );

  const certificationFiles = fs.readdirSync(certificationsDir);

  certificationFiles.forEach(file => {
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
    });
  });
});
