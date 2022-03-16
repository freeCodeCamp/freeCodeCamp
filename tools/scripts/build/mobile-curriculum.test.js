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

  test('the retrieved curriculum data should be greater than 0', () => {
    function callBack(data) {
      expect(data.length).toBeGreaterThan(0);
    }

    getChallengesForLang('english').then(result => {
      callBack(result);
    });
  });

  test('the mobile curriculum should have a static folder with multiple files', () => {
    function callBack() {
      expect(fs.existsSync(`${mobileStaticPath}/mobile`)).toBe(true);

      expect(
        fs.readdirSync(`${mobileStaticPath}/mobile`).length
      ).toBeGreaterThan(0);
    }

    getChallengesForLang('english').then(result => {
      callBack(buildMobileCurriculum(result));
    });
  });

  test('the mobile curriculum should have access to the intro.json file', () => {
    expect(fs.existsSync(blockIntroPath)).toBe(true);
  });

  test('the files generated should have the correct schema', () => {
    const fileArray = fs.readdirSync(`${mobileStaticPath}/mobile`);

    fileArray.forEach(fileInArray => {
      const fileContent = fs.readFileSync(
        `${mobileStaticPath}/mobile/${fileInArray}`
      );

      const result = validateMobileSuperBlock(fileContent);

      if (result.error) {
        throw new AssertionError(result.error, `file: ${fileInArray}`);
      }
    });
  });
});
