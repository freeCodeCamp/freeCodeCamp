const parseFixture = require('./../__fixtures__/parse-fixture');
const addInteractiveElements = require('./add-interactive-elements');

describe('add-interactive-editor plugin', () => {
  let mockAST;
  const plugin = addInteractiveElements();
  let file = { data: {} };

  beforeAll(async () => {
    mockAST = await parseFixture('with-interactive.md');
  });

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds an `interactiveElements` property to `file.data`', () => {
    plugin(mockAST, file);
    expect(file.data).toHaveProperty('interactiveElements');
    expect(Array.isArray(file.data.interactiveElements)).toBe(true);
  });

  it('populates `interactiveElements` with description objects', () => {
    plugin(mockAST, file);
    const descriptionElements = file.data.interactiveElements.filter(
      element => element.type === 'description'
    );
    expect(descriptionElements).toEqual(
      expect.arrayContaining([
        {
          type: 'description',
          content: expect.stringContaining('Normal markdown')
        }
      ])
    );
  });

  it('populates `interactiveElements` with editor objects', () => {
    plugin(mockAST, file);
    const editorElements = file.data.interactiveElements.filter(
      element => element.type === 'editor'
    );

    expect(editorElements).toEqual(
      expect.arrayContaining([
        {
          type: 'editor',
          files: [
            {
              contents: expect.stringContaining(
                '<div>This is an interactive element</div>'
              )
            }
          ]
        }
      ])
    );

    expect(editorElements).toEqual(
      expect.arrayContaining([
        {
          type: 'editor',
          instructions: expect.stringContaining(
            'This contains the instructions, but is not interactive'
          ),
          files: [
            {
              contents: expect.stringContaining(
                'This is an interactive element'
              )
            },
            {
              contents: expect.stringContaining(
                "console.log('Interactive JS');"
              )
            }
          ]
        }
      ])
    );
  });

  it('respects the order of description/editor elements in the original markdown', () => {
    plugin(mockAST, file);
    const elements = file.data.interactiveElements;
    expect(elements).toHaveLength(4);

    const types = elements.map(({ type }) => type);
    expect(types).toStrictEqual([
      'description',
      'editor',
      'editor',
      'description'
    ]);
  });

  it('throws if there are "editor" and "description" elements in the same section', async () => {
    const editorAndDescriptionAST = await parseFixture(
      'with-editor-and-description-same-section.md'
    );
    expect(() => {
      plugin(editorAndDescriptionAST, { data: {} });
    }).toThrow();
  });

  it('throws if there are "instructions" without "files"', async () => {
    const instructionsWithoutFilesAST = await parseFixture(
      'with-instructions-without-files.md'
    );
    expect(() => {
      plugin(instructionsWithoutFilesAST, { data: {} });
    }).toThrow();
  });

  it('should throw if there is anything other than a code block inside the --files-- section', async () => {
    const filesWithNonCodeAST = await parseFixture(
      'with-files-containing-non-code.md'
    );
    expect(() => {
      plugin(filesWithNonCodeAST, { data: {} });
    }).toThrow('The --files-- section should only contain code blocks.');
  });

  it('throws if an interactive element is empty', async () => {
    const emptyInteractiveElementAST = await parseFixture(
      'with-empty-interactive-element.md'
    );
    expect(() => {
      plugin(emptyInteractiveElementAST, { data: {} });
    }).toThrow(
      'Each interactive element must contain at least one subsection, e.g. --description-- or --files--'
    );
  });
});
