---
title: Bash Head
localeTitle: Bash Head
---
## Bash命令：头

Head用于打印前十行（默认情况下）或指定文件或文件的任何其他数量。 Cat用于按顺序读取文件并将其打印到标准输出。 即打印出整个文件的全部内容。 - 这并不总是必要的，也许您只想检查文件的内容以查看它是否正确，或检查它确实不是空的。 head命令允许您查看文件的前N行。

如果调用多于on file，则显示每个文件的前十行，除非指定了特定行数。 使用下面的选项选择显示文件头是可选的

### 用法

```bash
head [options] [file_name(s)] 
```

最常用的选项：

*   `-n N` ，打印出文件的前N行
*   `-q` ，不打印文件头
*   `-v` ，始终打印出文件头

### 例

```bash
head file.txt 
```

打印终端前十行file.txt（默认）

```bash
head -n 7 file.txt 
```

在file.txt的前七行中打印终端

```bash
head -q -n 5 file1.txt file2.txt 
```

在终端中打印file1.txt的前5行，然后是file2.txt的前5行

### 更多信息：

*   [维基百科](https://en.wikipedia.org/wiki/Head_(Unix))