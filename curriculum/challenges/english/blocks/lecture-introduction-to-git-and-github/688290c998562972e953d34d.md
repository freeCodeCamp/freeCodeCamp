---
id: 688290c998562972e953d34d
title: How Do You Create a New Branch for Your Repository?
challengeType: 19
dashedName: how-do-you-create-a-new-branch-for-your-repository
---

# --description--

You've previously learned how to commit changes and push them up to your remote repository, but all of that has been on your default `main` branch. That can work for a smaller project, but as you contribute to other open source projects, or as your project grows, branches are essential.

For example, if you fork a repository and make commits to the `main` branch of your fork, you may end up with changes in your fork that the original repository did not accept. This can make it incredibly difficult to update your branch with the changes from the fork that were accepted. Or, when working on your own project, switching between different tasks becomes much more difficult if you are not using branches. Instead, you have to manually keep track of which changes relate to which feature or fix.

But what exactly is a branch? Consider your `main` branch as a highway, with each commit being a car that enters the highway. You may decide you want to go take a look at something, like creating a new feature, so you need to get off of the highway for a bit to go see.

A branch is essentially a deviation from your main history, where you can freely play around with changes for a new feature or a bug fix. If you are happy with your changes, you can get back on the highway by merging the branch into `main`. If you aren't happy with your changes, you can delete the branch and switch back to `main` without accepting the changes.

Before creating a new branch, you view your branches with the `git branch` command. The output might look like this:

```sh
* main
```

Right now we only have the one branch, our default `main` branch. The asterisk (`*`) means that is the branch that you currently have "checked out". You'll learn more about that in a bit.

You can create a new branch with the `git branch` command, with an argument to specify the new branch's name:

```sh
git branch feature
```

This creates a new branch named `feature`. Let's take a look at our branches again with `git branch`:

```sh
  feature
* main
```

We can now see our new branch, but we are still on the `main` branch. We need to switch to our new branch by "checking it out". When you check out a new branch, you're telling Git to load the files in the exact state they were in at that point.

Let's check out our new branch with:

```sh
git checkout feature
```

or

```sh
git switch feature
```

And run `git branch` again to see:

```sh
* feature
  main
```

Notice that the asterisk has now moved to the branch you currently have "checked out".
 
Often times when you create a new branch, you will want to check it out immediately. Instead of creating the branch and then checking it out using two commands, you can create and switch to a branch in one command with:

```sh
git checkout -b feature
```

or

```sh
git switch -c feature
```

So now we've created and checked out a new branch. This branch is a clone of the `main` branch, it has all the same code that `main` did at the time you created the branch. Now, we can add any code to this branch without affecting the `main` branch. We've essentially gotten off the highway to create a feature. If you check your `git status`, you would see something like this:

```sh
On branch feature
nothing to commit, working tree clean
```

Create a new `feature.md` file by running this:

```sh
echo "This is our new feature" > feature.md
```

And now the status will look like this:

```sh
On branch feature
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	feature.md

nothing added to commit but untracked files present (use "git add" to track)
```

Next, it's time to commit your new feature. First, add the file to staging:

```sh
git add feature.md
```

Then, commit the changes:

```sh
git commit -m "my new feature"
```

Finally, push your `feature` branch to your repository:

```sh
git push -u origin feature
```

The `-u` flag connects your local `feature` branch to the remote one, so future pushes can be done with just `git push`.

Next, we will learn how to make a pull request for our new feature!

# --questions--

## --text--

What does creating a new branch in Git allow you to do?

## --answers--

Permanently delete the `main` branch.

### --feedback--

You don't want to delete your `main` branch.

---

Make changes without affecting the `main` branch.

---

Share your code directly with GitHub users.

### --feedback--

Sharing code involves pushing branches and possibly making pull requests.

---

Change the Git version on your local machine.

### --feedback--

Branches don't change the Git software version.

## --video-solution--

2

## --text--

What does the `*` symbol next to a branch name in `git branch` output indicate?

## --answers--

The branch is about to be deleted.

### --feedback--

The asterisk indicates that the branch is "checked out".

---

The branch is the oldest one in the repo.

### --feedback--

The asterisk indicates that the branch is "checked out".

---

The branch is being pushed to GitHub.

### --feedback--

The asterisk indicates that the branch is "checked out".

---

The branch is currently "checked out".

## --video-solution--

4

## --text--

What does the following command do?

```sh
git push -u origin feature
```

## --answers--

Deletes the `feature` branch from the remote repository.

### --feedback--

This command doesn't remove anything.

---

Pushes the `feature` branch and sets it to track the remote branch.

---

Merges the feature branch into `main`.

### --feedback--

Merging is a separate action not done with this command.

---

Pushes all branches to the remote repository.

### --feedback--

This command pushes only one specific branch.

## --video-solution--

2
