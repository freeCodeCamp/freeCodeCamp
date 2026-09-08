import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { input, number, select } from '@inquirer/prompts';
import { BlockLabel, BlockLayouts } from '@freecodecamp/shared/config/blocks';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { writeBlockStructure } from '@freecodecamp/curriculum/file-handler';
import {
  createLabFile,
  createQuizFile,
  createReviewFile,
  createStepFile
} from './utils.js';
import {
  updateChapterModuleSuperblockStructure,
  updateSimpleSuperblockStructure
} from './helpers/create-project.js';

vi.mock('@inquirer/prompts');
vi.mock('fs/promises', () => ({
  default: { writeFile: vi.fn().mockResolvedValue(undefined) }
}));
vi.mock('@freecodecamp/curriculum/file-handler', () => ({
  createBlockFolder: vi.fn().mockResolvedValue('/test-project/'),
  writeBlockStructure: vi.fn()
}));
vi.mock('@freecodecamp/curriculum/build-curriculum', () => ({
  superBlockToFilename: { 'basic-html': 'basic-html' }
}));
vi.mock('./helpers/parse-json.js', () => ({
  parseIntroJson: vi.fn().mockImplementation(() => ({
    'basic-html': { blocks: {} }
  }))
}));
vi.mock('./helpers/create-project.js');
vi.mock('./utils.js', () => ({
  getAllBlocks: vi.fn().mockResolvedValue([]),
  validateBlockName: vi.fn().mockReturnValue(true),
  createLabFile: vi.fn(),
  createQuizFile: vi.fn(),
  createReviewFile: vi.fn(),
  createStepFile: vi.fn()
}));

describe('create-project in a non-chapter-based superblock', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.mocked(input)
      .mockResolvedValueOnce('test-project')
      .mockResolvedValueOnce('Test Project');
    vi.mocked(number).mockResolvedValue(3);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each([
    [
      BlockLabel.lab,
      createLabFile,
      'python',
      { challengeType: challengeTypes.pyLab, contentType: 'python' }
    ],
    [
      BlockLabel.workshop,
      createStepFile,
      'typescript',
      {
        challengeType: challengeTypes.js,
        challengeSeeds: [expect.objectContaining({ ext: 'ts' })]
      }
    ],
    [BlockLabel.quiz, createQuizFile, 10, { questionCount: 10 }],
    [BlockLabel.review, createReviewFile, undefined, { title: 'Test Project' }]
  ] as const)(
    'generates the selected %s template',
    async (blockLabel, generator, templateOption, expectedArgs) => {
      vi.mocked(select)
        .mockResolvedValueOnce(SuperBlocks.BasicHtml)
        .mockResolvedValueOnce('General')
        .mockResolvedValueOnce(blockLabel)
        .mockResolvedValueOnce(BlockLayouts.Link);
      if (templateOption !== undefined) {
        vi.mocked(select).mockResolvedValueOnce(templateOption);
      }

      await import('./create-project.js');
      await vi.waitFor(() => {
        expect(console.error).not.toHaveBeenCalled();
        expect(console.log).toHaveBeenCalledWith(
          'All set.  Refresh the page to see the changes.'
        );
      });

      expect(console.error).not.toHaveBeenCalled();
      expect(generator).toHaveBeenCalledExactlyOnceWith(
        expect.objectContaining(expectedArgs)
      );
      expect(writeBlockStructure).toHaveBeenCalledWith(
        'test-project',
        expect.objectContaining({
          blockLabel,
          blockLayout: BlockLayouts.Link,
          order: 3
        })
      );
      expect(updateSimpleSuperblockStructure).toHaveBeenCalledWith(
        'test-project',
        { order: 3 },
        'basic-html'
      );
      expect(updateChapterModuleSuperblockStructure).not.toHaveBeenCalled();
      expect(select).toHaveBeenCalledTimes(
        templateOption === undefined ? 4 : 5
      );
    }
  );
});
