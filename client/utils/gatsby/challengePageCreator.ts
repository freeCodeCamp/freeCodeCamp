/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import path from 'path';
import { dasherize } from '../../../utils/slugs';

import { viewTypes } from '../challenge-types';

const backend = path.resolve(
  __dirname,
  '../../src/templates/Challenges/projects/backend/Show.js'
);
const classic = path.resolve(
  __dirname,
  '../../src/templates/Challenges/classic/Show.js'
);
const frontend = path.resolve(
  __dirname,
  '../../src/templates/Challenges/projects/frontend/Show.js'
);
const intro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/Intro.js'
);
const superBlockIntro = path.resolve(
  __dirname,
  '../../src/templates/Introduction/SuperBlockIntro.js'
);
const video = path.resolve(
  __dirname,
  '../../src/templates/Challenges/video/Show.js'
);

const views = {
  backend,
  classic,
  modern: classic,
  frontend,
  video
  // quiz: Quiz
};

const getNextChallengePath = (
  _node: any,
  index: number,
  nodeArray: { [x: string]: any }
) => {
  const next = nodeArray[index + 1];
  return next ? next.node.fields.slug : '/learn';
};

const getPrevChallengePath = (_node: any, index: number, nodeArray: any[]) => {
  const prev = nodeArray[index - 1];
  return prev ? prev.node.fields.slug : '/learn';
};

const getTemplateComponent = (challengeType: string | number) =>
  views[viewTypes[challengeType]];

export const createChallengePages =
  (
    createPage: (arg0: {
      path: any;
      component: any;
      context: {
        challengeMeta: {
          superBlock: any;
          block: any;
          template: any;
          required: any;
          nextChallengePath: any;
          prevChallengePath: any;
          id: any;
        };
        slug: any;
      };
    }) => any
  ) =>
  ({ node }: any, index: any, thisArray: any) => {
    const {
      superBlock,
      block,
      fields: { slug },
      required = [],
      template,
      challengeType,
      id
    } = node;
    // TODO: challengeType === 7 and isPrivate are the same, right? If so, we
    // should remove one of them.

    return createPage({
      path: slug,
      component: getTemplateComponent(challengeType),
      context: {
        challengeMeta: {
          superBlock,
          block,
          template,
          required,
          nextChallengePath: getNextChallengePath(node, index, thisArray),
          prevChallengePath: getPrevChallengePath(node, index, thisArray),
          id
        },
        slug
      }
    });
  };

export const createBlockIntroPages =
  (
    createPage: (arg0: {
      path: any;
      component: string;
      context: { block: string; slug: any };
    }) => any
  ) =>
  (edge: { node: { fields: { slug: any }; frontmatter: { block: any } } }) => {
    const {
      fields: { slug },
      frontmatter: { block }
    } = edge.node;

    return createPage({
      path: slug,
      component: intro,
      context: {
        block: dasherize(block),
        slug
      }
    });
  };

export const createSuperBlockIntroPages =
  (
    createPage: (arg0: {
      path: any;
      component: string;
      context: { superBlock: any; slug: any };
    }) => any
  ) =>
  (edge: {
    node: { fields: { slug: any }; frontmatter: { superBlock: any } };
  }) => {
    const {
      fields: { slug },
      frontmatter: { superBlock }
    } = edge.node;

    return createPage({
      path: slug,
      component: superBlockIntro,
      context: {
        superBlock,
        slug
      }
    });
  };
