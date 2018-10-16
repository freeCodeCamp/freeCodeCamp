---
title: Java Virtual Machine
---
# The Java Virtual Machine (JVM)

Java belongs to a family of languages called <a href='https://en.wikipedia.org/wiki/Compiled_language' target='_blank' rel='nofollow'>**Compiled Languages**</a>. Any code written in such a language needs to be converted (compiled) to an intermediate form that can then be understood by the host platform (the OS/platform in which the code runs).

For Java, this intermediate form is called **Bytecode** which is then interpreted by a runtime called a Java Virtual Machine (JVM). Think of <a href='https://docs.oracle.com/javase/specs/jvms/se7/html/' target='_blank' rel='nofollow'>**JVM**</a> as a piece of software that does the hard work of running your Java code. It takes care of memory allocation, thread management, garbage collection and so much more. Apart from Java, it also supports (read: able to run) code written in languages such as Groovy, Scala etc.

In Java, code is written and saved as `.java` files. The compiler (javac) operates on the java files and generates the equivalent Bytecode (`.class`) files. The `java` command would now be able to execute the Bytecode stored in the `.class` files. More on this later.

The following sections describe some of the basic building blocks of coding in Java.