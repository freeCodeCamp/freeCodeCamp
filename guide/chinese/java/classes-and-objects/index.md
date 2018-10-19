---
title: Classes and Objects
localeTitle: 类和对象
---
# 类和对象

类是变量和操作的组。一个类可以有变量，方法（或函数）和构造函数（或者用于启动的方法，稍后会有更多内容！）。

类可以包含以下任何变量类型。

*   类变量：这些是使用static关键字在任何方法之外在类定义中声明的变量。类变量在类的所有实例之间共享。类变量也称为静态变量，它们在编译类时只初始化一次，因此只有一个副本可用于所有实例。
*   实例变量：与类变量的不同之处在于，实例变量在类构造函数中初始化，并且不在所有对象之间共享。在实例化时，创建实例变量的新副本。

```java
public class Example { 
 
    private static int myVar = 1; // Class Variable 
 
    private int mySecondVar; // Instance Variable 
    Example(int mySecondVar) { 
            this.mySecondVar = mySecondVar; // An instance variable must be initialized inside the constructor 
```

将`Class`视为创建具体事物的蓝图。一个`Class`告诉你如何`instantiated`所述类的`object`的'what'和'how'。从本质上讲，它定义了以下情况下汽车的`properties` （比如颜色，发动机容量）和`behavior` （停止，加速，换档，鸣喇叭等）。

对象是类的_实例_ 。所有对象都是某个类的实例。想象一个类是一个“模板”，每个Object都会从中复制。在创建Object时，它基本上会在类的蓝图上创建一个新对象。现在让我们在一小段代码中看一下：

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

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJZP/0)

因此， `Car`是一个类，它具有字段或属性`name`和`manufacturerName` 。 `modelS`是`Car`类的一个对象。因此`modelS`也具有相同的属性和方法。

确保对象的“信息”（在本例中为`manufacturerName`变量的`name`是私有的并且只能通过这些getter和setter访问是非常标准的。这可以防止调试涉及对象成员变量的代码的问题。如果成员变量是公共的，并且由于任何原因程序崩溃，您可能会得到一个相当复杂的堆栈跟踪，可能很难指出错误。保持变量私有，并且只能通过getter和setter访问，这将简化此错误消息。