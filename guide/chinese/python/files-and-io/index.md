---
title: Files and IO
localeTitle: 文件和IO
---
## 文件和IO

文件是磁盘上的命名位置，用于存储相关信息。它用于将数据永久存储在非易失性存储器（例如硬盘）中。由于随机存取存储器（RAM）是易失性的，当计算机关闭时会丢失其数据，因此我们使用文件将来使用数据。

当我们想要读取或写入文件时，我们需要先打开它。完成后，需要关闭它，以便释放与文件绑定的资源。

因此，在Python中，文件操作按以下顺序进行： 1）打开一个文件 2）读或写（执行操作） 3）关闭文件

Python有许多输入和输出操作方式。某些输出操作可以是打印文本，控制台日志，甚至可以输出文本或电子表格文件。

### 输出到屏幕

Python提供了生成屏幕输出的最简单方法。

```python
print "Python is a powerful language.","It is easy to learn." 
```

输出：
```
Python is a powerful language.It is easy to learn. 
```

### 来自用户的输入

有两种方法可以从用户那里获取输入。

的raw\_input（\[提示\]）

用于从标准输入读取一行并将其作为字符串返回

```python
str = raw_input("Enter your name: ") 
 print "Welcome ", str 
```

输出：
```
Enter your name: John Doe 
 Welcome John Doe 
```

输入（提示）

与raw\_input（）类似的功能，但假设输入是有效的Python表达式

```python
str = input("Enter input: ") 
 print "Input: ", str 
```

输出：
```
Enter input: [x*5 for x in range(2,10,2)] 
 Input: [10,20,30,40] 
```

### 在Python中与文件交互

使用Python，可以轻松打开，读取，写入和关闭文件。有了可用的功能：

1.  `open()`
2.  `read()`
3.  `write()`
4.  `close()`

例：

```python
file1 = open("foo.txt", "r+")     # Opens the file with read permission. 
 file1.write("Python is a powerful language.It is easy to learn.")     # Writes data into the file. 
 data = file1.read(15)     # Reads first 15 characters in the file. 
 print "First 15 characters are:\n", data     # Prints output 
 file1.close()     # Closes the opened file. 
```

输出：
```
First 15 characters are: 
 Python is a pow 
```

#### 打开文件

python方法open（）可用于返回文件对象。它最常用于两个参数，即文件名和访问模式。访问模式用于描述访问或使用文件的方式。

最常用的模式是'w'，用于写入文件，'r'用于读取文件，'r +'用于读写文件。 'a'是用于将文本附加到文件中的模式。 mode参数也是可选的，如果省略则将被假定为'r'。

在输入和输出操作完成后，必须关闭文件以释放任何资源。

打开文本文件的示例代码：

\`\`\`python file = open（'hello\_world.txt'，'w'） file.write（'Hello World！'） file.close（）
```
##### Using with 
 An alternative to using the `open()` function in standalone is to make use of the `with` statement to open a file. This is considered best practice as it allows the Python framework to manage the context of opening the file, and will autmoatically perform any required resource cleanup. 
 
 This is adventageous in the fact that it takes the onus off the programmer to close every file that is opened, and that the file will still be closed even if an exception was encountered during an IO operation. 
 
 When using the `with` statement is important to note that access to the file will only available within the scope of the `with` block. 
 
 To open a file using the `with` statement the `with` keyword is entered, followed by the call to `open(file)`. Following this the variable used as a handle to the open file is declared after the `as` keyword. Once the programs execution returns from this block, the file will be closed automatically. 
 
 Sample code to open a text file using the `with` statement: 
```

用open（'hello\_world.txt'，'w'）作为f： f.write（'Hello World！'） \`\`\`

#### 更多信息：

[Python文档 - IO](https://docs.python.org/2/tutorial/inputoutput.html) [自动化无聊的东西](https://automatetheboringstuff.com/chapter8/) [教程点 - Python IO](https://www.tutorialspoint.com/python/python_files_io.htm) [8 PEP 343：'with'声明](https://docs.python.org/2.5/whatsnew/pep-343.html)