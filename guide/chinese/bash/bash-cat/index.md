---
title: Bash Cat
localeTitle: Bash Cat
---

## Cat

Cat是Unix操作系统中最常用的命令之一。

Cat用于按顺序读取文件并将其打印到标准输出。 这个名字是从它的功能（con**cat**enate files）而来。

### 用法

```bash
cat [options] [file_names] 
```

最常用的选项：

*   `-b` ，数字非空白输出行
*   `-n` ，对所有输出行进行编号
*   `-s` ，挤压多个相邻的空白行
*   `-v` ，显示非打印字符，标签和行尾字符除外

### 例子

在终端机打印file.txt的内容：

```bash
cat file.txt 
```

连接两个文件的内容并在终端机中显示结果：

```bash
cat file1.txt file2.txt 
```

#### 更多信息：

*   维基百科：https：//en.wikipedia.org/wiki/Cat\_（Unix）
