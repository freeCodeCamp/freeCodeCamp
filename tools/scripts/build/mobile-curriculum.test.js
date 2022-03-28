const path = require('path');
const fs = require('fs');
const { AssertionError } = require('chai');
const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { buildMobileCurriculum } = require('./build-mobile-curriculum');
const { mobileSchemaValidator } = require('./mobileSchema');
const { CURRICULUM_LOCALE } = process.env;

describe('mobile curriculum build', () => {
  const mobileStaticPath = path.resolve(__dirname, '../../../client/static');
  const blockIntroPath = path.resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  const validateMobileSuperBlock = mobileSchemaValidator();

  let curriculum;

  const runCondition = CURRICULUM_LOCALE === 'english';
  const itif = condition => (condition ? it : it.skip);

  beforeAll(async () => {
    if (runCondition) {
      curriculum = await getChallengesForLang('english');
      buildMobileCurriculum(curriculum);
    }
  }, 20000);

  itif(runCondition)(
    'the mobile curriculum should have a static folder with multiple files',
    () => {
      expect(fs.existsSync(`${mobileStaticPath}/mobile`)).toBe(true);

      expect(
        fs.readdirSync(`${mobileStaticPath}/mobile`).length
      ).toBeGreaterThan(0);
    }
  );

  itif(runCondition)(
    'the mobile curriculum should have access to the intro.json file',
    () => {
      expect(fs.existsSync(blockIntroPath)).toBe(true);
    }
  );

  itif(runCondition)(
    'the files generated should have the correct schema',
    () => {
      const fileArray = fs.readdirSync(`${mobileStaticPath}/mobile`);

      fileArray
        .filter(fileInArray => fileInArray !== 'availableSuperblocks.json')
        .forEach(fileInArray => {
          const fileContent = fs.readFileSync(
            `${mobileStaticPath}/mobile/${fileInArray}`
          );

          const result = validateMobileSuperBlock(JSON.parse(fileContent));

          if (result.error) {
            throw new AssertionError(result.error, `file: ${fileInArray}`);
          }
        });
    }
  );
});
