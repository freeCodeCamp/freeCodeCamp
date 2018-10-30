---
title: Build Tools
---
# Build Tools
Java build tools allow you to customize your builds to do things such as specifying which files need to be included in your jar, adding dependencies from the internet, and automatically executing tasks like tests or github commits. Build tools also make it easy to modularize your projects. Popular build tools include [Gradle](https://gradle.org/),[Ant](https://ant.apache.org/) and [Maven](https://maven.apache.org/)

## Gradle
Gradle build scripts can be written in Groovy or Kotlin and are highly customizable. Most projects use the Gradle wrapper, allowing them to be built on any system, even without Gradle installed. Gradle is the recommended build tool for Android development.

## Maven
Maven build files are written with XML. Maven is based on POM(project object model). Like Gradle, many plugins are written for Maven to customize your builds, however Maven is not as customizable because you cannot directly interact with a Maven API. However, you can modify certain configurations by modifying your settings.xml file in the .m2 folder. More info available [here](https://maven.apache.org/settings.html)

## Ant
Apache Ant is a Java library and command-line tool whose mission is to drive processes described in build files as targets and extension points dependent upon each other. The main known usage of Ant is the build of Java applications. Ant supplies a number of built-in tasks allowing to compile, assemble, test and run Java applications.
Ant is extremely flexible and does not impose coding conventions or directory layouts to the Java projects which adopt it as a build tool.


### More Information:
https://gradle.org/

https://ant.apache.org/

https://en.wikipedia.org/wiki/Gradle

https://maven.apache.org/what-is-maven.html

https://en.wikipedia.org/wiki/Apache_Maven
