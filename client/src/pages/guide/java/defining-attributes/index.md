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
