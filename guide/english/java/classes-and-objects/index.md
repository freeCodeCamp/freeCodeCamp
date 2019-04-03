---
title: Classes and Objects
---
# Classes and Objects

Classes are groups of variables and operations on them. A class can have variables, methods (or functions), and constructors (or methods which are used to initiate, more on that later!).

A class may contain any of the following variable types.

* Class Variables: These are the variables that are declared inside the class definition, outside any method, with the static keyword. A class variable is shared across all the instances of a class. Class variables are also known as the static variables, they are initialized only once at the time of the compilation of the class hence only single copy of this is available for all the instances.
* Instance variables: The difference with the class variables is that instance variables are initialized inside the class constructor and they are not shared across all the objects. At the time of the instantiation, a new copy of the instance variable is created.

```java
public class Example {

    private static int myVar = 1; // Class Variable
    
    private int mySecondVar; // Instance Variable
    Example(int mySecondVar) {
            this.mySecondVar = mySecondVar; // An instance variable must be initialized inside the constructor
```

Think of a `Class` as a blueprint for creating something concrete. A `Class` tells you how the 'what' and 'how' an `object` of said Class will look once `instantiated`. In essence, it defines `properties` (say color, engine capacity) and `behavior` (stop, speed up, change gears, honk etc.) for a Car in the case below.

Objects are _instances_ of a class. All objects are instances of a certain class. Imagine a class being a "template", from which every Object copies. When you create an Object, it basically creates a new object on the blueprint of a class. Now let's look at this in a little piece of code :

```java
// Car class
public class Car {
    // car name
    private String name;
    
    // car manufacturer name
    private String manufacturerName;
    
    // constructor 1
    public Car() {
    }
    
    // constructor 2
    public Car(String name, String man) {
        this.name = name;
        this.manufacturerName = man;
    }
    
    // getter name method
    public String getName() {
        return name;
    }
    
    // getter manufacture method
    public String getManufacturerName() {
        return manufacturerName;
    }

    //setter name method
    public void setName(String name){
        this.name = name;
    }

    //setter manufacture method 
    public void setManufacture(String man){
        this.manufacturerName = man;
    }
}

// sample code
    
Car modelS = new Car("Model S","Tesla");
// prints Tesla Model S
System.out.println("Full Car Model S= " + modelS.getManufacturerName() + " : " + modelS.getName());

Car modelX = new Car();
modelX.setName("Model X");
modelX.setManufacture("BMW");
// prints Tesla Model X
System.out.println("Full Car Model X= " + modelX.getManufacturerName() + " : " + modelX.getName());
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJZP/0' target='_blank' rel='nofollow'>Run Code</a>

So, `Car` is a class, which has the fields or properties `name` and `manufacturerName`. `modelS` is an object of `Car` class. So `modelS` also has the same properties and methods.
It is pretty much standard to ensure the object's 'information', in this case the `name` an `manufacturerName` variables, to be private and only be accessed via these getters and setters. This prevents an issue with debugging code that involves an object's member variables. If the member variables were made public, and for whatever reason the program crashes, you could get a rather complex stack trace that may be difficult to point out the error. Keeping the variables private, and only accessible via getters and setters, will simplify this error message down.

### More Information:
- [Oracle Java Docs :Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html)
- [Oracle Java Docs :Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/objects.html)
