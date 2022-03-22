const path = require('path');
const fs = require('fs');
const { AssertionError } = require('chai');
const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { buildMobileCurriculum } = require('./build-mobile-curriculum');
const { mobileSchemaValidator } = require('./mobileSchema');

describe('mobile curriculum build', () => {
  const mobileStaticPath = path.resolve(__dirname, '../../../client/static');
  const blockIntroPath = path.resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  const validateMobileSuperBlock = mobileSchemaValidator();

  let curriculum;

  beforeAll(async () => {
    curriculum = await getChallengesForLang('english');
    await buildMobileCurriculum(curriculum);
  }, 20000);

  test('the mobile curriculum should have a static folder with multiple files', () => {
    expect(fs.existsSync(`${mobileStaticPath}/mobile`)).toBe(true);

    expect(fs.readdirSync(`${mobileStaticPath}/mobile`).length).toBeGreaterThan(
      0
    );
  });

  test('the mobile curriculum should have access to the intro.json file', () => {
    expect(fs.existsSync(blockIntroPath)).toBe(true);
  });

  test('the files generated should have the correct schema', () => {
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
  });
});
