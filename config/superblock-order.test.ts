import { Languages } from './i18n';
import { SuperBlocks } from './certification-settings';
import {
  CurriculumMaps,
  defaultSuperBlockOrder,
  getAuditedSuperBlocks,
  getNotAuditedSuperBlocks,
  getLearnSuperBlocks,
  numberOfSuperBlocksOnLanding,
  superBlockOrder,
  SuperBlockStates,
  TranslationStates
} from './superblock-order';

const languages = Object.values(Languages);
const superBlocks = Object.values(SuperBlocks);
const curriculumMaps = Object.values(CurriculumMaps);
const translationStates = Object.values(TranslationStates);
const superBlockStates = Object.values(SuperBlockStates);
const superBlockOrderLanguages = Object.keys(superBlockOrder);

describe("'defaultSuperBlockOrder'", () => {
  it("should have a matching item for each value in the 'SuperBlocks' object", () => {
    superBlocks.forEach(superBlock => {
      expect(defaultSuperBlockOrder).toContain(superBlock);
    });
  });

  it('should not have any extra keys', () => {
    expect(defaultSuperBlockOrder.length).toEqual(superBlocks.length);
  });
});

describe("'superBlockOrder'", () => {
  it("should have a matching key for each value in the 'Languages' object", () => {
    languages.forEach(language => {
      expect(superBlockOrder).toHaveProperty(language);
    });
  });

  it('should not have any extra keys', () => {
    expect(superBlockOrderLanguages.length).toEqual(languages.length);
  });

  superBlockOrderLanguages.forEach(language => {
    describe(`'${language}'`, () => {
      // e.g. ['landing', 'learn']
      const languageMaps = Object.keys(superBlockOrder[language as Languages]);

      it("should have a matching key for each value in the 'CurriculumMaps' object", () => {
        curriculumMaps.forEach(curriculumMap => {
          expect(languageMaps).toContain(curriculumMap);
        });
      });

      it('should not have any extra keys', () => {
        expect(languageMaps.length).toEqual(curriculumMaps.length);
      });

      describe("'landing'", () => {
        const landingSuperBlocks =
          superBlockOrder[language as Languages][CurriculumMaps.Landing];

        it(`should have ${numberOfSuperBlocksOnLanding} items (superBlocks)`, () => {
          expect(landingSuperBlocks.length).toEqual(
            numberOfSuperBlocksOnLanding
          );
        });

        it("should only have items that are in 'SuperBlocks' object", () => {
          landingSuperBlocks.forEach(superBlock => {
            expect(superBlocks).toContain(superBlock);
          });
        });

        it('should not have a superBlock out of order', () => {
          landingSuperBlocks.forEach((superBlock, index) => {
            const defaultIndex = defaultSuperBlockOrder.indexOf(superBlock);
            const defaultSbsAfterCurrentSb = defaultSuperBlockOrder.slice(
              defaultIndex + 1
            );

            for (let j = index + 1; j < landingSuperBlocks.length; j++) {
              expect(defaultSbsAfterCurrentSb).toContain(landingSuperBlocks[j]);
            }
          });
        });
      });

      describe("'learn'", () => {
        const learn =
          superBlockOrder[language as Languages][CurriculumMaps.Learn];
        const learnKeys = Object.keys(learn);

        it("should have a matching key for each value in the 'TranslationStates' object", () => {
          translationStates.forEach(translationState => {
            expect(learnKeys).toContain(translationState);
          });
        });

        it('should not have any extra keys', () => {
          expect(learnKeys.length).toEqual(translationStates.length);
        });

        const audited =
          superBlockOrder[language as Languages][CurriculumMaps.Learn][
            TranslationStates.Audited
          ];
        const auditedKeys = Object.keys(audited);

        const notAudited =
          superBlockOrder[language as Languages][CurriculumMaps.Learn][
            TranslationStates.NotAudited
          ];
        const notAuditedKeys = Object.keys(notAudited);

        describe("'audited'", () => {
          it("should have a matching key for each value in the 'SuperBlockStates' object", () => {
            superBlockStates.forEach(superBlockState => {
              expect(auditedKeys).toContain(superBlockState);
            });
          });

          it('should not have any extra keys', () => {
            expect(auditedKeys.length).toEqual(superBlockStates.length);
          });

          superBlockStates.forEach(superBlockState => {
            const stateSuperBlocks = audited[superBlockState];

            describe(`'${superBlockState}'`, () => {
              it('should not have a superBlock out of order', () => {
                stateSuperBlocks.forEach((superBlock, index) => {
                  const defaultIndex =
                    defaultSuperBlockOrder.indexOf(superBlock);
                  const defaultSbsAfterCurrentSb = defaultSuperBlockOrder.slice(
                    defaultIndex + 1
                  );

                  for (let j = index + 1; j < stateSuperBlocks.length; j++) {
                    expect(defaultSbsAfterCurrentSb).toContain(
                      stateSuperBlocks[j]
                    );
                  }
                });
              });
            });
          });
        });

        describe('not audited', () => {
          it("should have a matching key for each value in the 'SuperBlockStates' object", () => {
            superBlockStates.forEach(superBlockState => {
              expect(notAuditedKeys).toContain(superBlockState);
            });
          });

          it('should not have any extra keys', () => {
            expect(notAuditedKeys.length).toEqual(superBlockStates.length);
          });

          superBlockStates.forEach(superBlockState => {
            const stateSuperBlocks = notAudited[superBlockState];

            describe(`'${superBlockState}'`, () => {
              it('should not have a superBlock out of order', () => {
                stateSuperBlocks.forEach((superBlock, index) => {
                  const defaultIndex =
                    defaultSuperBlockOrder.indexOf(superBlock);
                  const defaultSbsAfterCurrentSb = defaultSuperBlockOrder.slice(
                    defaultIndex + 1
                  );

                  for (let j = index + 1; j < stateSuperBlocks.length; j++) {
                    expect(defaultSbsAfterCurrentSb).toContain(
                      stateSuperBlocks[j]
                    );
                  }
                });
              });
            });
          });
        });

        it("should have exactly one of each 'SuperBlocks' among it's children", () => {
          // flatten all ${language}.learn superblocks into one array
          const learnSuperBlocks: SuperBlocks[] = [];

          translationStates.forEach(translationState => {
            superBlockStates.forEach(superBlockState => {
              learnSuperBlocks.push(
                ...learn[translationState][superBlockState]
              );
            });
          });

          superBlocks.forEach(superBlock => {
            expect(learnSuperBlocks).toContain(superBlock);
          });
        });
      });
    });
  });
});

