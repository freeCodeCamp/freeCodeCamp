import flow from 'lodash/flow';
import { bonfire, html, js } from '../../utils/challengeTypes';
import { decodeScriptTags } from '../../../utils/encode-decode';
import protect from '../../utils/empty-protector';

export function arrayToString(seedData = ['']) {
  seedData = Array.isArray(seedData) ? seedData : [seedData];
  return seedData.reduce((seed, line) => '' + seed + line + '\n', '\n');
}

export function buildSeed({ challengeSeed = [] } = {}) {
  return flow(
    arrayToString,
    decodeScriptTags
  )(challengeSeed);
}

const pathsMap = {
  [html]: 'html',
  [js]: 'js',
  [bonfire]: 'js'
};

export function getPreFile({ challengeType }) {
  return {
    name: 'index',
    ext: pathsMap[challengeType] || 'html',
    key: getFileKey({ challengeType })
  };
}

export function getFileKey({ challengeType }) {
  return 'index' + (pathsMap[challengeType] || 'html');
}

export function createTests({ tests = [] }) {
  return tests
    .map(test => {
      if (typeof test === 'string') {
        return {
          text: ('' + test).split('message: ').pop().replace(/\'\);/g, ''),
          testString: test
        };
      }
      return test;
    });
}

function logReplacer(value) {
  if (Array.isArray(value)) {
    const replaced = value.map(logReplacer);
    return '[' + replaced.join(', ') + ']';
  }
  if (typeof value === 'string' && !value.startsWith('//')) {
    return '"' + value + '"';
  }
  if (typeof value === 'number' && isNaN(value)) {
    return value.toString();
  }
  if (typeof value === 'undefined') {
    return 'undefined';
  }
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'function') {
    return value.name;
  }
  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }

  return value;
}

export function loggerToStr(args) {
  args = Array.isArray(args) ? args : [args];
  return args
    .map(logReplacer)
    .reduce((str, arg) => str + arg + '\n', '');
}

export function getNextChallenge(
  current,
  entities,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const { challenge: challengeMap, block: blockMap } = entities;
  // find current challenge
  // find current block
  // find next challenge in block
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  const index = block.challenges.indexOf(currentChallenge.dashedName);
  // use next challenge name to find challenge in challenge map
  const nextChallenge = challengeMap[
    // grab next challenge name in current block
    // skip is used to skip isComingSoon challenges
    block.challenges[ index + 1 + skip ]
  ];
  if (
    !isDev &&
    nextChallenge &&
    (nextChallenge.isComingSoon || nextChallenge.isBeta)
  ) {
    // if we find a next challenge and it is a coming soon
    // recur with plus one to skip this challenge
    return getNextChallenge(current, entities, { isDev, skip: skip + 1 });
  }
  return nextChallenge;
}

export function getFirstChallengeOfNextBlock(
  current,
  entities,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const {
    challenge: challengeMap,
    block: blockMap,
    superBlock: SuperBlockMap
  } = entities;
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  if (!block) {
    return null;
  }
  const superBlock = SuperBlockMap[block.superBlock];
  if (!superBlock) {
    return null;
  }
  // find index of current block
  const index = superBlock.blocks.indexOf(block.dashedName);

  // find next block name
  // and pull block object from block map
  const newBlock = blockMap[
    superBlock.blocks[ index + 1 + skip ]
  ];
  if (!newBlock) {
    return null;
  }
  // grab first challenge from next block
  const nextChallenge = challengeMap[newBlock.challenges[0]];
  if (isDev || !nextChallenge || !nextChallenge.isComingSoon) {
    return nextChallenge;
  }
  // if first challenge is coming soon, find next challenge here
  const nextChallenge2 = getNextChallenge(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );
  if (nextChallenge2) {
    return nextChallenge2;
  }
  // whole block is coming soon
  // skip this block
  return getFirstChallengeOfNextBlock(
    current,
    entities,
    { isDev, skip: skip + 1 }
  );
}

