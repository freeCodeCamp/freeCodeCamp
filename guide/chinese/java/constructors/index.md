---
title: Constructors
localeTitle: 构造函数
---
如果一个对象从一个类复制，那有什么意义呢？我应该能够将数据存储在其中吗？

那时我们使用**getter** （例如，getName（））/ **setter** （例如，setName（））方法，或者在本例中使用构造函数来初始化类。基本上，每个Java类都有一个构造函数，它是在初始化类的任何对象时首先调用的方法。可以把它想象成一些入门代码。

当您编写没有任何构造函数的类时，Java编译器会创建一个默认构造函数：

```java
public class Car { 
    private String name; 
 } 
 
 Car modelS = new Car(); 
```

这种没有参数的初始化是一种调用默认构造函数的方法。您也可以使用这种方式编写默认构造函数：

```java
public class Car { 
    private String name; 
 
    // User Specified Default Constructor 
    public Car() { 
        name = "Tesla"; 
    } 
 } 
```

然后，当调用`new Car()` ，变量`name`自动初始化为Carla对象的该实例的“Tesla”。

显然，构造函数与它们完全一样：它们用于`construct` ie，实例化特定类的对象。  
构造函数看起来类似于方法声明，但在它们的意义上略有不同：

1.  被命名与该类完全相同。
2.  没有返回类型。

因此，使用`constructors`的目的是提供：

1.  一种实例化对象的方法。
2.  为对象属性提供初始值。
3.  控制对象的创建方式。

让我们看另一个例子。比如说，本田（汽车制造商）希望所有汽车都被命名为`Honda <a name>` 。为了强制执行此操作，我们可以使用如下类来表示：

```java
public class Car { 
 
    private String name; 
 
    // Constructor. 
    public Car(String model){ 
        this.name = "Honda " + model; 
    } 
 
    public String getName(){ 
        return this.name; 
    } 
 
    public static void main(String args[]){ 
        Car car = new Car("Civic"); 
        System.out.println( car.getName() ); 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CTJ4/1)

请注意，当我们以这种方式编写构造函数（即提供参数）时，我们控制（第3点） `Car`实例的创建方式。简而言之，我们在这个例子中说， **你必须提供一个模型名称才能获得Car类的实例** 。

为什么这很重要？有时您希望在整个应用程序中使用`one and only one`类的实例。实现此目的的一种方法是使用`private`构造函数。

假设您需要一个班级来代表银行。您不希望人们创建`Bank`实例。所以，你设计你的课程：

```java
public class Bank { 
 
    private static Bank instance; 
 
    private Bank(){ 
    } 
 
    public static Bank getInstance(){ 
        if(null == instance){ 
            instance = new Bank(); 
        } 
        return instance; 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CTJz/0)

请注意，构造函数是`private` 。这强制了这样一个事实，即不允许其他人创建银行的实例。  
事实上，如果在另一个班级，你尝试：

```java
Bank account = new Bank(); // Throws a compilation error: Bank() has private access in Bank. 
```

因此，获取实例访问权限的唯一方法是使用`Bank.getInstance()` 。这样的实例称为`Singleton`因为在应用程序的整个生命周期中，您只能获得一个实例（每个VM都是精确的）。

一个类中可以有许多构造函数。但它们应该在方法参数上有所不同。这是构造函数重载。确切地说，我们说当有两个或多个具有相同名称但方法参数不同的构造函数时，会发生构造函数重载。因此，这两个函数具有不同的方法签名，并且被Java视为完全不同的构造函数。例如：

```java
public class Car { 
 
    private String name; 
    private String carType; 
 
    // Constructor. 
    public Car(){ 
        this.name = "No Name"; 
        this.carType = "No Type"; 
    } 
    public Car(String model){ 
        this.name = "Honda " + model; 
    } 
 
    public Car(String model, String carType){ 
        this.name = model; 
        this.carType = carType; 
    } 
 
    public String getName(){ 
        return this.name; 
    } 
 
    public String getCarType(){ 
        return this.name; 
    } 
 
    public static void main(String args[]){ 
        Car car = new Car("Civic"); 
        System.out.println( car.getName() ); 
 
        // Other Way To Initialize 
        Car car = new Car("Civic","Sedan"); 
        System.out.println( car.getName() + " "+ car.getCarType() ); 
 
    } 
 } 
```

因此，获取实例访问权限的唯一方法是使用`Bank.getInstance()` 。这样的实例称为`Singleton`因为在应用程序的整个生命周期中，您只能获得一个实例（每个VM都是精确的）。

## 复制构造函数

复制构造函数是一个构造函数，它通过使用先前创建的同一类的对象初始化它来创建对象。复制构造函数用于 -

1.  从另一个相同类型的对象初始化。
2.  复制对象以将其作为参数传递给函数。
3.  复制对象以从函数返回它。 这是一个程序，它显示了复制构造函数的简单用法：

```Java
class Complex { 
 
    private double re, im; 
 
    // A normal parametrized constructor 
    public Complex(double re, double im) { 
        this.re = re; 
        this.im = im; 
    } 
 
    // Copy constructor 
    Complex(Complex c) { 
        System.out.println("Copy constructor called"); 
        re = c.re; 
        im = c.im; 
    } 
 
    } 
 } 
```

[运行完整的代码](https://repl.it/MwnJ)

// ##构造函数链接