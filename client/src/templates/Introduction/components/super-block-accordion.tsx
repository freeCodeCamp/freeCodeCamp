import React, { ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
// TODO: Add this component to freecodecamp/ui and remove this dependency
import { Disclosure } from '@headlessui/react';

import { ChallengeNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
// TODO: See if there's a nice way to incorporate the structure into data Gatsby
// sources from the curriculum, rather than importing it directly.
import superBlockStructure from '../../../../../curriculum/superblock-structure/full-stack.json';
import { ChapterIcon } from '../../../assets/icons/chapter-icon';
import { FsdChapters } from '../../../../../shared/config/chapters';
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

const modules = superBlockStructure.chapters.flatMap(({ modules }) => modules);
const chapters = superBlockStructure.chapters;

const isLinkModule = (name: string) => {
  const module = modules.find(module => module.dashedName === name);

  return module?.moduleType === 'review';
};

const isLinkChapter = (name: string) => {
  const chapter = chapters.find(chapter => chapter.dashedName === name);

  return chapter?.chapterType === 'exam';
};

const getBlockToChapterMap = () => {
  const blockToChapterMap = new Map<string, string>();
  chapters.forEach(chapter => {
    chapter.modules.forEach(module => {
      module.blocks.forEach(block => {
        blockToChapterMap.set(block.dashedName, chapter.dashedName);
      });
    });
  });

  return blockToChapterMap;
};

const getBlockToModuleMap = () => {
  const blockToModuleMap = new Map<string, string>();
  modules.forEach(module => {
    module.blocks.forEach(block => {
      blockToModuleMap.set(block.dashedName, module.dashedName);
    });
  });

  return blockToModuleMap;
};

const blockToChapterMap = getBlockToChapterMap();
const blockToModuleMap = getBlockToModuleMap();

const Chapter = ({ dashedName, children, isExpanded }: ChapterProps) => {
  const { t } = useTranslation();

  return (
    <Disclosure as='li' className='chapter' defaultOpen={isExpanded}>
      <Disclosure.Button className='chapter-button'>
        <div className='chapter-icon-and-text'>
          <ChapterIcon
            className='map-icon'
            chapter={dashedName as FsdChapters}
          />
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

const Badge = ({ children }: { children: ReactNode }) => (
  <span className='badge'>{children}</span>
);

export const SuperBlockAccordion = ({
  challenges,
  superBlock,
  chosenBlock
}: SuperBlockTreeViewProps) => {
  const { t } = useTranslation();
  const { allChapters } = useMemo(() => {
    const populateBlocks = (blocks: { dashedName: string }[]) =>
      blocks.map(block => {
        const blockChallenges = challenges.filter(
          ({ block: blockName }) => blockName === block.dashedName
        );

        return {
          name: block.dashedName,
          blockType: blockChallenges[0]?.blockType ?? null,
          challenges: blockChallenges
        };
      });

    const allChapters = chapters.map(chapter => ({
      name: chapter.dashedName,
      modules: chapter.modules.map(module => ({
        name: module.dashedName,
        blocks: populateBlocks(module.blocks)
      }))
    }));

    return { allChapters };
  }, [challenges]);

  // Expand the outer layers in order to reveal the chosen block.
  const expandedChapter = blockToChapterMap.get(chosenBlock);
  const expandedModule = blockToModuleMap.get(chosenBlock);

  return (
    <ul className='super-block-accordion'>
      {allChapters.map(chapter => {
        if (isLinkChapter(chapter.name)) {
          const challenges = chapter.modules[0]?.blocks[0]?.challenges;
          const firstChallenge = challenges ? challenges[0] : null;
          return (
            <li key={chapter.name} className='link-chapter'>
              <Block
                block={firstChallenge?.block ?? ''}
                blockType={firstChallenge?.blockType ?? null}
                challenges={challenges}
                superBlock={superBlock}
              />
            </li>
          );
        } else if (chapter.modules.length === 0) {
          return (
            <li key={chapter.name}>
              <Badge>{t('misc.coming-soon')}</Badge>{' '}
              {t(`intro:full-stack-developer.chapters.${chapter.name}`)}
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
                const challenges = module.blocks[0]?.challenges;
                const firstChallenge = challenges ? challenges[0] : null;
                return (
                  <li key={module.name} className='link-module'>
                    <Block
                      block={firstChallenge?.block ?? ''}
                      blockType={firstChallenge?.blockType ?? null}
                      challenges={challenges}
                      superBlock={superBlock}
                    />
                  </li>
                );
              } else if (module.blocks.length === 0) {
                return (
                  <li key={module.name}>
                    <Badge>{t('misc.coming-soon')}</Badge>{' '}
                    {t(`intro:full-stack-developer.modules.${module.name}`)}
                  </li>
                );
              }

              return (
                <Module
                  key={module.name}
                  dashedName={module.name}
                  isExpanded={expandedModule === module.name}
                >
                  {module.blocks.map(block => {
                    if (block.challenges.length === 0) {
                      return (
                        <li key={block.name}>
                          <Badge>{t('misc.coming-soon')}</Badge>{' '}
                          {t(`intro:${superBlock}.blocks.${block.name}.title`)}
                        </li>
                      );
                    }
                    return (
                      <li key={block.name}>
                        <Block
                          block={block.name}
                          blockType={block.blockType}
                          challenges={block.challenges}
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
      })}
    </ul>
  );
};
