---
title: Bash mkdir
---

## Bash command: mkdir

**Creates a directory(ies), if they do not already exist.**

```
mkdir [options] directory_name
```

mkdir -as the name suggests make directory(ies) with the provided name if they do not already exist.
We can see it as - "mk" for "Make" and in "dir" for "directory" in mkdir.

Commonly used options:
- `-p` no error if existing, make parent directories as needed.
- `-v` prints message for each created directory.

Let's say we need to create a directory `dir` in the path `a/b/c/dir`, but directory `b` and `c` don't exist. In this case, `mkdir -p a/b/c/dir` will create the missing directories in the path.

### More Information:
* [Wikipedia - Mkdir](https://en.wikipedia.org/wiki/Mkdir)
