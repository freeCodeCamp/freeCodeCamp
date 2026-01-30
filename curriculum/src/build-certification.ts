import { readFileSync } from 'fs';
import { load } from 'js-yaml';

interface CertificationChallenge {
  id: string;
  title: string;
  certification: string;
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
