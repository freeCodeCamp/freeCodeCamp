---
title: Bash cd
---

## Bash command: cd
**cd - Change Directory**
It is used to change the current working directory.

**Change Directory** to the path specified, for example `cd projects`.

### Usage

```bash
cd [dir]
```

There are a few really helpful arguments to help with this:
- `.` refers to the current directory, such as `./projects`
- `..` can be used to move up one folder, use `cd ..`, and can be combined to move up multiple levels `../../my_folder`
- `-` takes you back to the previous directory you were working on. For example, `cd -`
- `/` is the root of your system to reach core folders, such as `system`, `users`, etc.
- `~` is the home directory, usually the path `/users/username`. Move back to folders referenced relative to this path by including it at the start of your path, for example `~/projects`.
- `-` can be used to move to the previous directory. For example, you are in `/A`, then cd to `/B`, use `cd -` and you are back to `/A`
- `~[number]` will cd to that entry from the output of `dirs` directories can be pushed or popped to the 'dirs' stack using `pushd` and `popd` respectively.
- Typing only `cd` will move to the home directory works same as `cd ~`.  `cd $HOME` will also move to the home directory.
- Typing 'pwd' will show you which directory you are currently working in.

### Example

Change directory to `projects` folder:
```bash
cd projects
```

### Related Commands
The `cd` command is the daily workhorse for navigating through your path, but closely related are the `pushd`, `popd`, and `dirs` commands, which maintain a *stack* of your directory movements and allow you to more quickly navigate through this stack.   

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Cd_(command))
