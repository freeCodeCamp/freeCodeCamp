---
title: Access Modifiers
---
# Access Modifiers

Have you ever wanted to define how people would access some of your properties? You would not want anyone using your underwear. However, your close friends and relatives can use your sweater and maybe your car.

Similar to how you set a level of access to your possessions, Java controls access, too. You want to define the access level for variables, methods, and classes, depending on which other classes you want accessing them.

Java provides 4 levels of access modifiers. This means that you can modify access to a variable, method or a class in 4 ways. These 4 ways are `private`, `public`, `protected` and `default`.

These access modifiers can be applied to fields, methods and classes (Classes are a special case, we will look at them at the end of this artice). Here is a quick overview<sup>1</sup> of what the access levels are for each Access Modifier:

#### Access Modifiers Table Reference: 
![Access Modifiers Table](https://i.imgur.com/zoMspyn.png)

#### Private Access Modifier
Allows a variable or method to only be accessed in the class in which it was created. No other class beyond the class that created the variable or method can access it. This is closely similar to your internal organs. They are only accessible to the owner. To make a variable or method private, you simply append the `private` keyword before the variable or method type, like `private int age`.

Let us use `private` in a coding example. If a bank wants to provide an interest rate of 10% on its loans, it would make sure that the interest rate variable would stay private so as no other class would try to access it and change it. 
For example:

```java
private double interestRate;
```
       
The above example creates a `double` variable called `interestRate` and ensures that it is only accessible within the class from which it was created.
 
An example for a `private` method is:
 ```java
 private void setAge(){
   System.out.println("Set Age");
 }
 ```
The above example ensures that the method `setAge()` is accessible only within the class from which it was created and nowhere else.
 
#### Public Access Modifier
The `public` access modifier is the direct opposite of the `private` access modifier. A class, method or variable can be declared as `public` which would make it accessible from anywhere. `public` access modifier can be likened to a public school where anyone can seek admission and be admitted.

To declare a class as `public`, all you need to do is use the `public` keyword before the class name:
```java
public class Animal {
}
```
    
As such, the `Animal` class can now be accessed by any other class.

Similarly, you use the `public` keyword for marking variables and methods too, like so:
```java
public int age;
public int getAge() {
}
```
    
#### The Default Access Modifier
The `default` access modifier is different from all the other access modifiers in that it has no keyword. To use the default access modifier, you simply use none of the other access modifiers, which means you are using the `default` access modifier.

For example, to use the `default` access modifier for a class, you use

```java
class Bird {
}
```
    
This indicates you are using the `default` access modifier. It allows a variable, method, or class to be accessible by other classes within the same package. A package is a collection of related classes in a directory. For more information about packages, check out the section on packages.

Any variable, method, or class declared to use the default access modifier cannot be accessed by any other class outside of the package from which it was declared.

Again, similar to classes, you use the `default` access modifiers for variables and methods like so:
```java
int age;
void setNewAge() {
}
```
    
Don't forget, the `default` access modifier does not have a keyword. The absence of the 3 other access modifiers means you are using the `default` access modifier.

#### Protected Access Modifier
The `protected` access modifier is closely related to the `default` access modifier. The `protected` access modifier has the properties of the `default` access modifier but with a little improvement.

Variables and methods are the only ones to use the `protected` access modifier. The little improvement is that a class outside the package in which the class variable or method was declared can access the said variable or method. This is possible ONLY if it inherits from the original class, however.

A class from another package which has access to the `protected` variables or methods must have extended the class that created the variables or methods.

Note: without the advantage of inheritance, a `default` access modifier has the same access as a `protected` access modifier.

Examples of using the protected access modifier are shown below:
```java
protected int age;
protected String getName() {
  return "My Name is You";
}
```

#### Access Modifiers on Classes
By default, classes can only have 2 modifiers: 
- `public`
- no modifier (`default` modifier)

So does this mean classes can never be set to `private` or `protected`?

This is logical, why would you want to make a private class? No other class would be able to use it. But sometimes, you can embed a class within another class. These special classes, `inner classes`, can be set to `private` or `protected` so that only its encapsulating class can access it:

```java
public class Car {
    private String brand;
    private Engine engine;
    // outer class ...    
    private class Engine {
        // inner class ...
    }
}
```

In the above example, only the `Car` class can access and use the `Engine`class. This can be useful in some cases.

Other classes can never be set to `protected` or `private`, because it makes no sense. The `protected` access modifier is used to make things `package-private` but with the option to be accessible to subclasses. There is no concept of 'package-inheritance' in java.

### Sources
[1. Oracle docs on Access Modifiers](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html "Oracle Docs")
