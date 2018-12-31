---
title: Improve Existing Pull Request by Another Contributor
---
How to take someone's PR and make your own based off it while keeping their commit:

1.  Make a new branch, preferibly with the PR# of the original one.

`git checkout -b pr/xyz`

1.  Pull the changes to it.

`git pull git://github.com/rafase282/wiki.git update/pr-guide`

This basically means pull from the repository **Rafase282/wiki**, branch **update/pr/guide** into your current branch **pr/xyz**.

1.  Make your changes, add, commit, push. If you need to squash make sure to keep the original contributor's commit untouched.

**Note**: You might need to force push `git push -f origin pr/xyz`

1.  Create your PR and in the description make it to close the original PR with `closes #xyz`

That should make a new pull request with the original changes, plus your own into a new pull request that will automatically reference and close the original one when merged.