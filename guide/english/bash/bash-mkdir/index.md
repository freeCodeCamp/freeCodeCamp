---
title: Bash mkdir
---

## Bash command: mkdir

**Creates a directory(ies), if they do not already exist.**

```
mkdir [options] directory_name
```

Make directory(ies) with the provided name if they do not already exist.

Commonly used options:
- `-p` no error if existing, make parent directories as needed.
- `-v` prints message for each created directory.

Let's say we need to create a directory `dir` in the path `a/b/c/dir`, but directory `b` and `c` don't exist. In this case, `mkdir -p a/b/c/dir` will create the missing directories in the path.  

You can also create multiple directories at a given level.  Picture the following directory structure:
```
.
└── wwwroot
    ├── css
    ├── images
    └── media
        ├── mp3
        └── mp4
```
This can easily be recreated `mkdir -p wwwroot/{css,images,media/{mp4,mp3}}` By using curly braces `{}` you can create multiple directories at a given level.

### More Information:
* [Wikipedia - Mkdir](https://en.wikipedia.org/wiki/Mkdir)
