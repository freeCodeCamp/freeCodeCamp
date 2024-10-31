import React, { ReactNode, useMemo } from 'react';
import { uniq } from 'lodash-es';
import { useTranslation } from 'react-i18next';
// TODO: Add this component to freecodecamp/ui and remove this dependency
import { Disclosure } from '@headlessui/react';

import { ChallengeNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
import { BlockTypes } from '../../../../../shared/config/blocks';
import Block from './block';

import './super-block-accordion.css';

interface ChapterProps {
  dashedName: string;
  children: ReactNode;
  isExpanded: boolean;
}

interface ModuleProps {
  dashedName: string;
  children: ReactNode;
  isExpanded: boolean;
}
interface SuperBlockTreeViewProps {
  challenges: ChallengeNode['challenge'][];
  superBlock: SuperBlocks;
  chosenBlock: string;
}

const Chapter = ({ dashedName, children, isExpanded }: ChapterProps) => {
  const { t } = useTranslation();

  return (
    <Disclosure as='li' className='chapter' defaultOpen={isExpanded}>
      <Disclosure.Button className='chapter-button'>
        {t(`intro:full-stack-developer.chapters.${dashedName}`)}
        <DropDown />
      </Disclosure.Button>
      <Disclosure.Panel as='ul' className='chapter-panel'>
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
};

const Module = ({ dashedName, children, isExpanded }: ModuleProps) => {
  const { t } = useTranslation();

  return (
    <Disclosure as='li' defaultOpen={isExpanded}>
      <Disclosure.Button className='module-button'>
        <DropDown />
        {t(`intro:full-stack-developer.modules.${dashedName}`)}
      </Disclosure.Button>
      <Disclosure.Panel as='ul' className='module-panel'>
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export const SuperBlockAccordion = ({
  challenges,
  superBlock,
  chosenBlock
}: SuperBlockTreeViewProps) => {
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
  }, [challenges, superBlock, chosenBlock]);

  return <ul className='super-block-accordion'>{content}</ul>;
};
