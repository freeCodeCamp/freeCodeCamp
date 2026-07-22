---
id: 692ab9f91d74951aeba05c00
title: What Are npm Scripts?
challengeType: 19
dashedName: what-are-npm-scripts
---

# --description--

Now you'll learn about npm scripts.

Before we dive in, let's review some important concepts:

* **npm** is a command-line tool that you can use to install and manage JavaScript packages.
    
* A **package** is a directory that groups related code in a logical structure.
    
* A **script** is a sequence of instructions or commands written in a scripting programming language.
    

**npm scripts** are custom commands that you can define in the `package.json` file of your application.

They are helpful for automating tasks and workflows that you will use repeatedly throughout the development, testing, and deployment phases of your project.

For example, one use case for npm scripts is customizing `npm start` to start your entire development environment. Instead of manually writing all the commands one-by-one every time you need to start your development environment, you can just run `npm start` and the entire process will be executed.

You can also use npm scripts to automate linting throughout your codebase and for running test suites, among other use cases.

They are very powerful, so let's check out their fundamentals.

## How to Create a package.json File

To be able to create and run custom npm scripts, you'll need a `package.json` file.

The `package.json` file is essential for Node.js projects. This file contains the metadata, dependencies, and scripts of the project.

As a reminder, to create a `package.json` file, you must run the `npm init` command in the root directory of your project. Then you can enter in the package name, version, description, and other details in manually, or leave those fields blank to use the default values.

Once you finish this process, you'll have a `package.json` file in the root directory of your project.

If you kept all the default values, you should see these key-value pairs when you open `package.json` in your code editor:

```json
{
  "name": "<project_name>",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```

Notice this key-value pair over here:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

This is where you will specify your npm scripts, under the `scripts` key.

You will see one script there by default, the test script:

```json
"test": "echo \"Error: no test specified\" && exit 1"
```

This is an example of an npm script defined in `package.json`.

Here is the basic syntax for defining an npm script:

```json
"<script_name>": "<commands>"
```

To the left of the colon, we find the script name. Common ones include `run`, `start`, `test`, `build`, `dev`, and `lint`. These names act as "shortcuts" for their underlying commands on the right.

To the right of the colon, we find the underlying commands themselves.

For example:

```json
"scripts": {
  "start": "node app.js"
}
```

To run the script, enter this in the command line:

```bash
npm run <script_name>
```

And that's how you can run any custom scripts defined in `package.json`.

Sometimes you can use this shorthand version without the word `run` to execute scripts:

```bash
npm <script_name>
```

But this only works for specific npm scripts named `start`, `test`, `stop`, and `restart`.

Going back to our example, if we have this in `package.json`:

```json
"scripts": {
  "start": "node app.js"
}
```

To run the npm script, you need to enter `npm run start` in the command line. When you do that, the actual underlying command that's executed is `node app.js`.

Since this npm script has a shorthand version, you could also use `npm start` and the result would be the same.

In this case, you're just replacing a simple command, `node app.js`, with another one, `npm start`. But imagine if you had a sequence of complex commands that need to be executed in sequence or in parallel, and you could just use `npm start` to run all of them. That would save you a lot of time, right? That's where the power of npm scripts really shines.

Here's a quick overview of some of the most commonly used npm scripts:

* `npm run`: used to run a custom npm script.
    
* `npm start`: used to start the main application or development server.
    
* `npm lint`: used to run a code style checker to check if your code meets code style standards and best practices.
    
* `npm test`: used to run the project's test suite.
    
There are many other npm scripts for different purposes, but these are some of the most common ones you'll see.

Also, a common convention is using a colon to group related scripts under the same namespace. For example, `start:server` and `start:ui`.

## How to Run Commands Sequentially

If you need to run multiple commands in a sequence, you have two options. You can either use the logical AND operator (`&&`) or the semicolon (`;`). Let's check out their differences.

The logical AND operator runs the next command only if the first one runs successfully.

For example:

```json
"scripts": {
  "build": "webpack --mode production",
  "start": "npm run build && node server.js"
}
```

Notice that there is a logical AND operator in the `start` command:

```json
"start": "npm run build && node server.js"
```

Here, `npm start` will try to run `npm run build` first, and only if this script runs successfully, `node server.js` will be executed.

