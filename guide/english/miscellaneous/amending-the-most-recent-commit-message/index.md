---
title: Amending the Most Recent Commit Message
---
Often, the occasion will arise where the last commit was submitted prematurely (missing a file, missing a change in a file, etc.) or the commit message may have been mistyped or incomplete. For just such an occasion Git offers the `--amend` commit flag. To amend a commit, start by typing:

    git commit --amend

The above will commit any additional changes and open your editor, allowing you to change the commit message of the most recent commit. Additionally, you can set the commit message directly in the command line with:

    git commit --amend -m "New commit message"

If you want to add files or changes to the commit, you just need to ensure that the changes are added to staging with `git add` before running the command. Further, if you want to add all watched, modified files (in staging or otherwise) and change the commit, you can use:

    git commit --amend -am "New commit message"

The `-a` flag says to add all files that Git has told to track.

## Amending a commit after pushing to remote

When using the `--amend` flag, Git will replace the last commit with the new one commit complete with a new hash. This means that if you have already pushed to the remote before amending, then the old commit will be missing from any subsequent pushes, and any new push will be rejected. The way around this is to `--force` the push. _NOTE: `--force` should not be done lightly._ To do so, type:

    git push <remote> <branch> --force

**Or**

    git push <remote> <branch> -f

Force-pushing will overwrite the remote branch with the state of your local one. If there are commits on the remote branch that you don't have in your local branch, you will lose them. This can cause problems if others have already pulled or cloned from your repo. If you believe others _may_ have already downloaded the amended commit, please coordinate with them.

## See Also

*   <a href='https://www.kernel.org/pub/software/scm/git/docs/git-commit.html' target='_blank' rel='nofollow'>git-commit(1) Manual Page</a>
*   <a href='https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History' target='_blank' rel='nofollow'>Pro Git</a>
*   <a href='http://stackoverflow.com/questions/179123/edit-an-incorrect-commit-message-in-git/179147#179147' target='_blank' rel='nofollow'>StackOverflow</a>