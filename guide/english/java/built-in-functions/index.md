---
title: Built-In Functions
---
# Built-In Functions

Java also has many built-in or pre-defined functions which are usually stored in the java.lang and java.io packages,
which are automatically imported in editors like BlueJ or can be imported using the following Syntax-
```java
import java.lang.*;
import java.io.*;
import java.util.*;
import java.sql.*;
```

These comprise functions which make an otherwise long and hard task easier to do like taking input for variables, calculating trignometric functions,etc.
Example:

1.
```java
String a="hello";
String b="HellO";
System.out.out.println(a.equalsIgnoreCase(b));   //True
```

Here, equalsIgnoreCase() is a built-in function  which is present in java.lang package.

2.
```java
int a=-5;
int b=Math.abs(a);  //b=5
```

Here, abs() is a built-in function that calculates the absolute value of a number.
