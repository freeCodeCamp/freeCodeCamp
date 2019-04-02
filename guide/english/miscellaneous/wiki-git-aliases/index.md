---
title: Wiki Git Aliases
---
For most developers, a lot of our time is spent in Terminal and a majority of it is spent typing Git commands. We've created a set of keyboard shortcuts with Bash aliases and functions to speed up your workflow and save hundreds of keystrokes every day.

Git allows you to set aliases but they're limited and only save you a few keystrokes (i.e. instead of git checkout you can type git co, but you still have to type git). Since Bash is Terminal's default command-line interpreter, you can also set Bash aliases to reduce your keystrokes even further.

Here's a list of Git Bash aliases and functions. To use them as your own, just add them to the file you store your aliases/functions in. (i.e. `~/.bash_profile` or `~/.bashrc`)

When copy & pasting, it's important to keep the spacing. (i.e. for aliases, there must be no spaces before and after the equal signs, and for functions, there must be a space after the opening curly bracket of the declaration and a semicolon after the command. Don't forget to reload your file (source `~/.bash_profile`) or restart Terminal after making changes.