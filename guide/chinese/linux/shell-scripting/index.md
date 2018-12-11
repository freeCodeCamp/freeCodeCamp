---
title: Shell scripting
localeTitle: Shell脚本
---
# Shell脚本

在命令行中，shell脚本是包含集合的可执行文件 shell将执行的指令。它的主要目的是减少 只有一个文件中的一组指令（或命令）。它也可以处理 一些逻辑，因为它是一种编程语言。

## 如何创建它

1）创建文件：

```bash
$ touch myscript.sh 
```

2）在文件的开头添加一个[shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) 。 Shebang行负责让命令解释器知道将运行shell脚本的解释器：

```bash
$ echo "#!/bin/bash" > myscript.sh 
 # or 
 $ your-desired-editor myscript.sh 
 # write at the first line #!/bin/bash 
```

3）添加一些命令：

```bash
$ echo "echo Hello World!" >> myscript.sh 
```

4）给出文件_执行_模式：

```bash
$ chmod +x myscript.sh 
```

5）执行它！

```bash
$ ./myscript.sh 
 Hello World! 
```

有关shell-scripting的更多信息，请[访问此处](https://www.shellscript.sh/)