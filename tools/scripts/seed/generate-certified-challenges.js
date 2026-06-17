const fs = require('fs');
const path = require('path');

// Builds the certified user's completed-challenge data dynamically from the
// curriculum so it always reflects every existing challenge. It starts from the
// curated `pregenerated` entries (which carry real solution/URL/exam data) and
// appends a completion for every other challenge, without overwriting or
// duplicating anything already present.

const ENGLISH = path.resolve(
  __dirname,
  '../../../curriculum/challenges/english'
);
const BLOCKS_DIR = path.join(ENGLISH, 'blocks');
const CERTIFICATIONS_DIR = path.join(ENGLISH, 'certifications');

// Fixed timestamp for generated completions so seeding is deterministic.
const GENERATED_COMPLETED_DATE = 1700000000000;

// Daily coding challenges are tracked in their own array, keyed by challengeType.
const DAILY_CHALLENGE_JS = 28;
const DAILY_CHALLENGE_PY = 29;

// The challenge id is authoritative in the frontmatter `id:` field, not the
// filename: some challenges (e.g. video lectures) use a slug filename.
const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---/;

function frontmatter(text) {
  const match = text.match(FRONTMATTER_RE);
  return match ? match[1] : '';
}

function readFrontmatterId(fm) {
  const match = fm.match(/^id:\s*([0-9a-f]{24})\s*$/m);
  return match ? match[1] : undefined;
}

// Mirrors tools/challenge-parser get-file-visitor.js so generated files match
// what the platform stores when a saveSubmissionToDB challenge is submitted.
const LONG_TO_SHORT_LANG = {
  javascript: 'js',
  typescript: 'ts',
  python: 'py'
};
const SUPPORTED_LANGS = ['js', 'css', 'html', 'jsx', 'py', 'ts', 'tsx', 'json'];
const LANG_TO_FILENAME = {
  js: 'script',
  css: 'styles',
  py: 'main',
  json: 'tsconfig'
};
// Render order used by the client (client/utils/sort-challengefiles.ts).
const FILE_ORDER = { indexhtml: 0, stylescss: 1, scriptjs: 2 };

function fileNameForLang(lang) {
  return LANG_TO_FILENAME[lang] ?? 'index';
}

function readFrontmatterNumber(text, key) {
  const match = text.match(new RegExp(`^${key}:\\s*(\\d+)`, 'm'));
  return match ? Number(match[1]) : undefined;
}

function hasSaveSubmissionToDB(text) {
  return /^saveSubmissionToDB:\s*true\s*$/m.test(text);
}

// Extract the first solution set from a challenge's --solutions-- section and
// shape it like a stored completedChallenge `files` array
// ({ contents, ext, history, key, name }).
function solutionFiles(text) {
  const headerMatch = text.match(/^#\s*--solutions--\s*$/m);
  if (!headerMatch) return [];

  const start = headerMatch.index + headerMatch[0].length;
  const rest = text.slice(start);
  // Stop at the next top-level section marker, if any.
  const nextMarker = rest.search(/^#\s*--[a-z-]+--\s*$/m);
  const section = nextMarker === -1 ? rest : rest.slice(0, nextMarker);

  const files = [];
  const seen = new Set();
  const fence = /```([a-z]+)\r?\n([\s\S]*?)```/g;
  let match;
  while ((match = fence.exec(section))) {
    const lang = LONG_TO_SHORT_LANG[match[1]] ?? match[1];
    if (!SUPPORTED_LANGS.includes(lang)) continue;
    // Only the first solution set: take the first code block per language.
    if (seen.has(lang)) continue;
    seen.add(lang);

    const name = fileNameForLang(lang);
    const filePath = `${name}.${lang}`;
    files.push({
      contents: match[2].replace(/\n$/, ''),
      ext: lang,
      history: [filePath],
      key: `${name}${lang}`,
      name
    });
  }

  files.sort((a, b) => (FILE_ORDER[a.key] ?? 99) - (FILE_ORDER[b.key] ?? 99));
  return files;
}

function buildCertifiedChallengeData(pregenerated) {
  const completedChallenges = [...pregenerated];
  // Ids already accounted for (curated). Never overwrite or duplicate these.
  const seenIds = new Set(pregenerated.map(entry => entry.id));
  // Daily challenges share one id across the js/py variants.
  const dailyLanguages = new Map();

  for (const block of fs.readdirSync(BLOCKS_DIR)) {
    const blockDir = path.join(BLOCKS_DIR, block);
    if (!fs.statSync(blockDir).isDirectory()) continue;

    for (const file of fs.readdirSync(blockDir)) {
      if (!file.endsWith('.md')) continue;
      const text = fs.readFileSync(path.join(blockDir, file), 'utf8');
      const fm = frontmatter(text);
      const id = readFrontmatterId(fm);
      if (!id) continue;
      const challengeType = readFrontmatterNumber(fm, 'challengeType');

      if (
        challengeType === DAILY_CHALLENGE_JS ||
        challengeType === DAILY_CHALLENGE_PY
      ) {
        if (!dailyLanguages.has(id)) dailyLanguages.set(id, new Set());
        dailyLanguages
          .get(id)
          .add(challengeType === DAILY_CHALLENGE_JS ? 'javascript' : 'python');
        continue;
      }

      if (seenIds.has(id)) continue;
      seenIds.add(id);

      completedChallenges.push({
        id,
        completedDate: GENERATED_COMPLETED_DATE,
        files: hasSaveSubmissionToDB(fm) ? solutionFiles(text) : []
      });
    }
  }

  // Certification claim challenges live in YAML, not markdown.
  for (const file of fs.readdirSync(CERTIFICATIONS_DIR)) {
    if (!file.endsWith('.yml')) continue;
    const idMatch = fs
      .readFileSync(path.join(CERTIFICATIONS_DIR, file), 'utf8')
      .match(/^id:\s*([0-9a-f]{24})/m);
    if (!idMatch) continue;
    const id = idMatch[1];
    if (seenIds.has(id)) continue;
    seenIds.add(id);
    completedChallenges.push({
      id,
      completedDate: GENERATED_COMPLETED_DATE,
      files: []
    });
  }

  const completedDailyCodingChallenges = [...dailyLanguages.entries()].map(
    ([id, languages]) => ({
      id,
      completedDate: GENERATED_COMPLETED_DATE,
      languages: ['javascript', 'python'].filter(lang => languages.has(lang))
    })
  );

  return { completedChallenges, completedDailyCodingChallenges };
}

module.exports = { buildCertifiedChallengeData, solutionFiles };
