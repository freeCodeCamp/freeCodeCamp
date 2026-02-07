---
id: 692aba0978ca391f10455b4a
title: How Can You Publish a Package to the npm Registry?
challengeType: 19
dashedName: how-can-you-publish-a-package-to-the-npm-registry
---

# --description--

Let's learn about the npm registry, where you can share your JavaScript packages with the world.

The **npm registry** is a database of public and private packages.

Developers and organizations can publish packages to this registry to share their tools with their communities and team members, and in many cases, with all other Node.js developers.

Packages can be either public or private. Public packages can be accessed by anyone. Private packages can only be accessed by specific users or members of an organization.

In the npm registry, you can share what you've built with the world with just a few clicks. Sounds great, right?

Let's see how you can publish a package step by step.

## Step 1: Create an Account

The first step is to create a free npm account. To create your account:

* Go to [https://www.npmjs.com/signup](https://www.npmjs.com/signup).
    
* Fill in the form. You will need to enter your username, email, and password.
    

Please note that, according to the sign-up page, "your email address will be added to the metadata of packages that you publish, so it may be seen publicly."

## Step 2: **Log in**

Once you have an npm account, you will need to log in on your terminal by running this command:

```bash
npm login
```

Then you'll need to authenticate with your account information.

## **Step 3: Create a** `package.json` file

Before you publish your package, you will need to create a `package.json` file with this command:

```bash
npm init
```

(If your project already has one, you can go directly to **step 4**).

You will need to enter this information for your `package.json` file:

* **name**: This is usually the name of your project/directory. If you are planning to make your package public, this name must be unique, unless you use scopes (we'll cover this in just a moment).
    
* **version**: You should start with `"1.0.0"`, the default value. This represents the initial version of your package and you can update it as you make changes to the package.
    
* **main**: The entry point of your project. This is `index.js` by default.
    
* **author**: You can write your name or preferred handle.
    
* **license**: Choose a specific license. Some examples include MIT and ISC.
    
* **description**: A brief summary of your package.
    

When choosing the name of your package, make sure it's not already taken in the npm registry. To do this, you can go to the following URL, replacing `<your-package-name>` with the name of your package:

```bash
https://www.npmjs.com/package/<your-package-name>
```

If there isn't a package at that URL, the package name is available and you can use it.

However, if the name is already taken and you really want to keep it, you can use what is known as a **scope** to publish it.

### **Scopes**

When you create a user or organization account in the npm registry, you are granted a scope with your username or the name of your organization.

Scopes are helpful to avoid name conflicts because you can publish your package under your scope, even if another package with the same name already exists.

The name of a scoped package starts with the scope name. For example, in `package.json`, you would find this key-value pair:

```bash
"name": "@<scope-name>/<your-package-name>"
```

You can make this change directly in the file if you need to, or you can create the `package.json` file with the scope from the start by adding `--scope=@<scope-name>` to the `npm init` command.

```bash
npm init --scope=@<scope-name>
```

The scope name can be your username if you are using a personal account, or the name of your organization if you are using an organizational account.

## Step 4: Create README.md

The README of your package is a markdown file where you describe what your package does and its intended usage.

Some examples of important content that you may want to include are:

* Its purpose.
    
* How to install it.
    
* Important dependencies and considerations.
    
* How to get started.
    
* Sample code snippets.
    
* Contribution guidelines (if you accept contributions).
    
* Link to a changelog file where you track the changes that have been made in different versions.
    

The structure of the README is flexible, though. You can adapt it to fit your needs.

## **Step 5:** `.npmignore`

The `.npmignore` file tells the npm registry what files to include and what files to ignore when publishing your package. It's very important to prevent sharing sensitive information such as private keys, passwords, and personal information.

In this file, you can write patterns to specify what files, directories, and types of files are ignored. It follows the same pattern-matching rules as the `.gitignore` files.

If you have worked with Git, you may think that this file sounds very similar to `.gitignore`, right? Well, that's because it is. According to the npm documentation, "If there's no `.npmignore` file, but there is a `.gitignore` file, then npm will ignore the stuff matched by the `.gitignore` file."

You should also know that npm looks for `.npmignore` and `.gitignore` files in all subdirectories of your package, not just the root directory.

By default, these paths are automatically ignored, so you don't need to add them to `.npmignore`:

* `.*.swp`
    
* `._*`
    
* `.DS_Store`
    
* `.git`
    
* `.gitignore`
    
* `.hg`
    
* `.npmignore`
    
* `.npmrc`
    
* `.lock-wscript`
    
* `.svn`
    
* `.wafpickle-*`
    
* `config.gypi`
    
* `CVS`
    
* `npm-debug.log`
    

The `node_modules` directory is also ignored, except bundled dependencies.

## **Step 6: Publish your package**

Before publishing your package to the npm registry, you should test it by running this command:

```bash
npm install <full-path-to-package-directory>
```

Once you are ready to publish it, the command will depend on the type of package: scope vs. unscoped.

If your package is unscoped, run this command:

```bash
npm publish
```

If your package is scoped, it will be published as a private package by default (if this feature is available in your account). If you want to make it public, you will need to add `--access public` to the command.

```bash
npm publish --access public
```

To see your public package, go to this URL:

```bash
https://npmjs.com/package/<your-package-name>
```

You should see an indication of the visibility of your package (public or private) below the package name.

## **Step 7 (Optional): Install Your Package**

Now that you are all set up, you can install your package in a Node.js project with this command:

```bash
npm install <your-package-name>
```

## Updating Your Package

If you need to make changes to your package after publishing it, you can update the package version in `package.json`.

This is the standard convention for semantic versioning:

* **First release:** `1.0.0`.
    
* **Patch release:** Increment the third digit. For example, updating from `1.0.0` to `1.0.1`.
    
* **Minor release:** Increment the middle digit and reset the last digit to zero. For example, updating `1.0.0` to `1.1.0`.
    
* **Major release:** Increment the first digit and reset the middle and last digits to zero. For example, updating `1.1.0` to `2.0.0`.
    
Great work. Now you know how to publish your package to the npm registry and how to update it to fix bugs and add new features.

# --questions--

## --text--

What is the command used in the terminal to upload a package from your local machine to the npm registry?

## --answers--

`npm install <package-name>`

### --feedback--

This is the command that finalizes the process, making your package available for others to install.

---

`npm start`

### --feedback--

This is the command that finalizes the process, making your package available for others to install.

---

`npm add`

### --feedback--

This is the command that finalizes the process, making your package available for others to install.

---

`npm publish`

## --video-solution--

4

## --text--

What file must be present in a directory to signal to the npm registry that the folder is a complete, installable package?

## --answers--

`README.md`

### --feedback--

Think about the file that contains all the required metadata, dependencies, and configuration for an npm project.

---

`index.js`

### --feedback--

Think about the file that contains all the required metadata, dependencies, and configuration for an npm project.

---

`package.json`

---

`.npmignore`

### --feedback--

Think about the file that contains all the required metadata, dependencies, and configuration for an npm project.

## --video-solution--

3

## --text--

Which action should you take to ensure that sensitive information is **not** included when a package is published?

## --answers--

Temporarily deleting the files from the project folder before running `npm publish`.

### --feedback--

npm uses a specific file to decide what to exclude from the published package.

---

Using the `.ignore` file to list the sensitive files.

### --feedback--

npm uses a specific file to decide what to exclude from the published package.

---

Using the `.npmignore` file to list the sensitive files.

---

Setting the `private` field to `true` in `package.json`.

### --feedback--

npm uses a specific file to decide what to exclude from the published package.

## --video-solution--

3
