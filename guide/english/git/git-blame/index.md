---
title: Git Blame
---
## Git Blame

With `git blame` you can see who changed what in a specific file, line by line, which is useful if you work in a team, instead of alone. For example, if a line of code makes you wonder why it is there, you can use `git blame` and you will know who you must ask.

### Usage

You use `git blame` like this: `git blame NAME_OF_THE_FILE`

For example: `git blame triple_welcome.rb`

You will see an output like this:

```shell
0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 1) 3.times do
e483daf0 (John Doe      2018-06-18 23:50:40 -0500 2)   print 'Welcome '
0292b580 (Jane Doe      2018-06-18 00:17:23 -0500 3) end
```

Each line is annotated with the SHA, name of the author and date of the last commit.

### Aliasing Git Blame

Some programmers don't like the word 'blame', because of the negative connotation 'blaming someone' brings with it. Also, the tool is rarely (if ever) used for blaming someone, but rather to ask for advice or understand the history of a file. Therefore, sometimes people use an alias to change `git blame` to something which sounds a bit nicer such as `git who`, `git history` or `git praise`. To do that you simply add a git alias like this:

`git config --global alias.history blame`

You can find more information about aliasing git commands [here](../git-alias/index.md).

### Text Editor Plugins utilizing Git Blame

There are a few plugins out there for various text editors which utilize `git blame`. For example, to create something like heat maps or add inline information for the current line you are inspecting. A famous example is [GitLense](https://gitlens.amod.io/) for VSCode.

### Further Reading

- [Git Blame documentation](https://git-scm.com/docs/git-blame)
- [further reading on usage of Git Blame](https://corgibytes.com/blog/2016/10/18/git-blame/)
