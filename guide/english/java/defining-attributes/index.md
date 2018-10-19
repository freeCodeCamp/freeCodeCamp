---
title: Defining Attributes
---

## Defining Attributes
A class has attributes and methods. The attributes are basically variables within a class.

***Example:***
```java
public class Vehicle {
  int maxSpeed;
  int wheels;
  String color;
  
  void horn() {
    System.out.println("Beep beep!");
  }
}
```
`maxSpeed`, `wheels`, and `color` are all attributes of our Vehicle class and the `horn()` is the only method.

### Creating Objects
We can create multiple objects of our Vehicle class, and use the dot syntax to access their attributes and methods.
```java
class MyClass {
  public static void main(String[] args) {
    Vehicle v1 = new Vehicle();
    Vehicle v2 = new Vehicle();
    v1.color = "red";
    v2.horn();
  }
}
```
### Visibility modifiers
In the above Vehicle example, the attributes are declared without a visibility modifier (e.g. public, private, or protected). When no modifier is included in an attribute delaration, it defaults to something called "package private" which means that the attribute can be accessed directly using the "." dot notation by any other class within the same package. 

'public' variables can be accessed from any class 
'protected' variables can be accessed by any class within the same package, as well as by subclasses in any other packages having parent child relationship
'private' variables can only be accessed from within the class where they are declared
'package private' members can be accessed by the classes in the same package

'public', variables, methods, constructors and classes(only one) caan be declared as public.
'protected', variables, methods and constructors can be declared as private but not the classes and interfaces.
'private', variables, methods and constructors can be declared as private but not the classes and interfaces.
'default', variables, methods, constructors and classes can be of default type (declared by not writing anything).

####  public > protected > default > private (on the basis of ease of accessibility)

It's generally a good idea to make all of the attributes of a class private, and control access to them through the use of "getter" and "setter" methods.
