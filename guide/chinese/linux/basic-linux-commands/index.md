---
title: Basic Linux Commands
localeTitle: 基本Linux命令
---
## 基本Linux命令

当开始使用linux时，每个人都应该知道一些基本命令。

1.  **cd** - 更改目录

- cd后跟一个目录或文件路径将带你进入该目录（文件夹）。

2.  **ls** - list命令

- 键入`ls`并显示当前目录的内容。

3.  **man** - 手动命令

- 显示以下命令的手册。在尝试弄清楚不熟悉的命令如何工作时，这非常有用。例如，键入`man ls`以获取有关ls命令的所有信息。输入`q`退出。

4.  **pwd** - 路径

- 键入`pwd`以显示当前目录的路径。

5.  **mkdir** - 制作目录

- 此命令后跟您希望命名目录的名称，将创建一个新目录。 `mkdir folder1`将创建一个名为folder1的新目录。

6.  **rmdir** - 删除目录

- 删除该命令后面的目录。 `rmdir folder1`将删除名为folder1的目录（如果存在）。

7.  **rm** - 删除

- 此命令删除文件，而不删除目录。 `rm file.txt`将删除名为file.txt的文件，只要该文件存在且位于当前目录中。

8.  **touch** - 创建文件

- touch命令用于创建文件。它可以是任何东西，从空的txt文件到空的zip文件。 'touch new.txt'将创建一个名为new的新文件。

9.  **mv** - 移动

- 使用mv命令通过命令行移动文件。我们还可以使用mv命令重命名文件。例如，如果我们想将文件“text”重命名为“new”，我们可以使用“mv text new”。
- **警告，此命令能够摧毁整个系统，请谨慎使用**

10.  **right-click** - 复制并粘贴

- 这个不是命令，而是更多的操作方法，但是，它对于在Linux上的终端中执行几乎任何操作都非常有用。首先，突出显示正常的文本，然后在鼠标上“右键单击”以复制选择。您应该看到突出显示的部分未突出显示，这意味着您复制了选择。现在，右键单击要粘贴选区的位置，即可完成。

11.  **less** - 查看文件内容

- 使用`less filename.txt`查看文件的内容并浏览它们。默认情况下，less将逐页浏览文件。

12. **cat** - 查看文件文本内容
- 使用本命令来将指定文件的内容显示在终端上。输入 `cat myFile.txt` 将会在屏幕上显示`myFile.txt`文件的内容。`cat`与_pipes_机制一起使用将会成为非常实用的工具。

13. **clear** - 清空终端
- 使用本命令来清空终端上显示的所有内容。

14. **cp** - 拷贝文件和路径
- 使用 `cp` 命令来拷贝文件，或者内含文件的路径到其他位置，命令行为'cp CURRENT_FILE-LOCATION DESTINATION_FOLDER'。添加 -r 参数来拷贝非空路径。

15. **grep** -  grep搜索任何给定的输入文件，选择与一个或多个模式匹配的行。
- 使用`grep`查找文件，目录，文件/目录中的一些文本。
**例子:**
```sh
 $ ps ax | grep -w login
 25291 s000  Ss     0:00.11 login -pf <user>
 25467 s000  R+     0:00.00 grep -w login
 25409 s004  Ss     0:00.04 login -pf <user>
```

16. **df -h** 以易读的方式显示磁盘空间
- 显示已安装的驱动器/分区的大小，使用的数量，可用的数量和容量百分比。

### 有用的资源:
- [JSLinux](https://bellard.org/jslinux/vm.html?url=https://bellard.org/jslinux/buildroot-x86.cfg): Run the terminal inside your browser. Great for practice.
- [LearnShell](https://www.learnshell.org/): Interactive Linux shell (terminal) tutorials.
- [LinuxJourney](https://linuxjourney.com/lesson/the-shell): A collection of beginner-friendly terminal tutorials.