export function getFirstChallengeOfNextSuperBlock(
  current,
  entities,
  superBlocks,
  {
    isDev = false,
    skip = 0
  } = {}
) {
  const {
    challenge: challengeMap,
    block: blockMap,
    superBlock: SuperBlockMap
  } = entities;
  const currentChallenge = challengeMap[current];
  if (!currentChallenge) {
    return null;
  }
  const block = blockMap[currentChallenge.block];
  if (!block) {
    return null;
  }
  const superBlock = SuperBlockMap[block.superBlock];
  if (!superBlock) {
    return null;
  }
  const index = superBlocks.indexOf(superBlock.dashedName);
  const newSuperBlock = SuperBlockMap[superBlocks[ index + 1 + skip]];
  if (!newSuperBlock) {
    return null;
  }
  const newBlock = blockMap[
    newSuperBlock.blocks[ 0 ]
  ];
  if (!newBlock) {
    return null;
  }
  const nextChallenge = challengeMap[newBlock.challenges[0]];
  if (isDev || !nextChallenge || !nextChallenge.isComingSoon) {
    return nextChallenge;
  }
  // coming soon challenge, grab next
  // non coming soon challenge in same block instead
  const nextChallengeInBlock = getNextChallenge(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );
  if (nextChallengeInBlock) {
    return nextChallengeInBlock;
  }
  // whole block is coming soon
  // grab first challenge in next block in newSuperBlock instead
  const challengeInNextBlock = getFirstChallengeOfNextBlock(
    nextChallenge.dashedName,
    entities,
    { isDev }
  );

  if (challengeInNextBlock) {
    return challengeInNextBlock;
  }
  // whole super block is coming soon
  // skip this super block
  return getFirstChallengeOfNextSuperBlock(
    current,
    entities,
    superBlocks,
    { isDev, skip: skip + 1 }
  );
}

export function getCurrentBlockName(current, entities) {
  const { challenge: challengeMap } = entities;
  const challenge = challengeMap[current];
  return challenge.block;
}

export function getCurrentSuperBlockName(current, entities) {
  const { challenge: challengeMap, block: blockMap } = entities;
  const challenge = challengeMap[current];
  const block = blockMap[challenge.block];
  return block.superBlock;
}

// gets new mouse position
// getMouse(
//   e: MouseEvent|TouchEvent,
//   [ dx: Number, dy: Number ]
// ) => [ Number, Number ]
export function getMouse(e, [dx, dy]) {
  let { pageX, pageY, touches, changedTouches } = e;

  // touches can be empty on touchend
  if (touches || changedTouches) {
    e.preventDefault();
    // these re-assigns the values of pageX, pageY from touches
    ({ pageX, pageY } = touches[0] || changedTouches[0]);
  }

  return [pageX - dx, pageY - dy];
}

export function filterComingSoonBetaChallenge(
  isDev = false,
  { isComingSoon, isBeta }
) {
  return !(isComingSoon || isBeta) ||
    isDev;
}

export function filterComingSoonBetaFromEntities(
  { challenge: challengeMap, ...rest },
  isDev = false
) {
  const filter = filterComingSoonBetaChallenge.bind(null, isDev);
  return {
    ...rest,
    challenge: Object.keys(challengeMap)
      .map(dashedName => challengeMap[dashedName])
      .filter(filter)
      .reduce((challengeMap, challenge) => {
        challengeMap[challenge.dashedName] = challenge;
        return challengeMap;
      }, {})
  };
}

// interface Node {
//   isHidden: Boolean,
//   children: Void|[ ...Node ],
//   isOpen?: Boolean
// }
//
// interface MapUi
// {
//   children: [...{
//     name: (superBlock: String),
//     isOpen: Boolean,
//     isHidden: Boolean,
//     children: [...{
//       name: (blockName: String),
//       isOpen: Boolean,
//       isHidden: Boolean,
//       children: [...{
//         name: (challengeName: String),
//         isHidden: Boolean
//       }]
//     }]
//   }]
// }
export function createMapUi(
  { superBlock: superBlockMap, block: blockMap } = {},
  superBlocks
) {
  if (!superBlocks || !superBlockMap || !blockMap) {
    return {};
  }
  return {
    children: superBlocks.map(superBlock => {
      return {
        name: superBlock,
        isOpen: true,
        isHidden: false,
        children: protect(superBlockMap[superBlock]).blocks.map(block => {
          return {
            name: block,
            isOpen: true,
            isHidden: false,
            children: protect(blockMap[block]).challenges.map(challenge => {
              return {
                name: challenge,
                isHidden: false,
                children: null
              };
            })
          };
        })
      };
    })
  };
}

