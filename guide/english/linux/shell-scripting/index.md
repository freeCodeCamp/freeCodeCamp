---
title: Shell scripting
---

# Shell scripting

In the command line, a shell script is an executable file that contains a set
of instructions that the shell will execute. Its main purpose its to reduce
a set of instructions (or commands) in just one file. Also it can handle
some logic because it's a programming language.

## How to create it

1) Create the file:
```bash
$ touch myscript.sh
```
2) Add a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) at the start of the file. The Shebang line is responsible for letting the command interpreter know which interpreter the shell script will be run with:
```bash
$ echo "#!/bin/bash" > myscript.sh
# or
$ your-desired-editor myscript.sh
# write at the first line #!/bin/bash
```
3) Add some comands:
```bash
$ echo "echo Hello World!" >> myscript.sh
```
4) Give the file _execution_ mode:
```bash
$ chmod +x myscript.sh
```
5) Execute it!
```bash
$ ./myscript.sh
Hello World!
```

More info about shell-scripting can be found [here](https://www.shellscript.sh/)
