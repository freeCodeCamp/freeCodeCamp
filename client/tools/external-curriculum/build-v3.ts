import { buildExtCurriculumDataV3 } from './build-external-curricula-data-v3';

const isSelectiveBuild =
  process.env.FCC_SUPERBLOCK ||
  process.env.FCC_BLOCK ||
  process.env.FCC_CHALLENGE_ID;

if (isSelectiveBuild) {
  console.log(
    'Skipping external curriculum v3 build (selective build mode active)'
  );
} else {
  void buildExtCurriculumDataV3().catch(err => {
    console.error(err);
    process.exitCode = 1;
  });
}
