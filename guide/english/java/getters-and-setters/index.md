---
title: Accessors & Mutators
---

# Accessor methods & Mutators
Accessors and Mutators are used to effectively protect your data, particularly when creating classes. For each instance variable, an accessor method returns its value while a mutator method sets or updates its value.

By convention, accessors start with get, followed by the variable name, with the first letter of the variable name capitalized. Mutators start with set, followed by the variable name, with the first letter of the variable name capitalized. Accesors and mutators could also be called getters and setters respectively.

***Example:***
```java
public class Vehicle {
  private String color;
  
  // Accessor
  public String getColor() {
  return color;
  }
  
  // Mutator
  public void setColor(String c) {
  this.color = c;
  }
}
```
The accessor method returns the value of the attribute.
The mutator method takes a parameter and assigns it to the attribute.

Once the accessor and mutator have been defined, we use it in our main:
```java
public stativ void main(String[] args) {
  Vehicle v1 = new Vehicle();
  v1.setColor("Red");
  System.out.println(v1.getColor());
}

// Outputs "Red"
```
****************
Accessors and mutators allow control over the values.  You may validate the given value in the mutator before actually setting the value.


## Why accessor and mutator?

By using accessor and mutator, the programmer can control how their important variables are accessed and updated, such as changing value of a variable within a specified range. Consider the following code of a mutator method:
```java
public void setNumber(int num) {
    if (num < 10 || num > 100) {
        throw new IllegalArgumentException();
    }
    this.number = num;
}
```
This ensures the value of number is always set between 10 and 100.  If the programmer allows the variable number to be updated directly, the caller can set any arbitrary value to it:
```java
obj.number = 3;
```

This violates the constraint for values ranging from 10 to 100 for that variable. Since we don't expect that to happen, hiding the variable number as private and using a mutator prevents it.
On the other hand, a accessor method is the only way for the outside world to read the variable’s value:
```java
public int getNumber() {
    return this.number;
}
```
