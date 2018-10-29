---
title: Checking for Equality
localeTitle: 检查平等
---
# 检查平等

在Java中，有两种方法可以检查两个变量是否“相同”： `==`和`.equals()` 。但是，这两种方法的工作方式不同。

## `==`运算符

Java中的基本相等操作， `==`与`var1 == var2` ，检查`var1`和`var2`是否指向同一个_对象引用_ 。 也就是说，如果`var1`与内存中的类的_实例_与`var2` ，则`var1 == var2`为true。

但是，如果将`var1`和`var2`创建为类的两个单独实例（即使用`new`关键字），则`var1 == var2`将为false。即使两个对象碰巧包含完全相同的属性和值， `==`比较也不会通过，因为它们不指向内存中的同一对象。

对于原始变量类型，例如`int`和`double` ， `==`运算符总是可以用于检查相等性，因为它们的值直接与变量一起存储（而不是作为对内存中另一个槽的引用）。

```java
int var1 = 1; 
 int var2 = 1; 
 System.out.println(var1 == var2) // true 
 
 MyObject obj1 = new MyObject(); 
 MyObject obj2 = obj1; 
 MyObject obj3 = new MyObject(); 
 
 System.out.println(obj1 == obj2) // true 
 System.out.println(obj1 == obj3) // false 
 System.out.println(obj2 == obj3) // false 
```

## `.equals()`方法

Java中的内置`Object`类（所有其他类自动扩展）包含许多有用的内置方法。一种这样的方法是`equals()` ，它将另一个对象作为其参数，并根据该类的相关逻辑返回两个对象是否应被视为“相等”。

'String'类是覆盖'equals（）'方法的类的最常见示例之一。当比较两个'String'是否相等时，你需要使用'equals（）'方法，因为'=='将无法正常工作。

```java
String s1 = "Bob"; 
 String s2 = "ob"; 
 s2 = "B" + s2; //s2 now is also "Bob" 
 System.out.println(s1 == s2); //false 
 System.out.println(s1.equals(s2)); //true 
```

在Java中创建新类时，通常需要覆盖`equals()`方法，以便提供更有意义的方法来比较同一个类的两个对象。如何实现此方法完全取决于开发人员的判断。

例如，如果两个`Person`的`name`和`dateOfBirth`相同，则可以认为这两个`Person`应被视为“相等”。这个逻辑将在你的`Person`类的`equals()`方法中实现：

```java
public class Person { 
    public String name; 
    public Date dateOfBirth; 
 
    public boolean equals(Person person) { 
        return this.name.equals(person.name) && this.dateOfBirth.equals(person.dateOfBirth); 
    } 
 } 
```

Java中的大多数内置类以及流行库提供的类将以有意义的方式实现`equals()`方法。

例如， `java.util.Set`接口指定`Set`的`equals()`方法将返回true，如果“指定的对象也是一个集合，两个集合具有相同的大小，并且包含指定集合的​​每个成员在这套“。

但是，如果一个类没有覆盖默认的`equals()`实现，那么将应用默认实现，它只使用`==`运算符来比较这两个对象。