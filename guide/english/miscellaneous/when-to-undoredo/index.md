---
title: When to Undoredo
---
You would typically want to UNDO/REDO when you commit some changes to git, and realize that the changes need to be removed/reverted. This very common in scenarios for example, when you did a temporary change to some files, and forgot to revert them, then proceeded to adding them to commit accidentally.

## The UNDO/REDO workflow:

Assuming you did some changes and made commits like:

    git commit -m "Commit 1 - Some changes to the code"
    git commit -m "Commit 2 - Some MORE changes to the code"

1.  (UNDO-ing): Revert back the last commit `git reset --soft HEAD~`
2.  _Do the changes._
3.  Add your files to the staging area `git add <filenames or paths>` or `git add --all`
4.  (REDO-ing): Do the commit. `git commit -c ORIG_HEAD` or `git commit -C ORIG_HEAD`

## How does this work?

Now that you know the flow lets understand how this works behind the scenes.

1.  `Step 1` resets the last commit i.e. `"Commit 2 - Some MORE..."` back to the `"Commit 1 - Some..."` commit.
2.  In `Step 2`, you do changes you deem fit to the files.
3.  In `Step 3`, you add the changed files to the staging area either selectively with `git add <filenames>` or all files with `git add --all`.
4.  In the final step you commit the changes in the staging area.

Note: you can either use `-c` or `-C`. The small `-c` will open an editor for modifying the commit message, in this case it will be `Commit 2 - Some MORE...`. You can edit the commit message as you want.

Or alternatively you can use caps `-C`, where git will skip the editor window, and reuse the _LAST_ commit message which again in this case is `Commit 2 - Some MORE...`.

Re-using the "Same" commit message is also known as redoing/recommiting.

## Unstage before a commit

To undo a change staged before a commit simply run `git reset <file>` or `git reset` to unstage all changes before a commit.

Note: In older versions of git, the commands were `git reset HEAD <file>` and `git reset HEAD` respectively. This was changed in Git 1.8.2

## Some More tricks:

You can go back any number of commits by using `git reset --soft HEAD~n` where you want to undo last `n` commits.

## Attribution:

This article is based on a Stack Overflow question <a href='http://stackoverflow.com/questions/927358/how-do-you-undo-the-last-commit/927386#927386' target='_blank' rel='nofollow'>here</a> and <a href='http://stackoverflow.com/questions/348170/undo-git-add-before-commit/348234#348234' target='_blank' rel='nofollow'>here</a>.