

# Command Documentation

This document provides detailed information about the available commands in the project and how to use them effectively. Clear documentation for these commands is essential for enabling contributors to understand their functionalities and contribute more effectively.

## Command: `audit-challenges`

The `audit-challenges` command is used to ensure the integrity and correctness of the challenges within the project. It consists of two distinct steps:

1. **Configuration Setup**: The command starts by setting up the project's configuration using the `ppm` (or package manager) tool with the argument `Tun create:config`. This step ensures that the necessary configuration settings are established for the auditing process.

2. **Challenge Auditing**: After the configuration setup, the command utilizes the `ts-node` TypeScript execution environment to run a specific TypeScript script located at `tools/challenge-auditor/index.ts`. This script is responsible for thoroughly auditing the challenges within the project. It likely analyzes challenge-related data, identifies potential issues, and generates reports to ensure that challenges are functioning correctly.

**Usage:**

To execute the `audit-challenges` command, follow these steps:

```bash
npm run audit-challenges
````

## Command: `analyze-bundle`

The `analyze-bundle` command allows you to analyze the webpack bundle of the project using the "webpack-bundle-analyzer" tool. This tool provides valuable insights into the composition and size of the bundle, enabling you to optimize and better understand your project's frontend asset distribution.

**Usage:**

To utilize the `analyze-bundle` command, follow these steps:

```bash
npm run analyze-bundle
```

## Command: `prebuild`

The `prebuild` command is executed automatically before the actual build process begins. It is responsible for performing certain preparatory steps or tasks to ensure a smooth and successful build. In this specific case, the command executes the `npm-run-all` tool with the argument `create`.

**Usage:**

The `prebuild` command is invoked automatically before the build process. Therefore, you do not need to run it explicitly. It is configured to perform necessary setup or preparation that is essential for the subsequent build steps.


## Command: `build`

The `build` command is a key step in the project's development workflow. It is used to trigger the build process, which compiles, bundles, and prepares the project's source code for deployment or distribution.

**Usage:**

To initiate the build process, execute the following command:

```bash
npm run build
````

## Command: `build workers`

The `build workers` command is used to trigger the build process specifically for the workers in the project. Workers are components or modules designed to perform background tasks or parallel processing.

**Usage:**

To initiate the build process for workers, execute the following command:

```bash
cd ./client && pnpm run prebuild
``````

## Command: `build:client`

The `build:client` command is used to initiate the build process specifically for the client-side of the project. This process involves compiling, bundling, and preparing the client code for deployment or distribution.

**Usage:**

To start the client build process, execute the following command:

```bash
cd ./client && pnpm run build
````

## Command: `build:curriculum`

The `build:curriculum` command is used to initiate the build process specifically for the curriculum section of the project. This process involves compiling, bundling, and preparing the curriculum-related content for deployment or distribution.

**Usage:**

To start the curriculum build process, execute the following command:

```bash
cd ./curriculum && pnpm run build
``````
# Command Documentation

This document provides detailed information about the available commands in the project and how to use them effectively. Clear documentation for these commands is essential for enabling contributors to understand their functionalities and contribute more effectively.

## Command: `build:server`

The `build:server` command is used to initiate the build process specifically for the server-side of the project. This process involves compiling, bundling, and preparing the server code for deployment or distribution.

**Usage:**

To start the server build process, execute the following command:

```bash
cd /api-server && pnpm run build
````
# Command Documentation

This document provides detailed information about the available commands in the project and how to use them effectively. Clear documentation for these commands is essential for enabling contributors to understand their functionalities and contribute more effectively.

## Command: `challenge-editor`

The `challenge-editor` command is used to manage and interact with the challenge editor component of the project. This command likely orchestrates various tasks related to editing challenges, including user interface setup, configuration, and interactive functionality.

**Usage:**

To utilize the `challenge-editor` command, execute the following command:

```bash
npm-run-all -p challenge-editor:*
