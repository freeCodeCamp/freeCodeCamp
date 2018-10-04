---
title: Comments in Java
---
## Comments in Java

Comments in java are like real life post-it notes used to display some information. which other programmer or developer can read and understand.

It is good practice to add comments to your code, especially when working with a team or at a company. This helps future developers or teammates to know what is going on more easily when they look at your code.

Java comments are not executed by compiler and interpreter.


### Types of Java Comments

#### 1. Single Line Comment

To create a single line comment just add two `//` forward slash before the texts

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
       and you are looking at a multi line comment */
        System.out.println("Hello World");  
    }  
}  
```

#### 3. Documentation Comment

Documentation Comment is used by Javadoc tool to create documentation for the code. Documentation Comment is used by developers to document codes like what the class does or what method does etc.
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
[Java Resources](http://guide.freecodecamp.org/java/resources/)
