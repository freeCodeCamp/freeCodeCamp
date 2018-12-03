---
title: Java
---

**What is Java?**

<a href='https://www.oracle.com/java/index.html' target='_blank' rel='nofollow'>Java</a> is an object-oriented programming language developed by <a href='https://en.wikipedia.org/wiki/Sun_Microsystems' target='_blank' rel='nofollow'>Sun Microsystems</a> in 1995, which was later acquired by <a href='http://www.oracle.com/index.html' target='_blank' rel='nofollow'>Oracle</a>. It's now a full platform with lots of standard APIs, open source APIs, tools, a huge developer community, and is used to build the most trusted enterprise solutions by big and small companies alike. <a href='https://www.android.com/' target='_blank' rel='nofollow'>Android</a> application development is done fully with Java and its ecosystem. To know more about Java, read <a href='https://java.com/en/download/faq/whatis_java.xml' target='_blank' rel='nofollow'>this</a> and <a href='http://tutorials.jenkov.com/java/what-is-java.html' target='_blank' rel='nofollow'>this</a>.

## OBJECT-ORIENTED PROGRAMMING LANGUAGE
JAVA is one of the OBJECT ORIENTED PROGRAMMING LANGUAGES, unlike C and FORTAN which are procedural languages. The OBJECT ORIENTED concept of programming makes it much more efficient than procedural languages. Basically, object orientation breaks the program into parts, which is decided by the programmer. Then the complete program is stored in the permanent memory and when it is executed only that part is brought to dynamic memory which is called by the programmer. Each such part is called a `class` and when it is called in the dynamic memory it is called an `object`.

## Version

The latest version is <a href='http://www.oracle.com/technetwork/java/javase/overview' target='_blank' rel='nofollow'> Java 11</a>, which was released in 2018 with <a href='https://www.oracle.com/technetwork/java/javase/11-relnote-issues-5012449.html' target='_blank' rel='nofollow'>various improvements</a> over the previous version, Java 10. But for all intents and purposes, we will use Java 8 in this wiki for all tutorials.

Java is also divided into several "Editions" :

*   <a href='http://www.oracle.com/technetwork/java/javase/overview/index.html' target='_blank' rel='nofollow'>SE</a> - Standard Edition - for desktop and standalone server applications
*   <a href='http://www.oracle.com/technetwork/java/javaee/overview/index.html' target='_blank' rel='nofollow'>EE</a> - Enterprise Edition - for developing and executing Java components that run embedded in a Java server
*   <a href='http://www.oracle.com/technetwork/java/embedded/javame/overview/index.html' target='_blank' rel='nofollow'>ME</a> - Micro Edition - for developing and executing Java applications on mobile phones and embedded devices

## Installation : JDK or JRE ?

Download the latest Java binaries from the <a href='http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html' target='_blank' rel='nofollow'>official website</a>. Here you may be faced with a question: which one should I download, JDK or JRE? JRE stands for Java Runtime Environment, which is the platform dependent Java Virtual Machine to run Java codes. JDK stands for Java Development Kit, which consists of most of the development tools, most importantly the compiler `javac`, and also the JRE. So, for an average user JRE would be sufficient, but since we will be developing with Java, we should download the JDK.

## Platform specific installation instructions

### Windows

*   Download the relevant <a href='https://en.wikipedia.org/wiki/Windows_Installer' target='_blank' rel='nofollow'>.msi</a> file (x86 / i586 for 32bits, x64 for 64bits)
*   Run the .msi file. Its a self extracting executable file which will install Java in your system!

### Linux

*   Download the relevant <a href='http://www.cyberciti.biz/faq/linux-unix-bsd-extract-targz-file/' target='_blank' rel='nofollow'>tar.gz</a> file for your system and install :

`bash  
$ tar zxvf jdk-8uversion-linux-x64.tar.gz`   
* <a href='https://en.wikipedia.org/wiki/List_of_Linux_distributions#RPM-based' target='_blank' rel='nofollow'>RPM based Linux platforms</a> download the relevant <a href='https://en.wikipedia.org/wiki/RPM_Package_Manager' target='_blank' rel='nofollow'>.rpm</a> file and install :

`bash  
$ rpm -ivh jdk-8uversion-linux-x64.rpm`   
* Users have the choice to install an open source version of Java, OpenJDK or the Oracle JDK. While OpenJDK is in active development and in sync with Oracle JDK, they just differ in <a href='http://openjdk.java.net/faq/' target='_blank' rel='nofollow'>licensing</a> stuff. However few developers complain of the stability of Open JDK. Instructions for **Ubuntu** :

Open JDK installation :  
`bash  
sudo apt-get install openjdk-8-jdk` 

Oracle JDK installation :  
`bash  
sudo add-apt-repository ppa:webupd8team/java  
sudo apt-get update  
sudo apt-get install oracle-java8-installer` 

### Mac

*   Either download Mac OSX .dmg executable from Oracle Downloads
*   Or use <a href='http://brew.sh/' target='_blank' rel='nofollow'>Homebrew</a> to <a href='http://stackoverflow.com/a/28635465/2861269' target='_blank' rel='nofollow'>install</a> :

