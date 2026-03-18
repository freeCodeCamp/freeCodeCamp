---
id: 69a98755ee5508d58e91dccc
title: NPM Quiz
challengeType: 8
dashedName: quiz-npm
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What does npm provide for developers?

#### --distractors--

A curated platform that only hosts design assets like fonts and icons.

---

A hosting service that automatically deploys your project to the cloud.

---

A database solution that manages user records for your apps.

#### --answer--

A registry of prebuilt software packages that solves common problems.

### --question--

#### --text--

Which of the following is not one of the three parts npm refers to?

#### --distractors--

The website npmjs.com.

---

The package registry where libraries are stored.

---

The command-line tool for installing and managing packages.

#### --answer--

The Node.js runtime.

### --question--

#### --text--

What does the `npm install` command do?

#### --distractors--

It scaffolds a brand-new Node.js project from a template.

---

It runs your Node.js application on a local development server.

---

It removes packages that are no longer needed in your project.

#### --answer--

It adds prebuilt packages to your project for common tasks.

### --question--

#### --text--

Which file stores metadata like project name, version, author, and dependencies for a Node.js project?

#### --distractors--

`README.md`.

---

`node_modules/package.json`.

---

`package-lock.json`.

#### --answer--

`package.json`.

### --question--

#### --text--

How can you interactively create a `package.json` file?

#### --distractors--

Run `npm install` without specifying a package name.

---

Download a template from the npm registry homepage.

---

Copy the file from another project and rename it.

#### --answer--

Run the `npm init` command.

### --question--

#### --text--

How do you create a `package.json` file with default values without answering prompts?

#### --distractors--

Run `npm init --interactive`.

---

Create a blank file named `package.json` and leave it empty.

---

Use `npm init` and delete every prompt after opening the editor.

#### --answer--

Run `npm init -y` (or `npm init --yes`) to accept all defaults automatically.

### --question--

#### --text--

Where does npm list packages that are only needed while developing, such as linters or test runners?

#### --distractors--

Inside the `"dependencies"` section.

---

Inside the `"scripts"` section under custom commands.

---

Within the `node_modules` folder itself.

#### --answer--

Inside the `"devDependencies"` section of `package.json`.

### --question--

#### --text--

Which command installs `nodemon` as a development-only dependency?

#### --distractors--

`npm uninstall nodemon`.

---

`npm save nodemon --dev`.

---

`npm install nodemon`.

#### --answer--

`npm install nodemon -D`.

### --question--

#### --text--

Which folder and file are added to your project root after installing a dependency?

#### --distractors--

`public` folder and `index.html`.

---

`dist` folder and `webpack.config.js`.

---

`src` folder and `README.md`.

#### --answer--

`node_modules` folder and `package-lock.json` file.

### --question--

#### --text--

How does `package-lock.json` help keep builds consistent?

#### --distractors--

By deleting unused dependencies before every install.

---

By storing only the major version numbers of packages.

---

By automatically upgrading packages to their latest releases.

#### --answer--

By freezing the exact versions of every dependency that were installed.

### --question--

#### --text--

Why should you commit `package-lock.json` to your Git repository?

#### --distractors--

To make npm run faster on a developer’s machine.

---

To automatically update outdated dependencies.

---

To reduce the repository size.

#### --answer--

So the whole team installs the same dependency versions and setup.

### --question--

#### --text--

How do you install a specific version of a package, like `express@4.21.2`?

#### --distractors--

`npm update express@4.21.2`.

---

`npm get express@4.21.2`.

---

`npm use express@4.21.2`.

#### --answer--

`npm install express@4.21.2`.

### --question--

#### --text--

What does the caret (`^`) symbol allow when specifying dependency versions?

#### --distractors--

It locks the dependency to an exact patch version.

---

It allows updates to the major version only.

---

It excludes all versions below the specified one.

#### --answer--

It permits newer minor and patch versions but blocks new major releases.

### --question--

#### --text--

What does the tilde (`~`) symbol mean in a version range like `~1.2.3`?

#### --distractors--

It allows updates to both major and minor versions.

---

It installs the newest major version regardless of the range.

---

It prevents npm from installing any updates at all.

#### --answer--

It allows updates to the patch version only while keeping the minor version fixed.

### --question--

#### --text--

What kind of changes trigger a major version bump in semantic versioning?

#### --distractors--

Minor stylistic tweaks to comments and formatting.

---

Small bug fixes that don’t change behavior.

---

Optional features that don’t break existing code.

#### --answer--

Breaking changes that can cause existing code to stop working.

### --question--

#### --text--

Which command lists dependencies that have newer published versions?

#### --distractors--

`npm check`.

---

`npm list`.

---

`npm refresh`.

#### --answer--

`npm outdated`.

### --question--

#### --text--

Yarn, PNPM, and Bun are mentioned as alternatives to npm. What kind of tools are they?

#### --distractors--

Registry websites where you publish or download npm packages.

---

Database services that store user data for npm packages.

---

Cloud hosting platforms that auto-deploy npm projects.

#### --answer--

Alternative package managers.

### --question--

#### --text--

Where are custom npm scripts declared in a project?

#### --distractors--

Inside the `.npmrc` file.

---

Within the `"dependencies"` section of `package.json`.

---

In a separate `scripts.json` file at the root.

#### --answer--

Inside the `"scripts"` object of `package.json`.

### --question--

#### --text--

How do you execute a custom npm script named `build`?

#### --distractors--

`build npm`.

---

`node build`.

---

`run build`.

#### --answer--

`npm run build`.

### --question--

#### --text--

What does the double hyphen (`--`) do when running `npm run start -- 8000`?

#### --distractors--

It silences the script output.

---

It forces npm to run the script in parallel.

---

It requests administrative privileges before executing the script.

#### --answer--

It tells npm to forward everything after `--` as arguments to the underlying command.
