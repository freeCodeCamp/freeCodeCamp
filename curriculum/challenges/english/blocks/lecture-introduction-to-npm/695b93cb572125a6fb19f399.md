---
id: 695b93cb572125a6fb19f399
title: What Is a package.json File
challengeType: 19
dashedName: what-is-a-package-json-file
---

# --description--

npm needs a way to store important details about your project – things like what packages it uses, the version of those packages, and what commands it can run. It does this with the `package.json` file.

Think of the `package.json` file as an npm configuration file for the project. It's a simple JSON file that describes your project using key-value pairs to keep track of things like:

* the project's name and version
    
* the author
    
* the main file that should be run first
    
* the license
    
* the code repository, keywords, and descriptions
    
* any dependencies the project needs
    

Here's what a `package.json` file might look like:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A simple NPM project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Running tests...\""
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/username/project.git"
  },
  "keywords": ["fCC", "js"],
  "author": "Kolade Chris",
  "license": "ISC",
  "dependencies": {
    "react": "^19.2.1"
  },
  "devDependencies": {
    "cypress": "^15.7.1"
  }
}
```

The `main` field is often set to `index.js`, and tells Node.js which file to run first.

The `license` field is used to specify the legal terms under which other people can use, modify, and distribute the code in your package. There are many different licenses like `MIT`, `ISC`, or `GPL`, which all have different terms and permissions. The default is `ISC`, the Internet Systems Consortium License, which is a very permissive open source license.

As your project grows and you install packages, npm adds them under one of two sections:

* `dependencies`, which are packages your app needs to run in production
    
* `devDependencies`, which are packages you only need during development
    

For example, if your project uses React for its UI, that goes in `dependencies` because it's required for your project to work once it's deployed. A tool like Cypress, which is only used for end-to-end testing before deploying to production, belongs in `devDependencies`.

There are a couple of easy ways to create a `package.json` file. The most common way is to run the following command:

```bash
npm init
```

You should run this in the root folder of your project. This command starts an interactive setup process where npm asks you a series of questions. Your answers are used to fill in fields like the project's name, version, description, scripts, keywords, author, and license.

If you prefer to skip the questions and create a `package.json` file with default values, you can run:

```bash
npm init -y
```

or

```bash
npm init --yes
```

This instantly creates a `package.json` file for you with default values in many fields.

It's usually best to use `npm init` without the `-y` or `--yes` flag so you can go through each field and customize your project's information. If you don't answer a question, npm simply uses a default value. For example, if you leave the license question empty, npm will set it to `ISC` by default.

Here's an example of what you'll see when running `npm init`:

```bash
user@Kolade ~/Desktop/fCC/npm/package-json-file  % npm init
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (test) my-app
version: (1.0.0)
description: a description for my-app
entry point: (index.js)
test command:
git repository:
keywords: fCC, JS
author: Kolade Chris
license: (ISC)
About to write to /Users/user/Desktop/fCC/npm/package-json-file/package.json

{
  "name": "my-app",
  "version": "1.0.0",
  "description": "a description for my-app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "fCC",
    "JS"
  ],
  "author": "Kolade Chris",
  "license": "ISC"
}


Is this OK? (yes)
```

You might notice that `dependencies` and `devDependencies` aren't listed yet. That's because these sections are only added after you install your first package.

You'll also notice that the `repository` field is missing. Even though npm asked about it during `npm init`, it doesn't automatically fill it in later. For example, when you run commands like `git remote add origin` or `git push`, npm won't update the repository field for you — you have to add it manually if you want it included.

In the next lessons, you'll learn more about dependencies in `package.json` and how to install, update, and remove them.

# --questions--

## --text--

How can you create a `package.json` file?

## --answers--

Only by downloading it from the npm website.

### --feedback--

Think about the command that helps set up project details interactively.

---

By running the `npm install` command.

### --feedback--

Think about the command that helps set up project details interactively.

---

By running the `npm init` command.

---

By importing it from another project.

### --feedback--

Think about the command that helps set up project details interactively.

## --video-solution--

3

## --text--

What happens to the `package.json` file when you install dependencies in a Node.js project?

## --answers--

It deletes existing configuration keys.

### --feedback--

Think about where npm stores details of installed packages.

---

It creates a `dependencies` or `devDependencies` section based on the type of package installed.

---

It automatically updates the project's version number.

### --feedback--

Think about where npm stores details of installed packages.

---

It removes unused packages from the project.

### --feedback--

Think about where npm stores details of installed packages.

## --video-solution--

2

## --text--

Which of the following information does the `package.json` file store in a Node.js project?

## --answers--

Details like project `name`, `version`, `author`, entry file, and `license`

---

Only the project's CSS styles and HTML templates

### --feedback--

Think about what helps identify and describe a Node.js project.

---

The compiled JavaScript output files

### --feedback--

Think about what helps identify and describe a Node.js project.

---

User credentials and system environment variables

### --feedback--

Think about what helps identify and describe a Node.js project.

## --video-solution--

1
