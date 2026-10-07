import { init, parse } from 'es-module-lexer';
import assert from 'node:assert';
import { removeSlashes } from 'slashes';
import module, { createRequire } from 'node:module';
import { dirname } from 'node:path';

const separatorRegex = /^(?:\s+|,)$/u;
const skipSeparators = (imported, i) => {
  while (i < imported.length && separatorRegex.test(imported[i])) {
    i++;
  }
  return i;
};
const skipNonSeparators = (imported, i) => {
  while (i < imported.length && !separatorRegex.test(imported[i])) {
    i++;
  }
  return i;
};

const parseDefaultImport = (importClauseString, i) => {
  const startIndex = i;
  i = skipNonSeparators(importClauseString, i);
  return {
    defaultImport: importClauseString.slice(startIndex, i),
    i
  };
};

const parseNamedImports = (importClauseString, i) => {
  const startIndex = ++i;
  while (i < importClauseString.length && importClauseString[i] !== `}`) {
    i++;
  }
  const namedImports = importClauseString.slice(startIndex, i++).split(`,`).map(namedImport => {
    namedImport = namedImport.trim();
    if (namedImport.includes(` `)) {
      const components = namedImport.split(` `);
      return {
        specifier: components[0],
        binding: components.at(-1)
      };
    }
    return {
      specifier: namedImport,
      binding: namedImport
    };
  }).filter(({
    specifier
  }) => specifier.length > 0);
  return {
    namedImports,
    i
  };
};

const parseNamespaceImport = (importClauseString, i) => {
  i++;
  i = skipSeparators(importClauseString, i);
  i += `as`.length;
  i = skipSeparators(importClauseString, i);
  const startIndex = i;
  i = skipNonSeparators(importClauseString, i);
  return {
    namespaceImport: importClauseString.slice(startIndex, i),
    i
  };
};

// Assumes import clause is syntactically valid
const parseImportClause = importClauseString => {
  let defaultImport;
  let namespaceImport;
  const namedImports = [];
  for (let i = 0; i < importClauseString.length; i++) {
    if (separatorRegex.test(importClauseString[i])) {
      continue;
    }
    if (importClauseString[i] === `{`) {
      let newNamedImports;
      ({
        namedImports: newNamedImports,
        i
      } = parseNamedImports(importClauseString, i));
      namedImports.push(...newNamedImports);
    } else if (importClauseString[i] === `*`) {
      ({
        namespaceImport,
        i
      } = parseNamespaceImport(importClauseString, i));
    } else {
      ({
        defaultImport,
        i
      } = parseDefaultImport(importClauseString, i));
    }
  }
  return {
    default: defaultImport,
    namespace: namespaceImport,
    named: namedImports
  };
};

// Assumes the string is syntactically valid
const isConstantStringLiteral = stringLiteral => {
  const quote = [`'`, `"`, `\``].find(quoteCandidate => stringLiteral.startsWith(quoteCandidate) && stringLiteral.endsWith(quoteCandidate));
  if (quote == null) {
    return false;
  }
  for (let i = 1; i < stringLiteral.length - 1; i++) {
    // Check for end of string literal before end of stringLiteral
    if (stringLiteral[i] === quote && stringLiteral[i - 1] !== `\\`) {
      return false;
    }

    // Check for interpolated value in template literal
    if (quote === `\`` && stringLiteral.slice(i, i + 2) === `\${` && stringLiteral[i - 1] !== `\\`) {
      return false;
    }
  }
  return true;
};

const builtinModules = new Set(module.builtinModules);
const parseType = moduleSpecifier => {
  if (moduleSpecifier.length === 0) {
    return `invalid`;
  }
  if (moduleSpecifier.startsWith(`/`)) {
    return `absolute`;
  }
  if (moduleSpecifier.startsWith(`.`)) {
    return `relative`;
  }
  if (builtinModules.has(moduleSpecifier)) {
    return `builtin`;
  }
  return `package`;
};

const require = createRequire(import.meta.url);
const resolve = (from, to) => {
  try {
    return require.resolve(to, {
      paths: [dirname(from)]
    });
  } catch {
    return undefined;
  }
};

const parseModuleSpecifier = (moduleSpecifierString, {
  isDynamicImport,
  resolveFrom
}) => {
  assert(isDynamicImport || isConstantStringLiteral(moduleSpecifierString));
  const {
    isConstant,
    value
  } = !isDynamicImport || isConstantStringLiteral(moduleSpecifierString) ? {
    isConstant: true,
    value: removeSlashes(moduleSpecifierString.slice(1, -1))
  } : {
    isConstant: false,
    value: undefined
  };
  return {
    type: isConstant ? parseType(value) : `unknown`,
    isConstant,
    code: moduleSpecifierString,
    value,
    resolved: typeof resolveFrom === `string` && isConstant ? resolve(resolveFrom, value) : undefined
  };
};

const wasmLoadPromise = init;
const parseImports = async (code, options) => {
  await wasmLoadPromise;
  return parseImportsSync(code, options);
};
const parseImportsSync = (code, {
  resolveFrom
} = {}) => {
  const result = parse(code, resolveFrom == null ? undefined : resolveFrom);
  if (!Array.isArray(result)) {
    throw new TypeError(`Expected WASM to be loaded before calling parseImportsSync`);
  }
  const [imports] = result;
  return {
    *[Symbol.iterator]() {
      for (let {
        d: dynamicImportStartIndex,
        ss: statementStartIndex,
        s: moduleSpecifierStartIndex,
        e: moduleSpecifierEndIndexExclusive
      } of imports) {
        const isImportMeta = dynamicImportStartIndex === -2;
        if (isImportMeta) {
          continue;
        }
        const isDynamicImport = dynamicImportStartIndex > -1;

        // Include string literal quotes in character range
        if (!isDynamicImport) {
          moduleSpecifierStartIndex--;
          moduleSpecifierEndIndexExclusive++;
        }
        const moduleSpecifierString = code.slice(moduleSpecifierStartIndex, moduleSpecifierEndIndexExclusive);
        const moduleSpecifier = {
          startIndex: moduleSpecifierStartIndex,
          endIndex: moduleSpecifierEndIndexExclusive,
          ...parseModuleSpecifier(moduleSpecifierString, {
            isDynamicImport,
            resolveFrom
          })
        };
        let importClause;
        if (!isDynamicImport) {
          let importClauseString = code.slice(statementStartIndex + `import`.length, moduleSpecifierStartIndex).trim();
          if (importClauseString.endsWith(`from`)) {
            importClauseString = importClauseString.slice(0, Math.max(0, importClauseString.length - `from`.length));
          }
          importClause = parseImportClause(importClauseString);
        }
        yield {
          startIndex: statementStartIndex,
          // Include the closing parenthesis for dynamic import
          endIndex: isDynamicImport ? moduleSpecifierEndIndexExclusive + 1 : moduleSpecifierEndIndexExclusive,
          isDynamicImport,
          moduleSpecifier,
          importClause
        };
      }
    }
  };
};

export { parseImports, parseImportsSync, wasmLoadPromise };
