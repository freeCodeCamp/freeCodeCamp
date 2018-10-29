---
title: How to Make a Pull Request on Free Code Camp
---
# Free Code Camp Pull Request

**What is a Pull Request?**

A pull request (PR) is a method of submitting proposed changes to the Free Code Camp Repo (or any Repo, for that matter). You will make changes to copies of the files which make up Free Code Camp in a personal fork, then apply to have them accepted by Free Code Camp proper.

## Need Help?

Free Code Camp Issue Mods and staff are on hand to assist with Pull Request related issues on our <a href='https://gitter.im/FreeCodeCamp/Contributors' target='_blank' rel='nofollow'>Help Contributors Chat Room.</a>

## Methods

There are two methods of creating a Pull for Free Code Camp:

1.  Editing files via the GitHub Interface
2.  Editing files on a local clone

## Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document, it should be this: Never, EVER make edits to the `staging` branch. ALWAYS make a new branch BEFORE you edit files. This is critical, because if your PR is not accepted, your copy of `staging` will be forever sullied and the only way to fix it is to delete your fork and re-fork.

## Editing via your Local Fork (Recommended)

This is the recommended method. Read about <a href='http://forum.freecodecamp.com/t/how-to-fork-and-maintain-a-local-instance-of-free-code-camp/19116' target='_blank' rel='nofollow'>How to Setup and Maintain a Local Instance of Free Code Camp</a>.

1.  Perform the maintenance step of rebasing `staging`
2.  Ensure you are on the `staging` branch using `git status`:

`  
$ git status  
On branch staging  
Your branch is up-to-date with 'origin/staging'.

nothing to commit, working directory clean  
`

1.  If you are not on staging or your working directory is not clean, resolve any outstanding files/commits and checkout staging `git checkout staging`
2.  Create a branch off of `staging` with git: `git checkout -B branch/name-here` Note: Branch naming is important. Use a name like `fix/short-fix-description` or `feature/short-feature-description` Review the <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md' target='_blank' rel='nofollow'>Contribution Guidelines</a> for more detail.
3.  Edit your file(s) locally with the editor of your choice
4.  Check your `git status` to see unstaged files.
5.  Add your edited files: `git add path/to/filename.ext` You can also do: `git add .` to add all unstaged files. Take care, though, because you can accidentially add files you don't want added. Review your `git status` first.
6.  Commit your edits: `git commit -m "Brief Description of Commit"`
7.  <a href='http://forum.freecodecamp.com/t/how-to-squash-multiple-commits-into-one-with-git/13231' target='_blank' rel='nofollow'>Squash your commits</a>, if there are more than one.
8.  Push your commits to your GitHub Fork: `git push -u origin branch/name-here`
9.  Go to <a>Common Steps</a>

## Editing via the GitHub Interface

**Note:** Editing via the GitHub Interface is not recommended, since it is not possible to update your fork via GitHub's interface without deleting and recreating your fork.

1.  Create a Fork of the FCC Repo
2.  <a href='https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/' target='_blank' rel='nofollow'>Create a branch</a> within your fork. Note: Branch naming is important. Use a name like `fix/short-fix-description` or `feature/short-feature-description` Review the <a href='https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md' target='_blank' rel='nofollow'>Contribution Guidelines</a> for more detail.
3.  Edit the file and commit the changes.
4.  Continue to Common Steps.

## Common Steps

1.  Once the edits have been committed, you will be prompted to create a pull request on your fork's Github Page.
2.  By default, all pull requests should be against the FCC main repo, `staging` branch.
3.  Make a clear title for your PR which succinctly indicates what is being fixed. Do not add the issue number in the title. Examples: `Add Test Cases to Algorithm Drop It` `Correct typo in Challenge Size Your Images`
4.  In the body of your PR include a more detailed summary of the changes you made and why.
5.  Indicate if you have tested on a local copy of the site or not.
6.  If your PR is due to an issue, you can <a href='https://help.github.com/articles/closing-issues-via-commit-messages/' target='_blank' rel='nofollow'>reference and close that issue</a> automatically by adding a keyword like `Closes #xxxx`, where `xxxx` is the issue number.

## Next Steps

### If Changes are Requested

Don't worry, many PRs, especially first PRs, require correction or updating. If you have used the GitHub interface to create your PR, you will need to close your PR, create a new branch, and re-submit. This is because you cannot squash your commits via the GitHub interface.

If you have a local copy of the repo, you can make the requested changes and amend your commit with: `git commit --amend` This will update your existing commit. When you push it to your fork you will need to do a force push to overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.

### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it. This keeps your working fork clean. You can do this with a press of a button on the GitHub PR interface. You can delete the local copy of the branch with: `git branch -D branch/to-delete-name`

### If your PR is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to why it was rejected and what is needed. Please, keep contributing.
