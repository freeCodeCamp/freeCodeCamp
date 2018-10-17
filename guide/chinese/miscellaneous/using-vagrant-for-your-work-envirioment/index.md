---
title: Using Vagrant for Your Work Envirioment
localeTitle: 使用Vagrant为您的工作环境
---
以下说明将帮助您安装必要的软件以及如何设置您的第一个Vagrant和Virtual Box。

## 安装

这将创建一个工作环境，以便您可以在本地计算机上测试您的网站。 **Vagrantfile**可以根据您的特定环境进行配置，以便与您合作的任何人都可以制作和查看更改，无论他们使用的是Linux，Mac OS X还是Windows。使用此虚拟环境，您将能够看到PHP脚本运行，构建和使用您的数据库等等。所以，没有进一步或做，让我们开始做生意。

查看以下链接并安装每个程序。确保它与您的操作系统（操作系统）匹配。

*   [虚拟盒子](https://www.virtualbox.org/)
*   [流浪汉](https://www.vagrantup.com/downloads.html)
*   [Git Bash，Gui和Command](https://git-scm.com/downloads)

现在我们已经安装了必要的程序，让我们开始做生意。

**Git**有几个我们可以在这里使用的不同程序。让我们打开**Git GUI** 。我们也可以启动**Virtual Box，**以便我们可以看到盒子在运行。

运行**Git GUI后** ，您将看到几个选项。让我们选择顶部选项**“创建新存储库”** 。

选择**“浏览”**按钮，然后选择要安装的驱动器并运行虚拟机/服务器。您可以右键单击文件夹区域并创建一个新文件夹。我们将它命名为**FreeCodeCampMachine** 。

现在，您将看到**Git Gui** ，在Directory旁边，您应该看到**C：/ FreeCodeCampMachine** 。

在底部，选择**“创建”**按钮。

现在界面看起来不同了。不要担心底部的任何按钮，也不要担心顶部的所有选项。我们想要做一件事。选择左上角显示**“Repository”的**选项，然后在该选项下，您将找到**“Git Bash”** 。选择**Git Bash** 。

现在我们看到我们在终端/控制台窗口中。您应该看到计算机的名称，然后是**MINGW64 / d / FreeCodeCampMachine（master）** 。这只是说我们在您创建的文件夹中运行，并且您在**主**存储库中。稍后我们将创建一个分支，但稍后我们会担心。

现在，让我们抛出一些命令，让球滚动。首先输入以下内容并按Enter键：
```
$ git clone https://github.com/scotch-io/scotch-box myProject 
```

这将在您的目录中创建一个名为**“myProject”**的文件夹。接下来，让我们深入到该文件夹​​，输入以下命令并按Enter键：
```
$ cd myProject 
```

现在我们在我们想要的文件夹中。现在在命令行上键入以下内容并按Enter键：
```
vagrant up 
```

现在，让我们打开浏览器窗口并输入以下IP地址：
```
http://192.168.33.10/ 
```

您应该会看到**Scotch Box**的登录页面，告诉您存在的所有内容并进行安装。现在，当您浏览之前创建的文件时，您会发现一个**“公开”的文件** 。在该文件夹中，您将看到名为**“index.php”**的文件，这就是您对着陆页所看到的内容。您可以使用文本编辑器编辑该文件，保存并刷新浏览器以查看更改。