---
title: Inheritance
---
# Inheritance

Java inheritance refers to the ability of a Java Class to `inherit` the properties from some other Class. Think of it like a child inheriting properties from its parents, the concept is very similar to that. In Java lingo, it is also called _extend_-ing a class. Some simple things to remember :

*   The Class that extends or inherits is called a **subclass**
*   The Class that is being extended or inherited is called a **superclass**

## Why use inheritance in java
- For Method Overriding (so runtime polymorphism can be achieved).
- For Code Reusability.

## Terms used in Inheritance
- Class: A class is a group of objects which have common properties. It is a template or blueprint from which objects are created.
- Sub Class/Child Class: Subclass is a class which inherits the other class. It is also called a derived class, extended class, or child class.
- Super Class/Parent Class: Superclass is the class from where a subclass inherits the features. It is also called a base class or a parent class.
- Reusability: As the name specifies, reusability is a mechanism which facilitates you to reuse the fields and methods of the existing class when you create a new class. You can use the same fields and methods already defined in the previous class.

Thus, inheritance gives Java the cool capability of _re-using_ code, or sharing code between classes!

## Syntax
```java
class Subclass-name extends Superclass-name  
{  
   //methods and fields  
}  
```

The extends keyword indicates that you are making a new class that derives from an existing class. The meaning of "extends" is to increase the functionality.

In the terminology of Java, a class which is inherited is called a parent or superclass, and the new class is called child or subclass.


Let's describe it with the classic example of a `Vehicle` class and a `Car` class :

```java
public class Vehicle {
    public void start() {
        // starting the engine
    }

    public void stop() {
        // stopping the engine
    }
}

public class Car extends Vehicle {
    int numberOfSeats = 4;

    public int getNumberOfSeats() {
        return numberOfSeats;
    }
}
```

Here, we can see the `Car` class inheriting the properties of the `Vehicle` class. So, we don't have to write the same code for the methods `start()` and `stop()` for `Car` as well, as those properties are available from its parent or superclass. Therefore, objects created from the `Car` class will _also_ have those properties!

```java
Car tesla = new Car();

tesla.start();

tesla.stop();
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJXz/0' target='_blank' rel='nofollow'>Run Code</a>

But, does the parent class have the methods of the child? No, it doesn't.

Therefore, whenever you need to share some common piece of code between multiple classes, it is always good to have a parent class, and then extend that class whenever needed! Reduces the number of lines of code, makes code modular, and simplifies testing.

## What can be inherited ?

*   All `protected` and `public` members (fields, methods, and nested classes) from parent, regardless what package the sub-class is in. If a sub-class is in the same package as its parent, it will also inherit `package-private` members from parent. 

## What cannot be inherited ?

*   `private` fields and methods
*   Constructors. Although, the subclass constructor _has_ to call the superclass constructor if its defined (More on that later!)
*   Multiple classes. Java supports only **single inheritance**, that is, you can only inherit one class at a time.
*   Fields. Individual fields of a class cannot be overriden by the subclass.

## Type Casting & Reference

In Java, it is possible to reference a subclass as an _instance_ of its superclass. It is called _Polymorphism_ in Object Oriented Programming (OOP), the ability for an object to take on many forms. For example, the `Car` class object can be referenced as a `Vehicle` class instance like this :

```java
Vehicle car = new Car();
```

Although, the opposite is not possible :

```java
Car car = new Vehicle(); // ERROR
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYB/0' target='_blank' rel='nofollow'>Run Code</a>

Since you can reference a Java subclass as a superclass instance, you can easily cast an instance of a subclass object to a superclass instance. It is possible to cast a superclass object into a subclass type, but _only if the object is really an instance of the subclass_. So keep this in mind :

