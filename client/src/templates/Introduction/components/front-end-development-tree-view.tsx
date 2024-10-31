import React, { ReactNode } from 'react';
import { uniq } from 'lodash-es';
import { makeStyles } from '@material-ui/core/styles';
import MuiTreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { useTranslation } from 'react-i18next';
import { ChallengeNode } from '../../../redux/prop-types';
import { SuperBlocks } from '../../../../../shared/config/curriculum';
import Block from './block';

// const useStyles = makeStyles({
// 	root: {
// 		height: 110,
// 		flexGrow: 1,
// 		maxWidth: 400,
// 	},
// });

interface FrontEndDevelopmentTreeViewProps {
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

export const FrontEndDevelopmentTreeView = ({
  challenges,
  superBlock
}: FrontEndDevelopmentTreeViewProps) => {
  // const classes = useStyles();
  const { t } = useTranslation();

  const chapters = uniq(challenges.map(({ chapter }) => chapter));

  const chapterNodes: ChapterNode[] = chapters.map(chapter => {
    const modules = uniq(
      challenges
        .filter(challenge => challenge.chapter === chapter)
        .map(challenge => challenge.module)
    );

    return {
      id: chapter,
      label: chapter, // TODO: Add chapter title to intro.json
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
          label: mod, // TODO: Add module title to intro.json
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
    <MuiTreeView>
      {chapterNodes.map(chapterNode => (
        <TreeItem
          key={chapterNode.id}
          nodeId={chapterNode.id}
          label={chapterNode.label}
        >
          {chapterNode.children.map(mod => (
            <TreeItem key={mod.id} nodeId={mod.id} label={mod.label}>
              {mod.children}
            </TreeItem>
          ))}
        </TreeItem>
      ))}
    </MuiTreeView>
  );
};
