---
title: Inheritance
localeTitle: 遗产
---
# 遗产

继承允许您创建扩展或修改现有类的类。这可以用于创建派生自其他类的类。

# 基类和派生类

这些是引用继承时用于类的术语。派生类继承基类，以及基类使用的任何变量，函数或进程。然后，派生类可以拥有自己的变量和函数，以及它从基类继承的变量和函数。

例如，'Animal'的Base类可以具有派生类'Dog'。 Animal类将包含与动物有关的特征，而Dog类包含狗特有的特征。当Dog类继承Animal类时，它将能够引用与动物相关的特征和狗特有的特征。

# 继承规则

继承是一种方式。基类不继承派生类的功能。

继承是传递性的。 “动物”的基类可以有一个派生类'狗'，这可以有一个派生类'梗'。 Terrier类将继承Dog类和Animal类的功能。

# `:`符号

在C＃中`:`符号用于表示继承。在创建派生类时调用此方法。

## 例

# 基类
```
public class Animal 
 { 
    public int ID; 
    public string title; 
    public enum phylum; 
    public enum dietType; 
 
        public DefineAnimal(int id, string name, enum phy, enum diet) 
    { 
        this.ID = id; 
        this.title = name; 
        this.phylum = phy; 
        this.dietType = diet; 
    } 
 } 
```

# 派生班
```
public class Dog : Animal 
 { 
    public enum breed; 
    public int levelOfTraining; 
 
    public void SayWoof() 
    { 
        Console.WriteLine("Woof"); 
    } 
 } 

```