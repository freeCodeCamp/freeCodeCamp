---
title: Enums in Java
---

Enum is a datatype introduced in Java to represent list of predefined constants. 
Enum can be defined outside a class independently or even inside a class.

Consider the following example to define enums independently:

``` java
public enum Status {
  success,failure,pending;
}
```
Consider the following example to define enums inside a class.

``` java
public class EnumExample {
  enum Status {
    success,failure,pending;
  }
}
```
## Acessing Enum Values

The value of Enums can be directly accessed similar to a static variable.

Consider the example when Enum is defined independently.

``` java
// This assigns the variable status with enum value pending.
Status status = Status.pending;
```
Consider the example when Enum is defined inside a class.

``` java
// This assigns the variable status with enum value pending.
Status status = EnumExample.Status.pending;
```
## Comparing value of a String to enum constant

Enums provide an imlpicit method ```valueOf(" ")``` which takes a string as an input parameter and returns the enum constant of the specified string. 
The name of the input string must match exactly an identifier specified in the enum list.
If not, it throws a " No enum constant "  exception. 

Consider the following example for comparing value of a string to an enum.

``` java
String input = "cancelled";
System.out.println(Status.valueOf(input)); // output :- cancelled
```
``` java
String input = "can";
System.out.println(Status.valueOf(input)); 

// output :- Exception in thread "main" java.lang.IllegalArgumentException: No enum constant Status.can
```
