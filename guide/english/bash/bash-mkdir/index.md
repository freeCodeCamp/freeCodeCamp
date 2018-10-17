---
title: Bash mkdir
---

## Bash command: mkdir

**Creates a directory**

```
mkdir directory_name
```

Make directory(ies) with the provided name if they do not already exist.

Commonly used options:
- `-p` no error if existing, make parent directories as needed.
- `-v` prints message for each created directory.

Let's say we need to create a directory `dir` in the path `a/b/c/dir`, but directory `b` and `c` don't exist. In this case, `mkdir -p a/b/c/dir` will create the missing directories in the path.

### More Information:
* [Wikipedia - Mkdir](https://en.wikipedia.org/wiki/Mkdir)
