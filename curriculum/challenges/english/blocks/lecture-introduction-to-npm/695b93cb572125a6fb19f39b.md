---
id: 695b93cb572125a6fb19f39b
title: What Is Semantic Versioning?
challengeType: 19
dashedName: what-is-semantic-versioning
---

# --description--

Semantic versioning, or SemVer, is a system that gives version numbers a clear meaning, so developers can quickly understand what kind of changes were made to software.

SemVer uses this format:

```bash
MAJOR.MINOR.PATCH
```

For example, the popular library `lodash` is currently version `4.17.21`.

Here's what each part means:

* MAJOR — Large changes that break existing code. Example: removing or renaming a function that existing code might depend on.
    
* MINOR — New features that don't break existing code. Example: adding a new function or optional parameter.
    
* PATCH — Small fixes and improvements. Example: fixing a bug or typo without changing how anything works.
    

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-is-semantic-versioning-1.png" alt="In the version number 4.17.21, 4 is the Major Version, it's changed for breaking changes, the 17 is the minor version, it's changed for non-breaking changes, and the 21 is the patch, it's changed for bug fixes and small features">

Let's say you have a package called `my-package`. Here's an example of how its version number might change over time using semantic versioning:

| Version | What Changed |
| --- | --- |
| 1.0.0 | Initial stable release |
| 1.1.0 | New optional feature |
| 1.1.1 | Small bug fix or feature |
| 2.0.0 | Breaking changes introduced |

But there's more to version numbers in npm. When you install a package, the version in your `package.json` file might look like this:

```json
"lodash": "^4.17.21" 
```

You already learned that `4` is the major version, `17` is the minor version, and `21` is the patch version. But what does the caret (`^`) in front mean?

The caret symbol allows npm to automatically install newer minor and patch versions (`4.x.x`), but not newer major versions (`5.x.x`), because major updates may include breaking changes.

When the major version is `0`, the caret becomes more restrictive. For example, `^0.2.3` would allow updates like `0.2.4`, but not `0.3.0`, since major versions starting with `0` are considered less stable.

The caret is not the only symbol `npm` and other JavaScript package managers use for managing dependency versions.

There is the tilde symbol (`~`) which allows updates to the patch version only. So, `~1.2.3` would accept `1.2.4` and `1.2.9`, but never `1.3.0`.

You can also use the greater than (`>`), lesser than (`<`), and their "or equals" equivalents to accept versions between a range. For example, `>=1.2.3 <2.0.0` means any version from `1.2.3` up to, but not including, `2.0.0`.

The asterisk symbol (`*`), matches any version, so it accepts everything. This is ideal only for testing and not recommended for production.

Finally, you can lock down an exact version by not prefixing the version number with any symbol. For instance, version `1.2.3` accepts only `1.2.3`.

Here's a quick summary table:

| Symbol | Meaning | Example Range |
| --- | --- | --- |
| `^` | Allow minor + patch updates | `^1.2.3` → `1.x.x` |
| `~` | Allow patch updates only | `~1.2.3` → `1.2.x` |
| `>`, `<`, `>=`, `<=` | Custom range | `>=1.2.3` or `<2.0.0` |
| **\*** | Any version | all versions |
| none | Exact version | `1.2.3` |

# --questions--

## --text--

What does a major version indicate in semantic versioning?

## --answers--

Minor improvements or added features that don't break existing code.

### --feedback--

Think about what happens when you rename or remove a function already used in your project.

---

Bug fixes that don't affect the functionality.

### --feedback--

Think about what happens when you rename or remove a function already used in your project.

---

Breaking changes that can cause existing code to stop working.

---

Updates to documentation or comments only.

### --feedback--

Think about what happens when you rename or remove a function already used in your project.

## --video-solution--

3

## --text--

If a version number is `5.18.4`, which part represents the patch version?

## --answers--

`4`

---

`18`

### --feedback--

Think about the `MAJOR.MINOR.PATCH` order.

---

`5`

### --feedback--

Think about the `MAJOR.MINOR.PATCH` order.

---

All of them

### --feedback--

Think about the `MAJOR.MINOR.PATCH` order.

## --video-solution--

1

## --text--

What does the tilde (`~`) symbol mean in semantic versioning?

## --answers--

It allows updates to both minor and major versions.

### --feedback--

Think about which part of the version number can change when using `~1.2.3`.

---

It allows updates to the major version only.

### --feedback--

Think about which part of the version number can change when using `~1.2.3`.

---

It locks the dependency to a specific version.

### --feedback--

Think about which part of the version number can change when using `~1.2.3`.

---

It allows updates to the patch version only.

## --video-solution--

4
