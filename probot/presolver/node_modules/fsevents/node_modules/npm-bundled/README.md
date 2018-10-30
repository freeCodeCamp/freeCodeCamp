# npm-bundled

Run this in a node package, and it'll tell you which things in
node_modules are bundledDependencies, or transitive dependencies of
bundled dependencies.

## USAGE

To get the list of deps at the top level that are bundled (or
transitive deps of a bundled dep) run this:

```js
const bundled = require('npm-bundled')

// async version
bundled({ path: '/path/to/pkg/defaults/to/cwd'}, (er, list) => {
  // er means it had an error, which is _hella_ weird
  // list is a list of package names, like `fooblz` or `@corp/blerg`
  // the might not all be deps of the top level, because transitives
})

// async promise version
bundled({ path: '/path/to/pkg/defaults/to/cwd'}).then(list => {
  // so promisey!
  // actually the callback version returns a promise, too, it just
  // attaches the supplied callback to the promise
})

// sync version, throws if there's an error
const list = bundled({ path: '/path/to/pkg/defaults/to/cwd'})
```

That's basically all you need to know.  If you care to dig into it,
you can also use the `bundled.Walker` and `bundled.WalkerSync`
classes to get fancy.

This library does not write anything to the filesystem, but it _may_
have undefined behavior if the structure of `node_modules` changes
while it's reading deps.

All symlinks are followed.  This means that it can lead to surprising
results if a symlinked bundled dependency has a missing dependency
that is satisfied at the top level.  Since package creation resolves
symlinks as well, this is an edge case where package creation and
development environment are not going to be aligned, and is best
avoided.
