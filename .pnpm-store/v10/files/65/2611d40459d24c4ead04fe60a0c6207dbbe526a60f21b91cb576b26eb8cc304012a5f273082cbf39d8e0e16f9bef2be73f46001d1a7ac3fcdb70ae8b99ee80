# aria-query Change Log

## 1.0.0

- Updated values of aria-haspopup to include ARIA 1.1 role values
- Added the CHANGELOG file

## 2.0.0

- Remove package-lock file.
- Add Watchman config file.

## 2.0.1

- Added aria-errormessage to the ARIA Props Map.

## 3.0.0

- Bumping to a major version because of a previous breaking change.

## 4.0.0

- 912e515 (origin/fix-travis, fix-travis) Move allowed failures to excludes in Travis. The current failures are simply version incompatibilities.
- 17f4203 (origin/fixe-all-roles-html-mappings, fixe-all-roles-html-mappings) Fix all inherent ARIA role to HTML mappings
- 4ce2a9e (origin/fix-textbox, fix-textbox) Fix HTML relatedConcepts for textbox and combobox
- 8cbdf1d (origin/fix-select-mapping, fix-select-mapping) Remove baseConcepts as a prop.
- c3c510d Fix mapping for the HTML select element
- 52f2535 (origin/deprecate-requireContextRole, deprecate-requireContextRole) Deprecate the mispelled requireContextRole. Replace with requiredContextRole.
- fff3783 (origin/kurosawa-takeshi-add-double-check-tests, kurosawa-takeshi-add-double-check-tests) Update package lock file
- b90a99b (origin/kurosawa-takeshi-update-dpub-aria, kurosawa-takeshi-update-dpub-aria) Update breakUpAriaJSON script to include MapOfRoleDefinitions type on roll-up role classes-takeshi-update-dpub-aria
- 59c3199 (origin/eps1lon-fix/ie11, eps1lon-fix/ie11) Undo the eslintrc changes
- 3152480 (origin/dependabot/npm_and_yarn/eslint-6.6.0, dependabot/npm_and_yarn/eslint-6.6.0) Fix duplicate peer dependencies
- 8a661f2 Updating allowed failures for odd versions of node
- 0c85fd6 Update Travis and eslint peer dependencies
- 99df7da Bump eslint from 3.19.0 to 6.6.0

## 4.0.1

- Fix the incorrect ARIA designation of the region role to an HTML designation

## 4.0.2

- a3e2f1e Added the Copyright year (2020) for A11yance
- 3173a07 Remove Peer Dependency to ESLint

## 4.2.0

Upgrade support of ARIA from 1.1 to 1.2

