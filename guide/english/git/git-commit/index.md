---
title: Git Commit
---

## Git Commit
The `git commit` command will save all staged changes, along with a brief description from the user, in a "commit" to the local repository.

Commits are at the heart of Git usage. You can think of a commit as a snapshot of your project, where a new version of that project is created in the current repository. Two important features of commits are:

- you can recall the commited changes at a later date, or revert the project to that version ([see Git checkout](https://guide.freecodecamp.org/git/git-checkout))
- if multiple commits edit different parts of the project, they will not overwrite each other even if the authors of the commit were unaware of each other. This is one of the benefits of using Git over a tool like Dropbox or Google Drive.

### Options
There are a number of options that you can include with `git commit`. However, this guide will only cover the two most common options. For an extensive list of options, please consult the [Git documentation](https://git-scm.com/docs/git-commit).

#### The -m Option
The most common option used with `git commit` is the `-m` option. The `-m` stands for message. When calling `git commit`, it is required to include a message. The message should be a short description of the changes being committed. The message should be at the end of the command and it must be wrapped in quotations `" "`.

An example of how to use the `-m` option:
```shell
git commit -m "My message"
```
The output in your terminal should look something like this:
```shell
[master 13vc6b2] My message
 1 file changed, 1 insertion(+)
```

**NOTE:** If the `-m` is not included with the `git commit` command, you will be prompted to add a message in your default text editor - see 'Using detailed commit messages' below.

#### The -a Option
Another popular option is the `-a` option. The `-a` stands for all. This option automatically stages all modified files to be committed. If new files are added the `-a` option will not stage those new files. Only files that the Git repository is aware of will be committed.

For example:

Let’s say that you have a `README.md` file that has already been committed to your repository. If you make changes to this file, you can use the `-a` option in your commit command to stage and add the changes to your repository. However, what if you also added a new file called `index.html`? The `-a` option will not stage the `index.html` as it does not currently exist in the repository. When new files have been added, the `git add` command should be invoked in order to stage the files before they can be committed to the repository.

An example of how to use the `-a` option:
```shell
git commit -am “My new changes”
```
The output in your terminal should look something like this:
```shell
[master 22gc8v1] My new message
 1 file changed, 1 insertion(+)
```

### Using detailed commit messages
Although `git commit -m "commit message"` works just fine, it can be useful to provide more detailed and systematic information.

If you commit without using the `-m` option, git will open your default text editor with a new file, which will include a commented-out list of all the files/changes that are staged in the commit. You then write your detailed commit message (the first line will be treated as the subject line) and the commit will be performed when you save/close the file.

Bear in mind:
* Keep your commit message lines length less than 72 charcters as standard practice
* It is perfectly ok - and even recommended - to write multiline commit messages
* Good practice is to make sure your commit messages are clear about what changed in the commit, this makes it easier to roll back to earlier versions if you break your code.
* You can also refer to other issues or pull requests in your commit message. GitHub allocated a number reference to all pull requests and issues, so for example if you want to refer to pull request #788 simply do so in either the subject-line or in the body text as appropriate
    
#### The --amend Option
The `--amend` option allows you to change your last commit. Let's say you just committed and you made a mistake in your commit log message. You can conveniently modify the most recent commit using the command:
```shell
git commit --amend -m "an updated commit message"
```
If you forget to include a file in the commit:
```shell
git add FORGOTTEN-FILE-NAME
git commit --amend -m "an updated commit message"

# If you don't need to change the commit message, use the --no-edit option
git add FORGOTTEN-FILE-NAME
git commit --amend --no-edit
```
Premature commits happen all the time in the course of your day-to-day development. It’s easy to forget to stage a file or how to correctly format your commit message. The `--amend` flag is a convenient way to fix these minor mistakes. This command will replace the old commit message with the updated one specified in the command.

Amended commits are actually entirely new commits and the previous commit will no longer be on your current branch. When you're working with others, you should try to avoid amending commits if the last commit is already pushed into the repository.

With `--amend`, one of the useful flag you could use is `--author` which enables you to change the author of the last commit you've made. Imagine a situation you haven't properly set up your name or email in git configurations but you already made a commit. With `--author` flag you can simply change them without resetting the last commit.

```
git commit --amend --author="John Doe <johndoe@email.com>"
```

#### The -v or --verbose Option
The `-v` or `--verbose` option is used without the `-m` option. The `-v` option can be useful when you wish to edit a Git commit message in your default editor while being able to see the changes you made for the commit. The command opens your default text editor with a commit message template *as well as* a copy of the changes you made for this commit. The changes, or diff, will not be included in the commit message, but they provide a nice way to reference your changes when you're describing them in your commit message.

### More Information:
- Git documentation: [commit](https://git-scm.com/docs/git-commit)
