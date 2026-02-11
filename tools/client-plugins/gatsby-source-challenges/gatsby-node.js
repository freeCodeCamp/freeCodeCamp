const chokidar = require('chokidar');

const {
  getSuperblockStructure
} = require('@freecodecamp/curriculum/file-handler');
const {
  superBlockToFilename
} = require('@freecodecamp/curriculum/build-curriculum');

const { createChallengeNode } = require('./create-challenge-nodes');
const {
  createChallengePages,
  getTemplateComponent
} = require('../../../client/utils/gatsby');

// createPagesStatefully only runs once, but we need the following when
// updating challenges, so they have to be stored in memory.
let allChallengeNodes;
let idToNextPathCurrentCurriculum;
let idToPrevPathCurrentCurriculum;
const filepathToStatefullyCreatedNodes = new Map();
const filePathToCreatedNodes = new Map();
// reverse lookup, to detect if an updated file has "overwritten" another file
// (i.e. the updated file now has the same node id as another file).
const idToFilepath = new Map();
// recently overwritten files
const idToOverwrittenFile = new Map();

exports.sourceNodes = function sourceChallengesSourceNodes(
  { actions, reporter, createNodeId, createContentDigest },
  pluginOptions
) {
  const { source, onSourceChange, curriculumPath } = pluginOptions;
  if (typeof source !== 'function') {
    reporter.panic(`
    "source" is a required option for fcc-source-challenges. It must be a
    function that delivers challenge objects to the plugin
    `);
  }
  if (typeof onSourceChange !== 'function') {
    reporter.panic(`
    "onSourceChange" is a required option for fcc-source-challenges. It must be
    a function that delivers a new challenge object to the plugin
    `);
  }
  if (typeof curriculumPath !== 'string') {
    reporter.panic(`
    "curriculumPath" is a required option for fcc-source-challenges. It must be
    a path to a curriculum directory
    `);
  }
  const { createNode, deleteNode, deletePage } = actions;
  const watcher = chokidar.watch(curriculumPath, {
    ignored: /(^|[/\\])\../,
    ignoreInitial: true,
    persistent: true,
    cwd: curriculumPath
  });

  function deletePages(filePath) {
    const statefulNodes = filepathToStatefullyCreatedNodes.get(filePath) || [];
    statefulNodes.forEach(node => {
      deleteNode(node);
      deletePage({
        path: node.challenge.fields.slug,
        component: getTemplateComponent(node.challenge.challengeType)
      });
      idToFilepath.delete(node.id);
    });

    const createdNodes = filePathToCreatedNodes.get(filePath) || [];
    createdNodes.forEach(node => {
      deleteNode(node);
      idToFilepath.delete(node.id);
    });

    filepathToStatefullyCreatedNodes.delete(filePath);
    filePathToCreatedNodes.delete(filePath);
  }

  function tryToDeletePages(filePath) {
    const oldCreatedNodeIds = (filePathToCreatedNodes.get(filePath) ?? []).map(
      node => node.id
    );

    const oldStatefullyCreatedNodeIds = (
      filepathToStatefullyCreatedNodes.get(filePath) ?? []
    ).map(node => node.id);

    const oldNodeIds = [...oldCreatedNodeIds, ...oldStatefullyCreatedNodeIds];

    const overwrittenFiles = new Set(
      oldNodeIds.map(id => idToOverwrittenFile.get(id))
    );

    if (overwrittenFiles.has(filePath)) {
      // since this has already been overwritten, it doesn't need
      // deleting, but there's no longer any need to track that it was
      // overwritten.
      oldNodeIds.forEach(id => {
        idToOverwrittenFile.delete(id);
      });
    } else {
      deletePages(filePath);
    }
  }

  function handleChallengeUpdate(filePath, action = 'changed') {
    if (action === 'deleted') {
      // We have to return before calling onSourceChange, since the file is
      // gone.
      return tryToDeletePages(filePath);
    }

    return onSourceChange(filePath)
      .then(challenges => {
        const actionText = action === 'added' ? 'creating' : 'replacing';
        reporter.info(
          `Challenge file ${action}: ${filePath}, ${actionText} challengeNodes with ids ${challenges.map(({ id }) => id).join(', ')}`
        );

        if (action === 'changed') {
          tryToDeletePages(filePath);
        }

        const challengeNodes = challenges.map(challenge =>
          reportNodeCreationToGatsby(challenge, {
            isReloading: true
          })
        );

        // Track if file has been overwritten.
        challengeNodes.forEach(({ id }) => {
          const maybeFilepath = idToFilepath.get(id);
          if (maybeFilepath) {
            idToOverwrittenFile.set(id, maybeFilepath);
          }
        });

        challengeNodes.forEach(node => {
          idToFilepath.set(node.id, filePath);
        });

        // we always need to track the created nodes to ensure the pages get
        // recreated.
        filePathToCreatedNodes.set(filePath, challengeNodes);
      })
      .catch(e =>
        reporter.error(
          `fcc-replace-challenge\nattempting to replace ${filePath}\n\n${e.message}\n${e.stack ? `  ${e.stack}` : ''}`
        )
      );
  }

  // On file change, replace only the changed challenge. The key is ensuring
  // onSourceChange returns a challenge with complete metadata.
  watcher.on('change', filePath =>
    /\.md?$/.test(filePath) ? handleChallengeUpdate(filePath, 'changed') : null
  );

  // On file add, replace just the new challenge.
  watcher.on('add', filePath => {
    if (!/\.md?$/.test(filePath)) return;
    handleChallengeUpdate(filePath, 'added');
  });

  watcher.on('unlink', filePath => {
    if (!/\.md?$/.test(filePath)) return;
    handleChallengeUpdate(filePath, 'deleted');
  });

  function sourceAndCreateNodes() {
    return source()
      .then(challenges => Promise.all(challenges))
      .then(challenges => {
        // create challenge nodes
        challenges.forEach(challenge => {
          const newNode = reportNodeCreationToGatsby(challenge);
          const existingNodes =
            filepathToStatefullyCreatedNodes.get(challenge.sourceLocation) ||
            [];
          filepathToStatefullyCreatedNodes.set(challenge.sourceLocation, [
            ...existingNodes,
            newNode
          ]);
          idToFilepath.set(newNode.id, challenge.sourceLocation);
        });
        // create superblock structure nodes
        createSuperBlockStructureNodes();
        return Promise.resolve();
      })
      .catch(e => {
        console.log(e);
        reporter.panic(`fcc-source-challenges

  ${e.message}

  `);
      });
  }

  function reportNodeCreationToGatsby(challenge, options) {
    const challengeNode = createChallengeNode(challenge, reporter, options);

    createNode(challengeNode);
    return challengeNode;
  }

  function createSuperBlockStructureNodes() {
    Object.keys(superBlockToFilename).forEach(superBlock => {
      const filename = superBlockToFilename[superBlock] || superBlock;
      try {
        const structure = getSuperblockStructure(filename);

        const nodeId = createNodeId(`SuperBlockStructure-${superBlock}`);
        const nodeContent = JSON.stringify(structure);

        createNode({
          ...structure,
          superBlock,
          id: nodeId,
          parent: null,
          children: [],
          internal: {
            type: 'SuperBlockStructure',
            content: nodeContent,
            contentDigest: createContentDigest(structure)
          }
        });
      } catch (err) {
        reporter.warn(
          `Could not load structure for ${superBlock} (${filename}): ${err.message}`
        );
      }
    });
  }

  return new Promise((resolve, reject) => {
    watcher.on('ready', () => sourceAndCreateNodes().then(resolve, reject));
  });
};

