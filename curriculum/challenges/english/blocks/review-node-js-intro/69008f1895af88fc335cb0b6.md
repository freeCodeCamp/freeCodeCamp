---
id: 69008f1895af88fc335cb0b6
title: NodeJs Intro Review
challengeType: 31
dashedName: review-node-js-intro
---

# --description--

## Client-Side JavaScript

- **Client-Side JavaScript**: Code that runs on the client side of a web application, usually in a web browser.
- **Limitations of Client-Side JavaScript**: While powerful, client-side JavaScript has certain limitations:
  - Very restricted access to local files.
  - Not designed for handling complex application logic.
  - Potential security concerns (e.g., exposing sensitive information like database credentials).
- **Reason for Limitations**: These limitations exist because client-side JavaScript was initially designed to run exclusively on web browsers.

## Browser Environment

- **JavaScript Engine**: Web browsers provide the environment needed to run JavaScript code, including the JavaScript Engine.
- **Document Object Model (DOM)**: Browsers provide access to the DOM, allowing you to access HTML elements in your code.
- **Historical Context**: Previously, JavaScript could not run outside of a browser, but now it can with Node.js.

## What is Node.js?

- **Node.js**: A JavaScript runtime environment. Officially defined as "an open-source and cross-platform JavaScript runtime environment."
- **Open Source**: Node.js code is publicly available and maintained by a large community of developers.
- **Cross-Platform**: Works on any operating system, including Windows, macOS, and Linux.
- **JavaScript Runtime Environment**: Allows you to run JavaScript code outside of a browser.

## Node.js Use Cases

- **Common Applications**: Node.js is used across a wide range of industries for:
  - Building web servers and APIs that handle HTTP requests.
  - Developing web and mobile applications.
  - Handling complex data and database interactions.
- **Industry Adoption**: If you are using or developing a website or web application that interacts with a database or handles complex data, there is a high chance that you will use Node.js behind the scenes.
- **Key Characteristics**: Node.js is efficient, scalable, and has a large community of developers and maintainers around the world.

## Browser vs. Node Runtime Environment

- **Browser Environment**: Primarily designed for front-end web development, runs client-side JavaScript.
- **Node Runtime Environment**: Primarily designed for back-end web development, runs server-side JavaScript.
- **API Differences**: The environment determines the APIs available:
  - **Browser**: Access to the DOM API, but restrictions for accessing the local file system.
  - **Node**: Access to almost all system resources, including the file system, but not the DOM.

## Global Objects

- **Browser Global Object (`window`)**: Provides access to browser-related functionalities:
  - Methods for manipulating the DOM.
  - Managing cookies.
  - Handling browser events.

- **Node.js Global Object (`global`)**: Provides access to Node.js specific functionalities:
  - Built-in modules for working with local files.
  - Networking capabilities.
  - Interacting with the operating system.

## Version Control

- **Browser Version**: You have no control over the version of the browser environment that your users will use to visit your website.
- **Node.js Version**: You can choose the version of Node.js that you want to use in your server.

## Importance of Node.js

- **Full-Stack Development**: Node.js has transformed web development by enabling developers to use JavaScript to build both the front-end and the back-end of full-stack applications.
- **Efficiency**: The development process is more efficient because developers don't need to learn a new programming language just for developing the back-end.
- **Impact**: Node.js is a powerful, scalable, and versatile tool that has become very important for developers worldwide.

## Advantages of Node.js

- **Single Language for Full-Stack**: You can implement both the front-end and the back-end of a web application using JavaScript.
  - Reduces the initial learning curve.
  - No need to switch between programming languages.
  - Increases efficiency and productivity.

- **Non-Blocking, Event-Driven Architecture**: Great for developing real-time applications where responsiveness and efficiency are essential for creating a good user experience.

- **Single Thread and Event Loop**: Can effectively handle a large number of simultaneous requests and Input-Output operations.
  - Perfect for applications that require handling multiple requests simultaneously.

