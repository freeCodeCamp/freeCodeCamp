---
title: Methods
---
# Methods
The most recognizable method in Java is probably `public static void main(String[]args)` where `public` means that users have access to the method, `static` means that the method is based on a "class" rather than an "instance," `void` means that nothing will be returned from the method to another (higher level) method, and `main` which is the name of this particular method.

`getName()` and `getManufacturerName()` are two "Getter" methods we have used here. Generally, methods in Java consist of these parts - 

* Access Modifer (Optional) - `public`, `private`, or `protected`. Defaults to package private if omitted
* Return Type - This is required, it denotes what value the method returns, or `void` if nothing is returned
* Method Name - follows camelCase convention
* Parameter List - List of parameters with their name and type, empty if no parameters are accepted
* Method body surrounded by `{ }`

Methods can also optionally have the `static` keyword, meaning it is associated with the class itself, rather than an instance of the class, ex - `public static void main()`.

Notice, unlike JavaScript, we **have** to define the return type of any method we write, otherwise it will fail at compile time. If you do not want a method to return anything, use `void` return type.

Each method has a signature, which is the combination of the data type, the name, and the number of arguments the method takes. In `public static void main` the method does not have a specified data type and instead uses `void` to declare that no data is returned. In a method named `public static double ave(double val, double val)` the data type is "double" (0.0), the name is "ave" (average) and the method takes 2 arguments. Each method **must** have a unique signature.

```java
public class Car {
    private String name;
    private String manufacturersName;

    public void changeName() {
        name = "Tesla";
    }
    
    public String getName(){
        return name;
    }
    
    public String getManufacurername(){
        return manufacturersName;
    }
    
}
```
Parameters can be passed into methods. Parameters are declared just after the name of the method, inside brackets.
Syntax for parameter declaration is [Data Type] [Name].
```java
public class Car {
    private String name;

    public void changeName(String newName) {
        name = newName;
    }
}
```

As with any other language, methods (or functions, if you are here from JS world) are used often for their modularity and reusability.

Methods often serve many purposes such as updating information in an object or providing data back to the caller. Here are some examples.

```java
public class Car {
    private int numberOfWheels;
    
    public void setNumberOfWheels(int newNumberOfWheels) {
        numberOfWheels = newNumberOfWheels;
    }
    
    public int getNumberOfWheels() {
        return numberOfWheels;
    }
}
```

In the case of `getNumberOfWheels()` the return type is `int` which is a whole number. The keyword `return` tells java to pass back the value of the instance variable `numberOfWheels`. `setNumberOfWheels(int newNumberOfWheels)` however has no return type as it is a setter method as previously seen. In this case though it takes in an argument of type `int` and makes the instance varible `numberOfWheels` equal to `newNumberOfWheels`.

There is also a special method called a constructor that allows for data to be set or operations to be performed when the class is instantiated. This constructor has no return type.

```java
public class Car {
    private String model;
    private int numberOfWheels;
    
    public Car(String model, int numberOfWheels) {
        this.model = model;
        this.numberOfWheels = numberOfWheels;
    }
}
```

The `Car` class and the `Car(String model, int numberOfWheels)` method have to have the same name in order for java to know that it is the constructor. Now anytime you instantiate a new `Car` instance with the `new` keyword you will need to call this constructor and pass in the needed data.
