import React, { ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// TODO: Add this component to freecodecamp/ui and remove this dependency
import { Disclosure } from '@headlessui/react';

import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
// TODO: source the superblock structure via a GQL query, rather than directly
// from the curriculum
import fullStackCert from '../../../../../curriculum/structure/superblocks/full-stack-developer.json';
import fullStackOpen from '../../../../../curriculum/structure/superblocks/full-stack-open.json';
import a1Spanish from '../../../../../curriculum/structure/superblocks/a1-professional-spanish.json';
import respWebDesignV9 from '../../../../../curriculum/structure/superblocks/responsive-web-design-v9.json';
import javascriptV9 from '../../../../../curriculum/structure/superblocks/javascript-v9.json';
import frontEndDevLibsV9 from '../../../../../curriculum/structure/superblocks/front-end-development-libraries-v9.json';
import pythonV9 from '../../../../../curriculum/structure/superblocks/python-v9.json';
import relationalDbV9 from '../../../../../curriculum/structure/superblocks/relational-databases-v9.json';
import backEndDevApisV9 from '../../../../../curriculum/structure/superblocks/back-end-development-and-apis-v9.json';

import { ChapterIcon } from '../../../assets/chapter-icon';
import { type Chapter } from '../../../../../shared-dist/config/chapters';
import {
  BlockLayouts,
  BlockTypes
} from '../../../../../shared-dist/config/blocks';
import { FsdChapters } from '../../../../../shared-dist/config/chapters';
import { type Module } from '../../../../../shared-dist/config/modules';
import envData from '../../../../config/env.json';
import Block from './block';
import CheckMark from './check-mark';

import './super-block-accordion.css';

const { showUpcomingChanges } = envData;

interface ChapterProps {
  dashedName: string;
  children: ReactNode;
  comingSoon?: boolean;
  isExpanded: boolean;
  totalSteps: number;
  completedSteps: number;
  superBlock: SuperBlocks;
}

interface ModuleProps {
  dashedName: string;
  children: ReactNode;
  isExpanded: boolean;
  totalSteps: number;
  completedSteps: number;
  superBlock: SuperBlocks;
}

interface Challenge {
  id: string;
  block: string;
  blockType: BlockTypes;
  title: string;
  fields: { slug: string };
  dashedName: string;
  challengeType: number;
  blockLayout: BlockLayouts;
  superBlock: SuperBlocks;
}

interface SuperBlockAccordionProps {
  challenges: Challenge[];
  superBlock: SuperBlocks;
  chosenBlock: string;
  completedChallengeIds: string[];
}

const Chapter = ({
  dashedName,
  children,
  isExpanded,
  comingSoon,
  totalSteps,
  completedSteps,
  superBlock
}: ChapterProps) => {
  const { t } = useTranslation();
  const isComplete = completedSteps === totalSteps;

  return (
    <Disclosure as='li' className='chapter' defaultOpen={isExpanded}>
      <Disclosure.Button
        className='chapter-button'
        data-playwright-test-label='chapter-button'
      >
        <div className='chapter-button-left'>
          <ChapterIcon
            className='map-icon'
            chapter={dashedName as FsdChapters}
          />
          {t(`intro:${superBlock}.chapters.${dashedName}`)}
        </div>
        <div className='chapter-button-right'>
          {!comingSoon && (
            <>
              <span className='chapter-steps'>
                {t('learn.steps-completed', {
                  totalSteps,
                  completedSteps
                })}
              </span>
              <span className='checkmark-wrap chapter-checkmark-wrap'>
                <CheckMark isCompleted={isComplete} />
              </span>
            </>
          )}
          <span className='dropdown-wrap'>
            <DropDown />
          </span>
        </div>
      </Disclosure.Button>
      <Disclosure.Panel as='ul' className='chapter-panel'>
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
};

const Module = ({
  dashedName,
  children,
  isExpanded,
  totalSteps,
  completedSteps,
  superBlock
}: ModuleProps) => {
  const { t } = useTranslation();
  const isComplete = completedSteps === totalSteps;

  return (
    <Disclosure as='li' defaultOpen={isExpanded}>
      <Disclosure.Button className='module-button'>
        <div className='module-button-left'>
          <span className='dropdown-wrap'>
            <DropDown />
          </span>
          {t(`intro:${superBlock}.modules.${dashedName}`)}
        </div>
        <div className='module-button-right'>
          <span className='module-steps'>
            {t('learn.steps-completed', {
              totalSteps,
              completedSteps
            })}
          </span>
          <span className='checkmark-wrap'>
            <CheckMark isCompleted={isComplete} />
          </span>
        </div>
      </Disclosure.Button>
      <Disclosure.Panel as='ul' className='module-panel'>
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
};

const LinkBlock = ({
  superBlock,
  challenges
}: {
  superBlock: SuperBlocks;
  challenges?: Challenge[];
}) =>
  challenges?.length ? (
    <li className='link-block'>
      <Block
        block={challenges[0].block}
        blockType={challenges[0].blockType}
        challenges={challenges}
        superBlock={superBlock}
      />
    </li>
  ) : null;

export const SuperBlockAccordion = ({
  challenges,
  superBlock,
  chosenBlock,
  completedChallengeIds
}: SuperBlockAccordionProps) => {
  function getSuperblockStructure(superBlock: SuperBlocks): {
    chapters: Chapter[];
  } {
    switch (superBlock) {
      case SuperBlocks.FullStackOpen:
        return fullStackOpen;
      case SuperBlocks.FullStackDeveloper:
        return fullStackCert;
      case SuperBlocks.A1Spanish:
        return a1Spanish;
      case SuperBlocks.RespWebDesignV9:
        return respWebDesignV9;
      case SuperBlocks.JsV9:
        return javascriptV9;
      case SuperBlocks.FrontEndDevLibsV9:
        return frontEndDevLibsV9;
      case SuperBlocks.PythonV9:
        return pythonV9;
      case SuperBlocks.RelationalDbV9:
        return relationalDbV9;
      case SuperBlocks.BackEndDevApisV9:
        return backEndDevApisV9;
      default:
        throw new Error("The SuperBlock structure hasn't been imported.");
    }
  }

  const superBlockStructure = getSuperblockStructure(superBlock);

  const modules = superBlockStructure.chapters.flatMap<Module>(
    ({ modules }) => modules
  );

  const isLinkModule = (name: string) => {
    const module = modules.find(module => module.dashedName === name);

    return module?.moduleType === 'review' || module?.moduleType === 'exam';
  };

  const getBlockToChapterMap = () => {
    const blockToChapterMap = new Map<string, string>();
    superBlockStructure.chapters.forEach(chapter => {
      chapter.modules.forEach(module => {
        module.blocks.forEach(block => {
          blockToChapterMap.set(block, chapter.dashedName);
        });
      });
    });

    return blockToChapterMap;
  };

  const getBlockToModuleMap = () => {
    const blockToModuleMap = new Map<string, string>();
    modules.forEach(module => {
      module.blocks.forEach(block => {
        blockToModuleMap.set(block, module.dashedName);
      });
    });

    return blockToModuleMap;
  };

  const blockToChapterMap = getBlockToChapterMap();
  const blockToModuleMap = getBlockToModuleMap();

  const { t } = useTranslation();
  const { allChapters } = useMemo(() => {
    const chapters = superBlockStructure.chapters;
    const populateBlocks = (blocks: string[]) =>
      blocks.map(block => {
        const blockChallenges = challenges.filter(
          ({ block: blockName }) => blockName === block
        );

        return {
          name: block,
          blockType: blockChallenges[0]?.blockType ?? null,
          challenges: blockChallenges
        };
      });

    const allChapters = chapters.map(chapter => ({
      name: chapter.dashedName,
      comingSoon: chapter.comingSoon,
      modules: chapter.modules.map((module: Module) => ({
        name: module.dashedName,
        comingSoon: module.comingSoon,
        moduleType: module.moduleType,
        blocks: populateBlocks(module.blocks)
      }))
    }));

    return { allChapters };
  }, [challenges, superBlockStructure.chapters]);

  // Expand the outer layers in order to reveal the chosen block.
  const expandedChapter = blockToChapterMap.get(chosenBlock);
  const expandedModule = blockToModuleMap.get(chosenBlock);

  return (
    <ul className='super-block-accordion'>
      {allChapters.map(chapter => {
        const chapterStepIds: string[] = [];
        chapter.modules.forEach(module => {
          const { blocks } = module;
          blocks.forEach(block =>
            chapterStepIds.push(...block.challenges.map(c => c.id))
          );
        });

        const chapterStepIdsSet = new Set(chapterStepIds);
        const completedStepsInChapter = new Set(
          completedChallengeIds.filter(id => chapterStepIdsSet.has(id))
        ).size;

        return (
          <Chapter
            key={chapter.name}
            dashedName={chapter.name}
            isExpanded={
              expandedChapter === chapter.name || allChapters.length === 1
            }
            comingSoon={chapter.comingSoon}
            totalSteps={chapterStepIds.length}
            completedSteps={completedStepsInChapter}
            superBlock={superBlock}
          >
            {chapter.modules.map(module => {
              if (module.comingSoon && !showUpcomingChanges) {
                if (
                  module.moduleType === 'review' ||
                  module.moduleType === 'exam'
                ) {
                  return null;
                }

                const { note, intro } = t(
                  `intro:${superBlock}.module-intros.${module.name}`,
                  { returnObjects: true }
                ) as {
                  note: string;
                  intro: string[];
                };

                return (
                  <Disclosure
                    key={module.name}
                    as='li'
                    defaultOpen={expandedModule === module.name}
                  >
                    <Disclosure.Button className='module-button'>
                      <div className='module-button-left'>
                        <span className='dropdown-wrap'>
                          <DropDown />
                        </span>
                        {t(`intro:${superBlock}.modules.${module.name}`)}
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel as='ul' className='module-panel'>
                      <div className='module-intro'>
                        {note && (
                          <p>
                            <b>{note}</b>
                          </p>
                        )}
                        {intro &&
                          intro.length > 0 &&
                          intro.map(ntro => <p key={ntro}>{ntro}</p>)}
                      </div>
                    </Disclosure.Panel>
                  </Disclosure>
                );
              }

              if (isLinkModule(module.name)) {
                return (
                  <LinkBlock
                    key={module.name}
                    superBlock={superBlock}
                    challenges={module.blocks[0]?.challenges}
                  />
                );
              }

              const moduleStepIds: string[] = [];
              module.blocks.forEach(block =>
                moduleStepIds.push(...block.challenges.map(c => c.id))
              );

              const moduleStepIdsSet = new Set(moduleStepIds);
              const completedStepsInModule = new Set(
                completedChallengeIds.filter(id => moduleStepIdsSet.has(id))
              ).size;

              return (
                <Module
                  key={module.name}
                  dashedName={module.name}
                  isExpanded={expandedModule === module.name}
                  totalSteps={moduleStepIds.length}
                  completedSteps={completedStepsInModule}
                  superBlock={superBlock}
                >
                  {module.blocks.map(block => (
                    // maybe TODO: allow blocks to be "coming soon"
                    <li key={block.name}>
                      <Block
                        block={block.name}
                        blockType={block.blockType}
                        challenges={block.challenges}
                        superBlock={superBlock}
                      />
                    </li>
                  ))}
                </Module>
              );
            })}
          </Chapter>
        );
      })}
    </ul>
  );
};
