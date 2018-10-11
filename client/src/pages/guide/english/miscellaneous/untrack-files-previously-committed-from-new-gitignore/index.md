---
title: Untrack Files Previously Committed from New Gitignore
---
To untrack a _single_ file, ie stop tracking the file but not delete it from the system use:

`git rm --cached filename`

To untrack _every_ file in `.gitignore`:

First **commit** any outstanding code changes, and then run:

`git rm -r --cached`

This removes any changed files from the index(staging area), then run:

`git add .`

Commit it:

`git commit -m ".gitignore is now working"`

To undo `git rm --cached filename`, use `git add filename`