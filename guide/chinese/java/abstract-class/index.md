---
title: Abstract Classes in Java
localeTitle: Java中的抽象类
---
让我们讨论抽象类。在深入学习本教程之前，最好先了解一下类的概念 和继承。

抽象类是可以子类化（即扩展）但不能实例化的类。您可以将它们视为接口的**类版本** ，或者作为方法中有具体代码的接口。

请考虑以下示例来理解抽象类： 您有一个类Vehicle，它定义机器应具有的某些基本功能（方法）和某些组件（对象变量），以归类为车辆。您无法创建Vehicle的对象，因为车辆本身就是一个抽象概念。但是，您可以扩展车辆类的功能以创建汽车或摩托车。

``` java
abstract class Vehicle
{
  //用于声明汽车轮胎数量的变量
  private int wheels;
  
  //用于定义发动机类型的变量
  private Motor motor;
 
  //抽象方法仅声明启动方法但不定义启动功能
  //应为每个汽车有不同的启动机制
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

你不可以在你程序中创建Vehicle类的对象，但是你可以继承Vehicle类并且创建自类的对象。

```java 
抽象类车辆 { //用于声明no的变量。在车辆中的车轮 私人车轮;
//变量用于定义所用电机的类型 私人电机;
//一个只声明但不定义开头的抽象方法 
//功能因为每辆车都使用不同的启动机制 
  abstract void start（）; 
}

``` java
Vehicle newVehicle = new Vehicle();    // 无效
Vehicle car = new Car();  // 有效
Vehicle mBike = new Motorcycle();  // 有效
Car carObj = new Car();  // 有效
Motorcycle mBikeObj = new Motorcycle();  // 有效
```

