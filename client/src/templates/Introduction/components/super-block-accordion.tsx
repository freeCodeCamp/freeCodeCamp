import React, { ReactNode, useMemo } from 'react';
import { uniqBy } from 'lodash-es';
import { useTranslation } from 'react-i18next';
// TODO: Add this component to freecodecamp/ui and remove this dependency
import { Disclosure } from '@headlessui/react';

import { ChallengeNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
// TODO: See if there's a nice way to incorporate the structure into data Gatsby
// sources from the curriculum, rather than importing it directly.
import superBlockStructure from '../../../../../curriculum/superblock-structure/full-stack.json';
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

const modules = superBlockStructure.chapters.flatMap(
  chapter => chapter.modules
);

const isLinkModule = (name: string) => {
  const module = modules.find(module => module.dashedName === name);

  return module?.moduleType === 'review';
};

const isLinkChapter = (name: string) => {
  const chapter = superBlockStructure.chapters.find(
    chapter => chapter.dashedName === name
  );

  return chapter?.chapterType === 'exam';
};

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
  const { allChapters, allBlocks } = useMemo(() => {
    const allBlocks = uniqBy(challenges, 'block').map(
      ({ block, blockType, chapter, module }) => ({
        name: block,
        blockType,
        chapter: chapter as string,
        module: module as string,
        challenges: challenges.filter(({ block: b }) => b === block)
      })
    );

    const allModules = uniqBy(allBlocks, 'module').map(
      ({ module, chapter }) => ({
        name: module,
        chapter,
        blocks: allBlocks.filter(({ module: m }) => m === module)
      })
    );

    const allChapters = uniqBy(allModules, 'chapter').map(({ chapter }) => ({
      name: chapter,
      modules: allModules.filter(({ chapter: c }) => c === chapter)
    }));

    return {
      allChapters,
      allModules,
      allBlocks
    };
  }, [challenges]);

  // Expand the outer layers in order to reveal the chosen block.
  const expandedChapter = allBlocks.find(
    ({ name }) => chosenBlock === name
  )?.chapter;
  const expandedModule = allBlocks.find(
    ({ name }) => chosenBlock === name
  )?.module;

  return (
    <ul className='super-block-accordion'>
      {allChapters.map(chapter => {
        if (isLinkChapter(chapter.name)) {
          const linkedChallenge = chapter.modules[0].blocks[0].challenges[0];
          return (
            <li key={chapter.name} className='link-chapter'>
              <Block
                block={linkedChallenge.block}
                blockType={linkedChallenge.blockType}
                challenges={[linkedChallenge]}
                superBlock={superBlock}
              />
            </li>
          );
        }

        return (
          <Chapter
            key={chapter.name}
            dashedName={chapter.name}
            isExpanded={expandedChapter === chapter.name}
          >
            {chapter.modules.map(module => {
              if (isLinkModule(module.name)) {
                const linkedChallenge = module.blocks[0].challenges[0];
                return (
                  <li key={module.name} className='link-module'>
                    <Block
                      block={linkedChallenge.block}
                      blockType={linkedChallenge.blockType}
                      challenges={[linkedChallenge]}
                      superBlock={superBlock}
                    />
                  </li>
                );
              }

              return (
                <Module
                  key={module.name}
                  dashedName={module.name}
                  isExpanded={expandedModule === module.name}
                >
                  {module.blocks.map(block => (
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
