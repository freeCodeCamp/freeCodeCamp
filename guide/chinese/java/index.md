---
title: Java
localeTitle: Java
---
**什么是Java？**

[Java](https://www.oracle.com/java/index.html)是[Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems)在1995年开发的一种编程语言，后来被[Oracle](http://www.oracle.com/index.html)收购。它现在是一个完整的平台，包含许多标准API，开源API，工具，庞大的开发人员社区，用于构建大小公司最值得信赖的企业解决方案。 [Android](https://www.android.com/)应用程序开发完全由Java及其生态系统完成。要了解有关Java的更多信息，请阅读[本文](https://java.com/en/download/faq/whatis_java.xml)和[此内容](http://tutorials.jenkov.com/java/what-is-java.html) 。

## 版

最新版本是[Java 11](http://www.oracle.com/technetwork/java/javase/overview) ，它于2018年发布，对以前的版本Java 10进行了[各种改进](https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html) 。但是出于所有意图和目的，我们将在本维基中使用Java 8来完成所有教程。

Java也分为几个“版本”：

*   [SE](http://www.oracle.com/technetwork/java/javase/overview/index.html) - 标准版 - 适用于桌面和独立服务器应用程序
*   [EE](http://www.oracle.com/technetwork/java/javaee/overview/index.html) - Enterprise Edition - 用于开发和执行嵌入Java服务器的Java组件
*   [ME](http://www.oracle.com/technetwork/java/embedded/javame/overview/index.html) - Micro Edition - 用于在移动电话和嵌入式设备上开发和执行Java应用程序

## 安装：JDK还是JRE？

从[官方网站](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)下载最新的Java二进制文件。在这里您可能会遇到一个问题，下载哪个，JDK或JRE？ JRE代表Java Runtime Environment，它是依赖于平台的Java虚拟机来运行Java代码，JDK代表Java Development Kit，它由大多数开发工具组成，最重要的是编译器`javac` ，以及JRE。因此，对于普通用户而言，JRE就足够了，但由于我们将使用Java进行开发，因此我们将下载JDK。

## 平台特定安装说明

### 视窗

*   下载相关的[.msi](https://en.wikipedia.org/wiki/Windows_Installer)文件（x86 / i586用于32位，x64用于64位）
*   运行.msi文件。它是一个自解压的可执行文件，它将在您的系统中安装Java！

### Linux的

*   下载适用于您系统的相关[tar.gz](http://www.cyberciti.biz/faq/linux-unix-bsd-extract-targz-file/)文件并安装：

`bash $ tar zxvf jdk-8uversion-linux-x64.tar.gz`

*   [基于RPM的Linux平台](https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based)下载相关的[.rpm](https://en.wikipedia.org/wiki/RPM_Package_Manager)文件并安装：

`bash $ rpm -ivh jdk-8uversion-linux-x64.rpm`

*   用户可以选择安装Java，OpenJDK或Oracle JDK的开源版本。虽然OpenJDK正在积极开发并与Oracle JDK同步，但它们在[许可方面](http://openjdk.java.net/faq/)有所不同。然而，很少有开发人员抱怨Open JDK的稳定性。 **Ubuntu**说明：

打开JDK安装：  
`bash sudo apt-get install openjdk-8-jdk`

Oracle JDK安装：  
`bash sudo add-apt-repository ppa:webupd8team/java sudo apt-get update sudo apt-get install oracle-java8-installer`

### 苹果电脑

*   从Oracle下载中下载Mac OSX .dmg可执行文件
*   或者使用[Homebrew](http://brew.sh/) [安装](http://stackoverflow.com/a/28635465/2861269) ：

`bash brew tap caskroom/cask brew install brew-cask brew cask install java`

### 验证安装

通过打开命令提示符（Windows）/ Windows Powershell / Terminal（Mac OS和\* Unix）并检查Java运行时和编译器的版本来验证Java是否已在系统中正确安装：
```
$ java -version 
 java version "1.8.0_66" 
 Java(TM) SE Runtime Environment (build 1.8.0_66-b17) 
 Java HotSpot(TM) 64-Bit Server VM (build 25.66-b17, mixed mode) 
 
 $ javac -version 
 javac 1.8.0_66 
```

**提示** ：如果您在`java`或`javac`或两者上都收到诸如“未找到命令”之类的错误，请不要惊慌，它只是您的系统PATH未正确设置。对于Windows，请参阅[此StackOverflow答案](http://stackoverflow.com/questions/15796855/java-is-not-recognized-as-an-internal-or-external-command)或[本文](http://javaandme.com/)有关如何执行此操作。还有[Ubuntu](http://stackoverflow.com/questions/9612941/how-to-set-java-environment-path-in-ubuntu)和[Mac的](http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/)指南。如果你仍然想不通，不要担心，只要在我们的[Gitter房间](https://gitter.im/FreeCodeCamp/java)问我们！

## JVM

好了，既然我们完成了安装，那么我们首先要开始了解Java生态系统的细节。 Java是一种[解释和编译的](http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language)语言，即我们编写的代码被编译为字节码并被解释为运行。我们在.java文件中编写代码，Java将它们编译为[字节码](https://en.wikipedia.org/wiki/Java_bytecode) ，这些[字节码](https://en.wikipedia.org/wiki/Java_bytecode)在Java虚拟机或JVM上运行以便执行。这些字节码通常具有.class扩展名。

Java是一种非常安全的语言，因为它不会让您的程序直接在计算机上运行。相反，您的程序在名为JVM的虚拟机上运行。此虚拟机公开了几个API，用于您可以进行的低级机器交互，但除此之外，您无法明确地使用机器指令。这增加了巨大的安全性。

此外，一旦编译了字节码，它就可以在任何Java VM上运行。该虚拟机依赖于机器，即它具有不同的Windows，Linux和Mac实现。但是由于这个VM，你的程序可以保证在任何系统中运行。这种理念被称为[“一次编写，随处运行”](https://en.wikipedia.org/wiki/Write_once,_run_anywhere) 。

## 你好，世界！

我们来编写一个示例Hello World应用程序。打开所选的任何编辑器/ IDE并创建一个文件`HelloWorld.java` 。
```
public class HelloWorld { 
 
    public static void main(String[] args) { 
        // Prints "Hello, World" to the terminal window. 
        System.out.println("Hello, World"); 
    } 
 
 } 
```

**NB**请记住，Java文件名应该**与公共类的名称完全相同**才能编译！

现在打开终端/命令提示符。将终端/命令提示符中的当前目录更改为文件所在的目录。并编译文件：
```
$ javac HelloWorld.java 
```

现在使用`java`命令运行该文件！
```
$ java HelloWorld 
 Hello, World 
```

恭喜！您的第一个Java程序已成功运行。这里我们只是打印一个字符串，将其传递给API `System.out.println` 。我们将介绍代码中的所有概念，但欢迎您[仔细查看](https://docs.oracle.com/javase/tutorial/getStarted/application/) ！如果您有任何疑问或需要其他帮助，请随时在我们的[Gitter Chatroom](https://gitter.im/FreeCodeCamp/java)联系我们！

## 文档

Java有大量[文档记录](https://docs.oracle.com/javase/8/docs/) ，因为它支持大量的API。如果您使用的是Eclipse或IntelliJ IDEA等任何主要IDE，您会发现其中包含Java文档。

此外，这里是Java编码的免费IDE列表：

*   [NetBeans](https://netbeans.org/)
*   [日食](https://eclipse.org/)
*   [IntelliJ IDEA](https://www.jetbrains.com/idea/features/)
*   [Android Studio](https://developer.android.com/studio/index.html)
*   [BlueJ](https://www.bluej.org/)
*   [jEdit](http://www.jedit.org/)
*   [Oracle JDeveloper](http://www.oracle.com/technetwork/developer-tools/jdev/overview/index-094652.html)
