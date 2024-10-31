import React, { ReactNode } from 'react';
import { uniq } from 'lodash-es';
import { makeStyles } from '@material-ui/core/styles';
import MuiTreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import { useTranslation } from 'react-i18next';

// const useStyles = makeStyles({
// 	root: {
// 		height: 110,
// 		flexGrow: 1,
// 		maxWidth: 400,
// 	},
// });

interface BlockNode {
  id: string;
  label: string;
  children: ReactNode;
}

interface ModuleNode {
  id: string;
  label: string;
  children: BlockNode[];
}

interface ChapterNode {
  id: string;
  label: string;
  children: ModuleNode[];
}

export const FrontEndDevelopmentTreeView = ({ challenges, superBlock }) => {
  // const classes = useStyles();
  const { t } = useTranslation();

  const chapters = uniq(challenges.map(({ chapter }) => chapter));

  // Each chapter is a tree
  const trees: ChapterNode[] = chapters.map(chapter => {
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
            return {
              id: block,
              label: t(`intro:${superBlock}.blocks.${block}.title`),
              children: (
                <div>
                  Block content goes here
                  <br />
                  Ipsum porro tempore est fugit et est. Incidunt est incidunt
                  totam eveniet dolorum. Consequatur itaque esse asperiores at
                  optio mollitia quo. Sed neque ex vel tempore aspernatur sunt.
                  Quod cum a dignissimos.
                </div>
              )
            };
          })
        };
      })
    };
  });

  // Recursively render tree items
  const renderTree = (nodes: ChapterNode) => {
    const maybeRenderChildren = () => {
      if (nodes.children) {
        if (Array.isArray(nodes.children))
          return nodes.children.map(node => renderTree(node));
        return nodes.children;
      }

      return null;
    };

    return (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.label}>
        {maybeRenderChildren()}
      </TreeItem>
    );
  };

  return trees.map(tree => (
    <MuiTreeView
      key={tree.id}
      // defaultExpanded={['chapter-html']}
      // className={classes.root}
      // defaultCollapseIcon={<ExpandMoreIcon />}
      // defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(tree)}
    </MuiTreeView>
  ));
};
