import React, { ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// TODO: Add this component to freecodecamp/ui and remove this dependency
import { Disclosure } from '@headlessui/react';

import { SuperBlocks } from '../../../../../shared-dist/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
import type { ChapterBasedSuperBlockStructure } from '../../../redux/prop-types';
import { ChapterIcon } from '../../../assets/chapter-icon';
import { type Chapter } from '../../../../../shared-dist/config/chapters';
import { Link } from '../../../components/helpers';
import {
  BlockLayouts,
  BlockLabel
} from '../../../../../shared-dist/config/blocks';
import { FsdChapters } from '../../../../../shared-dist/config/chapters';
import { type Module } from '../../../../../shared-dist/config/modules';
import envData from '../../../../config/env.json';
import Block from './block';
import CheckMark from './check-mark';
import { default as BlockLabelComponent } from './block-label';

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
  isLinkChapter?: boolean;
  examSlug?: string;
}

interface ModuleProps {
  dashedName: string;
  children: ReactNode;
  isExpanded: boolean;
  totalSteps: number;
  completedSteps: number;
  superBlock: SuperBlocks;
  comingSoon: boolean;
}

interface Challenge {
  id: string;
  block: string;
  blockLabel: BlockLabel;
  title: string;
  fields: { slug: string };
  dashedName: string;
  challengeType: number;
  blockLayout: BlockLayouts;
  superBlock: SuperBlocks;
}

interface PopulatedBlock {
  name: string;
  blockLabel: BlockLabel | null;
  challenges: Challenge[];
}

interface PopulatedModule {
  name: string;
  comingSoon?: boolean;
  moduleType?: Module['moduleType'];
  blocks: PopulatedBlock[];
}

interface PopulatedChapter {
  name: string;
  comingSoon?: boolean;
  modules: PopulatedModule[];
}

interface SuperBlockAccordionProps {
  challenges: Challenge[];
  superBlock: SuperBlocks;
  structure: ChapterBasedSuperBlockStructure;
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
  superBlock,
  isLinkChapter,
  examSlug
}: ChapterProps) => {
  const { t } = useTranslation();
  const isComplete = completedSteps === totalSteps && totalSteps > 0;
  const chapterLabel = t(`intro:${superBlock}.chapters.${dashedName}`);

  const chapterButtonContent = (
    <>
      <div className='chapter-button-left'>
        <span className='checkmark-wrap chapter-checkmark-wrap'>
          <CheckMark isCompleted={isComplete} />
        </span>
        <ChapterIcon className='map-icon' chapter={dashedName as FsdChapters} />
        {chapterLabel}
        {isLinkChapter && examSlug && (
          <BlockLabelComponent blockLabel={BlockLabel.exam} />
        )}
      </div>
      <div className='chapter-button-right'>
        {!comingSoon && !isLinkChapter && (
          <span className='chapter-steps'>
            {t('learn.steps-completed', {
              totalSteps,
              completedSteps
            })}
          </span>
        )}
        <span className='dropdown-wrap'>{!isLinkChapter && <DropDown />}</span>
      </div>
    </>
  );

  if (isLinkChapter && examSlug) {
    return (
      <li className='chapter'>
        <Link
          className='chapter-button'
          data-playwright-test-label='chapter-button'
          to={examSlug}
        >
          {chapterButtonContent}
        </Link>
      </li>
    );
  }

  return (
    <Disclosure as='li' className='chapter' defaultOpen={isExpanded}>
      <Disclosure.Button
        className='chapter-button'
        data-playwright-test-label='chapter-button'
      >
        {chapterButtonContent}
      </Disclosure.Button>
      {!isLinkChapter && !examSlug && (
        <Disclosure.Panel as='ul' className='chapter-panel'>
          {children}
        </Disclosure.Panel>
      )}
    </Disclosure>
  );
};

