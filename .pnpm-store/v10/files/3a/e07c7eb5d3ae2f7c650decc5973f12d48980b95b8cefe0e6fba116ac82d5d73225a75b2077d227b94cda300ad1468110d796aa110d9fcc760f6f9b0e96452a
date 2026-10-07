# ESLint Scope

ESLint Scope is the [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) scope analyzer used in ESLint. It is a fork of [escope](http://github.com/estools/escope).

## Usage

Install:

```
npm i eslint-scope --save
```

Example:

```js
var eslintScope = require('eslint-scope');
var espree = require('espree');
var estraverse = require('estraverse');

var ast = espree.parse(code);
var scopeManager = eslintScope.analyze(ast);

var currentScope = scopeManager.acquire(ast);   // global scope

estraverse.traverse(ast, {
    enter: function(node, parent) {
        // do stuff

        if (/Function/.test(node.type)) {
            currentScope = scopeManager.acquire(node);  // get current function scope
        }
    },
    leave: function(node, parent) {
        if (/Function/.test(node.type)) {
            currentScope = currentScope.upper;  // set to parent scope
        }

        // do stuff
    }
});
```

## Contributing

Issues and pull requests will be triaged and responded to as quickly as possible. We operate under the [ESLint Contributor Guidelines](http://eslint.org/docs/developer-guide/contributing), so please be sure to read them before contributing. If you're not sure where to dig in, check out the [issues](https://github.com/eslint/eslint-scope/issues).

## Build Commands

* `npm test` - run all linting and tests
* `npm run lint` - run all linting

## License

ESLint Scope is licensed under a permissive BSD 2-clause license.
