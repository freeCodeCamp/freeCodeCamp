---
title: Inheritance Basics
localeTitle: 继承基础
---
# 继承基础

你成功创建了一个Car类，真是太棒了。但是，等等，特斯拉汽车应该是电动车？我想要一个电动车类，但它也应该具有原始`Car`类的属性。

解决方案： **继承** 。 Java提供了一种“继承”父属性的简洁方法：

```java
public class Car { 
 
    private String name; 
    private String manufacturerName; 
 
    public Car(String name, String man) { 
        this.name = name; 
        this.manufacturerName = man; 
    } 
    // Getter method 
    public String getName() { 
        return name; 
    } 
    // Getter method 
    public String getManufacturerName() { 
        return manufacturerName; 
    } 
 } 
 
 public class ElectricCar extends Car { 
 
    public ElectricCar(String name, String man) { 
        super(name, man); 
    } 
 
    public void charge() { 
     System.out.println("Charging ..."); 
    } 
 } 
 
 ElectricCar modelS = new ElectricCar("Model S","Tesla"); 
 // prints Tesla 
 System.out.println(modelS.getManufacturerName()); 
 // prints Charging ... 
 modelS.charge(); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJZY/0)

在这里看，类`ElectricCar`从`Car`类继承或`extends`公共方法，并且有自己的方法和属性。传递信息的酷方式！

另请注意这里使用[super](https://docs.oracle.com/javase/tutorial/java/IandI/super.html)关键字。由于我们的`Car`类有一个构造函数，所以我们也必须从子类初始化该构造函数。我们使用`super`关键字来做到这一点。阅读更多关于继承的信息 。