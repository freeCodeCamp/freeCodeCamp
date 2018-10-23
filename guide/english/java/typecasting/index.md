---
title: Typecasting
---

## Typecasting
Converting one data type to another data type is known as type casting. Since 
Java is an Object Oriented programming language and supports both **Inheritance** and **Polymorphism**, It’s easy that super class reference variable is pointing to subClass object. 

When we assign value of one data type to another, the two types might not be compatible with each other. If the data types are compatible, then JVM  will perform the conversion automatically known as automatic type conversion and if not then they need to be casted or converted explicitly.
### Types of Typecasting
Java, type casting is classified into two types.

***1.  Implicit Typecasting***
Here, Automatic Type casting take place when the two types are compatible
the target type is larger than the source type.
eg.
``` java
      int i = 100;
      long l = i;	//no explicit type casting required
      float f = l;	//no explicit type casting required
```
***2.  Explicit Typecasting***
When we assign a larger type value to a variable of smaller type, then we need to perform explicit type casting.
eg.
```java
      double d = 100.04;
      long l = (long)d;  //explicit type casting required
      int i = (int)l;	//explicit type casting required
```

### Common Errors
The two most common errors encountered when casting in Java are LOP (Loss of Precision) errors and "incompatible types" errors.

***1. LOP (Loss of Precision)***
This mainly occurs when a programmer attempts to perform mathematical operations with an integer or data type that does not accept irrational decimals. Some compilers will still run the code but others will not. Attempt to avoid LOP errors when attempting to find an exact answer.
eg.
```java
      public class UseMath{
public static void main(String[]args){
  int x = Math.pow (2,4);     

 }
}
```
This code would most likely not run because Math.pow in java outputs a double value and here it is being assigned to an integer, causing a LOP error.
You can correct this by either casting Math.pow as an int, or declaring the variable as a double instead.

***2. Incompatible Types***
This occurs when a programmer attempts to convert one data type into another that cannot work; which can be implied from the name of the error.
eg.
```java
      int y;
      y = (int)true;
```
This code would not run, as a boolean cannot be converted to an int, or vice versa.

#### More Information:
- [Oracle Java Docs :Typecasting](https://docs.oracle.com/javase/specs/jls/se7/html/jls-5.html)
- [Possible Loss of Precision Error Example](https://stackoverflow.com/questions/15122617/possible-loss-of-precision)
