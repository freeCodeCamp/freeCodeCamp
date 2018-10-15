---
title: Built-In Functions
---
# Built-In Functions

Java also has many built-in or pre-defined functions which are usually stored in the java.lang and java.io packages,
which are automatically imported in editors like BlueJ or can be imported using the following Syntax-
```java
import java.lang.*;
import java.io.*;
```

These comprise functions which make an otherwise long and hard task easier to do. 

Some examples of ```java.lang.* ``` are:

Generating a random number using Math. In this example a random integer from 1 - 10
```java
int randomNumber = (int) (Math.random() * 10) + 1;
```
Usage of primitive types such as double, float, int boolean

```java
int integerNumber = 1;
double doubleNumber = 0.1d;
float floatNumber = 0.2f;
boolean trueOrFalse = false;
```


Classes in ```java.io.* ``` are mainly used for reading and writing of files with diffrent methods such as Input / output streams and buffered readers/ writers.
And example using a buffered reader is below:

```java
  File file = new File("C:\\Users\\Desktop\\test.txt"); 
  BufferedReader br = new BufferedReader(new FileReader(file));   
  String st; 
  while ((st = br.readLine()) != null) 
  System.out.println(st); 
```

