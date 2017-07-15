import protect from '../../utils/empty-protector';

const throwIfUndefined = () => {
  throw new Error('Challenge does not have a title');
};

export function createSearchTitle(
  name = throwIfUndefined(),
  challengeMap = {}
) {
  return challengeMap[name] || name;
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
  {
    block: blockMap,
    challenge: challengeMap,
    superBlock: superBlockMap
  } = {},
  { superBlocks } = {}
) {
  if (!superBlocks || !superBlockMap || !blockMap) {
    return {};
  }
  return {
    children: superBlocks.map(superBlock => {
      return {
        name: superBlock,
        isOpen: false,
        isHidden: false,
        children: protect(superBlockMap[superBlock]).blocks.map(block => {
          return {
            name: block,
            isOpen: false,
            isHidden: false,
            children: protect(blockMap[block]).challenges.map(challenge => {
              return {
                name: challenge,
                title: createSearchTitle(challenge, challengeMap),
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
