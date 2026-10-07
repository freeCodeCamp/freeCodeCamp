# Disallow importing Jest (`no-jest-import`)

The `jest` object is automatically in scope within every test file. The methods
in the `jest` object help create mocks and let you control Jest's overall
behavior. It is therefore completely unnecessary to import in `jest`, as Jest
doesn't export anything in the first place.

### Rule details

This rule reports on any importing of Jest.

To name a few: `var jest = require('jest');` `const jest = require('jest');`
`import jest from 'jest';` `import {jest as test} from 'jest';`

There is no correct usage of this code, other than to not import `jest` in the
first place.

## Further Reading

\*[The Jest Object](https://facebook.github.io/jest/docs/en/jest-object.html)
