---
title: Getters & Setters
---

# Getters & Setters

Getter is a method for getting data from the user on the output screen and assigning it to a variable , eg- 'getText()'. Setter method is used to set a specific value to a variable and can be changed only by changing the value in the the code eg- 'setText()'.

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
public static void main(String[] args) {
  Vehicle v1 = new Vehicle();
  v1.setColor("Red");
  System.out.println(v1.getColor());
}

// Outputs "Red"
```
****************
Getters and setters allow control over the values. You may validate the given value in the setter before actually setting the value.


## Why getter and setter?

By using getter and setter, the programmer can control how their variables are accessed and updated, such as changing the value of a variable within a specified range. Consider the following code of a setter method:

```java
public void setNumber(int num) {
    if (num < 10 || num > 100) {
        throw new IllegalArgumentException();
    }
    this.number = num;
}
```

This ensures the value of `number` is always set between 10 and 100.  If the programmer allows the variable `number` to be updated directly, the caller can set any arbitrary value to it:

```java
obj.number = 3;
```

This violates the constraint for values ranging from 10 to 100 for that variable. Hiding the variable as private and only modifying it through the setter, prevents it from violating the constraint.

Since the variable is now private, a getter method is the only way for the outside world to read the variable’s value:
```java
public int getNumber() {
    return this.number;
}
```

## When not to use getters and setters?

Getters and Setters are great, and have huge benifts, but they should not be used everywhere there is a class variable.

Let us define a class Point.
```java
class Point{
  private int x, y;
  
  public Point(int x, int y){
    setX(x);
    setY(y);
  }
  
  public void setX(int x){
    this.x = x;
  }
  public void setY(int x){
    this.y = y;
  }

  public int getX(){
    return x;
  }
  public int getY(){
    return y;
  }
}
```
Now let us say that we want to move a point in the x+ direction by one unit. We need the following code:
```java
//Let the Point object be p.
p.setX(p.getX() + 1);
```
The above code, while correct, is difficult to understand at first glance. Also, if we want to update the Point class to use float or double, we need to update all four of it's setters and getters. So, some classes have some of their members as public in the interest of readablility and ease of use.

If the class Point was implemented as:
```java
class Point{
  public int x, y;
  
  public Point(int x, int y){
    this.x = x;
    this.y = y;
  }
}
```

Then, we can very easily move it in the x+ direction by one unit with
```java
//Let the Point object be p.
p.x++;
```

The above code is much more readable, and easier to use. Also, if we want to update the Point class to use float or double, it is a simple matter of changing the data types of x and y, and there are no functions to be updated.
```java
class Point{
  public double x, y;
  
  public Point(double x, double y){
    this.x = x;
    this.y = y;
  }
}
```

Getters and setters are so widely used that some some Integrated Development Environments (IDEs) allow these methods to be generated automatically. They also prevent the possible need of making fields public, which can cause unforeseen issues when the caller alters these fields. 
