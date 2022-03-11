const path = require('path');
const fs = require('fs');
const { getChallengesForLang } = require('../../../curriculum/getChallenges');
const { buildMobileCurriculum } = require('./build-mobile-curriculum');

describe('mobile curriculum build', () => {
  const mobileStaticPath = path.resolve(__dirname, '../../../client/static');
  const blockIntroPath = path.resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  test('the retrieved curriculum data should be greater than 0', () => {
    function callBack(data) {
      expect(data.length).toBeGreaterThan(0);
    }

    getChallengesForLang('english').then(result => {
      callBack(buildMobileCurriculum(result));
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
});
