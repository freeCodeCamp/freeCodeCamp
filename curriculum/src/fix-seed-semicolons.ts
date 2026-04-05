import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';

import { Linter } from 'eslint';

import { parseCurriculumStructure } from './build-curriculum.js';
import {
  CURRICULUM_LOCALE,
  FCC_CHALLENGE_ID,
  curriculumFilter
} from './config';
import type { Filter } from './filter.js';

const JS_FENCE_LANGUAGES = new Set(['js', 'javascript', 'jsx']);
const SEED_HEADING_NAME = 'seed';
const EDITABLE_REGION_MARKER = '--fcc-editable-region--';
const EDITABLE_REGION_PLACEHOLDER = '/* __FCC_EDITABLE_REGION__ */';
const SEMICOLON_EXCEPTION_CHALLENGE_IDS = new Set([
  '641da3c6b6fbd742bff6ee40',
  '641da42481d90c4314c99e94',
  '641da465273051435d332b15',
  '641da4b16937be43ba24c63d',
  '646d0a022da7bcabf3e3aca3',
  '646d0d20108440acc95a6b32',
  '646d0db5175974ad8633b71c',
  '646d0e4636e14eae2bb3b992',
  '646d1980018efaaec2b1c28b',
  '69a012c6224fac85832247dd'
]);

type FileUpdate = {
  content: string;
  changedBlocks: number;
  skippedBlocks: number;
};

const linter = new Linter();

const {
  values: { check },
  positionals
} = parseArgs({
  options: { check: { type: 'boolean', default: false } },
  allowPositionals: true
});

const packageRoot = path.resolve(__dirname, '..');
void main();

async function main() {
  const filePaths = await getFilePaths(positionals);

  if (!filePaths.length) {
    console.error('No markdown files found.');
    process.exit(1);
  }

  let changedFiles = 0;
  let changedBlocks = 0;
  let skippedBlocks = 0;
  let skippedExceptionFiles = 0;

  for (const filePath of filePaths) {
    if (isSemicolonExceptionFile(filePath)) {
      skippedExceptionFiles += 1;
      continue;
    }

    const original = readFileSync(filePath, 'utf8');
    const result = fixSeedSemicolons(original);

    if (result.content !== original) {
      changedFiles += 1;
      changedBlocks += result.changedBlocks;
      if (!check) {
        writeFileSync(filePath, result.content);
      }
    }

    skippedBlocks += result.skippedBlocks;
  }

  if (check) {
    if (changedFiles > 0) {
      console.error(
        `Semicolon fixes needed in ${changedFiles} file(s), across ${changedBlocks} code block(s).`
      );
      process.exit(1);
    }

    console.log('No missing semicolons found in seed JS code fences.');
    process.exit(0);
  }

  console.log(
    `Updated ${changedFiles} file(s), across ${changedBlocks} code block(s).`
  );
  if (skippedBlocks > 0) {
    console.warn(
      `Skipped ${skippedBlocks} code block(s) with parse errors (left unchanged).`
    );
  }

  if (skippedExceptionFiles > 0) {
    console.warn(
      `Skipped ${skippedExceptionFiles} exception file(s) where semicolons are optional.`
    );
  }
}

async function getFilePaths(positionals: string[]): Promise<string[]> {
  if (positionals.length > 0) {
    return positionals.map(resolveInputPath);
  }

  if (Object.keys(curriculumFilter).length > 0) {
    return getFilteredMarkdownFiles(curriculumFilter);
  }

  const challengesDir = path.resolve(
    packageRoot,
    'challenges',
    CURRICULUM_LOCALE
  );
  return getMarkdownFiles(challengesDir);
}

function resolveInputPath(filePath: string): string {
  const candidates = [
    path.resolve(process.cwd(), filePath),
    path.resolve(packageRoot, filePath),
    path.resolve(packageRoot, '..', filePath)
  ];

  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }

  return path.resolve(process.cwd(), filePath);
}

function isSemicolonExceptionFile(filePath: string): boolean {
  const challengeId = path.basename(filePath, '.md');
  return SEMICOLON_EXCEPTION_CHALLENGE_IDS.has(challengeId);
}

