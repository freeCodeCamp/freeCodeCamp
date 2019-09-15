import postcss from 'postcss';

export class CssValidator {
  constructor(css) {
    this.ast = postcss().process(css);
  }

  getRootNodes(ast) {
    if (ast && 'root' in ast) {
      return 'nodes' in ast.root ? ast.root.nodes : [];
    }
    return [];
  }

  listActiveRules = () => {
    return this.getRootNodes(this.ast).filter(({ type }) => type === 'rule');
  };

  hasRuleForSelector = testSelector => {
    return this.listActiveRules()
      .map(({ selector }) => selector)
      .includes(testSelector);
  };

  selectorHasProperty = (testSelector, ...declarations) => {
    const rulesForSelector = this.listActiveRules()
      .filter(({ selector }) => selector === testSelector)
      .map(({ nodes = [] }) => nodes)
      .reduce((nodeSet, nodes) => nodeSet.concat(nodes), [])
      .filter(({ type }) => type === 'decl')
      .reduce(
        (ruleSet, { prop, value }) => ({ ...ruleSet, [prop]: value }),
        {}
      );

    return declarations.every(
      ([prop, value]) => rulesForSelector[prop] === value
    );
  };
}
