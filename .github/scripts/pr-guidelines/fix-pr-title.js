'use strict';

// Returns the minimum number of single-character edits (insert, delete, substitute)
// needed to turn string `a` into string `b`.
function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0
    )
  );
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

module.exports = async ({ github, context }) => {
  const title = context.payload.pull_request.title;
  const ccRegex =
    /^(feat|fix|refactor|docs|chore|build|ci|test|perf|revert)(\([^)]+\))?: .+/;

  if (ccRegex.test(title)) return;

  const types = [
    'feat',
    'fix',
    'refactor',
    'docs',
    'chore',
    'build',
    'ci',
    'test',
    'perf',
    'revert'
  ];

  let newTitle = title;

  // Fix 1: space between type and scope — "feat (scope):" → "feat(scope):"
  newTitle = newTitle.replace(/^(\w+)\s+(\([^)]+\):)/, '$1$2');

  // Fix 2: missing colon after scope — "feat(scope) desc" → "feat(scope): desc"
  newTitle = newTitle.replace(/^(\w+\([^)]+\)) ([^:])/, '$1: $2');

  // Fix 3: typo in type — "refator(scope):" → "refactor(scope):" (distance ≤ 2)
  const typoMatch = newTitle.match(/^(\w+)(\([^)]+\))?:/);
  if (typoMatch) {
    const candidate = typoMatch[1];
    if (!types.includes(candidate)) {
      const closest = types
        .map(t => ({ t, d: levenshtein(candidate, t) }))
        .filter(x => x.d <= 2)
        .sort((a, b) => a.d - b.d)[0];
      if (closest) newTitle = newTitle.replace(candidate, closest.t);
    }
  }

  // Fix 4: missing space after colon — "fix:desc" → "fix: desc"
  newTitle = newTitle.replace(/^(\w+(?:\([^)]+\))?):(\S)/, '$1: $2');

  // Catch-all: prefix with "fix: " if still not a valid CC title
  if (!ccRegex.test(newTitle)) {
    newTitle = `fix: ${newTitle}`;
  }

  if (newTitle !== title) {
    await github.rest.pulls.update({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.payload.pull_request.number,
      title: newTitle
    });
  }
};
