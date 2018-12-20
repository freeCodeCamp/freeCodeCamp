---
title: Gitignore
---
## Gitignore

The `.gitignore` file is a text file that tells Git which files or folders to ignore in a project.

A local `.gitignore` file is usually placed in the root directory of a project. You can also create a global `.gitignore` file and any entries in that file will be ignored in all of your Git repositories.

To create a local `.gitignore` file, create a text file and name it `.gitignore` (remember to include the `.` at the beginning). Then edit this file as needed. Each new line should list an additional file or folder that you want Git to ignore.

The entries in this file can also follow a matching pattern.

* `*` is used as a wildcard match
* `/` is used to ignore pathnames relative to the `.gitignore` file
* `#` is used to add comments to a `.gitignore` file

This is an example of what the `.gitignore` file could look like:

```
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```

To add or change your global .gitignore file, run the following command:
```bash
git config --global core.excludesfile ~/.gitignore_global
```
This will create the file `~/.gitignore_global`. Now you can edit that file the same way as a local `.gitignore` file. All of your Git repositories will ignore the files and folders listed in the global `.gitignore` file.

## Removing Files From Git Tracking

Occasionally, you may forget to add a particular file or folder you do not want to track to your `.gitignore` file. Or you may have forgotten to set up a `.gitignore` file altogether. Here's how to fix those situations, but before you do, commit your changes, including your updated `.gitignore` file.

### Removing a Single File

'I forgot to ignore that scratch file!' you say. It happens. And you can fix the mistake as easily as you made it.

```bash
git rm --cached /path/to/my/file
```

The command `rm` tells Git to remove what you specify. However, in this case, you are adding `--cached`, which tells Git to just remove the item from Git's index, and not your filesystem. If you run `git status` at this point, Git will report that your file is being deleted. Don't worry. This will only delete it from Git, and not your filesystem. Commit that change and then look for yourself.

### Removing a Folder

This can happen with an entire folder as well. The steps to fix it are the same, with one minor difference.

```bash
git rm -r --cached /path/to/directory/
```

Here, you added the `-r` option, which tells Git to recursively remove everything inside the directory you gave it, including itself. Again, commit your 'deleted' files and your repository will be clean once again.

### Removing Everything

Forgot your `.gitignore` when you initialized your project? Or you added a bunch of test/config/whatever files and folders you didn't intend to add to your repository without updating `.gitignore`? You can fix that too. 

```bash
git rm -r --cached .
git add .
git commit -m 'fix .gitignore'
```

Not the cleanest commit history, but your repo will be sparklingly clean. A little more was going on here. First, you removed `.`, which represents everything. Since `git rm` can be unforgiving, perhaps you should run it, or any of these commands, with the `-n` option, like `git rm -r -n --cached .` in this case. Or use the `--dry-run` option, which is the long hand version telling Git to just report what it is going to do without taking any action. For now, run it without the `dry-run` options.

Congratulations, you removed everything from your repo. Time to add it back in, minus what your edited `.gitignore` file will omit. That's what our `git add .` line does for you.

Commit your changes with whatever message you feel is necessary. The commit itself won't look very nice in this case. You did remove and add everything, for what it's worth. But your repository will be in the clean state you had intended all along.

### More Information:
- Git documentation: <a href='https://git-scm.com/docs/gitignore' target='_blank' rel='nofollow'>gitignore</a>
- Ignoring files: <a href='https://help.github.com/articles/ignoring-files/' target='_blank' rel='nofollow'>GitHub</a>
- Useful `.gitignore` templates: <a href='https://github.com/github/gitignore' target='_blank' rel='nofollow'>GitHub</a>