// synchronise
// traverseMapUi(
//   tree: MapUi|Node,
//   update: ((MapUi|Node) => MapUi|Node)
// ) => MapUi|Node
export function traverseMapUi(tree, update) {
  let childrenChanged;
  if (!Array.isArray(tree.children)) {
    return update(tree);
  }
  const newChildren = tree.children.map(node => {
    const newNode = traverseMapUi(node, update);
    if (!childrenChanged && newNode !== node) {
      childrenChanged = true;
    }
    return newNode;
  });
  if (childrenChanged) {
    tree = {
      ...tree,
      children: newChildren
    };
  }
  return update(tree);
}

// synchronise
// getNode(tree: MapUi, name: String) => MapUi
export function getNode(tree, name) {
  let node;
  traverseMapUi(tree, thisNode => {
    if (thisNode.name === name) {
      node = thisNode;
    }
    return thisNode;
  });
  return node;
}

// synchronise
// updateSingelNode(
//   tree: MapUi,
//   name: String,
//   update(MapUi|Node) => MapUi|Node
// ) => MapUi
export function updateSingleNode(tree, name, update) {
  return traverseMapUi(tree, node => {
    if (name !== node.name) {
      return node;
    }
    return update(node);
  });
}

// synchronise
// toggleThisPanel(tree: MapUi, name: String) => MapUi
export function toggleThisPanel(tree, name) {
  return updateSingleNode(tree, name, node => {
    return {
      ...node,
      isOpen: !node.isOpen
    };
  });
}

// toggleAllPanels(tree: MapUi, isOpen: Boolean = false ) => MapUi
export function toggleAllPanels(tree, isOpen = false) {
  return traverseMapUi(tree, node => {
    if (!Array.isArray(node.children) || node.isOpen === isOpen) {
      return node;
    }
    return {
      ...node,
      isOpen
    };
  });
}

// collapseAllPanels(tree: MapUi) => MapUi
export function collapseAllPanels(tree) {
  return toggleAllPanels(tree);
}

// expandAllPanels(tree: MapUi) => MapUi
export function expandAllPanels(tree) {
  return toggleAllPanels(tree, true);
}

// applyFilterToMap(tree: MapUi, filterRegex: RegExp) => MapUi
export function applyFilterToMap(tree, filterRegex) {
  return traverseMapUi(
    tree,
    node => {
      // no children indicates a challenge node
      // if leaf (challenge) then test if regex is a match
      if (!Array.isArray(node.children)) {
        // does challenge name meet filter criteria?
        if (filterRegex.test(node.name)) {
          // is challenge currently hidden?
          if (node.isHidden) {
            // unhide challenge, it matches
            return {
              ...node,
              isHidden: false
            };
          }
        } else if (!node.isHidden) {
          return {
            ...node,
            isHidden: true
          };
        }
        return node;
      }
      // if not leaf node (challenge) then
      // test to see if all its children are hidden
      if (node.children.every(node => node.isHidden)) {
        if (node.isHidden) {
          return node;
        }
        return {
          ...node,
          isHidden: true
        };
      } else if (node.isHidden) {
        return {
          ...node,
          isHidden: false
        };
      }
      // nothing has changed
      return node;
    }
  );
}

// unfilterMapUi(tree: MapUi) => MapUi
export function unfilterMapUi(tree) {
  return traverseMapUi(
    tree,
    node => {
      if (!node.isHidden) {
        return node;
      }
      return {
        ...node,
        isHidden: false
      };
    }
  );
}
