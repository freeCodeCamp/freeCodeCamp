---
title: Git Show
---
## Git Show

The `git show` is a handy command that enables you to see in detail view of a given object (commits, tags, blobs and trees).

This command's syntax is as follows:
```bash
git show [<options>] [<object>…​]
```

For different git objects `git show` gives different outputs.

* commits it shows the commit log message with a diff of changes which were committed.
* For tags, it shows the tag message and the referenced objects.
* For trees, it shows the names
* For plain blobs, it shows the plain contents

The most common usage of `git show` would be in association with git commit object

```bash
git show 3357d63
```

You'd get an output similar to,

    commit 3357d63d8f44104940e568a1ba89fa88a16dc753
    Author: John Doe <johndoe@acme.com>
    Date:   Tue Oct 2 00:57:38 2018 +0530

        add a section on git commit --amend --author

    diff --git a/src/pages/git/git-commit/index.md b/src/pages/git/git-commit/index.md
    index fc9f568..8f1c8eb 100644
    --- a/src/pages/git/git-commit/index.md
    +++ b/src/pages/git/git-commit/index.md
    @@ -73,5 +73,11 @@ Premature commits happen all the time in the course of your day-to-day developme

     Amended commits are actually entirely new commits and the previous commit will no longer be on your current branch. When you're working with others, you should try to avoid amending commits if the last commit is already pushed into the repository.

    +With `--amend`, one of the useful flag you could use is `--author` which enables you to change the author of the last commit you've made. Imagine a situation you haven't properly set up your name or email in git configurations but you already made a commit. With `--author` flag you can simply change them without resetting the last commit.
    +
    +```
    +git commit --amend --author="John Doe <johndoe@email.com>"
    +```
    +
     ### More Information:
     - Git documentation: [commit](https://git-scm.com/docs/git-commit)

You could just use `git show` and it will display the content of the latest git commit.

### More Information:
- [Git documentation - show](https://git-scm.com/docs/git-show)

