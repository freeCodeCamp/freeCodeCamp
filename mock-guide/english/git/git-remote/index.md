---
title: Git Remote
---
## Git Remote
The `git remote` command allows you to manage your Git remote repositories. Remote repositories are references to other Git repositories that operate on the same codebase.

You can 
<a href='https://guide.freecodecamp.org/git/git-pull/' target='_blank' rel='nofollow'>pull from</a>
and
<a href='https://guide.freecodecamp.org/git/git-push/' target='_blank' rel='nofollow'>push to</a>
remote repositories.

You can push or pull to either an HTTPS URL, such as `https://github.com/user/repo.git`, or an SSH URL, like `git@github.com:user/repo.git`.

Don't worry, every time you push something, you don't need to type the entire URL. Git associates a remote URL with a name, and the name most people use is `origin`.

### List all configured remote repositories
```bash
git remote -v
```
This command lists all remote repositories alongside their location.

Remote repositories are referred to by name. As noted above, the main repository for a project is usually called `origin`.

When you you use 
<a href='https://guide.freecodecamp.org/git/git-clone/' target='_blank' rel='nofollow'>git clone</a>
to obtain a copy of a repository, Git sets up the original location as the *origin* remote repository.

### Add a remote repository
To add a remote repository to your project, you would run the following command:
```bash
git remote add REMOTE-NAME REMOTE-URL
```
The `REMOTE-URL` can be either HTTPS or SSH. You can find the URL on GitHub by clicking the "Clone or download" dropdown in your repository.

For example, if you want to add a remote repository and call it `example`, you would run:
```bash
git remote add example https://example.org/my-repo.git
```

### Update a remote URL
If the URL of a remote repository changes, you can update it with the following command, where `example` is the name of the remote:
```bash
git remote set-url example https://example.org/my-new-repo.git
```

### Deleting Remotes
Deleting remotes is done like so:
```bash
git remote rm REMOTE-NAME
```

You can confirm the remote is gone by viewing the list of your existing remotes:
```bash
git remote -v
```

### More Information:
- [Git remote documentation](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