This is a very common approach because it ensures reliability and prevents wasting time and resources on subsequent commands that may fail or throw errors if the previous one fails.

Alternatively, you can use the semicolon operator to run commands sequentially, regardless of whether the previous command was successful or not.

In our example, this simple change would have an important impact on how the commands will run:

```json
"scripts": {
  "build": "webpack --mode production",
  "start": "npm run build; node server.js"
}
```

Focus on the `start` command again:

```json
"start": "npm run build; node server.js"
```

Now, since we are using a semicolon instead of the `&&` operator, the `node server.js` command will always run after `npm run build`, even if `node server.js` was not successful.

```json
"start": "npm run build; node server.js"
```

## How to Run Commands Concurrently

If you need to run commands concurrently (in parallel), you can use the `&` operator.

```json
"scripts": {
  "start:server": "node server/index.js",
  "start:client": "npm run build:watch",
  "dev": "npm run start:server & npm run start:client"
}
```

However, you should know that this option runs the processes in the background.

This means that, if you run them in the same terminal session, you may see their combined output, which may be difficult to understand.

Other options for running commands concurrently include tools like `concurrently` and `npm-run-all`.

## How to Pass Arguments to npm Scripts

If you need to pass arguments directly to the command that is being executed within the npm script, you can specify them in the command by writing two hyphens (`--`) followed by the arguments.

The `--` tells npm that everything after it will be arguments for the underlying commands that the npm script will execute.

This is the general syntax:

```bash
npm run <script_name> -- <argument_1> <argument_2> <argument_3>
```

For example, let's say that you define this `npm start` script:

```json
{
  "name": "project-example",
  "scripts": {
    "start": "node app.js"
  }
}
```

How could you specify the port where you want to run your server if you use `npm start`?

Let's say that we want to pass the port directly as a command-line argument. You would write this:

```bash
npm start -- 8000
```

In your code, you can access these arguments in the `process.argv` array using indices:

```bash
process.argv[0] # The path to the node executable.
process.argv[1] # The script file being executed.
process.argv[2] # The first argument (8000).
```

Therefore, you could access and use the port number wherever you need to with `process.argv[2]`. That is the power of command-line arguments combined with npm scripts.

Like you can see, npm scripts are essential tools for simplifying the development workflow. They help you to automate and transform complex and reusable command sequences into simple and consistent shortcuts that you can use in your daily work.

# --questions--

## --text--

Where are npm scripts defined in a Node.js project?

## --answers--

In a `.npmignore` file.

### --feedback--

Think about the file that acts as the central manifest for a Node.js project and its executable commands.

---

Within the `"dependencies"` object of `package.json`.

### --feedback--

Think about the file that acts as the central manifest for a Node.js project and its executable commands.

---

Within the `"scripts"` object of `package.json`.

---

In a separate `npm-config.json` file.

### --feedback--

Think about the file that acts as the central manifest for a Node.js project and its executable commands.

## --video-solution--

3

## --text--

How do you execute an npm script named `build`?

## --answers--

`build npm`

### --feedback--

Think about the command prefix that tells npm you want to execute one of the custom commands defined in the `"scripts"` section.

---

`npm run build`

---

`node build`

### --feedback--

Think about the command prefix that tells npm you want to execute one of the custom commands defined in the `"scripts"` section.

---

`run build`

### --feedback--

Think about the command prefix that tells npm you want to execute one of the custom commands defined in the `"scripts"` section.

## --video-solution--

2

## --text--

What is the purpose of the double hyphen (`--`) when running an npm script like `npm run start -- 5`?

## --answers--

It signals that the script should be run in silent mode.

### --feedback--

Think about how a complex command utility (like Jest or Webpack) receives its specific flags when run through an npm shortcut.

---

It tells npm to pass the remaining arguments to the underlying script command.

---

It means the script must be executed with elevated administrative privileges.

### --feedback--

Think about how a complex command utility (like Jest or Webpack) receives its specific flags when run through an npm shortcut.

---

It indicates that the script should be run in parallel with other defined scripts.

### --feedback--

Think about how a complex command utility (like Jest or Webpack) receives its specific flags when run through an npm shortcut.

## --video-solution--

2
