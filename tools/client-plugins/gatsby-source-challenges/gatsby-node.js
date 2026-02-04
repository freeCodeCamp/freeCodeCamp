const chokidar = require('chokidar');
const {
  getSuperblockStructure
} = require('@freecodecamp/curriculum/file-handler');
const {
  superBlockToFilename
} = require('@freecodecamp/curriculum/build-curriculum');

const { createChallengeNode } = require('./create-challenge-nodes');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type QuizQuestion {
      text: String!
      distractors: [String!]!
      answer: String!
      audioId: String
      transcript: String
    }
  `;
  createTypes(typeDefs);
};

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
  const { createNode } = actions;
  const watcher = chokidar.watch(curriculumPath, {
    ignored: /(^|[/\\])\../,
    ignoreInitial: true,
    persistent: true,
    cwd: curriculumPath
  });

  function handleChallengeUpdate(filePath, action = 'changed') {
    return onSourceChange(filePath)
      .then(challenges => {
        const actionText = action === 'added' ? 'creating' : 'replacing';
        reporter.info(
          `Challenge file ${action}: ${filePath}, ${actionText} challengeNodes with ids ${challenges.map(({ id }) => id).join(', ')}`
        );
        challenges.forEach(challenge =>
          createVisibleChallenge(challenge, { isReloading: true })
        );
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

  function sourceAndCreateNodes() {
    return source()
      .then(challenges => Promise.all(challenges))
      .then(challenges => {
        // create challenge nodes
        challenges.forEach(challenge => createVisibleChallenge(challenge));
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

  function createVisibleChallenge(challenge, options) {
    createNode(createChallengeNode(challenge, reporter, options));
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
