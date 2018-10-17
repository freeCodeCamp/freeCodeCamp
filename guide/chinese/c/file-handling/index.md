---
title: File Handling
localeTitle: 文件处理
---
## 文件处理

### 介绍

如果您以前编写过C `helloworld`程序，那么您已经在C中完成了文件IO！恭喜！ ：田田：

```c
/* A simple hello world in C. */ 
 #include <stdlib.h> 
 
 // Import IO functions. 
 #include <stdio.h> 
 
 int main() { 
    // This printf is where all the file IO magic happens! 
    // How exciting! 
    printf("Hello, world!\n"); 
    return EXIT_SUCCESS; 
 } 
```

文件处理是程序员最重要的部分。在C语言中，我们使用文件类型的结构指针来声明文件

```c
FILE *fp; 
```

C提供了许多内置函数来执行基本文件操作

**fopen（）** **\-** **创建新文件或打开现有文件**

**fclose（）** **\-** **关闭文件**

**getc（）** **\-** **从文件中读取一个字符**

**putc（）** **\-** **将一个字符写入文件**

**fscanf（）** **\-** **从文件中读取一组数据**

**fprintf（）** **\-** **将一组数据写入文件**

**getw（）** **\-** **从文件中读取一个整数**

**putw（）** **\-** **将一个整数写入文件**

**fseek（）** **\-** **将位置设置为欲望点**

**ftell（）** **\-** **给出文件中的当前位置**

**rewind（）** **\-** **将位置设置为起始点**

### 打开文件

**fopen（）**函数用于创建文件或打开现有文件

`c fp = fopen(const char filename,const char mode);`

在C中，有许多打开文件的模式 **r** **\-** **以读取模式打开文件**

**w** **\-** **以书写模式打开或创建文本文件**

**a** **\-** **以追加模式打开文件**

**r +** **\-** **以读写模式打开文件**

**a +** **\-** **以读写模式打开文件**

**w +** **\-** **以读写模式打开文件**

这是一个读取和写入文件数据的示例

\`\`\`C ＃包括

# 包括

主要（） { FILE \* fp; char ch; fp = fopen（“hello.txt”，“w”）; printf（“输入数据”）; while（（ch = getchar（））！= EOF）{ putc将（CH，FP）; } FCLOSE（FP）; fp = fopen（“hello.txt”，“r”）;

while（（ch = getc（fp）！= EOF） 的printf（ “％C”，CH）;

FCLOSE（FP）; }
```
Now you might be thinking, "this justs prints text to my screen.  How is this file IO?" 
 The answer isn't obvious at first, and needs some understanding about the UNIX system. 
 Under a UNIX system, everything is treated as a file, meaning you can read and write from it. 
 This means that your printer can be abstracted as a file since all you do with a printer is write with it. 
 It is also useful to think of these files as streams, since as you'll see later, you can redirect them with the shell. 
 
 So how does this relate to `helloworld` and file IO? 
 
 When you call `printf`, you are really just writing to a special file called `stdout`, short for __standard output__. 
 `stdout` represents, well, the standard output as decided by your shell, which is usually the terminal. 
 This explains why it printed to your screen. 
 
 There are two other streams (ie files) that are available to you with effort, `stdin` and `stderr`. 
 `stdin` represents the __standard input__, which your shell usually attaches to the keyboard. 
 `stderr` represents the __standard error__ output, which your shell usually attaches to the terminal. 
 
 ### Rudimentary File IO, or How I Learnt to Lay Pipes 
 Enough theory, let's get down to business by writing some code! 
 The easist way to write to a file is to redirect the output stream using the output redirect tool, `>`. 
 If you want to append, you can use `>>`. _N.b. these redirection operators are in_ `bash` _and similar shells._ 
```

庆典

# 这将输出到屏幕......

。/你好，世界

# ...但这会写入文件！

./helloworld> hello.txt
```
The contents of `hello.txt` will, not surprisingly, be 
```

你好，世界！
```
Say we have another program called `greet`, similar to `helloworld`, that greets you given your name. 
```

C

# 包括

# 包括

int main（）{ //初始化一个数组以保存名称。 char name \[20\]; //读取一个字符串并将其保存到名称。 scanf（“％s”，名称）; //打印问候语。 printf（“你好，％s！”，名字）; 返回EXIT\_SUCCESS; }
```
Instead of reading from the keyboard, we can redirect `stdin` to read from a file using the `<` tool. 
```

庆典

# 写一个包含名字的文件。

echo Kamala> name.txt

# 这将从文件中读取名称并将问候语打印到屏幕上。

./greet <name.txt

# \==>你好，卡玛拉！

# 如果您还想将问候语写入文件，可以使用“>”进行。
```
### The Real Deal 
 The above methods only worked for the most basic of cases.  If you wanted to do bigger and better things, you will probably want to work with files from within C instead of through the shell. 
 To accomplish this, you will use a function called `fopen`.  This function takes two string parameters, the first being the file name and the second being the mode. 
 Mode is basically permissions, so `r` for read, `w` for write, `a` for append.  You can also combine them, so `rw` would mean you could read and write to the file.  There are more modes, but these are the most used. 
 
 After you have a `FILE` pointer, you can use basically the same IO commands you would've used, except that you have to prefix them with `f` and the first argument will be the file pointer. 
 For example, `printf`'s file version is `fprintf`. 
 
 Here's a program called `greetings` that reads a from a file containing a list of names and writes to another file the greetings. 
```

C

# 包括

# 包括

int main（）{ //创建文件指针 FILE \* names = fopen（“names.txt”，“r”）; FILE \* greet = fopen（“greet.txt”，“w”）;
```
// Check that everything is OK. 
 if (!names || !greet) { 
    fprintf(stderr, "File opening failed!\n"); 
    return EXIT_FAILURE; 
 } 
 
 // Greetings time! 
 char name[20]; 
 // Basically keep on reading untill there's nothing left. 
 while (fscanf(names, "%s\n", name) > 0) { 
    fprintf(greet, "Hello, %s!\n", name); 
 } 
 
 // When reached the end, print a message to the terminal to inform the user. 
 if (feof(names)) { 
    printf("Greetings are done!\n"); 
 } 
 
 return EXIT_SUCCESS; 
```

}
```
Suppose `names.txt` contains the following: 
```

卡马拉 洛根 颂歌
```
Then after running `greetings` the file `greet.txt` will contain: 
```

你好，卡玛拉！ 你好，洛根！ 你好，卡罗尔！ \`\`\`

超级棒，对吧！ ：微笑：

### 更多信息：

*   [Wikibooks文件IO页面](https://en.wikibooks.org/wiki/C_Programming/File_IO)