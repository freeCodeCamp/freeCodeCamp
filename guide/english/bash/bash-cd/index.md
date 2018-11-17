---
title: Bash cd
---

## Bash command: cd

**Change Directory** to the path specified, for example `cd projects`.

There are a few really helpful arguments to help with this:

- `.` refers to the current directory, such as `./projects`
- `..` can be used to move up one folder, use `cd ..`, and can be combined to move up multiple levels `../../my_folder`
- `-` takes you back to the previous directory you were working on. For example, `cd -`
- `/` is the root of your system to reach core folders, such as `system`, `users`, etc.
- `~` is the home directory, usually the path `/users/username`. Move back to folders referenced relative to this path by including it at the start of your path, for example `~/projects`.
- `-` can be used to move to the previous directory. For example, you are in `/A`, then cd to `/B`, use `cd -` and you are back to `/A`
- `~[number]` will cd to that entry from the output of `dirs` directories can be pushed on poped to the 'dirs' stack using `pushd` and `popd` respectively.
- Typing only `cd` will move to the home directory works same as `cd ~`
- Typing 'pwd' will show you which directory you are currently working in.

### More Information:
* [Wikipedia](https://en.wikipedia.org/wiki/Cd_(command))
