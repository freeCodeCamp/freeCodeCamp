import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
import Reset from '../../../assets/icons/reset';
import type { ChapterBasedSuperBlockStructure } from '../../../redux/prop-types';
import { ChapterIcon } from '../../../assets/chapter-icon';
import { type Chapter } from '@freecodecamp/shared/config/chapters';
import { Link } from '../../../components/helpers';
import { BlockLayouts, BlockLabel } from '@freecodecamp/shared/config/blocks';
import { FsdChapters } from '@freecodecamp/shared/config/chapters';
import { type Module } from '@freecodecamp/shared/config/modules';
import envData from '../../../../config/env.json';
import { useDispatch } from 'react-redux';
import { removeModuleChallenges } from '../../../redux/actions';
import Block from './block';
import CheckMark from './check-mark';
import { default as BlockLabelComponent } from './block-label';
import ResetProgressModal from './reset-progress-modal';

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
  blockDashedNames: string[];
  onResetComplete: (removedChallengeIds: string[]) => void;
}

interface ModuleProps {
  dashedName: string;
  children: ReactNode;
  isExpanded: boolean;
  totalSteps: number;
  completedSteps: number;
  superBlock: SuperBlocks;
  comingSoon: boolean;
  blockDashedNames: string[];
  onResetComplete: (removedChallengeIds: string[]) => void;
}

interface Challenge {
  id: string;
  block: string;
  blockLabel?: BlockLabel;
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
  /**
   * When true, expands all chapters and modules and hides those with no matching challenges.
   * Used during search/filter.
   */
  expandAll?: boolean;
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
  examSlug,
  blockDashedNames,
  onResetComplete
}: ChapterProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(isExpanded);
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    setOpen(isExpanded);
  }, [isExpanded]);

  const panelId = `chapter-panel-${dashedName}`;
  const isComplete = completedSteps === totalSteps && totalSteps > 0;
  const chapterLabel = t(`intro:${superBlock}.chapters.${dashedName}`);
  const toggleLabel = open
    ? t('intro:misc-text.collapse')
    : t('intro:misc-text.expand');
  const showResetButton = !comingSoon && !isLinkChapter;
  const isResetDisabled = completedSteps === 0;

  const handleResetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowResetModal(true);
  };

  const handleResetModalClose = () => {
    setShowResetModal(false);
  };

  const toggleOpen = () => setOpen(o => !o);

  const resetButton = showResetButton ? (
    <button
      className='block-reset-button'
      onClick={handleResetClick}
      aria-label={t('learn.reset-progress-aria-chapter', {
        chapterLabel
      })}
      type='button'
      disabled={isResetDisabled}
    >
      <Reset />
    </button>
  ) : null;

  const chapterButtonLeftContent = (
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
  );

  const chapterButtonRightContent = (
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
  );

  if (isLinkChapter && examSlug) {
    return (
      <li className='chapter'>
        <Link
          className='chapter-header-wrapper chapter-link'
          data-playwright-test-label='chapter-button'
          to={examSlug}
        >
          {chapterButtonLeftContent}
          {chapterButtonRightContent}
        </Link>
      </li>
    );
  }

  return (
    <li className='chapter'>
      <div className='chapter-header-wrapper'>
        <button
          aria-controls={panelId}
          aria-expanded={open}
          className='chapter-button chapter-button-main'
          data-playwright-test-label='chapter-button'
          onClick={toggleOpen}
          type='button'
        >
          {chapterButtonLeftContent}
        </button>
        {resetButton}
        <button
          aria-controls={panelId}
          aria-expanded={open}
          aria-label={`${toggleLabel} ${chapterLabel}`}
          className='chapter-button chapter-button-toggle'
          data-playwright-test-label='chapter-button-toggle'
          onClick={toggleOpen}
          type='button'
        >
          {chapterButtonRightContent}
        </button>
      </div>
      {open && (
        <ul className='chapter-panel' id={panelId}>
          {children}
        </ul>
      )}
      <ResetProgressModal
        blockTitle={chapterLabel}
        blockDashedName={blockDashedNames}
        superBlock={superBlock}
        show={showResetModal}
        onHide={handleResetModalClose}
        onResetComplete={onResetComplete}
      />
    </li>
  );
};

