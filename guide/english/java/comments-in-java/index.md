---
title: Comments in Java
---
## Comments in Java

Comments in Java are like real life sticky notes used to display some helpful information, which other programmers or developers can read and understand. Because they are intended for humans, Java comments are not executed by the compiler or interpreter.

It is considered good practice to add comments to your code, especially when working with a team. This helps future developers and teammates to more easily understand your code. Comments make your code more neat and organized.

Note above the phrase **meaningful** comments. As a general rule, good code should be readable without execessive comments. Another programmer should be able to review your code and understand *what* has happened, but good comments can help explain *why*. Comments should also be updated as code changes over time. In short, all comments in Java should be meaningful, relevant, and current.

### Types of Java Comments

#### 1. Single-Line Comments

To create a single-line comment just add two `//` forward slashes before the text.

```java
// This is how a single-line comment looks
```

#### 2. Multi-Line Comments

In some editors you can comment out multiple lines or a large portion of code with single line comments by selecting the code, holding the `command` key, and then pressing the `/` forward slash key.

To create a multi-line comment, wrap the lines in between `/*` multiple lines go here `*/`

```java
public class MyFirstJava {  
    public static void main(String[] args) {  
    /* This Java code 
       Prints out "Hello world!"
       and you are looking at a multi-line comment 
    */
        System.out.println("Hello world!");  
    }  
}  
```

#### 3. Documentation Comments


Documentation comments are used by the Javadoc tool to create documentation for the code. Documentation comments are used by developers to document code, such as explaining what a class or method does. These comments are parsed by a Javadoc tool, which will compile a preformatted set of HTML files containing all the information available in the comments. The output typically is HTML files created for your code which are more readable and can be shared as well. 

It's always a good practice to write the javadoc before actually writing the function or method block of code. It helps in focusing on the purpose of method/class and creating modular code.

```java
/**
 * The following Java program displays a random integer between 0 - 50.
 * Most developers don't document simple programs like this.
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
The difference between the documentation comment and the multi & single line comments is that the former is oriented about making your comments visible to anyone viewing the documentation, while the multi and single line comments are the ones that are supposed to mainly keep you on track.

#### More Information:
* [Java Resources](http://guide.freecodecamp.org/java/resources/)

* [Compiled Javadoc Example](https://docs.oracle.com/javase/8/docs/api/)

* [Putting comments in code: the good, the bad, and the ugly.](https://medium.freecodecamp.org/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83)