- f1b8f11 Add aria-level as a required prop for the heading role
- 5beb07b Fix babelrc and update package lock
- 32256c7 Update dependencies and babelrc
- 132ebca test: Verify that role.json is synced (#52)
- d2c7b1b test: Narrow test matrix
- f4d115c fix: manual add aria-valuetext to range
- fb8fcf8 fix: Update with latest parser script
- 7dae700 fix: Superclass of generic is structure
- 5ea8353 Adding a license line
- 48cc635 fix: input type is text by default
- b50587e Revert relatedConcepts changes
- 1aa562f fix flowtype of prohibitedProps
- 8b81b14 Run node scripts/breakUpAriaJSON
- f65c156 chore: sort roles.json keys alphanumerically
- 3c2f213 chore: format role.json
- 38694f3 fix: input type is text by default (#42)

## 4.2.1

- bdd6082 Change master branch main in Travis
- 0b2d4ed Handle header element as banner role (#47)

## 4.2.2

- 7819fe4 Fix the allowed props of the heading role (jsx-eslint/eslint-plugin-jsx-a11y#704)

## 5.0.0

This major release removes the runtime Babel dependencies that were necessary because of Map and Set usage. Map and Set usages are now replaced with object and array literals.

These are the changes in usage you might need to account for:

- The module exports are no longer Maps, so you cannot spread them directly into an array to access their items. Use the `entries` method to get access to the items.
- Some values used to be Sets; these are now Arrays.
- The `keys` and `values` methods now return arrays, not iterators.
- There is no `forEach` method. One could be added in the future, but at present, it does not exist on the exports.

### Commits of note

- 92cecd2 chore(deps-dev): bump flow-bin from 0.160.2 to 0.161.0 (#261)
- b10e864 Remove the usage of Maps and Sets, along with the Babel Runtime - dependency (#250)
- 1953885 chore(deps-dev): bump jest from 27.2.1 to 27.2.2 (#252)
- 1dfb98f chore(deps): bump actions/setup-node from 2.4.0 to 2.4.1 (#254)
- f4fd458 chore(deps-dev): bump expect from 27.2.1 to 27.2.2 (#253)
- f85ecec chore(deps-dev): bump babel-jest from 27.2.1 to 27.2.2 (#251)
- b03b46a chore(deps-dev): bump flow-bin from 0.154.0 to 0.160.2 (#249)
- 4f9c5f0 Update Flow bin version (#248)
- cd57f86 Add aria-valuenow prop to the separator role
- 144aca0 Use block for instead of iterable for
- ef49ee8 Remove spread operator from roleElementMap
- bac9501 Update the test for roleElementMap to include specific items
- 8094edf Remove spread operator from elementRoleMap
- 980ceea Add a test for the specific items in elementRoleMap
- 5b477bc chore(deps-dev): bump eslint-plugin-flowtype from 5.10.0 to 6.1.0 (#246)
- d28d7c1 chore(deps-dev): bump commander from 8.0.0 to 8.2.0 (#245)
- 57b38d1 chore(deps-dev): bump @babel/plugin-transform-runtime (#237)
- 1519ec1 chore(deps): bump @babel/runtime-corejs3 from 7.14.7 to 7.15.4 (#241)
- 691e51b chore(deps-dev): bump eslint-plugin-import from 2.23.4 to 2.24.2 (#243)
- 9e1711c chore(deps-dev): bump eslint from 7.28.0 to 7.32.0 (#244)
- 589d97a chore(deps-dev): bump @babel/preset-env from 7.14.7 to 7.15.6 (#239)
- 1c48278 chore(deps-dev): bump expect from 27.0.2 to 27.2.1 (#242)
- 71c2f61 chore(deps): bump @babel/runtime from 7.14.0 to 7.15.4 (#240)
- 73c2339 chore(deps-dev): bump eslint-plugin-flowtype from 5.7.2 to 5.10.0 (#238)
- 85d983c chore(deps-dev): bump babel-jest from 27.0.2 to 27.2.1 (#232)
- dc91b47 chore(deps): bump tmpl from 1.0.4 to 1.0.5 (#235)
- 53fa58c chore(deps-dev): bump jest from 27.0.4 to 27.2.1 (#233)
- 8affde6 chore(deps-dev): bump @babel/cli from 7.14.3 to 7.15.7 (#231)
- 5f8369c chore(deps): bump path-parse from 1.0.6 to 1.0.7 (#220)
- 7051091 chore(deps): bump actions/setup-node from 2.3.0 to 2.4.0 (#219)
- 4a1ac48 chore(deps): bump coverallsapp/github-action from 1.1.2 to 1.1.3 (#213)
- 5ebf3e7 chore(deps-dev): bump @babel/core from 7.14.3 to 7.15.5 (#225)
- e2be68b Account for nosync file paths in the ignore files (#236)
- 5adca2f chore(deps): bump actions/setup-node from 2.2.0 to 2.3.0 (#214)
- 2bf4afa Fixing the package-lock.json file
- a325a23 chore(deps-dev): bump @babel/core from 7.12.10 to 7.14.2
- b6c7e7d chore(deps-dev): bump jest from 27.0.4 to 27.0.6 (#208)
- fe8255b chore(deps-dev): bump eslint-plugin-flowtype from 5.7.2 to 5.8.0 (#201)
- e005fa9 chore(deps-dev): bump @babel/core from 7.14.3 to 7.14.6 (#202)
- b7800bd chore(deps-dev): bump babel-jest from 27.0.2 to 27.0.6 (#207)
- 388fcf8 chore(deps-dev): bump eslint from 7.28.0 to 7.30.0 (#206)
- 9dc75ec chore(deps-dev): bump commander from 7.2.0 to 8.0.0 (#205)
- f808394 chore(deps-dev): bump expect from 27.0.2 to 27.0.6 (#204)
- fdbc963 chore(deps-dev): bump @babel/cli from 7.14.3 to 7.14.5 (#203)
- 823c292 Updating package-lock which only added an fsevents reference
- 61fe8b7 chore(deps-dev): bump @babel/plugin-transform-runtime (#200)
- 2ef3e93 chore(deps-dev): bump @babel/preset-flow from 7.13.13 to 7.14.5 (#188)
- d68a04a chore(deps): bump actions/setup-node from 2.1.5 to 2.2.0
- b0f6437 chore(deps-dev): bump @babel/preset-env from 7.12.11 to 7.14.7
- 18725dd chore(deps): bump @babel/runtime-corejs3 from 7.12.5 to 7.14.7
- d7b6389 chore(deps-dev): bump eslint from 7.19.0 to 7.28.0 (#183)
- a4aa09b chore(deps-dev): bump expect from 26.6.2 to 27.0.2 (#184)
- b861ba8 chore(deps-dev): bump babel-jest from 26.6.3 to 27.0.2 (#176)
- 2fa3a72 chore(deps-dev): bump eslint-plugin-import from 2.22.1 to 2.23.4 (#177)
- 7e0d575 chore(deps-dev): bump eslint-plugin-flowtype from 5.2.0 to 5.7.2 (#179)
- 48e1737 chore(deps-dev): bump jest from 26.6.3 to 27.0.4 (#182)
- 925ed16 chore(deps-dev): bump commander from 7.0.0 to 7.2.0 (#174)
- c545b74 chore(deps-dev): bump @babel/* to 7.14.3 (#168)
- 4ed066b chore(deps): bump actions/cache from 2.1.5 to 2.1.6 (#172)
- ca72279 chore(deps): bump ws from 7.4.2 to 7.4.6 (#173)
- 638027d chore(deps): bump browserslist from 4.16.0 to 4.16.6 (#171)
- 9392447 test: Ignore build output when linting (#167)
- 38f1759 chore(deps): bump actions/cache from 2 to 2.1.5 (#161)
- 5ec0f9a chore(deps): bump actions/setup-node from 2 to 2.1.5 (#159)
- 687461f chore(deps): bump actions/checkout from 2 to 2.3.4 (#160)
- 80e4bd6 chore(deps): bump hosted-git-info from 2.8.8 to 2.8.9 (#157)
- e4e7114 chore(deps): bump lodash from 4.17.20 to 4.17.21 (#156)
- 87abf49 chore(deps-dev): bump eslint from 7.18.0 to 7.19.0 (#112)
- 24467e7 chore(deps-dev): bump commander from 6.2.1 to 7.0.0 (#108)
- afe23cb chore(deps-dev): bump flow-bin from 0.143.0 to 0.143.1 (#111)
- 2e6a301 chore(deps-dev): bump flow-bin from 0.142.0 to 0.143.0 (#110)
- 947cff3 chore(deps-dev): bump eslint from 7.17.0 to 7.18.0 (#109)
- 3c5399c chore(deps-dev): bump @babel/plugin-transform-runtime (#106)
- 633fc3c chore(deps-dev): bump @babel/cli from 7.10.1 to 7.12.10 (#107)
- ed738a3 chore(deps-dev): bump eslint from 7.16.0 to 7.17.0 (#104)
- 3e45d3c chore(deps-dev): bump commander from 2.20.3 to 6.2.1 (#105)
- f6b049d chore(deps): bump @babel/runtime from 7.10.2 to 7.12.5 (#98)
- 894ee58 chore(deps-dev): bump @babel/preset-flow from 7.10.1 to 7.12.1 (#97)
- a494ed1 chore(deps-dev): bump rimraf from 2.7.1 to 3.0.2 (#99)
- 7d3297d chore(deps-dev): bump flow-bin from 0.141.0 to 0.142.0 (#103)
- 9eed1f5 chore(deps-dev): bump @babel/core from 7.10.2 to 7.12.10 (#100)
- 5f20ae0 chore(deps): bump @babel/runtime-corejs3 from 7.10.2 to 7.12.5 (#101)
- e803d94 chore: Turn on eslint:recommended and address new rules (#96)
- 5a68aa1 fix: Remove bash-like command in flow NPM script (#95)
- a7506ad chore: Expand ESLint glob to all files (#93)
- cf56e0c chore: Cleanup README (#94)
- dd958db chore: Use NPM CI for CI (#90)
- e604a6e chore: Remove coveralls NPM config (#91)
- e4b6d28 Update coveralls, expect and flow-bin (#92)
- 0e7ccdf Bump babel-jest from 24.9.0 to 26.6.3 (#84)
- 76b7a41 chore: Remove Travis-CI config (#89)
- bc1a437 Only diff the src dir in the CI Diff check (#87)
- e466929 Bump lodash from 4.17.15 to 4.17.20 (#86)
- a7429ee Bump eslint from 6.8.0 to 7.16.0 (#85)
- 83ec474 fix: type sig for ARIAPropertyDefinition (#74)
- f3b4e83 chore: Remove npmrc (#78)
- 717d76c chore: Add Depependabot config (#79)
- 50e05b1 Update test.yml (#76)
- b9ee176 Update test.yml (#75)
- a8cd23a Create test.yml
- 25fbc40 fix: Sync with stable editor's draft (#69)
- 7df56ba docs: fix CDN url (#71)
- 74009cf fix: definition/term roles (#70)
- 2a5dafb feat: Sync with stable editor's draft
- 1241efe chore: Seal AriaPropertMap type (#67)
- 0b6fcc4 "that there is no maximum value" > no default value
- e6dd042 Keep required props in sync with props
- 995b6b9 Remove deprecated props
- d99d54e Update ariaPropsMap
- eb123ce Update types
- 1284970 Update roles.json
- 1d9840c docs(readme): Add tracked aria version
- 971679a fix: Normalize required props (#64)

## 5.1.0 / 5.1.1

This minor release introduces iteration support to the primary objects of the module, through the `Symbol.iterator` property. This reintroduces a native-like `Map` iteration support that was lost in the v3 update. A `forEach` method is also introduced in this update. The common interface of all objects exposed by this module is now:

```
type TAriaQueryMap<E, K, V> = {
  entries: () => E,
  forEach: ((V, K, E) => void) => void,
  get: (key: K) => ?V,
  has: (key: K) => boolean,
  keys: () => Array<K>,
  values: () => Array<V>,
  @@iterator?: () => Iterator<E>,
};
```

### Commits of note

  - 6f3f54b Update dependencies to current minor releases (#437)
  - 855eedc Introduce iteration support to the Maps in the module (#425)
  - 38a2bbc Remove Node 12 as a target for Jest unit testing (#397)
  - 8a0f588 Update out of date packages to latest major versions (#396)
  - 8522117 Ran npm up --dev --save (#395)
  - a21d1ed feat: Add graphics-* roles (#338)

  ## 5.1.2

  - 8361a27 Plumb the graphics roles through to rolesMap (#444)

  ## 5.1.3

  No changes, just trying to get the NPM build to reflect the changes in v5.1.2
  
  ## 5.2.0

  [Update] The 5.2.x minor version contains breaking changes and should be skipped.
  
  Commit f7f6120 contains a substantial audit and update of the project to match the ARIA spec. Testing coverage was substantially improved. It really locks down the project's output.

  - e2e3eff docs: update README to WAI-ARIA 1.2 spec (#499)
  - 5ef740f Switch to dequal to remove 45 transitive dependencies (#497)
  - 58da9d5 fix: install command for codesandbox ci (#500)
  - 1160138 test: Publish canaries via CodeSandbox CI (#486)
  - 2d04e29 Add test case to elementRoleMap-test for td element
  - f7f6120 Audited and updated roles source of truth to HTML Accessibility API Mapping 1.0 (#447)

## 5.2.1

  - c995082 Run npm i to update package-lock.json

## 5.3.0

Reverts some API data shape changes from 5.2.x. Also reverts some changes to the representation of the ARIA spec.

  - fda2c97 fix: amend breaking changes and reinstate constraints (#515)
  - f9f9ea6 Add prepublishOnly step to package.json (#506)