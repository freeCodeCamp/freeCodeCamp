---
title: Built-In Functions
---
# Built-In Functions

Java also has many built-in or pre-defined methods which are stored in the java.lang package.
These are automatically imported by Java or can be imported manually using the following Syntax:
```java
import java.lang.*;
```
These comprise functions which make an otherwise long and hard task easier to do.

Some useful examples of these are the `java.lang.System` and `java.lang.Math` packages. Most people know `System` because it is used to print to the console.  `Math` has slew of useful methods as well.

```java
package javaexample;

public class JavaExample {

    public static void main(String[] args) {
        double myDouble = 22.4;
        System.out.println(Math.round(myDouble));
    }
}
```

The code above initializes a variable of type double and sets it equal to 22.4. On the next line the java.lang.System package is called simply by typing System. System.out.println is used to print to the console with a new line at the end of the text. In the parenticies you will see the java.lang.Math package called. For this example the round method was chosen which takes either a double or a float and returns the nearest whole number. The myDouble variable was passed in and the whole line prints 22 to the console.


Importing `java.io.*` imports all classes in the Java `io` package. However, many programmers prefer to pick and choose individual classes because downloading all at once can clutter your local namespace and make your code harder to understand. Here is syntax for downloading just one class. 

```java
import java.util.Scanner;
```