---
title: Comments in Java
---
## Comments in Java

Comments in java are like real life post-it notes used to display some information, which other programmers or developers can read and understand. Because they are intended for humans, Java comments are not executed by the compiler or interpreter.

It is good practice to add meaningful comments to your code, especially when working with a team or at a company. This helps future developers or teammates to know what is going on more easily when they look at your code. Comments also make your code more neat and organized.

Note above the phrase **meaningful** comments. As a general rule, good code should be readable without execessive comments. Another programmer should be able to review your code and understand *what* is happened, but good comments can help explain *why*. Comments should also be updated as code changes over time. In short, all comments in Java should be meaningful, relevant, and current.


### Types of Java Comments

#### 1. Single Line Comment

To create a single line comment just add two `//` forward slashes before the text.

```java
// This is how single line comment looks like
```

#### 2. Multi Line Comment

To Create a Multi line comment wrap the lines in between `/*` line goes here `*/`

```java
public class MyFirstJava {  
    public static void main(String[] args) {  
    /* This Java Code 
       Prints out "Hello world"
       and you are looking at a multi line comment 
    */
        System.out.println("Hello World");  
    }  
}  
```

#### 3. Documentation Comment

Documentation comment is used by Javadoc tool to create documentation for the code. Documentation Comment is used by developers to document code, like what a class does or what a method does. This is used by a javadoc tool which will compile a preformatted set of html files containing all the information available in the comment. 
```java
/**
 * The Following Java program displays a random between 0 - 50
 * Most Developer dont document simple program like this
 * 
 * @author      Quincy Larson
 * @version     1.0
 */

public class RandomNumbers{  
    public static void main(String[] args) {  
        int random = (int)(Math.random() * 50 + 1);
        System.out.println("Hello World");  
    }  
}  
```

#### More Information:
* [Java Resources](http://guide.freecodecamp.org/java/resources/)

* [Compiled Javadoc Example](https://docs.oracle.com/javase/8/docs/api/)

* [Putting comments in code: the good, the bad, and the ugly.](https://medium.freecodecamp.org/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83)
