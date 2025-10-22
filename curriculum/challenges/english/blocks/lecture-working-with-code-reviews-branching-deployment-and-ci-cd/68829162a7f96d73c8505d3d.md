---
id: 68829162a7f96d73c8505d3d
title: What Are Merge Conflicts, and How Can You Resolve Them?
challengeType: 19
dashedName: what-are-merge-conflicts-and-how-can-you-resolve-them
---

# --description--

If you've been around experienced developers, whether in an online community or in person, you have probably heard about the "dreaded merge conflicts". But what exactly are they?

Well, when you are using a proper branching strategy like we've discussed in previous lessons, you may be working on two different features on two different branches at the same time. Or maybe you're working on something, and a colleague is working on another branch. Either way, you have two independent changes going on. But sometimes, both of those branches will edit the same file. And if the other branch gets merged into `main` first, your branch's changes are now behind.

Most of the time, this can be fixed by merging `main` back into your feature branch. But when the changes from the other branch conflict with your branch, Git cannot tell which changes you want to keep during a merge. This is called a "merge conflict".

But how can you fix it? Well, for smaller and simpler conflicts, GitHub will give you a web UI to fix it. A "Resolve conflicts" button will show up at the bottom of a PR if there's conflicts. If you click it, you will see the file with conflicts that includes your code and the conflicting code. Git will add "merge conflict markers" around your code and the conflicting code to help identify the issue. It looks something like this:

```sh
1 <<<<<<< feat/conflict
2 Here's some code from my first PR :)
3 =======
4 Here's some code that was merged to main that conflicts with the code on my PR
5 >>>>>>> main
```

