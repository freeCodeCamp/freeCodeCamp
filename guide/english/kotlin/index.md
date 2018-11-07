---
title: Kotlin
---

**What is Kotlin?**

<a href='https://kotlinlang.org/'>Kotlin</a> is a programming language developed by <a href='https://www.jetbrains.com'>Jetbrains</a>, the company behind some of the world's most popular IDEs like <a href='https://www.jetbrains.com/idea/'>IntelliJ</a> and <a href='https://www.jetbrains.com/pycharm/'>Pycharm</a>.

 It serves as a replacement for Java and runs on the JVM. It has been in development since 2011 and version 1.0 was released in August 2016. 
 
 The developer community has embraced Kotlin to such an extent that Google announced first class support for the language for Android Development at <a href='https://blog.jetbrains.com/kotlin/2017/05/kotlin-on-android-now-official/'>Google I/O 2017</a>.

## Version
As of this writing, the latest stable release of Kotlin happens to be <a href='https://blog.jetbrains.com/kotlin/2018/09/kotlin-1-2-70-is-out/'>version 1.2.71</a>

## Installation 

Before proceeding with the installation instructions for Kotlin, you need to make sure that you have set up **JDK (Java Development Kit)** set up on your system.

If you do not have JDK installed on your computer, head over to the **Installation section** on <a href = 'https://guide.freecodecamp.org/java'>this link to learn</a> how to set it up.

Kotlin works with **JDK 1.6+** so make sure you get the correct version installed. Once you are done setting up JDK, proceed with the following steps.


* ## IntelliJ IDEA
The quickest way to get Kotlin running on your machine is using it alongside the **IntelliJ IDEA** IDE. This is the recommended IDE for Kotlin because of the tooling support that is provided by Jetbrains. You can grab the <a href='http://www.jetbrains.com/idea/download/index.html'>Community Edition</a> of IntelliJ from JetBrains.

Once you have installed IntelliJ, you can get started with your first project in Kotlin without any further configurations.

Create a **New Project** and make sure you select the Java Module. Select the Kotlin checkbox on that screen. 

![new project screen](https://kotlinlang.org/assets/images/tutorials/getting-started/new_project_step1.png)

Give your project a name and click Finish.

![project name ](https://kotlinlang.org/assets/images/tutorials/getting-started/project_name.png)

You will now be taken to the main editor where you will see your project files organized in the following manner.

![project structure ](https://kotlinlang.org/assets/images/tutorials/getting-started/folders.png)

In order to verify your installation, create a new Kotlin file in the **src** folder and name it **app** (or anything else that suits you)


![project structure ](https://kotlinlang.org/assets/images/tutorials/getting-started/new_file.png)

Once you have the file created, type out the following ceremonial Hello World code. Don't worry if it doesn't make sense right away, it will be dealt with in detail later on in the guide.

``` 
fun main (args: Array<String>) {
    println("Hello World!")
}
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
fun main (args: Array<String>) {
    println("Hello World!")
}
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
$ brew update
$ brew install kotlin
```
**Installation via SDKMAN!**

Another simple way of installing the Kotlin compiler on macOS, Linux, Cygwin, FreeBSD and Solaris is by using <a href='http://sdkman.io/'>SDKMAN!</a>. Launch the terminal and issue the following commands

```$ curl -s https://get.sdkman.io | bash```

Follow the instructions on screen and once SDKMAN! is setup issue the follwoing command inside terminal


```$ sdk install kotlin```

As with all previous installation options, it would be a good idea to test run the installation. 

Open a text editor of your choice and write a basic Kotlin program given below 

```
fun main(args: Array<String>) {
    println("Hello, World!")
}
```
Save this file with a **.kt** extension. You are now ready to compile it and see the results. To do so, issue the following command


```$ kotlinc hello.kt -include-runtime -d hello.jar```

the ```-d``` option tells the compiler what you want the output to be called.  The ```-include-runtime``` option makes the resulting .jar file self-contained and runnable by including the Kotlin runtime library in it.

If there were no compilation errors, run the application using the following command

```$ java -jar hello.jar```

If all goes well, you should see **Hello World!** printed on your terminal screen

```
$ java -jar hello.jar       
Hello, World!
```
Congratulations you have successfully set up the Kotlin compiler and development environment on your system. We will cover all of the intricacies and fun parts of Kotlin in this guide, but you can get a headstart if you want by going to the <a href='https://try.kotlinlang.org/'>Try Kotlin</a> website and going through the exercises there.

## Documentation

One of the greatest things about Kotlin is its comprehensive and well structured documentation. Even if you are new to programming, you will find yourself right at home with the docs. They do a pretty amazing job at laying it all out in a well structured manner. You can check out the official documentation at <a href='https://kotlinlang.org/docs/reference/'>this link</a>.

