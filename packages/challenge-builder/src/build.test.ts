import { describe, expect, it } from 'vitest';

import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import type { ChallengeFile } from '@freecodecamp/shared/utils/polyvinyl';

import { buildChallenge } from './build';

function createChallengeFile({
  ext,
  fileKey,
  name,
  path,
  head,
  contents,
  tail
}: {
  ext: ChallengeFile['ext'];
  fileKey: string;
  name: string;
  path: string;
  head: string;
  contents: string;
  tail: string;
}): ChallengeFile {
  return {
    fileKey,
    ext,
    name,
    contents,
    head,
    tail,
    path,
    history: [path]
  };
}

async function buildJsChallenge(challengeFile: ChallengeFile) {
  return await buildChallenge(
    {
      challengeType: challengeTypes.js,
      challengeFiles: [challengeFile],
      required: [],
      template: '',
      url: ''
    },
    {
      preview: false,
      disableLoopProtectTests: true,
      disableLoopProtectPreview: true
    }
  );
}

describe('buildChallenge', () => {
  it('babelifies JS head, contents and tail together', async () => {
    const challengeFile = createChallengeFile({
      ext: 'js',
      fileKey: 'scriptjs',
      name: 'script',
      path: 'script.js',
      head: 'const person = {};',
      contents: 'console.log(person);',
      tail: "person = { name: 'Alice' };"
    });

    const result = await buildJsChallenge(challengeFile);

    expect(result.error).toBeUndefined();
    expect(result.build).toContain('_readOnlyError("person")');
  }, 10000);

  it('babelifies JSX head, contents and tail together', async () => {
    const challengeFile = createChallengeFile({
      ext: 'jsx',
      fileKey: 'indexjsx',
      name: 'index',
      path: 'index.jsx',
      head: 'const person = {};',
      contents: 'console.log(person);',
      tail: "person = { name: 'Alice' };"
    });

    const result = await buildJsChallenge(challengeFile);

    expect(result.error).toBeUndefined();
    expect(result.build).toContain('_readOnlyError("person")');
  }, 10000);

  it('does not add readonly guard when reassignment is valid', async () => {
    const challengeFile = createChallengeFile({
      ext: 'js',
      fileKey: 'scriptjs',
      name: 'script',
      path: 'script.js',
      head: 'let person = {};',
      contents: 'console.log(person);',
      tail: "person = { name: 'Alice' };"
    });

    const result = await buildJsChallenge(challengeFile);

    expect(result.error).toBeUndefined();
    expect(result.build).not.toContain('_readOnlyError("person")');
  });

  it('handles JS head and contents without trailing semicolons', async () => {
    const challengeFile = createChallengeFile({
      ext: 'js',
      fileKey: 'scriptjs',
      name: 'script',
      path: 'script.js',
      head: "const hello = 'hi'",
      contents: 'function brain() { return hello; }',
      tail: 'brain();'
    });

    const result = await buildJsChallenge(challengeFile);

    expect(result.error).toBeUndefined();
    expect(result.build).toContain('function brain');
  });

  it('handles JSX contents and tail without trailing semicolons', async () => {
    const challengeFile = createChallengeFile({
      ext: 'jsx',
      fileKey: 'indexjsx',
      name: 'index',
      path: 'index.jsx',
      head: '',
      contents: 'const MyComponent = function() { return <div>Demo</div>; }',
      tail: 'ReactDOM.render(<MyComponent />, document.getElementById("root"))'
    });

    const result = await buildJsChallenge(challengeFile);

    expect(result.error).toBeUndefined();
    expect(result.build).toContain('ReactDOM.render');
  });

  it('reports a Babel transform error when combined code is invalid', async () => {
    const challengeFile = createChallengeFile({
      ext: 'js',
      fileKey: 'scriptjs',
      name: 'script',
      path: 'script.js',
      head: 'const person = ;',
      contents: 'console.log(person);',
      tail: "person = { name: 'Alice' };"
    });

    const result = await buildJsChallenge(challengeFile);

    expect(result.error).toBeDefined();
    expect(result.build).toBe('');
  });

  it('prioritizes syntax errors from editable contents over after-user-code scaffold', async () => {
    const challengeFile = createChallengeFile({
      ext: 'js',
      fileKey: 'scriptjs',
      name: 'script',
      path: 'script.js',
      head: '',
      contents: 'var',
      tail: 'if(typeof myName !== "undefined"){(function(v){return v;})(myName);}'
    });

    const result = await buildJsChallenge(challengeFile);
    const message = String(result.error);

    expect(result.error).toBeDefined();
    expect(result.build).toBe('');
    expect(message).toContain('Unexpected token (1:3)');
    expect(message).not.toContain("Unexpected keyword 'if'");
  });
});
