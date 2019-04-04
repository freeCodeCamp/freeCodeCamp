---
title: Shell scripting
---

# Shell Scripting

In the command line, a shell script is an executable file that contains a set of instructions that the shell will execute. Its main purpose is to reduce a set of instructions (or commands) to just one file. Also, it can handle logic because it's also an interpreter.

## How to Create a Shell Script

1. Create the file:
```bash
$ touch myscript.sh
```

The file extension is not necessary.  In linux, scripts can be executed even without .sh extension.

If the file is stored in `/user/bin` then the script should be able to be run from anywhere, provided the path is included in the `$PATH` variable.

2. Add a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) (`#!`) to the start of the file. The shebang line is responsible for letting the command interpreter know which interpreter the shell script will be run with.

```bash
$ echo "#!/bin/bash" > myscript.sh
# or
$ your-desired-editor myscript.sh
# ---------- myscript.sh ------
#!/bin/bash
...
# -----------------------------
```

3. Add commands to the file:
```bash
$ echo "echo Hello World!" >> myscript.sh
```

4. Give the file _execution_ mode:
```bash
$ chmod +x myscript.sh
```

5. Execute the script!
```bash
$ ./myscript.sh
Hello World!
```

## Additional Resources
- [More info about shell-scripting](https://www.shellscript.sh/)
