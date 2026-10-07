# @total-typescript/ts-reset

## 0.5.1

### Patch Changes

- Added homepage for npm purposes.

## 0.5.0

### Minor Changes

- 49b8603: Added a rule, `/session`, to make sessionStorage and localStorage safer.

  ```ts
  // Is now typed as `unknown`, not `any`!
  localStorage.a;

  // Is now typed as `unknown`, not `any`!
  sessionStorage.abc;
  ```

- 49b8603: Added a `/dom` entrypoint to allow users to import DOM-only rules.

## 0.4.1

### Patch Changes

- No changes, just pushing to fix the previous slightly borked release.

## 0.4.0

### Minor Changes

- ce9db42: Added support for widening in `Array.lastIndexOf`, `Array.indexOf`, `ReadonlyArray.lastIndexOf` and `ReadonlyArray.indexOf`.
- 107dfc2: Changed the array.includes on readonly arrays to NOT be a type predicate. Before this change, this perfectly valid code would not behave correctly.

  ```ts
  type Code = 0 | 1 | 2;
  type SpecificCode = 0 | 1;

  const currentCode: Code = 0;

  // Create an empty list of subset type
  const specificCodeList: ReadonlyArray<SpecificCode> = [];

  // This will be false, since 0 is not in []
  if (specificCodeList.includes(currentCode)) {
    currentCode; // -> SpecificCode
  } else {
    // This branch will be entered, and ts will think z is 2, when it is actually 0
    currentCode; // -> 2
  }
  ```

  Removing the type predicate brings ts-reset closer towards correctness.

- 4765413: author: @mefechoel

  Added the `Map.has` rule.

  Similar to `.includes` or `Set.has()`, `Map.has()` doesn't let you pass members that don't exist in the map's keys:

  ```ts
  // BEFORE
  const userMap = new Map([
    ["matt", 0],
    ["sofia", 1],
    [2, "waqas"],
  ] as const);

  // Argument of type '"bryan"' is not assignable to
  // parameter of type '"matt" | "sofia" | "waqas"'.
  userMap.has("bryan");
  ```

  With the rule enabled, `Map` follows the same semantics as `Set`.

  ```ts
  // AFTER
  import "@total-typescript/ts-reset/map-has";

  const userMap = new Map([
    ["matt", 0],
    ["sofia", 1],
    [2, "waqas"],
  ] as const);

  // .has now takes a string as the argument!
  userMap.has("bryan");
  ```

### Patch Changes

- b15aaa4: Fixed an oversight with the initial `set-has` implementation by adding support to `ReadonlySet`.

## 0.3.7

### Patch Changes

- Added license and switched to MIT

## 0.3.6

### Patch Changes

- d3ddefa: Changed the exports map so "types" appears top

## 0.3.5

### Patch Changes

- Another fix for deploy process.

## 0.3.4

### Patch Changes

- Fixed an issue where dist folder was not deployed.

## 0.3.3

### Patch Changes

- Fixed a bug where 0n was not being filtered out by filter-boolean

## 0.3.2

### Patch Changes

- Removed the ability to use Set.has as a type predicate. This ensures that Set.has never sets the checked element to never.

## 0.3.1

### Patch Changes

- Fixed a bug where Array.includes was returning a predicate, which gave false positives.

## 0.3.0

### Minor Changes

- ed9edc1: Added improved typings for Set.has

### Patch Changes

- d27e819: Fixed issue where webpack wasn't recognizing the exports map

## 0.2.1

### Patch Changes

- Readme tweak

## 0.2.0

### Minor Changes

- e5a33c9: Added support for array.includes

### Patch Changes

- 8fe8e29: Improved filter-boolean to handle falsy values, not just NonNullable values

## 0.1.4

### Patch Changes

- Fixed exports (finally)

## 0.1.3

### Patch Changes

- bb3f2d1: Attempted fix for exports maps

## 0.1.2

### Patch Changes

- 4cfb07e: Fixed build process and moved to .d.ts files

## 0.1.1

### Patch Changes

- 0360275: Fixed type imports
- e62b05a: Added .npmignore

## 0.1.0

### Minor Changes

- 51628fc: Initial commit
