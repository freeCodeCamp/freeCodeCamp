---
title: Defining Attributes
localeTitle: 定义属性
---
## 定义属性

类具有属性和方法。属性基本上是类中的变量。

**_例：_**

```java
public class Vehicle { 
  int maxSpeed; 
  int wheels; 
  String color; 
 
  void horn() { 
    System.out.println("Beep beep!"); 
  } 
 } 
```

`maxSpeed` ， `wheels`和`color`都是Vehicle类的属性，而`horn()`是唯一的方法。

### 创建对象

我们可以创建Vehicle类的多个对象，并使用点语法来访问它们的属性和方法。

```java
class MyClass { 
  public static void main(String[] args) { 
    Vehicle v1 = new Vehicle(); 
    Vehicle v2 = new Vehicle(); 
    v1.color = "red"; 
    v2.horn(); 
  } 
 } 
```

### 可见性修饰符

在上面的Vehicle示例中，声明属性时没有可见性修饰符（例如public，private或protected）。如果属性延迟中不包含修饰符，则默认为“package private”，这意味着可以使用“。”直接访问该属性。由同一包中的任何其他类的点表示法。

'public'变量可以从任何类访问 “protected”变量可以由同一个包中的任何类访问，也可以由具有父子关系的任何其他包中的子类访问 'private'变量只能在声明它们的类中访问 'package private'成员可以通过同一个包中的类访问

'public'，变量，方法，构造函数和类（只有一个）可以声明为public。 'protected'，变量，方法和构造函数可以声明为private，但不能声明为类和接口。 'private'，变量，方法和构造函数可以声明为private，但不能声明为类和接口。 'default'，变量，方法，构造函数和类可以是默认类型（通过不写任何东西来声明）。

#### public> protected> default> private（基于易于访问性）

将类的所有属性设为私有通常是一个好主意，并通过使用“getter”和“setter”方法来控制对它们的访问。