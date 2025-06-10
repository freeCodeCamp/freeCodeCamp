const { getSection } = require('./utils/get-section');

const requiredSectionsByChallengeType = {
  0: ['description', 'instructions', 'hints', 'seed', 'seed-contents'],
  2: ['description', 'question', 'answers', 'explanation'],
  7: ['description', 'question', 'transcript'],
  20: ['description', 'hints', 'seed', 'seed-contents']
};

function plugin() {
  return transformer;

  function transformer(tree, file) {
    const challengeType = file.data?.challengeType;

    if (typeof challengeType !== 'number') {
      throw new Error(
        'Challenge file must specify a numeric challengeType in file.data'
      );
    }

    const required = requiredSectionsByChallengeType[challengeType] || [];

    for (const sectionId of required) {
      const section = getSection(tree, `--${sectionId}--`);
      if (section.length === 0) {
        throw new Error(
          `Missing required section "--${sectionId}--" for challengeType ${challengeType}`
        );
      }
    }
  }
}

module.exports = plugin;
