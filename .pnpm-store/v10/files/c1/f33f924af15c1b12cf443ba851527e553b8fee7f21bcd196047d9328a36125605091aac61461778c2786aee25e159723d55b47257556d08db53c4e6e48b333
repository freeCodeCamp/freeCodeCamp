# resolve package - session notes

## Versioning
- Manual versioning only - do NOT use `npm version`
- Edit package.json version directly, commit with message `v{version}`, then create annotated tag
- Changelog lives in git tag annotations, not a separate file
- Tag format: `git tag -a v{version} -m "{changelog}"`

## Code style
- `__proto__: null` on ALL object literals (prototype pollution protection)
- `.slice()` not `.substring()`
- One exported function per file
- Move nested/inner functions to module level when feasible
- Prefer non-hoisted declarations (function declarations at module level, not expressions)
- No mutation - copy objects instead of modifying inputs

## Testing
- `test/list-exports` is a git submodule with sparse checkout
- Tests should cover ALL entrypoints from fixtures, not just `'.'` subpaths
- Use `extensions: ['.js', '.json']` when testing exports resolution

## exports field implementation
- Uses `node-exports-info` for category semantics
- Categories: pre-exports, broken, conditions, patterns, pattern-trailers, current
- `exportsCategory` option or `engines: true` to auto-detect from consumer's engines.node
- Self-reference resolution respects node_modules boundaries
