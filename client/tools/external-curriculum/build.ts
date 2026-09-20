import { getCurriculum } from '../get-curriculum';
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
  buildExtCurriculumDataV2(getCurriculum() as CurriculumV2<CurriculumPropsV2>);
}
