---
title: Abstract Classes in Java
localeTitle: Java中的抽象类
---
让我们讨论抽象类。在深入学习本教程之前，最好先了解一下类的概念 和继承。

抽象类是可以子类化（即扩展）但不能实例化的类。您可以将它们视为接口的**类版本** ，或者作为附加到方法的实际代码的接口。

请考虑以下示例来理解抽象类： 您有一个类Vehicle，它定义机器应具有的某些基本功能（方法）和某些组件（对象变量），以归类为车辆。您无法创建Vehicle的对象，因为车辆本身就是一个抽象概念。但是，您可以扩展车辆类的功能以创建汽车或摩托车。

```java 
抽象类车辆 { //用于声明no的变量。在车辆中的车轮 私人车轮;
//变量用于定义所用电机的类型 私人电机;
//一个只声明但不定义开头的抽象方法 
//功能因为每辆车都使用不同的启动机制 
  abstract void start（）; 
}

公共类汽车扩展车辆 { ... }

公共类摩托车扩展车辆 { ... }
```
```
You cannot create an object of Vehicle class anywhere in your program. You can however, extend the abstract vehicle class and create objects of the child classes; 
```

```java
车辆newVehicle = new Vehicle（）; //无效 车辆车=新车（）; //有效 车辆mBike =新摩托车（）; //有效

Car carObj = new Car（）; //有效 摩托车mBikeObj =新摩托车（）; //有效 
```
