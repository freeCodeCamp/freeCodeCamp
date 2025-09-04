const parseFixture = require('./../__fixtures__/parse-fixture');
const addInteractiveElements = require('./add-interactive-elements');

describe('add-interactive-editor plugin', () => {
  const plugin = addInteractiveElements();
  let file = { data: {} };

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds an `interactiveElements` property to `file.data`', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    expect(file.data).toHaveProperty('interactiveElements');
    expect(Array.isArray(file.data.interactiveElements)).toBe(true);
  });

  it('populates `interactiveElements` with description objects', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    const descriptionElements = file.data.interactiveElements.filter(
      element => element.description
    );
    expect(descriptionElements).toEqual(
      expect.arrayContaining([
        {
          description: expect.stringContaining('Normal markdown')
        }
      ])
    );
  });

  it('populates `interactiveElements` with editor objects', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    const editorElements = file.data.interactiveElements.filter(
      element => element.files
    );

    expect(editorElements).toEqual(
      expect.arrayContaining([
        {
          files: [
            {
              ext: expect.any(String),
              name: expect.any(String),
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
          instructions: expect.stringContaining(
            'This contains the instructions, but is not interactive'
          ),
          files: [
            {
              ext: expect.any(String),
              name: expect.any(String),
              contents: expect.stringContaining(
                'This is an interactive element'
              )
            },
            {
              ext: expect.any(String),
              name: expect.any(String),
              contents: expect.stringContaining(
                "console.log('Interactive JS');"
              )
            }
          ]
        }
      ])
    );
  });

  it('provides unique names for each file with the same extension', async () => {
    const mockAST = await parseFixture('with-multiple-js-files.md');
    plugin(mockAST, file);
    const editorElements = file.data.interactiveElements.filter(
      element => element.files
    );

    expect(editorElements).toHaveLength(1);

    const files = editorElements[0].files;
    expect(files).toHaveLength(2);

    // Both files should be JavaScript but have unique names
    expect(files[0].ext).toBe('js');
    expect(files[1].ext).toBe('js');
    // TODO: only number if there are multiple files.
    expect(files[0].name).toBe('script-1');
    expect(files[1].name).toBe('script-2');

    // Contents should match
    expect(files[0].contents).toBe("console.log('First JavaScript file');");
    expect(files[1].contents).toBe("console.log('Second JavaScript file');");
  });

  it('respects the order of elements in the original markdown', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    const elements = file.data.interactiveElements;
    expect(elements).toHaveLength(4);

    expect(elements[0]).toHaveProperty('description');
    expect(elements[1]).toHaveProperty('files');
    expect(elements[2]).toHaveProperty('files');
    expect(elements[3]).toHaveProperty('description');
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
