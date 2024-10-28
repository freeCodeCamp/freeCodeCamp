import React, { useMemo } from 'react';
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
  'aria-labelledby': string;
}

export const SuperBlockTreeView = ({
  challenges,
  superBlock,
  'aria-labelledby': ariaLabelledBy
}: SuperBlockTreeViewProps) => {
  const { t } = useTranslation();

  const chapters = uniq(challenges.map(({ chapter }) => chapter)) as string[];

  // TODO: Compute the chapter and module completion and add CheckMark icon to the `label`s.
  const treeNodes = useMemo(() => {
    return chapters.map(chapter => {
      const modules = uniq(
        challenges
          .filter(challenge => challenge.chapter === chapter)
          .map(challenge => challenge.module) as string[]
      );

      return (
        <TreeItem
          className='chapter'
          key={chapter}
          nodeId={chapter}
          label={t(`intro:front-end-development.chapters.${chapter}`)}
          icon={<DropDown />}
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
              <TreeItem
                className='module'
                key={mod}
                nodeId={mod}
                label={t(`intro:front-end-development.modules.${mod}`)}
                icon={<DropDown />}
              >
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
              </TreeItem>
            );
          })}
        </TreeItem>
      );
    });
  }, [challenges, chapters, superBlock, t]);

  return (
    <MuiTreeView
      className='super-block-tree-view'
      aria-labelledby={ariaLabelledBy}
    >
      {treeNodes}
    </MuiTreeView>
  );
};
