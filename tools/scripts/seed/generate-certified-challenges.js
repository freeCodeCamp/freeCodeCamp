const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const {
  challengeTypes
} = require('@freecodecamp/shared/config/challenge-types');
const { parseMDSync } = require('../../challenge-parser/parser');

const ENGLISH = path.resolve(
  __dirname,
  '../../../curriculum/challenges/english'
);
const GENERATED_COMPLETED_DATE = 1700000000000;
const FILE_ORDER = { indexhtml: 0, stylescss: 1, scriptjs: 2 };
const URL_PROJECT_TYPES = new Set([
  challengeTypes.frontEndProject,
  challengeTypes.backEndProject,
  challengeTypes.pythonProject,
  challengeTypes.codeAllyCert
]);

function* challengeFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) yield* challengeFiles(filename);
    else if (entry.name.endsWith('.md')) yield filename;
  }
}

function solutionFiles(filename) {
  const { solutions } = parseMDSync(filename);
  if (!solutions?.[0]?.length) {
    throw new Error(`Missing saved submission solution in ${filename}`);
  }
  return solutions[0]
    .map(({ contents, ext, name }) => ({
      contents,
      ext,
      history: [`${name}.${ext}`],
      key: `${name}${ext}`,
      name
    }))
    .sort((a, b) => (FILE_ORDER[a.key] ?? 99) - (FILE_ORDER[b.key] ?? 99));
}

// Preserve the snapshot, including historical submissions, and discover new
// lessons on each seed. The optional directory also allows isolated fixtures.
function buildCertifiedChallengeData(
  {
    completedChallenges: baseline = [],
    completedDailyCodingChallenges: daily = []
  },
  englishDirectory = ENGLISH
) {
  const completedChallenges = [...baseline];
  const seenIds = new Set(baseline.map(({ id }) => id));
  const dailyChallenges = new Map(
    daily.map(entry => [
      entry.id,
      { ...entry, languages: [...entry.languages] }
    ])
  );

  for (const filename of challengeFiles(
    path.join(englishDirectory, 'blocks')
  )) {
    const text = fs.readFileSync(filename, 'utf8');
    const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) continue;
    const { id, challengeType, saveSubmissionToDB } = yaml.safeLoad(match[1]);
    if (!id) continue;

    if (
      challengeType === challengeTypes.dailyChallengeJs ||
      challengeType === challengeTypes.dailyChallengePy
    ) {
      const language =
        challengeType === challengeTypes.dailyChallengeJs
          ? 'javascript'
          : 'python';
      const entry = dailyChallenges.get(id) ?? {
        id,
        completedDate: GENERATED_COMPLETED_DATE,
        languages: []
      };
      if (!entry.languages.includes(language)) entry.languages.push(language);
      dailyChallenges.set(id, entry);
      continue;
    }
    if (seenIds.has(id)) continue;
    seenIds.add(id);
    completedChallenges.push({
      id,
      completedDate: GENERATED_COMPLETED_DATE,
      files: saveSubmissionToDB ? solutionFiles(filename) : [],
      ...(URL_PROJECT_TYPES.has(challengeType)
        ? { challengeType, solution: 'https://example.com' }
        : {})
    });
  }

  const certificationsDirectory = path.join(englishDirectory, 'certifications');
  for (const file of fs.readdirSync(certificationsDirectory)) {
    if (!file.endsWith('.yml')) continue;
    const { id } = yaml.safeLoad(
      fs.readFileSync(path.join(certificationsDirectory, file), 'utf8')
    );
    if (!id || seenIds.has(id)) continue;
    seenIds.add(id);
    completedChallenges.push({
      id,
      completedDate: GENERATED_COMPLETED_DATE,
      files: []
    });
  }

  return {
    completedChallenges,
    completedDailyCodingChallenges: [...dailyChallenges.values()]
  };
}

module.exports = { buildCertifiedChallengeData, solutionFiles };
