import React, { ReactNode, useMemo } from 'react';
import { uniq } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import { Disclosure } from '@headlessui/react';

import { ChallengeNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
import Block from './block';

import './super-block-accordion.css';

interface ChapterProps {
  dashedName: string;
  children: ReactNode;
}

interface ModuleProps {
  dashedName: string;
  children: ReactNode;
}
interface SuperBlockTreeViewProps {
  challenges: ChallengeNode['challenge'][];
  superBlock: SuperBlocks;
  'aria-labelledby': string;
}

const Chapter = ({ dashedName, children }: ChapterProps) => {
  const { t } = useTranslation();

  return (
    <Disclosure as='li' className='chapter'>
      <Disclosure.Button className='chapter-button'>
        {t(`intro:front-end-development.chapters.${dashedName}`)}
        <DropDown />
      </Disclosure.Button>
      <Disclosure.Panel as='ul' className='chapter-panel'>
        {children}
      </Disclosure.Panel>
    </Disclosure>
  );
};

const Module = ({ dashedName, children }: ModuleProps) => {
  const { t } = useTranslation();

  return (
    <Disclosure as='li'>
      <Disclosure.Button className='module-button'>
        <DropDown />
        {t(`intro:front-end-development.modules.${dashedName}`)}
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
  'aria-labelledby': ariaLabelledBy
}: SuperBlockTreeViewProps) => {
  const chapters = uniq(challenges.map(({ chapter }) => chapter)) as string[];

  const content = useMemo(() => {
    return chapters.map(chapter => {
      const modules = uniq(
        challenges
          .filter(challenge => challenge.chapter === chapter)
          .map(challenge => challenge.module) as string[]
      );

      return (
        <Chapter key={chapter} dashedName={chapter}>
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
              <Module key={mod} dashedName={mod}>
                {blocks.map(block => {
                  const blockChallenges = challenges.filter(
                    challenge => challenge.block === block
                  );
                  const blockType = blockChallenges[0].blockType;

                  return (
                    <Block
                      key={block}
                      block={block}
                      blockType={blockType}
                      challenges={blockChallenges}
                      superBlock={superBlock}
                    />
                  );
                })}
              </Module>
            );
          })}
        </Chapter>
      );
    });
  }, [challenges, chapters, superBlock]);

  return (
    <ul aria-labelledby={ariaLabelledBy} className='super-block-accordion'>
      {content}
    </ul>
  );
};
