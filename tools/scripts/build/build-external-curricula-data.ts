/**
 * This script builds and writes curriculum data for a given version and curriculum.
 * It processes and organizes data for various SuperBlocks, generating structured JSON files.
 */
import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { submitTypes } from '../../../shared/config/challenge-types';
import { type ChallengeNode } from '../../../client/src/redux/prop-types';
import { SuperBlocks } from '../../../shared/config/curriculum';

// Type definitions for curriculum structure and properties
type Intro = { [keyValue in SuperBlocks]: IntroProps };
export type Curriculum<T> = {
  [keyValue in SuperBlocks]: T extends CurriculumProps
    ? CurriculumProps
    : GeneratedCurriculumProps;
};

interface IntroProps extends CurriculumProps {
  title: string; // Title of the superblock
  intro: string[]; // Introduction text for the superblock
}

export interface CurriculumProps {
  intro: string[]; // General introduction text
  blocks: Record<string, Block<ChallengeNode['challenge'][]>>; // Blocks within the superblock
}

interface GeneratedCurriculumProps {
  intro: string[]; // Introduction text for generated curriculum
  blocks: Record<string, Block<Record<string, unknown>>>; // Blocks within the generated curriculum
}

interface Block<T> {
  desc: string[]; // Description of the block
  intro: string[]; // Introduction text for the block
  challenges: T; // Challenges under the block
  meta: Record<string, unknown>; // Metadata for the block
}

// Ordered list of superblock information with visibility status
export const orderedSuperBlockInfo = [
  { dashedName: SuperBlocks.RespWebDesignNew, public: true },
  { dashedName: SuperBlocks.DataAnalysisPy, public: true },
  { dashedName: SuperBlocks.MachineLearningPy, public: true },
  { dashedName: SuperBlocks.RespWebDesign, public: true },
  { dashedName: SuperBlocks.PythonForEverybody, public: true },
  { dashedName: SuperBlocks.TheOdinProject, public: true },
  { dashedName: SuperBlocks.A2English, public: true },
  { dashedName: SuperBlocks.JsAlgoDataStructNew, public: false },
  { dashedName: SuperBlocks.FrontEndDevLibs, public: false },
  { dashedName: SuperBlocks.DataVis, public: false },
  { dashedName: SuperBlocks.RelationalDb, public: false },
  { dashedName: SuperBlocks.BackEndDevApis, public: false },
  { dashedName: SuperBlocks.QualityAssurance, public: false },
  { dashedName: SuperBlocks.SciCompPy, public: false },
  { dashedName: SuperBlocks.InfoSec, public: false },
  { dashedName: SuperBlocks.CollegeAlgebraPy, public: false },
  { dashedName: SuperBlocks.FoundationalCSharp, public: false },
  { dashedName: SuperBlocks.CodingInterviewPrep, public: false },
  { dashedName: SuperBlocks.ProjectEuler, public: false },
  { dashedName: SuperBlocks.RosettaCode, public: false },
  { dashedName: SuperBlocks.JsAlgoDataStruct, public: false }
];

const dashedNames = orderedSuperBlockInfo.map(({ dashedName }) => dashedName);

/**
 * Builds and writes extended curriculum data.
 * @param {string} ver - Version of the curriculum.
 * @param {Curriculum<CurriculumProps>} curriculum - Curriculum data to process.
 */
export function buildExtCurriculumData(
  ver: string,
  curriculum: Curriculum<CurriculumProps>
): void {
  const staticFolderPath = resolve(__dirname, '../../../client/static');
  const dataPath = `${staticFolderPath}/curriculum-data/`;
  const blockIntroPath = resolve(
    __dirname,
    '../../../client/i18n/locales/english/intro.json'
  );

  mkdirSync(dataPath, { recursive: true });

  parseCurriculumData();
  getSubmitTypes();

  /**
   * Parses curriculum data and writes it to files.
   */
  function parseCurriculumData() {
    const superBlockKeys = Object.values(SuperBlocks).filter(x =>
      dashedNames.includes(x)
    );

    writeToFile('available-superblocks', {
      superblocks: orderedSuperBlockInfo.map(x => ({
        ...x,
        title: getSuperBlockTitle(x.dashedName)
      }))
    });

    for (const superBlockKey of superBlockKeys) {
      const superBlock = <Curriculum<GeneratedCurriculumProps>>{};
      const blockNames = Object.keys(curriculum[superBlockKey].blocks);

      if (blockNames.length === 0) continue;

      superBlock[superBlockKey] = <GeneratedCurriculumProps>{};
      superBlock[superBlockKey]['intro'] =
        getSuperBlockDescription(superBlockKey);
      superBlock[superBlockKey]['blocks'] = {};

      for (let j = 0; j < blockNames.length; j++) {
        superBlock[superBlockKey]['blocks'][blockNames[j]] = <
          Block<Record<string, unknown>>
        >{};

        superBlock[superBlockKey]['blocks'][blockNames[j]]['desc'] =
          getBlockDescription(superBlockKey, blockNames[j]);

        superBlock[superBlockKey]['blocks'][blockNames[j]]['challenges'] =
          curriculum[superBlockKey]['blocks'][blockNames[j]]['meta'];

        const blockChallenges =
          curriculum[superBlockKey]['blocks'][blockNames[j]]['challenges'];

        for (let k = 0; k < blockChallenges.length; k++) {
          const challenge = blockChallenges[k];
          const challengeId = challenge['id'];
          const challengePath = `challenges/${superBlockKey}/${blockNames[j]}/${challengeId}`;

          writeToFile(challengePath, challenge);
        }
      }

      writeToFile(superBlockKey, superBlock);
    }
  }

  /**
   * Writes data to a JSON file.
   * @param {string} fileName - Name of the file to write.
   * @param {Record<string, unknown>} data - Data to write.
   */
  function writeToFile(fileName: string, data: Record<string, unknown>): void {
    const filePath = `${dataPath}/${ver}/${fileName}.json`;
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  /**
   * Gets the description of a block.
   * @param {SuperBlocks} superBlockKeys - SuperBlock key.
   * @param {string} blockKey - Block key.
   * @returns {string[]} Description of the block.
   */
  function getBlockDescription(
    superBlockKeys: SuperBlocks,
    blockKey: string
  ): string[] {
    const intros = JSON.parse(readFileSync(blockIntroPath, 'utf-8')) as Intro;

    return intros[superBlockKeys]['blocks'][blockKey]['intro'];
  }

  /**
   * Gets the description of a superblock.
   * @param {SuperBlocks} superBlockKey - SuperBlock key.
   * @returns {string[]} Description of the superblock.
   */
  function getSuperBlockDescription(superBlockKey: SuperBlocks): string[] {
    const superBlockIntro = JSON.parse(
      readFileSync(blockIntroPath, 'utf-8')
    ) as Intro;
    return superBlockIntro[superBlockKey]['intro'];
  }

  /**
   * Gets the title of a superblock.
   * @param {SuperBlocks} superBlock - SuperBlock key.
   * @returns {string} Title of the superblock.
   */
  function getSuperBlockTitle(superBlock: SuperBlocks): string {
    const superBlocks = JSON.parse(
      readFileSync(blockIntroPath, 'utf-8')
    ) as Intro;

    return superBlocks[superBlock].title;
  }

  /**
   * Writes submit types data to a JSON file.
   */
  function getSubmitTypes() {
    writeFileSync(
      `${dataPath}/submit-types.json`,
      JSON.stringify(submitTypes, null, 2)
    );
  }
}
