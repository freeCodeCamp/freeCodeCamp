---
title: Inheritance
localeTitle: 遗产
---
# 遗产

Java继承是指Java类从其他类`inherit`属性的能力。可以把它想象成一个从父母那里继承属性的孩子，这个概念非常相似。在Java lingo中，它也被称为_扩展_类。一些简单的事情要记住：

*   扩展或继承的**类**称为**子类**
*   正在扩展或继承的**类**称为**超类**

因此，继承为Java提供了_重用_代码或在类之间共享代码的强大功能！

让我们用`Vehicle`类和`Car`类的经典示例来描述它：

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

在这里，我们可以看到`Car`类继承了`Vehicle`类的属性。因此，我们不必为`Car`的方法`start()`和`stop()`编写相同的代码，因为这些属性可以从其父类或超类中获得。因此，从`Car`类创建的对象_也_将具有这些属性！

```java
Car tesla = new Car(); 
 
 tesla.start(); 
 
 tesla.stop(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJXz/0)

但是，父类是否有孩子的方法？不，它没有。

因此，每当您需要在多个类之间共享一些共同的代码时，最好有一个父类，然后在需要时扩展该类！减少代码行数，使代码模块化，并简化测试。

## 什么可以继承？

*   来自父级的所有`protected`和`public`字段和方法

## 什么不能继承？

*   `private`领域和方法
*   构造函数。虽然，子类构造函数_必须_调用超类构造函数（如果已定义）（稍后详细说明！）
*   多个班级。 Java仅支持**单继承** ，也就是说，您一次只能继承一个类。
*   场。子类不能覆盖类的各个字段。

## 输入铸造和参考

在Java中，可以引用子类作为其超类的_实例_ 。它被称为面向对象编程（OOP）中的_多态_ ，即对象采用多种形式的能力。例如，可以将`Car`类对象引用为`Vehicle`类实例，如下所示：

```java
Vehicle car = new Car(); 
```

虽然相反是不可能的：

```java
Car car = new Vehicle(); // ERROR 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJYB/0)

由于您可以将Java子类作为超类实例引用，因此可以轻松地将子类对象的实例强制转换为超类实例。可以将超类对象强制转换为子类类型，但_前提是该对象实际上是子类的实例_ 。所以请记住这一点：

```java
Car car = new Car(); 
 Vehicle vehicle = car; // upcasting 
 Car car2 = (Car)vechile; //downcasting 
 
 Bike bike = new Bike(); // say Bike is also a subclass of Vehicle 
 Vehicle v = bike; // upcasting, no problem here. 
 Car car3 = (Car)bike; // Compilation Error : as bike is NOT a instance of Car 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJYM/0)

现在您知道如何通过父子关系共享代码。但是，如果你不喜欢子类中特定方法的实现并想为它编写一个新方法呢？那你怎么办呢？

## 覆盖它！

Java允许您_覆盖_或重新定义超类中定义的方法。例如，您的`Car`类具有与父`Vehicle`不同的`start()`实现，因此您执行此操作：

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJYZ/1)

因此，覆盖子类中的方法非常简单。虽然，有一个_陷阱_ 。只有具有与子类方法_完全相同的方法签名_的超类方法才会被覆盖。这意味着子类方法定义必须具有完全相同的名称，相同数量和类型的参数，并且具有完全相同的顺序。因此， `public void start(String key)`不会覆盖`public void start()` 。

**备注** ：

*   您不能覆盖超类的私有方法。 （很明显，不是吗？）
*   如果您在子类中重写的超类方法突然被删除或方法改变了怎么办？它会在运行时失败！因此，Java为您提供了一个漂亮的注释`@Override` ，您可以将其放在子类方法上，这将警告编译器这些事件！

Java中的注释是一种很好的编码实践，但它们并不是必需的。编译器足够智能，可以自行解决覆盖问题。与其他OOP语言不同，Java中的注释不一定会修改方法或添加额外的功能。

## 如何调用超类方法？

有趣的你问一下！只需使用关键字`super` ：

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJY4/0)

**注意** ：尽管可以使用`super`调用来调用父方法，但是不能使用链式`super`调用来继承继承层次结构。

## 如何知道班级的类型？

使用`instanceof`关键字。拥有大量的类和子类，知道哪个类是运行时哪个类的子类会有点混乱。因此，我们可以使用`instanceof`来确定对象是类的实例，子类的实例还是接口的实例。

```java
Car car = new Car(); 
 
 boolean flag = car instanceof Vehicle; // true in this case! 
```

## 构造函数和继承

如前所述，构造函数不能由子类直接继承。虽然，子类_需要_将其父构造函数作为其自己的构造函数中的[第一个操作](http://stackoverflow.com/questions/1168345/why-does-this-and-super-have-to-be-the-first-statement-in-a-constructor)来调用。怎么样？你猜对了，用`super` ：

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

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJY8/0)

请记住，如果超类没有定义任何构造函数，则不必在子类中明确地调用它。 Java在内部为您处理！在使用除_默认构造_函数之外的任何其他构造函数调用超类的情况下，调用`super`构造_函数_ 。

如果没有定义其他构造函数，那么Java将调用默认的超类构造函数（ _即使未明确定义_ ）。

恭喜，现在你对继承了解一切！阅读有关在Abstract Classes和[Interfaces中](//forum.freecodecamp.com/t/java-docs-interfaces)继承事物的高级方法的更多信息！