---
title: Yarn
---
## Yarn

Yarn is a package manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry about the dependencies of a project.

Yarn allows you to use other developers’ solutions to different problems, making it easier for you to develop your software. If you have problems, you can report issues or contribute back, and when the problem is fixed, you can use Yarn to keep it all up to date.

Code is shared through something called a package (sometimes referred to as a module). A package contains all the code being shared as well as a package.json file which describes the package.

To use yarn you must install it on your system first. There are links at the end of this article to help you do that in whatever your operating system is.

When you have Yarn installed, you can start using it. Here are some of the most common commands you’ll need.

### yarn Usage

**Starting a new project**
```
yarn init
```
The `yarn init` command will open an interactive form for creating a yarn project. `yarn init` creates a `package.json` file that stores the information about your project. This interactive form will open up with the following questions:
```
name (your-project):
version (1.0.0):
description:
entry point (index.js):
git repository:
author:
license (MIT):
```
You can either type the answers for each option or just hit enter without typing anything to use the default or to leave blank. You can always go into your favorite text editor to change your `package.json` file, if needed.

Your `package.json` file should look similar to this:
```
{
  "name": "your-new-project",
  "version": "1.0.0",
  "description": "A description of your new project.",
  "main": "index.js",
  "repository": {
    "url": "https://github.com/your-username/your-new-project",
    "type": "git"
  },
  "author": "Your Name <your_name@example.com>",
  "license": "MIT"
}
```

**Adding a dependency**
```
yarn add [package]
```

**Upgrading a dependency**
```
yarn upgrade [package]
```

**Removing a dependency**
```
yarn remove [package]
```

**Installing all the dependencies of project**
```
yarn install
```

#### More Information:
* [Yarn website](https://yarnpkg.com)
* [Yarn documentation](https://yarnpkg.com/en/docs)
* [Installing Yarn](https://yarnpkg.com/en/docs/install)
* [Yarn vs npm](https://www.pluralsight.com/guides/node-js/yarn-a-package-manager-for-node-js)
