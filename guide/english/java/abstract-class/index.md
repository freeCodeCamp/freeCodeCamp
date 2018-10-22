---
title: Abstract Classes in Java
---

Lets discuss abstract classes. Before diving into this tutorial it is better that you have understood concepts of classes
and inheritance.

There are three main types of class in java, a regular class, an abstract class, and an interface. 
You can instantiate an object of a regular class but you cannot do so with an abstract class or an interface. 
An interface will include only the signatures of methods that classes implement it but include no method bodies so that is why it cannot be instantiated.
An abstract class contains both methods' signatures that without bodies called abstract methods that require implemenation in the subclasses that extend the abstract class. And it also contains methods that have implementations already defined that can be used by its subclasses. So you can think an abstract class as the middle ground between an interface and a regular class. 

Consider the following example to understand abstract classes:
You have a class Vehicle which defines certain basic functionality (methods) and certain components (object variables) that a machinery should have, to be classified as a vehicle. You cannot create an object of Vehicle because a vehicle in itself is an abstract concept. You can however extend the functionality of the vehicle class to create a Car or a Motorcycle.

``` java
abstract class Vehicle
{
  //variable that is used to declare the no. of wheels in a vehicle
  private int wheels;
  
  //Variable to define the type of motor used
  private Motor motor;
  
  //an abstract method that only declares, but does not define the start 
  //functionality because each vehicle uses a different starting mechanism
  abstract void start();
}

public class Car extends Vehicle
{
  ...
}

public class Motorcycle extends Vehicle
{
  ...
}
```

You cannot create an object of Vehicle class anywhere in your program. You can however, extend the abstract vehicle class and create objects of the child classes;

``` java
Vehicle newVehicle = new Vehicle();    // Invalid because Vehicle is an abstract class so it cannot be instantiated 
Vehicle car = new Car();  // valid    // Valid because Car is a subclass of Vehicle 
Vehicle mBike = new Motorcycle();  // Valid because Motorcycle is a subclass of Vehicle 

Car carObj = new Car();  // valid because declared type is the same as actual type and Car is a regular class
Motorcycle mBikeObj = new Motorcycle();  // valid because of the same reason as carObj
```

If the child class doesn't implement the abstract methods of the father, it becomes an abstract class. 





