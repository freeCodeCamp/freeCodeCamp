---
id: 68829116a80ecd73681261b1
title: What Are Good Practices for Remaining in Sync with Your Remote Counterparts?
challengeType: 19
dashedName: what-are-good-practices-for-remaining-in-sync-with-your-remote-counterparts
---

# --description--

We've talked a bit about using branches to work on isolated changes to avoid soiling your `main` branch. But what does that mean, and why is it important?

If you commit changes directly to your `main` branch, and the upstream repository accepts other changes that are not yours, you will end up with something called a "divergent history". This means that the commits on your `main` branch are no longer aligned with the commits on the upstream `main` branch. And it makes syncing the upstream changes a nightmare.

So, let's say you've been following good branching practices, and this isn't an issue. If you followed along with our previous lessons, you should have a fork of a repository that you've cloned locally, and you should have an upstream remote that points to the original repository.

If you did not do this, here's a quick reminder. You'll want to fork a repository, clone your fork locally, and run this command:

```sh
git remote add upstream <url>
```

Replace `<url>` with the SSH URL for the original repository, NOT your fork.

With a properly configured upstream, you can run the following series of commands to pull in the latest upstream changes:

```sh
git checkout main
git fetch upstream
git merge upstream/main
```

What do these do? Well, you've learned about `git checkout`, so the first command ensures that you are on your `main` branch locally.

The second command, `git fetch upstream`, tells Git to go get the latest changes that are on your upstream remote (which is the original repo). However, unlike a pull, Git will not automatically update your branch. This is important, because your `main` branch locally is connected to the `main` branch on your fork - not the `main` branch on the original repo! Performing a git pull may result in unexpected behavior.

The final command, `git merge upstream/main`, tells Git to merge the latest changes from the `main` branch in the upstream remote into your current branch - which is your local `main` branch, because that's what we checked out.

But what if the merge fails? What if you've accidentally committed to `main`, and Git cannot merge the divergent histories? Well... assuming you have not made any pull requests from your `main` branch, you can do a hard reset to force Git to update your branch.

```sh
git reset --hard upstream/main
```

The `git reset` command allows you to reset the current state of a branch. Passing the `--hard` flag tells Git to force the local files to match the branch state. This ensures that you have a clean slate to work from. And passing `upstream/main` tells Git you want your current branch (which is `main`) to match the `main` branch of the upstream remote. Be cautious with this command - any time you forcibly update a Git history, weird and unfortunate things may happen.

Once you've got your local `main` branch updated correctly, it's important to push that state up to your remote fork (which should be `origin`, if you have followed our lessons). To do this, you can run:

```sh
git push
```

This will push the current state up to your remote fork. But if you've had to do a hard reset to clean up the history, it's possible your remote fork also has a divergent history and the push will fail.

You can rectify that by forcing the push:

```sh
git push --force
```

**Be careful with this command**. Doing a force push effectively rewrites your remote history, and if you've done something incorrectly then a forced push becomes a nightmare to untangle.

Pushing the synced changes up to your remote fork is important because it helps you ensure that you can safely clone the fork with the latest changes if you've lost your existing local repository.

And once you've got your `main` branch synced, you are free to create a new branch from that state to start working on another contribution - with the latest version of the original codebase!

# --questions--

## --text--

What's the main reason you should avoid committing changes directly to your `main` branch when working with forked repositories?

## --answers--

It creates duplicate commits.

### --feedback--

Think about what happens when your branch and the original repository evolve separately.

---

It causes a "divergent history" making it difficult to sync with upstream.

---

Git doesn't allow commits to the main branch.

### --feedback--

Think about what happens when your branch and the original repository evolve separately.

---

It automatically deletes your local changes.

### --feedback--

Think about what happens when your branch and the original repository evolve separately.

## --video-solution--

2

## --text--

Which series of commands will correctly update your local `main` branch with changes from the original repository?

## --answers--

`git checkout main`; `git pull upstream`

### --feedback--

Consider the step-by-step process needed to get upstream changes without disrupting your fork.

---

`git pull upstream main`

### --feedback--

Consider the step-by-step process needed to get upstream changes without disrupting your fork.

---

`git checkout main`; `git fetch upstream`; `git merge upstream/main`

---

`git fetch upstream/main`; `git merge`

### --feedback--

Consider the step-by-step process needed to get upstream changes without disrupting your fork.

## --video-solution--

3

## --text--

If you've accidentally committed to your `main` branch and can't merge upstream changes, what command can you use to forcibly reset your `main` branch to match the upstream (assuming you haven't made any pull requests)?

## --answers--

`git checkout upstream/main`

### --feedback--

Which command completely resets your branch to match another branch's state?

---

`git reset --hard upstream/main`

---

`git rebase upstream/main`

### --feedback--

Which command completely resets your branch to match another branch's state?

---

`git clean upstream/main`

### --feedback--

Which command completely resets your branch to match another branch's state?

## --video-solution--

2