- **Large Community**: Thousands of developers around the world constantly maintain Node.js and add new features.
  - Many learning resources available.
  - Easy to find answers to questions.

- **npm (Node Package Manager)**: A powerful tool that allows you to install and manage packages and modules for your projects.
  - Packages available for many purposes: handling HTTP requests, working with databases, formatting dates and times, testing code, and more.
  - Reuse code written, tested, and shared by other developers.
  - Makes workflow faster and more efficient.

- **Cost-Effective**: Node.js is free and open source.
  - Packages, libraries, and associated tools are also primarily free.
  - Important factor when optimizing budget.

## Disadvantages of Node.js

- **Single-Threaded Limitation**: Only runs one thread at a time, meaning it can only handle one operation at a time.
  - While architecture allows efficient handling of concurrent (simultaneous) requests, CPU-intensive tasks may block the main thread and result in performance issues.
  - Examples of CPU-intensive tasks: complex mathematical operations, image and video processing, cryptography.
  - Ways to overcome this exist, but usually increase application complexity.

- **Asynchronous Programming**: Node.js relies on asynchronous programming.
  - A task that may take a long time to run is started, but instead of waiting until it's completed, the main program continues running while the asynchronous task runs in parallel.
  - When the task is completed, the program handles the result.
  - Often involves "callbacks," which are functions that define what happens when asynchronous operations are completed.
  - Can potentially make code more difficult to read, understand, and debug.

- **Package Quality Concerns**: When choosing packages from npm, some may not be constantly maintained and may introduce vulnerabilities into your application.
  - Developers should evaluate each package carefully.
  - Check if packages follow quality and security best practices.

## Threads

- **Thread**: A path of execution within a process, like a computer program that is currently running.

## NVM (Node Version Manager)

- **NVM**: A tool for managing multiple versions of Node.js on the same computer.
- **Purpose**: Helps you switch between different versions of Node.js for different projects easily.
- **Recommendation**: Installing NVM before Node.js is recommended for future flexibility.

## Installing NVM on macOS/Linux

- **Xcode Command Line Tools (macOS)**: Must be manually installed before running the NVM install script on macOS.

```bash
xcode-select --install
```

- **Verify Xcode Installation**:

```bash
xcode-select --version
```

- **Download and Execute NVM Installation Script**: Run one of these commands:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

- **Terminal Restart**: You might need to restart your terminal when the process is completed to load the new command and configuration.

- **Verify NVM Installation**:

```bash
nvm -v
```

## Installing Node.js with NVM on macOS/Linux

- **Install Latest LTS Version**: To install the latest Long-Term Support (LTS) version of Node.js:

```bash
nvm install --lts
```

- **LTS (Long-Term Support)**: This version is usually recommended because it prioritizes stability, reliability, and security over new or experimental features.
  - Thoroughly tested and ready for production.
  - Guaranteed to have longer support periods with a focus on bug fixes and security patches.

- **Install Specific Version**: You can install a specific version of Node.js by specifying the version number:

```bash
nvm install <version>
```

Example:

```bash
nvm install 20
```

- **Switch to a Version**:

```bash
nvm use <version>
```

Example:

```bash
nvm use 20
```

- **Check Current Node.js Version**:

```bash
node -v
```

## Installing NVM on Windows

- **Official NVM Support**: Official versions of NVM only support Windows in specific cases.
  - If you have Windows Subsystem for Linux (WSL), you can follow the macOS/Linux guide above.

- **nvm-windows**: A Node.js version management utility for Windows.
  - Completely separate project from the official NVM project.
  - Same purpose: help you work with multiple versions of Node.js on the same device.

- **Before Installing**: It is recommended to uninstall any prior Node installation before installing NVM for Windows.

- **Installation Steps**:
  - Go to the Releases section of the official repository: `https://github.com/coreybutler/nvm-windows/releases`.
  - Download the latest installer.
  - Follow the instructions.

