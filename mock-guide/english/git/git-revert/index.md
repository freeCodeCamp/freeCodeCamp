---
title: Git Revert
---
## Git Revert

The `git revert` command undoes a commit, but unlike `git reset`, which removes the commit from the commit history, it appends a new commit with the resulting content. This prevents Git from losing history, which is important for the integrity of your revision history and for reliable collaboration. When you are working on a repository with other developers, using `git reset` is highly dangerous because you alter the history of commits which makes it very difficult to maintain a consistent history of commits with other developers.

### Common options
1.) This is a default option and doesn't need to be specified. This option will open the configured system editor and prompts you to edit the commit message prior to committing the revert.

```shell
  -e
  --edit
```
2.) This is the inverse of the -e option. The `revert` will not open the editor.

```shell
  --no-edit
```
3.) Passing this option will prevent `git revert` from creating a new commit that inverses the target commit. Instead of creating the new commit this option will add the inverse changes to the Staging Index and Working Directory.

```shell
  -n
  --no-edit
```

### Example.
Let's imagine the following situation.
1.) You are working on a file and you add and commit your changes.
2.) You then work on a few other things, and make some more commits.
3.) Now you realize, three or four commits ago, you did something that you would like to undo - how can you do this?

You might be thinking, just use `git reset`, but this will remove all of the commits after the one you would like to change - `git revert` to the rescue! Let's walk through this example:

```shell
mkdir learn_revert # Create a folder called `learn_revert`
cd learn_revert # `cd` into the folder `learn_revert`
git init # Initialize a git repository

touch first.txt # Create a file called `first.txt`
echo Start >> first.txt # Add the text "Start" to `first.txt`

git add . # Add the `first.txt` file
git commit -m "adding first" # Commit with the message "Adding first.txt"

echo WRONG > wrong.txt # Add the text "WRONG" to `wrong.txt`
git add . # Add the `wrong.txt` file
git commit -m "adding WRONG to wrong.txt" # Commit with the message "Adding WRONG to wrong.txt"

echo More >> first.txt # Add the text "More" to `first.txt`
git add . # Add the `first.txt` file
git commit -m "adding More to first.txt" # Commit with the message "Adding More to first.txt"

echo Even More >> first.txt # Add the text "Even More" to `first.txt`
git add . # Add the `first.txt` file
git commit -m "adding Even More to First.txt" # Commit with the message "Adding More to first.txt"

# OH NO! We want to undo the commit with the text "WRONG" - let's revert! Since this commit was 2 from where we are not we can use git revert HEAD~2 (or we can use git log and find the SHA of that commit)

git revert HEAD~2 # this will put us in a text editor where we can modify the commit message.

ls # wrong.txt is not there any more!
git log --oneline # note that the commit history hasn't been altered, we've just added a new commit reflecting the removal of the `wrong.txt`
```

#### More Information:
- [Git revert documentation](https://git-scm.com/docs/git-revert)
- [Git revert interactive tutorial](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)
