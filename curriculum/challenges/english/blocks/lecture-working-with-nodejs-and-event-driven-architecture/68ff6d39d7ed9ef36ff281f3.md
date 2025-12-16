---
id: 68ff6d39d7ed9ef36ff281f3
title: How can you Install Node on your Computer?
challengeType: 19
dashedName: how-can-you-install-node-on-your-computer
---

# --description--

Now you're ready to take your first steps into the world of Node.js by installing it on your computer. But first, before you install Node.js, we recommend installing a tool called NVM (Node Version Manager). As its name implies, NVM is a tool for managing multiple versions of Node.js on the same computer.

Setting up this tool from the start will help you in the future because you might need to switch between different versions of Node.js for different projects. With NVM, you can do this very easily.

Let's see how you can install NVM on macOS/Linux and Windows, and how you can use it to install Node.js.

## How to Install NVM on macOS/Linux

On macOS and Linux, you can install NVM directly through a shell script.

But for macOS, note that the official documentation for NVM mentions that “you need to manually install the Xcode command line tools before running the install script, otherwise, it'll fail.”

On macOS, you can install Xcode command line tools by running this command in your terminal:

```bash
xcode-select --install
```

Once the installation is finished, you can check the version number and verify the installation with this command:

```bash
xcode-select --version
```

Then, it's time to install NVM. You can download and execute the NVM installation script by running one of these commands:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

To get the latest version of NVM at the time when you are reading this article, please refer to the official NVM documentation: `https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script`. There, you will find these commands with the latest version number.

You might need to restart your terminal when the process is completed to load the new command and the new configuration.

Then, run this command to confirm that NVM was installed correctly and to check your current version:

```bash
nvm -v
```

You should see your version of NVM in the output.

## How to install Node.js with NVM on macOS/Linux

Now that you have NVM installed on macOS/Linux, you can install Node.js.

To install the latest Long-Term Support (LTS) version of Node.js, run this command:

```bash
nvm install --lts
```

Notice the `--lts` flag. This flag indicates that you want to install the current Long-Term Support (LTS) version of Node.js. This version is usually recommended because it prioritizes stability, reliability, and security over new or experimental features. It is thoroughly tested and ready for production. It's also guaranteed to have longer support periods with a focus on bug fixes and security patches.

Alternatively, you can install a specific version of Node.js by specifying the version number in the command:

```bash
nvm install <version>
```

For example, here's how you can install Node.js v20:

```bash
nvm install 20
```

Once you finish installing a version of Node.js, you can switch to that version with this command:

```bash
nvm use <version>
```

For example, here's how to switch to version 20:

```bash
nvm use 20
```

Finally, you can check the current version of Node.js with this command:

```bash
node -v
```

## How to install NVM on Windows

Now let's see how you can install and use NVM on Windows.

Official versions of NVM only support Windows in specific cases. If you have Windows Subsystem for Linux (WSL) set up on your device, you can follow the macOS/Linux guide above to install and use NVM.

However, for Windows itself, there are a few alternatives. One of them is `nvm-windows`, a Node.js version management utility for Windows. This is a completely separate project from the official NVM project. But the purpose of these tools is the same — to help you work with multiple versions of Node.js on the same device.

Before installing `nvm-windows`, you should know that the official repository recommends uninstalling any prior Node installation before installing NVM for Windows. If this is your first time installing Node.js, you should be okay. If you already have other versions of Node.js installed, it is recommended to uninstall them first.

To install `nvm-windows`:

- Go to the Releases section of the official repository: `https://github.com/coreybutler/nvm-windows/releases`.
- Download the latest installer.
- Follow the instructions.  

After completing the installation, you might need to restart your terminal if the `nvm` command is not immediately available.

You can check if the installation was successful and see your current version of `nvm-windows` by running this command:

```powershell
nvm -v
```

## How to Install Node.js using NVM for Windows

Now that you have `nvm-windows` installed on Windows, you are ready to install Node.js.

To install the latest Long-Term Support (LTS) version of Node.js, run this command:

```powershell
nvm install lts
```

The Long-Term Support (LTS) version is usually recommended, but you can install a different version by specifying its version number in the command:

```powershell
nvm install <version>
```

For example:

```powershell
nvm install 20
```

When the installation is completed, you can switch to that version of Node.js with this command:

```powershell
nvm use <version>
```

For example:

```powershell
nvm use 20
```

You can also check your current version of Node.js with this command:

```bash
node -v
```

## Basic Commands

Now that you know how to install NVM and Node.js, let's check out some basic commands that you will find helpful when working with Node.js and NVM.

Also, while all these commands will work for NVM installed on macOS/Linux, including WSL, they may work differently or may not work at all for `nvm-windows`. We'll leave alternative commands for `nvm-windows` whenever possible.

