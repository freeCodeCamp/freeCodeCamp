---
title: Final
localeTitle: 最后
---
## 最后

您使用`final`关键字来标记变量常量，以便只能分配一次。因此，您必须使用值初始化最终变量。如果未初始化（在声明时，在Constructor内部或内部静态块中），将发生编译时错误。

**_例：_**

```java
class MyClass { 
  public static final double PI = 3.14; 
  public static void main(String[] args){ 
    System.out.println(PI); 
  } 
 } 
```

PI现在是一个常数。任何为其赋值的尝试都会导致错误。

* * *

如果您将任何方法设为最终方法，则无法覆盖它。

```java
class Bike{ 
  final void run(){System.out.println("running");} 
 } 
 
 class Honda extends Bike{ 
   void run(){System.out.println("running safely with 100kmph");} 
 
   public static void main(String args[]){ 
   Honda honda= new Honda(); 
   honda.run(); 
   } 
 } 
```

输出将是 - 输出：编译时错误

* * *

如果您将任何课程作为最终成绩，则无法对其进行扩展。

```java
final class Bike{} 
 
 class Honda1 extends Bike{ 
  void run(){System.out.println("running safely with 100kmph");} 
 
  public static void main(String args[]){ 
  Honda1 honda= new Honda(); 
  honda.run(); 
  } 
 } 
```

输出将是 - 输出：编译时错误