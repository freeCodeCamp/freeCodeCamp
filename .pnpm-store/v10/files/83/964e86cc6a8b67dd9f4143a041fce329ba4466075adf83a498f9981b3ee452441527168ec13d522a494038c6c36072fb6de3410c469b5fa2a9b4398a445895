const createImports = (imports, postcss, mode = "rule") => {
  return Object.keys(imports).map((path) => {
    const aliases = imports[path];
    const declarations = Object.keys(aliases).map((key) =>
      postcss.decl({
        prop: key,
        value: aliases[key],
        raws: { before: "\n  " },
      })
    );

    const hasDeclarations = declarations.length > 0;

    const rule =
      mode === "rule"
        ? postcss.rule({
            selector: `:import('${path}')`,
            raws: { after: hasDeclarations ? "\n" : "" },
          })
        : postcss.atRule({
            name: "icss-import",
            params: `'${path}'`,
            raws: { after: hasDeclarations ? "\n" : "" },
          });

    if (hasDeclarations) {
      rule.append(declarations);
    }

    return rule;
  });
};

const createExports = (exports, postcss, mode = "rule") => {
  const declarations = Object.keys(exports).map((key) =>
    postcss.decl({
      prop: key,
      value: exports[key],
      raws: { before: "\n  " },
    })
  );

  if (declarations.length === 0) {
    return [];
  }
  const rule =
    mode === "rule"
      ? postcss.rule({
          selector: `:export`,
          raws: { after: "\n" },
        })
      : postcss.atRule({
          name: "icss-export",
          raws: { after: "\n" },
        });

  rule.append(declarations);

  return [rule];
};

const createICSSRules = (imports, exports, postcss, mode) => [
  ...createImports(imports, postcss, mode),
  ...createExports(exports, postcss, mode),
];

module.exports = createICSSRules;
