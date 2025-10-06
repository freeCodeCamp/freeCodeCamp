import { describe, beforeEach, beforeAll, it, expect } from 'vitest';
import cloneDeep from 'lodash/cloneDeep';
import find from 'unist-util-find';
import { selectAll } from 'unist-util-select';

import parseFixture from '../__fixtures__/parse-fixture';
import restoreDirectives from './restore-directives';

describe('restore-directives', () => {
  let directivesAST, directivesOriginalAST;
  beforeAll(async () => {
    directivesOriginalAST = await parseFixture('with-directives.md');
  });
  beforeEach(() => {
    directivesAST = cloneDeep(directivesOriginalAST);
  });

  it('should return a function', () => {
    expect.assertions(1);
    const plugin = restoreDirectives();

    expect(typeof plugin).toEqual('function');
  });
  // TODO: if remark-directive starts processing containers, add them to the
  // tests
  it('should remove any directives in the AST', () => {
    expect.assertions(4);
    const plugin = restoreDirectives();
    let leaves = selectAll('leafDirective', directivesAST);
    let text = selectAll('textDirective', directivesAST);
    expect(leaves.length).toBe(2);
    expect(text.length).toBe(2);
    plugin(directivesAST);
    leaves = selectAll('leafDirective', directivesAST);
    text = selectAll('textDirective', directivesAST);
    expect(leaves.length).toBe(0);
    expect(text.length).toBe(0);
  });

  it('should put the original text into the AST', () => {
    expect.assertions(4);
    const plugin = restoreDirectives();

    let nodeWithImport = find(
      directivesAST,
      node => node.value && node.value.includes('::import')
    );
    let nodeWithRoot = find(
      directivesAST,
      node => node.value && node.value.includes(':root')
    );

    expect(nodeWithImport).not.toBeTruthy();
    expect(nodeWithRoot).not.toBeTruthy();
    plugin(directivesAST);

    nodeWithImport = find(
      directivesAST,
      node => node.value && node.value.includes('::import')
    );
    nodeWithRoot = find(
      directivesAST,
      node => node.value && node.value.includes(':root')
    );

    expect(nodeWithImport).toBeTruthy();
    expect(nodeWithRoot).toBeTruthy();
  });
});