- **Terminal Restart**: You might need to restart your terminal if the `nvm` command is not immediately available.

- **Verify Installation**:

```powershell
nvm -v
```

## Installing Node.js using NVM for Windows

- **Install Latest LTS Version**:

```powershell
nvm install lts
```

- **Install Specific Version**:

```powershell
nvm install <version>
```

Example:

```powershell
nvm install 20
```

- **Switch to a Version**:

```powershell
nvm use <version>
```

Example:

```powershell
nvm use 20
```

- **Check Current Node.js Version**:

```bash
node -v
```

## Basic NVM and Node.js Commands

- **Note on Commands**: All commands work for NVM installed on macOS/Linux, including WSL. They may work differently or may not work at all for `nvm-windows`. Alternative commands for `nvm-windows` are provided when possible.

### PowerShell Execution Policy (Windows)

- **Default Execution Policy**: PowerShell's default execution policy is `Restricted`, which prevents scripts from running as a security measure.

- **Run PowerShell as Administrator**: Right-click on PowerShell, then click "Run as Administrator".

- **Check Current Execution Policy**:

```powershell
Get-ExecutionPolicy
```

- **Set Execution Policy to RemoteSigned**: Allows local scripts and `npm` to run:

```powershell
Set-ExecutionPolicy RemoteSigned
```

- **After Setting Policy**: Close the administrator window of PowerShell and open a non-admin PowerShell window.

### List All Installed Versions

- **List Installed Versions**: To list all installed versions of Node.js and check the one that is currently being used:

```bash
nvm ls
```

### Set Default Node.js Version (NVM on macOS/Linux Only)

- **Set Default Version**: Sets the default version of Node.js for new terminal sessions:

```bash
nvm alias default <version>
```

Example:

```bash
nvm alias default 22.20.0
```

- **Create Custom Aliases**: Assign a more specific name to a version:

```bash
nvm alias <new_name> <version>
```

Example:

```bash
nvm alias new-api 18.20.8
```

- **Use Custom Alias**:

```bash
nvm use <new_name>
```

Example:

```bash
nvm use new-api
```

### Remove a Version of Node.js

- **Uninstall a Version**:

```bash
nvm uninstall <version>
```

Example:

```bash
nvm uninstall 20.19.5
```

- **Remove by Major Version (NVM on macOS/Linux)**: You can remove a version by running the `uninstall` command with a major version like `22` or `20`:

```bash
nvm uninstall 20
```

If you have multiple releases for that major version installed, like `20.14.0` and `20.12.2`, the latest version will be removed first. Running `nvm uninstall 20` will remove `20.14.0` first.

### Check Node.js Version

- **Check Current Version**:

```bash
node -v
```

### Check npm Version

- **npm**: A package manager for Node.js used to install, publish, and manage software packages. Automatically installed when you install Node.js.

- **Check npm Version**:

```bash
npm -v
```

### Run a JavaScript File

- **Execute JavaScript File**: Runs the JavaScript file in the currently active Node.js runtime:

```bash
node <file.js>
```

Example:

```bash
node app.js
```

### Create a Node.js Project

- **Initialize Project**: Creates a new Node.js project by creating a `package.json` file that tracks its details and dependencies:

```bash
npm init
```

- **Interactive Setup**: The `npm init` command walks you through an interactive CLI guide for setting up the `package.json` file.
  - Asks questions for project name, description, version, etc.

- **Default Setup**: To start with a default `package.json` file:

```bash
npm init -y
```

or

```bash
npm init --yes
```

### Install a Package

- **Install Specific Package**:

```bash
npm install <package>
```

Example:

```bash
npm install express
```

### Install All Dependencies

- **Install Dependencies**: To install all dependencies listed in the `package.json` file of a project:

```bash
npm install
```

# --assignment--
   
Review the Node JS introductory topics and concepts.
