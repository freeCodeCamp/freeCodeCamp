## 2.0.0

Modernization updates thanks to @TimothyGu:

- Use jsdom's eslint config, remove jscs
- Move syntax to ES6
- Remove Babel
- Via: https://github.com/jsdom/abab/pull/26

## 1.0.4

- Added license file

## 1.0.3

- Replaced `let` with `var` in `lib/btoa.js`
  - Follow up from `1.0.2`
  - Resolves https://github.com/jsdom/abab/issues/18

## 1.0.2

- Replaced `const` with `var` in `index.js`
  - Allows use of `abab` in the browser without a transpilation step
  - Resolves https://github.com/jsdom/abab/issues/15
