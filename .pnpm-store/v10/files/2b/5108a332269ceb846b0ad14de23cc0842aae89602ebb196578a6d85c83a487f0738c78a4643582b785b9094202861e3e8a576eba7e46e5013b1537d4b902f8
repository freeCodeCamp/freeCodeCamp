# @rushstack/eslint-patch

Enhance [ESLint](https://eslint.org/) with better support for large scale monorepos!

This is a runtime patch that enables new/experimental features for ESLint.  It operates as a "monkey patch"
that gets loaded with **.eslintrc.js** and modifies the ESLint engine in memory.  This approach works
with your existing ESLint version (no need to install a forked ESLint), and is fully interoperable with
companion tools such as the ESLint extensions for VS Code and WebStorm.

This package provides several independently loadable features:

- **eslint-bulk-suppressions**: enables you to roll out new lint rules in your monorepo without having to
  clutter up source files with thousands of machine-generated `// eslint-ignore-next-line` directives.
  Instead, the "bulk suppressions" for legacy violations are managed in a separate file called
  **.eslint-bulk-suppressions.json**.

- **modern-module-resolution**: allows an ESLint config package to provide plugin dependencies, avoiding the
  problem where hundreds of projects in a monorepo need to copy+paste the same `"devDependencies"` in
  every **package.json** file.

  > **NOTE:** ESLint 8.21.0 has now introduced a new `ESLINT_USE_FLAT_CONFIG` mode that may reduce the need
  for the `modern-module-resolution` patch.

- **custom-config-package-names**: enables [rig packages](https://heft.rushstack.io/pages/intro/rig_packages/)
  to provide shareable configs for ESLint, by removing the requirement that `eslint-config` must appear in
  the NPM package name.

Contributions welcome!  If you have more ideas for experimental ESLint enhancements that might benefit
large scale monorepos, consider adding them to this patch.


# eslint-bulk-suppressions feature

<!-- ## is correct here, but ### looks better in NPM's rendering -->

### What it does

As your monorepo evolves and grows, there's an ongoing need to expand and improve lint rules.  But whenever a
new rule is enabled, there may be hundreds or thousands of "legacy violations" in existing source files.
How to handle that? We could fix the old code, but that's often prohibitively expensive and may even cause
regressions. We could disable the rule for those projects or files, but we want new code to follow the rule.
An effective solution is to inject thousands of `// eslint-ignore-next-line` lines, but these "bulk suppressions"
have an unintended side effect:  It normalizes the practice of suppressing lint rules.  If people get used to
seeing `// eslint-ignore-next-line` everywhere, nobody will notice when humans suppress the rules for new code.
That would undermine the mission of establishing better code standards.

The `eslint-bulk-suppressions` feature introduces a way to store machine-generated suppressions in a separate
file **.eslint-bulk-suppressions.json** which can even be protected using `CODEOWNERS` policies, since that file
will generally only change when new lint rules are introduced, or in occasional circumstances when existing files
are being moved or renamed.  In this way `// eslint-ignore-next-line` remains a directive written by humans
and hopefully rarely needed.


### Why it's a patch

As with `modern-module-resolution`, our hope is for this feature to eventually be incorporated as an official
feature of ESLint.  Starting out as an unofficial patch allows faster iteration and community feedback.


### How to use it

1. Add `@rushstack/eslint-patch` as a dependency of your project:

   ```bash
   cd your-project
   npm install --save-dev @rushstack/eslint-patch
   ```

2. Globally install the [`@rushstack/eslint-bulk`](https://www.npmjs.com/package/@rushstack/eslint-bulk)
   command line interface (CLI) package. For example:

   ```bash
   npm install --global @rushstack/eslint-bulk
   ```

   This installs the `eslint-bulk` shell command for managing the **.eslint-bulk-suppressions.json** files.
   With it you can generate new suppressions as well as "prune" old suppressions that are no longer needed.

3. Load the patch by adding the following `require()` statement as the first line of
   your **.eslintrc.js** file.  For example:

   **.eslintrc.js**
   ```js
   require("@rushstack/eslint-patch/eslint-bulk-suppressions"); // 👈 add this line

   module.exports = {
     rules: {
       rule1: 'error',
       rule2: 'warning'
     },
     parserOptions: { tsconfigRootDir: __dirname }
   };
   ```

Typical workflow:

1. Checkout your `main` branch, which is in a clean state where ESLint reports no violations.
2. Update your configuration to enable the latest lint rules; ESLint now reports thousands of legacy violations.
3. Run `eslint-bulk suppress --all ./src` to update **.eslint-bulk-suppressions.json.**
4. ESLint now no longer reports violations, so commit the results to Git and merge your pull request.
5. Over time, engineers may improve some of the suppressed code, in which case the associated suppressions are no longer needed.
6. Run `eslint-bulk prune` periodically to find and remove unnecessary suppressions from **.eslint-bulk-suppressions.json**, ensuring that new violations will now get caught in those scopes.

### "eslint-bulk suppress" command

```bash
eslint-bulk suppress --rule NAME1 [--rule NAME2...] PATH1 [PATH2...]
eslint-bulk suppress --all PATH1 [PATH2...]
```

Use this command to automatically generate bulk suppressions for the specified lint rules and file paths.
The path argument is a [glob pattern](https://en.wikipedia.org/wiki/Glob_(programming)) with the same syntax
as path arguments for the `eslint` command.


### "eslint-bulk prune" command

Use this command to automatically delete all unnecessary suppression entries in all
**.eslint-bulk-suppressions.json** files under the current working directory.

```bash
eslint-bulk prune
```

### Implementation notes

The `eslint-bulk` command is a thin wrapper whose behavior is actually provided by the patch itself.
In this way, if your monorepo contains projects using different versions of this package, the same globally
installed `eslint-bulk` command can be used under any project folder, and it will always invoke the correct
version of the engine compatible with that project.  Because the patch is loaded by ESLint, the `eslint-bulk`
command must be invoked in a project folder that contains an **.eslintrc.js** configuration with correctly
installed **package.json** dependencies.

Here's an example of the bulk suppressions file content:

**.eslint-bulk-suppressions.json**
```js
{
  "suppressions": [
    {
      "rule": "no-var",
      "file": "./src/your-file.ts",
      "scopeId": ".ExampleClass.exampleMethod"
    }
  ]
}
```
The `rule` field is the ESLint rule name.  The `file` field is the source file path, relative to the **eslintrc.js** file.  The `scopeId` is a special string built from the names of containing structures.  (For implementation details, take a look at the [calculateScopeId()](https://github.com/microsoft/rushstack/blob/e95c51088341f01516ee5a7639d57c3f6dce8772/eslint/eslint-patch/src/eslint-bulk-suppressions/bulk-suppressions-patch.ts#L52) function.)  The `scopeId` identifies a region of code where the rule should be suppressed, while being reasonably stable across edits of the source file.

# modern-module-resolution feature

### What it does

This patch is a workaround for a longstanding [ESLint feature request](https://github.com/eslint/eslint/issues/3458)
that would allow a shareable ESLint config to bring along its own plugins, rather than imposing peer dependencies
on every consumer of the config.  In a monorepo scenario, this enables your lint setup to be consolidated in a
single NPM package.  Doing so greatly reduces the copy+pasting and version management for all the other projects
that use your standard lint rule set, but don't want to be bothered with the details.

> **NOTE:** ESLint 8.21.0 has now introduced a new `ESLINT_USE_FLAT_CONFIG` mode that may reduce the need
> for this patch.


### Why it's a patch

We initially proposed this feature in a pull request for the official ESLint back in 2019, however the
maintainers preferred to implement a more comprehensive overhaul of the ESLint config engine.  It ultimately
shipped with the experimental new `ESLINT_USE_FLAT_CONFIG` mode (still opt-in as of ESLint 8).
While waiting for that, Rush Stack's `modern-module-resolution` patch provided a reliable interim solution.
We will continue to maintain this patch as long as it is being widely used, but we encourage you to check out
`ESLINT_USE_FLAT_CONFIG` and see if it meets your needs.


### How to use it

1. Add `@rushstack/eslint-patch` as a dependency of your project:

   ```bash
   cd your-project
   npm install --save-dev @rushstack/eslint-patch
   ```

2. Add a `require()` call to the to top of the **.eslintrc.js** file for each project that depends
   on your shareable ESLint config, for example:

   **.eslintrc.js**
   ```ts
   require("@rushstack/eslint-patch/modern-module-resolution"); // 👈 add this line

   // Add your "extends" boilerplate here, for example:
   module.exports = {
     extends: ['@your-company/eslint-config'],
     parserOptions: { tsconfigRootDir: __dirname }
   };
   ```

With this change, the local project no longer needs any ESLint plugins in its **package.json** file.
Instead, the hypothetical `@your-company/eslint-config` NPM package would declare the plugins as its
own dependencies.

This patch works by modifying the ESLint engine so that its module resolver will load relative to the folder of
the referencing config file, rather than the project folder.  The patch is compatible with ESLint 6, 7, and 8.
It also works with any editor extensions that load ESLint as a library.

For an even leaner setup, `@your-company/eslint-config` can provide the patches as its own dependency.
See [@rushstack/eslint-config](https://github.com/microsoft/rushstack/blob/main/eslint/eslint-config/patch/modern-module-resolution.js) for a real world example.


# custom-config-package-names feature

### What it does

Load the `custom-config-package-names` patch to remove ESLint's
[naming requirement](https://eslint.org/docs/latest/extend/shareable-configs)
that `eslint-config` must be part of the NPM package name for shareable configs.

This is useful because Rush Stack's [rig package](https://heft.rushstack.io/pages/intro/rig_packages/)
specification defines a way for many different tooling configurations and dependencies to be shared
via a single NPM package, for example
[`@rushstack/heft-web-rig`](https://www.npmjs.com/package/@rushstack/heft-web-rig).
Rigs avoid a lot of copy+pasting of dependencies in a large scale monorepo.
Rig packages always include the `-rig` suffix in their name.  It doesn't make sense to enforce
that `eslint-config` should also appear in the name of a package that includes shareable configs
for many other tools besides ESLint.

### How to use it

Continuing the example above, to load this patch you would add a second line to your config file:

**.eslintrc.js**
```ts
require("@rushstack/eslint-patch/modern-module-resolution");
require("@rushstack/eslint-patch/custom-config-package-names"); // 👈 add this line

// Add your "extends" boilerplate here, for example:
module.exports = {
  extends: [
    '@your-company/build-rig/profile/default/includes/eslint/node' // Notice the package name does not start with "eslint-config-"
  ],
  parserOptions: { tsconfigRootDir: __dirname }
};
```


# Links

- [CHANGELOG.md](https://github.com/microsoft/rushstack/blob/main/eslint/eslint-patch/CHANGELOG.md) - Find
  out what's new in the latest version

- [`@rushstack/eslint-bulk`](https://www.npmjs.com/package/@rushstack/eslint-bulk) CLI package

`@rushstack/eslint-patch` is part of the [Rush Stack](https://rushstack.io/) family of projects.
