import path from 'path';
import fs from 'fs/promises';
import { format } from 'prettier';

type BlockInfo = {
  title: string;
  intro: string[];
};

// fs Promise functions return errors, but no stack trace.  This adds back in
// the stack trace.
function withTrace<Args extends unknown[], Result>(
  fn: (...x: Args) => Promise<Result>,
  ...args: Args
): Promise<Result> {
  return fn(...args).catch((reason: Error) => {
    throw Error(reason.message);
  });
}

function parseJson<JsonSchema>(filePath: string) {
  return withTrace(fs.readFile, filePath, 'utf8').then(
    // unfortunately, withTrace does not correctly infer that the third argument
    // is a string, so it uses the (path, options?) overload and we have to cast
    // result to string.
    result => JSON.parse(result as string) as JsonSchema
  );
}

export async function updateIntroJson(block: string, title: string) {
  const introJsonPath = path.resolve(
    __dirname,
    '../../../client/i18n/locales/english/blocks-intro.json'
  );
  const newIntro = await parseJson<Record<string, BlockInfo>>(introJsonPath);
  newIntro[block] = {
    title,
    intro: ['', '']
  };
  void withTrace(
    fs.writeFile,
    introJsonPath,
    await format(JSON.stringify(newIntro), { parser: 'json' })
  );
}