exports.createPagesStatefully = async function ({ graphql, actions }) {
  const result = await graphql(`
    {
      allChallengeNode(
        sort: {
          fields: [
            challenge___superOrder
            challenge___order
            challenge___challengeOrder
          ]
        }
      ) {
        edges {
          node {
            id
            challenge {
              block
              blockLabel
              blockLayout
              certification
              challengeType
              dashedName
              demoType
              disableLoopProtectTests
              disableLoopProtectPreview
              fields {
                slug
                blockHashSlug
              }
              id
              isLastChallengeInBlock
              order
              required {
                link
                src
              }
              challengeOrder
              challengeFiles {
                name
                ext
                contents
                head
                tail
                history
                fileKey
              }
              saveSubmissionToDB
              solutions {
                contents
                ext
                history
                fileKey
              }
              superBlock
              superOrder
              template
              usesMultifileEditor
              chapter
              module
            }
          }
        }
      }
    }
  `);

  allChallengeNodes = result.data.allChallengeNode.edges.map(
    ({ node }) => node
  );

  const createIdToNextPathMap = nodes =>
    nodes.reduce((map, node, index) => {
      const nextNode = nodes[index + 1];
      const nextPath = nextNode ? nextNode.challenge.fields.slug : null;
      if (nextPath) map[node.id] = nextPath;
      return map;
    }, {});

  const createIdToPrevPathMap = nodes =>
    nodes.reduce((map, node, index) => {
      const prevNode = nodes[index - 1];
      const prevPath = prevNode ? prevNode.challenge.fields.slug : null;
      if (prevPath) map[node.id] = prevPath;
      return map;
    }, {});

  idToNextPathCurrentCurriculum = createIdToNextPathMap(allChallengeNodes);

  idToPrevPathCurrentCurriculum = createIdToPrevPathMap(allChallengeNodes);

  const nodeToPage = createChallengePages(actions.createPage, {
    idToNextPathCurrentCurriculum,
    idToPrevPathCurrentCurriculum
  });

  // Create challenge pages.
  allChallengeNodes.forEach(nodeToPage);
};

exports.createPages = function ({ actions }) {
  // actions.createPage has to be called in the createPages hook
  const nodes = [...filePathToCreatedNodes.values()].flat();
  for (const node of nodes) {
    const nodeToPage = createChallengePages(actions.createPage, {
      idToNextPathCurrentCurriculum,
      idToPrevPathCurrentCurriculum
    });

    nodeToPage(node, 0, allChallengeNodes);
  }

  // It's important NOT to clear the createdNodes, since Gatsby deletes any
  // pages that are not recreated each time createPages is called.
};
