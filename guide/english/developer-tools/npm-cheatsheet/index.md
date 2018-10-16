---
title: npm Cheat Sheet
---

## npm Cheat Sheet

A list of terminal commands and flags to help use `npm`

## install `package.json` dependencies

```shell
npm install
```

**Shorthand**

```shell
# install
npm i <package>
# uninstall
npm un <package>
# update
npm up <package>
```

## List globally installed packages.

```shell
npm list -g --depth=0

```

## Uninstall global package

```shell
npm -g uninstall <name> 
```

## Upgrade NPM on Windows

After trying several times to upgrade npm on Windows I found this whilst poking around in the npm folders.

```shell
npm-windows-upgrade
```

## Updating global packages

To see which packages need updating, use:

```shell
npm outdated -g --depth=0
```

To update global packages individually you can use:

```shell
npm update -g <package> <package> <package>
```

## list available scripts to run

```shell
npm run
```

## update npm

```shell
npm install -g npm@latest
# using windows? Then use
npm-windows-upgrade
```

## flags

`-S` is the same as `--save` not needed in npm 5+
`-D` is the same as `--save-dev`

## installed version

```shell
npm list # for local packages
```

## Node Version Manager `nvm`

nvm is a popular version manager for npm. It lets you install multiple npm instances on the same machine, giving you the opportunity to also have different versions for global packages, for each npm installation. You can find [more information on nvm here](https://github.com/creationix/nvm).

Say you want to install Node v6.9.1 you would write on the terminal:

```shell
nvm install 6
```

If you have multiple versions of Node.js installed on your workspace, you can switch to a specific version by writing:

```shell
nvm use 4.8.4
```

If you want to install another version of Node.js and also re-install all global packages from another installed version:

```shell
nvm install 8.11.1 --reinstall-packages-from=4.8.4
```

### Making a node version default.

In order to set a default version of node for your workspace, just type:

```shell
nvm alias default 6
```

Where 6 was the version you wanted to be used as default.