The opening marker is the `<<<<<<< feat/conflict`, and indicates the start of the changes that our current branch is making. Then we see the `Here's some code from my first PR :)`. After that is the `=======` marker, which indicates the end of our changes and the start of the `main` branch's changes. We can see that the changes made on `main` are the line `Here's some code that was merged to main that conflicts with the code on my PR`. And after that is the closing `>>>>>> main` marker to show the end of the conflicts.

But how do we fix it? Well, you need to decide which changes you want to keep as part of the merge conflicts. If you want to keep both changes, you could remove just the conflict markers and leave the changes unchanged. Alternatively, if you want to keep the changes from only one branch, you would delete the conflict markers and the changes from the other branch (those that you do not wish to keep). And finally, if you don't like any of the changes at all, you can remove everything from the opening marker to the closing marker (inclusive).

Let's remove the `main` branch changes, but keep ours. Here's what we have now:

```sh
1 Here's some code from my first PR :)
```

Click the "Mark as resolved" button, which tells GitHub you are satisfied with your resolution. If there were additional files, GitHub would switch to the next one. But since this is our only conflicted file, you'll see a "Commit merge" button appear. Click that button and GitHub will create a merge commit for you. You'll be taken back to the pull request, where you'll see your new merge commit and the conflicts resolved. And we're all set!

But what if you can't edit the conflicts directly on GitHub, because they are too complex?

Well, if your branch has few commits, or only a couple of commits modify that file, you may be able to merge `main` into your branch:

```sh
git checkout feat/conflict
git fetch origin
git merge origin/main
```

As Git processes this merge, you'll get conflicts to resolve manually. Git will notify you of which files need to be fixed. When we open the files with conflicts in our editor, we get the same conflict markers, with some helpful UI additions thanks to VSCode. Go ahead and fix the conflicts in the file in the same way. But this time, we'll need to manually create the commit. It's the same as creating any other commit:

```sh
git add .
git commit -m "chore: resolve conflicts"
```

After running these commands, we can see Git has accepted our resolution.

Sometimes, when you have many commits or conflicts, a rebase can be helpful. Instead of merging changes, a rebase takes all the commits on your branch and reapplies them so they come after the latest changes on `main`. In Git terms, this effectively "resets" the base of your branch to the most recent commit on `main`.

In order to experiment with this, we need a new branch:

```sh
git checkout main
git pull
git checkout -b feat/rebase
```

Let's go ahead and generate a bunch of commits for our branch, so we can practice rebasing:

```sh
echo "change one" > README.md
git add .
git commit -m "change one"
echo "change two" > README.md
git add .
git commit -m "change two"
echo "change three" > README.md
git add .
git commit -m "change three"
```

Now, let's go make another change on `main` to create a conflict:

```sh
git checkout main
echo "change four" > README.md
git add .
git commit -m "change four"
```

And checkout our rebase branch:

```sh
git checkout feat/rebase
```

Next, run `git rebase -i main`. It will rebase our branch onto the current state of the `main` branch. The `-i` flag tells Git to perform a rebase in interactive mode. You will see your commits with the word `pick` next to them. `pick` tells Git to use the commit as-is for the rebase. Save and close the file, and we'll get an error message telling us there is conflicts.

Our `change one` commit conflicts with the `change four` commit, and we need to resolve that. Open the file in your editor, and you'll see the same UI as we got with the conflicts earlier. Let's keep our `change one` changes. Then, you'll need to run `git add .` to add the changes, and `git rebase --continue` to tell Git we're ready to continue rebasing. Since we've resolved the conflict in the first commit, Git can automatically handle rebasing the rest of the commits.

Now, just as a last bit of cleanup, let's squash our three change commits into one single commit for a cleaner history. Run `git rebase -i main` again to get to the editor. Then, leave the first command as `pick` but change the next two to `squash`. You may run in to the same conflict again. If you do, resolve it the same way you did before. Once you've resolved and continued the rebase (or immediately, if you had no conflict), you'll see a new commit message editor pop up. This message will be your new commit, containing the changes from the three commits we've squashed. Let's name this one `change three complete`. Save and close the editor, and Git will finalize the rebase.

If we check your commit history now, we can see that we now have our single `change three complete` commit, and it's correctly based on the `change four` commit. That means you've successfully completed a rebase with squashed commits! And now you've got the tools you need to become a merge conflict champion!

# --questions--

## --text--

What are the merge conflict markers that Git adds to help identify conflicting changes?

## --answers--

`<<< current branch`, `=== separator`, `>>> other branch`

### --feedback--

Think about the specific syntax Git uses to mark the beginning, middle, and end of conflicts.

---

`[[ current branch`, `|| separator`, `]] other branch`

### --feedback--

Think about the specific syntax Git uses to mark the beginning, middle, and end of conflicts.

---

`<<<<<<< current branch`, `======= separator`, `>>>>>>> other branch`

---

`--- current branch`, `+++ separator`, `--- other branch`

### --feedback--

Think about the specific syntax Git uses to mark the beginning, middle, and end of conflicts.

## --video-solution--

3

## --text--

After manually resolving a merge conflict in your local repository, what commands do you need to run to complete the merge?

## --answers--

`git push origin main` and `git rebase -i origin/main`

### --feedback--

After fixing conflicts, you need to stage and commit the resolved changes just like any other commit.

---

`git add` and `git commit`

---

`git merge --abort` and `git commit`

### --feedback--

After fixing conflicts, you need to stage and commit the resolved changes just like any other commit.

---

`git reset --hard` and `git push -f`

### --feedback--

After fixing conflicts, you need to stage and commit the resolved changes just like any other commit.

## --video-solution--

2

## --text--

What is the main difference between merging and rebasing when dealing with branch conflicts?

## --answers--

Merging creates a new commit, while rebasing rewrites history to place your commits after the other branch's commits.

---

Rebasing is faster than merging.

### --feedback--

Consider how each operation affects the commit history.

---

Merging can only be done on GitHub, rebasing must be done locally.

### --feedback--

Consider how each operation affects the commit history.

---

There is no difference, they are the same operation.

### --feedback--

Consider how each operation affects the commit history.

## --video-solution--

1
