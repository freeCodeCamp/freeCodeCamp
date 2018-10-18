---
title: Kotlin
localeTitle: 科特林
---
**什么是Kotlin？**

[Kotlin](https://kotlinlang.org/)是一种由[Jetbrains](https://www.jetbrains.com)开发的编程语言， [Jetbrains](https://www.jetbrains.com)是世界上最流行的一些IDE（如IntelliJ和Pycharm）背后的公司。

它可以替代Java并在JVM上运行。它已经开发了近6年，而且仅在一年前达到1.0。

开发者社区已经接受了Kotlin，以至于Google在[Google I / O 2017](https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/)上宣布了对Android开发语言的一流支持。

## 版

在撰写本文时，Kotlin的最新稳定版本恰好是[版本1.2.71](https://blog.jetbrains.com/kotlin/2018/09/kotlin-1-2-70-is-out/)

## 安装

在继续Kotlin的安装说明之前，您需要确保已在系统上设置了**JDK（Java Development Kit）** 。

如果您的计算机上未安装JDK，请转到[此链接](https://guide.freecodecamp.org/java)上的“ **安装”部分** [以了解](https://guide.freecodecamp.org/java)如何进行设置。

Kotlin可与**JDK 1.6+配合使用，**因此请确保安装了正确的版本。完成JDK设置后，请继续执行以下步骤。

*   \## IntelliJ IDEA 让Kotlin在你的机器上运行的最快方法是将它与**IntelliJ IDEA**一起使用。这是Kotlin推荐的IDE，因为Jetbrains提供了工具支持。您可以从[JetBrains](https://www.jetbrains.com)获取IntelliJ的[Community Edition](http://www.jetbrains.com/idea/download/index.html) 。

一旦安装了IntelliJ，您基本上就可以开始使用Kotlin中的第一个项目而无需进一步配置。

创建一个**新项目**并确保选择Java模块。选择该屏幕上的Kotlin复选框

![新项目屏幕](https://kotlinlang.org/assets/images/tutorials/getting-started/new_project_step1.png)

为项目命名，然后单击“完成”。

![项目名](https://kotlinlang.org/assets/images/tutorials/getting-started/project_name.png)

现在，您将进入主编辑器，您将看到以下列方式组织项目文件。

![项目结构](https://kotlinlang.org/assets/images/tutorials/getting-started/folders.png)

为了验证您的安装，请在**src**文件夹中创建一个新的Kotlin文件，并将其命名为**app** （或任何其他适合您的文件）

![项目结构](https://kotlinlang.org/assets/images/tutorials/getting-started/new_file.png)

创建文件后，键入以下Cremonial Hello World代码。不要担心，如果它没有意义，它将在后面的指南中详细讨论。

\`\`\` 有趣的主要（args：数组 ）{ println（“Hello World！”） }
```
![project structure ](https://kotlinlang.org/assets/images/tutorials/getting-started/hello_world.png) 
 
 You can now run this program by either clicking on the Kotlin icon on the gutter (left side of your editor with line numbers) 
 
 ![hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_default.png) 
 
 If everything goes fine, you should see the message Hello World! in your Run window as shown below 
 
 ![run window ](https://kotlinlang.org/assets/images/tutorials/getting-started/run_window.png) 
 
 
 
 * ## Eclipse 
 
 While IntelliJ is the recommended IDE for developing with Kotlin, it is definitely not the only option out there. **Eclipse** happens to be another popular IDE of choice among Java developers and Kotlin is supported by Eclipse as well. 
 
 After setting up the **JDK** on your system, follow the instructions below. 
 
 Download <a href='https://www.eclipse.org/downloads/'>**Eclipse Neon** </a>for your operating system and once you have successfully installed it on your system, download the **Kotlin Plugin** for Eclipse from the <a href='http://marketplace.eclipse.org/content/kotlin-plugin-eclipse'>**Eclipse Marketplace**</a>. 
 
 ![eclipse marketplace ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/marketplace.png) 
 
 ***NOTE: You can also do the same by going into Help -> Eclipse Marketplace and then search for Kotlin Plugin*** 
 
 Once, the plugin is installed you are pretty much done but it would be a good idea to take the IDE for a spin with a quick Hello World sample. 
 
 Create a new Kotlin Project by clicking on File -> New -> Kotlin Project 
 
 ![new kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/new-project.png) 
 
 An empty project will be created with a directory structure quite similar to a Java project. It would look something like this 
 
 ![empty kotlin project ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/empty-project.png) 
 
 Go ahead and create a new Kotlin file in the **src** folder 
 
 Once that is done go ahead and type out the following code. Don't worry if it does not make sense right now, it will be covered later in the guide. 
```

有趣的主要（args：数组 ）{ println（“Hello World！”） }
```
![eclipse hello world ](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/hello-world.png) 
 
 Now that you are done typing out the Hello World code, go ahead and run it. To run the file, right click anywhere inside the editor and click on ***Run As -> Kotlin Application*** 
 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/run-as.png) 
 
 If all goes well, the console window would open to show you the output. 
 
 ![eclipse run app](https://kotlinlang.org/assets/images/tutorials/getting-started-eclipse/output.png) 
 
 * ## Using the standalone compiler on the terminal 
 If you are someone who prefers doing things in a more manual way and do not want to tie yourself down to an editor/IDE you might wanna use the Kotlin compiler. 
 
 ### Downloading the compiler 
 
 With every release of Kotlin, Jetbrains ship a standalone compiler which can be downloaded from the <a href='https://github.com/JetBrains/kotlin/releases/tag/v1.1.51'>GitHub releases</a>. Version 1.1.51 happens to be the latest at the time of this writing. 
 
 
 </br> 
 
 **Manual Installation** 
 
 Once you have downloaded the compiler you need to unzip it and proceed with the standard installation using the installation wizard. Adding the **bin** directory to the system path is an optional step. It contains the scripts that are necessary to compile and run Kotlin on Windows, Linux and macOS. 
 
 </br> 
 
 **Installation via Homebrew** 
 
 You can install the compiler on macOS using <a href='http://brew.sh/'>Homebrew </a>which is a package manager for macOS. Launch the Terminal app and issue the following commands 
```

$ brew更新 $ brew安装kotlin
```
**Installation via SDKMAN!** 
 
 Another simple way of installing the Kotlin compiler on macOS, Linux, Cygwin, FreeBSD and Solaris is by using <a href='http://sdkman.io/'>SDKMAN!</a>. Launch the terminal and issue the following commands 
```

$ curl -s https://get.sdkman.io | bash\`\`\`

按照屏幕上的说明和SDKMAN一次！设置在终端内发出follwoing命令

`$ sdk install kotlin`

与之前的所有安装选项一样，测试运行安装是个不错的主意。

打开您选择的文本编辑器并编写下面给出的基本Kotlin程序
```
fun main(args: Array<String>) { 
    println("Hello, World!") 
 } 
```

使用**.kt**扩展名保存此文件。您现在可以编译它并查看结果了。为此，请发出以下命令

`$ kotlinc hello.kt -include-runtime -d hello.jar`

`-d`选项告诉编译器您希望调用输出。 `-include-runtime`选项通过在其中包含Kotlin运行时库，使得生成的.jar文件自包含且可运行。

如果没有编译错误，请使用以下命令运行该应用程序

`$ java -jar hello.jar`

如果一切顺利，你应该看到**Hello World！**打印在终端屏幕上
```
$ java -jar hello.jar 
 Hello, World! 
```

恭喜您已成功在系统上设置Kotlin编译器和开发环境。我们将在本指南中介绍Kotlin的所有复杂和有趣的部分，但如果您想要通过[Try Kotlin](https://try.kotlinlang.org/)网站并在那里进行练习，您可以获得一个先机。

## 文档

Kotlin最大的优点之一就是它全面而结构良好的文档。即使你是编程新手，你也会发现自己就在家里。他们以一种结构良好的方式完成所有工作，他们做得非常出色。您可以在[此链接](https://kotlinlang.org/docs/reference/)查看官方文档。