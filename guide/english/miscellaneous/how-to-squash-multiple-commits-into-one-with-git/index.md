---
title: How to Squash Multiple Commits into One with Git
---
This is an awesome feature of `rebase` that can be used in the `interactive` mode. To squash the last _n_ commits into one, run the following command:

    git rebase -i HEAD~n

That will open up a text-editor with something similar to the following:

    pick commit_1
    pick commit_2
    pick commit_3
    ...
    pick commit_n
    # Bunch of comments

Leave the first commit alone, and change the rest of the `pick`s to `squash`. Save and exit the editor.

So if you wanted to squash the last three commits, you'll first run `git rebase -i HEAD~3` and then you'll want to edit your commits to look something like this:

    pick dd661ba Commit 1
    squash 71f5fee Commit 2
    squash f4b4bf1 Commit 3

If you've already pushed to a remote before squashing your commits, you'll have to push to the remote again, with the `-f` flag, otherwise git will throw an error at you.

It is strongly suggested that you read the information in the opened file as there are many things you can do.