describe("'superBlockOrder' helper functions", () => {
  it("'getLearnSuperBlocks('english')' should return the correct array", () => {
    const learnSuperBlocks = getLearnSuperBlocks({
      language: 'english',
      showNewCurriculum: 'true',
      showUpcomingChanges: 'true'
    });
    const test = [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy,
      SuperBlocks.CodingInterviewPrep,
      SuperBlocks.JsAlgoDataStructNew,
      SuperBlocks.RespWebDesign
    ];
    expect(learnSuperBlocks).toStrictEqual(test);
    expect(learnSuperBlocks.length).toEqual(test.length);
  });

  it("'getAuditedSuperBlocks('german')' should return the correct array", () => {
    const auditedSuperBlocks = getAuditedSuperBlocks({
      language: 'german',
      showNewCurriculum: 'true',
      showUpcomingChanges: 'true'
    });
    const test = [
      SuperBlocks.RespWebDesign,
      SuperBlocks.JsAlgoDataStruct,
      SuperBlocks.FrontEndDevLibs
    ];
    expect(auditedSuperBlocks).toStrictEqual(test);
    expect(auditedSuperBlocks.length).toEqual(test.length);
  });

  it("'getNotAuditedSuperBlocks('german')' should return the correct array", () => {
    const notAuditedSuperBlocks = getNotAuditedSuperBlocks({
      language: 'german',
      showNewCurriculum: 'true',
      showUpcomingChanges: 'true'
    });
    const test = [
      SuperBlocks.RespWebDesignNew,
      SuperBlocks.DataVis,
      SuperBlocks.RelationalDb,
      SuperBlocks.BackEndDevApis,
      SuperBlocks.QualityAssurance,
      SuperBlocks.SciCompPy,
      SuperBlocks.DataAnalysisPy,
      SuperBlocks.InfoSec,
      SuperBlocks.MachineLearningPy,
      SuperBlocks.CodingInterviewPrep,
      SuperBlocks.JsAlgoDataStructNew
    ];
    expect(notAuditedSuperBlocks).toStrictEqual(test);
    expect(notAuditedSuperBlocks.length).toEqual(test.length);
  });
});
