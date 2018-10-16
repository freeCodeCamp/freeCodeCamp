---
title: Methods
localeTitle: 方法
---
# 方法

Java中最容易识别的方法可能是`public static void main(String[]args)` ，其中`public`表示用户可以访问该方法， `static`表示该方法基于“类”而不是“实例”， `void`表示没有任何东西会从方法返回到另一个（更高级别）方法，而`main`是这个特定方法的名称。

`getName()`和`getManufacturerName()`是我们在这里使用的两个“Getter”方法。通常，Java中的方法包含以下部分 -

*   Access Modifer（可选） - `public` ， `private`或`protected` 。如果省略，则默认为package private
*   返回类型 - 这是必需的，它表示方法返回的值，如果没有返回任何值，则返回`void`
*   方法名称 - 遵循camelCase约定
*   参数列表 - 参数列表及其名称和类型，如果没有接受参数，则为空
*   方法体被`{ }`包围

方法也可以选择使用`static`关键字，这意味着它与类本身相关联，而不是类的实例，ex - `public static void main()` 。

请注意，与JavaScript不同，我们**必须**定义我们编写的任何方法的返回类型，否则它将在编译时失败。如果您不希望方法返回任何内容，请使用`void` return type。

每个方法都有一个签名，它是数据类型，名称和方法所用参数数量的组合。在`public static void main`该方法没有指定的数据类型，而是使用`void`来声明不返回任何数据。在名为`public static double ave(double val, double val)`的方法中，数据类型为“double”（0.0），名称为“ave”（平均值），方法采用2个参数。每种方法都**必须**具有唯一的签名。

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

参数可以传递给方法。参数在括号内的方法名称后面声明。 参数声明的语法是\[数据类型\] \[名称\]。

```java
public class Car { 
    private String name; 
 
    public void changeName(String newName) { 
        name = newName; 
    } 
 } 
```

与任何其他语言一样，方法（或函数，如果您来自JS世界）经常用于其模块化和可重用性。

方法通常用于许多目的，例如更新对象中的信息或将数据提供给调用者。这里有些例子。

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

在`getNumberOfWheels()`的情况下，返回类型是`int` ，它是整数。关键字`return`告诉java传回实例变量`numberOfWheels`的值。然而， `setNumberOfWheels(int newNumberOfWheels)`没有返回类型，因为它是如前所述的setter方法。在这种情况下，虽然它接受`int`类型的参数并使实例变量`numberOfWheels`等于`newNumberOfWheels` 。

还有一种称为构造函数的特殊方法，允许在实例化类时设置数据或执行操作。此构造函数没有返回类型。

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

`Car`类和`Car(String model, int numberOfWheels)`方法必须具有相同的名称，以便java知道它是构造函数。现在，只要您使用`new`关键字实例化新的`Car`实例，就需要调用此构造函数并传入所需的数据。