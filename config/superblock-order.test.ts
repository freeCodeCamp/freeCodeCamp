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

const superBlocks = Object.values(SuperBlocks);
const translationStates = Object.values(TranslationStates);
const superBlockStates = Object.values(SuperBlockStates);
const superBlockOrderLanguages = Object.keys(superBlockOrder);

describe("'defaultSuperBlockOrder'", () => {
  it("should have a matching item for each value in the 'SuperBlocks' object", () => {
    expect(defaultSuperBlockOrder).toEqual(expect.arrayContaining(superBlocks));
  });

  it('should not have any extra keys', () => {
    expect(defaultSuperBlockOrder.length).toEqual(superBlocks.length);
  });
});

describe("'superBlockOrder'", () => {
  superBlockOrderLanguages.forEach(language => {
    describe(`'${language}'`, () => {
      describe("'landing'", () => {
        const landingSuperBlocks =
          superBlockOrder[language as Languages][CurriculumMaps.Landing];

        it(`should have ${numberOfSuperBlocksOnLanding} items (superBlocks)`, () => {
          expect(landingSuperBlocks.length).toEqual(
            numberOfSuperBlocksOnLanding
          );
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
        const audited = learn[TranslationStates.Audited];
        const notAudited = learn[TranslationStates.NotAudited];

        describe("'audited'", () => {
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
      SuperBlocks.CollegeAlgebraPy,
      SuperBlocks.TheOdinProject,
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
      SuperBlocks.JsAlgoDataStructNew,
      SuperBlocks.CollegeAlgebraPy,
      SuperBlocks.TheOdinProject
    ];
    expect(notAuditedSuperBlocks).toStrictEqual(test);
    expect(notAuditedSuperBlocks.length).toEqual(test.length);
  });
});
