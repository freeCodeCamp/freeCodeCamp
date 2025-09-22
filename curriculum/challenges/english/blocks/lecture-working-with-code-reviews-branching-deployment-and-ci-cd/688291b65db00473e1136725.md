---
id: 688291b65db00473e1136725
title: What Is CI/CD, and How Does CI Work with GitHub Actions?
challengeType: 19
dashedName: what-is-ci-cd-and-how-does-ci-work-with-github-actions
---

# --description--

CI stands for Continuous Integration, and CD stands for Continuous Delivery or Continuous Deployment. Together, these processes allow you to automatically deploy changes to your application after ensuring those changes are functional.

In a CI pipeline, you might run your linter and tests against the code. CI pipelines typically run on pull requests to ensure the changes made aren't breaking the app, and also on the `main` branch to ensure it is ready to deploy.

A CD pipeline might also run on pull requests, if you set up a preview environment so you can look at the changes live. But you'll also run it on your `main` branch to continuously deploy changes as they are accepted and merged.

But how do these actually work with GitHub Actions? First, we need to understand what GitHub Actions actually are. GitHub Actions provides ephemeral runners (think like a temporary computer) that allows you to execute specific commands.

Actions are configured with a YAML file. You can have multiple files to specify different actions to run. For example, you might have one file for your CI and another for your CD.

Let's take a look at a basic CI example:

```yml
name: Node.js CI
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  lint:
    name: Lint and Test
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Source Files
        uses: actions/checkout@v4

      - name: Use Node.js v22
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Install Dependencies
        run: pnpm install

      - name: Lint Source Files
        run: pnpm run lint

      - name: Verify Build
        run: pnpm run build

      - name: Run Tests
        run: pnpm run test
```

This is a lot, so let's break it down. Looking at the first section:

```yml
name: Node.js CI
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

The `name` defines the name of the action itself. This appears in areas like the status checks section of a PR. The `on` properties define what's called "workflow triggers" - these are the events that will trigger your action to run.

In this example, we run the action when commits are pushed to `main`, and when a pull request targets `main`. This means the CI runs when someone makes a pull request, and again when we merge it.

The `jobs` section is where you define what your action actually does. The `lint:` key is an arbitrary key that defines the internal name for that job. The `name` property defines the external name for this particular job. And the `runs-on` property defines what kind of environment your action should run in - for this case, we're running it in the latest supported version of Ubuntu.

The `steps` property is where the magic happens. This block defines the actual steps your action should take. Let's take a look at the first block there:

```yml
      - name: Checkout Source Files
        uses: actions/checkout@v4
```

This step has two properties, the `name` the step should have, and a `uses` property. This `uses` property is special, in that it tells the action runner to go get a public action from GitHub and run it, instead of running a command. The `actions/checkout` action handles cloning and setting up the repository within your runner.

```yml
      - name: Use Node.js v22
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10
```

The next two blocks also use third-party actions. These steps set up Node and the pnpm package manager. Both of them have a `with` key, which you can use to pass arguments to those third party actions. Think of this as like passing arguments to a function.

The final four blocks are where the magic really happens.

```yml
      - name: Install Dependencies
        run: pnpm install

      - name: Lint Source Files
        run: pnpm run lint

      - name: Verify Build
        run: pnpm run build

      - name: Run Tests
        run: pnpm run test
```

We have an `Install Dependencies` block, which installs the npm packages. Our `Lint Source Files` block runs the linter, the `Verify Build` block ensures that the Typescript code can compile, and the `Run Tests` block runs the unit tests.

The important thing to know about actions is, by default, if one of these steps fails the remaining ones will be skipped and the entire run will be marked as a failure.

Where do you put your YAML files so you can run these actions? They need to go in a `.github/workflows` directory in your repository for GitHub to find and consume them.

There are a lot of additional things actions can do, and I encourage you to read the documentation and explore existing actions in projects like the freeCodeCamp repository. But for now, you should have a decent understanding of the basics of GitHub Actions and CI/CD!

# --questions--

## --text--

What does the on property define in a GitHub Actions workflow file?

## --answers--

The name of the action.

### --feedback--

Think about when you want your actions to automatically run.

---

The events that trigger the workflow to run.

---

The operating system to run on.

### --feedback--

Think about when you want your actions to automatically run.

---

The steps to execute.

### --feedback--

Think about when you want your actions to automatically run.

## --video-solution--

2

## --text--

Where should GitHub Actions workflow YAML files be placed in a repository?

## --answers--

In the root directory.

### --feedback--

GitHub looks for workflow files in a specific directory structure.

---

In a `.github/actions` directory.

### --feedback--

GitHub looks for workflow files in a specific directory structure.

---

In a `.github/workflows` directory.

---

In a `workflows` directory.

### --feedback--

GitHub looks for workflow files in a specific directory structure.

## --video-solution--

3

## --text--

What happens by default when a step fails in a GitHub Actions workflow?

## --answers--

The workflow continues with a warning.

### --feedback--

Consider how GitHub Actions handles errors in the workflow execution.

---

Only that specific step is marked as failed.

### --feedback--

Consider how GitHub Actions handles errors in the workflow execution.

---

The workflow restarts from the beginning.

### --feedback--

Consider how GitHub Actions handles errors in the workflow execution.

---

Remaining steps are skipped and the run is marked as a failure.

## --video-solution--

4