const Module = ({
  dashedName,
  children,
  isExpanded,
  totalSteps,
  completedSteps,
  superBlock,
  comingSoon
}: ModuleProps) => {
  const { t } = useTranslation();
  const isComplete = totalSteps === 0 ? false : completedSteps === totalSteps;
  const { note, intro } = t(`intro:${superBlock}.module-intros.${dashedName}`, {
    returnObjects: true
  }) as {
    note: string;
    intro: string[];
  };

  const showModuleContent = !(comingSoon && !showUpcomingChanges);

  return (
    <Disclosure as='li' defaultOpen={isExpanded}>
      <Disclosure.Button className='module-button'>
        <div className='module-button-left'>
          <span className='dropdown-wrap'>
            <DropDown />
          </span>
          <span className='checkmark-wrap'>
            <CheckMark isCompleted={isComplete} />
          </span>
          {t(`intro:${superBlock}.modules.${dashedName}`)}
        </div>
        <div className='module-button-right' data-testid='module-button-right'>
          {!comingSoon && !!totalSteps && (
            <span className='module-steps'>
              {t('learn.steps-completed', {
                totalSteps,
                completedSteps
              })}
            </span>
          )}
        </div>
      </Disclosure.Button>
      <Disclosure.Panel as='ul' className='module-panel'>
        {comingSoon && (
          <div className='module-intro'>
            {note && (
              <p>
                <b>{note}</b>
              </p>
            )}
            {intro?.length && intro.map(ntro => <p key={ntro}>{ntro}</p>)}
          </div>
        )}
        {showModuleContent && children}
      </Disclosure.Panel>
    </Disclosure>
  );
};

const LinkModule = ({
  superBlock,
  challenges,
  accordion,
  moduleType
}: {
  superBlock: SuperBlocks;
  challenges?: Challenge[];
  accordion: boolean;
  moduleType?: Module['moduleType'];
}) => {
  if (!challenges?.length) return null;

  const label = moduleType ?? challenges[0].blockLabel;

  return (
    <li className='link-block'>
      <Block
        block={challenges[0].block}
        blockLabel={label}
        challenges={challenges}
        superBlock={superBlock}
        accordion={accordion}
      />
    </li>
  );
};

export const SuperBlockAccordion = ({
  challenges,
  superBlock,
  structure,
  chosenBlock,
  completedChallengeIds
}: SuperBlockAccordionProps) => {
  const superBlockStructure = structure;

  const modules = superBlockStructure.chapters.flatMap<Module>(
    ({ modules }) => modules
  );

  const isLinkModule = (name: string) => {
    const module = modules.find(module => module.dashedName === name);

    return (
      module?.moduleType === BlockLabel.review ||
      module?.moduleType === BlockLabel.exam ||
      module?.moduleType === BlockLabel.quiz ||
      module?.moduleType === BlockLabel.certProject
    );
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
  const allChapters = useMemo<PopulatedChapter[]>(() => {
    const populateBlocks = (blocks: string[]): PopulatedBlock[] =>
      blocks.map(block => {
        const blockChallenges = challenges.filter(
          ({ block: blockName }) => blockName === block
        );

        return {
          name: block,
          blockLabel: blockChallenges[0]?.blockLabel ?? null,
          challenges: blockChallenges
        };
      });

    return superBlockStructure.chapters.map((chapter: Chapter) => ({
      name: chapter.dashedName,
      comingSoon: chapter.comingSoon,
      modules: chapter.modules.map((module: Module) => ({
        name: module.dashedName,
        comingSoon: module.comingSoon,
        moduleType: module.moduleType,
        blocks: populateBlocks(module.blocks)
      }))
    }));
  }, [challenges, superBlockStructure.chapters]);

  // Expand the outer layers in order to reveal the chosen block.
  const expandedChapter = blockToChapterMap.get(chosenBlock);
  const expandedModule = blockToModuleMap.get(chosenBlock);
  const accordion = true;

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

        const [firstChapterModule] = chapter.modules;

        const [firstModuleBlock] = firstChapterModule?.blocks ?? [];

        const isLinkChapter =
          chapter.modules.length === 1 &&
          firstChapterModule?.blocks.length === 1 &&
          firstModuleBlock?.blockLabel === BlockLabel.exam &&
          firstModuleBlock.challenges.length === 1;

        const examSlug = isLinkChapter
          ? firstModuleBlock?.challenges[0]?.fields.slug
          : undefined;

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
            isLinkChapter={isLinkChapter}
            examSlug={examSlug}
          >
            {chapter.modules.map(module => {
              if (module.comingSoon && !showUpcomingChanges) {
                if (module.moduleType === BlockLabel.review) {
                  return null;
                }
              }

              if (isLinkModule(module.name)) {
                return (
                  <LinkModule
                    key={module.name}
                    superBlock={superBlock}
                    moduleType={module.moduleType}
                    challenges={module.blocks[0]?.challenges}
                    accordion={accordion}
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
                  comingSoon={!!module.comingSoon}
                >
                  {module.blocks.map(block => (
                    // maybe TODO: allow blocks to be "coming soon"
                    <li key={block.name}>
                      <Block
                        block={block.name}
                        blockLabel={block.blockLabel}
                        challenges={block.challenges}
                        superBlock={superBlock}
                        accordion={accordion}
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