```java
Car car = new Car();
Vehicle vehicle = car; // upcasting
Car car2 = (Car)vechile; //downcasting

Bike bike = new Bike(); // say Bike is also a subclass of Vehicle
Vehicle v = bike; // upcasting, no problem here.
Car car3 = (Car)bike; // Compilation Error : as bike is NOT a instance of Car
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYM/0' target='_blank' rel='nofollow'>Run Code</a>

Now you know how to share code through a parent-child relationship. But, what if, you do not like the implementation of a particular method in the child class and want to write a new one for it? What do you do then?

## Override it!

Java lets you _override_ or redefine the methods defined in the superclass. For example, your `Car` class has a different implementation of `start()` than the parent `Vehicle`, so you do this :

```java
public class Vehicle {
    public void start() {
      System.out.println("Vehicle start code");
    }
}

public class Car extends Vehicle {
    public void start() {
      System.out.println("Car start code");
  }
}

Car car = new Car();
car.start(); // "Car start code"
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYZ/1' target='_blank' rel='nofollow'>Run Code</a>

So, it's pretty simple to override methods in the subclass. Although, there is a _catch_. Only that superclass method with the _exact same method signature_ as the subclass method will be overriden. That means the subclass method definition must have the exact same name, same number and type of parameters, and in the exact same sequence. Thus, `public void start(String key)` would not override `public void start()`.

**Notes** :

*   You cannot override private methods of the superclass. (Quite obvious, isn't it?)
*   What if the method of superclass which you are overriding in the subclass suddenly gets obliterated or methods changed? It would fail in runtime! So Java provides you a nifty annotation `@Override` which you can place over the subclass method, which will warn the compiler of those incidents!

Annotations in Java is a good coding practice, but they are not a necessity. The compiler is smart enough to figure out overriding on its own though. Unlike other OOP languages, Annotations in Java it doesn't necessarily modify the method or add extra functionality.

## How to call super class methods?

Funny you ask about it! Just use the keyword `super` :

```java
public class Vehicle() {
    public void start() {
      System.out.println("Vehicle start code");
    }
}

public class Car extends Vehicle {
    public void run() {
      super.start();
  }
}

Car car = new Car();
car.run(); // "Vehicle start code"
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJY4/0' target='_blank' rel='nofollow'>Run Code</a>

**N.B.** : Although you can call the parent method by using a `super` call, you cannot go up the inheritance hierarchy with chained `super` calls.

## How to know the type of a class?

Using the `instanceof` keyword. Having lots of classes and subclasses it would be a little confusing to know which class is a subclass of which one in runtime. So, we can use `instanceof` to determine whether an object is an instance of a class, an instance of a subclass, or an instance of an interface.

```java
Car car = new Car();

boolean flag = car instanceof Vehicle; // true in this case!
```

## Constructors & Inheritance

As mentioned earlier, constructors cannot be directly inherited by a subclass. Although, a subclass is _required_ to call its parent's constructor as the <a href='http://stackoverflow.com/questions/1168345/why-does-this-and-super-have-to-be-the-first-statement-in-a-constructor' target='_blank' rel='nofollow'>first operation</a> in its own constructor. How? You guessed it, using `super` :

```java
public class Vehicle {
    public Vehicle() {
        // constructor
    }
    public void start() {
      System.out.println("Vehicle start code");
    }
}

public class Car extends Vehicle {
    public Car() {
      super();
    }
    public void run() {
      super.start();
  }
}
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJY8/0' target='_blank' rel='nofollow'>Run Code</a>

Remember, if the superclass does not have any constructors defined, you don't have to call it explicitely in the subclass. Java handles that internally for you! Invocation to `super` constructor is done in the case when the super class is to be called with any other constructor other than the _default constructor_.

If no other constructors are defined, then Java invokes the default super class constructor (_even if not defined explicitly_).

Congrats, now you know all about Inheritance! Read more about advanced ways to inherit things in Abstract Classes and [Interfaces](//forum.freecodecamp.com/t/java-docs-interfaces)!

Here are some useful links to learn more about Inheritance in Java (great for those starting out with Java):
 - https://www.codejava.net/java-core/the-java-language/12-rules-and-examples-about-inheritance-in-java
 - https://medium.com/java-for-absolute-dummies/inheritance-in-java-programming-39176e0016f3