```bash  
brew tap caskroom/cask  
brew install brew-cask  
brew cask install java
```

### Verify Installation

Verify Java has been properly installed in your system by opening Command Prompt (Windows) / Windows Powershell / Terminal (Mac OS and *Unix) and checking the versions of Java runtime and compiler :

    $ java -version
    java version "1.8.0_66"
    Java(TM) SE Runtime Environment (build 1.8.0_66-b17)
    Java HotSpot(TM) 64-Bit Server VM (build 25.66-b17, mixed mode)

    $ javac -version
    javac 1.8.0_66

**Tip** : If you get an error such as "Command Not Found" on either `java` or `javac` or both, dont panic, its just your system PATH is not properly set. For Windows, see <a href='http://stackoverflow.com/questions/15796855/java-is-not-recognized-as-an-internal-or-external-command' target='_blank' rel='nofollow'>this StackOverflow answer</a> or <a href='http://javaandme.com/' target='_blank' rel='nofollow'>this article</a> on how to do it. Also there are guides for <a href='http://stackoverflow.com/questions/9612941/how-to-set-java-environment-path-in-ubuntu' target='_blank' rel='nofollow'>Ubuntu</a> and <a href='http://www.mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/' target='_blank' rel='nofollow'>Mac</a> as well. If you still can't figure it out, dont worry, just ask us in our <a href='https://gitter.im/FreeCodeCamp/java' target='_blank' rel='nofollow'>Gitter room</a>!

## JVM

Ok now since we are done with the installations, let's begin to understand first the nitty gritty of the Java ecosystem. Java is an <a href='http://stackoverflow.com/questions/1326071/is-java-a-compiled-or-an-interpreted-programming-language' target='_blank' rel='nofollow'>interpreted and compiled</a> language, that is the code we write gets compiled to bytecode and interpreted to run. We write the code in .java files, Java compiles them into <a href='https://en.wikipedia.org/wiki/Java_bytecode' target='_blank' rel='nofollow'>bytecodes</a> which are run on a Java Virtual Machine or JVM for execution. These bytecodes typically has a .class extension.

Java is a pretty secure language as it doesn't let your program run directly on the machine. Instead, your program runs on a Virtual Machine called JVM. This Virtual Machine exposes several APIs for low level machine interactions you can make, but other than that you cannot play with machine instructions explicitely. This adds a huge bonus of security.

Also, once your bytecode is compiled it can run on any Java VM. This Virtual Machine is machine dependent, i.e it has different implementations for Windows, Linux and Mac. But your program is guaranteed to run in any system thanks to this VM. This philosophy is called <a href='https://en.wikipedia.org/wiki/Write_once,_run_anywhere' target='_blank' rel='nofollow'>"Write Once, Run Anywhere"</a>.

### Jvm Core Responsibilities 
1. Coding & interpreting bytecode
2. Security
3. Automatic Memory Management
4. jvm => Platform Dependent
5. Bytecode =-> Platform Independent

## Hello World!

Let's write a sample Hello World application. Open any editor / IDE of choice and create a file `HelloWorld.java`.

    public class HelloWorld {

        public static void main(String[] args) {
            // Prints "Hello, World" to the terminal window.
            System.out.println("Hello, World");
        }

    }

**N.B.** Keep in mind in Java file name should be the **exact same name of the public class** in order to compile!

Now open the terminal / Command Prompt. Change your current directory in the terminal / Command Prompt to the directory where your file is located. And compile the file :

    $ javac HelloWorld.java

Now run the file using `java` command!

    $ java HelloWorld
    Hello, World

Congrats! Your first Java program has run successfully. Here we are just printing a string passing it to the API `System.out.println`. We will cover all the concepts in the code, but you are welcome to take a <a href='https://docs.oracle.com/javase/tutorial/getStarted/application/' target='_blank' rel='nofollow'>closer look</a>! If you have any doubt or need additional help, feel free to contact us anytime in our <a href='https://gitter.im/FreeCodeCamp/java' target='_blank' rel='nofollow'>Gitter Chatroom</a>!

## Documentation

Java is heavily <a href='https://docs.oracle.com/javase/8/docs/' target='_blank' rel='nofollow'>documented</a>, as it supports huge amounts of API's. If you are using any major IDE such as Eclipse or IntelliJ IDEA, you would find the Java Documentation included within.

Also, here is a list of free IDEs for Java coding:
* <a href='https://netbeans.org/' target='_blank' rel='nofollow'>NetBeans</a>
* <a href='https://eclipse.org/' target='_blank' rel='nofollow'>Eclipse</a>
* <a href='https://www.jetbrains.com/idea/features/' target='_blank' rel='nofollow'>IntelliJ IDEA</a>
* <a href='https://developer.android.com/studio/index.html' target='_blank' rel='nofollow'>Android Studio</a>
* <a href='https://www.bluej.org/' target='_blank' rel='nofollow'>BlueJ</a>
* <a href='http://www.jedit.org/' target='_blank' rel='nofollow'>jEdit</a>
* <a href='http://www.oracle.com/technetwork/developer-tools/jdev/overview/index-094652.html' target='_blank' rel='nofollow'>Oracle JDeveloper</a>
