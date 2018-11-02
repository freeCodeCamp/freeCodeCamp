---
title: Variables
localeTitle: 变量
---
# 变量

变量存储值。它们是用于在程序中存储文本，数字等数据的最基本实体。

在[Java中](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Java) ，变量是[_强类型的_](https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_.22strong.22_or_.22weak.22) ，这意味着每当声明变量时都必须为每个变量定义类型。否则，编译器将在[编译时](https://en.wikipedia.org/wiki/Compile_time)抛出错误。因此，每个变量都具有以下之一的关联“ [数据类型](https://guide.freecodecamp.org/java/data-types) ”：

*   基元类型： `int` ， `short` ， `char` ， `long` ， `boolean` ， `byte` ， `float` ， `double`
*   包装类型： `Integer` ， `Short` ， `Char` ， `Long` ， `Boolean` ， `Byte` ， `Float` ， `Double`
*   参考类型： `String` ， `StringBuilder` ， `Calendar` ， `ArrayList`等。

您可能已经注意到， **包装类型**的拼写类型与**原始类型**完全相同，但开头的大写字母除外（如**参考类型** ）。这是因为包装类型实际上是更一般的参考类型的一部分，但通过[自动装箱和拆箱](https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html)与它们的原始对应物_紧密相关_ 。现在，您只需要知道存在这样的“包装类型”。

通常，您可以按照以下语法_声明_ （即创建）变量：< _data-type_ > < _variableName_ >;

```java
// Primitive Data Type 
 int i; 
 
 // Reference Data Type 
 Float myFloat; 
```

您可以将已声明之后或同时，当你宣布它（被称为_初始化_ ）代码_赋值_给变量，或任何地方。 symbol **\=**用于相同的。

```java
// Initialise the variable of Primitive Data Type 'int' to store the value 10 
 int i = 10; 
 double amount = 10.0; 
 boolean isOpen = false; 
 char c = 'a'; // Note the single quotes 
 
 //Variables can also be declared in one statement, and assigned values later. 
 int j; 
 j = 10; 
 
 // initiates an Float object with value 1.0 
 // variable myFloat now points to the object 
 Float myFloat = new Float(1.0); 
 
 //Bytes are one of types in Java and can be 
 //represented with this code 
 int byteValue = 0B101; 
 byte anotherByte = (byte)0b00100001; 
```

从上面的例子可以看出，Primitive类型的变量与Reference（＆Wrapper）类型的变量的行为略有不同 - 而Primitive变量_存储_实际值，Reference变量_指的_是包含实际值的'object'。 您可以在下面链接的部分中找到更多信息。

# 其他资源

*   [数据类型](https://guide.freecodecamp.org/java/data-types)
*   [类和对象](https://guide.freecodecamp.org/java/classes-and-objects)