import React, { ReactNode, useMemo } from 'react';
import { connect } from 'react-redux';
import { uniq } from 'lodash-es';
import { useTranslation } from 'react-i18next';
// TODO: Add this component to freecodecamp/ui and remove this dependency
import { Disclosure } from '@headlessui/react';

import { ChallengeNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
import { BlockTypes } from '../../../../../shared/config/blocks';
import { completedChallengesIdsSelector } from '../../Challenges/redux/selectors';
import Block from './block';

import './super-block-accordion.css';
import CheckMark from './check-mark';

interface ChapterProps {
  dashedName: string;
  children: ReactNode;
  isExpanded: boolean;
  isCompleted: boolean;
}

interface ModuleProps {
  dashedName: string;
  children: ReactNode;
  isExpanded: boolean;
  isCompleted: boolean;
}
interface SuperBlockTreeViewProps {
  challenges: ChallengeNode['challenge'][];
  superBlock: SuperBlocks;
  chosenBlock: string;
  completedBlocks: string[];
  completedChallengesIds: string[];
}

const mapStateToProps = (state: unknown) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  completedChallengesIds: completedChallengesIdsSelector(state)
});

export const getCompletionStateFromChallenges = ({
  challenges,
  completedChallengesIds
}: {
  challenges: ChallengeNode['challenge'][];
  completedChallengesIds: string[];
}) => {
  const chapters = uniq(challenges.map(({ chapter }) => chapter));
  const modules = uniq(challenges.map(({ module: mod }) => mod));
  const blocks = uniq(challenges.map(({ block }) => block));

  const completedBlocks = blocks.filter(block => {
    const challengesInBlock = challenges
      .filter(challenge => challenge.block === block)
      .map(({ id }) => id);

    const completedChallengesInBlock = completedChallengesIds.filter(id =>
      challengesInBlock.includes(id)
    );

    return completedChallengesInBlock.length === challengesInBlock.length;
  });

  const completedModules = modules.filter(mod => {
    const blocksInModule = uniq(
      challenges
        .filter(challenge => challenge.module === mod)
        .map(({ block }) => block)
    );

    const completedBlocksInModule = completedBlocks.filter(block =>
      blocksInModule.includes(block)
    );

    return completedBlocksInModule.length === blocksInModule.length;
  });

  const completedChapters = chapters.filter(chapter => {
    const modulesInChapter = uniq(
      challenges
        .filter(challenge => challenge.chapter === chapter)
        .map(({ module: mod }) => mod)
    );

    const completedModulesInChapter = completedModules.filter(mod =>
      modulesInChapter.includes(mod)
    );

    return completedModulesInChapter.length === modulesInChapter.length;
  });

  return {
    completedBlocks,
    completedModules,
    completedChapters
  };
};

const Chapter = ({
  dashedName,
  children,
  isExpanded,
  isCompleted
}: ChapterProps) => {
  const { t } = useTranslation();

  return (
    <Disclosure as='li' className='chapter' defaultOpen={isExpanded}>
      <Disclosure.Button className='chapter-button'>
        <div className='chapter-title'>
          <CheckMark isCompleted={isCompleted} />
          {t(`intro:full-stack-developer.chapters.${dashedName}`)}
        </div>
        <DropDown />
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
  isCompleted
}: ModuleProps) => {
  const { t } = useTranslation();

  return (
    <Disclosure as='li' defaultOpen={isExpanded}>
      <Disclosure.Button className='module-button'>
        <DropDown />
        <div className='module-title'>
          <CheckMark isCompleted={isCompleted} />
          {t(`intro:full-stack-developer.modules.${dashedName}`)}
        </div>
      </Disclosure.Button>
      <Disclosure.Panel as='ul' className='module-panel'>
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
};

const SuperBlockAccordion = ({
  challenges,
  superBlock,
  chosenBlock,
  completedChallengesIds
}: SuperBlockTreeViewProps) => {
  const { completedModules, completedChapters } =
    getCompletionStateFromChallenges({
      challenges,
      completedChallengesIds
    });

  const content = useMemo(() => {
    const chapters = uniq(challenges.map(({ chapter }) => chapter as string));
    const examBlock = challenges.find(
      ({ blockType }) => blockType === BlockTypes.exam
    );

    // Expand the outer layers in order to reveal the chosen block.
    const expandedChapter = challenges.find(
      ({ block }) => chosenBlock === block
    )?.chapter as string;
    const expandedModule = challenges.find(({ block }) => chosenBlock === block)
      ?.module as string;

    return chapters.map(chapter => {
      if (examBlock && chapter === examBlock.chapter) {
        return (
          <li key={examBlock.dashedName} className='exam'>
            <Block
              block={examBlock.dashedName}
              blockType={examBlock.blockType}
              challenges={[examBlock]}
              superBlock={superBlock}
            />
          </li>
        );
      }

      const modules = uniq(
        challenges
          .filter(challenge => challenge.chapter === chapter)
          .map(challenge => challenge.module as string)
      );

      return (
        <Chapter
          key={chapter}
          dashedName={chapter}
          isExpanded={expandedChapter === chapter}
          isCompleted={completedChapters.includes(chapter)}
        >
          {modules.map(mod => {
            const blocks = uniq(
              challenges
                .filter(
                  challenge =>
                    challenge.chapter === chapter && challenge.module === mod
                )
                .map(challenge => challenge.block)
            );

            return (
              <Module
                key={mod}
                dashedName={mod}
                isExpanded={expandedModule === mod}
                isCompleted={completedModules.includes(mod)}
              >
                {blocks.map(block => {
                  const blockChallenges = challenges.filter(
                    challenge => challenge.block === block
                  );
                  const blockType = blockChallenges[0].blockType;

                  return (
                    <li key={block}>
                      <Block
                        block={block}
                        blockType={blockType}
                        challenges={blockChallenges}
                        superBlock={superBlock}
                      />
                    </li>
                  );
                })}
              </Module>
            );
          })}
        </Chapter>
      );
    });
  }, [
    challenges,
    superBlock,
    chosenBlock,
    completedChapters,
    completedModules
  ]);

  return <ul className='super-block-accordion'>{content}</ul>;
};

export default connect(mapStateToProps)(SuperBlockAccordion);