const Module = ({
  dashedName,
  children,
  isExpanded,
  totalSteps,
  completedSteps,
  superBlock,
  comingSoon,
  blockDashedNames,
  onResetComplete
}: ModuleProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(isExpanded);
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    setOpen(isExpanded);
  }, [isExpanded]);

  const panelId = `module-panel-${dashedName}`;
  const isComplete = totalSteps === 0 ? false : completedSteps === totalSteps;
  const moduleLabel = t(`intro:${superBlock}.modules.${dashedName}`);
  const toggleLabel = open
    ? t('intro:misc-text.collapse')
    : t('intro:misc-text.expand');
  const { note, intro } = t(`intro:${superBlock}.module-intros.${dashedName}`, {
    returnObjects: true
  }) as {
    note: string;
    intro: string[];
  };

  const showModuleContent = !(comingSoon && !showUpcomingChanges);
  const showResetButton = !comingSoon;
  const isResetDisabled = completedSteps === 0;

  const handleResetClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowResetModal(true);
  };

  const handleResetModalClose = () => {
    setShowResetModal(false);
  };

  const toggleOpen = () => setOpen(o => !o);

  const resetButton = showResetButton ? (
    <button
      className='block-reset-button'
      onClick={handleResetClick}
      aria-label={t('learn.reset-progress-aria-module', { moduleLabel })}
      type='button'
      disabled={isResetDisabled}
    >
      <Reset />
    </button>
  ) : null;

  return (
    <li>
      <div className='module-header-wrapper'>
        <button
          aria-controls={panelId}
          aria-expanded={open}
          className='module-button module-button-main'
          onClick={toggleOpen}
          type='button'
        >
          <div className='module-button-left'>
            <span className='dropdown-wrap'>
              <DropDown />
            </span>
            <span className='checkmark-wrap'>
              <CheckMark isCompleted={isComplete} />
            </span>
            {moduleLabel}
          </div>
        </button>
        {resetButton}
        <button
          aria-controls={panelId}
          aria-expanded={open}
          aria-label={`${toggleLabel} ${moduleLabel}`}
          className='module-button module-button-toggle'
          data-testid='module-button-right'
          onClick={toggleOpen}
          type='button'
        >
          <div className='module-button-right'>
            {!comingSoon && !!totalSteps && (
              <span className='module-steps'>
                {t('learn.steps-completed', {
                  totalSteps,
                  completedSteps
                })}
              </span>
            )}
          </div>
        </button>
      </div>
      {open && (
        <ul className='module-panel' id={panelId}>
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
        </ul>
      )}
      <ResetProgressModal
        blockTitle={moduleLabel}
        blockDashedName={blockDashedNames}
        superBlock={superBlock}
        show={showResetModal}
        onHide={handleResetModalClose}
        onResetComplete={onResetComplete}
      />
    </li>
  );
};

const LinkModule = ({
  superBlock,
  challenges,
  accordion,
  moduleType,
  expandAll
}: {
  superBlock: SuperBlocks;
  challenges?: Challenge[];
  accordion: boolean;
  moduleType?: Module['moduleType'];
  expandAll?: boolean;
}) => {
  if (!challenges?.length) return null;

  const label = moduleType ?? challenges[0].blockLabel;

  return (
    <li className='link-block'>
      <Block
        block={challenges[0].block}
        blockLabel={label || null}
        challenges={challenges}
        superBlock={superBlock}
        accordion={accordion}
        expandAll={expandAll}
      />
    </li>
  );
};

export const SuperBlockAccordion = ({
  challenges,
  superBlock,
  structure,
  chosenBlock,
  completedChallengeIds,
  expandAll = false
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
  const dispatch = useDispatch();

  const handleResetComplete = (removedChallengeIds: string[]) => {
    dispatch(removeModuleChallenges({ removedChallengeIds }));
  };

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

        if (expandAll && chapterStepIds.length === 0) return null;

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

        const chapterBlockDashedNames = chapter.modules.flatMap(module =>
          module.blocks.map(block => block.name)
        );

        return (
          <Chapter
            key={chapter.name}
            dashedName={chapter.name}
            isExpanded={
              expandAll ||
              expandedChapter === chapter.name ||
              allChapters.length === 1
            }
            comingSoon={chapter.comingSoon}
            totalSteps={chapterStepIds.length}
            completedSteps={completedStepsInChapter}
            superBlock={superBlock}
            isLinkChapter={isLinkChapter}
            examSlug={examSlug}
            blockDashedNames={chapterBlockDashedNames}
            onResetComplete={handleResetComplete}
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
                    expandAll={expandAll}
                  />
                );
              }

              const moduleStepIds: string[] = [];
              module.blocks.forEach(block =>
                moduleStepIds.push(...block.challenges.map(c => c.id))
              );

              if (expandAll && moduleStepIds.length === 0) return null;

              const moduleStepIdsSet = new Set(moduleStepIds);
              const completedStepsInModule = new Set(
                completedChallengeIds.filter(id => moduleStepIdsSet.has(id))
              ).size;

              const moduleBlockDashedNames = module.blocks.map(
                block => block.name
              );

              return (
                <Module
                  key={module.name}
                  dashedName={module.name}
                  isExpanded={expandAll || expandedModule === module.name}
                  totalSteps={moduleStepIds.length}
                  completedSteps={completedStepsInModule}
                  superBlock={superBlock}
                  comingSoon={!!module.comingSoon}
                  blockDashedNames={moduleBlockDashedNames}
                  onResetComplete={handleResetComplete}
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
                        expandAll={expandAll}
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
