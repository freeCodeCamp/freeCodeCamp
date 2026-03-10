---
id: 695b93cb572125a6fb19f39a
title: What Are Package Dependencies and What Are Some Considerations for Choosing an External Package?
challengeType: 19
dashedName: what-are-package-dependencies-and-what-are-some-considerations-for-choosing-an-external-package
---

# --description--

In an earlier lesson, you learned what dependencies are. Here, you'll learn more about them and things to consider when choosing an external package to use for your project.

A dependency is another piece of code your project needs in order to work. These are usually external packages that other developers have created and shared in the npm registry.

Using dependencies saves you a lot of time. Instead of building everything yourself, you can install a package that already solves a common problem — things like creating a web server, handling routing, fetching data, managing authentication, and more.

In your `package.json` file, all the packages your project depends on are listed under the `dependencies` key:

```json
{
  "name": "package-dependencies",
  "version": "1.0.0",
  "description": "a demo on how package dependencies work",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Node",
    "NPM"
  ],
  "author": "Kolade Chris",
  "license": "ISC",
  "dependencies": {
    "chalk": "^5.6.2",
    "lodash": "^4.17.21"
  }
}
```

In the example `package.json` file above, `chalk` and `lodash` are listed as the project's dependencies. That means the project relies on these packages to work. If they're not installed—and listed in the `package.json` file—any features that use them will break.

There's also another category of dependencies called `devDependencies`. These are packages you only need while building or testing your project, not when it's running in production. Common examples include:

* Nodemon for automatically restarting the project when there are updates
    
* Jest or Mocha for testing
    
* ESLint for code linting
    

As you'd expect, `devDependencies` appear under the `devDependencies` section of the `package.json` file:

```json
{
  "name": "package-dependencies",
  "version": "1.0.0",
  "description": "a demo on how package dependencies work",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Node",
    "NPM"
  ],
  "author": "Kolade Chris",
  "license": "ISC",
  "dependencies": {
    "chalk": "^5.6.2",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "jest": "^30.2.0",
    "nodemon": "^3.1.10"
  }
}
```

When choosing which packages to use in your project, there are a few important things to keep in mind.

Security should always come first. Even a single unsafe package can create problems for your entire project. You should also consider performance, because a large or poorly optimized package can slow your project down.

It also helps to choose packages that are popular and well-supported. Popular packages usually have active communities, good documentation, and frequent updates. One easy way to check popularity is to look at the number of weekly downloads on npm. For example, the `chalk` package gets over 300,000 downloads each week:

<img src="https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-are-package-dependencies-and-what-are-some-considerations-for-choosing-an-external-package-1.webp" alt="screenshot from npm of chalk package statistics">

Maintenance is important too. Well-maintained packages are updated regularly and work better with new versions of other software.

Finally, don't overlook documentation. Clear, thorough docs make it much easier to understand how to use a package and save you a lot of time when integrating it into your project.

# --questions--

## --text--

What does a high number of downloads for an npm package usually indicate?

## --answers--

The package is new and untested.

### --feedback--

Think about what a high download count says about a package's popularity.

---

The package is unpopular and rarely used.

### --feedback--

Think about what a high download count says about a package's popularity.

---

The package has strong community support and is likely more reliable.

---

The package is only used for private projects.

### --feedback--

Think about what a high download count says about a package's popularity.

## --video-solution--

3

## --text--

Which statement best describes the difference between `dependencies` and `devDependencies`?

## --answers--

`dependencies` are only used for testing, while `devDependencies` are used in production.

### --feedback--

Think about which type of dependency is required for the app to function after deployment.

---

`dependencies` are needed for the app to run, while `devDependencies` are only needed during development and testing.

---

`devDependencies` are automatically installed in production environments.

### --feedback--

Think about which type of dependency is required for the app to function after deployment.

---

`devDependencies` are only for managing databases.

### --feedback--

Think about which type of dependency is required for the app to function after deployment.

## --video-solution--

2

## --text--

Why are dependencies useful?

## --answers--

They slow down project setup to ensure clean coding practices.

### --feedback--

Think about how dependencies help you avoid reinventing the wheel.

---

They prevent developers from installing third-party packages.

### --feedback--

Think about how dependencies help you avoid reinventing the wheel.

---

They are required only for styling and front-end design.

### --feedback--

Think about how dependencies help you avoid reinventing the wheel.

---

They provide ready-made solutions for common tasks like routing and authentication.

## --video-solution--

4
