[![npm version](https://img.shields.io/npm/v/eslint-scope.svg)](https://www.npmjs.com/package/eslint-scope)
[![Downloads](https://img.shields.io/npm/dm/eslint-scope.svg)](https://www.npmjs.com/package/eslint-scope)
[![Build Status](https://github.com/eslint/js/workflows/CI/badge.svg)](https://github.com/eslint/js/actions)

# ESLint Scope

ESLint Scope is the [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) scope analyzer used in ESLint. It is a fork of [escope](http://github.com/estools/escope).

## Install

```
npm i eslint-scope --save
```

## 📖 Usage

To use in an ESM file:

```js
import * as eslintScope from 'eslint-scope';
```

To use in a CommonJS file:

```js
const eslintScope = require('eslint-scope');
```

In order to analyze scope, you'll need to have an [ESTree](https://github.com/estree/estree) compliant AST structure to run it on. The primary method is `eslintScope.analyze()`, which takes two arguments:

1. `ast` - the ESTree-compliant AST structure to analyze.
2. `options` (optional) - Options to adjust how the scope is analyzed, including:
  * `ignoreEval` (default: `false`) - Set to `true` to ignore all `eval()` calls (which would normally create scopes).
  * `nodejsScope` (default: `false`) - Set to `true` to create a top-level function scope needed for CommonJS evaluation.
  * `impliedStrict` (default: `false`) - Set to `true` to evaluate the code in strict mode even outside of modules and without `"use strict"`.
  * `ecmaVersion` (default: `5`) - The version of ECMAScript to use to evaluate the code.
  * `sourceType` (default: `"script"`) - The type of JavaScript file to evaluate. Change to `"module"` for ECMAScript module code.
  * `childVisitorKeys` (default: `null`) - An object with visitor key information (like [`eslint-visitor-keys`](https://github.com/eslint/js/tree/main/packages/eslint-visitor-keys)). Without this, `eslint-scope` finds child nodes to visit algorithmically. Providing this option is a performance enhancement.
  * `fallback` (default: `"iteration"`) - The strategy to use when `childVisitorKeys` is not specified. May be a function.
  * `jsx` (default: `false`) - Enables the tracking of JSX components as variable references.

Example:

```js
import * as eslintScope from 'eslint-scope';
import * as espree from 'espree';
import estraverse from 'estraverse';

const options = {
    ecmaVersion: 2022,
    sourceType: "module"
};

const ast = espree.parse(code, { range: true, ...options });
const scopeManager = eslintScope.analyze(ast, options);

const currentScope = scopeManager.acquire(ast);   // global scope

estraverse.traverse(ast, {
    enter (node, parent) {
        // do stuff

        if (/Function/.test(node.type)) {
            currentScope = scopeManager.acquire(node);  // get current function scope
        }
    },
    leave(node, parent) {
        if (/Function/.test(node.type)) {
            currentScope = currentScope.upper;  // set to parent scope
        }

        // do stuff
    }
});
```

## API

The following section describes the API for this package. You can also read [the docs](https://eslint.org/docs/latest/extend/scope-manager-interface).

### ScopeManager

The `ScopeManager` class is at the core of eslint-scope and is returned when you call `eslintScope.analyze()`. It manages all scopes in a given AST.

#### Properties

- `scopes` - An array of all scopes.
- `globalScope` - Reference to the global scope.

#### Methods

- **`acquire(node, inner)`**
  Acquires the appropriate scope for a given node.
  - `node` - The AST node to acquire the scope from.
  - `inner` - Optional boolean. When `true`, returns the innermost scope, otherwise returns the outermost scope. Default is `false`.
  - Returns: The acquired scope or `null` if no scope is found.

- **`acquireAll(node)`**
  Acquires all scopes for a given node.
  - `node` - The AST node to acquire scopes from.
  - Returns: An array of scopes or `undefined` if none are found.

- **`release(node, inner)`**
  Returns the upper scope for a given node.
  - `node` - The AST node to release.
  - `inner` - Optional boolean. When `true`, returns the innermost upper scope, otherwise returns the outermost upper scope. Default is `false`.
  - Returns: The upper scope or `null` if no upper scope exists.

- **`getDeclaredVariables(node)`**
  Get variables that are declared by the node.
  - `node` - The AST node to get declarations from.
  - Returns: An array of variable objects declared by the node. If the node doesn't declare any variables, it returns an empty array.

- **`isGlobalReturn()`**
  Determines if the global return statement should be allowed.
  - Returns: `true` if the global return is enabled.

- **`isModule()`**
  Checks if the code should be handled as an ECMAScript module.
  - Returns: `true` if the sourceType is "module".

- **`isImpliedStrict()`**
  Checks if implied strict mode is enabled.
  - Returns: `true` if implied strict mode is enabled.

- **`isStrictModeSupported()`**
  Checks if strict mode is supported based on ECMAScript version.
  - Returns: `true` if the ECMAScript version supports strict mode.

### Scope Objects

Scopes returned by the ScopeManager methods have the following properties:

- `type` - The type of scope (e.g., "function", "block", "global").
- `variables` - Array of variables declared in this scope.
- `set` - A Map of variable names to Variable objects for variables declared in this scope.
- `references` - Array of references in this scope.
- `through` - Array of references in this scope and its child scopes that aren't resolved in this scope or its child scopes.
- `variableScope` - Reference to the closest variable scope.
- `upper` - Reference to the parent scope.
- `childScopes` - Array of child scopes.
- `block` - The AST node that created this scope.

### GlobalScope

The `GlobalScope` class is a specialized scope representing the global execution context. It extends the base `Scope` class with additional functionality for handling implicitly defined global variables.

#### Properties

- **`implicit`** - Tracks implicitly defined global variables (those used without declaration).
  - `set` - A Map of variable names to Variable objects for implicitly defined globals.
  - `variables` - Array of implicit global Variable objects.
  - `left` - Array of References that need to be linked to the variable they refer to.

### Variable Objects

Each variable object has the following properties:

- `name` - The variable name.
- `identifiers` - Array of identifier nodes declaring this variable.
- `references` - Array of references to this variable.
- `defs` - Array of definition objects for this variable.
- `scope` - The scope object where this variable is defined.

## Contributing

Issues and pull requests will be triaged and responded to as quickly as possible. We operate under the [ESLint Contributor Guidelines](http://eslint.org/docs/developer-guide/contributing), so please be sure to read them before contributing. If you're not sure where to dig in, check out the [issues](https://github.com/eslint/js/issues).

## Security Policy

We work hard to ensure that ESLint Scope is safe for everyone and that security issues are addressed quickly and responsibly. Read the full [security policy](https://github.com/eslint/.github/blob/master/SECURITY.md).

## Build Commands

* `npm test` - run all linting and tests
* `npm run lint` - run all linting

## License

ESLint Scope is licensed under a permissive BSD 2-clause license.

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->
## Sponsors

The following companies, organizations, and individuals support ESLint's ongoing maintenance and development. [Become a Sponsor](https://eslint.org/donate)
to get your logo on our READMEs and [website](https://eslint.org/sponsors).

<h3>Diamond Sponsors</h3>
<p><a href="https://www.ag-grid.com/"><img src="https://images.opencollective.com/ag-grid/bec0580/logo.png" alt="AG Grid" height="128"></a></p><h3>Platinum Sponsors</h3>
<p><a href="https://automattic.com"><img src="https://images.opencollective.com/automattic/d0ef3e1/logo.png" alt="Automattic" height="128"></a> <a href="https://www.airbnb.com/"><img src="https://images.opencollective.com/airbnb/d327d66/logo.png" alt="Airbnb" height="128"></a></p><h3>Gold Sponsors</h3>
<p><a href="https://qlty.sh/"><img src="https://images.opencollective.com/qltysh/33d157d/logo.png" alt="Qlty Software" height="96"></a> <a href="https://trunk.io/"><img src="https://images.opencollective.com/trunkio/fb92d60/avatar.png" alt="trunk.io" height="96"></a> <a href="https://shopify.engineering/"><img src="https://avatars.githubusercontent.com/u/8085" alt="Shopify" height="96"></a></p><h3>Silver Sponsors</h3>
<p><a href="https://vite.dev/"><img src="https://images.opencollective.com/vite/e6d15e1/logo.png" alt="Vite" height="64"></a> <a href="https://liftoff.io/"><img src="https://images.opencollective.com/liftoff/5c4fa84/logo.png" alt="Liftoff" height="64"></a> <a href="https://americanexpress.io"><img src="https://avatars.githubusercontent.com/u/3853301" alt="American Express" height="64"></a> <a href="https://stackblitz.com"><img src="https://avatars.githubusercontent.com/u/28635252" alt="StackBlitz" height="64"></a></p><h3>Bronze Sponsors</h3>
<p><a href="https://sentry.io"><img src="https://github.com/getsentry.png" alt="Sentry" height="32"></a> <a href="https://syntax.fm"><img src="https://github.com/syntaxfm.png" alt="Syntax" height="32"></a> <a href="https://cybozu.co.jp/"><img src="https://images.opencollective.com/cybozu/933e46d/logo.png" alt="Cybozu" height="32"></a> <a href="https://www.crosswordsolver.org/anagram-solver/"><img src="https://images.opencollective.com/anagram-solver/2666271/logo.png" alt="Anagram Solver" height="32"></a> <a href="https://icons8.com/"><img src="https://images.opencollective.com/icons8/7fa1641/logo.png" alt="Icons8" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://www.gitbook.com"><img src="https://avatars.githubusercontent.com/u/7111340" alt="GitBook" height="32"></a> <a href="https://nolebase.ayaka.io"><img src="https://avatars.githubusercontent.com/u/11081491" alt="Neko" height="32"></a> <a href="https://nx.dev"><img src="https://avatars.githubusercontent.com/u/23692104" alt="Nx" height="32"></a> <a href="https://opensource.mercedes-benz.com/"><img src="https://avatars.githubusercontent.com/u/34240465" alt="Mercedes-Benz Group" height="32"></a> <a href="https://herocoders.com"><img src="https://avatars.githubusercontent.com/u/37549774" alt="HeroCoders" height="32"></a> <a href="https://www.lambdatest.com"><img src="https://avatars.githubusercontent.com/u/171592363" alt="LambdaTest" height="32"></a></p>
<h3>Technology Sponsors</h3>
Technology sponsors allow us to use their products and services for free as part of a contribution to the open source ecosystem and our work.
<p><a href="https://netlify.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/netlify-icon.svg" alt="Netlify" height="32"></a> <a href="https://algolia.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/algolia-icon.svg" alt="Algolia" height="32"></a> <a href="https://1password.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/1password-icon.svg" alt="1Password" height="32"></a></p>
<!--sponsorsend-->
