import iterateJsdoc from '../iterateJsdoc.js';
import {
  parse,
  traverse,
  tryParse,
} from '@es-joy/jsdoccomment';
import {
  readFileSync,
} from 'fs';
import {isBuiltin as isBuiltinModule} from 'node:module';
import {
  join,
} from 'path';

/**
 * @type {Set<string>|null}
 */
let deps;

const setDeps = function () {
  try {
    const pkg = JSON.parse(
      // @ts-expect-error It's ok
      readFileSync(join(process.cwd(), './package.json')),
    );
    deps = new Set([
      ...(pkg.dependencies ?
        /* c8 ignore next 2 */
        Object.keys(pkg.dependencies) :
        []),
      ...(pkg.devDependencies ?
        /* c8 ignore next 2 */
        Object.keys(pkg.devDependencies) :
        []),
    ]);
  /* c8 ignore next -- our package.json exists */
  } catch (error) {
    /* c8 ignore next -- our package.json exists */
    deps = null;
    /* c8 ignore next 4 -- our package.json exists */
    /* eslint-disable no-console -- Inform user */
    console.log(error);
    /* eslint-enable no-console -- Inform user */
  }
};

const moduleCheck = new Map();

export default iterateJsdoc(({
  jsdoc,
  settings,
  utils,
}) => {
  if (deps === undefined) {
    setDeps();
  }

  /* c8 ignore next 3 -- our package.json exists */
  if (deps === null) {
    return;
  }

  const {
    mode,
  } = settings;

  for (const tag of jsdoc.tags) {
    let typeAst;
    try {
      typeAst = mode === 'permissive' ? tryParse(tag.type) : parse(tag.type, mode);
    } catch {
      continue;
    }

    // eslint-disable-next-line no-loop-func -- Safe
    traverse(typeAst, (nde) => {
      /* c8 ignore next 3 -- TS guard */
      if (deps === null) {
        return;
      }

      if (nde.type === 'JsdocTypeImport') {
        let mod = nde.element.value.replace(
          /^(@[^/]+\/[^/]+|[^/]+).*$/u, '$1',
        );

        if ((/^[./]/u).test(mod)) {
          return;
        }

        if (isBuiltinModule(mod)) {
          // mod = '@types/node';
          // moduleCheck.set(mod, !deps.has(mod));
          return;
        } else if (!moduleCheck.has(mod)) {
          let pkg;
          try {
            pkg = JSON.parse(
              // @ts-expect-error It's ok
              readFileSync(join(process.cwd(), 'node_modules', mod, './package.json')),
            );
          } catch {
            // Ignore
          }

          if (!pkg || (!pkg.types && !pkg.typings)) {
            mod = `@types/${mod}`;
          }

          moduleCheck.set(mod, !deps.has(mod));
        }

        if (moduleCheck.get(mod)) {
          utils.reportJSDoc(
            'import points to package which is not found in dependencies',
            tag,
          );
        }
      }
    });
  }
}, {
  iterateAllJsdocs: true,
  meta: {
    docs: {
      description: 'Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`',
      url: 'https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header',
    },
    type: 'suggestion',
  },
});
