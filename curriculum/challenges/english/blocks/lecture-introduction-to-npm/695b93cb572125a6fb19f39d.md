---
id: 695b93cb572125a6fb19f39d
title: How Can You Install Specific Versions and Manage Dependencies?
challengeType: 19
dashedName: how-can-you-install-specific-versions-and-manage-dependencies
---

# --description--

Keeping your dependencies up to date—and knowing how to install a specific version—is important for keeping your project stable. It helps you avoid unexpected bugs and gives you more control when new versions are released.

To install a specific version of a package, use this format:

```bash
npm install package@version-number
```

For example, if your project needs an older version of Express, say `4.21.2`, you can install it like this:

```bash
npm install express@4.21.2
```

If you don't include a version number, npm will automatically install the latest version available.

If you're not sure which versions exist, you can check them with this command:

```bash
npm view package-name versions
```

For instance:

```bash
npm view express versions
```

To update packages, you can update them individually or all at once. Before doing that, it's helpful to first see which ones are out of date:

```bash
npm outdated
```

This will show you which dependencies have newer versions available, and you should see an output similar to this:

```bash
user@Kolade ~/Desktop/fCC/script-code/node/npm/install-spec-version  % npm outdated
Package  Current  Wanted  Latest  Location              Depended by
chalk      5.5.0   5.5.0   5.6.2  node_modules/chalk    install-spec-version
cleave     1.0.1   1.0.1   1.0.2  node_modules/cleave   install-spec-version
express   4.21.2  4.21.2   5.2.1  node_modules/express  install-spec-version
```

Once you've checked which dependencies are outdated, you can start updating them.

To update a single dependency, use the following:

```bash
npm update package-name
```

This updates the package only within the version range allowed by your `package.json` file. For example, to update Express, you can use the following:

```bash
npm update express
```

If you want to skip the version range and install the latest version of a package, use the following command:

```bash
npm install package-name@latest
```

To update all dependencies that fall within the allowed version ranges, run:

```bash
npm update
```

However, note that `npm update` does not upgrade a package to a new major version if your `package.json` doesn't allow it. Major versions often contain breaking changes, so npm won't apply them automatically.

If you specifically want the newest major version, you must run:

```bash
npm install package-name@latest
```

This forces npm to install the most recent release, no matter what version range is in your `package.json`.

# --questions--

## --text--

Which command correctly installs a specific version of an npm package?

## --answers--

`npm add package@version-number`

### --feedback--

Think about the command you use to add packages and specify versions in Node.js.

---

`npm get package@version-number`

### --feedback--

Think about the command you use to add packages and specify versions in Node.js.

---

`npm install package@version-number`

---

`npm use package@version-number`

### --feedback--

Think about the command you use to add packages and specify versions in Node.js.

## --video-solution--

3

## --text--

Which command is used to check which dependencies are outdated in a Node.js project?

## --answers--

`npm check`

### --feedback--

Think about the command that specifically reports old package versions.

---

`npm outdated`

---

`npm update`

### --feedback--

Think about the command that specifically reports old package versions.

---

`npm list`

### --feedback--

Think about the command that specifically reports old package versions.

## --video-solution--

2

## --text--

Which command always updates a dependency to its latest major version in Node.js?

## --answers--

`npm update package-name`

### --feedback--

Think about the command that installs always installs the latest version.

---

`npm upgrade package-name`

### --feedback--

Think about the command that installs always installs the latest version.

---

`npm refresh package-name`

### --feedback--

Think about the command that installs always installs the latest version.

---

`npm install package-name@latest`

## --video-solution--

4
