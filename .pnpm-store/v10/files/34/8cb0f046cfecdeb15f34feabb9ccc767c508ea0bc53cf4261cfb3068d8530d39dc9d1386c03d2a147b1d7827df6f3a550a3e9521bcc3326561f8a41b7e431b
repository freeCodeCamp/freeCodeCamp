# import/no-dynamic-require

<!-- end auto-generated rule header -->

The `require` method from CommonJS is used to import modules from different files. Unlike the ES6 `import` syntax, it can be given expressions that will be resolved at runtime. While this is sometimes necessary and useful, in most cases it isn't. Using expressions (for instance, concatenating a path and variable) as the argument makes it harder for tools to do static code analysis, or to find where in the codebase a module is used.

This rule forbids every call to `require()` that uses expressions for the module name argument.

## Rule Details

### Fail

```js
require(name);
require('../' + name);
require(`../${name}`);
require(name());
```

### Pass

```js
require('../name');
require(`../name`);
```