function getMarkdownFiles(dirPath: string): string[] {
  const files: string[] = [];

  for (const entry of readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...getMarkdownFiles(fullPath));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function getFilteredMarkdownFiles(filter: Filter): Promise<string[]> {
  const { fullSuperblockList } = await parseCurriculumStructure(filter);
  const files = new Set<string>();

  for (const superblock of fullSuperblockList) {
    const blocks = superblock.blocks as {
      dashedName: string;
      challengeOrder: { id: string }[];
    }[];

    for (const block of blocks) {
      for (const challenge of block.challengeOrder) {
        if (FCC_CHALLENGE_ID && challenge.id !== FCC_CHALLENGE_ID) {
          continue;
        }

        const filePath = path.resolve(
          packageRoot,
          'challenges',
          CURRICULUM_LOCALE,
          'blocks',
          block.dashedName,
          `${challenge.id}.md`
        );
        if (existsSync(filePath)) {
          files.add(filePath);
        }
      }
    }
  }

  return [...files];
}

function fixSeedSemicolons(content: string): FileUpdate {
  const seedRanges = getSeedRanges(content);
  if (!seedRanges.length) {
    return { content, changedBlocks: 0, skippedBlocks: 0 };
  }

  let updatedContent = content;
  let changedBlocks = 0;
  let skippedBlocks = 0;

  for (const range of [...seedRanges].reverse()) {
    const section = updatedContent.slice(range.start, range.end);
    const sectionResult = fixSeedSection(section);
    updatedContent = `${updatedContent.slice(0, range.start)}${sectionResult.content}${updatedContent.slice(range.end)}`;
    changedBlocks += sectionResult.changedBlocks;
    skippedBlocks += sectionResult.skippedBlocks;
  }

  return { content: updatedContent, changedBlocks, skippedBlocks };
}

function getSeedRanges(content: string): Array<{ start: number; end: number }> {
  const headings = Array.from(
    content.matchAll(/^# --([a-z-]+)--\s*$/gm),
    match => ({ name: match[1], index: match.index })
  );

  const ranges: Array<{ start: number; end: number }> = [];

  for (const [index, heading] of headings.entries()) {
    if (heading.name !== SEED_HEADING_NAME) continue;
    const nextHeading = headings[index + 1];
    ranges.push({
      start: heading.index ?? 0,
      end: nextHeading?.index ?? content.length
    });
  }

  return ranges;
}

function fixSeedSection(section: string): FileUpdate {
  const fenceRegex = /```([^\n]*)\n([\s\S]*?)\n```/g;
  let changedBlocks = 0;
  let skippedBlocks = 0;
  let cursor = 0;
  let updatedSection = '';

  let match: RegExpExecArray | null;
  while ((match = fenceRegex.exec(section)) !== null) {
    updatedSection += section.slice(cursor, match.index);
    cursor = fenceRegex.lastIndex;

    const [fullBlock, info = '', code = ''] = match;
    const language = info.trim().split(/\s+/)[0]?.toLowerCase() || '';
    if (!JS_FENCE_LANGUAGES.has(language)) {
      updatedSection += fullBlock;
      continue;
    }

    const fixedBlock = fixCodeBlockSemicolons(code, language === 'jsx');
    if (fixedBlock.skipped) {
      skippedBlocks += 1;
      updatedSection += fullBlock;
      continue;
    }

    if (fixedBlock.code !== code) {
      changedBlocks += 1;
    }

    updatedSection += `\`\`\`${info}\n${fixedBlock.code}\n\`\`\``;
  }

  updatedSection += section.slice(cursor);
  return { content: updatedSection, changedBlocks, skippedBlocks };
}

function fixCodeBlockSemicolons(
  code: string,
  isJsx: boolean
): { code: string; skipped: boolean } {
  const safeCode = code.replace(
    /^([ \t]*)--fcc-editable-region--[ \t]*$/gm,
    `$1${EDITABLE_REGION_PLACEHOLDER}`
  );

  const config: Parameters<Linter['verify']>[1] = {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: isJsx } }
    },
    rules: { semi: ['error', 'always'] }
  };

  const preCheck = linter.verify(safeCode, config);
  if (preCheck.some(message => message.fatal)) {
    return { code, skipped: true };
  }

  const fixed = linter.verifyAndFix(safeCode, config);
  if (fixed.messages.some(message => message.fatal)) {
    return { code, skipped: true };
  }

  const restored = fixed.output.replace(
    /^([ \t]*)\/\*\s*__FCC_EDITABLE_REGION__\s*\*\/[ \t]*;?[ \t]*$/gm,
    `$1${EDITABLE_REGION_MARKER}`
  );

  return { code: restored, skipped: false };
}
