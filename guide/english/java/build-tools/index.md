---
title: Build Tools
---
# Build Tools
Java build tools allow you to customize your builds to do things such as specifying which files need to be included in your jar, adding dependencies from the internet, and automatically executing tasks like tests or github commits. Build tools also make it easy to modularize your projects. Popular build tools include [Gradle](https://gradle.org/) and [Maven](https://maven.apache.org/)

## Gradle
Gradle build scripts can be written in Groovy or Kotlin and are highly customizable. Most projects use the Gradle wrapper, allowing them to be built on any system, even without Gradle installed. Gradle is the recommended build tool for Android development.

## Maven
Maven build files are written with XML. Like Gradle, many plugins are written for Maven to customize your builds, however Maven is not as customizable because you cannot directly interact with a Maven API. However, you can modify certain configurations by modifying your settings.xml file in the .m2 folder. More info available [here](https://maven.apache.org/settings.html)

## Apache Ant
Apache Ant is an older build tool that also uses build XML files written in XML. It's very customizable and can be used to run arbitrary tasks similar to gradle. Apache Ant however does not include dependency management by default, a separate project called Apache Ivy can be used in combination with Ant for that. Apache NetBeans is a popular Java IDE that uses Apache Ant under the hood. More information is available [here](https://ant.apache.org/)

### More Information:
https://gradle.org/

https://en.wikipedia.org/wiki/Gradle

https://maven.apache.org/what-is-maven.html

https://en.wikipedia.org/wiki/Apache_Maven

https://ant.apache.org/
