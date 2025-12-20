---
id: 6882913b2b58c2738eaaa2d1
title: What Is a .gitignore File, and What Are Some Items That Should Be Included Inside It?
challengeType: 19
dashedName: what-is-a-gitignore-file-and-what-are-some-items-that-should-be-included-inside-it
---

# --description--

We have briefly touched upon the `.gitignore` file in a previous lesson. But what exactly is this file, and what should you put in it?

The `.gitignore` file is a special type of file related to Git operations. The name suggests that this file is used to tell Git to ignore things, and that's the common use case. But what it actually does is it tells Git to stop tracking a file. This distinction is important, and will be clarified later.

What should you actually put in this file? Well, you should list things that you don't want committed.

The first would be your secrets files. This may be something like a `.env` file, where you've stored your API keys for your application to consume. It may be a private GPG key file that your app needs to use for authentication. Anything that contains sensitive information you would not want leaked to the public should be ignored with `.gitignore`. Even if your repository is private, you should act as if it is public - treat it like anyone can see it, and take care not to commit secrets.

Let's take a look at what our file might look like right now:

```sh
# Secrets
.env
github.key
```

We've told Git to ignore the `.env` file, where we are keeping our secrets. We've also told Git to ignore a `github.key` file, which contains a private GPG key.

The next thing to consider are the packages, or dependencies, that your project uses. As an example, when you are working with a Node.js project, you probably install packages from npm. These packages go into a `node_modules` folder in your project, so your code can import and consume them.

But the `node_modules` folder gets prohibitively massive, and you definitely don't want to commit all of those packages and track the changes each time you update one. Instead, you commit your `package.json` file, and the relevant lockfile (e.g. `package-lock.json`, `pnpm-lock.yaml`). These files tell npm what packages and versions to install, so a contributor can install the same dependencies you are using without having to commit them to the repository.

Let's go ahead and add `node_modules` to our `.gitignore` file:

```sh
# Secrets
.env
github.key

# Packages
node_modules
```

Now, let's touch on an important syntax thing for `.gitignore` files. When you add an entry like `node_modules`, Git will ignore anything that matches that pattern. This means it will ignore the `node_modules` directory in the root of your project, but would also ignore the `node_modules` in the `client` directory of your project.

If you only want to ignore something at the root, you can prefix the line with a forward slash. `node_modules` would become `/node_modules`. This would ignore the root `node_modules` directory, but not the `client/node_modules` directory. We do not want that, so let's leave our entry as just `node_modules`.

The next thing you want to consider ignoring are your build outputs. For example, compiling a TypeScript project might result in a `dist` folder for the JavaScript output. You don't want to commit that output, because it bloats the Git history. Instead, you want to ignore that output - contributors can reproduce it for themselves by running the same build command.

Let's go ahead and ignore the `dist` folder:

```sh
# Secrets
.env
github.key

# Packages
node_modules

# Outputs
dist
```

Sometimes, a misplaced file can cause the TypeScript compiler to break, which results in our JavaScript output ending up all over the place. Since we are exclusively writing TypeScript, let's go ahead and use glob syntax to ignore all JavaScript files:

```sh
# Secrets
.env
github.key

# Packages
node_modules

# Outputs
dist
*.js
```

Some other common outputs you might ignore are the `coverage` directory, for the results of unit test coverage, an `.angular` directory if you are using Angular, a `.next` directory if you are using NextJS, and so on.

For now, we can stick with what we have here. If you're using a framework that generates files, you should confirm in their documentation what you need to add to the `.gitignore`.

The fourth batch of things to ignore are IDE files. Jetbrains products, for example, might use an `.idea` folder for IDE-specific configurations. Visual Studio Code uses a `.vscode` folder.

These are often good to ignore, because they'll contain files specific to your local environment that other contributors won't need (because they use their own configurations). Let's go ahead and add the Visual Studio Code directory, since that is what we are using as our IDE.

```sh
# Secrets
.env
github.key

# Packages
node_modules

# Outputs
dist
*.js

# IDE
.vscode
```

But our `.vscode` folder does contain a `settings.json` file, which includes some workspace-specific stuff that might be useful for our contributors - this file allows them to configure their extensions and environment to better mirror our own.

So let's go ahead and use negation syntax to "unignore" that file:

```sh
# Secrets
.env
github.key

# Packages
node_modules

# Outputs
dist
*.js

# IDE
.vscode
!.vscode/settings.json
```

If you are on MacOS, you may be familiar with the `.DS_STORE` file. This file contains metadata that Finder uses to determine things like how to render the directory (e.g. with thumbnails, or as a list). Similarly, Windows users might see a hidden `Thumbs.db` file, which caches thumbnails for the directory.

It's generally a good idea to ignore these files, since they're a personal setting that have no impact on the project. Let's add both of them:

```sh
# Secrets
.env
github.key

# Packages
node_modules

# Outputs
dist
*.js

# IDE
.vscode
!.vscode/settings.json

# System Files
.DS_STORE
Thumbs.db
```

A quick note about ignoring previously committed files. Say you've accidentally committed your `dist` directory earlier, but now you want to remove it and ignore it. You cannot just add it to your `.gitignore` file - this does not make previously committed content disappear, it tells Git to stop tracking the file. So if you ignore a file that's already committed, Git won't track any changes but it also won't track the deletion of the file.

Instead, you'll first need to delete the file. Create a commit with that deletion. Then you can add the item to your `.gitignore` and create a second commit with that update. Going forward, when that file is created again, Git will ignore it and it won't show up in your commits.

Finally, if you're working on a project in a different language, such as Python, the items you need to ignore will be different than what we've covered here. GitHub maintains a very helpful repository of `.gitignore` templates for various languages and frameworks. You can find that list at <a href="https://github.com/github/gitignore" target="_blank">https://github.com/github/gitignore</a>.

With that, you're now ready to avoid committing files you don't want in your repositories!

# --questions--

## --text--

What is the primary purpose of a `.gitignore` file?

## --answers--

To delete files from your repository.

### --feedback--

Think about what the `.gitignore` file prevents from happening during Git operations.

---

To tell Git to stop tracking specific files.

---

To encrypt sensitive data in your repository.

### --feedback--

Think about what the `.gitignore` file prevents from happening during Git operations.

---

To compress large files before committing them.

### --feedback--

Think about what the `.gitignore` file prevents from happening during Git operations.

## --video-solution--

2

## --text--

If you've already committed a file to Git and later add it to `.gitignore`, what will happen?

## --answers--

The file will be automatically deleted from the repository.

### --feedback--

Consider what the lesson said about ignoring previously committed files.

---

The file will remain in the repository but future changes won't be tracked.

---

Git will throw an error until you resolve the conflict.

### --feedback--

Consider what the lesson said about ignoring previously committed files.

---

The file will be hidden but still tracked by Git.

### --feedback--

Consider what the lesson said about ignoring previously committed files.

## --video-solution--

2

## --text--

What syntax would you use in a `.gitignore` file to ignore all files in a directory, but then make an exception for one specific file?

## --answers--

Use glob wildcards (`*`) and then negate (`!`) the specific file.

---

Use comments (`#`) to manually specify exceptions.

### --feedback--

Remember the example with the `.vscode` directory and `settings.json` file.

---

Use a slash (`/`) to indicate directory structures.

### --feedback--

Remember the example with the `.vscode` directory and `settings.json` file.

---

Use brackets (`[]`) to create pattern exclusions.

### --feedback--

Remember the example with the `.vscode` directory and `settings.json` file.

## --video-solution--

1
