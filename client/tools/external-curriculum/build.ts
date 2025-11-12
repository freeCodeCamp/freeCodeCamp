import curriculum from '../../../shared-dist/config/curriculum.json';
import {
  buildExtCurriculumDataV1,
  Curriculum as CurriculumV1,
  CurriculumProps as CurriculumPropsV1
} from './build-external-curricula-data-v1';
import {
  buildExtCurriculumDataV2,
  Curriculum as CurriculumV2,
  CurriculumProps as CurriculumPropsV2
} from './build-external-curricula-data-v2';

const isSelectiveBuild =
  process.env.FCC_SUPERBLOCK ||
  process.env.FCC_BLOCK ||
  process.env.FCC_CHALLENGE_ID;

if (isSelectiveBuild) {
  console.log(
    'Skipping external curriculum build (selective build mode active)'
  );
} else {
  buildExtCurriculumDataV1(
    curriculum as unknown as CurriculumV1<CurriculumPropsV1>
  );
  buildExtCurriculumDataV2(
    curriculum as unknown as CurriculumV2<CurriculumPropsV2>
  );
}
