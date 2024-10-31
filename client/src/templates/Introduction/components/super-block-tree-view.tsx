import React, { ReactNode } from 'react';
import { uniq } from 'lodash-es';
import MuiTreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { useTranslation } from 'react-i18next';
import { ChallengeNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import DropDown from '../../../assets/icons/dropdown';
import Block from './block';

import './super-block-tree-view.css';

interface SuperBlockTreeViewProps {
  challenges: ChallengeNode['challenge'][];
  superBlock: SuperBlocks;
}

interface ModuleNode {
  id: string;
  label: string;
  children: ReactNode[];
}

interface ChapterNode {
  id: string;
  label: string;
  children: ModuleNode[];
}

export const SuperBlockTreeView = ({
  challenges,
  superBlock
}: SuperBlockTreeViewProps) => {
  const { t } = useTranslation();

  const chapters = uniq(challenges.map(({ chapter }) => chapter));

  // TODO: Compute the chapter and module completion and add CheckMark icon to the `label`s.
  const chapterNodes: ChapterNode[] = chapters.map(chapter => {
    const modules = uniq(
      challenges
        .filter(challenge => challenge.chapter === chapter)
        .map(challenge => challenge.module)
    );

    return {
      id: chapter,
      label: t(`intro:front-end-development.chapters.${chapter}`),
      children: modules.map(mod => {
        const blocks = uniq(
          challenges
            .filter(
              challenge =>
                challenge.chapter === chapter && challenge.module === mod
            )
            .map(challenge => challenge.block)
        );

        return {
          id: mod,
          label: t(`intro:front-end-development.modules.${mod}`),
          children: blocks.map(block => {
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
          })
        };
      })
    };
  });

  return (
    <MuiTreeView className='super-block-tree-view'>
      {chapterNodes.map(chapterNode => (
        <TreeItem
          className='chapter'
          key={chapterNode.id}
          nodeId={chapterNode.id}
          label={chapterNode.label}
          icon={<DropDown />}
        >
          {chapterNode.children.map(mod => (
            <TreeItem
              className='module'
              key={mod.id}
              nodeId={mod.id}
              label={mod.label}
              icon={<DropDown />}
            >
              {mod.children}
            </TreeItem>
          ))}
        </TreeItem>
      ))}
    </MuiTreeView>
  );
};
