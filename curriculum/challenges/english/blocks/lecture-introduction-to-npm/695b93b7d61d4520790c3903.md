---
id: 695b93b7d61d4520790c3903
title: What Is npm?
challengeType: 19
dashedName: what-is-npm
---

# --description--

When you build projects in JavaScript, you often need extra tools to help you get things done. Even simple apps may need features like saving data, logging in, routing to move between pages, and so on.

Instead of writing all of this code from scratch, you can use open-source packages that other developers have already built and shared.

This is where npm comes in. npm is a huge online registry of open-source software. Think of it like an app store for code — you can search for what you need, install it, and start using it in your project.

Many people think npm stands for "Node Package Manager," but that's not its official meaning. In older npm documentation, it was described as a "recursive bacronymic abbreviation for 'npm is not an acronym.'" In other words, npm doesn't officially stand for anything.

Today, npm refers to three related parts:

* The website npmjs.com, where you can look up packages in the registry.
    
* The npm registry, which is a large public database that stores all the packages.
    
* The npm CLI tool that's installed with Node.js and lets you install and manage packages.
    

For example, if you need to manage state, handle dates, send emails, or make HTTP requests in your project, there's probably an npm package that already does that. With a simple `npm install` command, you can start using this ready-made software instead of doing all the work yourself.

npm also helps you manage your project dependencies. This means it keeps track of the packages you use in your projects, and the version of each of those packages. It does this with the `package.json` and `package-lock.json` files, which you'll learn about in future lessons.

Yarn, PNPM, and Bun are some alternatives to npm that have become popular over time. While each of them offer benefits in specific areas like installation speed and storage efficiency, npm is still the most widely used.

In upcoming lessons, you'll learn various npm commands, how to install packages, about the `package.json` and `package-lock.json` files, and even how to publish your own package to the npm registry. 

# --questions--

## --text--

What does npm provide to developers?

## --answers--

A platform for deploying websites directly to the cloud.

### --feedback--

It helps developers avoid reinventing the wheel by using ready-made solutions.

---

A browser-based tool for testing APIs.

### --feedback--

It helps developers avoid reinventing the wheel by using ready-made solutions.

---

A database system for storing user data.

### --feedback--

It helps developers avoid reinventing the wheel by using ready-made solutions.

---

A registry of prebuilt software packages that solves common problems.

## --video-solution--

4

## --text--

Which of the following is *not* one of the three parts that npm refers to?

## --answers--

The website, npmjs.com

### --feedback--

Think about the three main components that make up npm and how they all work together.

---

The Node.js runtime

---

The package registry

### --feedback--

Think about the three main components that make up npm and how they all work together.

---

The command-line tool

### --feedback--

Think about the three main components that make up npm and how they all work together.

## --video-solution--

2

## --text--

What does the `npm install` command allow you to do?

## --answers--

Create a new Node.js project from scratch

### --feedback--

Think about how developers reuse existing solutions instead of writing everything from scratch.

---

Run your Node.js application on a local server

### --feedback--

Think about how developers reuse existing solutions instead of writing everything from scratch.

---

Add prebuilt packages to your project for common tasks

---

Uninstall unused dependencies from your project

### --feedback--

Think about how developers reuse existing solutions instead of writing everything from scratch.

## --video-solution--

3
