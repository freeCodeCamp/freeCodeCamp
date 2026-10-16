import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { type Certification } from '@freecodecamp/shared/config/certification-settings';

interface CertificationChallenge {
  id: string;
  title: string;
  certification: Certification;
  challengeType: number;
  tests: { id: string; title: string }[];
}

export const buildCertification = (
  filePath: string
): {
  challenges: CertificationChallenge[];
} => ({
  challenges: [load(readFileSync(filePath, 'utf8')) as CertificationChallenge]
});
