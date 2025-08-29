import {
  getSuperblockStructure,
  writeSuperblockStructure
} from '../../../curriculum/file-handler';
import {
  updateChapterModuleSuperblockStructure,
  updateSimpleSuperblockStructure
} from './create-project';

jest.mock('../../../curriculum/file-handler');

const mockGetSuperblockStructure =
  getSuperblockStructure as jest.MockedFunction<typeof getSuperblockStructure>;
const mockWriteSuperblockStructure =
  writeSuperblockStructure as jest.MockedFunction<
    typeof writeSuperblockStructure
  >;

const incompleteSimpleChapterModuleSuperblock = {
  chapters: [
    {
      dashedName: 'chapter1',
      modules: [
        {
          dashedName: 'module1c1',
          blocks: ['block1', 'block3']
        }
      ]
    }
  ]
};

const simpleChapterModuleSuperblock = {
  chapters: [
    {
      dashedName: 'chapter1',
      modules: [
        {
          dashedName: 'module1c1',
          blocks: ['block1', 'block2', 'block3']
        }
      ]
    }
  ]
};

describe('updateSimpleSuperblockStructure', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should insert the block into the blocks array at the expected position', async () => {
    const existingBlocks = ['block1', 'block2', 'block4'];
    const superblockFilename = 'test-superblock';
    const newBlock = 'block3';
    const order = 2;

    mockGetSuperblockStructure.mockReturnValue({
      blocks: existingBlocks
    });

    await updateSimpleSuperblockStructure(
      newBlock,
      { order },
      superblockFilename
    );

    expect(mockGetSuperblockStructure).toHaveBeenCalledWith(superblockFilename);
    expect(mockWriteSuperblockStructure).toHaveBeenCalledWith(
      superblockFilename,
      {
        blocks: ['block1', 'block2', 'block3', 'block4']
      }
    );
  });
});

describe('updateChapterModuleSuperblockStructure', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should insert the block correctly when there is only one chapter and one module', async () => {
    const superblockFilename = 'test-superblock';
    const newBlock = 'block2';
    const position = {
      order: 1,
      chapter: 'chapter1',
      module: 'module1c1'
    };

    mockGetSuperblockStructure.mockReturnValue(
      incompleteSimpleChapterModuleSuperblock
    );

    await updateChapterModuleSuperblockStructure(
      newBlock,
      position,
      superblockFilename
    );

    expect(mockGetSuperblockStructure).toHaveBeenCalledWith(superblockFilename);
    expect(mockWriteSuperblockStructure).toHaveBeenCalledWith(
      superblockFilename,
      simpleChapterModuleSuperblock
    );
  });

  it('should create a module if it does not exist', async () => {
    const superblockFilename = 'test-superblock';
    const newBlock = 'block2';
    const position = {
      order: 0,
      chapter: 'chapter1',
      module: 'module2c1'
    };

    mockGetSuperblockStructure.mockReturnValue(
      incompleteSimpleChapterModuleSuperblock
    );

    await updateChapterModuleSuperblockStructure(
      newBlock,
      position,
      superblockFilename
    );

    expect(mockGetSuperblockStructure).toHaveBeenCalledWith(superblockFilename);
    expect(mockWriteSuperblockStructure).toHaveBeenCalledWith(
      superblockFilename,
      {
        chapters: [
          {
            dashedName: 'chapter1',
            modules: [
              {
                dashedName: 'module1c1',
                blocks: ['block1', 'block3']
              },
              {
                dashedName: 'module2c1',
                blocks: ['block2']
              }
            ]
          }
        ]
      }
    );
  });

  it('should create a chapter and module if they do not exist', async () => {
    const superblockFilename = 'test-superblock';
    const newBlock = 'block1m2c2';
    const position = {
      order: 0,
      chapter: 'chapter2',
      module: 'module1c2'
    };

    mockGetSuperblockStructure.mockReturnValue({ chapters: [] });

    await updateChapterModuleSuperblockStructure(
      newBlock,
      position,
      superblockFilename
    );

    expect(mockGetSuperblockStructure).toHaveBeenCalledWith(superblockFilename);
    expect(mockWriteSuperblockStructure).toHaveBeenCalledWith(
      superblockFilename,
      {
        chapters: [
          {
            dashedName: 'chapter2',
            modules: [
              {
                dashedName: 'module1c2',
                blocks: ['block1m2c2']
              }
            ]
          }
        ]
      }
    );
  });
});
