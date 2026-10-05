const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

const {
  buildCertifiedChallengeData
} = require('./generate-certified-challenges');
const snapshot = require('./pregenerated-completed-challenges');

test('preserves the completion snapshot without duplicate ids', () => {
  const result = buildCertifiedChallengeData(snapshot);
  for (const key of ['completedChallenges', 'completedDailyCodingChallenges']) {
    const byId = new Map(result[key].map(entry => [entry.id, entry]));
    assert.equal(byId.size, result[key].length);
    for (const entry of snapshot[key])
      assert.deepEqual(byId.get(entry.id), entry);
  }
});

test('discovers new lessons, submissions, certifications and nested daily variants', t => {
  const directory = fs.mkdtempSync(
    path.join(os.tmpdir(), 'certified-challenges-')
  );
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const write = (filename, contents) => {
    const target = path.join(directory, filename);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, contents);
  };
  const lesson = (id, type, extra = '', body = '') =>
    `---\nid: ${id}\ntitle: Test\nchallengeType: ${type}\ndashedName: test\n${extra}---\n${body}`;
  const existingId = 'a00000000000000000000001';
  const newId = 'a00000000000000000000002';
  const dailyId = 'a00000000000000000000003';
  const projectId = 'a00000000000000000000004';
  const savedId = 'a00000000000000000000005';
  const certificationId = 'a00000000000000000000006';
  const baseline = {
    completedChallenges: [{ id: existingId, completedDate: 123, files: [] }],
    completedDailyCodingChallenges: [
      { id: dailyId, completedDate: 456, languages: ['javascript'] }
    ]
  };
  const before = structuredClone(baseline);
  write('blocks/test/existing.md', lesson(existingId, 19));
  write('blocks/test/slug-named.md', lesson(newId, 19));
  write('blocks/test/duplicate.md', lesson(newId, 19));
  write('blocks/daily-js/2026-09/test.md', lesson(dailyId, 28));
  write('blocks/daily-py/2026-09/test.md', lesson(dailyId, 29));
  write('blocks/test/project.md', lesson(projectId, 3));
  write(
    'blocks/test/saved.md',
    lesson(
      savedId,
      26,
      'saveSubmissionToDB: true\n',
      '# --solutions--\n\n```js\nconst answer = 42;\n```\n\n```js\nconsole.log(answer);\n```\n\n---\n\n```js\nconst alternative = 42;\n```\n'
    )
  );
  write('certifications/test.yml', `id: ${certificationId}\n`);
  const result = buildCertifiedChallengeData(baseline, directory);
  assert.deepEqual(baseline, before);
  assert.equal(result.completedChallenges.length, 5);
  assert.deepEqual(
    result.completedChallenges[0],
    baseline.completedChallenges[0]
  );
  assert.deepEqual(result.completedDailyCodingChallenges, [
    { id: dailyId, completedDate: 456, languages: ['javascript', 'python'] }
  ]);
  const byId = new Map(
    result.completedChallenges.map(entry => [entry.id, entry])
  );
  assert.equal(byId.get(projectId).solution, 'https://example.com');
  assert.equal(byId.get(projectId).challengeType, 3);
  assert.deepEqual(byId.get(savedId).files, [
    {
      contents: 'const answer = 42;\nconsole.log(answer);',
      ext: 'js',
      name: 'script',
      key: 'scriptjs',
      history: ['script.js']
    }
  ]);
  assert.ok(byId.has(newId));
  assert.ok(byId.has(certificationId));
  assert.deepEqual(buildCertifiedChallengeData(result, directory), result);

  // A lesson added after the first seed requires no snapshot changes.
  const laterId = 'a00000000000000000000007';
  write('blocks/new-block/new-lesson.md', lesson(laterId, 19));
  const later = buildCertifiedChallengeData(baseline, directory);
  assert.equal(later.completedChallenges.length, 6);
  assert.ok(later.completedChallenges.some(({ id }) => id === laterId));

  const newDailyId = 'a00000000000000000000008';
  write('blocks/daily-js/2026-10/new.md', lesson(newDailyId, 28));
  write('blocks/daily-py/2026-10/new.md', lesson(newDailyId, 29));
  const newDaily = buildCertifiedChallengeData(baseline, directory);
  assert.equal(newDaily.completedDailyCodingChallenges.length, 2);
  assert.deepEqual(newDaily.completedDailyCodingChallenges[1], {
    id: newDailyId,
    completedDate: 1700000000000,
    languages: ['javascript', 'python']
  });

  write(
    'blocks/test/missing-solution.md',
    lesson('a00000000000000000000009', 26, 'saveSubmissionToDB: true\n')
  );
  assert.throws(
    () => buildCertifiedChallengeData(baseline, directory),
    /Missing saved submission solution/
  );
});