### How to Adjust Powershell's Execution Policy

If you're running Windows and are following along with Powershell and `nvm-windows`, you may need to adjust Powershell's execution policy. The default execution policy for Powershell is `Restricted`, which is a security measure to prevent scripts from running.

First, run Powershell as an administrator by right-clicking on Powershell, then clicking “Run as Administrator“.

Then, to see the current execution policy of the current Powershell session, run the following command:

```powershell
Get-ExecutionPolicy
```

Finally, to set Powershell's execution policy to `RemoteSigned`, which allows local scripts and `npm` to run, use the following command:

```powershell
Set-ExecutionPolicy RemoteSigned
```

Once you've run the command above, you can close the administrator window of Powershell, and open a non-admin Powershell window.

### List All Versions

To list all installed versions of Node.js and check the one that is currently being used, run this command:

```bash
nvm ls
```

### Set Default Node.js Version (NVM on macOS/Linux Only)

This command sets the default version of Node.js that will be used for new terminal sessions:

```bash
nvm alias default <version>
```

For example:

```bash
nvm alias default 22.20.0
```

You can also create custom aliases to assign a more specific name to a version:

```bash
nvm alias <new_name> <version>
```

For example:

```bash
nvm alias new-api 18.20.8
```

After setting up the alias, you can use this new name to switch to that version:

```bash
nvm use <new_name>
```

For example:

```bash
nvm use new-api
```

### Remove a Version of Node.js

To remove a version of Node.js, run this command:

```bash
nvm uninstall <version>
```

For example:

```bash
nvm uninstall 20.19.5
```

With NVM for macOS/Linux, you can remove a version of Node.js by running the `uninstall` command with a major version like `22` or `20`. For example:

```bash
nvm uninstall 20
```

If you have multiple releases for that major version installed like `20.14.0` and `20.12.2`, the latest version will be removed first. In this case, running `nvm uninstall 20` will remove `20.14.0` first.

### Check Your Version of Node.js

To check your current version of Node.js, you can use the following:

```bash
node -v
```

### Check Your Version of npm

`npm` is a package manager for Node.js. You can use it to install, publish, and manage software packages. It is automatically installed when you install Node.js.

To check your current version of `npm`, run this command:

```bash
npm -v
```

### Run a JavaScript File

This command runs the JavaScript file that you specify in the currently active Node.js runtime:

```bash
node <file.js>
```

For example:

```bash
node app.js
```

### Create a Node.js Project

This command creates a new Node.js project by creating a `package.json` file that tracks its details and dependencies.

```bash
npm init
```

When you run the `npm init` command, it will walk you through an interactive CLI guide for setting up the `package.json` file. It will ask you questions for the project name, description, version, etc. If you want to start with a default `package.json` file, you can use the `npm init -y` or `npm init --yes` command.

### Install a Package

To install a specific package, run:

```bash
npm install <package>
```

For example:

```bash
npm install express
```

### Install Dependencies

To install all the dependencies listed in the `package.json` file of a project, run:

```bash
npm install
```

# --questions--

## --text--

What is the primary reason for using `nvm` (Node Version Manager) or `nvm-windows`?

## --answers--

To install `npm` packages globally.

### --feedback--

Think about the "V" in "NVM" and what "manager" implies for software.

---

To execute Node.js scripts in the browser.

### --feedback--

Think about the "V" in "NVM" and what "manager" implies for software.

---

To manage and switch between multiple Node.js versions.

---

To debug Node.js applications efficiently.

### --feedback--

Think about the "V" in "NVM" and what "manager" implies for software.

## --video-solution--

3

---

## --text--

Which `nvm` command would a developer use to switch their current terminal session to a specific installed Node.js version, for example, version `18.17.1`?

## --answers--

`nvm set 18.17.1`

### --feedback--

Think about the verb used by `nvm` to indicate which version should be active for the current shell.

---

`nvm switch 18.17.1`

### --feedback--

Think about the verb used by `nvm` to indicate which version should be active for the current shell.

---

`nvm select 18.17.1`

### --feedback--

Think about the verb used by `nvm` to indicate which version should be active for the current shell.

---

`nvm use 18.17.1`

## --video-solution--

4

---

## --text--

A new Node.js project needs to be initialized, setting up the `package.json` file to manage its dependencies and scripts. Which command is used for this purpose?

## --answers--

`npm init`

---

`npm start`

### --feedback--

The command needs to create the project's foundational file for package management.

---

`node init`

### --feedback--

The command needs to create the project's foundational file for package management.

---

`npm install`

### --feedback--

The command needs to create the project's foundational file for package management.

## --video-solution--

1

