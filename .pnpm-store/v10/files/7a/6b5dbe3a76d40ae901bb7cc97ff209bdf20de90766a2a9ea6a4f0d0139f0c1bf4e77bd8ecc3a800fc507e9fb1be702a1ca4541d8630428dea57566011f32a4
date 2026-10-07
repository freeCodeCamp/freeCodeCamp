# Change Log - @rushstack/eslint-patch

This log was last generated on Wed, 12 Nov 2025 01:57:54 GMT and should not be manually modified.

## 1.15.0
Wed, 12 Nov 2025 01:57:54 GMT

### Minor changes

- In ESLint >= 9.37, report bulk suppressed messages as suppressed messages rather than removing them completely.

## 1.14.1
Fri, 24 Oct 2025 11:22:09 GMT

### Patches

- Fix an issue where suppressed rule violations still show up in the report in ESLint >=9.37.0.
- Fix an issue where the ESLint process will crash when running in the ESLint VSCode extension in ESLint >=9.37.0.

## 1.14.0
Mon, 13 Oct 2025 15:13:02 GMT

### Minor changes

- Bump `eslint` to `~9.37.0` and the `@typescript-eslint/*` packages to `~8.46.0`.

## 1.13.0
Fri, 03 Oct 2025 20:09:59 GMT

### Minor changes

- Normalize import of builtin modules to use the `node:` protocol.

## 1.12.0
Thu, 26 Jun 2025 18:57:04 GMT

### Minor changes

- Update for compatibility with ESLint 9

## 1.11.0
Tue, 11 Mar 2025 02:12:33 GMT

### Minor changes

- Bump the `@typescript-eslint/*` packages to add support for TypeScript 5.8.

## 1.10.5
Tue, 07 Jan 2025 16:11:06 GMT

### Patches

- Fix a performance issue when locating ".eslint-bulk-suppressions.json".

## 1.10.4
Sat, 27 Jul 2024 00:10:27 GMT

### Patches

- Include CHANGELOG.md in published releases again

## 1.10.3
Fri, 17 May 2024 00:10:40 GMT

### Patches

- [eslint-patch] Allow use of ESLint v9

## 1.10.2
Wed, 10 Apr 2024 21:59:39 GMT

### Patches

- Bump maximum supported ESLint version for the bulk-suppressions tool to `8.57.0`.

## 1.10.1
Fri, 29 Mar 2024 05:46:41 GMT

### Patches

- Fix an issue where the `eslint-bulk prune` command would crash if a bulk suppressions file exists that speicifies no suppressions.
- Exit with success under normal conditions.

## 1.10.0
Thu, 28 Mar 2024 18:11:12 GMT

### Minor changes

- Delete the `.eslint-bulk-suppressions.json` file during pruning if all suppressions have been eliminated.

### Patches

- Fix an issue with running `eslint-bulk prune` in a project with suppressions that refer to deleted files.

## 1.9.0
Wed, 27 Mar 2024 19:47:21 GMT

### Minor changes

- Fix an issue where `eslint-bulk prune` does not work if there are no files to lint in the project root.

## 1.8.0
Wed, 20 Mar 2024 02:09:14 GMT

### Minor changes

- Refactor the bulk-suppressions feature to fix some performance issues.

### Patches

- Fix an issue where linting issues that were already suppressed via suppression comments were recorded in the bulk suppressions list.

## 1.7.2
Thu, 25 Jan 2024 23:03:57 GMT

### Patches

- Some minor documentation updates

## 1.7.1
Wed, 24 Jan 2024 07:38:34 GMT

### Patches

- Update documentation

## 1.7.0
Tue, 16 Jan 2024 18:30:10 GMT

### Minor changes

- Add support for TypeScript 5.3 with @typescript-eslint 6.19.x

## 1.6.1
Fri, 15 Dec 2023 01:10:06 GMT

### Patches

- Fix bulk suppression patch's eslintrc detection in polyrepos

## 1.6.0
Wed, 22 Nov 2023 01:45:18 GMT

### Minor changes

- Add an experimental new feature for ESLint bulk suppressions; for details see GitHub #4303

## 1.5.1
Sun, 01 Oct 2023 02:56:29 GMT

### Patches

- Fix patch compatibility with ESLint 7 for versions matching <7.12.0

## 1.5.0
Tue, 26 Sep 2023 09:30:33 GMT

### Minor changes

- Add an optional patch which can be used to allow ESLint to extend configurations from packages that do not have the "eslint-config-" prefix

## 1.4.0
Fri, 15 Sep 2023 00:36:58 GMT

### Minor changes

- Update @types/node from 14 to 18

## 1.3.3
Tue, 08 Aug 2023 07:10:39 GMT

### Patches

- Fix patching for running eslint via eslint/use-at-your-own-risk, which VS Code's eslint extension does when enabling flat config support

## 1.3.2
Thu, 15 Jun 2023 00:21:01 GMT

### Patches

- [eslint-patch] add invalid importer path test to ESLint 7.x || 8.x block

## 1.3.1
Wed, 07 Jun 2023 22:45:16 GMT

### Patches

- Add test for invalid importer path to fallback to relative path when loading eslint 6 plugins

## 1.3.0
Mon, 22 May 2023 06:34:32 GMT

### Minor changes

- Upgrade the @typescript-eslint/* dependencies to ~5.59.2

## 1.2.0
Thu, 15 Sep 2022 00:18:51 GMT

### Minor changes

- Use original resolver if patched resolver fails.

## 1.1.4
Tue, 28 Jun 2022 00:23:32 GMT

### Patches

- Update the README to mention support for ESLint 8.

## 1.1.3
Fri, 15 Apr 2022 00:12:36 GMT

### Patches

- Fix an issue where tools could not determine the module type as CommonJS

## 1.1.2
Sat, 09 Apr 2022 02:24:26 GMT

### Patches

- Rename the "master" branch to "main".

## 1.1.1
Tue, 15 Mar 2022 19:15:53 GMT

### Patches

- Fix the path in the package.json "directory" field.

## 1.1.0
Fri, 05 Nov 2021 15:09:18 GMT

### Minor changes

- feat(eslint-patch): Find patch targets independently of disk layout

## 1.0.9
Wed, 27 Oct 2021 00:08:15 GMT

### Patches

- Update the package.json repository field to include the directory property.

## 1.0.8
Wed, 13 Oct 2021 15:09:54 GMT

### Patches

- Add support for ESLint 8.0.0

## 1.0.7
Thu, 23 Sep 2021 00:10:40 GMT

### Patches

- Upgrade the `@types/node` dependency to version to version 12.

## 1.0.6
Fri, 30 Oct 2020 00:10:14 GMT

### Patches

- Update the "modern-module-resolution" patch to support ESLint 7.8.0 and newer

## 1.0.5
Wed, 30 Sep 2020 18:39:17 GMT

### Patches

- Update to build with @rushstack/heft-node-rig

## 1.0.4
Wed, 30 Sep 2020 06:53:53 GMT

### Patches

- Update README.md

## 1.0.3
Wed, 12 Aug 2020 00:10:05 GMT

### Patches

- Updated project to build with Heft

## 1.0.2
Wed, 24 Jun 2020 09:50:48 GMT

### Patches

- Fix an issue with the published file set

## 1.0.1
Wed, 24 Jun 2020 09:04:28 GMT

### Patches

- Initial release

