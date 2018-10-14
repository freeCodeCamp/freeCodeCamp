---
title: npm
---
## npm

npm is a package manager and is used to install and manage dependencies.

npm is central to the vibrant JavaScript(and specifically the Node.js) community, by making module and code reusability across projects very simple.
Currently, npm has upwards of 500,000 available packages.

npm is useful not only for server-side projects. Most popular front-end libraries like Bootstrap and Font Awesome are available too.

**Note:** 
* npm comes out of the box with Node.js so it's necessary to install Node.js first
* npm has no full form because of its usage beyond Node.js specific projects. It was formerly called Node Package Manager.

### npm Usage

npm is commonly used from the command line. The commands given below are arguably the most important ones to get you started:

```
npm init
```

Running this command in your project's root directory initializes it for use with npm by creating a `package.json` file. You will be prompted for the
project's name, description, author's name and more. This information is then used to populate the `package.json` file, which will also hold the
information about the project's dependencies and requirements. You can alter that information manually later.

```
npm install [name-of-package]
```

This installs a package and all its dependencies automatically, and saves it in the `package.json` file. If you are installing a development dependency,
you may want to use the `--save-dev` or `-D` switch. npm will then save the package as a development dependency.

Packages are installed locally in the `node_modules` directory in your project's root directory. Sometimes you may want to have a package available across
different projects. This is done with the `--global` or `-g` switch. This is often useful for development tools and command line utilities.

```
npm install
```

Running npm install in a project's root directory without a specific package name, installs all the dependencies required for that project. Those are
calculated according to the project's `package.json` file. This demonstrates the power of npm, where a single command can fetch tens or hundreds of
dependencies automatically for you, and is useful when you `git clone` a repository, for example.

#### More Information:
* Node.js website: <a href='https://nodejs.org' target='_blank' rel='nofollow'>nodejs</a>
* The official website of npm, you can read about npm as well as search for the different available packages: <a href='https://www.npmjs.com' target='_blank' rel='nofollow'>npmjs</a>
* Read more about npm: <a href='https://en.wikipedia.org/wiki/Npm_(software)' target='_blank' rel='nofollow'>Wikipedia</a>
* A Beginner's Guide to npm: <a href='https://www.sitepoint.com/beginners-guide-node-package-manager/' target='_blank' rel='nofollow'>sitepoint</a>
* If you want a comprehensive video series, check this out: <a href='https://youtu.be/6fj0cpmMiVg' target='_blank' rel='nofollow'>youtube</a>
* And here's the official series from npm: <a href='https://youtu.be/pa4dc480Apo' target='_blank' rel='nofollow'>youtube</a>
