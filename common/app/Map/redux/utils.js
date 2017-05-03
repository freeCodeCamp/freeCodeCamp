import protect from '../../utils/empty-protector';

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
  superBlocks,
  searchNameMap
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
                title: searchNameMap[challenge],
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
        if (filterRegex.test(node.title)) {
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
