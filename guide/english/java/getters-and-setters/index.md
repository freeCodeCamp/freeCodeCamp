---
title: Getters & Setters
---

# Getters & Setters
Getters and Setters are used to effectively protect your data, particularly when creating classes. For each instance variable, a getter method returns its value while a setter method sets or updates its value. Getters and setters are also known as accessors and mutators, respectively.

By convention, getters start with `get`, followed by the variable name, with the first letter of the variable name capitalized. Setters start with `set`, followed by the variable name, with the first letter of the variable name capitalized.

***Example:***
```java
public class Vehicle {
  private String color;
  
  // Getter
  public String getColor() {
  return color;
  }
  
  // Setter
  public void setColor(String c) {
  this.color = c;
  }
}
```
The getter method returns the value of the attribute.
The setter method takes a parameter and assigns it to the attribute.

Once the getter and setter have been defined, we use it in our main:
```java
public stativ void main(String[] args) {
  Vehicle v1 = new Vehicle();
  v1.setColor("Red");
  System.out.println(v1.getColor());
}

// Outputs "Red"
```
****************
Getters and setters allow control over the values.  You may validate the given value in the setter before actually setting the value.


## Why getter and setter?

By using getter and setter, the programmer can control how important variables are accessed and updated, such as changing value of a variable within a specified range. Consider the following code of a setter method:
```java
public void setNumber(int num) {
    if (num < 10 || num > 100) {
        throw new IllegalArgumentException();
    }
    this.number = num;
}
```
This ensures the value of `number` is always set between 10 and 100.  If the programmer allows the variable number to be updated directly, the caller can set any arbitrary value to it:
```java
obj.number = 3;
```

This violates the constraint for values ranging from 10 to 100 for that variable. Since we don't expect that to happen, hiding the variable number as private and using a setter prevents it.
On the other hand, a getter method is the only way for the outside world to read the variable’s value:
```java
public int getNumber() {
    return this.number;
}
```
Getters and setters are so widely used that some some Integrated Development Environments (IDEs) allow these methods to be generated automatically. They also prevent the possible need of making fields public, which can cause unforeseen issues when the caller alters these fields. 
