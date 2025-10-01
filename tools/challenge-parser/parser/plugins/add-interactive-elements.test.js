import { describe, beforeEach, it, expect } from 'vitest';
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

  it('adds a `nodules` property to `file.data`', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    expect(file.data).toHaveProperty('nodules');
    expect(Array.isArray(file.data.nodules)).toBe(true);
  });

  it('populates `nodules` with editor objects', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    const editorElements = file.data.nodules.filter(
      element => element.type === 'interactiveEditor'
    );

    expect(editorElements).toEqual(
      expect.arrayContaining([
        {
          data: [
            {
              ext: expect.any(String),
              name: expect.any(String),
              contents: expect.stringContaining(
                '<div>This is an interactive element</div>'
              )
            }
          ],
          type: 'interactiveEditor'
        }
      ])
    );

    expect(editorElements).toEqual(
      expect.arrayContaining([
        {
          data: [
            {
              ext: expect.any(String),
              name: expect.any(String),
              contents: expect.stringContaining(
                'This is an interactive element'
              )
            }
          ],
          type: 'interactiveEditor'
        },
        {
          data: [
            {
              ext: expect.any(String),
              name: expect.any(String),
              contents: expect.stringContaining(
                "console.log('Interactive JS');"
              )
            }
          ],
          type: 'interactiveEditor'
        }
      ])
    );
  });

  it('provides unique names for each file with the same extension', async () => {
    const mockAST = await parseFixture('with-multiple-js-files.md');
    plugin(mockAST, file);
    const editorElements = file.data.nodules.filter(
      element => element.type === 'interactiveEditor'
    );

    expect(editorElements).toHaveLength(1);

    const files = editorElements[0].data;
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
    const elements = file.data.nodules;
    expect(elements).toHaveLength(8);

    expect(elements[0]).toHaveProperty('data');
    expect(elements[1]).toHaveProperty('data');
    expect(elements[2]).toHaveProperty('data');
    expect(elements[3]).toHaveProperty('data');
  });
});
