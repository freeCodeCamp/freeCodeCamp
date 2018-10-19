---
title: Getters & Setters
localeTitle: 吸气者和二传手
---
# 吸气者和二传手

Getters和Setter用于有效保护您的数据，尤其是在创建类时。对于每个实例变量，getter方法返回其值，而setter方法设置或更新其值。吸气剂和固定剂也分别称为存取器和变换器。

按照惯例，getter以get开头，后跟变量名，变量名的第一个字母大写。 Setter以set开头，后跟变量名，变量名的第一个字母大写。

**_例：_**

```java
public class Vehicle { 
  private String color; 
 
  // Getter 
  public String getColor() { 
  return color; 
  } 
 
  // Setter 
  public void setColor(String c) { 
  this.color = c; 
  } 
 } 
```

getter方法返回属性的值。 setter方法接受一个参数并将其分配给属性。

一旦定义了getter和setter，我们就在main中使用它：

```java
public stativ void main(String[] args) { 
  Vehicle v1 = new Vehicle(); 
  v1.setColor("Red"); 
  System.out.println(v1.getColor()); 
 } 
 
 // Outputs "Red" 
```

* * *

Getters和setter允许控制值。在实际设置值之前，您可以在setter中验证给定值。

## 为什么吸气和安装？

通过使用getter和setter，程序员可以控制如何访问和更新其重要变量，例如更改指定范围内变量的值。考虑以下setter方法的代码：

```java
public void setNumber(int num) { 
    if (num < 10 || num > 100) { 
        throw new IllegalArgumentException(); 
    } 
    this.number = num; 
 } 
```

这可确保number的值始终设置在10到100之间。如果程序员允许直接更新变量号，则调用者可以为其设置任意值：

```java
obj.number = 3; 
```

这违反了该变量的值范围从10到100的约束。由于我们不希望发生这种情况，因此将变量号隐藏为私有并使用setter会阻止它。 另一方面，getter方法是外界读取变量值的唯一方法：

```java
public int getNumber() { 
    return this.number; 
 } 

```