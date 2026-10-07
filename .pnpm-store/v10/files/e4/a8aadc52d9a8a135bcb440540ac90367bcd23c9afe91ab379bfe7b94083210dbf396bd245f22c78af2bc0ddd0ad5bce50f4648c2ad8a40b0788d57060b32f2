# true-case-path

[![TravisCI Build Status][travis-ci-shield]][travis-ci]

> Given a possibly case-variant version of an existing filesystem path, returns the absolute, case-exact, normalized version as stored in the filesystem.

## Usage

```typescript
const { trueCasePath, trueCasePathSync } = require('true-case-path')

trueCasePath(<fileSystemPath>)
    .then((caseCorrectPath) => {
        // ...
    })

const caseCorrectPath = trueCasePathSync(<fileSystemPath>)
```

> **NOTE**: If no matching path exists, an error with be thrown.

---

Optionally takes a second argument to use as the base path to begin case-correction from. This can be particularly useful within shared hosting environments since true-case-path relies on the ability to list a directory's contents in order to check the case and attempting to list the contents of `/` or `/home` will generally result in a permissions error.

```typescript
const { trueCasePath } = require('true-case-path')

trueCasePath('code/my-app/sOmE-FiLe', '/home/casey')
```

> **NOTE**: When specifying a basePath, the first argument is expected to be the file path _relative to that basePath_. If the first argument is absolute, every path segment will be checked. basePath defaults to `process.cwd()` if not specified and the first argument is relative.

## Platforms

Windows, OSX, and Linux

## Examples

```typescript
const { trueCasePathSync } = require('true-case-path')

trueCasePathSync('/users/guest') // OSX: -> '/Users/Guest'

trueCasePathSync('c:\\users\\all users') // Windows: -> 'c:\Users\All Users'
```

[travis-ci]: https://travis-ci.org/Profiscience/true-case-path
[travis-ci-shield]: https://img.shields.io/travis/Profiscience/true-case-path/master.svg
