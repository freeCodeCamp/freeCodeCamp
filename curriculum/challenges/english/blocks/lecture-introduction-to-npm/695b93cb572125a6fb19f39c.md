---
id: 695b93cb572125a6fb19f39c
title: How Can You Install and Remove Dependencies?
challengeType: 19
dashedName: how-can-you-install-and-remove-dependencies
---

# --description--

In a previous lesson, you learned what dependencies are and how to choose the right ones for your project.

In this lesson, you'll learn how to install and remove dependencies using npm.

To install a dependency, use the `npm install` command like this:

```bash
npm install dependencyName
```

You can also shorten `install` to `i` like this:

```bash
npm i dependencyName
```

After installing a package, npm adds a new `dependencies` section to your `package.json` file (if it isn't already there) and lists the package you installed. For example, here's what it looks like when you install the `chalk` package:

```json
{
  "name": "install-uninstall-deps",
  "version": "1.0.0",
  "description": "a simple demo on how to install and uninstall dependencies",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["npm", "deps"],
  "author": "Kolade Chris",
  "license": "ISC",
  "dependencies": {
    "chalk": "^5.6.2"
  }
}
```

When you install a dependency, two new things appear in your project's root folder:

* `node_modules/`: a folder that contains the actual code for the packages you installed.
    
* `package-lock.json`: a file that stores detailed information about the exact versions of those packages, including their own dependencies. (You'll learn more about this file in a later lesson.)
    

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/how-can-you-install-and-remove-dependencies-1.png" alt="">

Most projects need more than one dependency. Instead of installing them one at a time, npm lets you install multiple packages at once by entering a space-separated list of package names:

```bash
npm install express lodash bcrypt
```

Just like before, when you install multiple dependencies at once, npm updates your `package.json` and `package-lock.json` files and your `node_modules` to include them. Here's what the `package.json` would look like:

```json
{
  "name": "install-uninstall-deps",
  "version": "1.0.0",
  "description": "a simple demo on how to install and uninstall dependencies",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["npm", "deps"],
  "author": "Kolade Chris",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^6.0.0",
    "chalk": "^5.6.2",
    "express": "^5.1.0",
    "lodash": "^4.17.21"
  }
}
```

To install a `devDependency`, add the `--save-dev` flag to the `install` command. You can also use the shorter `-D` version:

```bash
npm i nodemon -D
```

After running this command, npm updates your `package.json` file and adds the package under the `devDependencies` section. Here's an example of what that looks like:

```json
{
  "name": "install-uninstall-deps",
  "version": "1.0.0",
  "description": "a simple demo on how to install and uninstall dependencies",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["npm", "deps"],
  "author": "Kolade Chris",
  "license": "ISC",
  "dependencies": {
    "bcrypt": "^6.0.0",
    "chalk": "^5.6.2",
    "express": "^5.1.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

Whenever you run an `npm install` command, npm will show a message telling you whether the installation was successful or not. A success message usually looks something like this:

```bash
user@Kolade ~/Desktop/fCC/script-code/node/npm/install-uninstall-deps  % npm install express lodash bcrypt

added 72 packages, and audited 74 in 8s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

user@Kolade ~/Desktop/fCC/script-code/node/npm/install-uninstall-deps  % npm install nodemon -D

added 27 packages, and audited 101 in 16s

21 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

To uninstall or remove a package, use the `npm uninstall` command:

```bash
npm uninstall dependencyName
```

For example, to remove `chalk` from your project, you'd run this command:

```bash
npm uninstall chalk
```

You can also uninstall multiple packages at once by listing them with spaces between each package name:

```bash
npm uninstall express lodash bcrypt
```

You will also get a message showing whether the uninstall command succeeded or failed:

```bash
user@Kolade ~/Desktop/fCC/script-code/node/npm/install-uninstall-deps  % npm uninstall chalk

added 1 package, removed 1 package, and audited 101 packages in 1s

20 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

user@Kolade ~/Desktop/fCC/script-code/node/npm/install-uninstall-deps  % npm uninstall express lodash bcrypt

removed 70 packages, and audited 31 in 1s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

And your `package.json` file will be updated automatically:

```json
{
  "name": "install-uninstall-deps",
  "version": "1.0.0",
  "description": "a simple demo on how to install and uninstall dependencies",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["npm", "deps"],
  "author": "Kolade Chris",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

To uninstall a `devDependency`, you can simply run:

```bash
npm uninstall nodemon
```

Note that you do not need the `-D` flag when uninstalling. npm will automatically remove the package from the correct section, `devDependencies` in this case.

After uninstalling the `devDependency`, your `package.json` will be updated again:

```json
{
  "name": "install-uninstall-deps",
  "version": "1.0.0",
  "description": "a simple demo on how to install and uninstall dependencies",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["npm", "deps"],
  "author": "Kolade Chris",
  "license": "ISC"
}
```

# --questions--

## --text--

What happens to your `package.json` file after you install a new dependency like `chalk`?

## --answers--

The file is deleted and replaced automatically.

### --feedback--

Think about where npm records the packages your project depends on.

---

The package is installed without being recorded anywhere.

### --feedback--

Think about where npm records the packages your project depends on.

---

A new dependencies key is added with the package name listed under it.

---

The `package.json` file becomes read-only.

### --feedback--

Think about where npm records the packages your project depends on.

## --video-solution--

3

## --text--

Which folder and file are automatically added to your project after installing a dependency?

## --answers--

`src` folder and [`readme.md`](http://readme.md) file

### --feedback--

Think about where npm stores installed packages and tracks their exact versions.

---

`node_modules` folder and `package-lock.json` file

---

`public` folder and `index.html` file

### --feedback--

Think about where npm stores installed packages and tracks their exact versions.

---

`dist` folder and `webpack.config.js` file

### --feedback--

Think about where npm stores installed packages and tracks their exact versions.

## --video-solution--

2

## --text--

Which command correctly installs a `devDependency`?

## --answers--

`npm install nodemon -D`

---

`npm uninstall nodemon`

### --feedback--

Think about the flag used to install development-only dependencies.

---

`npm save nodemon --dev`

### --feedback--

Think about the flag used to install development-only dependencies.

---

`npm install nodemon`

### --feedback--

Think about the flag used to install development-only dependencies.

## --video-solution--

1
