## Changelog

### v2.0.0

**Breaking changes**

- The main export now returns the compiled string, instead of the object returned from the compiler

**Added features**

- Adds a `.create` method to do what the main function did before v2.0.0

### v0.2.0

In addition to performance and matching improvements, the v0.2.0 refactor adds complete POSIX character class support, with the exception of equivalence classes and POSIX.2 collating symbols which are not relevant to node.js usage.

**Added features**

- parser is exposed, so that expand-brackets parsers can be used by upstream parsers (like [micromatch][])
- compiler is exposed, so that expand-brackets compilers can be used by upstream compilers
- source maps

**source map example**

```js
var brackets = require('expand-brackets');
var res = brackets('[:alpha:]');
console.log(res.map);

{ version: 3,
     sources: [ 'brackets' ],
     names: [],
     mappings: 'AAAA,MAAS',
     sourcesContent: [ '[:alpha:]' ] }
```
